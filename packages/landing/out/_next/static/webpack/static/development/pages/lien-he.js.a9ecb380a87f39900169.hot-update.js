webpackHotUpdate("static/development/pages/lien-he.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "../../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/app-constants */ "./constants/app-constants.js");
/* harmony import */ var _MenuIcon_MenuIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuIcon/MenuIcon */ "./components/Header/MenuIcon/MenuIcon.js");
/* harmony import */ var _Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Sidebar/Sidebar */ "./components/Header/Sidebar/Sidebar.js");
var _this = undefined,
    _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/Header/Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var flag_english = '/static/img/flag_english.png';
var flag_vietnam = 'static/img/flag_vietnam.png';

var Header = function Header(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TRANG_CHU),
      page = _useState[0],
      setPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isClicked = _useState2[0],
      _setClicked = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isChoosedFlagVN = _useState3[0],
      _setChoosedFlagVN = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var asPath = router.asPath; // console.log({asPath})

  var _clickMenuIconHandle = function _clickMenuIconHandle() {
    _setClicked(!isClicked);
  };

  var _chooseFlagHandle = function _chooseFlagHandle(flag) {
    _setChoosedFlagVN(flag !== 'english');
  };

  var flagVNClass = isChoosedFlagVN === true ? 'Header__Flag__Choosed' : '';
  var flagENClass = isChoosedFlagVN === false ? 'Header__Flag__Choosed' : '';
  var trangChuClass = asPath === _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TRANG_CHU ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  var gioiThieuClass = asPath === _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].GIOI_THIEU ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  var dichVuClass = asPath === _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].DICH_VU ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  var tinTucClass = asPath === _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TIN_TUC ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  var tuyenDungClass = asPath === _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TUYEN_DUNG ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  var lienHeClass = asPath === _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].LIEN_HE ? 'Header__Nav__Item Active' : 'Header__Nav__Item';
  return __jsx("div", {
    className: "Header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "Header__Contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "Header__Contact__Link",
    href: "https://www.facebook.com/comvangviet",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-facebook-official",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), " ", __jsx("span", {
    className: "Header__Contact__Content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 52
    }
  }, "comvangviet.com")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "|"), __jsx("a", {
    className: "Header__Contact__Link",
    href: "tel:0363575468",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), " ", __jsx("span", {
    className: "Header__Contact__Content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 40
    }
  }, "(+84) 363.575.468")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "|"), __jsx("a", {
    className: "Header__Contact__Link",
    href: "tel:0765661626 ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }), " ", __jsx("span", {
    className: "Header__Contact__Content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 40
    }
  }, "(+84) 765.661.626 ")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, "|"), __jsx("a", {
    className: "Header__Contact__Link",
    href: "mailto:sales@comvangviet.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-envelope",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), " ", __jsx("span", {
    className: "Header__Contact__Content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 43
    }
  }, "sales@comvangviet.com"))), __jsx("div", {
    className: "Header__Navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: '/',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "Header__Logo",
    src: "/static/logo.png",
    alt: "COM VANG VIET LOGO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 26
    }
  })), __jsx("div", {
    className: "Header__Nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TRANG_CHU,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: trangChuClass,
    onClick: function onClick() {
      return setPage(_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TRANG_CHU);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Trang Ch\u1EE7")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].GIOI_THIEU,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: gioiThieuClass,
    onClick: function onClick() {
      return setPage(_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].GIOI_THIEU);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Gi\u1EDBi thi\u1EC7u")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TUYEN_DUNG,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: tuyenDungClass,
    onClick: function onClick() {
      return setPage(_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].TUYEN_DUNG);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "Tuy\u1EC3n d\u1EE5ng")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: _constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].LIEN_HE,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: lienHeClass,
    onClick: function onClick() {
      return setPage(_constants_app_constants__WEBPACK_IMPORTED_MODULE_5__["PAGES"].LIEN_HE);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, "Li\xEAn h\u1EC7"))), __jsx("div", {
    className: "Header__Flag",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: ['Header__Flag__Item', flagVNClass].join(' '),
    src: flag_english,
    alt: "OSAC Service",
    onClick: function onClick() {
      return _chooseFlagHandle('english');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx("img", {
    className: ['Header__Flag__Item', flagENClass].join(' '),
    src: flag_vietnam,
    alt: "OSAC Service",
    onClick: function onClick() {
      return _chooseFlagHandle('vietnam');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }
  })), __jsx(_MenuIcon_MenuIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isClicked: isClicked,
    clickHandle: _clickMenuIconHandle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  }), __jsx(_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isClicked: isClicked,
    clickHandle: _clickMenuIconHandle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=lien-he.js.a9ecb380a87f39900169.hot-update.js.map