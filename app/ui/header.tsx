import SignOutButton from "./sign-out-button";

export default function Header() {
  return (
    <header className="bg-slate-600 p-4">
      <h1 className="text-white text-2xl">Indie Stream</h1>
      <SignOutButton />
    </header>
  );
}