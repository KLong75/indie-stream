// import auth
import { auth } from "@/auth";
// import from next
import Link from "next/link";
// import components
import Nav from "./nav";
import MobileMenu from "./mobile-menu";
// import nav items
import { navItems } from "@/app/lib/nav-items";

export default async function Header() {
  const session = await auth();
  console.log("Session in Header:", session);
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-white text-2xl">Indie Stream</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex">
          <Nav navItems={navItems} session={session} />
        </div>
        <div className="md:hidden">
          <MobileMenu session={session} navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
