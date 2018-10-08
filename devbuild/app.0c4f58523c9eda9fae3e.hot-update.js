webpackHotUpdate("app",{

/***/ "./source/plugins/mixin-plugin.js":
false,

/***/ "./source/root.js":
/*!************************!*\
  !*** ./source/root.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

var _App = __webpack_require__(/*! ./App.vue */ "./source/App.vue");

var _App2 = _interopRequireDefault(_App);

__webpack_require__(/*! ./assets/css/app.scss */ "./source/assets/css/app.scss");

var _vueRouter = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _routes = __webpack_require__(/*! ./utils/routes */ "./source/utils/routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _store = __webpack_require__(/*! ./store/store */ "./source/store/store.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-01-13T20:12:34+01:00
 * @Email:  andreeray@live.com
 * @Filename: app.js
 * @Last modified by:   Morgan Andree Ray
 * @Last modified time: 08-05-2018
 */

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({ routes: _routes2.default });

new _vue2.default({
  el: '#app',
  store: _store.store,
  data: function data() {
    var data = { msg: 'Up and running with Vue' };
    return data;
  },
  render: function render(h) {
    return h(_App2.default, { props: this.$data });
  },

  router: router
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvcm9vdC5qcyJdLCJuYW1lcyI6WyJ1c2UiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJlbCIsInN0b3JlIiwiZGF0YSIsIm1zZyIsInJlbmRlciIsImgiLCJwcm9wcyIsIiRkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFTQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7OztBQUdBOzs7O0FBbEJBOzs7Ozs7Ozs7QUFjQSxjQUFJQSxHQUFKOztBQUVBLElBQU1DLFNBQVMsd0JBQWMsRUFBRUMsd0JBQUYsRUFBZCxDQUFmOztBQUlBLGtCQUFRO0FBQ0pDLE1BQUksTUFEQTtBQUVKQyxxQkFGSTtBQUdKQyxNQUhJLGtCQUdJO0FBQ1AsUUFBSUEsT0FBTyxFQUFFQyxLQUFLLHlCQUFQLEVBQVg7QUFDQSxXQUFPRCxJQUFQO0FBQ0QsR0FOSTtBQU9MRSxRQVBLLGtCQU9HQyxDQVBILEVBT007QUFDVCxXQUFPQSxpQkFBTyxFQUFFQyxPQUFPLEtBQUtDLEtBQWQsRUFBUCxDQUFQO0FBQ0QsR0FUSTs7QUFVSlQ7QUFWSSxDQUFSLEUiLCJmaWxlIjoiYXBwLjBjNGY1ODUyM2M5ZWRhOWZhZTNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvcjogQW5kcmVlIFJheSA8YW5kcmVlcmF5PlxyXG4gKiBARGF0ZTogICAyMDE4LTAxLTEzVDIwOjEyOjM0KzAxOjAwXHJcbiAqIEBFbWFpbDogIGFuZHJlZXJheUBsaXZlLmNvbVxyXG4gKiBARmlsZW5hbWU6IGFwcC5qc1xyXG4gKiBATGFzdCBtb2RpZmllZCBieTogICBNb3JnYW4gQW5kcmVlIFJheVxyXG4gKiBATGFzdCBtb2RpZmllZCB0aW1lOiAwOC0wNS0yMDE4XHJcbiAqL1xyXG5cclxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xyXG5pbXBvcnQgJy4vYXNzZXRzL2Nzcy9hcHAuc2NzcydcclxuXHJcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcclxuVnVlLnVzZShWdWVSb3V0ZXIpXHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi91dGlscy9yb3V0ZXMnXHJcbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoeyByb3V0ZXMgfSlcclxuXHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zdG9yZS9zdG9yZSdcclxuXHJcbm5ldyBWdWUoe1xyXG4gICAgZWw6ICcjYXBwJyxcclxuICAgIHN0b3JlOiBzdG9yZSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgIGxldCBkYXRhID0geyBtc2c6ICdVcCBhbmQgcnVubmluZyB3aXRoIFZ1ZScgfVxyXG4gICAgIHJldHVybiBkYXRhXHJcbiAgIH0sXHJcbiAgIHJlbmRlciAoaCkge1xyXG4gICAgIHJldHVybiBoKEFwcCwgeyBwcm9wczogdGhpcy4kZGF0YSB9KVxyXG4gICB9LFxyXG4gICAgcm91dGVyXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=