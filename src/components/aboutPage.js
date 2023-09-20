export const loadAboutPage = () => {
  const middleContainer = document.querySelector('#middle-container')
  const h1 = document.createElement('h1')
  h1.innerText = 'About page'
  middleContainer.appendChild(h1)
}