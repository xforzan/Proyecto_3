import './navigation.css'

export const navigation = () => `
<nav class="bottom-nav">
    <div class="nav-button" id="homeButton">
    <span id="homeIcon"></span>
    <span>Home</span>
    </div>
    <div class="nav-button" id="exploreButton">
    <span id="exploreIcon"></span>
    <span>Explore</span>
    </div>
  </nav>
`;

const navMobile = document.querySelector(".navMobile")
navMobile.innerHTML = navigation();