import ApiService from './api/apiService';
import getRefs from './getRef';
import notify from './error';
import createMarkup from './createMarkup';

const apiService = new ApiService();

const refs = getRefs();

refs.moviesContainer.addEventListener('click', onGalleryContainerClick);
refs.lightBoxCloseRef.addEventListener('click', onBtnCloseLightBox);

// const movieId = 602063;

// movieInfoById(movieId);

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  const isGalleryMovieEl = evt.target.classList.contains('movie-image'); //проверка источника клика
  if (!isGalleryMovieEl) {
    return;
  }
  const openedMovie = evt.target;

  lightBoxOpen(openedMovie);
}

function lightBoxOpen(image) {
  refs.lightBoxContainerRef.classList.add('is-open');
  const movieId = image.dataset.id;
  console.log(movieId);
  const dataModalMovie = movieInfoById(movieId);
  createMarkup.lightBoxMarkup(dataModalMovie);
  window.addEventListener('keydown', onKeyPress);
}

function onBtnCloseLightBox() {
  refs.lightBoxContainerRef.classList.remove('is-open');
  //   lightBoxImageRef.src = '';
  window.removeEventListener('keydown', onKeyPress);
}

function onKeyPress(evt) {
  if (evt.key !== 'Escape') {
    return;
  }
  onBtnCloseLightBox();
  return;
}

function movieInfoById(movieId) {
  return (
    apiService
      .getMovieById(movieId)
      .then(data => console.log(data))
      // .then(data => console.log(data.results))
      .catch(error => {
        console.log('error in ID');
        notify.errorMessage(`Ничего не нашли По ИД(`);
      })
  );
}
