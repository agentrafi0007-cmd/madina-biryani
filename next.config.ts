import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Tell Next.js to create a static 'out' folder
  images: {
    unoptimized: true, // Required for static export to show external images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.transparenttextures.com",
      },
    ],
  },
};

export default nextConfig;
