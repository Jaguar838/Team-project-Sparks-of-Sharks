import axios from 'axios';

const API_KEY = 'e0f5a2b3f12c3f7ea9352edce7e33432';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    // this.Id = movieId;
  }

  getTrendingMoviesPage() {
    const trendingFilms = axios
      .get(`/trending/movie/week?api_key=${API_KEY}&page=${this.page}`)
      .then(({ data }) => data);
    return trendingFilms;
  }

  getGenres() {
    const genresIds = axios
      .get(`/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(({ data }) => data.genres);

    return genresIds;
  }

  getMovieByQuery() {
    const filmsByQuery = axios
      .get(
        `/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`,
      )
      .then(({ data }) => data);

    return filmsByQuery;
  }

  getMovieById(movieId) {
    const filmById = axios.get(`/movie/${movieId}?api_key=${API_KEY}`).then(({ data }) => data);
    return filmById;
  }

  get pageNum() {
    return this.page;
  }
  set pageNum(newPageNum) {
    this.page = newPageNum;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
