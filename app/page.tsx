import Image from "next/image";
import AudioPlayer from "./ui/audio-player";
import CustomAudioPlayer from "./ui/audio-player-custom-controls";
import LocalAudioPlayer from "./ui/local-audio-player";
import UploadButtonContainer from "./ui/upload-button-container";
export default function Home() {
  return (
    <div>
      {/* <AudioPlayer /> */}
      {/* <LocalAudioPlayer /> */}
      <CustomAudioPlayer />
      <UploadButtonContainer
        file_route="audioUploader" 
      />
    </div>
  );
}
