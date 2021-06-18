import ApiService from './api/apiService';
import createMarkup from './createMarkup';
// import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';
import getRefs from './getRef';

const refs = getRefs();

const apiService = new ApiService();

const page = 1;

getTrendingMovies(page);

function getTrendingMovies(page) {
  let arrayOfMovies;
  apiService.getTrendingMovies(page).then(res => {
    arrayOfMovies = res.results;
    createMarkup.movieMarkup(arrayOfMovies);
  });
  return arrayOfMovies;
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
