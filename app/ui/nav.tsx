"use client";
//import from react
import { useState } from "react";
// import from next
import Link from "next/link";
// import auth
import { auth } from "@/auth";
// import icons
import { RxHamburgerMenu } from "react-icons/rx";

const menuItems = [
  { name: "Artists", href: "/artists" },
  { name: "Releases", href: "/releases" },
  { name: "Songs", href: "/songs" },
  { name: "Your Music", href: "/listeners" },
  { name: "Playlists", href: "/playlists" },
  { name: "Settings", href: "/settings" },
];

export default async function Nav() {
  const session = await auth();
  console.log("session:", session);
  const userId = session?.user?.id;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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