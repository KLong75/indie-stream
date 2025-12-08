// import data
import { getAllSongs } from "@/lib/data";
// import SongList from "@/components/SongList";

export default async function Page() {
  const songs = await getAllSongs();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">All Songs</h1>
      {/* <SongList songs={songs} /> */}
      <pre>{JSON.stringify(songs, null, 2)}</pre>
    </div>
  );
}