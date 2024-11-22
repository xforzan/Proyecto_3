import './inicio.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';
import { pictures } from '../../data/data.js'

export const inicio = () => {
  const main = document.querySelector("main");
  changeClass("inicio","unselected" , "selected");
  changeClass("explorar","selected" , "unselected");
  cleanPage(main);
  const content = document.createElement("div")
  content.classList.add("content")
  main.appendChild(content)
  for (const picture of pictures){
    const divisor = document.createElement("div")
    divisor.classList.add("img")
    const img = document.createElement("img")
    img.src = picture.urls.regular
    img.alt = picture.alt_description
    content.appendChild(divisor)
    divisor.appendChild(img)
    


  }
};
