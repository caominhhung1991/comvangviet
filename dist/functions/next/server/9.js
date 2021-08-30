exports.ids = [9];
exports.modules = {

/***/ "./components/shared/Title/Title.js":
/*!******************************************!*\
  !*** ./components/shared/Title/Title.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Title.scss */ "./components/shared/Title/Title.scss");
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/shared/Title/Title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propStyles = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dataAOS: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

class Title extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let content = __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 19
      }
    });

    content = !!this.props.dataAOS ? __jsx("div", {
      className: "Title",
      "data-aos": this.props.dataAOS,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: "Title__Line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }
    }), __jsx("span", {
      className: "Title__Text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }
    }, this.props.title)) : __jsx("div", {
      className: "Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 8
      }
    }, __jsx("span", {
      className: "Title__Line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }), __jsx("span", {
      className: "Title__Text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, this.props.title));
    return content;
  }

}

Title.propStyles = propStyles;
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./components/shared/Title/Title.scss":
/*!********************************************!*\
  !*** ./components/shared/Title/Title.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=9.js.map