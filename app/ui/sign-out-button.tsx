"use client";

import { signOutUser } from "../lib/actions";

export default function SignOutButton() {
  return (
    <button onClick={signOutUser} className="bg-blue-500 p-2 rounded-md">
      Sign Out
    </button>
  );
}