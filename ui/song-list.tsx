"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Artist, Release, Song } from "@/lib/definitions";
// import icons
import { RxPlus } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";

interface SongListProps {
  songs: Song[];
  artists: Artist[];
  releases: Release[];
  placeholder?: string;
  typeOfList?: "songs" | "playlist";
}

export default function SongList({
  songs,
  artists,
  releases,
  placeholder = "Search songs...",
}: SongListProps) {
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

  return (
    <div className="w-full  mx-auto">
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
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto">
        {filteredSongs.map((song) => (
          <li key={song.id} className="mb-2 px-2 text-center">
            <Link href={`/songs/${song.id}`}>
              <h2 className="font-semibold underline">{song.title}</h2>
            </Link>
            <div className="text-gray-500 text-sm">
              <p>
                by{" "}
                <Link href={`/artists/${song.artist}`} className="underline">
                  {getArtistName(song.artist)}
                </Link>
              </p>
              <p>
                from the {getReleaseType(song.release)}{" "}
                <Link href={`/releases/${song.release}`} className="underline">
                  {getReleaseTitle(song.release)}
                </Link>
              </p>
              <p>released in {getReleaseYear(song.release)}</p>
              {/* ...other fields... */}
            </div>
            <div className="flex space-x-2 text-sm justify-center mt-2">
              <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
                <RxPlay />
                Play
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
                <RxPlus />
                Add to Playlist
              </button>
              <button className="p-1 text-gray-500 hover:text-gray-700 flex flex-col items-center">
                <CiSaveDown2 />
                Save
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
