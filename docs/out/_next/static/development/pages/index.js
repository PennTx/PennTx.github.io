((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/cuid/index.js":
/*!************************************!*\
  !*** ./node_modules/cuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

var fingerprint = __webpack_require__(/*! ./lib/fingerprint.js */ "./node_modules/cuid/lib/fingerprint.browser.js");
var pad = __webpack_require__(/*! ./lib/pad.js */ "./node_modules/cuid/lib/pad.js");
var getRandomValue = __webpack_require__(/*! ./lib/getRandomValue.js */ "./node_modules/cuid/lib/getRandomValue.browser.js");

var c = 0,
  blockSize = 4,
  base = 36,
  discreteValues = Math.pow(base, blockSize);

function randomBlock () {
  return pad((getRandomValue() *
    discreteValues << 0)
    .toString(base), blockSize);
}

function safeCounter () {
  c = c < discreteValues ? c : 0;
  c++; // this is not subliminal
  return c - 1;
}

function cuid () {
  // Starting with a lowercase letter makes
  // it HTML element ID friendly.
  var letter = 'c', // hard-coded allows for sequential access

    // timestamp
    // warning: this exposes the exact date and time
    // that the uid was created.
    timestamp = (new Date().getTime()).toString(base),

    // Prevent same-machine collisions.
    counter = pad(safeCounter().toString(base), blockSize),

    // A few chars to generate distinct ids for different
    // clients (so different computers are far less
    // likely to generate the same id)
    print = fingerprint(),

    // Grab some more chars from Math.random()
    random = randomBlock() + randomBlock();

  return letter + timestamp + counter + print + random;
}

cuid.slug = function slug () {
  var date = new Date().getTime().toString(36),
    counter = safeCounter().toString(36).slice(-4),
    print = fingerprint().slice(0, 1) +
      fingerprint().slice(-1),
    random = randomBlock().slice(-2);

  return date.slice(-2) +
    counter + print + random;
};

cuid.isCuid = function isCuid (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  if (stringToCheck.startsWith('c')) return true;
  return false;
};

cuid.isSlug = function isSlug (stringToCheck) {
  if (typeof stringToCheck !== 'string') return false;
  var stringLength = stringToCheck.length;
  if (stringLength >= 7 && stringLength <= 10) return true;
  return false;
};

cuid.fingerprint = fingerprint;

module.exports = cuid;


/***/ }),

/***/ "./node_modules/cuid/lib/fingerprint.browser.js":
/*!******************************************************!*\
  !*** ./node_modules/cuid/lib/fingerprint.browser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var pad = __webpack_require__(/*! ./pad.js */ "./node_modules/cuid/lib/pad.js");

var env = typeof window === 'object' ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad((mimeTypesLength +
  navigator.userAgent.length).toString(36) +
  globalCount.toString(36), 4);

module.exports = function fingerprint () {
  return clientId;
};


/***/ }),

/***/ "./node_modules/cuid/lib/getRandomValue.browser.js":
/*!*********************************************************!*\
  !*** ./node_modules/cuid/lib/getRandomValue.browser.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


var getRandomValue;

var crypto = window.crypto || window.msCrypto;

if (crypto) {
    var lim = Math.pow(2, 32) - 1;
    getRandomValue = function () {
        return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
    };
} else {
    getRandomValue = Math.random;
}

module.exports = getRandomValue;


/***/ }),

/***/ "./node_modules/cuid/lib/pad.js":
/*!**************************************!*\
  !*** ./node_modules/cuid/lib/pad.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function pad (num, size) {
  var s = '000000000' + num;
  return s.substr(s.length - size);
};


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fssceafson%2FDocuments%2FDevelopment%2FJavaScript%2FDevAnywhere.io%2FLessons_HomeWork%2FCode%2Frejection%2Fpages%2Findex.js!./":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fssceafson%2FDocuments%2FDevelopment%2FJavaScript%2FDevAnywhere.io%2FLessons_HomeWork%2FCode%2Frejection%2Fpages%2Findex.js ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var page = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage.default || updatedPage)
        })
      }
      return { page: page.default || page }
    }]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/features/rejection/rejection-reducer */ "./src/features/rejection/rejection-reducer.js");
/* harmony import */ var _src_features_rejection_score_score_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/features/rejection/score/score-component */ "./src/features/rejection/score/score-component.js");
/* harmony import */ var _src_features_rejection_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/features/rejection/add-question/add-question-component */ "./src/features/rejection/add-question/add-question-component.js");
/* harmony import */ var _src_features_rejection_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/features/rejection/question-list/question-list-component */ "./src/features/rejection/question-list/question-list-component.js");
/* harmony import */ var _src_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/localStorage */ "./src/localStorage.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function App() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_src_localStorage__WEBPACK_IMPORTED_MODULE_6__["loadState"])())),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      questions = _useReducer2[0],
      dispatch = _useReducer2[1];

  var questionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var askeeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return Object(_src_localStorage__WEBPACK_IMPORTED_MODULE_6__["saveState"])(questions);
  }, [questions]);

  var handleAcceptedClick = function handleAcceptedClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Accepted'
    }));
  };

  var handleRejectedClick = function handleRejectedClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Rejected'
    }));
  };

  var handleUnansweredClick = function handleUnansweredClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Unanswered'
    }));
  };

  var handleToggleQuestionStatusClick = function handleToggleQuestionStatusClick(id, status, event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["answerQuestion"])({
      id: id,
      status: status === 'Accepted' ? 'Rejected' : status === 'Rejected' ? 'Unanswered' : 'Accepted'
    }));
  };

  var handleDeleteQuestionClick = function handleDeleteQuestionClick(id, event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["deleteQuestion"])({
      id: id
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1226789518"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_features_rejection_score_score_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    score: Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["getScore"])(questions)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_features_rejection_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    questionRef: questionRef,
    askeeRef: askeeRef,
    handleAcceptedClick: handleAcceptedClick,
    handleRejectedClick: handleRejectedClick,
    handleUnansweredClick: handleUnansweredClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_features_rejection_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    questions: questions,
    handleToggleQuestionStatusClick: handleToggleQuestionStatusClick,
    handleDeleteQuestionClick: handleDeleteQuestionClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1226789518"
  }, ".add-question{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:flex-center;-webkit-box-align:flex-center;-ms-flex-align:flex-center;align-items:flex-center;max-width:20em;}.add-question button{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex:0 0 2em;-ms-flex:0 0 2em;flex:0 0 2em;margin:.5em 0;}body{margin:0;padding:0;font-family:sans-serif;}dt{font-weight:bold;}button{max-width:15em;}ul{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}ul li{border-radius:1em;box-shadow:0 0 .5em .5em rgba(0,0,0,0.5);margin:1em 2em;padding:1em;}li.question button{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFeUIsQUFHd0IsQUFNSyxBQUtULEFBS1EsQUFHRixBQUdNLEFBS0gsQUFNUCxTQXJCRCxFQXNCWixJQWRBLEVBSEEsQ0FXOEMsQ0FmckIsRUFVVixxQkFUZixpQkFlaUIsWUF0QkYsR0FOUyxBQTZCVixZQUNkLFNBUHFCLDJCQWhCTCxjQUNoQixnQkFQMEIsWUF1QjFCLHFHQXRCaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvc3NjZWFmc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L0RldkFueXdoZXJlLmlvL0xlc3NvbnNfSG9tZVdvcmsvQ29kZS9yZWplY3Rpb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCByZWplY3Rpb24sIHsgY3JlYXRlUXVlc3Rpb24sIGFuc3dlclF1ZXN0aW9uLCBkZWxldGVRdWVzdGlvbiwgZ2V0U2NvcmUgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3JlamVjdGlvbi1yZWR1Y2VyJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3Njb3JlL3Njb3JlLWNvbXBvbmVudCc7XG5pbXBvcnQgQWRkUXVlc3Rpb24gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9hZGQtcXVlc3Rpb24vYWRkLXF1ZXN0aW9uLWNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25MaXN0IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGxvYWRTdGF0ZSwgc2F2ZVN0YXRlIH0gZnJvbSAnLi4vc3JjL2xvY2FsU3RvcmFnZSc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3F1ZXN0aW9ucywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWplY3Rpb24sIHJlamVjdGlvbihsb2FkU3RhdGUoKSkpO1xuICBjb25zdCBxdWVzdGlvblJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhc2tlZVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzYXZlU3RhdGUocXVlc3Rpb25zKSwgW3F1ZXN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdGVkQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBjcmVhdGVRdWVzdGlvbih7XG4gICAgICAgICdxdWVzdGlvbic6IHF1ZXN0aW9uUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIGFza2VlOiBhc2tlZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzdGF0dXM6ICdBY2NlcHRlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWplY3RlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnUmVqZWN0ZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVW5hbnN3ZXJlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnVW5hbnN3ZXJlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrID0gKGlkLCBzdGF0dXMsIGV2ZW50KSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgIGFuc3dlclF1ZXN0aW9uKHtcbiAgICAgICBpZCxcbiAgICAgICBzdGF0dXM6IChzdGF0dXMgPT09ICdBY2NlcHRlZCcgPyAnUmVqZWN0ZWQnIDogc3RhdHVzID09PSAnUmVqZWN0ZWQnID8gJ1VuYW5zd2VyZWQnIDogJ0FjY2VwdGVkJyApXG4gICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVRdWVzdGlvbkNsaWNrID0gKGlkLCBldmVudCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICBkZWxldGVRdWVzdGlvbih7XG4gICAgICAgaWRcbiAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTY29yZSBzY29yZT17Z2V0U2NvcmUocXVlc3Rpb25zKX0gLz5cbiAgICAgIDxBZGRRdWVzdGlvblxuICAgICAgICBxdWVzdGlvblJlZj17cXVlc3Rpb25SZWZ9XG4gICAgICAgIGFza2VlUmVmPXthc2tlZVJlZn1cbiAgICAgICAgaGFuZGxlQWNjZXB0ZWRDbGljaz17aGFuZGxlQWNjZXB0ZWRDbGlja31cbiAgICAgICAgaGFuZGxlUmVqZWN0ZWRDbGljaz17aGFuZGxlUmVqZWN0ZWRDbGlja31cbiAgICAgICAgaGFuZGxlVW5hbnN3ZXJlZENsaWNrPXtoYW5kbGVVbmFuc3dlcmVkQ2xpY2t9IC8+XG4gICAgICA8UXVlc3Rpb25MaXN0XG4gICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICBoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrPXtoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrfVxuICAgICAgICBoYW5kbGVEZWxldGVRdWVzdGlvbkNsaWNrPXtoYW5kbGVEZWxldGVRdWVzdGlvbkNsaWNrfSAvPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgLmFkZC1xdWVzdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFkZC1xdWVzdGlvbiBidXR0b24ge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAwIDAgMmVtO1xuICAgICAgICAgIG1hcmdpbjogLjVlbSAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIGR0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1heC13aWR0aDogMTVlbTtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAuNWVtIC41ZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIG1hcmdpbjogMWVtIDJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgbGkucXVlc3Rpb24gYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0= */\n/*@ sourceURL=/home/ssceafson/Documents/Development/JavaScript/DevAnywhere.io/Lessons_HomeWork/Code/rejection/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/features/rejection/add-question/add-question-component.js":
/*!***********************************************************************!*\
  !*** ./src/features/rejection/add-question/add-question-component.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AddQuestion = function AddQuestion(_ref) {
  var questionRef = _ref.questionRef,
      askeeRef = _ref.askeeRef,
      handleAcceptedClick = _ref.handleAcceptedClick,
      handleRejectedClick = _ref.handleRejectedClick,
      handleUnansweredClick = _ref.handleUnansweredClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-question"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "question-input"
  }, "Question:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "question",
    id: "question-input",
    ref: questionRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "askee-input"
  }, "Askee:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "askee",
    id: "askee-input",
    ref: askeeRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "accepted",
    onClick: handleAcceptedClick
  }, "Accepted"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "rejected",
    onClick: handleRejectedClick
  }, "Rejected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "unanswered",
    onClick: handleUnansweredClick
  }, "Unanswered"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddQuestion);

/***/ }),

/***/ "./src/features/rejection/question-list/question-list-component.js":
/*!*************************************************************************!*\
  !*** ./src/features/rejection/question-list/question-list-component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question/question-component */ "./src/features/rejection/question/question-component.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var QuestionList = function QuestionList() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref$questions = _ref.questions,
      questions = _ref$questions === void 0 ? [] : _ref$questions,
      handleToggleQuestionStatusClick = _ref.handleToggleQuestionStatusClick,
      handleDeleteQuestionClick = _ref.handleDeleteQuestionClick;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "question-list"
  }, questions.map(function (question) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_question_component__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, question, {
      key: question.id,
      handleToggleQuestionStatusClick: handleToggleQuestionStatusClick,
      handleDeleteQuestionClick: handleDeleteQuestionClick
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionList);

/***/ }),

/***/ "./src/features/rejection/question/question-component.js":
/*!***************************************************************!*\
  !*** ./src/features/rejection/question/question-component.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Question = function Question() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      id = _ref.id,
      question = _ref.question,
      askee = _ref.askee,
      status = _ref.status,
      timestamp = _ref.timestamp,
      handleToggleQuestionStatusClick = _ref.handleToggleQuestionStatusClick,
      handleDeleteQuestionClick = _ref.handleDeleteQuestionClick;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "question"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Question: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "question"
  }, question), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Askee: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "askee"
  }, askee), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Status: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "status",
    onClick: function onClick(event) {
      return handleToggleQuestionStatusClick(id, status, event);
    }
  }, status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Answered: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "timestamp"
  }, timestamp ? new Date(timestamp).toLocaleString() : '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: function onClick(event) {
      return handleDeleteQuestionClick(id, event);
    }
  }, "Delete"));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ }),

/***/ "./src/features/rejection/rejection-reducer.js":
/*!*****************************************************!*\
  !*** ./src/features/rejection/rejection-reducer.js ***!
  \*****************************************************/
/*! exports provided: createQuestion, answerQuestion, deleteQuestion, default, getScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createQuestion", function() { return createQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "answerQuestion", function() { return answerQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteQuestion", function() { return deleteQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScore", function() { return getScore; });
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cuid */ "./node_modules/cuid/index.js");
/* harmony import */ var cuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cuid__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var createQuestion = function createQuestion() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      question = _ref.question,
      askee = _ref.askee,
      status = _ref.status;

  return {
    type: 'rejection-reducer/createQuestion',
    payload: {
      id: cuid__WEBPACK_IMPORTED_MODULE_0___default()(),
      timestamp: status !== 'Unanswered' ? Date.now() : null,
      question: question,
      askee: askee,
      status: status
    }
  };
};
var answerQuestion = function answerQuestion() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      id = _ref2.id,
      status = _ref2.status;

  return {
    type: 'rejection-reducer/answerQuestion',
    payload: {
      id: id,
      status: status
    }
  };
};
var deleteQuestion = function deleteQuestion() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      id = _ref3.id;

  return {
    type: 'rejection-reducer/deleteQuestion',
    payload: {
      id: id
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref4.type,
      payload = _ref4.payload;

  switch (type) {
    case createQuestion().type:
      return [].concat(_toConsumableArray(state), [payload]);

    case answerQuestion().type:
      return state.map(function (question) {
        if (question.id === payload.id) {
          return Object.assign({}, question, {
            status: payload.status
          });
        }

        return question;
      });

    case deleteQuestion().type:
      return state.filter(function (question) {
        return question.id !== payload.id;
      });

    default:
      return state;
  }
});

var getScore = function getScore(state) {
  return state.reduce(function (accumulator, next) {
    return accumulator + (next.status === 'Rejected' ? 10 : next.status === 'Accepted' ? 1 : 0);
  }, 0);
};



/***/ }),

/***/ "./src/features/rejection/score/score-component.js":
/*!*********************************************************!*\
  !*** ./src/features/rejection/score/score-component.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Score = function Score(_ref) {
  var score = _ref.score;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "score"
  }, "Rejection Score: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, score));
};

/* harmony default export */ __webpack_exports__["default"] = (Score);

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/*! exports provided: loadState, saveState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadState", function() { return loadState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveState", function() { return saveState; });
var loadState = function loadState() {
  try {
    var serializedState = localStorage.getItem('questions');

    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};
var saveState = function saveState(state) {
  try {
    localStorage.setItem('questions', JSON.stringify(state));
  } catch (error) {
    return undefined;
  }
};

/***/ }),

/***/ 1:
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fssceafson%2FDocuments%2FDevelopment%2FJavaScript%2FDevAnywhere.io%2FLessons_HomeWork%2FCode%2Frejection%2Fpages%2Findex.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fssceafson%2FDocuments%2FDevelopment%2FJavaScript%2FDevAnywhere.io%2FLessons_HomeWork%2FCode%2Frejection%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fssceafson%2FDocuments%2FDevelopment%2FJavaScript%2FDevAnywhere.io%2FLessons_HomeWork%2FCode%2Frejection%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

},[[1,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=index.js.map