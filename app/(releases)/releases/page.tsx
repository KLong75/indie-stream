// import from next
import Link from "next/link";

// get data
import { getAllReleases } from "@/app/lib/data";

export default async function Page() {
  const releases = await getAllReleases();
  // console.log("releases", releases);

  return (
    <div>
      <h1 className="p-4">Releases</h1>
      <ul className="p-4">
        {releases.map((release) => (
          <li key={release.id} className="p-4 cursor-pointer">
            <Link href={`/releases/${release.id}`}>{release.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}