// import from next
import { redirect } from "next/navigation";
// import auth
import { auth } from "@/auth";
// import data
import { getUserById, getArtistById, getAllArtists } from "@/lib/data";
// import actions
import { saveArtist, removeSavedArtist } from "@/lib/actions";
// import definitions
// import { Artist } from "@/app/lib/definitions";
// import components
import ArtistList from "@/ui/artist-list";

export default async function Page() {
  const userId = (await auth())?.user?.id;
  if (!userId) {
    redirect("/");
  }
  const artists = await getAllArtists();
  let userSavedArtists: string[] = [];
  const userData = await getUserById(userId);
  if (userData) {
    userSavedArtists = userData.saved_artists || [];
  }

  return (
    <div className="flex flex-col">
      <h2 className="p-4">All Artists</h2>
      <div className="p-4">
        <ArtistList 
          artists={artists} 
          placeholder="Search all artists..." 
          userId={userId}
          action={saveArtist}
          removeAction={removeSavedArtist}
          savedArtists={userSavedArtists}
        />
      </div>
    </div>
  );
}
