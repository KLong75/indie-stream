// import auth
import { auth } from "@/auth";
// import from next
import Link from "next/link";
// import components
import UploadButtonContainer from "../ui/upload-button-container";
// import from react icons
import { GiMusicalNotes } from "react-icons/gi";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  // console.log("session", session);
  if (session && session.user && session.user.id) {
    // redirect to listener page
    redirect(`/listeners/${session.user.id}`);
  }
  return (
    // <main className="flex flex-col">
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
        <GiMusicalNotes className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -z-10 text-gray-300 text-[10rem] home-page-icon" />
        <h1 className="text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
          indieStream
        </h1>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <div className="m-2">
            <Link href="/log-in">Log In</Link>
          </div>
          <div className="m-2">
            <Link href="/listener-sign-up">Listener Sign Up</Link>
          </div>
          <div className="m-2">
            <Link href="/artist-registration">Artist Registration</Link>
          </div>
        </div>
      </div>
      <UploadButtonContainer file_route="audioUploader" />
      <UploadButtonContainer file_route="imageUploader" />
      {/* </main> */}
    </>
  );
}
