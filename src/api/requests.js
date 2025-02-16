export const requests = [
  {
    api: `${process.env.base_URL}/discover/tv?api_key=${process.env.API_KEY}&language=en-US&with_networks=213`,
    key: 'netflixOriginals',
    title: 'NETFLIX ORIGINALS',
  },
  {
    api: `${process.env.base_URL}/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`,
    key: 'trending',
    title: 'Top trending',
  },

  {
    api: `${process.env.base_URL}/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US`,
    key: 'topRated',
    title: 'Top rated',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=28`,
    key: 'actionMovies',
    title: 'Action movies',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=35`,
    key: 'ComedyMovies',
    title: 'Comedy Movies',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=27`,
    key: 'horrorMovies',
    title: 'Horror Movies',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=10749`,
    key: 'RomanceMovies',
    title: 'Romance Movies',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=99`,
    key: 'documentaries',
    title: 'Documentaries',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=14`,
    key: 'fantasyMovies',
    title: 'Fantasy Movies',
  },
  {
    api: `${process.env.base_URL}/discover/movie?api_key=${process.env.API_KEY}&with_genres=12`,
    key: 'adventureMovies',
    title: 'Adventure Movies',
  },
  {
    api: `${process.env.base_URL}/trending/all/day?api_key=${process.env.API_KEY}&language=en-US`,
    key: 'trendingToday',
    title: 'Top trending today',
  },
];
