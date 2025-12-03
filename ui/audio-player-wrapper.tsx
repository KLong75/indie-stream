// "use client";
// // import from react
// import { useState, useRef } from "react";
// // import components
// import AudioPlayer from "@/ui/audio-player";
// // import definitions
// import { Song } from "@/lib/definitions";
// // import icons
// // import { RxCrossCircled } from "react-icons/rx";
// import { RxChevronDown } from "react-icons/rx";
// import { RxCheck } from "react-icons/rx";
// // import from headless ui
// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from "@headlessui/react";
// // import from clsx
// import clsx from "clsx";

// export default function AudioPlayerWrapper({
//   allSongs,
//   savedSongs,
//   allReleases,
//   savedReleases,
//   formattedPlaylists,
//   formattedPublicPlaylists,
// }: {
//   allSongs: Song[];
//   savedSongs: Song[];
//   allReleases: { [key: string]: Song[] };
//   savedReleases: { [key: string]: Song[] };
//   formattedPlaylists: { [key: string]: Song[] };
//   formattedPublicPlaylists: { [key: string]: Song[] };
// }) {
//   const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [query, setQuery] = useState("");
//   const [allReleasesQuery, setAllReleasesQuery] = useState("");
//   const [savedReleasesQuery, setSavedReleasesQuery] = useState("");
//   const [playlistsQuery, setPlaylistsQuery] = useState("");
//   const [publicPlaylistsQuery, setPublicPlaylistsQuery] = useState("");
//   const [selected, setSelected] = useState<Song | null>(null);
//   const [selectedRelease, setSelectedRelease] = useState<string | null>(null);
//   const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
//   const [currentSongs, setCurrentSongs] = useState<Song[]>(
//     savedSongs.length > 0 ? savedSongs : allSongs
//   );
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(
//     "Saved Songs"
//   );
//   const allSongsInputRef = useRef<HTMLInputElement>(null);
//   const savedSongsInputRef = useRef<HTMLInputElement>(null);
//   const allReleasesInputRef = useRef<HTMLInputElement>(null);
//   const savedReleasesInputRef = useRef<HTMLInputElement>(null);
//   const playlistsInputRef = useRef<HTMLInputElement>(null);
//   const publicPlaylistsInputRef = useRef<HTMLInputElement>(null);
//   // console.log("currentSongs", currentSongs);
//   // const [playlistsDropdownVisible, setPlaylistsDropdownVisible] =
//   // useState<boolean>(false);
//   // const [publicPlaylistsDropdownVisible, setPublicPlaylistsDropdownVisible] =
//   //   useState<boolean>(false);
//   // const [allReleasesDropdownVisible, setAllReleasesDropdownVisible] =
//   //   useState<boolean>(false);
//   // const [savedReleasesDropdownVisible, setSavedReleasesDropdownVisible] =
//   //   useState<boolean>(false);

//   // const handleAllSongsClick = () => {
//   //   setCurrentSongs(
//   //     allSongs.filter((song): song is Song => !!song && !!song.file_key)
//   //   );
//   //   setCurrentPlaylist("All Songs");
//   // };

//   // const handleSavedSongsClick = () => {
//   //   setCurrentSongs(
//   //     savedSongs.filter((song): song is Song => !!song && !!song.file_key)
//   //   );
//   //   setCurrentPlaylist("Saved Songs");
//   // };

//   // const togglePlaylistsDropdown = () => {
//   //   setPlaylistsDropdownVisible(!playlistsDropdownVisible);
//   //   setPublicPlaylistsDropdownVisible(false); // Close public playlists dropdown when opening playlists dropdown
//   // };

//   // const togglePublicPlaylistsDropdown = () => {
//   //   setPublicPlaylistsDropdownVisible(!publicPlaylistsDropdownVisible);
//   //   setPlaylistsDropdownVisible(false); // Close playlists dropdown when opening public playlists dropdown
//   // };

//   // const toggleAllReleasesDropdown = () => {
//   //   setAllReleasesDropdownVisible(!allReleasesDropdownVisible);
//   //   setSavedReleasesDropdownVisible(false); // Close saved releases dropdown when opening all releases dropdown
//   // };

//   // const toggleSavedReleasesDropdown = () => {
//   //   setSavedReleasesDropdownVisible(!savedReleasesDropdownVisible);
//   //   setAllReleasesDropdownVisible(false); // Close all releases dropdown when opening saved releases dropdown
//   // };

//   // Filter songs by query
//   const allSongsFiltered =
//     query === ""
//       ? allSongs.filter((song): song is Song => !!song && !!song.file_key)
//       : allSongs.filter(
//           (song): song is Song =>
//             !!song &&
//             !!song.file_key &&
//             song.title.toLowerCase().includes(query.toLowerCase())
//         );

//   const savedSongsFiltered =
//     query === ""
//       ? savedSongs.filter((song): song is Song => !!song && !!song.file_key)
//       : savedSongs.filter(
//           (song): song is Song =>
//             !!song &&
//             !!song.file_key &&
//             song.title.toLowerCase().includes(query.toLowerCase())
//         );

//   return (
//     <div className="flex flex-col">
//       {/* <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
//         {/* <h2 className="text-lg font-semibold text-white">Audio Player</h2>
//         <button
//           onClick={() => setIsAudioPlayerExpanded(!isAudioPlayerExpanded)}
//           className="text-white hover:text-gray-300 focus:outline-none">
//           <div className="flex items-center gap-1 min-w-[90px]">
//             <RxChevronDown
//               className={clsx(
//                 "size-5 transition-transform duration-200",
//                 isAudioPlayerExpanded ? "" : "rotate-180"
//               )}
//               aria-label={isAudioPlayerExpanded ? "Collapse" : "Expand"}
//             />
//             {/* <span className={clsx(isAudioPlayerExpanded ? "block" : "hidden")}>
//               Collapse
//             </span>
//             <span className={clsx(isAudioPlayerExpanded ? "hidden" : "block")}>
//               Expand
//             </span>
//           </div>
//         </button>
//       </div> */}

//       {/* {isAudioPlayerExpanded ? ( */}
//         <>
//           {/* <div className="px-4 pt-4 flex justify-center">
//             {isPlaying
//               ? `Currently playing: ${currentPlaylist}`
//               : `Currently loaded: ${currentPlaylist}`}
//           </div> */}
//           <AudioPlayer
//             songs={currentSongs}
//             isPlaying={isPlaying}
//             setIsPlaying={setIsPlaying}
//             currentSongIndex={currentSongIndex}
//             setCurrentSongIndex={setCurrentSongIndex}
//             isAudioPlayerExpanded={isAudioPlayerExpanded}
//             setIsAudioPlayerExpanded={setIsAudioPlayerExpanded}
//             currentPlaylist={currentPlaylist ?? ""}
//           />
//           <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 px-6 py-2 mb-4">
//             <div className="">
//               <h3 className="text-center text-sm pb-1">All Songs</h3>
//               <Combobox
//                 value={selected}
//                 onChange={(song: Song | null) => {
//                   setSelected(song);
//                   if (song) {
//                     setCurrentSongs(
//                       allSongs.filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist("All Songs");
//                     const index = allSongs.findIndex((s) => s.id === song.id);
//                     setCurrentSongIndex(index >= 0 ? index : 0);
//                     // console.log("index", index);
//                     setIsPlaying(true);
//                   }
//                   // Remove focus from the input
//                   allSongsInputRef.current?.blur();
//                 }}
//                 onClose={() => setQuery("")}>
//                 <div className="relative">
//                   <ComboboxInput
//                     ref={allSongsInputRef}
//                     className={clsx(
//                       "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
//                       "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
//                     )}
//                     // the commented out line below sets the display value to the selected song title
//                     // displayValue={(song: Song) => song?.title || ""}
//                     // always show placeholder, never show selected value
//                     displayValue={() => ""}
//                     placeholder="All songs"
//                     onChange={(event) => setQuery(event.target.value)}
//                   />
//                   <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
//                     <RxChevronDown
//                       className="size-4 fill-white/60 group-data-hover:fill-white"
//                       tabIndex={0}
//                     />
//                   </ComboboxButton>
//                 </div>
//                 <ComboboxOptions
//                   anchor="bottom"
//                   transition
//                   className={clsx(
//                     "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
//                     "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
//                   )}>
//                   {allSongsFiltered.map((song) => (
//                     <ComboboxOption
//                       key={song.id}
//                       value={song}
//                       className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10 tab">
//                       <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
//                       <div className="text-sm/6 text-white">{song.title}</div>
//                     </ComboboxOption>
//                   ))}
//                 </ComboboxOptions>
//               </Combobox>
//             </div>

//             <div className="">
//               <h3 className="text-center text-sm pb-1">Saved Songs</h3>
//               <Combobox
//                 value={selected}
//                 onChange={(song: Song | null) => {
//                   setSelected(song);
//                   if (song) {
//                     setCurrentSongs(
//                       savedSongs.filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist("Your Saved Songs");
//                     const index = savedSongs.findIndex((s) => s.id === song.id);
//                     setCurrentSongIndex(index >= 0 ? index : 0);
//                     // console.log("index", index);
//                     setIsPlaying(true);
//                   }
//                   // Remove focus from the input
//                   savedSongsInputRef.current?.blur();
//                 }}
//                 onClose={() => setQuery("")}>
//                 <div className="relative">
//                   <ComboboxInput
//                     ref={savedSongsInputRef}
//                     className={clsx(
//                       "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
//                       "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
//                     )}
//                     // the commented out line below sets the display value to the selected song title
//                     // displayValue={(song: Song) => song?.title || ""}
//                     // always show placeholder, never show selected value
//                     displayValue={() => ""}
//                     placeholder="Saved songs"
//                     onChange={(event) => setQuery(event.target.value)}
//                   />
//                   <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
//                     <RxChevronDown
//                       className="size-4 fill-white/60 group-data-hover:fill-white"
//                       tabIndex={0}
//                     />
//                   </ComboboxButton>
//                 </div>
//                 <ComboboxOptions
//                   anchor="bottom"
//                   transition
//                   className={clsx(
//                     "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
//                     "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
//                   )}>
//                   {savedSongsFiltered.map((song) => (
//                     <ComboboxOption
//                       key={song.id}
//                       value={song}
//                       className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
//                       <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
//                       <div className="text-sm/6 text-white">{song.title}</div>
//                     </ComboboxOption>
//                   ))}
//                 </ComboboxOptions>
//               </Combobox>
//             </div>
//             <div>
//               <h3 className="text-center text-sm pb-1">All Releases</h3>
//               <Combobox
//                 value={selectedRelease}
//                 onChange={(releaseTitle: string | null) => {
//                   setSelectedRelease(releaseTitle);
//                   if (releaseTitle) {
//                     setCurrentSongs(
//                       allReleases[releaseTitle].filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist(releaseTitle);
//                     setCurrentSongIndex(0);
//                     setIsPlaying(true);
//                   }
//                   // Reset query so input shows placeholder again
//                   // setQuery("");
//                   // Remove focus from the input
//                   allReleasesInputRef.current?.blur();
//                 }}
//                 onClose={() => setAllReleasesQuery("")}>
//                 <div className="relative">
//                   <ComboboxInput
//                     ref={allReleasesInputRef}
//                     className={clsx(
//                       "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
//                       "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
//                     )}
//                     placeholder="All releases"
//                     value={allReleasesQuery}
//                     onChange={(event) =>
//                       setAllReleasesQuery(event.target.value)
//                     }
//                     // always show placeholder, never show selected value
//                     displayValue={() => ""}
//                   />
//                   <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
//                     <RxChevronDown
//                       className="size-4 fill-white/60 group-data-hover:fill-white"
//                       tabIndex={0}
//                     />
//                   </ComboboxButton>
//                 </div>
//                 <ComboboxOptions
//                   anchor="bottom"
//                   transition
//                   className={clsx(
//                     "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
//                     "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
//                   )}>
//                   {Object.keys(allReleases)
//                     .filter((releaseTitle) =>
//                       allReleasesQuery === ""
//                         ? true
//                         : releaseTitle
//                             .toLowerCase()
//                             .includes(allReleasesQuery.toLowerCase())
//                     )
//                     .map((releaseTitle) => (
//                       <ComboboxOption
//                         key={releaseTitle}
//                         value={releaseTitle}
//                         className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
//                         <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
//                         <div className="text-sm/6 text-white">
//                           {releaseTitle}
//                         </div>
//                       </ComboboxOption>
//                     ))}
//                 </ComboboxOptions>
//               </Combobox>
//             </div>

//             <div>
//               <h3 className="text-center text-sm pb-1">Saved Releases</h3>
//               <Combobox
//                 value={selectedRelease}
//                 onChange={(releaseTitle: string | null) => {
//                   setSelectedRelease(releaseTitle);
//                   if (releaseTitle) {
//                     setCurrentSongs(
//                       savedReleases[releaseTitle].filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist(releaseTitle);
//                     setCurrentSongIndex(0);
//                     setIsPlaying(true);
//                   }
//                   // Reset query so input shows placeholder again
//                   // setQuery("");
//                   // Remove focus from the input
//                   savedReleasesInputRef.current?.blur();
//                 }}
//                 onClose={() => setSavedReleasesQuery("")}>
//                 <div className="relative">
//                   <ComboboxInput
//                     ref={savedReleasesInputRef}
//                     className={clsx(
//                       "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
//                       "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
//                     )}
//                     placeholder="Saved releases"
//                     value={savedReleasesQuery}
//                     onChange={(event) =>
//                       setSavedReleasesQuery(event.target.value)
//                     }
//                     // always show placeholder, never show selected value
//                     displayValue={() => ""}
//                   />
//                   <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
//                     <RxChevronDown
//                       className="size-4 fill-white/60 group-data-hover:fill-white"
//                       tabIndex={0}
//                     />
//                   </ComboboxButton>
//                 </div>
//                 <ComboboxOptions
//                   anchor="bottom"
//                   transition
//                   className={clsx(
//                     "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
//                     "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
//                   )}>
//                   {Object.keys(savedReleases)
//                     .filter((releaseTitle) =>
//                       savedReleasesQuery === ""
//                         ? true
//                         : releaseTitle
//                             .toLowerCase()
//                             .includes(savedReleasesQuery.toLowerCase())
//                     )
//                     .map((releaseTitle) => (
//                       <ComboboxOption
//                         key={releaseTitle}
//                         value={releaseTitle}
//                         className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
//                         <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
//                         <div className="text-sm/6 text-white">
//                           {releaseTitle}
//                         </div>
//                       </ComboboxOption>
//                     ))}
//                 </ComboboxOptions>
//               </Combobox>
//             </div>
//             <div>
//               <h3 className="text-center text-sm pb-1">Your Playlists</h3>
//               <Combobox
//                 value={selectedPlaylist}
//                 onChange={(playlistTitle: string | null) => {
//                   setSelectedPlaylist(playlistTitle);
//                   if (playlistTitle) {
//                     setCurrentSongs(
//                       formattedPlaylists[playlistTitle].filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist(playlistTitle);
//                     setCurrentSongIndex(0);
//                     setIsPlaying(true);
//                   }
//                   // Reset query so input shows placeholder again
//                   setPlaylistsQuery("");
//                   // Remove focus from the input
//                   playlistsInputRef.current?.blur();
//                 }}
//                 onClose={() => setPlaylistsQuery("")}>
//                 <div className="relative">
//                   <ComboboxInput
//                     ref={playlistsInputRef}
//                     className={clsx(
//                       "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
//                       "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
//                     )}
//                     placeholder="Your playlists"
//                     value={playlistsQuery}
//                     onChange={(event) => setPlaylistsQuery(event.target.value)}
//                     // always show placeholder, never show selected value
//                     displayValue={() => ""}
//                   />
//                   <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
//                     <RxChevronDown
//                       className="size-4 fill-white/60 group-data-hover:fill-white"
//                       tabIndex={0}
//                     />
//                   </ComboboxButton>
//                 </div>
//                 <ComboboxOptions
//                   anchor="bottom"
//                   transition
//                   className={clsx(
//                     "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
//                     "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
//                   )}>
//                   {Object.keys(formattedPlaylists)
//                     .filter((playlistTitle) =>
//                       playlistsQuery === ""
//                         ? true
//                         : playlistTitle
//                             .toLowerCase()
//                             .includes(playlistsQuery.toLowerCase())
//                     )
//                     .map((playlistTitle) => (
//                       <ComboboxOption
//                         key={playlistTitle}
//                         value={playlistTitle}
//                         className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
//                         <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
//                         <div className="text-sm/6 text-white">
//                           {playlistTitle}
//                         </div>
//                       </ComboboxOption>
//                     ))}
//                 </ComboboxOptions>
//               </Combobox>
//             </div>
//             <div>
//               <h3 className="text-center text-sm pb-1">Public Playlists</h3>
//               <Combobox
//                 value={selectedPlaylist}
//                 onChange={(playlistTitle: string | null) => {
//                   setSelectedPlaylist(playlistTitle);
//                   if (playlistTitle) {
//                     setCurrentSongs(
//                       formattedPublicPlaylists[playlistTitle].filter(
//                         (song): song is Song => !!song && !!song.file_key
//                       )
//                     );
//                     setCurrentPlaylist(playlistTitle);
//                     setCurrentSongIndex(0);
//                     setIsPlaying(true);
//                   }
//                   // Reset query so input shows placeholder again
//                   setPublicPlaylistsQuery("");
//                   // Remove focus from the input
//                   publicPlaylistsInputRef.current?.blur();
//                 }}
//                 onClose={() => setPublicPlaylistsQuery("")}>
//                 <div className="relative">
//                   <ComboboxInput
//                     ref={publicPlaylistsInputRef}
//                     className={clsx(
//                       "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
//                       "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
//                     )}
//                     placeholder="Public playlists"
//                     value={publicPlaylistsQuery}
//                     onChange={(event) =>
//                       setPublicPlaylistsQuery(event.target.value)
//                     }
//                     // always show placeholder, never show selected value
//                     displayValue={() => ""}
//                   />
//                   <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
//                     <RxChevronDown
//                       className="size-4 fill-white/60 group-data-hover:fill-white"
//                       tabIndex={0}
//                     />
//                   </ComboboxButton>
//                 </div>
//                 <ComboboxOptions
//                   anchor="bottom"
//                   transition
//                   className={clsx(
//                     "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
//                     "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
//                   )}>
//                   {Object.keys(formattedPublicPlaylists)
//                     .filter((playlistTitle) =>
//                       publicPlaylistsQuery === ""
//                         ? true
//                         : playlistTitle
//                             .toLowerCase()
//                             .includes(publicPlaylistsQuery.toLowerCase())
//                     )
//                     .map((playlistTitle) => (
//                       <ComboboxOption
//                         key={playlistTitle}
//                         value={playlistTitle}
//                         className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
//                         <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
//                         <div className="text-sm/6 text-white">
//                           {playlistTitle}
//                         </div>
//                       </ComboboxOption>
//                     ))}
//                 </ComboboxOptions>
//               </Combobox>
//             </div>
//           </div>
//         </>
//     </div>
//   );
// }

// "use client";
// import { useState, useRef } from "react";
// import AudioPlayer from "@/ui/audio-player";
// import { Song } from "@/lib/definitions";
// // import
// // import icons
// // all songs
// import { GiMusicSpell } from "react-icons/gi";
// // saved songs
// import { GiMusicalNotes } from "react-icons/gi";
// // all releases
// import { BsFillFileMusicFill } from "react-icons/bs";
// // saved releases
// import { BsFillFileEarmarkMusicFill } from "react-icons/bs";
// // playlists
// import { RiPlayList2Fill } from "react-icons/ri";
// // public playlists
// import { RiPlayList2Line } from "react-icons/ri";
// import { FaRecordVinyl } from "react-icons/fa";
// // import { GiMusicSpell } from "react-icons/gi";
// import { TbPlaylist } from "react-icons/tb";
// import { ImFileMusic } from "react-icons/im";
// import { RxChevronDown, RxCheck } from "react-icons/rx";
// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from "@headlessui/react";
// import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
// import clsx from "clsx";
// // import components
// import Button from "./button";
// import SongListComboBox, { SongListComboBoxOption } from "./song-list-combobox";
// import SongListDialog from "./song-list-dialog";

// export default function AudioPlayerWrapper({
//   allSongs,
//   savedSongs,
//   allReleases,
//   savedReleases,
//   formattedPlaylists,
//   formattedPublicPlaylists,
// }: {
//   allSongs: Song[];
//   savedSongs: Song[];
//   allReleases: { [key: string]: Song[] };
//   savedReleases: { [key: string]: Song[] };
//   formattedPlaylists: { [key: string]: Song[] };
//   formattedPublicPlaylists: { [key: string]: Song[] };
// }) {
//   const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // --- Refactor: separate queries for each combobox ---
//   const [allSongsQuery, setAllSongsQuery] = useState("");
//   const [savedSongsQuery, setSavedSongsQuery] = useState("");
//   const [allReleasesQuery, setAllReleasesQuery] = useState("");
//   const [savedReleasesQuery, setSavedReleasesQuery] = useState("");
//   const [playlistsQuery, setPlaylistsQuery] = useState("");
//   const [publicPlaylistsQuery, setPublicPlaylistsQuery] = useState("");

//   const [selected, setSelected] = useState<Song | null>(null);
//   const [selectedRelease, setSelectedRelease] = useState<string | null>(null);
//   const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
//   const [currentSongs, setCurrentSongs] = useState<Song[]>(
//     savedSongs.length > 0 ? savedSongs : allSongs
//   );
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(
//     "Saved Songs"
//   );
//   const [allSongsDialogOpen, setAllSongsDialogOpen] = useState(false);
//   const [savedSongsDialogOpen, setSavedSongsDialogOpen] = useState(false);
//   const [allReleasesDialogOpen, setAllReleasesDialogOpen] = useState(false);
//   const [savedReleasesDialogOpen, setSavedReleasesDialogOpen] = useState(false);
//   const [playlistsDialogOpen, setPlaylistsDialogOpen] = useState(false);
//   const [publicPlaylistsDialogOpen, setPublicPlaylistsDialogOpen] =
//     useState(false);

//   const allSongsInputRef = useRef<HTMLInputElement>(null!);
//   const savedSongsInputRef = useRef<HTMLInputElement>(null!);
//   const allReleasesInputRef = useRef<HTMLInputElement>(null!);
//   const savedReleasesInputRef = useRef<HTMLInputElement>(null!);
//   const playlistsInputRef = useRef<HTMLInputElement>(null!);
//   const publicPlaylistsInputRef = useRef<HTMLInputElement>(null!);

//   // create options for SongListComboBox
//   const allSongsOptions: SongListComboBoxOption[] = allSongs
//     .filter((song): song is Song => !!song && !!song.file_key)
//     .map((song) => ({
//       value: song.id,
//       label: song.title,
//     }));

//   const savedSongsOptions: SongListComboBoxOption[] = savedSongs
//     .filter((song): song is Song => !!song && !!song.file_key)
//     .map((song) => ({
//       value: song.id,
//       label: song.title,
//     }));

//   const allReleasesOptions: SongListComboBoxOption[] = Object.keys(
//     allReleases
//   ).map((releaseTitle) => ({
//     value: releaseTitle,
//     label: releaseTitle,
//   }));

//   const savedReleasesOptions: SongListComboBoxOption[] = Object.keys(
//     savedReleases
//   ).map((releaseTitle) => ({
//     value: releaseTitle,
//     label: releaseTitle,
//   }));

//   const playlistsOptions: SongListComboBoxOption[] = Object.keys(
//     formattedPlaylists
//   ).map((playlistTitle) => ({
//     value: playlistTitle,
//     label: playlistTitle,
//   }));

//   const publicPlaylistsOptions: SongListComboBoxOption[] = Object.keys(
//     formattedPublicPlaylists
//   ).map((playlistTitle) => ({
//     value: playlistTitle,
//     label: playlistTitle,
//   }));

//   return isAudioPlayerExpanded ? (
//     <div className="absolute left-0 right-0 top-16 bottom-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
//       <div className="w-full max-w-2xl mx-auto">
//         <div className="flex flex-col">
//           <AudioPlayer
//             songs={currentSongs}
//             isPlaying={isPlaying}
//             setIsPlaying={setIsPlaying}
//             currentSongIndex={currentSongIndex}
//             setCurrentSongIndex={setCurrentSongIndex}
//             isAudioPlayerExpanded={isAudioPlayerExpanded}
//             setIsAudioPlayerExpanded={setIsAudioPlayerExpanded}
//             currentPlaylist={currentPlaylist ?? ""}
//           />
//           <div className="grid grid-cols-6 gap-4 p-2">
//             <SongListDialog
//               icon={<GiMusicSpell className="size-6" />}
//               label="All Songs"
//               open={allSongsDialogOpen}
//               setOpen={setAllSongsDialogOpen}
//               options={allSongsOptions}
//               value={selected?.id || null}
//               onChange={(songId) => {
//                 const song = allSongs.find((s) => s.id === songId) || null;
//                 setSelected(song);
//                 if (song) {
//                   setCurrentSongs(
//                     allSongs.filter(
//                       (song): song is Song => !!song && !!song.file_key
//                     )
//                   );
//                   setCurrentPlaylist("All Songs");
//                   const index = allSongs.findIndex((s) => s.id === song.id);
//                   setCurrentSongIndex(index >= 0 ? index : 0);
//                   setIsPlaying(true);
//                 }
//               }}
//               query={allSongsQuery}
//               setQuery={setAllSongsQuery}
//             />
//             <SongListDialog
//               icon={<GiMusicalNotes className="size-6" />}
//               label="Saved Songs"
//               open={savedSongsDialogOpen}
//               setOpen={setSavedSongsDialogOpen}
//               options={savedSongsOptions}
//               value={selected?.id || null}
//               onChange={(songId) => {
//                 const song = savedSongs.find((s) => s.id === songId) || null;
//                 setSelected(song);
//                 if (song) {
//                   setCurrentSongs(
//                     savedSongs.filter(
//                       (song): song is Song => !!song && !!song.file_key
//                     )
//                   );
//                   setCurrentPlaylist("Your Saved Songs");
//                   const index = savedSongs.findIndex((s) => s.id === song.id);
//                   setCurrentSongIndex(index >= 0 ? index : 0);
//                   setIsPlaying(true);
//                 }
//               }}
//               query={savedSongsQuery}
//               setQuery={setSavedSongsQuery}
//             />
//             <SongListDialog
//               icon={<BsFillFileMusicFill className="size-6" />}
//               label="All Releases"
//               open={allReleasesDialogOpen}
//               setOpen={setAllReleasesDialogOpen}
//               options={allReleasesOptions}
//               value={selectedRelease}
//               onChange={(releaseTitle) => {
//                 setSelectedRelease(releaseTitle);
//                 if (releaseTitle) {
//                   setCurrentSongs(
//                     allReleases[releaseTitle].filter(
//                       (song): song is Song => !!song && !!song.file_key
//                     )
//                   );
//                   setCurrentPlaylist(releaseTitle);
//                   setCurrentSongIndex(0);
//                   setIsPlaying(true);
//                 }
//               }}
//               query={allReleasesQuery}
//               setQuery={setAllReleasesQuery}
//             />
//             <SongListDialog
//               icon={<BsFillFileEarmarkMusicFill className="size-6" />}
//               label="Saved Releases"
//               open={savedReleasesDialogOpen}
//               setOpen={setSavedReleasesDialogOpen}
//               options={savedReleasesOptions}
//               value={selectedRelease}
//               onChange={(releaseTitle) => {
//                 setSelectedRelease(releaseTitle);
//                 if (releaseTitle) {
//                   setCurrentSongs(
//                     savedReleases[releaseTitle].filter(
//                       (song): song is Song => !!song && !!song.file_key
//                     )
//                   );
//                   setCurrentPlaylist(releaseTitle);
//                   setCurrentSongIndex(0);
//                   setIsPlaying(true);
//                 }
//               }}
//               query={savedReleasesQuery}
//               setQuery={setSavedReleasesQuery}
//             />
//             <SongListDialog
//               icon={<RiPlayList2Line className="size-6" />}
//               label="Public Playlists"
//               open={publicPlaylistsDialogOpen}
//               setOpen={setPublicPlaylistsDialogOpen}
//               options={publicPlaylistsOptions}
//               value={selectedPlaylist}
//               onChange={(playlistTitle) => {
//                 setSelectedPlaylist(playlistTitle);
//                 if (playlistTitle) {
//                   setCurrentSongs(
//                     formattedPublicPlaylists[playlistTitle].filter(
//                       (song): song is Song => !!song && !!song.file_key
//                     )
//                   );
//                   setCurrentPlaylist(playlistTitle);
//                   setCurrentSongIndex(0);
//                   setIsPlaying(true);
//                 }
//               }}
//               query={publicPlaylistsQuery}
//               setQuery={setPublicPlaylistsQuery}
//             />
//             <SongListDialog
//               icon={<RiPlayList2Fill className="size-6" />}
//               label="Your Playlists"
//               open={playlistsDialogOpen}
//               setOpen={setPlaylistsDialogOpen}
//               options={playlistsOptions}
//               value={selectedPlaylist}
//               onChange={(playlistTitle) => {
//                 setSelectedPlaylist(playlistTitle);
//                 if (playlistTitle) {
//                   setCurrentSongs(
//                     formattedPlaylists[playlistTitle].filter(
//                       (song): song is Song => !!song && !!song.file_key
//                     )
//                   );
//                   setCurrentPlaylist(playlistTitle);
//                   setCurrentSongIndex(0);
//                   setIsPlaying(true);
//                 }
//               }}
//               query={playlistsQuery}
//               setQuery={setPlaylistsQuery}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   ) : (
//     <AudioPlayer
//       songs={currentSongs}
//       isPlaying={isPlaying}
//       setIsPlaying={setIsPlaying}
//       currentSongIndex={currentSongIndex}
//       setCurrentSongIndex={setCurrentSongIndex}
//       isAudioPlayerExpanded={isAudioPlayerExpanded}
//       setIsAudioPlayerExpanded={setIsAudioPlayerExpanded}
//       currentPlaylist={currentPlaylist ?? ""}
//     />
//   );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { createPortal } from "react-dom";
// import AudioPlayer from "@/ui/audio-player";
// import { Song } from "@/lib/definitions";
// import { GiMusicSpell, GiMusicalNotes } from "react-icons/gi";
// import {
//   BsFillFileMusicFill,
//   BsFillFileEarmarkMusicFill,
// } from "react-icons/bs";
// import { RiPlayList2Fill, RiPlayList2Line } from "react-icons/ri";
// import SongListDialog from "./song-list-dialog";
// import { SongListComboBoxOption } from "./song-list-combobox";

// export default function AudioPlayerWrapper({
//   allSongs,
//   savedSongs,
//   allReleases,
//   savedReleases,
//   formattedPlaylists,
//   formattedPublicPlaylists,
// }: {
//   allSongs: Song[];
//   savedSongs: Song[];
//   allReleases: { [key: string]: Song[] };
//   savedReleases: { [key: string]: Song[] };
//   formattedPlaylists: { [key: string]: Song[] };
//   formattedPublicPlaylists: { [key: string]: Song[] };
// }) {
//   const [hasMounted, setHasMounted] = useState(false);
//   useEffect(() => {
//     setHasMounted(true);
//   }, []);
//   const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Dialog and query states
//   const [allSongsDialogOpen, setAllSongsDialogOpen] = useState(false);
//   const [savedSongsDialogOpen, setSavedSongsDialogOpen] = useState(false);
//   const [allReleasesDialogOpen, setAllReleasesDialogOpen] = useState(false);
//   const [savedReleasesDialogOpen, setSavedReleasesDialogOpen] = useState(false);
//   const [playlistsDialogOpen, setPlaylistsDialogOpen] = useState(false);
//   const [publicPlaylistsDialogOpen, setPublicPlaylistsDialogOpen] =
//     useState(false);

//   const [allSongsQuery, setAllSongsQuery] = useState("");
//   const [savedSongsQuery, setSavedSongsQuery] = useState("");
//   const [allReleasesQuery, setAllReleasesQuery] = useState("");
//   const [savedReleasesQuery, setSavedReleasesQuery] = useState("");
//   const [playlistsQuery, setPlaylistsQuery] = useState("");
//   const [publicPlaylistsQuery, setPublicPlaylistsQuery] = useState("");

//   const [selected, setSelected] = useState<Song | null>(null);
//   const [selectedRelease, setSelectedRelease] = useState<string | null>(null);
//   const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
//   const [currentSongs, setCurrentSongs] = useState<Song[]>(
//     savedSongs.length > 0 ? savedSongs : allSongs
//   );
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(
//     "Saved Songs"
//   );

//   // ComboBox options
//   const allSongsOptions: SongListComboBoxOption[] = allSongs
//     .filter((song): song is Song => !!song && !!song.file_key)
//     .map((song) => ({
//       value: song.id,
//       label: song.title,
//     }));

//   const savedSongsOptions: SongListComboBoxOption[] = savedSongs
//     .filter((song): song is Song => !!song && !!song.file_key)
//     .map((song) => ({
//       value: song.id,
//       label: song.title,
//     }));

//   const allReleasesOptions: SongListComboBoxOption[] = Object.keys(
//     allReleases
//   ).map((releaseTitle) => ({
//     value: releaseTitle,
//     label: releaseTitle,
//   }));

//   const savedReleasesOptions: SongListComboBoxOption[] = Object.keys(
//     savedReleases
//   ).map((releaseTitle) => ({
//     value: releaseTitle,
//     label: releaseTitle,
//   }));

//   const playlistsOptions: SongListComboBoxOption[] = Object.keys(
//     formattedPlaylists
//   ).map((playlistTitle) => ({
//     value: playlistTitle,
//     label: playlistTitle,
//   }));

//   const publicPlaylistsOptions: SongListComboBoxOption[] = Object.keys(
//     formattedPublicPlaylists
//   ).map((playlistTitle) => ({
//     value: playlistTitle,
//     label: playlistTitle,
//   }));

//   // --- Refactor: Overlay only below header and above footer ---
//   // Get height of header and footer (adjust these as needed)
//   const headerHeight = "4rem"; // e.g. 64px
//   const footerHeight = "4.5rem"; // e.g. 64px

//   useEffect(() => {
//     if (isAudioPlayerExpanded) {
//       document.body.style.overflow = "hidden";
//       document.body.style.height = "100vh";
//       window.scrollTo(0, 0);
//     } else {
//       document.body.style.overflow = "";

//       document.body.style.height = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//       document.body.style.height = "";
//     };
//   }, [isAudioPlayerExpanded]);

//   // --- Marked: Overlay rendered in portal, covers only between header and footer ---
//   // const expandedOverlay = typeof window !== "undefined" && isAudioPlayerExpanded
//   const expandedOverlay =
//     hasMounted && isAudioPlayerExpanded
//       ? createPortal(
//           <div
//             className="fixed left-0 right-0 top-[4rem] bottom-[4.5rem] z-50 bg-black bg-opacity-80 flex items-center justify-center"
//             style={{
//               top: headerHeight,
//               bottom: footerHeight,
//             }}>
//             <div className="w-full max-w-2xl mx-auto">
//               <div className="flex flex-col ">
//                 <AudioPlayer
//                   songs={currentSongs}
//                   isPlaying={isPlaying}
//                   setIsPlaying={setIsPlaying}
//                   currentSongIndex={currentSongIndex}
//                   setCurrentSongIndex={setCurrentSongIndex}
//                   isAudioPlayerExpanded={isAudioPlayerExpanded}
//                   setIsAudioPlayerExpanded={setIsAudioPlayerExpanded}
//                   currentPlaylist={currentPlaylist ?? ""}
//                 />
//                 <div className="flex justify-around p-2">
//                   <SongListDialog
//                     icon={<GiMusicSpell className="size-6" />}
//                     label="All Songs"
//                     open={allSongsDialogOpen}
//                     setOpen={setAllSongsDialogOpen}
//                     options={allSongsOptions}
//                     value={selected?.id || null}
//                     onChange={(songId) => {
//                       const song =
//                         allSongs.find((s) => s.id === songId) || null;
//                       setSelected(song);
//                       if (song) {
//                         setCurrentSongs(
//                           allSongs.filter(
//                             (song): song is Song => !!song && !!song.file_key
//                           )
//                         );
//                         setCurrentPlaylist("All Songs");
//                         const index = allSongs.findIndex(
//                           (s) => s.id === song.id
//                         );
//                         setCurrentSongIndex(index >= 0 ? index : 0);
//                         setIsPlaying(true);
//                       }
//                     }}
//                     query={allSongsQuery}
//                     setQuery={setAllSongsQuery}
//                   />
//                   <SongListDialog
//                     icon={<GiMusicalNotes className="size-6" />}
//                     label="Saved Songs"
//                     open={savedSongsDialogOpen}
//                     setOpen={setSavedSongsDialogOpen}
//                     options={savedSongsOptions}
//                     value={selected?.id || null}
//                     onChange={(songId) => {
//                       const song =
//                         savedSongs.find((s) => s.id === songId) || null;
//                       setSelected(song);
//                       if (song) {
//                         setCurrentSongs(
//                           savedSongs.filter(
//                             (song): song is Song => !!song && !!song.file_key
//                           )
//                         );
//                         setCurrentPlaylist("Your Saved Songs");
//                         const index = savedSongs.findIndex(
//                           (s) => s.id === song.id
//                         );
//                         setCurrentSongIndex(index >= 0 ? index : 0);
//                         setIsPlaying(true);
//                       }
//                     }}
//                     query={savedSongsQuery}
//                     setQuery={setSavedSongsQuery}
//                   />
//                   <SongListDialog
//                     icon={<BsFillFileMusicFill className="size-6" />}
//                     label="All Releases"
//                     open={allReleasesDialogOpen}
//                     setOpen={setAllReleasesDialogOpen}
//                     options={allReleasesOptions}
//                     value={selectedRelease}
//                     onChange={(releaseTitle) => {
//                       setSelectedRelease(releaseTitle);
//                       if (releaseTitle) {
//                         setCurrentSongs(
//                           allReleases[releaseTitle].filter(
//                             (song): song is Song => !!song && !!song.file_key
//                           )
//                         );
//                         setCurrentPlaylist(releaseTitle);
//                         setCurrentSongIndex(0);
//                         setIsPlaying(true);
//                       }
//                     }}
//                     query={allReleasesQuery}
//                     setQuery={setAllReleasesQuery}
//                   />
//                   <SongListDialog
//                     icon={<BsFillFileEarmarkMusicFill className="size-6" />}
//                     label="Saved Releases"
//                     open={savedReleasesDialogOpen}
//                     setOpen={setSavedReleasesDialogOpen}
//                     options={savedReleasesOptions}
//                     value={selectedRelease}
//                     onChange={(releaseTitle) => {
//                       setSelectedRelease(releaseTitle);
//                       if (releaseTitle) {
//                         setCurrentSongs(
//                           savedReleases[releaseTitle].filter(
//                             (song): song is Song => !!song && !!song.file_key
//                           )
//                         );
//                         setCurrentPlaylist(releaseTitle);
//                         setCurrentSongIndex(0);
//                         setIsPlaying(true);
//                       }
//                     }}
//                     query={savedReleasesQuery}
//                     setQuery={setSavedReleasesQuery}
//                   />
//                   <SongListDialog
//                     icon={<RiPlayList2Line className="size-6" />}
//                     label="Public Playlists"
//                     open={publicPlaylistsDialogOpen}
//                     setOpen={setPublicPlaylistsDialogOpen}
//                     options={publicPlaylistsOptions}
//                     value={selectedPlaylist}
//                     onChange={(playlistTitle) => {
//                       setSelectedPlaylist(playlistTitle);
//                       if (playlistTitle) {
//                         setCurrentSongs(
//                           formattedPublicPlaylists[playlistTitle].filter(
//                             (song): song is Song => !!song && !!song.file_key
//                           )
//                         );
//                         setCurrentPlaylist(playlistTitle);
//                         setCurrentSongIndex(0);
//                         setIsPlaying(true);
//                       }
//                     }}
//                     query={publicPlaylistsQuery}
//                     setQuery={setPublicPlaylistsQuery}
//                   />
//                   <SongListDialog
//                     icon={<RiPlayList2Fill className="size-6" />}
//                     label="Your Playlists"
//                     open={playlistsDialogOpen}
//                     setOpen={setPlaylistsDialogOpen}
//                     options={playlistsOptions}
//                     value={selectedPlaylist}
//                     onChange={(playlistTitle) => {
//                       setSelectedPlaylist(playlistTitle);
//                       if (playlistTitle) {
//                         setCurrentSongs(
//                           formattedPlaylists[playlistTitle].filter(
//                             (song): song is Song => !!song && !!song.file_key
//                           )
//                         );
//                         setCurrentPlaylist(playlistTitle);
//                         setCurrentSongIndex(0);
//                         setIsPlaying(true);
//                       }
//                     }}
//                     query={playlistsQuery}
//                     setQuery={setPlaylistsQuery}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>,
//           document.body
//         )
//       : null;

//   // --- Marked: Always render collapsed player inline ---
//   return (
//     <>
//       {expandedOverlay /* Overlay rendered in portal when expanded */}
//       {!isAudioPlayerExpanded && (
//         <div
//           className="fixed left-0 right-0 z-40 w-full"
//           style={{ bottom: footerHeight }}
//         >
//           <div className="w-full max-w-2xl mx-auto">
//             <div className="flex flex-col">
//               <AudioPlayer
//                 songs={currentSongs}
//                 isPlaying={isPlaying}
//                 setIsPlaying={setIsPlaying}
//                 currentSongIndex={currentSongIndex}
//                 setCurrentSongIndex={setCurrentSongIndex}
//                 isAudioPlayerExpanded={isAudioPlayerExpanded}
//                 setIsAudioPlayerExpanded={setIsAudioPlayerExpanded}
//                 currentPlaylist={currentPlaylist ?? ""}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }


"use client";
import { useState, useEffect } from "react";
// import from next
import Image from "next/image";
import AudioPlayer from "@/ui/audio-player";
import { Song, Release } from "@/lib/definitions";
import { GiMusicSpell, GiMusicalNotes } from "react-icons/gi";
import { BsFillFileMusicFill, BsFillFileEarmarkMusicFill } from "react-icons/bs";
import { RiPlayList2Fill, RiPlayList2Line } from "react-icons/ri";
import clsx from "clsx";
import SongListDialog from "./song-list-dialog";
import { SongListComboBoxOption } from "./song-list-combobox";

export default function AudioPlayerWrapper({
  allSongs,
  savedSongs,
  allReleasesRaw,
  allReleases,
  savedReleases,
  formattedPlaylists,
  formattedPublicPlaylists,
}: {
  allSongs: Song[];
  savedSongs: Song[];
  allReleasesRaw: Release[];
  allReleases: { [key: string]: Song[] };
  savedReleases: { [key: string]: Song[] };
  formattedPlaylists: { [key: string]: Song[] };
  formattedPublicPlaylists: { [key: string]: Song[] };
}) {
  const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Dialog and query states
  const [allSongsDialogOpen, setAllSongsDialogOpen] = useState(false);
  const [savedSongsDialogOpen, setSavedSongsDialogOpen] = useState(false);
  const [allReleasesDialogOpen, setAllReleasesDialogOpen] = useState(false);
  const [savedReleasesDialogOpen, setSavedReleasesDialogOpen] = useState(false);
  const [playlistsDialogOpen, setPlaylistsDialogOpen] = useState(false);
  const [publicPlaylistsDialogOpen, setPublicPlaylistsDialogOpen] = useState(false);

  const [allSongsQuery, setAllSongsQuery] = useState("");
  const [savedSongsQuery, setSavedSongsQuery] = useState("");
  const [allReleasesQuery, setAllReleasesQuery] = useState("");
  const [savedReleasesQuery, setSavedReleasesQuery] = useState("");
  const [playlistsQuery, setPlaylistsQuery] = useState("");
  const [publicPlaylistsQuery, setPublicPlaylistsQuery] = useState("");

  const [selected, setSelected] = useState<Song | null>(null);
  const [selectedRelease, setSelectedRelease] = useState<string | null>(null);
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [currentSongs, setCurrentSongs] = useState<Song[]>(
    savedSongs.length > 0 ? savedSongs : allSongs
  );
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [currentPlaylist, setCurrentPlaylist] = useState<string | null>("Saved Songs");
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(
  savedSongs.length > 0 ? "Saved Songs" : "All Songs"
);

  // ComboBox options
  const allSongsOptions: SongListComboBoxOption[] = allSongs
    .filter((song): song is Song => !!song && !!song.file_key)
    .map((song) => ({
      value: song.id,
      label: song.title,
    }));

  const savedSongsOptions: SongListComboBoxOption[] = savedSongs
    .filter((song): song is Song => !!song && !!song.file_key)
    .map((song) => ({
      value: song.id,
      label: song.title,
    }));

  const allReleasesOptions: SongListComboBoxOption[] = Object.keys(allReleases).map((releaseTitle) => ({
    value: releaseTitle,
    label: releaseTitle,
  }));

  const savedReleasesOptions: SongListComboBoxOption[] = Object.keys(savedReleases).map((releaseTitle) => ({
    value: releaseTitle,
    label: releaseTitle,
  }));

  const playlistsOptions: SongListComboBoxOption[] = Object.keys(formattedPlaylists).map((playlistTitle) => ({
    value: playlistTitle,
    label: playlistTitle,
  }));

  const publicPlaylistsOptions: SongListComboBoxOption[] = Object.keys(formattedPublicPlaylists).map((playlistTitle) => ({
    value: playlistTitle,
    label: playlistTitle,
  }));

  console.log("allReleases", allReleases);

  // --- Prevent page scroll when expanded ---
  useEffect(() => {
    if (isAudioPlayerExpanded) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "";
      document.body.style.height = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.height = "";
    };
  }, [isAudioPlayerExpanded]);

  // --- Only one AudioPlayer instance, position container based on expanded/collapsed ---
  const headerHeight = "4rem"; // adjust to your header height
  const footerHeight = "4.5rem"; // adjust to your footer height

    // Get the current song
  const currentSong = currentSongs[currentSongIndex];
  console.log("Current Song:", currentSong);
  const currentReleaseTitle = Object.keys(allReleases).find((release) =>
    allReleases[release].some((song) => song.id === currentSong?.id)
  );
  const currentRelease = allReleasesRaw.find((release) => release.title === currentReleaseTitle);
  const currentReleaseImageKey = currentRelease?.cover_img_file_key || null;

console.log("Current Release:", currentRelease);
console.log("Current Release Image Key:", currentReleaseImageKey);


  return (
    <div
      className={clsx(
        isAudioPlayerExpanded
          ? "fixed left-0 right-0 z-50 bg-black flex flex-col items-center justify-center"
          : "fixed left-0 right-0 z-40 bg-black"
      )}
      style={
        isAudioPlayerExpanded
          ? { top: headerHeight, bottom: footerHeight }
          : { bottom: footerHeight }
      }
    >
      <div className="w-full max-w-2xl mx-auto">
        <AudioPlayer
          songs={currentSongs}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          currentSongIndex={currentSongIndex}
          setCurrentSongIndex={setCurrentSongIndex}
          isAudioPlayerExpanded={isAudioPlayerExpanded}
          setIsAudioPlayerExpanded={setIsAudioPlayerExpanded}
          currentPlaylist={currentPlaylist ?? ""}
        />
        {/* Expanded controls only visible when expanded */}
        {isAudioPlayerExpanded && (
          <div className="flex justify-around p-2">
            <SongListDialog
              icon={<GiMusicSpell className="size-6" />}
              label="All Songs"
              open={allSongsDialogOpen}
              setOpen={setAllSongsDialogOpen}
              options={allSongsOptions}
              value={selected?.id || null}
              onChange={(songId) => {
                const song = allSongs.find((s) => s.id === songId) || null;
                setSelected(song);
                if (song) {
                  setCurrentSongs(
                    allSongs.filter(
                      (song): song is Song => !!song && !!song.file_key
                    )
                  );
                  setCurrentPlaylist("All Songs");
                  const index = allSongs.findIndex((s) => s.id === song.id);
                  setCurrentSongIndex(index >= 0 ? index : 0);
                  setIsPlaying(true);
                }
              }}
              query={allSongsQuery}
              setQuery={setAllSongsQuery}
            />
            <SongListDialog
              icon={<GiMusicalNotes className="size-6" />}
              label="Saved Songs"
              open={savedSongsDialogOpen}
              setOpen={setSavedSongsDialogOpen}
              options={savedSongsOptions}
              value={selected?.id || null}
              onChange={(songId) => {
                const song = savedSongs.find((s) => s.id === songId) || null;
                setSelected(song);
                if (song) {
                  setCurrentSongs(
                    savedSongs.filter(
                      (song): song is Song => !!song && !!song.file_key
                    )
                  );
                  setCurrentPlaylist("Your Saved Songs");
                  const index = savedSongs.findIndex((s) => s.id === song.id);
                  setCurrentSongIndex(index >= 0 ? index : 0);
                  setIsPlaying(true);
                }
              }}
              query={savedSongsQuery}
              setQuery={setSavedSongsQuery}
            />
            <SongListDialog
              icon={<BsFillFileMusicFill className="size-6" />}
              label="All Releases"
              open={allReleasesDialogOpen}
              setOpen={setAllReleasesDialogOpen}
              options={allReleasesOptions}
              value={selectedRelease}
              onChange={(releaseTitle) => {
                setSelectedRelease(releaseTitle);
                if (releaseTitle) {
                  setCurrentSongs(
                    allReleases[releaseTitle].filter(
                      (song): song is Song => !!song && !!song.file_key
                    )
                  );
                  setCurrentPlaylist(releaseTitle);
                  setCurrentSongIndex(0);
                  setIsPlaying(true);
                }
              }}
              query={allReleasesQuery}
              setQuery={setAllReleasesQuery}
            />
            <SongListDialog
              icon={<BsFillFileEarmarkMusicFill className="size-6" />}
              label="Saved Releases"
              open={savedReleasesDialogOpen}
              setOpen={setSavedReleasesDialogOpen}
              options={savedReleasesOptions}
              value={selectedRelease}
              onChange={(releaseTitle) => {
                setSelectedRelease(releaseTitle);
                if (releaseTitle) {
                  setCurrentSongs(
                    savedReleases[releaseTitle].filter(
                      (song): song is Song => !!song && !!song.file_key
                    )
                  );
                  setCurrentPlaylist(releaseTitle);
                  setCurrentSongIndex(0);
                  setIsPlaying(true);
                }
              }}
              query={savedReleasesQuery}
              setQuery={setSavedReleasesQuery}
            />
            <SongListDialog
              icon={<RiPlayList2Line className="size-6" />}
              label="Public Playlists"
              open={publicPlaylistsDialogOpen}
              setOpen={setPublicPlaylistsDialogOpen}
              options={publicPlaylistsOptions}
              value={selectedPlaylist}
              onChange={(playlistTitle) => {
                setSelectedPlaylist(playlistTitle);
                if (playlistTitle) {
                  setCurrentSongs(
                    formattedPublicPlaylists[playlistTitle].filter(
                      (song): song is Song => !!song && !!song.file_key
                    )
                  );
                  setCurrentPlaylist(playlistTitle);
                  setCurrentSongIndex(0);
                  setIsPlaying(true);
                }
              }}
              query={publicPlaylistsQuery}
              setQuery={setPublicPlaylistsQuery}
            />
            <SongListDialog
              icon={<RiPlayList2Fill className="size-6" />}
              label="Your Playlists"
              open={playlistsDialogOpen}
              setOpen={setPlaylistsDialogOpen}
              options={playlistsOptions}
              value={selectedPlaylist}
              onChange={(playlistTitle) => {
                setSelectedPlaylist(playlistTitle);
                if (playlistTitle) {
                  setCurrentSongs(
                    formattedPlaylists[playlistTitle].filter(
                      (song): song is Song => !!song && !!song.file_key
                    )
                  );
                  setCurrentPlaylist(playlistTitle);
                  setCurrentSongIndex(0);
                  setIsPlaying(true);
                }
              }}
              query={playlistsQuery}
              setQuery={setPlaylistsQuery}
            />
          </div>
        )}
      </div>
    </div>
  );
}