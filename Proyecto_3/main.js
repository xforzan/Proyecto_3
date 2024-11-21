import './style.css'
import { header } from './components/Header/header.js';
import { inicio } from './pages/Inicio/inicio.js'
import { explorar } from './pages/Explorar/explorar.js'
import { linkPage } from './utils/linkPage.js'

document.querySelector("header").innerHTML = header()


linkPage("#inicio", inicio)
linkPage("#explorar", explorar)

inicio()