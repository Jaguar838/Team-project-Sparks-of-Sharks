import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import * as mainPage from './main';
import notify from './error';
import debounce from 'lodash.debounce';
import spin from './plugins/spinner';

const apiService = new ApiService();

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onInput, 1000));

function onInput(elem) {
  elem.preventDefault();
  apiService.pageNum = 1;
  const searchQuery = elem.target.value;

  if (!searchQuery) {
    //   markup.clearMarkup();
    return;
  } else {
    renderSearchMovies(searchQuery);

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

async function renderSearchMovies(searchQuery) {
  apiService.query = searchQuery;
  spin.run();
  await searchingFilms()
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
