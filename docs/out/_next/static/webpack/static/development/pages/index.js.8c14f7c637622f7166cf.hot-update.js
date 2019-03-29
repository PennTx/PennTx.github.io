webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/features/rejection/rejection-reducer */ "./src/features/rejection/rejection-reducer.js");
/* harmony import */ var _src_features_rejection_score_score_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/features/rejection/score/score-component */ "./src/features/rejection/score/score-component.js");
/* harmony import */ var _src_features_rejection_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/features/rejection/add-question/add-question-component */ "./src/features/rejection/add-question/add-question-component.js");
/* harmony import */ var _src_features_rejection_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/features/rejection/question-list/question-list-component */ "./src/features/rejection/question-list/question-list-component.js");
/* harmony import */ var _src_localStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/localStorage */ "./src/localStorage.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Home() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_src_localStorage__WEBPACK_IMPORTED_MODULE_6__["loadState"])())),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      questions = _useReducer2[0],
      dispatch = _useReducer2[1];

  var questionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var askeeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return Object(_src_localStorage__WEBPACK_IMPORTED_MODULE_6__["saveState"])(questions);
  }, [questions]);

  var handleAcceptedClick = function handleAcceptedClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Accepted'
    }));
  };

  var handleRejectedClick = function handleRejectedClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Rejected'
    }));
  };

  var handleUnansweredClick = function handleUnansweredClick(event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["createQuestion"])({
      'question': questionRef.current.value,
      askee: askeeRef.current.value,
      status: 'Unanswered'
    }));
  };

  var handleToggleQuestionStatusClick = function handleToggleQuestionStatusClick(id, status, event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["answerQuestion"])({
      id: id,
      status: status === 'Accepted' ? 'Rejected' : status === 'Rejected' ? 'Unanswered' : 'Accepted'
    }));
  };

  var handleDeleteQuestionClick = function handleDeleteQuestionClick(id, event) {
    dispatch(Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["deleteQuestion"])({
      id: id
    }));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4210910827"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_features_rejection_score_score_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
    score: Object(_src_features_rejection_rejection_reducer__WEBPACK_IMPORTED_MODULE_2__["getScore"])(questions)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_features_rejection_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
    questionRef: questionRef,
    askeeRef: askeeRef,
    handleAcceptedClick: handleAcceptedClick,
    handleRejectedClick: handleRejectedClick,
    handleUnansweredClick: handleUnansweredClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_features_rejection_question_list_question_list_component__WEBPACK_IMPORTED_MODULE_5__["default"], {
    questions: questions,
    handleToggleQuestionStatusClick: handleToggleQuestionStatusClick,
    handleDeleteQuestionClick: handleDeleteQuestionClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4210910827"
  }, ".add-question{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:flex-center;-webkit-box-align:flex-center;-ms-flex-align:flex-center;align-items:flex-center;max-width:20em;}.add-question button{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex:0 0 2em;-ms-flex:0 0 2em;flex:0 0 2em;margin:.5em 0;}body{margin:0;padding:0;font-family:sans-serif;}dt{font-weight:bold;}button{max-width:15em;}ul{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}ul li{border-radius:1em;box-shadow:0 0 .5em .5em rgba(0,0,0,0.5);margin:1em 2em;padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFeUIsQUFHd0IsQUFNSyxBQUtULEFBS1EsQUFHRixBQUdNLEFBS0gsU0FmUixNQVFaLEVBSEEsQ0FXOEMsQ0FmckIsRUFVVixxQkFUZixpQkFlaUIsWUF0QkYsR0FOUyxBQTZCVixZQUNkLFNBUHFCLDJCQWhCTCxjQUNoQixnQkFQMEIsWUF1QjFCLHFHQXRCaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvc3NjZWFmc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L0RldkFueXdoZXJlLmlvL0xlc3NvbnNfSG9tZVdvcmsvQ29kZS9yZWplY3Rpb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCByZWplY3Rpb24sIHsgY3JlYXRlUXVlc3Rpb24sIGFuc3dlclF1ZXN0aW9uLCBkZWxldGVRdWVzdGlvbiwgZ2V0U2NvcmUgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3JlamVjdGlvbi1yZWR1Y2VyJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3Njb3JlL3Njb3JlLWNvbXBvbmVudCc7XG5pbXBvcnQgQWRkUXVlc3Rpb24gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9hZGQtcXVlc3Rpb24vYWRkLXF1ZXN0aW9uLWNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25MaXN0IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGxvYWRTdGF0ZSwgc2F2ZVN0YXRlIH0gZnJvbSAnLi4vc3JjL2xvY2FsU3RvcmFnZSc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtxdWVzdGlvbnMsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVqZWN0aW9uLCByZWplY3Rpb24obG9hZFN0YXRlKCkpKTtcbiAgY29uc3QgcXVlc3Rpb25SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYXNrZWVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gc2F2ZVN0YXRlKHF1ZXN0aW9ucyksIFtxdWVzdGlvbnNdKTtcblxuICBjb25zdCBoYW5kbGVBY2NlcHRlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnQWNjZXB0ZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVqZWN0ZWRDbGljayA9IGV2ZW50ID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgICAgICAgJ3F1ZXN0aW9uJzogcXVlc3Rpb25SZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgYXNrZWU6IGFza2VlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHN0YXR1czogJ1JlamVjdGVkJ1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVuYW5zd2VyZWRDbGljayA9IGV2ZW50ID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgICAgICAgJ3F1ZXN0aW9uJzogcXVlc3Rpb25SZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgYXNrZWU6IGFza2VlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHN0YXR1czogJ1VuYW5zd2VyZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlUXVlc3Rpb25TdGF0dXNDbGljayA9IChpZCwgc3RhdHVzLCBldmVudCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICBhbnN3ZXJRdWVzdGlvbih7XG4gICAgICAgaWQsXG4gICAgICAgc3RhdHVzOiAoc3RhdHVzID09PSAnQWNjZXB0ZWQnID8gJ1JlamVjdGVkJyA6IHN0YXR1cyA9PT0gJ1JlamVjdGVkJyA/ICdVbmFuc3dlcmVkJyA6ICdBY2NlcHRlZCcgKVxuICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUXVlc3Rpb25DbGljayA9IChpZCwgZXZlbnQpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgZGVsZXRlUXVlc3Rpb24oe1xuICAgICAgIGlkXG4gICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2NvcmUgc2NvcmU9e2dldFNjb3JlKHF1ZXN0aW9ucyl9IC8+XG4gICAgICA8QWRkUXVlc3Rpb25cbiAgICAgICAgcXVlc3Rpb25SZWY9e3F1ZXN0aW9uUmVmfVxuICAgICAgICBhc2tlZVJlZj17YXNrZWVSZWZ9XG4gICAgICAgIGhhbmRsZUFjY2VwdGVkQ2xpY2s9e2hhbmRsZUFjY2VwdGVkQ2xpY2t9XG4gICAgICAgIGhhbmRsZVJlamVjdGVkQ2xpY2s9e2hhbmRsZVJlamVjdGVkQ2xpY2t9XG4gICAgICAgIGhhbmRsZVVuYW5zd2VyZWRDbGljaz17aGFuZGxlVW5hbnN3ZXJlZENsaWNrfSAvPlxuICAgICAgPFF1ZXN0aW9uTGlzdFxuICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgaGFuZGxlVG9nZ2xlUXVlc3Rpb25TdGF0dXNDbGljaz17aGFuZGxlVG9nZ2xlUXVlc3Rpb25TdGF0dXNDbGlja31cbiAgICAgICAgaGFuZGxlRGVsZXRlUXVlc3Rpb25DbGljaz17aGFuZGxlRGVsZXRlUXVlc3Rpb25DbGlja30gLz5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIC5hZGQtcXVlc3Rpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1jZW50ZXI7XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMGVtO1xuICAgICAgICB9XG4gICAgICAgIC5hZGQtcXVlc3Rpb24gYnV0dG9uIHtcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgZmxleDogMCAwIDJlbTtcbiAgICAgICAgICBtYXJnaW46IC41ZW0gMDtcbiAgICAgICAgfVxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgICAgICBkdCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1ZW07XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgICAgIH1cbiAgICAgICAgdWwgbGkge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgLjVlbSAuNWVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBtYXJnaW46IDFlbSAyZW07XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4gIC8vcmV0dXJuIDxkaXY+V2VsY29tZSB0byBOZXh0LmpzITwvZGl2PlxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/home/ssceafson/Documents/Development/JavaScript/DevAnywhere.io/Lessons_HomeWork/Code/rejection/pages/index.js */"));
} //return <div>Welcome to Next.js!</div>


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8c14f7c637622f7166cf.hot-update.js.map