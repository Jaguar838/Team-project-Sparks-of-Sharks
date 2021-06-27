import getRefs from '../getRef';
import { renderHeader } from './renderHeader';

const refs = getRefs();

refs.mylibraryBtn.addEventListener('click', myLibraryPageMarkupUpdate);

function myLibraryPageMarkupUpdate() {
  refs.header.classList.remove('header__background-home');
  refs.header.classList.add('header__background-myLibrary');
  refs.homeBtn.classList.remove('current');
  refs.mylibraryBtn.classList.add('current');
  renderHeader();
}

function homePageMarkupUpdate() {
  refs.header.classList.remove('header__background-myLibrary');
  refs.header.classList.add('header__background-home');
  refs.mylibraryBtn.classList.remove('current');
  refs.homeBtn.classList.add('current');
}

export { myLibraryPageMarkupUpdate, homePageMarkupUpdate };
