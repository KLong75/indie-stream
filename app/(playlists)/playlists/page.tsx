// import from next
import Link from "next/link";
// get data
import { getAllPlaylists } from "@/app/lib/data";


export default async function Page() {
  const playlists = await getAllPlaylists();
  // console.log("playlists", playlists);

  return (
    <div>
      <h1 className="p-4">Playlists</h1>
      <ul className="p-4">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="p-4 cursor-pointer">
            <Link href={`/playlists/${playlist.id}`}>{playlist.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}