/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "placebeard.it",
      "storage.googleapis.com",
      "placekitten.com",
      "picsum.photos",
      "placebear.com",
    ],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
