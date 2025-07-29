import { v4 as uuidv4 } from "uuid";
import { number } from "zod";
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
    saved_songs: [
      "Last Night",
      "Starting Over",
      "Dragon Attack",
      "Fake Plastic Trees",
    ],
    saved_releases: ["Starting Over", "Your Likeness"],
    saved_artists: ["The Long Emergency", "Vain Mainstream"],
    playlists: ["Super Cool Playlist", "Bestest Playlist Ever"],
  },
];

const songs = [
  {
    id: uuidv4(),
    title: "Last Night",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQeKpDMOHZi3VgodAJpwYMNCRStG5Dxm78UEhH",
  },
   {
    id: uuidv4(),
    title: "Snow Emergency",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQAopfJJBygdn5G8QFv0hfpWE7KZqxj3lTc9wC",
  },
  {
    id: uuidv4(),
    title: "I-35",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 3,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQB47RYtJk6EVGr4ZWaDsYv1lTCHUNPSndgRoQ",
  },
  {
    id: uuidv4(),
    title: "I Am Not Sorry",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 4,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQSdXYmLMB4K6AUTNlojusYXnrydvCJegpaIG0",
  },
    {
    id: uuidv4(),
    title: "Twist The Knife",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 5,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ9DsOuI5rZ3pQbO4qhvWigPKX7tTJoLD8MdI0",
  },
   {
    id: uuidv4(),
    title: "Starting Over",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 6,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ9kf1dhrZ3pQbO4qhvWigPKX7tTJoLD8MdI0N",
  },
  {
    id: uuidv4(),
    title: "Sing Me To Sleep",
    artist: "The Long Emergency",
    release: "Starting Over",
    track_number: 7,
    genre: ["Indie", "Rock"],
    year: 2011,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQi8xig3w3gUBJy2MsunrDKfQTq8LkcS6vzNxR",
  },
  // {
  //   id: uuidv4(),
  //   title: "",
  //   artist: "The Long Emergency",
  //   release: "Starting Over",
  //   track_number: ,
  //   genre: ["Indie", "Rock"],
  //   year: 2011,
  //   file_key: "",
  // },
  {
    id: uuidv4(),
    title: "Dragon Attack",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    track_number: 7,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQPenpX7t0v3fZyQBPh8VR1kIsoAUcl497Nbwn",
  },
  {
    id: uuidv4(),
    title: "Fake Plastic Trees",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    track_number: 5,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQYFHqYm9DNWQs5vZVrYT1kA0FBUyJnfgxaHzw",
  },
  {
    id: uuidv4(),
    title: "Number One",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    track_number: 13,
    genre: ["Indie", "Rock", "Hip-Hop"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQjpWcc0AFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
  },
];

const songMap = Object.fromEntries(songs.map((s) => [s.title, s.id]));

const releases = [
  {
    id: uuidv4(),
    title: "Starting Over",
    artist: "The Long Emergency",
    genre: ["Indie", "Rock"],
    year: 2011,
    cover_img_file_key: "9Dk0lBirZ3pQC9DaJ0mFSlgsE7pxCb9uMk8iOwY1UrBWIyj2",
    songs: ["Last Night", "Snow Emergency", "I-35", "I Am Not Sorry", "Twist The Knife", "Starting Over", "Sing Me To Sleep"].map((title) => songMap[title]),
    type: "album",
    number_of_saves: 0,
  },
  {
    id: uuidv4(),
    title: "Your Likeness",
    artist: "Vain Mainstream",
    genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
    year: 2022,
    cover_img_file_key: "9Dk0lBirZ3pQSIcXrJBMB4K6AUTNlojusYXnrydvCJegpaIG",
    songs: ["Fake Plastic Trees", "Dragon Attack", "Number One"].map(
      (title) => songMap[title]
    ),
    type: "album",
    number_of_saves: 0,
  },
];

const releaseMap = Object.fromEntries(releases.map((r) => [r.title, r.id]));

const artists = [
  {
    id: uuidv4(),
    name: "The Long Emergency",
    bio: "The Long Emergency is a rock band in St. Louis Missouri.",
    picture: "9Dk0lBirZ3pQgau5aYPWuMZKia1XEn68k9hR03D5WOplJGBL",
    songs: ["Last Night", "Snow Emergency", "I-35", "I Am Not Sorry", "Twist The Knife", "Starting Over", "Sing Me To Sleep"].map((title) => songMap[title]),
    releases: ["Starting Over"].map((title) => releaseMap[title]),
    genre: ["Indie", "Rock"],
    members: ["Kevin Long"],
    number_of_saves: 0,
    city: "St. Louis",
    state: "MO",
    website: "https://thelongemergency.net",
  },
  {
    id: uuidv4(),
    name: "Vain Mainstream",
    bio: "Vain mainstream is a rock artist in Minneapolis Minnesota.",
    picture: "9Dk0lBirZ3pQShXbxaMB4K6AUTNlojusYXnrydvCJegpaIG0",
    songs: ["Fake Plastic Trees", "Dragon Attack", "Number One"].map(
      (title) => songMap[title]
    ),
    releases: ["Your Likeness"].map((title) => releaseMap[title]),
    genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
    members: ["Vain Mainstream"],
    number_of_saves: 0,
    city: "Minneapolis",
    state: "MN",
    website: "https://vainmainstream.com",
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
    created_by: users[0].id,
    number_of_saves: 1,
  },
  {
    id: uuidv4(),
    title: "Bestest Playlist Ever",
    description: "The best songs ever",
    songs: ["Last Night", "Starting Over"].map((title) => songMap[title]),
    public: false,
    created_by: users[0].id,
    number_of_saves: 1,
  },
];

users.forEach((user) => {
  user.saved_songs = user.saved_songs.map((title) => songMap[title]);
  user.saved_releases = user.saved_releases.map((title) => releaseMap[title]);
  user.saved_artists = user.saved_artists.map((name) => artistMap[name]);
  user.playlists = user.playlists.map(
    (title) => playlists.find((p) => p.title === title).id
  );
});

export { users, artists, songs, releases, playlists };
