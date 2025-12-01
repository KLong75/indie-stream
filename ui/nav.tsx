"use client";
import { NavItem } from "@/lib/nav-items";
import NavListItem from "./nav-list-item";
import { Session } from "next-auth";

export default function Nav({
  navItems,
  session,
}: {
  navItems: NavItem[];
  session: Session | null;
}) {
  const userId = session?.user?.id;

  return (
    <nav>
      <ul className="flex justify-center space-x-12">
        {navItems.map((item) => {
          let href = item.href;
          if (item.label === "Home" && userId) {
            href = `/listeners/${userId}`;
          }
          return (
            <NavListItem
              key={item.label}
              item={{ ...item, href }}
            />
          );
        })}
      </ul>
    </nav>
  );
}