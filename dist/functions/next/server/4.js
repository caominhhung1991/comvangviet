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
  "nguon_thuc_pham_an_toan": 'https://timviec365.vn/pictures/news/2019/11/09/iqu1573274184.jpg',
  "dich_vu_linh_hoat": 'https://cdn.luatvietnam.vn/uploaded/Images/Standard/2020/02/21/co-cau-lai-nganh-dich-vu-2020_2102132747.png',
  "kinh_nghiem_va_uy_tinh": 'https://topviec.vn/wp-content/uploads/2019/12/k%E1%BB%B9-n%C4%83ng-ng%C3%A0nh-d%E1%BB%8Bch-v%E1%BB%A5.jpg',
  "khach_hang_la_trong_tam": 'https://cempartner.com/FileUpload/Images/dichvukhachhangtot.jpg',
  "luon_luon_cai_tien": 'https://crmviet.vn/wp-content/uploads/2019/09/y-tuong-cai-tien-cong-viec.jpg'
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