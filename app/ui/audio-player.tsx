// "use client";

// import { useState, useEffect, useRef } from "react";

// export default function AudioPlayer() {
//   const songs = [
//     "/audio/starting-over/mp3/last-night.mp3",
//     "/audio/starting-over/mp3/starting-over.mp3",
//     "/audio/starting-over/mp3/sing-me-to-sleep.mp3",
//   ];
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   useEffect(() => {
//     const audioEl = audioRef.current;
//     if (!audioEl) return;

//     const handleEnded = () => {
//       setCurrentSongIndex((i) => (i + 1) % songs.length);
//     };

//     audioEl.addEventListener("ended", handleEnded);
//     return () => audioEl.removeEventListener("ended", handleEnded);
//   }, [currentSongIndex, songs.length]);

//   return (
//     <audio ref={audioRef} controls src={songs[currentSongIndex]}>
//       Your browser does not support the audio element.
//     </audio>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";

export default function AudioPlayer() {
  const songs = [
    "/audio/music/the-long-emergency/starting-over/mp3/last-night.mp3",
    "/audio/music/the-long-emergency/starting-over/mp3/starting-over.mp3",
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const handleEnded = () => {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    };

    audioEl.addEventListener("ended", handleEnded);
    return () => audioEl.removeEventListener("ended", handleEnded);
  }, [currentSongIndex, songs.length]);

  function handleNext() {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  }

  function handlePrev() {
    setCurrentSongIndex((prev) => (prev - 1 < 0 ? songs.length - 1 : prev - 1));
  }

  return (
    <div>
      <audio 
        ref={audioRef} 
        controls 
        // src={songs[currentSongIndex]}
        src="https://4ykxjgur5y.ufs.sh/f/9Dk0lBirZ3pQHHMHDqkDqFsTZb24YWOQ8GtirIXajUhNneS1"
        className="border-red-500 border-2 rounded-md bg-black"
      >
        Your browser does not support the audio element.
      </audio>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}
