import './notFound.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';

export const notFound = () => {
  const main = document.querySelector("main");
  changeClass("explorar","selected" , "unselected");
  changeClass("inicio","selected" , "unselected");
  cleanPage(main);
  main.innerHTML = `
  <div class="notFound">
        <h1>¡Oops!</h1>
        <h2>We couldn't find any results for your search</h2>
        <p>Try another search or return to the home page using the button below:</p>
        <button class="returnButton" id="return">Return to Home</button>
      </div>
`;

};