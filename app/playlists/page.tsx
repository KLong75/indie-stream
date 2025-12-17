// import auth
import { auth } from "@/auth";
// get data
import {
  getUserById,
  // getAllUserPlaylists,
  getAllPublicPlaylists,
} from "@/lib/data";
// import components
import PlaylistList from "@/ui/playlist-list";

export default async function Page() {
  const session = await auth();
  const userId = session?.user?.id || "";
  const user = await getUserById(userId);
  if (!user) {
    return null;
  }
  // const userPlaylists = await getAllUserPlaylists(userId);
  const publicPlaylists = await getAllPublicPlaylists();
  const numberOfPublicPlaylists = publicPlaylists.length;
  // console.log("playlists", playlists);
  // const userSavedPublicPlaylistIds = user.saved_public_playlists || [];
  // const userSavedPublicPlaylists = publicPlaylists.filter((playlist) =>
  //   userSavedPublicPlaylistIds.includes(playlist?.id || "")
  // );

  return (
    <>
      <h2 className="text-lg font-bold mt-6 text-center">
        {numberOfPublicPlaylists === 1
          ? "There is 1 Public Playlist"
          : `There are ${numberOfPublicPlaylists} Public Playlists`}
      </h2>
      <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto p-6 justify-center">
        <PlaylistList
          playlists={publicPlaylists}
          placeholder={`Search all ${numberOfPublicPlaylists} public playlists...`}
          isScrollable={true}
          maxHeight="64vh"
        />
      </div>
    </>
  );
}
