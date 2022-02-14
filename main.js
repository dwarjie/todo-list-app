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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\ninput {\n  font-family: inherit;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  display: none;\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .new-personal .add-personal {\n  max-width: 20px;\n}\n.navigation-side .container .container-personal #personal-project-list {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.navigation-side .container .container-personal .show-new-personal {\n  display: flex;\n}\n.navigation-side .container .container-personal .project-pop-up {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n}\n.navigation-side .container .container-personal .project-pop-up input {\n  max-width: 90%;\n  padding: 0.3rem 0.3rem;\n  background-color: #F5F4F3;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons button {\n  max-width: 100%;\n  padding: 0.5rem 1.2rem;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #add-new-project {\n  background-color: #57ADEB;\n  color: #fff;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #cancel-new-project {\n  background-color: #F95656;\n  color: #fff;\n}\n.navigation-side .container .container-personal .show-pop-up {\n  opacity: 1;\n  visibility: visible;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .mid-priority {\n  border: 0.15em solid #57ADEB;\n}\n.view-todo .project-list .list-item .low-priority {\n  border: 0.15em solid #8FDC2D;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}", "",{"version":3,"sources":["webpack://./src/partials/_global.scss","webpack://./src/style.scss","webpack://./src/partials/_mixin.scss","webpack://./src/partials/_top-navigation.scss","webpack://./src/partials/_variable.scss","webpack://./src/partials/_side-navigation.scss","webpack://./src/partials/_view-todo.scss","webpack://./src/partials/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tvertical-align: baseline;\t\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-size: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 3rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.125rem;\r\n\tfont-weight: 400;\t\r\n}\r\n\r\nh3 {\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\ninput {\r\n\tfont-family: inherit;\r\n}\r\n\r\n.wrapper {\r\n\t@include twelveColumn();\r\n}\r\n\r\n.button {\r\n\tmax-width: 30px;\r\n\theight: auto;\r\n}\r\n\r\n.button-hover:hover {\r\n\ttransform: scale(1.1);\r\n\ttransition: 120ms transform ease-in-out;\r\n}\r\n\r\n.text-hover:hover {\r\n\tfont-weight: 600;\r\n}","* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\ninput {\n  font-family: inherit;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  display: none;\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .new-personal .add-personal {\n  max-width: 20px;\n}\n.navigation-side .container .container-personal #personal-project-list {\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0.5rem;\n}\n.navigation-side .container .container-personal .show-new-personal {\n  display: flex;\n}\n.navigation-side .container .container-personal .project-pop-up {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n}\n.navigation-side .container .container-personal .project-pop-up input {\n  max-width: 90%;\n  padding: 0.3rem 0.3rem;\n  background-color: #F5F4F3;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons button {\n  max-width: 100%;\n  padding: 0.5rem 1.2rem;\n  border: none;\n  border-radius: 3px;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #add-new-project {\n  background-color: #57ADEB;\n  color: #fff;\n}\n.navigation-side .container .container-personal .project-pop-up .project-pop-up-buttons #cancel-new-project {\n  background-color: #F95656;\n  color: #fff;\n}\n.navigation-side .container .container-personal .show-pop-up {\n  opacity: 1;\n  visibility: visible;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .mid-priority {\n  border: 0.15em solid #57ADEB;\n}\n.view-todo .project-list .list-item .low-priority {\n  border: 0.15em solid #8FDC2D;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}","@mixin flexBox($direction: row, $justify: center, $align: center) {\r\n\tdisplay: flex;\r\n\tflex-direction: $direction;\r\n\tjustify-content: $justify;\r\n\talign-items: $align;\r\n}\r\n\r\n@mixin twelveColumn() {\r\n\tmax-width: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(12, [col-start] 1fr);\r\n\tgrid-template-rows: repeat(12, 1fr);\r\n};",".navigation-top {\r\n\t@include flexBox($justify: flex-end);\r\n\tbackground-color: $navigation-top;\r\n\tgrid-column: col-start / span 12;\r\n\tgrid-row: 1;\r\n\r\n\t.navigation-prop {\r\n\t\t@include flexBox;\r\n\t\tmargin-right: 5.625rem;\r\n\r\n\t\t.info {\r\n\t\t\tmargin-left: 4.063rem;\r\n\t\t}\r\n\t}\r\n}","$navigation-top: #F5F4F3;\r\n$navigation-side: #15181D;\r\n$side-text-color: #AFAFAF;\r\n$high-priority: #F95656;\r\n$mid-priority: #57ADEB;\r\n$low-priority: #8FDC2D;\r\n$modal-shade: rgba(21, 24, 29, .7);\r\n$modal-background: #FFFFFF;\r\n$modal-color: #7E7E7E;\r\n$modal-button: #57ADEB;",".navigation-side {\r\n\tcolor: $side-text-color;\r\n\tbackground-color: $navigation-side;\r\n\tgrid-column: col-start / span 2;\r\n\tgrid-row: 2 / 13;\r\n\toverflow: hidden;\r\n\r\n\t.container {\r\n\t\t@include flexBox($direction: column, $align: flex-start);\r\n\t\tgap: 1rem;\r\n\t\tmax-width: 70%;\r\n\t\tmargin: 3.75rem auto 0 auto;\r\n\r\n\t\th2, h3 {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.active {\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\r\n\t\t.container-project {\r\n\t\t\t@include flexBox($justify: flex-start, $align: flex-start);\r\n\t\t\tgap: 1rem;\r\n\t\t\tflex-wrap: wrap;\t\r\n\r\n\t\t\t.personal {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t\tgap: 1rem;\r\n\t\t\t\tflex-wrap: nowrap;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.container-personal {\r\n\r\n\t\t\t.new-personal {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tmargin-left: 20px;\r\n\r\n\t\t\t\t.add-personal {\r\n\t\t\t\t\tmax-width: 20px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t#personal-project-list {\r\n\t\t\t\tflex-direction: column;\r\n\t\t\t\talign-items: flex-start;\r\n\t\t\t\tgap: .5rem;\r\n\t\t\t}\r\n\r\n\t\t\t.show-new-personal {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t}\r\n\r\n\t\t\t.project-pop-up {\r\n\t\t\t\t@include flexBox($direction: column);\r\n\t\t\t\topacity: 0;\r\n\t\t\t\tvisibility: hidden;\r\n\r\n\t\t\t\tinput {\r\n\t\t\t\t\tmax-width: 90%;\r\n\t\t\t\t\tpadding: 0.3rem 0.3rem;\r\n\t\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\t\tborder: none;\r\n\t\t\t\t\tborder-radius: 3px;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.project-pop-up-buttons {\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t@include flexBox($justify: space-evenly);\r\n\t\t\t\t\tflex-wrap: wrap;\r\n\r\n\t\t\t\t\tbutton {\r\n\t\t\t\t\t\tmax-width: 100%;\r\n\t\t\t\t\t\tpadding: 0.5rem 1.2rem;\r\n\t\t\t\t\t\tborder: none;\r\n\t\t\t\t\t\tborder-radius: 3px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t#add-new-project {\r\n\t\t\t\t\t\tbackground-color: $mid-priority;\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t#cancel-new-project {\r\n\t\t\t\t\t\tbackground-color: $high-priority;\r\n\t\t\t\t\t\tcolor: #fff;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.show-pop-up {\r\n\t\t\t\topacity: 1;\r\n\t\t\t\tvisibility: visible;\r\n\t\t\t}\t\r\n\t\t}\r\n\t}\r\n}",".view-todo {\r\n\tgrid-column: col-start 4 / 12;\r\n\tgrid-row: 3 / 13;\r\n\r\n\t.project-list {\r\n\t\t@include flexBox($direction: column);\r\n\t\tmargin-top: 1.25rem;\r\n\r\n\t\t.list-item {\r\n\t\t\t@include flexBox($direction: row, $justify: space-between);\r\n\t\t\tmin-width: 100%;\r\n\t\t\tmargin-bottom: 1rem;\r\n\t\t\theight: 4rem;\r\n\t\t\tbackground-color: $navigation-top;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tpadding: 1.6rem;\r\n\r\n\t\t\t.todo-prop, .todo-title {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"] {\r\n\t\t\t\t/* Add if not using autoprefixer */\r\n\t\t\t\t-webkit-appearance: none;\r\n\t\t\t\tappearance: none;\r\n\t\t\t\t/* For iOS < 15 to remove gradient background */\r\n\t\t\t\tbackground-color: #fff;\r\n\t\t\t\t/* Not removed via appearance */\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tplace-content: center;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tmargin-right: 0.9em;\r\n\t\t\t\tfont: inherit;\r\n\t\t\t\twidth: 1.5em;\r\n\t\t\t\theight: 1.5em;\r\n\t\t\t\tborder-radius: 0.50em;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\twidth: 0.75em;\r\n\t\t\t\theight: 0.75em;\r\n\t\t\t\tborder-radius: 0.2em;\r\n\t\t\t\ttransform: scale(0);\r\n\t\t\t\ttransition: 120ms transform ease-in-out;\r\n\t\t\t\tbox-shadow: inset 1em 1em $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]:checked::before {\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t}\r\n\r\n\t\t\t.high-priority {\r\n\t\t\t\tborder: 0.15em solid $high-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.mid-priority {\r\n\t\t\t\tborder: 0.15em solid $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.low-priority {\r\n\t\t\t\tborder: 0.15em solid $low-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.todo-prop {\r\n\r\n\t\t\t\t.todo-edit {\r\n\t\t\t\t\tmargin: 0 1.25rem 0 1.8rem;\r\n\t\t\t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".modal {\r\n\t@include twelveColumn();\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tbackground-color: $modal-shade;\r\n\t// in order to hide the modal at first\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransform: scale(1.1);\r\n\ttransition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n\r\n\t.modal-container {\r\n\t\tgrid-column: col-start 3 / 11;\r\n\t\tgrid-row: 3 / 12;\r\n\t\tcolor: $modal-color;\r\n\t\tbackground-color: $modal-background;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 1.25rem 5.6rem;\r\n\r\n\t\t.modal-top {\r\n\t\t\t@include flexBox($justify: space-between);\r\n\t\t\tmargin-bottom: 1.25rem;\r\n\r\n\t\t\t.due-date,\r\n\t\t\t.priority {\r\n\t\t\t\tmargin-left: .2rem;\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tcolor: $modal-color;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tmargin-right: 1.875rem;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button {\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 0.3rem 0.8rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tbackground-color: $modal-button;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button:hover {\r\n\t\t\t\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.150);\r\n\t\t\t\ttransition: .3s all ease-in-out;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.modal-form form{\r\n\t\t\t@include flexBox($direction: column, $align: flex-start);\r\n\r\n\t\t\ttextarea {\r\n\t\t\t\tfont-family: 'Poppins', sans-serif;\r\n\t\t\t\tresize: none;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 300px;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem .5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\tinput {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tmargin-bottom: 1rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem 0.5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n// in order to show the modal with a simple animation\r\n.show-modal {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\ttransform: scale(1.0);\r\n\ttransition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\r\n}"],"sourceRoot":""}]);
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

function Get_Details() {	
	// call the function factory for making a todo item
	// then give the input values as a parameter
	return (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.getTodoId() ,inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value);
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
const Todo = (id, title, desc, due, priority) => {
	let todoObject = {}; // empty object

	// set the parameters given to the todo object
	todoObject.id = id;
	todoObject.title = title;
	todoObject.desc = desc;
	todoObject.due = due;
	todoObject.priority = priority;

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
	return `<div class="list-item">
	            <div class="todo-title">
	                <input type="checkbox" class="${itemDetails.priority}">
	                <h2>${itemDetails.title}</h2>
	            </div>
	            <div class="todo-prop">
	                <h3>${itemDetails.due}</h3>
	                <input type="image" data-id="${itemDetails.id}" class="button button-hover todo-edit" id="edit-todo" src="../src/img/edit.png">
	                <input type="image" data-id="${itemDetails.id}" class="button button-hover todo-delete" id="delete-todo" src="../src/img/delete.png">
	            </div>
        	</div>`;
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
	let todoCollections = {
		inbox: [],
		personal: []
	}; // here will go the todo_collection
	let personalProjectCollection = []; // here we will assign the personal project collection
	let todoId = 0;	

	function getTodoId() {
		todoId++; // increment the id in order for every todo have unique id
		return todoId;
	}
	return {
		todoCollections,
		personalProjectCollection,
		getTodoId
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

/***/ "./src/modules/date/set_current_date.js":
/*!**********************************************!*\
  !*** ./src/modules/date/set_current_date.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Set_Current_Date": () => (/* binding */ Set_Current_Date)
/* harmony export */ });
/* harmony import */ var _current_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current_date.js */ "./src/modules/date/current_date.js");

// this module will be called once the program loaded.
// it will set the date for the html input with the current date

const dueDate = document.querySelector('#modal-due-date');
const Set_Current_Date = (function() {
	console.log(typeof _current_date_js__WEBPACK_IMPORTED_MODULE_0__.Current_Date);
	dueDate.value = _current_date_js__WEBPACK_IMPORTED_MODULE_0__.Current_Date;
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
	let id = e.target.dataset.id;
	// check if the todoItem is in Inbox or Project
	// True -> Inbox | False -> Personal
	let searchedItem = (0,_data_search_js__WEBPACK_IMPORTED_MODULE_2__.Search)(id);
	if (searchedItem.inboxKey != -1)
		_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox.splice(searchedItem.inboxKey,1);
	if (searchedItem.itemKey != -1)
		_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.personal[searchedItem.projectKey].splice(searchedItem.itemKey,1);
	console.log(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections)
	renderUpdated();
}

function Delete_Event(elements) {
	(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_1__.Event_Manager)(elements, deleteTodo);
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








// this will handle the adding of events to all update buttons in todo items

let todoItem; // this will hold the specific todoItem
const projectTitle = document.querySelector('.project-title');
function updateTodo(e) {
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

	renderUpdated();
}

function Update_Event(elements) {
	// use event manager to add events to the buttons
	(0,_event_manager_js__WEBPACK_IMPORTED_MODULE_0__.Event_Manager)(elements, updateTodo)
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
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_3__.Render_Todo)(_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.todoCollections.inbox);
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


// this will handle the adding of personal project to the personal project object

const inputPersonalProject = document.querySelector('#add-input-project');
function Adder_Personal_Project() {
	if (!(0,_validation_validate_project_adder_js__WEBPACK_IMPORTED_MODULE_1__.Validate_Project_Adder)()) return alert("Please fill the project title");

	_data_todo_data_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Data.personalProjectCollection.push(inputPersonalProject.value); // add the personal project to the array
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
			// then call the event managers for update and delete
			(0,_event_update_event_js__WEBPACK_IMPORTED_MODULE_1__.Update_Event)(btnUpdateElements);
			(0,_event_delete_event_js__WEBPACK_IMPORTED_MODULE_2__.Delete_Event)(btnDeleteElements);

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
	console.log(personalProjects.length);
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
	personalProjectList.innerHTML = personalProjectCollection.map((project) => {
		return (0,_container_personal_container_js__WEBPACK_IMPORTED_MODULE_1__.Personal_Container)(project);
	}).join('');

	let btnPersonalProjects = document.querySelectorAll('#btnPersonalProject');
	// this will call the event manager in order to add event listeners to the personal project
	(0,_event_event_manager_js__WEBPACK_IMPORTED_MODULE_2__.Event_Manager)(btnPersonalProjects, _personal_personal_js__WEBPACK_IMPORTED_MODULE_3__.Personal.render);

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

// this render module will handle the rendering of modal for updating the todo item
// this will reuse the show-modal class element for adding todo
// but will change the innerHTML of the button from "Add" to "Update"

const updateButton = document.querySelector('#add-item');
function Render_Update_Modal() {
	(0,_top_navigation_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal)('show-modal');
	updateButton.innerHTML = "Update";
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
/* harmony export */   "modal": () => (/* binding */ modal),
/* harmony export */   "Modal": () => (/* binding */ Modal)
/* harmony export */ });
// this module will toggle the class of the modal element
// in order the modal to show
const modal = document.querySelector('.modal');

function Modal(modalClass) {
	modal.classList.toggle(modalClass);
}



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
/* harmony import */ var _add_todo_add_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add_todo/add_todo.js */ "./src/modules/add_todo/add_todo.js");
/* harmony import */ var _clear_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear_modal.js */ "./src/modules/top_navigation/clear_modal.js");
/* harmony import */ var _show_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show_modal.js */ "./src/modules/top_navigation/show_modal.js");
/* harmony import */ var _close_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close_modal.js */ "./src/modules/top_navigation/close_modal.js");
/* harmony import */ var _date_set_current_date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../date/set_current_date.js */ "./src/modules/date/set_current_date.js");





// This module will handle the click event for the buttons in top navigation
// add button and the info button

const btnAddTodo = document.querySelector('#create-todo');
const btnShowInfo = document.querySelector('#show-info');
const addButton = document.querySelector('#add-item'); // change the innerHTML to add. Might be changed because of update

const Top_Navigation = (function() {
	// add event listener to the buttons
	btnAddTodo.addEventListener('click', showModal);
	window.addEventListener('click', windowsOnClick);
	// btnShowInfo.addEventListener('click' showInformation);

	function showModal() {
		(0,_clear_modal_js__WEBPACK_IMPORTED_MODULE_1__.Clear_Form)(); // make sure to reset everything
		addButton.innerHTML = "Add";
		(0,_show_modal_js__WEBPACK_IMPORTED_MODULE_2__.Modal)('show-modal');
	}

	function windowsOnClick(event) {
		if ((0,_close_modal_js__WEBPACK_IMPORTED_MODULE_3__.CloseModal)(event, _show_modal_js__WEBPACK_IMPORTED_MODULE_2__.modal) == true)
			(0,_show_modal_js__WEBPACK_IMPORTED_MODULE_2__.Modal)('show-modal'); // toggle again in order to close it
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
/* harmony import */ var _modules_top_navigation_top_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/top_navigation/top_navigation.js */ "./src/modules/top_navigation/top_navigation.js");
/* harmony import */ var _modules_side_navigation_side_navigation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/side-navigation/side_navigation.js */ "./src/modules/side-navigation/side_navigation.js");





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxhQUFhLGNBQWMsYUFBYSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxZQUFZLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFlBQVksY0FBYyxjQUFjLFlBQVksTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLGNBQWMsY0FBYyxhQUFhLE1BQU0sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxhQUFhLGNBQWMsY0FBYyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVB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QTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxRUFBZTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQWU7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUVBQWU7QUFDN0IsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDajJCb0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BtRDtBQUNMO0FBQ0M7QUFDRDtBQUNpQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLDJEQUFVLElBQUk7QUFDaEI7QUFDQSxFQUFFLHFEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTSwyREFBVSxRQUFRLGlEQUFLO0FBQzdCLEdBQUcscURBQUssZ0JBQWdCO0FBQ3hCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1QkQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNzRDtBQUNHO0FBQy9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvYWRkX3RvZG8vYWRkX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2FkZF90b2RvL2dldF90b2RvX2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2FkZF90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lci9wZXJzb25hbF9jb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2NvbnRhaW5lci90b2RvX2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS9wb3B1bGF0ZV91cGRhdGVfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2RhdGEvc2VhcmNoLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kYXRhL3NlYXJjaF9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS9zZWFyY2hfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGF0YS90b2RvX2RhdGEuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2RhdGUvY3VycmVudF9kYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9kYXRlL3NldF9jdXJyZW50X2RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50L2RlbGV0ZV9ldmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZXZlbnQvZXZlbnRfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZXZlbnQvdXBkYXRlX2V2ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9pbmJveC9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaXRlbV9hZGRlci9hZGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaXRlbV9hZGRlci9wcm9qZWN0X2FkZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9pdGVtX2FkZGVyL3Byb2plY3RfY2hlY2tlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaXRlbV9hZGRlci90aXRsZV9jaGVja2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wZXJzb25hbC9hZGRfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcGVyc29uYWwvY2FuY2VsX2FkZGluZ19wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9wZXJzb25hbC9jbGVhcl9pbnB1dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcGVyc29uYWwvcGVyc29uYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL2NsZWFyX2J1dHRvbl9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvY2xlYXJfY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXJlci9yZW5kZXJfYWRkX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL3JlbmRlcl9idXR0b25fc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL3JlbmRlcl9wZXJzb25hbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvcmVuZGVyX3BlcnNvbmFsX3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3JlbmRlcmVyL3JlbmRlcl9wcm9qZWN0X2FkZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9yZW5kZXJlci9yZW5kZXJfdXBkYXRlX21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9zaWRlLW5hdmlnYXRpb24vc2lkZV9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy90b2RheS9maWx0ZXJfcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9kYXkvZmlsdGVyX3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvZGF5L3RvZGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy90b3BfbmF2aWdhdGlvbi9jbGVhcl9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9wX25hdmlnYXRpb24vY2xvc2VfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL3Nob3dfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL3RvcF9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy92YWxpZGF0aW9uL3ZhbGlkYXRlX3Byb2plY3RfYWRkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3ZhbGlkYXRpb24vdmFsaWRhdGVfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIG1heC13aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmJ1dHRvbi1ob3Zlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50ZXh0LWhvdmVyOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXZpZ2F0aW9uLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQvc3BhbiAxMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNS42MjVyZW07XFxufVxcbi5uYXZpZ2F0aW9uLXRvcCAubmF2aWdhdGlvbi1wcm9wIC5pbmZvIHtcXG4gIG1hcmdpbi1sZWZ0OiA0LjA2M3JlbTtcXG59XFxuXFxuLm5hdmlnYXRpb24tc2lkZSB7XFxuICBjb2xvcjogI0FGQUZBRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE4MUQ7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMjtcXG4gIGdyaWQtcm93OiAyLzEzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAzLjc1cmVtIGF1dG8gMCBhdXRvO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDIsIC5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciBoMyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdCAucGVyc29uYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLm5ldy1wZXJzb25hbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5uZXctcGVyc29uYWwgLmFkZC1wZXJzb25hbCB7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsICNwZXJzb25hbC1wcm9qZWN0LWxpc3Qge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5zaG93LW5ldy1wZXJzb25hbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAgaW5wdXQge1xcbiAgbWF4LXdpZHRoOiA5MCU7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC4zcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIC5wcm9qZWN0LXBvcC11cC1idXR0b25zIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCAucHJvamVjdC1wb3AtdXAtYnV0dG9ucyBidXR0b24ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIC5wcm9qZWN0LXBvcC11cC1idXR0b25zICNhZGQtbmV3LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3QURFQjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAgLnByb2plY3QtcG9wLXVwLWJ1dHRvbnMgI2NhbmNlbC1uZXctcHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjk1NjU2O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5zaG93LXBvcC11cCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuLnZpZXctdG9kbyB7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0IDQvMTI7XFxuICBncmlkLXJvdzogMy8xMztcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMS4yNXJlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGhlaWdodDogNHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS42cmVtO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAudG9kby1wcm9wLCAudmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAudG9kby10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcbiAgLyogQWRkIGlmIG5vdCB1c2luZyBhdXRvcHJlZml4ZXIgKi9cXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAvKiBGb3IgaU9TIDwgMTUgdG8gcmVtb3ZlIGdyYWRpZW50IGJhY2tncm91bmQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIG1hcmdpbi1yaWdodDogMC45ZW07XFxuICBmb250OiBpbmhlcml0O1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgaGVpZ2h0OiAxLjVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNzVlbTtcXG4gIGhlaWdodDogMC43NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSAjNTdBREVCO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkOjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLmhpZ2gtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgI0Y5NTY1NjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLm1pZC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjNTdBREVCO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAubG93LXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICM4RkRDMkQ7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXByb3AgLnRvZG8tZWRpdCB7XFxuICBtYXJnaW46IDAgMS4yNXJlbSAwIDEuOHJlbTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDI0LCAyOSwgMC43KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0IDMvMTE7XFxuICBncmlkLXJvdzogMy8xMjtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxLjI1cmVtIDUuNnJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5kdWUtZGF0ZSxcXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5wcmlvcml0eSB7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICM3RTdFN0U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5hZGQtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdBREVCO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQUZBRkFGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2hvdy1tb2RhbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX2dsb2JhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX3RvcC1uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fdmFyaWFibGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19zaWRlLW5hdmlnYXRpb24uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL192aWV3LXRvZG8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19tb2RhbC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0Esa0NBQUE7QUNDRDs7QURFQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0Msb0JBQUE7QUNDRDs7QURFQTtFRXZCQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQ0FBQTtBRHlCRDs7QURGQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FDS0Q7O0FERkE7RUFDQyxxQkFBQTtFQUNBLHVDQUFBO0FDS0Q7O0FERkE7RUFDQyxnQkFBQTtBQ0tEOztBRW5EQTtFRENDLGFBQUE7RUFDQSxtQkFGMEI7RUFHMUIseUJDRjJCO0VERzNCLG1CQUp5RDtFQ0V6RCx5QkNGZ0I7RURHaEIsOEJBQUE7RUFDQSxXQUFBO0FGeUREO0FFdkRDO0VETEEsYUFBQTtFQUNBLG1CQUYwQjtFQUcxQix1QkFIeUM7RUFJekMsbUJBSnlEO0VDUXhELHNCQUFBO0FGNERGO0FFMURFO0VBQ0MscUJBQUE7QUY0REg7O0FJdkVBO0VBQ0MsY0RDaUI7RUNBakIseUJERGlCO0VDRWpCLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FKMEVEO0FJeEVDO0VITkEs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RUswQnZELHNCQUFBO0FOc1BIO0FNcFBHOztFQUVDLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNIeEJVO0VHeUJWLFlBQUE7RUFDQSxzQkFBQTtBTnNQSjtBTW5QRztFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCSGpDVztFR2tDWCxZQUFBO0VBQ0Esa0JBQUE7QU5xUEo7QU1sUEc7RUFDQywwQ0FBQTtFQUNBLGdDQUFBO0FOb1BKO0FNaFBFO0VMcERELGFBQUE7RUFDQSxzQktvRCtCO0VMbkQvQix1QkFIeUM7RUFJekMsdUJLa0QrQztBTnFQaEQ7QU1uUEc7RUFDQyxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkgvRGE7RUdnRWIseUJBQUE7RUFDQSxrQkFBQTtBTnFQSjtBTWxQRztFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Qkh6RWE7RUcwRWIsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QU5vUEo7O0FNOU9BO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBTmlQRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFx0XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHRcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0QGluY2x1ZGUgdHdlbHZlQ29sdW1uKCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcblxcdG1heC13aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWhvdmVyOmhvdmVyIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcbn1cIixcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGV4dC1ob3Zlcjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMTI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuLm5hdmlnYXRpb24tdG9wIC5uYXZpZ2F0aW9uLXByb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDUuNjI1cmVtO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCAuaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogNC4wNjNyZW07XFxufVxcblxcbi5uYXZpZ2F0aW9uLXNpZGUge1xcbiAgY29sb3I6ICNBRkFGQUY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxODFEO1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydC9zcGFuIDI7XFxuICBncmlkLXJvdzogMi8xMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMy43NXJlbSBhdXRvIDAgYXV0bztcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIGgyLCAubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3QgLnBlcnNvbmFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5uZXctcGVyc29uYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAubmV3LXBlcnNvbmFsIC5hZGQtcGVyc29uYWwge1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAjcGVyc29uYWwtcHJvamVjdC1saXN0IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAuc2hvdy1uZXctcGVyc29uYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIGlucHV0IHtcXG4gIG1heC13aWR0aDogOTAlO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCAucHJvamVjdC1wb3AtdXAtYnV0dG9ucyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAucHJvamVjdC1wb3AtdXAgLnByb2plY3QtcG9wLXVwLWJ1dHRvbnMgYnV0dG9uIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5wcm9qZWN0LXBvcC11cCAucHJvamVjdC1wb3AtdXAtYnV0dG9ucyAjYWRkLW5ldy1wcm9qZWN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1N0FERUI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLnByb2plY3QtcG9wLXVwIC5wcm9qZWN0LXBvcC11cC1idXR0b25zICNjYW5jZWwtbmV3LXByb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5NTY1NjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wZXJzb25hbCAuc2hvdy1wb3AtdXAge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxufVxcblxcbi52aWV3LXRvZG8ge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA0LzEyO1xcbiAgZ3JpZC1yb3c6IDMvMTM7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tcHJvcCwgLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuOWVtO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjc1ZW07XFxuICBoZWlnaHQ6IDAuNzVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICNGOTU2NTY7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5taWQtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjOEZEQzJEO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAudG9kby1wcm9wIC50b2RvLWVkaXQge1xcbiAgbWFyZ2luOiAwIDEuMjVyZW0gMCAxLjhyZW07XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyNCwgMjksIDAuNyk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCAzLzExO1xcbiAgZ3JpZC1yb3c6IDMvMTI7XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuZHVlLWRhdGUsXFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAucHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3QURFQjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XCIsXCJAbWl4aW4gZmxleEJveCgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyKSB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcclxcblxcdGFsaWduLWl0ZW1zOiAkYWxpZ247XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB0d2VsdmVDb2x1bW4oKSB7XFxyXFxuXFx0bWF4LXdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxyXFxufTtcIixcIi5uYXZpZ2F0aW9uLXRvcCB7XFxyXFxuXFx0QGluY2x1ZGUgZmxleEJveCgkanVzdGlmeTogZmxleC1lbmQpO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRncmlkLWNvbHVtbjogY29sLXN0YXJ0IC8gc3BhbiAxMjtcXHJcXG5cXHRncmlkLXJvdzogMTtcXHJcXG5cXHJcXG5cXHQubmF2aWdhdGlvbi1wcm9wIHtcXHJcXG5cXHRcXHRAaW5jbHVkZSBmbGV4Qm94O1xcclxcblxcdFxcdG1hcmdpbi1yaWdodDogNS42MjVyZW07XFxyXFxuXFxyXFxuXFx0XFx0LmluZm8ge1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiA0LjA2M3JlbTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cIixcIiRuYXZpZ2F0aW9uLXRvcDogI0Y1RjRGMztcXHJcXG4kbmF2aWdhdGlvbi1zaWRlOiAjMTUxODFEO1xcclxcbiRzaWRlLXRleHQtY29sb3I6ICNBRkFGQUY7XFxyXFxuJGhpZ2gtcHJpb3JpdHk6ICNGOTU2NTY7XFxyXFxuJG1pZC1wcmlvcml0eTogIzU3QURFQjtcXHJcXG4kbG93LXByaW9yaXR5OiAjOEZEQzJEO1xcclxcbiRtb2RhbC1zaGFkZTogcmdiYSgyMSwgMjQsIDI5LCAuNyk7XFxyXFxuJG1vZGFsLWJhY2tncm91bmQ6ICNGRkZGRkY7XFxyXFxuJG1vZGFsLWNvbG9yOiAjN0U3RTdFO1xcclxcbiRtb2RhbC1idXR0b246ICM1N0FERUI7XCIsXCIubmF2aWdhdGlvbi1zaWRlIHtcXHJcXG5cXHRjb2xvcjogJHNpZGUtdGV4dC1jb2xvcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2aWdhdGlvbi1zaWRlO1xcclxcblxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgLyBzcGFuIDI7XFxyXFxuXFx0Z3JpZC1yb3c6IDIgLyAxMztcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcclxcblxcdC5jb250YWluZXIge1xcclxcblxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uLCAkYWxpZ246IGZsZXgtc3RhcnQpO1xcclxcblxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHRtYXgtd2lkdGg6IDcwJTtcXHJcXG5cXHRcXHRtYXJnaW46IDMuNzVyZW0gYXV0byAwIGF1dG87XFxyXFxuXFxyXFxuXFx0XFx0aDIsIGgzIHtcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5hY3RpdmUge1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5jb250YWluZXItcHJvamVjdCB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkanVzdGlmeTogZmxleC1zdGFydCwgJGFsaWduOiBmbGV4LXN0YXJ0KTtcXHJcXG5cXHRcXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0XFx0ZmxleC13cmFwOiB3cmFwO1xcdFxcclxcblxcclxcblxcdFxcdFxcdC5wZXJzb25hbCB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgpO1xcclxcblxcdFxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5jb250YWluZXItcGVyc29uYWwge1xcclxcblxcclxcblxcdFxcdFxcdC5uZXctcGVyc29uYWwge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LmFkZC1wZXJzb25hbCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0I3BlcnNvbmFsLXByb2plY3QtbGlzdCB7XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRcXHRcXHRnYXA6IC41cmVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuc2hvdy1uZXctcGVyc29uYWwge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5wcm9qZWN0LXBvcC11cCB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0XFx0XFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcclxcblxcdFxcdFxcdFxcdGlucHV0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXgtd2lkdGg6IDkwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjNyZW0gMC4zcmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucHJvamVjdC1wb3AtdXAtYnV0dG9ucyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkanVzdGlmeTogc3BhY2UtZXZlbmx5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0YnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMC41cmVtIDEuMnJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogM3B4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQjYWRkLW5ldy1wcm9qZWN0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbWlkLXByaW9yaXR5O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQjY2FuY2VsLW5ldy1wcm9qZWN0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkaGlnaC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQuc2hvdy1wb3AtdXAge1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0XFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHRcXHRcXHR9XFx0XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCIsXCIudmlldy10b2RvIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogY29sLXN0YXJ0IDQgLyAxMjtcXHJcXG5cXHRncmlkLXJvdzogMyAvIDEzO1xcclxcblxcclxcblxcdC5wcm9qZWN0LWxpc3Qge1xcclxcblxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uKTtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcblxcclxcblxcdFxcdC5saXN0LWl0ZW0ge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogc3BhY2UtYmV0d2Vlbik7XFxyXFxuXFx0XFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA0cmVtO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEuNnJlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQudG9kby1wcm9wLCAudG9kby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG5cXHRcXHRcXHRcXHQvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcclxcblxcdFxcdFxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcclxcblxcdFxcdFxcdFxcdC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0LyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMC45ZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMS41ZW07XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxLjVlbTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAwLjUwZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDAuNzVlbTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDAuNzVlbTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAwLjJlbTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICRtaWQtcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuaGlnaC1wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAwLjE1ZW0gc29saWQgJGhpZ2gtcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5taWQtcHJpb3JpdHkge1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogMC4xNWVtIHNvbGlkICRtaWQtcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5sb3ctcHJpb3JpdHkge1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogMC4xNWVtIHNvbGlkICRsb3ctcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC50b2RvLXByb3Age1xcclxcblxcclxcblxcdFxcdFxcdFxcdC50b2RvLWVkaXQge1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMCAxLjI1cmVtIDAgMS44cmVtO1xcclxcblxcdFxcdFxcdFxcdH1cXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIubW9kYWwge1xcclxcblxcdEBpbmNsdWRlIHR3ZWx2ZUNvbHVtbigpO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1zaGFkZTtcXHJcXG5cXHQvLyBpbiBvcmRlciB0byBoaWRlIHRoZSBtb2RhbCBhdCBmaXJzdFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcclxcblxcclxcblxcdC5tb2RhbC1jb250YWluZXIge1xcclxcblxcdFxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgMyAvIDExO1xcclxcblxcdFxcdGdyaWQtcm93OiAzIC8gMTI7XFxyXFxuXFx0XFx0Y29sb3I6ICRtb2RhbC1jb2xvcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYmFja2dyb3VuZDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDEuMjVyZW0gNS42cmVtO1xcclxcblxcclxcblxcdFxcdC5tb2RhbC10b3Age1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGp1c3RpZnk6IHNwYWNlLWJldHdlZW4pO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmR1ZS1kYXRlLFxcclxcblxcdFxcdFxcdC5wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IC4ycmVtO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJG1vZGFsLWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYWRkLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYnV0dG9uO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5hZGQtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNTApO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQubW9kYWwtZm9ybSBmb3Jte1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uLCAkYWxpZ246IGZsZXgtc3RhcnQpO1xcclxcblxcclxcblxcdFxcdFxcdHRleHRhcmVhIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcdFxcdFxcdFxcdHJlc2l6ZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDMwMHB4O1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMC44cmVtIC41cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXQge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgJHNpZGUtdGV4dC1jb2xvcjtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vIGluIG9yZGVyIHRvIHNob3cgdGhlIG1vZGFsIHdpdGggYSBzaW1wbGUgYW5pbWF0aW9uXFxyXFxuLnNob3ctbW9kYWwge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi4vZGF0YS90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBUaXRsZV9DaGVja2VyIH0gZnJvbSAnLi4vaXRlbV9hZGRlci90aXRsZV9jaGVja2VyLmpzJztcclxuaW1wb3J0IHsgR2V0X0RldGFpbHMgfSBmcm9tIFwiLi9nZXRfdG9kb19kZXRhaWxzLmpzXCI7XHJcbmltcG9ydCB7IENsZWFyX0Zvcm0gfSBmcm9tIFwiLi4vdG9wX25hdmlnYXRpb24vY2xlYXJfbW9kYWwuanNcIjtcclxuaW1wb3J0IHsgVmFsaWRhdGVfVG9kbyB9IGZyb20gXCIuLi92YWxpZGF0aW9uL3ZhbGlkYXRlX3RvZG8uanNcIjtcclxuaW1wb3J0IHsgVXBkYXRlX0l0ZW0gfSBmcm9tICcuLi9ldmVudC91cGRhdGVfZXZlbnQuanMnO1xyXG5pbXBvcnQgeyBBZGRlcl9Ub2RvIH0gZnJvbSBcIi4uL2l0ZW1fYWRkZXIvYWRkZXIuanNcIjtcclxuaW1wb3J0IHsgSW5ib3ggfSBmcm9tIFwiLi4vaW5ib3gvaW5ib3guanNcIjtcclxuaW1wb3J0IHsgUGVyc29uYWwgfSBmcm9tICcuLi9wZXJzb25hbC9wZXJzb25hbC5qcyc7XHJcblxyXG4vLyB0aGlzIG1vZHVsZSBpcyBmb3IgYWNjZXNzaW5nIHRoZSBtb2RhbCBmb3JtXHJcbi8vIG9uY2UgdGhlIEFkZCBidXR0b24gaXMgY2xpY2tlZCwgaXQgd2lsbCBjaGVjayBmb3IgcmVxdWlyZWQgZmllbGQgaWYgb25lIGlzIGVtcHR5LCBwcm9tcHQgdGhhdCBhbGwgZmllbGQgc2hvdWxkIGJlIGZpbGxlZFxyXG4vLyBpZiBhbGwgYXJlIGZpbGxlZCwgZ2V0IGFsbCB0aGUgZGF0YSB0aGVuIGNhbGwgdGhlIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgbmV3IHRvZG8gXHJcblxyXG5jb25zdCBidG5BZGRJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtJyk7XHJcbmV4cG9ydCBjb25zdCBBZGRfVG9kbyA9IChmdW5jdGlvbigpIHtcclxuXHQvLyBhZGQgZXZlbnRsaXN0ZW5lciB0byB0aGUgYnV0dG9uXHJcblx0YnRuQWRkSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRvRG9JdGVtKTtcclxuXHRsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcclxuXHQvLyBWYWxpZGF0ZSB0aGUgbW9kYWwgZm9ybSBmaXJzdCBpZiBhbGwgaGFzIHZhbHVlLiBlbHNlIHNob3cgYW4gYWxlcnRcclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgZ2V0IHRoZSBkZXRhaWxzIGZyb20gdGhlIG1vZGFsIGZvcm1cclxuXHQvLyByZXR1cm4gdGhlIGRldGFpbHMgYXMgYW4gb2JqZWN0IHRoZW4gYXNzaWduIGl0IHRvIGl0ZW1EZXRhaWxzXHJcblx0Ly8gdGhlbiBjYWxsIHRoZSBBZGRlcl9Ub2RvIGluIG9yZGVyIHRvIGFkZCB0aGUgb2JqZWN0IHRvIHRoZSB0b2RvQ29sbGVjdGlvblxyXG5cdGZ1bmN0aW9uIGFkZFRvRG9JdGVtKCkge1xyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlIGJ1dHRvbiBpcyBmb3IgdXBkYXRpbmcgb3Igbm90XHJcblx0XHRpZiAoYnRuQWRkSXRlbS5pbm5lckhUTUwgPT09IFwiVXBkYXRlXCIpIHtcclxuXHRcdFx0VXBkYXRlX0l0ZW0oKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly8gdmFsaWRhdGUgaWYgYWxsIGlucHV0IGhhcyB2YWx1ZVxyXG5cdFx0aWYgKFZhbGlkYXRlX1RvZG8oKSkge1xyXG5cdFx0XHRsZXQgaXRlbURldGFpbHMgPSBHZXRfRGV0YWlscygpO1xyXG5cdFx0XHQvLyBjaGVjayBpZiB0aGUgdXNlciBpcyBhZGRpbmcgdG8gaW5ib3ggb3IgcGVyc29uYWwgYnkgY2hlY2tpbmcgdGhlIHByb2plY3QgdGl0bGVcclxuXHRcdFx0aWYgKFRpdGxlX0NoZWNrZXIocHJvamVjdFRpdGxlLmlubmVySFRNTCkpIHtcclxuXHRcdFx0XHQvLyB1c2VyIGlzIGFkZGluZyB0byB0aGUgaW5ib3hcclxuXHRcdFx0XHRUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zID0gQWRkZXJfVG9kbyhpdGVtRGV0YWlscywgXCJJbmJveFwiKTtcclxuXHRcdFx0XHRJbmJveC5yZW5kZXIoKTtcclxuXHRcdFx0fWVsc2Uge1xyXG5cdFx0XHRcdFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMgPSBBZGRlcl9Ub2RvKGl0ZW1EZXRhaWxzLCBwcm9qZWN0VGl0bGUuaW5uZXJIVE1MKTtcclxuXHRcdFx0XHRQZXJzb25hbC51cGRhdGUoKTsgLy8gdXBkYXRlIHRoZSB2aWV3LXRvZG9cclxuXHRcdFx0fVxyXG5cdFx0XHRDbGVhcl9Gb3JtKCk7IC8vIGNsZWFyIHRoZSBmb3JtXHJcblx0XHR9ZWxzZSB7XHJcblx0XHRcdGFsZXJ0KFwiRmlsbCBhbGwgZmllbGRzIVwiKTtcclxuXHRcdH1cclxuXHR9XHJcbn0pKCk7XHJcbiIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4uL2RhdGEvdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kby5qcyc7XHJcbi8vIHRoaXMgbW9kdWxlIGlzIGZvciBnZXR0aW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gZnJvbSB0aGUgbW9kYWxcclxuXHJcbmNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kdWUtZGF0ZScpO1xyXG5jb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXByaW9yaXR5Jyk7XHJcbmNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtdGl0bGUnKTtcclxuY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZXNjcmlwdGlvbicpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldF9EZXRhaWxzKCkge1x0XHJcblx0Ly8gY2FsbCB0aGUgZnVuY3Rpb24gZmFjdG9yeSBmb3IgbWFraW5nIGEgdG9kbyBpdGVtXHJcblx0Ly8gdGhlbiBnaXZlIHRoZSBpbnB1dCB2YWx1ZXMgYXMgYSBwYXJhbWV0ZXJcclxuXHRyZXR1cm4gVG9kbyhUb2RvX0RhdGEuZ2V0VG9kb0lkKCkgLGlucHV0VGl0bGUudmFsdWUsIGlucHV0RGVzY3JpcHRpb24udmFsdWUsIGlucHV0RHVlRGF0ZS52YWx1ZSwgaW5wdXRQcmlvcml0eS52YWx1ZSk7XHJcbn07IiwiLy8gdGhpcyBpcyBhIGZ1bmN0aW9uIGZhY3RvcnkgZm9yIGNyZWF0aW5nIGEgbmV3IHRvZG8gaXRlbVxyXG5leHBvcnQgY29uc3QgVG9kbyA9IChpZCwgdGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHkpID0+IHtcclxuXHRsZXQgdG9kb09iamVjdCA9IHt9OyAvLyBlbXB0eSBvYmplY3RcclxuXHJcblx0Ly8gc2V0IHRoZSBwYXJhbWV0ZXJzIGdpdmVuIHRvIHRoZSB0b2RvIG9iamVjdFxyXG5cdHRvZG9PYmplY3QuaWQgPSBpZDtcclxuXHR0b2RvT2JqZWN0LnRpdGxlID0gdGl0bGU7XHJcblx0dG9kb09iamVjdC5kZXNjID0gZGVzYztcclxuXHR0b2RvT2JqZWN0LmR1ZSA9IGR1ZTtcclxuXHR0b2RvT2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG5cdHJldHVybiB0b2RvT2JqZWN0OyAvLyByZXR1cm4gdGhlIG9iamVjdFxyXG59OyIsIi8vIHRoaXMgaXMgZ29pbmcgdG8gYmUgdGhlIHBlcnNvbmFsIHByb2plY3QgY29udGFpbmVyc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBlcnNvbmFsX0NvbnRhaW5lcihpdGVtRGV0YWlscykge1xyXG5cdHJldHVybiBgPGgzIGNsYXNzPVwidGV4dC1ob3ZlclwiIGlkPVwiYnRuUGVyc29uYWxQcm9qZWN0XCI+JHtpdGVtRGV0YWlsc308L2gzPmA7XHJcbn0iLCIvLyB0aGlzIGNvbnRhaW5lciB3aWxsIGNvbnRhaW4gdGhlIHRvZG8gaXRlbSBjb250YWluZXJcclxuLy8gaGVyZSwgaXQgd2lsbCByZXR1cm4gYSBodG1sIHJlcHJlc2VudCBvZiB0aGUgdG9kbyBpdGVtXHJcbi8vIGluIG9yZGVyIHRvIGFwcGVuZCBpdCB0byB0aGUgRE9NXHJcblxyXG4vLyB0aGlzIHdpbGwgcHJvdmlkZSB0aGUgY29udGFpbmVyIGZvciBjcmVhdGluZyB0b2RvIGl0ZW1cclxuZXhwb3J0IGZ1bmN0aW9uIFRvZG9fQ29udGFpbmVyKGl0ZW1EZXRhaWxzKSB7XHJcblx0Ly8gZ2VuZXJhdGUgYSB0b2RvIGxpc3QgY29udGFpbmVyXHJcblx0Ly8gd2l0aCB0aGUgdmFsdWVzIGZyb20gdGhlIGl0ZW1EZXRhaWxzXHJcblx0cmV0dXJuIGA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCI+XHJcblx0ICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvZG8tdGl0bGVcIj5cclxuXHQgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiJHtpdGVtRGV0YWlscy5wcmlvcml0eX1cIj5cclxuXHQgICAgICAgICAgICAgICAgPGgyPiR7aXRlbURldGFpbHMudGl0bGV9PC9oMj5cclxuXHQgICAgICAgICAgICA8L2Rpdj5cclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby1wcm9wXCI+XHJcblx0ICAgICAgICAgICAgICAgIDxoMz4ke2l0ZW1EZXRhaWxzLmR1ZX08L2gzPlxyXG5cdCAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImltYWdlXCIgZGF0YS1pZD1cIiR7aXRlbURldGFpbHMuaWR9XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLWhvdmVyIHRvZG8tZWRpdFwiIGlkPVwiZWRpdC10b2RvXCIgc3JjPVwiLi4vc3JjL2ltZy9lZGl0LnBuZ1wiPlxyXG5cdCAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImltYWdlXCIgZGF0YS1pZD1cIiR7aXRlbURldGFpbHMuaWR9XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLWhvdmVyIHRvZG8tZGVsZXRlXCIgaWQ9XCJkZWxldGUtdG9kb1wiIHNyYz1cIi4uL3NyYy9pbWcvZGVsZXRlLnBuZ1wiPlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFx0PC9kaXY+YDtcclxufSIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgaGFuZGxlIHRoZSBwb3B1bGF0aW9uIG9mIHRoZSB1cGRhdGVfbW9kYWxcclxuLy8gZnJvbSB0aGUgZ2F0aGVyZWQgZGF0YSBmcm9tIHRoZSBzZWFyY2ggbW9kdWxlXHJcblxyXG4vLyBnZXQgYWxsIHRoZSBlbGVtZW50cyBvZiB0aGUgbW9kYWxcclxuY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWR1ZS1kYXRlJyk7XHJcbmNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtcHJpb3JpdHknKTtcclxuY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC10aXRsZScpO1xyXG5jb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlc2NyaXB0aW9uJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUG9wdWxhdGVfVXBkYXRlX01vZGFsKHRvZG9JdGVtKSB7XHJcblx0aW5wdXREdWVEYXRlLnZhbHVlID0gdG9kb0l0ZW0uZHVlO1xyXG5cdGlucHV0UHJpb3JpdHkudmFsdWUgPSB0b2RvSXRlbS5wcmlvcml0eTtcclxuXHRpbnB1dFRpdGxlLnZhbHVlID0gdG9kb0l0ZW0udGl0bGU7XHJcblx0aW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG9JdGVtLmRlc2M7XHJcbn0iLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFNlYXJjaF9JbmJveCB9IGZyb20gJy4vc2VhcmNoX2luYm94LmpzJztcclxuaW1wb3J0IHsgU2VhcmNoX1Byb2plY3QgfSBmcm9tICcuL3NlYXJjaF9wcm9qZWN0LmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBzZWFyY2ggZm9yIHRoZSBzcGVjaWZpYyB0b2RvIGl0ZW1cclxuLy8gYnkgdGhlIHVzZSBvZiB0aGUgaWQga2V5IHRoYXQgd2lsbCBiZSBwYXNzZWRcclxuLy8gdGhpcyB3aWxsIGNoZWNrIGV2ZXJ5IGl0ZW0gYW5kIGNvbXBhcmUgZWFjaCBpZCBrZXlcclxuLy8gb25jZSBmb3VuZCwgZ2V0IHRoZSBpbmRleCBhbmQgcmV0dXJuIGl0XHJcblxyXG4vLyBzZWFyY2ggdGhyb3VnaCBhbGwgb2JqZWN0cyBhbmQgY29tcGFyZSB0aGUgaXRlbS5pZCB0byBpZCB0aGVuIHJldHVybiB0aGUgaW5kZXggb2YgdGhlIGl0ZW1cclxuZnVuY3Rpb24gc2VhcmNoSXRlbShpZCwgdG9kb0NvbGxlY3Rpb25zKSB7XHJcblx0Zm9yKGNvbnN0IGl0ZW0gb2YgdG9kb0NvbGxlY3Rpb25zKSB7XHJcblx0XHRpZiAoaXRlbS5pZCA9PSBpZClcclxuXHRcdFx0cmV0dXJuIHRvZG9Db2xsZWN0aW9ucy5pbmRleE9mKGl0ZW0pXHJcblx0fVxyXG5cdHJldHVybiAtMTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaChpZCkge1xyXG5cdGxldCB0b2RvSXRlbTsgLy8gdGhpcyB3aWxsIGhvbGQgdGhlIHNlYXJjaGVkIGl0ZW1cclxuXHQvLyBjYWxsIHRoZSBzZWFyY2hpbmcgbW9kdWxlIGZvciB0aGUgaW5ib3ggYW5kIHByb2plY3RcclxuXHRjb25zdCBpbmJveEtleSA9IFNlYXJjaF9JbmJveChpZCwgc2VhcmNoSXRlbSk7XHRcclxuXHRjb25zdCB7IGl0ZW1LZXksIHByb2plY3RLZXkgfT0gU2VhcmNoX1Byb2plY3QoaWQsIHNlYXJjaEl0ZW0pO1xyXG5cclxuXHRpZiAoaW5ib3hLZXkgIT0gLTEpIHtcclxuXHRcdHRvZG9JdGVtID0gVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveFtpbmJveEtleV07XHJcblx0fVxyXG5cdGlmIChpdGVtS2V5ICE9IC0xKSB7XHJcblx0XHR0b2RvSXRlbSA9IFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWxbcHJvamVjdEtleV1baXRlbUtleV07XHJcblx0fVxyXG5cclxuXHQvLyByZXR1cm4gbXVsdGlwbGUgdmFsdWVzXHJcblx0cmV0dXJuIHtcclxuXHRcdGl0ZW06IHRvZG9JdGVtLFxyXG5cdFx0aW5ib3hLZXk6IGluYm94S2V5LFxyXG5cdFx0aXRlbUtleTogaXRlbUtleSxcclxuXHRcdHByb2plY3RLZXk6IHByb2plY3RLZXlcclxuXHR9XHJcbn07IiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi90b2RvX2RhdGEuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSB3aWxsIHNlYXJjaCBpbiB0aGUgaW5ib3ggY29sbGVjdGlvblxyXG4vLyBhbmQgd2lsbCByZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBpdGVtIGlmIGZvdW5kZFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaF9JbmJveChpZCwgc2VhcmNoRnVuYykge1xyXG5cdGNvbnN0IGl0ZW1LZXkgPSBzZWFyY2hGdW5jKGlkLCBUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLmluYm94KTtcclxuXHRyZXR1cm4gaXRlbUtleTtcclxufSIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4vdG9kb19kYXRhLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBzZWFyY2ggaW4gdGhlIHByb2plY3QgY29sbGVjdGlvblxyXG4vLyBhbmQgd2lsbCByZXR1cm4gdGhlIGl0ZW0gaW5kZXggaWYgZm91bmRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTZWFyY2hfUHJvamVjdChpZCwgc2VhcmNoRnVuYykge1xyXG5cdGxldCBpdGVtS2V5ID0gLTE7IC8vIGRlZmF1bHQgKG1lYW5zLCB0aGUgaXRlbSBpcyBzdGlsbCBub3QgZm91bmQpXHJcblx0bGV0IHByb2plY3RLZXk7XHJcblx0Zm9yKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsKSkge1xyXG5cdFx0Ly8gaWYgaXRlbSBrZXlzICE9IC0xIHN0b3AgdGhlIGxvb3AuIChtZWFucywgdGhlIGl0ZW0gaXMgZm91bmQpXHJcblx0XHRpZiAoaXRlbUtleSAhPSAtMSkgYnJlYWtcclxuXHRcdGl0ZW1LZXkgPSBzZWFyY2hGdW5jKGlkLCBUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW2tleV0pO1xyXG5cdFx0cHJvamVjdEtleSA9IGtleTtcclxuXHR9XHJcblx0cmV0dXJuIHsgaXRlbUtleSwgcHJvamVjdEtleSB9O1xyXG59IiwiLy8gdGhpcyBjb250YWlucyBhbGwgdGhlIGRhdGEgb2YgdGhlIHRvZG8gYXBwXHJcbi8vIGluY2x1ZGluZyB0aGUgdG9kb0NvbGxlY3Rpb25zLCB0aGUgdG9kb0lkLCBhbmQgdGhlIHRvZG9Qcm9qZWN0Q29sbGVjdGlvbnNcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVG9kb19EYXRhID0gKGZ1bmN0aW9uKCkge1xyXG5cdGxldCB0b2RvQ29sbGVjdGlvbnMgPSB7XHJcblx0XHRpbmJveDogW10sXHJcblx0XHRwZXJzb25hbDogW11cclxuXHR9OyAvLyBoZXJlIHdpbGwgZ28gdGhlIHRvZG9fY29sbGVjdGlvblxyXG5cdGxldCBwZXJzb25hbFByb2plY3RDb2xsZWN0aW9uID0gW107IC8vIGhlcmUgd2Ugd2lsbCBhc3NpZ24gdGhlIHBlcnNvbmFsIHByb2plY3QgY29sbGVjdGlvblxyXG5cdGxldCB0b2RvSWQgPSAwO1x0XHJcblxyXG5cdGZ1bmN0aW9uIGdldFRvZG9JZCgpIHtcclxuXHRcdHRvZG9JZCsrOyAvLyBpbmNyZW1lbnQgdGhlIGlkIGluIG9yZGVyIGZvciBldmVyeSB0b2RvIGhhdmUgdW5pcXVlIGlkXHJcblx0XHRyZXR1cm4gdG9kb0lkO1xyXG5cdH1cclxuXHRyZXR1cm4ge1xyXG5cdFx0dG9kb0NvbGxlY3Rpb25zLFxyXG5cdFx0cGVyc29uYWxQcm9qZWN0Q29sbGVjdGlvbixcclxuXHRcdGdldFRvZG9JZFxyXG5cdH1cclxufSkoKTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcbi8vIHRoaXMgbW9kdWxlIHdpbGwgdXNlIGRhdGUtZm5zIHRvIGdldCB0aGUgY3VycmVudCBkYXRlXHJcbi8vIGluIGZvcm1hdCB5eXl5L21tL2RkXHJcbi8vIHRoZW4gcmV0dXJuIGl0XHJcblxyXG5leHBvcnQgY29uc3QgQ3VycmVudF9EYXRlID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiBmb3JtYXQobmV3IERhdGUoKSwgXCJZLU1NLWRkXCIpO1xyXG59KSgpOyIsImltcG9ydCB7IEN1cnJlbnRfRGF0ZSB9IGZyb20gJy4vY3VycmVudF9kYXRlLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBiZSBjYWxsZWQgb25jZSB0aGUgcHJvZ3JhbSBsb2FkZWQuXHJcbi8vIGl0IHdpbGwgc2V0IHRoZSBkYXRlIGZvciB0aGUgaHRtbCBpbnB1dCB3aXRoIHRoZSBjdXJyZW50IGRhdGVcclxuXHJcbmNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZHVlLWRhdGUnKTtcclxuZXhwb3J0IGNvbnN0IFNldF9DdXJyZW50X0RhdGUgPSAoZnVuY3Rpb24oKSB7XHJcblx0Y29uc29sZS5sb2codHlwZW9mIEN1cnJlbnRfRGF0ZSk7XHJcblx0ZHVlRGF0ZS52YWx1ZSA9IEN1cnJlbnRfRGF0ZTtcclxufSkoKTsiLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IEV2ZW50X01hbmFnZXIgfSBmcm9tICcuL2V2ZW50X21hbmFnZXIuanMnO1xyXG5pbXBvcnQgeyBTZWFyY2ggfSBmcm9tICcuLi9kYXRhL3NlYXJjaC5qcyc7XHJcbmltcG9ydCB7IEluYm94IH0gZnJvbSAnLi4vaW5ib3gvaW5ib3guanMnO1xyXG5pbXBvcnQgeyBUb2RheSB9IGZyb20gJy4uL3RvZGF5L3RvZGF5LmpzJztcclxuaW1wb3J0IHsgUGVyc29uYWwgfSBmcm9tICcuLi9wZXJzb25hbC9wZXJzb25hbC5qcyc7XHJcbi8vIHRoaXMgd2lsbCBoYW5kbGUgdGhlIGFkZGluZyBvZiBkZWxldGUgZXZlbnQgdG8gYWxsIHRvZG8gbGlzdCBpdGVtc1xyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGNhbGwgYWxsIHRoZSB1cGRhdGUgZnVuY3Rpb24gb2YgZXZlcnkgdGFiIGluIG9yZGVyIHRvIFxyXG4vLyByZS1yZW5kZXIgdGhlIHZpZXcgdG9kb1xyXG5mdW5jdGlvbiByZW5kZXJVcGRhdGVkKCkge1xyXG5cdC8vIGNoZWNrIHdoYXQgdGFiIHRvIHJlLXJlbmRlclxyXG5cdC8vIHJlLXJlbmRlciB0aGUgdmlldy10b2RvXHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJJbmJveFwiKSByZXR1cm4gSW5ib3gudXBkYXRlKCk7XHJcblx0aWYgKHByb2plY3RUaXRsZS5pbm5lckhUTUwgPT0gXCJUb2RheVwiKSByZXR1cm4gVG9kYXkudXBkYXRlKCk7XHJcblx0UGVyc29uYWwudXBkYXRlKCk7XHJcbn1cclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG8oZSkge1xyXG5cdGxldCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcblx0Ly8gY2hlY2sgaWYgdGhlIHRvZG9JdGVtIGlzIGluIEluYm94IG9yIFByb2plY3RcclxuXHQvLyBUcnVlIC0+IEluYm94IHwgRmFsc2UgLT4gUGVyc29uYWxcclxuXHRsZXQgc2VhcmNoZWRJdGVtID0gU2VhcmNoKGlkKTtcclxuXHRpZiAoc2VhcmNoZWRJdGVtLmluYm94S2V5ICE9IC0xKVxyXG5cdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveC5zcGxpY2Uoc2VhcmNoZWRJdGVtLmluYm94S2V5LDEpO1xyXG5cdGlmIChzZWFyY2hlZEl0ZW0uaXRlbUtleSAhPSAtMSlcclxuXHRcdFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWxbc2VhcmNoZWRJdGVtLnByb2plY3RLZXldLnNwbGljZShzZWFyY2hlZEl0ZW0uaXRlbUtleSwxKTtcclxuXHRjb25zb2xlLmxvZyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zKVxyXG5cdHJlbmRlclVwZGF0ZWQoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0ZV9FdmVudChlbGVtZW50cykge1xyXG5cdEV2ZW50X01hbmFnZXIoZWxlbWVudHMsIGRlbGV0ZVRvZG8pO1xyXG59IiwiLy8gdGhpcyB3aWxsIGhhbmRsZSB0aGUgYWRkaW5nIG9mIGV2ZW50IGxpc3RlbmVycyB0byBtdWx0aXBsZSBlbGVtZW50c1xyXG4vLyB0aGlzIG1vZHVsZSBuZWVkcyB0aGUgYXJyYXkgb2YgdGhlIGVsZW1lbnRzIHVzaW5nIHF1ZXJ5U2VsZWN0b3JBbGxcclxuLy8gdGhlbiBpdCBhbHNvIG5lZWQgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgZWxlbWVudFxyXG4vLyBpbiBvcmRlciB0byBpdGVyYXRlIHRvIGVhY2ggZWxlbWVudC4gSXQgd2lsbCB1c2UgZm9yRWFjaFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEV2ZW50X01hbmFnZXIoZWxlbWVudHMsIGNhbGxCYWNrRnVuYykge1xyXG5cdGVsZW1lbnRzLmZvckVhY2goKGVsZW0pID0+IHtcclxuXHRcdGVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gY2FsbEJhY2tGdW5jKGUpKTtcclxuXHR9KTtcclxufTsiLCJpbXBvcnQgeyBFdmVudF9NYW5hZ2VyIH0gZnJvbSAnLi9ldmVudF9tYW5hZ2VyLmpzJztcclxuaW1wb3J0IHsgU2VhcmNoIH0gZnJvbSAnLi4vZGF0YS9zZWFyY2guanMnO1xyXG5pbXBvcnQgeyBHZXRfRGV0YWlscyB9IGZyb20gJy4uL2FkZF90b2RvL2dldF90b2RvX2RldGFpbHMuanMnO1xyXG5pbXBvcnQgeyBQb3B1bGF0ZV9VcGRhdGVfTW9kYWwgfSBmcm9tICcuLi9kYXRhL3BvcHVsYXRlX3VwZGF0ZV9tb2RhbC5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9VcGRhdGVfTW9kYWwgfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXJfdXBkYXRlX21vZGFsLmpzJztcclxuaW1wb3J0IHsgSW5ib3ggfSBmcm9tICcuLi9pbmJveC9pbmJveC5qcyc7XHJcbmltcG9ydCB7IFRvZGF5IH0gZnJvbSAnLi4vdG9kYXkvdG9kYXkuanMnO1xyXG5pbXBvcnQgeyBQZXJzb25hbCB9IGZyb20gJy4uL3BlcnNvbmFsL3BlcnNvbmFsLmpzJztcclxuLy8gdGhpcyB3aWxsIGhhbmRsZSB0aGUgYWRkaW5nIG9mIGV2ZW50cyB0byBhbGwgdXBkYXRlIGJ1dHRvbnMgaW4gdG9kbyBpdGVtc1xyXG5cclxubGV0IHRvZG9JdGVtOyAvLyB0aGlzIHdpbGwgaG9sZCB0aGUgc3BlY2lmaWMgdG9kb0l0ZW1cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcclxuZnVuY3Rpb24gdXBkYXRlVG9kbyhlKSB7XHJcblx0bGV0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuXHRjb25zdCBzZWFyY2hlZEl0ZW0gPSBTZWFyY2goaWQpO1xyXG5cdHRvZG9JdGVtID0gc2VhcmNoZWRJdGVtLml0ZW07XHJcblx0UmVuZGVyX1VwZGF0ZV9Nb2RhbCgpOyAvLyBzaG93IHRoZSB1cGRhdGUgbW9kYWxcclxuXHRQb3B1bGF0ZV9VcGRhdGVfTW9kYWwodG9kb0l0ZW0pO1xyXG59XHJcblxyXG4vLyB0aGlzIGZ1bmN0aW9uIHdpbGwgY2FsbCBhbGwgdGhlIHVwZGF0ZSBmdW5jdGlvbiBvZiBldmVyeSB0YWIgaW4gb3JkZXIgdG8gXHJcbi8vIHJlLXJlbmRlciB0aGUgdmlldyB0b2RvXHJcbmZ1bmN0aW9uIHJlbmRlclVwZGF0ZWQoKSB7XHJcblx0Ly8gY2hlY2sgd2hhdCB0YWIgdG8gcmUtcmVuZGVyXHJcblx0Ly8gcmUtcmVuZGVyIHRoZSB2aWV3LXRvZG9cclxuXHRpZiAocHJvamVjdFRpdGxlLmlubmVySFRNTCA9PSBcIkluYm94XCIpIHJldHVybiBJbmJveC51cGRhdGUoKTtcclxuXHRpZiAocHJvamVjdFRpdGxlLmlubmVySFRNTCA9PSBcIlRvZGF5XCIpIHJldHVybiBUb2RheS51cGRhdGUoKTtcclxuXHRQZXJzb25hbC51cGRhdGUoKTtcclxufVxyXG5cclxuLy8gdGhpcyBmdW5jdGlvbiB3aWxsIGFjY2VzcyB0aGUgc2VhcmNoZWQgaXRlbVxyXG4vLyBhbmQgdXBkYXRlIGFsbCBvZiBpdCdzIHZhbHVlXHJcbmV4cG9ydCBmdW5jdGlvbiBVcGRhdGVfSXRlbSgpIHtcclxuXHRjb25zdCB0b2RvRGV0YWlscyA9IEdldF9EZXRhaWxzKCk7IC8vIGdldCB0aGUgZGV0YWlscyBvZiB0aGUgdXBkYXRlX21vZGFsXHJcblx0dG9kb0l0ZW0uZHVlID0gdG9kb0RldGFpbHMuZHVlO1xyXG5cdHRvZG9JdGVtLnByaW9yaXR5ID0gdG9kb0RldGFpbHMucHJpb3JpdHk7XHJcblx0dG9kb0l0ZW0udGl0bGUgPSB0b2RvRGV0YWlscy50aXRsZTtcclxuXHR0b2RvSXRlbS5kZXNjID0gdG9kb0RldGFpbHMuZGVzYztcclxuXHJcblx0cmVuZGVyVXBkYXRlZCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXBkYXRlX0V2ZW50KGVsZW1lbnRzKSB7XHJcblx0Ly8gdXNlIGV2ZW50IG1hbmFnZXIgdG8gYWRkIGV2ZW50cyB0byB0aGUgYnV0dG9uc1xyXG5cdEV2ZW50X01hbmFnZXIoZWxlbWVudHMsIHVwZGF0ZVRvZG8pXHJcbn0iLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IENsZWFyX0J1dHRvbl9TdGF0ZSB9IGZyb20gJy4uL3JlbmRlcmVyL2NsZWFyX2J1dHRvbl9zdGF0ZS5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9CdXR0b25fU3RhdGUgfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXJfYnV0dG9uX3N0YXRlLmpzJztcclxuaW1wb3J0IHsgUmVuZGVyX1RvZG8gfSBmcm9tIFwiLi4vcmVuZGVyZXIvcmVuZGVyLmpzXCI7XHJcbmltcG9ydCB7IFJlbmRlcl9QZXJzb25hbCB9IGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlcl9wZXJzb25hbC5qcyc7XHJcbmltcG9ydCB7IENsZWFyX0NvbnRlbnQgfSBmcm9tICcuLi9yZW5kZXJlci9jbGVhcl9jb250ZW50LmpzJztcclxuLy8gd2lsbCBtb2R1bGUgd2lsbCB0YWtlIGNhcmUgZm9yIHRoZSBpbmJveCB0YWJcclxuLy8gaXQgd2lsbCBzaG93IGFsbCB0aGUgdG9kbyBpdGVtL3NcclxuXHJcbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJyk7XHJcbmNvbnN0IGJ0bkluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Nob3ctaW5ib3gnKTtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmJveCA9IChmdW5jdGlvbigpIHtcclxuXHRidG5JbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuXHRcdC8vIGNoYW5nZSB0aGUgcHJvamVjdCB0aXRsZVxyXG5cdFx0Q2xlYXJfQnV0dG9uX1N0YXRlKCk7XHJcblx0XHRDbGVhcl9Db250ZW50KCk7XHJcblx0XHRSZW5kZXJfQnV0dG9uX1N0YXRlKFwiI3Nob3ctaW5ib3hcIik7XHJcblx0XHRwcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gXCJJbmJveFwiO1xyXG5cdFx0UmVuZGVyX1RvZG8oVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveCk7XHJcblx0XHRSZW5kZXJfUGVyc29uYWwoKTtcclxuXHR9XHJcblxyXG5cdC8vIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIHdoZW4gdGhlIHRvZG8gbGlzdCBpcyB1cGRhdGVkXHJcblx0Ly8gYW5kIHRoZSB2aWV3IHRvZG8gaGFzIHRvIGJlIHJlcmVuZGVyZWQuXHJcblx0ZnVuY3Rpb24gdXBkYXRlKCkge1xyXG5cdFx0Q2xlYXJfQ29udGVudCgpO1xyXG5cdFx0UmVuZGVyX1RvZG8oVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveCk7XHJcblx0XHRSZW5kZXJfUGVyc29uYWwoKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRyZW5kZXIsXHJcblx0XHR1cGRhdGVcclxuXHR9XHJcbn0pKCk7XHJcbiIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4uL2RhdGEvdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgVGl0bGVfQ2hlY2tlciB9IGZyb20gJy4vdGl0bGVfY2hlY2tlci5qcyc7XHJcbmltcG9ydCB7IFByb2plY3RfQ2hlY2tlciB9IGZyb20gJy4vcHJvamVjdF9jaGVja2VyLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgaGFzIG11bHRpcGxlIHB1cnBvc2VcclxuLy8gdGhpcyBjYW4gYWRkIGEgdG9kbyB0byB0aGUgdG9kb0xpc3RcclxuLy8gb3IgZXZlbiBhZGQgYSBuZXcgcGVyc29uYWwgcHJvamVjdFxyXG5cclxuLy8gY2hlY2sgdGhlIHByb2plY3QgdGl0bGUgaW4gb3JkZXIgdG8ga25vdyBpZiB0aGUgdG9kbyBpcyBmb3IgcGVyc29uYWwgb3IgaW5ib3hcclxuZXhwb3J0IGZ1bmN0aW9uIEFkZGVyX1RvZG8oaXRlbURldGFpbHMsIHByb2plY3RUaXRsZSkge1xyXG5cdC8vIGluYm94XHJcblx0aWYgKFRpdGxlX0NoZWNrZXIocHJvamVjdFRpdGxlKSkge1xyXG5cdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveC5wdXNoKGl0ZW1EZXRhaWxzKTtcclxuXHR9ZWxzZXtcclxuXHRcdC8vIGlmIHByb2plY3QgdGl0bGUgZG9lcyBub3QgZXhpc3QuIENyZWF0ZSBpdFxyXG5cdFx0Ly8gZWxzZSBqdXN0IGFkZCBpdCB0byB0aGUgcHJvamVjdFxyXG5cdFx0aWYoUHJvamVjdF9DaGVja2VyKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWwsIHByb2plY3RUaXRsZSkpIHtcclxuXHRcdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbFtwcm9qZWN0VGl0bGVdLnB1c2goaXRlbURldGFpbHMpXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0VG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5wZXJzb25hbFtwcm9qZWN0VGl0bGVdID0gW107XHJcblx0XHRcdFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWxbcHJvamVjdFRpdGxlXS5wdXNoKGl0ZW1EZXRhaWxzKVxyXG5cdFx0fVxyXG5cdH1cclxuXHRjb25zb2xlLmxvZyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zKVxyXG5cdHJldHVybiBUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zOyAvLyByZXR1cm4gdGhlIHdob2xlIGNvbGxlY3Rpb25cclxufSIsImltcG9ydCB7IFRvZG9fRGF0YSB9IGZyb20gJy4uL2RhdGEvdG9kb19kYXRhLmpzJztcclxuaW1wb3J0IHsgVmFsaWRhdGVfUHJvamVjdF9BZGRlciB9IGZyb20gJy4uL3ZhbGlkYXRpb24vdmFsaWRhdGVfcHJvamVjdF9hZGRlci5qcyc7XHJcbi8vIHRoaXMgd2lsbCBoYW5kbGUgdGhlIGFkZGluZyBvZiBwZXJzb25hbCBwcm9qZWN0IHRvIHRoZSBwZXJzb25hbCBwcm9qZWN0IG9iamVjdFxyXG5cclxuY29uc3QgaW5wdXRQZXJzb25hbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWlucHV0LXByb2plY3QnKTtcclxuZXhwb3J0IGZ1bmN0aW9uIEFkZGVyX1BlcnNvbmFsX1Byb2plY3QoKSB7XHJcblx0aWYgKCFWYWxpZGF0ZV9Qcm9qZWN0X0FkZGVyKCkpIHJldHVybiBhbGVydChcIlBsZWFzZSBmaWxsIHRoZSBwcm9qZWN0IHRpdGxlXCIpO1xyXG5cclxuXHRUb2RvX0RhdGEucGVyc29uYWxQcm9qZWN0Q29sbGVjdGlvbi5wdXNoKGlucHV0UGVyc29uYWxQcm9qZWN0LnZhbHVlKTsgLy8gYWRkIHRoZSBwZXJzb25hbCBwcm9qZWN0IHRvIHRoZSBhcnJheVxyXG59IiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBjaGVjayBpZiBhIGtleSBleGl0c1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByb2plY3RfQ2hlY2tlcih0b2RvQ29sbGVjdGlvbnMsIHByb2plY3RUaXRsZSkge1xyXG5cdGlmICh0b2RvQ29sbGVjdGlvbnMuaGFzT3duUHJvcGVydHkocHJvamVjdFRpdGxlKSlcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdHJldHVybiBmYWxzZTtcclxufTsiLCIvLyB0aGlzIG1vZHVsZSB3aWxsIGNoZWNrIHRoZSBwcm9qZWN0IHRpdGxlIGluIG9yZGVyIHRvIGtub3dcclxuLy8gLSBpZiB0aGUgcHJvamVjdCBpcyBmb3IgdGhlIHBlcnNvbmFsIHByb2plY3RzXHJcbi8vIC0gb3Igb25seSBmb3IgdGhlIGluYm94IHByb2plY3RcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaXRsZV9DaGVja2VyKHByb2plY3RUaXRsZSkge1xyXG5cdC8vIGNoZWNrIHRoZSBwcm9qZWN0IHRpdGxlLiBJZiBpdCdzIEluYm94IHRoZW4gcmV0dXJuIHRydWVcclxuXHQvLyBvdGhlcndpc2UgZmFsc2VcclxuXHRpZiAocHJvamVjdFRpdGxlID09IFwiSW5ib3hcIiB8fCBwcm9qZWN0VGl0bGUgPT0gXCJUb2RheVwiKSBcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdHJldHVybiBmYWxzZTtcclxufTsiLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IEFkZGVyX1BlcnNvbmFsX1Byb2plY3QgfSBmcm9tICcuLi9pdGVtX2FkZGVyL3Byb2plY3RfYWRkZXIuanMnO1xyXG5pbXBvcnQgeyBQZXJzb25hbCB9IGZyb20gJy4vcGVyc29uYWwuanMnO1xyXG4vLyB0aGlzIG1vZHVsZSB3aWxsIGhhbmRsZSB0aGUgYWRkaW5nIG9mIHBlcnNvbmFsIHByb2plY3RcclxuXHJcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLW5ldy1wcm9qZWN0Jyk7XHJcbmV4cG9ydCBjb25zdCBBZGRfUHJvamVjdCA9IChmdW5jdGlvbigpIHtcclxuXHRidG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUGVyc29uYWxQcm9qZWN0KTtcclxuXHJcblx0Ly8gZnVuY3Rpb24gY2FsbGJhY2sgZm9yIHRoZSBhZGQgcHJvamVjdCBidXR0b25cclxuXHRmdW5jdGlvbiBhZGRQZXJzb25hbFByb2plY3QoKSB7XHJcblx0XHRBZGRlcl9QZXJzb25hbF9Qcm9qZWN0KCk7XHJcblx0XHRQZXJzb25hbC5yZW5kZXJQZXJzb25hbFByb2plY3QoKTtcclxuXHR9XHJcbn0pKCk7IiwiaW1wb3J0IHsgUmVuZGVyX1Byb2plY3RfQWRkZXIgfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXJfcHJvamVjdF9hZGRlci5qcyc7XHJcbi8vIHRoaXMgd2lsbCBoYW5kbGUgdGhlIGNhbmNlbCBidXR0b24gaW4gYWRkaW5nIHByb2plY3QgcG9wIHVwXHJcbi8vIGl0IHdpbGwgaGlkZSB0aGUgcHJvamVjdCBhZGRlciB0aGVuIHNob3cgdGhlIGNyZWF0ZSBuZXcgcHJvamVjdFxyXG5cclxuY29uc3QgYnRuQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbC1uZXctcHJvamVjdCcpO1xyXG5leHBvcnQgY29uc3QgQ2FuY2VsX1Byb2plY3QgPSAoZnVuY3Rpb24oKSB7XHJcblx0YnRuQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0UmVuZGVyX1Byb2plY3RfQWRkZXIoKTtcclxuXHR9KTtcclxufSkoKTsiLCIvLyB0aGlzIHdpbGwgY2xlYXIgdGhlIGlucHV0IGZpZWxkIGZvciBhZGRpbmcgYSBuZXcgcGVyc29uYWwgcHJvamVjdFxyXG5cclxuY29uc3QgaW5wdXRQZXJzb25hbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWlucHV0LXByb2plY3QnKTtcclxuZXhwb3J0IGZ1bmN0aW9uIENsZWFyX0lucHV0KCkge1xyXG5cdGlucHV0UGVyc29uYWxQcm9qZWN0LnZhbHVlID0gXCJcIjtcclxufTtcclxuIiwiaW1wb3J0IHsgVG9kb19EYXRhIH0gZnJvbSAnLi4vZGF0YS90b2RvX2RhdGEuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfUHJvamVjdF9BZGRlciB9IGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlcl9wcm9qZWN0X2FkZGVyLmpzJztcclxuaW1wb3J0IHsgUmVuZGVyX1RvZG8gfSBmcm9tICcuLi9yZW5kZXJlci9yZW5kZXIuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfQnV0dG9uX1N0YXRlIH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX2J1dHRvbl9zdGF0ZS5qcyc7XHJcbmltcG9ydCB7IENsZWFyX0J1dHRvbl9TdGF0ZSB9IGZyb20gJy4uL3JlbmRlcmVyL2NsZWFyX2J1dHRvbl9zdGF0ZS5qcyc7XHJcbmltcG9ydCB7IENhbmNlbF9Qcm9qZWN0IH0gZnJvbSAnLi9jYW5jZWxfYWRkaW5nX3Byb2plY3QuanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfUGVyc29uYWxfUHJvamVjdCB9IGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlcl9wZXJzb25hbF9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgQWRkX1Byb2plY3QgfSBmcm9tICcuL2FkZF9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgQ2xlYXJfSW5wdXQgfSBmcm9tICcuL2NsZWFyX2lucHV0LmpzJztcclxuaW1wb3J0IHsgQ2xlYXJfQ29udGVudCB9IGZyb20gJy4uL3JlbmRlcmVyL2NsZWFyX2NvbnRlbnQuanMnO1xyXG5cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcclxuY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3JlYXRlLXBlcnNvbmFsXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBlcnNvbmFsID0gKGZ1bmN0aW9uKCkge1xyXG5cdGJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBSZW5kZXJfUHJvamVjdF9BZGRlcik7XHJcblxyXG5cdC8vIHRoaXMgZnVuY3Rpb24gd2lsbCByZW5kZXIgYWxsIHRoZSBjcmVhdGVkIHBlcnNvbmFsIHByb2plY3RzXHJcblx0ZnVuY3Rpb24gcmVuZGVyUGVyc29uYWxQcm9qZWN0KCkge1xyXG5cdFx0UmVuZGVyX1BlcnNvbmFsX1Byb2plY3QoKTtcclxuXHRcdFJlbmRlcl9Qcm9qZWN0X0FkZGVyKCk7XHJcblx0XHRDbGVhcl9JbnB1dCgpO1xyXG5cdH1cdFxyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgaGFuZGxlIGFsbCB0aGUgcmVuZGVyaW5nIGZvciB0aGUgdmlldy10b2RvIHZpZXcgXHJcblx0Ly8gdGhpcyB3aWxsIGJlIG9ubHkgY2FsbGVkIGJ5IHRoZSB1c2Ugb2Ygc2lkZSBuYXZpZ2F0aW9uIHByb2plY3QgdGl0bGVcclxuXHRmdW5jdGlvbiByZW5kZXIoZSkge1xyXG5cdFx0Q2xlYXJfQnV0dG9uX1N0YXRlKCk7XHJcblx0XHRSZW5kZXJfQnV0dG9uX1N0YXRlKFwiI3Nob3ctcGVyc29uYWxcIik7XHJcblx0XHRDbGVhcl9Db250ZW50KCk7IC8vIGNsZWFyIGFsbCB0aGUgY29udGVudCBpbnNpZGUgdGhlIG1haW4gdmlldyB0b2RvXHJcblx0XHQvLyBnZXQgdGhlIHRhcmdldCBpbm5lckhUTUwgYW5kIHVzZSBpdCB0byBjaGFuZ2UgcHJvamVjdCB0aXRsZVxyXG5cdFx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9IGUudGFyZ2V0LmlubmVySFRNTDtcclxuXHRcdFJlbmRlcl9Ub2RvKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWxbcHJvamVjdFRpdGxlLmlubmVySFRNTF0pXHJcblx0fVxyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgdXBkYXRlIHRoZSB2aWV3LXRvZG8gb25jZSB0aGUgcHJvamVjdENvbGxlY3Rpb24gaXMgdXBkYXRlZFxyXG5cdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcclxuXHRcdENsZWFyX0NvbnRlbnQoKTsgLy8gY2xlYXIgYWxsIHRoZSBjb250ZW50IGluc2lkZSB0aGUgbWFpbiB2aWV3IHRvZG9cclxuXHRcdFJlbmRlcl9Ub2RvKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWxbcHJvamVjdFRpdGxlLmlubmVySFRNTF0pXHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVuZGVyUGVyc29uYWxQcm9qZWN0LFxyXG5cdFx0cmVuZGVyLFxyXG5cdFx0dXBkYXRlXHJcblx0fVxyXG59KSgpOyIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgcmVtb3ZlIHRoZSBhY3RpdmUgc3RhdGUgb2YgdGhlIGJ1dHRvblxyXG4vLyBpbiBvcmRlciB0byBhZGQgdGhlIGFjdGl2ZSBzdGF0ZSB0byB0aGUgb3RoZXIgYnV0dG9uXHJcblxyXG5jb25zdCBCVVRUT05fRUxFTUVOVFMgPSBbXCIjc2hvdy1pbmJveFwiLCBcIiNzaG93LXRvZGF5XCIsIFwiI3Nob3ctcGVyc29uYWxcIl07XHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhcl9CdXR0b25fU3RhdGUoKSB7XHJcblx0QlVUVE9OX0VMRU1FTlRTLmZvckVhY2goKGJ1dHRvbnMpID0+IHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnV0dG9ucykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblx0fSk7XHJcbn07IiwiLy8gVGhpcyBqcyBtb2R1bGUgd2lsbCBjbGVhciB0aGUgY29udGVudCBvZiBhIHBhcmVudCBub2RlXHJcbi8vIGl0IHdpbGwgZ2V0IHRoZSBwYXJlbnQgbm9kZSB0aGVuIGdldCB0aGUgZmlyc3QgZWxlbWVudCBjaGlsZFxyXG4vLyB3aGlsZSB0aGVyZSdzIHN0aWxsIGEgY2hpbGQga2VlcCBsb29waW5nXHJcbi8vIFx0aW5zaWRlIHRoZSBsb29wIGl0IHdpbGwgcmVtb3ZlIHRoZSBjaGlsZCB0aGVuIGdldCB0aGUgY2hpbGQgYWdhaW5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDbGVhcl9Db250ZW50KCkge1xyXG5cdGNvbnN0IGNvbnRlbnRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XHJcblx0aWYgKGNvbnRlbnRQYXJlbnQuaGFzQ2hpbGROb2RlcygpKSB7XHJcblx0XHRsZXQgY2hpbGQgPSBjb250ZW50UGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0d2hpbGUoY2hpbGQpIHtcclxuXHRcdFx0Y29udGVudFBhcmVudC5yZW1vdmVDaGlsZChjaGlsZClcclxuXHRcdFx0Y2hpbGQgPSBjb250ZW50UGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0fVxyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBUb2RvX0NvbnRhaW5lciB9IGZyb20gXCIuLi9jb250YWluZXIvdG9kb19jb250YWluZXIuanNcIjtcclxuaW1wb3J0IHsgVXBkYXRlX0V2ZW50IH0gZnJvbSAnLi4vZXZlbnQvdXBkYXRlX2V2ZW50LmpzJztcclxuaW1wb3J0IHsgRGVsZXRlX0V2ZW50IH0gZnJvbSAnLi4vZXZlbnQvZGVsZXRlX2V2ZW50LmpzJztcclxuLy8gdGhpcyB3aWxsIGxldCB1cyByZW5kZXIgYWxsIHRoZSB0b2RvIGl0ZW0gY29sbGVzdGlvbnNcclxuLy8gdXNpbmcgdGhlIGNvbnRhaW5lclxyXG5cclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1saXN0Jyk7XHJcbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXJfVG9kbyh0b2RvQ29sbGVjdGlvbikge1xyXG5cdC8vIGNoZWNrIGlmIHRoZSB0b2RvQ29sbGVjdGlvbiBpcyBub3QgdW5kZWZpbmVkXHJcblx0Ly8gY2hlY2sgaWYgdGhlcmUncyBhIHZhbHVlIHRvIHRoZSB0b2RvQ29sbGVjdGlvbiBvYmplY3RcclxuXHRpZiAodG9kb0NvbGxlY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcblx0XHRpZiAoT2JqZWN0LmtleXModG9kb0NvbGxlY3Rpb24pLmxlbmd0aCAhPSAwKSB7XHJcblx0XHRcdHRvZG9MaXN0LmlubmVySFRNTCArPSB0b2RvQ29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdFx0XHRyZXR1cm4gVG9kb19Db250YWluZXIoaXRlbSk7XHJcblx0XHRcdH0pLmpvaW4oJycpOyBcclxuXHJcblx0XHRcdC8vIGdldCBhbGwgdGhlIHVwZGF0ZSBhbmQgZGVsZXRlIGJ1dHRvbnMgdG8gYWRkIGV2ZW50c1xyXG5cdFx0XHRsZXQgYnRuVXBkYXRlRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZWRpdC10b2RvJyk7XHJcblx0XHRcdGxldCBidG5EZWxldGVFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNkZWxldGUtdG9kbycpO1xyXG5cdFx0XHQvLyB0aGVuIGNhbGwgdGhlIGV2ZW50IG1hbmFnZXJzIGZvciB1cGRhdGUgYW5kIGRlbGV0ZVxyXG5cdFx0XHRVcGRhdGVfRXZlbnQoYnRuVXBkYXRlRWxlbWVudHMpO1xyXG5cdFx0XHREZWxldGVfRXZlbnQoYnRuRGVsZXRlRWxlbWVudHMpO1xyXG5cclxuXHRcdH1cclxuXHR9ZWxzZSB7XHJcblx0XHRyZXR1cm4gdW5kZWZpbmVkO1xyXG5cdH1cclxufSIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgdG9nZ2xlIHRoZSBzaG93IGNsYXNzIG9mIHRoZSBjcmVhdGUgbmV3IHByb2plY3QgYnV0dG9uXHJcbi8vIGluIG9yZGVyIHRvIGhpZGUgaXQgb25jZSB0aGUgcHJvamVjdCBhZGRlciBzaG93c1xyXG4vLyB0aGVuIHNob3cgaXQgb25jZSB0aGUgcHJvamVjdCBhZGRlciBpcyBoaWRkZW5cclxuXHJcbmNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXBlcnNvbmFsJyk7XHJcbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXJfQWRkX1Byb2plY3QoKSB7XHJcblx0YWRkUHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1uZXctcGVyc29uYWxcIik7XHJcbn07IiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBzZXQgdGhlIHN0YXRlIG9mIHRoZSBidXR0b24gb25jZSBjbGlja2VkLlxyXG4vLyBvbmNlIHRoZSBzaWRlIGJ1dHRvbnMgaXMgY2xpY2tlZCwgdGhlIGJ1dHRvbiB3aWxsIGJlIGFkZGVkIGEgY2xhc3NcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXJfQnV0dG9uX1N0YXRlKGVsZW1lbnQpIHtcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbn0iLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9Ub2RvIH0gZnJvbSAgJy4vcmVuZGVyLmpzJztcclxuLy8gdGhpcyB3aWxsIGhhbmRsZSB0aGUgcmVuZGVyaW5nIG9mIHBlcnNvbmFsIHByb2plY3QgdG8gdGhlIG1haW4gdmlldy10b2RvIHVzaW5nIEluYm94IFxyXG4vLyByZW5kZXJpbmcgb2YgdGhlIHBlcnNvbmFsIHByb2plY3RzIHRvZG9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXJfUGVyc29uYWwoKSB7XHJcblx0Y29uc3QgcGVyc29uYWxQcm9qZWN0cyA9IE9iamVjdC5rZXlzKFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWwpOyAvLyBnZXQgdGhlIGtleXMgb2YgcGVyc29uYWwgcHJvamVjdHNcclxuXHRjb25zb2xlLmxvZyhwZXJzb25hbFByb2plY3RzLmxlbmd0aCk7XHJcblx0Ly8gY2hlY2sgaWYgcGVyc29uYWwgb2JqZWN0IGlzIG5vdCBlbXB0eVxyXG5cdGlmIChwZXJzb25hbFByb2plY3RzLmxlbmd0aCAhPSAwKSB7XHJcblx0XHQvLyBub3QgZW1wdHlcclxuXHRcdHBlcnNvbmFsUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG5cdFx0XHQvLyBsb29wIGluIGV2ZXJ5IHByb2plY3QgYW5kIHJlbmRlciBhbGwgdG9kbyBpdGVtIGl0IGhhc1xyXG5cdFx0XHRSZW5kZXJfVG9kbyhUb2RvX0RhdGEudG9kb0NvbGxlY3Rpb25zLnBlcnNvbmFsW3Byb2plY3RdKTtcclxuXHRcdH0pO1xyXG5cdH1cclxufTsiLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsX0NvbnRhaW5lciB9IGZyb20gJy4uL2NvbnRhaW5lci9wZXJzb25hbF9jb250YWluZXIuanMnO1xyXG5pbXBvcnQgeyBFdmVudF9NYW5hZ2VyIH0gZnJvbSAnLi4vZXZlbnQvZXZlbnRfbWFuYWdlci5qcyc7XHJcbmltcG9ydCB7IFBlcnNvbmFsIH0gZnJvbSAnLi4vcGVyc29uYWwvcGVyc29uYWwuanMnO1xyXG4vLyB0aGlzIHdpbGwgcmVuZGVyIGFsbCB0aGUgcGVyc29uYWwgcHJvamVjdCB0byB0aGUgRE9NXHJcblxyXG5jb25zdCBwZXJzb25hbFByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcnNvbmFsLXByb2plY3QtbGlzdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1BlcnNvbmFsX1Byb2plY3QoKSB7XHJcblx0bGV0IHBlcnNvbmFsUHJvamVjdENvbGxlY3Rpb24gPSBUb2RvX0RhdGEucGVyc29uYWxQcm9qZWN0Q29sbGVjdGlvbjtcclxuXHRwZXJzb25hbFByb2plY3RMaXN0LmlubmVySFRNTCA9IHBlcnNvbmFsUHJvamVjdENvbGxlY3Rpb24ubWFwKChwcm9qZWN0KSA9PiB7XHJcblx0XHRyZXR1cm4gUGVyc29uYWxfQ29udGFpbmVyKHByb2plY3QpO1xyXG5cdH0pLmpvaW4oJycpO1xyXG5cclxuXHRsZXQgYnRuUGVyc29uYWxQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNidG5QZXJzb25hbFByb2plY3QnKTtcclxuXHQvLyB0aGlzIHdpbGwgY2FsbCB0aGUgZXZlbnQgbWFuYWdlciBpbiBvcmRlciB0byBhZGQgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBwZXJzb25hbCBwcm9qZWN0XHJcblx0RXZlbnRfTWFuYWdlcihidG5QZXJzb25hbFByb2plY3RzLCBQZXJzb25hbC5yZW5kZXIpO1xyXG5cclxufTtcclxuIiwiaW1wb3J0IHsgUmVuZGVyX0FkZF9Qcm9qZWN0IH0gZnJvbSAnLi4vcmVuZGVyZXIvcmVuZGVyX2FkZF9wcm9qZWN0LmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCB0b2dnbGUgdGhlIGNsYXNzIG9mIHByb2plY3QgcG9wIHVwIGFkZGVyXHJcbi8vIGluIG9yZGVyIHRvIHNob3cgaXRcclxuXHJcbmNvbnN0IHByb2plY3RQb3BVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1wb3AtdXBcIik7XHJcbmV4cG9ydCBjb25zdCBSZW5kZXJfUHJvamVjdF9BZGRlciA9IChmdW5jdGlvbigpIHtcclxuXHRSZW5kZXJfQWRkX1Byb2plY3QoKTtcclxuXHRwcm9qZWN0UG9wVXAuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctcG9wLXVwXCIpO1xyXG59KTsiLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uL3RvcF9uYXZpZ2F0aW9uL3Nob3dfbW9kYWwuanMnO1xyXG4vLyB0aGlzIHJlbmRlciBtb2R1bGUgd2lsbCBoYW5kbGUgdGhlIHJlbmRlcmluZyBvZiBtb2RhbCBmb3IgdXBkYXRpbmcgdGhlIHRvZG8gaXRlbVxyXG4vLyB0aGlzIHdpbGwgcmV1c2UgdGhlIHNob3ctbW9kYWwgY2xhc3MgZWxlbWVudCBmb3IgYWRkaW5nIHRvZG9cclxuLy8gYnV0IHdpbGwgY2hhbmdlIHRoZSBpbm5lckhUTUwgb2YgdGhlIGJ1dHRvbiBmcm9tIFwiQWRkXCIgdG8gXCJVcGRhdGVcIlxyXG5cclxuY29uc3QgdXBkYXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtJyk7XHJcbmV4cG9ydCBmdW5jdGlvbiBSZW5kZXJfVXBkYXRlX01vZGFsKCkge1xyXG5cdE1vZGFsKCdzaG93LW1vZGFsJyk7XHJcblx0dXBkYXRlQnV0dG9uLmlubmVySFRNTCA9IFwiVXBkYXRlXCI7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5ib3ggfSBmcm9tICcuLi9pbmJveC9pbmJveC5qcyc7XHJcbmltcG9ydCB7IFRvZGF5IH0gZnJvbSAnLi4vdG9kYXkvdG9kYXkuanMnO1xyXG5pbXBvcnQgeyBQZXJzb25hbCB9IGZyb20gJy4uL3BlcnNvbmFsL3BlcnNvbmFsLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgaXMgZm9yIHRoZSBzaWRlIG5hdmlnYXRpb25zXHJcblxyXG5leHBvcnQgY29uc3QgU2lkZV9OYXZpZ2F0aW9uID0gKGZ1bmN0aW9uKCkge1xyXG5cdC8vIG9uY2UgdGhlIHdpbmRvdyBpcyBkb25lIGxvYWRpbmcuXHJcblx0Ly8gc2hvdyB0aGUgaW5ib3ggdGFiIGRlZnVhbHRcclxuXHR3aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdFx0SW5ib3gucmVuZGVyKCk7XHJcblx0fTtcclxufSkoKTtcclxuIiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBmaWx0ZXIgdGhlIHByb2plY3QgdG9kbydzXHJcbi8vIGl0IHdpbGwgbG9vayB0aHJvdWdoIHRoZSBwZXJzb25hbCBrZXkgY2hlY2sgaWYgaXQncyBsZW5ndGggaXMgbm90IDAgKG1lYW5zIGl0IGhhcyB1c2VyIHByb2plY3QpXHJcbi8vIHRoZW4gY2hlY2sgaW5zaWRlIHRoYXQgYXJyYXkgY3VzdG9tIHByb2plY3QgdGhlbiBjaGVjayB0aGUgb3RoZXIgY3VzdG9tIHByb2plY3RcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBGaWx0ZXJfUHJvamVjdCh0b2RvQ29sbGVjdGlvbiwgY2FsbEJhY2tGdW5jKSB7XHJcblx0Ly8gaXRlcmF0ZSB1c2luZyBmb3IuLm9mXHJcblx0bGV0IGZpbHRlcmVkQ29sbGVjdGlvbiA9IFtdOyAvLyBhc3NpZ24gdGhlIGZpbHRlcmVkIGNvbGxlY3Rpb24gaGVyZVxyXG5cdGNvbnN0IHByb2plY3RLZXlzID0gT2JqZWN0LmtleXModG9kb0NvbGxlY3Rpb24pOyAvLyBnZXQgdGhlIGtleXMgb2YgdGhlIG9iamVjdFxyXG5cdGZvcihjb25zdCBrZXkgb2YgcHJvamVjdEtleXMpIHtcclxuXHRcdC8vIHRoZW4gaXRlcmF0ZSB0aHJvdWdoIHRoZSBwcm9qZWN0IHVzaW5nIHRoZSBrZXlcclxuXHRcdC8vIGZpbHRlcmVkQ29sbGVjdGlvbi5wdXNoKHRvZG9Db2xsZWN0aW9uW2tleV0uZmlsdGVyKGNhbGxCYWNrRnVuYykpO1xyXG5cdFx0dG9kb0NvbGxlY3Rpb25ba2V5XS5maWx0ZXIoKGl0ZW0pID0+IHtcclxuXHRcdFx0aWYgKGNhbGxCYWNrRnVuYyhpdGVtKSkge1xyXG5cdFx0XHRcdGZpbHRlcmVkQ29sbGVjdGlvbi5wdXNoKGl0ZW0pXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZpbHRlcmVkQ29sbGVjdGlvbjtcclxufTsiLCJpbXBvcnQgeyBUb2RvX0RhdGEgfSBmcm9tICcuLi9kYXRhL3RvZG9fZGF0YS5qcyc7XHJcbmltcG9ydCB7IEZpbHRlcl9Qcm9qZWN0IH0gZnJvbSAnLi9maWx0ZXJfcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IEN1cnJlbnRfRGF0ZSB9IGZyb20gJy4uL2RhdGUvY3VycmVudF9kYXRlLmpzJztcclxuLy8gdGhpcyBtb2R1bGUgd2lsbCBmaWx0ZXIgdGhlIHRvZG8gY29sbGVjdGlvblxyXG4vLyB0aGVuIHJldHVybiB0aGUgbmV3IGZpbHRlcmVkIHRvZG8gY29sbGVjdGlvbnNcclxuXHJcbmV4cG9ydCBjb25zdCBGaWx0ZXJlZF9Ub2RheSA9IChmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8gdGhpcyBmdW5jdGlvbiB3aWxsIGJlIHRoZSBjYWxsYmFjayBmdW5jdGlvblxyXG5cdC8vIGluIG9yZGVyIHRvIGNoZWNrIGV2ZXJ5IHRvZG8gaW5zaWRlIHRoZSB0b2RvQ29sbGVjdGlvblxyXG5cdC8vIGFuZCBjb21wYXJlIHRoZSBjdXJyZW50IGRhdGUgdG8gdGhlIGR1ZSBkYXRlXHJcblx0ZnVuY3Rpb24gZHVlVG9kYXkoaXRlbSkge1xyXG5cdFx0aWYgKGl0ZW0uZHVlID09IEN1cnJlbnRfRGF0ZSlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRyZXR1cm4gZmFsc2VcclxuXHR9XHJcblxyXG5cdC8vIHRoaXMgd2lsbCByZXR1cm4gdGhlIGZpbHRlcmVkQ29sbGVjdGlvblxyXG5cdGZ1bmN0aW9uIGdldEZpbHRlcmVkQ29sbGVjdGlvbigpIHtcclxuXHRcdC8vIGdldCB0aGUgdG9kbyBjb2xsZWN0aW9uIGZyb20gQWRkX1RvZG8gbW9kdWxlXHJcblx0XHQvLyB0aGVuIGZpbHRlciBpdFxyXG5cdFx0bGV0IHRvZG9Db2xsZWN0aW9uID0gVG9kb19EYXRhLnRvZG9Db2xsZWN0aW9ucy5pbmJveDtcclxuXHRcdGxldCBmaWx0ZXJlZENvbGxlY3Rpb24gPSB0b2RvQ29sbGVjdGlvbi5maWx0ZXIoZHVlVG9kYXkpO1xyXG5cdFx0Ly8gZmlsdGVyIHRoZSB0b2RvIGNvbGxlY3Rpb24gaW4gcGVyc29uYWwgcHJvamVjdFxyXG5cdFx0bGV0IGZpbHRlcmVkUHJvamVjdCA9IEZpbHRlcl9Qcm9qZWN0KFRvZG9fRGF0YS50b2RvQ29sbGVjdGlvbnMucGVyc29uYWwsIGR1ZVRvZGF5KTtcclxuXHJcblx0XHQvLyBtZXJnZSB0aGUgYXJyYXkgb2YgZmlsdGVyZWQgaW5ib3ggdG9kbyBhbmQgdGhlIHBlcnNvbmFsIHByb2plY3QgdG9kb1xyXG5cdFx0cmV0dXJuIGZpbHRlcmVkQ29sbGVjdGlvbi5jb25jYXQoZmlsdGVyZWRQcm9qZWN0KTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXRGaWx0ZXJlZENvbGxlY3Rpb25cclxuXHR9XHJcbn0pKCk7IiwiaW1wb3J0IHsgQ2xlYXJfQnV0dG9uX1N0YXRlIH0gZnJvbSAnLi4vcmVuZGVyZXIvY2xlYXJfYnV0dG9uX3N0YXRlLmpzJztcclxuaW1wb3J0IHsgUmVuZGVyX0J1dHRvbl9TdGF0ZSB9IGZyb20gJy4uL3JlbmRlcmVyL3JlbmRlcl9idXR0b25fc3RhdGUuanMnO1xyXG5pbXBvcnQgeyBGaWx0ZXJlZF9Ub2RheSB9IGZyb20gJy4vZmlsdGVyX3RvZG8uanMnO1xyXG5pbXBvcnQgeyBSZW5kZXJfVG9kbyB9IGZyb20gXCIuLi9yZW5kZXJlci9yZW5kZXIuanNcIjtcclxuaW1wb3J0IHsgQ2xlYXJfQ29udGVudCB9IGZyb20gJy4uL3JlbmRlcmVyL2NsZWFyX2NvbnRlbnQuanMnO1xyXG4vLyB0aGlzIHdpbGwgc2hvdyBhbGwgdGhlIHRvZG8gdGhhdCBpcyBkZWFkbGluZSB0b2RheVxyXG4vLyBpdCB3aWxsIGdldCBhbGwgdGhlIHRvZG9saXN0IGNvbGxlY3Rpb25zXHJcbi8vIHRoZW4gdXNlIGFycmF5IGZpbHRlcmluZyBmdW5jdGlvbiBpbiBvcmRlciB0byBmaWx0ZXJcclxuLy8gYW5kIG9ubHkgcmV0dXJuIHRoZSBvbmNlIHRoYXQgaXMgZGVhZGxpbmUgdG9kYXkuXHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpO1xyXG5jb25zdCBidG5Ub2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LXRvZGF5Jyk7XHJcbmV4cG9ydCBjb25zdCBUb2RheSA9IChmdW5jdGlvbigpIHtcclxuXHRidG5Ub2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlcik7XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlcigpIHtcclxuXHRcdENsZWFyX0J1dHRvbl9TdGF0ZSgpO1xyXG5cdFx0Q2xlYXJfQ29udGVudCgpO1xyXG5cdFx0UmVuZGVyX0J1dHRvbl9TdGF0ZShcIiNzaG93LXRvZGF5XCIpO1xyXG5cdFx0cHJvamVjdFRpdGxlLmlubmVySFRNTCA9IFwiVG9kYXlcIjtcclxuXHRcdFJlbmRlcl9Ub2RvKEZpbHRlcmVkX1RvZGF5LmdldEZpbHRlcmVkQ29sbGVjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdC8vIHRoaXMgZnVuY3Rpb24gd2lsbCBiZSB1c2VkIHdoZW4gdGhlIHRvZG8gbGlzdCBpcyB1cGRhdGVkXHJcblx0Ly8gYW5kIHRoZSB2aWV3IHRvZG8gaGFzIHRvIGJlIHJlcmVuZGVyZWQuXHJcblx0ZnVuY3Rpb24gdXBkYXRlKCkge1xyXG5cdFx0Q2xlYXJfQ29udGVudCgpO1xyXG5cdFx0UmVuZGVyX1RvZG8oRmlsdGVyZWRfVG9kYXkuZ2V0RmlsdGVyZWRDb2xsZWN0aW9uKCkpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdHVwZGF0ZVxyXG5cdH1cclxufSkoKTsiLCJpbXBvcnQgeyBDdXJyZW50X0RhdGUgfSBmcm9tICcuLi9kYXRlL2N1cnJlbnRfZGF0ZS5qcyc7XHJcbi8vIHRoaXMgbW9kdWxlIHdpbGwgY2xlYXIgdGhlIHZhbHVlIG9mIGFsbCB0aGUgZm9ybSBpbnB1dFxyXG4vLyBpbiBjcmVhdGluZyB0aGUgdG9kbyBpdGVtXHJcblxyXG5jb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZHVlLWRhdGUnKTtcclxuY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1wcmlvcml0eScpO1xyXG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXRpdGxlJyk7XHJcbmNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVzY3JpcHRpb24nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDbGVhcl9Gb3JtID0gKGZ1bmN0aW9uKCkge1xyXG5cdGlucHV0RHVlRGF0ZS52YWx1ZSA9IEN1cnJlbnRfRGF0ZTtcclxuXHRpbnB1dFByaW9yaXR5LnZhbHVlID0gXCJoaWdoLXByaW9yaXR5XCI7XHJcblx0aW5wdXRUaXRsZS52YWx1ZSA9IFwiXCI7XHJcblx0aW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XHJcbn0pXHJcbiIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgY2hlY2sgaWYgdGhlIHVzZXIgY2xpY2tlZCBvdXRzaWRlIHRoZSBtb2RhbCBjb250YWluZXJcclxuLy8gaWYgdHJ1ZSwgY2xvc2UgdGhlIG1vZGFsXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2xvc2VNb2RhbChldmVudCwgbW9kYWxFbGVtZW50KSB7XHJcblx0aWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxFbGVtZW50KVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIHRvZ2dsZSB0aGUgY2xhc3Mgb2YgdGhlIG1vZGFsIGVsZW1lbnRcclxuLy8gaW4gb3JkZXIgdGhlIG1vZGFsIHRvIHNob3dcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuXHJcbmZ1bmN0aW9uIE1vZGFsKG1vZGFsQ2xhc3MpIHtcclxuXHRtb2RhbC5jbGFzc0xpc3QudG9nZ2xlKG1vZGFsQ2xhc3MpO1xyXG59XHJcblxyXG5leHBvcnQgeyBtb2RhbCwgTW9kYWwgfTsiLCJpbXBvcnQgeyBBZGRfVG9kbyB9IGZyb20gJy4uL2FkZF90b2RvL2FkZF90b2RvLmpzJztcclxuaW1wb3J0IHsgQ2xlYXJfRm9ybSB9IGZyb20gJy4vY2xlYXJfbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBtb2RhbCwgTW9kYWwgfSBmcm9tICcuL3Nob3dfbW9kYWwuanMnO1xyXG5pbXBvcnQgeyBDbG9zZU1vZGFsIH0gZnJvbSAnLi9jbG9zZV9tb2RhbC5qcyc7XHJcbmltcG9ydCB7IFNldF9DdXJyZW50X0RhdGUgfSBmcm9tICcuLi9kYXRlL3NldF9jdXJyZW50X2RhdGUuanMnO1xyXG4vLyBUaGlzIG1vZHVsZSB3aWxsIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgZm9yIHRoZSBidXR0b25zIGluIHRvcCBuYXZpZ2F0aW9uXHJcbi8vIGFkZCBidXR0b24gYW5kIHRoZSBpbmZvIGJ1dHRvblxyXG5cclxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kbycpO1xyXG5jb25zdCBidG5TaG93SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWluZm8nKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1pdGVtJyk7IC8vIGNoYW5nZSB0aGUgaW5uZXJIVE1MIHRvIGFkZC4gTWlnaHQgYmUgY2hhbmdlZCBiZWNhdXNlIG9mIHVwZGF0ZVxyXG5cclxuZXhwb3J0IGNvbnN0IFRvcF9OYXZpZ2F0aW9uID0gKGZ1bmN0aW9uKCkge1xyXG5cdC8vIGFkZCBldmVudCBsaXN0ZW5lciB0byB0aGUgYnV0dG9uc1xyXG5cdGJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TW9kYWwpO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHdpbmRvd3NPbkNsaWNrKTtcclxuXHQvLyBidG5TaG93SW5mby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgc2hvd0luZm9ybWF0aW9uKTtcclxuXHJcblx0ZnVuY3Rpb24gc2hvd01vZGFsKCkge1xyXG5cdFx0Q2xlYXJfRm9ybSgpOyAvLyBtYWtlIHN1cmUgdG8gcmVzZXQgZXZlcnl0aGluZ1xyXG5cdFx0YWRkQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkXCI7XHJcblx0XHRNb2RhbCgnc2hvdy1tb2RhbCcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gd2luZG93c09uQ2xpY2soZXZlbnQpIHtcclxuXHRcdGlmIChDbG9zZU1vZGFsKGV2ZW50LCBtb2RhbCkgPT0gdHJ1ZSlcclxuXHRcdFx0TW9kYWwoJ3Nob3ctbW9kYWwnKTsgLy8gdG9nZ2xlIGFnYWluIGluIG9yZGVyIHRvIGNsb3NlIGl0XHJcblx0fVxyXG59KSgpOyIsIi8vIHRoaXMgd2lsbCB2YWxpZGF0ZSB0aGUgcHJvamVjdCBhZGRlciBwb3AgdXBcclxuLy8gaXQgd2lsbCBjaGVjayBpZiB0aGUgaW5wdXQgaGFzIGFueSB2YWx1ZSBiZWZvcmUgYWRkaW5nIHRoZSBwcm9qZWN0XHJcblxyXG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtaW5wdXQtcHJvamVjdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gVmFsaWRhdGVfUHJvamVjdF9BZGRlcigpIHtcclxuXHRpZiAocHJvamVjdEZvcm0udmFsdWUgIT0gXCJcIikgXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIHZhbGlkYXRlIHRoZSB0b2RvIGZvcm1cclxuLy8gaXQgd2lsbCBjaGVjayBpZiBhbGwgdGhlIGlucHV0IGhhcyB2YWx1ZSBvciBlbHNlXHJcbi8vIHJldHVybiBmYWxzZSAoZG8gbm90IGFkZCB0b2RvKVxyXG5cclxuY29uc3QgdGl0bGVGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJ0b2RvXCJdW1widGl0bGVcIl07XHJcbmNvbnN0IGRlc2NGb3JtID0gZG9jdW1lbnQuZm9ybXNbXCJ0b2RvXCJdW1wiZGVzY3JpcHRpb25cIl07XHJcbmV4cG9ydCBmdW5jdGlvbiBWYWxpZGF0ZV9Ub2RvKCkge1xyXG5cdGlmKHRpdGxlRm9ybS52YWx1ZSAhPSBcIlwiICYmIGRlc2NGb3JtLnZhbHVlICE9IFwiXCIpIFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFRvcF9OYXZpZ2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL3RvcF9uYXZpZ2F0aW9uLmpzJztcclxuaW1wb3J0IHsgU2lkZV9OYXZpZ2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3NpZGUtbmF2aWdhdGlvbi9zaWRlX25hdmlnYXRpb24uanMnO1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9