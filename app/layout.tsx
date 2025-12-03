import type { Metadata } from "next";
// import auth
import { auth } from "@/auth";
// import from uploadthing
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";
// import theme provider
import { ThemeProvider } from "@/themes/theme-provider";
// import context
import { PushNotificationContextProvider } from "@/context/push-notification-context-provider";
// import components
import Header from "@/ui/header";
import Footer from "@/ui/footer";
import AudioContainer from "../ui/audio-container";
// import { Geist, Geist_Mono } from "next/font/google";
//import css
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Indie Stream",
  description: "Music streaming platform for independent artists",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  // console.log("Session in RootLayout:", session);
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className="flex flex-col min-h-screen antialiased">
        <PushNotificationContextProvider>
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
            <Header session={session} />
            <main className="flex-1 flex flex-col pb-[13.875rem]">
              {children}
              <AudioContainer />
            </main>
            <Footer session={session} />
          </ThemeProvider>
        </PushNotificationContextProvider>
      </body>
    </html>
  );
}
