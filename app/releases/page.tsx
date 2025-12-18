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
    <>
    <h2 className="text-lg font-bold mt-4 text-center">
      {numberOfReleases === 1
        ? "There is 1 Release on indieStream"
        : `There are ${numberOfReleases} Releases on indieStream`}
    </h2>
     <div className="flex flex-col flex-grow w-full max-w-4xl mx-auto p-6 justify-center">
        <ReleaseList 
          releases={releases} 
          placeholder={`Search all ${numberOfReleases} releases on indieStream...`} 
          artists={allArtists}
          userId={userId}
          action={saveRelease}
          removeAction={removeSavedRelease}
          savedReleases={userSavedReleases}
          isScrollable={true}
          maxHeight="40vh"
        />
    </div>
    </>
  );
}
