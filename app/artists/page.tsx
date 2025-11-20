// import from next
import Link from "next/link";
// import Image from "next/image";
// get data
import { getArtistById, getAllArtists } from "@/lib/data";
// import definitions
// import { Artist } from "@/app/lib/definitions";

export default async function Page() {
  const artists = await getAllArtists();
  // console.log("artists", artists);

  artists.forEach((artist) => {
    getArtistById(artist.id);
    // console.log("artist", artist);
  });

  const artistsAlphbetized = artists.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-col">
      <h1 className="p-4">Artists</h1>
      <ul className="p-4">
        {artistsAlphbetized.map((artist) => (
          <li key={artist.id} className="p-4 cursor-pointer">
            <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
