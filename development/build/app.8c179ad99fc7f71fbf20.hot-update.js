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
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "nav",
      {
        staticClass: "navbar navbar-expand-sm navbar-light bg-light sticky-top"
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
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _vm._v("Home ")
                    ])
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
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _vm._v("About ")
                    ])
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
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _vm._v("Services ")
                    ])
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
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _vm._v("Team ")
                    ])
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
                    _c("a", { staticClass: "nav-link", attrs: { href: "#" } }, [
                      _vm._v("Connect ")
                    ])
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
    _c(
      "button",
      {
        staticClass: "fun",
        attrs: { "data-toggle": "collapse", "data-target": "#backlog" }
      },
      [_vm._v("comming soon")]
    ),
    _vm._v(" "),
    _vm._m(7),
    _vm._v(" "),
    _vm._m(8),
    _vm._v(" "),
    _vm._m(9),
    _vm._v(" "),
    _vm._m(10)
  ])
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
        _c("div", { staticClass: "col-md-12 col-lg-6" }, [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc291cmNlL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0FwcC52dWU/YTI4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBNk9BOzs7Ozs7a0JBRUE7QUFDQSxlQURBO0FBRUEsa0JBRkE7QUFHQSxRQUhBLGtCQUdBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBO0FBRkE7QUFJQSxLQVJBOztBQVNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFOQSxLQVRBO0FBaUJBO0FBQ0E7QUFEQTtBQWpCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLFlBQVksRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLG1CQUFtQixpQ0FBaUM7QUFDcEQsbUJBQW1CLHNDQUFzQyxZQUFZLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSw2QkFBNkIsa0NBQWtDLFlBQVksRUFBRTtBQUM3RTtBQUNBO0FB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bnQiOlsiPCEtLVxyXG5AQXV0aG9yOiBBbmRyZWUgUmF5IDxhbmRyZWVyYXk+XHJcbkBEYXRlOiAgIDIwMTgtMDEtMThUMjE6MjM6MDQrMDE6MDBcclxuQEVtYWlsOiAgYW5kcmVlcmF5QGxpdmUuY29tXHJcbkBGaWxlbmFtZTogQXBwLnZ1ZVxyXG5ATGFzdCBtb2RpZmllZCBieTogICBNb3JnYW4gQW5kcmVlIFJheVxyXG5ATGFzdCBtb2RpZmllZCB0aW1lOiAwOC0wNS0yMDE4XHJcbi0tPlxyXG5cclxuPHRlbXBsYXRlPlxuPGRpdiBpZD1cImFwcFwiPlxyXG5cclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItbGlnaHQgYmctbGlnaHQgc3RpY2t5LXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPiBEZXZlbFN0cmFwIFZ1ZUpTIDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJSZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJSZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1vbjpjbGljaz1cInNldEFjdGl2ZU5hdkl0ZW0oJ2hvbWUnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ2hvbWUnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhvbWUgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCdhYm91dCcpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgnYWJvdXQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkFib3V0IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnc2VydmljZXMnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ3NlcnZpY2VzJyksIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+U2VydmljZXMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCd0ZWFtJylcIiA6Y2xhc3M9XCJ7ICduYXYtaXRlbSc6IHRydWUsIGFjdGl2ZTogaXNBY3RpdmVOYXZJdGVtKCd0ZWFtJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5UZWFtIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnY29ubmVjdCcpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgnY29ubmVjdCcpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+Q29ubmVjdCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcblxyXG4gICAgPGRpdiBpZD1cInNsaWRlc1wiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVzXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktMlwiPkRldmVsU3RyYXAgVnVlSlM8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5zdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBwcm9qZWN0cy48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1sZ1wiPlZJRVcgREVNTzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPkdldCBTdGFydGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMi5wbmdcIiA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDMucG5nXCIgPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtOSBjb2wtbGctOSBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlRoaXMgcHJvamVjdCBjYW4gYmUgdXNlZCBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciBWdWUgd2ViIGFwcCBkZXZlbG9wbWVudC4gSXQgcXVpY2tseSBzdHJhcHMgYWxsIHRoZSBuZWVkcyBmb3IgYSBjb21wbGV0ZSBWdWUgd2ViIGFwcCBzb2x1dGlvbi4gRmVlbCBmcmVlIHRvIGNsb25lIHRoZSByZXBvIG92ZXIgYXQgR2l0SHViPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTkgY29sLXhsLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxEb2UvZGV2ZWwtdnVlXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiPkdpdEh1YjwvYnV0dG9uPiA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS00XCI+QnVpbHQgd2l0aCBlYXNlLjwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5XZWxjb21lIHRvIG15IFZ1ZUpTIHN0cmFwIGFwcGxpY2F0aW9uIVxyXG4gICAgICAgICAgICAgICAgRGV2ZWxTdHJhcCBWdWVKUyBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIGZyb250LWVuZCBWdWUgYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIHVzZSBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIFZ1ZUpTIGFwcGxpY2F0aW9ucy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlciBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly92dWVqcy5vcmcvaW1hZ2VzL2xvZ28ucG5nXCIgYWx0PVwiXCIgaGVpZ2h0PVwiNDJcIiB3aWR0aD1cIjQyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VnVlSlM8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIFByb2dyZXNzaXZlIEphdmFTY3JpcHQgRnJhbWV3b3JrLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vNzExMDEzNi8yOTAwMjg1Ny05ZTgwMmYwOC03YWI0LTExZTctOWMzMS02MDRiNWQwZDBjMTkucG5nXCIgYWx0PVwiXCIgaGVpZ2h0PVwiNDJcIiB3aWR0aD1cIjQyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+VnVlWDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5DZW50cmFsaXplZCBzdG9yZSBmb3IgYWxsIHRoZSBjb21wb25lbnRzIGluIGFuIGFwcGxpY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2F2YXRhcnMxLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzIxMDU3OTE/dj0zJnM9NDAwXCIgYWx0PVwiXCIgaGVpZ2h0PVwiNDJcIiB3aWR0aD1cIjQyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+V2VicGFjazwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgbW9zdCBwb3B1bGFyIG1vZHVsZSBidW5kbGVyLiA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvN2ExOTdjZmU0NDU0OGNjMWEzZjU4MTE1MmFmNzBhMzA1MWUxMTY3MS83OGRmOC9pbWcvYmFiZWwuc3ZnXCIgYWx0PVwiXCIgaGVpZ2h0PVwiNDJcIiB3aWR0aD1cIjQyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDM+QmFiZWw8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIG5leHQgZ2VuZXJhdGlvbiBKYXZhU2NyaXB0IGNvbXBpbGVyLiA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vY2RuLWltYWdlcy0xLm1lZGl1bS5jb20vbWF4LzIwMDAvMSo5SGFuRHNSVTExWk1zZ0RHSndOOTZ3LnBuZ1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkJvb3RzdHJhcDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8cD5UaGUgbW9zdCBwb3B1bGFyIEhUTUwsIENTUywgYW5kIEpTIGxpYnJhcnkgaW4gdGhlIHdvcmxkLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGhyIGNsYXNzPVwibXktNFwiPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBUd28gQ29sdW1uIFNlY3Rpb24gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5HZXQgU3RhcnRlZC4uLjwvaDI+XHJcbiAgICAgICAgICAgICAgICA8aDQ+Q2xvbmU8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+Z2l0IGNsb25lIGdpdEBnaXRodWIuY29tOkRldmVsRG9lL2RldmVsLXZ1ZS5naXQ8L2NvZGU+XHJcbiAgICAgICAgICAgICAgICA8aDQ+SW5zdGFsbDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT5ucG0gaW5zdGFsbDwvY29kZT5cclxuICAgICAgICAgICAgICAgIDxoND5CdWlsZDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT5ucG0gcnVuIGRldjwvY29kZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL21lZGlhLndpcmVkLmNvbS9waG90b3MvNWIzNmE1YjZlMjM3ZTg3Y2U5NTkyYjhlLzE5MToxMDAvcGFzcy9HaXRodWItTWljcm9zb2Z0LUJJWi1GSU5BTC5qcGdcIiBhbHQ9XCJnaXRodWJcIiBjbGFzcz1cImltZy1mbHVpZFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxociBjbGFzcz1cIm15LTRcIj5cclxuXHJcbiAgICA8IS0tIEZpeGVkIEJhY2tncm91bmQgLS0+XHJcbiAgICA8ZmlndXJlPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaXhlZC13cmFwXCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmaXhlZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9maWd1cmU+XHJcblxyXG4gICAgPCEtLSBCYWNrbG9nIFNlY3Rpb24gIC0tPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImZ1blwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNiYWNrbG9nXCI+Y29tbWluZyBzb29uPC9idXR0b24+XHJcbiAgICA8ZGl2IGlkPVwiYmFja2xvZ1wiIGNsYXNzPVwiY29sbGFwc2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+QXV0aGVudGljYXRpb24gJiBBdXRob3JpemF0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5GaWxlIFVwbG9hZGVyPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBNZSBNeXNlbGYgQW5kIEkgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB3ZWxjb21lIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktNFwiPk1lIE15c2VsZiBhbmQgSTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHBhZGRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cImh0dHBzOi8vd3d3LnczLm9yZy9odG1sL2xvZ28vZG93bmxvYWRzL0hUTUw1X0JhZGdlXzI1Ni5wbmdcIiBhbHQ9XCJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+U3RydWN0dXJlPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UHJvcGVyIEhUTUw1IHN0cnVjdHVyaW5nIGFuZCBzY2VtYW50aWNzIHRvIGluZGljYXRlIGNsZWFybHkgd2hhdCByb2xlIGlzIHBsYXllZCBieSB0aGUgY29udGVudCB0aG9zZSB0YWdzIGNvbnRhaW4uIEhUTUwgdGFncyBhcmUgKG1vc3RseSkgdXNlZCB0byBmb3JtYXQgY29udGVudCx0aGVzZSB0YWdzIHRlbGwgdGhlIGJyb3dzZXIgaG93IHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb24gdGhlIHBhZ2UuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2VtcnVzaC5jb20vYmxvZy9zZW1hbnRpYy1odG1sNS1ndWlkZS9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5Nb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJib3JkZXI6bm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiaHR0cHM6Ly9tYXJrZXRpbmcuZGNhc3NldGNkbi5jb20vYmxvZy8yMDE2L0phbnVhcnkvMjAxNi13ZWItZGVzaWduLXRyZW5kcy9DU1MzTG9nb18zMDAucG5nXCIgYWx0PVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPlByZXNlbnRhdGlvbjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1vYmlsZSBmaXJzdCwgcmVzcG9uc2l2ZSBkZXNpZ24gZm9yIGEgcmljaCB1bmRlcnN0YW5kaW5nIG9mIHdoYXQgdXNlcnMgYXJlIGxvb2tpbmcgZm9yIGFuZCB0aGUgcmlnaHQgd2F5IHRvIGRlbGl2ZXIgaXQgZm9yIHRoZSBiZXN0IHVzZXIgZXhwZXJpZW5jZS4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9hbGlzdGFwYXJ0LmNvbS9hcnRpY2xlL3Jlc3BvbnNpdmUtd2ViLWRlc2lnbi9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5Nb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJib3JkZXI6bm9uZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiY2FyZC1pbWctdG9wXCIgc3JjPVwiaHR0cHM6Ly93d3cucGl4ZWxwZXJmZWN0LmNvLnphL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA3L0pTLnBuZ1wiIGFsdD1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj5CZWhhdmlvcjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlVzaW5nIEphdmFzY3JpcHQgdG8gY29kZSBmcm9udC1lbmQgaGFzIGNvbWUgYSBsb25nIHdheSBmcm9tIGp1c3QgdmFsaWRhdGlvbiBhbmQgalF1ZXJ5IGhvb2tzIHRvIGNyZWF0ZSBkeW5hbWljIHdlYiBwYWdlcy4gVG9kYXkgdGhlIGNvbXBsZXggc2luZ2xlIHBhZ2UgYXBwbGljYXRpb25zIHJlbHkgaGVhdmVseSBvbiBmcmFtZXdvcmtzIHN1Y2ggYXMgVnVlSlMsIFJlYWN0IGFuZCBBbmd1bGFyLiAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2VtcnVzaC5jb20vYmxvZy9zZW1hbnRpYy1odG1sNS1ndWlkZS9cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIj5Nb3JlPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBUd28gQ29sdW1uIFNlY3Rpb24gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxoMj5SZWxlYXNlIExvZzwvaDI+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjEuMCBza2VsZXRvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPjEuMSBWdWUgUm91dGVyPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+MS4yIFZ1ZVg8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT4xLjMgQm9vdHN0cmFwPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTZcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9tZWRpYS53aXJlZC5jb20vcGhvdG9zLzViMzZhNWI2ZTIzN2U4N2NlOTU5MmI4ZS8xOTE6MTAwL3Bhc3MvR2l0aHViLU1pY3Jvc29mdC1CSVotRklOQUwuanBnXCIgYWx0PVwiZ2l0aHViXCIgY2xhc3M9XCJpbWctZmx1aWRcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIDxoMz5SZWxlYXNlIExvZzwvaDM+XHJcblxyXG5cclxuXHJcblxyXG4gICAgPGtlZXAtYWxpdmU+XHJcbiAgICAgICAgPCEtLSA8cm91dGVyLXZpZXcgdi1iaW5kOm1zZz1cIm1zZ1wiPjwvcm91dGVyLXZpZXc+IC0tPlxyXG4gICAgPC9rZWVwLWFsaXZlPlxyXG5cclxuPC9kaXY+XG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdhcHAnLFxyXG4gICAgcHJvcHM6IFsnbXNnJ10sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFjdGl2ZU5hdkl0ZW06ICdob21lJyxcclxuICAgICAgICAgICAgYWN0aXZlU2xpZGVJdGVtOiAnMCdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGlzQWN0aXZlTmF2SXRlbTogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVOYXZJdGVtID09PSBpdGVtXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRBY3RpdmVOYXZJdGVtOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlTmF2SXRlbSA9IGl0ZW1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIEhvbWVcclxuICAgIH1cclxufVxuPC9zY3JpcHQ+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJhcHBcIiB9IH0sIFtcbiAgICBfYyhcbiAgICAgIFwibmF2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIG5hdmJhci1saWdodCBiZy1saWdodCBzdGlja3ktdG9wXCJcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1icmFuZFwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiBEZXZlbFN0cmFwIFZ1ZUpTIFwiKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwibmF2YmFyUmVzcG9uc2l2ZVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJuYXZiYXItbmF2IG1sLWF1dG9cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImhvbWVcIilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcImhvbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkhvbWUgXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJhYm91dFwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXRBY3RpdmVOYXZJdGVtKFwiYWJvdXRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFib3V0IFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBcIm5hdi1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwic2VydmljZXNcIilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcInNlcnZpY2VzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZXJ2aWNlcyBcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcInRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcInRlYW1cIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlRlYW0gXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJjb25uZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJjb25uZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYtbGlua1wiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb25uZWN0IFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgxKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgyKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgzKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSg0KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSg1KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oNiksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZ1blwiLFxuICAgICAgICBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNiYWNrbG9nXCIgfVxuICAgICAgfSxcbiAgICAgIFtfdm0uX3YoXCJjb21taW5nIHNvb25cIildXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSg3KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSg4KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSg5KSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgxMClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbmF2YmFyUmVzcG9uc2l2ZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiIH0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbCBzbGlkZVwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJzbGlkZXNcIiwgXCJkYXRhLXJpZGVcIjogXCJjYXJvdXNlbFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwib2xcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pbmRpY2F0b3JzXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIwXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIxXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIyXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWlubmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWNhcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiRGV2ZWxTdHJhcCBWdWVKU1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwic3RhcnRpbmcgcG9pbnQgZm9yIHlvdXIgVnVlSlMgcHJvamVjdHMuXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1sZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVklFVyBERU1PXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkdldCBTdGFydGVkXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDIucG5nXCIpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMy5wbmdcIikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdW1ib3Ryb25cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC05IGNvbC1sZy05IGNvbC14bC0xMFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiVGhpcyBwcm9qZWN0IGNhbiBiZSB1c2VkIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIFZ1ZSB3ZWIgYXBwIGRldmVsb3BtZW50LiBJdCBxdWlja2x5IHN0cmFwcyBhbGwgdGhlIG5lZWRzIGZvciBhIGNvbXBsZXRlIFZ1ZSB3ZWIgYXBwIHNvbHV0aW9uLiBGZWVsIGZyZWUgdG8gY2xvbmUgdGhlIHJlcG8gb3ZlciBhdCBHaXRIdWJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTkgY29sLXhsLTJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbERvZS9kZXZlbC12dWVcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHaXRIdWJcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHBhZGRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTRcIiB9LCBbX3ZtLl92KFwiQnVpbHQgd2l0aCBlYXNlLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIldlbGNvbWUgdG8gbXkgVnVlSlMgc3RyYXAgYXBwbGljYXRpb24hXFxyXFxuICAgICAgICAgICAgICAgIERldmVsU3RyYXAgVnVlSlMgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSBmcm9udC1lbmQgVnVlIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiB1c2UgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBhcHBsaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJWdWVKU1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgUHJvZ3Jlc3NpdmUgSmF2YVNjcmlwdCBGcmFtZXdvcmsuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzcxMTAxMzYvMjkwMDI4NTctOWU4MDJmMDgtN2FiNC0xMWU3LTljMzEtNjA0YjVkMGQwYzE5LnBuZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJWdWVYXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ2VudHJhbGl6ZWQgc3RvcmUgZm9yIGFsbCB0aGUgY29tcG9uZW50cyBpbiBhbiBhcHBsaWNhdGlvblwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMTA1NzkxP3Y9MyZzPTQwMFwiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJXZWJwYWNrXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZSBtb3N0IHBvcHVsYXIgbW9kdWxlIGJ1bmRsZXIuIFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzdhMTk3Y2ZlNDQ1NDhjYzFhM2Y1ODExNTJhZjcwYTMwNTFlMTE2NzEvNzhkZjgvaW1nL2JhYmVsLnN2Z1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJCYWJlbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgbmV4dCBnZW5lcmF0aW9uIEphdmFTY3JpcHQgY29tcGlsZXIuIFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yMDAwLzEqOUhhbkRzUlUxMVpNc2dER0p3Tjk2dy5wbmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQm9vdHN0cmFwXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiVGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBsaWJyYXJ5IGluIHRoZSB3b3JsZC5cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY0NsYXNzOiBcIm15LTRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiR2V0IFN0YXJ0ZWQuLi5cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNsb25lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvZGVcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiZ2l0IGNsb25lIGdpdEBnaXRodWIuY29tOkRldmVsRG9lL2RldmVsLXZ1ZS5naXRcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkluc3RhbGxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibnBtIGluc3RhbGxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkJ1aWxkXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm5wbSBydW4gZGV2XCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL21lZGlhLndpcmVkLmNvbS9waG90b3MvNWIzNmE1YjZlMjM3ZTg3Y2U5NTkyYjhlLzE5MToxMDAvcGFzcy9HaXRodWItTWljcm9zb2Z0LUJJWi1GSU5BTC5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcImdpdGh1YlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJmaWd1cmVcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaXhlZC13cmFwXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IGF0dHJzOiB7IGlkOiBcImZpeGVkXCIgfSB9KVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbGxhcHNlXCIsIGF0dHJzOiB7IGlkOiBcImJhY2tsb2dcIiB9IH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXNtLTYgY29sLW1kLTNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkF1dGhlbnRpY2F0aW9uICYgQXV0aG9yaXphdGlvblwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02IGNvbC1tZC0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJGaWxlIFVwbG9hZGVyXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTRcIiB9LCBbX3ZtLl92KFwiTWUgTXlzZWxmIGFuZCBJXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiaHJcIilcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHBhZGRpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIsIHN0YXRpY1N0eWxlOiB7IGJvcmRlcjogXCJub25lXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRvcFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cudzMub3JnL2h0bWwvbG9nby9kb3dubG9hZHMvSFRNTDVfQmFkZ2VfMjU2LnBuZ1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbX3ZtLl92KFwiU3RydWN0dXJlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJQcm9wZXIgSFRNTDUgc3RydWN0dXJpbmcgYW5kIHNjZW1hbnRpY3MgdG8gaW5kaWNhdGUgY2xlYXJseSB3aGF0IHJvbGUgaXMgcGxheWVkIGJ5IHRoZSBjb250ZW50IHRob3NlIHRhZ3MgY29udGFpbi4gSFRNTCB0YWdzIGFyZSAobW9zdGx5KSB1c2VkIHRvIGZvcm1hdCBjb250ZW50LHRoZXNlIHRhZ3MgdGVsbCB0aGUgYnJvd3NlciBob3cgdG8gZGlzcGxheSB0aGUgY29udGVudCBvbiB0aGUgcGFnZS5cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuc2VtcnVzaC5jb20vYmxvZy9zZW1hbnRpYy1odG1sNS1ndWlkZS9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIk1vcmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIsIHN0YXRpY1N0eWxlOiB7IGJvcmRlcjogXCJub25lXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRvcFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9tYXJrZXRpbmcuZGNhc3NldGNkbi5jb20vYmxvZy8yMDE2L0phbnVhcnkvMjAxNi13ZWItZGVzaWduLXRyZW5kcy9DU1MzTG9nb18zMDAucG5nXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJQcmVzZW50YXRpb25cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIk1vYmlsZSBmaXJzdCwgcmVzcG9uc2l2ZSBkZXNpZ24gZm9yIGEgcmljaCB1bmRlcnN0YW5kaW5nIG9mIHdoYXQgdXNlcnMgYXJlIGxvb2tpbmcgZm9yIGFuZCB0aGUgcmlnaHQgd2F5IHRvIGRlbGl2ZXIgaXQgZm9yIHRoZSBiZXN0IHVzZXIgZXhwZXJpZW5jZS4gXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9hbGlzdGFwYXJ0LmNvbS9hcnRpY2xlL3Jlc3BvbnNpdmUtd2ViLWRlc2lnbi9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIk1vcmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIsIHN0YXRpY1N0eWxlOiB7IGJvcmRlcjogXCJub25lXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaW1nLXRvcFwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly93d3cucGl4ZWxwZXJmZWN0LmNvLnphL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzA3L0pTLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbX3ZtLl92KFwiQmVoYXZpb3JcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlVzaW5nIEphdmFzY3JpcHQgdG8gY29kZSBmcm9udC1lbmQgaGFzIGNvbWUgYSBsb25nIHdheSBmcm9tIGp1c3QgdmFsaWRhdGlvbiBhbmQgalF1ZXJ5IGhvb2tzIHRvIGNyZWF0ZSBkeW5hbWljIHdlYiBwYWdlcy4gVG9kYXkgdGhlIGNvbXBsZXggc2luZ2xlIHBhZ2UgYXBwbGljYXRpb25zIHJlbHkgaGVhdmVseSBvbiBmcmFtZXdvcmtzIHN1Y2ggYXMgVnVlSlMsIFJlYWN0IGFuZCBBbmd1bGFyLiAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnNlbXJ1c2guY29tL2Jsb2cvc2VtYW50aWMtaHRtbDUtZ3VpZGUvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb3JlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiUmVsZWFzZSBMb2dcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4wIHNrZWxldG9uXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4xIFZ1ZSBSb3V0ZXJcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCIxLjIgVnVlWFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIjEuMyBCb290c3RyYXBcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9tZWRpYS53aXJlZC5jb20vcGhvdG9zLzViMzZhNWI2ZTIzN2U4N2NlOTU5MmI4ZS8xOTE6MTAwL3Bhc3MvR2l0aHViLU1pY3Jvc29mdC1CSVotRklOQUwuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJnaXRodWJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xMDUwNmVjZVwiLCB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9KVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==