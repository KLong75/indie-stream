// import auth
import { auth } from "@/auth";
//import data
import {
  getUserById,
  getArtistById,
  getSongById,
  getReleaseById,
  getPlaylistById,
} from "@/lib/data";
// import actions
import {
  saveSong,
  removeSavedSong,
  saveRelease,
  removeSavedRelease,
  saveArtist,
  removeSavedArtist,
} from "@/lib/actions";
//import from next
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
//import components
import ReleaseList from "@/ui/release-list";
import SongList from "@/ui/song-list";
import SaveAndRemoveButtonClientContainer from "@/ui/save-remove-button-client-container";
// import definitions
import { Song, Artist, Release, Musician } from "@/lib/definitions";
// import BackToLink from "@/ui/back-to-link";

// import { Button } from "@/components/ui/button";
// import from react icons
// import { RiAddCircleLine } from "react-icons/ri";
// import { Save } from "lucide-react";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const user = session?.user;
  const userId = user?.id || undefined;
  const userData = session && userId ? await getUserById(userId) : null;
  const userSavedSongs = userData?.saved_songs || [];
  const { id } = await props.params;
  const artist = await getArtistById(id);
  console.log("artist.members", artist?.members);
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
      <div className="p-2">
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
        <div className="p-2 flex items-center justify-center ">
          {userId && (
            <SaveAndRemoveButtonClientContainer
              userId={userId}
              itemId={artist.id}
              initiallySaved={userData?.saved_artists?.includes(artist.id) || false}
              itemType="artist"
            />
          )}
        </div>
        <h2 className="p-2">Members</h2>
        <ul className="p-4">
          {artist.members.map((member: Musician, index: number) => (
            <li key={index}>
              {member.name}
              {member.instrument && member.instrument.length > 0 && (
                <span>: {member.instrument.join(", ")}</span>
              )}
            </li>
          ))}
        </ul>
        <h2 className="p-2">Bio</h2>
        <p className="p-4">{artist.bio}</p>
        <div className="p-4">
          <p>Releases</p>
          <ReleaseList
            releases={artistReleases.filter(Boolean) as Release[]}
            artists={artist ? [artist as Artist] : []}
            placeholder={`Search ${artist.name}'s releases...`}
            hideArtistName={true}
            userId={userId}
            action={saveRelease}
            removeAction={removeSavedRelease}
            savedReleases={userData?.saved_releases || []}
          />
        </div>
        <div className="p-6">
          <SongList
            songs={artistSongs.filter(Boolean) as Song[]}
            artists={[artist as Artist]}
            releases={artistReleases.filter(Boolean) as Release[]}
            placeholder={`Search ${artist.name}'s songs...`}
            userId={userId}
            action={saveSong}
            removeAction={removeSavedSong}
            minimal={false}
            savedSongs={userSavedSongs}
          />
        </div>
      </div>
    );
  }
}
