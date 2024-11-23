export const picturesExplore = []
import { error } from '../pages/Error/error.js'
import { dataHome } from '../data/dataHome.js'
import { explorar } from '../pages/Explorar/explorar.js'
import { notFound } from '../pages/NotFound/notFound.js';
import { loadPictures } from '../utils/loadPictures.js';
import { linkPage } from '../utils/linkPage.js';


export const dataExplore = (query = "audi", colorValue = "black", orientationValue, orderByValue) => {
    const API = 'sYb0frnesYTrUsWzGWjwpxTi02ZCu_KJ16QnF10dMmo';
    let URL = 'https://api.unsplash.com/search/photos/?client_id='
    URL += API + '&per_page=30'
    if (query !== ""){
        URL += `&query=${query}`
    }
    if (colorValue !== "color"){
        URL += `&color=${colorValue}`
    }
    if (orientationValue !== "orientation"){
        URL += `&orientation=${orientationValue}`
    }
    if (orderByValue !== "order by"){
        URL += `&order_by=${orderByValue}`
    }
    picturesExplore.length = 0
    fetch(`${URL}`)
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


