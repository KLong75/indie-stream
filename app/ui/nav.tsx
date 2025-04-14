"use client";

import NavListItem from "./navListItem";
import { signOutUser } from "../lib/actions";
import { Session } from "next-auth";
export default function Nav({
  navItems,
  session,
}: {
  navItems: {
    label: string;
    href: string;
    htmlElement: string;
  }[];
  session: Session | null;
}) {
  const userId = session?.user?.id;

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <nav>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <NavListItem
            key={item.label}
            label={item.label}
            href={item.label === "Your Music" ? `/listeners/${userId}` : item.href} // Replace placeholder with userId
            htmlElement={item.htmlElement}
            onClick={item.label === "Sign Out" ? handleSignOut : undefined} // Handle "Sign Out" action
          />
        ))}
      </ul>
    </nav>
  );
}