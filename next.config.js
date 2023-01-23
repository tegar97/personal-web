/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['www.gravatar.com', 'pbs.twimg.com', 'is3.cloudhost.id'],
    },
};

module.exports = nextConfig;
