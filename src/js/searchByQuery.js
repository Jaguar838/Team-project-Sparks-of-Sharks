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

refs.searchForm.addEventListener('input', debounce(onInput, 1500));

function onInput(elem) {
  elem.preventDefault();
  apiService.pageNum = 1;
  const searchQuery = elem.target.value;
  if (!searchQuery) {
    //   markup.clearMarkup();
    return;
  } else {
    renderSearchMovies(searchQuery);
    searchingFilmPagin(searchQuery);

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

function searchingFilmPagin(searchQuery) {
  apiService.query = searchQuery;
  apiService.page = 1;

  apiService
    .getMovieByQuery()
    .then(data => {
      renderPagination(data.total_pages, data.results, searchMoviesByPage, searchQuery);
      if (data.total_pages === 0) {
        mainPage.trendingFilmsPagination();
        return;
      }
    })
    .catch(error => {
      console.log('error in searchingFilmPagin', error);
    });
}

function searchMoviesByPage(wrapper, page, searchQuery) {
  wrapper.innerHTML = '';
  searchingFilmsByPage(page, searchQuery)
    .then(data => data)
    .then(data => createMarkup.moviesMarkup(data))
    .catch(error => {
      console.log('error in searchMoviesByPage', error);
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

function renderSearchMovies(searchQuery) {
  apiService.query = searchQuery;
  spin.run();
  searchingFilms()
    .then(data => {
      if (data == '') {
        notify.errorMessage(`Ничего не нашли(`);
        refs.moviesContainer.innerHTML = '';
        refs.moviesContainer.style.height = '70vh';
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
