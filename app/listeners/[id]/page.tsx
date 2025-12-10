export const dynamic = "force-dynamic";
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
// import definitions
import { Song, Artist, Release } from "@/lib/definitions";
// import components
import SongList from "@/ui/song-list";
// import SubscriptionContextClientContainer from "@/ui/subscription-context-client-container";
// import { Combobox } from "@/components/ui/combo-box";
// import from utils
// import { formatPlaylist } from "@/utils/utils";

export default async function Page(props: { params: Promise<{ id: string }> }) {
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
  console.log("userSavedArtists", userSavedArtists);

  const allSongs = await getAllSongs();
  const userSavedSongsIds = user.saved_songs || [];
  console.log("userSavedSongsIds", userSavedSongsIds);
  const userSavedSongs = allSongs.filter((song) =>
    userSavedSongsIds.includes(song.id)
  );
  console.log("userSavedSongs", userSavedSongs);

  const allReleases = await getAllReleases();
  const userSavedReleasesIds = user.saved_releases || [];
  console.log("userSavedReleasesIds", userSavedReleasesIds);
  const userSavedReleases = allReleases.filter((release) =>
    userSavedReleasesIds.includes(release.id)
  );
  console.log("userSavedReleases", userSavedReleases);

  const userPlaylistsIds = user.playlists || [];
  console.log("userPlaylistsIds", userPlaylistsIds);
  const userPlaylists = await Promise.all(
    userPlaylistsIds.map((id) => getPlaylistById(id))
  );
  console.log("userPlaylists", userPlaylists);
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

  return (
    <div className="flex flex-col flex-grow">
      <h2 className="mx-auto my-2">Welcome back {user.user_name}</h2>
      <div>
        <h3 className="px-4">Your saved artists</h3>
        <div className="p-4">
          {userSavedArtists.length === 0 ? (
            <p className="px-4">You have no saved artists.</p>
          ) : (
            <ul>
              {userSavedArtists.map((artist) => (
                <li key={artist.id}>
                  <Link href={`/artists/${artist.id}`}>{artist.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <h3 className="px-4">Your saved releases</h3>
        <div className="p-4">
          {userSavedReleases.length === 0 ? (
            <p className="px-4">You have no saved releases.</p>
          ) : (
            <ul className="grid grid-cols-3">
              {userSavedReleases.map((release) => (
                <li key={release.id}>
                  <Link href={`/releases/${release.id}`}>
                    <div className="flex flex-col items-center">
                      {release.cover_img_file_key && (
                        <Image
                          src={`https://4ykxjgur5y.ufs.sh/f/${release.cover_img_file_key}`}
                          alt={release.title}
                          width={50}
                          height={50}
                        />
                      )}
                      {release.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3 className="px-4">Your saved songs:</h3>
          <div className="px-4">
            {userSavedSongs.length === 0 ? (
              <p className="px-4">You have no saved songs.</p>
            ) : (
              // <ul>
              //   {userSavedSongs.map((song) => (
              //     <li key={song.id} className="p-2 flex flex-col">
              //       <Link 
              //         href={`/songs/${song.id}`}
              //       >
              //         <span>
              //           {song.title}
              //         </span>
              //       </Link>
              //       <Link
              //         href={`/artists/${song.artist}`}
              //         className="text-sm text-gray-500 ">
              //           <span>by </span>
              //         {
              //           allArtists.find((artist) => artist.id === song.artist)
              //             ?.name
              //         }
              //       </Link>
              //       <span className="text-gray-500 text-xs">
              //         from the{" "}
              //         {
              //           allReleases.find(
              //             (release) => release.id === song.release
              //           )?.type
              //         }{" "}
              //         {
              //           allReleases.find(
              //             (release) => release.id === song.release
              //           )?.title
              //         }
              //       </span>
              //     </li>
              //   ))}
              // </ul>
              <SongList
                songs={userSavedSongs.filter(
                  (song): song is Song => song !== null
                )}
                artists={allArtists}
                releases={allReleases}
                placeholder="Search your saved songs..."
              />
            )}
          </div>
        </div>
      </div>

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
