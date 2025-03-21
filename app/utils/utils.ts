// import { getSongById } from "../lib/data";

// export const formatPlaylist = ({
//   playlist,
// }: {
//   playlist: { id: string; title: string; songs: string[] };
// }) => {
//   let formattedPlaylist = [];
//   const songIds = playlist.songs;
//   console.log("songIds", songIds);
//   songIds.forEach(async (id) => {
//     const song = await getSongById(id);
//     console.log("song", song);
//     formattedPlaylist.push(song);
//     console.log("formattedPlaylist", formattedPlaylist);
//   });
// };

// import { getSongById } from "../lib/data";

// export const formatPlaylist = async ({
//   playlist,
// }: {
//   playlist: { id: string; title: string; songs: string[] };
// }) => {
//   const formattedPlaylist: { [key: string]: any[] } = {};
//   const songIds = playlist.songs;
//   console.log("songIds", songIds);

//   formattedPlaylist[playlist.title] = [];

//   for (const id of songIds) {
//     const song = await getSongById(id);
//     console.log("song", song);
//     formattedPlaylist[playlist.title].push(song);
//     console.log("formattedPlaylist", formattedPlaylist);
//   }

//   return formattedPlaylist;
// };


import { getSongById } from "../lib/data";
import { Song } from "../lib/definitions";

export async function formatPlaylist({
  playlist,
}: {
  playlist: { id: string; title: string; songs: string[] };
}): Promise<Song[]> {
  const formattedPlaylist: Song[] = [];
  for (const songId of playlist.songs) {
    const song = await getSongById(songId);
    if (song) {
      formattedPlaylist.push(song);
    }
  }
  return formattedPlaylist; // make sure you return just the array
}