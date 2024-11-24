import './style.css'
import { header } from './components/Header/header.js';
import { inicio, activateEventListenerHome } from './pages/Inicio/inicio.js';
import { explorar, activateEventListenerExplore} from './pages/Explorar/explorar.js';
import { linkPage } from './utils/linkPage.js'
import { dataHome } from './data/dataHome.js'
import { navigation } from './components/Navigation/navigation.js';
import { chargeFilters } from './utils/chargeFilters.js';
import { dataExplore} from './data/dataExplore.js';
import { resetPageNum } from './pages/Explorar/explorar.js'


let colorValue = "color";
let orientationValue = "orientation";
let orderByValue = "order by";
let query = "audi";

export const colorValueExport = () => colorValue;
export const orientationValueExport = () => orientationValue;
export const orderByValueExport = () => orderByValue;
export const queryExport = () => query;


document.querySelector("header").innerHTML = header();
navigation();
  
linkPage("#inicio", inicio);
linkPage("#explorar", explorar);


activateEventListenerHome()
linkPage("#inicio", activateEventListenerHome);
linkPage("#explorar", activateEventListenerExplore);

linkPage("#homeButton", inicio);
linkPage("#exploreButton", explorar);
dataExplore(query, colorValue, orientationValue, orderByValue)
dataHome()
chargeFilters()


const searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("keydown",(event) =>{
    if (event.key === "Enter" && searchBar.value !== ""){
        query = searchBar.value
        dataExplore(query, colorValue, orientationValue, orderByValue)
        resetPageNum()
    }
})






    const color = document.querySelector("#color")
    color.addEventListener("change", () =>{
            let colorValue = color.value
            dataExplore(query, colorValue, orientationValue, orderByValue)
            resetPageNum()
        }
    )
    
    
    const orientation = document.querySelector("#orientation")
    orientation.addEventListener("change", () =>{
            let orientationValue = orientation.value
            dataExplore(query, colorValue, orientationValue, orderByValue)
            resetPageNum()
        }
    )
    
    const orderBy = document.querySelector("#orderBy")
    orderBy.addEventListener("change", () =>{
            let orderByValue = orderBy.value
            dataExplore(query, colorValue, orientationValue, orderByValue)
            resetPageNum()
        }
        
    )





