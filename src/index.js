import 'normalize.css'
import './sass/main.scss';

import apiService from './js/api/apiService'

const api = new apiService();
console.log(api.makeRequest());
