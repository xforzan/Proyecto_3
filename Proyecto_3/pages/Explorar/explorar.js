import './explorar.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';


export const explorar = () => {
  const main = document.querySelector("main");
  changeClass("explorar","unselected" , "selected");
  changeClass("inicio","selected" , "unselected");
  cleanPage(main);
  changeClass("filters","filters-hidden", "filters")
  main.innerHTML = `

`;

};