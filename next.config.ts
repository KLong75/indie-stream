import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "4ykxjgur5y.ufs.sh",
      },
    ], // Add your external image domain here
  },
};

export default nextConfig;
