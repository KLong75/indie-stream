"use client";
// import { useState } from 'react';
import { createUser } from "../lib/actions";
import { useRouter } from "next/navigation";

export default function UserSignUpForm() {
  const router = useRouter();
  // const callbackUrl = "/";
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserId = await createUser({}, formData);
    router.push(`/listeners/${newUserId}`);
    console.log('newUser:', newUserId);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <input type="hidden" name="redirectTo" value={callbackUrl} /> */}
      <input type="email" name="email" placeholder="Email" autoComplete="email" />
      <input type="password" name="password" placeholder="Password" 
      autoComplete="new-password"
      />
      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm Password"
        autoComplete="new-password"
      />
      <input type="text" name="userName" placeholder="Username" />
      <button className="rounded-md bg-blue-500 p-2" type="submit">Sign Up</button>
    </form>
  );
}