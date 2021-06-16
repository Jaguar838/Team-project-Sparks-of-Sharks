import 'normalize.css';
import './sass/main.scss';

import ApiService from './js/api/apiService';

const apiService = new ApiService();
const page = 1;
getTrendingMovies();

function getTrendingMovies() {
  const res = apiService.getTrendingMovies(page).then(data => {
    console.log(data);
  });
  console.log(res);
}
