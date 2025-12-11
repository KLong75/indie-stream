// import data
import {
  getPlaylistById,
  getSongById,
  getReleaseById,
  getArtistById,
  getUserById,
} from "@/lib/data";

// import from next
// import Image from "next/image";
import Link from "next/link";
// import components
// import BackToLink from "@/ui/back-to-link";
import SongList from "@/ui/song-list";
import { Song, Artist, Release } from "@/lib/definitions";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const playlist = await getPlaylistById(id);
  const playlistAuthor = await getUserById(playlist?.created_by || "");
  if (!playlistAuthor) {
    return <div>Playlist author not found</div>;
  }
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
        {/* <BackToLink href="/playlists" label="Playlists" /> */}
        <h2 className="p-4 text-center">{playlist.title}</h2>
        <p className="px-4">Created by: {playlistAuthor.user_name}</p>
        <h3 className="pt-4 px-4">Description:</h3>
        <p className="px-6 text-sm text-gray-400">{playlist.description}</p>
        {/* <div>
          <ul className="p-6">
            {songs.map((song, index) => (
              <li key={index} className="p-2">
                <Link href={`/songs/${song?.id}`}>
                  <span>{song ? song.title : "Unknown Song"}</span>
                </Link>
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
        </div> */}
        <div className="p-4">
          <SongList
            songs={songs.filter((song): song is Song => song !== null)}
            artists={artist.filter(
              (artist): artist is Artist => artist !== null
            )}
            releases={release.filter(
              (release): release is Release => release !== null
            )}
            placeholder={`Search ${playlist.title}...`}
          />
        </div>
      </div>
    );
  }
}
