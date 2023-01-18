/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['links.papareact.com', 'images.unsplash.com'],
  },
};
