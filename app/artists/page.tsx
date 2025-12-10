// import from next
// import Link from "next/link";
// import Image from "next/image";
// get data
import { getArtistById, getAllArtists } from "@/lib/data";
// import definitions
// import { Artist } from "@/app/lib/definitions";
// import components
import ArtistList from "@/ui/artist-list";

export default async function Page() {
  const artists = await getAllArtists();
  console.log("artists", artists);

  // artists.forEach((artist) => {
  //   getArtistById(artist.id);
  //   // console.log("artist", artist);
  // });

  // const artistsAlphbetized = artists.sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // );

  return (
    <div className="flex flex-col">
      <h1 className="p-4">Artists</h1>
      <div className="p-4">
        <ArtistList artists={artists} placeholder="Search all artists..." />
      </div>
    </div>
  );
}
