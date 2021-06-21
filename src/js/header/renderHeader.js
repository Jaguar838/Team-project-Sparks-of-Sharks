
// import home from './../../templates/headers/home.hbs';


const refs = {
    home: document.querySelector("[data-index='home']"),
    mylibrary: document.querySelector("[data-index='mylibrary']")
}


refs.home.addEventListener('click', renderHeader);
    export const renderHeader = function (e) {
        e.preventDefault();
        let ref = document.querySelector("[data-index='headerDinamicContent']");
        ref.innerHTML = '';
        ref.insertAdjacentHTML('afterbegin', home());
    }