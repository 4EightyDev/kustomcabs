/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  // Configure trailing slash behavior
  trailingSlash: true,
  // Disable image optimization as it's not compatible with static exports
  images: {
    unoptimized: true,
  },
  // Enable React strict mode
  reactStrictMode: true,
}

export default nextConfig