export const loadInitialPage = () => {
  const middleContainer = document.querySelector('#middle-container')

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

  middleContainer.appendChild(textBox)
  middleContainer.appendChild(imgTacos)
}

