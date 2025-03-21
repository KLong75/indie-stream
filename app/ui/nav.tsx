// import from next
import Link from "next/link";
// import auth
import { auth } from "@/auth";

export default async function Nav() {
  const session = await auth();
  console.log("session:", session);
  const userId = session?.user?.id;

  return (
    <nav className="p-2">
      <ul>
        <li className="p-2">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2">
          <Link href="/artists">Artists</Link>
        </li>
        {session ? <li className="p-2">
          <Link href={`/listeners/${userId}`}>Listeners</Link>
        </li>: null}
      </ul>
    </nav>
  );
}
