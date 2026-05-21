/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  env: {
    NEXT_PUBLIC_BETTER_AUTH_URL:
      process.env.NEXT_PUBLIC_BETTER_AUTH_URL ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;