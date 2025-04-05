// import from next
import Link from "next/link";
// import Image from "next/image";
// get data
import { getArtistById, getAllArtists } from "@/app/lib/data";
// import definitions
// import { Artist } from "@/app/lib/definitions";

export default async function Page() {
  const artists = await getAllArtists();
 // console.log("artists", artists);

  artists.forEach((artist) => {
    getArtistById(artist.id);
   // console.log("artist", artist);
  });

  return (
    <div>
      <h1 className="p-4">Artists</h1>
      <ul className="p-4">
        {artists.map((artist) => (
          <li key={artist.id} className="p-4 cursor-pointer">
            <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
