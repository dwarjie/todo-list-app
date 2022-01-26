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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .add-personal {\n  max-width: 20px;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .mid-priority {\n  border: 0.15em solid #57ADEB;\n}\n.view-todo .project-list .list-item .low-priority {\n  border: 0.15em solid #8FDC2D;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}", "",{"version":3,"sources":["webpack://./src/partials/_global.scss","webpack://./src/style.scss","webpack://./src/partials/_mixin.scss","webpack://./src/partials/_top-navigation.scss","webpack://./src/partials/_variable.scss","webpack://./src/partials/_side-navigation.scss","webpack://./src/partials/_view-todo.scss","webpack://./src/partials/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tvertical-align: baseline;\t\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-size: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 3rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.125rem;\r\n\tfont-weight: 400;\t\r\n}\r\n\r\nh3 {\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.wrapper {\r\n\t@include twelveColumn();\r\n}\r\n\r\n.button {\r\n\tmax-width: 30px;\r\n\theight: auto;\r\n}\r\n\r\n.button-hover:hover {\r\n\ttransform: scale(1.1);\r\n\ttransition: 120ms transform ease-in-out;\r\n}\r\n\r\n.text-hover:hover {\r\n\tfont-weight: 600;\r\n}","* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .add-personal {\n  max-width: 20px;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .mid-priority {\n  border: 0.15em solid #57ADEB;\n}\n.view-todo .project-list .list-item .low-priority {\n  border: 0.15em solid #8FDC2D;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}","@mixin flexBox($direction: row, $justify: center, $align: center) {\r\n\tdisplay: flex;\r\n\tflex-direction: $direction;\r\n\tjustify-content: $justify;\r\n\talign-items: $align;\r\n}\r\n\r\n@mixin twelveColumn() {\r\n\tmax-width: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(12, [col-start] 1fr);\r\n\tgrid-template-rows: repeat(12, 1fr);\r\n};",".navigation-top {\r\n\t@include flexBox($justify: flex-end);\r\n\tbackground-color: $navigation-top;\r\n\tgrid-column: col-start / span 12;\r\n\tgrid-row: 1;\r\n\r\n\t.navigation-prop {\r\n\t\t@include flexBox;\r\n\t\tmargin-right: 5.625rem;\r\n\r\n\t\t.info {\r\n\t\t\tmargin-left: 4.063rem;\r\n\t\t}\r\n\t}\r\n}","$navigation-top: #F5F4F3;\r\n$navigation-side: #15181D;\r\n$side-text-color: #AFAFAF;\r\n$high-priority: #F95656;\r\n$mid-priority: #57ADEB;\r\n$low-priority: #8FDC2D;\r\n$modal-shade: rgba(21, 24, 29, .7);\r\n$modal-background: #FFFFFF;\r\n$modal-color: #7E7E7E;\r\n$modal-button: #57ADEB;",".navigation-side {\r\n\tcolor: $side-text-color;\r\n\tbackground-color: $navigation-side;\r\n\tgrid-column: col-start / span 2;\r\n\tgrid-row: 2 / 13;\r\n\toverflow: hidden;\r\n\r\n\t.container {\r\n\t\t@include flexBox($direction: column, $align: flex-start);\r\n\t\tgap: 1rem;\r\n\t\tmax-width: 70%;\r\n\t\tmargin: 3.75rem auto 0 auto;\r\n\r\n\t\th2, h3 {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.active {\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\r\n\t\t.container-project {\r\n\t\t\t@include flexBox($justify: flex-start, $align: flex-start);\r\n\t\t\tgap: 1rem;\r\n\t\t\tflex-wrap: wrap;\t\r\n\r\n\t\t\t.personal {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t\tgap: 1rem;\r\n\t\t\t\tflex-wrap: nowrap;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.container-personal {\r\n\r\n\t\t\t.new-personal {\r\n\t\t\t\tmargin-left: 20px;\r\n\t\t\t}\r\n\t\t\t.add-personal {\r\n\t\t\t\tmax-width: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}",".view-todo {\r\n\tgrid-column: col-start 4 / 12;\r\n\tgrid-row: 3 / 13;\r\n\r\n\t.project-list {\r\n\t\t@include flexBox($direction: column);\r\n\t\tmargin-top: 1.25rem;\r\n\r\n\t\t.list-item {\r\n\t\t\t@include flexBox($direction: row, $justify: space-between);\r\n\t\t\tmin-width: 100%;\r\n\t\t\tmargin-bottom: 1rem;\r\n\t\t\theight: 4rem;\r\n\t\t\tbackground-color: $navigation-top;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tpadding: 1.6rem;\r\n\r\n\t\t\t.todo-prop, .todo-title {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"] {\r\n\t\t\t\t/* Add if not using autoprefixer */\r\n\t\t\t\t-webkit-appearance: none;\r\n\t\t\t\tappearance: none;\r\n\t\t\t\t/* For iOS < 15 to remove gradient background */\r\n\t\t\t\tbackground-color: #fff;\r\n\t\t\t\t/* Not removed via appearance */\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tplace-content: center;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tmargin-right: 0.9em;\r\n\t\t\t\tfont: inherit;\r\n\t\t\t\twidth: 1.5em;\r\n\t\t\t\theight: 1.5em;\r\n\t\t\t\tborder-radius: 0.50em;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\twidth: 0.75em;\r\n\t\t\t\theight: 0.75em;\r\n\t\t\t\tborder-radius: 0.2em;\r\n\t\t\t\ttransform: scale(0);\r\n\t\t\t\ttransition: 120ms transform ease-in-out;\r\n\t\t\t\tbox-shadow: inset 1em 1em $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]:checked::before {\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t}\r\n\r\n\t\t\t.high-priority {\r\n\t\t\t\tborder: 0.15em solid $high-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.mid-priority {\r\n\t\t\t\tborder: 0.15em solid $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.low-priority {\r\n\t\t\t\tborder: 0.15em solid $low-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.todo-prop {\r\n\r\n\t\t\t\t.todo-edit {\r\n\t\t\t\t\tmargin: 0 1.25rem 0 1.8rem;\r\n\t\t\t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".modal {\r\n\t@include twelveColumn();\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tbackground-color: $modal-shade;\r\n\t// in order to hide the modal at first\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransform: scale(1.1);\r\n\ttransition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n\r\n\t.modal-container {\r\n\t\tgrid-column: col-start 3 / 11;\r\n\t\tgrid-row: 3 / 12;\r\n\t\tcolor: $modal-color;\r\n\t\tbackground-color: $modal-background;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 1.25rem 5.6rem;\r\n\r\n\t\t.modal-top {\r\n\t\t\t@include flexBox($justify: space-between);\r\n\t\t\tmargin-bottom: 1.25rem;\r\n\r\n\t\t\t.due-date,\r\n\t\t\t.priority {\r\n\t\t\t\tmargin-left: .2rem;\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tcolor: $modal-color;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tmargin-right: 1.875rem;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button {\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 0.3rem 0.8rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tbackground-color: $modal-button;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button:hover {\r\n\t\t\t\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.150);\r\n\t\t\t\ttransition: .3s all ease-in-out;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.modal-form form{\r\n\t\t\t@include flexBox($direction: column, $align: flex-start);\r\n\r\n\t\t\ttextarea {\r\n\t\t\t\tfont-family: 'Poppins', sans-serif;\r\n\t\t\t\tresize: none;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 300px;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem .5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\tinput {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tmargin-bottom: 1rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem 0.5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n// in order to show the modal with a simple animation\r\n.show-modal {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\ttransform: scale(1.0);\r\n\ttransition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _get_todo_details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_todo_details.js */ "./src/modules/add_todo/get_todo_details.js");
/* harmony import */ var _item_adder_adder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item_adder/adder.js */ "./src/modules/item_adder/adder.js");
/* harmony import */ var _inbox_inbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../inbox/inbox.js */ "./src/modules/inbox/inbox.js");



// this module is for accessing the modal form
// once the Add button is clicked, it will check for required field if one is empty, prompt that all field should be filled
// if all are filled, get all the data then call the factory function for creating a new todo 

const btnAddItem = document.querySelector('#add-item');
const Add_Todo = (function() {
	let collections = []; // here will go the todo_collection
	// add eventlistener to the button
	btnAddItem.addEventListener('click', addToDoItem);

	// this function will get the details from the modal form
	// return the details as an object then assign it to itemDetails
	// then call the Adder_Todo in order to add the object to the todoCollection
	function addToDoItem() {
		let itemDetails = (0,_get_todo_details_js__WEBPACK_IMPORTED_MODULE_0__.Get_Details)();
		collections = (0,_item_adder_adder_js__WEBPACK_IMPORTED_MODULE_1__.Adder_Todo)(itemDetails);
		_inbox_inbox_js__WEBPACK_IMPORTED_MODULE_2__.Inbox.render();
	}

	function getCollection() {
		return collections;
	}

	return {
		getCollection	
	};
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
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/modules/add_todo/todo.js");

// this module is for getting all the information from the modal

const inputDueDate = document.querySelector('#modal-due-date');
const inputPriority = document.querySelector('#modal-priority');
const inputTitle = document.querySelector('#modal-title');
const inputDescription = document.querySelector('#modal-description');

function Get_Details() {	
	// call the function factory for making a todo item
	// then give the input values as a parameter
	return (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.Todo)(inputTitle.value, inputDescription.value, inputDueDate.value, inputPriority.value);
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
const Todo = (title, desc, due, priority) => {
	let todoObject = {}; // empty object

	// set the parameters given to the todo object
	todoObject.title = title;
	todoObject.desc = desc;
	todoObject.due = due;
	todoObject.priority = priority;

	return todoObject; // return the object
};

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
	                <input type="image" class="button button-hover todo-edit" id="edit-todo" src="../src/img/edit.png">
	                <input type="image" class="button button-hover todo-delete" id="delete-todo" src="../src/img/delete.png">
	            </div>
        	</div>`;
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
/* harmony import */ var _add_todo_add_todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add_todo/add_todo.js */ "./src/modules/add_todo/add_todo.js");
/* harmony import */ var _renderer_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../renderer/render.js */ "./src/modules/renderer/render.js");


// will module will take care for the inbox tab
// it will show all the todo item/s

const projectTitle = document.querySelector('.project-title');
const btnInbox = document.querySelector('.container-inbox');

const Inbox = (function() {
	btnInbox.addEventListener('click', render);

	function render() {
		// change the project title
		projectTitle.innerHTML = "Inbox";
		console.log(_add_todo_add_todo_js__WEBPACK_IMPORTED_MODULE_0__.Add_Todo.getCollection());
		(0,_renderer_render_js__WEBPACK_IMPORTED_MODULE_1__.Render_Todo)(_add_todo_add_todo_js__WEBPACK_IMPORTED_MODULE_0__.Add_Todo.getCollection());
	}

	return {
		render
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
// this module has multiple purpose
// this can add a todo to the todoList
// or even add a new personal project

let todoCollections = []; // this will contain all the data of todo
function Adder_Todo(itemDetails) {
	todoCollections.push(itemDetails);

	return todoCollections; // return the whole collection
}

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

// this will let us render all the todo item collestions
// using the container

const todoList = document.querySelector('#todo-list');
function Render_Todo(todoCollection) {
	todoList.innerHTML = todoCollection.map((item) => {
		return (0,_container_todo_container_js__WEBPACK_IMPORTED_MODULE_0__.Todo_Container)(item);
	}).join(''); 
}

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
/* harmony import */ var _show_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show_modal.js */ "./src/modules/top_navigation/show_modal.js");
/* harmony import */ var _close_modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close_modal.js */ "./src/modules/top_navigation/close_modal.js");


// This module will handle the click event for the buttons in top navigation
// add button and the info button

const btnAddTodo = document.querySelector('#create-todo');
const btnShowInfo = document.querySelector('#show-info');

const Top_Navigation = (function() {
	// add event listener to the buttons
	btnAddTodo.addEventListener('click', showModal);
	window.addEventListener('click', windowsOnClick);
	// btnShowInfo.addEventListener('click' showInformation);

	function showModal() {
		(0,_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal)('show-modal');
	}

	function windowsOnClick(event) {
		if ((0,_close_modal_js__WEBPACK_IMPORTED_MODULE_1__.CloseModal)(event, _show_modal_js__WEBPACK_IMPORTED_MODULE_0__.modal) == true)
			(0,_show_modal_js__WEBPACK_IMPORTED_MODULE_0__.Modal)('show-modal'); // toggle again in order to close it
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
/* harmony import */ var _modules_top_navigation_top_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/top_navigation/top_navigation.js */ "./src/modules/top_navigation/top_navigation.js");
/* harmony import */ var _modules_inbox_inbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/inbox/inbox.js */ "./src/modules/inbox/inbox.js");
/* harmony import */ var _modules_add_todo_add_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/add_todo/add_todo.js */ "./src/modules/add_todo/add_todo.js");






// once the window is done loading.
// show the inbox tab defualt
window.onload = () => {
	_modules_inbox_inbox_js__WEBPACK_IMPORTED_MODULE_2__.Inbox.render();
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sNlhBQTZYLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFlBQVksVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLGFBQWEsWUFBWSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsWUFBWSxjQUFjLGVBQWUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdB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QixHQUFHLHFEQUFLLGdCQUFnQjtBQUN4QjtBQUNBLENBQUM7Ozs7OztVQ3RCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNCO0FBQ3NEO0FBQzNCO0FBQ1M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsaUVBQVk7QUFDYixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9hZGRfdG9kby9hZGRfdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvYWRkX3RvZG8vZ2V0X3RvZG9fZGV0YWlscy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvYWRkX3RvZG8vdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvY29udGFpbmVyL3RvZG9fY29udGFpbmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy9pbmJveC9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaXRlbV9hZGRlci9hZGRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvcmVuZGVyZXIvcmVuZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvbW9kdWxlcy90b3BfbmF2aWdhdGlvbi9jbG9zZV9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9wX25hdmlnYXRpb24vc2hvd19tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9wX25hdmlnYXRpb24vdG9wX25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIG1heC13aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmJ1dHRvbi1ob3Zlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50ZXh0LWhvdmVyOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXZpZ2F0aW9uLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQvc3BhbiAxMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNS42MjVyZW07XFxufVxcbi5uYXZpZ2F0aW9uLXRvcCAubmF2aWdhdGlvbi1wcm9wIC5pbmZvIHtcXG4gIG1hcmdpbi1sZWZ0OiA0LjA2M3JlbTtcXG59XFxuXFxuLm5hdmlnYXRpb24tc2lkZSB7XFxuICBjb2xvcjogI0FGQUZBRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE4MUQ7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMjtcXG4gIGdyaWQtcm93OiAyLzEzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAzLjc1cmVtIGF1dG8gMCBhdXRvO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDIsIC5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciBoMyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdCAucGVyc29uYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLm5ldy1wZXJzb25hbCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLmFkZC1wZXJzb25hbCB7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxufVxcblxcbi52aWV3LXRvZG8ge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA0LzEyO1xcbiAgZ3JpZC1yb3c6IDMvMTM7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tcHJvcCwgLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuOWVtO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjc1ZW07XFxuICBoZWlnaHQ6IDAuNzVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICNGOTU2NTY7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5taWQtcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLmxvdy1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjOEZEQzJEO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAudG9kby1wcm9wIC50b2RvLWVkaXQge1xcbiAgbWFyZ2luOiAwIDEuMjVyZW0gMCAxLjhyZW07XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyNCwgMjksIDAuNyk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCAzLzExO1xcbiAgZ3JpZC1yb3c6IDMvMTI7XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuZHVlLWRhdGUsXFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAucHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3QURFQjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fbWl4aW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL190b3AtbmF2aWdhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX3ZhcmlhYmxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fc2lkZS1uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fdmlldy10b2RvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fbW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGtDQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFRW5CQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQ0FBQTtBRHFCRDs7QURGQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FDS0Q7O0FERkE7RUFDQyxxQkFBQTtFQUNBLHVDQUFBO0FDS0Q7O0FERkE7RUFDQyxnQkFBQTtBQ0tEOztBRS9DQTtFREND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MUxFO0VMcERELGFBQUE7RUFDQSxzQktvRCtCO0VMbkQvQix1QkFIeUM7RUFJekMsdUJLa0QrQztBTitMaEQ7QU03TEc7RUFDQyxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkgvRGE7RUdnRWIseUJBQUE7RUFDQSxrQkFBQTtBTitMSjtBTTVMRztFQUNDLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5Qkh6RWE7RUcwRWIsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QU44TEo7O0FNeExBO0VBQ0MsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRUFBQTtBTjJMRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFx0XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG5cXHRmb250LXNpemU6IDNyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHRcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcblxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcblxcdEBpbmNsdWRlIHR3ZWx2ZUNvbHVtbigpO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDMwcHg7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9uLWhvdmVyOmhvdmVyIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuXFx0dHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1ob3Zlcjpob3ZlciB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XCIsXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGV4dC1ob3Zlcjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMTI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuLm5hdmlnYXRpb24tdG9wIC5uYXZpZ2F0aW9uLXByb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDUuNjI1cmVtO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCAuaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogNC4wNjNyZW07XFxufVxcblxcbi5uYXZpZ2F0aW9uLXNpZGUge1xcbiAgY29sb3I6ICNBRkFGQUY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxODFEO1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydC9zcGFuIDI7XFxuICBncmlkLXJvdzogMi8xMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMy43NXJlbSBhdXRvIDAgYXV0bztcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIGgyLCAubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3QgLnBlcnNvbmFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5uZXctcGVyc29uYWwge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5hZGQtcGVyc29uYWwge1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4udmlldy10b2RvIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNC8xMjtcXG4gIGdyaWQtcm93OiAzLzEzO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXByb3AsIC52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC8qIE5vdCByZW1vdmVkIHZpYSBhcHBlYXJhbmNlICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjllbTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB3aWR0aDogMS41ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC43NWVtO1xcbiAgaGVpZ2h0OiAwLjc1ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICM1N0FERUI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAuaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjRjk1NjU2O1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAubWlkLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICM1N0FERUI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5sb3ctcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgIzhGREMyRDtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tcHJvcCAudG9kby1lZGl0IHtcXG4gIG1hcmdpbjogMCAxLjI1cmVtIDAgMS44cmVtO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMjQsIDI5LCAwLjcpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgMy8xMTtcXG4gIGdyaWQtcm93OiAzLzEyO1xcbiAgY29sb3I6ICM3RTdFN0U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuMjVyZW0gNS42cmVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmR1ZS1kYXRlLFxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLnByaW9yaXR5IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjJyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogMS44NzVyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmFkZC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1N0FERUI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3AgLmFkZC1idXR0b246aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIHRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICByZXNpemU6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQUZBRkFGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5zaG93LW1vZGFsIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDBzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxufVwiLFwiQG1peGluIGZsZXhCb3goJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlcikge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXHJcXG5cXHRhbGlnbi1pdGVtczogJGFsaWduO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdHdlbHZlQ29sdW1uKCkge1xcclxcblxcdG1heC13aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcclxcbn07XCIsXCIubmF2aWdhdGlvbi10b3Age1xcclxcblxcdEBpbmNsdWRlIGZsZXhCb3goJGp1c3RpZnk6IGZsZXgtZW5kKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbmF2aWdhdGlvbi10b3A7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IGNvbC1zdGFydCAvIHNwYW4gMTI7XFxyXFxuXFx0Z3JpZC1yb3c6IDE7XFxyXFxuXFxyXFxuXFx0Lm5hdmlnYXRpb24tcHJvcCB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgZmxleEJveDtcXHJcXG5cXHRcXHRtYXJnaW4tcmlnaHQ6IDUuNjI1cmVtO1xcclxcblxcclxcblxcdFxcdC5pbmZvIHtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogNC4wNjNyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCIsXCIkbmF2aWdhdGlvbi10b3A6ICNGNUY0RjM7XFxyXFxuJG5hdmlnYXRpb24tc2lkZTogIzE1MTgxRDtcXHJcXG4kc2lkZS10ZXh0LWNvbG9yOiAjQUZBRkFGO1xcclxcbiRoaWdoLXByaW9yaXR5OiAjRjk1NjU2O1xcclxcbiRtaWQtcHJpb3JpdHk6ICM1N0FERUI7XFxyXFxuJGxvdy1wcmlvcml0eTogIzhGREMyRDtcXHJcXG4kbW9kYWwtc2hhZGU6IHJnYmEoMjEsIDI0LCAyOSwgLjcpO1xcclxcbiRtb2RhbC1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xcclxcbiRtb2RhbC1jb2xvcjogIzdFN0U3RTtcXHJcXG4kbW9kYWwtYnV0dG9uOiAjNTdBREVCO1wiLFwiLm5hdmlnYXRpb24tc2lkZSB7XFxyXFxuXFx0Y29sb3I6ICRzaWRlLXRleHQtY29sb3I7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tc2lkZTtcXHJcXG5cXHRncmlkLWNvbHVtbjogY29sLXN0YXJ0IC8gc3BhbiAyO1xcclxcblxcdGdyaWQtcm93OiAyIC8gMTM7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG5cXHQuY29udGFpbmVyIHtcXHJcXG5cXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCRkaXJlY3Rpb246IGNvbHVtbiwgJGFsaWduOiBmbGV4LXN0YXJ0KTtcXHJcXG5cXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0bWF4LXdpZHRoOiA3MCU7XFxyXFxuXFx0XFx0bWFyZ2luOiAzLjc1cmVtIGF1dG8gMCBhdXRvO1xcclxcblxcclxcblxcdFxcdGgyLCBoMyB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuYWN0aXZlIHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNjAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuY29udGFpbmVyLXByb2plY3Qge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGp1c3RpZnk6IGZsZXgtc3RhcnQsICRhbGlnbjogZmxleC1zdGFydCk7XFxyXFxuXFx0XFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXHRcXHJcXG5cXHJcXG5cXHRcXHRcXHQucGVyc29uYWwge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goKTtcXHJcXG5cXHRcXHRcXHRcXHRnYXA6IDFyZW07XFxyXFxuXFx0XFx0XFx0XFx0ZmxleC13cmFwOiBub3dyYXA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuY29udGFpbmVyLXBlcnNvbmFsIHtcXHJcXG5cXHJcXG5cXHRcXHRcXHQubmV3LXBlcnNvbmFsIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogMjBweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0LmFkZC1wZXJzb25hbCB7XFxyXFxuXFx0XFx0XFx0XFx0bWF4LXdpZHRoOiAyMHB4O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cIixcIi52aWV3LXRvZG8ge1xcclxcblxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNCAvIDEyO1xcclxcblxcdGdyaWQtcm93OiAzIC8gMTM7XFxyXFxuXFxyXFxuXFx0LnByb2plY3QtbGlzdCB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xcclxcblxcdFxcdG1hcmdpbi10b3A6IDEuMjVyZW07XFxyXFxuXFxyXFxuXFx0XFx0Lmxpc3QtaXRlbSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiByb3csICRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcXHJcXG5cXHRcXHRcXHRtaW4td2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDRyZW07XFxyXFxuXFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogMS42cmVtO1xcclxcblxcclxcblxcdFxcdFxcdC50b2RvLXByb3AsIC50b2RvLXRpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcblxcdFxcdFxcdFxcdC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxyXFxuXFx0XFx0XFx0XFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcblxcdFxcdFxcdFxcdGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0LyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG5cXHRcXHRcXHRcXHQvKiBOb3QgcmVtb3ZlZCB2aWEgYXBwZWFyYW5jZSAqL1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAwLjllbTtcXHJcXG5cXHRcXHRcXHRcXHRmb250OiBpbmhlcml0O1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxLjVlbTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDEuNWVtO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDAuNTBlbTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMC43NWVtO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMC43NWVtO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gJG1pZC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5oaWdoLXByaW9yaXR5IHtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDAuMTVlbSBzb2xpZCAkaGlnaC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lm1pZC1wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAwLjE1ZW0gc29saWQgJG1pZC1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lmxvdy1wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAwLjE1ZW0gc29saWQgJGxvdy1wcmlvcml0eTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnRvZG8tcHJvcCB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LnRvZG8tZWRpdCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAwIDEuMjVyZW0gMCAxLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0fVxcdFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi5tb2RhbCB7XFxyXFxuXFx0QGluY2x1ZGUgdHdlbHZlQ29sdW1uKCk7XFxyXFxuXFx0cG9zaXRpb246IGZpeGVkO1xcclxcblxcdHotaW5kZXg6IDE7XFxyXFxuXFx0bGVmdDogMDtcXHJcXG5cXHR0b3A6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0b3ZlcmZsb3c6IGF1dG87XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJG1vZGFsLXNoYWRlO1xcclxcblxcdC8vIGluIG9yZGVyIHRvIGhpZGUgdGhlIG1vZGFsIGF0IGZpcnN0XFxyXFxuXFx0b3BhY2l0eTogMDtcXHJcXG5cXHR2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcblxcdHRyYW5zaXRpb246IHZpc2liaWxpdHkgMHMgbGluZWFyIDAuMjVzLCBvcGFjaXR5IDAuMjVzIDBzLCB0cmFuc2Zvcm0gMC4yNXM7XFxyXFxuXFxyXFxuXFx0Lm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuXFx0XFx0Z3JpZC1jb2x1bW46IGNvbC1zdGFydCAzIC8gMTE7XFxyXFxuXFx0XFx0Z3JpZC1yb3c6IDMgLyAxMjtcXHJcXG5cXHRcXHRjb2xvcjogJG1vZGFsLWNvbG9yO1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1iYWNrZ3JvdW5kO1xcclxcblxcdFxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuXFx0XFx0cGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxyXFxuXFxyXFxuXFx0XFx0Lm1vZGFsLXRvcCB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkanVzdGlmeTogc3BhY2UtYmV0d2Vlbik7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQuZHVlLWRhdGUsXFxyXFxuXFx0XFx0XFx0LnByaW9yaXR5IHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogLjJyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAkbW9kYWwtY29sb3I7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMS44NzVyZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5hZGQtYnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0Y29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMTI1cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1idXR0b247XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiBub25lO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmFkZC1idXR0b246aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1MCk7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogLjNzIGFsbCBlYXNlLWluLW91dDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5tb2RhbC1mb3JtIGZvcm17XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4sICRhbGlnbjogZmxleC1zdGFydCk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0dGV4dGFyZWEge1xcclxcblxcdFxcdFxcdFxcdGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFx0XFx0XFx0XFx0cmVzaXplOiBub25lO1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMzAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjhyZW0gLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogMnB4IHNvbGlkICRzaWRlLXRleHQtY29sb3I7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRpbnB1dCB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMTI1cmVtO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8gaW4gb3JkZXIgdG8gc2hvdyB0aGUgbW9kYWwgd2l0aCBhIHNpbXBsZSBhbmltYXRpb25cXHJcXG4uc2hvdy1tb2RhbCB7XFxyXFxuXFx0b3BhY2l0eTogMTtcXHJcXG5cXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHZXRfRGV0YWlscyB9IGZyb20gXCIuL2dldF90b2RvX2RldGFpbHMuanNcIjtcclxuaW1wb3J0IHsgQWRkZXJfVG9kbyB9IGZyb20gXCIuLi9pdGVtX2FkZGVyL2FkZGVyLmpzXCI7XHJcbmltcG9ydCB7IEluYm94IH0gZnJvbSBcIi4uL2luYm94L2luYm94LmpzXCI7XHJcbi8vIHRoaXMgbW9kdWxlIGlzIGZvciBhY2Nlc3NpbmcgdGhlIG1vZGFsIGZvcm1cclxuLy8gb25jZSB0aGUgQWRkIGJ1dHRvbiBpcyBjbGlja2VkLCBpdCB3aWxsIGNoZWNrIGZvciByZXF1aXJlZCBmaWVsZCBpZiBvbmUgaXMgZW1wdHksIHByb21wdCB0aGF0IGFsbCBmaWVsZCBzaG91bGQgYmUgZmlsbGVkXHJcbi8vIGlmIGFsbCBhcmUgZmlsbGVkLCBnZXQgYWxsIHRoZSBkYXRhIHRoZW4gY2FsbCB0aGUgZmFjdG9yeSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSBuZXcgdG9kbyBcclxuXHJcbmNvbnN0IGJ0bkFkZEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLWl0ZW0nKTtcclxuZXhwb3J0IGNvbnN0IEFkZF9Ub2RvID0gKGZ1bmN0aW9uKCkge1xyXG5cdGxldCBjb2xsZWN0aW9ucyA9IFtdOyAvLyBoZXJlIHdpbGwgZ28gdGhlIHRvZG9fY29sbGVjdGlvblxyXG5cdC8vIGFkZCBldmVudGxpc3RlbmVyIHRvIHRoZSBidXR0b25cclxuXHRidG5BZGRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkVG9Eb0l0ZW0pO1xyXG5cclxuXHQvLyB0aGlzIGZ1bmN0aW9uIHdpbGwgZ2V0IHRoZSBkZXRhaWxzIGZyb20gdGhlIG1vZGFsIGZvcm1cclxuXHQvLyByZXR1cm4gdGhlIGRldGFpbHMgYXMgYW4gb2JqZWN0IHRoZW4gYXNzaWduIGl0IHRvIGl0ZW1EZXRhaWxzXHJcblx0Ly8gdGhlbiBjYWxsIHRoZSBBZGRlcl9Ub2RvIGluIG9yZGVyIHRvIGFkZCB0aGUgb2JqZWN0IHRvIHRoZSB0b2RvQ29sbGVjdGlvblxyXG5cdGZ1bmN0aW9uIGFkZFRvRG9JdGVtKCkge1xyXG5cdFx0bGV0IGl0ZW1EZXRhaWxzID0gR2V0X0RldGFpbHMoKTtcclxuXHRcdGNvbGxlY3Rpb25zID0gQWRkZXJfVG9kbyhpdGVtRGV0YWlscyk7XHJcblx0XHRJbmJveC5yZW5kZXIoKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGdldENvbGxlY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gY29sbGVjdGlvbnM7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0Q29sbGVjdGlvblx0XHJcblx0fTtcclxufSkoKTtcclxuXHJcbiIsImltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8uanMnO1xyXG4vLyB0aGlzIG1vZHVsZSBpcyBmb3IgZ2V0dGluZyBhbGwgdGhlIGluZm9ybWF0aW9uIGZyb20gdGhlIG1vZGFsXHJcblxyXG5jb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZHVlLWRhdGUnKTtcclxuY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1wcmlvcml0eScpO1xyXG5jb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXRpdGxlJyk7XHJcbmNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVzY3JpcHRpb24nKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRfRGV0YWlscygpIHtcdFxyXG5cdC8vIGNhbGwgdGhlIGZ1bmN0aW9uIGZhY3RvcnkgZm9yIG1ha2luZyBhIHRvZG8gaXRlbVxyXG5cdC8vIHRoZW4gZ2l2ZSB0aGUgaW5wdXQgdmFsdWVzIGFzIGEgcGFyYW1ldGVyXHJcblx0cmV0dXJuIFRvZG8oaW5wdXRUaXRsZS52YWx1ZSwgaW5wdXREZXNjcmlwdGlvbi52YWx1ZSwgaW5wdXREdWVEYXRlLnZhbHVlLCBpbnB1dFByaW9yaXR5LnZhbHVlKTtcclxufTsiLCIvLyB0aGlzIGlzIGEgZnVuY3Rpb24gZmFjdG9yeSBmb3IgY3JlYXRpbmcgYSBuZXcgdG9kbyBpdGVtXHJcbmV4cG9ydCBjb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5KSA9PiB7XHJcblx0bGV0IHRvZG9PYmplY3QgPSB7fTsgLy8gZW1wdHkgb2JqZWN0XHJcblxyXG5cdC8vIHNldCB0aGUgcGFyYW1ldGVycyBnaXZlbiB0byB0aGUgdG9kbyBvYmplY3RcclxuXHR0b2RvT2JqZWN0LnRpdGxlID0gdGl0bGU7XHJcblx0dG9kb09iamVjdC5kZXNjID0gZGVzYztcclxuXHR0b2RvT2JqZWN0LmR1ZSA9IGR1ZTtcclxuXHR0b2RvT2JqZWN0LnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcblxyXG5cdHJldHVybiB0b2RvT2JqZWN0OyAvLyByZXR1cm4gdGhlIG9iamVjdFxyXG59OyIsIi8vIHRoaXMgY29udGFpbmVyIHdpbGwgY29udGFpbiB0aGUgdG9kbyBpdGVtIGNvbnRhaW5lclxyXG4vLyBoZXJlLCBpdCB3aWxsIHJldHVybiBhIGh0bWwgcmVwcmVzZW50IG9mIHRoZSB0b2RvIGl0ZW1cclxuLy8gaW4gb3JkZXIgdG8gYXBwZW5kIGl0IHRvIHRoZSBET01cclxuXHJcbi8vIHRoaXMgd2lsbCBwcm92aWRlIHRoZSBjb250YWluZXIgZm9yIGNyZWF0aW5nIHRvZG8gaXRlbVxyXG5leHBvcnQgZnVuY3Rpb24gVG9kb19Db250YWluZXIoaXRlbURldGFpbHMpIHtcclxuXHQvLyBnZW5lcmF0ZSBhIHRvZG8gbGlzdCBjb250YWluZXJcclxuXHQvLyB3aXRoIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaXRlbURldGFpbHNcclxuXHRyZXR1cm4gYDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuXHQgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9kby10aXRsZVwiPlxyXG5cdCAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCIke2l0ZW1EZXRhaWxzLnByaW9yaXR5fVwiPlxyXG5cdCAgICAgICAgICAgICAgICA8aDI+JHtpdGVtRGV0YWlscy50aXRsZX08L2gyPlxyXG5cdCAgICAgICAgICAgIDwvZGl2PlxyXG5cdCAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b2RvLXByb3BcIj5cclxuXHQgICAgICAgICAgICAgICAgPGgzPiR7aXRlbURldGFpbHMuZHVlfTwvaDM+XHJcblx0ICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaW1hZ2VcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24taG92ZXIgdG9kby1lZGl0XCIgaWQ9XCJlZGl0LXRvZG9cIiBzcmM9XCIuLi9zcmMvaW1nL2VkaXQucG5nXCI+XHJcblx0ICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaW1hZ2VcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24taG92ZXIgdG9kby1kZWxldGVcIiBpZD1cImRlbGV0ZS10b2RvXCIgc3JjPVwiLi4vc3JjL2ltZy9kZWxldGUucG5nXCI+XHJcblx0ICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHQ8L2Rpdj5gO1xyXG59IiwiaW1wb3J0IHsgQWRkX1RvZG8gfSBmcm9tICcuLi9hZGRfdG9kby9hZGRfdG9kby5qcyc7XHJcbmltcG9ydCB7IFJlbmRlcl9Ub2RvIH0gZnJvbSBcIi4uL3JlbmRlcmVyL3JlbmRlci5qc1wiO1xyXG4vLyB3aWxsIG1vZHVsZSB3aWxsIHRha2UgY2FyZSBmb3IgdGhlIGluYm94IHRhYlxyXG4vLyBpdCB3aWxsIHNob3cgYWxsIHRoZSB0b2RvIGl0ZW0vc1xyXG5cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKTtcclxuY29uc3QgYnRuSW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyLWluYm94Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgSW5ib3ggPSAoZnVuY3Rpb24oKSB7XHJcblx0YnRuSW5ib3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXIpO1xyXG5cclxuXHRmdW5jdGlvbiByZW5kZXIoKSB7XHJcblx0XHQvLyBjaGFuZ2UgdGhlIHByb2plY3QgdGl0bGVcclxuXHRcdHByb2plY3RUaXRsZS5pbm5lckhUTUwgPSBcIkluYm94XCI7XHJcblx0XHRjb25zb2xlLmxvZyhBZGRfVG9kby5nZXRDb2xsZWN0aW9uKCkpO1xyXG5cdFx0UmVuZGVyX1RvZG8oQWRkX1RvZG8uZ2V0Q29sbGVjdGlvbigpKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRyZW5kZXJcclxuXHR9XHJcbn0pKCk7XHJcbiIsIi8vIHRoaXMgbW9kdWxlIGhhcyBtdWx0aXBsZSBwdXJwb3NlXHJcbi8vIHRoaXMgY2FuIGFkZCBhIHRvZG8gdG8gdGhlIHRvZG9MaXN0XHJcbi8vIG9yIGV2ZW4gYWRkIGEgbmV3IHBlcnNvbmFsIHByb2plY3RcclxuXHJcbmxldCB0b2RvQ29sbGVjdGlvbnMgPSBbXTsgLy8gdGhpcyB3aWxsIGNvbnRhaW4gYWxsIHRoZSBkYXRhIG9mIHRvZG9cclxuZXhwb3J0IGZ1bmN0aW9uIEFkZGVyX1RvZG8oaXRlbURldGFpbHMpIHtcclxuXHR0b2RvQ29sbGVjdGlvbnMucHVzaChpdGVtRGV0YWlscyk7XHJcblxyXG5cdHJldHVybiB0b2RvQ29sbGVjdGlvbnM7IC8vIHJldHVybiB0aGUgd2hvbGUgY29sbGVjdGlvblxyXG59IiwiaW1wb3J0IHsgVG9kb19Db250YWluZXIgfSBmcm9tIFwiLi4vY29udGFpbmVyL3RvZG9fY29udGFpbmVyLmpzXCI7XHJcbi8vIHRoaXMgd2lsbCBsZXQgdXMgcmVuZGVyIGFsbCB0aGUgdG9kbyBpdGVtIGNvbGxlc3Rpb25zXHJcbi8vIHVzaW5nIHRoZSBjb250YWluZXJcclxuXHJcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8tbGlzdCcpO1xyXG5leHBvcnQgZnVuY3Rpb24gUmVuZGVyX1RvZG8odG9kb0NvbGxlY3Rpb24pIHtcclxuXHR0b2RvTGlzdC5pbm5lckhUTUwgPSB0b2RvQ29sbGVjdGlvbi5tYXAoKGl0ZW0pID0+IHtcclxuXHRcdHJldHVybiBUb2RvX0NvbnRhaW5lcihpdGVtKTtcclxuXHR9KS5qb2luKCcnKTsgXHJcbn0iLCIvLyB0aGlzIG1vZHVsZSB3aWxsIGNoZWNrIGlmIHRoZSB1c2VyIGNsaWNrZWQgb3V0c2lkZSB0aGUgbW9kYWwgY29udGFpbmVyXHJcbi8vIGlmIHRydWUsIGNsb3NlIHRoZSBtb2RhbFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENsb3NlTW9kYWwoZXZlbnQsIG1vZGFsRWxlbWVudCkge1xyXG5cdGlmIChldmVudC50YXJnZXQgPT09IG1vZGFsRWxlbWVudClcclxuXHRcdHJldHVybiB0cnVlO1xyXG59IiwiLy8gdGhpcyBtb2R1bGUgd2lsbCB0b2dnbGUgdGhlIGNsYXNzIG9mIHRoZSBtb2RhbCBlbGVtZW50XHJcbi8vIGluIG9yZGVyIHRoZSBtb2RhbCB0byBzaG93XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcblxyXG5mdW5jdGlvbiBNb2RhbChtb2RhbENsYXNzKSB7XHJcblx0bW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShtb2RhbENsYXNzKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbW9kYWwsIE1vZGFsIH07IiwiaW1wb3J0IHsgbW9kYWwsIE1vZGFsIH0gZnJvbSAnLi9zaG93X21vZGFsLmpzJztcclxuaW1wb3J0IHsgQ2xvc2VNb2RhbCB9IGZyb20gJy4vY2xvc2VfbW9kYWwuanMnO1xyXG4vLyBUaGlzIG1vZHVsZSB3aWxsIGhhbmRsZSB0aGUgY2xpY2sgZXZlbnQgZm9yIHRoZSBidXR0b25zIGluIHRvcCBuYXZpZ2F0aW9uXHJcbi8vIGFkZCBidXR0b24gYW5kIHRoZSBpbmZvIGJ1dHRvblxyXG5cclxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjcmVhdGUtdG9kbycpO1xyXG5jb25zdCBidG5TaG93SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaG93LWluZm8nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBUb3BfTmF2aWdhdGlvbiA9IChmdW5jdGlvbigpIHtcclxuXHQvLyBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGJ1dHRvbnNcclxuXHRidG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01vZGFsKTtcclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB3aW5kb3dzT25DbGljayk7XHJcblx0Ly8gYnRuU2hvd0luZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snIHNob3dJbmZvcm1hdGlvbik7XHJcblxyXG5cdGZ1bmN0aW9uIHNob3dNb2RhbCgpIHtcclxuXHRcdE1vZGFsKCdzaG93LW1vZGFsJyk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB3aW5kb3dzT25DbGljayhldmVudCkge1xyXG5cdFx0aWYgKENsb3NlTW9kYWwoZXZlbnQsIG1vZGFsKSA9PSB0cnVlKVxyXG5cdFx0XHRNb2RhbCgnc2hvdy1tb2RhbCcpOyAvLyB0b2dnbGUgYWdhaW4gaW4gb3JkZXIgdG8gY2xvc2UgaXRcclxuXHR9XHJcbn0pKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHsgVG9wX05hdmlnYXRpb24gfSBmcm9tICcuL21vZHVsZXMvdG9wX25hdmlnYXRpb24vdG9wX25hdmlnYXRpb24uanMnO1xyXG5pbXBvcnQgeyBJbmJveCB9IGZyb20gJy4vbW9kdWxlcy9pbmJveC9pbmJveC5qcyc7XHJcbmltcG9ydCB7IEFkZF9Ub2RvIH0gZnJvbSAnLi9tb2R1bGVzL2FkZF90b2RvL2FkZF90b2RvLmpzJztcclxuXHJcblxyXG4vLyBvbmNlIHRoZSB3aW5kb3cgaXMgZG9uZSBsb2FkaW5nLlxyXG4vLyBzaG93IHRoZSBpbmJveCB0YWIgZGVmdWFsdFxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdEluYm94LnJlbmRlcigpO1xyXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==