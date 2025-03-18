export type User = {
  id: string;
  user_name: string;
  email: string;
  password: string;
  profile_picture: string;
  favorite_songs: [string];
  favorite_releases: [string];
  favorite_artists: [string];
  playlists: [string];
};

export type Artist = {
  id: string;
  name: string;
  bio: string;
  picture: string;
  songs: [string];
  releases: [string];
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
  songs: [string];
  type: "album" | "single" | "ep";
};

export type Playlist = {
  id: string;
  title: string;
  songs: [string];
};