webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/features/rejection/rejection-reducer */ "./src/features/rejection/rejection-reducer.js");
/* harmony import */ var _src_features_rejection_score_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/features/rejection/score/score-component */ "./src/features/rejection/score/score-component.js");
/* harmony import */ var _src_features_rejection_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/features/rejection/add-question/add-question-component */ "./src/features/rejection/add-question/add-question-component.js");
/* harmony import */ var _src_features_rejection_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/features/rejection/question-list/question-list-component */ "./src/features/rejection/question-list/question-list-component.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Home() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__["default"])()),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      questions = _useReducer2[0],
      dispatch = _useReducer2[1];

  var questionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var askeeRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var handleAcceptedClick = function handleAcceptedClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Accepted'
    }));
  };

  var handleRejectedClick = function handleRejectedClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Rejected'
    }));
  };

  var handleUnansweredClick = function handleUnansweredClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Unanswered'
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_features_rejection_score_score_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
    score: Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_1__["getScore"])(questions)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_features_rejection_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    questionRef: questionRef,
    askeeRef: askeeRef,
    handleAcceptedClick: handleAcceptedClick
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_features_rejection_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    questions: questions
  }));
} //return <div>Welcome to Next.js!</div>


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.5a8c7bf6f48ea5b1ac64.hot-update.js.map