// "use client";

// import { useState, useRef, useEffect } from "react";
// import { PiPlayPauseBold } from "react-icons/pi";
// import { RxTrackPrevious } from "react-icons/rx";
// import { RxTrackNext } from "react-icons/rx";
// import { RxPlay } from "react-icons/rx";
// import { RxPause } from "react-icons/rx";
// import { RxDoubleArrowRight } from "react-icons/rx";
// import { RxDoubleArrowLeft } from "react-icons/rx";
// import { TbPlaylistAdd } from "react-icons/tb";
// import { RiPlayListAddLine } from "react-icons/ri";
// import { RiPlayListFill } from "react-icons/ri";
// import { RiPlayListLine } from "react-icons/ri";

// export default function CustomAudioPlayer() {
//   const songs = [
//     "/audio/music/the-long-emergency/starting-over/mp3/last-night.mp3",
//     "/audio/music/the-long-emergency/starting-over/mp3/starting-over.mp3",
//   ];
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const audioRef = useRef<HTMLAudioElement>(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [duration, setDuration] = useState(0);

//   const handlePlayPause = () => {
//     const audioElement = audioRef.current;
//     if (!audioElement) return;
//     if (isPlaying) {
//       audioElement.pause();
//       setIsPlaying(false);
//     } else {
//       audioElement.play();
//       setIsPlaying(true);
//     }
//   };

//   const handleNext = () => {
//     setCurrentSongIndex((prev) => (prev + 1) % songs.length);
//     setIsPlaying(true);
//   };

//   const handlePrev = () => {
//     setCurrentSongIndex((prev) => (prev - 1 < 0 ? songs.length - 1 : prev - 1));
//     setIsPlaying(true);
//   };

//   const fastForward = () => {
//     const audioElement = audioRef.current;
//     if (!audioElement) return;
//     audioElement.currentTime += 10;
//   };

//   const rewind = () => {
//     const audioElement = audioRef.current;
//     if (!audioElement) return;
//     audioElement.currentTime -= 10;
//   };

//   useEffect(() => {
//     const audioElement = audioRef.current;
//     if (!audioElement) return;
//     const updateProgress = () => {
//       const { currentTime, duration } = audioElement;
//       setProgress((currentTime / duration) * 100);
//     };
//     audioElement.addEventListener("timeupdate", updateProgress);
//     return () => {
//       audioElement.removeEventListener("timeupdate", updateProgress);
//     };
//   }, []);

//   useEffect(() => {
//     const audioElement = audioRef.current;
//     if (audioElement) {
//       audioElement.load();
//       if (isPlaying) {
//         audioElement.play();
//       }
//     }
//   }, [currentSongIndex]);

//   useEffect(() => {
//     const audioElement = audioRef.current;
//     if (!audioElement) return;
//     const updateDuration = () => {
//       setDuration(audioElement.duration);
//     };
//     audioElement.addEventListener("loadedmetadata", updateDuration);
//     return () => {
//       audioElement.removeEventListener("loadedmetadata", updateDuration);
//     };
//   }, [currentSongIndex]);

//   const formatTime = (time: number) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = Math.floor(time % 60);
//     return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
//   };

//   return (
//     <div className="bg-gray-900 pb-4 pt-2  rounded m-6 tracking-wide">
//       <audio ref={audioRef} src={songs[currentSongIndex]} controls={false} />
//       <div className="flex justify-center text-center">Song Title</div>
//       <div className="flex justify-center text-center text-xs my-1">
//         Artist Name
//       </div>
//       <div className="flex justify-center text-center text-xs my-1">
//         Album Title
//       </div>
//       <div className="mx-4">
//         <progress
//           className="w-full h-2 bg-gray-700 rounded overflow-hidden appearance-none my-progress"
//           value={progress}
//           max="100"
//         />
//         {/* start timer */}
//         <div className="flex justify-between text-xs text-gray-400">
//           <div>{formatTime(audioRef.current?.currentTime || 0)}</div>
//           <div>
//             {formatTime(
//               (audioRef.current?.duration || 0) -
//                 (audioRef.current?.currentTime || 0)
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center items-center space-x-2">
//         <button className="bg-blue-600 px-2 py-1 rounded-full" onClick={handlePrev}>
//           <RxTrackPrevious />
//         </button>
//         <button className="bg-blue-600 px-2 py-1 rounded-full" onClick={rewind}>
//           <RxDoubleArrowLeft />
//         </button>
//         <button
//           className="bg-blue-600 px-2 py-1 rounded-full"
//           onClick={handlePlayPause}>
//           {isPlaying ? <RxPause /> : <RxPlay />}
//         </button>
//         <button className="bg-blue-600 px-2 py-1 rounded-full" onClick={fastForward}>
//           <RxDoubleArrowRight />
//         </button>
//         <button className="bg-blue-600 px-2 py-1 rounded-full" onClick={handleNext}>
//           <RxTrackNext />
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";

// import from next
import Image from "next/image";
// import definitions
import { Song, Release, Artist } from "../lib/definitions";
// import data
import {
  getReleaseById,
  getArtistById,
} from "../lib/data";

import { useState, useRef, useEffect } from "react";
// import { PiPlayPauseBold } from "react-icons/pi";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { RxPause } from "react-icons/rx";
import { RxShuffle } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
// import { RxDoubleArrowRight } from "react-icons/rx";
// import { RxDoubleArrowLeft } from "react-icons/rx";
// import { TbPlaylistAdd } from "react-icons/tb";
// import { RiPlayListAddLine } from "react-icons/ri";
// import { RiPlayListFill } from "react-icons/ri";
// import { RiPlayListLine } from "react-icons/ri";
import { MdOutlineForward10 } from "react-icons/md";
import { MdOutlineReplay10 } from "react-icons/md";
// import { RiForward10Fill } from "react-icons/ri";
// import { RiReplay10Fill } from "react-icons/ri";
// import { RxMixerHorizontal } from "react-icons/rx";
// import { RxMixerVertical } from "react-icons/rx";
// import { songs } from "../lib/_songs_";

export default function CustomAudioPlayer({ songs }: { songs: Song[] }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);

  const [artistCurrentlyPlaying, setArtistCurrentlyPlaying] = useState<{ name: string } | null>(null);
  const [releaseCurrentlyPlaying, setReleaseCurrentlyPlaying] = useState<Release | null>(null);
  

  useEffect(() => {
    async function fetchReleaseAndArtist() {
      const currentSong = songs[currentSongIndex];
      const response = await fetch(`/api/getReleaseAndArtist?releaseId=${currentSong.release}&artistId=${currentSong.artist}`);
      const data = await response.json();
      console.log("!!!!!!!!!!!!!!!!!!!!data", data);
      setReleaseCurrentlyPlaying(data.release);
      setArtistCurrentlyPlaying(data.artist);
      
    }

    fetchReleaseAndArtist();
  }, [currentSongIndex]);
  // const releaseCurrentlyPlaying = getReleaseById(songs[currentSongIndex].release);
  // console.log("releaseCurrentlyPlaying", releaseCurrentlyPlaying);

  function handleShuffle() {
    const audioElement = audioRef.current;
    if (!audioElement) return;
  
    // Toggle shuffle, but only pick a new random index if we are going from OFF -> ON
    setShuffle((wasShuffle) => {
      const newShuffle = !wasShuffle;
      if (!wasShuffle && newShuffle) {
        let newIndex = currentSongIndex;
        while (newIndex === currentSongIndex && songs.length > 1) {
          newIndex = Math.floor(Math.random() * songs.length);
        }
        setCurrentSongIndex(newIndex);
      }
      return newShuffle;
    });
  
    audioElement.play();
    setIsPlaying(true);
  }

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (shuffle) {
      const randomIndex = Math.floor(Math.random() * songs.length);
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    }
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 < 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(true);
  };

  const fastForward = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    audioElement.currentTime += 10;
  };

  const rewind = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    audioElement.currentTime -= 10;
  };

 
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const updateProgress = () => {
      const { currentTime, duration } = audioElement;
      setProgress((currentTime / duration) * 100 || 0);
    };
    audioElement.addEventListener("timeupdate", updateProgress);
    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.load();
      if (isPlaying) {
        audioElement.play();
      }
    }
  }, [currentSongIndex, isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const updateDuration = () => {
      setDuration(audioElement.duration || 0);
    };
    audioElement.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audioElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentSongIndex]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newProgress = Number(e.target.value);
    audioRef.current.currentTime = (newProgress / 100) * duration;
    setProgress(newProgress);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <div className="bg-gray-900 pb-4 pt-2 rounded m-6 tracking-wide">
      <div className="flex justify-center items-center w-full h-auto p-6">
        <Image
          src={`https://4ykxjgur5y.ufs.sh/f/${releaseCurrentlyPlaying ? releaseCurrentlyPlaying.cover_img_file_key : "default"}`}
          width={200}
          height={200}
          alt=""
        />
      </div>
      <audio
        ref={audioRef}
        src={`https://4ykxjgur5y.ufs.sh/f/${songs[currentSongIndex].file_key}`}
        controls={false}
      />
      <div className="flex justify-center text-center text-sm">
        {songs[currentSongIndex].title}
      </div>
      <div className="flex justify-center text-center text-xs my-1">
        {/* {songs[currentSongIndex].artist} */}
        {artistCurrentlyPlaying ? artistCurrentlyPlaying.name : "Unknown Artist"}
      </div>
      <div className="flex justify-center text-center text-xs my-1">
        {releaseCurrentlyPlaying ? releaseCurrentlyPlaying.title : "Unknown Album"} 
      </div>
     
      <div className="mx-4">
        <input
          className="w-full h-2 bg-gray-700 rounded overflow-hidden appearance-none my-progress"
          type="range"
          max="100"
          value={progress}
          onChange={handleSeek}
        />
        <div className="flex justify-between text-xs text-gray-400 px-2">
          <div>{formatTime(audioRef.current?.currentTime || 0)}</div>
          <div>
            {formatTime(
              (audioRef.current?.duration || 0) -
                (audioRef.current?.currentTime || 0)
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <button
          className="bg-blue-600 px-2 py-1 rounded-full"
          onClick={handleShuffle}>
           {shuffle ? <RxArrowRight /> : <RxShuffle />}
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded-full"
          onClick={handlePrev}>
          <RxTrackPrevious />
        </button>
        <button className="bg-blue-600 px-2 py-1 rounded-full" onClick={rewind}>
          <MdOutlineReplay10 />
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded-full"
          onClick={handlePlayPause}>
          {isPlaying ? <RxPause /> : <RxPlay />}
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded-full"
          onClick={fastForward}>
          <MdOutlineForward10 />
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded-full"
          onClick={handleNext}>
          <RxTrackNext />
        </button>
      </div>
    </div>
  );
}
