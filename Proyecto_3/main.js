import './style.css'
import { header } from './components/Header/header.js';
import { inicio } from './pages/Inicio/inicio.js'
import { explorar } from './pages/Explorar/explorar.js'
import { linkPage } from './utils/linkPage.js'
import { data } from './data/data.js'

import { notFound } from './pages/NotFound/notFound.js';
import { pictures } from './data/data.js'


document.querySelector("header").innerHTML = header();
  
linkPage("#inicio", inicio);
linkPage("#explorar", explorar);
data()


const searchBar = document.querySelector("#searchBar")
searchBar.addEventListener("keydown",(event) =>{
    if (event.key === "Enter"){
        let query = searchBar.value
    data(query,40, "blue")
    }
})


