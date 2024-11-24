import './explorar.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';
import { dataExplore, picturesExplore } from '../../data/dataExplore.js'
import { eventListenerHome } from '../Inicio/inicio.js';
let pageNumExplore = 1; 


let colorValue = "colorValue";
let orientationValue = "orientation";
let orderByValue = "order by";
let queryValue = "audi";

// Funciones para actualizar los valores globales
export const setColorValue = (value) => {
  colorValue = value;
};

export const setOrientationValue = (value) => {
  orientationValue = value;
};

export const setOrderByValue = (value) => {
  orderByValue = value;
};

export const setQueryValue = (value) => {
  queryValue = value;
};

// Funciones para obtener los valores
export const getColorValue = () => colorValue;
export const getOrientationValue = () => orientationValue;
export const getOrderByValue = () => orderByValue;
export const getQueryValue = () => queryValue;



export const getPageNum = () => pageNumExplore;

export const resetPageNum = () => {
  pageNumExplore = 1;
};


export const eventListenerExplore = () => {
    if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
      pageNumExplore = pageNumExplore + 1;
      console.log("Explore:",pageNumExplore);
      console.log(queryValue, colorValue, orientationValue, orderByValue, pageNumExplore);
    }
  
}

export const activateEventListenerExplore = () =>{
  window.addEventListener('scroll', eventListenerExplore);
  window.removeEventListener('scroll', eventListenerHome);
  
}



export const explorar = () => {
  const main = document.querySelector("main");
  changeClass("explorar","unselected" , "selected");
  changeClass("inicio","selected" , "unselected");
  cleanPage(main);
  changeClass("filters","filters-hidden", "filters")
  const content = document.createElement("div")
  content.classList.add("content")
  main.appendChild(content)
  for (const picture of picturesExplore){
    const divisor = document.createElement("div")
    divisor.classList.add("img")
    const img = document.createElement("img")
    img.src = picture.urls.regular
    img.alt = picture.alt_description
    content.appendChild(divisor)
    divisor.appendChild(img)
    


  }

  

};
