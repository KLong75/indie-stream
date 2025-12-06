//import data
import {
  getArtistById,
  getSongById,
  getReleaseById,
  // getPlaylistById,
} from "@/lib/data";

// import from next
import { redirect } from "next/navigation";
import Link from "next/link";
// import components
import UploadButtonContainer from "@/ui/upload-button-container";

// import auth
import { auth } from "@/auth";

export default async function ArtistMusicUploadPage() {
  const session = await auth();
  if (!session) {
    // redirect to listener page
    redirect(`/`);
  }
  return (
    <div>
      <h2>Artist Music Upload Page</h2>
      <UploadButtonContainer file_route="audioUploader" />
      <UploadButtonContainer file_route="imageUploader" />
    </div>
  );
}
