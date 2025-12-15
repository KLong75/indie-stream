// import auth
import { auth } from "@/auth";
// import from next
import { redirect } from "next/navigation";
// get data
import { getUserById, getAllArtists, getAllReleases } from "@/lib/data";
//import actions
import { saveRelease, removeSavedRelease } from "@/lib/actions";
// import components
import ReleaseList from "@/ui/release-list";

export default async function Page() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    redirect("/");
  }
  const user = await getUserById(userId);
  const userSavedReleases = user?.saved_releases || [];
  const releases = await getAllReleases();
  const numberOfReleases = releases.length;
  const allArtists = await getAllArtists();
 
  return (
    <div className="flex-grow p-6">
      <h2 className="p-4 text-center">All Releases</h2>
        <ReleaseList 
          releases={releases} 
          placeholder={`Search all ${numberOfReleases} releases on indieStream...`} 
          artists={allArtists}
          userId={userId}
          action={saveRelease}
          removeAction={removeSavedRelease}
          savedReleases={userSavedReleases}
        />
    </div>
  );
}
