import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import * as mainPage from './main';
import notify from './error';
import debounce from 'lodash.debounce';
import spin from './plugins/spinner';
import { renderPagination } from './pagination';
import message from './plugins/message';

const apiService = new ApiService();

const refs = getRefs();

// refs.searchForm.addEventListener('input', debounce(onInput, 3000));
refs.searchForm.addEventListener('submit', onInput);

function onInput(e) {
  e.preventDefault();
  apiService.pageNum = 1;
  if (!refs.toolbarTime.classList.contains('is-hidden')) {
    refs.toolbarTime.classList.add('is-hidden');
  }
  const searchQuery = refs.formInput.value;

  if (!searchQuery) {
    return;
  } else {
    renderFirstPage(searchQuery);
    renderPages(searchQuery);

    refs.formInput.value = '';
    return;
  }
}

function searchingFilms() {
  return apiService
    .getMovieByQuery()
    .then(data => data.results)
    .then(data => mainPage.renderGenres(data));
}

function renderPages(searchQuery) {
  apiService.query = searchQuery;
  apiService.page = 1;
  apiService
    .getMovieByQuery()
    .then(data => {
      renderPagination(data.total_pages, data.results, renderMarkupPageByQuery, searchQuery);
      if (data.total_pages === 0) {
        mainPage.trendingFilmsPagination();
        return;
      }
    })
    .catch(error => {
      console.log('error in searchingFilmPagin', error);
    });
}

function renderMarkupPageByQuery(wrapper, page, searchQuery) {
  wrapper.innerHTML = '';
  searchingFilmsByPage(page, searchQuery)
    .then(data => data)
    .then(data => createMarkup.moviesMarkup(data))
    .catch(error => {
      console.log('error in renderMarkupPageByQuery', error);
    });
}

function searchingFilmsByPage(page, searchQuery) {
  apiService.pageNum = page;
  apiService.query = searchQuery;
  return apiService
    .getMovieByQuery()
    .then(data => data.results)
    .then(data => mainPage.renderGenres(data));
}

function renderFirstPage(searchQuery) {
  apiService.query = searchQuery;
  spin.run();
  searchingFilms()
    .then(data => {
      if (data == '') {
        refs.error.classList.remove('visually-hidden');
        refs.paginationContainer.classList.add('visually-hidden');
        message('Search result not successful. Enter the correct movie name.', 'red');
        setTimeout(() => {
          refs.error.classList.add('visually-hidden');
          refs.paginationContainer.classList.remove('visually-hidden');
          mainPage.renderPage();
        }, 3000);

        refs.moviesContainer.innerHTML = '';

        // refs.moviesContainer.style.height = '70vh';
      } else {
        createMarkup.clearMarkup();
        createMarkup.moviesMarkup(data);
        message(`We find movies by query: ` + searchQuery, 'green');
      }
    })
    .catch(error => {
      console.log('error in renderSearchMovies');
      notify.errorMessage(`Ничего не нашли(`);
    });
  spin.stop();
}
