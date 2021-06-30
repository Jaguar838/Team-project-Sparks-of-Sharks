import getRefs from '../getRef';
import btnLib from '../../templates/header/mylibrary.hbs';
import createMarkup from '../createMarkup';

const refs = getRefs();

refs.headerContent.addEventListener('click', onHeaderClick);
refs.mylibraryBtn.addEventListener('click', renderButtonLibrary);

function renderButtonLibrary() {
  console.log('function renderButtonLibrary()');
  refs.headerContent.innerHTML = btnLib();
  createMarkup.clearMarkup();
  renderWatched();
}

function onHeaderClick(evt) {
  if (evt.target.classList.contains('js-watched-btn')) {
    renderWatched();
    return;
  }
  if (evt.target.classList.contains('js-queue-btn')) {
    renderQueue();
    return;
  }
}

function renderWatched() {
  localStorage.setItem('current', 'watched');
  document.querySelector('.js-watched-btn').classList.add('active');
  if (document.querySelector('.js-queue-btn').classList.contains('active')) {
    document.querySelector('.js-queue-btn').classList.remove('active');
  }
  renderMarkupByBtn(getWatchedMovies());
}

function renderQueue() {
  localStorage.setItem('current', 'queue');
  document.querySelector('.js-watched-btn').classList.remove('active');
  document.querySelector('.js-queue-btn').classList.add('active');
  renderMarkupByBtn(getQueuedMovies());
}

export function renderMarkupByBtn(libraryType) {
  createMarkup.clearMarkup();
  refs.paginationContainer.classList.add('is-hidden');
  refs.toolbarTime.classList.add('is-hidden');
  const markup = createMarkup.moviesMarkup(
    libraryType.map(film => ({
      ...film,
      release_date: film.release_date ? film.release_date.slice(0, 4) : 'No Date',
      genres: film.genres.slice(0, 2),
      vote_average: film.vote_average.toFixed(1),
    })),
  );
  return markup;
}

export function addWatched(movie) {
  // console.log('addWatched() ');

  let list = getMovies('watched');
  if (!list[movie.id]) {
    list[movie.id] = movie;
  } else {
    delete list[movie.id];
  }
  setMovies('watched', list);
}

export function addQueue(movie) {
  console.log('addQueue()');

  let list = getMovies('queue');
  if (!list[movie.id]) {
    list[movie.id] = movie;
  } else {
    delete list[movie.id];
  }
  setMovies('queue', list);
}

export function getWatchedMovies() {
  return Object.values(getMovies('watched')); //полуение JSON фильмов
}

export function getQueuedMovies() {
  return Object.values(getMovies('queue')); //полуение JSON фильмов
}

function getMovies(name) {
  const data = JSON.parse(localStorage.getItem(name));

  return data;
}

function setMovies(name, list) {
  localStorage.setItem(name, JSON.stringify(list));
}
function inQueue(id) {
  return getMovies('queue')[id];
}
function inWatched(id) {
  return getMovies('watched')[id];
}

export function checkMovie(movie) {
  if (inWatched(movie.id)) {
    movie.watched = true;
  }

  if (inQueue(movie.id)) {
    movie.queued = true;
  }

  return movie;
}
