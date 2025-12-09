"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Artist, Release, Song } from "@/lib/definitions";

interface SongListProps {
  songs: Song[];
  artists: Artist[];
  releases: Release[];
  typeOfList?: "songs" | "playlist";
}

export default function SongList({ songs, artists, releases }: SongListProps) {
  const [query, setQuery] = useState("");

  const filteredSongs = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return songs.filter(song =>
      song.title.toLowerCase().includes(lowerQuery)
    );
  }, [songs, query]);

  const getArtistName = (id: string) => artists.find(a => a.id === id)?.name || id;
  const getReleaseTitle = (id: string) => releases.find(r => r.id === id)?.title || id;
  const getReleaseYear = (id: string) => releases.find(r => r.id === id)?.year || "";
  const getReleaseType = (id: string) => releases.find(r => r.id === id)?.type || "";

  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />
      <ul>
        {filteredSongs.map(song => (
          <li key={song.id} className="mb-2">
            <Link href={`/songs/${song.id}`}>
              <h2 className="text-lg font-semibold">{song.title}</h2>
            </Link>
            <Link href={`/artists/${song.artist}`}>
              <p>Artist: {getArtistName(song.artist)}</p>
            </Link>
            <p>from the {getReleaseYear(song.release)} {getReleaseType(song.release)}</p>
            <Link href={`/releases/${song.release}`}>
              <p>Release: {getReleaseTitle(song.release)}</p>
            </Link>
            {/* ...other fields... */}
          </li>
        ))}
      </ul>
    </div>
  );
}