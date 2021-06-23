
import home from '../../templates/header/home.hbs';
// // import home from '../../templates/header/myLibery.hbs';
import getRefs from "../getRef";
 
const refs = getRefs();


refs.home.addEventListener('click', renderHeader);
refs.mylibrary.addEventListener('click', renderHeader);
    export const renderHeader = function (e) {
        e.preventDefault();
        let ref = document.querySelector("[data-index='headerContent']");
        ref.innerHTML = '';
        ref.insertAdjacentHTML('afterbegin', home());
//         //  ref.insertAdjacentHTML('afterbegin', myLibery());
 }
