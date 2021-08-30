webpackHotUpdate("static/development/pages/lien-he.js",{

/***/ "./pages/lien-he.js":
/*!**************************!*\
  !*** ./pages/lien-he.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_lien_he_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/lien-he.scss */ "./styles/lien-he.scss");
/* harmony import */ var _styles_lien_he_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_lien_he_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_withLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/withLayout */ "./components/withLayout.js");


var _this = undefined,
    _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/pages/lien-he.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var LienHe = function LienHe() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({// name: 'hungcao',
    // email: 'caominhhung1991@gmail.com',
    // subject: 'hung test ' + new Date().getTime(),
    // message: 'hung test content',
  }),
      _email = _useState[0],
      _setEmail = _useState[1];

  var isDev = false;

  var _onChangeEmail = function _onChangeEmail(e) {
    var _e$target = e.target,
        name = _e$target.name,
        value = _e$target.value;

    _setEmail(_objectSpread({}, _email, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, value)));
  };

  var makeTemplateMail = function makeTemplateMail() {
    return "<div>\n      <div style='color: red font-weight: bold'>Email \u0111\u01B0\u1EE3c g\u1EDFi t\u1EEB trang comvangviet.com/lien-he</div>\n      <div style='font-weight: bold'>T\xEAn ng\u01B0\u1EDDi g\u1EEDi: ".concat(_email.name, "</div>\n      <div style='font-weight: bold'>Email li\xEAn h\u1EC7: ").concat(_email.email, "</div>\n      <br>\n      <div style='font-weight: bold'>N\u1ED9i dung:</div>\n      <div>").concat(_email.message, "</div>\n    </div>");
  };

  var _onSend = function _onSend(e) {
    if (isDev) {
      console.log(_email);
    } // $.ajax({
    //   type: 'POST',
    //   url: 'http://localhost:3001/sendMail',
    //   data: {
    //     'message': {
    //       'from_email': _email.email || '',
    //       'to': [
    //         {
    //           'email': 'admin@osac.vn',
    //           'name': 'Admin Hung',
    //           'type': 'to'
    //         }
    //       ],
    //       'autotext': 'true',
    //       'subject': _email.subject,
    //       'html': String(makeTemplateMail()),
    //     }
    //   },
    //   success: function (e) {
    //   }
    // }).done(function (response) {
    //   // console.log(response)
    //   // if you're into that sorta thing
    // })

  };

  return __jsx(_components_withLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "lh",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lh__banner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "background__white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx("h1", {
    className: "text-center text-white lh__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Li\xEAn H\u1EC7"), __jsx("div", {
    className: "text-center osac__line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "__________"), __jsx("p", {
    className: "text-white lh__title__content",
    align: "justify",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Ch\xFAng t\xF4i lu\xF4n s\u1EB5n s\xE0ng n\u1EAFm b\u1EAFt nh\u1EEFng c\u01A1 h\u1ED9i h\u1EE3p t\xE1c kinh doanh nh\u1EB1m \u0111em l\u1EA1i l\u1EE3i \xEDch cho t\u1EA5t c\u1EA3 c\xE1c b\xEAn tham gia tr\xEAn tinh th\u1EA7n x\xE2y d\u1EF1ng s\u1EF1 h\u1EE3p t\xE1c th\xE0nh c\xF4ng, l\xE2u d\xE0i v\xE0 b\u1EC1n v\u1EEFng."))), __jsx("div", {
    className: "container ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row my-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 11
    }
  }, __jsx("section", {
    className: "col-md-6 lh__right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "my-4 osac__color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 15
    }
  }, "Li\xEAn h\u1EC7 C\u01A1m V\xE0ng Vi\u1EC7t"), __jsx("div", {
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 15
    }
  }, __jsx("ul", {
    className: "list-unstyled",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "d-flex mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-map-marker fa-2x osac__color mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }), __jsx("p", {
    style: {
      lineHeight: '20px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, "Xu\xE2n Th\u1EA1nh, Th\u1ED1ng Nh\u1EA5t, \u0110\u1ED3ng Nai")), __jsx("li", {
    className: "d-flex mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-phone fa-2x osac__color mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "tel:0363575468",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 24
    }
  }, "Qu\u1ED1c Thu\u1EADn -  0363.575.468"))), __jsx("li", {
    className: "d-flex mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fa fa-envelope fa-2x osac__color mr-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "mailto:sales@comvangviet.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 24
    }
  }, "sales@comvangviet.com")))))), __jsx("section", {
    className: "lh__form col-md-6 mb-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, __jsx("form", {
    id: "contact-form",
    name: "contact-form",
    method: "POST",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "md-form mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "name",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 21
    }
  }, "H\u1ECD t\xEAn:"), __jsx("input", {
    type: "text",
    id: "name",
    name: "name",
    className: "form-control form-control-sm osac__input",
    required: true,
    value: _email.name || '',
    onChange: _onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "md-form mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "email",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 21
    }
  }, "Email:"), __jsx("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control form-control-sm osac__input",
    required: true,
    value: _email.email || '',
    onChange: _onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "form-group ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "md-form mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "subject",
    className: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "Ch\u1EE7 \u0110\u1EC1:"), __jsx("input", {
    type: "text",
    id: "subject",
    name: "subject",
    className: "form-control form-control-sm osac__input",
    required: true,
    value: _email.subject || '',
    onChange: _onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "md-form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "message",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "N\u1ED9i Dung:"), __jsx("textarea", {
    id: "message",
    name: "message",
    rows: "2",
    className: "form-control md-textarea osac__input",
    required: true,
    value: _email.message || '',
    onChange: _onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: "text-center text-md-left",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-block osac__button g-recaptcha",
    onClick: _onSend // disabled={!isDev || !_isRecapcha}
    ,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, "G\u1EEDi Li\xEAn H\u1EC7"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (LienHe);

/***/ })

})
//# sourceMappingURL=lien-he.js.3d43b7f7e5522aaf3bf2.hot-update.js.map