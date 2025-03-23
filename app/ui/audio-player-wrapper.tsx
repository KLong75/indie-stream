// "use client";

// //import from react
// import { useState } from "react";
// //import components
// import CustomAudioPlayer from "@/app/ui/audio-player-custom-controls";
// // import definitions
// import { Song } from "@/app/lib/definitions";


// export default function AudioPlayerWrapper({
//   // initialSongs,
//   allSongs,
//   favoriteSongs,
//   // playlists,
//   // publicPlaylists,
//   formattedPlaylists,
//   formattedPublicPlaylists
// }: {
//   // initialSongs: Song[];
//   allSongs: Song[];
//   favoriteSongs: Song[];
//   // playlists: { id: string; title: string; songs: string[] }[];
//   publicPlaylists: { id: string; title: string; songs: string[] }[];
//   formattedPlaylists: { [key: string]: Song[] };
//   formattedPublicPlaylists: { [key: string]: Song[] };
// }) {
//   const [currentSongs, setCurrentSongs] = useState<Song[]>(favoriteSongs);
//   const [currentPlaylist, setCurrentPlaylist] = useState<string | null>("Favorite Songs");
//   const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

//   const handleAllSongsClick = () => {
//     setCurrentSongs(
//       allSongs.filter((song): song is Song => !!song && !!song.file_key)
//     );
//     setCurrentPlaylist("All Songs");
//   };

//   const handleFavoriteSongsClick = () => {
//     setCurrentSongs(
//       favoriteSongs.filter((song): song is Song => !!song && !!song.file_key)
//     );
//     setCurrentPlaylist("Favorite Songs");
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };


//   return (
//     <>
//       <button onClick={handleAllSongsClick} className="p-4 cursor-pointer">All Songs</button>
//       <button onClick={handleFavoriteSongsClick} className="p-4 cursor-pointer">Favorite Songs</button>
//       <div className="relative inline-block text-left">
//         <button onClick={toggleDropdown} className="p-4 cursor-pointer">
//           Playlists
//         </button>
//         {dropdownVisible && (
//           <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//             <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
//               {Object.keys(formattedPlaylists).map((playlistKey) => (
//                 <button
//                   key={playlistKey}
//                   onClick={() => {
//                     setCurrentSongs(
//                       formattedPlaylists[playlistKey].filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist(playlistKey);
//                     setDropdownVisible(false); // Close dropdown after selection
//                   }}
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
//                 >
//                   {playlistKey}
//                 </button>
//               ))}
//               {Object.keys(formattedPublicPlaylists).map((playlistKey) => (
//                 <button
//                   key={playlistKey}
//                   onClick={() => {
//                     setCurrentSongs(
//                       formattedPublicPlaylists[playlistKey].filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist(playlistKey);
//                     setDropdownVisible(false); // Close dropdown after selection
//                   }}
//                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
//                 >
//                   {playlistKey}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//       <span className="p-4">Current Playlist: {currentPlaylist}</span>
//       <CustomAudioPlayer songs={currentSongs} />
//     </>
//   );
// }


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
  formattedPlaylists,
  formattedPublicPlaylists,
}: {
  allSongs: Song[];
  savedSongs: Song[];
  formattedPlaylists: { [key: string]: Song[] };
  formattedPublicPlaylists: { [key: string]: Song[] };
}) {
  const [currentSongs, setCurrentSongs] = useState<Song[]>(savedSongs);
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>("Saved Songs");
  const [playlistsDropdownVisible, setPlaylistsDropdownVisible] = useState<boolean>(false);
  const [publicPlaylistsDropdownVisible, setPublicPlaylistsDropdownVisible] = useState<boolean>(false);

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


  return (
    <>
      <button onClick={handleAllSongsClick} className="p-4 cursor-pointer">All Songs</button>
      <button onClick={handleSavedSongsClick} className="p-4 cursor-pointer">Saved Songs</button>
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
      <span className="p-4">Current Playlist: {currentPlaylist}</span>
      <CustomAudioPlayer songs={currentSongs} />
    </>
  );
}