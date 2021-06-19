import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';
import getRefs from './getRef';

const refs = getRefs();

function movieMarkup(data) {
  const markup = oneMovieTemplate(data);
  console.log(markup);
  refs.moviesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.moviesContainer.innerHTML = '';
}

export default { movieMarkup, clearMarkup };
