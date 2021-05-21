/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/genContact.js":
/*!***************************!*\
  !*** ./src/genContact.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst genContact = function(phone = \"0123456789\", address = \"123 ABC Str, Defgh, Ikl\") {\n\tconst div = document.createElement(\"div\");\n\tdiv.id = \"contact\";\n\tdiv.classList = \"tab\";\n\n\tconst pPhone = document.createElement(\"p\");\n\tpPhone.textContent = \"Phone: \" + phone;\n\n\tconst pAddress = document.createElement(\"p\");\n\tpAddress.textContent = \"Address: \" + address;\n\n\tdiv.appendChild(pPhone);\n\tdiv.appendChild(pAddress);\n\treturn div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (genContact);\n\n\n//# sourceURL=webpack:///./src/genContact.js?");

/***/ }),

/***/ "./src/genHome.js":
/*!************************!*\
  !*** ./src/genHome.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst genHome = function(header=\"Indian Cuisine\", description=\"The only thing we're serious about is food.\") {\n\tconst div = document.createElement(\"div\");\n\tdiv.id = \"home\";\n\tdiv.classList.add(\"tab\");\n\n\tconst h1 = document.createElement(\"h1\");\n\th1.textContent = header;\n\tconst p = document.createElement(\"p\");\n\tp.textContent = description;\n\n\tdiv.appendChild(h1);\n\tdiv.appendChild(p);\n\treturn div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (genHome);\n\n\n//# sourceURL=webpack:///./src/genHome.js?");

/***/ }),

/***/ "./src/genMenu.js":
/*!************************!*\
  !*** ./src/genMenu.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst genMenu = function(n = 6) {\n\tconst div = document.createElement(\"div\");\n\tdiv.id = \"menu\";\n\tdiv.classList.add(\"flex\");\n\n\t// for (let id = 0; id < n; ++id) {\n\t// \tconst item = document.createElement(\"div\");\n\t// \titem.id = id;\n\t// \titem.classList.add(\"item\");\n\n\t// \tconst name = document.createElement(\"p\");\n\t// \tname.classList.add(\"name\");\n\t// \tname.textContent = `Combo ${id+1}`;\n\t// \tconst price = document.createElement(\"p\");\n\t// \tprice.classList.add(\"price\");\n\t// \tprice.textContent = Math.ceil(Math.random() * 10) + \" $\";\n\n\t// \titem.appendChild(name);\n\t// \titem.appendChild(price);\n\n\t// \tdiv.appendChild(item);\n\t// }\n\n\treturn div;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (genMenu);\n\n\n//# sourceURL=webpack:///./src/genMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _genHome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genHome */ \"./src/genHome.js\");\n/* harmony import */ var _genContact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genContact */ \"./src/genContact.js\");\n/* harmony import */ var _genMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genMenu */ \"./src/genMenu.js\");\n\n\n\n\nconst content = (function () {\n\tconst root = document.querySelector(\"#content\");\n\tconst tab = (function() {\n\t\tconst div = document.createElement(\"div\");\n\t\tdiv.id = \"display\";\n\t\tdiv.appendChild(Object(_genHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\t\treturn div;\n\t})();\n\tconst nav = (function() {\n\t\tconst update = function(e) {\n\t\t\twhile (tab.firstChild) {\n\t\t\t\ttab.removeChild(tab.firstChild);\n\t\t\t}\n\n\t\t\tconst siblings = e.target.parentNode.children;\n\t\t\tfor (let i = 0; i < siblings.length; ++i) {\n\t\t\t\tsiblings[i].classList.remove(\"current\");\n\t\t\t}\n\n\t\t\te.target.classList.add(\"current\");\n\t\t\tswitch (e.target.dataset.name) {\n\t\t\t\tcase \"contact\":\n\t\t\t\t\ttab.appendChild(Object(_genContact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\t\t\t\t\tbreak;\n\t\t\t\tcase \"menu\":\n\t\t\t\t\ttab.appendChild(Object(_genMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\t\t\t\t\tbreak;\n\t\t\t\tdefault:\n\t\t\t\t\ttab.appendChild(Object(_genHome__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n\t\t\t}\n\t\t}\n\n\t\t// Nav tag\n\t\tconst div = document.createElement(\"div\");\n\t\tconst brand = document.createElement(\"div\");\n\t\tconst tabs = document.createElement(\"ul\");\n\t\tconst home = document.createElement(\"li\");\n\t\tconst contact = document.createElement(\"li\");\n\t\tconst menu = document.createElement(\"li\");\n\t\tdiv.id = \"nav\";\n\t\tdiv.classList.add(\"flex\");\n\t\tbrand.id = \"brand\";\n\t\tbrand.textContent = \"Indian Cusinie\";\n\t\tbrand.addEventListener(\"click\", update);\n\t\thome.dataset.name = \"home\";\n\t\thome.textContent = \"Home\";\n\t\thome.classList.add(\"current\");\n\t\thome.addEventListener(\"click\", update);\n\t\tcontact.dataset.name = \"contact\";\n\t\tcontact.textContent = \"Contact\";\n\t\tcontact.addEventListener(\"click\", update);\n\t\tmenu.dataset.name = \"menu\";\n\t\tmenu.textContent = \"Menu\";\n\t\tmenu.addEventListener(\"click\", update);\n\t\ttabs.appendChild(home);\n\t\ttabs.appendChild(menu);\n\t\ttabs.appendChild(contact);\n\t\tdiv.appendChild(brand);\n\t\tdiv.appendChild(tabs);\n\t\treturn div;\n\t})();\n\t\n\tconst show = function() {\n\t\troot.appendChild(nav);\n\t\troot.appendChild(tab);\n\t}\n\n\treturn { show };\n})();\n\ncontent.show();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });