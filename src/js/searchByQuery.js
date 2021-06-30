import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import * as mainPage from './main';
import notify from './error';
import debounce from 'lodash.debounce';
import spin from './plugins/spinner';
import { renderPagination } from './pagination';

const apiService = new ApiService();

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onInput, 1000));

function onInput(elem) {
  elem.preventDefault();
  apiService.pageNum = 1;
  if (!refs.toolbarTime.classList.contains('is-hidden')) {
    refs.toolbarTime.classList.add('is-hidden');
  }
  const searchQuery = elem.target.value;
  if (!searchQuery) {
    //   markup.clearMarkup();
    return;
  } else {
    renderFirstPage(searchQuery);
    renderPages(searchQuery);

    elem.target.value = '';
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
        refs.paginationContainer.innerHTML = '';
        setTimeout(() => {
          refs.error.classList.add('visually-hidden');
          mainPage.renderHomePage();
        }, 3000);

        // notify.errorMessage(`Ничего не нашли(`);
        refs.moviesContainer.innerHTML = '';

        // refs.moviesContainer.style.height = '70vh';
      } else {
        createMarkup.clearMarkup();
        createMarkup.moviesMarkup(data);
        notify.successMessage(`Что-то нашли)`);
      }
    })
    .catch(error => {
      console.log('error in renderSearchMovies');
      notify.errorMessage(`Ничего не нашли(`);
    });
  spin.stop();
}
