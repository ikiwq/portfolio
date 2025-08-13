import type { NextConfig } from "next";

const storageHostname = process.env.PUBLIC_STORAGE_URL?.split("//")[1].split("/")[0];

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: storageHostname,
      pathname: "/**",
    }],
  },
};

export default nextConfig;
