import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    styledComponents: true, //allow the styled components 
    // to be synchronized on the client and on the sever
  },
};

export default nextConfig;
