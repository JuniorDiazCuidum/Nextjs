/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactCompiler: true,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
