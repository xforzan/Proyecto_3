export const picturesExplore = []

import { error } from '../pages/Error/error.js'
import { dataHome } from '../data/dataHome.js'
import { explorar, activateEventListenerExplore} from '../pages/Explorar/explorar.js'
import { notFound } from '../pages/NotFound/notFound.js';
import { linkPage } from '../utils/linkPage.js';




export const dataExplore = (query = "audi", colorValue = "black", orientationValue, orderByValue, page = 1) => {

    const API = 'F0F459-Fd5TDRyd7Nn3JgdWaZj8BM8g1eH4e8LE8Mvc';
    let URL = 'https://api.unsplash.com/search/photos/?client_id='
    URL += API + `&page=${page}`+'&per_page=30'
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
    fetch(`${URL}`)
    .then (content => content.json())
    .then((contentJson) => {
        if (page === 1){
            picturesExplore.length = 0;
        }
        picturesExplore.push(...contentJson.results);
    })
    .then(() =>{
            activateEventListenerExplore();

        explorar()

    })
    .then(() =>{
        if(picturesExplore.length === 0){
            notFound()
            linkPage("#return", dataHome, false);
        }
    })
    .catch (errores => {
        error(errores)
    })
  };




  export const colorValueExport = () => colorValue;
  export const orientationValueExport = () => orientationValue;
  export const orderByValueExport = () => orderByValue;
  export const queryExport = () => query;
  
  
  

  
