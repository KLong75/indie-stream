"use client";

//import from react
import { useState } from "react";
//import components
import CustomAudioPlayer from "@/app/ui/audio-player-custom-controls";
// import definitions
import { Song } from "@/app/lib/definitions";
import { format } from "path";
import { set } from "zod";

export default function AudioPlayerWrapper({
  // initialSongs,
  allSongs,
  favoriteSongs,
  playlists,
  publicPlaylists,
  formattedPlaylists,
}: {
  // initialSongs: Song[];
  allSongs: Song[];
  favoriteSongs: Song[];
  playlists: { id: string; title: string; songs: string[] }[];
  publicPlaylists: { id: string; title: string; songs: string[] }[];
  formattedPlaylists: { [key: string]: Song[] };
}) {
  const [currentSongs, setCurrentSongs] = useState<Song[]>(favoriteSongs);
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>("Favorite Songs");
  // const formatPlaylist = ({ playlist }: { playlist: { id: string; title: string; songs: string[] } }) => {
  //   const songIds = playlist.songs;
  //   console.log('songIds', songIds);
  // }
  // formatPlaylist({ playlist: playlists[0] });

  const handleAllSongsClick = () => {
    setCurrentSongs(
      allSongs.filter((song): song is Song => !!song && !!song.file_key)
    );
    setCurrentPlaylist("All Songs");
  };

  const handleFavoriteSongsClick = () => {
    setCurrentSongs(
      favoriteSongs.filter((song): song is Song => !!song && !!song.file_key)
    );
    setCurrentPlaylist("Favorite Songs");
  };

  // const handlePlaylistClick = (playlistId: string) => {

  return (
    <>
      <button onClick={handleAllSongsClick} className="p-4">All Songs</button>
      <button onClick={handleFavoriteSongsClick} className="p-4">Favorite Songs</button>
      {Object.keys(formattedPlaylists).map((playlistKey) => (
        <button
          key={playlistKey}
          onClick={() => {
            setCurrentSongs(
              formattedPlaylists[playlistKey].filter(
                (song): song is Song => !!song && !!song.file_key
              )
            );
            setCurrentPlaylist(playlistKey);
          }}
          className="p-4"
        >
          {playlistKey}
        </button>
      ))}
      <span className="p-4">Current Playlist: {currentPlaylist}</span>
      <CustomAudioPlayer songs={currentSongs} />
    </>
  );
}
