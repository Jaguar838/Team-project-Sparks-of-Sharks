import getRefs from '../getRef';
import { renderPage } from '../main';

const refs = getRefs();

refs.switchTime.addEventListener('change', onSwitchTimeChanged);

export default function typeoftime() {
  if (localStorage.time === 'week') {
    refs.switchTime.checked = false;
  } else {
    localStorage.setItem('time', 'day');
    refs.switchTime.checked = true;
  }
  return;
}

function onSwitchTimeChanged() {
  if (localStorage.time === 'day') {
    localStorage.setItem('time', 'week');
    renderPage();
  } else {
    localStorage.setItem('time', 'day');
    renderPage();
  }
}
