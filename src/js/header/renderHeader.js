import home from '../../templates/header/home.hbs';
import myLibrary from '../../templates/header/myLibrary.hbs';
import getRefs from '../getRef';

const refs = getRefs();


export function renderHeader(e) {
  // e.preventDefault();
  let ref = document.querySelector("[data-index='headerContent']");
  ref.innerHTML = '';
  if (refs.header.classList.contains('header__background-home')) {
    ref.insertAdjacentHTML('afterbegin', home());
  } else {
    ref.insertAdjacentHTML('afterbegin', myLibrary());
  }
}
