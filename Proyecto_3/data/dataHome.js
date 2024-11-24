// dataHome.js
export const picturesHome = [];
const morePicturesHome = [];
import { error } from '../pages/Error/error.js';
import { inicio, activateEventListenerHome } from '../pages/Inicio/inicio.js';

const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
const URL = 'https://api.unsplash.com/photos/?client_id=';

export const dataHome = (page = 1, perPage = 1) => {
  fetch(`${URL}${API}&page=${page}&per_page=${perPage}`)
    .then(content => content.json())
    .then(contentJson => {
        if (page > 1) {
          picturesHome.length = 0; // Limpia la lista de imágenes
        }
      // Agregar las nuevas imágenes a la lista existente
      picturesHome.push(...contentJson); // No se limpian las imágenes previas
    })
    .then(() => {
      // Ya no es necesario reiniciar 'morePicturesHome'
      inicio();  // Vuelve a renderizar las imágenes
      activateEventListenerHome();  // Activa el listener de scroll
    })
    .catch(errores => {
      error(errores);  // Maneja errores de la API
    });
};


