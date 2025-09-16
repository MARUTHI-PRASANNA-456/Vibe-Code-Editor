import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const path = require("path");
module.exports = {
  turbopack: {
    root: path.join(__dirname, ".."),
  },
};