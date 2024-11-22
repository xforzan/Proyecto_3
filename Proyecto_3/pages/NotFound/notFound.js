import './notfound.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';

export const notFound = () => {
  const main = document.querySelector("main");
  changeClass("explorar","selected" , "unselected");
  changeClass("inicio","selected" , "unselected");
  cleanPage(main);
  main.innerHTML = `
    <h1>Página no encontrada</h1>
`;

};