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

  movieInfoById(movieId).then(data => data);
  window.addEventListener('keydown', onKeyPress);
  document.body.classList.add('no-scrolling');
}

function onCloseLightBox(evt) {
  if (evt.target.classList.contains('lightbox__button')) {
    onCloseModal();
    return;
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
    .then(data => renderLightBoxModal(data))
    .catch(error => {
      console.log('error in ID', error);
      notify.errorMessage(`Ничего не нашли По ИД(`);
    });
}

function renderLightBoxModal(data) {
  data = lib.checkMovie(data);

  createMarkup.lightBoxMarkup(data);
  const qBtn = document.querySelector('.modal-card__queue-btn');
  const wBtn = document.querySelector('.modal-card__watched-btn');
  console.log('watched.data', data);
  if (data.watched) {
    wBtn.classList.add('.addedWatched - btn');
  }

  checkTextOnBtns();

  qBtn.addEventListener('click', evt => {
    lib.addQueue(data);
    evt.target.classList.toggle('addedQueue-btn');
    if (evt.target.classList.contains('addedQueue-btn')) {
      qBtn.textContent = 'REMOVE';
    } else {
      qBtn.textContent = 'ADD TO QUEUE';
    }
  });

  wBtn.addEventListener('click', evt => {
    lib.addWatched(data);
    evt.target.classList.toggle('addedWatched-btn');

    if (evt.target.classList.contains('addedWatched-btn')) {
      wbtn.textContent = 'REMOVE';
    } else {
      wBtn.textContent = 'ADD TO WATCHED';
    }
  });
}

function checkTextOnBtns() {
  console.log('function checkTextOnBtns');
  if (wBtn.classList.contains('addedWatched-btn')) {
    wBtn.textContent = 'REMOVE';
  } else {
    wBtn.textContent = 'ADD TO WATCHED';
  }

  if (qBtn.classList.contains('addedQueue-btn')) {
    qBtn.textContent = 'REMOVE';
  } else {
    qBtn.textContent = 'ADD TO QUEUE';
  }
}
