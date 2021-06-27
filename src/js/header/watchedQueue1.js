import getRefs from '../getRef';
import modalMarkup from '../../templates/movieDetail.hbs';
import btnLib from '../../templates/header/mylibrary.hbs';
import { moviesMarkup, clearMarkup, lightBoxMarkup } from '../createMarkup';
import oneMovieTemplate from '../../templates/oneMovieTemplate.hbs';

const refs = getRefs();

// refs.mylibraryBtn.addEventListener('click', renderButtonLibrary);
// function renderButtonLibrary() {
//   refs.headerContent.innerHTML = btnLib();
// }

// let watchedfilm = [];
// let queueFilm = [];

// export function openData(data) {
//   const objFilm = data;
//   const string = JSON.stringify(objFilm);
//   localStorage.setItem('filmy', string);
// }

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

export function addQueue() {
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
}
export function removeQueue() {
  console.log('removeQueue() ');
}

export function renderWatсhedFilm() {
  console.log('renderWatсhedFilm() ');
  const save = localStorage.getItem('watched');
  const objSave = JSON.parse(save);
  console.log(objSave);
  const watchedFilm = oneMovieTemplate(objSave);
  refs.moviesContainer.innerHTML = watchedFilm;
}
export function renderQueueFilm() {
  console.log('renderQueueFilm() ');
  const save = localStorage.getItem('queue');
  const objSave = JSON.parse(save);
  console.log(objSave);
  const queueFilm = oneMovieTemplate(objSave);
  refs.moviesContainer.innerHTML = queueFilm;
}

export function getWatchedMovies() {
  return Object.values(getMovies('watched')); //полуение JSON фильмов
}

export function getQueuedMovies() {
  return Object.values(getMovies('queue')); //полуение JSON фильмов
}

export function getMovies(name) {
  return JSON.parse(localStorage.getItem(name));
}

export function setMovies(name, list) {
  localStorage.setItem(name, JSON.stringify(list));
}
