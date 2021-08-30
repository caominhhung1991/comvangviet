exports.ids = [0,20];
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

/***/ "cCqs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "ItemServices", function() { return /* binding */ ItemServices_ItemServices_ItemServices; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/ItemServices/ItemServices.scss
var ItemServices_ItemServices = __webpack_require__("njYc");

// EXTERNAL MODULE: ./components/ItemServices/ItemService/ItemService.scss
var ItemService_ItemService = __webpack_require__("mtCy");

// CONCATENATED MODULE: ./components/ItemServices/ItemService/ItemService.js
var __jsx = external_react_default.a.createElement;


const imageMap = {
  'can_tin': '/static/img/bep-truong-hoc.jpg',
  'bep_an_cong_nghiep': '/static/img/business-lunch.jpg',
  'to_chuc_tiec': '/static/img/pranzo-sociale.jpg',
  'dich_vu_khac': '/static/img/catering.png'
};

class ItemService_ItemService_ItemService extends external_react_["Component"] {
  render() {
    return __jsx("div", {
      className: "ItemService",
      "data-aos": "flip-left",
      "data-aos-duration": "800",
      "data-aos-easing": "ease-in-out",
      "data-aos-anchor-placement": "top-bottom"
    }, __jsx("div", {
      className: "ItemService__Img",
      style: {
        backgroundImage: `url(${imageMap[this.props.image]})`
      }
    }), __jsx("div", {
      className: "ItemService__Title"
    }, this.props.title));
  }

}

/* harmony default export */ var ItemServices_ItemService_ItemService = (ItemService_ItemService_ItemService);
// EXTERNAL MODULE: ./components/shared/Title/Title.js
var Title = __webpack_require__("+9q6");

// CONCATENATED MODULE: ./components/ItemServices/ItemServices.js
var ItemServices_jsx = external_react_default.a.createElement;




class ItemServices_ItemServices_ItemServices extends external_react_["Component"] {
  render() {
    return ItemServices_jsx(external_react_default.a.Fragment, null, ItemServices_jsx(Title["default"], {
      title: "Sản Phẩm - Dịch vụ"
    }), ItemServices_jsx("div", {
      className: "ItemServices"
    }, ItemServices_jsx(ItemServices_ItemService_ItemService, {
      image: "bep_an_cong_nghiep",
      title: "bếp ăn công nghiệp"
    }), ItemServices_jsx(ItemServices_ItemService_ItemService, {
      image: "can_tin",
      title: "bếp ăn trường học"
    }), ItemServices_jsx(ItemServices_ItemService_ItemService, {
      image: "to_chuc_tiec",
      title: "tổ chức tiệc"
    }), ItemServices_jsx(ItemServices_ItemService_ItemService, {
      image: "dich_vu_khac",
      title: "dịch vụ khác"
    })));
  }

}
/* harmony default export */ var components_ItemServices_ItemServices = __webpack_exports__["default"] = (ItemServices_ItemServices_ItemServices);

/***/ }),

/***/ "mtCy":
/***/ (function(module, exports) {



/***/ }),

/***/ "njYc":
/***/ (function(module, exports) {



/***/ }),

/***/ "pIXK":
/***/ (function(module, exports) {



/***/ })

};;