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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/js_dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__ = __webpack_require__(1);


$(document).ready(() => {

    Object(__WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__["a" /* default */])();
    // moveBcgLayer($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-1'), 20);
    // moveBcgLayer($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-2'), 20);
    // moveBcgLayer($('.js-intro-bcg-shapes'), $('#dev-bcg-intro-color #bcg-3'), 30);
    console.log('animacja działa? działa!');
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = runLogoAnimation;
function runLogoAnimation() {

    $('.js-header, .js-logo-full').show().removeClass('hidden');

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    var tl = new TimelineLite();

    //---------------
    // LOGO ANIMATION
    //---------------
    // logo vars
    var $introHeader = $('.js-header');
    var $uDream = $('.js-intro-h11');
    var $uPlan = $('.js-intro-h12');
    var $uMaster = $('.js-intro-h13');
    var $comingSoon = $('.js-intro-h2');
    var $logoFull = $('.js-logo-full');
    var $logoPart = $('.js-logo-full > *');
    var $wheelPart1 = $('.js-wheel-part-1');
    var $wheelPart2 = $('.js-wheel-part-2');
    var $wheelPart3 = $('.js-wheel-part-3');
    var $wheelPart4 = $('.js-wheel-part-4');
    var $wheelPart5 = $('.js-wheel-part-5');
    var $logoName = $('.js-logo-text');

    tl.to($introHeader, 0, { opacity: 0 }).to($logoFull, 0, { opacity: 0 }).to($logoPart, 0, { opacity: 0 }).to($comingSoon, 0, { opacity: 0 }).to($uDream, 0, { x: '-=20' }, '+=.5').to($uPlan, 0, { x: '-=20' }).to($uMaster, 0, { x: '-=20' }).to($uDream, 1, { opacity: 1, x: '0', ease: Linear.easeOut }).to($uPlan, 1, { opacity: 1, x: '0', ease: Linear.easeOut }).to($uMaster, 1, { opacity: 1, x: '0', ease: Linear.easeOut }).to($logoFull, 0, { opacity: 1 }).to($wheelPart1, .2, { opacity: 1, ease: Back.easeOut.config(1.4) }, '+=.1').to($wheelPart2, .2, { opacity: 1, ease: Back.easeOut.config(1.4) }, '-=.1').to($wheelPart3, .2, { opacity: 1, ease: Back.easeOut.config(1.4) }, '-=.1').to($wheelPart4, .2, { opacity: 1, ease: Back.easeOut.config(1.4) }, '-=.1').to($wheelPart5, .2, { opacity: 1, ease: Back.easeOut.config(1.4) }, '-=.1').to($logoName, 2, { opacity: 1, ease: Linear.easeOut }, '+=.2').to($comingSoon, 1, { opacity: 1, ease: Linear.easeOut });

    //.to($('#bcg-3-float-3'), 100, {x:'+=1000', y:'+=500'}, '-=.2')
};

/***/ })
/******/ ]);