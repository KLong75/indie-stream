"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Artist, Release, Song } from "@/lib/definitions";
import { RxPlus } from "react-icons/rx";
import { RxPlay } from "react-icons/rx";
import { CiSaveDown2 } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { MdOutlineSearch } from "react-icons/md";
import SaveAndRemoveButton from "./save-remove-button";
// import { removeSavedSong, saveSong } from "@/lib/actions";

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
  isScrollable?: boolean;
  maxHeight?: string;
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
  isScrollable = false,
  maxHeight,
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
  const getReleaseCover = (id: string) =>
    releases.find((r) => r.id === id)?.cover_img_file_key ||
    "9Dk0lBirZ3pQA66Rb9Bygdn5G8QFv0hfpWE7KZqxj3lTc9wC"; // fallback image

  const handleSave = async (userId: string, songId: string) => {
    setUserSavedSongs((prev) => [...prev, songId]);
    await action?.(userId, songId);
  };

  const handleRemove = async (userId: string, songId: string) => {
    setUserSavedSongs((prev) => prev.filter((id) => id !== songId));
    await removeAction?.(userId, songId);
  };

  return (
    <div className={`w-full mx-auto${minimal ? " flex flex-col" : ""}`}>
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
      <ul
        className={`p-1 rounded-2xl bg-neutral-900 grid grid-cols-1 md:grid-cols-1 gap max-w-md mx-auto ${
          isScrollable ? "mt-6 overflow-y-auto no-scrollbar" : ""
        }`}
        style={maxHeight ? { maxHeight } : undefined}>
        {filteredSongs.map((song, idx) => (
          <li
            key={song.id}
            className="relative bg-black rounded-2xl shadow-neutral-200 shadow-md text-sm p-2 m-2 ">
            {!minimal && (
              <Image
                src={`https://4ykxjgur5y.ufs.sh/f/${getReleaseCover(
                  song.release
                )}`}
                alt="Release cover"
                width={64}
                height={64}
                className="rounded shadow absolute top-3 right-3 shadow shadow-neutral-200"
                style={{ objectFit: "cover" }}
              />
            )}
            {/* <div className=""> */}

            <h2 className="font-semibold text-base ml-1">
              {minimal && <span className="text-400">{idx + 1}. </span>}
              <Link href={`/songs/${song.id}`} className="underline">
                {song.title.length > 24
                  ? song.title.slice(0, 24) + "…"
                  : song.title}
              </Link>
            </h2>

            {/* </div> */}
            {!minimal && (
              <div className="text-gray-500 ml-1">
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
                    {getReleaseTitle(song.release).length > 21
                      ? getReleaseTitle(song.release).slice(0, 21) + "…"
                      : getReleaseTitle(song.release)}
                  </Link>
                </p>
                <p>released in {getReleaseYear(song.release)}</p>
                <div className="flex justify-center gap-6">
                  <span className="w-auto">Plays: {song.number_of_plays}</span>
                  <span className="w-auto">Saves: {song.number_of_saves}</span>
                </div>
              </div>
            )}

            <div
              className={`flex text-white${!minimal ? " justify-center" : ""}`}>
              <button className="p-1 hover:text-gray-700 flex flex-col items-center">
                <span
                  style={{
                    width: 24,
                    height: 24,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <RxPlay />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "3.5em",
                    textAlign: "center",
                  }}>
                  Play
                </span>
              </button>
              <button className="p-1 hover:text-gray-700 flex flex-col items-center">
                <span
                  style={{
                    width: 24,
                    height: 24,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <RxPlus />
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: "8em",
                    textAlign: "center",
                  }}>
                  Add to Playlist
                </span>
              </button>
              {userId && (
                <SaveAndRemoveButton
                  itemId={song.id}
                  itemType="song"
                  userId={userId}
                  icon={<CiSaveDown2 />}
                  removeIcon={<CiCircleMinus />}
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
