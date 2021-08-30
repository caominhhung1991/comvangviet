webpackHotUpdate("static/development/pages/tuyen-dung.js",{

/***/ "./pages/tuyen-dung.js":
/*!*****************************!*\
  !*** ./pages/tuyen-dung.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_gioi_thieu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/gioi-thieu.scss */ "./styles/gioi-thieu.scss");
/* harmony import */ var _styles_gioi_thieu_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_gioi_thieu_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_tuyen_dung_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/tuyen-dung.scss */ "./styles/tuyen-dung.scss");
/* harmony import */ var _styles_tuyen_dung_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_tuyen_dung_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_withLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/withLayout */ "./components/withLayout.js");
/* harmony import */ var _components_shared_Modals_BasicModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared/Modals/BasicModal */ "./components/shared/Modals/BasicModal.js");
/* harmony import */ var _components_shared_MyGoogleMap_MyGoogleMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/MyGoogleMap/MyGoogleMap */ "./components/shared/MyGoogleMap/MyGoogleMap.js");
var _this = undefined,
    _jsxFileName = "/Users/mac/Public/Osac-project/ComVangViet-FE-Website-nextjs/packages/landing/pages/tuyen-dung.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var hinhBannerName = 'static/img/tuyen_dung_banner.jpg';
var phoneNhanSu = {
  phone: '0355233960',
  name: 'Oanh',
  text: '0355.233.960'
};
var tinTuyenDung = [// {
//   title: ['QUẢN LÝ CĂN TIN'],
//   noidungCV: [
//     'Lên dự trù phần ăn mỗi ngày',
//     'Tổng hợp số báo, đối chiếu suất ăn với nhà máy',
//     'Đặt hàng mỗi ngày, gia vị, gas, gạo .v.v… Liên hệ các nhà cung cấp nếu như có sự cố xảy ra',
//     'Sắp xếp nhân sự đi làm (chia lịch làm việc, tăng ca cho nhân viên)',
//     'Đặt CCDC và văn phòng phẩm mỗi tháng',
//     'Kiểm soát chi phí thực phẩm và chi phí nhân sự tại cơ sở',
//     'Tiếp nhận và nắm bắt ý kiến khách hàng để ghi nhận và khắc phục',
//     'Xử lí tình huống trong trường hợp có ý kiến phản hồi từ nhà máy',
//   ],
//   soluong: [10],
//   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
//   trinhdo: ['CĐ, ĐH nghành Công Nghệ Thực Phẩm hoặc tương đương'],
//   kinhnghiem: ['1 năm trở lên'],
//   luong: ['Thỏa thuận'],
//   chedokhac: [
//     'Sinh nhật, lễ, tết, thưởng tháng 13',
//     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
//     'Du lịch hàng năm…',
//     'Phụ cấp cơm',
//   ]
// },
// {
//   title: ['QC THỰC PHẨM'],
//   noidungCV: [
//     'Kiểm tra chất lượng hàng hóa đầu vào',
//     'Lưu mẫu và ghi sổ 3 bước cho 3 ca',
//     'Lên line, chạy line, chụp hình 3 ca',
//     'Báo cáo khay mẫu',
//     'Checklist các khu vực hằng ngày (Nhiệt độ, vệ sinh)',
//     'Theo dõi hạn sử dụng thực phẩm hằng ngày',
//     'Hỗ trợ vòng ngoài coi bấm vân tay',
//   ],
//   soluong: [15],
//   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
//   trinhdo: ['CĐ, ĐH nghành Công Nghệ Thực Phẩm hoặc tương đương'],
//   kinhnghiem: ['Không yêu cầu kinh nghiệm, chưa có kinh nghiệm sẽ được đào tạo'],
//   luong: ['6,5 triệu trở lên'],
//   chedokhac: [
//     'Sinh nhật, lễ, tết, thưởng tháng 13',
//     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
//     'Du lịch hàng năm…',
//     'Phụ cấp cơm',
//   ]
// },
// {
//   title: ['ĐẦU BẾP'],
//   noidungCV: [
//     'Chịu trách nhiệm về các món chính trong ca',
//     'Điều chỉnh khẩu vị khi khẩu vị chưa đạt',
//     'Xử lí sự cố nếu có sự cố hàng hóa',
//   ],
//   soluong: [10],
//   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
//   trinhdo: ['Không yêu cầu. Biết đọc, viết'],
//   kinhnghiem: ['Có kinh nghiệm nấu bếp ăn công nghiệp'],
//   luong: ['Thỏa thuận'],
//   chedokhac: [
//     'Sinh nhật, lễ, tết, thưởng tháng 13',
//     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
//     'Du lịch hàng năm…',
//     'Phụ cấp cơm',
//   ]
// },
// {
//   title: ['PHỤ BẾP'],
//   noidungCV: [
//     'Chịu trách nhiệm nấu các món xào, canh, các món chiên',
//     'Hỗ trợ bếp chính làm món mặn',
//     'Xử lí sự cố nếu có sự cố hàng hóa',
//   ],
//   soluong: [15],
//   diadiem: ['KCN VSIP II - Bình Dương', 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'],
//   trinhdo: ['Không yêu cầu. Biết đọc, viết'],
//   kinhnghiem: ['Có kinh nghiệm nấu bếp ăn công nghiệp'],
//   luong: ['Thỏa thuận'],
//   chedokhac: [
//     'Sinh nhật, lễ, tết, thưởng tháng 13',
//     'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức',
//     'Du lịch hàng năm…',
//     'Phụ cấp cơm',
//   ]
// },
{
  title: ['LAO ĐỘNG PHỔ THÔNG'],
  noidungCV: ['Dọn vệ sinh khu vực căn tin bếp', 'Sơ chế rau, củ, quả, thịt, cá', 'Rửa khay, dọn rác khu vực sản xuất', 'Chia suất cho công nhân', 'Nấu cơm', 'Các công việc khác do Ban quản lý sắp xếp'],
  soluong: [40],
  diadiem: ['KCN VSIP II - Bình Dương' // 'KCN Công Nghệ Cao - Quận 9', 'KCN Biên Hòa 1 - Đồng Nai'
  ],
  trinhdo: ['Không yêu cầu. Có sức khỏe tốt, chịu khó, trung thực'],
  kinhnghiem: ['Không yêu cầu, chưa có kinh nghiệm sẽ được đào tạo'],
  luong: ['Thỏa thuận'],
  chedokhac: ['Sinh nhật, lễ, tết, thưởng tháng 13', 'Được tham gia các buổi huấn luyện đào tạo thêm chuyên môn của công ty tổ chức', 'Du lịch hàng năm…', 'Phụ cấp cơm']
}];

var TuyenDung = function TuyenDung() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _selectedJob = _useState[0],
      _onSelectJob = _useState[1];

  return __jsx(_components_withLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "gt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "tuyenDungBanner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "".concat(hinhBannerName),
    alt: "tuyen-dung-osac",
    className: "tuyenDungBanner__image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "dangTuyenDung",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "dangTuyenDung__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "osac-color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 55
    }
  }, "CTY C\u01A0M V\xC0NG VI\u1EC6T"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 108
    }
  }), "TUY\u1EC2N D\u1EE4NG", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 123
    }
  }), "C\xC1C V\u1ECA TR\xCD"), __jsx("span", {
    className: "dangTuyenDung__line",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, "____"), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 17
    }
  }, "M\u1ECDi chi ti\u1EBFt vi\u1EC7c l\xE0m li\xEAn h\u1EC7:", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 52
    }
  }), __jsx("a", {
    href: "tel:".concat(phoneNhanSu.phone),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 19
    }
  }, phoneNhanSu.text), " (", phoneNhanSu.name, " - Tr\u01B0\u1EDFng ph\xF2ng nh\xE2n s\u1EF1) ", __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 123
    }
  }), "ho\u1EB7c n\u1ED9p h\u1ED3 s\u01A1 qua email: ", __jsx("a", {
    href: "mailto:hr@comvangviet.com",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 45
    }
  }, "hr@comvangviet.com"))), __jsx("div", {
    className: "col-md-8",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 15
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 17
    }
  }, tinTuyenDung.map(function (tin, index) {
    return __jsx("div", {
      className: "row baiDang mb-3",
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 30
      }
    }, __jsx("div", {
      className: "col-md-9",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "baiDang__title",
      "data-toggle": "modal",
      "data-target": "#modal",
      onClick: function onClick() {
        return _onSelectJob(tin);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 27
      }
    }, String(tin.title).toUpperCase()), __jsx("div", {
      className: "baiDang__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 27
      }
    }, "S\u1ED1 l\u01B0\u1EE3ng: ", tin.soluong, " - \u0110\u1ECBa \u0111i\u1EC3m: ", tin.diadiem.join(', ')), __jsx("div", {
      className: "baiDang__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 27
      }
    }, "Tr\xECnh \u0111\u1ED9: ", tin.trinhdo), __jsx("div", {
      className: "baiDang__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 27
      }
    }, "Kinh nghi\u1EC7m: ", tin.kinhnghiem), __jsx("div", {
      className: "baiDang__item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 27
      }
    }, "L\u01B0\u01A1ng: ", tin.luong), __jsx("div", {
      className: "baiDang__line",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 27
      }
    }, "______________")), __jsx("div", {
      className: "col-md-3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "tel:".concat(phoneNhanSu.phone),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 27
      }
    }, __jsx("button", {
      className: "btn btn-outline-dark",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 29
      }
    }, "Li\xEAn H\u1EC7: ", phoneNhanSu.name, " ", phoneNhanSu.text))));
  })))))), __jsx(_components_shared_Modals_BasicModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "TH\xD4NG TIN C\xD4NG VI\u1EC6C",
    size: 'large',
    center: true,
    isFooter: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "p-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 11
    }
  }, __jsx("h4", {
    className: "text-center osac__color",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 53
    }
  }, _selectedJob.title || '')), __jsx("div", {
    className: "row mb-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-md-9",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx("h6", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 38
    }
  }, "C\xF4ng vi\u1EC7c")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 17
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 19
    }
  }, "S\u1ED1 l\u01B0\u1EE3ng tuy\u1EC3n: ", _selectedJob.soluong, " - \u0110\u1ECBa \u0111i\u1EC3m l\xE0m vi\u1EC7c: ", _selectedJob.diadiem), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 19
    }
  }, "Tr\xECnh \u0111\u1ED9: ", _selectedJob.trinhdo), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 19
    }
  }, "Kinh nghi\u1EC7m: ", _selectedJob.kinhnghiem))), __jsx("div", {
    className: "col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "tel:".concat(phoneNhanSu.phone),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btn btn-outline-dark",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 19
    }
  }, "Li\xEAn H\u1EC7: ", phoneNhanSu.name, " ", phoneNhanSu.text)))), __jsx("h6", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 34
    }
  }, "Tr\xE1ch Nhi\u1EC7m C\xF4ng Vi\u1EC7c")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, _selectedJob.noidungCV && _selectedJob.noidungCV.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 24
      }
    }, item);
  })), __jsx("h6", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 34
    }
  }, "Ch\u1EBF \u0110\u1ED9 Kh\xE1c")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 13
    }
  }, _selectedJob.chedokhac && _selectedJob.chedokhac.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 24
      }
    }, item);
  })), __jsx("h6", {
    className: "mb-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }
  }, __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 34
    }
  }, "B\u1EA3n \u0111\u1ED3")), __jsx(_components_shared_MyGoogleMap_MyGoogleMap__WEBPACK_IMPORTED_MODULE_5__["default"], {
    place: _components_shared_MyGoogleMap_MyGoogleMap__WEBPACK_IMPORTED_MODULE_5__["diadiems"].xuongSX.id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (TuyenDung);

/***/ })

})
//# sourceMappingURL=tuyen-dung.js.8a2583f426cbf3c8e453.hot-update.js.map