// import from next
import Link from "next/link";
// import auth
import { auth } from "@/auth";

export default async function Nav({navItems}: {navItems: { name: string; href: string }[]}) {
  const session = await auth();
  console.log("session:", session);
  const userId = session?.user?.id;

  return (
    <nav className="flex">
      <ul className="flex flex-row">
        {navItems.map((item) => (
          <li key={item.name} className="p-2">
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        {session ? <li className="p-2">
          <Link href={`/listeners/${userId}`}>Your Music</Link>
        </li>: null}
      </ul>
    </nav>
  );
}