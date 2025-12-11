export const dynamic = "force-dynamic";
// import from next
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// get data
import {
  getUserById,
  getArtistById,
  getSongById,
  getReleaseById,
  getPlaylistById,
  getAllSongs,
  getAllPublicPlaylists,
  getAllArtists,
  getAllReleases,
} from "@/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  console.log("Song ID:", id); // Debugging line
  const song = await getSongById(id);
  console.log("Fetched Song:", song);
  if (!song) {
    return <div>Song not found</div>;
  }
  const songArtist = await getArtistById(song.artist);
  const songRelease = await getReleaseById(song.release);
  const releaseType = songRelease?.type;

  return (
    <div>
      <div className="p-4 space-y-2">
        <h2 className=" text-center">{song.title}</h2>
        <h3 className="text-center">
          from the {releaseType}{" "}
          <Link href={`/releases/${songRelease?.id}`} className="underline">
            {songRelease?.title}
          </Link>
        </h3>
        <h3 className="text-center">
          by{" "}
          <Link href={`/artists/${songArtist?.id}`} className="underline">
            {songArtist?.name}
          </Link>
        </h3>
      </div>
      <div className="song-stats px-4 space-x-4 flex justify-center">
        <span>Plays: {song.number_of_plays}</span>
        <span>Saves: {song.number_of_saves}s</span>
      </div>
    </div>
  );
}
