// import data
import { getReleaseById, getSongById, getArtistById } from "@/app/lib/data";
// import from next
// import Image from "next/image";
import Link from "next/link";
// import components
import BackToLink from "@/app/ui/back-to-link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const release = await getReleaseById(id);
  // if (!release) {
  //   return <div>Release not found</div>;
  // }
  const artistId =
    release && typeof release.artist === "string" ? release.artist : "";
  const artist = await getArtistById(artistId);
  console.log("Release: ", release);
  const releaseSongs = release?.songs
    ? await Promise.all(release.songs.map((song) => getSongById(song)))
    : [];
  console.log("Release Songs: ", releaseSongs);
  if (!release) {
    return <div>Release not found</div>;
  } else {
    return (
      <div>
        <div className="p-2">
          <BackToLink href="/releases" label="Back to Releases" />
        </div>
        <h1 className="p-4 text-center">{release.title}</h1>
        <h2 className="px-4">
          {" "}
          Artist: {artist ? artist.name : "Unknown Artist"}
        </h2>
        <h2 className="px-4">Release Type: {release.type}</h2>
        <h2 className="px-4">Genre(s): {release.genre}</h2>

        <div className="p-4">
          <img
            src={`https://4ykxjgur5y.ufs.sh/f/${release.cover_img_file_key}`}
            alt={release.title}
            width={200}
            height={200}
          />
        </div>
        <div className="p-4">
          <h2>Songs</h2>
          <ul>
            {releaseSongs.map((song, index) => (
              <li key={index}>
                {song ? <span>{song.title}</span> : <span>Unknown Song</span>}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="px-4">Description</h2>
        {/* <p className="p-4">{playlist.description}</p> */}
      </div>
    );
  }
}
