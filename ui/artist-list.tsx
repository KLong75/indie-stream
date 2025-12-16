"use client";
// import from next
import Link from "next/link";
// import from react
import { useState, useMemo } from "react";
// import definitions
import { Artist } from "@/lib/definitions";
// import icons
import { MdOutlineSearch,  } from "react-icons/md";
import { CiSaveDown2, CiCircleMinus } from "react-icons/ci";
// import components
// import SaveAndRemoveButtonClientContainer from "@/ui/save-remove-button-client-container";
import SaveAndRemoveButton from "@/ui/save-remove-button";

interface ArtistListProps {
  artists: Artist[];
  placeholder?: string;
  typeOfList?: "songs" | "playlist";
  userId?: string;
  action?: (userId: string, itemId: string) => void | Promise<void>;
  removeAction?: (userId: string, itemId: string) => void | Promise<void>;
  savedArtists?: string[];
  isScrollable?: boolean;
  maxHeight?: string;
}

export default function ArtistList({
  artists,
  placeholder = "Search artists...",
  userId,
  action,
  removeAction,
  savedArtists = [],
  isScrollable = false,
  maxHeight,
}: ArtistListProps) {
  const [userSavedArtists, setUserSavedArtists] = useState<string[]>(savedArtists);
  const [query, setQuery] = useState("");

  const filteredArtists = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return artists.filter((artist) =>
      artist.name.toLowerCase().includes(lowerQuery)
    );
  }, [artists, query]);

  const handleSaveArtist = async (userId: string, artistId: string) => {
    setUserSavedArtists((prev) => [...prev, artistId]);
    if (action) {
      await action(userId, artistId);
    }
  };

  const handleRemoveArtist = async (userId: string, artistId: string) => {
    setUserSavedArtists((prev) =>
      prev.filter((id) => id !== artistId)
    );
    if (removeAction) {
      await removeAction(userId, artistId);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md mx-auto">
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
      <ul className={`flex flex-col ${isScrollable ? "overflow-y-auto no-scrollbar" : ""}`} style={maxHeight ? { maxHeight } : undefined}>
        {filteredArtists.map((artist) => (
            <li key={artist.id} className="font-semibold p-1 flex items-center justify-between">
            <Link href={`/artists/${artist.id}`} className="underline">
              {artist.name}
            </Link>
            {userId && (
              <span className="text-xs">
              <SaveAndRemoveButton
                userId={userId}
                itemId={artist.id}
                itemType="artist"
                isSaved={userSavedArtists.includes(artist.id)}
                action={handleSaveArtist}
                removeAction={handleRemoveArtist}
                icon={<CiSaveDown2 size={24} />}
                removeIcon={<CiCircleMinus size={24} />}
              />
              </span>
            )}
            </li>
        ))}
      </ul>
    </div>
  );
}
