import axios from 'axios'; // дока https://github.com/klesarev/axios-rus-docs/tree/master/docs

const KEY = 'e0f5a2b3f12c3f7ea9352edce7e33432';
const BASE_URL = 'https://developers.themoviedb.org/3/';

export default class apiService {
  constructor() {
    this.searchQuery = '';
  }

  async makeRequest() {
    const config = {
      method: 'get',
      url: 'http://webcode.me',
    };

    let res = await axios(config);

    console.log(res.status);
  }
}
