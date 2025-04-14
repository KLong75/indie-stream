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
// import components
import NavListItem from "./navListItem";

interface MobileMenuProps {
  session: Session | null;
  navItems: {
    label: string;
    href: string;
    htmlElement: string;
  }[];
}

export default function MobileMenu({ session, navItems }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const userId = session?.user?.id;

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <>
      <button onClick={() => setOpen(!open)}>
        {open ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
      </button>
      {open && (
        <nav className="flex">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <NavListItem
                key={item.label}
                label={item.label}
                href={item.label === "Your Music" ? `/listeners/${userId}` : item.href} // Replace placeholder with userId
                htmlElement={item.htmlElement}
                onClick={item.label === "Sign Out" ? handleSignOut : undefined} // Handle "Sign Out" action
              />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}