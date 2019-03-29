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
    className: "jsx-2858788431"
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
    id: "2858788431"
  }, "body{margin:0;padding:0;}ul{list-style-type:none;}ul li{box-shadow:0 0 10px 10px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FeUIsQUFHb0IsQUFJWSxBQUd1QixTQU5sQyxVQUNaLEVBR0Esb0JBR0EiLCJmaWxlIjoiL2hvbWUvc3NjZWFmc29uL0RvY3VtZW50cy9EZXZlbG9wbWVudC9KYXZhU2NyaXB0L0RldkFueXdoZXJlLmlvL0xlc3NvbnNfSG9tZVdvcmsvQ29kZS9yZWplY3Rpb24vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCByZWplY3Rpb24sIHsgY3JlYXRlUXVlc3Rpb24sIGFuc3dlclF1ZXN0aW9uLCBnZXRTY29yZSB9IGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vcmVqZWN0aW9uLXJlZHVjZXInO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vc2NvcmUvc2NvcmUtY29tcG9uZW50JztcbmltcG9ydCBBZGRRdWVzdGlvbiBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL2FkZC1xdWVzdGlvbi9hZGQtcXVlc3Rpb24tY29tcG9uZW50JztcbmltcG9ydCBRdWVzdGlvbkxpc3QgZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9xdWVzdGlvbi1saXN0L3F1ZXN0aW9uLWxpc3QtY29tcG9uZW50JztcblxuaW1wb3J0IHsgbG9hZFN0YXRlLCBzYXZlU3RhdGUgfSBmcm9tICcuLi9zcmMvbG9jYWxTdG9yYWdlJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3F1ZXN0aW9ucywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWplY3Rpb24sIHJlamVjdGlvbihsb2FkU3RhdGUoKSkpO1xuICAvL2NvbnN0IFtxdWVzdGlvbnMsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVqZWN0aW9uLCByZWplY3Rpb24oKSk7XG4gIGNvbnN0IHF1ZXN0aW9uUmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IGFza2VlUmVmID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHNhdmVTdGF0ZShxdWVzdGlvbnMpLCBbcXVlc3Rpb25zXSk7XG5cbiAgY29uc3QgaGFuZGxlQWNjZXB0ZWRDbGljayA9IGV2ZW50ID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgICAgICAgJ3F1ZXN0aW9uJzogcXVlc3Rpb25SZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgYXNrZWU6IGFza2VlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHN0YXR1czogJ0FjY2VwdGVkJ1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlamVjdGVkQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBjcmVhdGVRdWVzdGlvbih7XG4gICAgICAgICdxdWVzdGlvbic6IHF1ZXN0aW9uUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIGFza2VlOiBhc2tlZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzdGF0dXM6ICdSZWplY3RlZCdcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVVbmFuc3dlcmVkQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgZGlzcGF0Y2goXG4gICAgICBjcmVhdGVRdWVzdGlvbih7XG4gICAgICAgICdxdWVzdGlvbic6IHF1ZXN0aW9uUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIGFza2VlOiBhc2tlZVJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBzdGF0dXM6ICdVbmFuc3dlcmVkJ1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZVF1ZXN0aW9uU3RhdHVzQ2xpY2sgPSAoaWQsIHN0YXR1cywgZXZlbnQpID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgYW5zd2VyUXVlc3Rpb24oe1xuICAgICAgIGlkLFxuICAgICAgIHN0YXR1czogKHN0YXR1cyA9PT0gJ0FjY2VwdGVkJyA/ICdSZWplY3RlZCcgOiBzdGF0dXMgPT09ICdSZWplY3RlZCcgPyAnVW5hbnN3ZXJlZCcgOiAnQWNjZXB0ZWQnIClcbiAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxTY29yZSBzY29yZT17Z2V0U2NvcmUocXVlc3Rpb25zKX0gLz5cbiAgICAgIDxBZGRRdWVzdGlvblxuICAgICAgICBxdWVzdGlvblJlZj17cXVlc3Rpb25SZWZ9XG4gICAgICAgIGFza2VlUmVmPXthc2tlZVJlZn1cbiAgICAgICAgaGFuZGxlQWNjZXB0ZWRDbGljaz17aGFuZGxlQWNjZXB0ZWRDbGlja31cbiAgICAgICAgaGFuZGxlUmVqZWN0ZWRDbGljaz17aGFuZGxlUmVqZWN0ZWRDbGlja31cbiAgICAgICAgaGFuZGxlVW5hbnN3ZXJlZENsaWNrPXtoYW5kbGVVbmFuc3dlcmVkQ2xpY2t9IC8+XG4gICAgICA8UXVlc3Rpb25MaXN0XG4gICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICBoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrPXtoYW5kbGVUb2dnbGVRdWVzdGlvblN0YXR1c0NsaWNrfSAvPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICB1bCBsaSB7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiAgLy9yZXR1cm4gPGRpdj5XZWxjb21lIHRvIE5leHQuanMhPC9kaXY+XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/home/ssceafson/Documents/Development/JavaScript/DevAnywhere.io/Lessons_HomeWork/Code/rejection/pages/index.js */"));
} //return <div>Welcome to Next.js!</div>


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3bf5701e2bf6f3a20485.hot-update.js.map