/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';


const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: isProd ? '/patakpart_vendeghaz' : '',
  basePath: isProd ? '/patakpart_vendeghaz' : '',
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/patakpart_vendeghaz' : '',
  },
}

module.exports = nextConfig
