(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });


void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/components/Router.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/components/Router.js");
  }
}();

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/augusto/workspace/starsona/magic-links/src/components/Router.js
var Router = __webpack_require__(2);

// CONCATENATED MODULE: /Users/augusto/workspace/starsona/magic-links/src/containers/Dynamic.js


var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/containers/Dynamic.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/containers/Dynamic.js",
    _this = undefined;


/* harmony default export */ var Dynamic = (function () {
  var _React$createElement;

  return /*#__PURE__*/external_react_default.a.createElement("div", (_React$createElement = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, defineProperty_default()(_React$createElement, "__self", _this), defineProperty_default()(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 4,
    columnNumber: 3
  }), _React$createElement), "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/containers/Dynamic.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/containers/Dynamic.js");
  }
}();
// EXTERNAL MODULE: /Users/augusto/workspace/starsona/magic-links/src/app.css
var app = __webpack_require__(28);

// CONCATENATED MODULE: /Users/augusto/workspace/starsona/magic-links/src/App.js

var App_jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/App.js",
    App_jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/App.js";

 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5, _React$createElement6, _React$createElement7, _React$createElement8, _React$createElement9, _React$createElement10, _React$createElement11, _React$createElement12;

  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], (_React$createElement12 = {
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, defineProperty_default()(_React$createElement12, "__self", this), defineProperty_default()(_React$createElement12, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 14,
    columnNumber: 5
  }), _React$createElement12), /*#__PURE__*/external_react_default.a.createElement("nav", (_React$createElement5 = {
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, defineProperty_default()(_React$createElement5, "__self", this), defineProperty_default()(_React$createElement5, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 15,
    columnNumber: 7
  }), _React$createElement5), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], (_React$createElement = {
    to: "/",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, defineProperty_default()(_React$createElement, "__self", this), defineProperty_default()(_React$createElement, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 16,
    columnNumber: 9
  }), _React$createElement), "Home"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], (_React$createElement2 = {
    to: "/about",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, defineProperty_default()(_React$createElement2, "__self", this), defineProperty_default()(_React$createElement2, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 17,
    columnNumber: 9
  }), _React$createElement2), "About"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], (_React$createElement3 = {
    to: "/talent",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, defineProperty_default()(_React$createElement3, "__self", this), defineProperty_default()(_React$createElement3, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 18,
    columnNumber: 9
  }), _React$createElement3), "Talent"), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], (_React$createElement4 = {
    to: "/dynamic",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, defineProperty_default()(_React$createElement4, "__self", this), defineProperty_default()(_React$createElement4, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 19,
    columnNumber: 9
  }), _React$createElement4), "Dynamic")), /*#__PURE__*/external_react_default.a.createElement("div", (_React$createElement11 = {
    className: "content",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, defineProperty_default()(_React$createElement11, "__self", this), defineProperty_default()(_React$createElement11, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 21,
    columnNumber: 7
  }), _React$createElement11), /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, (_React$createElement10 = {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", (_React$createElement6 = {
      __self: this,
      __source: {
        fileName: App_jsxFileName,
        lineNumber: 22,
        columnNumber: 35
      }
    }, defineProperty_default()(_React$createElement6, "__self", this), defineProperty_default()(_React$createElement6, "__source", {
      fileName: App_jsxFileName2,
      lineNumber: 22,
      columnNumber: 35
    }), _React$createElement6), "Loading..."),
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, defineProperty_default()(_React$createElement10, "__self", this), defineProperty_default()(_React$createElement10, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 22,
    columnNumber: 9
  }), _React$createElement10), /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], (_React$createElement9 = {
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, defineProperty_default()(_React$createElement9, "__self", this), defineProperty_default()(_React$createElement9, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 23,
    columnNumber: 11
  }), _React$createElement9), /*#__PURE__*/external_react_default.a.createElement(Dynamic, (_React$createElement7 = {
    path: "dynamic",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, defineProperty_default()(_React$createElement7, "__self", this), defineProperty_default()(_React$createElement7, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 24,
    columnNumber: 13
  }), _React$createElement7)), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], (_React$createElement8 = {
    path: "*",
    __self: this,
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, defineProperty_default()(_React$createElement8, "__self", this), defineProperty_default()(_React$createElement8, "__source", {
    fileName: App_jsxFileName2,
    lineNumber: 25,
    columnNumber: 13
  }), _React$createElement8))))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/App.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/App.js");
  }
}();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("/usr/local/lib/node_modules/react-static/lib/browser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(1));

var _reactStatic = __webpack_require__(3);

var _router = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/node_modules/react-static-plugin-reach-router/browser.api.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/node_modules/react-static-plugin-reach-router/browser.api.js");
  }
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(11);
__webpack_require__(13);
module.exports = __webpack_require__(20);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(12)["default"];

var _require = __webpack_require__(7),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/usr/local/lib/node_modules/react-static/lib/bootstrapPlugins.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/usr/local/lib/node_modules/react-static/lib/bootstrapPlugins.js");
  }
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/artifacts/react-static-browser-plugins.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/artifacts/react-static-browser-plugins.js");
  }
}();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(7),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(14),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/usr/local/lib/node_modules/react-static/lib/bootstrapTemplates.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/usr/local/lib/node_modules/react-static/lib/bootstrapTemplates.js");
  }
}();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': __webpack_require__(15)["default"],
  '__react_static_root__/src/pages/about.js': __webpack_require__(16)["default"],
  '__react_static_root__/src/pages/index.js': __webpack_require__(17)["default"],
  '__react_static_root__/src/pages/talent.js': __webpack_require__(18)["default"],
  '__react_static_root__/src/containers/Star': __webpack_require__(19)["default"]
});
var notFoundTemplate = '__react_static_root__/src/pages/404.js';
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/artifacts/react-static-templates.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/artifacts/react-static-templates.js");
  }
}();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/pages/404.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/pages/404.js",
    _this = undefined;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$createElement, _React$createElement2;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", (_React$createElement2 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 4,
    columnNumber: 3
  }), _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", (_React$createElement = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 5,
    columnNumber: 5
  }), _React$createElement), "404 - Oh no's! We couldn't find that page :("));
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/pages/404.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/pages/404.js");
  }
}();

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/pages/about.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/pages/about.js",
    _this = undefined;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$createElement, _React$createElement2;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", (_React$createElement2 = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 4,
    columnNumber: 3
  }), _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", (_React$createElement = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 5,
    columnNumber: 5
  }), _React$createElement), "React Static is a progressive static site generator for React."));
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/pages/about.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/pages/about.js");
  }
}();

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/pages/index.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/pages/index.js",
    _this = undefined;


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _React$createElement, _React$createElement2;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", (_React$createElement2 = {
    style: {
      textAlign: 'center'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 3
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 4,
    columnNumber: 3
  }), _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", (_React$createElement = {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 5,
    columnNumber: 5
  }), _React$createElement), "Welcome to React-Static"));
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/pages/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/pages/index.js");
  }
}();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Talent; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);

var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/pages/talent.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/pages/talent.js";

 //


function Talent() {
  var _React$createElement,
      _React$createElement2,
      _React$createElement3,
      _React$createElement4,
      _this = this,
      _React$createElement7,
      _React$createElement8,
      _React$createElement9;

  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      talent = _useRouteData.talent;

  console.log('talent got from route: ', talent);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", (_React$createElement9 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement9, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement9, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 10,
    columnNumber: 5
  }), _React$createElement9), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", (_React$createElement = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 11,
    columnNumber: 7
  }), _React$createElement), "It's talent time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", (_React$createElement3 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement3, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement3, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 12,
    columnNumber: 7
  }), _React$createElement3), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", (_React$createElement2 = {
    href: "#bottom",
    id: "top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 13,
    columnNumber: 9
  }), _React$createElement2), "Scroll to bottom!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", (_React$createElement4 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement4, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement4, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 17,
    columnNumber: 7
  }), _React$createElement4)), "All Talent:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", (_React$createElement7 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement7, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement7, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 19,
    columnNumber: 7
  }), _React$createElement7), talent.map(function (star) {
    var _React$createElement5, _React$createElement6;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", (_React$createElement6 = {
      key: star.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement6, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement6, "__source", {
      fileName: _jsxFileName2,
      lineNumber: 21,
      columnNumber: 11
    }), _React$createElement6), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], (_React$createElement5 = {
      to: "/talent/".concat(star.id, "/"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement5, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement5, "__source", {
      fileName: _jsxFileName2,
      lineNumber: 22,
      columnNumber: 13
    }), _React$createElement5), "".concat(star.first_name, " ").concat(star.last_name)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", (_React$createElement8 = {
    href: "#top",
    id: "bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement8, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement8, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 26,
    columnNumber: 7
  }), _React$createElement8), "Scroll to top!"));
}
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/pages/talent.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/pages/talent.js");
  }
}();

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Star; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);

var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/containers/Star.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/containers/Star.js";

 //


function Star() {
  var _React$createElement, _React$createElement2, _React$createElement3, _React$createElement4, _React$createElement5;

  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      star = _useRouteData.star;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", (_React$createElement5 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement5, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement5, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 9,
    columnNumber: 5
  }), _React$createElement5), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], (_React$createElement = {
    to: "/talent/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 10,
    columnNumber: 7
  }), _React$createElement), '<', " Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", (_React$createElement2 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 11,
    columnNumber: 7
  }), _React$createElement2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", (_React$createElement3 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement3, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement3, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 12,
    columnNumber: 7
  }), _React$createElement3), star.first_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", (_React$createElement4 = {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement4, "__self", this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement4, "__source", {
    fileName: _jsxFileName2,
    lineNumber: 13,
    columnNumber: 7
  }), _React$createElement4), star.email));
}
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/containers/Star.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/containers/Star.js");
  }
}();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(21);

var _interopRequireDefault = __webpack_require__(22);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(23));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(24));

var React = _interopRequireWildcard(__webpack_require__(1));

var _useStaticInfo = __webpack_require__(25);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(26)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/usr/local/lib/node_modules/react-static/lib/bootstrapApp.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/usr/local/lib/node_modules/react-static/lib/bootstrapApp.js");
  }
}();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("/usr/local/lib/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);


var _jsxFileName = "/Users/augusto/workspace/starsona/magic-links/src/index.js",
    _jsxFileName2 = "/Users/augusto/workspace/starsona/magic-links/src/index.js",
    _this = undefined;



 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render;

  var render = function render(Comp) {
    var _React$createElement, _React$createElement2;

    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_3__["AppContainer"], (_React$createElement2 = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement2, "__source", {
      fileName: _jsxFileName2,
      lineNumber: 21,
      columnNumber: 7
    }), _React$createElement2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Comp, (_React$createElement = {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__self", _this), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_React$createElement, "__source", {
      fileName: _jsxFileName2,
      lineNumber: 22,
      columnNumber: 9
    }), _React$createElement))), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]);
    });
  }
}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/Users/augusto/workspace/starsona/magic-links/src/index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/Users/augusto/workspace/starsona/magic-links/src/index.js");
  }
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/usr/local/lib/node_modules/react-static/node_modules/webpack/buildin/harmony-module.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/usr/local/lib/node_modules/react-static/node_modules/webpack/buildin/harmony-module.js");
  }
}();

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "/usr/local/lib/node_modules/react-static/node_modules/css-loader/dist/runtime/api.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "/usr/local/lib/node_modules/react-static/node_modules/css-loader/dist/runtime/api.js");
  }
}();

/***/ })
/******/ ]);
});