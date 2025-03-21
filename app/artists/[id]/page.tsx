//import data
import {
  getArtistById,
  getSongById,
  getReleaseById,
  getPlaylistById,
} from "@/app/lib/data";

//import definitions
import { Artist, Song, Release, Playlist } from "@/app/lib/definitions";

//import components
import Image from 'next/image';
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const artist = await getArtistById(id);
  if (!artist) {
    return <div>Artist not found</div>;
  } else {
    return (
      <div>
        <Link href="/artists">Back to Artists</Link>
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
      </div>
    );
  }
}
