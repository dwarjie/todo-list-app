/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\ninput {\n  font-family: inherit;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  display: none;\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .new-personal .add-personal {\n  max-width: 20px;\n}\n.navigation-side .container .container-personal #personal-project-list {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.navigation-side .container .container-personal .show-new-personal {\n  display: flex;\n}\n.navigation-side .container .container-personal .project-pop-up {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n}\n.navigation-side .container .container-personal .project-pop-up input {\n  max-width: 90%;\n  padding: 0.3rem 0.3rem;\n  background-color: #F5F4F3;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons button {\n  max-width: 100%;\n  padding: 0.5rem 1.2rem;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #add-new-project {\n  background-color: #57ADEB;\n  color: #fff;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #cancel-new-project {\n  background-color: #F95656;\n  color: #fff;\n}\n.navigation-side .container .container-personal .show-pop-up {\n  opacity: 1;\n  visibility: visible;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .mid-priority {\n  border: 0.15em solid #57ADEB;\n}\n.view-todo .project-list .list-item .low-priority {\n  border: 0.15em solid #8FDC2D;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.details-modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.details-modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.details-modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.details-modal .modal-container .modal-top .due-date,\n.details-modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.details-modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.details-modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.details-modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.details-modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.details-modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-details {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.info-modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.info-modal .modal-container {\n  grid-column: col-start 4/10;\n  grid-row: 4/9;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 0 5.6rem;\n}\n\n.show-info {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}", "",{"version":3,"sources":["webpack://./src/partials/_global.scss","webpack://./src/style.scss","webpack://./src/partials/_mixin.scss","webpack://./src/partials/_top-navigation.scss","webpack://./src/partials/_variable.scss","webpack://./src/partials/_side-navigation.scss","webpack://./src/partials/_view-todo.scss","webpack://./src/partials/_modal.scss","webpack://./src/partials/_details-modal.scss","webpack://./src/partials/_info-modal.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tvertical-align: baseline;\t\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-size: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 3rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.125rem;\r\n\tfont-weight: 400;\t\r\n}\r\n\r\nh3 {\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\ninput {\r\n\tfont-family: inherit;\r\n}\r\n\r\n.wrapper {\r\n\t@include twelveColumn();\r\n}\r\n\r\n.button {\r\n\tmax-width: 30px;\r\n\theight: auto;\r\n}\r\n\r\n.button-hover:hover {\r\n\ttransform: scale(1.1);\r\n\ttransition: 120ms transform ease-in-out;\r\n}\r\n\r\n.text-hover:hover {\r\n\tfont-weight: 600;\r\n}","* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\ninput {\n  font-family: inherit;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  display: none;\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .new-personal .add-personal {\n  max-width: 20px;\n}\n.navigation-side .container .container-personal #personal-project-list {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.navigation-side .container .container-personal .show-new-personal {\n  display: flex;\n}\n.navigation-side .container .container-personal .project-pop-up {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n}\n.navigation-side .container .container-personal .project-pop-up input {\n  max-width: 90%;\n  padding: 0.3rem 0.3rem;\n  background-color: #F5F4F3;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons button {\n  max-width: 100%;\n  padding: 0.5rem 1.2rem;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #add-new-project {\n  background-color: #57ADEB;\n  color: #fff;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #cancel-new-project {\n  background-color: #F95656;\n  color: #fff;\n}\n.navigation-side .container .container-personal .show-pop-up {\n  opacity: 1;\n  visibility: visible;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .mid-priority {\n  border: 0.15em solid #57ADEB;\n}\n.view-todo .project-list .list-item .low-priority {\n  border: 0.15em solid #8FDC2D;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.details-modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.details-modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.details-modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.details-modal .modal-container .modal-top .due-date,\n.details-modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.details-modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.details-modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.details-modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.details-modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.details-modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-details {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}\n\n.info-modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.info-modal .modal-container {\n  grid-column: col-start 4/10;\n  grid-row: 4/9;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 0 5.6rem;\n}\n\n.show-info {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}","@mixin flexBox($direction: row, $justify: center, $align: center) {\r\n\tdisplay: flex;\r\n\tflex-direction: $direction;\r\n\tjustify-content: $justify;\r\n\talign-items: $align;\r\n}\r\n\r\n@mixin twelveColumn() {\r\n\tmax-width: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(12, [col-start] 1fr);\r\n\tgrid-template-rows: repeat(12, 1fr);\r\n};\r\n\r\n@mixin showModal() {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\ttransform: scale(1.0);\r\n\ttransition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\r\n}",".navigation-top {\r\n\t@include flexBox($justify: flex-end);\r\n\tbackground-color: $navigation-top;\r\n\tgrid-column: col-start / span 12;\r\n\tgrid-row: 1;\r\n\r\n\t.navigation-prop {\r\n\t\t@include flexBox;\r\n\t\tmargin-right: 5.625rem;\r\n\r\n\t\t.info {\r\n\t\t\tmargin-left: 4.063rem;\r\n\t\t}\r\n\t}\r\n}","$navigation-top: #F5F4F3;\r\n$navigation-side: #15181D;\r\n$side-text-color: #AFAFAF;\r\n$high-priority: #F95656;\r\n$mid-priority: #57ADEB;\r\n$low-priority: #8FDC2D;\r\n$modal-shade: rgba(21, 24, 29, .7);\r\n$modal-background: #FFFFFF;\r\n$modal-color: #7E7E7E;\r\n$modal-button: #57ADEB;",".navigation-side {\r\n\tcolor: $side-text-color;\r\n\tbackground-color: $navigation-side;\r\n\tgrid-column: col-start / span 2;\r\n\tgrid-row: 2 / 13;\r\n\toverflow: hidden;\r\n\r\n\t.container {\r\n\t\t@include flexBox($direction: column, $align: flex-start);\r\n\t\tgap: 1rem;\r\n\t\tmax-width: 70%;\r\n\t\tmargin: 3.75rem auto 0 auto;\r\n\r\n\t\th2, h3 {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.active {\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\r\n\t\t.container-project {\r\n\t\t\t@include flexBox($justify: flex-start, $align: flex-start);\r\n\t\t\tgap: 1rem;\r\n\t\t\tflex-wrap: wrap;\t\r\n\r\n\t\t\t.personal {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t\tgap: 1rem;\r\n\t\t\t\tflex-wrap: nowrap;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.container-personal {\r\n\r\n\t\t\t.new-personal {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tmargin-left: 20px;\r\n\r\n\t\t\t\t.add-personal {\r\n\t\t\t\t\tmax-width: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t#personal-project-list {\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t\tgap: .5rem;\r\n\t\t\t}\r\n\r\n\t\t\t.show-new-personal {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t}\r\n\r\n\t\t\t.project-pop-up {\r\n\t\t\t\t@include flexBox($direction: column);\r\n\t\t\t\topacity: 0;\r\n\t\t\t\tvisibility: hidden;\r\n\r\n\t\t\t\tinput {\r\n\t\t\t\t\tmax-width: 90%;\r\n\t\t\t\t\tpadding: 0.3rem 0.3rem;\r\n\t\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tborder-radius: 3px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.project-pop-up-buttons {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t@include flexBox($justify: space-evenly);\r\n\t\t\t\t\tflex-wrap: wrap;\r\n\r\n\t\t\t\t\tbutton {\r\n\t\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\t\tpadding: 0.5rem 1.2rem;\r\n\t\t\t\t\t\tborder: none;\r\n\t\t\t\t\t\tborder-radius: 3px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t#add-new-project {\r\n\t\t\t\t\t\tbackground-color: $mid-priority;\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t#cancel-new-project {\r\n\t\t\t\t\t\tbackground-color: $high-priority;\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.show-pop-up {\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\t\r\n\t\t}\r\n\t}\r\n}",".view-todo {\r\n\tgrid-column: col-start 4 / 12;\r\n\tgrid-row: 3 / 13;\r\n\r\n\t.project-list {\r\n\t\t@include flexBox($direction: column);\r\n\t\tmargin-top: 1.25rem;\r\n\r\n\t\t.list-item {\r\n\t\t\t@include flexBox($direction: row, $justify: space-between);\r\n\t\t\tmin-width: 100%;\r\n\t\t\tmargin-bottom: 1rem;\r\n\t\t\theight: 4rem;\r\n\t\t\tbackground-color: $navigation-top;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tpadding: 1.6rem;\r\n\r\n\t\t\t.todo-prop, .todo-title {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"] {\r\n\t\t\t\t/* Add if not using autoprefixer */\r\n\t\t\t\t-webkit-appearance: none;\r\n\t\t\t\tappearance: none;\r\n\t\t\t\t/* For iOS < 15 to remove gradient background */\r\n\t\t\t\tbackground-color: #fff;\r\n\t\t\t\t/* Not removed via appearance */\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tplace-content: center;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tmargin-right: 0.9em;\r\n\t\t\t\tfont: inherit;\r\n\t\t\t\twidth: 1.5em;\r\n\t\t\t\theight: 1.5em;\r\n\t\t\t\tborder-radius: 0.50em;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\twidth: 0.75em;\r\n\t\t\t\theight: 0.75em;\r\n\t\t\t\tborder-radius: 0.2em;\r\n\t\t\t\ttransform: scale(0);\r\n\t\t\t\ttransition: 120ms transform ease-in-out;\r\n\t\t\t\tbox-shadow: inset 1em 1em $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]:checked::before {\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t}\r\n\r\n\t\t\t.high-priority {\r\n\t\t\t\tborder: 0.15em solid $high-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.mid-priority {\r\n\t\t\t\tborder: 0.15em solid $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.low-priority {\r\n\t\t\t\tborder: 0.15em solid $low-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.todo-prop {\r\n\r\n\t\t\t\t.todo-edit {\r\n\t\t\t\t\tmargin: 0 1.25rem 0 1.8rem;\r\n\t\t\t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".modal {\r\n\t@include twelveColumn();\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tbackground-color: $modal-shade;\r\n\t// in order to hide the modal at first\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransform: scale(1.1);\r\n\ttransition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n\r\n\t.modal-container {\r\n\t\tgrid-column: col-start 3 / 11;\r\n\t\tgrid-row: 3 / 12;\r\n\t\tcolor: $modal-color;\r\n\t\tbackground-color: $modal-background;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 1.25rem 5.6rem;\r\n\r\n\t\t.modal-top {\r\n\t\t\t@include flexBox($justify: space-between);\r\n\t\t\tmargin-bottom: 1.25rem;\r\n\r\n\t\t\t.due-date,\r\n\t\t\t.priority {\r\n\t\t\t\tmargin-left: .2rem;\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tcolor: $modal-color;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tmargin-right: 1.875rem;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button {\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 0.3rem 0.8rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tbackground-color: $modal-button;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button:hover {\r\n\t\t\t\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.150);\r\n\t\t\t\ttransition: .3s all ease-in-out;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.modal-form form{\r\n\t\t\t@include flexBox($direction: column, $align: flex-start);\r\n\r\n\t\t\ttextarea {\r\n\t\t\t\tfont-family: 'Poppins', sans-serif;\r\n\t\t\t\tresize: none;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 300px;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem .5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\tinput {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tmargin-bottom: 1rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem 0.5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n// in order to show the modal with a simple animation\r\n.show-modal {\r\n\t@include showModal();\r\n}",".details-modal {\r\n\t@include twelveColumn();\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tbackground-color: $modal-shade;\r\n\t// in order to hide the modal at first\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransform: scale(1.1);\r\n\ttransition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n\r\n\t.modal-container {\r\n\t\tgrid-column: col-start 3 / 11;\r\n\t\tgrid-row: 3 / 12;\r\n\t\tcolor: $modal-color;\r\n\t\tbackground-color: $modal-background;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 1.25rem 5.6rem;\r\n\r\n\t\t.modal-top {\r\n\t\t\t@include flexBox($justify: space-between);\r\n\t\t\tmargin-bottom: 1.25rem;\r\n\r\n\t\t\t.due-date,\r\n\t\t\t.priority {\r\n\t\t\t\tmargin-left: .2rem;\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tcolor: $modal-color;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tmargin-right: 1.875rem;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button {\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 0.3rem 0.8rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tbackground-color: $modal-button;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button:hover {\r\n\t\t\t\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.150);\r\n\t\t\t\ttransition: .3s all ease-in-out;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.modal-form form{\r\n\t\t\t@include flexBox($direction: column, $align: flex-start);\r\n\r\n\t\t\ttextarea {\r\n\t\t\t\tfont-family: 'Poppins', sans-serif;\r\n\t\t\t\tresize: none;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 300px;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem .5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\tinput {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tmargin-bottom: 1rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem 0.5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n// in order to show the modal with a simple animation\r\n.show-details{\r\n\t@include showModal();\r\n}\r\n",".info-modal {\r\n\t@include twelveColumn();\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tbackground-color: $modal-shade;\r\n\t// in order to hide the modal at first\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransform: scale(1.1);\r\n\ttransition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n\r\n\t.modal-container {\r\n\t\tgrid-column: col-start 4 / 10;\r\n\t\tgrid-row: 4 / 9;\r\n\t\t@include flexBox($direction: column);\r\n\t\ttext-align: center;\r\n\t\tcolor: $modal-color;\r\n\t\tbackground-color: $modal-background;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 0 5.6rem;\r\n\t}\r\n}\r\n// in order to show the modal with a simple animation\r\n.show-info{\r\n\t@include showModal();\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/add_todo/add_todo.js":
/*!******************************************!*\
  !*** ./src/modules/add_todo/add_todo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Add_Todo": () => (/* binding */ Add_Todo)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _item_adder_title_checker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item_adder/title_checker.js */ "./src/modules/item_adder/title_checker.js");
/* harmony import */ var _get_todo_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get_todo_details.js */ "./src/modules/add_todo/get_todo_details.js");
/* harmony import */ var _top_navigation_clear_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top_navigation/clear_modal.js */ "./src/modules/top_navigation/clear_modal.js");
/* harmony import */ var _validation_validate_todo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation/validate_todo.js */ "./src/modules/validation/validate_todo.js");
/* harmony import */ var _event_update_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event/update_event.js */ "./src/modules/event/update_event.js");
/* harmony import */ var _item_adder_adder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item_adder/adder.js */ "./src/modules/item_adder/adder.js");
/* harmony import */ var _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../inbox/inbox.js */ "./src/modules/inbox/inbox.js");
/* harmony import */ var _personal_personal_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../personal/personal.js */ "./src/modules/personal/personal.js");
/* harmony import */ var _data_save_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/save_data.js */ "./src/modules/data/save_data.js");











// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');
const Add_Todo = (function() {
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);
	let projectTitle = document.querySelector('.project-title');
	// Validate the modal form first if all has value. else show an alert
	// this function will get the details from the modal form
	// return the details as an object then assign it to itemDetails
	// then call the Adder_Todo in order to add the object to the todoCollection
	function addToDoItem() {
		// check if the button is for updating or not
		if (btnAddItem.innerHTML === "Update") {
			(0,_event_update_event_js__WEBPACK_IMPORTED_MODULE_5__.Update_Item)();
			return;
		}
		// validate if all input has value
		if ((0,_validation_validate_todo_js__WEBPACK_IMPORTED_MODULE_4__.Validate_Todo)()) {
			let itemDetails = (0,_get_todo_details_js__WEBPACK_IMPORTED_MODULE_2__.Get_Details)();
			// check if the user is adding to inbox or personal by checking the project title
			if ((0,_item_adder_title_checker_js__WEBPACK_IMPORTED_MODULE_1__.Title_Checker)(projectTitle.innerHTML)) {
				// user is adding to the inbox
				_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections = (0,_item_adder_adder_js__WEBPACK_IMPORTED_MODULE_6__.Adder_Todo)(itemDetails, "Inbox");
				_inbox_inbox_js__WEBPACK_IMPORTED_MODULE_7__.Inbox.render();
			}else {
				_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections = (0,_item_adder_adder_js__WEBPACK_IMPORTED_MODULE_6__.Adder_Todo)(itemDetails, projectTitle.innerHTML);
				_personal_personal_js__WEBPACK_IMPORTED_MODULE_8__.Personal.update(); // update the view-todo
			}
			(0,_data_save_data_js__WEBPACK_IMPORTED_MODULE_9__.Save_Data)();
			(0,_top_navigation_clear_modal_js__WEBPACK_IMPORTED_MODULE_3__.Clear_Form)(); // clear the form
		}else {
			alert("Fill all fields!");
		}
	}
})();


/***/ }),

/***/ "./src/modules/add_todo/get_todo_details.js":
/*!**************************************************!*\
  !*** ./src/modules/add_todo/get_todo_details.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Get_Details": () => (/* binding */ Get_Details)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/modules/add_todo/todo.js");


// this module is for getting all the information from the modal

const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');
const cbStatus = document.querySelector('#cbStatus');

function Get_Details() {	
	// call the function factory for making a todo item
	// then give the input values as a parameter
	return (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.getTodoId() ,inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value, "undefined");
};

/***/ }),

/***/ "./src/modules/add_todo/todo.js":
/*!**************************************!*\
  !*** ./src/modules/add_todo/todo.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
// this is a function factory for creating a new todo item
const Todo = (id, title, desc, due, priority, status) => {
	let todoObject = {}; // empty object

	// set the parameters given to the todo object
	todoObject.id = id;
	todoObject.title = title;
	todoObject.desc = desc;
	todoObject.due = due;
	todoObject.priority = priority;
	todoObject.status = status;

	return todoObject; // return the object
};

/***/ }),

/***/ "./src/modules/container/personal_container.js":
/*!*****************************************************!*\
  !*** ./src/modules/container/personal_container.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Personal_Container": () => (/* binding */ Personal_Container)
/* harmony export */ });
// this is going to be the personal project containers

function Personal_Container(itemDetails) {
	return `<h3 class="text-hover" id="btnPersonalProject">${itemDetails}</h3>`;
}

/***/ }),

/***/ "./src/modules/container/todo_container.js":
/*!*************************************************!*\
  !*** ./src/modules/container/todo_container.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo_Container": () => (/* binding */ Todo_Container)
/* harmony export */ });
// this container will contain the todo item container
// here, it will return a html represent of the todo item
// in order to append it to the DOM

// this will provide the container for creating todo item
function Todo_Container(itemDetails) {
	// generate a todo list container
	// with the values from the itemDetails
	return `<div class="list-item" data-id="${itemDetails.id}">
	            <div class="todo-title">
	                <input type="checkbox" data-id="${itemDetails.id}" class="${itemDetails.priority}" id="cbStatus" alt="${itemDetails.status}">
	                <h2>${itemDetails.title}</h2>
	            </div>
	            <div class="todo-prop">
	                <h3>${itemDetails.due}</h3>
	                <input type="image" data-id="${itemDetails.id}" class="button button-hover todo-edit" id="edit-todo" src="./src/img/edit.png">
	                <input type="image" data-id="${itemDetails.id}" class="button button-hover todo-delete" id="delete-todo" src="./src/img/delete.png">
	            </div>
        	</div>`;
}

/***/ }),

/***/ "./src/modules/data/load_data.js":
/*!***************************************!*\
  !*** ./src/modules/data/load_data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Load_Data": () => (/* binding */ Load_Data)
/* harmony export */ });
/* harmony import */ var _todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _save_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save_data.js */ "./src/modules/data/save_data.js");


// this module let's us load the data of the todoCollection and todoId from localStorage
// if data does not exist in the localStorage create one

function Load_Data() {
	// check if data does not exist from the localStorage
	if (localStorage.getItem('todoCollection') === null && localStorage.getItem('todoId') === null && localStorage.getItem('personalCollections') === null) {
		_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections = _todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoDefault;
		_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.setId = 2;
		_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.personalProjectCollection = ['First Personal'];
		(0,_save_data_js__WEBPACK_IMPORTED_MODULE_1__.Save_Data)();
		return
	}
	// if it does exist
	_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections = JSON.parse(localStorage.getItem('todoCollections'));
	_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.setId(parseInt(JSON.parse(localStorage.getItem('todoId'))));
	_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.personalProjectCollection = JSON.parse(localStorage.getItem('personalCollections'));
	(0,_save_data_js__WEBPACK_IMPORTED_MODULE_1__.Save_Data)();
}

/***/ }),

/***/ "./src/modules/data/populate_details_modal.js":
/*!****************************************************!*\
  !*** ./src/modules/data/populate_details_modal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Populate_Details_Modal": () => (/* binding */ Populate_Details_Modal)
/* harmony export */ });
// this module will populate the modal with the details of the todo item
const inputDueDate = document.querySelector('#details-due-date');
const inputTitle = document.querySelector('#details-title');
const inputDescription = document.querySelector('#details-description');

function Populate_Details_Modal(todoItem) {
	inputDueDate.value = todoItem.due;
	inputTitle.value = todoItem.title;
	inputDescription.value = todoItem.desc;
}

/***/ }),

/***/ "./src/modules/data/populate_update_modal.js":
/*!***************************************************!*\
  !*** ./src/modules/data/populate_update_modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Populate_Update_Modal": () => (/* binding */ Populate_Update_Modal)
/* harmony export */ });
// this module will handle the population of the update_modal
// from the gathered data from the search module

// get all the elements of the modal
const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');

function Populate_Update_Modal(todoItem) {
	inputDueDate.value = todoItem.due;
	inputPriority.value = todoItem.priority;
	inputTitle.value = todoItem.title;
	inputDescription.value = todoItem.desc;
}

/***/ }),

/***/ "./src/modules/data/save_data.js":
/*!***************************************!*\
  !*** ./src/modules/data/save_data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Save_Data": () => (/* binding */ Save_Data)
/* harmony export */ });
/* harmony import */ var _todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_data.js */ "./src/modules/data/todo_data.js");

// this module let's us save data to the localStorage

function Save_Data() {
	const STORAGE_NAME = "todoCollections";
	const ID_NAME = "todoId";
	const PERSONAL_NAME = "personalCollections";

	// access the saved object in the localStorage and save the todoCollections and id there
	localStorage.setItem(STORAGE_NAME, JSON.stringify(_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections));
	localStorage.setItem(ID_NAME, _todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.getId());
	localStorage.setItem(PERSONAL_NAME, JSON.stringify(_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.personalProjectCollection));
}

/***/ }),

/***/ "./src/modules/data/search.js":
/*!************************************!*\
  !*** ./src/modules/data/search.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _search_inbox_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search_inbox.js */ "./src/modules/data/search_inbox.js");
/* harmony import */ var _search_project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search_project.js */ "./src/modules/data/search_project.js");



// this module will search for the specific todo item
// by the use of the id key that will be passed
// this will check every item and compare each id key
// once found, get the index and return it

// search through all objects and compare the item.id to id then return the index of the item
function searchItem(id, todoCollections) {
	for(const item of todoCollections) {
		if (item.id == id)
			return todoCollections.indexOf(item)
	}
	return -1;
}

function Search(id) {
	let todoItem; // this will hold the searched item
	// call the searching module for the inbox and project
	const inboxKey = (0,_search_inbox_js__WEBPACK_IMPORTED_MODULE_1__.Search_Inbox)(id, searchItem);	
	const { itemKey, projectKey }= (0,_search_project_js__WEBPACK_IMPORTED_MODULE_2__.Search_Project)(id, searchItem);

	if (inboxKey != -1) {
		todoItem = _todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox[inboxKey];
	}
	if (itemKey != -1) {
		todoItem = _todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[projectKey][itemKey];
	}

	// return multiple values
	return {
		item: todoItem,
		inboxKey: inboxKey,
		itemKey: itemKey,
		projectKey: projectKey
	}
};

/***/ }),

/***/ "./src/modules/data/search_inbox.js":
/*!******************************************!*\
  !*** ./src/modules/data/search_inbox.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search_Inbox": () => (/* binding */ Search_Inbox)
/* harmony export */ });
/* harmony import */ var _todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_data.js */ "./src/modules/data/todo_data.js");

// this module will search in the inbox collection
// and will return the index of the item if foundd

function Search_Inbox(id, searchFunc) {
	const itemKey = searchFunc(id, _todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox);
	return itemKey;
}

/***/ }),

/***/ "./src/modules/data/search_project.js":
/*!********************************************!*\
  !*** ./src/modules/data/search_project.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Search_Project": () => (/* binding */ Search_Project)
/* harmony export */ });
/* harmony import */ var _todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_data.js */ "./src/modules/data/todo_data.js");

// this module will search in the project collection
// and will return the item index if found

function Search_Project(id, searchFunc) {
	let itemKey = -1; // default (means, the item is still not found)
	let projectKey;
	for(const key of Object.keys(_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal)) {
		// if item keys != -1 stop the loop. (means, the item is found)
		if (itemKey != -1) break
		itemKey = searchFunc(id, _todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[key]);
		projectKey = key;
	}
	return { itemKey, projectKey };
}

/***/ }),

/***/ "./src/modules/data/todo_data.js":
/*!***************************************!*\
  !*** ./src/modules/data/todo_data.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo_Data": () => (/* binding */ Todo_Data)
/* harmony export */ });
// this contains all the data of the todo app
// including the todoCollections, the todoId, and the todoProjectCollections


const Todo_Data = (function() {
	let todoDefault = {
		inbox: [
			{
				id: 0,
				title: "Add your first todo",
				desc: "Click the add icon at the top right and start filling your first todo",
				due: "2022-02-15",
				priority: "high-priority",
				status: "undefined",
			},
			{
				id: 1,
				title: "Add your first Personal Project",
				desc: "Click the add icon at the Personal tab and give your first personal project a title",
				due: "2022-02-15",
				priority: "high-priority",
				status: "undefined",
			}
		],
		personal: {
			'First Personal': [
				{
					id: 2,
					title: "Add your first personal todo",
					desc: "Click the add icon at the top right and fill up all the details",
					due: "2022-02-22",
					priority: "high-priority",
					status: "undefined",
				}
			]
		}
	}
	let todoCollections = {
		inbox: [],
		personal: []
	}; // here will go the todo_collection
	let personalProjectCollection = []; // here we will assign the personal project collection
	let todoId = 2;	

	function getTodoId() {
		todoId++; // increment the id in order for every todo have unique id
		return todoId;
	}

	function getId() {
		return todoId;
	}

	function setId(id) {
		todoId = id;
	}
	return {
		todoDefault,
		todoCollections,
		personalProjectCollection,
		getId,
		getTodoId,
		setId
	}
})();

/***/ }),

/***/ "./src/modules/date/current_date.js":
/*!******************************************!*\
  !*** ./src/modules/date/current_date.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Current_Date": () => (/* binding */ Current_Date)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");

// this module will use date-fns to get the current date
// in format yyyy/mm/dd
// then return it

const Current_Date = (function() {
	return (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(), "Y-MM-dd");
})();

/***/ }),

/***/ "./src/modules/event/delete_event.js":
/*!*******************************************!*\
  !*** ./src/modules/event/delete_event.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Delete_Event": () => (/* binding */ Delete_Event)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event_manager.js */ "./src/modules/event/event_manager.js");
/* harmony import */ var _data_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/search.js */ "./src/modules/data/search.js");
/* harmony import */ var _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inbox/inbox.js */ "./src/modules/inbox/inbox.js");
/* harmony import */ var _today_today_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../today/today.js */ "./src/modules/today/today.js");
/* harmony import */ var _personal_personal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../personal/personal.js */ "./src/modules/personal/personal.js");
/* harmony import */ var _data_save_data_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/save_data.js */ "./src/modules/data/save_data.js");







// this will handle the adding of delete event to all todo list items

// this function will call all the update function of every tab in order to 
// re-render the view todo
function renderUpdated() {
	// check what tab to re-render
	// re-render the view-todo
	if (projectTitle.innerHTML == "Inbox") return _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_3__.Inbox.update();
	if (projectTitle.innerHTML == "Today") return _today_today_js__WEBPACK_IMPORTED_MODULE_4__.Today.update();
	_personal_personal_js__WEBPACK_IMPORTED_MODULE_5__.Personal.update();
}

const projectTitle = document.querySelector('.project-title');
function deleteTodo(e) {
	e.stopImmediatePropagation(); // stop the event from bubbling
	let id = e.target.dataset.id;
	// check if the todoItem is in Inbox or Project
	// True -> Inbox | False -> Personal
	let searchedItem = (0,_data_search_js__WEBPACK_IMPORTED_MODULE_2__.Search)(id);
	if (searchedItem.inboxKey != -1)
		_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox.splice(searchedItem.inboxKey,1);
	if (searchedItem.itemKey != -1)
		_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[searchedItem.projectKey].splice(searchedItem.itemKey,1);
	(0,_data_save_data_js__WEBPACK_IMPORTED_MODULE_6__.Save_Data)();
	renderUpdated();
}

function Delete_Event(elements) {
	(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_1__.Event_Manager)(elements, deleteTodo);
}

/***/ }),

/***/ "./src/modules/event/details_event.js":
/*!********************************************!*\
  !*** ./src/modules/event/details_event.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Details_Event": () => (/* binding */ Details_Event)
/* harmony export */ });
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_manager.js */ "./src/modules/event/event_manager.js");
/* harmony import */ var _data_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/search.js */ "./src/modules/data/search.js");
/* harmony import */ var _data_populate_details_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/populate_details_modal.js */ "./src/modules/data/populate_details_modal.js");
/* harmony import */ var _view_details_view_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-details/view_details.js */ "./src/modules/view-details/view_details.js");




// this module will handle the showing of details of each todo item
// and also adding event listener to all todo items once clicked

let todoItem;
// this function is the main function for viewing details of the todo
function showDetails(e) {
	let id = e.target.dataset.id;
	const searchedItem = (0,_data_search_js__WEBPACK_IMPORTED_MODULE_1__.Search)(id);
	todoItem = searchedItem.item;
	(0,_data_populate_details_modal_js__WEBPACK_IMPORTED_MODULE_2__.Populate_Details_Modal)(todoItem);
	_view_details_view_details_js__WEBPACK_IMPORTED_MODULE_3__.View_Details.showModal();
}

function Details_Event(elements) {
	// use event manager to add events to the buttons
	(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.Event_Manager)(elements, showDetails)
}

/***/ }),

/***/ "./src/modules/event/event_manager.js":
/*!********************************************!*\
  !*** ./src/modules/event/event_manager.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event_Manager": () => (/* binding */ Event_Manager)
/* harmony export */ });
// this will handle the adding of event listeners to multiple elements
// this module needs the array of the elements using querySelectorAll
// then it also need the callback function that will be added to the element
// in order to iterate to each element. It will use forEach

function Event_Manager(elements, callBackFunc) {
	elements.forEach((elem) => {
		elem.addEventListener('click', (e) => callBackFunc(e));
	});
};

/***/ }),

/***/ "./src/modules/event/status_event.js":
/*!*******************************************!*\
  !*** ./src/modules/event/status_event.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Status_Event": () => (/* binding */ Status_Event)
/* harmony export */ });
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_manager.js */ "./src/modules/event/event_manager.js");
/* harmony import */ var _data_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/search.js */ "./src/modules/data/search.js");
/* harmony import */ var _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inbox/inbox.js */ "./src/modules/inbox/inbox.js");
/* harmony import */ var _today_today_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../today/today.js */ "./src/modules/today/today.js");
/* harmony import */ var _personal_personal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../personal/personal.js */ "./src/modules/personal/personal.js");
/* harmony import */ var _data_save_data_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/save_data.js */ "./src/modules/data/save_data.js");






// this module will handle the adding of event listener for checkboxes in the todo
// using the Event Manager.
// this will update the todo status from "Finished" -> "Unfinished"

const projectTitle = document.querySelector('.project-title');
// this function is the main function for status events
function changeStatus(e) {
	e.stopImmediatePropagation(); // stop bubbling
	let id = e.target.dataset.id
	const searchedItem =  (0,_data_search_js__WEBPACK_IMPORTED_MODULE_1__.Search)(id);
	let todoItem = searchedItem.item;
	updateStatus(todoItem);
	(0,_data_save_data_js__WEBPACK_IMPORTED_MODULE_5__.Save_Data)();
	renderUpdated();
}

function updateStatus(item) {
	if (item.status == "undefined")
		return item.status = "finish"
	if (item.status == "finish")
		return item.status = "undefined"
}

// this function will call all the update function of every tab in order to 
// re-render the view todo
function renderUpdated() {
	// check what tab to re-render
	// re-render the view-todo
	if (projectTitle.innerHTML == "Inbox") return _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_2__.Inbox.update();
	if (projectTitle.innerHTML == "Today") return _today_today_js__WEBPACK_IMPORTED_MODULE_3__.Today.update();
	_personal_personal_js__WEBPACK_IMPORTED_MODULE_4__.Personal.update();
}

function Status_Event(elements) {
	(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.Event_Manager)(elements, changeStatus);
}

/***/ }),

/***/ "./src/modules/event/update_event.js":
/*!*******************************************!*\
  !*** ./src/modules/event/update_event.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Update_Item": () => (/* binding */ Update_Item),
/* harmony export */   "Update_Event": () => (/* binding */ Update_Event)
/* harmony export */ });
/* harmony import */ var _event_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_manager.js */ "./src/modules/event/event_manager.js");
/* harmony import */ var _data_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/search.js */ "./src/modules/data/search.js");
/* harmony import */ var _add_todo_get_todo_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add_todo/get_todo_details.js */ "./src/modules/add_todo/get_todo_details.js");
/* harmony import */ var _data_populate_update_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/populate_update_modal.js */ "./src/modules/data/populate_update_modal.js");
/* harmony import */ var _renderer_render_update_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/render_update_modal.js */ "./src/modules/renderer/render_update_modal.js");
/* harmony import */ var _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inbox/inbox.js */ "./src/modules/inbox/inbox.js");
/* harmony import */ var _today_today_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../today/today.js */ "./src/modules/today/today.js");
/* harmony import */ var _personal_personal_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../personal/personal.js */ "./src/modules/personal/personal.js");
/* harmony import */ var _data_save_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/save_data.js */ "./src/modules/data/save_data.js");









// this will handle the adding of events to all update buttons in todo items

let todoItem; // this will hold the specific todoItem
const projectTitle = document.querySelector('.project-title');
function updateTodo(e) {
	e.stopImmediatePropagation(); // to stop the event from bubbling
	let id = e.target.dataset.id;
	const searchedItem = (0,_data_search_js__WEBPACK_IMPORTED_MODULE_1__.Search)(id);
	todoItem = searchedItem.item;
	(0,_renderer_render_update_modal_js__WEBPACK_IMPORTED_MODULE_4__.Render_Update_Modal)(); // show the update modal
	(0,_data_populate_update_modal_js__WEBPACK_IMPORTED_MODULE_3__.Populate_Update_Modal)(todoItem);
}

// this function will call all the update function of every tab in order to 
// re-render the view todo
function renderUpdated() {
	// check what tab to re-render
	// re-render the view-todo
	if (projectTitle.innerHTML == "Inbox") return _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_5__.Inbox.update();
	if (projectTitle.innerHTML == "Today") return _today_today_js__WEBPACK_IMPORTED_MODULE_6__.Today.update();
	_personal_personal_js__WEBPACK_IMPORTED_MODULE_7__.Personal.update();
}

// this function will access the searched item
// and update all of it's value
function Update_Item() {
	const todoDetails = (0,_add_todo_get_todo_details_js__WEBPACK_IMPORTED_MODULE_2__.Get_Details)(); // get the details of the update_modal
	todoItem.due = todoDetails.due;
	todoItem.priority = todoDetails.priority;
	todoItem.title = todoDetails.title;
	todoItem.desc = todoDetails.desc;

	(0,_data_save_data_js__WEBPACK_IMPORTED_MODULE_8__.Save_Data)();
	renderUpdated();
}

function Update_Event(elements) {
	// use event manager to add events to the buttons
	(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.Event_Manager)(elements, updateTodo)
}

/***/ }),

/***/ "./src/modules/event/window_click_event.js":
/*!*************************************************!*\
  !*** ./src/modules/event/window_click_event.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Windows_Click_Event": () => (/* binding */ Windows_Click_Event)
/* harmony export */ });
/* harmony import */ var _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../top_navigation/show_modal.js */ "./src/modules/top_navigation/show_modal.js");
/* harmony import */ var _top_navigation_close_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top_navigation/close_modal.js */ "./src/modules/top_navigation/close_modal.js");


// this module will handle the click event for windows
// it's for closing all the modals

function Windows_Click_Event() {
	const addModal = document.querySelector('.modal');
	const detailModal = document.querySelector('.details-modal');
	const infoModal = document.querySelector('.info-modal');

	if ((0,_top_navigation_close_modal_js__WEBPACK_IMPORTED_MODULE_1__.CloseModal)(event, _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal.getModal()) == true) {
		if (addModal.classList.length > 1) 
			return _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal.show("show-modal");
		if (detailModal.classList.length > 1)
			return _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal.show("show-details");
		if (infoModal.classList.length > 1)
			return _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal.show("show-info"); 
	}
}



/***/ }),

/***/ "./src/modules/inbox/inbox.js":
/*!************************************!*\
  !*** ./src/modules/inbox/inbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Inbox": () => (/* binding */ Inbox)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _renderer_clear_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/clear_button_state.js */ "./src/modules/renderer/clear_button_state.js");
/* harmony import */ var _renderer_render_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/render_button_state.js */ "./src/modules/renderer/render_button_state.js");
/* harmony import */ var _renderer_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer/render.js */ "./src/modules/renderer/render.js");
/* harmony import */ var _renderer_render_personal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/render_personal.js */ "./src/modules/renderer/render_personal.js");
/* harmony import */ var _renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../renderer/clear_content.js */ "./src/modules/renderer/clear_content.js");






// will module will take care for the inbox tab
// it will show all the todo item/s

const projectTitle = document.querySelector('.project-title');
const btnInbox = document.querySelector('#show-inbox');

const Inbox = (function() {
	btnInbox.addEventListener('click', render);

	function render() {
		// change the project title
		(0,_renderer_clear_button_state_js__WEBPACK_IMPORTED_MODULE_1__.Clear_Button_State)();
		(0,_renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_5__.Clear_Content)();
		(0,_renderer_render_button_state_js__WEBPACK_IMPORTED_MODULE_2__.Render_Button_State)("#show-inbox");
		projectTitle.innerHTML = "Inbox";
		// check if collection is not null
		if (_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections === null) return
		;(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_3__.Render_Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox);
		(0,_renderer_render_personal_js__WEBPACK_IMPORTED_MODULE_4__.Render_Personal)();
	}

	// this function will be used when the todo list is updated
	// and the view todo has to be rerendered.
	function update() {
		(0,_renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_5__.Clear_Content)();
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_3__.Render_Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox);
		(0,_renderer_render_personal_js__WEBPACK_IMPORTED_MODULE_4__.Render_Personal)();
	}

	return {
		render,
		update
	}
})();


/***/ }),

/***/ "./src/modules/item_adder/adder.js":
/*!*****************************************!*\
  !*** ./src/modules/item_adder/adder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adder_Todo": () => (/* binding */ Adder_Todo)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _title_checker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title_checker.js */ "./src/modules/item_adder/title_checker.js");
/* harmony import */ var _project_checker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project_checker.js */ "./src/modules/item_adder/project_checker.js");
/* harmony import */ var _data_save_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/save_data.js */ "./src/modules/data/save_data.js");




// this module has multiple purpose
// this can add a todo to the todoList
// or even add a new personal project

// check the project title in order to know if the todo is for personal or inbox
function Adder_Todo(itemDetails, projectTitle) {
	// inbox
	if ((0,_title_checker_js__WEBPACK_IMPORTED_MODULE_1__.Title_Checker)(projectTitle)) {
		_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox.push(itemDetails);
	}else{
		// if project title does not exist. Create it
		// else just add it to the project
		if((0,_project_checker_js__WEBPACK_IMPORTED_MODULE_2__.Project_Checker)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal, projectTitle)) {
			_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[projectTitle].push(itemDetails)
		}else{
			_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[projectTitle] = [];
			_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[projectTitle].push(itemDetails)
		}
	}
	console.log(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections)
	return _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections; // return the whole collection
}

/***/ }),

/***/ "./src/modules/item_adder/project_adder.js":
/*!*************************************************!*\
  !*** ./src/modules/item_adder/project_adder.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Adder_Personal_Project": () => (/* binding */ Adder_Personal_Project)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _validation_validate_project_adder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../validation/validate_project_adder.js */ "./src/modules/validation/validate_project_adder.js");
/* harmony import */ var _data_save_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/save_data.js */ "./src/modules/data/save_data.js");



// this will handle the adding of personal project to the personal project object

const inputPersonalProject = document.querySelector('#add-input-project');
function Adder_Personal_Project() {
	if (!(0,_validation_validate_project_adder_js__WEBPACK_IMPORTED_MODULE_1__.Validate_Project_Adder)()) return alert("Please fill the project title");

	_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.personalProjectCollection.push(inputPersonalProject.value); // add the personal project to the array
	(0,_data_save_data_js__WEBPACK_IMPORTED_MODULE_2__.Save_Data)();
}

/***/ }),

/***/ "./src/modules/item_adder/project_checker.js":
/*!***************************************************!*\
  !*** ./src/modules/item_adder/project_checker.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project_Checker": () => (/* binding */ Project_Checker)
/* harmony export */ });
// this module will check if a key exits

function Project_Checker(todoCollections, projectTitle) {
	if (todoCollections.hasOwnProperty(projectTitle))
		return true;
	return false;
};

/***/ }),

/***/ "./src/modules/item_adder/title_checker.js":
/*!*************************************************!*\
  !*** ./src/modules/item_adder/title_checker.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Title_Checker": () => (/* binding */ Title_Checker)
/* harmony export */ });
// this module will check the project title in order to know
// - if the project is for the personal projects
// - or only for the inbox project

function Title_Checker(projectTitle) {
	// check the project title. If it's Inbox then return true
	// otherwise false
	if (projectTitle == "Inbox" || projectTitle == "Today") 
		return true;
	return false;
};

/***/ }),

/***/ "./src/modules/personal/add_project.js":
/*!*********************************************!*\
  !*** ./src/modules/personal/add_project.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Add_Project": () => (/* binding */ Add_Project)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _item_adder_project_adder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item_adder/project_adder.js */ "./src/modules/item_adder/project_adder.js");
/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal.js */ "./src/modules/personal/personal.js");



// this module will handle the adding of personal project

const btnAddProject = document.querySelector('#add-new-project');
const Add_Project = (function() {
	btnAddProject.addEventListener('click', addPersonalProject);

	// function callback for the add project button
	function addPersonalProject() {
		(0,_item_adder_project_adder_js__WEBPACK_IMPORTED_MODULE_1__.Adder_Personal_Project)();
		_personal_js__WEBPACK_IMPORTED_MODULE_2__.Personal.renderPersonalProject();
	}
})();

/***/ }),

/***/ "./src/modules/personal/cancel_adding_project.js":
/*!*******************************************************!*\
  !*** ./src/modules/personal/cancel_adding_project.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cancel_Project": () => (/* binding */ Cancel_Project)
/* harmony export */ });
/* harmony import */ var _renderer_render_project_adder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/render_project_adder.js */ "./src/modules/renderer/render_project_adder.js");

// this will handle the cancel button in adding project pop up
// it will hide the project adder then show the create new project

const btnCancel = document.querySelector('#cancel-new-project');
const Cancel_Project = (function() {
	btnCancel.addEventListener('click', () => {
		(0,_renderer_render_project_adder_js__WEBPACK_IMPORTED_MODULE_0__.Render_Project_Adder)();
	});
})();

/***/ }),

/***/ "./src/modules/personal/clear_input.js":
/*!*********************************************!*\
  !*** ./src/modules/personal/clear_input.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clear_Input": () => (/* binding */ Clear_Input)
/* harmony export */ });
// this will clear the input field for adding a new personal project

const inputPersonalProject = document.querySelector('#add-input-project');
function Clear_Input() {
	inputPersonalProject.value = "";
};


/***/ }),

/***/ "./src/modules/personal/personal.js":
/*!******************************************!*\
  !*** ./src/modules/personal/personal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Personal": () => (/* binding */ Personal)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _renderer_render_project_adder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/render_project_adder.js */ "./src/modules/renderer/render_project_adder.js");
/* harmony import */ var _renderer_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/render.js */ "./src/modules/renderer/render.js");
/* harmony import */ var _renderer_render_button_state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer/render_button_state.js */ "./src/modules/renderer/render_button_state.js");
/* harmony import */ var _renderer_clear_button_state_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/clear_button_state.js */ "./src/modules/renderer/clear_button_state.js");
/* harmony import */ var _cancel_adding_project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cancel_adding_project.js */ "./src/modules/personal/cancel_adding_project.js");
/* harmony import */ var _renderer_render_personal_project_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../renderer/render_personal_project.js */ "./src/modules/renderer/render_personal_project.js");
/* harmony import */ var _add_project_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add_project.js */ "./src/modules/personal/add_project.js");
/* harmony import */ var _clear_input_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clear_input.js */ "./src/modules/personal/clear_input.js");
/* harmony import */ var _renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../renderer/clear_content.js */ "./src/modules/renderer/clear_content.js");











const projectTitle = document.querySelector('.project-title');
const btnNewProject = document.querySelector("#create-personal");

const Personal = (function() {
	btnNewProject.addEventListener('click', _renderer_render_project_adder_js__WEBPACK_IMPORTED_MODULE_1__.Render_Project_Adder);

	function renderProject() {
		(0,_renderer_render_personal_project_js__WEBPACK_IMPORTED_MODULE_6__.Render_Personal_Project)();
	}

	// this function will render all the created personal projects
	function renderPersonalProject() {
		(0,_renderer_render_personal_project_js__WEBPACK_IMPORTED_MODULE_6__.Render_Personal_Project)();
		(0,_renderer_render_project_adder_js__WEBPACK_IMPORTED_MODULE_1__.Render_Project_Adder)();
		(0,_clear_input_js__WEBPACK_IMPORTED_MODULE_8__.Clear_Input)();
	}	

	// this function will handle all the rendering for the view-todo view 
	// this will be only called by the use of side navigation project title
	function render(e) {
		(0,_renderer_clear_button_state_js__WEBPACK_IMPORTED_MODULE_4__.Clear_Button_State)();
		(0,_renderer_render_button_state_js__WEBPACK_IMPORTED_MODULE_3__.Render_Button_State)("#show-personal");
		(0,_renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_9__.Clear_Content)(); // clear all the content inside the main view todo
		// get the target innerHTML and use it to change project title
		projectTitle.innerHTML = e.target.innerHTML;
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_2__.Render_Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[projectTitle.innerHTML])
	}

	// this function will update the view-todo once the projectCollection is updated
	function update() {
		(0,_renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_9__.Clear_Content)(); // clear all the content inside the main view todo
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_2__.Render_Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[projectTitle.innerHTML])
	}

	return {
		renderPersonalProject,
		renderProject,	
		render,
		update
	}
})();

/***/ }),

/***/ "./src/modules/renderer/clear_button_state.js":
/*!****************************************************!*\
  !*** ./src/modules/renderer/clear_button_state.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clear_Button_State": () => (/* binding */ Clear_Button_State)
/* harmony export */ });
// this module will remove the active state of the button
// in order to add the active state to the other button

const BUTTON_ELEMENTS = ["#show-inbox", "#show-today", "#show-personal"];
function Clear_Button_State() {
	BUTTON_ELEMENTS.forEach((buttons) => {
		document.querySelector(buttons).classList.remove('active');
	});
};

/***/ }),

/***/ "./src/modules/renderer/clear_content.js":
/*!***********************************************!*\
  !*** ./src/modules/renderer/clear_content.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clear_Content": () => (/* binding */ Clear_Content)
/* harmony export */ });
// This js module will clear the content of a parent node
// it will get the parent node then get the first element child
// while there's still a child keep looping
// 	inside the loop it will remove the child then get the child again

function Clear_Content() {
	const contentParent = document.querySelector('#todo-list');
	if (contentParent.hasChildNodes()) {
		let child = contentParent.firstElementChild;
		while(child) {
			contentParent.removeChild(child)
			child = contentParent.firstElementChild;
		}
	}
};

/***/ }),

/***/ "./src/modules/renderer/render.js":
/*!****************************************!*\
  !*** ./src/modules/renderer/render.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Todo": () => (/* binding */ Render_Todo)
/* harmony export */ });
/* harmony import */ var _container_todo_container_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../container/todo_container.js */ "./src/modules/container/todo_container.js");
/* harmony import */ var _event_update_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/update_event.js */ "./src/modules/event/update_event.js");
/* harmony import */ var _event_delete_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/delete_event.js */ "./src/modules/event/delete_event.js");
/* harmony import */ var _event_status_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/status_event.js */ "./src/modules/event/status_event.js");
/* harmony import */ var _event_details_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/details_event.js */ "./src/modules/event/details_event.js");
/* harmony import */ var _render_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render_status.js */ "./src/modules/renderer/render_status.js");






// this will let us render all the todo item collestions
// using the container

const todoList = document.querySelector('#todo-list');
function Render_Todo(todoCollection) {
	// check if the todoCollection is not undefined
	// check if there's a value to the todoCollection object
	if (todoCollection != undefined) {
		if (Object.keys(todoCollection).length != 0) {
			todoList.innerHTML += todoCollection.map((item) => {
				return (0,_container_todo_container_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Container)(item);
			}).join(''); 

			// get all the update and delete buttons to add events
			let btnUpdateElements = document.querySelectorAll('#edit-todo');
			let btnDeleteElements = document.querySelectorAll('#delete-todo');
			let cbStatusElements = document.querySelectorAll('#cbStatus');
			let todoItemElements = document.querySelectorAll('.list-item');

			// then call the event managers for update and delete
			(0,_event_update_event_js__WEBPACK_IMPORTED_MODULE_1__.Update_Event)(btnUpdateElements);
			(0,_event_delete_event_js__WEBPACK_IMPORTED_MODULE_2__.Delete_Event)(btnDeleteElements);
			(0,_event_status_event_js__WEBPACK_IMPORTED_MODULE_3__.Status_Event)(cbStatusElements);
			(0,_event_details_event_js__WEBPACK_IMPORTED_MODULE_4__.Details_Event)(todoItemElements);
			(0,_render_status_js__WEBPACK_IMPORTED_MODULE_5__.Render_Status)(cbStatusElements);
		}
	}else {
		return undefined;
	}
}

/***/ }),

/***/ "./src/modules/renderer/render_add_project.js":
/*!****************************************************!*\
  !*** ./src/modules/renderer/render_add_project.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Add_Project": () => (/* binding */ Render_Add_Project)
/* harmony export */ });
// this module will toggle the show class of the create new project button
// in order to hide it once the project adder shows
// then show it once the project adder is hidden

const addProject = document.querySelector('.new-personal');
function Render_Add_Project() {
	addProject.classList.toggle("show-new-personal");
};

/***/ }),

/***/ "./src/modules/renderer/render_button_state.js":
/*!*****************************************************!*\
  !*** ./src/modules/renderer/render_button_state.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Button_State": () => (/* binding */ Render_Button_State)
/* harmony export */ });
// this module will set the state of the button once clicked.
// once the side buttons is clicked, the button will be added a class

function Render_Button_State(element) {
	document.querySelector(element).classList.add("active");
}

/***/ }),

/***/ "./src/modules/renderer/render_personal.js":
/*!*************************************************!*\
  !*** ./src/modules/renderer/render_personal.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Personal": () => (/* binding */ Render_Personal)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/modules/renderer/render.js");


// this will handle the rendering of personal project to the main view-todo using Inbox 
// rendering of the personal projects todo

function Render_Personal() {
	const personalProjects = Object.keys(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal); // get the keys of personal projects
	// check if personal object is not empty
	if (personalProjects.length != 0) {
		// not empty
		personalProjects.forEach((project) => {
			// loop in every project and render all todo item it has
			(0,_render_js__WEBPACK_IMPORTED_MODULE_1__.Render_Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[project]);
		});
	}
};

/***/ }),

/***/ "./src/modules/renderer/render_personal_project.js":
/*!*********************************************************!*\
  !*** ./src/modules/renderer/render_personal_project.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Personal_Project": () => (/* binding */ Render_Personal_Project)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _container_personal_container_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/personal_container.js */ "./src/modules/container/personal_container.js");
/* harmony import */ var _event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../event/event_manager.js */ "./src/modules/event/event_manager.js");
/* harmony import */ var _personal_personal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../personal/personal.js */ "./src/modules/personal/personal.js");




// this will render all the personal project to the DOM

const personalProjectList = document.querySelector('#personal-project-list');
function Render_Personal_Project() {
	let personalProjectCollection = _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.personalProjectCollection;
	if (personalProjectCollection.length != 0) {
		personalProjectList.innerHTML = personalProjectCollection.map((project) => {
			return (0,_container_personal_container_js__WEBPACK_IMPORTED_MODULE_1__.Personal_Container)(project);
		}).join('');

		let btnPersonalProjects = document.querySelectorAll('#btnPersonalProject');
		// this will call the event manager in order to add event listeners to the personal project
		(0,_event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__.Event_Manager)(btnPersonalProjects, _personal_personal_js__WEBPACK_IMPORTED_MODULE_3__.Personal.render);
	}
};


/***/ }),

/***/ "./src/modules/renderer/render_project_adder.js":
/*!******************************************************!*\
  !*** ./src/modules/renderer/render_project_adder.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Project_Adder": () => (/* binding */ Render_Project_Adder)
/* harmony export */ });
/* harmony import */ var _renderer_render_add_project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/render_add_project.js */ "./src/modules/renderer/render_add_project.js");

// this module will toggle the class of project pop up adder
// in order to show it

const projectPopUp = document.querySelector(".project-pop-up");
const Render_Project_Adder = (function() {
	(0,_renderer_render_add_project_js__WEBPACK_IMPORTED_MODULE_0__.Render_Add_Project)();
	projectPopUp.classList.toggle("show-pop-up");
});

/***/ }),

/***/ "./src/modules/renderer/render_status.js":
/*!***********************************************!*\
  !*** ./src/modules/renderer/render_status.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Status": () => (/* binding */ Render_Status)
/* harmony export */ });
// this module will render the status checkbox
// if the status is undefined leave the checkbox as it is
// if status if finished make the checkbox checked

function Render_Status(elements) {
	elements.forEach( (status) => {
		if (status.alt == "undefined") return

		status.setAttribute("checked", true)
	});
}

/***/ }),

/***/ "./src/modules/renderer/render_update_modal.js":
/*!*****************************************************!*\
  !*** ./src/modules/renderer/render_update_modal.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Render_Update_Modal": () => (/* binding */ Render_Update_Modal)
/* harmony export */ });
/* harmony import */ var _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../top_navigation/show_modal.js */ "./src/modules/top_navigation/show_modal.js");
/* harmony import */ var _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../event/window_click_event.js */ "./src/modules/event/window_click_event.js");


// this render module will handle the rendering of modal for updating the todo item
// this will reuse the show-modal class element for adding todo
// but will change the innerHTML of the button from "Add" to "Update"

const updateButton = document.querySelector('#add-item');
function Render_Update_Modal() {
	_top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal.show("show-modal");
	updateButton.innerHTML = "Update";
	window.addEventListener('click', _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_1__.Windows_Click_Event);
}


/***/ }),

/***/ "./src/modules/side-navigation/side_navigation.js":
/*!********************************************************!*\
  !*** ./src/modules/side-navigation/side_navigation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Side_Navigation": () => (/* binding */ Side_Navigation)
/* harmony export */ });
/* harmony import */ var _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inbox/inbox.js */ "./src/modules/inbox/inbox.js");
/* harmony import */ var _today_today_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../today/today.js */ "./src/modules/today/today.js");
/* harmony import */ var _personal_personal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../personal/personal.js */ "./src/modules/personal/personal.js");



// this module is for the side navigations

const Side_Navigation = (function() {
	// once the window is done loading.
	// show the inbox tab defualt
	window.onload = () => {
		_inbox_inbox_js__WEBPACK_IMPORTED_MODULE_0__.Inbox.render();
		_personal_personal_js__WEBPACK_IMPORTED_MODULE_2__.Personal.renderProject();
	};
})();


/***/ }),

/***/ "./src/modules/today/filter_project.js":
/*!*********************************************!*\
  !*** ./src/modules/today/filter_project.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter_Project": () => (/* binding */ Filter_Project)
/* harmony export */ });
// this module will filter the project todo's
// it will look through the personal key check if it's length is not 0 (means it has user project)
// then check inside that array custom project then check the other custom project

function Filter_Project(todoCollection, callBackFunc) {
	// iterate using for..of
	let filteredCollection = []; // assign the filtered collection here
	const projectKeys = Object.keys(todoCollection); // get the keys of the object
	for(const key of projectKeys) {
		// then iterate through the project using the key
		// filteredCollection.push(todoCollection[key].filter(callBackFunc));
		todoCollection[key].filter((item) => {
			if (callBackFunc(item)) {
				filteredCollection.push(item)
			}
		});
	}

	return filteredCollection;
};

/***/ }),

/***/ "./src/modules/today/filter_todo.js":
/*!******************************************!*\
  !*** ./src/modules/today/filter_todo.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filtered_Today": () => (/* binding */ Filtered_Today)
/* harmony export */ });
/* harmony import */ var _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/todo_data.js */ "./src/modules/data/todo_data.js");
/* harmony import */ var _filter_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter_project.js */ "./src/modules/today/filter_project.js");
/* harmony import */ var _date_current_date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date/current_date.js */ "./src/modules/date/current_date.js");



// this module will filter the todo collection
// then return the new filtered todo collections

const Filtered_Today = (function() {

	// this function will be the callback function
	// in order to check every todo inside the todoCollection
	// and compare the current date to the due date
	function dueToday(item) {
		if (item.due == _date_current_date_js__WEBPACK_IMPORTED_MODULE_2__.Current_Date)
			return true;
		return false
	}

	// this will return the filteredCollection
	function getFilteredCollection() {
		// get the todo collection from Add_Todo module
		// then filter it
		let todoCollection = _data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox;
		let filteredCollection = todoCollection.filter(dueToday);
		// filter the todo collection in personal project
		let filteredProject = (0,_filter_project_js__WEBPACK_IMPORTED_MODULE_1__.Filter_Project)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal, dueToday);

		// merge the array of filtered inbox todo and the personal project todo
		return filteredCollection.concat(filteredProject);
	}

	return {
		getFilteredCollection
	}
})();

/***/ }),

/***/ "./src/modules/today/today.js":
/*!************************************!*\
  !*** ./src/modules/today/today.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Today": () => (/* binding */ Today)
/* harmony export */ });
/* harmony import */ var _renderer_clear_button_state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../renderer/clear_button_state.js */ "./src/modules/renderer/clear_button_state.js");
/* harmony import */ var _renderer_render_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/render_button_state.js */ "./src/modules/renderer/render_button_state.js");
/* harmony import */ var _filter_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter_todo.js */ "./src/modules/today/filter_todo.js");
/* harmony import */ var _renderer_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../renderer/render.js */ "./src/modules/renderer/render.js");
/* harmony import */ var _renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../renderer/clear_content.js */ "./src/modules/renderer/clear_content.js");





// this will show all the todo that is deadline today
// it will get all the todolist collections
// then use array filtering function in order to filter
// and only return the once that is deadline today.

const projectTitle = document.querySelector('.project-title');
const btnToday = document.querySelector('#show-today');
const Today = (function() {
	btnToday.addEventListener('click', render);

	function render() {
		(0,_renderer_clear_button_state_js__WEBPACK_IMPORTED_MODULE_0__.Clear_Button_State)();
		(0,_renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_4__.Clear_Content)();
		(0,_renderer_render_button_state_js__WEBPACK_IMPORTED_MODULE_1__.Render_Button_State)("#show-today");
		projectTitle.innerHTML = "Today";
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_3__.Render_Todo)(_filter_todo_js__WEBPACK_IMPORTED_MODULE_2__.Filtered_Today.getFilteredCollection());
	}

	// this function will be used when the todo list is updated
	// and the view todo has to be rerendered.
	function update() {
		(0,_renderer_clear_content_js__WEBPACK_IMPORTED_MODULE_4__.Clear_Content)();
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_3__.Render_Todo)(_filter_todo_js__WEBPACK_IMPORTED_MODULE_2__.Filtered_Today.getFilteredCollection());
	}

	return {
		update
	}
})();

/***/ }),

/***/ "./src/modules/top_navigation/clear_modal.js":
/*!***************************************************!*\
  !*** ./src/modules/top_navigation/clear_modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Clear_Form": () => (/* binding */ Clear_Form)
/* harmony export */ });
/* harmony import */ var _date_current_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../date/current_date.js */ "./src/modules/date/current_date.js");

// this module will clear the value of all the form input
// in creating the todo item

const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');

const Clear_Form = (function() {
	inputDueDate.value = _date_current_date_js__WEBPACK_IMPORTED_MODULE_0__.Current_Date;
	inputPriority.value = "high-priority";
	inputTitle.value = "";
	inputDescription.value = "";
})


/***/ }),

/***/ "./src/modules/top_navigation/close_modal.js":
/*!***************************************************!*\
  !*** ./src/modules/top_navigation/close_modal.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloseModal": () => (/* binding */ CloseModal)
/* harmony export */ });
// this module will check if the user clicked outside the modal container
// and check if the modal container is the right one
// if true, close the modal

function CloseModal(event, modalElement) {
	if (event.target === modalElement)
		return true;
}

/***/ }),

/***/ "./src/modules/top_navigation/show_modal.js":
/*!**************************************************!*\
  !*** ./src/modules/top_navigation/show_modal.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
// this module will toggle the class of the modal element
// in order the modal to show
	
const Modal = (function() {
	let modal; // here the modal element will go

	function show(modalClass) {
		// check what modal to show
		// the get the element of the modal then toggle it's show class
		if (modalClass == "show-modal") 
			modal = document.querySelector('.modal');
		if (modalClass == "show-details") 
			modal = document.querySelector('.details-modal');
		if (modalClass == "show-info") 
			modal = document.querySelector('.info-modal');

		modal.classList.toggle(modalClass);
	}

	function getModal() {
		return modal;
	}

	return {
		show,
		getModal
	}
})();


/***/ }),

/***/ "./src/modules/top_navigation/top_navigation.js":
/*!******************************************************!*\
  !*** ./src/modules/top_navigation/top_navigation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Top_Navigation": () => (/* binding */ Top_Navigation)
/* harmony export */ });
/* harmony import */ var _clear_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear_modal.js */ "./src/modules/top_navigation/clear_modal.js");
/* harmony import */ var _add_todo_add_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add_todo/add_todo.js */ "./src/modules/add_todo/add_todo.js");
/* harmony import */ var _show_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show_modal.js */ "./src/modules/top_navigation/show_modal.js");
/* harmony import */ var _close_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close_modal.js */ "./src/modules/top_navigation/close_modal.js");
/* harmony import */ var _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event/window_click_event.js */ "./src/modules/event/window_click_event.js");





// This module will handle the click event for the buttons in top navigation
// add button and the info button

const btnAddTodo = document.querySelector('#create-todo');
const btnShowInfo = document.querySelector('#show-info');
const addButton = document.querySelector('#add-item'); // change the innerHTML to add. Might be changed because of update

const Top_Navigation = (function() {
	// add event listener to the buttons
	btnAddTodo.addEventListener('click', showModal);
	btnShowInfo.addEventListener('click', showInfo);

	function showModal() {
		(0,_clear_modal_js__WEBPACK_IMPORTED_MODULE_0__.Clear_Form)(); // make sure to reset everything
		addButton.innerHTML = "Add";
		_show_modal_js__WEBPACK_IMPORTED_MODULE_2__.Modal.show("show-modal");
		window.addEventListener('click', _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_4__.Windows_Click_Event);
	}

	function showInfo() {
		_show_modal_js__WEBPACK_IMPORTED_MODULE_2__.Modal.show("show-info");
		window.addEventListener('click', _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_4__.Windows_Click_Event);
	}
})();

/***/ }),

/***/ "./src/modules/validation/validate_project_adder.js":
/*!**********************************************************!*\
  !*** ./src/modules/validation/validate_project_adder.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validate_Project_Adder": () => (/* binding */ Validate_Project_Adder)
/* harmony export */ });
// this will validate the project adder pop up
// it will check if the input has any value before adding the project

const projectForm = document.querySelector('#add-input-project');
function Validate_Project_Adder() {
	if (projectForm.value != "") 
		return true;
	return false;
}

/***/ }),

/***/ "./src/modules/validation/validate_todo.js":
/*!*************************************************!*\
  !*** ./src/modules/validation/validate_todo.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validate_Todo": () => (/* binding */ Validate_Todo)
/* harmony export */ });
// this module will validate the todo form
// it will check if all the input has value or else
// return false (do not add todo)

const titleForm = document.forms["todo"]["title"];
const descForm = document.forms["todo"]["description"];
function Validate_Todo() {
	if(titleForm.value != "" && descForm.value != "") 
		return true;
	return false;
};

/***/ }),

/***/ "./src/modules/view-details/view_details.js":
/*!**************************************************!*\
  !*** ./src/modules/view-details/view_details.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "View_Details": () => (/* binding */ View_Details)
/* harmony export */ });
/* harmony import */ var _top_navigation_clear_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../top_navigation/clear_modal.js */ "./src/modules/top_navigation/clear_modal.js");
/* harmony import */ var _top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../top_navigation/show_modal.js */ "./src/modules/top_navigation/show_modal.js");
/* harmony import */ var _top_navigation_close_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top_navigation/close_modal.js */ "./src/modules/top_navigation/close_modal.js");
/* harmony import */ var _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event/window_click_event.js */ "./src/modules/event/window_click_event.js");





// this class is for showing and closing the details_modal
const View_Details = (function() {

	function showModal() {
		(0,_top_navigation_clear_modal_js__WEBPACK_IMPORTED_MODULE_0__.Clear_Form)(); // make sure to reset everything
		_top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_1__.Modal.show("show-details");
		// add eventListener to the window for closing the modal
		window.addEventListener('click', _event_window_click_event_js__WEBPACK_IMPORTED_MODULE_3__.Windows_Click_Event);
	}	

	return {
		showModal
	}
})();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _modules_data_load_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/data/load_data.js */ "./src/modules/data/load_data.js");
/* harmony import */ var _modules_top_navigation_top_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/top_navigation/top_navigation.js */ "./src/modules/top_navigation/top_navigation.js");
/* harmony import */ var _modules_side_navigation_side_navigation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/side-navigation/side_navigation.js */ "./src/modules/side-navigation/side_navigation.js");





(0,_modules_data_load_data_js__WEBPACK_IMPORTED_MODULE_1__.Load_Data)(); // load data from localStorage

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxVQUFVLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLGNBQWMsY0FBYyxZQUFZLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsWUFBWSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxjQUFjLGNBQWMsYUFBYSxNQUFNLE9BQU8sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsYUFBYSxjQUFjLGNBQWMsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FB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O0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0I7QUFDa0M7QUFDb0I7QUFDRztBQUMvRTtBQUNBLHFFQUFTLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9hZGRfdG9kby9hZGRfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvYWRkX3RvZG8vZ2V0X3RvZG9fZGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvYWRkX3RvZG8vdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvY29udGFpbmVyL3BlcnNvbmFsX2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvY29udGFpbmVyL3RvZG9fY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kYXRhL2xvYWRfZGF0YS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS9wb3B1bGF0ZV9kZXRhaWxzX21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kYXRhL3BvcHVsYXRlX3VwZGF0ZV9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS9zYXZlX2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2RhdGEvc2VhcmNoLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kYXRhL3NlYXJjaF9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS9zZWFyY2hfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS90b2RvX2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2RhdGUvY3VycmVudF9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9ldmVudC9kZWxldGVfZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50L2RldGFpbHNfZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50L2V2ZW50X21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50L3N0YXR1c19ldmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZXZlbnQvdXBkYXRlX2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9ldmVudC93aW5kb3dfY2xpY2tfZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2luYm94L2luYm94LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9pdGVtX2FkZGVyL2FkZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9pdGVtX2FkZGVyL3Byb2plY3RfYWRkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2l0ZW1fYWRkZXIvcHJvamVjdF9jaGVja2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9pdGVtX2FkZGVyL3RpdGxlX2NoZWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3BlcnNvbmFsL2FkZF9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wZXJzb25hbC9jYW5jZWxfYWRkaW5nX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3BlcnNvbmFsL2NsZWFyX2lucHV0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wZXJzb25hbC9wZXJzb25hbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvY2xlYXJfYnV0dG9uX3N0YXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXJlci9jbGVhcl9jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXJlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL3JlbmRlcl9hZGRfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvcmVuZGVyX2J1dHRvbl9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvcmVuZGVyX3BlcnNvbmFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXJlci9yZW5kZXJfcGVyc29uYWxfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvcmVuZGVyX3Byb2plY3RfYWRkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL3JlbmRlcl9zdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL3JlbmRlcl91cGRhdGVfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3NpZGUtbmF2aWdhdGlvbi9zaWRlX25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvZGF5L2ZpbHRlcl9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy90b2RheS9maWx0ZXJfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9kYXkvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL2NsZWFyX21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy90b3BfbmF2aWdhdGlvbi9jbG9zZV9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9wX25hdmlnYXRpb24vc2hvd19tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9wX25hdmlnYXRpb24vdG9wX25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3ZhbGlkYXRpb24vdmFsaWRhdGVfcHJvamVjdF9hZGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdmFsaWRhdGlvbi92YWxpZGF0ZV90b2RvLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy92aWV3LWRldGFpbHMvdmlld19kZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxufVxcblxcbi5idXR0b24ge1xcbiAgbWF4LXdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uYnV0dG9uLWhvdmVyOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG59XFxuXFxuLnRleHQtaG92ZXI6aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm5hdmlnYXRpb24tdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydC9zcGFuIDEyO1xcbiAgZ3JpZC1yb3c6IDE7XFxufVxcbi5uYXZpZ2F0aW9uLXRvcCAubmF2aWdhdGlvbi1wcm9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXJpZ2h0OiA1LjYyNXJlbTtcXG59XFxuLm5hdmlnYXRpb24tdG9wIC5uYXZpZ2F0aW9uLXByb3AgLmluZm8ge1xcbiAgbWFyZ2luLWxlZnQ6IDQuMDYzcmVtO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi1zaWRlIHtcXG4gIGNvbG9yOiAjQUZBRkFGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTgxRDtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQvc3BhbiAyO1xcbiAgZ3JpZC1yb3c6IDIvMTM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBtYXJnaW46IDMuNzVyZW0gYXV0byAwIGF1dG87XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciBoMiwgLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIGgzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0IC5wZXJzb25hbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAubmV3LXBlcnNvbmFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLm5ldy1wZXJzb25hbCAuYWRkLXBlcnNvbmFsIHtcXG4gIG1heC13aWR0aDogMjBweDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgI3BlcnNvbmFsLXByb2plY3QtbGlzdCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnNob3ctbmV3LXBlcnNvbmFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDkwJTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAgLnByb2plY3QtcG9wLXVwLWJ1dHRvbnMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIC5wcm9qZWN0LXBvcC11cC1idXR0b25zIGJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAgLnByb2plY3QtcG9wLXVwLWJ1dHRvbnMgI2FkZC1uZXctcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdBREVCO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCAucHJvamVjdC1wb3AtdXAtYnV0dG9ucyAjY2FuY2VsLW5ldy1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOTU2NTY7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnNob3ctcG9wLXVwIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4udmlldy10b2RvIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNC8xMjtcXG4gIGdyaWQtcm93OiAzLzEzO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXByb3AsIC52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC8qIE5vdCByZW1vdmVkIHZpYSBhcHBlYXJhbmNlICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjllbTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB3aWR0aDogMS41ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC43NWVtO1xcbiAgaGVpZ2h0OiAwLjc1ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICM1N0FERUI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAuaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjRjk1NjU2O1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAubWlkLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICM1N0FERUI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgIzhGREMyRDtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tcHJvcCAudG9kby1lZGl0IHtcXG4gIG1hcmdpbjogMCAxLjI1cmVtIDAgMS44cmVtO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjQsIDI5LCAwLjcpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgMy8xMTtcXG4gIGdyaWQtcm93OiAzLzEyO1xcbiAgY29sb3I6ICM3RTdFN0U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuMjVyZW0gNS42cmVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmR1ZS1kYXRlLFxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLnByaW9yaXR5IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMS44NzVyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmFkZC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1N0FERUI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmFkZC1idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQUZBRkFGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5kZXRhaWxzLW1vZGFsIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDI0LCAyOSwgMC43KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgMy8xMTtcXG4gIGdyaWQtcm93OiAzLzEyO1xcbiAgY29sb3I6ICM3RTdFN0U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuMjVyZW0gNS42cmVtO1xcbn1cXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLmRldGFpbHMtbW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5kdWUtZGF0ZSxcXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLnByaW9yaXR5IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMS44NzVyZW07XFxufVxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3QURFQjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmRldGFpbHMtbW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcbn1cXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQUZBRkFGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2hvdy1kZXRhaWxzIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcblxcbi5pbmZvLW1vZGFsIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDI0LCAyOSwgMC43KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG4uaW5mby1tb2RhbCAubW9kYWwtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNC8xMDtcXG4gIGdyaWQtcm93OiA0Lzk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAwIDUuNnJlbTtcXG59XFxuXFxuLnNob3ctaW5mbyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX3RvcC1uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fdmFyaWFibGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19zaWRlLW5hdmlnYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL192aWV3LXRvZG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX2RldGFpbHMtbW9kYWwuc2Nzc1wiLFwid2VicGFj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bkQvQix1QkFIeUM7RUFJekMsdUJNa0QrQztBUCtVaEQ7QU83VUc7RUFDQyxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkovRGE7RUlnRWIseUJBQUE7RUFDQSxrQkFBQTtBUCtVSjtBTzVVRztFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Qkp6RWE7RUkwRWIsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QVA4VUo7O0FPeFVBO0VObEVDLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0VBQUE7QUQ4WUQ7O0FRamFBO0VQUUMsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtEQUFBO0VBQ0EsbUNBQUE7RU9WQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUNMSGE7RUtLYixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlFQUFBO0FSdWFEO0FRcmFDO0VBQ0MsMkJBQUE7RUFDQSxhQUFBO0VQakJELGFBQUE7RUFDQSxzQk9pQjhCO0VQaEI5Qix1QkFIeUM7RUFJekMsbUJBSnlEO0VPb0J4RCxrQkFBQTtFQUNBLGNMYlk7RUtjWix5QkxmaUI7RUtnQmpCLG1CQUFBO0VBQ0EsaUJBQUE7QVIwYUY7O0FRdGFBO0VQWkMsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBRHNiRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFx0XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHRcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0QGluY2x1ZGUgdHdlbHZlQ29sdW1uKCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcblxcdG1heC13aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWhvdmVyOmhvdmVyIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcbn1cIixcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGV4dC1ob3Zlcjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMTI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuLm5hdmlnYXRpb24tdG9wIC5uYXZpZ2F0aW9uLXByb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDUuNjI1cmVtO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCAuaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogNC4wNjNyZW07XFxufVxcblxcbi5uYXZpZ2F0aW9uLXNpZGUge1xcbiAgY29sb3I6ICNBRkFGQUY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxODFEO1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydC9zcGFuIDI7XFxuICBncmlkLXJvdzogMi8xMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMy43NXJlbSBhdXRvIDAgYXV0bztcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIGgyLCAubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3QgLnBlcnNvbmFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5uZXctcGVyc29uYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAubmV3LXBlcnNvbmFsIC5hZGQtcGVyc29uYWwge1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAjcGVyc29uYWwtcHJvamVjdC1saXN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAuc2hvdy1uZXctcGVyc29uYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIGlucHV0IHtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCAucHJvamVjdC1wb3AtdXAtYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAgLnByb2plY3QtcG9wLXVwLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCAucHJvamVjdC1wb3AtdXAtYnV0dG9ucyAjYWRkLW5ldy1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1N0FERUI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIC5wcm9qZWN0LXBvcC11cC1idXR0b25zICNjYW5jZWwtbmV3LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NTY1NjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAuc2hvdy1wb3AtdXAge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi52aWV3LXRvZG8ge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA0LzEyO1xcbiAgZ3JpZC1yb3c6IDMvMTM7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tcHJvcCwgLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuOWVtO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjc1ZW07XFxuICBoZWlnaHQ6IDAuNzVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICNGOTU2NTY7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5taWQtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjOEZEQzJEO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAudG9kby1wcm9wIC50b2RvLWVkaXQge1xcbiAgbWFyZ2luOiAwIDEuMjVyZW0gMCAxLjhyZW07XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyNCwgMjksIDAuNyk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCAzLzExO1xcbiAgZ3JpZC1yb3c6IDMvMTI7XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuZHVlLWRhdGUsXFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAucHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3QURFQjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLmRldGFpbHMtbW9kYWwge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjQsIDI5LCAwLjcpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCAzLzExO1xcbiAgZ3JpZC1yb3c6IDMvMTI7XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxufVxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmR1ZS1kYXRlLFxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAucHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcXG59XFxuLmRldGFpbHMtbW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5hZGQtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdBREVCO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4uZGV0YWlscy1tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmFkZC1idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxufVxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5kZXRhaWxzLW1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmRldGFpbHMtbW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaG93LWRldGFpbHMge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuXFxuLmluZm8tbW9kYWwge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjQsIDI5LCAwLjcpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcbi5pbmZvLW1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA0LzEwO1xcbiAgZ3JpZC1yb3c6IDQvOTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICM3RTdFN0U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDAgNS42cmVtO1xcbn1cXG5cXG4uc2hvdy1pbmZvIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVwiLFwiQG1peGluIGZsZXhCb3goJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXHJcXG5cXHRhbGlnbi1pdGVtczogJGFsaWduO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdHdlbHZlQ29sdW1uKCkge1xcclxcblxcdG1heC13aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcclxcbn07XFxyXFxuXFxyXFxuQG1peGluIHNob3dNb2RhbCgpIHtcXHJcXG5cXHRvcGFjaXR5OiAxO1xcclxcblxcdHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjApO1xcclxcblxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxufVwiLFwiLm5hdmlnYXRpb24tdG9wIHtcXHJcXG5cXHRAaW5jbHVkZSBmbGV4Qm94KCRqdXN0aWZ5OiBmbGV4LWVuZCk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgLyBzcGFuIDEyO1xcclxcblxcdGdyaWQtcm93OiAxO1xcclxcblxcclxcblxcdC5uYXZpZ2F0aW9uLXByb3Age1xcclxcblxcdFxcdEBpbmNsdWRlIGZsZXhCb3g7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA1LjYyNXJlbTtcXHJcXG5cXHJcXG5cXHRcXHQuaW5mbyB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDQuMDYzcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVwiLFwiJG5hdmlnYXRpb24tdG9wOiAjRjVGNEYzO1xcclxcbiRuYXZpZ2F0aW9uLXNpZGU6ICMxNTE4MUQ7XFxyXFxuJHNpZGUtdGV4dC1jb2xvcjogI0FGQUZBRjtcXHJcXG4kaGlnaC1wcmlvcml0eTogI0Y5NTY1NjtcXHJcXG4kbWlkLXByaW9yaXR5OiAjNTdBREVCO1xcclxcbiRsb3ctcHJpb3JpdHk6ICM4RkRDMkQ7XFxyXFxuJG1vZGFsLXNoYWRlOiByZ2JhKDIxLCAyNCwgMjksIC43KTtcXHJcXG4kbW9kYWwtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kbW9kYWwtY29sb3I6ICM3RTdFN0U7XFxyXFxuJG1vZGFsLWJ1dHRvbjogIzU3QURFQjtcIixcIi5uYXZpZ2F0aW9uLXNpZGUge1xcclxcblxcdGNvbG9yOiAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXNpZGU7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IGNvbC1zdGFydCAvIHNwYW4gMjtcXHJcXG5cXHRncmlkLXJvdzogMiAvIDEzO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuXFx0LmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4sICRhbGlnbjogZmxleC1zdGFydCk7XFxyXFxuXFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdG1heC13aWR0aDogNzAlO1xcclxcblxcdFxcdG1hcmdpbjogMy43NXJlbSBhdXRvIDAgYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRoMiwgaDMge1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmFjdGl2ZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmNvbnRhaW5lci1wcm9qZWN0IHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCRqdXN0aWZ5OiBmbGV4LXN0YXJ0LCAkYWxpZ246IGZsZXgtc3RhcnQpO1xcclxcblxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFx0XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnBlcnNvbmFsIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCk7XFxyXFxuXFx0XFx0XFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdFxcdFxcdGZsZXgtd3JhcDogbm93cmFwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmNvbnRhaW5lci1wZXJzb25hbCB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lm5ldy1wZXJzb25hbCB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogMjBweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQuYWRkLXBlcnNvbmFsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXgtd2lkdGg6IDIwcHg7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQjcGVyc29uYWwtcHJvamVjdC1saXN0IHtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdFxcdFxcdGdhcDogLjVyZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5zaG93LW5ldy1wZXJzb25hbCB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnByb2plY3QtcG9wLXVwIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCRkaXJlY3Rpb246IGNvbHVtbik7XFxyXFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHRcXHRcXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0aW5wdXQge1xcclxcblxcdFxcdFxcdFxcdFxcdG1heC13aWR0aDogOTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjNyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5wcm9qZWN0LXBvcC11cC1idXR0b25zIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCRqdXN0aWZ5OiBzcGFjZS1ldmVubHkpO1xcclxcblxcdFxcdFxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRidXR0b24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdCNhZGQtbmV3LXByb2plY3Qge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRtaWQtcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdCNjYW5jZWwtbmV3LXByb2plY3Qge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRoaWdoLXByaW9yaXR5O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdC5zaG93LXBvcC11cCB7XFxyXFxuXFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHRcXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdFxcdFxcdH1cXHRcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cIixcIi52aWV3LXRvZG8ge1xcclxcblxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNCAvIDEyO1xcclxcblxcdGdyaWQtcm93OiAzIC8gMTM7XFxyXFxuXFxyXFxuXFx0LnByb2plY3QtbGlzdCB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuXFxyXFxuXFx0XFx0Lmxpc3QtaXRlbSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcXHJcXG5cXHRcXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDRyZW07XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMS42cmVtO1xcclxcblxcclxcblxcdFxcdFxcdC50b2RvLXByb3AsIC50b2RvLXRpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcblxcdFxcdFxcdFxcdC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxyXFxuXFx0XFx0XFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcblxcdFxcdFxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0LyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHRcXHQvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAwLjllbTtcXHJcXG5cXHRcXHRcXHRcXHRmb250OiBpbmhlcml0O1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxLjVlbTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDEuNWVtO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDAuNTBlbTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMC43NWVtO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMC43NWVtO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gJG1pZC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5oaWdoLXByaW9yaXR5IHtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDAuMTVlbSBzb2xpZCAkaGlnaC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lm1pZC1wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAwLjE1ZW0gc29saWQgJG1pZC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lmxvdy1wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAwLjE1ZW0gc29saWQgJGxvdy1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnRvZG8tcHJvcCB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LnRvZG8tZWRpdCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAwIDEuMjVyZW0gMCAxLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0fVxcdFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi5tb2RhbCB7XFxyXFxuXFx0QGluY2x1ZGUgdHdlbHZlQ29sdW1uKCk7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJG1vZGFsLXNoYWRlO1xcclxcblxcdC8vIGluIG9yZGVyIHRvIGhpZGUgdGhlIG1vZGFsIGF0IGZpcnN0XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcblxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxuXFxyXFxuXFx0Lm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IGNvbC1zdGFydCAzIC8gMTE7XFxyXFxuXFx0XFx0Z3JpZC1yb3c6IDMgLyAxMjtcXHJcXG5cXHRcXHRjb2xvcjogJG1vZGFsLWNvbG9yO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1iYWNrZ3JvdW5kO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0cGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxyXFxuXFxyXFxuXFx0XFx0Lm1vZGFsLXRvcCB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkanVzdGlmeTogc3BhY2UtYmV0d2Vlbik7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQuZHVlLWRhdGUsXFxyXFxuXFx0XFx0XFx0LnByaW9yaXR5IHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogLjJyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkbW9kYWwtY29sb3I7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMS44NzVyZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5hZGQtYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMTI1cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1idXR0b247XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmFkZC1idXR0b246aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1MCk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5tb2RhbC1mb3JtIGZvcm17XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4sICRhbGlnbjogZmxleC1zdGFydCk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0dGV4dGFyZWEge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0XFx0XFx0XFx0cmVzaXplOiBub25lO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMzAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjhyZW0gLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogMnB4IHNvbGlkICRzaWRlLXRleHQtY29sb3I7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRpbnB1dCB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMTI1cmVtO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8gaW4gb3JkZXIgdG8gc2hvdyB0aGUgbW9kYWwgd2l0aCBhIHNpbXBsZSBhbmltYXRpb25cXHJcXG4uc2hvdy1tb2RhbCB7XFxyXFxuXFx0QGluY2x1ZGUgc2hvd01vZGFsKCk7XFxyXFxufVwiLFwiLmRldGFpbHMtbW9kYWwge1xcclxcblxcdEBpbmNsdWRlIHR3ZWx2ZUNvbHVtbigpO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1zaGFkZTtcXHJcXG5cXHQvLyBpbiBvcmRlciB0byBoaWRlIHRoZSBtb2RhbCBhdCBmaXJzdFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcclxcblxcclxcblxcdC5tb2RhbC1jb250YWluZXIge1xcclxcblxcdFxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgMyAvIDExO1xcclxcblxcdFxcdGdyaWQtcm93OiAzIC8gMTI7XFxyXFxuXFx0XFx0Y29sb3I6ICRtb2RhbC1jb2xvcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYmFja2dyb3VuZDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDEuMjVyZW0gNS42cmVtO1xcclxcblxcclxcblxcdFxcdC5tb2RhbC10b3Age1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGp1c3RpZnk6IHNwYWNlLWJldHdlZW4pO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmR1ZS1kYXRlLFxcclxcblxcdFxcdFxcdC5wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IC4ycmVtO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJG1vZGFsLWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYWRkLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYnV0dG9uO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5hZGQtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNTApO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQubW9kYWwtZm9ybSBmb3Jte1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uLCAkYWxpZ246IGZsZXgtc3RhcnQpO1xcclxcblxcclxcblxcdFxcdFxcdHRleHRhcmVhIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcdFxcdFxcdFxcdHJlc2l6ZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDMwMHB4O1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMC44cmVtIC41cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXQge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgJHNpZGUtdGV4dC1jb2xvcjtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vIGluIG9yZGVyIHRvIHNob3cgdGhlIG1vZGFsIHdpdGggYSBzaW1wbGUgYW5pbWF0aW9uXFxyXFxuLnNob3ctZGV0YWlsc3tcXHJcXG5cXHRAaW5jbHVkZSBzaG93TW9kYWwoKTtcXHJcXG59XFxyXFxuXCIsXCIuaW5mby1tb2RhbCB7XFxyXFxuXFx0QGluY2x1ZGUgdHdlbHZlQ29sdW1uKCk7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJG1vZGFsLXNoYWRlO1xcclxcblxcdC8vIGluIG9yZGVyIHRvIGhpZGUgdGhlIG1vZGFsIGF0IGZpcnN0XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcblxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxuXFxyXFxuXFx0Lm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IGNvbC1zdGFydCA0IC8gMTA7XFxyXFxuXFx0XFx0Z3JpZC1yb3c6IDQgLyA5O1xcclxcblxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uKTtcXHJcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0Y29sb3I6ICRtb2RhbC1jb2xvcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYmFja2dyb3VuZDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDAgNS42cmVtO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8gaW4gb3JkZXIgdG8gc2hvdyB0aGUgbW9kYWwgd2l0aCBhIHNpbXBsZSBhbmltYXRpb25cXHJcXG4uc2hvdy1pbmZve1xcclxcblxcdEBpbmNsdWRlIHNob3dNb2RhbCgpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uICh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFRpdGxlX0NoZWNrZXIgfSBmcm9tICcuLi9pdGVtX2FkZGVyL3RpdGxlX2NoZWNrZXIuanMnO1xyXG5pbXBvcnQgeyBHZXRfRGV0YWlscyB9IGZyb20gXCIuL2dldF90b2RvX2RldGFpbHMuanNcIjtcclxuaW1wb3J0IHsgQ2xlYXJfRm9ybSB9IGZyb20gXCIuLi90b3BfbmF2aWdhdGlvbi9jbGVhcl9tb2RhbC5qc1wiO1xyXG5pbXBvcnQgeyBWYWxpZGF0ZV9Ub2RvIH0gZnJvbSBcIi4uL3ZhbGlkYXRpb24vdmFsaWRhdGVfdG9kby5qc1wiO1xyXG5pbXBvcnQgeyBVcGRhdGVfSXRlbSB9IGZyb20gJy4uL2V2ZW50L3VwZGF0ZV9ldmVudC5qcyc7XHJcbmltcG9ydCB7IEFkZGVyX1RvZG8gfSBmcm9tIFwiLi4vaXRlbV9hZGRlci9hZGRlci5qc1wiO1xyXG5pbXBvcnQgeyBJbmJveCB9IGZyb20gXCIuLi9pbmJveC9pbmJveC5qc1wiO1xyXG5pbXBvcnQgeyBQZXJzb25hbCB9IGZyb20gJy4uL3BlcnNvbmFsL3BlcnNvbmFsLmpzJztcclxuaW1wb3J0IHsgU2F2ZV9EYXRhIH0gZnJvbSAnLi4vZGF0YS9zYXZlX2RhdGEuanMnO1xyXG5cclxuLy8gdGhpcyBtb2R1bGUgaXMgZm9yIGFjY2Vzc2luZyB0aGUgbW9kYWwgZm9ybVxyXG4vLyBvbmNlIHRoZSBBZGQgYnV0dG9uIGlzIGNsaWNrZWQsIGl0IHdpbGwgY2hlY2sgZm9yIHJlcXVpcmVkIGZpZWxkIGlmIG9uZSBpcyBlbXB0eSwgcHJvbXB0IHRoYXQgYWxsIGZpZWxkIHNob3VsZCBiZSBmaWxsZWRcclxuLy8gaWYgYWxsIGFyZSBmaWxsZWQsIGdldCBhbGwgdGhlIGRhdGEgdGhlbiBjYWxsIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIG5ldyB0b2RvIFxyXG5cclxuY29uc3QgYnRuQWRkSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbScpO1xyXG5leHBvcnQgY29uc3QgQWRkX1RvZG8gPSAoZnVuY3Rpb24oKSB7XHJcblx0Ly8gYWRkIGV2ZW50bGlzdGVuZXIgdG8gdGhlIGJ1dHRvblxyXG5cdGJ0bkFkZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUb0RvSXRlbSk7XHJcblx0bGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XHJcblx0Ly8gVmFsaWRhdGUgdGhlIG1vZGFsIGZvcm0gZmlyc3QgaWYgYWxsIGhhcyB2YWx1ZS4gZWxzZSBzaG93IGFuIGFsZXJ0XHJcblx0Ly8gdGhpcyBmdW5jdGlvbiB3aWxsIGdldCB0aGUgZGV0YWlscyBmcm9tIHRoZSBtb2RhbCBmb3JtXHJcblx0Ly8gcmV0dXJuIHRoZSBkZXRhaWxzIGFzIGFuIG9iamVjdCB0aGVuIGFzc2lnbiBpdCB0byBpdGVtRGV0YWlsc1xyXG5cdC8vIHRoZW4gY2FsbCB0aGUgQWRkZXJfVG9kbyBpbiBvcmRlciB0byBhZGQgdGhlIG9iamVjdCB0byB0aGUgdG9kb0NvbGxlY3Rpb25cclxuXHRmdW5jdGlvbiBhZGRUb0RvSXRlbSgpIHtcclxuXHRcdC8vIGNoZWNrIGlmIHRoZSBidXR0b24gaXMgZm9yIHVwZGF0aW5nIG9yIG5vdFxyXG5cdFx0aWYgKGJ0bkFkZEl0ZW0uaW5uZXJIVE1MID09PSBcIlVwZGF0ZVwiKSB7XHJcblx0XHRcdFVwZGF0ZV9JdGVtKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdC8vIHZhbGlkYXRlIGlmIGFsbCBpbnB1dCBoYXMgdmFsdWVcclxuXHRcdGlmIChWYWxpZGF0ZV9Ub2RvKCkpIHtcclxuXHRcdFx0bGV0IGl0ZW1EZXRhaWxzID0gR2V0X0RldGFpbHMoKTtcclxuXHRcdFx0Ly8gY2hlY2sgaWYgdGhlIHVzZXIgaXMgYWRkaW5nIHRvIGluYm94IG9yIHBlcnNvbmFsIGJ5IGNoZWNraW5nIHRoZSBwcm9qZWN0IHRpdGxlXHJcblx0XHRcdGlmIChUaXRsZV9DaGVja2VyKHByb2plY3RUaXRsZS5pbm5lckhUTUwpKSB7XHJcblx0XHRcdFx0Ly8gdXNlciBpcyBhZGRpbmcgdG8gdGhlIGluYm94XHJcblx0XHRcdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucyA9IEFkZGVyX1RvZG8oaXRlbURldGFpbHMsIFwiSW5ib3hcIik7XHJcblx0XHRcdFx0SW5ib3gucmVuZGVyKCk7XHJcblx0XHRcdH1lbHNlIHtcclxuXHRcdFx0XHRUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zID0gQWRkZXJfVG9kbyhpdGVtRGV0YWlscywgcHJvamVjdFRpdGxlLmlubmVySFRNTCk7XHJcblx0XHRcdFx0UGVyc29uYWwudXBkYXRlKCk7IC8vIHVwZGF0ZSB0aGUgdmlldy10b2RvXHJcblx0XHRcdH1cclxuXHRcdFx0U2F2ZV9EYXRhKCk7XHJcblx0XHRcdENsZWFyX0Zvcm0oKTsgLy8gY2xlYXIgdGhlIGZvcm1cclxuXHRcdH1lbHNlIHtcclxuXHRcdFx0YWxlcnQoXCJGaWxsIGFsbCBmaWVsZHMhXCIpO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTtcclxuIiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi4vZGF0YS90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgaXMgZm9yIGdldHRpbmcgYWxsIHRoZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBtb2RhbFxyXG5cclxuY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWR1ZS1kYXRlJyk7XHJcbmNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtcHJpb3JpdHknKTtcclxuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC10aXRsZScpO1xyXG5jb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IGNiU3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NiU3RhdHVzJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0X0RldGFpbHMoKSB7XHRcclxuXHQvLyBjYWxsIHRoZSBmdW5jdGlvbiBmYWN0b3J5IGZvciBtYWtpbmcgYSB0b2RvIGl0ZW1cclxuXHQvLyB0aGVuIGdpdmUgdGhlIGlucHV0IHZhbHVlcyBhcyBhIHBhcmFtZXRlclxyXG5cdHJldHVybiBUb2RvKFRvZG9fRGF0YS5nZXRUb2RvSWQoKSAsaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgaW5wdXREdWVEYXRlLnZhbHVlLCBpbnB1dFByaW9yaXR5LnZhbHVlLCBcInVuZGVmaW5lZFwiKTtcclxufTsiLCIvLyB0aGlzIGlzIGEgZnVuY3Rpb24gZmFjdG9yeSBmb3IgY3JlYXRpbmcgYSBuZXcgdG9kbyBpdGVtXHJcbmV4cG9ydCBjb25zdCBUb2RvID0gKGlkLCB0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSwgc3RhdHVzKSA9PiB7XHJcblx0bGV0IHRvZG9PYmplY3QgPSB7fTsgLy8gZW1wdHkgb2JqZWN0XHJcblxyXG5cdC8vIHNldCB0aGUgcGFyYW1ldGVycyBnaXZlbiB0byB0aGUgdG9kbyBvYmplY3RcclxuXHR0b2RvT2JqZWN0LmlkID0gaWQ7XHJcblx0dG9kb09iamVjdC50aXRsZSA9IHRpdGxlO1xyXG5cdHRvZG9PYmplY3QuZGVzYyA9IGRlc2M7XHJcblx0dG9kb09iamVjdC5kdWUgPSBkdWU7XHJcblx0dG9kb09iamVjdC5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG5cdHRvZG9PYmplY3Quc3RhdHVzID0gc3RhdHVzO1xyXG5cclxuXHRyZXR1cm4gdG9kb09iamVjdDsgLy8gcmV0dXJuIHRoZSBvYmplY3RcclxufTsiLCIvLyB0aGlzIGlzIGdvaW5nIHRvIGJlIHRoZSBwZXJzb25hbCBwcm9qZWN0IGNvbnRhaW5lcnNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQZXJzb25hbF9Db250YWluZXIoaXRlbURldGFpbHMpIHtcclxuXHRyZXR1cm4gYDxoMyBjbGFzcz1cInRleHQtaG92ZXJcIiBpZD1cImJ0blBlcnNvbmFsUHJvamVjdFwiPiR7aXRlbURldGFpbHN9PC9oMz5gO1xyXG59IiwiLy8gdGhpcyBjb250YWluZXIgd2lsbCBjb250YWluIHRoZSB0b2RvIGl0ZW0gY29udGFpbmVyXHJcbi8vIGhlcmUsIGl0IHdpbGwgcmV0dXJuIGEgaHRtbCByZXByZXNlbnQgb2YgdGhlIHRvZG8gaXRlbVxyXG4vLyBpbiBvcmRlciB0byBhcHBlbmQgaXQgdG8gdGhlIERPTVxyXG5cclxuLy8gdGhpcyB3aWxsIHByb3ZpZGUgdGhlIGNvbnRhaW5lciBmb3IgY3JlYXRpbmcgdG9kbyBpdGVtXHJcbmV4cG9ydCBmdW5jdGlvbiBUb2RvX0NvbnRhaW5lcihpdGVtRGV0YWlscykge1xyXG5cdC8vIGdlbmVyYXRlIGEgdG9kbyBsaXN0IGNvbnRhaW5lclxyXG5cdC8vIHdpdGggdGhlIHZhbHVlcyBmcm9tIHRoZSBpdGVtRGV0YWlsc1xyXG5cdHJldHVybiBgPGRpdiBjbGFzcz1cImxpc3QtaXRlbVwiIGRhdGEtaWQ9XCIke2l0ZW1EZXRhaWxzLmlkfVwiPlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXRpdGxlXCI+XHJcblx0ICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkYXRhLWlkPVwiJHtpdGVtRGV0YWlscy5pZH1cIiBjbGFzcz1cIiR7aXRlbURldGFpbHMucHJpb3JpdHl9XCIgaWQ9XCJjYlN0YXR1c1wiIGFsdD1cIiR7aXRlbURldGFpbHMuc3RhdHVzfVwiPlxyXG5cdCAgICAgICAgICAgICAgICA8aDI+JHtpdGVtRGV0YWlscy50aXRsZX08L2gyPlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXByb3BcIj5cclxuXHQgICAgICAgICAgICAgICAgPGgzPiR7aXRlbURldGFpbHMuZHVlfTwvaDM+XHJcblx0ICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaW1hZ2VcIiBkYXRhLWlkPVwiJHtpdGVtRGV0YWlscy5pZH1cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24taG92ZXIgdG9kby1lZGl0XCIgaWQ9XCJlZGl0LXRvZG9cIiBzcmM9XCIuL3NyYy9pbWcvZWRpdC5wbmdcIj5cclxuXHQgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJpbWFnZVwiIGRhdGEtaWQ9XCIke2l0ZW1EZXRhaWxzLmlkfVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1ob3ZlciB0b2RvLWRlbGV0ZVwiIGlkPVwiZGVsZXRlLXRvZG9cIiBzcmM9XCIuL3NyYy9pbWcvZGVsZXRlLnBuZ1wiPlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFx0PC9kaXY+YDtcclxufSIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4vdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgU2F2ZV9EYXRhIH0gZnJvbSAnLi9zYXZlX2RhdGEuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSBsZXQncyB1cyBsb2FkIHRoZSBkYXRhIG9mIHRoZSB0b2RvQ29sbGVjdGlvbiBhbmQgdG9kb0lkIGZyb20gbG9jYWxTdG9yYWdlXHJcbi8vIGlmIGRhdGEgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxvY2FsU3RvcmFnZSBjcmVhdGUgb25lXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTG9hZF9EYXRhKCkge1xyXG5cdC8vIGNoZWNrIGlmIGRhdGEgZG9lcyBub3QgZXhpc3QgZnJvbSB0aGUgbG9jYWxTdG9yYWdlXHJcblx0aWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvQ29sbGVjdGlvbicpID09PSBudWxsICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvSWQnKSA9PT0gbnVsbCAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc29uYWxDb2xsZWN0aW9ucycpID09PSBudWxsKSB7XHJcblx0XHRUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zID0gVG9kb19EYXRhLnRvZG9EZWZhdWx0O1xyXG5cdFx0VG9kb19EYXRhLnNldElkID0gMjtcclxuXHRcdFRvZG9fRGF0YS5wZXJzb25hbFByb2plY3RDb2xsZWN0aW9uID0gWydGaXJzdCBQZXJzb25hbCddO1xyXG5cdFx0U2F2ZV9EYXRhKCk7XHJcblx0XHRyZXR1cm5cclxuXHR9XHJcblx0Ly8gaWYgaXQgZG9lcyBleGlzdFxyXG5cdFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvQ29sbGVjdGlvbnMnKSk7XHJcblx0VG9kb19EYXRhLnNldElkKHBhcnNlSW50KEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9JZCcpKSkpO1xyXG5cdFRvZG9fRGF0YS5wZXJzb25hbFByb2plY3RDb2xsZWN0aW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGVyc29uYWxDb2xsZWN0aW9ucycpKTtcclxuXHRTYXZlX0RhdGEoKTtcclxufSIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgcG9wdWxhdGUgdGhlIG1vZGFsIHdpdGggdGhlIGRldGFpbHMgb2YgdGhlIHRvZG8gaXRlbVxyXG5jb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGV0YWlscy1kdWUtZGF0ZScpO1xyXG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RldGFpbHMtdGl0bGUnKTtcclxuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXRhaWxzLWRlc2NyaXB0aW9uJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9wdWxhdGVfRGV0YWlsc19Nb2RhbCh0b2RvSXRlbSkge1xyXG5cdGlucHV0RHVlRGF0ZS52YWx1ZSA9IHRvZG9JdGVtLmR1ZTtcclxuXHRpbnB1dFRpdGxlLnZhbHVlID0gdG9kb0l0ZW0udGl0bGU7XHJcblx0aW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG9JdGVtLmRlc2M7XHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIGhhbmRsZSB0aGUgcG9wdWxhdGlvbiBvZiB0aGUgdXBkYXRlX21vZGFsXHJcbi8vIGZyb20gdGhlIGdhdGhlcmVkIGRhdGEgZnJvbSB0aGUgc2VhcmNoIG1vZHVsZVxyXG5cclxuLy8gZ2V0IGFsbCB0aGUgZWxlbWVudHMgb2YgdGhlIG1vZGFsXHJcbmNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kdWUtZGF0ZScpO1xyXG5jb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXByaW9yaXR5Jyk7XHJcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdGl0bGUnKTtcclxuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZXNjcmlwdGlvbicpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvcHVsYXRlX1VwZGF0ZV9Nb2RhbCh0b2RvSXRlbSkge1xyXG5cdGlucHV0RHVlRGF0ZS52YWx1ZSA9IHRvZG9JdGVtLmR1ZTtcclxuXHRpbnB1dFByaW9yaXR5LnZhbHVlID0gdG9kb0l0ZW0ucHJpb3JpdHk7XHJcblx0aW5wdXRUaXRsZS52YWx1ZSA9IHRvZG9JdGVtLnRpdGxlO1xyXG5cdGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSB0b2RvSXRlbS5kZXNjO1xyXG59IiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi90b2RvX2RhdGEuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSBsZXQncyB1cyBzYXZlIGRhdGEgdG8gdGhlIGxvY2FsU3RvcmFnZVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNhdmVfRGF0YSgpIHtcclxuXHRjb25zdCBTVE9SQUdFX05BTUUgPSBcInRvZG9Db2xsZWN0aW9uc1wiO1xyXG5cdGNvbnN0IElEX05BTUUgPSBcInRvZG9JZFwiO1xyXG5cdGNvbnN0IFBFUlNPTkFMX05BTUUgPSBcInBlcnNvbmFsQ29sbGVjdGlvbnNcIjtcclxuXHJcblx0Ly8gYWNjZXNzIHRoZSBzYXZlZCBvYmplY3QgaW4gdGhlIGxvY2FsU3RvcmFnZSBhbmQgc2F2ZSB0aGUgdG9kb0NvbGxlY3Rpb25zIGFuZCBpZCB0aGVyZVxyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfTkFNRSwgSlNPTi5zdHJpbmdpZnkoVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucykpO1xyXG5cdGxvY2FsU3RvcmFnZS5zZXRJdGVtKElEX05BTUUsIFRvZG9fRGF0YS5nZXRJZCgpKTtcclxuXHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShQRVJTT05BTF9OQU1FLCBKU09OLnN0cmluZ2lmeShUb2RvX0RhdGEucGVyc29uYWxQcm9qZWN0Q29sbGVjdGlvbikpO1xyXG59IiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBTZWFyY2hfSW5ib3ggfSBmcm9tICcuL3NlYXJjaF9pbmJveC5qcyc7XHJcbmltcG9ydCB7IFNlYXJjaF9Qcm9qZWN0IH0gZnJvbSAnLi9zZWFyY2hfcHJvamVjdC5qcyc7XHJcbi8vIHRoaXMgbW9kdWxlIHdpbGwgc2VhcmNoIGZvciB0aGUgc3BlY2lmaWMgdG9kbyBpdGVtXHJcbi8vIGJ5IHRoZSB1c2Ugb2YgdGhlIGlkIGtleSB0aGF0IHdpbGwgYmUgcGFzc2VkXHJcbi8vIHRoaXMgd2lsbCBjaGVjayBldmVyeSBpdGVtIGFuZCBjb21wYXJlIGVhY2ggaWQga2V5XHJcbi8vIG9uY2UgZm91bmQsIGdldCB0aGUgaW5kZXggYW5kIHJldHVybiBpdFxyXG5cclxuLy8gc2VhcmNoIHRocm91Z2ggYWxsIG9iamVjdHMgYW5kIGNvbXBhcmUgdGhlIGl0ZW0uaWQgdG8gaWQgdGhlbiByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBpdGVtXHJcbmZ1bmN0aW9uIHNlYXJjaEl0ZW0oaWQsIHRvZG9Db2xsZWN0aW9ucykge1xyXG5cdGZvcihjb25zdCBpdGVtIG9mIHRvZG9Db2xsZWN0aW9ucykge1xyXG5cdFx0aWYgKGl0ZW0uaWQgPT0gaWQpXHJcblx0XHRcdHJldHVybiB0b2RvQ29sbGVjdGlvbnMuaW5kZXhPZihpdGVtKVxyXG5cdH1cclxuXHRyZXR1cm4gLTE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2goaWQpIHtcclxuXHRsZXQgdG9kb0l0ZW07IC8vIHRoaXMgd2lsbCBob2xkIHRoZSBzZWFyY2hlZCBpdGVtXHJcblx0Ly8gY2FsbCB0aGUgc2VhcmNoaW5nIG1vZHVsZSBmb3IgdGhlIGluYm94IGFuZCBwcm9qZWN0XHJcblx0Y29uc3QgaW5ib3hLZXkgPSBTZWFyY2hfSW5ib3goaWQsIHNlYXJjaEl0ZW0pO1x0XHJcblx0Y29uc3QgeyBpdGVtS2V5LCBwcm9qZWN0S2V5IH09IFNlYXJjaF9Qcm9qZWN0KGlkLCBzZWFyY2hJdGVtKTtcclxuXHJcblx0aWYgKGluYm94S2V5ICE9IC0xKSB7XHJcblx0XHR0b2RvSXRlbSA9IFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMuaW5ib3hbaW5ib3hLZXldO1xyXG5cdH1cclxuXHRpZiAoaXRlbUtleSAhPSAtMSkge1xyXG5cdFx0dG9kb0l0ZW0gPSBUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW3Byb2plY3RLZXldW2l0ZW1LZXldO1xyXG5cdH1cclxuXHJcblx0Ly8gcmV0dXJuIG11bHRpcGxlIHZhbHVlc1xyXG5cdHJldHVybiB7XHJcblx0XHRpdGVtOiB0b2RvSXRlbSxcclxuXHRcdGluYm94S2V5OiBpbmJveEtleSxcclxuXHRcdGl0ZW1LZXk6IGl0ZW1LZXksXHJcblx0XHRwcm9qZWN0S2V5OiBwcm9qZWN0S2V5XHJcblx0fVxyXG59OyIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4vdG9kb19kYXRhLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBzZWFyY2ggaW4gdGhlIGluYm94IGNvbGxlY3Rpb25cclxuLy8gYW5kIHdpbGwgcmV0dXJuIHRoZSBpbmRleCBvZiB0aGUgaXRlbSBpZiBmb3VuZGRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hfSW5ib3goaWQsIHNlYXJjaEZ1bmMpIHtcclxuXHRjb25zdCBpdGVtS2V5ID0gc2VhcmNoRnVuYyhpZCwgVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveCk7XHJcblx0cmV0dXJuIGl0ZW1LZXk7XHJcbn0iLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuL3RvZG9fZGF0YS5qcyc7XHJcbi8vIHRoaXMgbW9kdWxlIHdpbGwgc2VhcmNoIGluIHRoZSBwcm9qZWN0IGNvbGxlY3Rpb25cclxuLy8gYW5kIHdpbGwgcmV0dXJuIHRoZSBpdGVtIGluZGV4IGlmIGZvdW5kXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2VhcmNoX1Byb2plY3QoaWQsIHNlYXJjaEZ1bmMpIHtcclxuXHRsZXQgaXRlbUtleSA9IC0xOyAvLyBkZWZhdWx0IChtZWFucywgdGhlIGl0ZW0gaXMgc3RpbGwgbm90IGZvdW5kKVxyXG5cdGxldCBwcm9qZWN0S2V5O1xyXG5cdGZvcihjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbCkpIHtcclxuXHRcdC8vIGlmIGl0ZW0ga2V5cyAhPSAtMSBzdG9wIHRoZSBsb29wLiAobWVhbnMsIHRoZSBpdGVtIGlzIGZvdW5kKVxyXG5cdFx0aWYgKGl0ZW1LZXkgIT0gLTEpIGJyZWFrXHJcblx0XHRpdGVtS2V5ID0gc2VhcmNoRnVuYyhpZCwgVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbFtrZXldKTtcclxuXHRcdHByb2plY3RLZXkgPSBrZXk7XHJcblx0fVxyXG5cdHJldHVybiB7IGl0ZW1LZXksIHByb2plY3RLZXkgfTtcclxufSIsIi8vIHRoaXMgY29udGFpbnMgYWxsIHRoZSBkYXRhIG9mIHRoZSB0b2RvIGFwcFxyXG4vLyBpbmNsdWRpbmcgdGhlIHRvZG9Db2xsZWN0aW9ucywgdGhlIHRvZG9JZCwgYW5kIHRoZSB0b2RvUHJvamVjdENvbGxlY3Rpb25zXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFRvZG9fRGF0YSA9IChmdW5jdGlvbigpIHtcclxuXHRsZXQgdG9kb0RlZmF1bHQgPSB7XHJcblx0XHRpbmJveDogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDAsXHJcblx0XHRcdFx0dGl0bGU6IFwiQWRkIHlvdXIgZmlyc3QgdG9kb1wiLFxyXG5cdFx0XHRcdGRlc2M6IFwiQ2xpY2sgdGhlIGFkZCBpY29uIGF0IHRoZSB0b3AgcmlnaHQgYW5kIHN0YXJ0IGZpbGxpbmcgeW91ciBmaXJzdCB0b2RvXCIsXHJcblx0XHRcdFx0ZHVlOiBcIjIwMjItMDItMTVcIixcclxuXHRcdFx0XHRwcmlvcml0eTogXCJoaWdoLXByaW9yaXR5XCIsXHJcblx0XHRcdFx0c3RhdHVzOiBcInVuZGVmaW5lZFwiLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0aWQ6IDEsXHJcblx0XHRcdFx0dGl0bGU6IFwiQWRkIHlvdXIgZmlyc3QgUGVyc29uYWwgUHJvamVjdFwiLFxyXG5cdFx0XHRcdGRlc2M6IFwiQ2xpY2sgdGhlIGFkZCBpY29uIGF0IHRoZSBQZXJzb25hbCB0YWIgYW5kIGdpdmUgeW91ciBmaXJzdCBwZXJzb25hbCBwcm9qZWN0IGEgdGl0bGVcIixcclxuXHRcdFx0XHRkdWU6IFwiMjAyMi0wMi0xNVwiLFxyXG5cdFx0XHRcdHByaW9yaXR5OiBcImhpZ2gtcHJpb3JpdHlcIixcclxuXHRcdFx0XHRzdGF0dXM6IFwidW5kZWZpbmVkXCIsXHJcblx0XHRcdH1cclxuXHRcdF0sXHJcblx0XHRwZXJzb25hbDoge1xyXG5cdFx0XHQnRmlyc3QgUGVyc29uYWwnOiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0aWQ6IDIsXHJcblx0XHRcdFx0XHR0aXRsZTogXCJBZGQgeW91ciBmaXJzdCBwZXJzb25hbCB0b2RvXCIsXHJcblx0XHRcdFx0XHRkZXNjOiBcIkNsaWNrIHRoZSBhZGQgaWNvbiBhdCB0aGUgdG9wIHJpZ2h0IGFuZCBmaWxsIHVwIGFsbCB0aGUgZGV0YWlsc1wiLFxyXG5cdFx0XHRcdFx0ZHVlOiBcIjIwMjItMDItMjJcIixcclxuXHRcdFx0XHRcdHByaW9yaXR5OiBcImhpZ2gtcHJpb3JpdHlcIixcclxuXHRcdFx0XHRcdHN0YXR1czogXCJ1bmRlZmluZWRcIixcclxuXHRcdFx0XHR9XHJcblx0XHRcdF1cclxuXHRcdH1cclxuXHR9XHJcblx0bGV0IHRvZG9Db2xsZWN0aW9ucyA9IHtcclxuXHRcdGluYm94OiBbXSxcclxuXHRcdHBlcnNvbmFsOiBbXVxyXG5cdH07IC8vIGhlcmUgd2lsbCBnbyB0aGUgdG9kb19jb2xsZWN0aW9uXHJcblx0bGV0IHBlcnNvbmFsUHJvamVjdENvbGxlY3Rpb24gPSBbXTsgLy8gaGVyZSB3ZSB3aWxsIGFzc2lnbiB0aGUgcGVyc29uYWwgcHJvamVjdCBjb2xsZWN0aW9uXHJcblx0bGV0IHRvZG9JZCA9IDI7XHRcclxuXHJcblx0ZnVuY3Rpb24gZ2V0VG9kb0lkKCkge1xyXG5cdFx0dG9kb0lkKys7IC8vIGluY3JlbWVudCB0aGUgaWQgaW4gb3JkZXIgZm9yIGV2ZXJ5IHRvZG8gaGF2ZSB1bmlxdWUgaWRcclxuXHRcdHJldHVybiB0b2RvSWQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRJZCgpIHtcclxuXHRcdHJldHVybiB0b2RvSWQ7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBzZXRJZChpZCkge1xyXG5cdFx0dG9kb0lkID0gaWQ7XHJcblx0fVxyXG5cdHJldHVybiB7XHJcblx0XHR0b2RvRGVmYXVsdCxcclxuXHRcdHRvZG9Db2xsZWN0aW9ucyxcclxuXHRcdHBlcnNvbmFsUHJvamVjdENvbGxlY3Rpb24sXHJcblx0XHRnZXRJZCxcclxuXHRcdGdldFRvZG9JZCxcclxuXHRcdHNldElkXHJcblx0fVxyXG59KSgpOyIsImltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCB1c2UgZGF0ZS1mbnMgdG8gZ2V0IHRoZSBjdXJyZW50IGRhdGVcclxuLy8gaW4gZm9ybWF0IHl5eXkvbW0vZGRcclxuLy8gdGhlbiByZXR1cm4gaXRcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50X0RhdGUgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGZvcm1hdChuZXcgRGF0ZSgpLCBcIlktTU0tZGRcIik7XHJcbn0pKCk7IiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi4vZGF0YS90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBFdmVudF9NYW5hZ2VyIH0gZnJvbSAnLi9ldmVudF9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vZGF0YS9zZWFyY2guanMnO1xyXG5pbXBvcnQgeyBJbmJveCB9IGZyb20gJy4uL2luYm94L2luYm94LmpzJztcclxuaW1wb3J0IHsgVG9kYXkgfSBmcm9tICcuLi90b2RheS90b2RheS5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsIH0gZnJvbSAnLi4vcGVyc29uYWwvcGVyc29uYWwuanMnO1xyXG5pbXBvcnQgeyBTYXZlX0RhdGEgfSBmcm9tICcuLi9kYXRhL3NhdmVfZGF0YS5qcyc7XHJcbi8vIHRoaXMgd2lsbCBoYW5kbGUgdGhlIGFkZGluZyBvZiBkZWxldGUgZXZlbnQgdG8gYWxsIHRvZG8gbGlzdCBpdGVtc1xyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGNhbGwgYWxsIHRoZSB1cGRhdGUgZnVuY3Rpb24gb2YgZXZlcnkgdGFiIGluIG9yZGVyIHRvIFxyXG4vLyByZS1yZW5kZXIgdGhlIHZpZXcgdG9kb1xyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkKCkge1xyXG5cdC8vIGNoZWNrIHdoYXQgdGFiIHRvIHJlLXJlbmRlclxyXG5cdC8vIHJlLXJlbmRlciB0aGUgdmlldy10b2RvXHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJJbmJveFwiKSByZXR1cm4gSW5ib3gudXBkYXRlKCk7XHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJUb2RheVwiKSByZXR1cm4gVG9kYXkudXBkYXRlKCk7XHJcblx0UGVyc29uYWwudXBkYXRlKCk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oZSkge1xyXG5cdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7IC8vIHN0b3AgdGhlIGV2ZW50IGZyb20gYnViYmxpbmdcclxuXHRsZXQgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG5cdC8vIGNoZWNrIGlmIHRoZSB0b2RvSXRlbSBpcyBpbiBJbmJveCBvciBQcm9qZWN0XHJcblx0Ly8gVHJ1ZSAtPiBJbmJveCB8IEZhbHNlIC0+IFBlcnNvbmFsXHJcblx0bGV0IHNlYXJjaGVkSXRlbSA9IFNlYXJjaChpZCk7XHJcblx0aWYgKHNlYXJjaGVkSXRlbS5pbmJveEtleSAhPSAtMSlcclxuXHRcdFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMuaW5ib3guc3BsaWNlKHNlYXJjaGVkSXRlbS5pbmJveEtleSwxKTtcclxuXHRpZiAoc2VhcmNoZWRJdGVtLml0ZW1LZXkgIT0gLTEpXHJcblx0XHRUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW3NlYXJjaGVkSXRlbS5wcm9qZWN0S2V5XS5zcGxpY2Uoc2VhcmNoZWRJdGVtLml0ZW1LZXksMSk7XHJcblx0U2F2ZV9EYXRhKCk7XHJcblx0cmVuZGVyVXBkYXRlZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGVsZXRlX0V2ZW50KGVsZW1lbnRzKSB7XHJcblx0RXZlbnRfTWFuYWdlcihlbGVtZW50cywgZGVsZXRlVG9kbyk7XHJcbn0iLCJpbXBvcnQgeyBFdmVudF9NYW5hZ2VyIH0gZnJvbSAnLi9ldmVudF9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vZGF0YS9zZWFyY2guanMnO1xyXG5pbXBvcnQgeyBQb3B1bGF0ZV9EZXRhaWxzX01vZGFsIH0gZnJvbSAnLi4vZGF0YS9wb3B1bGF0ZV9kZXRhaWxzX21vZGFsLmpzJztcclxuaW1wb3J0IHsgVmlld19EZXRhaWxzIH0gZnJvbSAnLi4vdmlldy1kZXRhaWxzL3ZpZXdfZGV0YWlscy5qcydcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBoYW5kbGUgdGhlIHNob3dpbmcgb2YgZGV0YWlscyBvZiBlYWNoIHRvZG8gaXRlbVxyXG4vLyBhbmQgYWxzbyBhZGRpbmcgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRvZG8gaXRlbXMgb25jZSBjbGlja2VkXHJcblxyXG5sZXQgdG9kb0l0ZW07XHJcbi8vIHRoaXMgZnVuY3Rpb24gaXMgdGhlIG1haW4gZnVuY3Rpb24gZm9yIHZpZXdpbmcgZGV0YWlscyBvZiB0aGUgdG9kb1xyXG5mdW5jdGlvbiBzaG93RGV0YWlscyhlKSB7XHJcblx0bGV0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuXHRjb25zdCBzZWFyY2hlZEl0ZW0gPSBTZWFyY2goaWQpO1xyXG5cdHRvZG9JdGVtID0gc2VhcmNoZWRJdGVtLml0ZW07XHJcblx0UG9wdWxhdGVfRGV0YWlsc19Nb2RhbCh0b2RvSXRlbSk7XHJcblx0Vmlld19EZXRhaWxzLnNob3dNb2RhbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gRGV0YWlsc19FdmVudChlbGVtZW50cykge1xyXG5cdC8vIHVzZSBldmVudCBtYW5hZ2VyIHRvIGFkZCBldmVudHMgdG8gdGhlIGJ1dHRvbnNcclxuXHRFdmVudF9NYW5hZ2VyKGVsZW1lbnRzLCBzaG93RGV0YWlscylcclxufSIsIi8vIHRoaXMgd2lsbCBoYW5kbGUgdGhlIGFkZGluZyBvZiBldmVudCBsaXN0ZW5lcnMgdG8gbXVsdGlwbGUgZWxlbWVudHNcclxuLy8gdGhpcyBtb2R1bGUgbmVlZHMgdGhlIGFycmF5IG9mIHRoZSBlbGVtZW50cyB1c2luZyBxdWVyeVNlbGVjdG9yQWxsXHJcbi8vIHRoZW4gaXQgYWxzbyBuZWVkIHRoZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVsZW1lbnRcclxuLy8gaW4gb3JkZXIgdG8gaXRlcmF0ZSB0byBlYWNoIGVsZW1lbnQuIEl0IHdpbGwgdXNlIGZvckVhY2hcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBFdmVudF9NYW5hZ2VyKGVsZW1lbnRzLCBjYWxsQmFja0Z1bmMpIHtcclxuXHRlbGVtZW50cy5mb3JFYWNoKChlbGVtKSA9PiB7XHJcblx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGNhbGxCYWNrRnVuYyhlKSk7XHJcblx0fSk7XHJcbn07IiwiaW1wb3J0IHsgRXZlbnRfTWFuYWdlciB9IGZyb20gXCIuL2V2ZW50X21hbmFnZXIuanNcIjtcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vZGF0YS9zZWFyY2guanMnO1xyXG5pbXBvcnQgeyBJbmJveCB9IGZyb20gJy4uL2luYm94L2luYm94LmpzJztcclxuaW1wb3J0IHsgVG9kYXkgfSBmcm9tICcuLi90b2RheS90b2RheS5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsIH0gZnJvbSAnLi4vcGVyc29uYWwvcGVyc29uYWwuanMnO1xyXG5pbXBvcnQgeyBTYXZlX0RhdGEgfSBmcm9tICcuLi9kYXRhL3NhdmVfZGF0YS5qcyc7XHJcbi8vIHRoaXMgbW9kdWxlIHdpbGwgaGFuZGxlIHRoZSBhZGRpbmcgb2YgZXZlbnQgbGlzdGVuZXIgZm9yIGNoZWNrYm94ZXMgaW4gdGhlIHRvZG9cclxuLy8gdXNpbmcgdGhlIEV2ZW50IE1hbmFnZXIuXHJcbi8vIHRoaXMgd2lsbCB1cGRhdGUgdGhlIHRvZG8gc3RhdHVzIGZyb20gXCJGaW5pc2hlZFwiIC0+IFwiVW5maW5pc2hlZFwiXHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xyXG4vLyB0aGlzIGZ1bmN0aW9uIGlzIHRoZSBtYWluIGZ1bmN0aW9uIGZvciBzdGF0dXMgZXZlbnRzXHJcbmZ1bmN0aW9uIGNoYW5nZVN0YXR1cyhlKSB7XHJcblx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgLy8gc3RvcCBidWJibGluZ1xyXG5cdGxldCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWRcclxuXHRjb25zdCBzZWFyY2hlZEl0ZW0gPSAgU2VhcmNoKGlkKTtcclxuXHRsZXQgdG9kb0l0ZW0gPSBzZWFyY2hlZEl0ZW0uaXRlbTtcclxuXHR1cGRhdGVTdGF0dXModG9kb0l0ZW0pO1xyXG5cdFNhdmVfRGF0YSgpO1xyXG5cdHJlbmRlclVwZGF0ZWQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlU3RhdHVzKGl0ZW0pIHtcclxuXHRpZiAoaXRlbS5zdGF0dXMgPT0gXCJ1bmRlZmluZWRcIilcclxuXHRcdHJldHVybiBpdGVtLnN0YXR1cyA9IFwiZmluaXNoXCJcclxuXHRpZiAoaXRlbS5zdGF0dXMgPT0gXCJmaW5pc2hcIilcclxuXHRcdHJldHVybiBpdGVtLnN0YXR1cyA9IFwidW5kZWZpbmVkXCJcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGNhbGwgYWxsIHRoZSB1cGRhdGUgZnVuY3Rpb24gb2YgZXZlcnkgdGFiIGluIG9yZGVyIHRvIFxyXG4vLyByZS1yZW5kZXIgdGhlIHZpZXcgdG9kb1xyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkKCkge1xyXG5cdC8vIGNoZWNrIHdoYXQgdGFiIHRvIHJlLXJlbmRlclxyXG5cdC8vIHJlLXJlbmRlciB0aGUgdmlldy10b2RvXHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJJbmJveFwiKSByZXR1cm4gSW5ib3gudXBkYXRlKCk7XHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJUb2RheVwiKSByZXR1cm4gVG9kYXkudXBkYXRlKCk7XHJcblx0UGVyc29uYWwudXBkYXRlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdGF0dXNfRXZlbnQoZWxlbWVudHMpIHtcclxuXHRFdmVudF9NYW5hZ2VyKGVsZW1lbnRzLCBjaGFuZ2VTdGF0dXMpO1xyXG59IiwiaW1wb3J0IHsgRXZlbnRfTWFuYWdlciB9IGZyb20gJy4vZXZlbnRfbWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IFNlYXJjaCB9IGZyb20gJy4uL2RhdGEvc2VhcmNoLmpzJztcclxuaW1wb3J0IHsgR2V0X0RldGFpbHMgfSBmcm9tICcuLi9hZGRfdG9kby9nZXRfdG9kb19kZXRhaWxzLmpzJztcclxuaW1wb3J0IHsgUG9wdWxhdGVfVXBkYXRlX01vZGFsIH0gZnJvbSAnLi4vZGF0YS9wb3B1bGF0ZV91cGRhdGVfbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfVXBkYXRlX01vZGFsIH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX3VwZGF0ZV9tb2RhbC5qcyc7XHJcbmltcG9ydCB7IEluYm94IH0gZnJvbSAnLi4vaW5ib3gvaW5ib3guanMnO1xyXG5pbXBvcnQgeyBUb2RheSB9IGZyb20gJy4uL3RvZGF5L3RvZGF5LmpzJztcclxuaW1wb3J0IHsgUGVyc29uYWwgfSBmcm9tICcuLi9wZXJzb25hbC9wZXJzb25hbC5qcyc7XHJcbmltcG9ydCB7IFNhdmVfRGF0YSB9IGZyb20gJy4uL2RhdGEvc2F2ZV9kYXRhLmpzJztcclxuLy8gdGhpcyB3aWxsIGhhbmRsZSB0aGUgYWRkaW5nIG9mIGV2ZW50cyB0byBhbGwgdXBkYXRlIGJ1dHRvbnMgaW4gdG9kbyBpdGVtc1xyXG5cclxubGV0IHRvZG9JdGVtOyAvLyB0aGlzIHdpbGwgaG9sZCB0aGUgc3BlY2lmaWMgdG9kb0l0ZW1cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcclxuZnVuY3Rpb24gdXBkYXRlVG9kbyhlKSB7XHJcblx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTsgLy8gdG8gc3RvcCB0aGUgZXZlbnQgZnJvbSBidWJibGluZ1xyXG5cdGxldCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblx0Y29uc3Qgc2VhcmNoZWRJdGVtID0gU2VhcmNoKGlkKTtcclxuXHR0b2RvSXRlbSA9IHNlYXJjaGVkSXRlbS5pdGVtO1xyXG5cdFJlbmRlcl9VcGRhdGVfTW9kYWwoKTsgLy8gc2hvdyB0aGUgdXBkYXRlIG1vZGFsXHJcblx0UG9wdWxhdGVfVXBkYXRlX01vZGFsKHRvZG9JdGVtKTtcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGNhbGwgYWxsIHRoZSB1cGRhdGUgZnVuY3Rpb24gb2YgZXZlcnkgdGFiIGluIG9yZGVyIHRvIFxyXG4vLyByZS1yZW5kZXIgdGhlIHZpZXcgdG9kb1xyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkKCkge1xyXG5cdC8vIGNoZWNrIHdoYXQgdGFiIHRvIHJlLXJlbmRlclxyXG5cdC8vIHJlLXJlbmRlciB0aGUgdmlldy10b2RvXHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJJbmJveFwiKSByZXR1cm4gSW5ib3gudXBkYXRlKCk7XHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJUb2RheVwiKSByZXR1cm4gVG9kYXkudXBkYXRlKCk7XHJcblx0UGVyc29uYWwudXBkYXRlKCk7XHJcbn1cclxuXHJcbi8vIHRoaXMgZnVuY3Rpb24gd2lsbCBhY2Nlc3MgdGhlIHNlYXJjaGVkIGl0ZW1cclxuLy8gYW5kIHVwZGF0ZSBhbGwgb2YgaXQncyB2YWx1ZVxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlX0l0ZW0oKSB7XHJcblx0Y29uc3QgdG9kb0RldGFpbHMgPSBHZXRfRGV0YWlscygpOyAvLyBnZXQgdGhlIGRldGFpbHMgb2YgdGhlIHVwZGF0ZV9tb2RhbFxyXG5cdHRvZG9JdGVtLmR1ZSA9IHRvZG9EZXRhaWxzLmR1ZTtcclxuXHR0b2RvSXRlbS5wcmlvcml0eSA9IHRvZG9EZXRhaWxzLnByaW9yaXR5O1xyXG5cdHRvZG9JdGVtLnRpdGxlID0gdG9kb0RldGFpbHMudGl0bGU7XHJcblx0dG9kb0l0ZW0uZGVzYyA9IHRvZG9EZXRhaWxzLmRlc2M7XHJcblxyXG5cdFNhdmVfRGF0YSgpO1xyXG5cdHJlbmRlclVwZGF0ZWQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVwZGF0ZV9FdmVudChlbGVtZW50cykge1xyXG5cdC8vIHVzZSBldmVudCBtYW5hZ2VyIHRvIGFkZCBldmVudHMgdG8gdGhlIGJ1dHRvbnNcclxuXHRFdmVudF9NYW5hZ2VyKGVsZW1lbnRzLCB1cGRhdGVUb2RvKVxyXG59IiwiaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi90b3BfbmF2aWdhdGlvbi9zaG93X21vZGFsLmpzJztcclxuaW1wb3J0IHsgQ2xvc2VNb2RhbCB9IGZyb20gJy4uL3RvcF9uYXZpZ2F0aW9uL2Nsb3NlX21vZGFsLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciB3aW5kb3dzXHJcbi8vIGl0J3MgZm9yIGNsb3NpbmcgYWxsIHRoZSBtb2RhbHNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBXaW5kb3dzX0NsaWNrX0V2ZW50KCkge1xyXG5cdGNvbnN0IGFkZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblx0Y29uc3QgZGV0YWlsTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1tb2RhbCcpO1xyXG5cdGNvbnN0IGluZm9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvLW1vZGFsJyk7XHJcblxyXG5cdGlmIChDbG9zZU1vZGFsKGV2ZW50LCBNb2RhbC5nZXRNb2RhbCgpKSA9PSB0cnVlKSB7XHJcblx0XHRpZiAoYWRkTW9kYWwuY2xhc3NMaXN0Lmxlbmd0aCA+IDEpIFxyXG5cdFx0XHRyZXR1cm4gTW9kYWwuc2hvdyhcInNob3ctbW9kYWxcIik7XHJcblx0XHRpZiAoZGV0YWlsTW9kYWwuY2xhc3NMaXN0Lmxlbmd0aCA+IDEpXHJcblx0XHRcdHJldHVybiBNb2RhbC5zaG93KFwic2hvdy1kZXRhaWxzXCIpO1xyXG5cdFx0aWYgKGluZm9Nb2RhbC5jbGFzc0xpc3QubGVuZ3RoID4gMSlcclxuXHRcdFx0cmV0dXJuIE1vZGFsLnNob3coXCJzaG93LWluZm9cIik7IFxyXG5cdH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi4vZGF0YS90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBDbGVhcl9CdXR0b25fU3RhdGUgfSBmcm9tICcuLi9yZW5kZXJlci9jbGVhcl9idXR0b25fc3RhdGUuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfQnV0dG9uX1N0YXRlIH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX2J1dHRvbl9zdGF0ZS5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9Ub2RvIH0gZnJvbSBcIi4uL3JlbmRlcmVyL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJfUGVyc29uYWwgfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXJfcGVyc29uYWwuanMnO1xyXG5pbXBvcnQgeyBDbGVhcl9Db250ZW50IH0gZnJvbSAnLi4vcmVuZGVyZXIvY2xlYXJfY29udGVudC5qcyc7XHJcbi8vIHdpbGwgbW9kdWxlIHdpbGwgdGFrZSBjYXJlIGZvciB0aGUgaW5ib3ggdGFiXHJcbi8vIGl0IHdpbGwgc2hvdyBhbGwgdGhlIHRvZG8gaXRlbS9zXHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xyXG5jb25zdCBidG5JbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWluYm94Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ib3ggPSAoZnVuY3Rpb24oKSB7XHJcblx0YnRuSW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xyXG5cclxuXHRmdW5jdGlvbiByZW5kZXIoKSB7XHJcblx0XHQvLyBjaGFuZ2UgdGhlIHByb2plY3QgdGl0bGVcclxuXHRcdENsZWFyX0J1dHRvbl9TdGF0ZSgpO1xyXG5cdFx0Q2xlYXJfQ29udGVudCgpO1xyXG5cdFx0UmVuZGVyX0J1dHRvbl9TdGF0ZShcIiNzaG93LWluYm94XCIpO1xyXG5cdFx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9IFwiSW5ib3hcIjtcclxuXHRcdC8vIGNoZWNrIGlmIGNvbGxlY3Rpb24gaXMgbm90IG51bGxcclxuXHRcdGlmIChUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zID09PSBudWxsKSByZXR1cm5cclxuXHRcdFJlbmRlcl9Ub2RvKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMuaW5ib3gpO1xyXG5cdFx0UmVuZGVyX1BlcnNvbmFsKCk7XHJcblx0fVxyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgdXNlZCB3aGVuIHRoZSB0b2RvIGxpc3QgaXMgdXBkYXRlZFxyXG5cdC8vIGFuZCB0aGUgdmlldyB0b2RvIGhhcyB0byBiZSByZXJlbmRlcmVkLlxyXG5cdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuXHRcdENsZWFyX0NvbnRlbnQoKTtcclxuXHRcdFJlbmRlcl9Ub2RvKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMuaW5ib3gpO1xyXG5cdFx0UmVuZGVyX1BlcnNvbmFsKCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVuZGVyLFxyXG5cdFx0dXBkYXRlXHJcblx0fVxyXG59KSgpO1xyXG4iLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFRpdGxlX0NoZWNrZXIgfSBmcm9tICcuL3RpdGxlX2NoZWNrZXIuanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0X0NoZWNrZXIgfSBmcm9tICcuL3Byb2plY3RfY2hlY2tlci5qcyc7XHJcbmltcG9ydCB7IFNhdmVfRGF0YSB9IGZyb20gJy4uL2RhdGEvc2F2ZV9kYXRhLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgaGFzIG11bHRpcGxlIHB1cnBvc2VcclxuLy8gdGhpcyBjYW4gYWRkIGEgdG9kbyB0byB0aGUgdG9kb0xpc3RcclxuLy8gb3IgZXZlbiBhZGQgYSBuZXcgcGVyc29uYWwgcHJvamVjdFxyXG5cclxuLy8gY2hlY2sgdGhlIHByb2plY3QgdGl0bGUgaW4gb3JkZXIgdG8ga25vdyBpZiB0aGUgdG9kbyBpcyBmb3IgcGVyc29uYWwgb3IgaW5ib3hcclxuZXhwb3J0IGZ1bmN0aW9uIEFkZGVyX1RvZG8oaXRlbURldGFpbHMsIHByb2plY3RUaXRsZSkge1xyXG5cdC8vIGluYm94XHJcblx0aWYgKFRpdGxlX0NoZWNrZXIocHJvamVjdFRpdGxlKSkge1xyXG5cdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveC5wdXNoKGl0ZW1EZXRhaWxzKTtcclxuXHR9ZWxzZXtcclxuXHRcdC8vIGlmIHByb2plY3QgdGl0bGUgZG9lcyBub3QgZXhpc3QuIENyZWF0ZSBpdFxyXG5cdFx0Ly8gZWxzZSBqdXN0IGFkZCBpdCB0byB0aGUgcHJvamVjdFxyXG5cdFx0aWYoUHJvamVjdF9DaGVja2VyKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWwsIHByb2plY3RUaXRsZSkpIHtcclxuXHRcdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbFtwcm9qZWN0VGl0bGVdLnB1c2goaXRlbURldGFpbHMpXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbFtwcm9qZWN0VGl0bGVdID0gW107XHJcblx0XHRcdFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWxbcHJvamVjdFRpdGxlXS5wdXNoKGl0ZW1EZXRhaWxzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zKVxyXG5cdHJldHVybiBUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zOyAvLyByZXR1cm4gdGhlIHdob2xlIGNvbGxlY3Rpb25cclxufSIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4uL2RhdGEvdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgVmFsaWRhdGVfUHJvamVjdF9BZGRlciB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGVfcHJvamVjdF9hZGRlci5qcyc7XHJcbmltcG9ydCB7IFNhdmVfRGF0YSB9IGZyb20gJy4uL2RhdGEvc2F2ZV9kYXRhLmpzJztcclxuLy8gdGhpcyB3aWxsIGhhbmRsZSB0aGUgYWRkaW5nIG9mIHBlcnNvbmFsIHByb2plY3QgdG8gdGhlIHBlcnNvbmFsIHByb2plY3Qgb2JqZWN0XHJcblxyXG5jb25zdCBpbnB1dFBlcnNvbmFsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaW5wdXQtcHJvamVjdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gQWRkZXJfUGVyc29uYWxfUHJvamVjdCgpIHtcclxuXHRpZiAoIVZhbGlkYXRlX1Byb2plY3RfQWRkZXIoKSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGZpbGwgdGhlIHByb2plY3QgdGl0bGVcIik7XHJcblxyXG5cdFRvZG9fRGF0YS5wZXJzb25hbFByb2plY3RDb2xsZWN0aW9uLnB1c2goaW5wdXRQZXJzb25hbFByb2plY3QudmFsdWUpOyAvLyBhZGQgdGhlIHBlcnNvbmFsIHByb2plY3QgdG8gdGhlIGFycmF5XHJcblx0U2F2ZV9EYXRhKCk7XHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIGNoZWNrIGlmIGEga2V5IGV4aXRzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJvamVjdF9DaGVja2VyKHRvZG9Db2xsZWN0aW9ucywgcHJvamVjdFRpdGxlKSB7XHJcblx0aWYgKHRvZG9Db2xsZWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShwcm9qZWN0VGl0bGUpKVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59OyIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgY2hlY2sgdGhlIHByb2plY3QgdGl0bGUgaW4gb3JkZXIgdG8ga25vd1xyXG4vLyAtIGlmIHRoZSBwcm9qZWN0IGlzIGZvciB0aGUgcGVyc29uYWwgcHJvamVjdHNcclxuLy8gLSBvciBvbmx5IGZvciB0aGUgaW5ib3ggcHJvamVjdFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRpdGxlX0NoZWNrZXIocHJvamVjdFRpdGxlKSB7XHJcblx0Ly8gY2hlY2sgdGhlIHByb2plY3QgdGl0bGUuIElmIGl0J3MgSW5ib3ggdGhlbiByZXR1cm4gdHJ1ZVxyXG5cdC8vIG90aGVyd2lzZSBmYWxzZVxyXG5cdGlmIChwcm9qZWN0VGl0bGUgPT0gXCJJbmJveFwiIHx8IHByb2plY3RUaXRsZSA9PSBcIlRvZGF5XCIpIFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59OyIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4uL2RhdGEvdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgQWRkZXJfUGVyc29uYWxfUHJvamVjdCB9IGZyb20gJy4uL2l0ZW1fYWRkZXIvcHJvamVjdF9hZGRlci5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsIH0gZnJvbSAnLi9wZXJzb25hbC5qcyc7XHJcbi8vIHRoaXMgbW9kdWxlIHdpbGwgaGFuZGxlIHRoZSBhZGRpbmcgb2YgcGVyc29uYWwgcHJvamVjdFxyXG5cclxuY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtbmV3LXByb2plY3QnKTtcclxuZXhwb3J0IGNvbnN0IEFkZF9Qcm9qZWN0ID0gKGZ1bmN0aW9uKCkge1xyXG5cdGJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRQZXJzb25hbFByb2plY3QpO1xyXG5cclxuXHQvLyBmdW5jdGlvbiBjYWxsYmFjayBmb3IgdGhlIGFkZCBwcm9qZWN0IGJ1dHRvblxyXG5cdGZ1bmN0aW9uIGFkZFBlcnNvbmFsUHJvamVjdCgpIHtcclxuXHRcdEFkZGVyX1BlcnNvbmFsX1Byb2plY3QoKTtcclxuXHRcdFBlcnNvbmFsLnJlbmRlclBlcnNvbmFsUHJvamVjdCgpO1xyXG5cdH1cclxufSkoKTsiLCJpbXBvcnQgeyBSZW5kZXJfUHJvamVjdF9BZGRlciB9IGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlcl9wcm9qZWN0X2FkZGVyLmpzJztcclxuLy8gdGhpcyB3aWxsIGhhbmRsZSB0aGUgY2FuY2VsIGJ1dHRvbiBpbiBhZGRpbmcgcHJvamVjdCBwb3AgdXBcclxuLy8gaXQgd2lsbCBoaWRlIHRoZSBwcm9qZWN0IGFkZGVyIHRoZW4gc2hvdyB0aGUgY3JlYXRlIG5ldyBwcm9qZWN0XHJcblxyXG5jb25zdCBidG5DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FuY2VsLW5ldy1wcm9qZWN0Jyk7XHJcbmV4cG9ydCBjb25zdCBDYW5jZWxfUHJvamVjdCA9IChmdW5jdGlvbigpIHtcclxuXHRidG5DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRSZW5kZXJfUHJvamVjdF9BZGRlcigpO1xyXG5cdH0pO1xyXG59KSgpOyIsIi8vIHRoaXMgd2lsbCBjbGVhciB0aGUgaW5wdXQgZmllbGQgZm9yIGFkZGluZyBhIG5ldyBwZXJzb25hbCBwcm9qZWN0XHJcblxyXG5jb25zdCBpbnB1dFBlcnNvbmFsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaW5wdXQtcHJvamVjdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gQ2xlYXJfSW5wdXQoKSB7XHJcblx0aW5wdXRQZXJzb25hbFByb2plY3QudmFsdWUgPSBcIlwiO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9Qcm9qZWN0X0FkZGVyIH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX3Byb2plY3RfYWRkZXIuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfVG9kbyB9IGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlci5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9CdXR0b25fU3RhdGUgfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXJfYnV0dG9uX3N0YXRlLmpzJztcclxuaW1wb3J0IHsgQ2xlYXJfQnV0dG9uX1N0YXRlIH0gZnJvbSAnLi4vcmVuZGVyZXIvY2xlYXJfYnV0dG9uX3N0YXRlLmpzJztcclxuaW1wb3J0IHsgQ2FuY2VsX1Byb2plY3QgfSBmcm9tICcuL2NhbmNlbF9hZGRpbmdfcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9QZXJzb25hbF9Qcm9qZWN0IH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX3BlcnNvbmFsX3Byb2plY3QuanMnO1xyXG5pbXBvcnQgeyBBZGRfUHJvamVjdCB9IGZyb20gJy4vYWRkX3Byb2plY3QuanMnO1xyXG5pbXBvcnQgeyBDbGVhcl9JbnB1dCB9IGZyb20gJy4vY2xlYXJfaW5wdXQuanMnO1xyXG5pbXBvcnQgeyBDbGVhcl9Db250ZW50IH0gZnJvbSAnLi4vcmVuZGVyZXIvY2xlYXJfY29udGVudC5qcyc7XHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xyXG5jb25zdCBidG5OZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcmVhdGUtcGVyc29uYWxcIik7XHJcblxyXG5leHBvcnQgY29uc3QgUGVyc29uYWwgPSAoZnVuY3Rpb24oKSB7XHJcblx0YnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFJlbmRlcl9Qcm9qZWN0X0FkZGVyKTtcclxuXHJcblx0ZnVuY3Rpb24gcmVuZGVyUHJvamVjdCgpIHtcclxuXHRcdFJlbmRlcl9QZXJzb25hbF9Qcm9qZWN0KCk7XHJcblx0fVxyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgcmVuZGVyIGFsbCB0aGUgY3JlYXRlZCBwZXJzb25hbCBwcm9qZWN0c1xyXG5cdGZ1bmN0aW9uIHJlbmRlclBlcnNvbmFsUHJvamVjdCgpIHtcclxuXHRcdFJlbmRlcl9QZXJzb25hbF9Qcm9qZWN0KCk7XHJcblx0XHRSZW5kZXJfUHJvamVjdF9BZGRlcigpO1xyXG5cdFx0Q2xlYXJfSW5wdXQoKTtcclxuXHR9XHRcclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbiB3aWxsIGhhbmRsZSBhbGwgdGhlIHJlbmRlcmluZyBmb3IgdGhlIHZpZXctdG9kbyB2aWV3IFxyXG5cdC8vIHRoaXMgd2lsbCBiZSBvbmx5IGNhbGxlZCBieSB0aGUgdXNlIG9mIHNpZGUgbmF2aWdhdGlvbiBwcm9qZWN0IHRpdGxlXHJcblx0ZnVuY3Rpb24gcmVuZGVyKGUpIHtcclxuXHRcdENsZWFyX0J1dHRvbl9TdGF0ZSgpO1xyXG5cdFx0UmVuZGVyX0J1dHRvbl9TdGF0ZShcIiNzaG93LXBlcnNvbmFsXCIpO1xyXG5cdFx0Q2xlYXJfQ29udGVudCgpOyAvLyBjbGVhciBhbGwgdGhlIGNvbnRlbnQgaW5zaWRlIHRoZSBtYWluIHZpZXcgdG9kb1xyXG5cdFx0Ly8gZ2V0IHRoZSB0YXJnZXQgaW5uZXJIVE1MIGFuZCB1c2UgaXQgdG8gY2hhbmdlIHByb2plY3QgdGl0bGVcclxuXHRcdHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBlLnRhcmdldC5pbm5lckhUTUw7XHJcblx0XHRSZW5kZXJfVG9kbyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW3Byb2plY3RUaXRsZS5pbm5lckhUTUxdKVxyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbiB3aWxsIHVwZGF0ZSB0aGUgdmlldy10b2RvIG9uY2UgdGhlIHByb2plY3RDb2xsZWN0aW9uIGlzIHVwZGF0ZWRcclxuXHRmdW5jdGlvbiB1cGRhdGUoKSB7XHJcblx0XHRDbGVhcl9Db250ZW50KCk7IC8vIGNsZWFyIGFsbCB0aGUgY29udGVudCBpbnNpZGUgdGhlIG1haW4gdmlldyB0b2RvXHJcblx0XHRSZW5kZXJfVG9kbyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW3Byb2plY3RUaXRsZS5pbm5lckhUTUxdKVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHJlbmRlclBlcnNvbmFsUHJvamVjdCxcclxuXHRcdHJlbmRlclByb2plY3QsXHRcclxuXHRcdHJlbmRlcixcclxuXHRcdHVwZGF0ZVxyXG5cdH1cclxufSkoKTsiLCIvLyB0aGlzIG1vZHVsZSB3aWxsIHJlbW92ZSB0aGUgYWN0aXZlIHN0YXRlIG9mIHRoZSBidXR0b25cclxuLy8gaW4gb3JkZXIgdG8gYWRkIHRoZSBhY3RpdmUgc3RhdGUgdG8gdGhlIG90aGVyIGJ1dHRvblxyXG5cclxuY29uc3QgQlVUVE9OX0VMRU1FTlRTID0gW1wiI3Nob3ctaW5ib3hcIiwgXCIjc2hvdy10b2RheVwiLCBcIiNzaG93LXBlcnNvbmFsXCJdO1xyXG5leHBvcnQgZnVuY3Rpb24gQ2xlYXJfQnV0dG9uX1N0YXRlKCkge1xyXG5cdEJVVFRPTl9FTEVNRU5UUy5mb3JFYWNoKChidXR0b25zKSA9PiB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGJ1dHRvbnMpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG5cdH0pO1xyXG59OyIsIi8vIFRoaXMganMgbW9kdWxlIHdpbGwgY2xlYXIgdGhlIGNvbnRlbnQgb2YgYSBwYXJlbnQgbm9kZVxyXG4vLyBpdCB3aWxsIGdldCB0aGUgcGFyZW50IG5vZGUgdGhlbiBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgY2hpbGRcclxuLy8gd2hpbGUgdGhlcmUncyBzdGlsbCBhIGNoaWxkIGtlZXAgbG9vcGluZ1xyXG4vLyBcdGluc2lkZSB0aGUgbG9vcCBpdCB3aWxsIHJlbW92ZSB0aGUgY2hpbGQgdGhlbiBnZXQgdGhlIGNoaWxkIGFnYWluXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2xlYXJfQ29udGVudCgpIHtcclxuXHRjb25zdCBjb250ZW50UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xyXG5cdGlmIChjb250ZW50UGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xyXG5cdFx0bGV0IGNoaWxkID0gY29udGVudFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdHdoaWxlKGNoaWxkKSB7XHJcblx0XHRcdGNvbnRlbnRQYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcblx0XHRcdGNoaWxkID0gY29udGVudFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdH1cclxuXHR9XHJcbn07IiwiaW1wb3J0IHsgVG9kb19Db250YWluZXIgfSBmcm9tIFwiLi4vY29udGFpbmVyL3RvZG9fY29udGFpbmVyLmpzXCI7XHJcbmltcG9ydCB7IFVwZGF0ZV9FdmVudCB9IGZyb20gJy4uL2V2ZW50L3VwZGF0ZV9ldmVudC5qcyc7XHJcbmltcG9ydCB7IERlbGV0ZV9FdmVudCB9IGZyb20gJy4uL2V2ZW50L2RlbGV0ZV9ldmVudC5qcyc7XHJcbmltcG9ydCB7IFN0YXR1c19FdmVudCB9IGZyb20gJy4uL2V2ZW50L3N0YXR1c19ldmVudC5qcyc7XHJcbmltcG9ydCB7IERldGFpbHNfRXZlbnQgfSBmcm9tICcuLi9ldmVudC9kZXRhaWxzX2V2ZW50LmpzJztcclxuaW1wb3J0IHsgUmVuZGVyX1N0YXR1cyB9IGZyb20gJy4vcmVuZGVyX3N0YXR1cy5qcyc7XHJcbi8vIHRoaXMgd2lsbCBsZXQgdXMgcmVuZGVyIGFsbCB0aGUgdG9kbyBpdGVtIGNvbGxlc3Rpb25zXHJcbi8vIHVzaW5nIHRoZSBjb250YWluZXJcclxuXHJcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1RvZG8odG9kb0NvbGxlY3Rpb24pIHtcclxuXHQvLyBjaGVjayBpZiB0aGUgdG9kb0NvbGxlY3Rpb24gaXMgbm90IHVuZGVmaW5lZFxyXG5cdC8vIGNoZWNrIGlmIHRoZXJlJ3MgYSB2YWx1ZSB0byB0aGUgdG9kb0NvbGxlY3Rpb24gb2JqZWN0XHJcblx0aWYgKHRvZG9Db2xsZWN0aW9uICE9IHVuZGVmaW5lZCkge1xyXG5cdFx0aWYgKE9iamVjdC5rZXlzKHRvZG9Db2xsZWN0aW9uKS5sZW5ndGggIT0gMCkge1xyXG5cdFx0XHR0b2RvTGlzdC5pbm5lckhUTUwgKz0gdG9kb0NvbGxlY3Rpb24ubWFwKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0cmV0dXJuIFRvZG9fQ29udGFpbmVyKGl0ZW0pO1xyXG5cdFx0XHR9KS5qb2luKCcnKTsgXHJcblxyXG5cdFx0XHQvLyBnZXQgYWxsIHRoZSB1cGRhdGUgYW5kIGRlbGV0ZSBidXR0b25zIHRvIGFkZCBldmVudHNcclxuXHRcdFx0bGV0IGJ0blVwZGF0ZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2VkaXQtdG9kbycpO1xyXG5cdFx0XHRsZXQgYnRuRGVsZXRlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZGVsZXRlLXRvZG8nKTtcclxuXHRcdFx0bGV0IGNiU3RhdHVzRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjY2JTdGF0dXMnKTtcclxuXHRcdFx0bGV0IHRvZG9JdGVtRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyk7XHJcblxyXG5cdFx0XHQvLyB0aGVuIGNhbGwgdGhlIGV2ZW50IG1hbmFnZXJzIGZvciB1cGRhdGUgYW5kIGRlbGV0ZVxyXG5cdFx0XHRVcGRhdGVfRXZlbnQoYnRuVXBkYXRlRWxlbWVudHMpO1xyXG5cdFx0XHREZWxldGVfRXZlbnQoYnRuRGVsZXRlRWxlbWVudHMpO1xyXG5cdFx0XHRTdGF0dXNfRXZlbnQoY2JTdGF0dXNFbGVtZW50cyk7XHJcblx0XHRcdERldGFpbHNfRXZlbnQodG9kb0l0ZW1FbGVtZW50cyk7XHJcblx0XHRcdFJlbmRlcl9TdGF0dXMoY2JTdGF0dXNFbGVtZW50cyk7XHJcblx0XHR9XHJcblx0fWVsc2Uge1xyXG5cdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHR9XHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIHRvZ2dsZSB0aGUgc2hvdyBjbGFzcyBvZiB0aGUgY3JlYXRlIG5ldyBwcm9qZWN0IGJ1dHRvblxyXG4vLyBpbiBvcmRlciB0byBoaWRlIGl0IG9uY2UgdGhlIHByb2plY3QgYWRkZXIgc2hvd3NcclxuLy8gdGhlbiBzaG93IGl0IG9uY2UgdGhlIHByb2plY3QgYWRkZXIgaXMgaGlkZGVuXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wZXJzb25hbCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX0FkZF9Qcm9qZWN0KCkge1xyXG5cdGFkZFByb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctbmV3LXBlcnNvbmFsXCIpO1xyXG59OyIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgc2V0IHRoZSBzdGF0ZSBvZiB0aGUgYnV0dG9uIG9uY2UgY2xpY2tlZC5cclxuLy8gb25jZSB0aGUgc2lkZSBidXR0b25zIGlzIGNsaWNrZWQsIHRoZSBidXR0b24gd2lsbCBiZSBhZGRlZCBhIGNsYXNzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX0J1dHRvbl9TdGF0ZShlbGVtZW50KSB7XHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG59IiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi4vZGF0YS90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfVG9kbyB9IGZyb20gICcuL3JlbmRlci5qcyc7XHJcbi8vIHRoaXMgd2lsbCBoYW5kbGUgdGhlIHJlbmRlcmluZyBvZiBwZXJzb25hbCBwcm9qZWN0IHRvIHRoZSBtYWluIHZpZXctdG9kbyB1c2luZyBJbmJveCBcclxuLy8gcmVuZGVyaW5nIG9mIHRoZSBwZXJzb25hbCBwcm9qZWN0cyB0b2RvXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1BlcnNvbmFsKCkge1xyXG5cdGNvbnN0IHBlcnNvbmFsUHJvamVjdHMgPSBPYmplY3Qua2V5cyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsKTsgLy8gZ2V0IHRoZSBrZXlzIG9mIHBlcnNvbmFsIHByb2plY3RzXHJcblx0Ly8gY2hlY2sgaWYgcGVyc29uYWwgb2JqZWN0IGlzIG5vdCBlbXB0eVxyXG5cdGlmIChwZXJzb25hbFByb2plY3RzLmxlbmd0aCAhPSAwKSB7XHJcblx0XHQvLyBub3QgZW1wdHlcclxuXHRcdHBlcnNvbmFsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHQvLyBsb29wIGluIGV2ZXJ5IHByb2plY3QgYW5kIHJlbmRlciBhbGwgdG9kbyBpdGVtIGl0IGhhc1xyXG5cdFx0XHRSZW5kZXJfVG9kbyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW3Byb2plY3RdKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsX0NvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lci9wZXJzb25hbF9jb250YWluZXIuanMnO1xyXG5pbXBvcnQgeyBFdmVudF9NYW5hZ2VyIH0gZnJvbSAnLi4vZXZlbnQvZXZlbnRfbWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsIH0gZnJvbSAnLi4vcGVyc29uYWwvcGVyc29uYWwuanMnO1xyXG4vLyB0aGlzIHdpbGwgcmVuZGVyIGFsbCB0aGUgcGVyc29uYWwgcHJvamVjdCB0byB0aGUgRE9NXHJcblxyXG5jb25zdCBwZXJzb25hbFByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcnNvbmFsLXByb2plY3QtbGlzdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1BlcnNvbmFsX1Byb2plY3QoKSB7XHJcblx0bGV0IHBlcnNvbmFsUHJvamVjdENvbGxlY3Rpb24gPSBUb2RvX0RhdGEucGVyc29uYWxQcm9qZWN0Q29sbGVjdGlvbjtcclxuXHRpZiAocGVyc29uYWxQcm9qZWN0Q29sbGVjdGlvbi5sZW5ndGggIT0gMCkge1xyXG5cdFx0cGVyc29uYWxQcm9qZWN0TGlzdC5pbm5lckhUTUwgPSBwZXJzb25hbFByb2plY3RDb2xsZWN0aW9uLm1hcCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gUGVyc29uYWxfQ29udGFpbmVyKHByb2plY3QpO1xyXG5cdFx0fSkuam9pbignJyk7XHJcblxyXG5cdFx0bGV0IGJ0blBlcnNvbmFsUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYnRuUGVyc29uYWxQcm9qZWN0Jyk7XHJcblx0XHQvLyB0aGlzIHdpbGwgY2FsbCB0aGUgZXZlbnQgbWFuYWdlciBpbiBvcmRlciB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBwZXJzb25hbCBwcm9qZWN0XHJcblx0XHRFdmVudF9NYW5hZ2VyKGJ0blBlcnNvbmFsUHJvamVjdHMsIFBlcnNvbmFsLnJlbmRlcik7XHJcblx0fVxyXG59O1xyXG4iLCJpbXBvcnQgeyBSZW5kZXJfQWRkX1Byb2plY3QgfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXJfYWRkX3Byb2plY3QuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSB3aWxsIHRvZ2dsZSB0aGUgY2xhc3Mgb2YgcHJvamVjdCBwb3AgdXAgYWRkZXJcclxuLy8gaW4gb3JkZXIgdG8gc2hvdyBpdFxyXG5cclxuY29uc3QgcHJvamVjdFBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXBvcC11cFwiKTtcclxuZXhwb3J0IGNvbnN0IFJlbmRlcl9Qcm9qZWN0X0FkZGVyID0gKGZ1bmN0aW9uKCkge1xyXG5cdFJlbmRlcl9BZGRfUHJvamVjdCgpO1xyXG5cdHByb2plY3RQb3BVcC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1wb3AtdXBcIik7XHJcbn0pOyIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgcmVuZGVyIHRoZSBzdGF0dXMgY2hlY2tib3hcclxuLy8gaWYgdGhlIHN0YXR1cyBpcyB1bmRlZmluZWQgbGVhdmUgdGhlIGNoZWNrYm94IGFzIGl0IGlzXHJcbi8vIGlmIHN0YXR1cyBpZiBmaW5pc2hlZCBtYWtlIHRoZSBjaGVja2JveCBjaGVja2VkXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1N0YXR1cyhlbGVtZW50cykge1xyXG5cdGVsZW1lbnRzLmZvckVhY2goIChzdGF0dXMpID0+IHtcclxuXHRcdGlmIChzdGF0dXMuYWx0ID09IFwidW5kZWZpbmVkXCIpIHJldHVyblxyXG5cclxuXHRcdHN0YXR1cy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIHRydWUpXHJcblx0fSk7XHJcbn0iLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL3RvcF9uYXZpZ2F0aW9uL3Nob3dfbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBXaW5kb3dzX0NsaWNrX0V2ZW50IH0gZnJvbSAnLi4vZXZlbnQvd2luZG93X2NsaWNrX2V2ZW50LmpzJztcclxuLy8gdGhpcyByZW5kZXIgbW9kdWxlIHdpbGwgaGFuZGxlIHRoZSByZW5kZXJpbmcgb2YgbW9kYWwgZm9yIHVwZGF0aW5nIHRoZSB0b2RvIGl0ZW1cclxuLy8gdGhpcyB3aWxsIHJldXNlIHRoZSBzaG93LW1vZGFsIGNsYXNzIGVsZW1lbnQgZm9yIGFkZGluZyB0b2RvXHJcbi8vIGJ1dCB3aWxsIGNoYW5nZSB0aGUgaW5uZXJIVE1MIG9mIHRoZSBidXR0b24gZnJvbSBcIkFkZFwiIHRvIFwiVXBkYXRlXCJcclxuXHJcbmNvbnN0IHVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbScpO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1VwZGF0ZV9Nb2RhbCgpIHtcclxuXHRNb2RhbC5zaG93KFwic2hvdy1tb2RhbFwiKTtcclxuXHR1cGRhdGVCdXR0b24uaW5uZXJIVE1MID0gXCJVcGRhdGVcIjtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBXaW5kb3dzX0NsaWNrX0V2ZW50KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJbmJveCB9IGZyb20gJy4uL2luYm94L2luYm94LmpzJztcclxuaW1wb3J0IHsgVG9kYXkgfSBmcm9tICcuLi90b2RheS90b2RheS5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsIH0gZnJvbSAnLi4vcGVyc29uYWwvcGVyc29uYWwuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSBpcyBmb3IgdGhlIHNpZGUgbmF2aWdhdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBTaWRlX05hdmlnYXRpb24gPSAoZnVuY3Rpb24oKSB7XHJcblx0Ly8gb25jZSB0aGUgd2luZG93IGlzIGRvbmUgbG9hZGluZy5cclxuXHQvLyBzaG93IHRoZSBpbmJveCB0YWIgZGVmdWFsdFxyXG5cdHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0XHRJbmJveC5yZW5kZXIoKTtcclxuXHRcdFBlcnNvbmFsLnJlbmRlclByb2plY3QoKTtcclxuXHR9O1xyXG59KSgpO1xyXG4iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIGZpbHRlciB0aGUgcHJvamVjdCB0b2RvJ3NcclxuLy8gaXQgd2lsbCBsb29rIHRocm91Z2ggdGhlIHBlcnNvbmFsIGtleSBjaGVjayBpZiBpdCdzIGxlbmd0aCBpcyBub3QgMCAobWVhbnMgaXQgaGFzIHVzZXIgcHJvamVjdClcclxuLy8gdGhlbiBjaGVjayBpbnNpZGUgdGhhdCBhcnJheSBjdXN0b20gcHJvamVjdCB0aGVuIGNoZWNrIHRoZSBvdGhlciBjdXN0b20gcHJvamVjdFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEZpbHRlcl9Qcm9qZWN0KHRvZG9Db2xsZWN0aW9uLCBjYWxsQmFja0Z1bmMpIHtcclxuXHQvLyBpdGVyYXRlIHVzaW5nIGZvci4ub2ZcclxuXHRsZXQgZmlsdGVyZWRDb2xsZWN0aW9uID0gW107IC8vIGFzc2lnbiB0aGUgZmlsdGVyZWQgY29sbGVjdGlvbiBoZXJlXHJcblx0Y29uc3QgcHJvamVjdEtleXMgPSBPYmplY3Qua2V5cyh0b2RvQ29sbGVjdGlvbik7IC8vIGdldCB0aGUga2V5cyBvZiB0aGUgb2JqZWN0XHJcblx0Zm9yKGNvbnN0IGtleSBvZiBwcm9qZWN0S2V5cykge1xyXG5cdFx0Ly8gdGhlbiBpdGVyYXRlIHRocm91Z2ggdGhlIHByb2plY3QgdXNpbmcgdGhlIGtleVxyXG5cdFx0Ly8gZmlsdGVyZWRDb2xsZWN0aW9uLnB1c2godG9kb0NvbGxlY3Rpb25ba2V5XS5maWx0ZXIoY2FsbEJhY2tGdW5jKSk7XHJcblx0XHR0b2RvQ29sbGVjdGlvbltrZXldLmZpbHRlcigoaXRlbSkgPT4ge1xyXG5cdFx0XHRpZiAoY2FsbEJhY2tGdW5jKGl0ZW0pKSB7XHJcblx0XHRcdFx0ZmlsdGVyZWRDb2xsZWN0aW9uLnB1c2goaXRlbSlcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZmlsdGVyZWRDb2xsZWN0aW9uO1xyXG59OyIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4uL2RhdGEvdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgRmlsdGVyX1Byb2plY3QgfSBmcm9tICcuL2ZpbHRlcl9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgQ3VycmVudF9EYXRlIH0gZnJvbSAnLi4vZGF0ZS9jdXJyZW50X2RhdGUuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSB3aWxsIGZpbHRlciB0aGUgdG9kbyBjb2xsZWN0aW9uXHJcbi8vIHRoZW4gcmV0dXJuIHRoZSBuZXcgZmlsdGVyZWQgdG9kbyBjb2xsZWN0aW9uc1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpbHRlcmVkX1RvZGF5ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcblx0Ly8gaW4gb3JkZXIgdG8gY2hlY2sgZXZlcnkgdG9kbyBpbnNpZGUgdGhlIHRvZG9Db2xsZWN0aW9uXHJcblx0Ly8gYW5kIGNvbXBhcmUgdGhlIGN1cnJlbnQgZGF0ZSB0byB0aGUgZHVlIGRhdGVcclxuXHRmdW5jdGlvbiBkdWVUb2RheShpdGVtKSB7XHJcblx0XHRpZiAoaXRlbS5kdWUgPT0gQ3VycmVudF9EYXRlKVxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdHJldHVybiBmYWxzZVxyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyB3aWxsIHJldHVybiB0aGUgZmlsdGVyZWRDb2xsZWN0aW9uXHJcblx0ZnVuY3Rpb24gZ2V0RmlsdGVyZWRDb2xsZWN0aW9uKCkge1xyXG5cdFx0Ly8gZ2V0IHRoZSB0b2RvIGNvbGxlY3Rpb24gZnJvbSBBZGRfVG9kbyBtb2R1bGVcclxuXHRcdC8vIHRoZW4gZmlsdGVyIGl0XHJcblx0XHRsZXQgdG9kb0NvbGxlY3Rpb24gPSBUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLmluYm94O1xyXG5cdFx0bGV0IGZpbHRlcmVkQ29sbGVjdGlvbiA9IHRvZG9Db2xsZWN0aW9uLmZpbHRlcihkdWVUb2RheSk7XHJcblx0XHQvLyBmaWx0ZXIgdGhlIHRvZG8gY29sbGVjdGlvbiBpbiBwZXJzb25hbCBwcm9qZWN0XHJcblx0XHRsZXQgZmlsdGVyZWRQcm9qZWN0ID0gRmlsdGVyX1Byb2plY3QoVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbCwgZHVlVG9kYXkpO1xyXG5cclxuXHRcdC8vIG1lcmdlIHRoZSBhcnJheSBvZiBmaWx0ZXJlZCBpbmJveCB0b2RvIGFuZCB0aGUgcGVyc29uYWwgcHJvamVjdCB0b2RvXHJcblx0XHRyZXR1cm4gZmlsdGVyZWRDb2xsZWN0aW9uLmNvbmNhdChmaWx0ZXJlZFByb2plY3QpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldEZpbHRlcmVkQ29sbGVjdGlvblxyXG5cdH1cclxufSkoKTsiLCJpbXBvcnQgeyBDbGVhcl9CdXR0b25fU3RhdGUgfSBmcm9tICcuLi9yZW5kZXJlci9jbGVhcl9idXR0b25fc3RhdGUuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfQnV0dG9uX1N0YXRlIH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX2J1dHRvbl9zdGF0ZS5qcyc7XHJcbmltcG9ydCB7IEZpbHRlcmVkX1RvZGF5IH0gZnJvbSAnLi9maWx0ZXJfdG9kby5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9Ub2RvIH0gZnJvbSBcIi4uL3JlbmRlcmVyL3JlbmRlci5qc1wiO1xyXG5pbXBvcnQgeyBDbGVhcl9Db250ZW50IH0gZnJvbSAnLi4vcmVuZGVyZXIvY2xlYXJfY29udGVudC5qcyc7XHJcbi8vIHRoaXMgd2lsbCBzaG93IGFsbCB0aGUgdG9kbyB0aGF0IGlzIGRlYWRsaW5lIHRvZGF5XHJcbi8vIGl0IHdpbGwgZ2V0IGFsbCB0aGUgdG9kb2xpc3QgY29sbGVjdGlvbnNcclxuLy8gdGhlbiB1c2UgYXJyYXkgZmlsdGVyaW5nIGZ1bmN0aW9uIGluIG9yZGVyIHRvIGZpbHRlclxyXG4vLyBhbmQgb25seSByZXR1cm4gdGhlIG9uY2UgdGhhdCBpcyBkZWFkbGluZSB0b2RheS5cclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XHJcbmNvbnN0IGJ0blRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctdG9kYXknKTtcclxuZXhwb3J0IGNvbnN0IFRvZGF5ID0gKGZ1bmN0aW9uKCkge1xyXG5cdGJ0blRvZGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVuZGVyKTtcclxuXHJcblx0ZnVuY3Rpb24gcmVuZGVyKCkge1xyXG5cdFx0Q2xlYXJfQnV0dG9uX1N0YXRlKCk7XHJcblx0XHRDbGVhcl9Db250ZW50KCk7XHJcblx0XHRSZW5kZXJfQnV0dG9uX1N0YXRlKFwiI3Nob3ctdG9kYXlcIik7XHJcblx0XHRwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gXCJUb2RheVwiO1xyXG5cdFx0UmVuZGVyX1RvZG8oRmlsdGVyZWRfVG9kYXkuZ2V0RmlsdGVyZWRDb2xsZWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIHVzZWQgd2hlbiB0aGUgdG9kbyBsaXN0IGlzIHVwZGF0ZWRcclxuXHQvLyBhbmQgdGhlIHZpZXcgdG9kbyBoYXMgdG8gYmUgcmVyZW5kZXJlZC5cclxuXHRmdW5jdGlvbiB1cGRhdGUoKSB7XHJcblx0XHRDbGVhcl9Db250ZW50KCk7XHJcblx0XHRSZW5kZXJfVG9kbyhGaWx0ZXJlZF9Ub2RheS5nZXRGaWx0ZXJlZENvbGxlY3Rpb24oKSk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0dXBkYXRlXHJcblx0fVxyXG59KSgpOyIsImltcG9ydCB7IEN1cnJlbnRfRGF0ZSB9IGZyb20gJy4uL2RhdGUvY3VycmVudF9kYXRlLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBjbGVhciB0aGUgdmFsdWUgb2YgYWxsIHRoZSBmb3JtIGlucHV0XHJcbi8vIGluIGNyZWF0aW5nIHRoZSB0b2RvIGl0ZW1cclxuXHJcbmNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kdWUtZGF0ZScpO1xyXG5jb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXByaW9yaXR5Jyk7XHJcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdGl0bGUnKTtcclxuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZXNjcmlwdGlvbicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENsZWFyX0Zvcm0gPSAoZnVuY3Rpb24oKSB7XHJcblx0aW5wdXREdWVEYXRlLnZhbHVlID0gQ3VycmVudF9EYXRlO1xyXG5cdGlucHV0UHJpb3JpdHkudmFsdWUgPSBcImhpZ2gtcHJpb3JpdHlcIjtcclxuXHRpbnB1dFRpdGxlLnZhbHVlID0gXCJcIjtcclxuXHRpbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxufSlcclxuIiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBjaGVjayBpZiB0aGUgdXNlciBjbGlja2VkIG91dHNpZGUgdGhlIG1vZGFsIGNvbnRhaW5lclxyXG4vLyBhbmQgY2hlY2sgaWYgdGhlIG1vZGFsIGNvbnRhaW5lciBpcyB0aGUgcmlnaHQgb25lXHJcbi8vIGlmIHRydWUsIGNsb3NlIHRoZSBtb2RhbFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENsb3NlTW9kYWwoZXZlbnQsIG1vZGFsRWxlbWVudCkge1xyXG5cdGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsRWxlbWVudClcclxuXHRcdHJldHVybiB0cnVlO1xyXG59IiwiLy8gdGhpcyBtb2R1bGUgd2lsbCB0b2dnbGUgdGhlIGNsYXNzIG9mIHRoZSBtb2RhbCBlbGVtZW50XHJcbi8vIGluIG9yZGVyIHRoZSBtb2RhbCB0byBzaG93XHJcblx0XHJcbmV4cG9ydCBjb25zdCBNb2RhbCA9IChmdW5jdGlvbigpIHtcclxuXHRsZXQgbW9kYWw7IC8vIGhlcmUgdGhlIG1vZGFsIGVsZW1lbnQgd2lsbCBnb1xyXG5cclxuXHRmdW5jdGlvbiBzaG93KG1vZGFsQ2xhc3MpIHtcclxuXHRcdC8vIGNoZWNrIHdoYXQgbW9kYWwgdG8gc2hvd1xyXG5cdFx0Ly8gdGhlIGdldCB0aGUgZWxlbWVudCBvZiB0aGUgbW9kYWwgdGhlbiB0b2dnbGUgaXQncyBzaG93IGNsYXNzXHJcblx0XHRpZiAobW9kYWxDbGFzcyA9PSBcInNob3ctbW9kYWxcIikgXHJcblx0XHRcdG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblx0XHRpZiAobW9kYWxDbGFzcyA9PSBcInNob3ctZGV0YWlsc1wiKSBcclxuXHRcdFx0bW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlscy1tb2RhbCcpO1xyXG5cdFx0aWYgKG1vZGFsQ2xhc3MgPT0gXCJzaG93LWluZm9cIikgXHJcblx0XHRcdG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm8tbW9kYWwnKTtcclxuXHJcblx0XHRtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKG1vZGFsQ2xhc3MpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0TW9kYWwoKSB7XHJcblx0XHRyZXR1cm4gbW9kYWw7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c2hvdyxcclxuXHRcdGdldE1vZGFsXHJcblx0fVxyXG59KSgpO1xyXG4iLCJpbXBvcnQgeyBDbGVhcl9Gb3JtIH0gZnJvbSAnLi9jbGVhcl9tb2RhbC5qcyc7XHJcbmltcG9ydCB7IEFkZF9Ub2RvIH0gZnJvbSAnLi4vYWRkX3RvZG8vYWRkX3RvZG8uanMnXHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi9zaG93X21vZGFsLmpzJztcclxuaW1wb3J0IHsgQ2xvc2VNb2RhbCB9IGZyb20gJy4vY2xvc2VfbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBXaW5kb3dzX0NsaWNrX0V2ZW50IH0gZnJvbSAnLi4vZXZlbnQvd2luZG93X2NsaWNrX2V2ZW50LmpzJztcclxuLy8gVGhpcyBtb2R1bGUgd2lsbCBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciB0aGUgYnV0dG9ucyBpbiB0b3AgbmF2aWdhdGlvblxyXG4vLyBhZGQgYnV0dG9uIGFuZCB0aGUgaW5mbyBidXR0b25cclxuXHJcbmNvbnN0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRvZG8nKTtcclxuY29uc3QgYnRuU2hvd0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1pbmZvJyk7XHJcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaXRlbScpOyAvLyBjaGFuZ2UgdGhlIGlubmVySFRNTCB0byBhZGQuIE1pZ2h0IGJlIGNoYW5nZWQgYmVjYXVzZSBvZiB1cGRhdGVcclxuXHJcbmV4cG9ydCBjb25zdCBUb3BfTmF2aWdhdGlvbiA9IChmdW5jdGlvbigpIHtcclxuXHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvbnNcclxuXHRidG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcclxuXHRidG5TaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dJbmZvKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd01vZGFsKCkge1xyXG5cdFx0Q2xlYXJfRm9ybSgpOyAvLyBtYWtlIHN1cmUgdG8gcmVzZXQgZXZlcnl0aGluZ1xyXG5cdFx0YWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCI7XHJcblx0XHRNb2RhbC5zaG93KFwic2hvdy1tb2RhbFwiKTtcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFdpbmRvd3NfQ2xpY2tfRXZlbnQpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2hvd0luZm8oKSB7XHJcblx0XHRNb2RhbC5zaG93KFwic2hvdy1pbmZvXCIpO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgV2luZG93c19DbGlja19FdmVudCk7XHJcblx0fVxyXG59KSgpOyIsIi8vIHRoaXMgd2lsbCB2YWxpZGF0ZSB0aGUgcHJvamVjdCBhZGRlciBwb3AgdXBcclxuLy8gaXQgd2lsbCBjaGVjayBpZiB0aGUgaW5wdXQgaGFzIGFueSB2YWx1ZSBiZWZvcmUgYWRkaW5nIHRoZSBwcm9qZWN0XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaW5wdXQtcHJvamVjdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVfUHJvamVjdF9BZGRlcigpIHtcclxuXHRpZiAocHJvamVjdEZvcm0udmFsdWUgIT0gXCJcIikgXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIHZhbGlkYXRlIHRoZSB0b2RvIGZvcm1cclxuLy8gaXQgd2lsbCBjaGVjayBpZiBhbGwgdGhlIGlucHV0IGhhcyB2YWx1ZSBvciBlbHNlXHJcbi8vIHJldHVybiBmYWxzZSAoZG8gbm90IGFkZCB0b2RvKVxyXG5cclxuY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJ0b2RvXCJdW1widGl0bGVcIl07XHJcbmNvbnN0IGRlc2NGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJ0b2RvXCJdW1wiZGVzY3JpcHRpb25cIl07XHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZV9Ub2RvKCkge1xyXG5cdGlmKHRpdGxlRm9ybS52YWx1ZSAhPSBcIlwiICYmIGRlc2NGb3JtLnZhbHVlICE9IFwiXCIpIFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59OyIsImltcG9ydCB7IENsZWFyX0Zvcm0gfSBmcm9tICcuLi90b3BfbmF2aWdhdGlvbi9jbGVhcl9tb2RhbC5qcyc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vdG9wX25hdmlnYXRpb24vc2hvd19tb2RhbC5qcyc7XHJcbmltcG9ydCB7IENsb3NlTW9kYWwgfSBmcm9tICcuLi90b3BfbmF2aWdhdGlvbi9jbG9zZV9tb2RhbC5qcyc7XHJcbmltcG9ydCB7IFdpbmRvd3NfQ2xpY2tfRXZlbnQgfSBmcm9tICcuLi9ldmVudC93aW5kb3dfY2xpY2tfZXZlbnQuanMnO1xyXG5cclxuLy8gdGhpcyBjbGFzcyBpcyBmb3Igc2hvd2luZyBhbmQgY2xvc2luZyB0aGUgZGV0YWlsc19tb2RhbFxyXG5leHBvcnQgY29uc3QgVmlld19EZXRhaWxzID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuXHRmdW5jdGlvbiBzaG93TW9kYWwoKSB7XHJcblx0XHRDbGVhcl9Gb3JtKCk7IC8vIG1ha2Ugc3VyZSB0byByZXNldCBldmVyeXRoaW5nXHJcblx0XHRNb2RhbC5zaG93KFwic2hvdy1kZXRhaWxzXCIpO1xyXG5cdFx0Ly8gYWRkIGV2ZW50TGlzdGVuZXIgdG8gdGhlIHdpbmRvdyBmb3IgY2xvc2luZyB0aGUgbW9kYWxcclxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFdpbmRvd3NfQ2xpY2tfRXZlbnQpO1xyXG5cdH1cdFxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0c2hvd01vZGFsXHJcblx0fVxyXG59KSgpO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBMb2FkX0RhdGEgfSBmcm9tICcuL21vZHVsZXMvZGF0YS9sb2FkX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBUb3BfTmF2aWdhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy90b3BfbmF2aWdhdGlvbi90b3BfbmF2aWdhdGlvbi5qcyc7XHJcbmltcG9ydCB7IFNpZGVfTmF2aWdhdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9zaWRlLW5hdmlnYXRpb24vc2lkZV9uYXZpZ2F0aW9uLmpzJztcclxuXHJcbkxvYWRfRGF0YSgpOyAvLyBsb2FkIGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2VcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9