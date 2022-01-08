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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: titleFont;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n\n@media (min-width: 900px) {\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-right: 0.5em;\n    justify-self: center;\n    align-self: center;\n    font-size: 2em;\n    width: 5em;\n    height: 100%;\n    border-radius: 0% 20% 20% 0%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 1em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 1em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900) {\n\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    margin: 0%;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    padding: 1em;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 2em;\n    font-size: 5em;\n    width: 100%;\n    height: 100%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 4em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2% 0% 0% 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-top: 1em;\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    height: 30em;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    margin-top: 4em;\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (max-width: 600px) {\n  body {\n    justify-content: center;\n    align-content: center;\n    margin: 0%;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 4em;\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 1em;\n    row-gap: 1em;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 3em;\n    justify-self: center;\n    align-self: center;\n    font-size: 3em;\n    width: 4em;\n    height: 4em;\n    border-radius: 20%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 2em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .homeImg {\n    justify-self: center;\n    align-self: center;\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 15em;\n    float: left;\n  }\n\n  .homeImgCaption {\n    margin-top: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    height: 100%;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 2em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    margin-bottom: 1em;\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 3em;\n  }\n\n  .map {\n    align-self: center;\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 100%;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 23em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 3em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 10em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: titleFont;\n  src: url(/dist/assets/titleFont.ttf);\n}\n\n\n@media (min-width: 900px) {\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(/dist/assets/oven.jpg);\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-right: 0.5em;\n    justify-self: center;\n    align-self: center;\n    font-size: 2em;\n    width: 5em;\n    height: 100%;\n    border-radius: 0% 20% 20% 0%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 1em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 1em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900) {\n\n  body {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(/dist/assets/oven.jpg);\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n    overflow: hidden;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    margin: 0%;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    justify-items: center;\n    align-items: center;\n    padding: 1em;\n  }\n\n  .mainTitle {\n    font-size: 9em;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr;\n    column-gap: 1em;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 2em;\n    font-size: 5em;\n    width: 100%;\n    height: 100%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 4em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: row;\n  }\n\n  .homeImg {\n    border: 2px solid white;\n    border-radius: 2% 0% 0% 2%;\n    width: 20em;\n  }\n\n  .homeImgCaption {\n    padding-top: 1em;\n    padding-left: 1em;\n    padding-right: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    width: 20em;\n    height: 30em;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    margin-top: 4em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n  }\n\n  .map {\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 25em;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    margin-top: 4em;\n    width: 30em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 15em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}\n\n@media (max-width: 600px) {\n  body {\n    justify-content: center;\n    align-content: center;\n    margin: 0%;\n    width: 100%;\n    height: 100%;\n    background-image: url(/dist/assets/oven.jpg);\n    background: no-repeat cover;\n    background-position-x: 55%;\n    background-position-y: 40%;\n  }\n\n  #content {\n    margin-top: 1.5em;\n    justify-content: center;\n    align-content: center;\n    transition: 1s;\n    display: grid;\n    justify-items: center;\n    grid-template-columns: 1fr;\n    grid-template-rows: 4em 1em 1fr;\n    row-gap: 1em;\n  }\n\n  .title {\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-size: 1.8em;\n    font-family: titleFont;\n  }\n\n  .introPage {\n    grid-row-start: 1;\n    grid-row-end: 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .mainTitle {\n    font-size: 4em;\n    align-self: center;\n    justify-self: center;\n    text-align: center;\n  }\n\n  .navbar {\n    opacity: 1;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    column-gap: 1em;\n    row-gap: 1em;\n  }\n\n  button {\n    transition: 0.3s;\n    text-align: center;\n    width: 10em;\n    font-size: 1.05em;\n    border: none;\n    color: white;\n    text-shadow: black 2px 2px 1px;\n    font-weight: bolder;\n    border-radius: 5%;\n    background-color: rgba(255, 255, 0, 0.636);\n  }\n\n  #enterButton {\n    margin-top: 3em;\n    justify-self: center;\n    align-self: center;\n    font-size: 3em;\n    width: 4em;\n    height: 4em;\n    border-radius: 20%;\n  }\n\n  button:hover {\n    transition: 0.3s;\n    cursor: pointer;\n    background-color: rgb(255, 255, 0);\n    color: black;\n    text-shadow: none;\n  }\n\n  /*/Home/*/\n\n  .home {\n    margin-top: 2em;\n    width: 100%;\n    height: 100%;\n    font-family: Arial, Helvetica, sans-serif;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .homeTitle {\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.2em;\n    color: white;\n    font-weight: bold;\n  }\n\n  .homeFig {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .homeImg {\n    justify-self: center;\n    align-self: center;\n    border: 2px solid white;\n    border-radius: 2%;\n    width: 15em;\n    float: left;\n  }\n\n  .homeImgCaption {\n    margin-top: 1em;\n    text-align: justify;\n    text-justify: kashida;\n    align-self: flex-start;\n    height: 100%;\n    color: white;\n  }\n\n  /*/Menu/*/\n\n  .menu {\n    margin-top: 2em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    text-align: center;\n  }\n\n  .menuTitle {\n    font-size: 1.2em;\n    font-weight: bold;\n  }\n\n  .menuItems {\n    margin-bottom: 1em;\n    padding-top: 0.5em;\n    justify-self: center;\n    align-self: center;\n    display: grid;\n    grid-template-columns: 1fr;\n    row-gap: 1em;\n    column-gap: 1em;\n    justify-items: center;\n    align-items: center;\n  }\n\n  .menuItem {\n    font-size: 1.1em;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n    width: 15em;\n    height: 15em;\n    border: 3px solid gold;\n    border-radius: 5%;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(92, 91, 91, 0.514);\n  }\n\n  .itemImg {\n    height: 9em;\n    width: 9em;\n  }\n\n  .itemDescription {\n    text-shadow: none;\n    font-weight: 400;\n    font-size: 0.95em;\n  }\n\n  /*/Contact/*/\n\n  .contact {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    text-shadow: black 1px 1px 1px;\n    font-size: 1.5em;\n    margin-top: 3em;\n  }\n\n  .map {\n    align-self: center;\n    border: 2px solid gold;\n    border-radius: 5%;\n    width: 100%;\n  }\n\n  /*/About Us/*/\n\n  .aboutUs {\n    width: 23em;\n    font-family: Arial, Helvetica, sans-serif;\n    color: white;\n    margin-top: 3em;\n  }\n\n  .aboutUsImg {\n    padding: 1em 1em 1em 0em;\n    width: 10em;\n    float: left;\n  }\n\n\n  /*/animations/*/\n\n  .animatedRender {\n    animation-name: renderAnim;\n    animation-duration: 0.5s;\n  }\n\n  @keyframes renderAnim {\n    0% {\n      opacity: 0;\n      scale: 0;\n      padding-left: 20em;\n      padding-bottom: 20em;\n    }\n\n    100% {\n      opacity: 1;\n      scale: 1;\n      padding-left: 0em;\n      padding-bottom: 0em;\n    }\n  }\n}"],"sourceRoot":""}]);
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



function renderMainPage() {
  const content = document.getElementById('content');
  const introPage = document.getElementsByClassName('introPage')[0];
  const navbar = (0,_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNavbar)();
  const title = (0,_title__WEBPACK_IMPORTED_MODULE_0__.renderTitle)();
  content.style.opacity = '0';
  setTimeout(() => {
    content.removeChild(introPage);
    content.appendChild(title);
    content.appendChild(navbar);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxXQUFXLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLFdBQVcsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0s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QkFBb0Isc0VBQWUsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYnV0dG9uQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jbGVhclBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2ludHJvUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL21lbnVJdGVtQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvcmVuZGVyTWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvZGlzdC9hc3NldHMvdGl0bGVGb250LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9kaXN0L2Fzc2V0cy9vdmVuLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgYm9keSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDU1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZW0gMWVtIDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICB9XFxuXFxuICAuaW50cm9QYWdlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWFpblRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA5ZW07XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBmb250LXNpemU6IDEuMDVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjM2KTtcXG4gIH1cXG5cXG4gICNlbnRlckJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDIwJSAyMCUgMCU7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuICAvKi9Ib21lLyovXFxuXFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5ob21lRmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5ob21lSW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICB3aWR0aDogMjBlbTtcXG4gIH1cXG5cXG4gIC5ob21lSW1nQ2FwdGlvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeToga2FzaGlkYTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC8qL01lbnUvKi9cXG5cXG4gIC5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAubWVudUl0ZW1zIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudUl0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkxLCA5MSwgMC41MTQpO1xcbiAgfVxcblxcbiAgLml0ZW1JbWcge1xcbiAgICBoZWlnaHQ6IDllbTtcXG4gICAgd2lkdGg6IDllbTtcXG4gIH1cXG5cXG4gIC5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XFxuICB9XFxuXFxuICAvKi9Db250YWN0LyovXFxuXFxuICAuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICB3aWR0aDogMjVlbTtcXG4gIH1cXG5cXG4gIC8qL0Fib3V0IFVzLyovXFxuXFxuICAuYWJvdXRVcyB7XFxuICAgIHdpZHRoOiAzMGVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuXFxuICAuYWJvdXRVc0ltZyB7XFxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDBlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcblxcbiAgLyovYW5pbWF0aW9ucy8qL1xcblxcbiAgLmFuaW1hdGVkUmVuZGVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJlbmRlckFuaW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcmVuZGVyQW5pbSB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHNjYWxlOiAwO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBlbTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHNjYWxlOiAxO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwKSB7XFxuXFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDQwJTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRlbSAxZW0gMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIH1cXG5cXG4gIC5pbnRyb1BhZ2Uge1xcbiAgICBtYXJnaW46IDAlO1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICB9XFxuXFxuICAubWFpblRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA5ZW07XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBmb250LXNpemU6IDEuMDVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjM2KTtcXG4gIH1cXG5cXG4gICNlbnRlckJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgZm9udC1zaXplOiA1ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuICAvKi9Ib21lLyovXFxuXFxuICAuaG9tZSB7XFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5ob21lVGl0bGUge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLmhvbWVGaWcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLmhvbWVJbWcge1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMiUgMCUgMCUgMiU7XFxuICAgIHdpZHRoOiAyMGVtO1xcbiAgfVxcblxcbiAgLmhvbWVJbWdDYXB0aW9uIHtcXG4gICAgcGFkZGluZy10b3A6IDFlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgdGV4dC1qdXN0aWZ5OiBrYXNoaWRhO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgICB3aWR0aDogMjBlbTtcXG4gICAgaGVpZ2h0OiAzMGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MSwgOTEsIDAuNTE0KTtcXG4gIH1cXG5cXG4gIC8qL01lbnUvKi9cXG5cXG4gIC5tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51VGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbXMge1xcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBoZWlnaHQ6IDE1ZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTEsIDkxLCAwLjUxNCk7XFxuICB9XFxuXFxuICAuaXRlbUltZyB7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogOWVtO1xcbiAgfVxcblxcbiAgLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gIH1cXG5cXG4gIC8qL0NvbnRhY3QvKi9cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIHdpZHRoOiAyNWVtO1xcbiAgfVxcblxcbiAgLyovQWJvdXQgVXMvKi9cXG5cXG4gIC5hYm91dFVzIHtcXG4gICAgbWFyZ2luLXRvcDogNGVtO1xcbiAgICB3aWR0aDogMzBlbTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC5hYm91dFVzSW1nIHtcXG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMGVtO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuXFxuICAvKi9hbmltYXRpb25zLyovXFxuXFxuICAuYW5pbWF0ZWRSZW5kZXIge1xcbiAgICBhbmltYXRpb24tbmFtZTogcmVuZGVyQW5pbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByZW5kZXJBbmltIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgc2NhbGU6IDA7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMGVtO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgc2NhbGU6IDE7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDBlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIGJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW46IDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogNTUlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDQwJTtcXG4gIH1cXG5cXG4gICNjb250ZW50IHtcXG4gICAgbWFyZ2luLXRvcDogMS41ZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IDFzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDRlbSAxZW0gMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICB9XFxuXFxuICAudGl0bGUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjhlbTtcXG4gICAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIH1cXG5cXG4gIC5pbnRyb1BhZ2Uge1xcbiAgICBncmlkLXJvdy1zdGFydDogMTtcXG4gICAgZ3JpZC1yb3ctZW5kOiA0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tYWluVGl0bGUge1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwZW07XFxuICAgIGZvbnQtc2l6ZTogMS4wNWVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgMC42MzYpO1xcbiAgfVxcblxcbiAgI2VudGVyQnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgd2lkdGg6IDRlbTtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIH1cXG5cXG4gIGJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAwKTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gIH1cXG5cXG4gIC8qL0hvbWUvKi9cXG5cXG4gIC5ob21lIHtcXG4gICAgbWFyZ2luLXRvcDogMmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5ob21lVGl0bGUge1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMXB4IDFweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAuaG9tZUZpZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaG9tZUltZyB7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcbiAgLmhvbWVJbWdDYXB0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICB0ZXh0LWp1c3RpZnk6IGthc2hpZGE7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgfVxcblxcbiAgLyovTWVudS8qL1xcblxcbiAgLm1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVUaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtcyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5tZW51SXRlbSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBoZWlnaHQ6IDE1ZW07XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTEsIDkxLCAwLjUxNCk7XFxuICB9XFxuXFxuICAuaXRlbUltZyB7XFxuICAgIGhlaWdodDogOWVtO1xcbiAgICB3aWR0aDogOWVtO1xcbiAgfVxcblxcbiAgLml0ZW1EZXNjcmlwdGlvbiB7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXNpemU6IDAuOTVlbTtcXG4gIH1cXG5cXG4gIC8qL0NvbnRhY3QvKi9cXG5cXG4gIC5jb250YWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgLyovQWJvdXQgVXMvKi9cXG5cXG4gIC5hYm91dFVzIHtcXG4gICAgd2lkdGg6IDIzZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDNlbTtcXG4gIH1cXG5cXG4gIC5hYm91dFVzSW1nIHtcXG4gICAgcGFkZGluZzogMWVtIDFlbSAxZW0gMGVtO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuXFxuICAvKi9hbmltYXRpb25zLyovXFxuXFxuICAuYW5pbWF0ZWRSZW5kZXIge1xcbiAgICBhbmltYXRpb24tbmFtZTogcmVuZGVyQW5pbTtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyByZW5kZXJBbmltIHtcXG4gICAgMCUge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgc2NhbGU6IDA7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAyMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMGVtO1xcbiAgICB9XFxuXFxuICAgIDEwMCUge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgc2NhbGU6IDE7XFxuICAgICAgcGFkZGluZy1sZWZ0OiAwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDBlbTtcXG4gICAgfVxcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUFvQztBQUN0Qzs7O0FBR0E7RUFDRTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLHlEQUE0QztJQUM1QywyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsa0JB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QWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQSxZQUFZOztFQUVaO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBLGFBQWE7O0VBRWI7SUFDRSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxXQUFXO0VBQ2I7OztFQUdBLGVBQWU7O0VBRWY7SUFDRSwwQkFBMEI7SUFDMUIsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsUUFBUTtNQUNSLGtCQUFrQjtNQUNsQixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxVQUFVO01BQ1YsUUFBUTtNQUNSLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7RUFDRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcXG4gIHNyYzogdXJsKC9kaXN0L2Fzc2V0cy90aXRsZUZvbnQudHRmKTtcXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvYXNzZXRzL292ZW4uanBnKTtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDU1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZW0gMWVtIDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICB9XFxuXFxuICAuaW50cm9QYWdlIHtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWFpblRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA5ZW07XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBjb2x1bW4tZ2FwOiAxZW07XFxuICB9XFxuXFxuICBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBmb250LXNpemU6IDEuMDVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAycHggMnB4IDFweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuNjM2KTtcXG4gIH1cXG5cXG4gICNlbnRlckJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAlIDIwJSAyMCUgMCU7XFxuICB9XFxuXFxuICBidXR0b246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMCk7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICB9XFxuXFxuICAvKi9Ib21lLyovXFxuXFxuICAuaG9tZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5ob21lRmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5ob21lSW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICB3aWR0aDogMjBlbTtcXG4gIH1cXG5cXG4gIC5ob21lSW1nQ2FwdGlvbiB7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeToga2FzaGlkYTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIC8qL01lbnUvKi9cXG5cXG4gIC5tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAubWVudUl0ZW1zIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudUl0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkxLCA5MSwgMC41MTQpO1xcbiAgfVxcblxcbiAgLml0ZW1JbWcge1xcbiAgICBoZWlnaHQ6IDllbTtcXG4gICAgd2lkdGg6IDllbTtcXG4gIH1cXG5cXG4gIC5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XFxuICB9XFxuXFxuICAvKi9Db250YWN0LyovXFxuXFxuICAuY29udGFjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICB3aWR0aDogMjVlbTtcXG4gIH1cXG5cXG4gIC8qL0Fib3V0IFVzLyovXFxuXFxuICAuYWJvdXRVcyB7XFxuICAgIHdpZHRoOiAzMGVtO1xcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICB9XFxuXFxuICAuYWJvdXRVc0ltZyB7XFxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDBlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcblxcbiAgLyovYW5pbWF0aW9ucy8qL1xcblxcbiAgLmFuaW1hdGVkUmVuZGVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJlbmRlckFuaW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcmVuZGVyQW5pbSB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHNjYWxlOiAwO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBlbTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHNjYWxlOiAxO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogOTAwKSB7XFxuXFxuICBib2R5IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Rpc3QvYXNzZXRzL292ZW4uanBnKTtcXG4gICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDU1JTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiA0MCU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICB9XFxuXFxuICAjY29udGVudCB7XFxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiAxcztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0ZW0gMWVtIDFmcjtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgfVxcblxcbiAgLnRpdGxlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtc2l6ZTogMS44ZW07XFxuICAgIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XFxuICB9XFxuXFxuICAuaW50cm9QYWdlIHtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDE7XFxuICAgIGdyaWQtcm93LWVuZDogNDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgfVxcblxcbiAgLm1haW5UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogOWVtO1xcbiAgfVxcblxcbiAgLm5hdmJhciB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZm9udC1zaXplOiAxLjA1ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjYzNik7XFxuICB9XFxuXFxuICAjZW50ZXJCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgLyovSG9tZS8qL1xcblxcbiAgLmhvbWUge1xcbiAgICBtYXJnaW4tdG9wOiA0ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAuaG9tZVRpdGxlIHtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5ob21lRmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5ob21lSW1nIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlIDAlIDAlIDIlO1xcbiAgICB3aWR0aDogMjBlbTtcXG4gIH1cXG5cXG4gIC5ob21lSW1nQ2FwdGlvbiB7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeToga2FzaGlkYTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgd2lkdGg6IDIwZW07XFxuICAgIGhlaWdodDogMzBlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgOTEsIDkxLCAwLjUxNCk7XFxuICB9XFxuXFxuICAvKi9NZW51LyovXFxuXFxuICAubWVudSB7XFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAubWVudUl0ZW1zIHtcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gICAgY29sdW1uLWdhcDogMWVtO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudUl0ZW0ge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgaGVpZ2h0OiAxNWVtO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTIsIDkxLCA5MSwgMC41MTQpO1xcbiAgfVxcblxcbiAgLml0ZW1JbWcge1xcbiAgICBoZWlnaHQ6IDllbTtcXG4gICAgd2lkdGg6IDllbTtcXG4gIH1cXG5cXG4gIC5pdGVtRGVzY3JpcHRpb24ge1xcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zaXplOiAwLjk1ZW07XFxuICB9XFxuXFxuICAvKi9Db250YWN0LyovXFxuXFxuICAuY29udGFjdCB7XFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgfVxcblxcbiAgLm1hcCB7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdvbGQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICB3aWR0aDogMjVlbTtcXG4gIH1cXG5cXG4gIC8qL0Fib3V0IFVzLyovXFxuXFxuICAuYWJvdXRVcyB7XFxuICAgIG1hcmdpbi10b3A6IDRlbTtcXG4gICAgd2lkdGg6IDMwZW07XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAuYWJvdXRVc0ltZyB7XFxuICAgIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDBlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgfVxcblxcblxcbiAgLyovYW5pbWF0aW9ucy8qL1xcblxcbiAgLmFuaW1hdGVkUmVuZGVyIHtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHJlbmRlckFuaW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgcmVuZGVyQW5pbSB7XFxuICAgIDAlIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHNjYWxlOiAwO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMjBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBlbTtcXG4gICAgfVxcblxcbiAgICAxMDAlIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgICAgIHNjYWxlOiAxO1xcbiAgICAgIHBhZGRpbmctbGVmdDogMGVtO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9kaXN0L2Fzc2V0cy9vdmVuLmpwZyk7XFxuICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiA1NSU7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNDAlO1xcbiAgfVxcblxcbiAgI2NvbnRlbnQge1xcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogMXM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNGVtIDFlbSAxZnI7XFxuICAgIHJvdy1nYXA6IDFlbTtcXG4gIH1cXG5cXG4gIC50aXRsZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDJweCAycHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBmb250LWZhbWlseTogdGl0bGVGb250O1xcbiAgfVxcblxcbiAgLmludHJvUGFnZSB7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xcbiAgICBncmlkLXJvdy1lbmQ6IDQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1haW5UaXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubmF2YmFyIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAgcm93LWdhcDogMWVtO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTBlbTtcXG4gICAgZm9udC1zaXplOiAxLjA1ZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogYmxhY2sgMnB4IDJweCAxcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjYzNik7XFxuICB9XFxuXFxuICAjZW50ZXJCdXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB3aWR0aDogNGVtO1xcbiAgICBoZWlnaHQ6IDRlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xcbiAgfVxcblxcbiAgYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDApO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcbiAgfVxcblxcbiAgLyovSG9tZS8qL1xcblxcbiAgLmhvbWUge1xcbiAgICBtYXJnaW4tdG9wOiAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLmhvbWVUaXRsZSB7XFxuICAgIHRleHQtc2hhZG93OiBibGFjayAxcHggMXB4IDFweDtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG5cXG4gIC5ob21lRmlnIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5ob21lSW1nIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICB9XFxuXFxuICAuaG9tZUltZ0NhcHRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgIHRleHQtanVzdGlmeToga2FzaGlkYTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICAvKi9NZW51LyovXFxuXFxuICAubWVudSB7XFxuICAgIG1hcmdpbi10b3A6IDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWVudVRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuXFxuICAubWVudUl0ZW1zIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICByb3ctZ2FwOiAxZW07XFxuICAgIGNvbHVtbi1nYXA6IDFlbTtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1lbnVJdGVtIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMTVlbTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgZ29sZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDkyLCA5MSwgOTEsIDAuNTE0KTtcXG4gIH1cXG5cXG4gIC5pdGVtSW1nIHtcXG4gICAgaGVpZ2h0OiA5ZW07XFxuICAgIHdpZHRoOiA5ZW07XFxuICB9XFxuXFxuICAuaXRlbURlc2NyaXB0aW9uIHtcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xcbiAgfVxcblxcbiAgLyovQ29udGFjdC8qL1xcblxcbiAgLmNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggMXB4O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW4tdG9wOiAzZW07XFxuICB9XFxuXFxuICAubWFwIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBnb2xkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAvKi9BYm91dCBVcy8qL1xcblxcbiAgLmFib3V0VXMge1xcbiAgICB3aWR0aDogMjNlbTtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogM2VtO1xcbiAgfVxcblxcbiAgLmFib3V0VXNJbWcge1xcbiAgICBwYWRkaW5nOiAxZW0gMWVtIDFlbSAwZW07XFxuICAgIHdpZHRoOiAxMGVtO1xcbiAgICBmbG9hdDogbGVmdDtcXG4gIH1cXG5cXG5cXG4gIC8qL2FuaW1hdGlvbnMvKi9cXG5cXG4gIC5hbmltYXRlZFJlbmRlciB7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiByZW5kZXJBbmltO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIHJlbmRlckFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICBzY2FsZTogMDtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwZW07XFxuICAgICAgcGFkZGluZy1ib3R0b206IDIwZW07XFxuICAgIH1cXG5cXG4gICAgMTAwJSB7XFxuICAgICAgb3BhY2l0eTogMTtcXG4gICAgICBzY2FsZTogMTtcXG4gICAgICBwYWRkaW5nLWxlZnQ6IDBlbTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMGVtO1xcbiAgICB9XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tICcuL2NsZWFyUGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBYm91dFVzKCl7XG4gIGNsZWFyUGFnZSgnYWJvdXRVcycpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBhYm91dFVzSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IGFib3V0VXNUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhYm91dFVzJyk7XG4gIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWRSZW5kZXInKTtcbiAgYWJvdXRVc0ltZy5jbGFzc0xpc3QuYWRkKCdhYm91dFVzSW1nJyk7XG4gIGFib3V0VXNUeHQuY2xhc3NMaXN0LmFkZCgnYWJvdXRVc1R4dCcpXG5cbiAgYWJvdXRVc0ltZy5zcmMgPSAnLi9hc3NldHMvYWJvdXRVcy5wbmcnO1xuICBhYm91dFVzVHh0LmlubmVySFRNTCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXInICtcbiAgJ2FkaXBpc2NpbmcgZWxpdC4gUXVpc3F1ZSBkaWduaXNzaW0gZXN0IHZlbCBkaWFtIGVmZmljaXR1ciBwb3J0dGl0b3IuIEN1cmFiaXR1cicgK1xuICAnY29uZ3VlIGluIHF1YW0gYSByaG9uY3VzLiBNYXVyaXMgZ3JhdmlkYSBzaXQgYW1ldCBleCB1dCBzY2VsZXJpc3F1ZS4nICtcbiAgJ0RvbmVjIGFsaXF1YW0gbGVvIGV0IGdyYXZpZGEgdWxsYW1jb3JwZXIuIERvbmVjIHV0IHNhcGllbiBtYWduYS4gUHJvaW4nICtcbiAgJ2ltcGVyZGlldCBudWxsYSBtYXNzYSwgYWMgc29kYWxlcyBudWxsYSB0ZW1wdXMgcXVpcy4gTnVuYyBzZWQgc2VtIG51bGxhLicgK1xuICAnPGJyPiA8YnI+JyArXG4gICdFdGlhbSB0aW5jaWR1bnQgZG9sb3IgbmVjIHNjZWxlcmlzcXVlIGNvbnNlcXVhdC4gVml2YW11cyBsb2JvcnRpcycgK1xuICAndWxsYW1jb3JwZXIgbGVvLCBzaXQgYW1ldCBibGFuZGl0IGxlbyBkYXBpYnVzIGFjLiBEb25lYyBtYXR0aXMgbmVxdWUnICtcbiAgJ3ZpdGFlIGZyaW5naWxsYSBsYW9yZWV0LiBOdW5jIG5vbiBzYWdpdHRpcyBqdXN0by4gVXQgaWQgbGVvIGNvbnNlcXVhdCwnICtcbiAgJ3BoYXJldHJhIGVyYXQgbm9uLCB2ZWhpY3VsYSBlbmltLiBEb25lYyB0ZW1wb3Igc2VtIGluIHRlbGx1cyBvcm5hcmUgcnV0cnVtLicgK1xuICAnUGVsbGVudGVzcXVlIGlkIGVyb3MgZXUgcmlzdXMgdWxsYW1jb3JwZXIgdGluY2lkdW50LiBOdWxsYW0gbWFzc2EgZG9sb3IsJyArXG4gICdhbGlxdWFtIHZlbCB2dWxwdXRhdGUgYXQsIHZhcml1cyBhdWN0b3IgcXVhbS4gJztcblxuICBhYm91dFVzLmFwcGVuZENoaWxkKGFib3V0VXNJbWcpO1xuICBhYm91dFVzLmFwcGVuZENoaWxkKGFib3V0VXNUeHQpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbkNyZWF0b3IgKHRleHQsIGlkLCBhY3Rpb24pe1xuICBsZXQgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IHRleHQ7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhY3Rpb24pO1xuICByZXR1cm4gYnV0dG9uO1xufTsiLCJleHBvcnQgZnVuY3Rpb24gY2xlYXJQYWdlKGN1cnJlbnRDb250ZW50KSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCB0b0JlUmVtb3ZlZCA9IFtdO1xuICB0b0JlUmVtb3ZlZC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvbWUnKVswXSk7XG4gIHRvQmVSZW1vdmVkLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWVudScpWzBdKTtcbiAgdG9CZVJlbW92ZWQucHVzaChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjb250YWN0JylbMF0pO1xuICB0b0JlUmVtb3ZlZC5wdXNoKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Fib3V0VXMnKVswXSk7XG5cbiAgZm9yIChsZXQgaSA9IHRvQmVSZW1vdmVkLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgKHRvQmVSZW1vdmVkW2ldICE9IHVuZGVmaW5lZCAmJiB0b0JlUmVtb3ZlZFtpXSAhPSBjdXJyZW50Q29udGVudCkgP1xuICAgICAgY29udGVudC5yZW1vdmVDaGlsZCh0b0JlUmVtb3ZlZFtpXSkgOiAoKSA9PiB7IH07XG4gIH1cbn0iLCJpbXBvcnQgeyBjbGVhclBhZ2UgfSBmcm9tICcuL2NsZWFyUGFnZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJDb250YWN0KCl7XG4gIGNsZWFyUGFnZSgnY29udGFjdCcpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcCcpO1xuICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoJ2FkZHJlc3MnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZCgncGhvbmUnKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWRSZW5kZXInKTtcblxuICBtYXAuc3JjID0gJy4vYXNzZXRzL21hcC5wbmcnO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gJ0FkZHJlc3M6IEJsYW5jbyBDcm9zc2luZyc7XG4gIHBob25lLnRleHRDb250ZW50ID0gJ1Bob25lOiA1NTUtMzc1MCc7XG5cbiAgY29udGFjdC5hcHBlbmRDaGlsZChtYXApO1xuICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbn1cbiIsImltcG9ydCB7IGNsZWFyUGFnZSB9IGZyb20gJy4vY2xlYXJQYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhvbWUoKSB7XG4gIGNsZWFyUGFnZSgnaG9tZScpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGhvbWVGaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWd1cmUnKTtcbiAgY29uc3QgaG9tZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBjb25zdCBob21lSW1nQ2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZ2NhcHRpb24nKTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgaG9tZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlZFJlbmRlcicpO1xuICBob21lVGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZVRpdGxlJyk7XG4gIGhvbWVGaWcuY2xhc3NMaXN0LmFkZCgnaG9tZUZpZycpO1xuICBob21lSW1nLmNsYXNzTGlzdC5hZGQoJ2hvbWVJbWcnKTtcbiAgaG9tZUltZ0NhcHRpb24uY2xhc3NMaXN0LmFkZCgnaG9tZUltZ0NhcHRpb24nKTtcblxuICBob21lVGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIGJlc3QgcGl6emFzIGluIHRvd24sIHNpbmNlIDE5NzMnO1xuICBob21lSW1nLnNyYyA9ICcuL2Fzc2V0cy9ob21lSW1nLmpwZyc7XG4gIGhvbWVJbWdDYXB0aW9uLmlubmVySFRNTCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXInICtcbiAgICAnYWRpcGlzY2luZyBlbGl0LiBRdWlzcXVlIGRpZ25pc3NpbSBlc3QgdmVsIGRpYW0gZWZmaWNpdHVyIHBvcnR0aXRvci4gQ3VyYWJpdHVyJyArXG4gICAgJ2Nvbmd1ZSBpbiBxdWFtIGEgcmhvbmN1cy4gTWF1cmlzIGdyYXZpZGEgc2l0IGFtZXQgZXggdXQgc2NlbGVyaXNxdWUuJyArXG4gICAgJ0RvbmVjIGFsaXF1YW0gbGVvIGV0IGdyYXZpZGEgdWxsYW1jb3JwZXIuIERvbmVjIHV0IHNhcGllbiBtYWduYS4gUHJvaW4nICtcbiAgICAnaW1wZXJkaWV0IG51bGxhIG1hc3NhLCBhYyBzb2RhbGVzIG51bGxhIHRlbXB1cyBxdWlzLiBOdW5jIHNlZCBzZW0gbnVsbGEuJyArXG4gICAgJzxicj4gPGJyPicgK1xuICAgICdFdGlhbSB0aW5jaWR1bnQgZG9sb3IgbmVjIHNjZWxlcmlzcXVlIGNvbnNlcXVhdC4gVml2YW11cyBsb2JvcnRpcycgK1xuICAgICd1bGxhbWNvcnBlciBsZW8sIHNpdCBhbWV0IGJsYW5kaXQgbGVvIGRhcGlidXMgYWMuIERvbmVjIG1hdHRpcyBuZXF1ZScgK1xuICAgICd2aXRhZSBmcmluZ2lsbGEgbGFvcmVldC4gTnVuYyBub24gc2FnaXR0aXMganVzdG8uIFV0IGlkIGxlbyBjb25zZXF1YXQsJyArXG4gICAgJ3BoYXJldHJhIGVyYXQgbm9uLCB2ZWhpY3VsYSBlbmltLiBEb25lYyB0ZW1wb3Igc2VtIGluIHRlbGx1cyBvcm5hcmUgcnV0cnVtLicgK1xuICAgICdQZWxsZW50ZXNxdWUgaWQgZXJvcyBldSByaXN1cyB1bGxhbWNvcnBlciB0aW5jaWR1bnQuIE51bGxhbSBtYXNzYSBkb2xvciwnICtcbiAgICAnYWxpcXVhbSB2ZWwgdnVscHV0YXRlIGF0LCB2YXJpdXMgYXVjdG9yIHF1YW0uICc7XG5cbiAgaG9tZUZpZy5hcHBlbmRDaGlsZChob21lSW1nKTtcbiAgaG9tZUZpZy5hcHBlbmRDaGlsZChob21lSW1nQ2FwdGlvbik7XG4gIGhvbWUuYXBwZW5kQ2hpbGQoaG9tZVRpdGxlKTtcbiAgaG9tZS5hcHBlbmRDaGlsZChob21lRmlnKTtcbiAgXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG59IiwiaW1wb3J0IHsgYnV0dG9uQ3JlYXRvciB9IGZyb20gJy4vYnV0dG9uQ3JlYXRvcic7XG5pbXBvcnQgeyByZW5kZXJUaXRsZSB9IGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgcmVuZGVyTWFpblBhZ2UgfSBmcm9tICcuL3JlbmRlck1haW5QYWdlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckludHJvUGFnZSgpIHtcbiAgY29uc3QgaW50cm9QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IHRpdGxlID0gcmVuZGVyVGl0bGUoKTtcbiAgY29uc3QgZW50ZXJCdXR0b24gPSBidXR0b25DcmVhdG9yKCc+Pj4nLCAnZW50ZXJCdXR0b24nLCAoKSA9PiB7IHJlbmRlck1haW5QYWdlKCkgfSk7XG5cbiAgaW50cm9QYWdlLmNsYXNzTGlzdC5hZGQoJ2ludHJvUGFnZScpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtYWluVGl0bGUnKTtcblxuICBpbnRyb1BhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBpbnRyb1BhZ2UuYXBwZW5kQ2hpbGQoZW50ZXJCdXR0b24pO1xuXG4gIHJldHVybiBpbnRyb1BhZ2U7XG59IiwiaW1wb3J0IHsgY2xlYXJQYWdlIH0gZnJvbSAnLi9jbGVhclBhZ2UnO1xuaW1wb3J0IHsgbWVudUl0ZW1DcmVhdG9yIH0gZnJvbSAnLi9tZW51SXRlbUNyZWF0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgY2xlYXJQYWdlKCdtZW51Jyk7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1lbnVBcnJheSA9IFtdO1xuXG4gIG1lbnVBcnJheS5wdXNoKG1lbnVJdGVtQ3JlYXRvclxuICAgICgnQ2hlZXNlIFBpenphJywgJy4vYXNzZXRzL2NoZWVzZVBpenphLnBuZycsICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXInKSk7XG4gIG1lbnVBcnJheS5wdXNoKG1lbnVJdGVtQ3JlYXRvclxuICAgICgnUGVwcGVyb25pIFBpenphJywgJy4vYXNzZXRzL3BlcHBlcm9uaVBpenphLnBuZycsICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXInKSk7XG4gIG1lbnVBcnJheS5wdXNoKG1lbnVJdGVtQ3JlYXRvclxuICAgICgnTWVhdCAmIE9saXZlcyBQaXp6YScsICcuL2Fzc2V0cy9tZWF0T2xpdmVQaXp6YS5wbmcnLCAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyJykpO1xuICBtZW51QXJyYXkucHVzaChtZW51SXRlbUNyZWF0b3JcbiAgICAoJ1JvY2tldCAmIHRvbWF0b2VzIHBpenphJywgJy4vYXNzZXRzL3JvY2tldFBpenphLnBuZycsICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXInKSk7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWRSZW5kZXInKTtcbiAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVUaXRsZScpO1xuICBtZW51SXRlbXMuY2xhc3NMaXN0LmFkZCgnbWVudUl0ZW1zJyk7XG5cbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gJ091ciBwaXp6YSBzZWxlY3Rpb24nO1xuXG4gIGZvciAobGV0IGkgPSBtZW51QXJyYXkubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBtZW51SXRlbXMuYXBwZW5kQ2hpbGQobWVudUFycmF5W2ldKTtcbiAgfVxuXG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcbiAgbWVudS5hcHBlbmRDaGlsZChtZW51SXRlbXMpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIG1lbnVJdGVtQ3JlYXRvcihuYW1lLCB1cmwsIGRlc2NyaXB0aW9uKXtcbiAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgaXRlbUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBsZXQgaXRlbURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gIGl0ZW1JbWcuc3JjID0gdXJsO1xuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtTmFtZScpO1xuICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoJ2l0ZW1JbWcnKTtcbiAgaXRlbURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW1EZXNjcmlwdGlvbicpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51SXRlbScpO1xuICBcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcbiAgcmV0dXJuIG1lbnVJdGVtO1xufSIsImltcG9ydCB7IGJ1dHRvbkNyZWF0b3IgfSBmcm9tICcuL2J1dHRvbkNyZWF0b3InO1xuaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IHJlbmRlckNvbnRhY3QgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgcmVuZGVyQWJvdXRVcyB9IGZyb20gJy4vYWJvdXRVcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJOYXZiYXIoKSB7XG4gIGNvbnN0IGhvbWVCdG4gPSBidXR0b25DcmVhdG9yKCdIb21lJywgJ2hvbWVCdG4nLCAoKSA9PiB7IHJlbmRlckhvbWUoKSB9KTtcbiAgY29uc3QgbWVudUJ0biA9IGJ1dHRvbkNyZWF0b3IoJ01lbnUnLCAnbWVudUJ0bicsICgpID0+IHsgcmVuZGVyTWVudSgpIH0pXG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBidXR0b25DcmVhdG9yKCdDb250YWN0JywgJ2NvbnRhY3RCdG4nLCAoKSA9PiB7IHJlbmRlckNvbnRhY3QoKSB9KTtcbiAgY29uc3QgYWJvdXRVc0J0biA9IGJ1dHRvbkNyZWF0b3IoJ0Fib3V0IHVzJywgJ2Fib3V0VXNCdG4nLCAoKSA9PiB7IHJlbmRlckFib3V0VXMoKSB9KVxuXG4gIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ0bik7XG4gIG5hdmJhci5hcHBlbmRDaGlsZChhYm91dFVzQnRuKTtcbiAgcmV0dXJuIG5hdmJhcjtcbn0iLCJpbXBvcnQgeyByZW5kZXJUaXRsZSB9IGZyb20gJy4vdGl0bGUnO1xuaW1wb3J0IHsgcmVuZGVyTmF2YmFyIH0gZnJvbSAnLi9uYXZiYXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFpblBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBjb25zdCBpbnRyb1BhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnRyb1BhZ2UnKVswXTtcbiAgY29uc3QgbmF2YmFyID0gcmVuZGVyTmF2YmFyKCk7XG4gIGNvbnN0IHRpdGxlID0gcmVuZGVyVGl0bGUoKTtcbiAgY29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKGludHJvUGFnZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xuICAgIGNvbnRlbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfSwgMTAwMCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRpdGxlKCkge1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGBFbCBDYW5jaGVybydzIFBpenplcmlhYDtcbiAgcmV0dXJuIHRpdGxlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7IHJlbmRlckludHJvUGFnZSB9IGZyb20gJy4vY29tcG9uZW50cy9pbnRyb1BhZ2UnO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQocmVuZGVySW50cm9QYWdlKCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==