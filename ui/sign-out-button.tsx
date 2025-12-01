"use client";
// import signOut action
import { signOutUser } from "../lib/actions";
// import from react icons
import { MdLogout } from "react-icons/md";
// import components
import Button from "./button";

export default function SignOutButton() {
  return (
    <Button onClick={signOutUser} className=""
      // label="Sign Out"
      title="Sign Out"
      ariaLabel="Sign Out"
      icon={<MdLogout className="inline" size={24}/>}
    />
  );
}
