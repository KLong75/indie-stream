import postgres from "postgres";
import bcrypt from "bcrypt";

import {
  users,
  artists,
  songs,
  releases,
  playlists,
} from "../app/lib/initial-data.js";

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
      members TEXT[],
      city TEXT,
      state TEXT
    )
  `;
  const insertedArtists = await Promise.all(
    artists.map(async (artist) => {
      const insertedArtist = await sql`
        INSERT INTO artists
          (id, name, bio, picture, songs, releases, members, city, state)
        VALUES
          (${artist.id}, ${artist.name}, ${artist.bio}, ${artist.picture}, ${artist.songs}, ${artist.releases}, ${artist.members}, ${artist.city}, ${artist.state})
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
      genre TEXT,
      year INT,
      cover_img_file_key TEXT,
      songs UUID[],
      type TEXT
    )
  `;
  const insertedReleases = await Promise.all(
    releases.map(async (release) => {
      const insertedRelease = await sql`
        INSERT INTO releases
          (id, title, artist, genre, year, cover_img_file_key, songs, type)
        VALUES
          (${release.id}, ${release.title}, ${release.artist}, ${release.genre}, ${release.year}, ${release.cover_img_file_key}, ${release.songs}, ${release.type})
          ON CONFLICT (id) DO NOTHING
        RETURNING *
      `;
      return insertedRelease[0];
    })
  );
  console.log("Inserted releases:", insertedReleases);
}

async function seedSongs() {
  await sql`DROP TABLE IF EXISTS songs CASCADE`;
  await sql`
    CREATE TABLE IF NOT EXISTS songs (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title TEXT NOT NULL,
      artist UUID,
      release UUID,
      genre TEXT,
      year INT,
      file_key TEXT NOT NULL
    )
  `;
  const insertedSongs = await Promise.all(
    songs.map(async (song) => {
      const insertedSong = await sql`
        INSERT INTO songs
          (id, title, artist, release, genre, year, file_key)
        VALUES
          (${song.id}, ${song.title}, ${song.artist}, ${song.release}, ${song.genre}, ${song.year}, ${song.file_key})
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
      public BOOLEAN DEFAULT FALSE
    )
  `;
  const insertedPlaylists = await Promise.all(
    playlists.map(async (playlist) => {
      const insertedPlaylist = await sql`
        INSERT INTO playlists
          (id, title, songs, public)
        VALUES
          (${playlist.id}, ${playlist.title}, ${playlist.songs}, ${playlist.public})
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