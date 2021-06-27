import getRefs from '../getRef';
import modalMarkup from '../../templates/movieDetail.hbs';
import btnLib from '../../templates/header/mylibrary.hbs';
import createMarkup from '../createMarkup';
import oneMovieTemplate from '../../templates/oneMovieTemplate.hbs';

const refs = getRefs();

refs.headerContent.addEventListener('click', onHeaderClick);
refs.mylibraryBtn.addEventListener('click', renderButtonLibrary);

function renderButtonLibrary() {
  console.log('function renderButtonLibrary()');
  refs.headerContent.innerHTML = btnLib();
  createMarkup.clearMarkup();
  renderMarkupByBtn(getWatchedMovies());
}

function onHeaderClick(evt) {
  if (evt.target.classList.contains('js-watched-btn')) {
    renderMarkupByBtn(getWatchedMovies());
    return;
  }
  if (evt.target.classList.contains('js-queue-btn')) {
    renderMarkupByBtn(getQueuedMovies());
    return;
  }
}

export function renderMarkupByBtn(libraryType) {
  console.log('renderMarkupByBtn', libraryType);
  createMarkup.clearMarkup();
  const markup = createMarkup.moviesMarkup(
    libraryType.map(film => ({
      ...film,
      release_date: film.release_date.slice(0, 4),
    })),
  );
  return markup;
}

export function addWatched(movie) {
  console.log('addWatched() ');

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

  let list = getMovies('watched');
  if (!list[movie.id]) {
    list[movie.id] = movie;
  } else {
    delete list[movie.id];
  }
  setMovies('watched', list);
}

export function removeWatched() {
  console.log('removeWatched() ');

  let list = getMovies('watched');
  delete list[id];
  setMovies('watched', list);
}
export function removeQueue(id) {
  console.log('removeQueue() ');
  let list = getMovies('queue');
  delete list[id];
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
  console.log('getMovies(name), data', name, data);
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
  console.log('function checkMovie(movie)', movie);
  if (inWatched(movie.id)) {
    movie.watched = true;
  }
  console.log('inWatched(movie.id)', inWatched(movie.id));
  if (inQueue(movie.id)) {
    movie.queued = true;
  }
  console.log('inQueue(movie.id)', inQueue(movie.id));
  return movie;
}
