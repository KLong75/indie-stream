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

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const artist = await getArtistById(id);
  if (!artist) {
    return <div>Artist not found</div>;
  }
}
