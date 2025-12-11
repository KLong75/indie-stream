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
      <h2 className="p-4 text-center">{song.title}</h2>
      <h3 className="p-4 text-center">from the {releaseType} {songRelease?.title}</h3>
      <h3 className="p-4 text-center">by {songArtist?.name}</h3>
      
      
    </div>
  );
}