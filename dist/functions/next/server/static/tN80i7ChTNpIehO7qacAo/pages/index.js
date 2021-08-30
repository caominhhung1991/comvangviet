module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		8: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"b75db16ce4f2a534509f","12":"2d69c8870766c7560481","13":"dacfa778d4f30e193b8a","14":"612b0ae686d05cca8660","15":"c7ee7bdb8bb0b36a3480","16":"eabe0f4901f061e2f1e1","17":"3f2d6bc866802c30eb27","18":"9012874a8d432f0085f3","19":"e86f76b08801d1d109e6","20":"668d5c0f2c6b047dcf08"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1/UH":
/***/ (function(module, exports) {



/***/ }),

/***/ "1nAM":
/***/ (function(module, exports) {

module.exports = require("swiper");

/***/ }),

/***/ "2MIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("7xIC");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "675j":
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/addons/MarkerWithLabel");

/***/ }),

/***/ "7xIC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("pONU");

var _interopRequireDefault = __webpack_require__("Y3ZS");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("L9lV"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("wsRY");

var _withRouter = _interopRequireDefault(__webpack_require__("2MIm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "AxI1":
/***/ (function(module, exports) {



/***/ }),

/***/ "Axa1":
/***/ (function(module, exports) {



/***/ }),

/***/ "F6ED":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: /Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/node_modules/next/link.js
var next_link = __webpack_require__("jvFD");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");

// EXTERNAL MODULE: ./components/Header/Header.scss
var Header = __webpack_require__("1/UH");

// CONCATENATED MODULE: ./constants/app-constants.js
const PAGES = {
  TRANG_CHU: '/',
  GIOI_THIEU: '/gioi-thieu',
  DICH_VU: '/dich-vu',
  TIN_TUC: '/tin-tuc',
  TUYEN_DUNG: '/tuyen-dung',
  LIEN_HE: '/lien-he'
};
// EXTERNAL MODULE: ./components/Header/MenuIcon/MenuIcon.scss
var MenuIcon = __webpack_require__("anpB");

// CONCATENATED MODULE: ./components/Header/MenuIcon/MenuIcon.js
var __jsx = external_react_default.a.createElement;



const MenuIcon_MenuIcon = props => {
  let menuIconClass = props.isClicked === true ? "MenuIcon Open" : "MenuIcon";
  return __jsx("div", {
    className: menuIconClass,
    onClick: props.clickHandle
  }, __jsx("span", {
    className: "MenuIcon__Span"
  }), __jsx("span", {
    className: "MenuIcon__Span"
  }), __jsx("span", {
    className: "MenuIcon__Span"
  }));
};

/* harmony default export */ var Header_MenuIcon_MenuIcon = (MenuIcon_MenuIcon);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./components/Header/Sidebar/Sidebar.scss
var Sidebar_Sidebar = __webpack_require__("Axa1");

// CONCATENATED MODULE: ./components/Header/Sidebar/Sidebar.js
var Sidebar_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const logo = '/static/logo.gif';
const propsTypes = {
  isClicked: external_prop_types_default.a.bool,
  clickHandle: external_prop_types_default.a.func
};
let sidebar;
let overlay;
class Sidebar_Sidebar_Sidebar extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openSidebar", () => {
      sidebar.style.transform = "translateX(0px)";
      overlay.style.display = "block";
    });

    _defineProperty(this, "closeSidebar", () => {
      sidebar.style.transform = "translateX(-280px)";
      overlay.style.display = "none";
    });

    _defineProperty(this, "componentDidMount", () => {
      sidebar = document.getElementById("sidebar01");
      overlay = document.getElementById("sidebar_overlay");
    });
  }

  render() {
    return Sidebar_jsx(external_react_default.a.Fragment, null, Sidebar_jsx("div", {
      id: "sidebar01",
      className: "SideNav"
    }, Sidebar_jsx("div", {
      className: "SideNav__Menu__Header"
    }, Sidebar_jsx("img", {
      className: "Header__Logo mr-2",
      src: logo,
      alt: "OSAC LOGO"
    }), "Osac Service"), Sidebar_jsx("hr", null), Sidebar_jsx("a", {
      onClick: () => {
        this.closeSidebar();
        this.props.clickHandle();
      },
      className: "SideNav__Link",
      href: "/"
    }, "Trang Ch\u1EE7"), Sidebar_jsx("hr", null), Sidebar_jsx("a", {
      onClick: () => {
        this.closeSidebar();
        this.props.clickHandle();
      },
      className: "SideNav__Link",
      href: "/"
    }, "Gi\u1EDBi thi\u1EC7u"), Sidebar_jsx("hr", null), Sidebar_jsx("a", {
      onClick: () => {
        this.closeSidebar();
        this.props.clickHandle();
      },
      className: "SideNav__Link",
      href: "/"
    }, "D\u1ECBch v\u1EE5"), Sidebar_jsx("hr", null), Sidebar_jsx("a", {
      onClick: () => {
        this.closeSidebar();
        this.props.clickHandle();
      },
      className: "SideNav__Link",
      href: "/"
    }, "Tin T\u1EE9c"), Sidebar_jsx("hr", null), Sidebar_jsx("a", {
      onClick: () => {
        this.closeSidebar();
        this.props.clickHandle();
      },
      className: "SideNav__Link",
      href: "/"
    }, "Tuy\u1EC3n d\u1EE5ng"), Sidebar_jsx("hr", null), Sidebar_jsx("a", {
      onClick: () => {
        this.closeSidebar();
        this.props.clickHandle();
      },
      className: "SideNav__Link",
      href: "/"
    }, "Li\xEAn h\u1EC7"), Sidebar_jsx("hr", null)), Sidebar_jsx("div", {
      id: "sidebar_overlay",
      onClick: this.props.clickHandle
    }));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      isClicked
    } = this.props;

    if (isClicked) {
      this.openSidebar();
    } else {
      this.closeSidebar();
    }
  }

}
Sidebar_Sidebar_Sidebar.propsTypes = propsTypes;
/* harmony default export */ var Header_Sidebar_Sidebar = (Sidebar_Sidebar_Sidebar);
// CONCATENATED MODULE: ./components/Header/Header.js
var Header_jsx = external_react_default.a.createElement;








const flag_english = '/static/img/flag_english.png';
const flag_vietnam = 'static/img/flag_vietnam.png';

const Header_Header = props => {
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(PAGES.TRANG_CHU);
  const {
    0: isClicked,
    1: _setClicked
  } = Object(external_react_["useState"])(false);
  const {
    0: isChoosedFlagVN,
    1: _setChoosedFlagVN
  } = Object(external_react_["useState"])(true);
  const router = Object(router_["useRouter"])();
  const asPath = router.asPath; // console.log({asPath})

  const _clickMenuIconHandle = () => {
    _setClicked(!isClicked);
  };

  const _chooseFlagHandle = flag => {
    _setChoosedFlagVN(flag !== 'english');
  };

  let flagVNClass = isChoosedFlagVN === true ? 'Header__Flag__Choosed' : '';
  let flagENClass = isChoosedFlagVN === false ? 'Header__Flag__Choosed' : '';
  let trangChuClass = asPath === PAGES.TRANG_CHU ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  let gioiThieuClass = asPath === PAGES.GIOI_THIEU ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  let dichVuClass = asPath === PAGES.DICH_VU ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  let tinTucClass = asPath === PAGES.TIN_TUC ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  let tuyenDungClass = asPath === PAGES.TUYEN_DUNG ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  let lienHeClass = asPath === PAGES.LIEN_HE ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  return Header_jsx("div", {
    className: "Header"
  }, Header_jsx("div", {
    className: "Header__Contact"
  }, Header_jsx("a", {
    className: "Header__Contact__Link",
    href: "https://www.facebook.com/comvangviet",
    target: "_blank"
  }, Header_jsx("i", {
    className: "fa fa-facebook-official"
  }), " ", Header_jsx("span", {
    className: "Header__Contact__Content"
  }, "comvangviet.com")), Header_jsx("span", null, "|"), Header_jsx("a", {
    className: "Header__Contact__Link",
    href: "tel:0363575468"
  }, Header_jsx("i", {
    className: "fa fa-phone"
  }), " ", Header_jsx("span", {
    className: "Header__Contact__Content"
  }, "(+84) 363.575.468")), Header_jsx("span", null, "|"), Header_jsx("a", {
    className: "Header__Contact__Link",
    href: "mailto:sales@comvangviet.com"
  }, Header_jsx("i", {
    className: "fa fa-envelope"
  }), " ", Header_jsx("span", {
    className: "Header__Contact__Content"
  }, "sales@comvangviet.com"))), Header_jsx("div", {
    className: "Header__Navigation"
  }, Header_jsx(link_default.a, {
    href: '/'
  }, Header_jsx("img", {
    className: "Header__Logo",
    src: "/static/logo.png",
    alt: "COM VANG VIET LOGO"
  })), Header_jsx("div", {
    className: "Header__Nav"
  }, Header_jsx(link_default.a, {
    href: PAGES.TRANG_CHU
  }, Header_jsx("a", {
    className: trangChuClass,
    onClick: () => setPage(PAGES.TRANG_CHU)
  }, "Trang Ch\u1EE7")), Header_jsx(link_default.a, {
    href: PAGES.GIOI_THIEU
  }, Header_jsx("a", {
    className: gioiThieuClass,
    onClick: () => setPage(PAGES.GIOI_THIEU)
  }, "Gi\u1EDBi thi\u1EC7u")), Header_jsx(link_default.a, {
    href: PAGES.TUYEN_DUNG
  }, Header_jsx("a", {
    className: tuyenDungClass,
    onClick: () => setPage(PAGES.TUYEN_DUNG)
  }, "Tuy\u1EC3n d\u1EE5ng")), Header_jsx(link_default.a, {
    href: PAGES.LIEN_HE
  }, Header_jsx("a", {
    className: lienHeClass,
    onClick: () => setPage(PAGES.LIEN_HE)
  }, "Li\xEAn h\u1EC7"))), Header_jsx("div", {
    className: "Header__Flag"
  }, Header_jsx("img", {
    className: ['Header__Flag__Item', flagVNClass].join(' '),
    src: flag_english,
    alt: "OSAC Service",
    onClick: () => _chooseFlagHandle('english')
  }), Header_jsx("img", {
    className: ['Header__Flag__Item', flagENClass].join(' '),
    src: flag_vietnam,
    alt: "OSAC Service",
    onClick: () => _chooseFlagHandle('vietnam')
  })), Header_jsx(Header_MenuIcon_MenuIcon, {
    isClicked: isClicked,
    clickHandle: _clickMenuIconHandle
  }), Header_jsx(Header_Sidebar_Sidebar, {
    isClicked: isClicked,
    clickHandle: _clickMenuIconHandle
  })));
};

/* harmony default export */ var components_Header_Header = (Header_Header);
// EXTERNAL MODULE: ./components/Footer/Footer.scss
var Footer = __webpack_require__("AxI1");

// EXTERNAL MODULE: ./components/shared/MyGoogleMap/MyGoogleMap.js
var MyGoogleMap = __webpack_require__("FWYH");

// CONCATENATED MODULE: ./components/Footer/Footer.js
var Footer_jsx = external_react_default.a.createElement;






const Footer_Footer = () => {
  const {
    0: _diadiem,
    1: _setDiadiem
  } = Object(external_react_["useState"])(MyGoogleMap["b" /* diadiems */].vanphong);
  const isVanPhong = MyGoogleMap["b" /* diadiems */].vanphong.id === _diadiem.id;
  const isXuongSX = MyGoogleMap["b" /* diadiems */].xuongSX.id === _diadiem.id;
  return Footer_jsx("div", {
    className: "Footer"
  }, Footer_jsx("div", {
    className: "Footer__Website"
  }, Footer_jsx("h2", {
    className: "Footer__Website__Company"
  }, "C\u01A1m V\xE0ng Vi\u1EC7t"), Footer_jsx("h4", {
    className: "Footer__Website__Address"
  }, "comvangviet.com")), Footer_jsx("div", {
    className: "Footer__Content"
  }, Footer_jsx("div", {
    className: "Footer__Content__Left"
  }, Footer_jsx("div", {
    className: "Footer__Column Footer__Column1"
  }, Footer_jsx("div", {
    className: "Footer__Title"
  }, "Li\xEAn h\u1EC7"), Footer_jsx("a", {
    className: "Footer__Info",
    href: "tel:0363575468"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-phone"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, "(+84) 363.575.468")), Footer_jsx("a", {
    className: "Footer__Info",
    href: "http://osac.vn"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-desktop"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, "comvangviet.com")), Footer_jsx("a", {
    className: "Footer__Info",
    href: "mailto:hoangviet@osac.vn?subject=Subject Using Mailto.co.uk&body=Email Using Body"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-envelope"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, "sales@comvangviet.com")), Footer_jsx("div", {
    className: "Footer__Info"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-address-book"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text Footer__Address"
  }, Footer_jsx("div", {
    className: "Footer__Address__Title"
  }, "V\u0102N PH\xD2NG C\u01A0M V\xC0NG VI\u1EC6T"), Footer_jsx("div", {
    className: "Footer__Address__Content"
  }, "Xu\xE2n Th\u1EA1nh, Th\u1ED1ng Nh\u1EA5t, \u0110\u1ED3ng Nai")))), Footer_jsx("div", {
    className: "Footer__Column Footer__Column2"
  }, Footer_jsx("div", {
    className: "Footer__Title"
  }, "Menu"), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx(link_default.a, {
    href: PAGES.TRANG_CHU
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link"
  }, "Trang ch\u1EE7")))), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx(link_default.a, {
    href: PAGES.GIOI_THIEU
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link"
  }, "Gi\u1EDBi thi\u1EC7u")))), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx(link_default.a, {
    href: PAGES.DICH_VU
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link"
  }, "D\u1ECBch v\u1EE5")))), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx(link_default.a, {
    href: PAGES.TUYEN_DUNG
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link"
  }, "Tuy\u1EC3n d\u1EE5ng"))))), Footer_jsx("div", {
    className: "Footer__Column Footer__Column3"
  }, Footer_jsx("div", {
    className: "Footer__Title"
  }, "M\u1EA1ng x\xE3 h\u1ED9i"), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-facebook-official"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link",
    href: "https://www.facebook.com/comvangviet",
    target: "_blank"
  }, "Facebook")))), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-instagram"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link",
    href: "https://www.instagram.com/comvangviet/",
    target: "_blank"
  }, "Instagram")))), Footer_jsx("div", {
    className: "Footer__Menu"
  }, Footer_jsx("div", {
    className: "Footer__Info"
  }, Footer_jsx("div", {
    className: "Footer__Info__Icon"
  }, Footer_jsx("i", {
    className: "fa fa-youtube"
  })), Footer_jsx("div", {
    className: "Footer__Info__Text"
  }, Footer_jsx("a", {
    className: "Footer__Menu__Link",
    href: "https://www.youtube.com/channel",
    target: "_blank"
  }, "Youtube")))))), Footer_jsx("div", {
    className: "Footer__Content__Right"
  }, Footer_jsx("div", {
    className: "map__title"
  }, Footer_jsx("div", {
    className: ['map__title__item', isVanPhong ? 'map--active' : ''].join(' '),
    onClick: () => {
      _setDiadiem(MyGoogleMap["b" /* diadiems */].vanphong);
    }
  }, String(MyGoogleMap["b" /* diadiems */].vanphong.name).toUpperCase())))));
};

/* harmony default export */ var components_Footer_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/withLayout.js
var withLayout_jsx = external_react_default.a.createElement;




const jquery = 'https://code.jquery.com/jquery-3.3.1.slim.min.js';
const popper = 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js';
const bootstrap = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js';
const recaptchaAPI = 'https://www.google.com/recaptcha/api.js?render=explicit';

const withLayout = props => {
  const {
    children
  } = props;
  Object(external_react_["useEffect"])(() => {
    window.fbAsyncInit = function () {
      FB.init({
        xfbml: true,
        version: 'v4.0'
      });
    };

    (function (d, s, id) {
      var js,
          fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
  return withLayout_jsx("div", null, withLayout_jsx(head_default.a, null, withLayout_jsx("title", null, "C\xF4ng Ty Su\u1EA5t \u0102n C\xF4ng Nghi\u1EC7p C\u01A1m V\xE0ng Vi\u1EC7t"), withLayout_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    key: "viewport"
  }), withLayout_jsx("meta", {
    name: "description",
    content: "C\u01A1m V\xE0ng Vi\u1EC7t cung c\u1EA5p su\u1EA5t \u0103n c\xF4ng nghi\u1EC7p"
  }), withLayout_jsx("meta", {
    property: "og:image:width",
    content: "600"
  }), withLayout_jsx("meta", {
    property: "og:image:height",
    content: "315"
  }), withLayout_jsx("meta", {
    property: "og:description",
    content: "Su\u1EA5t \u0103n c\xF4ng nghi\u1EC7p"
  }), withLayout_jsx("meta", {
    property: "og:site_name",
    content: "osac.vn"
  }), withLayout_jsx("meta", {
    id: "og-image",
    property: "og:image",
    content: "https://s3-us-west-2.amazonaws.com/chotroi/osac/OSAC-image-share.jpg"
  }), withLayout_jsx("meta", {
    property: "og:image",
    content: "C\u01A1m V\xE0ng Vi\u1EC7t - suat an cong nghiep"
  }), withLayout_jsx("link", {
    rel: "shortcut icon",
    href: "/static/favicon.ico"
  }), withLayout_jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Lobster&display=swap",
    rel: "stylesheet"
  }), withLayout_jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  }), withLayout_jsx("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  }), withLayout_jsx("script", {
    src: recaptchaAPI,
    async: true,
    defer: true
  }), withLayout_jsx("script", {
    src: jquery
  }), withLayout_jsx("script", {
    src: popper
  })), withLayout_jsx(components_Header_Header, null), withLayout_jsx("div", null, children), withLayout_jsx("div", {
    id: "fb-root"
  }), withLayout_jsx(components_Footer_Footer, null), withLayout_jsx("footer", null, withLayout_jsx("script", {
    src: bootstrap
  })));
};

/* harmony default export */ var components_withLayout = __webpack_exports__["a"] = (withLayout);

/***/ }),

/***/ "FWYH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return diadiems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("NnCY");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9Tpg");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("675j");
/* harmony import */ var react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const diadiems = {
  xuongSX: {
    id: 'xuongSX',
    name: 'Chi nhánh Osac Bình Dương',
    address: '40 Đường số 3, Hòa Phú, Thủ Dầu Một, Bình Dương',
    lat: 11.0638593,
    lng: 106.6936421
  },
  vanphong: {
    id: 'vanphong',
    name: 'Văn phòng Cơm Vàng Việt',
    address: '..., Hồ Chí Minh',
    lat: 10.8216284,
    lng: 106.8065395
  }
};
const MyGoogleMap = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBGh8mfCJKIwUNmlK5kq6PY1hXWT1gdwHM&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: `100%`
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: `350px`
    }
  }),
  mapElement: __jsx("div", {
    style: {
      height: `100%`
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(props => {
  const {
    place
  } = props;
  const {
    0: isMarkerClicked,
    1: setIsMarketClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const diadiem = diadiems[place] || diadiems.vanphong;
  const center = {
    lat: diadiem.lat,
    lng: diadiem.lng
  };
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
    defaultZoom: 14,
    center: center
  }, __jsx(react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3__["MarkerWithLabel"], {
    position: center,
    labelAnchor: new window.google.maps.Point(130, 70),
    labelStyle: {
      backgroundColor: "white",
      fontSize: "11px",
      padding: "5px"
    },
    onClick: () => setIsMarketClicked(!isMarkerClicked)
  }, isMarkerClicked ? __jsx("div", null, diadiem.address) : __jsx("div", null)));
});
/* harmony default export */ __webpack_exports__["a"] = (MyGoogleMap);

/***/ }),

/***/ "KeDb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("Y3ZS");

var _interopRequireWildcard = __webpack_require__("pONU");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("fvxO");

var _router = _interopRequireDefault(__webpack_require__("7xIC"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "L9lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("YBsB"));

const utils_1 = __webpack_require__("fvxO");

const is_dynamic_1 = __webpack_require__("Lko9");

const route_matcher_1 = __webpack_require__("TBBy");

const route_regex_1 = __webpack_require__("uChv");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "Lko9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "NnCY":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_withLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("F6ED");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SliderHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "OcDW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("OcDW")],
    modules: ['../components/Slider/SliderHeader']
  }
});
const Introduce = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "GfiW")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("GfiW")],
    modules: ['../components/Introduce/Introduce']
  }
});
const Story = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 13).then(__webpack_require__.bind(null, "ywOc")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("ywOc")],
    modules: ['../components/Story/Story']
  }
});
const ItemServices = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "cCqs")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("cCqs")],
    modules: ['../components/ItemServices/ItemServices']
  }
});
const Reason = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "W3Mb")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("W3Mb")],
    modules: ['../components/Reason/Reason']
  }
});
const News = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "xSYh")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("xSYh")],
    modules: ['../components/News/News']
  }
});
const Partners = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "NLhV")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("NLhV")],
    modules: ['../components/Partners/Partners']
  }
});

const Index = props => {
  return __jsx(_components_withLayout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/swiper/swiper-bundle.min.css"
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Pacifico&display=swap",
    rel: "stylesheet"
  }), __jsx(SliderHeader, null), __jsx(Introduce, null), __jsx(Story, null), __jsx(ItemServices, null), __jsx(Reason, null), __jsx(Partners, props));
};

Index.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()('https://osac-a381e.firebaseio.com/website/tintucs.json');
  const tintucs = await res.json();
  return {
    tintucs
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "TBBy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "Y3ZS":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YBsB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "anpB":
/***/ (function(module, exports) {



/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eqbg":
/***/ (function(module, exports) {

module.exports = require("react-gsap");

/***/ }),

/***/ "fvxO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "i2RQ":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "jvFD":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("KeDb")


/***/ }),

/***/ "pONU":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("i2RQ");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "uChv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "wsRY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "yBWC":
/***/ (function(module, exports) {

module.exports = require("react-scrollmagic");

/***/ })

/******/ });