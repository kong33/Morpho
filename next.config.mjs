/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['styles'],
    additionalData: '@import "@/styles/global.scss";'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: ''
      }
    ]
  }
};

export default nextConfig;
