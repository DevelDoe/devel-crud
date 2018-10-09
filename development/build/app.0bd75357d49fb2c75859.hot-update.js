webpackHotUpdate("app",{

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

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! ./assets/scss/root.scss */ "./source/assets/scss/root.scss");

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

var appName = "DevelStrap VueJS";
// Alternatively, you may import plugins individually as needed:
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({ routes: _routes2.default });

new _vue2.default({
  el: '#app',
  store: _store.store,
  data: function data() {
    var data = { appName: appName };
    return data;
  },
  render: function render(h) {
    return h(_App2.default, { props: this.$data });
  },

  router: router
});

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2Uvcm9vdC5qcyJdLCJuYW1lcyI6WyJhcHBOYW1lIiwidXNlIiwicm91dGVyIiwicm91dGVzIiwiZWwiLCJzdG9yZSIsImRhdGEiLCJyZW5kZXIiLCJoIiwicHJvcHMiLCIkZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0E7Ozs7QUFDQTs7OztBQUlBOztBQUtBOztBQUVBOzs7O0FBRUE7Ozs7QUFHQTs7OztBQTFCQTs7Ozs7Ozs7O0FBWUEsSUFBTUEsVUFBVSxrQkFBaEI7QUFHQTtBQUNBO0FBQ0E7O0FBS0EsY0FBSUMsR0FBSjs7QUFFQSxJQUFNQyxTQUFTLHdCQUFjLEVBQUVDLHdCQUFGLEVBQWQsQ0FBZjs7QUFJQSxrQkFBUTtBQUNKQyxNQUFJLE1BREE7QUFFSkMscUJBRkk7QUFHSkMsTUFISSxrQkFHSTtBQUNQLFFBQUlBLE9BQU8sRUFBRU4sU0FBU0EsT0FBWCxFQUFYO0FBQ0EsV0FBT00sSUFBUDtBQUNELEdBTkk7QUFPTEMsUUFQSyxrQkFPR0MsQ0FQSCxFQU9NO0FBQ1QsV0FBT0EsaUJBQU8sRUFBRUMsT0FBTyxLQUFLQyxLQUFkLEVBQVAsQ0FBUDtBQUNELEdBVEk7O0FBVUpSO0FBVkksQ0FBUixFIiwiZmlsZSI6ImFwcC4wYmQ3NTM1N2Q0OWZiMmM3NTg1OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3I6IEFuZHJlZSBSYXkgPGFuZHJlZXJheT5cclxuICogQERhdGU6ICAgMjAxOC0wMS0xM1QyMDoxMjozNCswMTowMFxyXG4gKiBARW1haWw6ICBhbmRyZWVyYXlAbGl2ZS5jb21cclxuICogQEZpbGVuYW1lOiBhcHAuanNcclxuICogQExhc3QgbW9kaWZpZWQgYnk6ICAgTW9yZ2FuIEFuZHJlZSBSYXlcclxuICogQExhc3QgbW9kaWZpZWQgdGltZTogMDgtMDUtMjAxOFxyXG4gKi9cclxuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwLnZ1ZSdcclxuXHJcbmNvbnN0IGFwcE5hbWUgPSBcIkRldmVsU3RyYXAgVnVlSlNcIlxyXG5cclxuaW1wb3J0ICdib290c3RyYXAnXHJcbi8vIEFsdGVybmF0aXZlbHksIHlvdSBtYXkgaW1wb3J0IHBsdWdpbnMgaW5kaXZpZHVhbGx5IGFzIG5lZWRlZDpcclxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC91dGlsJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAvanMvZGlzdC9kcm9wZG93bic7XHJcblxyXG5pbXBvcnQgJy4vYXNzZXRzL3Njc3Mvcm9vdC5zY3NzJ1xyXG5cclxuaW1wb3J0IFZ1ZVJvdXRlciBmcm9tICd2dWUtcm91dGVyJ1xyXG5WdWUudXNlKFZ1ZVJvdXRlcilcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3V0aWxzL3JvdXRlcydcclxuY29uc3Qgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7IHJvdXRlcyB9KVxyXG5cclxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuL3N0b3JlL3N0b3JlJ1xyXG5cclxubmV3IFZ1ZSh7XHJcbiAgICBlbDogJyNhcHAnLFxyXG4gICAgc3RvcmU6IHN0b3JlLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgbGV0IGRhdGEgPSB7IGFwcE5hbWU6IGFwcE5hbWUgfVxyXG4gICAgIHJldHVybiBkYXRhXHJcbiAgIH0sXHJcbiAgIHJlbmRlciAoaCkge1xyXG4gICAgIHJldHVybiBoKEFwcCwgeyBwcm9wczogdGhpcy4kZGF0YSB9KVxyXG4gICB9LFxyXG4gICAgcm91dGVyXHJcbn0pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=