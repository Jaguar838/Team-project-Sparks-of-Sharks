import oneMovieTemplate from '../templates/oneMovieTemplate.hbs';

export default function createMarkup(oneMovie) {
  return oneMovie.map(oneMovieTemplate).join('');
}
