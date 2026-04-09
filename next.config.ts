import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "output: export" removed — Vercel natively supports Next.js (API routes required for email)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
