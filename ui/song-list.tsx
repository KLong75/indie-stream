// "use client";
// import Link from "next/link";
// import { useState, useMemo } from "react";
// import { Artist, Release, Song } from "@/lib/definitions";
// // import icons
// import { RxPlus } from "react-icons/rx";
// import { RxPlay } from "react-icons/rx";
// import { CiSaveDown2 } from "react-icons/ci";
// import { MdOutlineSearch } from "react-icons/md";
// // import components
// import SaveButton from "./save-button";

// interface SongListProps {
//   songs: Song[];
//   artists: Artist[];
//   releases: Release[];
//   placeholder?: string;
//   typeOfList?: "songs" | "playlist";
//   userId?: string;
//   action?: (userId: string, itemId: string) => void | Promise<void>;
// }

// export default function SongList({
//   songs,
//   artists,
//   releases,
//   placeholder = "Search songs...",
//   userId,
//   action,
// }: SongListProps) {
//   const [query, setQuery] = useState("");

//   const filteredSongs = useMemo(() => {
//     const lowerQuery = query.toLowerCase();
//     return songs.filter((song) =>
//       song.title.toLowerCase().includes(lowerQuery)
//     );
//   }, [songs, query]);

//   const getArtistName = (id: string) =>
//     artists.find((a) => a.id === id)?.name || id;
//   const getReleaseTitle = (id: string) =>
//     releases.find((r) => r.id === id)?.title || id;
//   const getReleaseYear = (id: string) =>
//     releases.find((r) => r.id === id)?.year || "";
//   const getReleaseType = (id: string) =>
//     releases.find((r) => r.id === id)?.type || "";

//   return (
//     <div className="w-full  mx-auto">
//       <div className="relative mb-2 w-full max-w-md mx-auto">
//         <input
//           type="text"
//           placeholder={placeholder}
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="p-2 border border-gray-500 rounded w-full pl-10"
//           aria-label="Search songs"
//           aria-describedby="search-icon"
//         />
//         <span
//           id="search-icon"
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
//           <MdOutlineSearch size={20} />
//         </span>
//       </div>
//       <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto">
//         {filteredSongs.map((song) => (
//           <li key={song.id} className="mb-2 px-2 text-center">
//             <Link href={`/songs/${song.id}`}>
//               <h2 className="font-semibold underline">{song.title}</h2>
//             </Link>
//             <div className="text-gray-500 text-sm">
//               <p>
//                 by{" "}
//                 <Link href={`/artists/${song.artist}`} className="underline">
//                   {getArtistName(song.artist)}
//                 </Link>
//               </p>
//               <p>
//                 from the {getReleaseType(song.release)}{" "}
//                 <Link href={`/releases/${song.release}`} className="underline">
//                   {getReleaseTitle(song.release)}
//                 </Link>
//               </p>
//               <p>released in {getReleaseYear(song.release)}</p>
//               {/* ...other fields... */}
//               <div className="flex gap-6 py-2 mx-auto justify-center">
//                 <span className="w-auto">Plays: {song.number_of_plays}</span>
//                 <span className="w-auto">Saves: {song.number_of_saves}</span>
//               </div>
//             </div>
//             <div className="flex space-x-2 text-sm justify-center">
//               <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
//                 <RxPlay />
//                 Play
//               </button>
//               <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
//                 <RxPlus />
//                 Add to Playlist
//               </button>
//               {userId && (
//                 <SaveButton
//                   itemId={song.id}
//                   itemType="song"
//                   userId={userId}
//                   icon={<CiSaveDown2 />}
//                   action={action ?? (() => {})}
//                 />
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Artist, Release, Song } from "@/lib/definitions";
import { RxPlus } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";
import SaveAndRemoveButton from "./save-remove-button";
import { removeSavedSong, saveSong } from "@/lib/actions";

interface SongListProps {
  songs: Song[];
  artists: Artist[];
  releases: Release[];
  placeholder?: string;
  typeOfList?: "songs" | "playlist";
  userId?: string;
  action?: (userId: string, itemId: string) => void | Promise<void>;
  removeAction?: (userId: string, itemId: string) => void | Promise<void>;
  minimal?: boolean;
  savedSongs?: string[];
}

export default function SongList({
  songs,
  artists,
  releases,
  placeholder = "Search songs...",
  userId,
  action,
  removeAction,
  minimal = false,
  savedSongs = [],
}: SongListProps) {
  const [userSavedSongs, setUserSavedSongs] = useState<string[]>(savedSongs);
  const [query, setQuery] = useState("");

  const filteredSongs = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return songs.filter((song) =>
      song.title.toLowerCase().includes(lowerQuery)
    );
  }, [songs, query]);

  const getArtistName = (id: string) =>
    artists.find((a) => a.id === id)?.name || id;
  const getReleaseTitle = (id: string) =>
    releases.find((r) => r.id === id)?.title || id;
  const getReleaseYear = (id: string) =>
    releases.find((r) => r.id === id)?.year || "";
  const getReleaseType = (id: string) =>
    releases.find((r) => r.id === id)?.type || "";

  const handleSave = async (userId: string, songId: string) => {
    setUserSavedSongs((prev) => [...prev, songId]);
    await saveSong(userId, songId);
  };

  const handleRemove = async (userId: string, songId: string) => {
    setUserSavedSongs((prev) => prev.filter((id) => id !== songId));
    await removeSavedSong(userId, songId);
  };

  return (
    <div className="w-full mx-auto">
      {!minimal && (
        <div className="relative mb-2 w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-2 border border-gray-500 rounded w-full pl-10"
            aria-label="Search songs"
            aria-describedby="search-icon"
          />
          <span
            id="search-icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <MdOutlineSearch size={20} />
          </span>
        </div>
      )}
      <ul className={`grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto`}>
        {filteredSongs.map((song, idx) => (
          <li key={song.id} className="mb-2 px-2 ">
            <div className="flex gap-2">
              {minimal && <span className="text-gray-400">{idx + 1}.</span>}
              <Link href={`/songs/${song.id}`}>
                <h2 className="font-semibold underline ">{song.title}</h2>
              </Link>
            </div>
            {!minimal && (
              <div className="text-gray-500">
                <p>
                  by{" "}
                  <Link
                    href={`/artists/${song.artist}`}
                    className="text-white underline">
                    {getArtistName(song.artist)}
                  </Link>
                </p>
                <p>
                  from the {getReleaseType(song.release)}{" "}
                  <Link
                    href={`/releases/${song.release}`}
                    className="text-white underline">
                    {getReleaseTitle(song.release)}
                  </Link>
                </p>
                <p>released in {getReleaseYear(song.release)}</p>
                <div className="flex gap-6  ">
                  <span className="w-auto">Plays: {song.number_of_plays}</span>
                  <span className="w-auto">Saves: {song.number_of_saves}</span>
                </div>
              </div>
            )}
            <div
              className={`flex space-x-2 text-white${minimal ? " px-4" : ""}`}>
              <button className="p-1 hover:text-gray-700 flex flex-col items-center">
                <RxPlay />
                Play
              </button>
              <button className="p-1 hover:text-gray-700 flex flex-col items-center">
                <RxPlus />
                Add to Playlist
              </button>
              {userId && (
                <SaveAndRemoveButton
                  itemId={song.id}
                  itemType="song"
                  userId={userId}
                  icon={<CiSaveDown2 />}
                  removeIcon={<CiCircleMinus />}
                  // action={action ?? (() => {})}
                  // removeAction={removeAction ?? (() => {})}
                  action={handleSave}
                  removeAction={handleRemove}
                  isSaved={userSavedSongs.includes(song.id)}
                />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
