// import from next
import { redirect } from "next/navigation";
// import auth
import { auth } from "@/auth";
// import data
import {
  getAllSongs,
  getAllArtists,
  getAllReleases,
  getUserById,
} from "@/lib/data";
// import actions
import { saveSong, removeSavedSong } from "@/lib/actions";
// import components
import SongList from "@/ui/song-list";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const user = session?.user;
  const userId = user?.id || undefined;
  let savedSongs: string[] = [];
  if (userId) {
    const userData = await getUserById(userId);
    savedSongs = userData?.saved_songs || [];
  }
  const songs = await getAllSongs();
  const totalSongs = songs.length;
  const artists = await getAllArtists();
  const releases = await getAllReleases();

  return (
    <>
      <h2 className="text-lg font-bold pt-4 text-center">
        {totalSongs === 1
          ? "There is 1 Song on indieStream"
          : `There are ${totalSongs} Songs on indieStream`}
      </h2>
      <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto px-6 justify-center">
        <SongList
          songs={songs}
          artists={artists}
          releases={releases}
          placeholder={`Search all ${totalSongs} songs on indieStream...`}
          userId={userId}
          action={saveSong}
          removeAction={removeSavedSong}
          minimal={false}
          savedSongs={savedSongs}
          isScrollable={true}
          maxHeight="50vh"
        />
      </div>
    </>
  );
}
