// import { v4 as uuidv4 } from "uuid";

// const users = [
//   {
//     id: uuidv4(),
//     user_name: "gnolvek",
//     first_name: "Gnol",
//     last_name: "Vek",
//     email: "gnolvek@gmail.com",
//     password: "password",
//     profile_picture_src:
//       "https://4ykxjgur5y.ufs.sh/f/9Dk0lBirZ3pQwyJRcw4WdtjSYmvNlMhyoqKQ4JXL5OkDbrnH",
//     saved_songs: [
//       "Last Night",
//       "Starting Over",
//       "Dragon Attack",
//       "Fake Plastic Trees",
//     ],
//     saved_releases: ["Starting Over", "Your Likeness"],
//     saved_artists: ["The Long Emergency", "Vain Mainstream"],
//     playlists: ["Super Cool Playlist", "Bestest Playlist Ever"],
//   },
// ];

// const songs = [
//   {
//     id: uuidv4(),
//     title: "Fall",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 1,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQjYeeVsAFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
//   },
//   {
//     id: uuidv4(),
//     title: "I Am Not Sorry",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 2,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQSO0ad2MB4K6AUTNlojusYXnrydvCJegpaIG0",
//   },
//     {
//     id: uuidv4(),
//     title: "Snow Emergency",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 3,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQXsGSr5IfA2FTdewqRPiQgE9lNSumvLI6VW0U",
//   },
//   {
//     id: uuidv4(),
//     title: "Standing on a tree stump with a bunch of buttons in my hand",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 4,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQtlzb2oG6geYEyHmk9F7GouOP0d6BnTh5ACcX",
//   },
//     {
//     id: uuidv4(),
//     title: "Twist the Knife",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 5,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQShoPU8MB4K6AUTNlojusYXnrydvCJegpaIG0",
//   },
//     {
//     id: uuidv4(),
//     title: "Last Night",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 6,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQbPBsUDSgelL72dU3Dw6VrPciM90xOuXs1y4G",
//   },
//     {
//     id: uuidv4(),
//     title: "Like Breathing",
//     artist: "The Long Emergency",
//     release: "I spent all my money on a habit",
//     track_number: 7,
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQ311JTv7UnHROzbZWtsuFpDgdwqfvPY5cQj7V",
//   },
//   {
//     id: uuidv4(),
//     title: "Last Night",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 1,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQeKpDMOHZi3VgodAJpwYMNCRStG5Dxm78UEhH",
//   },
//   {
//     id: uuidv4(),
//     title: "Snow Emergency",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 2,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQAopfJJBygdn5G8QFv0hfpWE7KZqxj3lTc9wC",
//   },
//   {
//     id: uuidv4(),
//     title: "I-35",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 3,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQB47RYtJk6EVGr4ZWaDsYv1lTCHUNPSndgRoQ",
//   },
//   {
//     id: uuidv4(),
//     title: "I Am Not Sorry",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 4,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQSdXYmLMB4K6AUTNlojusYXnrydvCJegpaIG0",
//   },
//   {
//     id: uuidv4(),
//     title: "Twist The Knife",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 5,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQ9DsOuI5rZ3pQbO4qhvWigPKX7tTJoLD8MdI0",
//   },
//   {
//     id: uuidv4(),
//     title: "Starting Over",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 6,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQ9kf1dhrZ3pQbO4qhvWigPKX7tTJoLD8MdI0N",
//   },
//   {
//     id: uuidv4(),
//     title: "Sing Me To Sleep",
//     artist: "The Long Emergency",
//     release: "Starting Over",
//     track_number: 7,
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQi8xig3w3gUBJy2MsunrDKfQTq8LkcS6vzNxR",
//   },
//   // {
//   //   id: uuidv4(),
//   //   title: "",
//   //   artist: "The Long Emergency",
//   //   release: "Starting Over",
//   //   track_number: ,
//   //   genre: ["Indie", "Rock"],
//   //   year: 2011,
//   //   file_key: "",
//   // },
//   {
//     id: uuidv4(),
//     title: "Dragon Attack",
//     artist: "Vain Mainstream",
//     release: "Your Likeness",
//     track_number: 7,
//     genre: ["Indie", "Rock"],
//     year: 2022,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQPenpX7t0v3fZyQBPh8VR1kIsoAUcl497Nbwn",
//   },
//   {
//     id: uuidv4(),
//     title: "Fake Plastic Trees",
//     artist: "Vain Mainstream",
//     release: "Your Likeness",
//     track_number: 5,
//     genre: ["Indie", "Rock"],
//     year: 2022,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQYFHqYm9DNWQs5vZVrYT1kA0FBUyJnfgxaHzw",
//   },
//   {
//     id: uuidv4(),
//     title: "Number One",
//     artist: "Vain Mainstream",
//     release: "Your Likeness",
//     track_number: 13,
//     genre: ["Indie", "Rock", "Hip-Hop"],
//     year: 2022,
//     number_of_saves: 0,
//     number_of_plays: 0,
//     file_key: "9Dk0lBirZ3pQjpWcc0AFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
//   },
// ];

// const songMap = Object.fromEntries(songs.map((s) => [s.title, s.id]));

// const releases = [
//   {
//     id: uuidv4(),
//     title: "I spent all my money on a habit",
//     artist: "The Long Emergency",
//     genre: ["Indie", "Rock"],
//     year: 2025,
//     cover_img_file_key: "9Dk0lBirZ3pQRmATNsyhYPpStqRu432wBydgr7CUnWozmsj0",
//     songs: [
//       "Fall",
//       "I Am Not Sorry",
//       "Snow Emergency",
//       "Standing on a tree stump with a bunch of buttons in my hand",
//       "Twist the Knife",
//       "Last Night",
//       "Like Breathing",
//     ].map((title) => songMap[title]),
//     type: "album",
//     number_of_saves: 0,
//   },
//   {
//     id: uuidv4(),
//     title: "Starting Over",
//     artist: "The Long Emergency",
//     genre: ["Indie", "Rock"],
//     year: 2013,
//     cover_img_file_key: "9Dk0lBirZ3pQC9DaJ0mFSlgsE7pxCb9uMk8iOwY1UrBWIyj2",
//     songs: [
//       "Last Night",
//       "Snow Emergency",
//       "I-35",
//       "I Am Not Sorry",
//       "Twist The Knife",
//       "Starting Over",
//       "Sing Me To Sleep",
//     ].map((title) => songMap[title]),
//     type: "album",
//     number_of_saves: 0,
//   },
//   {
//     id: uuidv4(),
//     title: "Your Likeness",
//     artist: "Vain Mainstream",
//     genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
//     year: 2022,
//     cover_img_file_key: "9Dk0lBirZ3pQSIcXrJBMB4K6AUTNlojusYXnrydvCJegpaIG",
//     songs: ["Fake Plastic Trees", "Dragon Attack", "Number One"].map(
//       (title) => songMap[title]
//     ),
//     type: "album",
//     number_of_saves: 0,
//   },
// ];

// const releaseMap = Object.fromEntries(releases.map((r) => [r.title, r.id]));

// const artists = [
//   {
//     id: uuidv4(),
//     name: "The Long Emergency",
//     bio: "The Long Emergency is a rock band in St. Louis Missouri.",
//     picture: "9Dk0lBirZ3pQgau5aYPWuMZKia1XEn68k9hR03D5WOplJGBL",
//     songs: [
//       "Last Night",
//       "Snow Emergency",
//       "I-35",
//       "I Am Not Sorry",
//       "Twist The Knife",
//       "Starting Over",
//       "Sing Me To Sleep",
//       "Fall",
//       "I Am Not Sorry",
//       "Snow Emergency",
//       "Standing on a tree stump with a bunch of buttons in my hand",
//       "Twist the Knife",
//       "Last Night",
//       "Like Breathing",
//     ].map((title) => songMap[title]),
//     releases: ["Starting Over", "I spent all my money on a habit"].map((title) => releaseMap[title]),
//     genre: ["Indie", "Rock"],
//     members: ["Kevin Long"],
//     number_of_saves: 0,
//     city: "St. Louis",
//     state: "MO",
//     website: "https://thelongemergency.net",
//   },
//   {
//     id: uuidv4(),
//     name: "Vain Mainstream",
//     bio: "Vain mainstream is a rock artist in Minneapolis Minnesota.",
//     picture: "9Dk0lBirZ3pQShXbxaMB4K6AUTNlojusYXnrydvCJegpaIG0",
//     songs: ["Fake Plastic Trees", "Dragon Attack", "Number One"].map(
//       (title) => songMap[title]
//     ),
//     releases: ["Your Likeness"].map((title) => releaseMap[title]),
//     genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
//     members: ["Vain Mainstream"],
//     number_of_saves: 0,
//     city: "Minneapolis",
//     state: "MN",
//     website: "https://vainmainstream.com",
//   },
// ];

// const artistMap = Object.fromEntries(artists.map((a) => [a.name, a.id]));

// // Update songs and releases to use artist UUIDs
// songs.forEach((song) => {
//   song.artist = artistMap[song.artist];
//   song.release = releaseMap[song.release];
// });

// releases.forEach((release) => {
//   release.artist = artistMap[release.artist];
// });

// const playlists = [
//   {
//     id: uuidv4(),
//     title: "Super Cool Playlist",
//     description: "My favorite songs",
//     songs: [
//       "Standing on a tree stump with a bunch of buttons in my hand",
//       "Starting Over",
//       "Dragon Attack",
//       "Fake Plastic Trees",
//     ].map((title) => songMap[title]),
//     public: true,
//     created_by: users[0].id,
//     number_of_saves: 1,
//   },
//   {
//     id: uuidv4(),
//     title: "Bestest Playlist Ever",
//     description: "The best songs ever",
//     songs: ["Sing Me To Sleep", "Starting Over"].map((title) => songMap[title]),
//     public: false,
//     created_by: users[0].id,
//     number_of_saves: 1,
//   },
// ];

// users.forEach((user) => {
//   user.saved_songs = user.saved_songs.map((title) => songMap[title]);
//   user.saved_releases = user.saved_releases.map((title) => releaseMap[title]);
//   user.saved_artists = user.saved_artists.map((name) => artistMap[name]);
//   user.playlists = user.playlists.map(
//     (title) => playlists.find((p) => p.title === title).id
//   );
// });

// export { users, artists, songs, releases, playlists };

import { v4 as uuidv4 } from "uuid";

// --- USERS ---
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
    // We'll update saved_songs, saved_releases, saved_artists, playlists later
    saved_songs: [
      {
        title: "Last Night",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Starting Over",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Dragon Attack",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Fake Plastic Trees",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
    ],
    saved_releases: [
      { title: "Starting Over", artist: "The Long Emergency" },
      { title: "Your Likeness", artist: "Vain Mainstream" },
    ],
    saved_artists: [
      { name: "The Long Emergency" },
      { name: "Vain Mainstream" },
    ],
    playlists: ["Super Cool Playlist", "Bestest Playlist Ever"],
  },
];

// --- SONGS ---
const songs = [
  {
    id: uuidv4(),
    title: "Fall",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
   personnel: {
      vocals: ["Kevin Long"],
      acoustic_guitar: ["Kevin Long"],
   }, 
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQjYeeVsAFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
  },
  {
    id: uuidv4(),
    title: "I Am Not Sorry",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
     personnel: {
      vocals: ["Kevin Long"],
      acoustic_guitar: ["Kevin Long"],
   }, 
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQSO0ad2MB4K6AUTNlojusYXnrydvCJegpaIG0",
  },
  {
    id: uuidv4(),
    title: "Snow Emergency",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
     personnel: {
      vocals: ["Kevin Long"],
      acoustic_guitar: ["Kevin Long"],
   }, 
    track_number: 3,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQXsGSr5IfA2FTdewqRPiQgE9lNSumvLI6VW0U",
  },
  {
    id: uuidv4(),
    title: "Standing on a tree stump with a bunch of buttons in my hand",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    personnel: {
      vocals: ["Kevin Long"],
      acoustic_guitar: ["Kevin Long"],
   }, 
    track_number: 4,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQtlzb2oG6geYEyHmk9F7GouOP0d6BnTh5ACcX",
  },
  {
    id: uuidv4(),
    title: "Twist the Knife",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 5,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQShoPU8MB4K6AUTNlojusYXnrydvCJegpaIG0",
  },
  {
    id: uuidv4(),
    title: "Last Night",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 6,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQbPBsUDSgelL72dU3Dw6VrPciM90xOuXs1y4G",
  },
  {
    id: uuidv4(),
    title: "Like Breathing",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 7,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ311JTv7UnHROzbZWtsuFpDgdwqfvPY5cQj7V",
  },
  {
    id: uuidv4(),
    title: "Last Night",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQeKpDMOHZi3VgodAJpwYMNCRStG5Dxm78UEhH",
  },
  {
    id: uuidv4(),
    title: "Snow Emergency",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQAopfJJBygdn5G8QFv0hfpWE7KZqxj3lTc9wC",
  },
  {
    id: uuidv4(),
    title: "I-35",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 3,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQB47RYtJk6EVGr4ZWaDsYv1lTCHUNPSndgRoQ",
  },
  {
    id: uuidv4(),
    title: "I Am Not Sorry",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 4,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQSdXYmLMB4K6AUTNlojusYXnrydvCJegpaIG0",
  },
  {
    id: uuidv4(),
    title: "Twist The Knife",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 5,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ9DsOuI5rZ3pQbO4qhvWigPKX7tTJoLD8MdI0",
  },
  {
    id: uuidv4(),
    title: "Starting Over",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 6,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ9kf1dhrZ3pQbO4qhvWigPKX7tTJoLD8MdI0N",
  },
  {
    id: uuidv4(),
    title: "Sing Me To Sleep",
    artist: "The Long Emergency",
    release: "Starting Over",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 7,
    genre: ["Indie", "Rock"],
    year: 2013,
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
    music_by: ["Brian May"],
    lyrics_by: ["Brian May"],
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
    music_by: ["Thom Yorke"],
    lyrics_by: ["Thom Yorke"],
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
    music_by: ["Nelly"],
    lyrics_by: ["Nelly"],
    track_number: 13,
    genre: ["Indie", "Rock", "Hip-Hop"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQjpWcc0AFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
  },
];

// --- RELEASES ---
const releases = [
  {
    id: uuidv4(),
    title: "I spent all my money on a habit",
    artist: "The Long Emergency",
    genre: ["Indie", "Rock"],
    year: 2025,
    cover_img_file_key: "9Dk0lBirZ3pQRmATNsyhYPpStqRu432wBydgr7CUnWozmsj0",
    songs: [
      {
        title: "Fall",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "I Am Not Sorry",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Snow Emergency",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Standing on a tree stump with a bunch of buttons in my hand",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Twist the Knife",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Last Night",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Like Breathing",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
    ],
    type: "album",
    number_of_saves: 0,
  },
  // ... (other releases, use {title, artist, release} for each song reference)
  {
    id: uuidv4(),
    title: "Starting Over",
    artist: "The Long Emergency",
    genre: ["Indie", "Rock"],
    year: 2013,
    cover_img_file_key: "9Dk0lBirZ3pQC9DaJ0mFSlgsE7pxCb9uMk8iOwY1UrBWIyj2",
    songs: [
      {
        title: "Last Night",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Snow Emergency",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      { title: "I-35", artist: "The Long Emergency", release: "Starting Over" },
      {
        title: "I Am Not Sorry",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Twist The Knife",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Starting Over",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Sing Me To Sleep",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
    ],
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
    songs: [
      {
        title: "Fake Plastic Trees",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Dragon Attack",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Number One",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
    ],
    type: "album",
    number_of_saves: 0,
  },
];

// --- ARTISTS ---
const artists = [
  {
    id: uuidv4(),
    name: "The Long Emergency",
    bio: "The Long Emergency is a rock band in St. Louis Missouri.",
    picture: "9Dk0lBirZ3pQgau5aYPWuMZKia1XEn68k9hR03D5WOplJGBL",
    songs: [
      {
        title: "Last Night",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      // ... (other songs, use {title, artist, release})
      {
        title: "Snow Emergency",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      { title: "I-35", artist: "The Long Emergency", release: "Starting Over" },
      {
        title: "I Am Not Sorry",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Twist The Knife",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Starting Over",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Sing Me To Sleep",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Fall",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "I Am Not Sorry",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Snow Emergency",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Standing on a tree stump with a bunch of buttons in my hand",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Twist the Knife",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Last Night",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Like Breathing",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
    ],
    releases: [
      { title: "Starting Over", artist: "The Long Emergency" },
      {
        title: "I spent all my money on a habit",
        artist: "The Long Emergency",
      },
    ],
    genre: ["Indie", "Rock"],
    members: ["Kevin Long"],
    number_of_saves: 0,
    city: "St. Louis",
    state: "MO",
    website: "https://thelongemergency.net",
  },
  // ... (other artists, same pattern)
  {
    id: uuidv4(),
    name: "Vain Mainstream",
    bio: "Vain mainstream is a rock artist in Minneapolis Minnesota.",
    picture: "9Dk0lBirZ3pQShXbxaMB4K6AUTNlojusYXnrydvCJegpaIG0",
    songs: [
      {
        title: "Fake Plastic Trees",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Dragon Attack",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Number One",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
    ],
    releases: [{ title: "Your Likeness", artist: "Vain Mainstream" }],
    genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
    members: ["Vain Mainstream"],
    number_of_saves: 0,
    city: "Minneapolis",
    state: "MN",
    website: "https://vainmainstream.com",
  },
  // {
  //   id: uuidv4(),
  //   name: "po mia",
  //   bio: "po mia is an eclectic, up-and-coming singer/songwriter based in St. Louis, MO. They are best known for their versatility of musical styles, colorful stylistic expression, as well as their ability to engage a crowd through their lyricism and captivating performances. Coming from a music therapy educational background, po mia's musical works often tackle themes of identity, love, fear, and navigating real life experiences.",
  // },
];

// --- BUILD LOOKUP MAPS USING COMPOSITE KEYS ---
const songMap = Object.fromEntries(
  songs.map((s) => [`${s.title}|${s.artist}|${s.release}`, s.id])
);

const releaseMap = Object.fromEntries(
  releases.map((r) => [`${r.title}|${r.artist}`, r.id])
);

const artistMap = Object.fromEntries(artists.map((a) => [a.name, a.id]));

// --- REPLACE REFERENCES WITH UUIDs ---
releases.forEach((release) => {
  release.artist = artistMap[release.artist];
  release.songs = release.songs.map(
    ({ title, artist, release: releaseTitle }) =>
      songMap[`${title}|${artist}|${releaseTitle}`]
  );
});

artists.forEach((artist) => {
  artist.songs = artist.songs.map(
    ({ title, artist: artistName, release }) =>
      songMap[`${title}|${artistName}|${release}`]
  );
  artist.releases = artist.releases.map(
    ({ title, artist: artistName }) => releaseMap[`${title}|${artistName}`]
  );
});

songs.forEach((song) => {
  song.artist = artistMap[song.artist];
  song.release =
    releaseMap[
      `${song.release}|${Object.keys(artistMap).find(
        (name) => artistMap[name] === song.artist
      )}`
    ];
});

// --- PLAYLISTS ---
const playlists = [
  {
    id: uuidv4(),
    title: "Super Cool Playlist",
    description: "My favorite songs",
    songs: [
      {
        title: "Standing on a tree stump with a bunch of buttons in my hand",
        artist: "The Long Emergency",
        release: "I spent all my money on a habit",
      },
      {
        title: "Starting Over",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Dragon Attack",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Fake Plastic Trees",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
    ].map(
      ({ title, artist, release }) => songMap[`${title}|${artist}|${release}`]
    ),
    public: true,
    created_by: users[0].id,
    number_of_saves: 1,
  },
  {
    id: uuidv4(),
    title: "Bestest Playlist Ever",
    description: "The best songs ever",
    songs: [
      {
        title: "Sing Me To Sleep",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
      {
        title: "Starting Over",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
    ].map(
      ({ title, artist, release }) => songMap[`${title}|${artist}|${release}`]
    ),
    public: false,
    created_by: users[0].id,
    number_of_saves: 1,
  },
];

// --- UPDATE USERS TO USE UUIDs ---
users.forEach((user) => {
  user.saved_songs = user.saved_songs.map(
    ({ title, artist, release }) => songMap[`${title}|${artist}|${release}`]
  );
  user.saved_releases = user.saved_releases.map(
    ({ title, artist }) => releaseMap[`${title}|${artist}`]
  );
  user.saved_artists = user.saved_artists.map(({ name }) => artistMap[name]);
  user.playlists = user.playlists.map(
    (title) => playlists.find((p) => p.title === title).id
  );
});

export { users, artists, songs, releases, playlists };
