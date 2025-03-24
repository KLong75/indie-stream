export const dynamic = "force-dynamic";
// import from next
import Link from "next/link";
// get data
import {
  getUserById,
  getArtistById,
  getSongById,
  getReleaseById,
  getPlaylistById,
  getAllSongs,
  getAllPublicPlaylists,
  // getAllArtists,
  // getAllReleases,
} from "@/app/lib/data";
// import definitions
import { Song } from "@/app/lib/definitions";
// import components
import AudioPlayerWrapper from "@/app/ui/audio-player-wrapper";
// import from utils
import { formatPlaylist } from "@/app/utils/utils";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const user = await getUserById(id);
  if (!user) {
    return <div>User not found</div>;
  }

  const allSongs = await getAllSongs();
  // console.log("allSongs", allSongs);

  const savedArtists = await Promise.all(
    (user.saved_artists || []).map((id) => getArtistById(id))
  );
  // console.log("savedArtists", savedArtists);

  const savedSongs = await Promise.all(
    (user.saved_songs || []).map((id) => getSongById(id))
  );
  // console.log("savedSongs", savedSongs);

  const savedReleases = await Promise.all(
    (user.saved_releases || []).map((id) => getReleaseById(id))
  );
  // console.log("savedReleases", savedReleases);

  const playlists = await Promise.all(
    (user.playlists || []).map((id) => getPlaylistById(id))
  );
  // console.log("playlists", playlists);

  const publicPlaylists = await getAllPublicPlaylists();
  // console.log("publicPlaylists", publicPlaylists);

  const formattedPlaylists: { [key: string]: Song[] } = {};

  await Promise.all(
    playlists
      .filter((pl) => pl !== null)
      .map(async (playlist) => {
        // Assign the array directly
        formattedPlaylists[playlist!.title] = await formatPlaylist({
          playlist: playlist!,
        });
      })
  );

  const formattedPublicPlaylists: { [key: string]: Song[] } = {};

  await Promise.all(
    publicPlaylists
      .filter((pl) => pl !== null)
      .map(async (playlist) => {
        // Assign the array directly
        formattedPublicPlaylists[playlist!.title] = await formatPlaylist({
          playlist: playlist!,
        });
      })
  );

  // console.log("formattedPlaylists", formattedPlaylists);

  return (
    <>
      <h2 className="p-4">{user.user_name}</h2>
      <div className="p-4">
        <h3>All Songs</h3>
      </div>
      {user.saved_artists && (
        <div className="p-4">
          <h3>Saved Artists</h3>
          <ul>
            {savedArtists.map((artist, index) => (
              <li key={index}>
                <Link href={`/artists/${artist?.id}`}>{artist?.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {user.saved_songs && (
        <div className="p-4">
          <h3>Saved Songs</h3>
          <ul>
            {savedSongs.map((song, index) => (
              <li key={index}>{song?.title}</li>
            ))}
          </ul>
        </div>
      )}

      {user.saved_releases && (
        <div className="p-4">
          <h3>Saved Releases</h3>
          <ul>
            {savedReleases.map((release, index) => (
              <li key={index}>{release?.title}</li>
            ))}
          </ul>
        </div>
      )}

      {user.playlists && (
        <div className="p-4">
          <h3>Playlists</h3>
          <ul>
            {playlists.map((playlist, index) => (
              <li key={index}>{playlist?.title}</li>
            ))}
          </ul>
        </div>
      )}
      <AudioPlayerWrapper
        allSongs={allSongs}
        savedSongs={savedSongs.filter(
          (song): song is Song => song !== null
        )}
        // playlists={playlists.filter(
        //   (playlist): playlist is Playlist => playlist !== null
        // )}
        // publicPlaylists={publicPlaylists}
        formattedPlaylists={formattedPlaylists}
        formattedPublicPlaylists={formattedPublicPlaylists}
      />
    </>
  );
}