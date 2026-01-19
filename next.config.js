/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This enables static export for GitHub Pages/Vercel
  trailingSlash: true, // This ensures clean URLs with trailing slashes
  images: {
    unoptimized: true // Since we're using static export, we need to disable image optimization
  }
}

export default nextConfig