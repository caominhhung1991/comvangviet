exports.ids = [12,20];
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

/***/ "ckM2":
/***/ (function(module, exports) {



/***/ }),

/***/ "pIXK":
/***/ (function(module, exports) {



/***/ }),

/***/ "wyi6":
/***/ (function(module, exports) {



/***/ }),

/***/ "xSYh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _News_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ckM2");
/* harmony import */ var _News_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_News_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("+9q6");
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("8ZQb");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const NewsItem = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "DeL4")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("DeL4")],
    modules: ['./NewsItem/NewsItem']
  }
});
const news_2 = '/static/img/news_2.jpg';
const news_3 = '/static/img/news_3.jpg';

const News = props => {
  return __jsx("div", {
    className: "News"
  }, __jsx(_shared_Title_Title__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Tin nổi bật"
  }), __jsx("div", {
    className: "News__Content"
  }, __jsx(NewsItem, {
    title: "Canape là gì? Những thông tin thú vị về Canape",
    brief: "",
    image: "https://img.taste.com.au/8MQ39R4L/taste/2016/11/classic-canape-trio-90416-1.jpeg"
  }), __jsx(NewsItem, {
    title: "Chương trình Taste Of Australia 2018",
    brief: "",
    image: news_2
  }), __jsx(NewsItem, {
    title: "Connect - Employee Newsletter 1",
    brief: "",
    image: news_3
  })), __jsx("div", {
    className: "text-center mt-4"
  }, __jsx(_shared_Button_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    text: "Xem tất cả"
  })));
};

News.getInitialProps = async function () {
  console.log('heheh');
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

};;