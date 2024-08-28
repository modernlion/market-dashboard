/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false,
            },
          },
        ],
      }
    );

 

    
    return config;
  },
  sassOptions: {
    additionalData: `
    @import "@/styles/variables.scss";
    @import "@/styles/mixin.scss";
  `,
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  compress: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "", // TODO: 추가 필요
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
