exports.ids = [3];
exports.modules = {

/***/ "./components/Partners/Partners.js":
/*!*****************************************!*\
  !*** ./components/Partners/Partners.js ***!
  \*****************************************/
/*! exports provided: Partners, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Partners", function() { return Partners; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Partners_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partners.scss */ "./components/Partners/Partners.scss");
/* harmony import */ var _Partners_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Partners_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_Title_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/Title/Title */ "./components/shared/Title/Title.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "swiper");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/Partners/Partners.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const achau = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fachaucatering.gif?alt=media&token=a626119c-a911-4be4-93f8-218468522c78';
const ajinomoto = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fajinomoto.jpg?alt=media&token=694be3cb-c516-4f7b-bc9e-bf2ff9b9677d';
const bahuan = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fbahuan.jpg?alt=media&token=f0a84c15-16c7-4e00-bc3b-058adf4ed1c9';
const coca = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fcocacola.png?alt=media&token=e206e1d7-ed72-4332-a6e5-81b9f328a0b7';
const cp = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fcp.png?alt=media&token=200074bd-b74a-43c2-a803-80908ca2f8cf';
const metro = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fmetro.png?alt=media&token=9c3fea39-40d2-4bcb-91f7-ce4d0c15fed8';
const pepsi = 'https://firebasestorage.googleapis.com/v0/b/osac-a381e.appspot.com/o/osac%2Fparners%2Fpepsi.png?alt=media&token=c76a1b60-0e81-40d3-bc13-d77bee33efb0';
const partners = [achau, ajinomoto, bahuan, coca, cp, metro, pepsi, achau, ajinomoto, bahuan, coca, cp, metro, pepsi];
class Partners extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      let swiper2 = new swiper__WEBPACK_IMPORTED_MODULE_3___default.a('.swiper-container2', {
        slidesPerView: 15,
        spaceBetween: 0,
        loop: true,
        autoplay: {
          delay: 1,
          disableOnInteraction: true
        },
        freeMode: true,
        speed: 4000
      });
      swiper2.on('slideChange', function () {});
    });
  }

  render() {
    return __jsx("div", {
      className: "Partners",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(_shared_Title_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: 'nhà cung cấp của chúng tôi',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "swiper-container2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "swiper-wrapper SwiperWrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    }, partners.map((url, index) => {
      return __jsx("div", {
        key: index,
        className: "swiper-slide",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 24
        }
      }, __jsx("img", {
        src: url,
        alt: "partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 19
        }
      }));
    })), __jsx("div", {
      className: "swiper-pagination",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Partners);

/***/ }),

/***/ "./components/Partners/Partners.scss":
/*!*******************************************!*\
  !*** ./components/Partners/Partners.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

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
//# sourceMappingURL=3.js.map