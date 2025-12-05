"use client";
// import from next
import Image from "next/image";
import Link from "next/link";
// import from react
import { useState, useRef, useEffect } from "react";
// import clsx
import clsx from "clsx";
// import definitions
import { Song, Release } from "../lib/definitions";
// import context
import { useAudioPlayerExpanded } from "@/context/audio-player-expanded-context-provider";
// import icons
// import { PiPlayPauseBold } from "react-icons/pi";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { RxPause } from "react-icons/rx";
import { RxShuffle } from "react-icons/rx";
import { RxArrowRight } from "react-icons/rx";
import { RxChevronDown } from "react-icons/rx";
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
  // isAudioPlayerExpanded,
  // setIsAudioPlayerExpanded,
  currentPlaylist,
}: {
  songs: Song[];
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  // isAudioPlayerExpanded: boolean;
  // setIsAudioPlayerExpanded: (isExpanded: boolean) => void;
  currentPlaylist: string;
}) {
  const { isAudioPlayerExpanded, setIsAudioPlayerExpanded } = useAudioPlayerExpanded();
  // console.log("currentPlaylist in AudioPlayer:", currentPlaylist);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [artistCurrentlyPlaying, setArtistCurrentlyPlaying] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [releaseCurrentlyPlaying, setReleaseCurrentlyPlaying] =
    useState<Release | null>(null);
  // const handleShuffle = () => {
  //   setShuffle((wasShuffle) => !wasShuffle);
  // };

  const handleShuffle = () => {
    const turningOn = !shuffle;
    setShuffle(turningOn);
    if (turningOn && songs.length > 1) {
      let newIndex = currentSongIndex;
      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      setCurrentSongIndex(newIndex);
      if (!isPlaying) setIsPlaying(true);
    } else if (turningOn && songs.length === 1 && !isPlaying) {
      setIsPlaying(true);
    }
  };
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

  return (
    <div
      className={clsx(
        "p-4 tracking-wide transition-all duration-300",
        isAudioPlayerExpanded ? "py-0" : "py-0"
      )}>
        
      {/* Always render the audio element */}
      {songs[currentSongIndex] && songs[currentSongIndex].file_key ? (
        <audio
          ref={audioRef}
          src={`https://4ykxjgur5y.ufs.sh/f/${songs[currentSongIndex].file_key}`}
          controls={false}
          style={{ display: "none" }}
        />
      ) : null}
      <button
        className={clsx(
          "absolute bg-gray-700 px-2 py-1 rounded-full",
          isAudioPlayerExpanded ? "top-4 left-4" : "top-2 left-2"
        )}
        onClick={() => setIsAudioPlayerExpanded(!isAudioPlayerExpanded)}
        title={isAudioPlayerExpanded ? "Collapse Player" : "Expand Player"}>
        <RxChevronDown
          className={clsx(
            "transition-transform duration-200",
            isAudioPlayerExpanded ? "" : "rotate-180"
          )}
        />
      </button>
      <div
        className={clsx(
          "flex justify-center",
          isAudioPlayerExpanded ? "mb-6" : "mt-4"
        )}>
        {`Current playlist: ${currentPlaylist}`}
      </div>
      <div
        className={clsx(
          "flex items-center w-full transition-all duration-300",
          isAudioPlayerExpanded
            ? "justify-center h-auto p-4 pt-2 flex-col space-y-4"
            : "justify-center h-auto p-4 pt-2 flex-row space-x-3"
        )}>
        <Image
          priority
          fetchPriority="high"
          src={`https://4ykxjgur5y.ufs.sh/f/${
            releaseCurrentlyPlaying
              ? releaseCurrentlyPlaying.cover_img_file_key
              : "9Dk0lBirZ3pQA66Rb9Bygdn5G8QFv0hfpWE7KZqxj3lTc9wC"
          }`}
          width={isAudioPlayerExpanded ? 200 : 48}
          height={isAudioPlayerExpanded ? 200 : 48}
          alt={`${releaseCurrentlyPlaying?.title || "cover image"}`}
          className={clsx(
            "rounded shadow z-40",
            isAudioPlayerExpanded ? "rounded-lg shadow-2xl" : ""
          )}
        />
        <div
          className={clsx(
            "flex-1 min-w-0",
            isAudioPlayerExpanded ? "w-full text-center" : ""
          )}>
          {/* <Link href={`/songs/${songs[currentSongIndex]?.id}`}> */}
          <div
            className={clsx(
              "truncate font-medium",
              isAudioPlayerExpanded ? "text-lg" : "text-sm"
            )}>
            {songs[currentSongIndex]?.title || "No song selected"}
          </div>
          {/* </Link> */}
          <Link href={`/artists/${artistCurrentlyPlaying?.id}`}
          onClick={() => setIsAudioPlayerExpanded(false)}
          >
            <div
              className={clsx(
                "truncate text-gray-400",
                isAudioPlayerExpanded ? "text-base" : "text-xs"
              )}>
              {artistCurrentlyPlaying?.name || "Unknown Artist"}
            </div>
          </Link>
          <Link 
            href={`/releases/${releaseCurrentlyPlaying?.id}`}
            onClick={() => setIsAudioPlayerExpanded(false)}
          >
            <div
              className={clsx(
                "truncate text-gray-400",
                isAudioPlayerExpanded ? "text-base" : "text-xs"
              )}>
              {releaseCurrentlyPlaying?.title || "Unknown Album"}
            </div>
          </Link>
        </div>

        {/* Progress bar and time, only in expanded mode */}
        {isAudioPlayerExpanded && (
          <div className="w-full">
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
        )}

        {/* Controls */}
        <div
          className={clsx(
            "flex items-center",
            isAudioPlayerExpanded
              ? "justify-around w-full"
              : "space-x-2 ml-auto"
          )}>
          {isAudioPlayerExpanded && (
            <button
              className="bg-blue-600 px-2 py-1 rounded-full"
              onClick={handleShuffle}
              title="Shuffle">
              {shuffle ? <RxArrowRight /> : <RxShuffle />}
            </button>
          )}
          <button
            className="bg-blue-600 px-2 py-1 rounded-full"
            onClick={handlePrev}
            title="Previous">
            <RxTrackPrevious />
          </button>
          {isAudioPlayerExpanded && (
            <button
              className="bg-blue-600 px-2 py-1 rounded-full"
              onClick={rewind}
              title="Rewind 10s">
              <MdOutlineReplay10 />
            </button>
          )}
          <button
            className="bg-blue-600 px-2 py-1 rounded-full"
            onClick={handlePlayPause}
            title={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <RxPause /> : <RxPlay />}
          </button>
          {isAudioPlayerExpanded && (
            <button
              className="bg-blue-600 px-2 py-1 rounded-full"
              onClick={fastForward}
              title="Forward 10s">
              <MdOutlineForward10 />
            </button>
          )}
          <button
            className="bg-blue-600 px-2 py-1 rounded-full"
            onClick={handleNext}
            title="Next">
            <RxTrackNext />
          </button>
          {/* <button
            className={clsx(
              "ml-1 bg-gray-700 px-2 py-1 rounded-full",
              isAudioPlayerExpanded ? "" : ""
            )}
            onClick={() => setIsAudioPlayerExpanded(!isAudioPlayerExpanded)}
            title={isAudioPlayerExpanded ? "Collapse Player" : "Expand Player"}>
            <RxChevronDown
              className={clsx(
                "transition-transform duration-200",
                isAudioPlayerExpanded ? "" : "rotate-180"
              )}
            />
          </button> */}
        </div>
      </div>
    </div>
  );
}
