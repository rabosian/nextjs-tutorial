/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`,
      },
      {
        source: "/api/movies/:movieId",
        destination: `https://api.themoviedb.org/3/movie/:movieId?api_key=${process.env.API_KEY}&language=en-US`,
      },
    ];
  },
};

module.exports = nextConfig;
