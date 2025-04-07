// import from next
import Link from "next/link";
// import auth
import { auth } from "@/auth";
// import icons
// import { RxHamburgerMenu } from "react-icons/rx";

export default async function Nav() {
  const session = await auth();
  console.log("session:", session);
  const userId = session?.user?.id;

  return (
    <nav className="flex">
      <ul className="flex flex-row">
        <li className="p-2">
          <Link href="/artists">Artists</Link>
        </li>
        {session ? <li className="p-2">
          <Link href={`/listeners/${userId}`}>Your Music</Link>
        </li>: null}
      </ul>
    </nav>
  );
}