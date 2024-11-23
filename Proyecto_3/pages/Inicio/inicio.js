import './inicio.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';
import { picturesHome } from '../../data/dataHome.js'
import { eventListenerExplore } from '../Explorar/explorar.js';

let pageNumHome = 1; 
let eventAdded = false;

export const eventListenerHome = () => {
  if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
    pageNumHome=pageNumHome+1;
    console.log("Home:",pageNumHome);
  }
}

export const activateEventListenerHome = () =>{
  if (eventAdded === false){
  window.addEventListener('scroll', eventListenerHome);
  window.removeEventListener('scroll', eventListenerExplore);
  eventAdded = true
  }
}

export const inicio = () => {
  const main = document.querySelector("main");
  changeClass("inicio","unselected" , "selected");
  changeClass("explorar","selected" , "unselected");
  cleanPage(main);
  const content = document.createElement("div")
  content.classList.add("content")
  main.appendChild(content)
  changeClass("filters","filters", "filters-hidden")
  for (const picture of picturesHome){
    const divisor = document.createElement("div")
    divisor.classList.add("img")
    const img = document.createElement("img")
    img.src = picture.urls.regular
    img.alt = picture.alt_description
    content.appendChild(divisor)
    divisor.appendChild(img)
    


  }
};