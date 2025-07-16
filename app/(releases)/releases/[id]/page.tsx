// import data
import { getReleaseById, getSongById, getArtistById } from "@/app/lib/data";
// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import BackToLink from "@/app/ui/back-to-link";
// import icons
import { RxPlus } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";

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
          Artist:{" "}
          <Link
            href={`/artists/${artistId}`}
            className="text-blue-500 hover:underline">
            {artist ? artist.name : "Unknown Artist"}
          </Link>
        </h2>
        <h2 className="px-4">
          Release Type:{" "}
          {release.type.charAt(0).toUpperCase() + release.type.slice(1)}
        </h2>
        {Array.isArray(release.genre) && release.genre.length > 0 && (
          <h2 className="px-4">
            {release.genre.length > 1 ? "Genres" : "Genre"}:{" "}
            {release.genre.join(", ")}
          </h2>
        )}
        {!Array.isArray(release.genre) && release.genre && (
          <h2 className="px-4">Genre: {release.genre}</h2>
        )}
        <h2 className="px-4">Year: {release.year}</h2>
        <div className="p-4">
          <Image
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
                {song ? (
                  <span>
                    {index + 1}. {song.title}
                  </span>
                ) : (
                  <span>Unknown Song</span>
                )}
                <div className="flex space-x-2">
                  <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
                    <RxPlay />
                    Play
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
                    <RxPlus />
                    Add to Playlist
                  </button>
                  <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
                    <CiSaveDown2 />
                    Save
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
