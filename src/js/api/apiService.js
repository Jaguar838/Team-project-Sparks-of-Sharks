import axios from 'axios'; // дока https://github.com/klesarev/axios-rus-docs/tree/master/docs

const API_KEY = 'e0f5a2b3f12c3f7ea9352edce7e33432';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    // this.page = page;
  }
  //трендовые фильмы дня
  async getTrendingMovies(pageNumber) {
    const { data } = await axios.get(`/trending/movie/day?api_key=${API_KEY}&page=${pageNumber}`);
    const { results, total_pages, page, total_results } = data;
    return { results, total_pages, page, total_results };
  }

  // поиск по ключевому слову
  async getMovieByQuery(searchQuery, pageNumber) {
    const { data } = await axios.get(
      `/search/movie?api_key=${API_KEY}&page=${pageNumber}&query=${searchQuery}`,
    );
    const { results, total_pages, page, total_results } = data;
    return { results, total_pages, page, total_results };
  }

  //полная информация о фильме по ID
  async getMovieById(id) {
    const { data } = await axios.get(`/movie/${id}?api_key=${API_KEY}`);

    return data;
  }
}
