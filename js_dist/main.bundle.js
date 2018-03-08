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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generateRandomColor__ = __webpack_require__(2);



$(document).ready(() => {

    Object(__WEBPACK_IMPORTED_MODULE_0__runLogoAnimation__["a" /* default */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__generateRandomColor__["a" /* default */])();
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
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = generateRandomColor;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variables__ = __webpack_require__(3);


function generateRandomColor() {
    const $body = $('body');
    const bcgColorsList = [];

    for (__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* colors */].colorName in __WEBPACK_IMPORTED_MODULE_0__variables__["a" /* colors */]) {
        bcgColorsList.push(__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* colors */][__WEBPACK_IMPORTED_MODULE_0__variables__["a" /* colors */].colorName]);
    };

    var randomIndxList = [];

    // Get random color
    for (var i = 0; i < 3; i++) {
        const randomColorIdx = Math.floor(Math.random() * bcgColorsList.length);
        randomIndxList.push(randomColorIdx);
    }

    $('.part-1-color').attr('fill', bcgColorsList[randomIndxList[0]]);
    $('.part-2-color').attr('fill', bcgColorsList[randomIndxList[1]]);
    $('.part-3-color').attr('fill', bcgColorsList[randomIndxList[2]]);

    $body.css('background-image', `linear-gradient(30deg, ${bcgColorsList[randomIndxList[0]]} 0, #f2f2f2 30%, #f2f2f2 70%, ${bcgColorsList[randomIndxList[0]]} 100%)`);
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const $window = $(window);
/* unused harmony export $window */


const dimensions = {
    maxHeight: $(document).height(),
    windowWidth: $window.width(),
    windowHeight: $window.height()
};
/* unused harmony export dimensions */


const colors = {
    'sea': '#4aa3ba',
    'color10': '#a03271',
    'color15': '#008000',
    'color24': '#11999E',
    'color28': '#526ED0',
    'color39': '#96CD39',
    'color40': '#F40967',
    'color41': '#3498DB',
    'color42': '#FCC29A',
    'color43': '#BAF5F0',
    'color44': '#C9FDD7',
    'color45': '#79D1C3',
    'color46': '#6892D5',
    'color47': '#FD9191',
    'color48': '#F5FC9E',
    'color49': '#9EFCB4',
    'color50': '#85C8DD',
    'color51': '#D3BD9A',
    'color52': '#F5F0E8',
    'color53': '#B0E6FF',
    'color54': '#7687DB',
    'color55': '#ABCECF',
    'color56': '#C4DCE0'
};
/* harmony export (immutable) */ __webpack_exports__["a"] = colors;


/***/ })
/******/ ]);