import ApiService from './api/apiService';
import createMarkup from './createMarkup';
import getRefs from './getRef';
import * as mainPage from './main';
import notify from './error';
import debounce from 'lodash.debounce';

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

function renderSearchMovies(searchQuery) {
  console.log(searchQuery);
  apiService.query = searchQuery;
  searchingFilms()
    .then(data => {
      if (data == '') {
        notify.errorMessage(`Ничего не нашли(`);
        refs.moviesContainer.innerHTML = '';
      } else {
        renderFilmsCard(data);
        notify.successMessage(`Что-то нашли)`);
      }
    })
    .catch(error => {
      console.log('error in renderSearchMovies');
      notify.errorMessage(`Ничего не нашли(`);
    });
}

function renderFilmsCard(data) {
  refs.moviesContainer.innerHTML = '';
  // createMarkup.clearMarkup;
  createMarkup.movieMarkup(data);
}
