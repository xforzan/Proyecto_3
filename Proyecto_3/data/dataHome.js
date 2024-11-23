export const picturesHome = []
import { error } from '../pages/Error/error.js'
import { inicio } from '../pages/Inicio/inicio.js'
const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
const URL = 'https://api.unsplash.com/photos/?client_id='

export const dataHome = (page = 1,perPage= 40) => {
    picturesHome.length = 0
    fetch(`${URL}${API}&page=${page}&per_page=${perPage}`)
    .then (content => content.json())
    .then (contentJson => picturesHome.push(...contentJson))
    .then(() =>{
        inicio()
    })
    .catch (errores => {
        error(errores)
    })
  };

