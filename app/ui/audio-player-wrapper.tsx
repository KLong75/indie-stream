"use client";

//import from react
import { useState } from "react";
//import components
import CustomAudioPlayer from "@/app/ui/audio-player-custom-controls";
// import definitions
import { Song } from "@/app/lib/definitions";

export default function AudioPlayerWrapper({
  initialSongs,
  allSongs,
  playlists,
}: {
  initialSongs: Song[];
  allSongs: Song[];
  playlists: { id: string; title: string; songs: string[] }[];
}) {
  const [currentSongs, setCurrentSongs] = useState<Song[]>(initialSongs);

  const handleAllSongsClick = () => {
    setCurrentSongs(allSongs);
  };

  // const handlePlaylistClick = (playlistId: string) => {
    

  return (
    <>
    <button onClick={handleAllSongsClick}>All Songs</button>
    

      <CustomAudioPlayer songs={currentSongs} />
    </>
  );
}