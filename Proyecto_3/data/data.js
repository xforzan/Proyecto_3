export const pictures = []
import { error } from '../pages/Error/error.js'
import { inicio } from '../pages/Inicio/inicio.js'
import { notFound } from '../pages/NotFound/notFound.js';

const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
const URL = 'https://api.unsplash.com/photos/?client_id='

export const data = (page = 1,perPage= 40, query = "blue") => {
    pictures.length = 0
    fetch(`${URL}${API}&query=${query}&page=${page}&per_page=${perPage}`)
    .then (content => content.json())
    .then (contentJson => pictures.push(...contentJson))
    .catch (errores => {
        error(errores)
    }).then(() =>{
        setTimeout(inicio, 80)
    })
  };

