import Image from "next/image";
import AudioPlayer from "./ui/audio-player";
import CustomAudioPlayer from "./ui/audio-player-custom-controls";
import LocalAudioPlayer from "./ui/local-audio-player";

export default function Home() {
  return (
    <div>
        {/* <AudioPlayer /> */}
        <CustomAudioPlayer />
        <LocalAudioPlayer />
    </div>
  );
}