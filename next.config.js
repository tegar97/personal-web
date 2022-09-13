/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "parsinta.s3.ap-southeast-1.amazonaws.com", "unavatar.io",
            "ik.imagekit.io"
        ],
    },
};

module.exports = nextConfig;
