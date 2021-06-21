import getRefs from './getRef';
const refs = getRefs();
export const spinner = () => {
    window.onload = function () {
        refs.moviesContainer.innerHTML = '';
        refs.spinner.classList.remove('visually-hidden');
        window.setTimeout(function () {
            refs.spinner.classList.add('visually-hidden');
        }, 500);
    };
}
