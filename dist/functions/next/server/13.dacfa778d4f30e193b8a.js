exports.ids = [13,20];
exports.modules = {

/***/ "+9q6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pIXK");
/* harmony import */ var _Title_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Title_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const propStyles = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  dataAOS: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

class Title extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    let content = __jsx("div", null);

    content = !!this.props.dataAOS ? __jsx("div", {
      className: "Title",
      "data-aos": this.props.dataAOS
    }, __jsx("span", {
      className: "Title__Line"
    }), __jsx("span", {
      className: "Title__Text"
    }, this.props.title)) : __jsx("div", {
      className: "Title"
    }, __jsx("span", {
      className: "Title__Line"
    }), __jsx("span", {
      className: "Title__Text"
    }, this.props.title));
    return content;
  }

}

Title.propStyles = propStyles;
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "5WYw":
/***/ (function(module, exports) {



/***/ }),

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

/***/ "pIXK":
/***/ (function(module, exports) {



/***/ }),

/***/ "wyi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "ywOc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Story", function() { return Story; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Story_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5WYw");
/* harmony import */ var _Story_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Story_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+9q6");
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8ZQb");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const banner_web = '/static/img/banner-web.jpg'; // const aboutOsac = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fabout-osac.jpg?alt=media&token=09642c33-6383-4a30-95c2-3bd5c841243f'

const aboutOsac = 'https://hachium.storage.googleapis.com/users/736ffb189028a3192c6f67bf7c7c59b2/1593767816779.jpg';
class Story extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "Story mt-4"
    }, __jsx(_shared_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Câu chuyện của chúng tôi",
      dataAOS: "fade-up"
    }), __jsx("div", {
      className: "Story__Content"
    }, __jsx("div", {
      className: "Story__Image",
      "data-aos": "fade-up-left",
      "data-aos-offset": "100",
      "data-aos-anchor-placement": "top-bottom",
      style: {
        backgroundImage: `url(${aboutOsac})`
      }
    }), __jsx("div", {
      className: "Story__Text",
      "data-aos": "fade-up-right",
      "data-aos-offset": "100"
    }, __jsx("h2", {
      className: "Story__compName"
    }, "C\u01A0M V\xC0NG VI\u1EC6T"), __jsx("p", null, "C\u01A1m V\xE0ng Vi\u1EC7t l\xE0 C\xF4ng ty chuy\xEAn cung c\u1EA5p su\u1EA5t \u0103n c\xF4ng nghi\u1EC7p, su\u1EA5t \u0103n tr\u01B0\u1EDDng h\u1ECDc, d\u1ECBch v\u1EE5 \u1EA9m th\u1EF1c, cung c\u1EA5p th\u1EF1c ph\u1EA9m, xin g\u1EEDi l\u1EDDi ch\xE0o \u0111\u1EBFn Qu\xFD c\xF4ng ty!"), __jsx("p", null, "V\u1EDBi s\u1EE9 m\u1EC7nh mang \u0111\u1EBFn c\u1ED9ng \u0111\u1ED3ng nh\u1EEFng su\u1EA5t \u0103n c\xF4ng nghi\u1EC7p ch\u1EA5t l\u01B0\u1EE3ng v\xE0 an to\xE0n, ch\xFAng t\xF4i lu\xF4n t\u1ED5 ch\u1EE9c quy tr\xECnh l\xE0m vi\u1EC7c - nghi\xEAn c\u1EE9u c\u1EA3i ti\u1EBFn \u0111\u1ECBnh l\u01B0\u1EE3ng su\u1EA5t \u0103n - \u0111\xE0o t\u1EA1o - ph\xE1t tri\u1EC3n \u0111\u1ED9i ng\u0169 nh\xE2n vi\xEAn chuy\xEAn nghi\u1EC7p."), __jsx("p", null, "Tr\xEAn tinh th\u1EA7n mong mu\u1ED1n \u0111\u01B0\u1EE3c \u0111\u1ED3ng h\xE0nh v\xE0 g\xF3p ph\u1EA7n v\xE0o s\u1EF1 ph\xE1t tri\u1EC3n c\u1EE7a c\xF4ng ty, C\u01A1m V\xE0ng Vi\u1EC7t h\xE2n h\u1EA1nh \u0111\u01B0\u1EE3c h\u1EE3p t\xE1c c\xF9ng Qu\xFD c\xF4ng ty. Ch\xFAng t\xF4i tin r\u1EB1ng s\u1EF1 quan t\xE2m c\u1EE7a qu\xFD v\u1ECB v\xE0 kinh nghi\u1EC7m t\u1ED5 ch\u1EE9c ph\u1EE5c v\u1EE5 c\u1EE7a ch\xFAng t\xF4i, c\xF9ng nhau ch\xFAng ta s\u1EBD c\xF3 gi\u1EA3i ph\xE1p cho m\u1ECDi v\u1EA5n \u0111\u1EC1."), __jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      text: "About us"
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Story);

/***/ })

};;