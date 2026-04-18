import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "https://www.wawanhermawan.dev/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
