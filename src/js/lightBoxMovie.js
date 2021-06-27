import ApiService from './api/apiService';
import getRefs from './getRef';
import notify from './error';
import createMarkup from './createMarkup';
import * as lib from '../js/header/watchedQueue';

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

  const movieId = Number(image.dataset.id);
  console.log(movieId);

  const dataModalMovie = movieInfoById(movieId).then(data => data);
  window.addEventListener('keydown', onKeyPress);
  document.body.classList.add('no-scrolling');
}

function onCloseLightBox(evt) {
  if (evt.target.classList.contains('lightbox__button')) {
    onCloseModal();
    return;
  }
  // if (evt.target.classList.contains('modal-card__watched-btn')) {
  //   if (refsWatchBtn.classList.contains('addedWatched-btn')) {
  //     refsWatchBtn.textContent = 'ADD TO WATCHED';
  //     refsWatchBtn.classList.toggle('addedWatched-btn');
  //     lib.removeWatched();
  //   } else {
  //     refsWatchBtn.textContent = 'REMOVE';
  //     refsWatchBtn.classList.toggle('addedWatched-btn');
  //     lib.addWatched();
  //   }
  // }
  // if (evt.target.classList.contains('modal-card__queue-btn')) {
  //   if (refsQueueBtn.classList.contains('addedQueue-btn')) {
  //     refsQueueBtn.textContent = 'ADD TO QUEUE';
  //     refsQueueBtn.classList.toggle('addedQueue-btn');
  //     lib.removeQueue();
  //   } else {
  //     refsQueueBtn.textContent = 'REMOVE';
  //     refsQueueBtn.classList.toggle('addedQueue-btn');
  //     lib.addQueue();
  //   }
  // }
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
    .then(data => renderLightBoxModal(data))
    .catch(error => {
      console.log('error in ID', error);
      notify.errorMessage(`Ничего не нашли По ИД(`);
    });
}

function renderLightBoxModal(data) {
  console.log('data', data);
  data = lib.checkMovie(data);

  createMarkup.lightBoxMarkup(data);

  checkTextOnBtns();

  document.querySelector('.modal-card__queue-btn').addEventListener('click', evt => {
    lib.addQueue(data);
    evt.target.classList.toggle('addedQueue-btn');
    if (evt.target.classList.contains('addedQueue-btn')) {
      document.querySelector('.modal-card__queue-btn').textContent = 'REMOVE';
    } else {
      document.querySelector('.modal-card__queue-btn').textContent = 'ADD TO QUEUE';
    }
  });

  document.querySelector('.modal-card__watched-btn').addEventListener('click', evt => {
    lib.addWatched(data);
    evt.target.classList.toggle('addedWatched-btn');

    if (evt.target.classList.contains('addedWatched-btn')) {
      document.querySelector('.modal-card__watched-btn').textContent = 'REMOVE';
    } else {
      document.querySelector('.modal-card__watched-btn').textContent = 'ADD TO WATCHED';
    }
  });
}

function checkTextOnBtns() {
  console.log('function checkTextOnBtns');
  if (document.querySelector('.modal-card__watched-btn').classList.contains('addedWatched-btn')) {
    document.querySelector('.modal-card__watched-btn').textContent = 'REMOVE';
  } else {
    document.querySelector('.modal-card__watched-btn').textContent = 'ADD TO WATCHED';
  }

  if (document.querySelector('.modal-card__queue-btn').classList.contains('addedQueue-btn')) {
    document.querySelector('.modal-card__queue-btn').textContent = 'REMOVE';
  } else {
    document.querySelector('.modal-card__queue-btn').textContent = 'ADD TO QUEUE';
  }
}
