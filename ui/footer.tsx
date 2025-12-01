"use client";
// import from next-auth
import type { Session } from "next-auth";
// import from next
import { usePathname } from "next/navigation";
// import components
import Nav from "./nav";
// import nav items
import { navItems } from "@/lib/nav-items";

export default function Footer({ session }: { session: Session | null }) {
  const pathname = usePathname();
  return (
    // Don't render footer on the home page
    pathname === "/" ? null : (
      <footer className="bg-gray-900 text-white p-4 text-center">
        {/* <p className="text-gray-400">©2025</p>
        <a
          href="https://rhythmcodestudio.tech"
          target="_blank"
          rel="noopener noreferrer">
          <p className="text-gray-400 hover:text-white underline cursor-pointer">Rhythm Code Studio</p>
        </a> */}
        <Nav navItems={navItems} session={session} />
      </footer>
    )
  );
}
