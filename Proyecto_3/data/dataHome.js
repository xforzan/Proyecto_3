
export const picturesHome = [];
import { error } from '../pages/Error/error.js';
import { inicio, activateEventListenerHome } from '../pages/Inicio/inicio.js';

const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
const URL = 'https://api.unsplash.com/photos/?client_id=';

export const dataHome = (page = 1, perPage = 30) => {
  fetch(`${URL}${API}&page=${page}&per_page=${perPage}`)
    .then(content => content.json())
    .then(contentJson => {

      picturesHome.push(...contentJson);

    })
    .then(() => {
      inicio();
        activateEventListenerHome();
    })
    .catch(errores => {
      error(errores);
    });
};