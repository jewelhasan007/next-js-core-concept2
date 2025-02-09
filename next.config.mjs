/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.themealdb.com",
            port: "",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "picsum.photos",
            port: "",
            pathname: "/**",
          }
        ],
      },

      redirects : async () => {
        return [
          {
              source: '/fonts',
              destination: '/posts',
              permanent: true,
          },
         
        ]
      }

};

export default nextConfig;
