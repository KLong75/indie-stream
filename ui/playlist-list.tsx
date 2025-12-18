"use client";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Playlist } from "@/lib/definitions";
// import icons
import { MdOutlineSearch } from "react-icons/md";
import { CiSaveDown2, CiCircleMinus } from "react-icons/ci";
// import components
import SaveAndRemoveButton from "@/ui/save-remove-button";

interface PlaylistListProps {
  playlists: Playlist[];
  placeholder?: string;
  userId?: string;
  action?: (userId: string, playlistId: string) => Promise<void>;
  removeAction?: (userId: string, playlistId: string) => Promise<void>;
  savedPlaylists?: string[];
  isScrollable?: boolean;
  maxHeight?: string;
}

export default function PlaylistList({
  playlists,
  placeholder = "Search playlists...",
  isScrollable = false,
  maxHeight,
  userId,
  action,
  removeAction,
  savedPlaylists = [],
}: PlaylistListProps) {
  const [userSavedPlaylists, setUserSavedPlaylists] = useState<string[]>(savedPlaylists);
  const [query, setQuery] = useState("");
  const filteredPlaylists = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return playlists.filter((playlist) =>
      playlist.title.toLowerCase().includes(lowerQuery)
    );
  }, [playlists, query]);

  const handleSavePlaylist = async (userId: string, playlistId: string) => {
    setUserSavedPlaylists((prev) => [...prev, playlistId]);
    if (action) {
      await action(userId, playlistId);
    }
  };

  const handleRemovePlaylist = async (userId: string, playlistId: string) => {
    setUserSavedPlaylists((prev) => prev.filter((id) => id !== playlistId));
    if (removeAction) {
      await removeAction(userId, playlistId);
    }
  };

  return (
    <div className="flex flex-col mx-auto w-full max-w-md">
      <div className="relative mb-4 mx-auto w-full max-w-[calc(100%-1rem)]">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-500 rounded-2xl w-full pl-10"
          aria-label="Search playlists"
          aria-describedby="search-icon"
        />
        <span
          id="search-icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <MdOutlineSearch size={20} />
        </span>
      </div>
      <ul className={`p-2 rounded-2xl bg-neutral-800 flex flex-col gap-2 ${isScrollable ? "overflow-y-auto no-scrollbar" : ""}`} style={maxHeight ? { maxHeight } : undefined}>
        {filteredPlaylists.map((playlist) => (
          <li 
            key={playlist.id} 
            className="m-2 font-semibold px-4 py-1 flex items-center justify-between bg-black rounded-2xl shadow-neutral-200 shadow-md"
          >
            <Link 
              href={`/playlists/${playlist.id}`}
              className="underline"
            >
              {playlist.title}
            </Link>
            {userId && action && removeAction && (
              <span className="text-xs">
                <SaveAndRemoveButton
                  userId={userId}
                  itemId={playlist.id}
                  isSaved={userSavedPlaylists.includes(playlist.id)}
                  action={handleSavePlaylist}
                  removeAction={handleRemovePlaylist}
                  icon={<CiSaveDown2 size={18} />}
                  removeIcon={<CiCircleMinus size={18} />}
                  itemType="playlist"
                />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}