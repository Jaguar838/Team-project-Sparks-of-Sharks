import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import { renderPagination } from './pagination';
//import watchedQueue from '../js/header/watchedQueue';
import { homePageMarkupUpdate } from './header/LogicHeader';
import { renderHeader } from './header/renderHeader';
import spin from './plugins/spinner';
import typeOfTime from './plugins/switchTime';

document.addEventListener('DOMContentLoaded', spin.stop());
const apiService = new ApiService();

const refs = getRefs();

typeOfTime();

spin.run();

refs.logo.addEventListener('click', renderHomePage);
refs.homeBtn.addEventListener('click', renderHomePage);
const page = 1;

renderPage();

trendingFilmsPagination(); //

export function renderHomePage(e) {
  e.preventDefault();
  createMarkup.clearMarkup();
  renderPage();
  trendingFilmsPagination();
  homePageMarkupUpdate();
  renderHeader();
}

function trendingFilms() {
  return apiService
    .getTrendingMoviesPage(page)
    .then(data => data.results)
    .then(data => renderGenres(data));
}

export async function renderPage(data) {
  apiService.page = 1;
  spin.run();
  await trendingFilms(data)
    .then(data => data)
    .then(createMarkup.moviesMarkup);
  spin.stop();
}

export function renderGenres(data) {
  return apiService.getGenres().then(genresArray => {
    return data.map(film => ({
      ...film,
      release_date: film.release_date ? film.release_date.slice(0, 4) : 'No Date',

      genres: film.genre_ids
        .map(id => genresArray.filter(el => el.id === id))
        .flat()
        .slice(0, 2),
      vote_average: film.vote_average.toFixed(1),
    }));
  });
}
export function trendingFilmsPagination() {
  apiService
    .getTrendingMoviesPage(page)
    .then(data => {
      renderPagination(data.total_pages, data.results, moviesByPage);
    })
    .catch(error => {
      console.log(`Error in trendingFilmsPagination`);
    });
}

function moviesByPage(wrapper, page) {
  wrapper.innerHTML = '';
  spin.run();
  apiService.pageNum = page;
  trendingFilms(page)
    .then(createMarkup.moviesMarkup)
    .catch(error => {
      console.log(`Error in moviesByPage`, error);
      spin.stop();
    });
  spin.stop();
}

// function trendingMoviesByPage(page) {
//   apiService.pageNum = page;
//   return trendingFilms();
// }
