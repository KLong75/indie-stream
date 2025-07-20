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
} from "@/lib/data";
// import definitions
import { Song } from "@/lib/definitions";
// import components
import AudioPlayerWrapper from "@/app/ui/audio-player-wrapper";
import { Combobox } from "@/components/ui/combo-box";
// import from utils
import { formatPlaylist } from "@/utils/utils";
// import auth
import { auth } from "@/auth";

export default async function AudioContainer() {
  const session = await auth();
  const userId = session?.user?.id || "";
  const user = await getUserById(userId);
  if (!user) {
    return null;
  }
  // all artists
  const allArtists = await getAllArtists();
  const allArtistsAlphabeticalOrder = allArtists.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  // all songs
  const allSongs = await getAllSongs();
  // console.log("allSongs", allSongs);
  const allSongsAlphabeticalOrder = allSongs.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  // all releases
  const allReleases = await getAllReleases();
  const allReleasesAlphabeticalOrder = allReleases.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  const formattedAllReleases: { [key: string]: Song[] } = {};
  await Promise.all(
    allReleasesAlphabeticalOrder
      .filter((release) => release !== null)
      .map(async (release) => {
        // Assign the array directly
        formattedAllReleases[release!.title] = await formatPlaylist({
          playlist: release!,
        });
      })
  );
  // saved artists
  const savedArtists = (
    await Promise.all((user.saved_artists || []).map((id) => getArtistById(id)))
  ).sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));
  console.log("savedArtists", savedArtists);
  // saved songs
  const savedSongs = await Promise.all(
    (user.saved_songs || []).map((id) => getSongById(id))
  );
  // saved releases
  const savedReleases = await Promise.all(
    (user.saved_releases || []).map((id) => getReleaseById(id))
  );
  const formattedSavedReleases: { [key: string]: Song[] } = {};
  await Promise.all(
    savedReleases
      .filter((release) => release !== null)
      .map(async (release) => {
        // Assign the array directly
        formattedSavedReleases[release!.title] = await formatPlaylist({
          playlist: release!,
        });
      })
  );
  // user playlists
  const playlists = await Promise.all(
    (user.playlists || []).map((id) => getPlaylistById(id))
  );
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
  // public playlists
  const publicPlaylists = await getAllPublicPlaylists();
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
  return (
    <div>
      <h3 className="px-4 text-center">Listen to music</h3>
      <AudioPlayerWrapper
        allSongs={allSongs}
        savedSongs={savedSongs.filter((song): song is Song => song !== null)}
        allReleases={formattedAllReleases}
        savedReleases={formattedSavedReleases}
        formattedPlaylists={formattedPlaylists}
        formattedPublicPlaylists={formattedPublicPlaylists}
      />
    </div>
  );
}
