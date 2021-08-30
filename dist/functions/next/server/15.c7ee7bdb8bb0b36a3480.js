exports.ids = [15];
exports.modules = {

/***/ "8ZQb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Button */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wyi6");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Button extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("button", {
      className: "Btn"
    }, this.props.text);
  }

}
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "CQ0a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonItem", function() { return ReasonItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReasonItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wZUI");
/* harmony import */ var _ReasonItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ReasonItem_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8ZQb");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const reasonImage = '/static/img/reason_1.jpg';
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
      "data-aos-duration": "1400"
    }, __jsx("div", {
      className: "ReasonItem__Image",
      style: {
        backgroundImage: `url(${imageMap[this.props.image]})`
      }
    }), __jsx("div", {
      className: "ReasonItem__Title"
    }, this.props.title), __jsx("div", {
      className: "ReasonItem__Content"
    }, this.props.content));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ReasonItem);

/***/ }),

/***/ "wZUI":
/***/ (function(module, exports) {



/***/ }),

/***/ "wyi6":
/***/ (function(module, exports) {



/***/ })

};;