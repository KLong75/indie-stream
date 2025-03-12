"use client";

import { useState, useRef, useEffect } from "react";

export default function CustomAudioPlayer() {
  const songs = [
    "/audio/starting-over/mp3/last-night.mp3",
    "/audio/starting-over/mp3/starting-over.mp3",
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function handlePlayPause() {
    const audioElement = audioRef.current;
    if (!audioElement) return;
    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
    } else {
      audioElement.play();
      setIsPlaying(true);
    }
  }

  function handleNext() {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  }

  function handlePrev() {
    setCurrentSongIndex((prev) =>
      prev - 1 < 0 ? songs.length - 1 : prev - 1
    );
    setIsPlaying(true);
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

  return (
    <div className="max-w-xs bg-gray-900 p-4 rounded">
      <audio ref={audioRef} src={songs[currentSongIndex]} controls={false} />
      <div className="flex items-center space-x-2 mb-2">
        <button className="bg-blue-600 px-2 py-1 rounded" onClick={handlePrev}>
          Prev
        </button>
        <button
          className="bg-blue-600 px-2 py-1 rounded"
          onClick={handlePlayPause}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button className="bg-blue-600 px-2 py-1 rounded" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="bg-gray-700 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}