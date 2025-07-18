"use client";

// import from react
import { useState } from "react";
// import components
import CustomAudioPlayer from "@/app/ui/audio-player-custom-controls";
// import definitions
import { Song } from "@/app/lib/definitions";
// import icons
import { RxCrossCircled } from "react-icons/rx";

export default function AudioPlayerWrapper({
  allSongs,
  savedSongs,
  allReleases,
  savedReleases,
  formattedPlaylists,
  formattedPublicPlaylists,
}: {
  allSongs: Song[];
  savedSongs: Song[];
  allReleases: { [key: string]: Song[]; };
  savedReleases: { [key: string]: Song[] };
  formattedPlaylists: { [key: string]: Song[] };
  formattedPublicPlaylists: { [key: string]: Song[] };
}) {
  const [currentSongs, setCurrentSongs] = useState<Song[]>(
    savedSongs.length > 0 ? savedSongs : allSongs
  );
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>("Saved Songs");
  const [playlistsDropdownVisible, setPlaylistsDropdownVisible] = useState<boolean>(false);
  const [publicPlaylistsDropdownVisible, setPublicPlaylistsDropdownVisible] = useState<boolean>(false);
  const [allReleasesDropdownVisible, setAllReleasesDropdownVisible] = useState<boolean>(false);
  const [savedReleasesDropdownVisible, setSavedReleasesDropdownVisible] = useState<boolean>(false);


  const handleAllSongsClick = () => {
    setCurrentSongs(
      allSongs.filter((song): song is Song => !!song && !!song.file_key)
    );
    setCurrentPlaylist("All Songs");
  };

  const handleSavedSongsClick = () => {
    setCurrentSongs(
      savedSongs.filter((song): song is Song => !!song && !!song.file_key)
    );
    setCurrentPlaylist("Saved Songs");
  };

  const togglePlaylistsDropdown = () => {
    setPlaylistsDropdownVisible(!playlistsDropdownVisible);
    setPublicPlaylistsDropdownVisible(false); // Close public playlists dropdown when opening playlists dropdown
  };

  const togglePublicPlaylistsDropdown = () => {
    setPublicPlaylistsDropdownVisible(!publicPlaylistsDropdownVisible);
    setPlaylistsDropdownVisible(false); // Close playlists dropdown when opening public playlists dropdown
  };

  const handleClosePlaylistsDropdown = () => {
    setPlaylistsDropdownVisible(false);
  }

  const handleClosePublicPlaylistsDropdown = () => {
    setPublicPlaylistsDropdownVisible(false);
  }

  const handleCloseAllReleasesDropdown = () => {
    setAllReleasesDropdownVisible(false);
  };
  const handleCloseSavedReleasesDropdown = () => {
    setSavedReleasesDropdownVisible(false);
  };

  const toggleAllReleasesDropdown = () => {
    setAllReleasesDropdownVisible(!allReleasesDropdownVisible);
    setSavedReleasesDropdownVisible(false); // Close saved releases dropdown when opening all releases dropdown
  };

  const toggleSavedReleasesDropdown = () => {
    setSavedReleasesDropdownVisible(!savedReleasesDropdownVisible);
    setAllReleasesDropdownVisible(false); // Close all releases dropdown when opening saved releases dropdown
  };

  return (
    <>
      <button onClick={handleAllSongsClick} className="p-4 cursor-pointer">All Songs</button>
      <button onClick={handleSavedSongsClick} className="p-4 cursor-pointer">Saved Songs</button>

      <div className="relative inline-block text-left">
        <button onClick={toggleAllReleasesDropdown} className="p-4 cursor-pointer">
          All Releases
        </button>
        {allReleasesDropdownVisible && (
          <div className="z-50 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button onClick={toggleAllReleasesDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                <RxCrossCircled size={18}/>
              </button>
            </div>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {Object.keys(allReleases).map((releaseKey) => (
                <button
                  key={releaseKey}
                  onClick={() => {
                    setCurrentSongs(
                      allReleases[releaseKey].filter(
                        (song): song is Song => !!song && !!song.file_key
                      )
                    );
                    setCurrentPlaylist(releaseKey);
                    setAllReleasesDropdownVisible(false); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer"
                >
                  {releaseKey}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>  
      <div className="relative inline-block text-left">
        <button onClick={toggleSavedReleasesDropdown} className="p-4 cursor-pointer">
          Saved Releases
        </button>
        {savedReleasesDropdownVisible && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button onClick={handleCloseSavedReleasesDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                <RxCrossCircled size={18}/>
              </button>
            </div>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {Object.keys(savedReleases).map((releaseKey) => (
                <button
                  key={releaseKey}
                  onClick={() => {
                    setCurrentSongs(
                      savedReleases[releaseKey].filter(
                        (song): song is Song => !!song && !!song.file_key
                      )
                    );
                    setCurrentPlaylist(releaseKey);
                    setSavedReleasesDropdownVisible(false); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer"
                >
                  {releaseKey}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative inline-block text-left">
        <button onClick={togglePlaylistsDropdown} className="p-4 cursor-pointer">
          Your Playlists
        </button>
        {playlistsDropdownVisible && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button onClick={handleClosePlaylistsDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
              <RxCrossCircled size={18}/>
              </button>
            </div>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
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
                    setPlaylistsDropdownVisible(false); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer"
                >
                  {playlistKey}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="relative inline-block text-left">
        <button onClick={togglePublicPlaylistsDropdown} className="p-4 cursor-pointer">
          Public Playlists
        </button>
        {publicPlaylistsDropdownVisible && (
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
             <div className="flex justify-end">
              <button onClick={handleClosePublicPlaylistsDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
              <RxCrossCircled size={18}/>
              </button>
            </div>
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {Object.keys(formattedPublicPlaylists).map((playlistKey) => (
                <button
                  key={playlistKey}
                  onClick={() => {
                    setCurrentSongs(
                      formattedPublicPlaylists[playlistKey].filter(
                        (song): song is Song => !!song && !!song.file_key
                      )
                    );
                    setCurrentPlaylist(playlistKey);
                    setPublicPlaylistsDropdownVisible(false); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer"
                >
                  {playlistKey}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="px-4 pt-4 flex justify-center">Current Playlist: {currentPlaylist}</div>
      <CustomAudioPlayer songs={currentSongs} />
    </>
  );
}