/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lobster-app-b9w2b.ondigitalocean.app",
      },
    ],
  },
};

module.exports = nextConfig;
