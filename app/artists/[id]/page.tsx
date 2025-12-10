//import data
import {
  getArtistById,
  getSongById,
  getReleaseById,
  // getPlaylistById,
} from "@/lib/data";

// import actions
// import { saveArtist } from "@/app/lib/actions";
//import from next
import Image from "next/image";
import Link from "next/link";
//import components
import SongList from "@/ui/song-list";
import { Song, Artist, Release } from "@/lib/definitions";
// import BackToLink from "@/ui/back-to-link";

// import { Button } from "@/components/ui/button";
// import from react icons
// import { RiAddCircleLine } from "react-icons/ri";
// import { Save } from "lucide-react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const artist = await getArtistById(id);
  const artistWebsiteShortUrl = artist?.website
    .replace("https://", "")
    .replace("www.", "")
    .split("/")[0];
  const artistReleases = artist?.releases
    ? await Promise.all(
        artist.releases.map((release) => getReleaseById(release))
      )
    : [];
  const artistSongs = artist?.songs
    ? await Promise.all(artist.songs.map((song) => getSongById(song)))
    : [];

  if (!artist) {
    return <div>Artist not found</div>;
  } else {
    return (
      <div>
        {/* <div className="p-2">
          <BackToLink href="/artists" label="Artists" />
        </div> */}
        <h1 className="px-4">{artist.name}</h1>
        <h2 className="px-4">
          <Link
            href={artist.website}
            target="_blank"
            className="text-blue-500"
            rel="noopener noreferrer">
            {artistWebsiteShortUrl}
          </Link>
        </h2>

        <div className="p-4">
          <Image
            src={`https://4ykxjgur5y.ufs.sh/f/${artist.picture}`}
            alt={artist.name}
            width={200}
            height={200}
          />
        </div>
        <h2 className="p-2">Members</h2>
        <ul className="p-4">
          {artist.members.map((member) => (
            <li key={member}>{member}</li>
          ))}
        </ul>
        <h2 className="p-2">Bio</h2>
        <p className="p-4">{artist.bio}</p>
        <div className="p-4">
          <p>Releases</p>
          <ul>
            {artistReleases.map((release, index) => (
              // console.log("release", release),
              <li key={index}>
                {release && (
                  <Link href={`/releases/${release.id}`}>
                    <p>{release.title}</p>
                    <Image
                      src={`https://4ykxjgur5y.ufs.sh/f/${release.cover_img_file_key}`}
                      alt={release.title}
                      width={100}
                      height={100}
                    />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <SongList 
            songs={artistSongs.filter(Boolean) as Song[]} 
            artists={[artist as Artist]} 
            releases={artistReleases.filter(Boolean) as Release[]} 
            placeholder={`Search ${artist.name}'s songs...`}
          />
        </div>
      </div>
    );
  }
}
