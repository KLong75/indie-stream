// import data
import { 
  getAllSongs, 
  getAllArtists, 
  getAllReleases 
} from "@/lib/data";
import SongList from "@/ui/song-list";

export default async function Page() {
  const songs = await getAllSongs();
  const artists = await getAllArtists();
  const releases = await getAllReleases();

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-4 text-center">All Songs</h2>
      <SongList songs={songs} artists={artists} releases={releases} />
      {/* <pre>{JSON.stringify(songs, null, 2)}</pre> */}
    </div>
  );
}