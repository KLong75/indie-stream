// import auth
import { auth } from "@/auth";
// import data
import {
  getPlaylistById,
  getSongById,
  getReleaseById,
  getArtistById,
  getUserById,
} from "@/lib/data";
// import actions
import { saveSong, removeSavedSong, saveRelease } from "@/lib/actions";
// import components
// import BackToLink from "@/ui/back-to-link";
import SongList from "@/ui/song-list";
import { Song, Artist, Release } from "@/lib/definitions";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const session = await auth();
  console.log("Session in Songs Page:", session);
  const user = session?.user;
  const userId = user?.id || undefined;
  const userData = session && userId ? await getUserById(userId) : null;
  const userSavedSongs = userData?.saved_songs || [];
  const { id } = await props.params;
  const playlist = await getPlaylistById(id);
  const playlistAuthor = await getUserById(playlist?.created_by || "");
  if (!playlistAuthor) {
    return <div>Playlist author not found</div>;
  }
  const songs = await Promise.all(
    (playlist?.songs || []).map((id) => getSongById(id))
  );
  const songArtistIds = songs.map((song) => song?.artist);
  const artist = await Promise.all(
    songArtistIds
      .filter((id): id is string => id !== undefined)
      .map((id) => getArtistById(id))
  );
  const releaseIds = songs.map((song) => song?.release);
  const release = await Promise.all(
    releaseIds
      .filter((id): id is string => id !== undefined)
      .map((id) => getReleaseById(id))
  );
  if (!playlist) {
    return <div>Playlist not found</div>;
  } else {
    return (
      <div>
        {/* <BackToLink href="/playlists" label="Playlists" /> */}
        <h2 className="p-4 text-center">{playlist.title}</h2>
        <p className="px-4">Created by: {playlistAuthor.user_name}</p>
        <h3 className="pt-4 px-4">Description:</h3>
        <p className="px-6 text-sm text-gray-400">{playlist.description}</p>
        <div className="p-4">
          <SongList
            songs={songs.filter((song): song is Song => song !== null)}
            artists={artist.filter(
              (artist): artist is Artist => artist !== null
            )}
            releases={release.filter(
              (release): release is Release => release !== null
            )}
            placeholder={`Search ${playlist.title}...`}
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
