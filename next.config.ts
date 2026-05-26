import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serverless function configuration for Vercel
  serverExternalPackages: ["@react-pdf/renderer"],
  
  // Disable x-powered-by header
  poweredByHeader: false,
  
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;