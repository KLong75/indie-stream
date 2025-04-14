"use client";

import { Session } from "next-auth";
// import Link from "next/link";
// import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
// import { RxCross1 } from "react-icons/rx";
// import { signOut } from "next-auth/react";
import { signOutUser } from "../lib/actions";
// import components
import NavListItem from "./navListItem";
// import from shadcn/ui
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"


interface MobileMenuProps {
  session: Session | null;
  navItems: {
    label: string;
    href: string;
    htmlElement: string;
  }[];
}

export default function MobileMenu({ session, navItems }: MobileMenuProps) {
  // const [open, setOpen] = useState(false);
  const userId = session?.user?.id;

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <>
      {/* <button onClick={() => setOpen(!open)}>
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
      )} */}
      <Drawer>
        <DrawerTrigger asChild>
          <button className="flex items-center justify-center p-2 text-gray-700">
            <RxHamburgerMenu size={24} />
          </button>
        </DrawerTrigger>
        <DrawerContent data-vaul-drawer-direction="right">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>
              {navItems.map((item) => (
                <NavListItem
                  key={item.label}
                  label={item.label}
                  href={item.label === "Your Music" ? `/listeners/${userId}` : item.href} // Replace placeholder with userId
                  htmlElement={item.htmlElement}
                  onClick={item.label === "Sign Out" ? handleSignOut : undefined} // Handle "Sign Out" action
                />
              ))}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            {/* Add any footer content here if needed */}
          </DrawerFooter>
          <DrawerClose />
        </DrawerContent>
      </Drawer>
    </>
  );
}