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
    // profile_picture_src:
    // "https://4ykxjgur5y.ufs.sh/f/9Dk0lBirZ3pQwyJRcw4WdtjSYmvNlMhyoqKQ4JXL5OkDbrnH",
    // update saved_songs, saved_releases, saved_artists, playlists later
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
      {
        title: "I spent all my money on a habit",
        artist: "The Long Emergency",
      },
      { title: "I-35", artist: "The Long Emergency" },
      { title: "Your Likeness", artist: "Vain Mainstream" },
    ],
    saved_artists: [
      { name: "The Long Emergency" },
      { name: "Vain Mainstream" },
    ],
    playlists: ["Super Cool Playlist", "Bestest Playlist Ever"],
    saved_public_playlists: [],
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
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQjYeeVsAFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
    ],
    lyrics: [
      "When my salvation lies with your damnation\nDo you think around you'll still be\nWell then take a good look at the leaves dying\nColors bright as can be\nTake a good look at the leaves dying\nColors bright as you and me\nGo ahead and look at the leaves dying\nDying just like you and me",
      "I have been gone for a while this time But i am not quite sure why\nI have been gone for a while this time\nYou know as well as I",
      "So if I would have realized what you were saying\nDo you think around I'd still be\nWell then take a good look at the leaves dying\nColors bright as can be\nTake a good look at the leaves dying\nColors bright as you and me\nGo ahead and look at the leaves dying\nDying just like you and me",
      "I've been gone for a while this time\nBut I am not quite sure why",
      "And I never thought I'd get to look you in the eye and\nFinally say good bye",
      "I have been gone for a while this time\nBut I am not quite sure why",
      "And I never thought I'd get to look you in the eye and\nFinally say good bye",
    ],
  },
  {
    id: uuidv4(),
    title: "I Am Not Sorry",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQSO0ad2MB4K6AUTNlojusYXnrydvCJegpaIG0",
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
    ],
    lyrics: [
      "I keep spending money like I have it\nI am so used to spending time alone\nSometimes hobbies turn to habit\nI know such things are better left alone but\nI'm crawling again on the ground",
      "I'm standing outside the door\nIn my head and my heart I hold the key\nI hesitate what for\nI don't understand why I won't set myself free and\nI'm crawling again on the ground",
      "I am sorry\nBut I can't be what you need\nI am sorry\nBut I have to leave\nThe next time that love comes knocking\nI swear I'll be ready",
      "I spent all my money on a habit\nIt seems I have not learned a goddamn thing\nSecret knowledge only I have it\nIn the dark no one has seen what I've been doing\nI've been planting seeds in the ground",
      "And I am not sorry\nIf I don't believe what you believe\nI am not sorry\nI can't pretend I haven't seen what I've seen\nThe next time that love comes knocking\nI swear I'll be ready",
      "I am kicking in this door\nMy head and my heart explode inside of me\nI hesitate no more\nOh I will finally set myself free\nAnd fly high above the ground",
      "And I am not sorry\nIf I don't believe what you believe\nI am not sorry\nI can't pretend I haven't seen what I've seen\nRight now love is knocking\nI swear I am ready",
      "I swear that I am ready\nI swear that I am ready\nI swear that I am ready\nI swear that I am ready",
    ],
  },
  {
    id: uuidv4(),
    title: "Snow Emergency",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 3,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQXsGSr5IfA2FTdewqRPiQgE9lNSumvLI6VW0U",
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
    ],
    lyrics: [
      "Do you think you could give me a push?\nMy beat up pickup truck don't go in reverse\nIt sucks being stuck in the snow but it's worse\n When your pickup truck don't go in reverse\nIn the morning the plows and tow trucks will come round",
      "Why do I live in this town year round?",
      "Do you think you could give me a push?\nJust a little jump start and I think I should be good\nIn the morning the plows and tow trucks will come round",
      "Why do I live in this town year round?\nThis time of year the snow swallows all the sound\nThis time of year the sun barely comes around\nThis time of year I want to sleep beneath the ground",
      "Do you think you could give me a push?\nRight off of this ledge I know you've had the urge\nSometimes I swear I wish you would\nIn the morning the cops and tow trucks will come round",
      "Why do I live in this town year round?\nThis time of year the snow swallows all the sound\nThis time of year the sun barely comes around\nThis time of year I want to sleep beneath the ground",
      "Why do I live in this town year round?\nThis time of year the snow swallows all the sound\nThis time of year the sun barely comes around\nThis time of year I want to sleep beneath the ground\nThis time of year I want to sleep beneath the ground\nThis time of year I want to sleep beneath the ground.",
      "This time of year I want to sleep\nJust close my eyes and dream\nI sure could use some peace\nI'll see you in the spring",
    ],
  },
  {
    id: uuidv4(),
    title: "Standing on a tree stump with a bunch of buttons in my hand",
    artist: "The Long Emergency",
    release: "I spent all my money on a habit",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 4,
    genre: ["Indie", "Rock"],
    year: 2025,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQtlzb2oG6geYEyHmk9F7GouOP0d6BnTh5ACcX",
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
    ],
    lyrics: [
      "Standing on a tree stump with a bunch of buttons in my hand\nI close my eyes take a deep breath\nFeel the earth support me as i stand\nStanding on a tree stump with a bunch of buttons in my hand\nOnce they meant so much i did not understand\nStanding on a tree stump with a bunch of buttons in my hand\nIs this all I have left of a partner, a love, a friend?",
      "Can you tell me how you turn love off?\nCause everything you do still trunks me on\nI'm so sorry things turned out so wrong\nOur love is such a mess and it's all my fault",
      "Standing on a tree stump with a bunch of buttons in my hand\nThinking of a place where the soil is sand\nSomehow there grows there food from the land\nRaised by the loving touch of hard working hands\nOnce i called it home never again\nCause I took a selfish bite of the loving feeding hand\nAnd now I’m standing on a tree stump with a bunch of buttons in my hand\nSuch a sorry excuse for a partner, a love, a friend",
      "Can you tell me how you turn love off?\nCause everything you do still trunks me on\nI'm so sorry things turned out so wrong\nOur love is such a mess and it's all my fault",
      "Standing on a tree stump with a bunch of buttons in my hand\nI close my eyes take a deep breath\nFeel the earth support me as i stand\nStanding on a tree stump with a bunch of buttons in my hand\nOnce they meant so much I finally understand\nStanding on a tree stump with a bunch of buttons in my hand\nPraying for the faith and strength to start again\nPraying one day you can forgive a partner, a love, a friend",
      "Can you tell me how you turn love off?\nCause everything you do still turns me on\nI'm so sorry things turned out so wrong\nOur love is such a mess and it's all my fault",
      "I have serenity to accept what can't be undone\nAnd courage enough to change and carry on\nSerenity to accept what can't be undone\nAnd courage enough to change and carry on",
      "I'm so sorry things turned out so wrong\nOur love is such a mess and it's all my fault\nOur love is such a mess and it's all my fault\nOur love is such a mess and it's all my fault\nCleaning up this mess",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
    ],
    lyrics: [
      "You used to say my eyes were kind and I was beautiful\nNow you treat me with scorn and I ain't saying it's undeserved\nBut I am trying to right my wrongs and live the way I should",
      "And it's hard to rise above the past when you keep pulling me down\nTime to abandon ship before I drown\nCan you tell me please what my life is worth to you\nIf it's really less than twenty dollars",
      "I was standing on the roof of the van when you called out my name\nI jumped straight down and said hey later do you want to hang\nIf you knew on that day the path that was ahead\nWould you have still said yes or told me to drop dead",
      "It's hard to rise above the past when you keep pulling me down\nTime to abandon ship before we both drown\nCan you tell me please what my life is worth to you\nIf it's really less than twenty dollars",
      "I remember blanket beds and kissing in the rain\nI remember every lie I told with an avalanche of shame\nI left that all behind some time ago and found the courage to change\nSo tell me please what my life is worth to you\nIf it's really less than twenty dollars",
      "But don't tell me that you dream about me\nWhile you're sleeping next to someone else\nDon't tell me that you dream about me\nWhile you're sleeping next to someone else",
      "As long as I've known you\nI guess I never knew\nJust how much you like\nTo twist the knife\nWell go ahead and twist that knife\nWe are already dead insideYeah go ahead and twist that knife\nI got nothing left to hide\nGo ahead and twist that knife\nUntil there's nothing left inside\nAnd the little hope we had left has died",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar", "electric guitar"],
      },
    ],
    lyrics: [
      "Well I've got this little life\nAnd I've got a little bit of gasoline\nI just need a little spark to\n Light a big fire for all to see\nSo I've got one question\nHave you got a match for me?\nLet's light up the night and\n Burn this motherfucker clean",
      "Cause last night\nLast night\nLast night I just couldn't sleep tight",
      "When I left your house this morning\nI felt more than a bit sad\nBut more so I felt thankful\nFor what we do still have\nLast night I openend that old familiar door\nThe one I've closed so many times\nSuch solemn promisies I swore",
      "Last night\nLast night\nLast night I just couldn't sleep tight",
      "When I woke from sleep that morning\nI humbled myself and prayed\nAnd yet still I felt the summons\nDemons or I'm insane\nLast night I opened that old familiar door\nThe one I've closed so many times\nSuch solemn promisies I swore",
      "Last night\nLast night\nLast night I just couldn't sleep tight",
      "When I woke from sleep this morning\nI humbled myself and prayed\nAnd yet still I feel the summons\nDemons or I'm insane\nTonight I'll knock upon that old familiar door\nThe one I closed just last night\nSuch a solemn promisie I swore",
      "Last night\nLast night\nLast night I just couldn't sleep tight.",
      "Sleep tight\nSleep tight\nSleep tight this might be your last night.",
      "I\nI\nI\nI just want to sleep",
      "I\nI\nI\nI just want to sleep\nI just want to sleep.\nI\nI just want to sleep",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
    ],
    lyrics: [
      "Who's gonna dry my back\nWhen i get out of the shower\nYou know i always miss that spot just below my neck\nYou're always there with a towel",
      "Who's gonna scratch your back\nWhen you get that itch\nJust a little higher\nNo a little lower\nTo the left\nDown just a little more\nJust a little more\nRight there\nYeah",
      "Who will run laps to keep you warm\nWho will put up with my snoring\nWhen you have a problem who will help you process\nAnd who's gonna paint my puppets",
      "Who will cut my hair\nWho will tell you when meat is done\nWho will call me on my bullshit\nAnd who will pitch you batting practice",
      "Who will grow my food\nWhen you are sick who will take care of you\nWho will take care of me when i am sick\nWho will have your back when your best friend's husband is a dick\nWho will make fun of how i brush my teeth\nWho will help you plant seeds\nWho will help me eat healthy\nWho will chime the bell before you eat\nWho will share your life\nAnd who will teach Walt to ride a bike\nI must be drowning\nOr this Battlestar is losing life support\nWithout you I cannot catch my breath\nCause being with you has always been",
      "Like breathing\nLike breathing\nLike breathing\nLike breathing\nLike breathing\nLike breathing\nLike breathing",
      "I will pick up every button I find\nFrom now until the end of my time\nAnd you can't paint a coffin with me anytime\nBut who's gonna dry my back\nWhen i get out of the shower",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
      {
        name: "Jay Johnson",
        instrument: ["piano", "keyboards"],
      },
    ],
    lyrics: [
      "Well I've got this little life\nAnd I've got a little bit of gasoline\nI just need a little spark to\n Light a big fire for all to see\nSo I've got one question\nHave you got a match for me?\nLet's light up the night and\n Burn this motherfucker clean",
      "Tonight\nTonight\nTonight I'm gonna make everything right",
      "When I left your house this morning\nI felt more than a bit sad\nBut more so I felt thankful\nFor what we do still have\nLast night I openend that old familiar door\nThe one I've closed so many times\nSuch solemn promisies I swore",
      "Last night\nLast night\nLast night I just couldn't sleep tight",
      "When I woke from sleep that morning\nI humbled myself and prayed\nAnd yet still I felt the summons\nDemons or I'm insane\nLast night I opened that old familiar door\nThe one I've closed so many times\nSuch solemn promisies I swore",
      "Last night\nLast night\nLast night I just couldn't sleep tight",
      "When I woke from sleep this morning\nI humbled myself and prayed\nAnd yet still I feel the summons\nDemons or I'm insane\nTonight I'll knock upon that old familiar door\nThe one I closed just last night\nSuch a solemn promisie I swore",
      "Last night\nLast night\nLast night I just couldn't sleep tight.",
      "Sleep tight\nSleep tight\nSleep tight this might be your last night.",
      "I\nI\nI\nI just want to sleep",
      "I\nI\nI\nI just want to sleep\nI just want to sleep.\nI\nI just want to sleep",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
    ],
    lyrics: [
      "Do you think you could give me a push?\nMy beat up pickup truck don't go in reverse\nIt sucks being stuck in the snow but it's worse\n When your pickup truck don't go in reverse\nIn the morning the plows and tow trucks will come round",
      "Why do I live in this town year round?",
      "Do you think you could give me a push?\nJust a little jump start and I think I should be good\nIn the morning the plows and tow trucks will come round",
      "Why do I live in this town year round?\nThis time of year the snow swallows all the sound\nThis time of year the sun barely comes around\nThis time of year I want to sleep beneath the ground",
      "Do you think you could give me a push?\nRight off of this ledge I know you've had the urge\nSometimes I swear I wish you would\nIn the morning the cops and tow trucks will come round",
      "Why do I live in this town year round?\nThis time of year the snow swallows all the sound\nThis time of year the sun barely comes around\nThis time of year I want to sleep beneath the ground",
      "Why do I live in this town year round?\nThis time of year the snow swallows all the sound\nThis time of year the sun barely comes around\nThis time of year I want to sleep beneath the ground\nThis time of year I want to sleep beneath the ground\nThis time of year I want to sleep beneath the ground.",
      "This time of year I want to sleep\nJust close my eyes and dream\nI sure could use some peace\nI'll see you in the spring",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
      {
        name: "Jay Johnson",
        instrument: ["keyboards"],
      },
    ],
    lyrics: [
      "I have never written a happy love song\nAnd right now that's not what I'm about to do\nI'm tired of saying I love you through the telephone\nI wanna tell you every morning when I kiss you",
      "And I know that sun will be rising\nI know our day is coming soon\nUntil then ain't no use in me crying\n Until then I won't dwell on how much I miss you\nRight now there's work to be done\nAnd I know just what it is\nThat I've got to do",
      "I have never written a happy love song\nAnd girl I want to sing one for you\nTired of saying I love you through the telephone\nI wanna tell you every night when I'm naked with you",
      "And I know that sun will be rising\nI know our day is coming soon\nUntil then ain't no use in me crying\nUntil then I won't dwell on how much I miss you\nRight now there's work to be done\nAnd I know just what it is\nThat I've got to do",
      "Packing up my life\nKissing Minnesota goodbye\nHeading south down I-35\nStraight home to you",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar", "electric guitar"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
    ],
    lyrics: [
      "I keep spending money like I have it\nI am so used to spending time alone\nSometimes hobbies turn to habit\nI know such things are better left alone but\nI'm crawling again on the ground",
      "I'm standing outside the door\nIn my head and my heart I hold the key\nI hesitate what for\nI don't understand why I won't set myself free and\nI'm crawling again on the ground",
      "I am sorry\nBut I can't be what you need\nI am sorry\nBut I have to leave\nThe next time that love comes knocking\nI swear I'll be ready",
      "I spent all my money on a habit\nIt seems I have not learned a goddamn thing\nSecret knowledge only I have it\nIn the dark no one has seen what I've been doing\nI've been planting seeds in the ground",
      "And I am not sorry\nIf I don't believe what you believe\nI am not sorry\nI can't pretend I haven't seen what I've seen\nThe next time that love comes knocking\nI swear I'll be ready",
      "I am kicking in this door\nMy head and my heart explode inside of me\nI hesitate no more\nOh I will finally set myself free\nAnd fly high above the ground",
      "And I am not sorry\nIf I don't believe what you believe\nI am not sorry\nI can't pretend I haven't seen what I've seen\nRight now love is knocking\nI swear I am ready",
      "I swear that I am ready\nI swear that I am ready\nI swear that I am ready\nI swear this time",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar", "trombone"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
    ],
    lyrics: [
      "You used to say my eyes were kind and I was beautiful\nNow you treat me with scorn and I ain't saying it's undeserved\nBut I am trying to right my wrongs and live the way I should",
      "And it's hard to rise above the past when you keep pulling me down\nTime to abandon ship before I drown\nCan you tell me please what my life is worth to you\nIf it's really less than twenty dollars",
      "I was standing on the roof of the van when you called out my name\nI jumped straight down and said hey later do you want to hang\nIf you knew on that day the path that was ahead\nWould you have still said yes or told me to drop dead",
      "It's hard to rise above the past when you keep pulling me down\nTime to abandon ship before we both drown\nCan you tell me please what my life is worth to you\nIf it's really less than twenty dollars",
      "I remember blanket beds and kissing in the rain\nI remember every lie I told with an avalanche of shame\nI left that all behind some time ago and found the courage to change\nSo tell me please what my life is worth to you\nIf it's really less than twenty dollars",
      "But don't tell me that you dream about me\nWhile you're sleeping next to someone else\nDon't tell me that you dream about me\nWhile you're sleeping next to someone else",
      "As long as I've known you\nI guess I never knew\nJust how much you like\nTo twist the knife\nWell go ahead and twist that knife\nI got nothing left to hide\nGo ahead and twist that knife\nWe are already dead inside\nGo ahead and twist that knife\nUntil the little hope we had left has died",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar", "trombone"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
    ],
    lyrics: [
      "Everything I have\nIs broken\nMy house my bank account\nMy body my spirit\nMy car",
      "And do you wanna know\nThe really\nSad and nauseating part\nI broke it all\nOn purpose\nTrying to fill\nAn empty heart",
      "Now being happy\nSounds scary\nI am used to things\nThe way they are",
      "Here I stand\nNaked and broken\nWondering where to go\nAnd what for",
      "I never thought\nAt this age\nThat I would be\nStarting over",
      "I never thought\nAt this age\nThat I would be\nStarting over",
    ],
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
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar", "trombone"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
      {
        name: "Jay Johnson",
        instrument: ["piano", "keyboards"],
      },
      {
        name: "Spencer Roth",
        instrument: ["trumpet"],
      },
    ],
    lyrics: [
      "You sing like an angel\nAnd you will look sexy as hell\nWhen you decide not to run\nBut sometimes I'm afraid you might be a devil\nAnd you've come to claim my soul for the wrongs I've done",
      "Ever since you told me\nThat you were not going anywhere\nI hardly ever see you around\nThat means a little less music is in the air\nIt doesn't mean that I won't make a sound\nAnd it does not mean that I don't care\nWhen I said I feel lucky to know you\nI was trying to say I think that I could love you\nYou sing me to sleep\nAnd you don't even know it do you\nSing me to sleep\nSing me to sleep\nSing me to sleep\nSing me to sleep",
    ],
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
    title: "I-35",
    artist: "The Long Emergency",
    release: "I-35",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQB47RYtJk6EVGr4ZWaDsYv1lTCHUNPSndgRoQ",
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
      {
        name: "Jay Johnson",
        instrument: ["keyboards"],
      },
    ],
    lyrics: [
      "I have never written a happy love song\nAnd right now that's not what I'm about to do\nI'm tired of saying I love you through the telephone\nI wanna tell you every morning when I kiss you",
      "And I know that sun will be rising\nI know our day is coming soon\nUntil then ain't no use in me crying\n Until then I won't dwell on how much I miss you\nRight now there's work to be done\nAnd I know just what it is\nThat I've got to do",
      "I have never written a happy love song\nAnd girl I want to sing one for you\nTired of saying I love you through the telephone\nI wanna tell you every night when I'm naked with you",
      "And I know that sun will be rising\nI know our day is coming soon\nUntil then ain't no use in me crying\nUntil then I won't dwell on how much I miss you\nRight now there's work to be done\nAnd I know just what it is\nThat I've got to do",
      "Packing up my life\nKissing Minnesota goodbye\nHeading south down I-35\nStraight home to you",
    ],
  },
  {
    id: uuidv4(),
    title: "Sing Me To Sleep",
    artist: "The Long Emergency",
    release: "I-35",
    music_by: ["Kevin Long"],
    lyrics_by: ["Kevin Long"],
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: 2013,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQi8xig3w3gUBJy2MsunrDKfQTq8LkcS6vzNxR",
    musicians: [
      {
        name: "Kevin Long",
        instrument: ["vocals", "acoustic guitar", "trombone"],
      },
      {
        name: "Linus Kangas",
        instrument: ["electric guitar", "bass"],
      },
      {
        name: "Vain Mainstream",
        instrument: ["drums"],
      },
      {
        name: "Jay Johnson",
        instrument: ["piano", "keyboards"],
      },
      {
        name: "Spencer Roth",
        instrument: ["trumpet"],
      },
    ],
    lyrics: [
      "You sing like an angel\nAnd you will look sexy as hell\nWhen you decide not to run\nBut sometimes I'm afraid you might be a devil\nAnd you've come to claim my soul for the wrongs I've done",
      "Ever since you told me\nThat you were not going anywhere\nI hardly ever see you around\nThat means a little less music is in the air\nIt doesn't mean that I won't make a sound\nAnd it does not mean that I don't care\nWhen I said I feel lucky to know you\nI was trying to say I think that I could love you\nYou sing me to sleep\nAnd you don't even know it do you\nSing me to sleep\nSing me to sleep\nSing me to sleep\nSing me to sleep",
    ],
  },
  {
    id: uuidv4(),
    title: "All I Really Want",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Alanis Morissette", "Glen Ballard"],
    lyrics_by: ["Alanis Morissette", "Glen Ballard"],
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ0tFcgNV3UrQSkqbC9YRHgvXMFn4PhiDNBfyK",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Violent Pornography",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Serj Tankian", "Daron Malakian"],
    lyrics_by: ["Serj Tankian", "Daron Malakian"],
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQnR7zzkxENTZW3Rp47VgIYrPiuKlCkbwhfmzo",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Girl, You Have No Faith In Medicine",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Jack White"],
    lyrics_by: ["Jack White"],
    track_number: 3,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQYDrWPy9DNWQs5vZVrYT1kA0FBUyJnfgxaHzw",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Smooth",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Carlos Santana", "Rob Thomas"],
    lyrics_by: ["Carlos Santana", "Rob Thomas"],
    track_number: 4,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQVRpSLWek8MvcEPCf6x1ObXFwW50hz9uZlNsg",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
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
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Don't Tell Me",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Avril Lavigne"],
    lyrics_by: ["Avril Lavigne"],
    track_number: 6,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQgRs10MWuMZKia1XEn68k9hR03D5WOplJGBLt",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
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
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Change The World",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["The Offspring"],
    lyrics_by: ["The Offspring"],
    track_number: 8,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQgRs10MWuMZKia1XEn68k9hR03D5WOplJGBLt",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Basket Case",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Green Day"],
    lyrics_by: ["Green Day"],
    track_number: 9,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQj4XdFnAFRyMPznZk5mD1ENOKvWh4UT3qYSVG",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Feel No Ways",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Drake"],
    lyrics_by: ["Drake"],
    track_number: 10,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ2vWbF8MnaVfJkzxtQGUn8vuo5eqS3sdwF76Z",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "All I Wanna Do",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Sheryl Crow"],
    lyrics_by: ["Sheryl Crow"],
    track_number: 11,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQHS3b5hZkDqFsTZb24YWOQ8GtirIXajUhNneS",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "The Locomotion",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Carole King", "Gerry Goffin"],
    lyrics_by: ["Carole King", "Gerry Goffin"],
    track_number: 12,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ0iRjznV3UrQSkqbC9YRHgvXMFn4PhiDNBfyK",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "#1",
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
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Sizzler 1991 Promotional Commercial",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["unknown"],
    lyrics_by: ["unknown"],
    track_number: 14,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQmZrLjJiGcswQPV1knoU6p7dmlTBYxIRbXS2F",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Loser",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Beck"],
    lyrics_by: ["Beck"],
    track_number: 14,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQQsKG6gjAtsSOPpe25DfTGZwy7KnmFrdJl4YH",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Stand Out",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Tevin Campbell", "Alonzo Miller", "Mark Morgan"],
    lyrics_by: ["Tevin Campbell", "Alonzo Miller", "Mark Morgan"],
    track_number: 15,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQpMokqKPV3oyOPAFQYJNn8H9BiXuDgvUMGxj6",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "I'm Just a Clown",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["unknown"],
    lyrics_by: ["unknown"],
    track_number: 16,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQHuMzPZkDqFsTZb24YWOQ8GtirIXajUhNneS1",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Love In Plaster",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["unknown"],
    lyrics_by: ["unknown"],
    track_number: 17,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQa3EbSVq8FT1sDGBkuYCN9E5fSpqcdOnWxozH",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Wildest Dreams",
    artist: "Vain Mainstream",
    release: "Your Likeness",
    music_by: ["Taylor Swift"],
    lyrics_by: ["Taylor Swift"],
    track_number: 18,
    genre: ["Indie", "Rock"],
    year: 2022,
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQPCKGck0v3fZyQBPh8VR1kIsoAUcl497Nbwnr",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Compassionate International Hash Rationing",
    artist: "The Drug Budget",
    release: "Vagabond Draggin' Antagonist Bandwagon",
    music_by: ["Vain Mainstream"],
    lyrics_by: ["Vain Mainstream"],
    track_number: 1,
    genre: ["Indie", "Rock"],
    year: "2011",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQXfPWMlIfA2FTdewqRPiQgE9lNSumvLI6VW0U",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: ["vocals", "electric guitar", "bass", "drums"],
      },
      { name: "Linus Kangas", instrument: ["electric guitar"] },
    ],
  },
  {
    id: uuidv4(),
    title: "Worthwhile Nihilist Dialogue Stylist",
    artist: "The Drug Budget",
    release: "Vagabond Draggin' Antagonist Bandwagon",
    music_by: ["Vain Mainstream"],
    lyrics_by: ["Vain Mainstream"],
    track_number: 2,
    genre: ["Indie", "Rock"],
    year: "2011",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQXeNcvbIfA2FTdewqRPiQgE9lNSumvLI6VW0U",
    musicians: [
      {
        name: "Vain Mainstream",
        instrument: ["vocals", "electric guitar", "bass", "drums"],
      },
      { name: "Linus Kangas", instrument: ["electric guitar"] },
    ],
  },
  {
    id: uuidv4(),
    title: "hope is plenty",
    artist: "po mia",
    release: "hope is plenty",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2024",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQbX8IHjSgelL72dU3Dw6VrPciM90xOuXs1y4G",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
      {
        name: "e-GoS",
        instrument: [""],
      },
      {
        name: "AVOID",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "exposé",
    artist: "po mia",
    release: "REBIRTH",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2023",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQLudZdY7aXtQqwjVf5EJ63dcuePC47gZxD8sF",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "no longer neighbors",
    artist: "po mia",
    release: "REBIRTH",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2023",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQIDXlsmGjunM7a1dHs40lUxNb5SQrEPKwptJZ",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "season the day",
    artist: "po mia",
    release: "REBIRTH",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2023",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQLudZdY7aXtQqwjVf5EJ63dcuePC47gZxD8sF",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "golden tongue",
    artist: "po mia",
    release: "golden tongue",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2022",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQXly7e6IfA2FTdewqRPiQgE9lNSumvLI6VW0U",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "mouldy peachez",
    artist: "po mia",
    release: "po logue",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2022",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQESvNhDpzef5p6BuAC0FkL1vQVj8wDhmZSK7P",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "(510) BST-RDMN",
    artist: "po mia",
    release: "po logue",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2022",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQ5MGLw5CRHIpFXlbimDZMETwk1ve2y6gQtOj4",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "crazii",
    artist: "po mia",
    release: "po logue",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2022",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQV6aHgRek8MvcEPCf6x1ObXFwW50hz9uZlNsg",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  {
    id: uuidv4(),
    title: "cyberchondria",
    artist: "po mia",
    release: "po logue",
    music_by: [""],
    lyrics_by: [""],
    track_number: 1,
    genre: [""],
    year: "2022",
    number_of_saves: 0,
    number_of_plays: 0,
    file_key: "9Dk0lBirZ3pQeBvYn9HZi3VgodAJpwYMNCRStG5Dxm78UEhH",
    musicians: [
      {
        name: "po mia",
        instrument: [""],
      },
    ],
  },
  // {
  //   id: uuidv4(),
  //   title: "Ux4",
  //   artist: "po mia",
  //   release: "po logue",
  //   music_by: [""],
  //   lyrics_by: [""],
  //   track_number: 1,
  //   genre: [""],
  //   year: "2022",
  //   number_of_saves: 0,
  //   number_of_plays: 0,
  //   file_key: "",
  //   musicians: [
  //     {
  //       name: "po mia",
  //       instrument: [""],
  //     },
  //   ],
  // },
  // {
  //   id: uuidv4(),
  //   title: "",
  //   artist: "",
  //   release: "",
  //   music_by: [""],
  //   lyrics_by: [""],
  //   track_number: 1,
  //   genre: [""],
  //   year: "",
  //   number_of_saves: 0,
  //   number_of_plays: 0,
  //   file_key: "",
  //   musicians: [
  //     {
  //       name: "",
  //       instrument: [""],
  //     },
  //   ],
  // },
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
      {
        title: "I-35",
        artist: "The Long Emergency",
        release: "Starting Over",
      },
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
    title: "I-35",
    artist: "The Long Emergency",
    genre: ["Indie", "Rock"],
    year: 2013,
    cover_img_file_key: "9Dk0lBirZ3pQ0TQoJlV3UrQSkqbC9YRHgvXMFn4PhiDNBfyK",
    songs: [
      {
        title: "I-35",
        artist: "The Long Emergency",
        release: "I-35",
      },
      {
        title: "Sing Me To Sleep",
        artist: "The Long Emergency",
        release: "I-35",
      },
    ],
    type: "single",
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
        title: "All I Really Want",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Violent Pornography",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Girl, You Have No Faith In Medicine",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Smooth",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Fake Plastic Trees",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Don't Tell Me",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Dragon Attack",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Change The World",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Basket Case",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Feel No Ways",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "All I Wanna Do",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "The Locomotion",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "#1",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Sizzler 1991 Promotional Commercial",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Loser",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Stand Out",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "I'm Just a Clown",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Love In Plaster",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Wildest Dreams",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
    ],
    type: "album",
    number_of_saves: 0,
  },
  {
    id: uuidv4(),
    title: "Vagabond Draggin' Antagonist Bandwagon",
    artist: "The Drug Budget",
    genre: ["Indie", "Rock"],
    year: 2011,
    cover_img_file_key: "9Dk0lBirZ3pQMGqQwyUX8nv5DSI1J2YQHpNKqFT6uZxMicBs",
    songs: [
      {
        title: "Compassionate International Hash Rationing",
        artist: "The Drug Budget",
        release: "Vagabond Draggin' Antagonist Bandwagon",
      },
      {
        title: "Worthwhile Nihilist Dialogue Stylist",
        artist: "The Drug Budget",
        release: "Vagabond Draggin' Antagonist Bandwagon",
      },
    ],
    type: "album",
    number_of_saves: 0,
  },
  {
    id: uuidv4(),
    title: "hope is plenty",
    artist: "po mia",
    genre: ["Indie", "Rock"],
    year: 2024,
    cover_img_file_key: "9Dk0lBirZ3pQMGaZhEQX8nv5DSI1J2YQHpNKqFT6uZxMicBs",
    songs: [
      {
        title: "hope is plenty",
        artist: "po mia",
        release: "hope is plenty",
      }
    ],
    type: "single",
    number_of_saves: 0,
  },
  {
    id: uuidv4(),
    title: "REBIRTH",
    artist: "po mia",
    genre: ["Indie", "Rock"],
    year: 2023,
    cover_img_file_key: "9Dk0lBirZ3pQwMyxRr4WdtjSYmvNlMhyoqKQ4JXL5OkDbrnH",
    songs: [
      {
        title: "exposé",
        artist: "po mia",
        release: "REBIRTH",
      },
      {
        title: "no longer neighbors",
        artist: "po mia",
        release: "REBIRTH",
      },
      {
        title: "season the day",
        artist: "po mia",
        release: "REBIRTH",
      }
    ],
    type: "ep",
    number_of_saves: 0,
  },
  {
    id: uuidv4(),
    title: "golden tongue",
    artist: "po mia",
    genre: ["Indie", "Rock"],
    year: 2022,
    cover_img_file_key: "9Dk0lBirZ3pQbmj1IFSgelL72dU3Dw6VrPciM90xOuXs1y4G",
    songs: [
      {
        title: "golden tongue",
        artist: "po mia",
        release: "golden tongue",
      },
    ],
    type: "single",
    number_of_saves: 0,
  },
  {
    id: uuidv4(),
    title: "po logue",
    artist: "po mia",
    genre: ["Indie", "Rock"],
    year: 2022,
    cover_img_file_key: "9Dk0lBirZ3pQmt55xHiGcswQPV1knoU6p7dmlTBYxIRbXS2F",
    songs: [
      {
        title: "mouldy peachez",
        artist: "po mia",
        release: "po logue",
      },
      {
        title: "(510) BST-RDMN",
        artist: "po mia",
        release: "po logue",
      },
      {
        title: "crazii",
        artist: "po mia",
        release: "po logue",
      },
      {
        title: "cyberchondria",
        artist: "po mia",
        release: "po logue",
      },
      // {
      //   title: "Ux4",
      //   artist: "po mia",
      //   release: "po logue",
      // }
    ],
    type: "album",
    number_of_saves: 0,
  },
  // {
  //   id: uuidv4(),
  //   title: "",
  //   artist: "",
  //   genre: ["Indie", "Rock"],
  //   year: 2011,
  //   cover_img_file_key: "",
  //   songs: [
  //     {
  //       title: "",
  //       artist: "",
  //       release: "",
  //     },
  //     {
  //       title: "",
  //       artist: "",
  //       release: "",
  //     },
  //   ],
  //   type: "album",
  //   number_of_saves: 0,
  // },
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
        title: "I-35",
        artist: "The Long Emergency",
        release: "I-35",
      },
      {
        title: "Sing Me To Sleep",
        artist: "The Long Emergency",
        release: "I-35",
      },
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
      {
        title: "I-35",
        artist: "The Long Emergency",
      },
      { title: "Starting Over", artist: "The Long Emergency" },
      {
        title: "I spent all my money on a habit",
        artist: "The Long Emergency",
      },
    ],
    genre: ["Indie", "Rock"],
    members: [
      {
        name: "Kevin Long",
        instrument: [
          "vocals",
          "acoustic guitar",
          "electric guitar",
          "trombone",
        ],
      },
    ],
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
        title: "All I Really Want",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Violent Pornography",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Girl, You Have No Faith In Medicine",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Smooth",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Fake Plastic Trees",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Don't Tell Me",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Dragon Attack",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Change The World",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Basket Case",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Feel No Ways",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "All I Wanna Do",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "The Locomotion",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "#1",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Sizzler 1991 Promotional Commercial",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Loser",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Stand Out",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "I'm Just a Clown",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Love In Plaster",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
      {
        title: "Wildest Dreams",
        artist: "Vain Mainstream",
        release: "Your Likeness",
      },
    ],
    releases: [{ title: "Your Likeness", artist: "Vain Mainstream" }],
    genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
    members: [
      {
        name: "Vain Mainstream",
        instrument: [
          "vocals",
          "electric guitar",
          "acoustic guitar",
          "bass",
          "drums",
          "keyboards",
          "effects",
        ],
      },
    ],
    number_of_saves: 0,
    city: "Minneapolis",
    state: "MN",
    website: "https://vainmainstream.com",
  },
  {
    id: uuidv4(),
    name: "The Drug Budget",
    bio: "Best band in town according to a handful of City Pages in 2018",
    picture: "9Dk0lBirZ3pQMGqQwyUX8nv5DSI1J2YQHpNKqFT6uZxMicBs",
    songs: [
      {
        title: "Compassionate International Hash Rationing",
        artist: "The Drug Budget",
        release: "Vagabond Draggin' Antagonist Bandwagon",
      },
      {
        title: "Worthwhile Nihilist Dialogue Stylist",
        artist: "The Drug Budget",
        release: "Vagabond Draggin' Antagonist Bandwagon",
      },
    ],
    releases: [
      {
        title: "Vagabond Draggin' Antagonist Bandwagon",
        artist: "The Drug Budget",
      },
    ],
    genre: ["Indie", "Rock"],
    members: [
      {
        name: "Vain Mainstream",
        instrument: ["vocals", "electric guitar", "bass", "drums"],
      },
      { name: "Linus Kangas", instrument: ["electric guitar"] },
    ],
    number_of_saves: 0,
    city: "Minneapolis",
    state: "MN",
    website: "https://thedrugbudget.bandcamp.com",
  },
  {
    id: uuidv4(),
    name: "po mia",
    bio: "po mia is an eclectic, up-and-coming singer/songwriter based in St. Louis, MO. They are best known for their versatility of musical styles, colorful stylistic expression, as well as their ability to engage a crowd through their lyricism and captivating performances. Coming from a music therapy educational background, po mia's musical works often tackle themes of identity, love, fear, and navigating real life experiences.",
    picture: "9Dk0lBirZ3pQHWG5gpkDqFsTZb24YWOQ8GtirIXajUhNneS1",
    songs: [
      {
        title: "hope is plenty",
        artist: "po mia",
        release: "hope is plenty",
      },
      {
        title: "exposé",
        artist: "po mia",
        release: "REBIRTH",
      },
      {
        title: "no longer neighbors",
        artist: "po mia",
        release: "REBIRTH",
      },
      {
        title: "season the day",
        artist: "po mia",
        release: "REBIRTH",
      },
      {
        title: "golden tongue",
        artist: "po mia",
        release: "golden tongue",
      },
      {
        title: "mouldy peachez",
        artist: "po mia",
        release: "po logue",
      },
      {
        title: "(510) BST-RDMN",
        artist: "po mia",
        release: "po logue",
      },
      {
        title: "crazii",
        artist: "po mia",
        release: "po logue",
      },
      {
        title: "cyberchondria",
        artist: "po mia",
        release: "po logue",
      },
      // {
      //   title: "Ux4",
      //   artist: "po mia",
      //   release: "po logue",
      // },
    ],
    releases: [
      {
        title: "hope is plenty",
        artist: "po mia",
      },
      {
        title: "REBIRTH",
        artist: "po mia",
      },
      {
        title: "golden tongue",
        artist: "po mia",
      },
      {
        title: "po logue",
        artist: "po mia",
      },
    ],
    genre: ["Indie", "Rock", "Hip-Hop", "Pop"],
    members: [
      {
        name: "po mia",
        instrument: [
          "vocals",
          "acoustic guitar",
          "electric guitar",
          "bass",
          "drums",
        ],
      },
    ],
    number_of_saves: 0,
    city: "St. Louis",
    state: "MO",
    website: "https://pomiamusic.com",
  },
];

// --- BUILD LOOKUP MAPS USING COMPOSITE KEYS ---
const songMap = Object.fromEntries(
  songs.map((s) => [`${s.title}|${s.artist}|${s.release}`, s.id]),
);

const releaseMap = Object.fromEntries(
  releases.map((r) => [`${r.title}|${r.artist}`, r.id]),
);

const artistMap = Object.fromEntries(artists.map((a) => [a.name, a.id]));

// --- REPLACE REFERENCES WITH UUIDs ---
releases.forEach((release) => {
  release.artist = artistMap[release.artist];
  release.songs = release.songs.map(
    ({ title, artist, release: releaseTitle }) =>
      songMap[`${title}|${artist}|${releaseTitle}`],
  );
});

artists.forEach((artist) => {
  artist.songs = artist.songs.map(
    ({ title, artist: artistName, release }) =>
      songMap[`${title}|${artistName}|${release}`],
  );
  artist.releases = artist.releases.map(
    ({ title, artist: artistName }) => releaseMap[`${title}|${artistName}`],
  );
});

songs.forEach((song) => {
  song.artist = artistMap[song.artist];
  song.release =
    releaseMap[
      `${song.release}|${Object.keys(artistMap).find(
        (name) => artistMap[name] === song.artist,
      )}`
    ];
});

// --- Add musicians to each release ---
releases.forEach((release) => {
  // Find all songs for this release
  const releaseSongIds = release.songs; // these are UUIDs after mapping
  const releaseSongs = songs.filter((song) => releaseSongIds.includes(song.id));

  // Map of musician name -> Set of instruments
  const musicianMap = new Map();

  releaseSongs.forEach((song) => {
    (song.musicians || []).forEach((musician) => {
      if (!musicianMap.has(musician.name)) {
        musicianMap.set(musician.name, new Set());
      }
      musician.instrument.forEach((instr) => {
        musicianMap.get(musician.name).add(instr);
      });
    });
  });

  // Build musicians array for the release
  release.musicians = Array.from(musicianMap.entries()).map(
    ([name, instrumentsSet]) => ({
      name,
      instrument: Array.from(instrumentsSet),
    }),
  );
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
      {
        title: "cyberchondria",
        artist: "po mia",
        release: "po logue",
      },
    ].map(
      ({ title, artist, release }) => songMap[`${title}|${artist}|${release}`],
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
      ({ title, artist, release }) => songMap[`${title}|${artist}|${release}`],
    ),
    public: false,
    created_by: users[0].id,
    number_of_saves: 1,
  },
];

// --- UPDATE USERS TO USE UUIDs ---
users.forEach((user) => {
  user.saved_songs = user.saved_songs.map(
    ({ title, artist, release }) => songMap[`${title}|${artist}|${release}`],
  );
  user.saved_releases = user.saved_releases.map(
    ({ title, artist }) => releaseMap[`${title}|${artist}`],
  );
  user.saved_artists = user.saved_artists.map(({ name }) => artistMap[name]);
  user.playlists = user.playlists.map(
    (title) => playlists.find((p) => p.title === title).id,
  );
});

export { users, artists, songs, releases, playlists };
