import './style.css'
import { header } from './components/Header/header.js';
import { changeClass } from './utils/changeClass.js';

const Header = document.querySelector("header").innerHTML = header()


changeClass("#inicio", "selected");