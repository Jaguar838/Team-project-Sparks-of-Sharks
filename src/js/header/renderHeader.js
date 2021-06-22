
import home from '../../templates/header/home.hbs';
// import home from '../../templates/header/myLibery.hbs';


const refs = {
    home: document.querySelector("[data-index='home']"),
    mylibrary: document.querySelector("[data-index='mylibrary']")
}


refs.home.addEventListener('click', renderHeader);
refs.mylibrary.addEventListener('click', renderHeader);
    export const renderHeader = function (e) {
        e.preventDefault();
        let ref = document.querySelector("[data-index='headerContent']");
        ref.innerHTML = '';
        ref.insertAdjacentHTML('afterbegin', home());
        //  ref.insertAdjacentHTML('afterbegin', myLibery());
}
