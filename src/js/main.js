import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';

const apiService = new ApiService();

const refs = getRefs();

refs.logo.addEventListener('click', renderHomePage);
refs.homeBtn.addEventListener('click', renderHomePage);
const page = 1;

renderPage();

export function renderHomePage(e) {
  e.preventDefault();
  createMarkup.clearMarkup();
  renderPage();
}

function trendingFilms() {
  return apiService
    .getTrendingMoviesPage()
    .then(data => data.results)
    .then(data => renderGenres(data));
}

export function renderPage(data) {
  apiService.page = 1;
  trendingFilms(data)
    .then(data => data)
    .then(createMarkup.moviesMarkup);
}

export function renderGenres(data) {
  return apiService.getGenres().then(genresArray => {
    return data.map(film => ({
      ...film,
      release_date: film.release_date.slice(0, 4),
      genres: film.genre_ids
        .map(id => genresArray.filter(el => el.id === id))
        .flat()
        .slice(0, 2),
    }));
  });
}
