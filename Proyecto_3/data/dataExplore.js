export const picturesExplore = []
import { error } from '../pages/Error/error.js'
import { dataHome } from '../data/dataHome.js'
import { explorar } from '../pages/Explorar/explorar.js'
import { notFound } from '../pages/NotFound/notFound.js';
import { loadPictures } from '../utils/loadPictures.js';
import { linkPage } from '../utils/linkPage.js';
const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
const URL = 'https://api.unsplash.com/search/photos/?client_id='

export const dataExplore = (query) => {
    picturesExplore.length = 0
    fetch(`${URL}${API}&query=${query}&per_page=30`)
    .then (content => content.json())
    .then (contentJson => picturesExplore.push(...contentJson.results))
    .then(() =>{
        explorar()
    })
    .then (() =>{
        loadPictures()
    })
    .then(() =>{
        if(picturesExplore.length === 0){
            notFound()
            linkPage("#return", dataHome);
        }
    })
    .catch (errores => {
        error(errores)
    })
  };


