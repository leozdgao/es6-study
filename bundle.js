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

	// Expression bodies
	"use strict";

	var odds = evens.map(function (v) {
	  return v + 1;
	});
	var nums = evens.map(function (v, i) {
	  return v + i;
	});

	// Statement bodies
	nums.forEach(function (v) {
	  if (v % 5 === 0) fives.push(v);
	});

	// Lexical this
	var bob = {
	  _name: "Bob",
	  _friends: [],
	  printFriends: function printFriends() {
	    var _this = this;

	    this._friends.forEach(function (f) {
	      return console.log(_this._name + " knows " + f);
	    });
	  }
	};

/***/ }
/******/ ]);