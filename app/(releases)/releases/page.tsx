// import from next
import Link from "next/link";

// get data
import { getAllReleases } from "@/app/lib/data";
import { getArtistById } from "@/app/lib/data";

export default async function Page() {
  const releases = await getAllReleases();
  console.log("releases", releases);
  if (!releases) {
    return <div>No releases found</div>;
  }
  const releasesAlphabetical = releases.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const releasesWithArtists = await Promise.all(
    releasesAlphabetical.map(async (release) => {
      const artistId =
        release && typeof release.artist === "string" ? release.artist : "";
      const artist = await getArtistById(artistId);
      return { ...release, artist };
    })
  );
  console.log("Releases with artists: ", releasesWithArtists);

  return (
    <div>
      <h1 className="p-4 text-center">Releases</h1>
      <ul className="px-4">
        {releasesWithArtists.map((release) => (
          <li key={release.id} className="p-2">
            <Link href={`/releases/${release.id}`}>{release.title}</Link>
            <br />
            <Link
              href={release.artist ? `/artists/${release.artist.id}` : "#"}
              className="text-sm ml-2">
              {release.artist ? `${release.artist.name}` : "Unknown Artist"}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
