/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'greet.bg',
            },
          ],
    }
}

module.exports = nextConfig
