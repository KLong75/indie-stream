// export const dynamic = "force-dynamic";
// import auth
import { auth } from "@/auth";
// import from next
import { redirect } from "next/navigation";
import Link from "next/link";
// import Image from "next/image";
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
// import actions
// import { saveSong, removeSavedSong, saveRelease } from "@/lib/actions";
// import components
import SaveAndRemoveButtonClientContainer from "@/ui/client-button-container";
// import SaveAndRemoveButton from "@/ui/save-remove-button";
// import from react icons
// import { CiSaveDown2 } from "react-icons/ci";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const user = session?.user;
  const userId = user?.id || undefined;
  const userData = session && userId ? await getUserById(userId) : null;
  const userSavedSongs = userData?.saved_songs || [];
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
    <div className="p-4">
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
        <div>Plays: {song.number_of_plays}</div>
        <div>Saves: {song.number_of_saves}</div>
      </div>
      <div className="px-4 space-x-4 flex justify-center">
        <div>
          {userId && (
            // replace this with play button later
            <SaveAndRemoveButtonClientContainer
              userId={userId}
              songId={song.id}
              initiallySaved={userSavedSongs.includes(song.id)}
            />
          )}
        </div>
        <div>
          {userId && (
            <SaveAndRemoveButtonClientContainer
              userId={userId}
              songId={song.id}
              initiallySaved={userSavedSongs.includes(song.id)}
            />
          )}
        </div>
      </div>
      <div className="p-4">
        <p>Music by: {song.music_by?.join(", ") ?? "Unknown"}</p>
        <p>Lyrics by: {song.lyrics_by?.join(", ") ?? "Unknown"}</p>
      </div>
      <div className="p-4">
        <div>
          <ul className="flex flex-col">
            {song.musicians && song.musicians.length > 0 ? (
              song.musicians.map((musician, idx) => (
                <li key={idx}>
                  {musician.name}: {musician.instrument.join(", ")}
                </li>
              ))
            ) : (
              <li>Unknown</li>
            )}
          </ul>
        </div>
      </div>
      <div className="p-4">
        <h4>Lyrics:</h4>
        {song.lyrics && song.lyrics.length > 0 ? (
          song.lyrics.map((paragraph, index) => (
            <div key={index} className="p-2">
              {paragraph.split("\n").map((line, lineIndex) => (
                <p key={lineIndex} className="">
                  {line}
                </p>
              ))}
            </div>
          ))
        ) : (
          <div>No lyrics available</div>
        )}
      </div>
    </div>
  );
}
