import postgres from 'postgres';
import {
  User,
  Artist,
  Song,
  Release,
  Playlist,
} from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getUserById(id: string): Promise<User | null> {
  try {
    const userData = await sql<User[]>`SELECT * FROM users WHERE id = ${id}`;
    return userData[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user data');
  }
}

export async function getArtistById(id: string): Promise<Artist | null> {
  try {
    const artistData = await sql<Artist[]>`SELECT * FROM artists WHERE id = ${id}`;
    return artistData[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist data');
  }
}

export async function getSongById(id: string): Promise<Song | null> {
  try {
    const songData = await sql<Song[]>`SELECT * FROM songs WHERE id = ${id}`;
    return songData[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching song data');
  }
}

export async function getReleaseById(id: string): Promise<Release | null> {
  try {
    const releaseData = await sql<Release[]>`SELECT * FROM releases WHERE id = ${id}`;
    return releaseData[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching release data');
  }
}

export async function getPlaylistById(id: string): Promise<Playlist | null> {
  try {
    const playlistData = await sql<Playlist[]>`SELECT * FROM playlists WHERE id = ${id}`;
    return playlistData[0] || null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching playlist data');
  }
}

export async function getUsers(): Promise<User[]> {
  try {
    return await sql<User[]>`SELECT * FROM users`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user data');
  }
}

export async function getArtists(): Promise<Artist[]> {
  try {
    return await sql<Artist[]>`SELECT * FROM artists`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist data');
  }
}

export async function getSongs(): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM songs`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching song data');
  }
}

export async function getReleases(): Promise<Release[]> {
  try {
    return await sql<Release[]>`SELECT * FROM releases`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching release data');
  }
}

export async function getPlaylists(): Promise<Playlist[]> {
  try {
    return await sql<Playlist[]>`SELECT * FROM playlists`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching playlist data');
  }
}

export async function getArtistSongs(artistId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM songs WHERE artist_id = ${artistId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist songs');
  }
}

export async function getReleaseSongs(releaseId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM songs WHERE release_id = ${releaseId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching release songs');
  }
}

export async function getPlaylistSongs(playlistId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM playlist_songs WHERE playlist_id = ${playlistId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching playlist songs');
  }
}

export async function getUserPlaylists(userId: string): Promise<Playlist[]> {
  try {
    return await sql<Playlist[]>`SELECT * FROM playlists WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user playlists');
  }
}

export async function getArtistReleases(artistId: string): Promise<Release[]> {
  try {
    return await sql<Release[]>`SELECT * FROM releases WHERE artist_id = ${artistId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching artist releases');
  }
}

export async function getUserFavoriteSongs(userId: string): Promise<Song[]> {
  try {
    return await sql<Song[]>`SELECT * FROM favorite_songs WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user favorite songs');
  }
}

export async function getUserFavoriteReleases(userId: string): Promise<Release[]> {
  try {
    return await sql<Release[]>`SELECT * FROM favorite_releases WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user favorite releases');
  }
}

export async function getUserFavoriteArtists(userId: string): Promise<Artist[]> {
  try {
    return await sql<Artist[]>`SELECT * FROM favorite_artists WHERE user_id = ${userId}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('An error occurred while fetching user favorite artists');
  }
}


