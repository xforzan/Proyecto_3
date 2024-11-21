import './header.css'

export const header = () =>
    `<img id="logo" src="/vite.svg" alt="logo">
      <nav class="navigation">
        <ul>
          <li>
            <button class="navButton id="inicio" unselected" type="button" ">Inicio</button>
          </li>
          <li>
            <button class="navButton id="explorar" unselected" type="button" ">Explorar</button>
          </li>
        </ul>
        <input type="text" name="Barra de búsqueda" id="searchBar" placeholder="Buscar">
      </nav>`
;
