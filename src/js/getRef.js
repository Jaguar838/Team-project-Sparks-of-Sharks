export default function getRefs() {
  return {
    moviesContainer: document.querySelector('#gallery'),
    logo: document.querySelector('.nav-logo'),
    homeBtn: document.querySelector('[data-index="home"]'),
    searchForm: document.querySelector('.film-search'),
    posterImage: document.querySelector('.movie-image'),
    lightBoxContainerRef: document.querySelector('.js-lightbox'),
    lightBoxCloseRef: document.querySelector('.lightbox__button'),
    lightBoxContentRef: document.querySelector('.lightbox__content'),
  };
}
