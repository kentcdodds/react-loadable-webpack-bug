/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = Loadable;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isWebpack = typeof __webpack_require__ !== "undefined";
var requireFn = isWebpack ? __webpack_require__ : module.require;

var babelInterop = function babelInterop(obj) {
  // $FlowIgnore
  return obj && obj.__esModule ? obj.default : obj;
};

var tryRequire = function tryRequire(pathOrId) {
  try {
    if (isWebpack && !__webpack_require__.m[pathOrId]) {
      // if it's not in webpack modules, we wont be able
      // to load it. If we attempt to, we mess up webpack's
      // internal state, so we exit early
      return null;
    }
    // $FlowIgnore
    return babelInterop(requireFn(pathOrId));
  } catch (err) {}
  return null;
};

function Loadable(opts) {
  var loader = opts.loader;
  var LoadingComponent = opts.LoadingComponent;
  var delay = opts.delay || 200;
  var serverSideRequirePath = opts.serverSideRequirePath;
  var webpackRequireWeakId = opts.webpackRequireWeakId;

  var isLoading = false;

  var outsideComponent = null;
  var outsidePromise = null;
  var outsideError = null;

  if (serverSideRequirePath) {
    outsideComponent = tryRequire(serverSideRequirePath);
  }

  if (isWebpack && webpackRequireWeakId) {
    outsideComponent = tryRequire(webpackRequireWeakId());
  }

  var load = function load() {
    if (!outsidePromise) {
      isLoading = true;
      outsidePromise = loader().then(function (Component) {
        isLoading = false;
        outsideComponent = babelInterop(Component);
      }).catch(function (error) {
        isLoading = false;
        outsideError = error;
      });
    }
    return outsidePromise;
  };

  return function (_React$Component) {
    _inherits(Loadable, _React$Component);

    function Loadable() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Loadable);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Loadable.__proto__ || Object.getPrototypeOf(Loadable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        error: outsideError,
        pastDelay: false,
        Component: outsideComponent
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Loadable, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        var _this2 = this;

        this._mounted = true;

        if (this.state.Component) {
          return;
        }

        this._timeout = setTimeout(function () {
          _this2.setState({ pastDelay: true });
        }, delay);

        load().then(function () {
          if (!_this2._mounted) return;
          clearTimeout(_this2._timeout);
          _this2.setState({
            error: outsideError,
            pastDelay: false,
            Component: outsideComponent
          });
        });
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._mounted = false;
        clearTimeout(this._timeout);
      }
    }, {
      key: "render",
      value: function render() {
        var _state = this.state,
            pastDelay = _state.pastDelay,
            error = _state.error,
            Component = _state.Component;


        if (isLoading || error) {
          return _react2.default.createElement(LoadingComponent, {
            isLoading: isLoading,
            pastDelay: pastDelay,
            error: error
          });
        } else if (Component) {
          return _react2.default.createElement(Component, this.props);
        } else {
          return null;
        }
      }
    }], [{
      key: "preload",
      value: function preload() {
        load();
      }
    }]);

    return Loadable;
  }(_react2.default.Component);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kentcdodds_temp_react_loadable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kentcdodds_temp_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__kentcdodds_temp_react_loadable__);



/***/ })
/******/ ]);