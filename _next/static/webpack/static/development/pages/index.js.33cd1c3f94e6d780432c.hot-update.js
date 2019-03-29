webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/features/rejection/add-question/add-question-component.js":
/*!***********************************************************************!*\
  !*** ./src/features/rejection/add-question/add-question-component.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var AddQuestion = function AddQuestion(_ref) {
  var questionRef = _ref.questionRef,
      askeeRef = _ref.askeeRef,
      handleAcceptedClick = _ref.handleAcceptedClick,
      handleRejectedClick = _ref.handleRejectedClick,
      handleUnansweredClick = _ref.handleUnansweredClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "add-question"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "question-input"
  }, "Question:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "question",
    id: "question-input",
    ref: questionRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    for: "askee-input"
  }, "Askee:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "askee",
    id: "askee-input",
    ref: askeeRef
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "accepted",
    onClick: handleAcceptedClick
  }, "Accepted"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "rejected",
    onClick: handleRejectedClick
  }, "Rejected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "unanswered",
    onClick: handleUnansweredClick
  }, "Unanswered"));
};

/* harmony default export */ __webpack_exports__["default"] = (AddQuestion);

/***/ })

})
//# sourceMappingURL=index.js.33cd1c3f94e6d780432c.hot-update.js.map