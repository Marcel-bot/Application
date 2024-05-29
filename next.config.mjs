/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    distDir: 'out'
};

export default nextConfig;