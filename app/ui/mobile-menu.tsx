"use client";

import { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function MobileMenu({ session }: { session: Session | null }) {
  const [open, setOpen] = useState(false);
  const userId = session?.user?.id;

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <RxHamburgerMenu />
      </button>
      {open && (
        <nav className="flex">
          <ul className="flex flex-col">
            <li className="p-2">
              <Link href="/artists">Artists</Link>
            </li>
            {session && (
              <li className="p-2">
                <Link href={`/listeners/${userId}`}>Your Music</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}