// import from next
import Link from "next/link";
// import UploadButtonContainer from "./ui/upload-button-container";
// import components
import { Button } from "@/components/ui/button";
// import from react icons
import { GiMusicalNotes } from "react-icons/gi";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <GiMusicalNotes className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -z-10 text-gray-300 text-[10rem] home-page-icon" />
        <h1 className="text-4xl font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
          indieStream
        </h1>
        <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center">
          <div className="m-2">
            <Button variant="secondary" className="rounded-full" size="lg">
              <Link href="/log-in">Log In</Link>
            </Button>
          </div>
          <div className="m-2">
            <Button variant="secondary" className="rounded-full" size="lg">
              <Link href="/listener-sign-up">Listener Sign Up</Link>
            </Button>
          </div>
          <div className="m-2">
            <Button variant="secondary" className="rounded-full" size="lg">
              <Link href="/artist-registration">Artist Registration</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <UploadButtonContainer file_route="audioUploader" /> */}
      {/* <UploadButtonContainer file_route="imageUploader" /> */}
    </main>
  );
}
