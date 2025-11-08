import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "4ykxjgur5y.ufs.sh",
        pathname: "/f/*", // Allow all files under /f/
      },
    ], // Add your external image domain here
  },
};

export default nextConfig;
