/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/assets/titleFont.ttf */ "./dist/assets/titleFont.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../dist/assets/oven.jpg */ "./dist/assets/oven.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: titleFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n@media (min-width: 900px) {\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  .logoDiv {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    bottom: 1em;\n    right: 1em;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s;\n  }\n\n  .logoDiv:hover{\n    scale: 1.2;\n    transition: 0.1s;\n  }\n\n  .logoImg{\n    width: 2em;\n    border-radius: 100%;\n    background-color: white;\n  }\n\n  .logoText{\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-right: 0.5em;\n    justify-self: center;\n    align-self: center;\n    font-size: 2em;\n    width: 5em;\n    height: 100%;\n    border-radius: 0% 20% 20% 0%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 1em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 1em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    margin: 0%;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    padding: 1em;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  .logoDiv {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    bottom: 1em;\n    right: 1em;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s;\n  }\n\n  .logoDiv:hover{\n    scale: 1.2;\n    transition: 0.1s;\n  }\n\n  .logoImg{\n    width: 2em;\n    border-radius: 100%;\n    background-color: white;\n  }\n\n  .logoText{\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 2em;\n    font-size: 5em;\n    width: 100%;\n    height: 100%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 4em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2% 0% 0% 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-top: 1em;\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    height: 30em;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    margin-top: 4em;\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (max-width: 600px) {\n  body {\n    margin: 0%;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background-position-x: 55%;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 4em;\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 1em;\n    row-gap: 1em;\n  }\n  \n  .logoDiv {\n    position: fixed;\n    display: flex;\n    flex-direction: row;\n    bottom: 1em;\n    right: 1em;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s;\n    opacity: 0.5;\n  }\n\n  .logoDiv:hover{\n    scale: 1.2;\n    transition: 0.1s;\n    opacity: 1;\n  }\n\n  .logoImg{\n    width: 1.3em;\n    border-radius: 100%;\n    background-color: white;\n  }\n\n  .logoText{\n    padding-left: 0.3em;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 0.8em;\n    color: white;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 3em;\n    justify-self: center;\n    align-self: center;\n    font-size: 3em;\n    width: 4em;\n    height: 4em;\n    border-radius: 20%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 2em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .homeImg {\n    justify-self: center;\n    align-self: center;\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 15em;\n    float: left;\n  }\n\n  .homeImgCaption {\n    margin-top: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    height: 100%;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 2em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    margin-bottom: 1em;\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 3em;\n  }\n\n  .map {\n    align-self: center;\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 100%;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 23em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 3em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 10em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: titleFont;\n  src: url(/dist/assets/titleFont.ttf);\n}\n\n\n@media (min-width: 900px) {\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(/dist/assets/oven.jpg);\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  .logoDiv {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    bottom: 1em;\n    right: 1em;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s;\n  }\n\n  .logoDiv:hover{\n    scale: 1.2;\n    transition: 0.1s;\n  }\n\n  .logoImg{\n    width: 2em;\n    border-radius: 100%;\n    background-color: white;\n  }\n\n  .logoText{\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-right: 0.5em;\n    justify-self: center;\n    align-self: center;\n    font-size: 2em;\n    width: 5em;\n    height: 100%;\n    border-radius: 0% 20% 20% 0%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 1em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 1em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(/dist/assets/oven.jpg);\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    margin: 0%;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    padding: 1em;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  .logoDiv {\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    bottom: 1em;\n    right: 1em;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s;\n  }\n\n  .logoDiv:hover{\n    scale: 1.2;\n    transition: 0.1s;\n  }\n\n  .logoImg{\n    width: 2em;\n    border-radius: 100%;\n    background-color: white;\n  }\n\n  .logoText{\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 2em;\n    font-size: 5em;\n    width: 100%;\n    height: 100%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 4em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2% 0% 0% 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-top: 1em;\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    height: 30em;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    margin-top: 4em;\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (max-width: 600px) {\n  body {\n    margin: 0%;\n    width: 100%;\n    height: 100%;\n    background-image: url(/dist/assets/oven.jpg);\n    background-position-x: 55%;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 4em;\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 1em;\n    row-gap: 1em;\n  }\n  \n  .logoDiv {\n    position: fixed;\n    display: flex;\n    flex-direction: row;\n    bottom: 1em;\n    right: 1em;\n    justify-content: center;\n    align-items: center;\n    transition: 0.1s;\n    opacity: 0.5;\n  }\n\n  .logoDiv:hover{\n    scale: 1.2;\n    transition: 0.1s;\n    opacity: 1;\n  }\n\n  .logoImg{\n    width: 1.3em;\n    border-radius: 100%;\n    background-color: white;\n  }\n\n  .logoText{\n    padding-left: 0.3em;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 0.8em;\n    color: white;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 3em;\n    justify-self: center;\n    align-self: center;\n    font-size: 3em;\n    width: 4em;\n    height: 4em;\n    border-radius: 20%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 2em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .homeImg {\n    justify-self: center;\n    align-self: center;\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 15em;\n    float: left;\n  }\n\n  .homeImgCaption {\n    margin-top: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    height: 100%;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 2em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    margin-bottom: 1em;\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 3em;\n  }\n\n  .map {\n    align-self: center;\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 100%;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 23em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 3em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 10em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/aboutUs.js":
/*!***********************************!*\
  !*** ./src/components/aboutUs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAboutUs": () => (/* binding */ renderAboutUs)
/* harmony export */ });
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ "./src/components/clearPage.js");


function renderAboutUs(){
  (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__.clearPage)('aboutUs');
  const content = document.getElementById('content');
  const aboutUs = document.createElement('div');
  const aboutUsImg = document.createElement('img');
  const aboutUsTxt = document.createElement('p');

  aboutUs.classList.add('aboutUs');
  aboutUs.classList.add('animatedRender');
  aboutUsImg.classList.add('aboutUsImg');
  aboutUsTxt.classList.add('aboutUsTxt')

  aboutUsImg.src = './assets/aboutUs.png';
  aboutUsTxt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur' +
  'adipiscing elit. Quisque dignissim est vel diam efficitur porttitor. Curabitur' +
  'congue in quam a rhoncus. Mauris gravida sit amet ex ut scelerisque.' +
  'Donec aliquam leo et gravida ullamcorper. Donec ut sapien magna. Proin' +
  'imperdiet nulla massa, ac sodales nulla tempus quis. Nunc sed sem nulla.' +
  '<br> <br>' +
  'Etiam tincidunt dolor nec scelerisque consequat. Vivamus lobortis' +
  'ullamcorper leo, sit amet blandit leo dapibus ac. Donec mattis neque' +
  'vitae fringilla laoreet. Nunc non sagittis justo. Ut id leo consequat,' +
  'pharetra erat non, vehicula enim. Donec tempor sem in tellus ornare rutrum.' +
  'Pellentesque id eros eu risus ullamcorper tincidunt. Nullam massa dolor,' +
  'aliquam vel vulputate at, varius auctor quam. ';

  aboutUs.appendChild(aboutUsImg);
  aboutUs.appendChild(aboutUsTxt);

  content.appendChild(aboutUs);
}

/***/ }),

/***/ "./src/components/buttonCreator.js":
/*!*****************************************!*\
  !*** ./src/components/buttonCreator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonCreator": () => (/* binding */ buttonCreator)
/* harmony export */ });
function buttonCreator (text, id, action){
  let button = document.createElement('button');
  button.textContent = text;
  button.setAttribute('id', id);
  button.addEventListener('click', action);
  return button;
};

/***/ }),

/***/ "./src/components/clearPage.js":
/*!*************************************!*\
  !*** ./src/components/clearPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearPage": () => (/* binding */ clearPage)
/* harmony export */ });
function clearPage(currentContent) {
  const content = document.getElementById('content');
  const toBeRemoved = [];
  toBeRemoved.push(document.getElementsByClassName('home')[0]);
  toBeRemoved.push(document.getElementsByClassName('menu')[0]);
  toBeRemoved.push(document.getElementsByClassName('contact')[0]);
  toBeRemoved.push(document.getElementsByClassName('aboutUs')[0]);

  for (let i = toBeRemoved.length - 1; i >= 0; i--) {
    (toBeRemoved[i] != undefined && toBeRemoved[i] != currentContent) ?
      content.removeChild(toBeRemoved[i]) : () => { };
  }
}

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderContact": () => (/* binding */ renderContact)
/* harmony export */ });
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ "./src/components/clearPage.js");


function renderContact(){
  (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__.clearPage)('contact');
  const content = document.getElementById('content');
  const contact = document.createElement('div');
  const map = document.createElement('img');
  const address = document.createElement('p');
  const phone = document.createElement('p');

  map.classList.add('map');
  address.classList.add('address');
  phone.classList.add('phone');
  contact.classList.add('contact');
  contact.classList.add('animatedRender');

  map.src = './assets/map.png';
  address.textContent = 'Address: Blanco Crossing';
  phone.textContent = 'Phone: 555-3750';

  contact.appendChild(map);
  contact.appendChild(address);
  contact.appendChild(phone);
  content.appendChild(contact);
}


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ "./src/components/clearPage.js");


function renderHome() {
  (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__.clearPage)('home');
  const content = document.getElementById('content');
  const home = document.createElement('div');
  const homeTitle = document.createElement('p');
  const homeFig = document.createElement('figure');
  const homeImg = document.createElement('img');
  const homeImgCaption = document.createElement('figcaption');

  home.classList.add('home');
  home.classList.add('animatedRender');
  homeTitle.classList.add('homeTitle');
  homeFig.classList.add('homeFig');
  homeImg.classList.add('homeImg');
  homeImgCaption.classList.add('homeImgCaption');

  homeTitle.textContent = 'The best pizzas in town, since 1973';
  homeImg.src = './assets/homeImg.jpg';
  homeImgCaption.innerHTML = 'Lorem ipsum dolor sit amet, consectetur' +
    'adipiscing elit. Quisque dignissim est vel diam efficitur porttitor. Curabitur' +
    'congue in quam a rhoncus. Mauris gravida sit amet ex ut scelerisque.' +
    'Donec aliquam leo et gravida ullamcorper. Donec ut sapien magna. Proin' +
    'imperdiet nulla massa, ac sodales nulla tempus quis. Nunc sed sem nulla.' +
    '<br> <br>' +
    'Etiam tincidunt dolor nec scelerisque consequat. Vivamus lobortis' +
    'ullamcorper leo, sit amet blandit leo dapibus ac. Donec mattis neque' +
    'vitae fringilla laoreet. Nunc non sagittis justo. Ut id leo consequat,' +
    'pharetra erat non, vehicula enim. Donec tempor sem in tellus ornare rutrum.' +
    'Pellentesque id eros eu risus ullamcorper tincidunt. Nullam massa dolor,' +
    'aliquam vel vulputate at, varius auctor quam. ';

  homeFig.appendChild(homeImg);
  homeFig.appendChild(homeImgCaption);
  home.appendChild(homeTitle);
  home.appendChild(homeFig);
  
  content.appendChild(home);
}

/***/ }),

/***/ "./src/components/introPage.js":
/*!*************************************!*\
  !*** ./src/components/introPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderIntroPage": () => (/* binding */ renderIntroPage)
/* harmony export */ });
/* harmony import */ var _buttonCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonCreator */ "./src/components/buttonCreator.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ "./src/components/title.js");
/* harmony import */ var _renderMainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderMainPage */ "./src/components/renderMainPage.js");




function renderIntroPage() {
  const introPage = document.createElement('div');
  const title = (0,_title__WEBPACK_IMPORTED_MODULE_1__.renderTitle)();
  const enterButton = (0,_buttonCreator__WEBPACK_IMPORTED_MODULE_0__.buttonCreator)('>>>', 'enterButton', () => { (0,_renderMainPage__WEBPACK_IMPORTED_MODULE_2__.renderMainPage)() });

  introPage.classList.add('introPage');
  title.classList.add('mainTitle');

  introPage.appendChild(title);
  introPage.appendChild(enterButton);

  return introPage;
}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMenu": () => (/* binding */ renderMenu)
/* harmony export */ });
/* harmony import */ var _clearPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearPage */ "./src/components/clearPage.js");
/* harmony import */ var _menuItemCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItemCreator */ "./src/components/menuItemCreator.js");



function renderMenu() {
  (0,_clearPage__WEBPACK_IMPORTED_MODULE_0__.clearPage)('menu');
  const content = document.getElementById('content');
  const menu = document.createElement('div');
  const menuTitle = document.createElement('p');
  const menuItems = document.createElement('div');
  const menuArray = [];

  menuArray.push((0,_menuItemCreator__WEBPACK_IMPORTED_MODULE_1__.menuItemCreator)
    ('Cheese Pizza', './assets/cheesePizza.png', 'Lorem ipsum dolor sit amet, consectetur'));
  menuArray.push((0,_menuItemCreator__WEBPACK_IMPORTED_MODULE_1__.menuItemCreator)
    ('Pepperoni Pizza', './assets/pepperoniPizza.png', 'Lorem ipsum dolor sit amet, consectetur'));
  menuArray.push((0,_menuItemCreator__WEBPACK_IMPORTED_MODULE_1__.menuItemCreator)
    ('Meat & Olives Pizza', './assets/meatOlivePizza.png', 'Lorem ipsum dolor sit amet, consectetur'));
  menuArray.push((0,_menuItemCreator__WEBPACK_IMPORTED_MODULE_1__.menuItemCreator)
    ('Rocket & tomatoes pizza', './assets/rocketPizza.png', 'Lorem ipsum dolor sit amet, consectetur'));

  menu.classList.add('menu');
  menu.classList.add('animatedRender');
  menuTitle.classList.add('menuTitle');
  menuItems.classList.add('menuItems');

  menuTitle.textContent = 'Our pizza selection';

  for (let i = menuArray.length - 1; i >= 0; i--) {
    menuItems.appendChild(menuArray[i]);
  }

  menu.appendChild(menuTitle);
  menu.appendChild(menuItems);

  content.appendChild(menu);
}

/***/ }),

/***/ "./src/components/menuItemCreator.js":
/*!*******************************************!*\
  !*** ./src/components/menuItemCreator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItemCreator": () => (/* binding */ menuItemCreator)
/* harmony export */ });
function menuItemCreator(name, url, description){
  let itemName = document.createElement('p');
  let itemImg = document.createElement('img');
  let itemDescription = document.createElement('p');
  let menuItem = document.createElement('div');

  itemName.textContent = name;
  itemImg.src = url;
  itemDescription.textContent = description;

  itemName.classList.add('itemName');
  itemImg.classList.add('itemImg');
  itemDescription.classList.add('itemDescription');
  menuItem.classList.add('menuItem');
  
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemDescription);
  return menuItem;
}

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNavbar": () => (/* binding */ renderNavbar)
/* harmony export */ });
/* harmony import */ var _buttonCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonCreator */ "./src/components/buttonCreator.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/components/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/components/contact.js");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutUs */ "./src/components/aboutUs.js");






function renderNavbar() {
  const homeBtn = (0,_buttonCreator__WEBPACK_IMPORTED_MODULE_0__.buttonCreator)('Home', 'homeBtn', () => { (0,_home__WEBPACK_IMPORTED_MODULE_1__.renderHome)() });
  const menuBtn = (0,_buttonCreator__WEBPACK_IMPORTED_MODULE_0__.buttonCreator)('Menu', 'menuBtn', () => { (0,_menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu)() })
  const contactBtn = (0,_buttonCreator__WEBPACK_IMPORTED_MODULE_0__.buttonCreator)('Contact', 'contactBtn', () => { ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.renderContact)() });
  const aboutUsBtn = (0,_buttonCreator__WEBPACK_IMPORTED_MODULE_0__.buttonCreator)('About us', 'aboutUsBtn', () => { (0,_aboutUs__WEBPACK_IMPORTED_MODULE_4__.renderAboutUs)() })

  const navbar = document.createElement('div');
  navbar.classList.add('navbar');
  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(contactBtn);
  navbar.appendChild(aboutUsBtn);
  return navbar;
}

/***/ }),

/***/ "./src/components/renderGithubLogo.js":
/*!********************************************!*\
  !*** ./src/components/renderGithubLogo.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderGithubLogo": () => (/* binding */ renderGithubLogo)
/* harmony export */ });
function renderGithubLogo(){
  const logoImg = document.createElement('img');
  const logoText = document.createElement('p');
  const logoDiv = document.createElement('div');
  const logoLink = document.createElement('a');

  logoImg.classList.add('logoImg');
  logoText.classList.add('logoText');
  logoDiv.classList.add('logoDiv');

  logoImg.src = './assets/githubLogo.svg';
  logoText.textContent = 'JPC 2022';
  logoLink.href = 'https://github.com/JuanPedroCasanas/restaurant-page';

  logoDiv.appendChild(logoImg);
  logoDiv.appendChild(logoText);
  logoLink.appendChild(logoDiv);

  return logoLink;
}

/***/ }),

/***/ "./src/components/renderMainPage.js":
/*!******************************************!*\
  !*** ./src/components/renderMainPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMainPage": () => (/* binding */ renderMainPage)
/* harmony export */ });
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title */ "./src/components/title.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ "./src/components/navbar.js");
/* harmony import */ var _renderGithubLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGithubLogo */ "./src/components/renderGithubLogo.js");




function renderMainPage() {
  const content = document.getElementById('content');
  const introPage = document.getElementsByClassName('introPage')[0];
  const navbar = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNavbar)();
  const title = (0,_title__WEBPACK_IMPORTED_MODULE_0__.renderTitle)();
  const ghLogo = (0,_renderGithubLogo__WEBPACK_IMPORTED_MODULE_2__.renderGithubLogo)();
  content.style.opacity = '0';
  setTimeout(() => {
    content.removeChild(introPage);
    content.appendChild(title);
    content.appendChild(navbar);
    content.appendChild(ghLogo);
    content.style.opacity = '1';
  }, 1000);
}

/***/ }),

/***/ "./src/components/title.js":
/*!*********************************!*\
  !*** ./src/components/title.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTitle": () => (/* binding */ renderTitle)
/* harmony export */ });
function renderTitle() {
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = `El Canchero's Pizzeria`;
  return title;
}

/***/ }),

/***/ "./dist/assets/oven.jpg":
/*!******************************!*\
  !*** ./dist/assets/oven.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb19173c36bf64546ef8.jpg";

/***/ }),

/***/ "./dist/assets/titleFont.ttf":
/*!***********************************!*\
  !*** ./dist/assets/titleFont.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3786d92fa7ccb28a095f.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_introPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/introPage */ "./src/components/introPage.js");


const content = document.getElementById('content');

content.appendChild((0,_components_introPage__WEBPACK_IMPORTED_MODULE_1__.renderIntroPage)());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sV0FBVyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFB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Q0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7OztBQ3JCb0I7QUFDcUM7QUFDekQ7O0FBRUEsb0JBQW9CLHNFQUFlLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9hYm91dFVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2J1dHRvbkNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY2xlYXJQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9pbnRyb1BhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51SXRlbUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL3JlbmRlckdpdGh1YkxvZ28uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvcmVuZGVyTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvZGlzdC9hc3NldHMvdGl0bGVGb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9kaXN0L2Fzc2V0cy9vdmVuLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDU1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZW0gMWVtIDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICB9XFxuXFxuICAuaW50cm9QYWdlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWFpblRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA5ZW07XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICB9XFxuXFxuICAubG9nb0RpdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYm90dG9tOiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgfVxcblxcbiAgLmxvZ29EaXY6aG92ZXJ7XFxuICAgIHNjYWxlOiAxLjI7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICB9XFxuXFxuICAubG9nb0ltZ3tcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAubG9nb1RleHR7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBmb250LXNpemU6IDEuMDVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjM2KTtcXG4gIH1cXG5cXG4gICNlbnRlckJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDIwJSAyMCUgMCU7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuICAvKi9Ib21lLyovXFxuXFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5ob21lRmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5ob21lSW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICB3aWR0aDogMjBlbTtcXG4gIH1cXG5cXG4gIC5ob21lSW1nQ2FwdGlvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeToga2FzaGlkYTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC8qL01lbnUvKi9cXG5cXG4gIC5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAubWVudUl0ZW1zIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudUl0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkxLCA5MSwgMC41MTQpO1xcbiAgfVxcblxcbiAgLml0ZW1JbWcge1xcbiAgICBoZWlnaHQ6IDllbTtcXG4gICAgd2lkdGg6IDllbTtcXG4gIH1cXG5cXG4gIC5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XFxuICB9XFxuXFxuICAvKi9Db250YWN0LyovXFxuXFxuICAuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICB3aWR0aDogMjVlbTtcXG4gIH1cXG5cXG4gIC8qL0Fib3V0IFVzLyovXFxuXFxuICAuYWJvdXRVcyB7XFxuICAgIHdpZHRoOiAzMGVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuXFxuICAuYWJvdXRVc0ltZyB7XFxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDBlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcblxcbiAgLyovYW5pbWF0aW9ucy8qL1xcblxcbiAgLmFuaW1hdGVkUmVuZGVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJlbmRlckFuaW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcmVuZGVyQW5pbSB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHNjYWxlOiAwO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBlbTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHNjYWxlOiAxO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXG5cXG4gIGJvZHkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1NSU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGVtIDFlbSAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgfVxcblxcbiAgLmludHJvUGFnZSB7XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gIH1cXG5cXG4gIC5tYWluVGl0bGUge1xcbiAgICBmb250LXNpemU6IDllbTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC5sb2dvRGl2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3R0b206IDFlbTtcXG4gICAgcmlnaHQ6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICB9XFxuXFxuICAubG9nb0Rpdjpob3ZlcntcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gIH1cXG5cXG4gIC5sb2dvSW1ne1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5sb2dvVGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC42MzYpO1xcbiAgfVxcblxcbiAgI2VudGVyQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gIC8qL0hvbWUvKi9cXG5cXG4gIC5ob21lIHtcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuaG9tZUZpZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuaG9tZUltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJSAwJSAwJSAyJTtcXG4gICAgd2lkdGg6IDIwZW07XFxuICB9XFxuXFxuICAuaG9tZUltZ0NhcHRpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB0ZXh0LWp1c3RpZnk6IGthc2hpZGE7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAyMGVtO1xcbiAgICBoZWlnaHQ6IDMwZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkxLCA5MSwgMC41MTQpO1xcbiAgfVxcblxcbiAgLyovTWVudS8qL1xcblxcbiAgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtcyB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MSwgOTEsIDAuNTE0KTtcXG4gIH1cXG5cXG4gIC5pdGVtSW1nIHtcXG4gICAgaGVpZ2h0OiA5ZW07XFxuICAgIHdpZHRoOiA5ZW07XFxuICB9XFxuXFxuICAuaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgfVxcblxcbiAgLyovQ29udGFjdC8qL1xcblxcbiAgLmNvbnRhY3Qge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgd2lkdGg6IDI1ZW07XFxuICB9XFxuXFxuICAvKi9BYm91dCBVcy8qL1xcblxcbiAgLmFib3V0VXMge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIHdpZHRoOiAzMGVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmFib3V0VXNJbWcge1xcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAwZW07XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG5cXG5cXG4gIC8qL2FuaW1hdGlvbnMvKi9cXG5cXG4gIC5hbmltYXRlZFJlbmRlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByZW5kZXJBbmltO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJlbmRlckFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBzY2FsZTogMDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDIwZW07XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBzY2FsZTogMTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMGVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTUlO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGVtIDFlbSAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgfVxcblxcbiAgLmludHJvUGFnZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1haW5UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgfVxcbiAgXFxuICAubG9nb0RpdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYm90dG9tOiAxZW07XFxuICAgIHJpZ2h0OiAxZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBvcGFjaXR5OiAwLjU7XFxuICB9XFxuXFxuICAubG9nb0Rpdjpob3ZlcntcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG5cXG4gIC5sb2dvSW1ne1xcbiAgICB3aWR0aDogMS4zZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmxvZ29UZXh0e1xcbiAgICBwYWRkaW5nLWxlZnQ6IDAuM2VtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZm9udC1zaXplOiAxLjA1ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjYzNik7XFxuICB9XFxuXFxuICAjZW50ZXJCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBoZWlnaHQ6IDRlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgLyovSG9tZS8qL1xcblxcbiAgLmhvbWUge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5ob21lRmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5ob21lSW1nIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuICAuaG9tZUltZ0NhcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeToga2FzaGlkYTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAvKi9NZW51LyovXFxuXFxuICAubWVudSB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAubWVudUl0ZW1zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MSwgOTEsIDAuNTE0KTtcXG4gIH1cXG5cXG4gIC5pdGVtSW1nIHtcXG4gICAgaGVpZ2h0OiA5ZW07XFxuICAgIHdpZHRoOiA5ZW07XFxuICB9XFxuXFxuICAuaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgfVxcblxcbiAgLyovQ29udGFjdC8qL1xcblxcbiAgLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAvKi9BYm91dCBVcy8qL1xcblxcbiAgLmFib3V0VXMge1xcbiAgICB3aWR0aDogMjNlbTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgfVxcblxcbiAgLmFib3V0VXNJbWcge1xcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAwZW07XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG5cXG5cXG4gIC8qL2FuaW1hdGlvbnMvKi9cXG5cXG4gIC5hbmltYXRlZFJlbmRlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByZW5kZXJBbmltO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJlbmRlckFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBzY2FsZTogMDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDIwZW07XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBzY2FsZTogMTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMGVtO1xcbiAgICB9XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQW9DO0FBQ3RDOzs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1oseURBQTRDO0lBQzVDLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsc0JBQXNC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Q3pDLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUEsYUFBYTs7RUFFYjtJQUNFLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7RUFDYjs7O0VBR0EsZUFBZTs7RUFFZjtJQUNFLDBCQUEwQjtJQUMxQix3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRTtNQUNFLFVBQVU7TUFDVixRQUFRO01BQ1Isa0JBQWtCO01BQ2xCLG9CQUFvQjtJQUN0Qjs7SUFFQTtNQUNFLFVBQVU7TUFDVixRQUFRO01BQ1IsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtFQUNGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgc3JjOiB1cmwoL2Rpc3QvYXNzZXRzL3RpdGxlRm9udC50dGYpO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvZGlzdC9hc3NldHMvb3Zlbi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDQwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRlbSAxZW0gMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIH1cXG5cXG4gIC5pbnRyb1BhZ2Uge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tYWluVGl0bGUge1xcbiAgICBmb250LXNpemU6IDllbTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC5sb2dvRGl2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3R0b206IDFlbTtcXG4gICAgcmlnaHQ6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICB9XFxuXFxuICAubG9nb0Rpdjpob3ZlcntcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gIH1cXG5cXG4gIC5sb2dvSW1ne1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5sb2dvVGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC42MzYpO1xcbiAgfVxcblxcbiAgI2VudGVyQnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMCUgMjAlIDIwJSAwJTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gIC8qL0hvbWUvKi9cXG5cXG4gIC5ob21lIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaG9tZVRpdGxlIHtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLmhvbWVGaWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmhvbWVJbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxuICAgIHdpZHRoOiAyMGVtO1xcbiAgfVxcblxcbiAgLmhvbWVJbWdDYXB0aW9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgdGV4dC1qdXN0aWZ5OiBrYXNoaWRhO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMjBlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLyovTWVudS8qL1xcblxcbiAgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51VGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbXMge1xcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBoZWlnaHQ6IDE1ZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTEsIDkxLCAwLjUxNCk7XFxuICB9XFxuXFxuICAuaXRlbUltZyB7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogOWVtO1xcbiAgfVxcblxcbiAgLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gIH1cXG5cXG4gIC8qL0NvbnRhY3QvKi9cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIHdpZHRoOiAyNWVtO1xcbiAgfVxcblxcbiAgLyovQWJvdXQgVXMvKi9cXG5cXG4gIC5hYm91dFVzIHtcXG4gICAgd2lkdGg6IDMwZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gIH1cXG5cXG4gIC5hYm91dFVzSW1nIHtcXG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMGVtO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuXFxuICAvKi9hbmltYXRpb25zLyovXFxuXFxuICAuYW5pbWF0ZWRSZW5kZXIge1xcbiAgICBhbmltYXRpb24tbmFtZTogcmVuZGVyQW5pbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByZW5kZXJBbmltIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgc2NhbGU6IDA7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMGVtO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgc2NhbGU6IDE7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDBlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcblxcbiAgYm9keSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2Fzc2V0cy9vdmVuLmpwZyk7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1NSU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNDAlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGVtIDFlbSAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgfVxcblxcbiAgLmludHJvUGFnZSB7XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gIH1cXG5cXG4gIC5tYWluVGl0bGUge1xcbiAgICBmb250LXNpemU6IDllbTtcXG4gIH1cXG5cXG4gIC5uYXZiYXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC5sb2dvRGl2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBib3R0b206IDFlbTtcXG4gICAgcmlnaHQ6IDFlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICB9XFxuXFxuICAubG9nb0Rpdjpob3ZlcntcXG4gICAgc2NhbGU6IDEuMjtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gIH1cXG5cXG4gIC5sb2dvSW1ne1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5sb2dvVGV4dHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC42MzYpO1xcbiAgfVxcblxcbiAgI2VudGVyQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gIC8qL0hvbWUvKi9cXG5cXG4gIC5ob21lIHtcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuaG9tZUZpZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxuXFxuICAuaG9tZUltZyB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJSAwJSAwJSAyJTtcXG4gICAgd2lkdGg6IDIwZW07XFxuICB9XFxuXFxuICAuaG9tZUltZ0NhcHRpb24ge1xcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB0ZXh0LWp1c3RpZnk6IGthc2hpZGE7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIHdpZHRoOiAyMGVtO1xcbiAgICBoZWlnaHQ6IDMwZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkxLCA5MSwgMC41MTQpO1xcbiAgfVxcblxcbiAgLyovTWVudS8qL1xcblxcbiAgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtcyB7XFxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MSwgOTEsIDAuNTE0KTtcXG4gIH1cXG5cXG4gIC5pdGVtSW1nIHtcXG4gICAgaGVpZ2h0OiA5ZW07XFxuICAgIHdpZHRoOiA5ZW07XFxuICB9XFxuXFxuICAuaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgfVxcblxcbiAgLyovQ29udGFjdC8qL1xcblxcbiAgLmNvbnRhY3Qge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gIH1cXG5cXG4gIC5tYXAge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgd2lkdGg6IDI1ZW07XFxuICB9XFxuXFxuICAvKi9BYm91dCBVcy8qL1xcblxcbiAgLmFib3V0VXMge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIHdpZHRoOiAzMGVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLmFib3V0VXNJbWcge1xcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAwZW07XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG5cXG5cXG4gIC8qL2FuaW1hdGlvbnMvKi9cXG5cXG4gIC5hbmltYXRlZFJlbmRlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByZW5kZXJBbmltO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJlbmRlckFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBzY2FsZTogMDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDIwZW07XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBzY2FsZTogMTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMGVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgYm9keSB7XFxuICAgIG1hcmdpbjogMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvZGlzdC9hc3NldHMvb3Zlbi5qcGcpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDU1JTtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRlbSAxZW0gMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIH1cXG5cXG4gIC5pbnRyb1BhZ2Uge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tYWluVGl0bGUge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gIH1cXG4gIFxcbiAgLmxvZ29EaXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJvdHRvbTogMWVtO1xcbiAgICByaWdodDogMWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcblxcbiAgLmxvZ29EaXY6aG92ZXJ7XFxuICAgIHNjYWxlOiAxLjI7XFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuXFxuICAubG9nb0ltZ3tcXG4gICAgd2lkdGg6IDEuM2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5sb2dvVGV4dHtcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjNlbTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC42MzYpO1xcbiAgfVxcblxcbiAgI2VudGVyQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gIC8qL0hvbWUvKi9cXG5cXG4gIC5ob21lIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob21lVGl0bGUge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuaG9tZUZpZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaG9tZUltZyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcbiAgLmhvbWVJbWdDYXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB0ZXh0LWp1c3RpZnk6IGthc2hpZGE7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLyovTWVudS8qL1xcblxcbiAgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBoZWlnaHQ6IDE1ZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTEsIDkxLCAwLjUxNCk7XFxuICB9XFxuXFxuICAuaXRlbUltZyB7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogOWVtO1xcbiAgfVxcblxcbiAgLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gIH1cXG5cXG4gIC8qL0NvbnRhY3QvKi9cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLyovQWJvdXQgVXMvKi9cXG5cXG4gIC5hYm91dFVzIHtcXG4gICAgd2lkdGg6IDIzZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDNlbTtcXG4gIH1cXG5cXG4gIC5hYm91dFVzSW1nIHtcXG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMGVtO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuXFxuICAvKi9hbmltYXRpb25zLyovXFxuXFxuICAuYW5pbWF0ZWRSZW5kZXIge1xcbiAgICBhbmltYXRpb24tbmFtZTogcmVuZGVyQW5pbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByZW5kZXJBbmltIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgc2NhbGU6IDA7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMGVtO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgc2NhbGU6IDE7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDBlbTtcXG4gICAgfVxcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY2xlYXJQYWdlIH0gZnJvbSAnLi9jbGVhclBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWJvdXRVcygpe1xuICBjbGVhclBhZ2UoJ2Fib3V0VXMnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgYWJvdXRVc0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBhYm91dFVzVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcycpO1xuICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkUmVuZGVyJyk7XG4gIGFib3V0VXNJbWcuY2xhc3NMaXN0LmFkZCgnYWJvdXRVc0ltZycpO1xuICBhYm91dFVzVHh0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0VXNUeHQnKVxuXG4gIGFib3V0VXNJbWcuc3JjID0gJy4vYXNzZXRzL2Fib3V0VXMucG5nJztcbiAgYWJvdXRVc1R4dC5pbm5lckhUTUwgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJyArXG4gICdhZGlwaXNjaW5nIGVsaXQuIFF1aXNxdWUgZGlnbmlzc2ltIGVzdCB2ZWwgZGlhbSBlZmZpY2l0dXIgcG9ydHRpdG9yLiBDdXJhYml0dXInICtcbiAgJ2Nvbmd1ZSBpbiBxdWFtIGEgcmhvbmN1cy4gTWF1cmlzIGdyYXZpZGEgc2l0IGFtZXQgZXggdXQgc2NlbGVyaXNxdWUuJyArXG4gICdEb25lYyBhbGlxdWFtIGxlbyBldCBncmF2aWRhIHVsbGFtY29ycGVyLiBEb25lYyB1dCBzYXBpZW4gbWFnbmEuIFByb2luJyArXG4gICdpbXBlcmRpZXQgbnVsbGEgbWFzc2EsIGFjIHNvZGFsZXMgbnVsbGEgdGVtcHVzIHF1aXMuIE51bmMgc2VkIHNlbSBudWxsYS4nICtcbiAgJzxicj4gPGJyPicgK1xuICAnRXRpYW0gdGluY2lkdW50IGRvbG9yIG5lYyBzY2VsZXJpc3F1ZSBjb25zZXF1YXQuIFZpdmFtdXMgbG9ib3J0aXMnICtcbiAgJ3VsbGFtY29ycGVyIGxlbywgc2l0IGFtZXQgYmxhbmRpdCBsZW8gZGFwaWJ1cyBhYy4gRG9uZWMgbWF0dGlzIG5lcXVlJyArXG4gICd2aXRhZSBmcmluZ2lsbGEgbGFvcmVldC4gTnVuYyBub24gc2FnaXR0aXMganVzdG8uIFV0IGlkIGxlbyBjb25zZXF1YXQsJyArXG4gICdwaGFyZXRyYSBlcmF0IG5vbiwgdmVoaWN1bGEgZW5pbS4gRG9uZWMgdGVtcG9yIHNlbSBpbiB0ZWxsdXMgb3JuYXJlIHJ1dHJ1bS4nICtcbiAgJ1BlbGxlbnRlc3F1ZSBpZCBlcm9zIGV1IHJpc3VzIHVsbGFtY29ycGVyIHRpbmNpZHVudC4gTnVsbGFtIG1hc3NhIGRvbG9yLCcgK1xuICAnYWxpcXVhbSB2ZWwgdnVscHV0YXRlIGF0LCB2YXJpdXMgYXVjdG9yIHF1YW0uICc7XG5cbiAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzSW1nKTtcbiAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzVHh0KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXMpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBidXR0b25DcmVhdG9yICh0ZXh0LCBpZCwgYWN0aW9uKXtcbiAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidXR0b24udGV4dENvbnRlbnQgPSB0ZXh0O1xuICBidXR0b24uc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWN0aW9uKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUGFnZShjdXJyZW50Q29udGVudCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgdG9CZVJlbW92ZWQgPSBbXTtcbiAgdG9CZVJlbW92ZWQucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdob21lJylbMF0pO1xuICB0b0JlUmVtb3ZlZC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21lbnUnKVswXSk7XG4gIHRvQmVSZW1vdmVkLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY29udGFjdCcpWzBdKTtcbiAgdG9CZVJlbW92ZWQucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhYm91dFVzJylbMF0pO1xuXG4gIGZvciAobGV0IGkgPSB0b0JlUmVtb3ZlZC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICh0b0JlUmVtb3ZlZFtpXSAhPSB1bmRlZmluZWQgJiYgdG9CZVJlbW92ZWRbaV0gIT0gY3VycmVudENvbnRlbnQpID9cbiAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodG9CZVJlbW92ZWRbaV0pIDogKCkgPT4geyB9O1xuICB9XG59IiwiaW1wb3J0IHsgY2xlYXJQYWdlIH0gZnJvbSAnLi9jbGVhclBhZ2UnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQ29udGFjdCgpe1xuICBjbGVhclBhZ2UoJ2NvbnRhY3QnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAnKTtcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdhZGRyZXNzJyk7XG4gIHBob25lLmNsYXNzTGlzdC5hZGQoJ3Bob25lJyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkUmVuZGVyJyk7XG5cbiAgbWFwLnNyYyA9ICcuL2Fzc2V0cy9tYXAucG5nJztcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9ICdBZGRyZXNzOiBCbGFuY28gQ3Jvc3NpbmcnO1xuICBwaG9uZS50ZXh0Q29udGVudCA9ICdQaG9uZTogNTU1LTM3NTAnO1xuXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQobWFwKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG59XG4iLCJpbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tICcuL2NsZWFyUGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIb21lKCkge1xuICBjbGVhclBhZ2UoJ2hvbWUnKTtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBob21lRmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmlndXJlJyk7XG4gIGNvbnN0IGhvbWVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgaG9tZUltZ0NhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWdjYXB0aW9uJyk7XG5cbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gIGhvbWUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWRSZW5kZXInKTtcbiAgaG9tZVRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWVUaXRsZScpO1xuICBob21lRmlnLmNsYXNzTGlzdC5hZGQoJ2hvbWVGaWcnKTtcbiAgaG9tZUltZy5jbGFzc0xpc3QuYWRkKCdob21lSW1nJyk7XG4gIGhvbWVJbWdDYXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWVJbWdDYXB0aW9uJyk7XG5cbiAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IHBpenphcyBpbiB0b3duLCBzaW5jZSAxOTczJztcbiAgaG9tZUltZy5zcmMgPSAnLi9hc3NldHMvaG9tZUltZy5qcGcnO1xuICBob21lSW1nQ2FwdGlvbi5pbm5lckhUTUwgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJyArXG4gICAgJ2FkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWduaXNzaW0gZXN0IHZlbCBkaWFtIGVmZmljaXR1ciBwb3J0dGl0b3IuIEN1cmFiaXR1cicgK1xuICAgICdjb25ndWUgaW4gcXVhbSBhIHJob25jdXMuIE1hdXJpcyBncmF2aWRhIHNpdCBhbWV0IGV4IHV0IHNjZWxlcmlzcXVlLicgK1xuICAgICdEb25lYyBhbGlxdWFtIGxlbyBldCBncmF2aWRhIHVsbGFtY29ycGVyLiBEb25lYyB1dCBzYXBpZW4gbWFnbmEuIFByb2luJyArXG4gICAgJ2ltcGVyZGlldCBudWxsYSBtYXNzYSwgYWMgc29kYWxlcyBudWxsYSB0ZW1wdXMgcXVpcy4gTnVuYyBzZWQgc2VtIG51bGxhLicgK1xuICAgICc8YnI+IDxicj4nICtcbiAgICAnRXRpYW0gdGluY2lkdW50IGRvbG9yIG5lYyBzY2VsZXJpc3F1ZSBjb25zZXF1YXQuIFZpdmFtdXMgbG9ib3J0aXMnICtcbiAgICAndWxsYW1jb3JwZXIgbGVvLCBzaXQgYW1ldCBibGFuZGl0IGxlbyBkYXBpYnVzIGFjLiBEb25lYyBtYXR0aXMgbmVxdWUnICtcbiAgICAndml0YWUgZnJpbmdpbGxhIGxhb3JlZXQuIE51bmMgbm9uIHNhZ2l0dGlzIGp1c3RvLiBVdCBpZCBsZW8gY29uc2VxdWF0LCcgK1xuICAgICdwaGFyZXRyYSBlcmF0IG5vbiwgdmVoaWN1bGEgZW5pbS4gRG9uZWMgdGVtcG9yIHNlbSBpbiB0ZWxsdXMgb3JuYXJlIHJ1dHJ1bS4nICtcbiAgICAnUGVsbGVudGVzcXVlIGlkIGVyb3MgZXUgcmlzdXMgdWxsYW1jb3JwZXIgdGluY2lkdW50LiBOdWxsYW0gbWFzc2EgZG9sb3IsJyArXG4gICAgJ2FsaXF1YW0gdmVsIHZ1bHB1dGF0ZSBhdCwgdmFyaXVzIGF1Y3RvciBxdWFtLiAnO1xuXG4gIGhvbWVGaWcuYXBwZW5kQ2hpbGQoaG9tZUltZyk7XG4gIGhvbWVGaWcuYXBwZW5kQ2hpbGQoaG9tZUltZ0NhcHRpb24pO1xuICBob21lLmFwcGVuZENoaWxkKGhvbWVUaXRsZSk7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZUZpZyk7XG4gIFxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWUpO1xufSIsImltcG9ydCB7IGJ1dHRvbkNyZWF0b3IgfSBmcm9tICcuL2J1dHRvbkNyZWF0b3InO1xuaW1wb3J0IHsgcmVuZGVyVGl0bGUgfSBmcm9tICcuL3RpdGxlJztcbmltcG9ydCB7IHJlbmRlck1haW5QYWdlIH0gZnJvbSAnLi9yZW5kZXJNYWluUGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJJbnRyb1BhZ2UoKSB7XG4gIGNvbnN0IGludHJvUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCB0aXRsZSA9IHJlbmRlclRpdGxlKCk7XG4gIGNvbnN0IGVudGVyQnV0dG9uID0gYnV0dG9uQ3JlYXRvcignPj4+JywgJ2VudGVyQnV0dG9uJywgKCkgPT4geyByZW5kZXJNYWluUGFnZSgpIH0pO1xuXG4gIGludHJvUGFnZS5jbGFzc0xpc3QuYWRkKCdpbnRyb1BhZ2UnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnbWFpblRpdGxlJyk7XG5cbiAgaW50cm9QYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgaW50cm9QYWdlLmFwcGVuZENoaWxkKGVudGVyQnV0dG9uKTtcblxuICByZXR1cm4gaW50cm9QYWdlO1xufSIsImltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gJy4vY2xlYXJQYWdlJztcbmltcG9ydCB7IG1lbnVJdGVtQ3JlYXRvciB9IGZyb20gJy4vbWVudUl0ZW1DcmVhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGNsZWFyUGFnZSgnbWVudScpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51QXJyYXkgPSBbXTtcblxuICBtZW51QXJyYXkucHVzaChtZW51SXRlbUNyZWF0b3JcbiAgICAoJ0NoZWVzZSBQaXp6YScsICcuL2Fzc2V0cy9jaGVlc2VQaXp6YS5wbmcnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJykpO1xuICBtZW51QXJyYXkucHVzaChtZW51SXRlbUNyZWF0b3JcbiAgICAoJ1BlcHBlcm9uaSBQaXp6YScsICcuL2Fzc2V0cy9wZXBwZXJvbmlQaXp6YS5wbmcnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJykpO1xuICBtZW51QXJyYXkucHVzaChtZW51SXRlbUNyZWF0b3JcbiAgICAoJ01lYXQgJiBPbGl2ZXMgUGl6emEnLCAnLi9hc3NldHMvbWVhdE9saXZlUGl6emEucG5nJywgJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1cicpKTtcbiAgbWVudUFycmF5LnB1c2gobWVudUl0ZW1DcmVhdG9yXG4gICAgKCdSb2NrZXQgJiB0b21hdG9lcyBwaXp6YScsICcuL2Fzc2V0cy9yb2NrZXRQaXp6YS5wbmcnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJykpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkUmVuZGVyJyk7XG4gIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51VGl0bGUnKTtcbiAgbWVudUl0ZW1zLmNsYXNzTGlzdC5hZGQoJ21lbnVJdGVtcycpO1xuXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdPdXIgcGl6emEgc2VsZWN0aW9uJztcblxuICBmb3IgKGxldCBpID0gbWVudUFycmF5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgbWVudUl0ZW1zLmFwcGVuZENoaWxkKG1lbnVBcnJheVtpXSk7XG4gIH1cblxuICBtZW51LmFwcGVuZENoaWxkKG1lbnVUaXRsZSk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudUl0ZW1zKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBtZW51SXRlbUNyZWF0b3IobmFtZSwgdXJsLCBkZXNjcmlwdGlvbil7XG4gIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGl0ZW1JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgbGV0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICBpdGVtSW1nLnNyYyA9IHVybDtcbiAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbU5hbWUnKTtcbiAgaXRlbUltZy5jbGFzc0xpc3QuYWRkKCdpdGVtSW1nJyk7XG4gIGl0ZW1EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtRGVzY3JpcHRpb24nKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW0nKTtcbiAgXG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG4gIHJldHVybiBtZW51SXRlbTtcbn0iLCJpbXBvcnQgeyBidXR0b25DcmVhdG9yIH0gZnJvbSAnLi9idXR0b25DcmVhdG9yJztcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgcmVuZGVyTWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyByZW5kZXJDb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcbmltcG9ydCB7IHJlbmRlckFib3V0VXMgfSBmcm9tICcuL2Fib3V0VXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmF2YmFyKCkge1xuICBjb25zdCBob21lQnRuID0gYnV0dG9uQ3JlYXRvcignSG9tZScsICdob21lQnRuJywgKCkgPT4geyByZW5kZXJIb21lKCkgfSk7XG4gIGNvbnN0IG1lbnVCdG4gPSBidXR0b25DcmVhdG9yKCdNZW51JywgJ21lbnVCdG4nLCAoKSA9PiB7IHJlbmRlck1lbnUoKSB9KVxuICBjb25zdCBjb250YWN0QnRuID0gYnV0dG9uQ3JlYXRvcignQ29udGFjdCcsICdjb250YWN0QnRuJywgKCkgPT4geyByZW5kZXJDb250YWN0KCkgfSk7XG4gIGNvbnN0IGFib3V0VXNCdG4gPSBidXR0b25DcmVhdG9yKCdBYm91dCB1cycsICdhYm91dFVzQnRuJywgKCkgPT4geyByZW5kZXJBYm91dFVzKCkgfSlcblxuICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZUJ0bik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoYWJvdXRVc0J0bik7XG4gIHJldHVybiBuYXZiYXI7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckdpdGh1YkxvZ28oKXtcbiAgY29uc3QgbG9nb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBsb2dvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBsb2dvTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcblxuICBsb2dvSW1nLmNsYXNzTGlzdC5hZGQoJ2xvZ29JbWcnKTtcbiAgbG9nb1RleHQuY2xhc3NMaXN0LmFkZCgnbG9nb1RleHQnKTtcbiAgbG9nb0Rpdi5jbGFzc0xpc3QuYWRkKCdsb2dvRGl2Jyk7XG5cbiAgbG9nb0ltZy5zcmMgPSAnLi9hc3NldHMvZ2l0aHViTG9nby5zdmcnO1xuICBsb2dvVGV4dC50ZXh0Q29udGVudCA9ICdKUEMgMjAyMic7XG4gIGxvZ29MaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0p1YW5QZWRyb0Nhc2FuYXMvcmVzdGF1cmFudC1wYWdlJztcblxuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICBsb2dvRGl2LmFwcGVuZENoaWxkKGxvZ29UZXh0KTtcbiAgbG9nb0xpbmsuYXBwZW5kQ2hpbGQobG9nb0Rpdik7XG5cbiAgcmV0dXJuIGxvZ29MaW5rO1xufSIsImltcG9ydCB7IHJlbmRlclRpdGxlIH0gZnJvbSAnLi90aXRsZSc7XG5pbXBvcnQgeyByZW5kZXJOYXZiYXIgfSBmcm9tICcuL25hdmJhcic7XG5pbXBvcnQgeyByZW5kZXJHaXRodWJMb2dvIH0gZnJvbSAnLi9yZW5kZXJHaXRodWJMb2dvJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlck1haW5QYWdlKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaW50cm9QYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW50cm9QYWdlJylbMF07XG4gIGNvbnN0IG5hdmJhciA9IHJlbmRlck5hdmJhcigpO1xuICBjb25zdCB0aXRsZSA9IHJlbmRlclRpdGxlKCk7XG4gIGNvbnN0IGdoTG9nbyA9IHJlbmRlckdpdGh1YkxvZ28oKTtcbiAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGludHJvUGFnZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2hMb2dvKTtcbiAgICBjb250ZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gIH0sIDEwMDApO1xufSIsImV4cG9ydCBmdW5jdGlvbiByZW5kZXJUaXRsZSgpIHtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgRWwgQ2FuY2hlcm8ncyBQaXp6ZXJpYWA7XG4gIHJldHVybiB0aXRsZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgeyByZW5kZXJJbnRyb1BhZ2UgfSBmcm9tICcuL2NvbXBvbmVudHMvaW50cm9QYWdlJztcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKHJlbmRlckludHJvUGFnZSgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=