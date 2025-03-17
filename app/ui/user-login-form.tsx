// "use client";

// // import { useActionState } from 'react';
// import { authenticate } from "../lib/actions";

// export default function UserLoginForm() {

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     console.log('formData:', formData);
//     await authenticate(undefined, formData);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" name="email" placeholder="Email" />
//       <input type="password" name="password" placeholder="Password" />
//       <button className="bg-blue-500 p-2 rounded-md" type="submit">Log In</button>
//     </form>
//   );
// }


// below is the good one
// "use client";

// import { authenticate } from "@/app/lib/actions";
// import { useActionState } from "react";

// export default function UserLoginForm() {
//   const callbackUrl = "/";
//   const [errorMessage, formAction, isPending] = useActionState(
//     authenticate,
//     undefined
//   );

//   return (
//     <form action={formAction}>
//       <input
//         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//         id="email"
//         type="email"
//         name="email"
//         placeholder="Enter your email address"
//         required
//         autoComplete="email"
//       />
//       <input
//         className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//         id="password"
//         type="password"
//         name="password"
//         placeholder="Enter password"
//         required
//         minLength={6}
//         autoComplete="current-password"
//       />
//       <input type="hidden" name="redirectTo" value={callbackUrl} />
//       <button aria-disabled={isPending}>Log In</button>
//       {isPending && <p>Loading...</p>}
//       {errorMessage && <p>{errorMessage}</p>}
//     </form>
//   );
// }






"use client";

import { useFormStatus } from 'react-dom';
import { useActionState } from "react";
import { authenticate } from "@/app/lib/actions";


export default function UserLoginForm() {
  const [errorMessage, dispatch] = useActionState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
        autoComplete="email"
      />
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id="password"
        type="password"
        name="password"
        placeholder="Enter password"
        required
        minLength={6}
        autoComplete="current-password"
      />
      <LoginButton/> 
      <div>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="bg-blue-500 p-2 rounded-md" type="submit">
      Log In
    </button>
  );
}