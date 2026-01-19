/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuration optimized for Vercel deployment
  images: {
    unoptimized: true, // Don't optimize these images since they're used in canvas
  },
  // Keep clean URLs
  trailingSlash: false, // Use clean URLs without trailing slashes
}

export default nextConfig