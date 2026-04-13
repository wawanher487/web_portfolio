import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "https://template1.wawanhermawan.dev/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
