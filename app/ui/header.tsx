// import auth
import { auth } from "@/auth";
// import components
import Nav from "./nav";
import SignOutButton from "./sign-out-button";

export default async function Header() {
  const session = await auth();
  console.log("Session in Header:", session);
  return (
    <header className="bg-slate-600 p-4">
      <h1 className="text-white text-2xl">Indie Stream</h1>
      <Nav />
      {/* <p className="text-white text-sm">
        Welcome back, {session?.user?.name || "Guest"}!
      </p> */}
      {session ? <SignOutButton /> : null}
    </header>
  );
}