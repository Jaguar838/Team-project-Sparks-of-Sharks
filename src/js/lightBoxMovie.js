import ApiService from './api/apiService';
import getRefs from './getRef';
import notify from './error';
import createMarkup from './createMarkup';
import * as lib from '../js/header/watchedQueue';
import calcScroll from './calcScroll';

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
  const scroll = calcScroll();
  refs.lightBoxContainerRef.classList.add('is-open');

  const movieId = Number(image.dataset.id);

  movieInfoById(movieId).then(data => data);
  window.addEventListener('keydown', onKeyPress);
  document.body.classList.add('no-scrolling');
  document.body.style.marginRight = `${scroll}px`;
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
  document.body.style.marginRight = `0px`;
  refs.lightBoxContainerRef.classList.remove('is-open');
  window.removeEventListener('keydown', onKeyPress);
  refs.backdropModal.removeEventListener;
  refs.lightBoxContentRef.innerHTML = '';

  if (localStorage.getItem('current') === 'watched') {
    lib.renderMarkupByBtn(lib.getWatchedMovies());
  }
  if (localStorage.getItem('current') === 'queue') {
    lib.renderMarkupByBtn(lib.getQueuedMovies());
  }

  return;
}

function movieInfoById(movieId) {
  return apiService
    .getMovieById(movieId)
    .then(data => data)
    .then(data => renderLightBoxModal(data))
    .catch(error => {
      notify.errorMessage(`Ничего не нашли По ИД(`);
    });
}

function renderLightBoxModal(data) {
  data = lib.checkMovie(data);

  createMarkup.lightBoxMarkup(data);

  //добавление классов если фильм в библиотеке
  if (data.watched) {
    document.querySelector('.modal-card__watched-btn').classList.add('addedWatched-btn');
  }
  if (data.queued) {
    document.querySelector('.modal-card__queue-btn').classList.add('addedQueue-btn');
  }
  checkTextOnBtns();

  //клик на кнопки на модалке
  document.querySelector('.modal-card__queue-btn').addEventListener('click', evt => {
    lib.addQueue(data);
    lib.checkMovie(data);
    evt.target.classList.toggle('addedQueue-btn');
    if (evt.target.classList.contains('addedQueue-btn')) {
      document.querySelector('.modal-card__queue-btn').textContent = 'REMOVE';
    } else {
      document.querySelector('.modal-card__queue-btn').textContent = 'ADD TO QUEUE';
    }
    // if (data.watched) {
    //   lib.addWatched(data);
    //   document.querySelector('.modal-card__watched-btn').textContent = 'ADD TO WATCHED';
    // }
  });

  document.querySelector('.modal-card__watched-btn').addEventListener('click', evt => {
    lib.addWatched(data);
    lib.checkMovie(data);
    evt.target.classList.toggle('addedWatched-btn');

    if (evt.target.classList.contains('addedWatched-btn')) {
      document.querySelector('.modal-card__watched-btn').textContent = 'REMOVE';
    } else {
      document.querySelector('.modal-card__watched-btn').textContent = 'ADD TO WATCHED';
    }
    // if (data.queued) {
    //   lib.addQueue(data);
    //   document.querySelector('.modal-card__queue-btn').textContent = 'ADD TO QUEUE';
    // }
  });
}

//проверка надписей на кнопках если фильм уже в библиотеке
function checkTextOnBtns() {
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
