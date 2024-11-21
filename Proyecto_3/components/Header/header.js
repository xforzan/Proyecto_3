import './header.css'

export const header = () =>
    `<img src="/vite.svg" alt="logo">
      <nav class="navigation">
        <ul>
          <li>
            <button type="button" onclick="window.location.href=''">Inicio</button>
          </li>
          <li>
            <button type="button" onclick="window.location.href=''">Explorar</button>
          </li>
        </ul>
        <input type="text" name="Barra de búsqueda" id="searchBar" placeholder="Buscar">
        <input type="submit" value="Buscar">
      </nav>`
;

