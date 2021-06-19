import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';
import getRefs from './getRef';

const apiService = new ApiService();

const refs = getRefs();

refs.logo.addEventListener('click', renderHomePage);
refs.homeBtn.addEventListener('click', renderHomePage);
const page = 1;

renderPage();

export function renderHomePage() {
  createMarkup.clearMarkup();
  renderPage();
}

function trendingFilms() {
  return apiService
    .getTrendingMoviesPage()
    .then(data => data.results)
    .then(data => {
      return apiService.getGenres().then(genresArray => {
        return data.map(film => ({
          ...film,
          release_date: film.release_date.slice(0, 4),
          genres: film.genre_ids
            .map(id => genresArray.filter(el => el.id === id))
            .flat()
            .slice(0, 3),
        }));
      });
    });
}

export function renderPage() {
  apiService.page = 1;
  trendingFilms().then(createMarkup.movieMarkup);
}
