import { v4 as uuidv4 } from "uuid";
// import postgres from 'postgres';

// if (!process.env.POSTGRES_URL) {
//   throw new Error("POSTGRES_URL environment variable is not defined");
// }
// const sql = postgres(process.env.POSTGRES_URL, { ssl: 'require' });

const users = [
  {
    id: uuidv4(),
    user_name: "gnolvek",
    first_name: "Gnol",
    last_name: "Vek",
    email: "gnolvek@gmail.com",
    password: "password",
    profile_picture_src:
      "https://4ykxjgur5y.ufs.sh/f/9Dk0lBirZ3pQwyJRcw4WdtjSYmvNlMhyoqKQ4JXL5OkDbrnH",
    favorite_songs: [
      "Last Night",
      "Starting Over",
      "Dragon Attack",
      "Fake Plastic Trees",
    ],
    favorite_releases: ["Starting Over", "Your Likeness"],
    favorite_artists: ["The Long Emergency", "Vain Mainstream"],
    playlists: ["Super Cool Playlist", "Bestest Playlist Ever"],
  },
];

const songs = [
  {
    id: uuidv4(),
    title: "Last Night",
    artist: "The Long Emergency",
    release: "Starting Over",
    genre: "Indie",
    year: 2011,
    file_key: "9Dk0lBirZ3pQeKpDMOHZi3VgodAJpwYMNCRStG5Dxm78UEhH",
  },
  {
    id: uuidv4(),
    title: "Starting Over",
    artist: "The Long Emergency",
    release: "Starting Over",
    genre: "Indie",
    year: 2011,
    file_key: "9Dk0lBirZ3pQ9kf1dhrZ3pQbO4qhvWigPKX7tTJoLD8MdI0N",
  },
  {
    id: uuidv4(),
    title: "Dragon Attack",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    genre: "Indie",
    year: 2022,
    file_key: "9Dk0lBirZ3pQPenpX7t0v3fZyQBPh8VR1kIsoAUcl497Nbwn",
  },
  {
    id: uuidv4(),
    title: "Fake Plastic Trees",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    genre: "Indie",
    year: 2022,
    file_key: "9Dk0lBirZ3pQYFHqYm9DNWQs5vZVrYT1kA0FBUyJnfgxaHzw",
  },
];

const songMap = Object.fromEntries(songs.map((s) => [s.title, s.id]));

const releases = [
  {
    id: uuidv4(),
    title: "Starting Over",
    artist: "The Long Emergency",
    genre: "Indie",
    year: 2011,
    cover_img_file_key: "9Dk0lBirZ3pQWKlW2xLQTzM6aijoeSqROlyfZuwGNI4Y0kp8",
    songs: ["Last Night", "Starting Over"].map((title) => songMap[title]),
    type: "album",
  },
  {
    id: uuidv4(),
    title: "Your Likeness",
    artist: "Vain Mainstream",
    genre: "Indie",
    year: 2022,
    cover_img_file_key: "9Dk0lBirZ3pQSIcXrJBMB4K6AUTNlojusYXnrydvCJegpaIG",
    songs: ["Dragon Attack", "Fake Plastic Trees"].map(
      (title) => songMap[title]
    ),
    type: "album",
  },
];

const releaseMap = Object.fromEntries(releases.map((r) => [r.title, r.id]));

const artists = [
  {
    id: uuidv4(),
    name: "The Long Emergency",
    bio: "",
    picture: "",
    songs: ["Last Night", "Starting Over"].map((title) => songMap[title]),
    releases: ["Starting Over"].map((title) => releaseMap[title]),
    members: ["Kevin Long"],
  },
  {
    id: uuidv4(),
    name: "Vain Mainstream",
    bio: "",
    picture: "",
    songs: ["Dragon Attack", "Fake Plastic Trees"].map(
      (title) => songMap[title]
    ),
    releases: ["Your Likeness"].map((title) => releaseMap[title]),
    members: ["Vain Mainstream"],
  },
];

const artistMap = Object.fromEntries(artists.map((a) => [a.name, a.id]));

// Update songs and releases to use artist UUIDs
songs.forEach((song) => {
  song.artist = artistMap[song.artist];
  song.release = releaseMap[song.release];
});

releases.forEach((release) => {
  release.artist = artistMap[release.artist];
});

const playlists = [
  {
    id: uuidv4(),
    title: "Super Cool Playlist",
    description: "My favorite songs",
    songs: [
      "Last Night",
      "Starting Over",
      "Dragon Attack",
      "Fake Plastic Trees",
    ].map((title) => songMap[title]),
    public: true,
  },
  {
    id: uuidv4(),
    title: "Bestest Playlist Ever",
    description: "My favorite songs",
    songs: ["Last Night", "Starting Over"].map((title) => songMap[title]),
    public: false,
  },
];

users.forEach((user) => {
  user.favorite_songs = user.favorite_songs.map((title) => songMap[title]);
  user.favorite_releases = user.favorite_releases.map(
    (title) => releaseMap[title]
  );
  user.favorite_artists = user.favorite_artists.map((name) => artistMap[name]);
  user.playlists = user.playlists.map(
    (title) => playlists.find((p) => p.title === title).id
  );
});

export { users, artists, songs, releases, playlists };
