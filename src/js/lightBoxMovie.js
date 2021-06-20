import ApiService from './api/apiService';
import getRefs from './getRef';
import notify from './error';

const apiService = new ApiService();

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
