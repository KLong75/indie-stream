import Image from "next/image";
import AudioPlayer from "./ui/audio-player";
import CustomAudioPlayer from "./ui/audio-player-custom-controls";

export default function Home() {
  return (
    <div>
        {/* <AudioPlayer /> */}
        <CustomAudioPlayer />
    </div>
  );
}