// import from next
import Link from "next/link";
// import auth
import { auth } from "@/auth";
// get data
import {
  getUserById,
  getAllUserPlaylists,
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
  const userPlaylists = await getAllUserPlaylists(userId);
  const publicPlaylists = await getAllPublicPlaylists();
  // console.log("playlists", playlists);

  return (
    <div className="p-8 space-y-8 mx-auto max-w-4xl">
      <div>
        <h2 className="text-lg font-bold mb-4 text-center">
          All User Playlists
        </h2>
        <PlaylistList playlists={userPlaylists} />
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4 text-center">
          All Public Playlists
        </h2>
        <PlaylistList playlists={publicPlaylists} />
      </div>
    </div>
  );
}
