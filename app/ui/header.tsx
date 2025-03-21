import { auth } from "@/auth";

import SignOutButton from "./sign-out-button";

export default async function Header() {
  const session = await auth();
  console.log("session:", session);

  return (
    <header className="bg-slate-600 p-4">
      <h1 className="text-white text-2xl">Indie Stream</h1>
      {/* <p className="text-white text-sm">
        Welcome back, {session?.user?.name || "Guest"}!
      </p> */}

      
      {session ? <SignOutButton /> : null}
    </header>
  );
}