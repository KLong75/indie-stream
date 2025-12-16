"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Playlist } from "@/lib/definitions";
// import icons
import { MdOutlineSearch } from "react-icons/md";

interface PlaylistListProps {
  playlists: Playlist[];
  placeholder?: string;
  isScrollable?: boolean;
}

export default function PlaylistList({
  playlists,
  placeholder = "Search playlists...",
}: PlaylistListProps) {
  const [query, setQuery] = useState("");
  const filteredPlaylists = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return playlists.filter((playlist) =>
      playlist.title.toLowerCase().includes(lowerQuery)
    );
  }, [playlists, query]);

  return (
    <div className="flex flex-col mx-auto w-full max-w-md">
      <div className="relative mb-2 mx-auto w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-500 rounded w-full pl-10"
          aria-label="Search playlists"
          aria-describedby="search-icon"
        />
        <span
          id="search-icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <MdOutlineSearch size={20} />
        </span>
      </div>
      <ul className="flex flex-col gap-2 overflow-y-auto max-h-96">
        {filteredPlaylists.map((playlist) => (
          <li key={playlist.id} className="p-2">
            <Link href={`/playlists/${playlist.id}`}>
              {playlist.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}