"use client";

import NavListItem from "./nav-list-item";
// import { signOutUser } from "../lib/actions";
import { Session } from "next-auth";
export default function Nav({
  navItems,
  session,
}: {
  navItems: {
    label: string;
    href: string;
    icon: string;
  
  }[];
  session: Session | null;
}) {
  const userId = session?.user?.id;

  // const handleSignOut = () => {
  //   signOutUser();
  // };

  return (
    <nav>
      <ul className="flex justify-center space-x-6">
        {navItems.map((item) => (
          <NavListItem
            key={item.label}
            label={item.label}
            href={item.label === "Home" ? `/listeners/${userId}` : item.href}
            icon={item.icon}
          />
        ))}
      </ul>
    </nav>
  );
}
