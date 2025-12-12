"use client";
// import from next
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { Release } from "@/lib/definitions";
// import icons
import { MdOutlineSearch } from "react-icons/md";

interface ReleaseListProps {
  releases: Release[];
  placeholder?: string;
}

export default function ReleaseList({
  releases,
  placeholder = "Search releases...",
}: ReleaseListProps) {
  const [query, setQuery] = useState("");
  const filteredReleases = useMemo(() => {
    const lowerQuery = query.toLowerCase();
    return releases.filter((release) =>
      release.title.toLowerCase().includes(lowerQuery)
    );
  }, [releases, query]);

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
      <ul className="flex grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
        {filteredReleases.map((release) => (
          <li key={release.id}>
            <Link href={`/releases/${release.id}`}>
              <div className="flex flex-col items-center text-center">
                {release.cover_img_file_key && (
                  <Image
                    src={`https://4ykxjgur5y.ufs.sh/f/${release.cover_img_file_key}`}
                    alt={release.title}
                    width={75}
                    height={75}
                  />
                )}
                {release.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
