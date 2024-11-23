import './header.css'


export const header = () =>
    `<div class="header">
<img id="logo" src="/logo.svg" alt="logo">
      <nav class="navigation">
        <ul>
          <li>
            <button class="navButton unselected"  id="inicio" type="button" ">Home</button>
          </li>
          <li>
            <button class="navButton unselected" id="explorar" type="button" ">Explore</button>
          </li>
        </ul>
        <div class="searchBar">
        <span></span>
        <input id="searchBar" type="text" name="Search bar" placeholder="Search">
      </div>
      </nav>

      </div>
      
      
      
      <section class="filters" id="filters">
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
      
      `
;

