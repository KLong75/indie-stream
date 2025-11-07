"use client";
import type { Session } from "next-auth";
// import auth
// import { auth } from "@/auth";
// import from next
import { usePathname } from "next/navigation";
import Link from "next/link";
// import components
import Nav from "./nav";
import MobileMenu from "./mobile-menu";
// import { ModeToggle } from "./mode-toggle";
// import nav items
import { navItems } from "@/lib/nav-items";

// interface Session {
//   user: {
//     id: string;
//     email: string;
//   };
//   expires: string;
// }

export default function Header({ session }: { session: Session | null }) {
  const pathname = usePathname();
  // const session = await auth();
  // console.log("Session in Header:", session);
  if (pathname === "/") {
    return null;
  }
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-white text-2xl">Indie Stream</h1>
      </Link>
      <div className="flex items-center space-">
        <div className="hidden md:flex mr-4">
          <Nav navItems={navItems} session={session} />
        </div>
        <div className="hidden md:flex mr-4">
          {/* <ModeToggle /> */}
        </div>
        <div className="md:hidden">
          <MobileMenu session={session} navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
