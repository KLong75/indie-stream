import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import { handlers } from "@/auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // Replace with your real auth check (DB, API, etc.)
        if (credentials?.username === "admin" && credentials?.password === "admin") {
          return { id: "1", name: "Admin User" };
        }
        return null; // null if authentication fails
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Additional config, callbacks, etc. here...
};

const handler = NextAuth(authOptions);

// Export GET and POST for the App Router:
export { handler as GET, handler as POST };