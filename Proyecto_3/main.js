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
import {setColorValue, setOrientationValue,setOrderByValue , setQueryValue} from './pages/Explorar/explorar.js'


let colorValue = "color";
let orientationValue = "orientation";
let orderByValue = "order by";
let query = "audi";







document.querySelector("header").innerHTML = header();
navigation();
  
linkPage("#inicio", inicio);
linkPage("#explorar", explorar);



linkPage("#inicio", activateEventListenerHome);
linkPage("#explorar", activateEventListenerExplore);

linkPage("#homeButton", inicio);
linkPage("#exploreButton", explorar);
dataExplore(query, colorValue, orientationValue, orderByValue)
dataHome()
chargeFilters()
activateEventListenerHome()

const searchBar = document.querySelector("#searchBar")

searchBar.addEventListener("keydown",(event) =>{
    if (event.key === "Enter" && searchBar.value !== ""){
        query = searchBar.value
        dataExplore(query, colorValue, orientationValue, orderByValue, 1)
        resetPageNum()
        setQueryValue(query)
    }
})






    const color = document.querySelector("#color")
    color.addEventListener("change", () =>{
            let colorValue = color.value
            dataExplore(query, colorValue, orientationValue, orderByValue, 1)
            resetPageNum()
            setColorValue(colorValue)
        }
    )
    
    
    const orientation = document.querySelector("#orientation")
    orientation.addEventListener("change", () =>{
            let orientationValue = orientation.value
            dataExplore(query, colorValue, orientationValue, orderByValue, 1)
            resetPageNum()
            setOrientationValue(orientationValue)
        }
    )
    
    const orderBy = document.querySelector("#orderBy")
    orderBy.addEventListener("change", () =>{
            let orderByValue = orderBy.value
            dataExplore(query, colorValue, orientationValue, orderByValue, 1)
            resetPageNum()
            setOrderByValue(orderByValue)
        }
        
    )





