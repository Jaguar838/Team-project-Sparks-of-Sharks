import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';
import getRefs from './getRef';

const refs = getRefs();

function movieMarkup(data) {
  const markup = oneMovieTemplate(data);

  refs.moviesList.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.moviesList.innerHTML = '';
}

export default { movieMarkup, clearMarkup };
