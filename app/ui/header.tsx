// import auth
import { auth } from "@/auth";
// import from next
import Link from "next/link";
// import components
import Nav from "./nav";
import SignOutButton from "./sign-out-button";

export default async function Header() {
  const session = await auth();
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <Link href="/"><h1 className="text-white text-2xl">Indie Stream</h1></Link>
      <div className="flex items-center space-x-4">
        <Nav />
        {session ? <SignOutButton /> : null}
      </div>
    </header>
  );
}
