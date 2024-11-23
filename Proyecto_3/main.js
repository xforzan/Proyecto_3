import './style.css'
import { header } from './components/Header/header.js';
import { inicio } from './pages/Inicio/inicio.js';
import { linkPage } from './utils/linkPage.js'
import { dataHome } from './data/dataHome.js'
import { navigation } from './components/Navigation/navigation.js';
import { dataExplore } from './data/dataExplore.js';
import { explorar } from './pages/Explorar/explorar.js';



document.querySelector("header").innerHTML = header();
navigation();
  
linkPage("#inicio", inicio);
linkPage("#explorar", explorar);
linkPage("#homeButton", inicio);
linkPage("#exploreButton", explorar);
dataHome()


const searchBar = document.querySelector("#searchBar")
if (searchBar.value === ""){
    console.log("hola")
}
searchBar.addEventListener("keydown",(event) =>{
    if (event.key === "Enter" && searchBar.value !== ""){
        let query = searchBar.value
    dataExplore(query)
    }
})


