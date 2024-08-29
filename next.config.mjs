// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
                pathname: '/**', // Match all paths under this domain
            },
            {
                protocol: 'https',
                hostname: 'placehold.co',
                pathname: '/**', // Match all paths under this domain
            },
            {
                protocol: 'https',
                hostname: 'koelgroupbd.com',
                pathname: '/**', // Match all paths under this domain
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                pathname: '/**', // Match all paths under this domain
            },
        ],
    },
    // Other Next.js configurations...
};

export default nextConfig;
