import './error.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';

export const error = (error) =>{
    document.querySelector("main")
    const main = document.querySelector("main");
  changeClass("explorar","selected" , "unselected");
  changeClass("inicio","selected" , "unselected");
  cleanPage(main);
  main.innerHTML = `
    <h1>Error de la página motivo : ${error}</h1>
`;
}