// import auth
import { auth } from "@/auth";
// import data
import { getReleaseById, getSongById, getArtistById } from "@/lib/data";
// import actions
import { saveSong, saveRelease } from "@/lib/actions";
// import definitions
import { Song, Release, Artist } from "@/lib/definitions";
// import from next
import Image from "next/image";
import Link from "next/link";
// import components
import SaveAndRemoveButton from "@/ui/save-remove-button";
import SongList from "@/ui/song-list";
// import BackToLink from "@/ui/back-to-link";
// import icons
import { RxPlus } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const session = await auth();
  console.log("Session in Songs Page:", session);
  const user = session?.user;
  const userId = user?.id || undefined;
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
  // console.log("Release Songs: ", releaseSongs);
  if (!release) {
    return <div>Release not found</div>;
  } else {
    return (
      <div>
        {/* <div className="p-2">
          <BackToLink href="/releases" label="All Releases" />
        </div> */}
        <h1 className="p-4 text-center text-xl font-bold">{release.title}</h1>

        <h2 className="px-4">
          Artist:{" "}
          <Link href={`/artists/${artistId}`} className="text-white underline">
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
          <ul>
            <SongList
              songs={releaseSongs.filter((song): song is Song => song !== null)}
              artists={artist ? [artist] : []}
              releases={release ? [release] : []}
              placeholder=""
              userId={userId}
              action={saveSong}
              minimal={true}
            />
          </ul>
        </div>
      </div>
    );
  }
}
