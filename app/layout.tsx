import type { Metadata } from "next";
// import from uploadthing
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "../app/api/uploadthing/core";
// import theme provider
import { ThemeProvider } from "@/components/theme-provider";
// import components
import { ModeToggle } from "./ui/mode-toggle";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
        {/* <Header /> */}
        {/* <main> */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* <ModeToggle /> */}
        {children}
        </ThemeProvider>
        {/* </main> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
