// "use client";

// import { Session } from "next-auth";
// import Link from "next/link";
// import { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";

// interface MobileMenuProps {
//   session: Session | null;
//   navItems: { name: string; href: string }[];
// }

// export default function MobileMenu({ session, navItems }: MobileMenuProps) {
//   const [open, setOpen] = useState(false);
//   const userId = session?.user?.id;

//   return (
//     <>
//       <button onClick={() => setOpen(!open)}>
//         {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
//       </button>
//       {open && (
//         <nav className="flex">
//           <ul className="flex flex-col">
//             {navItems.map((item) => (
//               <li key={item.name} className="p-2">
//                 <Link href={item.href}>{item.name}</Link>
//               </li>
//             ))}
//             {session && (
//               <li className="p-2">
//                 <Link href={`/listeners/${userId}`}>Your Music</Link>
//               </li>
//             )}
//           </ul>
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
import { RxCross1 } from "react-icons/rx";
// import { signOut } from "next-auth/react";
import { signOutUser } from "../lib/actions";

interface MobileMenuProps {
  session: Session | null;
  navItems: { name: string; href: string }[];
}

export default function MobileMenu({ session, navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const userId = session?.user?.id;

  // Add "Sign Out" to navItems if the user is logged in
  const extendedNavItems = session
    ? [...navItems, { name: "Sign Out", href: "#" }]
    : navItems;

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
      </button>
      {open && (
        <nav className="flex">
          <ul className="flex flex-col">
            {extendedNavItems.map((item) => (
              <li key={item.name} className="p-2">
                {item.name === "Sign Out" ? (
                  <button
                    onClick={() => {
                      signOutUser();
                      setOpen(false); // Close the menu after signing out
                    }}
                    className="text-left w-full"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link href={item.href}>{item.name}</Link>
                )}
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