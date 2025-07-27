"use client";
// import from next
import Image from "next/image";
import Link from "next/link";
// import definitions
import { Song, Release } from "../../lib/definitions";
// import from react
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

export default function AudioPlayer({
  songs,
  isPlaying,
  setIsPlaying,
  currentSongIndex,
  setCurrentSongIndex,
}: {
  songs: Song[];
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
}) {
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);

  const [artistCurrentlyPlaying, setArtistCurrentlyPlaying] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [releaseCurrentlyPlaying, setReleaseCurrentlyPlaying] =
    useState<Release | null>(null);

  useEffect(() => {
    async function fetchReleaseAndArtist() {
      const currentSong = songs[currentSongIndex];
      if (!currentSong) return;
      const response = await fetch(
        `/api/getReleaseAndArtist?releaseId=${currentSong.release}&artistId=${currentSong.artist}`
      );
      const data = await response.json();
      setReleaseCurrentlyPlaying(data.release);
      setArtistCurrentlyPlaying(data.artist);
    }
    fetchReleaseAndArtist();
  }, [currentSongIndex, songs]);

  // useEffect hook to handle shuffle activation and pick a new random song ---
  useEffect(() => {
    if (shuffle && songs.length > 1) {
      let newIndex = currentSongIndex;
      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      setCurrentSongIndex(newIndex);
      setIsPlaying(true);
    }
  }, [
    shuffle,
    songs.length,
    currentSongIndex,
    setCurrentSongIndex,
    setIsPlaying,
  ]);
  // --- END NEW ---

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const handleEnded = () => {
      if (shuffle) {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setCurrentSongIndex(randomIndex);
      } else {
        setCurrentSongIndex((currentSongIndex + 1) % songs.length);
      }
      setIsPlaying(true); // Automatically play the next song
    };
    audioElement.addEventListener("ended", handleEnded);
    return () => {
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, [
    currentSongIndex,
    shuffle,
    songs.length,
    setCurrentSongIndex,
    setIsPlaying,
  ]);

  // function handleShuffle() {
  //   const audioElement = audioRef.current;
  //   if (!audioElement) return;

  //   // Toggle shuffle, but only pick a new random index if we are going from OFF -> ON
  //   setShuffle((wasShuffle) => {
  //     const newShuffle = !wasShuffle;
  //     if (!wasShuffle && newShuffle) {
  //       let newIndex = currentSongIndex;
  //       while (newIndex === currentSongIndex && songs.length > 1) {
  //         newIndex = Math.floor(Math.random() * songs.length);
  //       }
  //       setCurrentSongIndex(newIndex);
  //     }
  //     return newShuffle;
  //   });

  //   // audioElement.play();
  //   setIsPlaying(true);
  // }

  function handleShuffle() {
    setShuffle((wasShuffle) => !wasShuffle);
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
      setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    }
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex(
      currentSongIndex - 1 < 0 ? songs.length - 1 : currentSongIndex - 1
    );
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
    if (!audioElement) return;
    audioElement.load();
    const handleCanPlay = () => {
      if (isPlaying) {
        audioElement.play();
      }
    };
    audioElement.addEventListener("canplay", handleCanPlay);
    return () => {
      audioElement.removeEventListener("canplay", handleCanPlay);
    };
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
    <div className="bg-gray-900 pb-4 pt-2 rounded m-6 tracking-wide mb-12 rounded-lg">
      <div className="flex justify-center items-center w-full h-auto p-4">
        <Image
          src={`https://4ykxjgur5y.ufs.sh/f/${
            releaseCurrentlyPlaying
              ? releaseCurrentlyPlaying.cover_img_file_key
              : "9Dk0lBirZ3pQA66Rb9Bygdn5G8QFv0hfpWE7KZqxj3lTc9wC"
          }`}
          width={200}
          height={200}
          alt={`${releaseCurrentlyPlaying?.title} cover image`}
          className="rounded-lg shadow-2xl"
        />
      </div>
      {songs[currentSongIndex] && songs[currentSongIndex].file_key ? (
        <audio
          ref={audioRef}
          src={`https://4ykxjgur5y.ufs.sh/f/${songs[currentSongIndex].file_key}`}
          controls={false}
        />
      ) : null}
      <Link href={`/songs/${songs[currentSongIndex]?.id}`}>
        <div className="flex justify-center text-center text-sm">
          {songs[currentSongIndex] && songs[currentSongIndex].title
            ? songs[currentSongIndex].title
            : "No song selected"}
        </div>
      </Link>
      <Link href={`/artists/${artistCurrentlyPlaying?.id}`}>
        <div className="flex justify-center text-center text-xs my-1">
          {/* {songs[currentSongIndex].artist} */}
          {artistCurrentlyPlaying
            ? artistCurrentlyPlaying.name
            : "Unknown Artist"}
        </div>
      </Link>
      <Link href={`/releases/${releaseCurrentlyPlaying?.id}`}>
        <div className="flex justify-center text-center text-xs my-1">
          {releaseCurrentlyPlaying && releaseCurrentlyPlaying.title
            ? releaseCurrentlyPlaying.title
            : "Unknown Album"}
        </div>
      </Link>
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
      <div className="flex justify-center items-center space-x-4 pt-2">
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
