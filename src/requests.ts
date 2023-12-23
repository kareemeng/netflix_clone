const key = import.meta.env.VITE_API_KEY;
if (!key) {
  throw new Error("No API key found");
}
const requests = {
  requestPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrendingMovies: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`,
  requestUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestNowPlayingMovies: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default requests;
