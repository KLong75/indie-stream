"use client";
// import from next
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Artist, Release } from "@/lib/definitions";
// import icons
import { MdOutlineSearch } from "react-icons/md";
import { CiSaveDown2, CiCircleMinus } from "react-icons/ci";
// import components
import Heading from "./heading";
import SaveAndRemoveButton from "./save-remove-button";

interface ReleaseListProps {
  releases: Release[];
  artists: Artist[];
  placeholder?: string;
  hideArtistName?: boolean;
  userId?: string;
  action?: (userId: string, itemId: string) => void | Promise<void>;
  removeAction?: (userId: string, itemId: string) => void | Promise<void>;
  savedReleases?: string[];
  isScrollable?: boolean;
  maxHeight?: string;
}

export default function ReleaseList({
  releases,
  artists,
  placeholder = "Search releases...",
  hideArtistName = false,
  userId,
  action,
  removeAction,
  savedReleases = [],
  isScrollable = false,
  maxHeight,
}: ReleaseListProps) {
  const [userSavedReleases, setUserSavedReleases] = useState<string[]>(savedReleases);
  const [query, setQuery] = useState("");

  const filteredReleases = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return releases.filter((release) =>
      release.title.toLowerCase().includes(lowerQuery)
    );
  }, [releases, query]);
  const getArtistName = (id: string) =>
    artists.find((a) => a.id === id)?.name || id;

  const handleSaveRelease = async (userId: string, releaseId: string) => {
    setUserSavedReleases((prev) => [...prev, releaseId]);
      await action?.(userId, releaseId);  
  };

  const handleRemoveRelease = async (userId: string, releaseId: string) => {
    setUserSavedReleases((prev) =>
      prev.filter((id) => id !== releaseId)
    );
    if (removeAction) {
      await removeAction(userId, releaseId);
    }
  }

  return (
    <div className="flex flex-col mx-auto w-full max-w-4xl">
      <div className="relative mb-4 mx-auto w-full max-w-md">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border border-gray-500 rounded w-full pl-10"
          aria-label="Search releases"
          aria-describedby="search-icon"
        />
        <span
          id="search-icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          <MdOutlineSearch size={20} />
        </span>
      </div>
      <ul className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto w-full max-w-md md:max-w-2xl lg:max-w-4xl 2xl:max-w-6xl ${isScrollable ? "overflow-y-auto no-scrollbar" : ""}`} style={maxHeight ? { maxHeight } : undefined}>
        {filteredReleases.map((release) => (
          <li key={release.id}>
            <div className="flex flex-col items-center space-y-2 text-sm">
              <Link
                href={`/releases/${release.id}`}
                className="flex flex-col items-center space-y-2">
                {release.cover_img_file_key && (
                  <Image
                    src={`https://4ykxjgur5y.ufs.sh/f/${release.cover_img_file_key}`}
                    alt={release.title}
                    width={75}
                    height={75}
                    title={release.title}
                  />
                )}
                <Heading
                  headingLevel={3}
                  text={
                    release.title.length > 20
                      ? release.title.slice(0, 20) + "..."
                      : release.title
                  }
                  className="font-semibold"
                />
              </Link>
              <div className="text-center text-sm">
                <p className="text-xs italic -mt-2">{release.type}</p>
                {!hideArtistName && (
                <p>
                  by{" "}
                  <Link href={`/artists/${release.artist}`}>
                    <span className="underline">
                      {getArtistName(release.artist)}
                    </span>
                  </Link>
                </p>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-1">
            <SaveAndRemoveButton
              itemId={release.id}
              itemType="release"
              userId={userId ?? ""}
              isSaved={userSavedReleases.includes(release.id)}
              action={async () => {
                if (userId) {
                  await handleSaveRelease(userId, release.id);
                }
              }}
              removeAction={async () => {
                if (userId) {
                  await handleRemoveRelease(userId, release.id);
                }
              }}
              icon={<CiSaveDown2 size={24} />}
              removeIcon={<CiCircleMinus size={24} />}
            />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
