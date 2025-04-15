export type User = {
  id: string;
  user_name: string;
  email: string;
  password: string;
  profile_picture: string;
  saved_songs: [string];
  saved_releases: [string];
  saved_artists: [string];
  playlists: [string];
  saved_public_playlists: [string];
};

export type Artist = {
  bio: string;
  city: string;
  id: string;
  members: [string];
  name: string;
  picture: string;
  songs: [string];
  releases: [string];
  state: string;
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  release: string;
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
  public: boolean;
};