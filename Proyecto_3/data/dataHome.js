export const picturesHome = []
const morePicturesHome = []
import { error } from '../pages/Error/error.js'
import { inicio, activateEventListenerHome} from '../pages/Inicio/inicio.js'
const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
const URL = 'https://api.unsplash.com/photos/?client_id='

export const dataHome = (page = 1,perPage= 30) => {
    if (page === 1){
        picturesHome.length = 0
    }
    fetch(`${URL}${API}&page=${page}&per_page=${perPage}`)
    .then (content => content.json())
    .then(contentJson => {
        if (page === 1) {
            picturesHome.push(...contentJson);
        }
        else {
            morePicturesHome.push(...contentJson);
            (picturesHome.push(...morePicturesHome));
        }
    })
    .then(() =>{
        morePicturesHome.length = 0
        inicio()
        activateEventListenerHome()
    })
    .catch (errores => {
        error(errores)
    })
  };

