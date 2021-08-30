exports.ids = [0];
exports.modules = {

/***/ "./components/ItemServices/ItemService/ItemService.js":
/*!************************************************************!*\
  !*** ./components/ItemServices/ItemService/ItemService.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemService_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemService.scss */ "./components/ItemServices/ItemService/ItemService.scss");
/* harmony import */ var _ItemService_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ItemService_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/ItemServices/ItemService/ItemService.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const imageMap = {
  'can_tin': '/static/img/bep-truong-hoc.jpg',
  'bep_an_cong_nghiep': '/static/img/business-lunch.jpg',
  'to_chuc_tiec': '/static/img/pranzo-sociale.jpg',
  'dich_vu_khac': '/static/img/catering.png'
};

class ItemService extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "ItemService",
      "data-aos": "flip-left",
      "data-aos-duration": "800",
      "data-aos-easing": "ease-in-out",
      "data-aos-anchor-placement": "top-bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "ItemService__Img",
      style: {
        backgroundImage: `url(${imageMap[this.props.image]})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "ItemService__Title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }
    }, this.props.title));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ItemService);

/***/ }),

/***/ "./components/ItemServices/ItemService/ItemService.scss":
/*!**************************************************************!*\
  !*** ./components/ItemServices/ItemService/ItemService.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ItemServices/ItemServices.js":
/*!*************************************************!*\
  !*** ./components/ItemServices/ItemServices.js ***!
  \*************************************************/
/*! exports provided: ItemServices, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemServices", function() { return ItemServices; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ItemServices_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemServices.scss */ "./components/ItemServices/ItemServices.scss");
/* harmony import */ var _ItemServices_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ItemServices_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemService_ItemService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemService/ItemService */ "./components/ItemServices/ItemService/ItemService.js");
/* harmony import */ var _shared_Title_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/Title/Title */ "./components/shared/Title/Title.js");
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/ItemServices/ItemServices.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class ItemServices extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 7
      }
    }, __jsx(_shared_Title_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Sản Phẩm - Dịch vụ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: "ItemServices",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx(_ItemService_ItemService__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: "bep_an_cong_nghiep",
      title: "bếp ăn công nghiệp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }), __jsx(_ItemService_ItemService__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: "can_tin",
      title: "bếp ăn trường học",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }), __jsx(_ItemService_ItemService__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: "to_chuc_tiec",
      title: "tổ chức tiệc",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx(_ItemService_ItemService__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: "dich_vu_khac",
      title: "dịch vụ khác",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (ItemServices);

/***/ }),

/***/ "./components/ItemServices/ItemServices.scss":
/*!***************************************************!*\
  !*** ./components/ItemServices/ItemServices.scss ***!
  \***************************************************/
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
//# sourceMappingURL=0.js.map