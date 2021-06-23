import ApiService from './api/apiService';
import getRefs from './getRef';
import notify from './error';
import createMarkup from './createMarkup';

const apiService = new ApiService();

const refs = getRefs();

refs.moviesContainer.addEventListener('click', onGalleryContainerClick);
refs.backdropModal.addEventListener('click', onBackdropClick);
window.addEventListener('click', onCloseLightBox);

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
  document.body.classList.add('no-scrolling');
  const movieId = image.dataset.id;
  const dataModalMovie = movieInfoById(movieId).then(data => data);
  window.addEventListener('keydown', onKeyPress);
}

function onCloseLightBox(evt) {
  if (evt.target.classList.contains('lightbox__button')) {
    onCloseModal();
  }
}

function onBackdropClick(evt) {
  if (evt.target.classList.contains('lightbox__overlay')) {
    onCloseModal();
  }
}

function onKeyPress(evt) {
  if (evt.key !== 'Escape') {
    return;
  }
  onCloseModal();
  return;
}

//закрытие модалки
function onCloseModal() {
  document.body.classList.remove('no-scrolling');
  refs.lightBoxContainerRef.classList.remove('is-open');
  window.removeEventListener('keydown', onKeyPress);
  refs.backdropModal.removeEventListener;
  refs.lightBoxContentRef.innerHTML = '';
  return;
}

function movieInfoById(movieId) {
  return apiService
    .getMovieById(movieId)
    .then(data => data)
    .then(data => createMarkup.lightBoxMarkup(data))
    .catch(error => {
      console.log('error in ID');
      notify.errorMessage(`Ничего не нашли По ИД(`);
    });
}
