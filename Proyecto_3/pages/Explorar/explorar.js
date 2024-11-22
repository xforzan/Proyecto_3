import './explorar.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';

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
        </nav>
      </section>
`;

};