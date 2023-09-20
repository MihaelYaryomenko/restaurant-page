export const loadNavBar = () => {
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

  const footer = document.createElement('footer')
  const aboutSection = document.createElement('div')
  aboutSection.setAttribute('id','about-section')
  footer.appendChild(aboutSection)
  const pAboutSection = document.createElement('p')
  pAboutSection.classList.add('footer-text')
  pAboutSection.innerText = `Copyright © 2023 MihaelYaryomenko`
  aboutSection.appendChild(pAboutSection)
  const aAboutSection = document.createElement('a')
  aAboutSection.setAttribute('href','https://github.com/MihaelYaryomenko')
  aAboutSection.setAttribute('target','_blank')
  aboutSection.appendChild(aAboutSection)
  const imgAboutSection = document.createElement('img')
  imgAboutSection.setAttribute('id','github-logo')
  imgAboutSection.setAttribute('src','./img/github-mark.svg')
  imgAboutSection.setAttribute('alt','github logo')
  aAboutSection.appendChild(imgAboutSection)

  const btnContainer = document.createElement('div')
  btnContainer.setAttribute('id','btn-container')
  const pBtnContainer1 = document.createElement('p')
  const pBtnContainer2 = document.createElement('p')
  pBtnContainer1.classList.add('navBtn')
  pBtnContainer2.classList.add('navBtn')
  pBtnContainer1.setAttribute('id','menu-btn')
  pBtnContainer2.setAttribute('id','about-btn')
  pBtnContainer1.innerText = 'menu'
  pBtnContainer2.innerText = 'about'
  btnContainer.appendChild(pBtnContainer1)
  btnContainer.appendChild(pBtnContainer2)


  contentContainer.appendChild(mainContainer)
  navSection.appendChild(btnContainer)
  mainContainer.appendChild(navSection)
  navSection.appendChild(h1NavSection)
  mainContainer.appendChild(middleContainer)
  mainContainer.appendChild(footer)
}