"use client";

// import { useState } from "react";

// export default function LocalAudioPlayer() {
//   const [tracks, setTracks] = useState<string[]>([]);

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!e.target.files) return;
//     const filesArray = Array.from(e.target.files);
//     const fileURLs = filesArray.map((file) => URL.createObjectURL(file));
//     setTracks(fileURLs);
//   };

//   return (
//     <div>
//       <h2>Local Audio Player</h2>
//       <input
//         type="file"
//         multiple
//         accept="audio/*"
//         onChange={handleFileSelect}
//       />
//       <div>
//         {tracks.map((src, i) => (
//           <audio key={i} src={src} controls />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState, useRef, useEffect } from "react";

interface Track {
  name: string;
  url: string;
}

export default function LocalAudioPlayer() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // When the user picks a folder, filter audio files, collect URLs
  const handleDirectorySelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const allFiles = Array.from(e.target.files);
    const audioFiles = allFiles.filter((file) => file.type.startsWith("audio/"));
    const newTracks = audioFiles.map((file) => ({
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    setTracks(newTracks);
    setCurrentIndex(0);
  };

  // Play the selected track
  const playTrack = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      audioElement.play();
    }
  };

  // Go to previous track
  const handlePrev = () => {
    if (tracks.length === 0) return;
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? tracks.length - 1 : prev - 1
    );
  };

  // Go to next track
  const handleNext = () => {
    if (tracks.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  // Whenever currentIndex changes, load that track
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      playTrack();
    }
  }, [currentIndex]);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Local Folder Audio Player</h2>
      <p>Chrome-based browsers can select a folder with webkitdirectory.</p>
      <input
        type="file"
        multiple
        accept="audio/*"
        ref={(input) => {
          if (input) {
            input.setAttribute("webkitdirectory", "true");
          }
        }}
        onChange={handleDirectorySelect}
      />

      {tracks.length > 0 && (
        <>
          <div style={{ marginTop: "1rem" }}>
            <strong>Now Playing:</strong>{" "}
            {tracks[currentIndex]?.name || "No track selected"}
          </div>

          <audio
            ref={audioRef}
            src={tracks[currentIndex]?.url || ""}
            controls
            style={{ display: "block", marginBottom: "1rem", marginTop: "0.5rem" }}
          />

          <div>
            <button onClick={handlePrev} style={{ marginRight: "0.5rem" }}>
              Prev
            </button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
}