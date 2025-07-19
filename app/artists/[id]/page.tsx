//import data
import {
  getArtistById,
  getSongById,
  getReleaseById,
  // getPlaylistById,
} from "@/app/lib/data";

// import actions
// import { saveArtist } from "@/app/lib/actions";
//import from next
import Image from "next/image";
import Link from "next/link";
//import components
import BackToLink from "@/app/ui/back-to-link";

// import { Button } from "@/components/ui/button";
// import from react icons
// import { RiAddCircleLine } from "react-icons/ri";
// import { Save } from "lucide-react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const artist = await getArtistById(id);
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
        <div className="p-2">
          <BackToLink href="/artists" label="Artists" />
        </div>
        <h1 className="p-4">{artist.name}</h1>
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
          <ul>Releases</ul>
          {artistReleases.map((release, index) => (
            <li key={index}>
              {release && (
                <Link href={`/releases/${release.id}`}>{release.title}</Link>
              )}
            </li>
          ))}
        </div>
        <div className="p-4">
          <ul>Songs</ul>
          {artistSongs.map(
            (song, index) =>
              song && (
                <li key={index}>
                  <Link href={`/songs/${song.id}`}>{song.title}</Link>
                </li>
              )
          )}
        </div>
      </div>
    );
  }
}
