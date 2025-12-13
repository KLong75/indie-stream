import postgres from "postgres";
import bcrypt from "bcrypt";

import {
  users,
  artists,
  songs,
  releases,
  playlists,
} from "../lib/initial-data.js";

const sql = postgres(process.env.POSTGRES_URL, { ssl: "require" });

async function seedUsers() {
  await sql`DROP TABLE IF EXISTS users CASCADE`;
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_name TEXT UNIQUE NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      profile_picture TEXT,
      saved_songs UUID[],
      saved_releases UUID[],
      saved_artists UUID[],
      playlists UUID[]
    )
  `;
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      console.log("Inserting user:", user);
      Object.entries(user).forEach(([key, value]) => {
        if (value === undefined) {
          console.warn(`User field '${key}' is undefined!`);
        }
      });
      const passwordHash = await bcrypt.hash(user.password, 12);
      const insertedUser = await sql`
        INSERT INTO users
          (id, user_name, email, password, profile_picture, saved_songs, saved_releases, saved_artists, playlists)
        VALUES
          (${user.id}, ${user.user_name}, ${user.email}, ${passwordHash}, ${user.profile_picture_src}, ${user.saved_songs}, ${user.saved_releases}, ${user.saved_artists}, ${user.playlists})
          ON CONFLICT (email) DO NOTHING
        RETURNING *
      `;
      return insertedUser[0];
    })
  );
  console.log("Inserted users:", insertedUsers);
}

async function seedArtists() {
  await sql`DROP TABLE IF EXISTS artists CASCADE`;
  await sql`
    CREATE TABLE IF NOT EXISTS artists (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name TEXT UNIQUE NOT NULL,
      bio TEXT,
      picture TEXT,
      songs UUID[],
      releases UUID[],
      genre TEXT[],
      members JSONB,
      city TEXT,
      state TEXT,
      number_of_saves INT DEFAULT 0,
      website TEXT
    )
  `;
  const insertedArtists = await Promise.all(
    artists.map(async (artist) => {
      console.log("Inserting artist:", artist);
      Object.entries(artist).forEach(([key, value]) => {
        if (value === undefined) {
          console.warn(`Artist field '${key}' is undefined!`);
        }
      });
      const insertedArtist = await sql`
        INSERT INTO artists
          (id, name, bio, picture, songs, releases, genre, members, city, state, number_of_saves, website)
        VALUES
          (${artist.id}, ${artist.name}, ${artist.bio}, ${artist.picture}, ${artist.songs}, ${artist.releases}, ${artist.genre}, ${artist.members}, ${artist.city}, ${artist.state}, ${artist.number_of_saves}, ${artist.website})
          ON CONFLICT (id) DO NOTHING
        RETURNING *
      `;
      return insertedArtist[0];
    })
  );
  console.log("Inserted artists:", insertedArtists);
}

async function seedReleases() {
  await sql`DROP TABLE IF EXISTS releases CASCADE`;
  await sql`
    CREATE TABLE IF NOT EXISTS releases (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      artist UUID,
      genre TEXT[],
      year INT,
      cover_img_file_key TEXT,
      songs UUID[],
      type TEXT,
      number_of_saves INT DEFAULT 0,
      musicians JSONB
    )
  `;
  const insertedReleases = await Promise.all(
    releases.map(async (release) => {
      console.log("Inserting release:", release);
      Object.entries(release).forEach(([key, value]) => {
        if (value === undefined) {
          console.warn(`Release field '${key}' is undefined!`);
        }
      });
      const insertedRelease = await sql`
        INSERT INTO releases
          (id, title, artist, genre, year, cover_img_file_key, songs, type, number_of_saves, musicians)
        VALUES
          (${release.id}, ${release.title}, ${release.artist}, ${release.genre}, ${release.year}, ${release.cover_img_file_key}, ${release.songs}, ${release.type}, ${release.number_of_saves}, ${release.musicians})
          ON CONFLICT (id) DO NOTHING
        RETURNING *
      `;
      return insertedRelease[0];
    })
  );
  console.log("Inserted releases:", insertedReleases);
}

async function seedSongPlays() {
  await sql`DROP TABLE IF EXISTS song_plays CASCADE`;
  await sql`
    CREATE TABLE IF NOT EXISTS song_plays (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      song_id UUID REFERENCES songs(id),
      year INT NOT NULL,
      month INT NOT NULL,
      play_count INT NOT NULL DEFAULT 0,
      UNIQUE(song_id, year, month)
    )
  `;
}

async function seedSongs() {
  await sql`DROP TABLE IF EXISTS songs CASCADE`;
  await sql`
    CREATE TABLE IF NOT EXISTS songs (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      artist UUID,
      release UUID,
      music_by TEXT[],
      lyrics_by TEXT[],
      track_number INT,
      genre TEXT[],
      year INT,
      number_of_saves INT DEFAULT 0,
      number_of_plays INT DEFAULT 0,
      file_key TEXT NOT NULL,
      musicians JSONB,
      lyrics TEXT[]
    )
  `;
  const insertedSongs = await Promise.all(
    songs.map(async (song) => {
      console.log("Inserting song:", song);
      song.music_by = Array.isArray(song.music_by)
        ? song.music_by
        : song.music_by
        ? [song.music_by]
        : [];
      song.lyrics_by = Array.isArray(song.lyrics_by)
        ? song.lyrics_by
        : song.lyrics_by
        ? [song.lyrics_by]
        : [];
      song.lyrics = song.lyrics || [];
      Object.entries(song).forEach(([key, value]) => {
        if (value === undefined) {
          console.warn(`Song field '${key}' is undefined!`);
        }
      });
      const insertedSong = await sql`
        INSERT INTO songs
          (id, title, artist, release, music_by, lyrics_by, track_number, genre, year, number_of_saves, number_of_plays, file_key, musicians, lyrics)
        VALUES
          (${song.id}, ${song.title}, ${song.artist}, ${song.release}, ${song.music_by}, ${song.lyrics_by}, ${song.track_number}, ${song.genre}, ${song.year}, ${song.number_of_saves}, ${song.number_of_plays}, ${song.file_key}, ${song.musicians}, ${song.lyrics})
          ON CONFLICT (id) DO NOTHING
        RETURNING *
      `;
      return insertedSong[0];
    })
  );
  console.log("Inserted songs:", insertedSongs);
}

async function seedPlaylists() {
  await sql`DROP TABLE IF EXISTS playlists CASCADE`;
  await sql`
    CREATE TABLE IF NOT EXISTS playlists (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      songs UUID[],
      public BOOLEAN DEFAULT FALSE,
      description TEXT,
      created_by UUID,
      number_of_saves INT DEFAULT 0
    )
  `;
  const insertedPlaylists = await Promise.all(
    playlists.map(async (playlist) => {
      console.log("Inserting playlist:", playlist);
      Object.entries(playlist).forEach(([key, value]) => {
        if (value === undefined) {
          console.warn(`Playlist field '${key}' is undefined!`);
        }
      });
      const insertedPlaylist = await sql`
        INSERT INTO playlists
          (id, title, songs, public, description, created_by, number_of_saves)
        VALUES
          (${playlist.id}, ${playlist.title}, ${playlist.songs}, ${playlist.public}, ${playlist.description}, ${playlist.created_by}, ${playlist.number_of_saves})
          ON CONFLICT (id) DO NOTHING
        RETURNING *
      `;
      return insertedPlaylist[0];
    })
  );
  console.log("Inserted playlists:", insertedPlaylists);
}

async function addForeignKeys() {
  await sql`
    ALTER TABLE songs
    ADD CONSTRAINT fk_artist
    FOREIGN KEY (artist)
    REFERENCES artists(id)
  `;
  await sql`
    ALTER TABLE songs
    ADD CONSTRAINT fk_release
    FOREIGN KEY (release)
    REFERENCES releases(id)
  `;
  await sql`
    ALTER TABLE releases
    ADD CONSTRAINT fk_artist
    FOREIGN KEY (artist)
    REFERENCES artists(id)
  `;
}

async function main() {
  await seedUsers();
  await seedArtists();
  await seedReleases();
  await seedSongPlays();
  await seedSongs();
  await seedPlaylists();
  await addForeignKeys();
  await sql.end();
}

main().catch((error) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    error
  );
});
