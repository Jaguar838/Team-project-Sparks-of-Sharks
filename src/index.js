import 'normalize.css';
import './sass/main.scss';

import ApiService from './js/api/apiService';

const apiService = new ApiService();

const page = 1;
getTrendingMovies();

function getTrendingMovies() {
  apiService.getTrendingMovies(page).then(res => {
    console.log('Результат', res);
  });
}

const movieID = 399566;
getMovieById(movieID);

function getMovieById(movieId) {
  apiService.getMovieById(movieId).then(res => {
    console.log('Результат', res);
  });
}

const searchQuery = 'about';
const pageNumber = 1;
getMovieByQuery(searchQuery, pageNumber);

function getMovieByQuery(searchQuery, pageNumber) {
  apiService.getMovieByQuery(searchQuery, pageNumber).then(res => {
    console.log('Результат', res);
  });
}
