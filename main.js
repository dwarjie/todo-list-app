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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .add-personal {\n  max-width: 20px;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}", "",{"version":3,"sources":["webpack://./src/partials/_global.scss","webpack://./src/style.scss","webpack://./src/partials/_mixin.scss","webpack://./src/partials/_top-navigation.scss","webpack://./src/partials/_variable.scss","webpack://./src/partials/_side-navigation.scss","webpack://./src/partials/_view-todo.scss","webpack://./src/partials/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tvertical-align: baseline;\t\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nbody {\r\n\tfont-size: 100%;\r\n\tfont-family: 'Poppins', sans-serif;\r\n}\r\n\r\nh1 {\r\n\tfont-size: 3rem;\r\n\tfont-weight: 700;\r\n}\r\n\r\nh2 {\r\n\tfont-size: 1.125rem;\r\n\tfont-weight: 400;\t\r\n}\r\n\r\nh3 {\r\n\tfont-size: 0.875rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.wrapper {\r\n\t@include twelveColumn();\r\n}\r\n\r\n.button {\r\n\tmax-width: 30px;\r\n\theight: auto;\r\n}\r\n\r\n.button-hover:hover {\r\n\ttransform: scale(1.1);\r\n\ttransition: 120ms transform ease-in-out;\r\n}\r\n\r\n.text-hover:hover {\r\n\tfont-weight: 600;\r\n}","* {\n  padding: 0;\n  margin: 0;\n  vertical-align: baseline;\n  box-sizing: border-box;\n}\n\nbody {\n  font-size: 100%;\n  font-family: \"Poppins\", sans-serif;\n}\n\nh1 {\n  font-size: 3rem;\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\nh3 {\n  font-size: 0.875rem;\n  font-weight: 400;\n}\n\n.wrapper {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n}\n\n.button {\n  max-width: 30px;\n  height: auto;\n}\n\n.button-hover:hover {\n  transform: scale(1.1);\n  transition: 120ms transform ease-in-out;\n}\n\n.text-hover:hover {\n  font-weight: 600;\n}\n\n.navigation-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  background-color: #F5F4F3;\n  grid-column: col-start/span 12;\n  grid-row: 1;\n}\n.navigation-top .navigation-prop {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-right: 5.625rem;\n}\n.navigation-top .navigation-prop .info {\n  margin-left: 4.063rem;\n}\n\n.navigation-side {\n  color: #AFAFAF;\n  background-color: #15181D;\n  grid-column: col-start/span 2;\n  grid-row: 2/13;\n  overflow: hidden;\n}\n.navigation-side .container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 1rem;\n  max-width: 70%;\n  margin: 3.75rem auto 0 auto;\n}\n.navigation-side .container h2, .navigation-side .container h3 {\n  cursor: pointer;\n}\n.navigation-side .container .active {\n  font-weight: 600;\n}\n.navigation-side .container .container-project {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.navigation-side .container .container-project .personal {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: nowrap;\n}\n.navigation-side .container .container-personal .new-personal {\n  margin-left: 20px;\n}\n.navigation-side .container .container-personal .add-personal {\n  max-width: 20px;\n}\n\n.view-todo {\n  grid-column: col-start 4/12;\n  grid-row: 3/13;\n}\n.view-todo .project-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1.25rem;\n}\n.view-todo .project-list .list-item {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 100%;\n  margin-bottom: 1rem;\n  height: 4rem;\n  background-color: #F5F4F3;\n  border-radius: 10px;\n  padding: 1.6rem;\n}\n.view-todo .project-list .list-item .todo-prop, .view-todo .project-list .list-item .todo-title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.view-todo .project-list .list-item input[type=checkbox] {\n  /* Add if not using autoprefixer */\n  -webkit-appearance: none;\n  appearance: none;\n  /* For iOS < 15 to remove gradient background */\n  background-color: #fff;\n  /* Not removed via appearance */\n  display: grid;\n  cursor: pointer;\n  place-content: center;\n  margin: 0;\n  margin-right: 0.9em;\n  font: inherit;\n  width: 1.5em;\n  height: 1.5em;\n  border-radius: 0.5em;\n}\n.view-todo .project-list .list-item input[type=checkbox]::before {\n  content: \"\";\n  width: 0.75em;\n  height: 0.75em;\n  border-radius: 0.2em;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em #57ADEB;\n}\n.view-todo .project-list .list-item input[type=checkbox]:checked::before {\n  transform: scale(1);\n}\n.view-todo .project-list .list-item .high-priority {\n  border: 0.15em solid #F95656;\n}\n.view-todo .project-list .list-item .todo-prop .todo-edit {\n  margin: 0 1.25rem 0 1.8rem;\n}\n\n.modal {\n  max-width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(12, [col-start] 1fr);\n  grid-template-rows: repeat(12, 1fr);\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background-color: rgba(21, 24, 29, 0.7);\n  opacity: 0;\n  visibility: hidden;\n  transform: scale(1.1);\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\n}\n.modal .modal-container {\n  grid-column: col-start 3/11;\n  grid-row: 3/12;\n  color: #7E7E7E;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n  padding: 1.25rem 5.6rem;\n}\n.modal .modal-container .modal-top {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.25rem;\n}\n.modal .modal-container .modal-top .due-date,\n.modal .modal-container .modal-top .priority {\n  margin-left: 0.2rem;\n  font-size: 1rem;\n  color: #7E7E7E;\n  border: none;\n  margin-right: 1.875rem;\n}\n.modal .modal-container .modal-top .add-button {\n  cursor: pointer;\n  color: #fff;\n  padding: 0.3rem 0.8rem;\n  font-size: 1.125rem;\n  background-color: #57ADEB;\n  border: none;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-top .add-button:hover {\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n  transition: 0.3s all ease-in-out;\n}\n.modal .modal-container .modal-form form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.modal .modal-container .modal-form form textarea {\n  font-family: \"Poppins\", sans-serif;\n  resize: none;\n  width: 100%;\n  height: 300px;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n.modal .modal-container .modal-form form input {\n  width: 100%;\n  margin-bottom: 1rem;\n  font-size: 1.125rem;\n  padding: 0.8rem 0.5rem;\n  background-color: #F5F4F3;\n  border: none;\n  border: 2px solid #AFAFAF;\n  border-radius: 5px;\n}\n\n.show-modal {\n  opacity: 1;\n  visibility: visible;\n  transform: scale(1);\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\n}","@mixin flexBox($direction: row, $justify: center, $align: center) {\r\n\tdisplay: flex;\r\n\tflex-direction: $direction;\r\n\tjustify-content: $justify;\r\n\talign-items: $align;\r\n}\r\n\r\n@mixin twelveColumn() {\r\n\tmax-width: 100vw;\r\n\theight: 100vh;\r\n\tdisplay: grid;\r\n\tgrid-template-columns: repeat(12, [col-start] 1fr);\r\n\tgrid-template-rows: repeat(12, 1fr);\r\n};",".navigation-top {\r\n\t@include flexBox($justify: flex-end);\r\n\tbackground-color: $navigation-top;\r\n\tgrid-column: col-start / span 12;\r\n\tgrid-row: 1;\r\n\r\n\t.navigation-prop {\r\n\t\t@include flexBox;\r\n\t\tmargin-right: 5.625rem;\r\n\r\n\t\t.info {\r\n\t\t\tmargin-left: 4.063rem;\r\n\t\t}\r\n\t}\r\n}","$navigation-top: #F5F4F3;\r\n$navigation-side: #15181D;\r\n$side-text-color: #AFAFAF;\r\n$high-priority: #F95656;\r\n$mid-priority: #57ADEB;\r\n$low-priority: #8FDC2D;\r\n$modal-shade: rgba(21, 24, 29, .7);\r\n$modal-background: #FFFFFF;\r\n$modal-color: #7E7E7E;\r\n$modal-button: #57ADEB;",".navigation-side {\r\n\tcolor: $side-text-color;\r\n\tbackground-color: $navigation-side;\r\n\tgrid-column: col-start / span 2;\r\n\tgrid-row: 2 / 13;\r\n\toverflow: hidden;\r\n\r\n\t.container {\r\n\t\t@include flexBox($direction: column, $align: flex-start);\r\n\t\tgap: 1rem;\r\n\t\tmax-width: 70%;\r\n\t\tmargin: 3.75rem auto 0 auto;\r\n\r\n\t\th2, h3 {\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.active {\r\n\t\t\tfont-weight: 600;\r\n\t\t}\r\n\r\n\t\t.container-project {\r\n\t\t\t@include flexBox($justify: flex-start, $align: flex-start);\r\n\t\t\tgap: 1rem;\r\n\t\t\tflex-wrap: wrap;\t\r\n\r\n\t\t\t.personal {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t\tgap: 1rem;\r\n\t\t\t\tflex-wrap: nowrap;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.container-personal {\r\n\r\n\t\t\t.new-personal {\r\n\t\t\t\tmargin-left: 20px;\r\n\t\t\t}\r\n\t\t\t.add-personal {\r\n\t\t\t\tmax-width: 20px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}",".view-todo {\r\n\tgrid-column: col-start 4 / 12;\r\n\tgrid-row: 3 / 13;\r\n\r\n\t.project-list {\r\n\t\t@include flexBox($direction: column);\r\n\t\tmargin-top: 1.25rem;\r\n\r\n\t\t.list-item {\r\n\t\t\t@include flexBox($direction: row, $justify: space-between);\r\n\t\t\tmin-width: 100%;\r\n\t\t\tmargin-bottom: 1rem;\r\n\t\t\theight: 4rem;\r\n\t\t\tbackground-color: $navigation-top;\r\n\t\t\tborder-radius: 10px;\r\n\t\t\tpadding: 1.6rem;\r\n\r\n\t\t\t.todo-prop, .todo-title {\r\n\t\t\t\t@include flexBox();\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"] {\r\n\t\t\t\t/* Add if not using autoprefixer */\r\n\t\t\t\t-webkit-appearance: none;\r\n\t\t\t\tappearance: none;\r\n\t\t\t\t/* For iOS < 15 to remove gradient background */\r\n\t\t\t\tbackground-color: #fff;\r\n\t\t\t\t/* Not removed via appearance */\r\n\t\t\t\tdisplay: grid;\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tplace-content: center;\r\n\t\t\t\tmargin: 0;\r\n\t\t\t\tmargin-right: 0.9em;\r\n\t\t\t\tfont: inherit;\r\n\t\t\t\twidth: 1.5em;\r\n\t\t\t\theight: 1.5em;\r\n\t\t\t\tborder-radius: 0.50em;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]::before {\r\n\t\t\t\tcontent: \"\";\r\n\t\t\t\twidth: 0.75em;\r\n\t\t\t\theight: 0.75em;\r\n\t\t\t\tborder-radius: 0.2em;\r\n\t\t\t\ttransform: scale(0);\r\n\t\t\t\ttransition: 120ms transform ease-in-out;\r\n\t\t\t\tbox-shadow: inset 1em 1em $mid-priority;\r\n\t\t\t}\r\n\r\n\t\t\tinput[type=\"checkbox\"]:checked::before {\r\n\t\t\t\ttransform: scale(1);\r\n\t\t\t}\r\n\r\n\t\t\t.high-priority {\r\n\t\t\t\tborder: 0.15em solid $high-priority;\r\n\t\t\t}\r\n\r\n\t\t\t.todo-prop {\r\n\r\n\t\t\t\t.todo-edit {\r\n\t\t\t\t\tmargin: 0 1.25rem 0 1.8rem;\r\n\t\t\t\t}\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n",".modal {\r\n\t@include twelveColumn();\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\toverflow: auto;\r\n\tbackground-color: $modal-shade;\r\n\t// in order to hide the modal at first\r\n\topacity: 0;\r\n\tvisibility: hidden;\r\n\ttransform: scale(1.1);\r\n\ttransition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\r\n\r\n\t.modal-container {\r\n\t\tgrid-column: col-start 3 / 11;\r\n\t\tgrid-row: 3 / 12;\r\n\t\tcolor: $modal-color;\r\n\t\tbackground-color: $modal-background;\r\n\t\tborder-radius: 10px;\r\n\t\tpadding: 1.25rem 5.6rem;\r\n\r\n\t\t.modal-top {\r\n\t\t\t@include flexBox($justify: space-between);\r\n\t\t\tmargin-bottom: 1.25rem;\r\n\r\n\t\t\t.due-date,\r\n\t\t\t.priority {\r\n\t\t\t\tmargin-left: .2rem;\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tcolor: $modal-color;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tmargin-right: 1.875rem;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button {\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tcolor: #fff;\r\n\t\t\t\tpadding: 0.3rem 0.8rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tbackground-color: $modal-button;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\t.add-button:hover {\r\n\t\t\t\tbox-shadow: 0 5px 10px rgba(0, 0, 0, 0.150);\r\n\t\t\t\ttransition: .3s all ease-in-out;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.modal-form form{\r\n\t\t\t@include flexBox($direction: column, $align: flex-start);\r\n\r\n\t\t\ttextarea {\r\n\t\t\t\tfont-family: 'Poppins', sans-serif;\r\n\t\t\t\tresize: none;\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 300px;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem .5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\r\n\t\t\tinput {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\tmargin-bottom: 1rem;\r\n\t\t\t\tfont-size: 1.125rem;\r\n\t\t\t\tpadding: 0.8rem 0.5rem;\r\n\t\t\t\tbackground-color: $navigation-top;\r\n\t\t\t\tborder: none;\r\n\t\t\t\tborder: 2px solid $side-text-color;\r\n\t\t\t\tborder-radius: 5px;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n// in order to show the modal with a simple animation\r\n.show-modal {\r\n\topacity: 1;\r\n\tvisibility: visible;\r\n\ttransform: scale(1.0);\r\n\ttransition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\r\n}"],"sourceRoot":""}]);
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLFlBQVksVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksY0FBYyxlQUFlLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0s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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05zQjtBQUNzRCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvdG9wX25hdmlnYXRpb24vY2xvc2VfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL3Nob3dfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC8uL3NyYy9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL3RvcF9uYXZpZ2F0aW9uLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDAuODc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTIsIFtjb2wtc3RhcnRdIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICBtYXgtd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGV4dC1ob3Zlcjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubmF2aWdhdGlvbi10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMTI7XFxuICBncmlkLXJvdzogMTtcXG59XFxuLm5hdmlnYXRpb24tdG9wIC5uYXZpZ2F0aW9uLXByb3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDUuNjI1cmVtO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCAuaW5mbyB7XFxuICBtYXJnaW4tbGVmdDogNC4wNjNyZW07XFxufVxcblxcbi5uYXZpZ2F0aW9uLXNpZGUge1xcbiAgY29sb3I6ICNBRkFGQUY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxODFEO1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydC9zcGFuIDI7XFxuICBncmlkLXJvdzogMi8xMztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMy43NXJlbSBhdXRvIDAgYXV0bztcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIGgyLCAubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgLmNvbnRhaW5lci1wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3QgLnBlcnNvbmFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5uZXctcGVyc29uYWwge1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXBlcnNvbmFsIC5hZGQtcGVyc29uYWwge1xcbiAgbWF4LXdpZHRoOiAyMHB4O1xcbn1cXG5cXG4udmlldy10b2RvIHtcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgNC8xMjtcXG4gIGdyaWQtcm93OiAzLzEzO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxLjZyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXByb3AsIC52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxuICAvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIC8qIE5vdCByZW1vdmVkIHZpYSBhcHBlYXJhbmNlICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjllbTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB3aWR0aDogMS41ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC43NWVtO1xcbiAgaGVpZ2h0OiAwLjc1ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxuICBib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICM1N0FERUI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAuaGlnaC1wcmlvcml0eSB7XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjRjk1NjU2O1xcbn1cXG4udmlldy10b2RvIC5wcm9qZWN0LWxpc3QgLmxpc3QtaXRlbSAudG9kby1wcm9wIC50b2RvLWVkaXQge1xcbiAgbWFyZ2luOiAwIDEuMjVyZW0gMCAxLjhyZW07XFxufVxcblxcbi5tb2RhbCB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAyNCwgMjksIDAuNyk7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4yNXMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCAzLzExO1xcbiAgZ3JpZC1yb3c6IDMvMTI7XFxuICBjb2xvcjogIzdFN0U3RTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMS4yNXJlbSA1LjZyZW07XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC10b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuZHVlLWRhdGUsXFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAucHJpb3JpdHkge1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjg3NXJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3QURFQjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCAuYWRkLWJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlLWluLW91dDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gdGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGJvcmRlcjogMnB4IHNvbGlkICNBRkFGQUY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5tb2RhbCAubW9kYWwtY29udGFpbmVyIC5tb2RhbC1mb3JtIGZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnNob3ctbW9kYWwge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fbWl4aW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWxzL190b3AtbmF2aWdhdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbHMvX3ZhcmlhYmxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fc2lkZS1uYXZpZ2F0aW9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fdmlldy10b2RvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFscy9fbW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtFQUNBLGtDQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFRW5CQyxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQ0FBQTtBRHFCRDs7QURGQTtFQUNDLGVBQUE7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TXRMRztFQUNDLDBDQUFBO0VBQ0EsZ0NBQUE7QU53TEo7QU1wTEU7RUxwREQsYUFBQTtFQUNBLHNCS29EK0I7RUxuRC9CLHVCQUh5QztFQUl6Qyx1QktrRCtDO0FOeUxoRDtBTXZMRztFQUNDLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCSC9EYTtFR2dFYix5QkFBQTtFQUNBLGtCQUFBO0FOeUxKO0FNdExHO0VBQ0MsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCSHpFYTtFRzBFYixZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBTndMSjs7QU1sTEE7RUFDQyxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNFQUFBO0FOcUxEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcblxcdHBhZGRpbmc6IDA7XFxyXFxuXFx0bWFyZ2luOiAwO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHRcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcblxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuXFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcdFxcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0QGluY2x1ZGUgdHdlbHZlQ29sdW1uKCk7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcblxcdG1heC13aWR0aDogMzBweDtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5idXR0b24taG92ZXI6aG92ZXIge1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWhvdmVyOmhvdmVyIHtcXHJcXG5cXHRmb250LXdlaWdodDogNjAwO1xcclxcbn1cIixcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEyLCAxZnIpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIG1heC13aWR0aDogMzBweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmJ1dHRvbi1ob3Zlcjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50ZXh0LWhvdmVyOmhvdmVyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5uYXZpZ2F0aW9uLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjRGMztcXG4gIGdyaWQtY29sdW1uOiBjb2wtc3RhcnQvc3BhbiAxMjtcXG4gIGdyaWQtcm93OiAxO1xcbn1cXG4ubmF2aWdhdGlvbi10b3AgLm5hdmlnYXRpb24tcHJvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNS42MjVyZW07XFxufVxcbi5uYXZpZ2F0aW9uLXRvcCAubmF2aWdhdGlvbi1wcm9wIC5pbmZvIHtcXG4gIG1hcmdpbi1sZWZ0OiA0LjA2M3JlbTtcXG59XFxuXFxuLm5hdmlnYXRpb24tc2lkZSB7XFxuICBjb2xvcjogI0FGQUZBRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE4MUQ7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0L3NwYW4gMjtcXG4gIGdyaWQtcm93OiAyLzEzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgbWFyZ2luOiAzLjc1cmVtIGF1dG8gMCBhdXRvO1xcbn1cXG4ubmF2aWdhdGlvbi1zaWRlIC5jb250YWluZXIgaDIsIC5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciBoMyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5uYXZpZ2F0aW9uLXNpZGUgLmNvbnRhaW5lciAuY29udGFpbmVyLXByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGdhcDogMXJlbTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcHJvamVjdCAucGVyc29uYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLm5ldy1wZXJzb25hbCB7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLm5hdmlnYXRpb24tc2lkZSAuY29udGFpbmVyIC5jb250YWluZXItcGVyc29uYWwgLmFkZC1wZXJzb25hbCB7XFxuICBtYXgtd2lkdGg6IDIwcHg7XFxufVxcblxcbi52aWV3LXRvZG8ge1xcbiAgZ3JpZC1jb2x1bW46IGNvbC1zdGFydCA0LzEyO1xcbiAgZ3JpZC1yb3c6IDMvMTM7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEuMjVyZW07XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDEuNnJlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tcHJvcCwgLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gLnRvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIC8qIEFkZCBpZiBub3QgdXNpbmcgYXV0b3ByZWZpeGVyICovXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgLyogRm9yIGlPUyA8IDE1IHRvIHJlbW92ZSBncmFkaWVudCBiYWNrZ3JvdW5kICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgLyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBtYXJnaW4tcmlnaHQ6IDAuOWVtO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHdpZHRoOiAxLjVlbTtcXG4gIGhlaWdodDogMS41ZW07XFxuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAwLjc1ZW07XFxuICBoZWlnaHQ6IDAuNzVlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gIzU3QURFQjtcXG59XFxuLnZpZXctdG9kbyAucHJvamVjdC1saXN0IC5saXN0LWl0ZW0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC5oaWdoLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMC4xNWVtIHNvbGlkICNGOTU2NTY7XFxufVxcbi52aWV3LXRvZG8gLnByb2plY3QtbGlzdCAubGlzdC1pdGVtIC50b2RvLXByb3AgLnRvZG8tZWRpdCB7XFxuICBtYXJnaW46IDAgMS4yNXJlbSAwIDEuOHJlbTtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIG1heC13aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEyLCBbY29sLXN0YXJ0XSAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTIsIDFmcik7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjEsIDI0LCAyOSwgMC43KTtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogY29sLXN0YXJ0IDMvMTE7XFxuICBncmlkLXJvdzogMy8xMjtcXG4gIGNvbG9yOiAjN0U3RTdFO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxLjI1cmVtIDUuNnJlbTtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLXRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5kdWUtZGF0ZSxcXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5wcmlvcml0eSB7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6ICM3RTdFN0U7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5hZGQtYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTdBREVCO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtdG9wIC5hZGQtYnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsIGVhc2UtaW4tb3V0O1xcbn1cXG4ubW9kYWwgLm1vZGFsLWNvbnRhaW5lciAubW9kYWwtZm9ybSBmb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSB0ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgcmVzaXplOiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIHBhZGRpbmc6IDAuOHJlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNEYzO1xcbiAgYm9yZGVyOiAycHggc29saWQgI0FGQUZBRjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLm1vZGFsIC5tb2RhbC1jb250YWluZXIgLm1vZGFsLWZvcm0gZm9ybSBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgcGFkZGluZzogMC44cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY0RjM7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjQUZBRkFGO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4uc2hvdy1tb2RhbCB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwcywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcbn1cIixcIkBtaXhpbiBmbGV4Qm94KCRkaXJlY3Rpb246IHJvdywgJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIpIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcclxcblxcdGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XFxyXFxuXFx0YWxpZ24taXRlbXM6ICRhbGlnbjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHR3ZWx2ZUNvbHVtbigpIHtcXHJcXG5cXHRtYXgtd2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgW2NvbC1zdGFydF0gMWZyKTtcXHJcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMiwgMWZyKTtcXHJcXG59O1wiLFwiLm5hdmlnYXRpb24tdG9wIHtcXHJcXG5cXHRAaW5jbHVkZSBmbGV4Qm94KCRqdXN0aWZ5OiBmbGV4LWVuZCk7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJG5hdmlnYXRpb24tdG9wO1xcclxcblxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgLyBzcGFuIDEyO1xcclxcblxcdGdyaWQtcm93OiAxO1xcclxcblxcclxcblxcdC5uYXZpZ2F0aW9uLXByb3Age1xcclxcblxcdFxcdEBpbmNsdWRlIGZsZXhCb3g7XFxyXFxuXFx0XFx0bWFyZ2luLXJpZ2h0OiA1LjYyNXJlbTtcXHJcXG5cXHJcXG5cXHRcXHQuaW5mbyB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDQuMDYzcmVtO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVwiLFwiJG5hdmlnYXRpb24tdG9wOiAjRjVGNEYzO1xcclxcbiRuYXZpZ2F0aW9uLXNpZGU6ICMxNTE4MUQ7XFxyXFxuJHNpZGUtdGV4dC1jb2xvcjogI0FGQUZBRjtcXHJcXG4kaGlnaC1wcmlvcml0eTogI0Y5NTY1NjtcXHJcXG4kbWlkLXByaW9yaXR5OiAjNTdBREVCO1xcclxcbiRsb3ctcHJpb3JpdHk6ICM4RkRDMkQ7XFxyXFxuJG1vZGFsLXNoYWRlOiByZ2JhKDIxLCAyNCwgMjksIC43KTtcXHJcXG4kbW9kYWwtYmFja2dyb3VuZDogI0ZGRkZGRjtcXHJcXG4kbW9kYWwtY29sb3I6ICM3RTdFN0U7XFxyXFxuJG1vZGFsLWJ1dHRvbjogIzU3QURFQjtcIixcIi5uYXZpZ2F0aW9uLXNpZGUge1xcclxcblxcdGNvbG9yOiAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXNpZGU7XFxyXFxuXFx0Z3JpZC1jb2x1bW46IGNvbC1zdGFydCAvIHNwYW4gMjtcXHJcXG5cXHRncmlkLXJvdzogMiAvIDEzO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuXFx0LmNvbnRhaW5lciB7XFxyXFxuXFx0XFx0QGluY2x1ZGUgZmxleEJveCgkZGlyZWN0aW9uOiBjb2x1bW4sICRhbGlnbjogZmxleC1zdGFydCk7XFxyXFxuXFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdG1heC13aWR0aDogNzAlO1xcclxcblxcdFxcdG1hcmdpbjogMy43NXJlbSBhdXRvIDAgYXV0bztcXHJcXG5cXHJcXG5cXHRcXHRoMiwgaDMge1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmFjdGl2ZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmNvbnRhaW5lci1wcm9qZWN0IHtcXHJcXG5cXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCRqdXN0aWZ5OiBmbGV4LXN0YXJ0LCAkYWxpZ246IGZsZXgtc3RhcnQpO1xcclxcblxcdFxcdFxcdGdhcDogMXJlbTtcXHJcXG5cXHRcXHRcXHRmbGV4LXdyYXA6IHdyYXA7XFx0XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnBlcnNvbmFsIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBmbGV4Qm94KCk7XFxyXFxuXFx0XFx0XFx0XFx0Z2FwOiAxcmVtO1xcclxcblxcdFxcdFxcdFxcdGZsZXgtd3JhcDogbm93cmFwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmNvbnRhaW5lci1wZXJzb25hbCB7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lm5ldy1wZXJzb25hbCB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdC5hZGQtcGVyc29uYWwge1xcclxcblxcdFxcdFxcdFxcdG1heC13aWR0aDogMjBweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCIsXCIudmlldy10b2RvIHtcXHJcXG5cXHRncmlkLWNvbHVtbjogY29sLXN0YXJ0IDQgLyAxMjtcXHJcXG5cXHRncmlkLXJvdzogMyAvIDEzO1xcclxcblxcclxcblxcdC5wcm9qZWN0LWxpc3Qge1xcclxcblxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uKTtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiAxLjI1cmVtO1xcclxcblxcclxcblxcdFxcdC5saXN0LWl0ZW0ge1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogcm93LCAkanVzdGlmeTogc3BhY2UtYmV0d2Vlbik7XFxyXFxuXFx0XFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiA0cmVtO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEuNnJlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQudG9kby1wcm9wLCAudG9kby10aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgZmxleEJveCgpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG5cXHRcXHRcXHRcXHQvKiBBZGQgaWYgbm90IHVzaW5nIGF1dG9wcmVmaXhlciAqL1xcclxcblxcdFxcdFxcdFxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRhcHBlYXJhbmNlOiBub25lO1xcclxcblxcdFxcdFxcdFxcdC8qIEZvciBpT1MgPCAxNSB0byByZW1vdmUgZ3JhZGllbnQgYmFja2dyb3VuZCAqL1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuXFx0XFx0XFx0XFx0LyogTm90IHJlbW92ZWQgdmlhIGFwcGVhcmFuY2UgKi9cXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMC45ZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udDogaW5oZXJpdDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMS41ZW07XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxLjVlbTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAwLjUwZW07XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDAuNzVlbTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDAuNzVlbTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAwLjJlbTtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiBpbnNldCAxZW0gMWVtICRtaWQtcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuaGlnaC1wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAwLjE1ZW0gc29saWQgJGhpZ2gtcHJpb3JpdHk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC50b2RvLXByb3Age1xcclxcblxcclxcblxcdFxcdFxcdFxcdC50b2RvLWVkaXQge1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMCAxLjI1cmVtIDAgMS44cmVtO1xcclxcblxcdFxcdFxcdFxcdH1cXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIubW9kYWwge1xcclxcblxcdEBpbmNsdWRlIHR3ZWx2ZUNvbHVtbigpO1xcclxcblxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHR6LWluZGV4OiAxO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdG92ZXJmbG93OiBhdXRvO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1zaGFkZTtcXHJcXG5cXHQvLyBpbiBvcmRlciB0byBoaWRlIHRoZSBtb2RhbCBhdCBmaXJzdFxcclxcblxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0dmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG5cXHR0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjI1cywgb3BhY2l0eSAwLjI1cyAwcywgdHJhbnNmb3JtIDAuMjVzO1xcclxcblxcclxcblxcdC5tb2RhbC1jb250YWluZXIge1xcclxcblxcdFxcdGdyaWQtY29sdW1uOiBjb2wtc3RhcnQgMyAvIDExO1xcclxcblxcdFxcdGdyaWQtcm93OiAzIC8gMTI7XFxyXFxuXFx0XFx0Y29sb3I6ICRtb2RhbC1jb2xvcjtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYmFja2dyb3VuZDtcXHJcXG5cXHRcXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcblxcdFxcdHBhZGRpbmc6IDEuMjVyZW0gNS42cmVtO1xcclxcblxcclxcblxcdFxcdC5tb2RhbC10b3Age1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGp1c3RpZnk6IHNwYWNlLWJldHdlZW4pO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmR1ZS1kYXRlLFxcclxcblxcdFxcdFxcdC5wcmlvcml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IC4ycmVtO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogJG1vZGFsLWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tcmlnaHQ6IDEuODc1cmVtO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuYWRkLWJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdGNvbG9yOiAjZmZmO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuM3JlbSAwLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbW9kYWwtYnV0dG9uO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlcjogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5hZGQtYnV0dG9uOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNTApO1xcclxcblxcdFxcdFxcdFxcdHRyYW5zaXRpb246IC4zcyBhbGwgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQubW9kYWwtZm9ybSBmb3Jte1xcclxcblxcdFxcdFxcdEBpbmNsdWRlIGZsZXhCb3goJGRpcmVjdGlvbjogY29sdW1uLCAkYWxpZ246IGZsZXgtc3RhcnQpO1xcclxcblxcclxcblxcdFxcdFxcdHRleHRhcmVhIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcdFxcdFxcdFxcdHJlc2l6ZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRoZWlnaHQ6IDMwMHB4O1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMC44cmVtIC41cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCAkc2lkZS10ZXh0LWNvbG9yO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0aW5wdXQge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAwLjhyZW0gMC41cmVtO1xcclxcblxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICRuYXZpZ2F0aW9uLXRvcDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXI6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgJHNpZGUtdGV4dC1jb2xvcjtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vIGluIG9yZGVyIHRvIHNob3cgdGhlIG1vZGFsIHdpdGggYSBzaW1wbGUgYW5pbWF0aW9uXFxyXFxuLnNob3ctbW9kYWwge1xcclxcblxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0dmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XFxyXFxuXFx0dHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcyBsaW5lYXIgMHMsIG9wYWNpdHkgMC4yNXMgMHMsIHRyYW5zZm9ybSAwLjI1cztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gdGhpcyBtb2R1bGUgd2lsbCBjaGVjayBpZiB0aGUgdXNlciBjbGlja2VkIG91dHNpZGUgdGhlIG1vZGFsIGNvbnRhaW5lclxyXG4vLyBpZiB0cnVlLCBjbG9zZSB0aGUgbW9kYWxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDbG9zZU1vZGFsKGV2ZW50LCBtb2RhbEVsZW1lbnQpIHtcclxuXHRpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbEVsZW1lbnQpXHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxufSIsIi8vIHRoaXMgbW9kdWxlIHdpbGwgdG9nZ2xlIHRoZSBjbGFzcyBvZiB0aGUgbW9kYWwgZWxlbWVudFxyXG4vLyBpbiBvcmRlciB0aGUgbW9kYWwgdG8gc2hvd1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5cclxuZnVuY3Rpb24gTW9kYWwobW9kYWxDbGFzcykge1xyXG5cdG1vZGFsLmNsYXNzTGlzdC50b2dnbGUobW9kYWxDbGFzcyk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG1vZGFsLCBNb2RhbCB9OyIsImltcG9ydCB7IG1vZGFsLCBNb2RhbCB9IGZyb20gJy4vc2hvd19tb2RhbC5qcyc7XHJcbmltcG9ydCB7IENsb3NlTW9kYWwgfSBmcm9tICcuL2Nsb3NlX21vZGFsLmpzJztcclxuLy8gVGhpcyBtb2R1bGUgd2lsbCBoYW5kbGUgdGhlIGNsaWNrIGV2ZW50IGZvciB0aGUgYnV0dG9ucyBpbiB0b3AgbmF2aWdhdGlvblxyXG4vLyBhZGQgYnV0dG9uIGFuZCB0aGUgaW5mbyBidXR0b25cclxuXHJcbmNvbnN0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3JlYXRlLXRvZG8nKTtcclxuY29uc3QgYnRuU2hvd0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2hvdy1pbmZvJyk7XHJcblxyXG5leHBvcnQgY29uc3QgVG9wX05hdmlnYXRpb24gPSAoZnVuY3Rpb24oKSB7XHJcblx0Ly8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBidXR0b25zXHJcblx0YnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNb2RhbCk7XHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgd2luZG93c09uQ2xpY2spO1xyXG5cdC8vIGJ0blNob3dJbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyBzaG93SW5mb3JtYXRpb24pO1xyXG5cclxuXHRmdW5jdGlvbiBzaG93TW9kYWwoKSB7XHJcblx0XHRNb2RhbCgnc2hvdy1tb2RhbCcpO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gd2luZG93c09uQ2xpY2soZXZlbnQpIHtcclxuXHRcdGlmIChDbG9zZU1vZGFsKGV2ZW50LCBtb2RhbCkgPT0gdHJ1ZSlcclxuXHRcdFx0TW9kYWwoJ3Nob3ctbW9kYWwnKTsgLy8gdG9nZ2xlIGFnYWluIGluIG9yZGVyIHRvIGNsb3NlIGl0XHJcblx0fVxyXG59KSgpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFRvcF9OYXZpZ2F0aW9uIH0gZnJvbSAnLi9tb2R1bGVzL3RvcF9uYXZpZ2F0aW9uL3RvcF9uYXZpZ2F0aW9uLmpzJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9