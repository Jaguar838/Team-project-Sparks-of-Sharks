import ApiService from './api/apiService';
import getRefs from './getRef';
import notify from './error';

const apiService = new ApiService();

const refs = getRefs();
console.log(refs.moviesContainer);

refs.moviesContainer.addEventListener('click', onGalleryContainerClick);

const movieId = 602063;

console.log(movieInfoById(movieId));

function movieInfoById() {
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

function onGalleryContainerClick(evt) {
  evt.preventDefault();

  console.log(evt.target.classList);
  const isGalleryMovieEl = evt.target.classList.contains('movie-image'); //проверка источника клика
  if (!isGalleryMovieEl) {
    return;
  }
  const openedMovie = evt.target;
  console.log(openedMovie);
  lightBoxOpen(openedMovie);
}

// function lightBoxOpen(image) {
//   lightBoxContainerRef.classList.add('is-open');
//   lightBoxImageRef.src = image.dataset.source;
//   lightBoxImageRef.dataset.index = galleryImagesList.indexOf(image);
//   window.addEventListener('keydown', onKeyPress);
// }

// function onBtnCloseLightBox() {
//   lightBoxContainerRef.classList.remove('is-open');
//   lightBoxImageRef.src = '';
//   window.removeEventListener('keydown', onKeyPress);
// }
