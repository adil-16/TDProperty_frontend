/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_BACKEND_URL, "static.vecteezy.com"],
  },
};

module.exports = nextConfig;
