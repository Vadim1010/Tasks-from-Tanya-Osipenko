var bundle =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

		__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function change(el) {
	    if (el == 'boxes') {
	        var a = document.getElementById('boxes');
	        a.style.color = "#0867a6";
	    }
	    if (el == 'filter') {
	        var a = document.getElementById('filter');
	        a.style.color = "#0867a6";
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by SWIFT on 09.04.2017.
	 */
	function hover() {
	    var a = document.getElementsByClassName('img');
	    for (var i = 0; i < a.length; i++) {
	        if (i < 2) {
	            a[i].style.display = "none";
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Created by SWIFT on 09.04.2017.
	 */
	function showe() {
	    var a = document.getElementsByClassName('img');
	    for (var i = 0; i < a.length; i++) {
	        a[i].style.display = "block";
	    }
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map