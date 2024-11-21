import './header.css'

export const header = () =>
    `<img id="logo" src="/logo.svg" alt="logo">
      <nav class="navigation">
        <ul>
          <li>
            <button class="navButton unselected"  id="inicio" type="button" ">Inicio</button>
          </li>
          <li>
            <button class="navButton unselected" id="explorar" type="button" ">Explorar</button>
          </li>
        </ul>
        <div class="searchBar">
        <span></span>
        <input id="searchBar" type="text" name="Barra de búsqueda" placeholder="Buscar">
      </div>
      </nav>`
;
