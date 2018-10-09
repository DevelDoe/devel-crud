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
            "navbar navbar-expand-sm navbar-light bg-light sticky-top"
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
      _vm._m(5),
      _vm._v(" "),
      _c("hr", { staticClass: "my-4" }),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _vm._m(9),
      _vm._v(" "),
      _vm._m(10),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "fun",
          attrs: { "data-toggle": "collapse", "data-target": "#backlog" }
        },
        [_vm._v("comming soon")]
      ),
      _vm._v(" "),
      _vm._m(11),
      _vm._v(" "),
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
          _c("img", {
            attrs: {
              src: "https://vuejs.org/images/logo.png",
              alt: "",
              height: "42",
              width: "42"
            }
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("VueJS")]),
          _vm._v(" "),
          _c("p", [_vm._v("The Progressive JavaScript Framework.")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
          _c("img", {
            attrs: {
              src:
                "https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png",
              alt: "",
              height: "42",
              width: "42"
            }
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("VueX")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("Centralized store for all the components in an application")
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
          _c("img", {
            attrs: {
              src: "https://avatars1.githubusercontent.com/u/2105791?v=3&s=400",
              alt: "",
              height: "42",
              width: "42"
            }
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("Webpack")]),
          _vm._v(" "),
          _c("p", [_vm._v("The most popular module bundler. ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-sm-6 col-md-4" }, [
          _c("img", {
            attrs: {
              src:
                "https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg",
              alt: "",
              height: "42",
              width: "42"
            }
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("Babel")]),
          _vm._v(" "),
          _c("p", [_vm._v("The next generation JavaScript compiler. ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xs-12 col-md-4" }, [
          _c("img", {
            attrs: {
              src:
                "https://cdn-images-1.medium.com/max/2000/1*9HanDsRU11ZMsgDGJwN96w.png",
              alt: "",
              height: "42",
              width: "42"
            }
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("Bootstrap")]),
          _vm._v(" "),
          _c("p", [
            _vm._v("The most popular HTML, CSS, and JS library in the world.")
          ])
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
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row padding" }, [
        _c("div", { staticClass: "col-md-12 col-lg-6" }, [
          _c("h2", [_vm._v("Get Started...")]),
          _vm._v(" "),
          _c("h4", [_vm._v("Clone")]),
          _vm._v(" "),
          _c("code", [
            _vm._v("git clone git@github.com:DevelDoe/devel-vue.git")
          ]),
          _vm._v(" "),
          _c("h4", [_vm._v("Install")]),
          _vm._v(" "),
          _c("code", [_vm._v("npm install")]),
          _vm._v(" "),
          _c("h4", [_vm._v("Build")]),
          _vm._v(" "),
          _c("code", [_vm._v("npm run dev")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("img", {
            staticClass: "img-fluid",
            attrs: {
              src:
                "https://media.wired.com/photos/5b36a5b6e237e87ce9592b8e/191:100/pass/Github-Microsoft-BIZ-FINAL.jpg",
              alt: "github"
            }
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row welcome text-center" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h1", { staticClass: "display-4" }, [_vm._v("Me Myself and I")])
        ]),
        _vm._v(" "),
        _c("hr")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid padding" }, [
      _c("div", { staticClass: "row padding" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card", staticStyle: { border: "none" } }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src:
                  "https://www.w3.org/html/logo/downloads/HTML5_Badge_256.png",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Structure")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Proper HTML5 structuring and scemantics to indicate clearly what role is played by the content those tags contain. HTML tags are (mostly) used to format content,these tags tell the browser how to display the content on the page."
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: {
                    href: "https://www.semrush.com/blog/semantic-html5-guide/"
                  }
                },
                [_vm._v("More")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card", staticStyle: { border: "none" } }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src:
                  "https://marketing.dcassetcdn.com/blog/2016/January/2016-web-design-trends/CSS3Logo_300.png",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Presentation")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Mobile first, responsive design for a rich understanding of what users are looking for and the right way to deliver it for the best user experience. "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: {
                    href:
                      "https://alistapart.com/article/responsive-web-design/"
                  }
                },
                [_vm._v("More")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "card", staticStyle: { border: "none" } }, [
            _c("img", {
              staticClass: "card-img-top",
              attrs: {
                src:
                  "https://www.pixelperfect.co.za/wp-content/uploads/2018/07/JS.png",
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Behavior")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Using Javascript to code front-end has come a long way from just validation and jQuery hooks to create dynamic web pages. Today the complex single page applications rely heavely on frameworks such as VueJS, React and Angular.  "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "btn btn-outline-secondary",
                  attrs: {
                    href: "https://www.semrush.com/blog/semantic-html5-guide/"
                  }
                },
                [_vm._v("More")]
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row padding" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("h2", [_vm._v("Release Log")]),
          _vm._v(" "),
          _c("ul", [
            _c("li", [_vm._v("1.0 skeleton")]),
            _vm._v(" "),
            _c("li", [_vm._v("1.1 Vue Router")]),
            _vm._v(" "),
            _c("li", [_vm._v("1.2 VueX")]),
            _vm._v(" "),
            _c("li", [_vm._v("1.3 Bootstrap")])
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
        _c("h2", [_vm._v("Connect")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", [
      _c("div", { staticClass: "fixed-wrap" }, [
        _c("div", { attrs: { id: "fixed" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "collapse", attrs: { id: "backlog" } }, [
      _c("div", { staticClass: "container-fluid padding" }, [
        _c("div", { staticClass: "row text-center" }, [
          _c("div", { staticClass: "col-sm-6 col-md-3" }, [
            _c("p", [_vm._v("Authentication & Authorization")])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6 col-md-3" }, [
            _c("p", [_vm._v("File Uploader")])
          ])
        ])
      ])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc291cmNlL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0FwcC52dWU/YTI4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBK09BOzs7Ozs7a0JBRUE7QUFDQSxlQURBO0FBRUEsa0JBRkE7QUFHQSxRQUhBLGtCQUdBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBO0FBRkE7QUFJQSxLQVJBOztBQVNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFOQSxLQVRBO0FBaUJBO0FBQ0E7QUFEQTtBQWpCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pQQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxZQUFZLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RCxxQkFBcUIsc0NBQXNDLFlBQVksRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIs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Q1E7QUFDUjtBQUNBO0FBQ0E7QUFDQSx3SUFBcUUsbURBQW1EO0FBQ3hIO0FBQ0EsQyIsImZpbGUiOiJhcHAuOTM0NzNmMzU0NmM1NTNkMGNkODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjwhLS1cclxuQEF1dGhvcjogQW5kcmVlIFJheSA8YW5kcmVlcmF5PlxyXG5ARGF0ZTogICAyMDE4LTAxLTE4VDIxOjIzOjA0KzAxOjAwXHJcbkBFbWFpbDogIGFuZHJlZXJheUBsaXZlLmNvbVxyXG5ARmlsZW5hbWU6IEFwcC52dWVcclxuQExhc3QgbW9kaWZpZWQgYnk6ICAgTW9yZ2FuIEFuZHJlZSBSYXlcclxuQExhc3QgbW9kaWZpZWQgdGltZTogMDgtMDUtMjAxOFxyXG4tLT5cclxuXHJcbjx0ZW1wbGF0ZT5cbjxkaXYgaWQ9XCJhcHBcIj5cclxuXHJcbiAgICA8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci1leHBhbmQtc20gbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0IHN0aWNreS10b3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj4gRGV2ZWxTdHJhcCBWdWVKUyA8L2E+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyUmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyUmVzcG9uc2l2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdiBtbC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCdob21lJylcIiA6Y2xhc3M9XCJ7ICduYXYtaXRlbSc6IHRydWUsIGFjdGl2ZTogaXNBY3RpdmVOYXZJdGVtKCdob21lJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5Ib21lIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnYWJvdXQnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ2Fib3V0JykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5BYm91dCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1vbjpjbGljaz1cInNldEFjdGl2ZU5hdkl0ZW0oJ3NlcnZpY2VzJylcIiA6Y2xhc3M9XCJ7ICduYXYtaXRlbSc6IHRydWUsIGFjdGl2ZTogaXNBY3RpdmVOYXZJdGVtKCdzZXJ2aWNlcycpLCB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPlNlcnZpY2VzIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgndGVhbScpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgndGVhbScpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+VGVhbSA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1vbjpjbGljaz1cInNldEFjdGl2ZU5hdkl0ZW0oJ2Nvbm5lY3QnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ2Nvbm5lY3QnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkNvbm5lY3QgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG5cclxuICAgIDxkaXYgaWQ9XCJzbGlkZXNcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNzbGlkZXNcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlc1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlc1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgICAgICA8L29sPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2JhY2tncm91bmQucG5nXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWNhcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTJcIj5EZXZlbFN0cmFwIFZ1ZUpTPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8aDM+c3RhcnRpbmcgcG9pbnQgZm9yIHlvdXIgVnVlSlMgcHJvamVjdHMuPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tbGdcIj5WSUVXIERFTU88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj5HZXQgU3RhcnRlZDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDIucG5nXCIgPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9hc3NldHMvaW1nL2JhY2tncm91bmQzLnBuZ1wiID5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBqdW1ib3Ryb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTkgY29sLWxnLTkgY29sLXhsLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5UaGlzIHByb2plY3QgY2FuIGJlIHVzZWQgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgVnVlIHdlYiBhcHAgZGV2ZWxvcG1lbnQuIEl0IHF1aWNrbHkgc3RyYXBzIGFsbCB0aGUgbmVlZHMgZm9yIGEgY29tcGxldGUgVnVlIHdlYiBhcHAgc29sdXRpb24uIEZlZWwgZnJlZSB0byBjbG9uZSB0aGUgcmVwbyBvdmVyIGF0IEdpdEh1YjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy05IGNvbC14bC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0RldmVsRG9lL2RldmVsLXZ1ZVwiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tbGdcIj5HaXRIdWI8L2J1dHRvbj4gPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcGFkZGVkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3ZWxjb21lIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNFwiPkJ1aWx0IHdpdGggZWFzZS48L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkXCI+V2VsY29tZSB0byBteSBWdWVKUyBzdHJhcCBhcHBsaWNhdGlvbiFcclxuICAgICAgICAgICAgICAgIERldmVsU3RyYXAgVnVlSlMgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSBmcm9udC1lbmQgVnVlIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiB1c2UgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBhcHBsaWNhdGlvbnMuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZ1ZUpTPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBQcm9ncmVzc2l2ZSBKYXZhU2NyaXB0IEZyYW1ld29yay48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzcxMTAxMzYvMjkwMDI4NTctOWU4MDJmMDgtN2FiNC0xMWU3LTljMzEtNjA0YjVkMGQwYzE5LnBuZ1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZ1ZVg8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2VudHJhbGl6ZWQgc3RvcmUgZm9yIGFsbCB0aGUgY29tcG9uZW50cyBpbiBhbiBhcHBsaWNhdGlvbjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMTA1NzkxP3Y9MyZzPTQwMFwiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPldlYnBhY2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIG1vc3QgcG9wdWxhciBtb2R1bGUgYnVuZGxlci4gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzdhMTk3Y2ZlNDQ1NDhjYzFhM2Y1ODExNTJhZjcwYTMwNTFlMTE2NzEvNzhkZjgvaW1nL2JhYmVsLnN2Z1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkJhYmVsPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBuZXh0IGdlbmVyYXRpb24gSmF2YVNjcmlwdCBjb21waWxlci4gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yMDAwLzEqOUhhbkRzUlUxMVpNc2dER0p3Tjk2dy5wbmdcIiBhbHQ9XCJcIiBoZWlnaHQ9XCI0MlwiIHdpZHRoPVwiNDJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5Cb290c3RyYXA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBsaWJyYXJ5IGluIHRoZSB3b3JsZC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociBjbGFzcz1cIm15LTRcIj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gVHdvIENvbHVtbiBTZWN0aW9uIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+R2V0IFN0YXJ0ZWQuLi48L2gyPlxyXG4gICAgICAgICAgICAgICAgPGg0PkNsb25lPC9oND5cclxuICAgICAgICAgICAgICAgIDxjb2RlPmdpdCBjbG9uZSBnaXRAZ2l0aHViLmNvbTpEZXZlbERvZS9kZXZlbC12dWUuZ2l0PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgPGg0Pkluc3RhbGw8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+bnBtIGluc3RhbGw8L2NvZGU+XHJcbiAgICAgICAgICAgICAgICA8aDQ+QnVpbGQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+bnBtIHJ1biBkZXY8L2NvZGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS53aXJlZC5jb20vcGhvdG9zLzViMzZhNWI2ZTIzN2U4N2NlOTU5MmI4ZS8xOTE6MTAwL3Bhc3MvR2l0aHViLU1pY3Jvc29mdC1CSVotRklOQUwuanBnXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aHIgY2xhc3M9XCJteS00XCI+XHJcblxyXG5cclxuICAgIDwhLS0gTWUgTXlzZWxmIEFuZCBJIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgd2VsY29tZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTRcIj5NZSBNeXNlbGYgYW5kIEk8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cImJvcmRlcjpub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBzcmM9XCJodHRwczovL3d3dy53My5vcmcvaHRtbC9sb2dvL2Rvd25sb2Fkcy9IVE1MNV9CYWRnZV8yNTYucG5nXCIgYWx0PVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPlN0cnVjdHVyZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByb3BlciBIVE1MNSBzdHJ1Y3R1cmluZyBhbmQgc2NlbWFudGljcyB0byBpbmRpY2F0ZSBjbGVhcmx5IHdoYXQgcm9sZSBpcyBwbGF5ZWQgYnkgdGhlIGNvbnRlbnQgdGhvc2UgdGFncyBjb250YWluLiBIVE1MIHRhZ3MgYXJlIChtb3N0bHkpIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQsdGhlc2UgdGFncyB0ZWxsIHRoZSBicm93c2VyIGhvdyB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9uIHRoZSBwYWdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNlbXJ1c2guY29tL2Jsb2cvc2VtYW50aWMtaHRtbDUtZ3VpZGUvXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cImh0dHBzOi8vbWFya2V0aW5nLmRjYXNzZXRjZG4uY29tL2Jsb2cvMjAxNi9KYW51YXJ5LzIwMTYtd2ViLWRlc2lnbi10cmVuZHMvQ1NTM0xvZ29fMzAwLnBuZ1wiIGFsdD1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj5QcmVzZW50YXRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb2JpbGUgZmlyc3QsIHJlc3BvbnNpdmUgZGVzaWduIGZvciBhIHJpY2ggdW5kZXJzdGFuZGluZyBvZiB3aGF0IHVzZXJzIGFyZSBsb29raW5nIGZvciBhbmQgdGhlIHJpZ2h0IHdheSB0byBkZWxpdmVyIGl0IGZvciB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWxpc3RhcGFydC5jb20vYXJ0aWNsZS9yZXNwb25zaXZlLXdlYi1kZXNpZ24vXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cImh0dHBzOi8vd3d3LnBpeGVscGVyZmVjdC5jby56YS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy9KUy5wbmdcIiBhbHQ9XCJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+QmVoYXZpb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2luZyBKYXZhc2NyaXB0IHRvIGNvZGUgZnJvbnQtZW5kIGhhcyBjb21lIGEgbG9uZyB3YXkgZnJvbSBqdXN0IHZhbGlkYXRpb24gYW5kIGpRdWVyeSBob29rcyB0byBjcmVhdGUgZHluYW1pYyB3ZWIgcGFnZXMuIFRvZGF5IHRoZSBjb21wbGV4IHNpbmdsZSBwYWdlIGFwcGxpY2F0aW9ucyByZWx5IGhlYXZlbHkgb24gZnJhbWV3b3JrcyBzdWNoIGFzIFZ1ZUpTLCBSZWFjdCBhbmQgQW5ndWxhci4gIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNlbXJ1c2guY29tL2Jsb2cvc2VtYW50aWMtaHRtbDUtZ3VpZGUvXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gT25lIENvbHVtbiBTZWN0aW9uIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+UmVsZWFzZSBMb2c8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4xLjAgc2tlbGV0b248L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4xLjEgVnVlIFJvdXRlcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjEuMiBWdWVYPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+MS4zIEJvb3RzdHJhcDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8aDI+Q29ubmVjdDwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIEZpeGVkIEJhY2tncm91bmQgLS0+XHJcbiAgICA8ZmlndXJlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXhlZC13cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaXhlZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9maWd1cmU+XHJcblxyXG4gICAgPCEtLSBCYWNrbG9nIFNlY3Rpb24gIC0tPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImZ1blwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNiYWNrbG9nXCI+Y29tbWluZyBzb29uPC9idXR0b24+XHJcbiAgICA8ZGl2IGlkPVwiYmFja2xvZ1wiIGNsYXNzPVwiY29sbGFwc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXV0aGVudGljYXRpb24gJiBBdXRob3JpemF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GaWxlIFVwbG9hZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPGtlZXAtYWxpdmU+XHJcbiAgICAgICAgPCEtLSA8cm91dGVyLXZpZXcgdi1iaW5kOm1zZz1cIm1zZ1wiPjwvcm91dGVyLXZpZXc+IC0tPlxyXG4gICAgPC9rZWVwLWFsaXZlPlxyXG5cclxuPC9kaXY+XG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdhcHAnLFxyXG4gICAgcHJvcHM6IFsnbXNnJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjdGl2ZU5hdkl0ZW06ICdob21lJyxcclxuICAgICAgICAgICAgYWN0aXZlU2xpZGVJdGVtOiAnMCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGlzQWN0aXZlTmF2SXRlbTogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVOYXZJdGVtID09PSBpdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRBY3RpdmVOYXZJdGVtOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTmF2SXRlbSA9IGl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEhvbWVcclxuICAgIH1cclxufVxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImFwcFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJuYXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItbGlnaHQgYmctbGlnaHQgc3RpY2t5LXRvcFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1icmFuZFwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIERldmVsU3RyYXAgVnVlSlMgXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXZiYXJSZXNwb25zaXZlXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1uYXYgbWwtYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwiaG9tZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJob21lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkhvbWUgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImFib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcImFib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFib3V0IFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdi1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJzZXJ2aWNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJzZXJ2aWNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZXJ2aWNlcyBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwidGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJ0ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRlYW0gXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImNvbm5lY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXRBY3RpdmVOYXZJdGVtKFwiY29ubmVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25uZWN0IFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgzKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oNCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDUpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDYpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg3KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oOCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDkpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmdW5cIixcbiAgICAgICAgICBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNiYWNrbG9nXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiY29tbWluZyBzb29uXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMTEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwia2VlcC1hbGl2ZVwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci10b2dnbGVyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI25hdmJhclJlc3BvbnNpdmVcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci10b2dnbGVyLWljb25cIiB9KV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwgc2xpZGVcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwic2xpZGVzXCIsIFwiZGF0YS1yaWRlXCI6IFwiY2Fyb3VzZWxcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm9sXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImxpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhcmdldFwiOiBcIiNzbGlkZXNcIiwgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhcmdldFwiOiBcIiNzbGlkZXNcIiwgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhcmdldFwiOiBcIiNzbGlkZXNcIiwgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMlwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pbm5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIikgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1jYXB0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkRldmVsU3RyYXAgVnVlSlNcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcInN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIFZ1ZUpTIHByb2plY3RzLlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1saWdodCBidG4tbGdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlZJRVcgREVNT1wiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHZXQgU3RhcnRlZFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9hc3NldHMvaW1nL2JhY2tncm91bmQyLnBuZ1wiKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDMucG5nXCIpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cganVtYm90cm9uXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtOSBjb2wtbGctOSBjb2wteGwtMTBcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxlYWRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlRoaXMgcHJvamVjdCBjYW4gYmUgdXNlZCBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciBWdWUgd2ViIGFwcCBkZXZlbG9wbWVudC4gSXQgcXVpY2tseSBzdHJhcHMgYWxsIHRoZSBuZWVkcyBmb3IgYSBjb21wbGV0ZSBWdWUgd2ViIGFwcCBzb2x1dGlvbi4gRmVlbCBmcmVlIHRvIGNsb25lIHRoZSByZXBvIG92ZXIgYXQgR2l0SHViXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC0zIGNvbC1sZy05IGNvbC14bC0yXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxEb2UvZGV2ZWwtdnVlXCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR2l0SHViXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkZWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB3ZWxjb21lIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS00XCIgfSwgW192bS5fdihcIkJ1aWx0IHdpdGggZWFzZS5cIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJXZWxjb21lIHRvIG15IFZ1ZUpTIHN0cmFwIGFwcGxpY2F0aW9uIVxcclxcbiAgICAgICAgICAgICAgICBEZXZlbFN0cmFwIFZ1ZUpTIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgZnJvbnQtZW5kIFZ1ZSBhcHBsaWNhdGlvbiB0aGF0IHlvdSBjYW4gdXNlIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIHlvdXIgVnVlSlMgYXBwbGljYXRpb25zLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHRleHQtY2VudGVyIHBhZGRpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogXCJodHRwczovL3Z1ZWpzLm9yZy9pbWFnZXMvbG9nby5wbmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiVnVlSlNcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiVGhlIFByb2dyZXNzaXZlIEphdmFTY3JpcHQgRnJhbWV3b3JrLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL3VzZXItaW1hZ2VzLmdpdGh1YnVzZXJjb250ZW50LmNvbS83MTEwMTM2LzI5MDAyODU3LTllODAyZjA4LTdhYjQtMTFlNy05YzMxLTYwNGI1ZDBkMGMxOS5wbmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiVnVlWFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIkNlbnRyYWxpemVkIHN0b3JlIGZvciBhbGwgdGhlIGNvbXBvbmVudHMgaW4gYW4gYXBwbGljYXRpb25cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vYXZhdGFyczEuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMjEwNTc5MT92PTMmcz00MDBcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiV2VicGFja1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgbW9zdCBwb3B1bGFyIG1vZHVsZSBidW5kbGVyLiBcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC83YTE5N2NmZTQ0NTQ4Y2MxYTNmNTgxMTUyYWY3MGEzMDUxZTExNjcxLzc4ZGY4L2ltZy9iYWJlbC5zdmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQmFiZWxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiVGhlIG5leHQgZ2VuZXJhdGlvbiBKYXZhU2NyaXB0IGNvbXBpbGVyLiBcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9jZG4taW1hZ2VzLTEubWVkaXVtLmNvbS9tYXgvMjAwMC8xKjlIYW5Ec1JVMTFaTXNnREdKd045NncucG5nXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQyXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjQyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkJvb3RzdHJhcFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIlRoZSBtb3N0IHBvcHVsYXIgSFRNTCwgQ1NTLCBhbmQgSlMgbGlicmFyeSBpbiB0aGUgd29ybGQuXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHBhZGRpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkdldCBTdGFydGVkLi4uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDbG9uZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJjb2RlXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcImdpdCBjbG9uZSBnaXRAZ2l0aHViLmNvbTpEZXZlbERvZS9kZXZlbC12dWUuZ2l0XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJJbnN0YWxsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm5wbSBpbnN0YWxsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJCdWlsZFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoXCJucG0gcnVuIGRldlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9tZWRpYS53aXJlZC5jb20vcGhvdG9zLzViMzZhNWI2ZTIzN2U4N2NlOTU5MmI4ZS8xOTE6MTAwL3Bhc3MvR2l0aHViLU1pY3Jvc29mdC1CSVotRklOQUwuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJnaXRodWJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgd2VsY29tZSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktNFwiIH0sIFtfdm0uX3YoXCJNZSBNeXNlbGYgYW5kIElcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoclwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgYm9yZGVyOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdG9wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy53My5vcmcvaHRtbC9sb2dvL2Rvd25sb2Fkcy9IVE1MNV9CYWRnZV8yNTYucG5nXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJTdHJ1Y3R1cmVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlByb3BlciBIVE1MNSBzdHJ1Y3R1cmluZyBhbmQgc2NlbWFudGljcyB0byBpbmRpY2F0ZSBjbGVhcmx5IHdoYXQgcm9sZSBpcyBwbGF5ZWQgYnkgdGhlIGNvbnRlbnQgdGhvc2UgdGFncyBjb250YWluLiBIVE1MIHRhZ3MgYXJlIChtb3N0bHkpIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQsdGhlc2UgdGFncyB0ZWxsIHRoZSBicm93c2VyIGhvdyB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9uIHRoZSBwYWdlLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5zZW1ydXNoLmNvbS9ibG9nL3NlbWFudGljLWh0bWw1LWd1aWRlL1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9yZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgYm9yZGVyOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdG9wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL21hcmtldGluZy5kY2Fzc2V0Y2RuLmNvbS9ibG9nLzIwMTYvSmFudWFyeS8yMDE2LXdlYi1kZXNpZ24tdHJlbmRzL0NTUzNMb2dvXzMwMC5wbmdcIixcbiAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIlByZXNlbnRhdGlvblwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiTW9iaWxlIGZpcnN0LCByZXNwb25zaXZlIGRlc2lnbiBmb3IgYSByaWNoIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdCB1c2VycyBhcmUgbG9va2luZyBmb3IgYW5kIHRoZSByaWdodCB3YXkgdG8gZGVsaXZlciBpdCBmb3IgdGhlIGJlc3QgdXNlciBleHBlcmllbmNlLiBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2FsaXN0YXBhcnQuY29tL2FydGljbGUvcmVzcG9uc2l2ZS13ZWItZGVzaWduL1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9yZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgYm9yZGVyOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdG9wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5waXhlbHBlcmZlY3QuY28uemEvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDcvSlMucG5nXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJCZWhhdmlvclwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiVXNpbmcgSmF2YXNjcmlwdCB0byBjb2RlIGZyb250LWVuZCBoYXMgY29tZSBhIGxvbmcgd2F5IGZyb20ganVzdCB2YWxpZGF0aW9uIGFuZCBqUXVlcnkgaG9va3MgdG8gY3JlYXRlIGR5bmFtaWMgd2ViIHBhZ2VzLiBUb2RheSB0aGUgY29tcGxleCBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbnMgcmVseSBoZWF2ZWx5IG9uIGZyYW1ld29ya3Mgc3VjaCBhcyBWdWVKUywgUmVhY3QgYW5kIEFuZ3VsYXIuICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuc2VtcnVzaC5jb20vYmxvZy9zZW1hbnRpYy1odG1sNS1ndWlkZS9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIk1vcmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBwYWRkaW5nXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJSZWxlYXNlIExvZ1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCIxLjAgc2tlbGV0b25cIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCIxLjEgVnVlIFJvdXRlclwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIjEuMiBWdWVYXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4zIEJvb3RzdHJhcFwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHRleHQtY2VudGVyIHBhZGRpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkNvbm5lY3RcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpeGVkLXdyYXBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiZml4ZWRcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sbGFwc2VcIiwgYXR0cnM6IHsgaWQ6IFwiYmFja2xvZ1wiIH0gfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNiBjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiQXV0aGVudGljYXRpb24gJiBBdXRob3JpemF0aW9uXCIpXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLW1kLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkZpbGUgVXBsb2FkZXJcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xMDUwNmVjZVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==