import { success, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
defaults.delay = 2000;

export default { errorMessage, successMessage };
function errorMessage(text) {
  error(text);
}
function successMessage(text) {
  success(text);
}
