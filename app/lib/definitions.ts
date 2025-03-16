export type User = {
  id: string;
  user_name: string;
  email: string;
  password: string;
  profile_picture: string;
  favorite_songs: Song[];
  favorite_releases: Release[];
  favorite_artists: Artist[];
  playlists: Playlist[];
};

export type Artist = {
  id: string;
  name: string;
  bio: string;
  picture: string;
  songs: Song[];
  releases: Release[];
  members: [string];
};

export type Song = {
  id: string;
  title: string;
  artist: Artist;
  release: Release;
  genre: string;
  year: number;
  // duration: number;
  file_key: string;
};

export type Release = {
  id: string;
  title: string;
  artist: Artist;
  genre: string;
  year: number;
  cover_img_file_key: string;
  songs: Song[];
  type: "album" | "single" | "ep";
};

export type Playlist = {
  id: string;
  title: string;
  songs: Song[];
};