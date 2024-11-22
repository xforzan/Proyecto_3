import './explorar.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';
import { colorsOptions } from '../../data/colorsOptions.js';
import { orientationOptions } from '../../data/orientationOptions.js';
import { orderByOptions } from '../../data/OrderByOptions.js';
import { pictures } from '../../data/data.js'

export const explorar = () => {
  const main = document.querySelector("main");
  changeClass("explorar","unselected" , "selected");
  changeClass("inicio","selected" , "unselected");
  cleanPage(main);
  main.innerHTML = `
        <section class="filters">
        <nav>
          <select name="color" id="color">
          <option value="color">color</option>
          </select>
          
          <select name="orientation" id="orientation">
          <option value="orientation">orientation</option>
          </select>

          <select name="order by" id="orderBy">
          <option value="orderBy">order by</option>
          </select>
        </nav>
      </section>
`;

const color = document.querySelector("#color");
for (const colorOption of colorsOptions){
  const option = document.createElement("option");
  option.value = colorOption;
  option.innerHTML = colorOption;
  color.appendChild(option);
}

const orientation = document.querySelector("#orientation");
for (const orientationOption of orientationOptions){
  const option = document.createElement("option");
  option.value = orientationOption;
  option.innerHTML = orientationOption;
  orientation.appendChild(option);
}



const orderBy = document.querySelector("#orderBy");
for (const orderByOption of orderByOptions){
  const option = document.createElement("option");
  option.value = orderByOption;
  option.innerHTML = orderByOption;
  orderBy.appendChild(option);
}


  
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