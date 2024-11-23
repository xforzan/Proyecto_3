import './style.css'
import { header } from './components/Header/header.js';
import { inicio } from './pages/Inicio/inicio.js';
import { linkPage } from './utils/linkPage.js'
import { dataHome } from './data/dataHome.js'
import { navigation } from './components/Navigation/navigation.js';
import { explorar } from './pages/Explorar/explorar.js';
import { chargeFilters } from './utils/chargeFilters.js';
import { dataExplore } from './data/dataExplore.js';



document.querySelector("header").innerHTML = header();
navigation();
  
linkPage("#inicio", inicio);
linkPage("#explorar", explorar);
linkPage("#homeButton", inicio);
linkPage("#exploreButton", explorar);
dataHome()
chargeFilters()





let colorValue = "color";
let orientationValue = "orientation";
let orderByValue = "order by";
let query = "";

const searchBar = document.querySelector("#searchBar")
if (searchBar.value === ""){
    console.log("hola")
}
searchBar.addEventListener("keydown",(event) =>{
    if (event.key === "Enter" && searchBar.value !== ""){
        query = searchBar.value
        dataExplore(query, colorValue, orientationValue, orderByValue)
    }
})






    const color = document.querySelector("#color")
    color.addEventListener("change", () =>{
        console.log("se cambio")
            let colorValue = color.value
            dataExplore(query, colorValue, orientationValue, orderByValue)
        }
    )
    
    
    const orientation = document.querySelector("#orientation")
    orientation.addEventListener("change", () =>{
            let orientationValue = orientation.value
            dataExplore(query, colorValue, orientationValue, orderByValue)
        }
    )
    
    const orderBy = document.querySelector("#orderBy")
    orderBy.addEventListener("change", () =>{
            let orderByValue = orderBy.value
            dataExplore(query, colorValue, orientationValue, orderByValue)
        }
        
    )






