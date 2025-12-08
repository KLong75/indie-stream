// // import from next
// import Link from "next/link";
// import { 
//   getAllSongs,
//   getArtistById,
//   getReleaseById,
// } from "@/lib/data";

// interface SongListProps {
//   songs: Array<{
//     id: string;
//     title: string;
//     artist: string;
//     release: string;
//     track_number: number;
//     genre: Array<string>;
//     year: number;
//     number_of_saves: number;
//     number_of_plays: number;
//     // file_key: string;
//   }>;
// }
// export default async function SongList({ songs }: SongListProps) {
//   return (
//     <div>
//       <ul>
//         {await Promise.all(songs.map(async (song) => {
//           const artistObj = await getArtistById(song.artist);
//           const releaseObj = await getReleaseById(song.release);
//           return (
//             <li key={song.id} className="mb-2">
//               <Link href={`/songs/${song.id}`}>
//                 <h2 className="text-lg font-semibold">{song.title}</h2>
//               </Link>
//               <Link href={`/artists/${song.artist}`}>
//                 <p>Artist: {artistObj?.name ?? song.artist}</p>
//               </Link>
//               <Link href={`/releases/${song.release}`}>
//                 <p>Release: {releaseObj?.title ?? song.release}</p>
//               </Link>
//               <p>Track Number: {song.track_number}</p>
//               <p>Genre: {song.genre.join(", ")}</p>
//               <p>Year: {song.year}</p>
//               <p>Number of Saves: {song.number_of_saves}</p>
//               <p>Number of Plays: {song.number_of_plays}</p>
//             </li>
//           );
//         }))}
//       </ul>
//     </div>
//   );
// }

"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Artist, Release, Song } from "@/lib/definitions";

interface SongListProps {
  songs: Song[];
  artists: Artist[];
  releases: Release[];
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