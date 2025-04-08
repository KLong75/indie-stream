// "use client";

// import { Session } from "next-auth";
// import Link from "next/link";
// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";


// export default function MobileMenu({ session }: { session: Session | null }, navItems: { name: string; href: string }[]) {
//   const [open, setOpen] = useState(false);
//   const userId = session?.user?.id;

//   return (
//     <>
//       <button onClick={() => setOpen(!open)}>
//         <RxHamburgerMenu />
//       </button>
//       {open && (
//         // <nav className="flex">
//         //   <ul className="flex flex-col">
//         //     <li className="p-2">
//         //       <Link href="/artists">Artists</Link>
//         //     </li>
//         //     <li className="p-2">
//         //       <Link href="/releases">Releases</Link>
//         //     </li>
//         //     <li className="p-2">
//         //       <Link href="/playlists">Playlists</Link>
//         //     </li>
//         //     {session && (
//         //       <li className="p-2">
//         //         <Link href={`/listeners/${userId}`}>Your Music</Link>
//         //       </li>
//         //     )}
//         //   </ul>
//         // </nav>
//         <nav className="flex">
//           <ul className="flex flex-col">
//             {navItems.map((item) => (
//               <li key={item.name} className="p-2">
//                 <Link href={item.href}>{item.name}</Link>
//               </li>
//             ))}
//           </ul>
//           {session && (
//             <li className="p-2">
//               <Link href={`/listeners/${userId}`}>Your Music</Link>
//             </li>
//           )}
//         </nav>
//       )}
//     </>
//   );
// }

"use client";

import { Session } from "next-auth";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

interface MobileMenuProps {
  session: Session | null;
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ session, navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const userId = session?.user?.id;

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        <RxHamburgerMenu />
      </button>
      {open && (
        <nav className="flex">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="p-2">
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
            {session && (
              <li className="p-2">
                <Link href={`/listeners/${userId}`}>Your Music</Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </>
  );
}