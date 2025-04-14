// import data
import {
  getPlaylistById,
  // getSongById,
  // getReleaseById,
  // getArtistById,
} from "@/app/lib/data";

// import from next
// import Image from "next/image";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const playlist = await getPlaylistById(id);
  if (!playlist) {
    return <div>Playlist not found</div>;
  } else {
    return (
      <div>
        <Link href="/playlists">Back to Playlists</Link>
        <h1 className="p-4">{playlist.title}</h1>
        <p> by: </p>
        <div className="p-4">
          {/* <Image
            src={`https://4ykxjgur5y.ufs.sh/f/${playlist.picture}`}
            alt={playlist.title}
            width={200}
            height={200}
          /> */}
        </div>
        <h2 className="p-2">Description</h2>
        {/* <p className="p-4">{playlist.description}</p> */}
      </div>
    );
  }
}