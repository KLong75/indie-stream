// import data
import {
  getPlaylistById,
  getSongById,
  getReleaseById,
  getArtistById,
} from "@/app/lib/data";

// import from next
// import Image from "next/image";
import Link from "next/link";
// import components
import BackToLink from "@/app/ui/back-to-link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const playlist = await getPlaylistById(id);
  const songs = await Promise.all(
    (playlist?.songs || []).map((id) => getSongById(id))
  );
  const songArtistIds = songs.map((song) => song?.artist);
  const artist = await Promise.all(
    songArtistIds
      .filter((id): id is string => id !== undefined)
      .map((id) => getArtistById(id))
  );
  const releaseIds = songs.map((song) => song?.release);
  const release = await Promise.all(
    releaseIds
      .filter((id): id is string => id !== undefined)
      .map((id) => getReleaseById(id))
  );
  if (!playlist) {
    return <div>Playlist not found</div>;
  } else {
    return (
      <div>
        <BackToLink href="/playlists" label="Playlists" />
        <h1 className="p-4">{playlist.title}</h1>
        <p className="p-4"> by: </p>
        <h2 className="p-4">Description</h2>
        {/* <p className="p-4">{playlist.description}</p> */}
        <div>
          <ul className="p-6">
            {songs.map((song, index) => (
              <li key={index} className="p-2">
                {song ? song.title : "Unknown Song"}
                <br />
                <span className="text-gray-500 text-xs">
                  by{" "}
                  {artist[index] ? (
                    <Link href={`/artists/${artist[index].id}`}>
                      {artist[index].name}
                    </Link>
                  ) : (
                    "Unknown Artist"
                  )}
                </span>
                <br />
                <span className="text-gray-500 text-xs">
                  from the {release[index]?.type}{" "}
                  {release[index] ? (
                    <Link href={`/releases/${release[index].id}`}>
                      {release[index].title}
                    </Link>
                  ) : (
                    "Unknown Release"
                  )}
                </span>
                <br />
                <span className="text-gray-500 text-xs">
                  released in {release[index]?.year}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
