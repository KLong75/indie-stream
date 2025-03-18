// export const dynamic = "force-dynamic";

// import { getUserById } from "@/app/lib/data";

// export default async function Page({ params} : { params: { id: string } }) {
//   const user = await getUserById(params.id);
//   if (!user) {
//     return <div>User not found</div>;
//   }

//   return (
//     <div>
//       <h1>{user.user_name}</h1>

{
  /* <ul>
        {user.favorite_artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      <ul>
        {user.favorite_songs.map((song) => (
          <li key={song.id}>{song.title}</li>
        ))}

      </ul>
      <ul>
        {user.favorite_releases.map((release) => (
          <li key={release.id}>{release.title}</li>
        ))}
      </ul>
      <ul>
        {user.playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.title}</li>
        ))}
      </ul> */
}
//     </div>
//   );
// }

export const dynamic = "force-dynamic";

import { getUserById } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  // const user = await getUserById(params.id);
  const userId = params.id;
  const user = await getUserById(userId);
  if (!user) {
    return <div>User not found</div>;
  }
  return <h1>{user.user_name}</h1>;
}
