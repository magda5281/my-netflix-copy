const base = process.env.REACT_APP_base_URL;
const key = process.env.REACT_APP_API_KEY;

// Each row says which nav tabs it appears on:
//   home = Main page, tv = Series and TV, movies = Movies, new = New
// `banner: true` rows supply the big header image for that tab.
export const requests = [
  {
    key: 'trendingToday',
    title: 'Trending today',
    api: `${base}/trending/all/day?api_key=${key}&language=en-US`,
    tabs: ['home'],
    banner: true,
  },
  {
    key: 'originals',
    title: 'Streaming originals',
    api: `${base}/discover/tv?api_key=${key}&language=en-US&with_networks=213`,
    tabs: ['home', 'tv'],
    large: true,
  },
  {
    key: 'trending',
    title: 'Top trending this week',
    api: `${base}/trending/all/week?api_key=${key}&language=en-US`,
    tabs: ['home'],
  },
  {
    key: 'topRated',
    title: 'Top rated films',
    api: `${base}/movie/top_rated?api_key=${key}&language=en-US`,
    tabs: ['home', 'movies'],
  },

  // Series and TV
  {
    key: 'trendingTv',
    title: 'Trending series',
    api: `${base}/trending/tv/week?api_key=${key}&language=en-US`,
    tabs: ['tv'],
    banner: true,
  },
  {
    key: 'popularTv',
    title: 'Popular series',
    api: `${base}/tv/popular?api_key=${key}&language=en-US`,
    tabs: ['tv'],
  },
  {
    key: 'topRatedTv',
    title: 'Top rated series',
    api: `${base}/tv/top_rated?api_key=${key}&language=en-US`,
    tabs: ['tv'],
  },

  // Movies
  {
    key: 'trendingMovies',
    title: 'Trending films',
    api: `${base}/trending/movie/week?api_key=${key}&language=en-US`,
    tabs: ['movies'],
    banner: true,
  },
  {
    key: 'actionMovies',
    title: 'Action',
    api: `${base}/discover/movie?api_key=${key}&with_genres=28`,
    tabs: ['home', 'movies'],
  },
  {
    key: 'comedyMovies',
    title: 'Comedy',
    api: `${base}/discover/movie?api_key=${key}&with_genres=35`,
    tabs: ['home', 'movies'],
  },
  {
    key: 'horrorMovies',
    title: 'Horror',
    api: `${base}/discover/movie?api_key=${key}&with_genres=27`,
    tabs: ['movies'],
  },
  {
    key: 'romanceMovies',
    title: 'Romance',
    api: `${base}/discover/movie?api_key=${key}&with_genres=10749`,
    tabs: ['movies'],
  },
  {
    key: 'documentaries',
    title: 'Documentaries',
    api: `${base}/discover/movie?api_key=${key}&with_genres=99`,
    tabs: ['home', 'movies'],
  },
  {
    key: 'fantasyMovies',
    title: 'Fantasy',
    api: `${base}/discover/movie?api_key=${key}&with_genres=14`,
    tabs: ['movies'],
  },
  {
    key: 'adventureMovies',
    title: 'Adventure',
    api: `${base}/discover/movie?api_key=${key}&with_genres=12`,
    tabs: ['movies'],
  },

  // New
  {
    key: 'nowPlaying',
    title: 'In cinemas now',
    api: `${base}/movie/now_playing?api_key=${key}&language=en-US&region=GB`,
    tabs: ['new'],
    banner: true,
  },
  {
    key: 'upcoming',
    title: 'Coming soon',
    api: `${base}/movie/upcoming?api_key=${key}&language=en-US&region=GB`,
    tabs: ['new'],
  },
  {
    key: 'onTheAir',
    title: 'New episodes this week',
    api: `${base}/tv/on_the_air?api_key=${key}&language=en-US`,
    tabs: ['new'],
  },
];

export const tabTitles = {
  home: 'Main page',
  tv: 'Series and TV',
  movies: 'Movies',
  new: 'New',
};
