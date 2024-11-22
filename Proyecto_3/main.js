import './style.css'
import { header } from './components/Header/header.js';
import { inicio } from './pages/Inicio/inicio.js';
import { linkPage } from './utils/linkPage.js'
import { data } from './data/data.js'
import { navigation } from './components/Navigation/navigation.js';



document.querySelector("header").innerHTML = header();
navigation();
  
linkPage("#inicio", inicio);
linkPage("#explorar", data);
linkPage("#homeButton", inicio);
linkPage("#exploreButton", data);
data()


const searchBar = document.querySelector("#searchBar")
searchBar.addEventListener("keydown",(event) =>{
    if (event.key === "Enter"){
        let query = searchBar.value
    data(query,40, "blue")
    }
})


