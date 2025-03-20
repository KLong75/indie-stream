export const dynamic = "force-dynamic";

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
  getAllReleases
} from "@/app/lib/data";
// import definitions
import { Song, Playlist } from "@/app/lib/definitions";
// import components
import AudioPlayerWrapper from "@/app/ui/audio-player-wrapper";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const user = await getUserById(id);
  if (!user) {
    return <div>User not found</div>;
  }

  const allSongs = await getAllSongs();
  console.log('allSongs', allSongs);
  
  const favoriteArtists = await Promise.all(
    (user.favorite_artists || []).map((id) => getArtistById(id))
  );
  console.log('favoriteArtists', favoriteArtists);

  const favoriteSongs = await Promise.all(
    (user.favorite_songs || []).map((id) => getSongById(id))
  );
  console.log('favoriteSongs', favoriteSongs);

  const favoriteReleases = await Promise.all(
    (user.favorite_releases || []).map((id) => getReleaseById(id))
  );
  console.log('favoriteReleases', favoriteReleases);

  const playlists = await Promise.all(
    (user.playlists || []).map((id) => getPlaylistById(id))
  );
  console.log('playlists', playlists);

  const publicPlaylists = await getAllPublicPlaylists();
  console.log('publicPlaylists', publicPlaylists);

  return (
    <>
      <h2 className="p-4">{user.user_name}</h2>
      <div className="p-4">
        <h3>All Songs</h3>
      </div>
      {user.favorite_artists && (
        <div className="p-4">
          <h3>Favorite Artists</h3>
          <ul>
            {favoriteArtists.map((artist, index) => (
              <li key={index}>{artist?.name}</li>
            ))}
          </ul>
        </div>
      )}

      {user.favorite_songs && (
        <div className="p-4">
          <h3>Favorite Songs</h3>
          <ul>
            {favoriteSongs.map((song, index) => (
              <li key={index}>{song?.title}</li>
            ))}
          </ul>
        </div>
      )}

      {user.favorite_releases && (
        <div className="p-4">
          <h3>Favorite Releases</h3>
          <ul>
            {favoriteReleases.map((release, index) => (
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
      {/* <CustomAudioPlayer 
        songs={favoriteSongs.filter((song): song is Song => song !== null)}
      /> */}
      <AudioPlayerWrapper
        initialSongs={favoriteSongs.filter((song): song is Song => song !== null)}
        allSongs={allSongs}
        playlists={playlists.filter((playlist): playlist is Playlist => playlist !== null)}
      />
    </>
  );
}