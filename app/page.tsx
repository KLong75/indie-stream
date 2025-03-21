// import from next
import Link from "next/link";
// import AudioPlayer from "./ui/audio-player";
// import CustomAudioPlayer from "./ui/audio-player-custom-controls";
// import LocalAudioPlayer from "./ui/local-audio-player";
import UploadButtonContainer from "./ui/upload-button-container";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">Login</Link>
      {/* <CustomAudioPlayer /> */}
      <UploadButtonContainer file_route="audioUploader" />
      <UploadButtonContainer file_route="imageUploader" />
    </div>
  );
}
