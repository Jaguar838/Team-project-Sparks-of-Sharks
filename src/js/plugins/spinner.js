import getRefs from '../getRef';
const refs = getRefs();
const run = () => {
  refs.moviesContainer.innerHTML = '';
  refs.spinner.classList.remove('visually-hidden');
};

const stop = () => {
  refs.spinner.classList.add('visually-hidden');
};

export default { run, stop };
