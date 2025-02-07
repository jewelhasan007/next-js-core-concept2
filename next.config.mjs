/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "www.themealdb.com",
          },
        ],
      },

      redirects : async () => {
        return [
          {
              source: '/fonts',
              destination: '/posts',
              permanent: true,
          },
          {
            source: '/meals',
            destination: '/current-time',
            permanent: true,
          }
        ]
      }

};

export default nextConfig;
