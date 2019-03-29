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
    className: "jsx-932173838"
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
    id: "932173838"
  }, "body{margin:0;padding:0;}ul{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}ul li{border-radius:1em;box-shadow:0 0 .5em .5em rgba(0,0,0,0.5);margin:0 2em;padding:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NzY2VhZnNvbi9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvSmF2YVNjcmlwdC9EZXZBbnl3aGVyZS5pby9MZXNzb25zX0hvbWVXb3JrL0NvZGUvcmVqZWN0aW9uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FeUIsQUFHb0IsQUFJWSxBQUlILFNBUFIsU0FRa0MsQ0FQOUMsRUFHZSxzQ0FLQSxhQUNELFlBQ2QsV0FOQSIsImZpbGUiOiIvaG9tZS9zc2NlYWZzb24vRG9jdW1lbnRzL0RldmVsb3BtZW50L0phdmFTY3JpcHQvRGV2QW55d2hlcmUuaW8vTGVzc29uc19Ib21lV29yay9Db2RlL3JlamVjdGlvbi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHJlamVjdGlvbiwgeyBjcmVhdGVRdWVzdGlvbiwgYW5zd2VyUXVlc3Rpb24sIGdldFNjb3JlIH0gZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9yZWplY3Rpb24tcmVkdWNlcic7XG5pbXBvcnQgU2NvcmUgZnJvbSAnLi4vc3JjL2ZlYXR1cmVzL3JlamVjdGlvbi9zY29yZS9zY29yZS1jb21wb25lbnQnO1xuaW1wb3J0IEFkZFF1ZXN0aW9uIGZyb20gJy4uL3NyYy9mZWF0dXJlcy9yZWplY3Rpb24vYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi1jb21wb25lbnQnO1xuaW1wb3J0IFF1ZXN0aW9uTGlzdCBmcm9tICcuLi9zcmMvZmVhdHVyZXMvcmVqZWN0aW9uL3F1ZXN0aW9uLWxpc3QvcXVlc3Rpb24tbGlzdC1jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBsb2FkU3RhdGUsIHNhdmVTdGF0ZSB9IGZyb20gJy4uL3NyYy9sb2NhbFN0b3JhZ2UnO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcXVlc3Rpb25zLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlamVjdGlvbiwgcmVqZWN0aW9uKGxvYWRTdGF0ZSgpKSk7XG4gIC8vY29uc3QgW3F1ZXN0aW9ucywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWplY3Rpb24sIHJlamVjdGlvbigpKTtcbiAgY29uc3QgcXVlc3Rpb25SZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgYXNrZWVSZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gc2F2ZVN0YXRlKHF1ZXN0aW9ucyksIFtxdWVzdGlvbnNdKTtcblxuICBjb25zdCBoYW5kbGVBY2NlcHRlZENsaWNrID0gZXZlbnQgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgY3JlYXRlUXVlc3Rpb24oe1xuICAgICAgICAncXVlc3Rpb24nOiBxdWVzdGlvblJlZi5jdXJyZW50LnZhbHVlLFxuICAgICAgICBhc2tlZTogYXNrZWVSZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgc3RhdHVzOiAnQWNjZXB0ZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVqZWN0ZWRDbGljayA9IGV2ZW50ID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgICAgICAgJ3F1ZXN0aW9uJzogcXVlc3Rpb25SZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgYXNrZWU6IGFza2VlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHN0YXR1czogJ1JlamVjdGVkJ1xuICAgICAgfSlcbiAgICApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVVuYW5zd2VyZWRDbGljayA9IGV2ZW50ID0+IHtcbiAgICBkaXNwYXRjaChcbiAgICAgIGNyZWF0ZVF1ZXN0aW9uKHtcbiAgICAgICAgJ3F1ZXN0aW9uJzogcXVlc3Rpb25SZWYuY3VycmVudC52YWx1ZSxcbiAgICAgICAgYXNrZWU6IGFza2VlUmVmLmN1cnJlbnQudmFsdWUsXG4gICAgICAgIHN0YXR1czogJ1VuYW5zd2VyZWQnXG4gICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlVG9nZ2xlUXVlc3Rpb25TdGF0dXNDbGljayA9IChpZCwgc3RhdHVzLCBldmVudCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICBhbnN3ZXJRdWVzdGlvbih7XG4gICAgICAgaWQsXG4gICAgICAgc3RhdHVzOiAoc3RhdHVzID09PSAnQWNjZXB0ZWQnID8gJ1JlamVjdGVkJyA6IHN0YXR1cyA9PT0gJ1JlamVjdGVkJyA/ICdVbmFuc3dlcmVkJyA6ICdBY2NlcHRlZCcgKVxuICAgICB9KVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFNjb3JlIHNjb3JlPXtnZXRTY29yZShxdWVzdGlvbnMpfSAvPlxuICAgICAgPEFkZFF1ZXN0aW9uXG4gICAgICAgIHF1ZXN0aW9uUmVmPXtxdWVzdGlvblJlZn1cbiAgICAgICAgYXNrZWVSZWY9e2Fza2VlUmVmfVxuICAgICAgICBoYW5kbGVBY2NlcHRlZENsaWNrPXtoYW5kbGVBY2NlcHRlZENsaWNrfVxuICAgICAgICBoYW5kbGVSZWplY3RlZENsaWNrPXtoYW5kbGVSZWplY3RlZENsaWNrfVxuICAgICAgICBoYW5kbGVVbmFuc3dlcmVkQ2xpY2s9e2hhbmRsZVVuYW5zd2VyZWRDbGlja30gLz5cbiAgICAgIDxRdWVzdGlvbkxpc3RcbiAgICAgICAgcXVlc3Rpb25zPXtxdWVzdGlvbnN9XG4gICAgICAgIGhhbmRsZVRvZ2dsZVF1ZXN0aW9uU3RhdHVzQ2xpY2s9e2hhbmRsZVRvZ2dsZVF1ZXN0aW9uU3RhdHVzQ2xpY2t9IC8+XG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgdWwgbGkge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgLjVlbSAuNWVtIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICBtYXJnaW46IDAgMmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuICAvL3JldHVybiA8ZGl2PldlbGNvbWUgdG8gTmV4dC5qcyE8L2Rpdj5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/ssceafson/Documents/Development/JavaScript/DevAnywhere.io/Lessons_HomeWork/Code/rejection/pages/index.js */"));
} //return <div>Welcome to Next.js!</div>


/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.6ddcf974a6c93ec257eb.hot-update.js.map