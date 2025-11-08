"use client";
// import { useState } from 'react';
import { createUser } from "../lib/actions";
import { useRouter } from "next/navigation";

export default function ListenerSignUpForm() {
  const router = useRouter();
  // const callbackUrl = "/";
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUserId = await createUser({}, formData);
    router.push(`/listeners/${newUserId}?postLogin=true`);
    console.log("newUser:", newUserId);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="email"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 my-2"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="new-password"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 my-2"
      />
      <label htmlFor="password"> Confirm Password</label>
      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm Password"
        autoComplete="new-password"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 my-2"
      />
      <label htmlFor="userName">Username</label>
      <input
        type="text"
        name="userName"
        placeholder="Username"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 my-2"
      />
      <button className="rounded-md bg-blue-600 p-2 mt-6" type="submit">
        Sign Up
      </button>
    </form>
  );
}
