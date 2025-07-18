// import data calls
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
} from "@/app/lib/data";
// import definitions
import { Song } from "@/app/lib/definitions";
// import components
import AudioPlayerWrapper from "@/app/ui/audio-player-wrapper";
import { Combobox } from "@/components/ui/combo-box";
// import from utils
import { formatPlaylist } from "@/app/utils/utils";
// import auth
import { auth } from "@/auth";

export default async function AudioContainer() {
  const session = await auth();
  const userId = session?.user?.id || "";
  const user = await getUserById(userId);
  if (!user) {
    return <div>User not found</div>;
  }
  const allSongs = await getAllSongs();
  // console.log("allSongs", allSongs);
  const allSongsAlphabeticalOrder = allSongs.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const allArtists = await getAllArtists();
  const allArtistsAlphabeticalOrder = allArtists.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const allReleases = await getAllReleases();
  const allReleasesAlphabeticalOrder = allReleases.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const savedArtists = (
    await Promise.all((user.saved_artists || []).map((id) => getArtistById(id)))
  ).sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));
  console.log("savedArtists", savedArtists);

  const savedSongs = await Promise.all(
    (user.saved_songs || []).map((id) => getSongById(id))
  );
  // console.log("savedSongs", savedSongs);

  const savedReleases = await Promise.all(
    (user.saved_releases || []).map((id) => getReleaseById(id))
  );
  // console.log("savedReleases", savedReleases);

  const userPlaylists = await Promise.all(
    (user.playlists || []).map((id) => getPlaylistById(id))
  );
  // console.log("playlists", playlists);

  const publicPlaylists = await getAllPublicPlaylists();
  // console.log("publicPlaylists", publicPlaylists);

  const formattedPlaylists: { [key: string]: Song[] } = {};

  await Promise.all(
    userPlaylists
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

}