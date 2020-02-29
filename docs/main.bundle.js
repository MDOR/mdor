(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = module.exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root {\n  --font-family: Spartan, monospace, Arial;\n  --yellow: #efbb35;\n  --red: #c93736;\n  --gray-dark: #222831;\n  --gray-light: #8892b0;\n  --blue-transparent: #ccd6f6;\n  --font-size-normal: 18px;\n  --font-size-medium: 30px;\n  --font-size-big: 41px;\n  --font-size-x-big: 70px;\n  --font-size-x-x-big: 85px; }\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nhtml,\nbody {\n  font-family: Spartan, monospace, Arial;\n  font-family: var(--font-family, Spartan, monospace, Arial);\n  background-color: #222831;\n  background-color: var(--gray-dark, #222831);\n  color: #ccd6f6;\n  color: var(--blue-transparent, #ccd6f6);\n  font-size: 20px;\n  min-height: 500px;\n  min-width: 480px;\n  margin: 0;\n  -webkit-font-smoothing: antialiased; }\n\np {\n  line-height: 1.2rem; }\n\na {\n  color: #efbb35;\n  color: var(--yellow, #efbb35);\n  transition: 0.5s color ease;\n  text-decoration: none; }\n  a:hover, a:active {\n    color: #c93736;\n    color: var(--red, #c93736); }\n\n.content-container {\n  max-width: 1240px; }\n  @media (min-width: 1240px) {\n    .content-container {\n      display: block;\n      margin: auto; } }\n\n.text-center {\n  text-align: center; }\n\n.text-right {\n  text-align: right; }\n\n.text-left {\n  text-align: left; }\n\n.text-justify {\n  text-align: justify; }\n\n.responsive-img {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  height: auto;\n  vertical-align: middle; }\n\nheader {\n  padding: 15px;\n  color: white; }\n\nnav {\n  display: flex;\n  flex-wrap: wrap; }\n  nav .logo {\n    flex: 1 1 auto; }\n  nav .nav {\n    max-width: 500px;\n    list-style: none;\n    margin: 0;\n    display: flex;\n    flex: 3 1 auto;\n    justify-content: space-between; }\n\n.section {\n  min-height: 50vh;\n  padding: 15px; }\n  .section-title {\n    position: relative;\n    display: block;\n    position: relative;\n    text-align: center;\n    font-size: 41px;\n    font-size: var(--font-size-big, 41px); }\n    .section-title > span {\n      position: relative;\n      display: inline-block;\n      z-index: 2;\n      padding-left: 30px;\n      padding-right: 30px;\n      background-color: #222831;\n      background-color: var(--gray-dark, #222831); }\n    .section-title:before, .section-title:after {\n      content: '';\n      position: absolute;\n      height: 1px;\n      width: 50%;\n      background: transparent;\n      top: 50%; }\n    .section-title:before {\n      background-image: linear-gradient(to left, #efbb35, transparent);\n      left: 0; }\n    .section-title:after {\n      background-image: linear-gradient(to right, #efbb35, transparent);\n      right: 0; }\n\n.flex-container {\n  display: flex;\n  flex-wrap: wrap; }\n  .flex-container > * {\n    flex: 1;\n    flex-shrink: 1;\n    flex-grow: 1;\n    -ms-flex: 1;\n    -ms-flex-shrink: 0;\n    -ms-flex-grow: 1; }\n\n.list-style-none {\n  margin: 0;\n  padding-left: 0;\n  list-style: none; }\n\n.skills {\n  column-count: 3;\n  text-align: center;\n  text-align: -webkit-center; }\n  .skills li {\n    width: 80px;\n    margin-bottom: 15px; }\n\n.intro {\n  position: relative;\n  height: 100vh;\n  padding: 300px 15px; }\n  .intro-paragraph {\n    margin-left: auto;\n    margin-right: auto;\n    max-width: 800px;\n    opacity: 0; }\n  .intro-phrase {\n    color: #efbb35;\n    color: var(--yellow, #efbb35); }\n  .intro .author-name {\n    font-size: 85px;\n    font-size: var(--font-size-x-x-big, 85px);\n    color: white;\n    margin: 0;\n    font-weight: 300;\n    text-shadow: 0 0 0 transparent, 0 0 5px #ccd6f6, 0 0 10px white; }\n  .intro .author-title {\n    font-size: 85px;\n    font-size: var(--font-size-x-x-big, 85px);\n    color: #efbb35;\n    color: var(--yellow, #efbb35);\n    margin: 0; }\n  .intro:before {\n    content: attr(data-message);\n    position: absolute;\n    font-weight: bold;\n    font-size: 120px;\n    top: 33%;\n    left: 25%;\n    opacity: 1;\n    transition: 5s opacity ease; }\n  .intro-before-ready:before {\n    opacity: 0.005; }\n  @media (max-width: 768px) {\n    .intro {\n      padding: 130px 15px; }\n      .intro:before {\n        font-size: 50px; }\n      .intro .author-name,\n      .intro .author-title {\n        font-size: 41px;\n        font-size: var(--font-size-big, 41px); } }\n\n@media screen and (max-width: 992px) {\n  .optional-contact {\n    display: none; } }\n\n.optional-contact > * {\n  background-color: #222831;\n  background-color: var(--gray-dark, #222831);\n  padding-left: 15px;\n  padding-right: 15px;\n  position: fixed;\n  bottom: 0;\n  height: 340px;\n  width: 40px;\n  position: fixed; }\n\n.optional-contact ul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n  .optional-contact ul li {\n    padding-bottom: 20px;\n    list-style-image: url(data:0); }\n\n.optional-contact svg {\n  height: 20px;\n  width: 20px;\n  fill: currentcolor; }\n\n.optional-contact .email {\n  writing-mode: vertical-lr;\n  -ms-writing-mode: tb-rl;\n  direction: rtl;\n  margin-bottom: 20px; }\n\n.optional-contact .right {\n  right: 40px; }\n\n.bio .abstract {\n  flex-grow: 2;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.bio .picture > img {\n  width: 100%; }\n\n@media (max-width: 768px) {\n  .bio .skills {\n    column-count: 4; }\n  .bio .abstract {\n    flex-basis: 100%;\n    flex-order: 2;\n    -ms-flex-order: 2; }\n  .bio .picture {\n    flex-order: 1;\n    -ms-flex-order: 1; }\n    .bio .picture > img {\n      width: 80%;\n      display: block;\n      margin: auto; } }\n", ""]);


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill/array-from */ "./src/js/polyfill/array-from.js");
/* harmony import */ var _polyfill_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _polyfill_classlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill/classlist */ "./src/js/polyfill/classlist.js");
/* harmony import */ var _polyfill_classlist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfill_classlist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var promise_polyfill_src_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! promise-polyfill/src/polyfill */ "./node_modules/promise-polyfill/src/polyfill.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style/index.scss */ "./src/style/index.scss");
/* harmony import */ var _style_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_index_scss__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var intro = document.querySelector('.intro');
var skills = document.querySelector('.skills');
var typedConfig = {
  typeSpeed: 100,
  backSpeed: 40,
  loop: false,
  showCursor: false
};

function setWindowSize() {
  intro.style.height = "".concat(Number(window.innerHeight || 0), "px");
}

window.addEventListener('DOMContentLoaded', setWindowSize);
window.addEventListener('resize', setWindowSize);

function authorTitle() {
  // eslint-disable-next-line no-new
  new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('.author-title > .title', _objectSpread({}, typedConfig, {
    strings: ['', 'A Software Engineer'],
    onComplete: function onComplete() {
      intro.classList.add('intro-ready');
      [].map.call(document.querySelectorAll('.intro-paragraph'), function (el) {
        return el;
      }).forEach(function (el) {
        /* eslint-disable  no-param-reassign */
        el.style.opacity = 0;
        el.style.transition = ' 0.5s opacity ease';
        el.style.opacity = 1;
        /* eslint-enable  no-param-reassign */
      });
    }
  }));
}

function authorName() {
  // eslint-disable-next-line no-new
  new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('.author-name > .name', _objectSpread({}, typedConfig, {
    strings: ['', 'Marco Domínguez'],
    onBegin: function onBegin() {
      intro.classList.add('intro-before-ready');
    },
    onComplete: function onComplete() {
      authorTitle();
    }
  }));
}

setTimeout(authorName, 10);
var fragment = document.createDocumentFragment();
['angular.svg', 'git.svg', 'html-5.svg', 'node.svg', 'redux-saga.svg', 'bootstrap.svg', 'github.svg', 'imagemin.svg', 'postcss.svg', 'redux.svg', 'css-3.svg', 'gitlab.svg', 'immutable.svg', 'pug.svg', 'typescript.svg', 'docker.svg', 'graphql.svg', 'javascript.svg', 'react-router.svg', 'express.svg', 'grunt.svg', 'jquery.svg', 'react.svg', 'foundation.svg', 'gulp.svg', 'mysql.svg', 'sass.svg', 'less.svg', 'jest.svg', 'reactivex.svg'].forEach(function (skill) {
  var li = document.createElement('li');
  var img = document.createElement('img');
  img.src = "img/technology/".concat(skill);
  img.className = 'responsive-img';
  img.loading = 'lazy';
  li.appendChild(img);
  fragment.appendChild(li);
});
skills.appendChild(fragment);

/***/ }),

/***/ "./src/js/polyfill/array-from.js":
/*!***************************************!*\
  !*** ./src/js/polyfill/array-from.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
}

/***/ }),

/***/ "./src/js/polyfill/classlist.js":
/*!**************************************!*\
  !*** ./src/js/polyfill/classlist.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 1. String.prototype.trim polyfill
if (!''.trim) String.prototype.trim = function () {
  return this.replace(/^[\s﻿]+|[\s﻿]+$/g, '');
};

(function (window) {
  'use strict'; // prevent global namespace pollution

  if (!window.DOMException) (DOMException = function DOMException(reason) {
    this.message = reason;
  }).prototype = new Error();

  var wsRE = /[\11\12\14\15\40]/,
      wsIndex = 0,
      checkIfValidClassListEntry = function checkIfValidClassListEntry(O, V) {
    if (V === '') throw new DOMException("Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty.");
    if ((wsIndex = V.search(wsRE)) !== -1) throw new DOMException("Failed to execute '" + O + "' on 'DOMTokenList': " + "The token provided ('" + V[wsIndex] + "') contains HTML space characters, which are not valid in tokens.");
  }; // 2. Implement the barebones DOMTokenList livelyness polyfill


  if (typeof DOMTokenList !== 'function') (function (window) {
    var document = window.document,
        Object = window.Object,
        hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty,
        allowTokenListConstruction = 0,
        skipPropChange = 0;

    function DOMTokenList() {
      if (!allowTokenListConstruction) throw TypeError('Illegal constructor'); // internally let it through
    }

    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function () {
      return this.value;
    };

    DOMTokenList.prototype.add = function () {
      a: for (var v = 0, argLen = arguments.length, val = '', ele = this[' uCL'], proto = ele[' uCLp']; v !== argLen; ++v) {
        val = arguments[v] + '', checkIfValidClassListEntry('add', val);

        for (var i = 0, Len = proto.length, resStr = val; i !== Len; ++i) {
          if (this[i] === val) continue a;else resStr += ' ' + this[i];
        }

        this[Len] = val, proto.length += 1, proto.value = resStr;
      }

      skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };

    DOMTokenList.prototype.remove = function () {
      for (var v = 0, argLen = arguments.length, val = '', ele = this[' uCL'], proto = ele[' uCLp']; v !== argLen; ++v) {
        val = arguments[v] + '', checkIfValidClassListEntry('remove', val);

        for (var i = 0, Len = proto.length, resStr = '', is = 0; i !== Len; ++i) {
          if (is) {
            this[i - 1] = this[i];
          } else {
            if (this[i] !== val) {
              resStr += this[i] + ' ';
            } else {
              is = 1;
            }
          }
        }

        if (!is) continue;
        delete this[Len], proto.length -= 1, proto.value = resStr;
      }

      skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };

    window.DOMTokenList = DOMTokenList;

    function whenPropChanges() {
      var evt = window.event,
          prop = evt.propertyName;

      if (!skipPropChange && (prop === 'className' || prop === 'classList' && !defineProperty)) {
        var target = evt.srcElement,
            protoObjProto = target[' uCLp'],
            strval = '' + target[prop];
        var tokens = strval.trim().split(wsRE),
            resTokenList = target[prop === 'classList' ? ' uCL' : 'classList'];
        var oldLen = protoObjProto.length;

        a: for (var cI = 0, cLen = protoObjProto.length = tokens.length, sub = 0; cI !== cLen; ++cI) {
          for (var innerI = 0; innerI !== cI; ++innerI) {
            if (tokens[innerI] === tokens[cI]) {
              sub++;
              continue a;
            }
          }

          resTokenList[cI - sub] = tokens[cI];
        }

        for (var i = cLen - sub; i < oldLen; ++i) {
          delete resTokenList[i];
        } //remove trailing indexs


        if (prop !== 'classList') return;
        skipPropChange = 1, target.classList = resTokenList, target.className = strval;
        skipPropChange = 0, resTokenList.length = tokens.length - sub;
      }
    }

    function polyfillClassList(ele) {
      if (!ele || !('innerHTML' in ele)) throw TypeError('Illegal invocation');
      ele.detachEvent('onpropertychange', whenPropChanges); // prevent duplicate handler infinite loop

      allowTokenListConstruction = 1;

      try {
        var _protoObj = function _protoObj() {};

        _protoObj.prototype = new DOMTokenList();
      } finally {
        allowTokenListConstruction = 0;
      }

      var protoObjProto = protoObj.prototype,
          resTokenList = new protoObj();

      a: for (var toks = ele.className.trim().split(wsRE), cI = 0, cLen = toks.length, sub = 0; cI !== cLen; ++cI) {
        for (var innerI = 0; innerI !== cI; ++innerI) {
          if (toks[innerI] === toks[cI]) {
            sub++;
            continue a;
          }
        }

        this[cI - sub] = toks[cI];
      }

      protoObjProto.length = cLen - sub, protoObjProto.value = ele.className, protoObjProto[' uCL'] = ele;

      if (defineProperty) {
        defineProperty(ele, 'classList', {
          // IE8 & IE9 allow defineProperty on the DOM
          enumerable: 1,
          get: function get() {
            return resTokenList;
          },
          configurable: 0,
          set: function set(newVal) {
            skipPropChange = 1, ele.className = protoObjProto.value = newVal += '', skipPropChange = 0;
            var toks = newVal.trim().split(wsRE),
                oldLen = protoObjProto.length;

            a: for (var cI = 0, cLen = protoObjProto.length = toks.length, sub = 0; cI !== cLen; ++cI) {
              for (var innerI = 0; innerI !== cI; ++innerI) {
                if (toks[innerI] === toks[cI]) {
                  sub++;
                  continue a;
                }
              }

              resTokenList[cI - sub] = toks[cI];
            }

            for (var i = cLen - sub; i < oldLen; ++i) {
              delete resTokenList[i];
            } //remove trailing indexs

          }
        });
        defineProperty(ele, ' uCLp', {
          // for accessing the hidden prototype
          enumerable: 0,
          configurable: 0,
          writeable: 0,
          value: protoObj.prototype
        });
        defineProperty(protoObjProto, ' uCL', {
          enumerable: 0,
          configurable: 0,
          writeable: 0,
          value: ele
        });
      } else {
        ele.classList = resTokenList, ele[' uCL'] = resTokenList, ele[' uCLp'] = protoObj.prototype;
      }

      ele.attachEvent('onpropertychange', whenPropChanges);
    }

    try {
      // Much faster & cleaner version for IE8 & IE9:
      // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
      window.Object.defineProperty(window.Element.prototype, 'classList', {
        enumerable: 1,
        get: function get(val) {
          if (!hasOwnProp.call(this, 'classList')) polyfillClassList(this);
          return this.classList;
        },
        configurable: 0,
        set: function set(val) {
          this.className = val;
        }
      });
    } catch (e) {
      // Less performant fallback for older browsers (IE 6-8):
      window[' uCL'] = polyfillClassList; // the below code ensures polyfillClassList is applied to all current and future elements in the doc.

      document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText = '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
      '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}'; //IE7-8
    }
  })(window); // 3. Patch in unsupported methods in DOMTokenList

  (function (DOMTokenListProto, testClass) {
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function (i) {
      function NullCheck(n) {
        return n === void 0 ? null : n;
      }

      return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle('a', 0) !== false) DOMTokenListProto.toggle = function (val) {
      if (arguments.length > 1) return this[arguments[1] ? 'add' : 'remove'](val), !!arguments[1];
      var oldValue = this.value;
      return this.remove(oldValue), oldValue === this.value && (this.add(val), true)
      /*|| false*/
      ;
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace('a', 'b') !== 'boolean') DOMTokenListProto.replace = function (oldToken, newToken) {
      checkIfValidClassListEntry('replace', oldToken), checkIfValidClassListEntry('replace', newToken);
      var oldValue = this.value;
      return this.remove(oldToken), this.value !== oldValue && (this.add(newToken), true);
    };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function (value) {
      for (var i = 0, Len = this.length; i !== Len; ++i) {
        if (this[i] === value) return true;
      }

      return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function (f) {
      if (arguments.length === 1) for (var i = 0, Len = this.length; i !== Len; ++i) {
        f(this[i], i, this);
      } else for (var i = 0, Len = this.length, tArg = arguments[1]; i !== Len; ++i) {
        f.call(tArg, this[i], i, this);
      }
    };
    if (!DOMTokenListProto.entries) DOMTokenListProto.entries = function () {
      var nextIndex = 0,
          that = this;
      return {
        next: function next() {
          return nextIndex < that.length ? {
            value: [nextIndex, that[nextIndex]],
            done: false
          } : {
            done: true
          };
        }
      };
    };
    if (!DOMTokenListProto.values) DOMTokenListProto.values = function () {
      var nextIndex = 0,
          that = this;
      return {
        next: function next() {
          return nextIndex < that.length ? {
            value: that[nextIndex],
            done: false
          } : {
            done: true
          };
        }
      };
    };
    if (!DOMTokenListProto.keys) DOMTokenListProto.keys = function () {
      var nextIndex = 0,
          that = this;
      return {
        next: function next() {
          return nextIndex < that.length ? {
            value: nextIndex,
            done: false
          } : {
            done: true
          };
        }
      };
    };
  })(window.DOMTokenList.prototype, window.document.createElement('div').classList);
})(window);

/***/ }),

/***/ "./src/style/index.scss":
/*!******************************!*\
  !*** ./src/style/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/index.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./src/js/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\mdor.github.io\src\js\index.js */"./src/js/index.js");


/***/ })

},[[0,"runtime","vendors"]]]);
//# sourceMappingURL=main.bundle.js.map