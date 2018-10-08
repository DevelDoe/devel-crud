webpackHotUpdate("app",{

/***/ "./node_modules/babel-loader/lib/index.js?presets[]=env!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./source/App.vue":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?presets[]=env!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./source/App.vue ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(/*! ./components/Home.vue */ "./source/components/Home.vue");

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'app',
    props: ['msg'],
    data: function data() {
        return {
            activeNavItem: 'home',
            activeSlideItem: '0'
        };
    },

    methods: {
        isActiveNavItem: function isActiveNavItem(item) {
            return this.activeNavItem === item;
        },
        setActiveNavItem: function setActiveNavItem(item) {
            this.activeNavItem = item;
        }
    },
    components: {
        Home: _Home2.default
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-10506ece\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./source/App.vue":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-10506ece","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./source/App.vue ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c(
        "nav",
        {
          staticClass:
            "navbar navbar-expand-md navbar-light bg-light sticky-top"
        },
        [
          _c("div", { staticClass: "container-fluid" }, [
            _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
              _vm._v(" DevelStrap VueJS ")
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "navbarResponsive" }
              },
              [
                _c("ul", { staticClass: "navbar-nav ml-auto" }, [
                  _c(
                    "li",
                    {
                      class: {
                        "nav-item": true,
                        active: _vm.isActiveNavItem("home")
                      },
                      on: {
                        click: function($event) {
                          _vm.setActiveNavItem("home")
                        }
                      }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-link", attrs: { href: "#" } },
                        [_vm._v("Home ")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      class: {
                        "nav-item": true,
                        active: _vm.isActiveNavItem("about")
                      },
                      on: {
                        click: function($event) {
                          _vm.setActiveNavItem("about")
                        }
                      }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-link", attrs: { href: "#" } },
                        [_vm._v("About ")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      class: {
                        "nav-item": true,
                        active: _vm.isActiveNavItem("services")
                      },
                      on: {
                        click: function($event) {
                          _vm.setActiveNavItem("services")
                        }
                      }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-link", attrs: { href: "#" } },
                        [_vm._v("Services ")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      class: {
                        "nav-item": true,
                        active: _vm.isActiveNavItem("team")
                      },
                      on: {
                        click: function($event) {
                          _vm.setActiveNavItem("team")
                        }
                      }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-link", attrs: { href: "#" } },
                        [_vm._v("Team ")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      class: {
                        "nav-item": true,
                        active: _vm.isActiveNavItem("connect")
                      },
                      on: {
                        click: function($event) {
                          _vm.setActiveNavItem("connect")
                        }
                      }
                    },
                    [
                      _c(
                        "a",
                        { staticClass: "nav-link", attrs: { href: "#" } },
                        [_vm._v("Connect ")]
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _c("h3", [_vm._v("Install")]),
      _vm._v(" "),
      _c("code", [_vm._v("npm install")]),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _c("h3", [_vm._v("Build")]),
      _vm._v(" "),
      _c("code", [_vm._v("npm run dev")]),
      _c("br"),
      _vm._v(" "),
      _c("code", [_vm._v("npm run dist")]),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _c("h3", [_vm._v("Release Log")]),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _c("h3", [_vm._v("Backlog")]),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" -->\r\n\r\n    "),
      _c("keep-alive")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarResponsive"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "carousel slide",
        attrs: { id: "slides", "data-ride": "carousel" }
      },
      [
        _c("ol", { staticClass: "carousel-indicators" }, [
          _c("li", {
            staticClass: "active",
            attrs: { "data-target": "#slides", "data-slide-to": "0" }
          }),
          _vm._v(" "),
          _c("li", {
            attrs: { "data-target": "#slides", "data-slide-to": "1" }
          }),
          _vm._v(" "),
          _c("li", {
            attrs: { "data-target": "#slides", "data-slide-to": "2" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "carousel-inner" }, [
          _c("div", { staticClass: "carousel-item active" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ./assets/img/background.png */ "./source/assets/img/background.png") }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "carousel-caption" }, [
              _c("h1", { staticClass: "display-2" }, [
                _vm._v("DevelStrap VueJS")
              ]),
              _vm._v(" "),
              _c("h3", [_vm._v("starting point for your VueJS projects.")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-outline-light btn-lg",
                  attrs: { type: "button" }
                },
                [_vm._v("VIEW DEMO")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-lg",
                  attrs: { type: "button" }
                },
                [_vm._v("Get Started")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ./assets/img/background2.png */ "./source/assets/img/background2.png") }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "carousel-item" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ./assets/img/background3.png */ "./source/assets/img/background3.png") }
            })
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row jumbotron" }, [
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10" },
          [
            _c("p", { staticClass: "lead" }, [
              _vm._v(
                "This project can be used as a starting point for Vue web app development. It quickly straps all the needs for a complete Vue web app solution. Feel free to clone the repo over at GitHub"
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-xs-12 col-sm-12 col-md-3 col-lg-9 col-xl-2" },
          [
            _c(
              "a",
              { attrs: { href: "https://github.com/DevelDoe/devel-vue" } },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-secondary btn-lg",
                    attrs: { type: "button" }
                  },
                  [_vm._v("GitHub")]
                )
              ]
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid padded" }, [
      _c("div", { staticClass: "row welcome text-center" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h1", { staticClass: "display-4" }, [_vm._v("Built with ease.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12" }, [
          _c("p", { staticClass: "lead" }, [
            _vm._v(
              "Welcome to my VueJS strap application!\r\n                DevelStrap VueJS is a free and open-source front-end Vue application that you can use as a starting point for your VueJS applications."
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid padding" }, [
      _c("div", { staticClass: "row text-center padding" }, [
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
          _c("i", { staticClass: "fa fa-code" }),
          _vm._v(" "),
          _c("h3", [_vm._v("VueJS")]),
          _vm._v(" "),
          _c("p", [_vm._v("The Progressive JavaScript Framework.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
          _c("i", { staticClass: "fa fa-times" }),
          _vm._v(" "),
          _c("h3", [_vm._v("VueX")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
          _c("i", { staticClass: "fa fa-bold" }),
          _vm._v(" "),
          _c("h3", [_vm._v("Bootstrap")])
        ])
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [_vm._v("1.0 skeleton")]),
      _vm._v(" "),
      _c("li", [_vm._v("1.1 Vue Router")]),
      _vm._v(" "),
      _c("li", [_vm._v("1.2 VueX")]),
      _vm._v(" "),
      _c("li", [_vm._v("1.3 Bootstrap")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", [
      _c("li", [_vm._v("Authentication & Authorization")]),
      _vm._v(" "),
      _c("li", [_vm._v("File Uploader")])
    ])
  }
]
render._withStripped = true

if (true) {
  module.hot.accept()
  if (module.hot.data) {
    __webpack_require__(/*! vue-hot-reload-api */ "./node_modules/vue-hot-reload-api/dist/index.js")      .rerender("data-v-10506ece", { render: render, staticRenderFns: staticRenderFns })
  }
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc291cmNlL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0FwcC52dWU/YTI4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBNElBOzs7Ozs7a0JBRUE7QUFDQSxlQURBO0FBRUEsa0JBRkE7QUFHQSxRQUhBLGtCQUdBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBO0FBRkE7QUFJQSxLQVJBOztBQVNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFOQSxLQVRBO0FBaUJBO0FBQ0E7QUFEQTtBQWpCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxZQUFZLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RCxxQkFBcUIsc0NBQXNDLFlBQVksRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0NBQWtDLFlBQVksRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFD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QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0NBQXdDO0FBQzlELGlCQUFpQix5Q0FBeUM7QUFDMUQsbUJBQW1CLHdCQUF3QjtBQUMzQyxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDLG1CQUFtQixzQkFBc0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUNBQXlDO0FBQy9ELGlCQUFpQix5Q0FBeUM7QUFDMUQsbUJBQW1CLDZDQUE2QztBQUNoRSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEUsbUJBQW1CLDZCQUE2QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBNkM7QUFDaEUsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHdJQUFxRSxtREFBbUQ7QUFDeEg7QUFDQSxDIiwiZmlsZSI6ImFwcC5kNGUxYTg1ZTZhZjVjNWU2MjY4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxyXG5AQXV0aG9yOiBBbmRyZWUgUmF5IDxhbmRyZWVyYXk+XHJcbkBEYXRlOiAgIDIwMTgtMDEtMThUMjE6MjM6MDQrMDE6MDBcclxuQEVtYWlsOiAgYW5kcmVlcmF5QGxpdmUuY29tXHJcbkBGaWxlbmFtZTogQXBwLnZ1ZVxyXG5ATGFzdCBtb2RpZmllZCBieTogICBNb3JnYW4gQW5kcmVlIFJheVxyXG5ATGFzdCBtb2RpZmllZCB0aW1lOiAwOC0wNS0yMDE4XHJcbi0tPlxyXG5cclxuPHRlbXBsYXRlPlxuPGRpdiBpZD1cImFwcFwiPlxyXG5cclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1tZCBuYXZiYXItbGlnaHQgYmctbGlnaHQgc3RpY2t5LXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPiBEZXZlbFN0cmFwIFZ1ZUpTIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJSZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJSZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1vbjpjbGljaz1cInNldEFjdGl2ZU5hdkl0ZW0oJ2hvbWUnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ2hvbWUnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhvbWUgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCdhYm91dCcpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgnYWJvdXQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkFib3V0IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnc2VydmljZXMnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ3NlcnZpY2VzJyksIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+U2VydmljZXMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCd0ZWFtJylcIiA6Y2xhc3M9XCJ7ICduYXYtaXRlbSc6IHRydWUsIGFjdGl2ZTogaXNBY3RpdmVOYXZJdGVtKCd0ZWFtJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5UZWFtIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnY29ubmVjdCcpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgnY29ubmVjdCcpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+Q29ubmVjdCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcblxyXG4gICAgPGRpdiBpZD1cInNsaWRlc1wiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVzXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktMlwiPkRldmVsU3RyYXAgVnVlSlM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5zdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBwcm9qZWN0cy48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1sZ1wiPlZJRVcgREVNTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPkdldCBTdGFydGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMi5wbmdcIiA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDMucG5nXCIgPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtOSBjb2wtbGctOSBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlRoaXMgcHJvamVjdCBjYW4gYmUgdXNlZCBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciBWdWUgd2ViIGFwcCBkZXZlbG9wbWVudC4gSXQgcXVpY2tseSBzdHJhcHMgYWxsIHRoZSBuZWVkcyBmb3IgYSBjb21wbGV0ZSBWdWUgd2ViIGFwcCBzb2x1dGlvbi4gRmVlbCBmcmVlIHRvIGNsb25lIHRoZSByZXBvIG92ZXIgYXQgR2l0SHViPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTkgY29sLXhsLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxEb2UvZGV2ZWwtdnVlXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiPkdpdEh1YjwvYnV0dG9uPiA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS00XCI+QnVpbHQgd2l0aCBlYXNlLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5XZWxjb21lIHRvIG15IFZ1ZUpTIHN0cmFwIGFwcGxpY2F0aW9uIVxyXG4gICAgICAgICAgICAgICAgRGV2ZWxTdHJhcCBWdWVKUyBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIGZyb250LWVuZCBWdWUgYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIHVzZSBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIFZ1ZUpTIGFwcGxpY2F0aW9ucy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlciBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY29kZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxoMz5WdWVKUzwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgUHJvZ3Jlc3NpdmUgSmF2YVNjcmlwdCBGcmFtZXdvcmsuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxoMz5WdWVYPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYm9sZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDxoMz5Cb290c3RyYXA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3M9XCJteS00XCI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aHIgY2xhc3M9XCJteS00XCI+XHJcbiAgICA8aDM+SW5zdGFsbDwvaDM+XHJcbiAgICA8Y29kZT5ucG0gaW5zdGFsbDwvY29kZT5cclxuICAgIDxociBjbGFzcz1cIm15LTRcIj5cclxuXHJcbiAgICA8aDM+QnVpbGQ8L2gzPlxyXG4gICAgPGNvZGU+bnBtIHJ1biBkZXY8L2NvZGU+PGJyLz5cclxuICAgIDxjb2RlPm5wbSBydW4gZGlzdDwvY29kZT5cclxuICAgIDxociBjbGFzcz1cIm15LTRcIj5cclxuXHJcbiAgICA8aDM+UmVsZWFzZSBMb2c8L2gzPlxyXG4gICAgPHVsPlxyXG4gICAgICAgIDxsaT4xLjAgc2tlbGV0b248L2xpPlxyXG4gICAgICAgIDxsaT4xLjEgVnVlIFJvdXRlcjwvbGk+XHJcbiAgICAgICAgPGxpPjEuMiBWdWVYPC9saT5cclxuICAgICAgICA8bGk+MS4zIEJvb3RzdHJhcDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPGhyIGNsYXNzPVwibXktNFwiPlxyXG5cclxuICAgIDxoMz5CYWNrbG9nPC9oMz5cclxuICAgIDx1bD5cclxuICAgICAgICA8bGk+QXV0aGVudGljYXRpb24gJiBBdXRob3JpemF0aW9uPC9saT5cclxuICAgICAgICA8bGk+RmlsZSBVcGxvYWRlcjwvbGk+XHJcbiAgICA8L3VsPiAtLT5cclxuXHJcbiAgICA8a2VlcC1hbGl2ZT5cclxuICAgICAgICA8IS0tIDxyb3V0ZXItdmlldyB2LWJpbmQ6bXNnPVwibXNnXCI+PC9yb3V0ZXItdmlldz4gLS0+XHJcbiAgICA8L2tlZXAtYWxpdmU+XHJcblxyXG48L2Rpdj5cbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2FwcCcsXHJcbiAgICBwcm9wczogWydtc2cnXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWN0aXZlTmF2SXRlbTogJ2hvbWUnLFxyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZUl0ZW06ICcwJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaXNBY3RpdmVOYXZJdGVtOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU5hdkl0ZW0gPT09IGl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFjdGl2ZU5hdkl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVOYXZJdGVtID0gaXRlbVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSG9tZVxyXG4gICAgfVxyXG59XG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIm5hdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcIm5hdmJhciBuYXZiYXItZXhwYW5kLW1kIG5hdmJhci1saWdodCBiZy1saWdodCBzdGlja3ktdG9wXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWJyYW5kXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIgRGV2ZWxTdHJhcCBWdWVKUyBcIilcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcIm5hdmJhclJlc3BvbnNpdmVcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLW5hdiBtbC1hdXRvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdi1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJob21lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcImhvbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiSG9tZSBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwiYWJvdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXRBY3RpdmVOYXZJdGVtKFwiYWJvdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWJvdXQgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcInNlcnZpY2VzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcInNlcnZpY2VzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNlcnZpY2VzIFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdi1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJ0ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcInRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVGVhbSBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwiY29ubmVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJjb25uZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNvbm5lY3QgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDMpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg0KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhyXCIsIHsgc3RhdGljQ2xhc3M6IFwibXktNFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkluc3RhbGxcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm5wbSBpbnN0YWxsXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY0NsYXNzOiBcIm15LTRcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJCdWlsZFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibnBtIHJ1biBkZXZcIildKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoXCJucG0gcnVuIGRpc3RcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImhyXCIsIHsgc3RhdGljQ2xhc3M6IFwibXktNFwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlJlbGVhc2UgTG9nXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDUpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQmFja2xvZ1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg2KSxcbiAgICAgIF92bS5fdihcIiAtLT5cXHJcXG5cXHJcXG4gICAgXCIpLFxuICAgICAgX2MoXCJrZWVwLWFsaXZlXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbmF2YmFyUmVzcG9uc2l2ZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiIH0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbCBzbGlkZVwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJzbGlkZXNcIiwgXCJkYXRhLXJpZGVcIjogXCJjYXJvdXNlbFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwib2xcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pbmRpY2F0b3JzXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIwXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIxXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIyXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWlubmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWNhcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiRGV2ZWxTdHJhcCBWdWVKU1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwic3RhcnRpbmcgcG9pbnQgZm9yIHlvdXIgVnVlSlMgcHJvamVjdHMuXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1sZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVklFVyBERU1PXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkdldCBTdGFydGVkXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDIucG5nXCIpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMy5wbmdcIikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdW1ib3Ryb25cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC05IGNvbC1sZy05IGNvbC14bC0xMFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiVGhpcyBwcm9qZWN0IGNhbiBiZSB1c2VkIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIFZ1ZSB3ZWIgYXBwIGRldmVsb3BtZW50LiBJdCBxdWlja2x5IHN0cmFwcyBhbGwgdGhlIG5lZWRzIGZvciBhIGNvbXBsZXRlIFZ1ZSB3ZWIgYXBwIHNvbHV0aW9uLiBGZWVsIGZyZWUgdG8gY2xvbmUgdGhlIHJlcG8gb3ZlciBhdCBHaXRIdWJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTkgY29sLXhsLTJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbERvZS9kZXZlbC12dWVcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHaXRIdWJcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHBhZGRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTRcIiB9LCBbX3ZtLl92KFwiQnVpbHQgd2l0aCBlYXNlLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIldlbGNvbWUgdG8gbXkgVnVlSlMgc3RyYXAgYXBwbGljYXRpb24hXFxyXFxuICAgICAgICAgICAgICAgIERldmVsU3RyYXAgVnVlSlMgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSBmcm9udC1lbmQgVnVlIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiB1c2UgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBhcHBsaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtY29kZVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiVnVlSlNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiVGhlIFByb2dyZXNzaXZlIEphdmFTY3JpcHQgRnJhbWV3b3JrLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10aW1lc1wiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiVnVlWFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1ib2xkXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJCb290c3RyYXBcIildKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY0NsYXNzOiBcIm15LTRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidWxcIiwgW1xuICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4wIHNrZWxldG9uXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4xIFZ1ZSBSb3V0ZXJcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCIxLjIgVnVlWFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIjEuMyBCb290c3RyYXBcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidWxcIiwgW1xuICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiQXV0aGVudGljYXRpb24gJiBBdXRob3JpemF0aW9uXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiRmlsZSBVcGxvYWRlclwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTEwNTA2ZWNlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9