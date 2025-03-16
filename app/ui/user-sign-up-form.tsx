"use client";
import React from "react";
import { createUserAction } from "../lib/actions";

export default function UserSignUpForm() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createUserAction(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input
        type="password"
        name="passwordConfirmation"
        placeholder="Confirm Password"
      />
      <input type="text" name="userName" placeholder="Username" />
      <button type="submit">Sign Up</button>
    </form>
  );
}