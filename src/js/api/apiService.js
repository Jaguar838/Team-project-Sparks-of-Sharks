import axios from 'axios'; // дока https://github.com/klesarev/axios-rus-docs/tree/master/docs

const API_KEY = 'e0f5a2b3f12c3f7ea9352edce7e33432';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
  }

  async makeRequest() {
    const config = {
      method: 'get',
      url: '/trending/movie/day?api_key=e0f5a2b3f12c3f7ea9352edce7e33432&page=1',
      // url: '/trending/movie/day?api_key=${API_KEY}&page=1',
    };

    let res = await axios(config);

    console.log(res.status);
  }
}
