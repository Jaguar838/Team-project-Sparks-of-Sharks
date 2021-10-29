import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import { renderPagination } from './pagination';
//import watchedQueue from '../js/header/watchedQueue';
import { homePageMarkupUpdate } from './header/LogicHeader';
import { renderHeader } from './header/renderHeader';
import spin from './plugins/spinner';
import typeOfTime from './plugins/switchTime';
import message from './plugins/message';

spin.run();
document.addEventListener('DOMContentLoaded', spin.stop());

const apiService = new ApiService();
const refs = getRefs();
typeOfTime();

refs.logo.addEventListener('click', e => location.reload());
refs.homeBtn.addEventListener('click', renderHomePage);
// renderHomePage();
const page = 1;
checkLibrary();
renderPage();
trendingFilmsPagination(); //

function checkLibrary() {
  const watchedLibrary = localStorage.getItem('watched');
  const queueLibrary = localStorage.getItem('queue');
  if (watchedLibrary && queueLibrary !== null) {
    return;
  } else {
    localStorage.setItem('watched', JSON.stringify({}));
    localStorage.setItem('queue', JSON.stringify({}));
  }
}

export function renderHomePage(e) {
  e.preventDefault();
  typeOfTime();
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
  localStorage.setItem('current', 'home');
  apiService.page = 1;
  spin.run();
  await trendingFilms(data)
    .then(data => data)
    .then(createMarkup.moviesMarkup);
  message('Enjoy the top movies of the ' + localStorage.getItem('time') + '!', 'green');
  spin.stop();
  if (refs.toolbarTime.classList.contains('is-hidden')) {
    refs.toolbarTime.classList.remove('is-hidden');
  }
  if (refs.paginationContainer.classList.contains('is-hidden')) {
    refs.paginationContainer.classList.remove('is-hidden');
  }
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
