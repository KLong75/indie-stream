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
  const numberOfArtists = artists.length;
  let userSavedArtists: string[] = [];
  const userData = await getUserById(userId);
  if (userData) {
    userSavedArtists = userData.saved_artists || [];
  }

  return (
    <>
      <h2 className="text-lg font-bold mt-4 text-center">
        {numberOfArtists === 1
          ? "There is 1 Artist on indieStream"
          : `There are ${numberOfArtists} Artists on indieStream`}
      </h2>
      <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto p-6 justify-center">
        <ArtistList
          artists={artists}
          placeholder={`Search all ${numberOfArtists} artists on indieStream...`}
          action={saveArtist}
          removeAction={removeSavedArtist}
          savedArtists={userSavedArtists}
          userId={userId}
          isScrollable={true}
          maxHeight="40vh"
        />
      </div>
    </>
  );
}
