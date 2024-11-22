import './explorar.css'

import { cleanPage } from "../../utils/cleanPage.js";
import { changeClass } from '../../utils/changeClass.js';
import { colorsOptions } from '../../utils/colorsOptions.js';
import { orientationOptions } from '../../utils/orientationOptions.js';
import { orderByOptions } from '../../utils/orderByOptions.js';

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

          <select name="order by" id="orderBy">
          <option value="orderBy">order by</option>
          </select>
        </nav>
      </section>
`;

const color = document.querySelector("#color");
const orientation = document.querySelector("#orientation");
const orderBy = document.querySelector("#orderBy");



};