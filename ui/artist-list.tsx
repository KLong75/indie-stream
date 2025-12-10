"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Artist } from "@/lib/definitions";
// import icons
import { MdOutlineSearch } from "react-icons/md";

interface ArtistListProps {
  artists: Artist[];
  placeholder?: string;
}

export default function ArtistList({
  artists,
  placeholder = "Search artists...",
}: ArtistListProps) {
  const [query, setQuery] = useState("");

  const filteredArtists = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return artists.filter((artist) =>
      artist.name.toLowerCase().includes(lowerQuery)
    );
  }, [artists, query]);

  return (
    <div className="flex flex-col">
      <div className="relative mb-2 mx-auto w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-500 rounded w-full pl-10"
          aria-label="Search artists"
          aria-describedby="search-icon"
        />
        <span
          id="search-icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <MdOutlineSearch size={20} />
        </span>
      </div>
      <ul className="flex flex-col">
        {filteredArtists.map((artist) => (
          <li key={artist.id} className="font-semibold underline p-1">
            <Link href={`/artists/${artist.id}`}>
              {artist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
