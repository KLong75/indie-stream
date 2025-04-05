import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indie Stream",
  description: "Music streaming platform for independent artists",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
      // <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      // >
      <>
        {/* <Header /> */}
        <main>
          {children}
        </main>
        {/* <Footer /> */}
        </>
      // </body>
    // </html>
  );
}