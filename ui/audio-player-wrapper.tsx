"use client";
// import from react
import { useState, useRef } from "react";
// import components
import AudioPlayer from "@/ui/audio-player";
// import definitions
import { Song } from "@/lib/definitions";
// import icons
// import { RxCrossCircled } from "react-icons/rx";
import { RxChevronDown } from "react-icons/rx";
import { RxCheck } from "react-icons/rx";
// import from headless ui
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
// import from clsx
import clsx from "clsx";

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
  allReleases: { [key: string]: Song[] };
  savedReleases: { [key: string]: Song[] };
  formattedPlaylists: { [key: string]: Song[] };
  formattedPublicPlaylists: { [key: string]: Song[] };
}) {
  const [isAudioPlayerExpanded, setIsAudioPlayerExpanded] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [query, setQuery] = useState("");
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
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(
    "Saved Songs"
  );
  const allSongsInputRef = useRef<HTMLInputElement>(null);
  const savedSongsInputRef = useRef<HTMLInputElement>(null);
  const allReleasesInputRef = useRef<HTMLInputElement>(null);
  const savedReleasesInputRef = useRef<HTMLInputElement>(null);
  const playlistsInputRef = useRef<HTMLInputElement>(null);
  const publicPlaylistsInputRef = useRef<HTMLInputElement>(null);
  // console.log("currentSongs", currentSongs);  
  // const [playlistsDropdownVisible, setPlaylistsDropdownVisible] =
  // useState<boolean>(false);
  // const [publicPlaylistsDropdownVisible, setPublicPlaylistsDropdownVisible] =
  //   useState<boolean>(false);
  // const [allReleasesDropdownVisible, setAllReleasesDropdownVisible] =
  //   useState<boolean>(false);
  // const [savedReleasesDropdownVisible, setSavedReleasesDropdownVisible] =
  //   useState<boolean>(false);

  // const handleAllSongsClick = () => {
  //   setCurrentSongs(
  //     allSongs.filter((song): song is Song => !!song && !!song.file_key)
  //   );
  //   setCurrentPlaylist("All Songs");
  // };

  // const handleSavedSongsClick = () => {
  //   setCurrentSongs(
  //     savedSongs.filter((song): song is Song => !!song && !!song.file_key)
  //   );
  //   setCurrentPlaylist("Saved Songs");
  // };

  // const togglePlaylistsDropdown = () => {
  //   setPlaylistsDropdownVisible(!playlistsDropdownVisible);
  //   setPublicPlaylistsDropdownVisible(false); // Close public playlists dropdown when opening playlists dropdown
  // };

  // const togglePublicPlaylistsDropdown = () => {
  //   setPublicPlaylistsDropdownVisible(!publicPlaylistsDropdownVisible);
  //   setPlaylistsDropdownVisible(false); // Close playlists dropdown when opening public playlists dropdown
  // };

  // const toggleAllReleasesDropdown = () => {
  //   setAllReleasesDropdownVisible(!allReleasesDropdownVisible);
  //   setSavedReleasesDropdownVisible(false); // Close saved releases dropdown when opening all releases dropdown
  // };

  // const toggleSavedReleasesDropdown = () => {
  //   setSavedReleasesDropdownVisible(!savedReleasesDropdownVisible);
  //   setAllReleasesDropdownVisible(false); // Close all releases dropdown when opening saved releases dropdown
  // };

  // Filter songs by query
  const allSongsFiltered =
    query === ""
      ? allSongs.filter((song): song is Song => !!song && !!song.file_key)
      : allSongs.filter(
          (song): song is Song =>
            !!song &&
            !!song.file_key &&
            song.title.toLowerCase().includes(query.toLowerCase())
        );

  const savedSongsFiltered =
    query === ""
      ? savedSongs.filter((song): song is Song => !!song && !!song.file_key)
      : savedSongs.filter(
          (song): song is Song =>
            !!song &&
            !!song.file_key &&
            song.title.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className="flex flex-col">
      {/* <div className="flex justify-between items-center px-4 py-2 bg-gray-900">
        {/* <h2 className="text-lg font-semibold text-white">Audio Player</h2> 
        <button
          onClick={() => setIsAudioPlayerExpanded(!isAudioPlayerExpanded)}
          className="text-white hover:text-gray-300 focus:outline-none">
          <div className="flex items-center gap-1 min-w-[90px]">
            <RxChevronDown
              className={clsx(
                "size-5 transition-transform duration-200",
                isAudioPlayerExpanded ? "" : "rotate-180"
              )}
              aria-label={isAudioPlayerExpanded ? "Collapse" : "Expand"}
            />
            {/* <span className={clsx(isAudioPlayerExpanded ? "block" : "hidden")}>
              Collapse
            </span>
            <span className={clsx(isAudioPlayerExpanded ? "hidden" : "block")}>
              Expand
            </span> 
          </div>
        </button>
      </div> */}

      {/* {isAudioPlayerExpanded ? ( */}
        <>
          {/* <div className="px-4 pt-4 flex justify-center">
            {isPlaying
              ? `Currently playing: ${currentPlaylist}`
              : `Currently loaded: ${currentPlaylist}`}
          </div> */}
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
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 px-6 py-2 mb-4">
            <div className="">
              <h3 className="text-center text-sm pb-1">All Songs</h3>
              <Combobox
                value={selected}
                onChange={(song: Song | null) => {
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
                    // console.log("index", index);
                    setIsPlaying(true);
                  }
                  // Remove focus from the input
                  allSongsInputRef.current?.blur();
                }}
                onClose={() => setQuery("")}>
                <div className="relative">
                  <ComboboxInput
                    ref={allSongsInputRef}
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
                    )}
                    // the commented out line below sets the display value to the selected song title
                    // displayValue={(song: Song) => song?.title || ""}
                    // always show placeholder, never show selected value
                    displayValue={() => ""}
                    placeholder="All songs"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
                    <RxChevronDown
                      className="size-4 fill-white/60 group-data-hover:fill-white"
                      tabIndex={0}
                    />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
                  )}>
                  {allSongsFiltered.map((song) => (
                    <ComboboxOption
                      key={song.id}
                      value={song}
                      className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10 tab">
                      <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
                      <div className="text-sm/6 text-white">{song.title}</div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Combobox>
            </div>

            <div className="">
              <h3 className="text-center text-sm pb-1">Saved Songs</h3>
              <Combobox
                value={selected}
                onChange={(song: Song | null) => {
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
                    // console.log("index", index);
                    setIsPlaying(true);
                  }
                  // Remove focus from the input
                  savedSongsInputRef.current?.blur();
                }}
                onClose={() => setQuery("")}>
                <div className="relative">
                  <ComboboxInput
                    ref={savedSongsInputRef}
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
                    )}
                    // the commented out line below sets the display value to the selected song title
                    // displayValue={(song: Song) => song?.title || ""}
                    // always show placeholder, never show selected value
                    displayValue={() => ""}
                    placeholder="Saved songs"
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
                    <RxChevronDown
                      className="size-4 fill-white/60 group-data-hover:fill-white"
                      tabIndex={0}
                    />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
                  )}>
                  {savedSongsFiltered.map((song) => (
                    <ComboboxOption
                      key={song.id}
                      value={song}
                      className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
                      <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
                      <div className="text-sm/6 text-white">{song.title}</div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Combobox>
            </div>
            <div>
              <h3 className="text-center text-sm pb-1">All Releases</h3>
              <Combobox
                value={selectedRelease}
                onChange={(releaseTitle: string | null) => {
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
                  // Reset query so input shows placeholder again
                  // setQuery("");
                  // Remove focus from the input
                  allReleasesInputRef.current?.blur();
                }}
                onClose={() => setAllReleasesQuery("")}>
                <div className="relative">
                  <ComboboxInput
                    ref={allReleasesInputRef}
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
                    )}
                    placeholder="All releases"
                    value={allReleasesQuery}
                    onChange={(event) =>
                      setAllReleasesQuery(event.target.value)
                    }
                    // always show placeholder, never show selected value
                    displayValue={() => ""}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
                    <RxChevronDown
                      className="size-4 fill-white/60 group-data-hover:fill-white"
                      tabIndex={0}
                    />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
                  )}>
                  {Object.keys(allReleases)
                    .filter((releaseTitle) =>
                      allReleasesQuery === ""
                        ? true
                        : releaseTitle
                            .toLowerCase()
                            .includes(allReleasesQuery.toLowerCase())
                    )
                    .map((releaseTitle) => (
                      <ComboboxOption
                        key={releaseTitle}
                        value={releaseTitle}
                        className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
                        <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
                        <div className="text-sm/6 text-white">
                          {releaseTitle}
                        </div>
                      </ComboboxOption>
                    ))}
                </ComboboxOptions>
              </Combobox>
            </div>

            <div>
              <h3 className="text-center text-sm pb-1">Saved Releases</h3>
              <Combobox
                value={selectedRelease}
                onChange={(releaseTitle: string | null) => {
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
                  // Reset query so input shows placeholder again
                  // setQuery("");
                  // Remove focus from the input
                  savedReleasesInputRef.current?.blur();
                }}
                onClose={() => setSavedReleasesQuery("")}>
                <div className="relative">
                  <ComboboxInput
                    ref={savedReleasesInputRef}
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
                    )}
                    placeholder="Saved releases"
                    value={savedReleasesQuery}
                    onChange={(event) =>
                      setSavedReleasesQuery(event.target.value)
                    }
                    // always show placeholder, never show selected value
                    displayValue={() => ""}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
                    <RxChevronDown
                      className="size-4 fill-white/60 group-data-hover:fill-white"
                      tabIndex={0}
                    />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
                  )}>
                  {Object.keys(savedReleases)
                    .filter((releaseTitle) =>
                      savedReleasesQuery === ""
                        ? true
                        : releaseTitle
                            .toLowerCase()
                            .includes(savedReleasesQuery.toLowerCase())
                    )
                    .map((releaseTitle) => (
                      <ComboboxOption
                        key={releaseTitle}
                        value={releaseTitle}
                        className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
                        <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
                        <div className="text-sm/6 text-white">
                          {releaseTitle}
                        </div>
                      </ComboboxOption>
                    ))}
                </ComboboxOptions>
              </Combobox>
            </div>
            <div>
              <h3 className="text-center text-sm pb-1">Your Playlists</h3>
              <Combobox
                value={selectedPlaylist}
                onChange={(playlistTitle: string | null) => {
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
                  // Reset query so input shows placeholder again
                  setPlaylistsQuery("");
                  // Remove focus from the input
                  playlistsInputRef.current?.blur();
                }}
                onClose={() => setPlaylistsQuery("")}>
                <div className="relative">
                  <ComboboxInput
                    ref={playlistsInputRef}
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
                    )}
                    placeholder="Your playlists"
                    value={playlistsQuery}
                    onChange={(event) => setPlaylistsQuery(event.target.value)}
                    // always show placeholder, never show selected value
                    displayValue={() => ""}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
                    <RxChevronDown
                      className="size-4 fill-white/60 group-data-hover:fill-white"
                      tabIndex={0}
                    />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
                  )}>
                  {Object.keys(formattedPlaylists)
                    .filter((playlistTitle) =>
                      playlistsQuery === ""
                        ? true
                        : playlistTitle
                            .toLowerCase()
                            .includes(playlistsQuery.toLowerCase())
                    )
                    .map((playlistTitle) => (
                      <ComboboxOption
                        key={playlistTitle}
                        value={playlistTitle}
                        className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
                        <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
                        <div className="text-sm/6 text-white">
                          {playlistTitle}
                        </div>
                      </ComboboxOption>
                    ))}
                </ComboboxOptions>
              </Combobox>
            </div>
            <div>
              <h3 className="text-center text-sm pb-1">Public Playlists</h3>
              <Combobox
                value={selectedPlaylist}
                onChange={(playlistTitle: string | null) => {
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
                  // Reset query so input shows placeholder again
                  setPublicPlaylistsQuery("");
                  // Remove focus from the input
                  publicPlaylistsInputRef.current?.blur();
                }}
                onClose={() => setPublicPlaylistsQuery("")}>
                <div className="relative">
                  <ComboboxInput
                    ref={publicPlaylistsInputRef}
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/5 py-1 pr-6 pl-2 text-sm/6 text-white",
                      "focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white outline-1 outline-white/25"
                    )}
                    placeholder="Public playlists"
                    value={publicPlaylistsQuery}
                    onChange={(event) =>
                      setPublicPlaylistsQuery(event.target.value)
                    }
                    // always show placeholder, never show selected value
                    displayValue={() => ""}
                  />
                  <ComboboxButton className="group absolute inset-y-0 right-0 px-1">
                    <RxChevronDown
                      className="size-4 fill-white/60 group-data-hover:fill-white"
                      tabIndex={0}
                    />
                  </ComboboxButton>
                </div>
                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-white/5 bg-black/100 p-1 [--anchor-gap:--spacing(1)] empty:invisible ",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0 outline-1 outline-white"
                  )}>
                  {Object.keys(formattedPublicPlaylists)
                    .filter((playlistTitle) =>
                      publicPlaylistsQuery === ""
                        ? true
                        : playlistTitle
                            .toLowerCase()
                            .includes(publicPlaylistsQuery.toLowerCase())
                    )
                    .map((playlistTitle) => (
                      <ComboboxOption
                        key={playlistTitle}
                        value={playlistTitle}
                        className="group flex cursor-default items-center gap-2 rounded-lg p-0 select-none data-focus:bg-white/10">
                        <RxCheck className="invisible size-4 fill-white group-data-selected:visible" />
                        <div className="text-sm/6 text-white">
                          {playlistTitle}
                        </div>
                      </ComboboxOption>
                    ))}
                </ComboboxOptions>
              </Combobox>
            </div>
          </div>
        </>
    </div>
  );
}

{
  /* <div className="flex grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center items-center w-full h-auto p-4"> */
}
{
  /* <button onClick={handleAllSongsClick} className="p-4 cursor-pointer">
          All Songs
        </button> */
}
{
  /* <button onClick={handleSavedSongsClick} className="p-4 cursor-pointer">
          Saved Songs
        </button> */
}

{
  /* <div className=""> */
}
{
  /* <button
          onClick={toggleAllReleasesDropdown}
          className="p-4 cursor-pointer">
          All Releases
        </button>
        {allReleasesDropdownVisible && (
          <div className="z-50  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button
                onClick={toggleAllReleasesDropdown}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                <RxCrossCircled size={18} />
              </button>
            </div>
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
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
                    toggleAllReleasesDropdown(); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer">
                  {releaseKey}
                </button>
              ))}
            </div>
          </div>
        )} */
}
{
  /* </div> */
}
{
  /* <div className=""> */
}
{
  /* <button
          onClick={toggleSavedReleasesDropdown}
          className="p-4 cursor-pointer">
          Saved Releases
        </button>
        {savedReleasesDropdownVisible && (
          <div className=" mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button
                onClick={toggleSavedReleasesDropdown}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                <RxCrossCircled size={18} />
              </button>
            </div>
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
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
                    toggleSavedReleasesDropdown(); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer">
                  {releaseKey}
                </button>
              ))}
            </div>
          </div>
        )} */
}
{
  /* </div> */
}

{
  /* <div className=""> */
}
{
  /* <button
          onClick={togglePlaylistsDropdown}
          className="p-4 cursor-pointer">
          Your Playlists
        </button>
        {playlistsDropdownVisible && (
          <div className=" mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button
                onClick={togglePlaylistsDropdown}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                <RxCrossCircled size={18} />
              </button>
            </div>
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
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
                    togglePlaylistsDropdown(); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer">
                  {playlistKey}
                </button>
              ))}
            </div>
          </div>
        )} */
}
{
  /* </div> */
}
{
  /* <div className=""> */
}
{
  /* <button
          onClick={togglePublicPlaylistsDropdown}
          className="p-4 cursor-pointer">
          Public Playlists
        </button>
        {publicPlaylistsDropdownVisible && (
          <div className="mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="flex justify-end">
              <button
                onClick={togglePublicPlaylistsDropdown}
                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 cursor-pointer">
                <RxCrossCircled size={18} />
              </button>
            </div>
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu">
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
                    togglePublicPlaylistsDropdown(); // Close dropdown after selection
                  }}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left cursor-pointer">
                  {playlistKey}
                </button>
              ))}
            </div>
          </div>
        )} */
}
{
  /* </div> */
}
{
  /* </div> */
}
