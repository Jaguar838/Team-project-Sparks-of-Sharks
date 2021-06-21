import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';
import modalMarkup from '../templates/movieDetail.hbs';
import getRefs from './getRef';

const refs = getRefs();

function moviesMarkup(data) {
  const markup = oneMovieTemplate(data);
  refs.moviesContainer.insertAdjacentHTML('beforeend', markup);
}

function clearMarkup() {
  refs.moviesContainer.innerHTML = '';
}

function lightBoxMarkup(data) {
  console.log(data);
  const markup = modalMarkup(data);

  refs.lightBoxContentRef.innerHTML = '';
  refs.lightBoxContentRef.insertAdjacentHTML('beforeend', markup);
}

export default { moviesMarkup, clearMarkup, lightBoxMarkup };
