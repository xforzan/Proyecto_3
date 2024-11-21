import './inicio.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';

export const inicio = () => {
  const main = document.querySelector("main");
  changeClass("inicio","unselected" , "selected");
  changeClass("explorar","selected" , "unselected");
  cleanPage(main);
  main.innerHTML = `
    <p>hola</p>
`
};