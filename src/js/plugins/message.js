import getRefs from '../getRef';

const refs = getRefs();

export default function message(text, color) {
  refs.message.textContent = `${text}`;
  refs.message.style.color = `${color}`;
}
