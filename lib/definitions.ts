export type User = {
  id: string;
  user_name: string;
  email: string;
  password: string;
  profile_picture: string;
  saved_songs: string[];
  saved_releases: string[];
  saved_artists: string[];
  playlists: string[];
  saved_public_playlists: string[];
};

export type Musician = {
  name: string;
  instrument: string[];
};

export type Artist = {
  bio: string;
  city: string;
  id: string;
  genre: string[];
  members: Musician[];
  name: string;
  number_of_saves: number;
  picture: string;
  releases: string[];
  songs: string[];
  state: string;
  website: string;
};

export type Song = {
  id: string;
  title: string;
  artist: string;
  release: string;
  music_by?: string[];
  lyrics_by?: string[];
  track_number: number;
  genre: string[];
  year: number;
  number_of_saves: number;
  number_of_plays: number;
  file_key: string;
  musicians?: Musician[];
  lyrics?: string[];
};

export type Release = {
  id: string;
  title: string;
  artist: string;
  genre: string[];
  year: number;
  cover_img_file_key: string;
  songs: string[];
  type: "album" | "single" | "ep";
  number_of_saves: number;
  musicians?: Musician[];
};

export type Playlist = {
  id: string;
  title: string;
  songs: string[];
  public: boolean;
  description: string;
  created_by: string;
  number_of_saves: number;
};

export type AppSession = {
  user?: {
    id: string;
    user_name?: string;
    email?: string;
    // add any other fields you use
  };
  // add any other fields your session includes
} | null;