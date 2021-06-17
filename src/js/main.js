import ApiService from './api/apiService';
import createMarkup from '../js/markup';

const apiService = new ApiService();

const page = 1;
getTrendingMovies();

const markup = createMarkup(getTrendingMovies());
console.log(markup);

function getTrendingMovies() {
  apiService.getTrendingMovies(page).then(res => {
    const arrayOfMovies = res.results;
    console.log(arrayOfMovies);
    return arrayOfMovies;
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
