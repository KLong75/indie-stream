// import from next
import Link from "next/link";
// import UploadButtonContainer from "./ui/upload-button-container";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
        <h1 className="text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">indieStream</h1>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <div>
            <Link href="/log-in">Log In</Link>
          </div>
          <div>
            <Link href="/listener-sign-up">Listener Sign Up</Link>
          </div>
          <div>
            <Link href="/artist-registration">Artist Registration</Link>
          </div>
        </div>
      </div>
      {/* <UploadButtonContainer file_route="audioUploader" /> */}
      {/* <UploadButtonContainer file_route="imageUploader" /> */}
    </main>
  );
}