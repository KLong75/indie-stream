"use client";
// import from next
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeLink({session}: {session: any}) {
  const pathname = usePathname();
  
  if (session && session.user && session.user.id && pathname !== `/listeners/${session.user.id}`) {
    return (
      <Link href={`/listeners/${session.user.id}`}>
        <span className="text-blue-500 hover:underline">Home</span>
      </Link>
    );
  } else {
    return null;
  }
}