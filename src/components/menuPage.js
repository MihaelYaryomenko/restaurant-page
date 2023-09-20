export const loadMenuPage = () => {
  const middleContainer = document.querySelector('#middle-container')
  const h1 = document.createElement('h1')
  h1.innerText = 'Menu page'
  middleContainer.appendChild(h1)
}