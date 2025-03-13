"use client";

import { useState, useRef, useEffect } from "react";
import { PiPlayPauseBold } from "react-icons/pi";
import { RxTrackPrevious } from "react-icons/rx";
import { RxTrackNext } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { RxPause } from "react-icons/rx";
import { RxDoubleArrowRight } from "react-icons/rx";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { TbPlaylistAdd } from "react-icons/tb";
import { RiPlayListAddLine } from "react-icons/ri";
import { RiPlayListFill } from "react-icons/ri";
import { RiPlayListLine } from "react-icons/ri";


export default function CustomAudioPlayer() {
  const songs = [
    "/audio/music/the-long-emergency/starting-over/mp3/last-night.mp3",
    "/audio/music/the-long-emergency/starting-over/mp3/starting-over.mp3",
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

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
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  }

  const handlePrev = () => {
    setCurrentSongIndex((prev) => (prev - 1 < 0 ? songs.length - 1 : prev - 1));
    setIsPlaying(true);
  }

  const fastForward = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    audioElement.currentTime += 10;
  }

  const rewind = () =>{
    const audioElement = audioRef.current;
    if (!audioElement) return;
    audioElement.currentTime -= 10;
  }

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const updateProgress = () => {
      const { currentTime, duration } = audioElement;
      setProgress((currentTime / duration) * 100);
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
  }, [currentSongIndex]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    const updateDuration = () => {
      setDuration(audioElement.duration);
    };
    audioElement.addEventListener("loadedmetadata", updateDuration);
    return () => {
      audioElement.removeEventListener("loadedmetadata", updateDuration);
    };
  }, [currentSongIndex]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bg-gray-900 p-4 rounded my-4 mx-6 tracking-wide">
      <audio ref={audioRef} src={songs[currentSongIndex]} controls={false} />
      <div className="flex justify-center text-center">Song Title</div>
      <div className="flex justify-center text-center text-xs my-1">Artist Name</div>
      <div className="flex justify-center text-center text-xs my-1">Album Title</div>
      <div className="bg-gray-700 h-2 rounded mb-4">
        
        <div
          className="relative bg-blue-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
        {/* start timer */}
        <div className="flex justify-between text-xs text-gray-400">
          <div>{formatTime(audioRef.current?.currentTime || 0)}</div>
          <div>{formatTime((audioRef.current?.duration || 0) - (audioRef.current?.currentTime || 0))}</div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <button className="bg-blue-600 px-2 py-1 rounded" onClick={handlePrev}>
          <RxTrackPrevious />
        </button>
        <button className="bg-blue-600 px-2 py-1 rounded" onClick={rewind}>
          <RxDoubleArrowLeft />
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded"
          onClick={handlePlayPause}>
          {isPlaying ? <RxPause /> : <RxPlay />}
        </button>
        <button className="bg-blue-600 px-2 py-1 rounded" onClick={fastForward}>
          <RxDoubleArrowRight />
        </button>
        <button className="bg-blue-600 px-2 py-1 rounded" onClick={handleNext}>
          <RxTrackNext />
        </button>
      </div>
    </div>
  );
}