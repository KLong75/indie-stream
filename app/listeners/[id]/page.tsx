export const dynamic = "force-dynamic";

import {
  getUserById,
  getArtistById,
  getSongById,
  getReleaseById,
  getPlaylistById,
} from "@/app/lib/data";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const user = await getUserById(params.id);
  if (!user) {
    return <div>User not found</div>;
  }

  console.log("user:", user);

  const favoriteArtistsIds = user.favorite_artists || [];
  console.log("favoriteArtistsIds:", favoriteArtistsIds);

  const favoriteArtists = await Promise.all(
    favoriteArtistsIds.map((id) => getArtistById(id))
  );
  console.log("favoriteArtists:", favoriteArtists);

  const favoriteSongs = await Promise.all(
    (user.favorite_songs || []).map((id) => getSongById(id))
  );

  const favoriteReleases = await Promise.all(
    (user.favorite_releases || []).map((id) => getReleaseById(id))
  );

  const playlists = await Promise.all(
    (user.playlists || []).map((id) => getPlaylistById(id))
  );

  return (
    <>
      <h2 className="p-4">{user.user_name}</h2>
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
    </>
  );
}