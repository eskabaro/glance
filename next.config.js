/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "glance-api.s3.eu-north-1.amazonaws.com"
         }
      ]
   }
}

module.exports = nextConfig
