import postgres from 'postgres';
import {
  User,
  Artist,
  Song,
  Release,
  Playlist,
} from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getUserById(id: string): Promise<User | null> {
  try {
    // Use ${sql(id)} to keep the query plan consistent
    const userData = await sql<User[]>`SELECT * FROM users WHERE id = ${id}::uuid`;
    return userData[0] || null;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("An error occurred while fetching user data");
  }
}

export async function getArtistById(id: string): Promise<Artist | null> {
  try {
    const artistData = await sql<Artist[]>`SELECT * FROM artists WHERE id = ${id}`;
    return artistData[0] || null;
  } catch (error) {
    const artistData = await sql<Artist[]>`SELECT * FROM artists WHERE id = ${id}::uuid`;
    throw new Error('An error occurred while fetching artist data');
  }
}

export async function getSongById(id: string): Promise<Song | null> {
  try {
    const songData = await sql<Song[]>`SELECT * FROM songs WHERE id = ${id}`;
    return songData[0] || null;
  } catch (error) {
    const songData = await sql<Song[]>`SELECT * FROM songs WHERE id = ${id}::uuid`;
    throw new Error('An error occurred while fetching song data');
  }
}

export async function getReleaseById(id: string): Promise<Release | null> {
  try {
    const releaseData = await sql<Release[]>`SELECT * FROM releases WHERE id = ${id}`;
    return releaseData[0] || null;
  } catch (error) {
    const releaseData = await sql<Release[]>`SELECT * FROM releases WHERE id = ${id}::uuid`;
    throw new Error('An error occurred while fetching release data');
  }
}

export async function getPlaylistById(id: string): Promise<Playlist | null> {
  try {
    const playlistData = await sql<Playlist[]>`SELECT * FROM playlists WHERE id = ${id}`;
    return playlistData[0] || null;
  } catch (error) {
    const playlistData = await sql<Playlist[]>`SELECT * FROM playlists WHERE id = ${id}::uuid`;
    throw new Error('An error occurred while fetching playlist data');
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    return await sql<User[]>`SELECT * FROM users`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user data');
  }
}

export async function getAllArtists(): Promise<Artist[]> {
  try {
    return await sql<Artist[]>`SELECT * FROM artists`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist data');
  }
}

export async function getAllSongs(): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM songs`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching song data');
  }
}

export async function getAllReleases(): Promise<Release[]> {
  try {
    return await sql<Release[]>`SELECT * FROM releases`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching release data');
  }
}

export async function getAllPlaylists(): Promise<Playlist[]> {
  try {
    return await sql<Playlist[]>`SELECT * FROM playlists`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching playlist data');
  }
}

export async function getAllPublicPlaylists(): Promise<Playlist[]> {
  try {
    return await sql<Playlist[]>`SELECT * FROM playlists WHERE public = true`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching public playlist data');
  }
}

export async function getArtistSongs(artistId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM songs WHERE artist_id = ${artistId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist songs');
  }
}

export async function getReleaseSongs(releaseId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM songs WHERE release_id = ${releaseId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching release songs');
  }
}

export async function getPlaylistSongs(playlistId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM playlist_songs WHERE playlist_id = ${playlistId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching playlist songs');
  }
}

export async function getUserPlaylists(userId: string): Promise<Playlist[]> {
  try {
    return await sql<Playlist[]>`SELECT * FROM playlists WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user playlists');
  }
}

export async function getArtistReleases(artistId: string): Promise<Release[]> {
  try {
    return await sql<Release[]>`SELECT * FROM releases WHERE artist_id = ${artistId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist releases');
  }
}

export async function getUserSavedSongs(userId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM saved_songs WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user saved songs');
  }
}

export async function getUserSavedReleases(userId: string): Promise<Release[]> {
  try {
    return await sql<Release[]>`SELECT * FROM saved_releases WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user saved releases');
  }
}

export async function getUserSavedArtists(userId: string): Promise<Artist[]> {
  try {
    return await sql<Artist[]>`SELECT * FROM saved_artists WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user saved artists');
  }
}


// export async function getArtistById(arg: string | Artist): Promise<Artist | null> {
//   // If called with a string, use it directly; if called with an Artist, pull out arg.id
//   const id = typeof arg === "string" ? arg : arg.id;

//   try {
//     const artistData = await sql<Artist[]>`SELECT * FROM artists WHERE id = ${id}`;
//     return artistData[0] || null;
//   } catch (error) {
//     console.error("Database Error:", error);
//     throw new Error("An error occurred while fetching artist data");
//   }
// }