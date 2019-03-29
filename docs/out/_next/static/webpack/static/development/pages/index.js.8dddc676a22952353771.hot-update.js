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
      dispatch = _useReducer2[1]; //const [questions, dispatch] = useReducer(rejection, rejection());


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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-245604023"
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
    handleToggleQuestionStatusClick: handleToggleQuestionStatusClick
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "245604023"
  }, "body{margin:0;padding:0;}ul{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul li{box-shadow:0 0 10px 10px rgba(0,0,0,0.5);padding:5px 10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FeUIsQUFHb0IsQUFJWSxBQUl1QixTQVBsQyxVQUNaLEVBR2Usb0JBSUksaUJBQ25CLHFDQUpBIiwiZmlsZSI6Ii9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgcmVqZWN0aW9uLCB7IGNyZWF0ZVF1ZXN0aW9uLCBhbnN3ZXJRdWVzdGlvbiwgZ2V0U2NvcmUgfSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3JlamVjdGlvbi1yZWR1Y2VyJztcbmltcG9ydCBTY29yZSBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3Njb3JlL3Njb3JlLWNvbXBvbmVudCc7XG5pbXBvcnQgQWRkUXVlc3Rpb24gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9hZGQtcXVlc3Rpb24vYWRkLXF1ZXN0aW9uLWNvbXBvbmVudCc7XG5pbXBvcnQgUXVlc3Rpb25MaXN0IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vcXVlc3Rpb24tbGlzdC9xdWVzdGlvbi1saXN0LWNvbXBvbmVudCc7XG5cbmltcG9ydCB7IGxvYWRTdGF0ZSwgc2F2ZVN0YXRlIH0gZnJvbSAnLi4vc3JjL2xvY2FsU3RvcmFnZSc7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtxdWVzdGlvbnMsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVqZWN0aW9uLCByZWplY3Rpb24obG9hZFN0YXRlKCkpKTtcbiAgLy9jb25zdCBbcXVlc3Rpb25zLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlamVjdGlvbiwgcmVqZWN0aW9uKCkpO1xuICBjb25zdCBxdWVzdGlvblJlZiA9IHVzZVJlZigpO1xuICBjb25zdCBhc2tlZVJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiBzYXZlU3RhdGUocXVlc3Rpb25zKSwgW3F1ZXN0aW9uc10pO1xuXG4gIGNvbnN0IGhhbmRsZUFjY2VwdGVkQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBjcmVhdGVRdWVzdGlvbih7XG4gICAgICAgICdxdWVzdGlvbic6IHF1ZXN0aW9uUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIGFza2VlOiBhc2tlZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzdGF0dXM6ICdBY2NlcHRlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZWplY3RlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnUmVqZWN0ZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVW5hbnN3ZXJlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnVW5hbnN3ZXJlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrID0gKGlkLCBzdGF0dXMsIGV2ZW50KSA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgIGFuc3dlclF1ZXN0aW9uKHtcbiAgICAgICBpZCxcbiAgICAgICBzdGF0dXM6IChzdGF0dXMgPT09ICdBY2NlcHRlZCcgPyAnUmVqZWN0ZWQnIDogc3RhdHVzID09PSAnUmVqZWN0ZWQnID8gJ1VuYW5zd2VyZWQnIDogJ0FjY2VwdGVkJyApXG4gICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8U2NvcmUgc2NvcmU9e2dldFNjb3JlKHF1ZXN0aW9ucyl9IC8+XG4gICAgICA8QWRkUXVlc3Rpb25cbiAgICAgICAgcXVlc3Rpb25SZWY9e3F1ZXN0aW9uUmVmfVxuICAgICAgICBhc2tlZVJlZj17YXNrZWVSZWZ9XG4gICAgICAgIGhhbmRsZUFjY2VwdGVkQ2xpY2s9e2hhbmRsZUFjY2VwdGVkQ2xpY2t9XG4gICAgICAgIGhhbmRsZVJlamVjdGVkQ2xpY2s9e2hhbmRsZVJlamVjdGVkQ2xpY2t9XG4gICAgICAgIGhhbmRsZVVuYW5zd2VyZWRDbGljaz17aGFuZGxlVW5hbnN3ZXJlZENsaWNrfSAvPlxuICAgICAgPFF1ZXN0aW9uTGlzdFxuICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgaGFuZGxlVG9nZ2xlUXVlc3Rpb25TdGF0dXNDbGljaz17aGFuZGxlVG9nZ2xlUXVlc3Rpb25TdGF0dXNDbGlja30gLz5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiAgLy9yZXR1cm4gPGRpdj5XZWxjb21lIHRvIE5leHQuanMhPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/ssceafson/Documents/Development/JavaScript/DevAnywhere.io/Lessons_HomeWork/Code/rejection/pages/index.js */"));
} //return <div>Welcome to Next.js!</div>


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.8dddc676a22952353771.hot-update.js.map