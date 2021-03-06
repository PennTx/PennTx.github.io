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








function App() {
  //function Home() {
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
    className: "jsx-1226789518"
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
    id: "1226789518"
  }, ".add-question{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:flex-center;-webkit-box-align:flex-center;-ms-flex-align:flex-center;align-items:flex-center;max-width:20em;}.add-question button{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;-webkit-flex:0 0 2em;-ms-flex:0 0 2em;flex:0 0 2em;margin:.5em 0;}body{margin:0;padding:0;font-family:sans-serif;}dt{font-weight:bold;}button{max-width:15em;}ul{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}ul li{border-radius:1em;box-shadow:0 0 .5em .5em rgba(0,0,0,0.5);margin:1em 2em;padding:1em;}li.question button{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFeUIsQUFHd0IsQUFNSyxBQUtULEFBS1EsQUFHRixBQUdNLEFBS0gsQUFNUCxTQXJCRCxFQXNCWixJQWRBLEVBSEEsQ0FXOEMsQ0FmckIsRUFVVixxQkFUZixpQkFlaUIsWUF0QkYsR0FOUyxBQTZCVixZQUNkLFNBUHFCLDJCQWhCTCxjQUNoQixnQkFQMEIsWUF1QjFCLHFHQXRCaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvc3NjZWFmc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L0RldkFueXdoZXJlLmlvL0xlc3NvbnNfSG9tZVdvcmsvQ29kZS9yZWplY3Rpb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCByZWplY3Rpb24sIHsgY3JlYXRlUXVlc3Rpb24sIGFuc3dlclF1ZXN0aW9uLCBkZWxldGVRdWVzdGlvbiwgZ2V0U2NvcmUgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3JlamVjdGlvbi1yZWR1Y2VyJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3Njb3JlL3Njb3JlLWNvbXBvbmVudCc7XG5pbXBvcnQgQWRkUXVlc3Rpb24gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9hZGQtcXVlc3Rpb24vYWRkLXF1ZXN0aW9uLWNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25MaXN0IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGxvYWRTdGF0ZSwgc2F2ZVN0YXRlIH0gZnJvbSAnLi4vc3JjL2xvY2FsU3RvcmFnZSc7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbi8vZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3F1ZXN0aW9ucywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWplY3Rpb24sIHJlamVjdGlvbihsb2FkU3RhdGUoKSkpO1xuICBjb25zdCBxdWVzdGlvblJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhc2tlZVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzYXZlU3RhdGUocXVlc3Rpb25zKSwgW3F1ZXN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdGVkQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBjcmVhdGVRdWVzdGlvbih7XG4gICAgICAgICdxdWVzdGlvbic6IHF1ZXN0aW9uUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIGFza2VlOiBhc2tlZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzdGF0dXM6ICdBY2NlcHRlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWplY3RlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnUmVqZWN0ZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVW5hbnN3ZXJlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnVW5hbnN3ZXJlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrID0gKGlkLCBzdGF0dXMsIGV2ZW50KSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgIGFuc3dlclF1ZXN0aW9uKHtcbiAgICAgICBpZCxcbiAgICAgICBzdGF0dXM6IChzdGF0dXMgPT09ICdBY2NlcHRlZCcgPyAnUmVqZWN0ZWQnIDogc3RhdHVzID09PSAnUmVqZWN0ZWQnID8gJ1VuYW5zd2VyZWQnIDogJ0FjY2VwdGVkJyApXG4gICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVRdWVzdGlvbkNsaWNrID0gKGlkLCBldmVudCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICBkZWxldGVRdWVzdGlvbih7XG4gICAgICAgaWRcbiAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTY29yZSBzY29yZT17Z2V0U2NvcmUocXVlc3Rpb25zKX0gLz5cbiAgICAgIDxBZGRRdWVzdGlvblxuICAgICAgICBxdWVzdGlvblJlZj17cXVlc3Rpb25SZWZ9XG4gICAgICAgIGFza2VlUmVmPXthc2tlZVJlZn1cbiAgICAgICAgaGFuZGxlQWNjZXB0ZWRDbGljaz17aGFuZGxlQWNjZXB0ZWRDbGlja31cbiAgICAgICAgaGFuZGxlUmVqZWN0ZWRDbGljaz17aGFuZGxlUmVqZWN0ZWRDbGlja31cbiAgICAgICAgaGFuZGxlVW5hbnN3ZXJlZENsaWNrPXtoYW5kbGVVbmFuc3dlcmVkQ2xpY2t9IC8+XG4gICAgICA8UXVlc3Rpb25MaXN0XG4gICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICBoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrPXtoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrfVxuICAgICAgICBoYW5kbGVEZWxldGVRdWVzdGlvbkNsaWNrPXtoYW5kbGVEZWxldGVRdWVzdGlvbkNsaWNrfSAvPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgLmFkZC1xdWVzdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWNlbnRlcjtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFkZC1xdWVzdGlvbiBidXR0b24ge1xuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAwIDAgMmVtO1xuICAgICAgICAgIG1hcmdpbjogLjVlbSAwO1xuICAgICAgICB9XG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgICAgIGR0IHtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1heC13aWR0aDogMTVlbTtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAuNWVtIC41ZW0gcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgICAgIG1hcmdpbjogMWVtIDJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgbGkucXVlc3Rpb24gYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4vL2V4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/ssceafson/Documents/Development/JavaScript/DevAnywhere.io/Lessons_HomeWork/Code/rejection/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (App); //export default Home;

/***/ })

})
//# sourceMappingURL=index.js.979fdca3790555f40495.hot-update.js.map