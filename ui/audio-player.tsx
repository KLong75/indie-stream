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
// import actions
import { incrementSongPlayCount } from "@/lib/actions";
// import context
import { useAudioPlayerExpanded } from "@/context/audio-player-expanded-context-provider";
// import icons
// import { PiPlayPauseBold } from "react-icons/pi";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { RxPause } from "react-icons/rx";
import { RxSpeakerLoud } from "react-icons/rx";
import { RxSpeakerOff } from "react-icons/rx";
// import { RxStop } from "react-icons/rx";
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
  setCurrentPlaylist,
}: {
  songs: Song[];
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentSongIndex: number;
  setCurrentSongIndex: (index: number) => void;
  // isAudioPlayerExpanded: boolean;
  // setIsAudioPlayerExpanded: (isExpanded: boolean) => void;
  currentPlaylist: string;
  setCurrentPlaylist: (playlist: string) => void;
}) {
  const { isAudioPlayerExpanded, setIsAudioPlayerExpanded } =
    useAudioPlayerExpanded();
  // console.log("currentPlaylist in AudioPlayer:", currentPlaylist);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [artistCurrentlyPlaying, setArtistCurrentlyPlaying] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [releaseCurrentlyPlaying, setReleaseCurrentlyPlaying] =
    useState<Release | null>(null);

  const handleShuffle = () => {
    const turningOn = !shuffle;
    setShuffle(turningOn);
    if (turningOn && songs.length > 1) {
      let newIndex = currentSongIndex;

      while (newIndex === currentSongIndex) {
        newIndex = Math.floor(Math.random() * songs.length);
      }
      // reset progress
      const newSongId = songs[newIndex]?.id;
      const saved = localStorage.getItem("audioPlayerState");
      let state = saved ? JSON.parse(saved) : {};
      state.songProgress = state.songProgress || {};
      state.songProgress[newSongId] = 0;
      localStorage.setItem("audioPlayerState", JSON.stringify(state));
      setCurrentSongIndex(newIndex);
      if (!isPlaying) setIsPlaying(true);
    } else if (turningOn && songs.length === 1 && !isPlaying) {
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    console.log("audioElement:", audioElement);
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
      const currentTime = audioElement.currentTime;
      console.log("Paused at:", currentTime);
      setIsPlaying(false);
    } else {
      audioElement.play();
      const currentTime = audioElement.currentTime;
      console.log("Playing from:", currentTime);
      setIsPlaying(true);
    }
  };

  // const handlePrev = () => {
  //   setCurrentSongIndex(
  //     currentSongIndex - 1 < 0 ? songs.length - 1 : currentSongIndex - 1
  //   );
  //   setIsPlaying(true);
  // };

  // const handleNext = () => {
  //   if (shuffle) {
  //     const randomIndex = Math.floor(Math.random() * songs.length);
  //     setCurrentSongIndex(randomIndex);
  //   } else {
  //     setCurrentSongIndex((currentSongIndex + 1) % songs.length);
  //   }
  //   setIsPlaying(true);
  // };

  const handlePrev = () => {
    let prevIndex =
      currentSongIndex - 1 < 0 ? songs.length - 1 : currentSongIndex - 1;
    // --- Reset progress for the previous song ---
    const prevSongId = songs[prevIndex]?.id;
    const saved = localStorage.getItem("audioPlayerState");
    let state = saved ? JSON.parse(saved) : {};
    state.songProgress = state.songProgress || {};
    state.songProgress[prevSongId] = 0;
    localStorage.setItem("audioPlayerState", JSON.stringify(state));
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true);
  };

  const handleNext = () => {
    let nextIndex;
    if (shuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentSongIndex + 1) % songs.length;
    }

    // --- Reset progress for the next song ---
    const nextSongId = songs[nextIndex]?.id;
    const saved = localStorage.getItem("audioPlayerState");
    let state = saved ? JSON.parse(saved) : {};
    state.songProgress = state.songProgress || {};
    state.songProgress[nextSongId] = 0;
    localStorage.setItem("audioPlayerState", JSON.stringify(state));
    setCurrentSongIndex(nextIndex);
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
      incrementSongPlayCount(songs[currentSongIndex].id).catch((err) => {
        console.error("Error incrementing play count:", err);
      });
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

  // --- CHANGED: Save progress per song ---
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const updateProgress = () => {
      const { currentTime, duration } = audioElement;
      const newProgress = (currentTime / duration) * 100 || 0;
      setProgress(newProgress);

      // Get previous state or create new
      const saved = localStorage.getItem("audioPlayerState");
      let state = saved ? JSON.parse(saved) : {};
      state.currentSongIndex = currentSongIndex;
      state.currentPlaylist = currentPlaylist;
      state.isPlaying = isPlaying;
      state.isMuted = isMuted;
      state.shuffle = shuffle;

      // Save progress for this song
      state.songProgress = state.songProgress || {};
      state.songProgress[songs[currentSongIndex]?.id] = newProgress;

      localStorage.setItem("audioPlayerState", JSON.stringify(state));
    };
    audioElement.addEventListener("timeupdate", updateProgress);
    return () => {
      audioElement.removeEventListener("timeupdate", updateProgress);
    };
  }, [currentSongIndex, currentPlaylist, isPlaying, isMuted, shuffle, songs]);

  // useEffect(() => {
  //   const audioElement = audioRef.current;
  //   if (!audioElement) return;
  //   audioElement.load();
  //   const handleCanPlay = () => {
  //     if (isPlaying) {
  //       audioElement.play();
  //     }
  //   };
  //   audioElement.addEventListener("canplay", handleCanPlay);
  //   return () => {
  //     audioElement.removeEventListener("canplay", handleCanPlay);
  //   };
  // }, [currentSongIndex]);

  // --- CHANGED: Restore progress for current song only ---
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const saved = localStorage.getItem("audioPlayerState");
    if (!saved) return;
    const state = JSON.parse(saved);

    function setAudioPosition() {
      const songId = songs[currentSongIndex]?.id;
      const songProgress = state.songProgress?.[songId];
      if (songProgress !== undefined && audioElement && audioElement.duration) {
        audioElement.currentTime = (songProgress / 100) * audioElement.duration;
        setProgress(songProgress);
        // --- REMOVED: Do not set isPlaying or call play() here ---
      }
    }

    audioElement.addEventListener("loadedmetadata", setAudioPosition);

    if (audioElement.duration) {
      setAudioPosition();
    }

    return () => {
      audioElement.removeEventListener("loadedmetadata", setAudioPosition);
    };
  }, [currentSongIndex, currentPlaylist, songs]);

  // --- ADDED: Sync isPlaying state with audio element ---
  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.play().catch(() => {});
    } else {
      audioElement.pause();
    }
  }, [isPlaying]);
  // --- END ADDED ---

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const updateDuration = () => setDuration(audioElement.duration || 0);
    audioElement.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audioElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.play().catch(() => {});
    }
  }, [isPlaying, currentSongIndex]);

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
          muted={isMuted}
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
          "flex justify-center text-xs",
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
          <Link 
            href={`/songs/${songs[currentSongIndex]?.id}`}
            onClick={() => setIsAudioPlayerExpanded(false)}
          >
            <div
              className={clsx(
                "truncate font-medium",
                isAudioPlayerExpanded ? "text-lg" : "text-sm"
              )}>
              {(songs[currentSongIndex]?.title?.length ?? 0) > 24
                ? songs[currentSongIndex].title.slice(0, 24) + "…"
                : songs[currentSongIndex]?.title || "No song selected"}
            </div>
          </Link>
          <Link
            href={`/artists/${artistCurrentlyPlaying?.id}`}
            onClick={() => setIsAudioPlayerExpanded(false)}>
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
            onClick={() => setIsAudioPlayerExpanded(false)}>
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
              ? "justify-between w-full"
              : "space-x-3 absolute right-4"
          )}>
          {isAudioPlayerExpanded && (
            <button
              className="rounded-full"
              onClick={handleShuffle}
              title={shuffle ? "Disable Shuffle" : "Enable Shuffle"}>
              {shuffle ? <RxArrowRight size={24} /> : <RxShuffle size={24} />}
            </button>
          )}
          <button
            className=""
            onClick={handlePrev}
            title="Previous">
            <RxTrackPrevious size={isAudioPlayerExpanded ? 24 : 20} />
          </button>
          {isAudioPlayerExpanded && (
            <button
              className=""
              onClick={rewind}
              title="Rewind 10s">
              <MdOutlineReplay10 size={24} />
            </button>
          )}
          <button
            className={`${
              isAudioPlayerExpanded ? "" : ""
            } rounded-full`}
            onClick={handlePlayPause}
            title={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              <RxPause size={isAudioPlayerExpanded ? 42 : 28} />
            ) : (
              <RxPlay size={isAudioPlayerExpanded ? 42 : 28} />
            )}
          </button>

          {isAudioPlayerExpanded && (
            <button
              className=""
              onClick={fastForward}
              title="Forward 10s">
              <MdOutlineForward10 size={24} />
            </button>
          )}
          <button
            className=""
            onClick={handleNext}
            title="Next">
            <RxTrackNext size={isAudioPlayerExpanded ? 24 : 20} />
          </button>
          {isAudioPlayerExpanded && (
            <button
              className=""
              onClick={() => setIsMuted((m) => !m)}
              title={isMuted ? "Unmute" : "Mute"}>
              {isMuted ? <RxSpeakerLoud size={24} /> : <RxSpeakerOff size={24} />}
            </button>
          )}
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
