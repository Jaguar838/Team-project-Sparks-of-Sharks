import getRefs from '../getRef';
import * as mainPage from '../main';

const refs = getRefs();

refs.switchTime.addEventListener('change', onSwitchTimeChanged);

if (localStorage.getItem('time') === 'week') {
  refs.switchTime.checked = 'false';
} else {
  localStorage.setItem('time', 'day');
}

function onSwitchTimeChanged() {
  console.log('Click', localStorage.time);
  mainPage.renderPage();
  if (localStorage.time === 'day') {
    localStorage.setItem('time', 'week');
    mainPage.renderHomePage;
  } else {
    if (localStorage.time === 'week') {
      localStorage.setItem('time', 'day');
    }
  }
}
