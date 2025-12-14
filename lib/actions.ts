"use server";

import { z } from "zod";
import postgres from "postgres";
// import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";
import { signIn, signOut } from "@/auth";
import AuthError from "next-auth";
import bcrypt from "bcrypt";
// import { sign } from "crypto";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const ListenerSignUpFormSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  passwordConfirmation: z.string(),
  user_name: z.string().min(2),
});

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const CreateUser = ListenerSignUpFormSchema.omit({
  passwordConfirmation: true,
});

export async function createUser(prevState: State, formData: FormData) {
  // Convert FormData to an object for parsing
  // const data = {
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  //   passwordConfirmation: formData.get("passwordConfirmation"),
  //   user_name: formData.get("userName"),
  //   id: crypto.randomUUID(),
  // };

  const validatedFields = CreateUser.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    user_name: formData.get("userName"),
    id: crypto.randomUUID(),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid input. Login failed.",
    };
  }

  const { email, password, user_name, id } = validatedFields.data;

  // Hash the password (recommended before storing)
  const hashedPassword = await bcrypt.hash(password, 10);

  // // Validate input
  // const parsed = ListenerSignUpFormSchema.parse(data);

  // // Check passwords match
  // if (parsed.password !== parsed.passwordConfirmation) {
  //   throw new Error("Passwords do not match.");
  // }

  // // Hash the password (recommended before storing)
  // const hashedPassword = await bcrypt.hash(parsed.password, 10);

  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY,
      email TEXT NOT NULL,
      password TEXT NOT NULL,
      user_name TEXT NOT NULL
    );
  `;
  await sql`
    INSERT INTO users (id, email, password, user_name)
    VALUES (${id}, ${email}, ${hashedPassword}, ${user_name})
  `;

  const result = await signIn("credentials", {
    email: email,
    password: password,
    redirect: false,
  });

  // console.log("sign in - result:", result);

  return id;
}

// authenticate
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  // console.log("###Authenticating...###");
  try {
    // console.log("formData:", formData);
    // await signIn('credentials', formData);
    // console.log('email', formData.get("email"));
    // console.log('password', formData.get("password"));
    // console.log("TRY BLOCK - ###Signing in...###");
    const result = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false, // Prevent automatic redirects
    });

    if (result?.error) {
      console.log("CATCH BLOCK - ###Error occurred###", result.error);
      return `Error: ${result.error}`;
    }
    // console.log("###Authenticated successfully.###");

    const email = formData.get("email") as string;
    const user = await sql`SELECT * FROM users WHERE email=${email}`;
    // console.log("authorized user:", user);
    return user[0].id;

    // console.log("result", result);
    // console.log("result.user", result.user);
    // return result.user?.id; // Return the user ID
  } catch (error) {
    console.log("CATCH BLOCK - ###Error occurred###", error);
    if (error instanceof AuthError) {
      switch (error) {
        case "CredentialsSignin":
          console.log("CATCH BLOCK - ###Invalid credentials###", error);
          return "Invalid credentials.";
        default:
          console.log("CATCH BLOCK - ###Something went wrong###", error);
          return "Something went wrong.";
      }
    }
    console.log("CATCH BLOCK - ###Throwing error###");
    throw error;
  }
}

// sign out
export async function signOutUser() {
  await signOut({ redirectTo: "/" });
}

// save artist
export async function saveArtist(userId: string, artistId: string) {
  if (!userId || !artistId) {
    throw new Error("Missing userId or artistId");
  }

  try {
    await sql`
      UPDATE users
      SET saved_artists = array_append(saved_artists, ${artistId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE artists
      SET number_of_saves = number_of_saves + 1
      WHERE id = ${artistId}
    `;
    console.log("Artist saved successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error saving artist:", error);
    throw new Error("Failed to save artist");
  }
}
// save song
export async function saveSong(userId: string, songId: string) {
  if (!userId || !songId) {
    throw new Error("Missing userId or songId");
  }
  try {
    await sql`
      UPDATE users
      SET saved_songs = array_append(saved_songs, ${songId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE songs
      SET number_of_saves = number_of_saves + 1
      WHERE id = ${songId}
    `;
    console.log("Song saved successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error saving song:", error);
    throw new Error("Failed to save song");
  }
}
// save release
export async function saveRelease(userId: string, releaseId: string) {
  if (!userId || !releaseId) {
    throw new Error("Missing userId or releaseId");
  }

  try {
    await sql`
      UPDATE users
      SET saved_releases = array_append(saved_releases, ${releaseId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE releases
      SET number_of_saves = number_of_saves + 1
      WHERE id = ${releaseId}
    `;
    console.log("Release saved successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error saving release:", error);
    throw new Error("Failed to save release");
  }
}
// save playlist
export async function savePlaylist(userId: string, playlistId: string) {
  if (!userId || !playlistId) {
    throw new Error("Missing userId or playlistId");
  }

  try {
    await sql`
      UPDATE users
      SET saved_public_playlists = array_append(saved_public_playlists, ${playlistId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE playlists
      SET number_of_saves = number_of_saves + 1
      WHERE id = ${playlistId}
    `;
    console.log("Playlist saved successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error saving playlist:", error);
    throw new Error("Failed to save playlist");
  }
}

// remove saved artist
export async function removeSavedArtist(userId: string, artistId: string) {
  if (!userId || !artistId) {
    throw new Error("Missing userId or artistId");
  }
  try {
    await sql`
      UPDATE users
      SET saved_artists = array_remove(saved_artists, ${artistId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE artists
      SET number_of_saves = GREATEST(number_of_saves - 1, 0)
      WHERE id = ${artistId}
    `;
    console.log("Artist removed from saved artists successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error removing artist from saved artists:", error);
    throw new Error("Failed to remove artist from saved artists");
  }
}

// remove song from saved songs
export async function removeSavedSong(userId: string, songId: string) {
  if (!userId || !songId) {
    throw new Error("Missing userId or songId");
  }
  try {
    await sql`
      UPDATE users
      SET saved_songs = array_remove(saved_songs, ${songId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE songs
      SET number_of_saves = GREATEST(number_of_saves - 1, 0)
      WHERE id = ${songId}
    `;
    console.log("Song removed from saved songs successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error removing song from saved songs:", error);
    throw new Error("Failed to remove song from saved songs");
  }
}

// remove release from saved releases
export async function removeSavedRelease(userId: string, releaseId: string) {
  if (!userId || !releaseId) {
    throw new Error("Missing userId or releaseId");
  }
  try {
    await sql`
      UPDATE users
      SET saved_releases = array_remove(saved_releases, ${releaseId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE releases
      SET number_of_saves = GREATEST(number_of_saves - 1, 0)
      WHERE id = ${releaseId}
    `;
    console.log("Release removed from saved releases successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error removing release from saved releases:", error);
    throw new Error("Failed to remove release from saved releases");
  }
}

// remove playlist from saved playlists
export async function removeSavedPlaylist(userId: string, playlistId: string) {
  if (!userId || !playlistId) {
    throw new Error("Missing userId or playlistId");
  }
  try {
    await sql`
      UPDATE users
      SET saved_public_playlists = array_remove(saved_public_playlists, ${playlistId})
      WHERE id = ${userId}
    `;
    await sql`
      UPDATE playlists
      SET number_of_saves = GREATEST(number_of_saves - 1, 0)
      WHERE id = ${playlistId}
    `;
    console.log("Playlist removed from saved playlists successfully");
    // return { success: true };
  } catch (error) {
    console.error("Error removing playlist from saved playlists:", error);
    throw new Error("Failed to remove playlist from saved playlists");
  }
}


// increment play count
export async function incrementSongPlayCount(songId: string) {
  if (!songId) {
    throw new Error("Missing songId");
  }
  try {
    // Increment total plays
    await sql`
      UPDATE songs
      SET number_of_plays = number_of_plays + 1
      WHERE id = ${songId}
    `;

    // Get current year and month
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // JS months are 0-based

    // Track monthly plays
    await sql`
      INSERT INTO song_plays (song_id, year, month, play_count)
      VALUES (${songId}, ${year}, ${month}, 1)
      ON CONFLICT (song_id, year, month)
      DO UPDATE SET play_count = song_plays.play_count + 1
    `;

    console.log("Play count incremented successfully");
    return { success: true };
  } catch (error) {
    console.error("Error incrementing play count:", error);
    throw new Error("Failed to increment play count");
  }
}









// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   // throw new Error("Not implemented");
//   console.log("###Authenticating...###");
//   try {
//     console.log("TRY BLOCK - ###Signing in...###");
//     await signIn("credentials", formData);
//   } catch (error) {
//     if (error instanceof AuthError) {
//       switch (error) {
//         case "CredentialsSignin":
//           return "Invalid credentials.";
//         default:
//           return "Something went wrong.";
//       }
//     }
//     throw error;
//   }
//   console.log("###Authenticated successfully.###");
// }

// export async function authenticate(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   console.log("###Authenticating...###");
//   try {
//     console.log("TRY BLOCK - ###Signing in...###");
//     const result = await signIn("credentials", {
//       email: formData.get("email"),
//       password: formData.get("password"),
//       redirect: false, // Prevent automatic redirects
//     });

//     if (result?.error) {
//       console.log("CATCH BLOCK - ###Error occurred###", result.error);
//       return `Error: ${result.error}`;
//     }

//     console.log("###Authenticated successfully.###");
//     return result.user?.id;
//   } catch (error) {
//     console.log("CATCH BLOCK - ###Error occurred###", error);
//     if (error instanceof AuthError) {
//       switch (error) {
//         case "CredentialsSignin":
//           console.log("CATCH BLOCK - ###Invalid credentials###");
//           return "Invalid credentials.";
//         default:
//           console.log("CATCH BLOCK - ###Something went wrong###");
//           return "Something went wrong.";
//       }
//     }
//     console.log("CATCH BLOCK - ###Throwing error###");
//     throw error;
//   }
// }
// comment