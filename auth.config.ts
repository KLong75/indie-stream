import type { NextAuthConfig } from "next-auth";
import path from "path";

export const authConfig = {
  // pages: {
  //   signIn: "/login",
  // },
  providers: [
    // added later in auth.ts since it requires bcrypt which is only compatible with Node.js
    // while this file is also used in non-Node.js environments
  ],
  cookies: {
    sessionToken: {
      name: "authjs.session-token",
      options: {
        sameSite: "none",
        secure: true,
        path: "/",
      },
    },
    callbackUrl: {
      name: "authjs.callback-url",
      options: {
        sameSite: "none",
        secure: true,
        path: "/",
      },
    },
  },
  callbacks: {
    // jwt({ token, user }) {
    //   if (user) {
    //     // User is available during sign-in
    //     token.id = user.id;
    //   }
    //   return token;
    async jwt({ token, user }) {
      // Copy user.id into token.sub so the middleware sees it
      if (user?.id) {
        token.sub = user.id;
      }
      return token;
    },
    // session({ session, token }) {
    //   session.user.id = token.id as string;
    //   return session;
    // },

    async session({ session, token }) {
      // Copy token.sub into session.user.id so the client sees it
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },

    authorized({ auth, request: { nextUrl } }) {
      // console.log('**********run - nextUrl:', nextUrl);
      // console.log('**********run - auth:', auth);
      const isLoggedIn = !!auth?.user;
      // console.log('isLoggedIn:', isLoggedIn);
      const isOnTheirListenerPage = nextUrl.pathname.startsWith("/listeners");
      if (isOnTheirListenerPage) {
        if (isLoggedIn) {
          // console.log('User is logged in and on their listener page');
          return true;
        }
        // console.log('User is not logged in and on their listener page');
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        if (auth?.user) {
          console.log("auth.user:", auth.user);
          return Response.redirect(
            new URL(`/listeners/${auth.user.id}`, nextUrl) // <-- use user.id here
          );
        }
      }
      console.log("User is not on their listener page or not logged in");
      return true;
    },
  },
} satisfies NextAuthConfig;
