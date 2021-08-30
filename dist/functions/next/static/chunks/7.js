(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./components/Reason/ReasonItem/ReasonItem.js":
/*!****************************************************!*\
  !*** ./components/Reason/ReasonItem/ReasonItem.js ***!
  \****************************************************/
/*! exports provided: ReasonItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReasonItem", function() { return ReasonItem; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ReasonItem_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReasonItem.scss */ "./components/Reason/ReasonItem/ReasonItem.scss");
/* harmony import */ var _ReasonItem_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ReasonItem_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shared_Button_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/Button/Button */ "./components/shared/Button/Button.js");





var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/Reason/ReasonItem/ReasonItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var reasonImage = '/static/img/reason_1.jpg';
var propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  content: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
};
var imageMap = {
  "chat_luong_tieu_chuan": reasonImage,
  "nguon_thuc_pham_an_toan": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "dich_vu_linh_hoat": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "kinh_nghiem_va_uy_tinh": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "khach_hang_la_trong_tam": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png',
  "luon_luon_cai_tien": 'https://atvstp.org.vn/wp-content/uploads/2018/12/anh-1-kiem-dinh-ve-sinh-an-toan-thuc-pham-la-qua-trinh-bat-buoc-v%C3%A0-thiet-thuc.png'
}; //

var ReasonItem = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ReasonItem, _Component);

  var _super = _createSuper(ReasonItem);

  function ReasonItem() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ReasonItem);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReasonItem, [{
    key: "render",
    value: function render() {
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
          backgroundImage: "url(".concat(imageMap[this.props.image], ")")
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
  }]);

  return ReasonItem;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
ReasonItem.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (ReasonItem);

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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button.scss */ "./components/shared/Button/Button.scss");
/* harmony import */ var _Button_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Button_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/shared/Button/Button.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string
};
var Button = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Button, _Component);

  var _super = _createSuper(Button);

  function Button() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "render",
    value: function render() {
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
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);
Button.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

}]);
//# sourceMappingURL=7.js.map