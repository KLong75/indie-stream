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
      
      {/* <ul>
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
      </ul> */}
//     </div>
//   );
// }


export const dynamic = "force-dynamic";

import { getUserById } from "@/app/lib/data";

// 1. Explicitly define the shape of your route props:
interface PageProps {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

// 2. Use that type for your page function:
export default async function Page({ params }: PageProps) {
  const user = await getUserById(params.id);
  if (!user) {
    return <div>User not found</div>;
  }

  return <h1>{user.user_name}</h1>;
}