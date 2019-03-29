webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/features/rejection/question-list/question-list-component.js":
/*!*************************************************************************!*\
  !*** ./src/features/rejection/question-list/question-list-component.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _question_question_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../question/question-component */ "./src/features/rejection/question/question-component.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var QuestionList = function QuestionList() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
      _ref$questions = _ref.questions,
      questions = _ref$questions === void 0 ? [] : _ref$questions,
      handleToggleQuestionStatusClick = _ref.handleToggleQuestionStatusClick,
      handleDeleteQuestionClick = _ref.handleDeleteQuestionClick;

  return (//const QuestionList = ({ questions } = []) => (
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: "question-list"
    }, questions.map(function (question) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_question_question_component__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, question, {
        key: question.id,
        handleToggleQuestionStatusClick: handleToggleQuestionStatusClick
      }));
    }))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionList);

/***/ })

})
//# sourceMappingURL=index.js.c13a60f98cc8e4d6c4cc.hot-update.js.map