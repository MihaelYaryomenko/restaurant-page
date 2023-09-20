import { loadInitialPage } from "./components/initialPage";
import { loadMenuPage } from "./components/menuPage";
import { loadAboutPage } from "./components/aboutPage";
import { loadNavBar } from "./components/navBar";

document.addEventListener("DOMContentLoaded", loadNavBar)

window.addEventListener('load', () => {
  const content = document.querySelector('#middle-container')
  const menuBtn = document.querySelector('#menu-btn')
  menuBtn.addEventListener('click',() => {
    content.replaceChildren()
    loadMenuPage()
  })
})

window.addEventListener('load', () => {
  const content = document.querySelector('#middle-container')
  const aboutBtn = document.querySelector('#about-btn')
  aboutBtn.addEventListener('click', () => {
    content.replaceChildren()
    loadAboutPage()
  })
})

window.addEventListener('load', () => {
  const middleContainer = document.querySelector('#middle-container')
  const h1LogoMain = document.querySelector('.h1-logo-main')
  h1LogoMain.addEventListener('click', () => {
    middleContainer.replaceChildren()
    loadInitialPage()
  })
})