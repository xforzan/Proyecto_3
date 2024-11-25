import './inicio.css';

import { changeClass } from '../../utils/changeClass.js';
import { dataHome, picturesHome } from '../../data/dataHome.js';
import { eventListenerExplore } from '../Explorar/explorar.js';
import { cleanPage } from '../../utils/cleanPage.js';

let pageNumHome = 1;

export const eventListenerHome = () => {
  if ((window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
    setTimeout(() => {
      pageNumHome = pageNumHome + 1;
      console.log("Home:", pageNumHome);
      dataHome(pageNumHome, 10);
    }, 1000);

  }
};

export const activateEventListenerHome = () => {
  window.addEventListener('scroll', eventListenerHome);
  window.removeEventListener('scroll', eventListenerExplore);
};

export const inicio = () => {
  const main = document.querySelector("main");
  changeClass("filters", "filters", "filters-hidden");
  changeClass("inicio", "unselected", "selected");
  changeClass("explorar", "selected", "unselected");
  cleanPage(main);


  const content = document.createElement("div");
  content.classList.add("content");
  main.appendChild(content);

  for (const picture of picturesHome) {
    const divisor = document.createElement("div");
    divisor.classList.add("img");
    const img = document.createElement("img");
    img.src = picture.urls.regular;
    img.alt = picture.alt_description;
    img.loading = "lazy";
    content.appendChild(divisor);
    divisor.appendChild(img);
  }


};
