import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import { renderPagination } from './pagination';
import spin from './plugins/spinner';

const apiService = new ApiService();

const refs = getRefs();

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
      release_date: film.release_date.slice(0, 4),
      genres: film.genre_ids
        .map(id => genresArray.filter(el => el.id === id))
        .flat()
        .slice(0, 2),
    }));
  });
}

export function trendingFilmsPagination() {
  apiService
    .getTrendingMoviesPage(page)
    .then(data => {
      console.log(data);
      renderPagination(data.total_pages, data.results, moviesByPage);
    })
    .catch(error => {
      console.log(`Error in trendingFilmsPagination`);
    });
}

async function moviesByPage(wrapper, page) {
  wrapper.innerHTML = '';
  spin.run();
  apiService.pageNum = page;
  await trendingFilms(page)
    .then(createMarkup.moviesMarkup)
    .catch(error => {
      console.log(`Error in moviesByPage`);
      spin.stop();
    });
  spin.stop();
}

// function trendingMoviesByPage(page) {
//   apiService.pageNum = page;
//   return trendingFilms();
// }
