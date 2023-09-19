export const loadInitialPage = () => {
  const contentContainer = document.querySelector('#content')

  const navSection = document.createElement('div')
  navSection.setAttribute('id','nav-section')

  const h1NavSection = document.createElement('h1')
  h1NavSection.classList.add('h1-logo-main')
  h1NavSection.innerText = `Laverma'n doena`

  const mainContainer = document.createElement('div')
  mainContainer.setAttribute('id', 'main-container')

  const middleContainer = document.createElement('div')
  middleContainer.setAttribute('id', 'middle-container')

  const textBox = document.createElement('div')
  textBox.setAttribute('id', 'text-box')
  
  const pTextBoxMain = document.createElement('p')
  pTextBoxMain.classList.add('text-description')
  pTextBoxMain.innerText = `Whether you're a seasoned connoisseur of Mexican cuisine or a newcomer eager to explore new flavors, Laverma'n Doena promises a memorable dining experience. Join us and discover the true taste of Mexico.`
  const pTextBoxSecondary = document.createElement('p')
  pTextBoxSecondary.classList.add('text-description')
  pTextBoxSecondary.innerText = `¡Buen provecho!`
  textBox.appendChild(pTextBoxMain)
  textBox.appendChild(pTextBoxSecondary)

  const imgTacos = document.createElement('img')
  imgTacos.setAttribute('id', 'tacos')
  imgTacos.setAttribute('src', './img/Beef-Tacos.jpg')
  imgTacos.setAttribute('alt', '')

  const footer = document.createElement('footer')
  const aboutSection = document.createElement('div')
  aboutSection.setAttribute('id','about-section')
  footer.appendChild(aboutSection)
  const pAboutSection = document.createElement('p')
  pAboutSection.classList.add('footer-text')
  pAboutSection.innerText = `Copyright © 2023 MihaelYaryomenko`
  aboutSection.appendChild(pAboutSection)
  const aAboutSection = document.createElement('a')
  aboutSection.setAttribute('href','https://github.com/MihaelYaryomenko')
  aboutSection.setAttribute('target','_blank')
  aboutSection.appendChild(aAboutSection)
  const imgAboutSection = document.createElement('img')
  imgAboutSection.setAttribute('id','github-logo')
  imgAboutSection.setAttribute('src','./img/github-mark.svg')
  imgAboutSection.setAttribute('alt','github logo')
  aAboutSection.appendChild(imgAboutSection)

  contentContainer.appendChild(mainContainer)
  mainContainer.appendChild(navSection)
  navSection.appendChild(h1NavSection)
  mainContainer.appendChild(middleContainer)
  mainContainer.appendChild(footer)
  middleContainer.appendChild(textBox)
  middleContainer.appendChild(imgTacos)
}

