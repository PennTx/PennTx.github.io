webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/features/rejection/question/question-component.js":
/*!***************************************************************!*\
  !*** ./src/features/rejection/question/question-component.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Question = function Question() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      id = _ref.id,
      question = _ref.question,
      askee = _ref.askee,
      status = _ref.status,
      timestamp = _ref.timestamp,
      handleToggleQuestionStatusClick = _ref.handleToggleQuestionStatusClick;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "question"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dl", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Question: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "question"
  }, question), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Askee: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "askee"
  }, askee), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Status: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "status",
    onClick: function onClick(event) {
      return handleToggleQuestionStatusClick(id, status, event);
    }
  }, status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dt", null, "Answered: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("dd", {
    className: "timestamp"
  }, timestamp ? new Date(timestamp).toLocaleString() : '')));
};

/* harmony default export */ __webpack_exports__["default"] = (Question);

/***/ })

})
//# sourceMappingURL=index.js.a352197f6514dc49a717.hot-update.js.map