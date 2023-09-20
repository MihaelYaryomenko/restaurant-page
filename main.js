/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/aboutPage.js":
/*!*************************************!*\
  !*** ./src/components/aboutPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nconst loadAboutPage = () => {\r\n  const middleContainer = document.querySelector('#middle-container')\r\n  const h1 = document.createElement('h1')\r\n  h1.innerText = 'About page'\r\n  middleContainer.appendChild(h1)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/aboutPage.js?");

/***/ }),

/***/ "./src/components/initialPage.js":
/*!***************************************!*\
  !*** ./src/components/initialPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadInitialPage: () => (/* binding */ loadInitialPage)\n/* harmony export */ });\nconst loadInitialPage = () => {\r\n  const middleContainer = document.querySelector('#middle-container')\r\n\r\n  const textBox = document.createElement('div')\r\n  textBox.setAttribute('id', 'text-box')\r\n  \r\n  const pTextBoxMain = document.createElement('p')\r\n  pTextBoxMain.classList.add('text-description')\r\n  pTextBoxMain.innerText = `Whether you're a seasoned connoisseur of Mexican cuisine or a newcomer eager to explore new flavors, Laverma'n Doena promises a memorable dining experience. Join us and discover the true taste of Mexico.`\r\n  const pTextBoxSecondary = document.createElement('p')\r\n  pTextBoxSecondary.classList.add('text-description')\r\n  pTextBoxSecondary.innerText = `¡Buen provecho!`\r\n  textBox.appendChild(pTextBoxMain)\r\n  textBox.appendChild(pTextBoxSecondary)\r\n\r\n  const imgTacos = document.createElement('img')\r\n  imgTacos.setAttribute('id', 'tacos')\r\n  imgTacos.setAttribute('src', './img/Beef-Tacos.jpg')\r\n  imgTacos.setAttribute('alt', '')\r\n\r\n  middleContainer.appendChild(textBox)\r\n  middleContainer.appendChild(imgTacos)\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components/initialPage.js?");

/***/ }),

/***/ "./src/components/menuPage.js":
/*!************************************!*\
  !*** ./src/components/menuPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst loadMenuPage = () => {\r\n  const middleContainer = document.querySelector('#middle-container')\r\n  const h1 = document.createElement('h1')\r\n  h1.innerText = 'Menu page'\r\n  middleContainer.appendChild(h1)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/menuPage.js?");

/***/ }),

/***/ "./src/components/navBar.js":
/*!**********************************!*\
  !*** ./src/components/navBar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadNavBar: () => (/* binding */ loadNavBar)\n/* harmony export */ });\nconst loadNavBar = () => {\r\n  const contentContainer = document.querySelector('#content')\r\n\r\n  const navSection = document.createElement('div')\r\n  navSection.setAttribute('id','nav-section')\r\n\r\n  const h1NavSection = document.createElement('h1')\r\n  h1NavSection.classList.add('h1-logo-main')\r\n  h1NavSection.innerText = `Laverma'n doena`\r\n\r\n  const mainContainer = document.createElement('div')\r\n  mainContainer.setAttribute('id', 'main-container')\r\n\r\n  const middleContainer = document.createElement('div')\r\n  middleContainer.setAttribute('id', 'middle-container')\r\n\r\n  const footer = document.createElement('footer')\r\n  const aboutSection = document.createElement('div')\r\n  aboutSection.setAttribute('id','about-section')\r\n  footer.appendChild(aboutSection)\r\n  const pAboutSection = document.createElement('p')\r\n  pAboutSection.classList.add('footer-text')\r\n  pAboutSection.innerText = `Copyright © 2023 MihaelYaryomenko`\r\n  aboutSection.appendChild(pAboutSection)\r\n  const aAboutSection = document.createElement('a')\r\n  aAboutSection.setAttribute('href','https://github.com/MihaelYaryomenko')\r\n  aAboutSection.setAttribute('target','_blank')\r\n  aboutSection.appendChild(aAboutSection)\r\n  const imgAboutSection = document.createElement('img')\r\n  imgAboutSection.setAttribute('id','github-logo')\r\n  imgAboutSection.setAttribute('src','./img/github-mark.svg')\r\n  imgAboutSection.setAttribute('alt','github logo')\r\n  aAboutSection.appendChild(imgAboutSection)\r\n\r\n  const btnContainer = document.createElement('div')\r\n  btnContainer.setAttribute('id','btn-container')\r\n  const pBtnContainer1 = document.createElement('p')\r\n  const pBtnContainer2 = document.createElement('p')\r\n  pBtnContainer1.classList.add('navBtn')\r\n  pBtnContainer2.classList.add('navBtn')\r\n  pBtnContainer1.setAttribute('id','menu-btn')\r\n  pBtnContainer2.setAttribute('id','about-btn')\r\n  pBtnContainer1.innerText = 'menu'\r\n  pBtnContainer2.innerText = 'about'\r\n  btnContainer.appendChild(pBtnContainer1)\r\n  btnContainer.appendChild(pBtnContainer2)\r\n\r\n\r\n  contentContainer.appendChild(mainContainer)\r\n  navSection.appendChild(btnContainer)\r\n  mainContainer.appendChild(navSection)\r\n  navSection.appendChild(h1NavSection)\r\n  mainContainer.appendChild(middleContainer)\r\n  mainContainer.appendChild(footer)\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/components/navBar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_initialPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/initialPage */ \"./src/components/initialPage.js\");\n/* harmony import */ var _components_menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menuPage */ \"./src/components/menuPage.js\");\n/* harmony import */ var _components_aboutPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/aboutPage */ \"./src/components/aboutPage.js\");\n/* harmony import */ var _components_navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navBar */ \"./src/components/navBar.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _components_navBar__WEBPACK_IMPORTED_MODULE_3__.loadNavBar)\r\n\r\nwindow.addEventListener('load', () => {\r\n  const content = document.querySelector('#middle-container')\r\n  const menuBtn = document.querySelector('#menu-btn')\r\n  menuBtn.addEventListener('click',() => {\r\n    content.replaceChildren()\r\n    ;(0,_components_menuPage__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)()\r\n  })\r\n})\r\n\r\nwindow.addEventListener('load', () => {\r\n  const content = document.querySelector('#middle-container')\r\n  const aboutBtn = document.querySelector('#about-btn')\r\n  aboutBtn.addEventListener('click', () => {\r\n    content.replaceChildren()\r\n    ;(0,_components_aboutPage__WEBPACK_IMPORTED_MODULE_2__.loadAboutPage)()\r\n  })\r\n})\r\n\r\nwindow.addEventListener('load', () => {\r\n  const middleContainer = document.querySelector('#middle-container')\r\n  const h1LogoMain = document.querySelector('.h1-logo-main')\r\n  h1LogoMain.addEventListener('click', () => {\r\n    middleContainer.replaceChildren()\r\n    ;(0,_components_initialPage__WEBPACK_IMPORTED_MODULE_0__.loadInitialPage)()\r\n  })\r\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;