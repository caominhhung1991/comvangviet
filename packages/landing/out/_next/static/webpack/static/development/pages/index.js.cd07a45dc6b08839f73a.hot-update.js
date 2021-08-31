webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/shared/MyGoogleMap/MyGoogleMap.js":
/*!******************************************************!*\
  !*** ./components/shared/MyGoogleMap/MyGoogleMap.js ***!
  \******************************************************/
/*! exports provided: diadiems, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diadiems", function() { return diadiems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "../../node_modules/recompose/dist/Recompose.esm.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-maps */ "../../node_modules/react-google-maps/lib/index.js");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-google-maps/lib/components/addons/MarkerWithLabel */ "../../node_modules/react-google-maps/lib/components/addons/MarkerWithLabel.js");
/* harmony import */ var react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/components/shared/MyGoogleMap/MyGoogleMap.js",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import {MarkerWithLabel} from 'react-google-maps'
// import {MarkerWithLabel} from 'react-google-maps/lib/components/addons/MarkerWithLabel'


var diadiems = {
  xuongSX: {
    id: 'xuongSX',
    name: 'Chi nhánh Osac Bình Dương',
    address: '40 Đường số 3, Hòa Phú, Thủ Dầu Một, Bình Dương',
    lat: 11.0638593,
    lng: 106.6936421
  },
  vanphong: {
    id: 'vanphong',
    name: 'Văn phòng Cơm Vàng Việt',
    // address: 'sss',
    address: 'Số F5, KDC Tân Biên, P. Tân Biên, TP Biên Hòa, T. Đồng Nai',
    lat: 10.8216284,
    lng: 106.8065395
  }
};
var MyGoogleMap = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCaf5xlNWCTH1x-_kQDqvL_8sYp8UlWlZE&v=3.exp&libraries=geometry,drawing,places",
  loadingElement: __jsx("div", {
    style: {
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }),
  containerElement: __jsx("div", {
    style: {
      height: "350px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 23
    }
  }),
  mapElement: __jsx("div", {
    style: {
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })
}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(function (props) {
  var place = props.place;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isMarkerClicked = _useState[0],
      setIsMarketClicked = _useState[1];

  var diadiem = diadiems[place] || diadiems.vanphong;
  var center = {
    lat: diadiem.lat,
    lng: diadiem.lng
  };
  return __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"], {
    defaultZoom: 14,
    center: center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx(react_google_maps_lib_components_addons_MarkerWithLabel__WEBPACK_IMPORTED_MODULE_3___default.a, {
    position: center,
    labelAnchor: new window.google.maps.Point(130, 70),
    labelStyle: {
      backgroundColor: "white",
      fontSize: "11px",
      padding: "5px"
    },
    onClick: function onClick() {
      return setIsMarketClicked(!isMarkerClicked);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, isMarkerClicked ? __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 31
    }
  }, diadiem.address) : __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 62
    }
  })), props.isMarkerShown && __jsx(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
    position: props.center,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 34
    }
  }));
});
/* harmony default export */ __webpack_exports__["default"] = (MyGoogleMap);

/***/ })

})
//# sourceMappingURL=index.js.cd07a45dc6b08839f73a.hot-update.js.map