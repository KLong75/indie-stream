export const dynamic = "force-dynamic";
// import auth
import { auth } from "@/auth";
// import actions
import { saveSong, removeSavedSong } from "@/lib/actions";
// import from next
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
// get data
import {
  getUserById,
  getArtistById,
  // getSongById,
  // getReleaseById,
  getPlaylistById,
  getAllSongs,
  getAllPublicPlaylists,
  getAllArtists,
  getAllReleases,
} from "@/lib/data";
// import context
// import { usePushNotification } from "../../../context/push-notification-context-provider";
// import actions
import { saveArtist, removeSavedArtist, saveRelease, removeSavedRelease } from "@/lib/actions";
// import definitions
import { Song, Artist, Release } from "@/lib/definitions";
// import components
import ArtistList from "@/ui/artist-list";
import SongList from "@/ui/song-list";
import ReleaseList from "@/ui/release-list";
import PlaylistList from "@/ui/playlist-list";
// import SubscriptionContextClientContainer from "@/ui/subscription-context-client-container";
// import { Combobox } from "@/components/ui/combo-box";
// import from utils
// import { formatPlaylist } from "@/utils/utils";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!session || !userId) {
    return redirect("/");
  }
  const { id } = await props.params;
  const user = await getUserById(id);
  console.log("user", user);
  if (!user) {
    return redirect("/");
  }

  const allArtists = await getAllArtists();
  const userSavedArtistsIds = user.saved_artists || [];
  console.log("userSavedArtistsIds", userSavedArtistsIds);
  const userSavedArtists = allArtists.filter((artist) =>
    userSavedArtistsIds.includes(artist.id)
  );

  const allSongs = await getAllSongs();
  const userSavedSongsIds = user.saved_songs || [];
  console.log("userSavedSongsIds", userSavedSongsIds);
  const userSavedSongs = allSongs.filter((song) =>
    userSavedSongsIds.includes(song.id)
  );

  const allReleases = await getAllReleases();
  const userSavedReleasesIds = user.saved_releases || [];
  console.log("userSavedReleasesIds", userSavedReleasesIds);
  const userSavedReleases = allReleases.filter((release) =>
    userSavedReleasesIds.includes(release.id)
  );

  const userPlaylistsIds = user.playlists || [];
  console.log("userPlaylistsIds", userPlaylistsIds);
  const userPlaylists = await Promise.all(
    userPlaylistsIds.map((id) => getPlaylistById(id))
  );
  console.log("userPlaylists", userPlaylists);

  return (
    <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto">
      <h2 className="text-xl p-4">Welcome back {user.user_name}</h2>
      <div>
        <h3 className="px-4 text-center text-lg">Your saved artists</h3>
        <div className="p-6 pt-2">
          {userSavedArtists.length === 0 ? (
            <p className="px-4">You have no saved artists.</p>
          ) : (
            <ArtistList
              artists={userSavedArtists}
              placeholder="Search your saved artists..."
              userId={userId}
              action={saveArtist}
              removeAction={removeSavedArtist}
              savedArtists={userSavedArtists.map((artist) => artist.id)}
            />
          )}
        </div>
      </div>
      <div>
        <h3 className="px-4 text-center text-lg">Your saved releases</h3>
        <div className="p-6 pt-2">
          {userSavedReleases.length === 0 ? (
            <p className="px-4">You have no saved releases.</p>
          ) : (
            <ReleaseList
              releases={userSavedReleases}
              artists={allArtists}
              placeholder="Search your saved releases..."
              userId={userId}
              action={saveRelease}
              removeAction={removeSavedRelease}
              savedReleases={userSavedReleases.map((release) => release.id)}
            />
          )}
        </div>
        <div>
          <h3 className="px-4 text-lg text-center">Your saved songs:</h3>
          <div className="p-6 pt-2">
            {userSavedSongs.length === 0 ? (
              <p className="px-4">You have no saved songs.</p>
            ) : (
              <SongList
                songs={userSavedSongs.filter(
                  (song): song is Song => song !== null
                )}
                artists={allArtists}
                releases={allReleases}
                placeholder="Search your saved songs..."
                userId={userId}
                action={saveSong}
                removeAction={removeSavedSong}
                minimal={false}
                isScrollable={true}
                savedSongs={userSavedSongs.map((song) => song.id)}
              />
            )}
          </div>
        </div>
        <div>
          <h3 className="px-4 text-lg text-center">Your playlists</h3>
          <div className="p-6 pt-2">
            {userPlaylists.length === 0 ? (
              <p className="px-4">You have no playlists.</p>
            ) : (
              <PlaylistList
                playlists={userPlaylists.filter(
                  (pl): pl is NonNullable<typeof pl> => pl !== null
                )}
                placeholder="Search your playlists..."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// all artists

// const allArtistsAlphabeticalOrder = allArtists.sort((a, b) =>
// a.name.localeCompare(b.name)
// );
// console.log("allArtists", allArtistsAlphabeticalOrder);

// all songs
// const allSongs = await getAllSongs();
// console.log("allSongs", allSongs);
// const allSongsAlphabeticalOrder = allSongs.sort((a, b) =>
//   a.title.localeCompare(b.title)
// );
// all releases
// const allReleases = await getAllReleases();
// const allReleasesAlphabeticalOrder = allReleases.sort((a, b) =>
//   a.title.localeCompare(b.title)
// );
// const formattedAllReleases: { [key: string]: Song[] } = {};
// await Promise.all(
//   allReleasesAlphabeticalOrder
//     .filter((release) => release !== null)
//     .map(async (release) => {
//       // Assign the array directly
//       formattedAllReleases[release!.title] = await formatPlaylist({
//         playlist: release!,
//       });
//     })
// );
// saved artists
// const savedArtists = (
//   await Promise.all((user.saved_artists || []).map((id) => getArtistById(id)))
// ).sort((a, b) => (a?.name || "").localeCompare(b?.name || ""));
// console.log("savedArtists", savedArtists);
// saved songs
// const savedSongs = await Promise.all(
//   (user.saved_songs || []).map((id) => getSongById(id))
// );
// saved releases
// const savedReleases = await Promise.all(
//   (user.saved_releases || []).map((id) => getReleaseById(id))
// );
// const formattedSavedReleases: { [key: string]: Song[] } = {};
// await Promise.all(
//   savedReleases
//     .filter((release) => release !== null)
//     .map(async (release) => {
//       // Assign the array directly
//       formattedSavedReleases[release!.title] = await formatPlaylist({
//         playlist: release!,
//       });
//     })
// );
// user playlists
// const playlists = await Promise.all(
//   (user.playlists || []).map((id) => getPlaylistById(id))
// );
// const formattedPlaylists: { [key: string]: Song[] } = {};
// await Promise.all(
//   playlists
//     .filter((pl) => pl !== null)
//     .map(async (playlist) => {
//       // Assign the array directly
//       formattedPlaylists[playlist!.title] = await formatPlaylist({
//         playlist: playlist!,
//       });
//     })
// );
// public playlists
// const publicPlaylists = await getAllPublicPlaylists();
// const formattedPublicPlaylists: { [key: string]: Song[] } = {};
// await Promise.all(
//   publicPlaylists
//     .filter((pl) => pl !== null)
//     .map(async (playlist) => {
//       // Assign the array directly
//       formattedPublicPlaylists[playlist!.title] = await formatPlaylist({
//         playlist: playlist!,
//       });
//     })
// );
