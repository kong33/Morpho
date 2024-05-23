/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['styles'],
    additionalData: '@import "@/styles/global.scss";'
  },
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
