export const dynamic = "force-dynamic";
// import from next
// import Link from "next/link";
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
} from "@/app/lib/data";
// import definitions
import { Song } from "@/app/lib/definitions";
// import components
import AudioPlayerWrapper from "@/app/ui/audio-player-wrapper";
import { Combobox } from "@/components/ui/combo-box";
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
  console.log("savedReleases", savedReleases);

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
      <h2 className="p-4 mb-2 text-xl">Welcome back {user.user_name}</h2>
      <h3 className="px-4">View and edit your saved music</h3>
      <div>
        {user.saved_artists && (
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
        )}

        {user.saved_songs && (
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
        )}

        {user.saved_releases && (
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
        )}

        {user.playlists && (
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
        )}
      </div>
      <hr className="my-6" />
      <h3 className="px-4">Explore all music</h3>

      <div className="p-4">
        <h4>All Artists</h4>
        <Combobox
          options={allArtistsAlphabeticalOrder.map((artist) => ({
            value: artist.id,
            option_label: artist.name,
            href: `/artists/${artist.id}`, // Add href property
          }))}
          list_label={"All Artists"}
          hasLink={false}
        />
      </div>

      <div className="p-4">
        <h4>All Songs</h4>
        <Combobox
          options={allSongsAlphabeticalOrder.map((song) => ({
            value: song.id,
            option_label: song.title,
            href: `/songs/${song.id}`, // Add href property
          }))}
          list_label={"All Songs"}
          hasLink={false}
        />
      </div>

      <div className="p-4">
        <h4>All Releases</h4>
        <Combobox
          options={allReleasesAlphabeticalOrder.map((release) => ({
            value: release.id,
            option_label: release.title,
            href: `/releases/${release.id}`, // Add href property
          }))}
          list_label={"All Releases"}
          hasLink={false}
        />
      </div>

      <div className="p-4">
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

      <hr className="my-6" />

      <div>
        <h3 className="px-4">Listen to music</h3>
        <AudioPlayerWrapper
          allSongs={allSongs}
          savedSongs={savedSongs.filter((song): song is Song => song !== null)}
          // playlists={playlists.filter(
          //   (playlist): playlist is Playlist => playlist !== null
          // )}
          // publicPlaylists={publicPlaylists}
          allReleases={formattedAllReleases}
          savedReleases={formattedSavedReleases}
          formattedPlaylists={formattedPlaylists}
          formattedPublicPlaylists={formattedPublicPlaylists}
        />
      </div>
    </>
  );
}
