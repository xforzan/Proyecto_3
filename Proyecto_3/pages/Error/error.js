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
    <div class="error">
    <img src="../../public/errorIcon.png" alt="Error Icon">
        <h1>Error loading content</h1>
        <p>Try reloading the page or try again later</p>
        <p class="errorMessage">${error}</p>
`;
}