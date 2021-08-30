exports.ids = [4];
exports.modules = {

/***/ "./components/Reason/ReasonItem/ReasonItem.js":
/*!****************************************************!*\
  !*** ./components/Reason/ReasonItem/ReasonItem.js ***!
  \****************************************************/
/*! exports provided: ReasonItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonItem", function() { return ReasonItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReasonItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReasonItem.scss */ "./components/Reason/ReasonItem/ReasonItem.scss");
/* harmony import */ var _ReasonItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReasonItem_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/Button/Button */ "./components/shared/Button/Button.js");
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/Reason/ReasonItem/ReasonItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const reasonImage = '/static/img/reason_1.jpg';
const propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};
const imageMap = {
  "chat_luong_tieu_chuan": reasonImage,
  "nguon_thuc_pham_an_toan": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "dich_vu_linh_hoat": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "kinh_nghiem_va_uy_tinh": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "khach_hang_la_trong_tam": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "luon_luon_cai_tien": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png'
}; //

class ReasonItem extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "ReasonItem",
      "data-aos": "fade-up",
      "data-aos-duration": "1400",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "ReasonItem__Image",
      style: {
        backgroundImage: `url(${imageMap[this.props.image]})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "ReasonItem__Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, this.props.title), __jsx("div", {
      className: "ReasonItem__Content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }
    }, this.props.content));
  }

}
ReasonItem.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ReasonItem);

/***/ }),

/***/ "./components/Reason/ReasonItem/ReasonItem.scss":
/*!******************************************************!*\
  !*** ./components/Reason/ReasonItem/ReasonItem.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/shared/Button/Button.js":
/*!********************************************!*\
  !*** ./components/shared/Button/Button.js ***!
  \********************************************/
/*! exports provided: Button, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.scss */ "./components/shared/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/shared/Button/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
class Button extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("button", {
      className: "Btn",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    }, this.props.text);
  }

}
Button.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/shared/Button/Button.scss":
/*!**********************************************!*\
  !*** ./components/shared/Button/Button.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

};;
//# sourceMappingURL=4.js.map