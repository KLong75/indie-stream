export const dynamic = "force-dynamic";
// import from next
import { redirect } from "next/navigation";
// import Link from "next/link";
// get data
import {
  getUserById,
  // getArtistById,
  // getSongById,
  // getReleaseById,
  // getPlaylistById,
  // getAllSongs,
  // getAllPublicPlaylists,
  // getAllArtists,
  // getAllReleases,
} from "@/lib/data";
// import context
// import { usePushNotification } from "../../../context/push-notification-context-provider";
// import definitions
// import { Song } from "@/lib/definitions";
// import components
import SubscriptionContextClientContainer from "@/ui/subscription-context-client-container";
// import { Combobox } from "@/components/ui/combo-box";
// import from utils
// import { formatPlaylist } from "@/utils/utils";

export default async function Page(props: { params: Promise<{ id: string }> }) {

  const { id } = await props.params;
  const user = await getUserById(id);
  if (!user) {
    return redirect("/");
  }
  // all artists
  // const allArtists = await getAllArtists();
  // const allArtistsAlphabeticalOrder = allArtists.sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // );
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

  return (
    <div className="flex flex-col flex-grow">
      <h2 className="mx-auto my-2">Welcome back {user.user_name}</h2>
      
      {/* <div className="p-2">
        <SubscriptionContextClientContainer renderedAs="button" />
      </div> */}
      
      {/* <h3 className="px-4">Your saved music</h3> */}
      {/* <div> */}
      {/* {user.saved_artists && (
          <div className="p-4">
            <h4>Saved Artists</h4>
            <Combobox
              options={savedArtists.map((artist) => ({
                value: artist?.id || "",
                option_label: artist?.name || "Unknown Artist",
                href: `/artists/${artist?.id}`, // Precompute the href here
              }))}
              list_label={"Saved Artists"}
              hasLink={true}
            />
          </div>
        )} */}

      {/* {user.saved_songs && (
          <div className="p-4">
            <h4>Saved Songs</h4>
            <Combobox
              options={savedSongs.map((song) => ({
                value: song?.id || "",
                option_label: song?.title || "Unknown Song",
                href: `/songs/${song?.id}`, // Precompute the href here
              }))}
              list_label={"Saved Songs"}
              hasLink={true}
            />
          </div>
        )} */}

      {/* {user.saved_releases && (
          <div className="p-4">
            <h4>Saved Releases</h4>
            <Combobox
              options={savedReleases.map((release) => ({
                value: release?.id || "",
                option_label: release?.title || "Unknown Release",
                href: `/releases/${release?.id}`, // Precompute the href here
              }))}
              list_label={"Saved Releases"}
              hasLink={true}
            />
          </div>
        )} */}

      {/* {user.playlists && (
          <div className="p-4">
            <h4>Your Playlists</h4>
            <Combobox
              options={playlists.map((playlist) => ({
                value: playlist?.id || "",
                option_label: playlist?.title || "Unknown Playlist",
                href: `/playlists/${playlist?.id}`, // Precompute the href here
              }))}
              list_label={"Your Playlists"}
              hasLink={true}
            />
          </div>
        )} */}
      {/* </div> */}
      {/* <hr className="my-6" />
      <h3 className="px-4">Explore music</h3>
      <div className="p-4">
        <h4>All Artists</h4>
        <Combobox
          options={allArtistsAlphabeticalOrder.map((artist) => ({
            value: artist.id,
            option_label: artist.name,
            href: `/artists/${artist.id}`, // Add href property
          }))}
          list_label={"All Artists"}
          hasLink={true}
        />
      </div> */}

      {/* <div className="p-4">
        <h4>All Songs</h4>
        <Combobox
          options={allSongsAlphabeticalOrder.map((song) => ({
            value: song.id,
            option_label: song.title,
            href: `/songs/${song.id}`, // Add href property
          }))}
          list_label={"All Songs"}
          hasLink={true}
        />
      </div> */}

      {/* <div className="p-4">
        <h4>All Releases</h4>
        <Combobox
          options={allReleasesAlphabeticalOrder.map((release) => ({
            value: release.id,
            option_label: release.title,
            href: `/releases/${release.id}`, // Add href property
          }))}
          list_label={"All Releases"}
          hasLink={true}
        />
      </div> */}
      {/* <div className="p-4">
        <h4>Public Playlists</h4>
        <Combobox
          options={publicPlaylists.map((playlist) => ({
            value: playlist.id,
            option_label: playlist.title,
            href: `/playlists/${playlist.id}`, // Add href property
          }))}
          list_label={"Public Playlists"}
          hasLink={true}
        />
      </div>
      <hr className="my-6" /> */}
    </div>
  );
}
