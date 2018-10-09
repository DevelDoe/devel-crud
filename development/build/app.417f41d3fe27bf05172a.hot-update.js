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
    props: ['appName'],
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
              _vm._v(" " + _vm._s(_vm.appName) + " ")
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
              _c("h1", { staticClass: "display-2" }, [_vm._v("DevelStrap")]),
              _vm._v(" "),
              _c("h3", [_vm._v("starting point for your VueJS projects.")]),
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
          _c("h1", { staticClass: "display-4" }, [_vm._v("Built with ease.")]),
          _vm._v(" "),
          _c("hr")
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
    return _c("div", { staticClass: "container-fluid padding" }, [
      _c("div", { staticClass: "row text-center padding" }, [
        _c("div", { staticClass: "col-12" }, [_c("h2", [_vm._v("Connect")])]),
        _vm._v(" "),
        _c("div", { staticClass: "col-12 social padding" }, [
          _c("a", { attrs: { href: "https://www.facebook.com/develdoe" } }, [
            _c("i", { staticClass: "fa fa-facebook" })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://www.github.com/develdoe" } }, [
            _c("i", { staticClass: "fa fa-github" })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "https://www.instagram.com/develdoe" } }, [
            _c("i", { staticClass: "fa fa-instagram" })
          ]),
          _vm._v(" "),
          _c("a", { attrs: { href: "http://andreeray.se" } }, [
            _c("i", { staticClass: "fa fa-home" })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", [
      _c("div", { staticClass: "container-fluid padding" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-6" }, [
            _c("h3", [_vm._v("Release Log")]),
            _vm._v(" "),
            _c("div", { staticClass: "list-group" }, [
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [_vm._v("Vue")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.0")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("Basic Vue skeleton.")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [_vm._v("Resources")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.1")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("Application Protocal Interface")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [_vm._v("Router")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.2")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("Application Routing")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [_vm._v("Store")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.3")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("Centralized store.")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [_vm._v("Bootstrap")]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.4")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("Basic Skeleton of a vue application.")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-6" }, [
            _c("h3", [_vm._v("Back Log")]),
            _vm._v(" "),
            _c("div", { staticClass: "list-group" }, [
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [
                        _vm._v("Authentication & Authorization")
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.5")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("User signup, roles and permissions.")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [
                        _vm._v("Administration")
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.6")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v("Administration section interface")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "list-group-item list-group-item-action flex-column align-items-start"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c("h5", { staticClass: "mb-1" }, [
                        _vm._v("File Transfer")
                      ]),
                      _vm._v(" "),
                      _c("small", [_vm._v("V1.7")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-1" }, [
                    _vm._v(
                      "Rich transfer user experience of files such as images."
                    )
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12 text-center" }, [
            _c("hr", { staticClass: "light" }),
            _vm._v(" "),
            _c("h5", [_vm._v("made by DevelDoe")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc291cmNlL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL0FwcC52dWU/YTI4MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBd1NBOzs7Ozs7a0JBRUE7QUFDQSxlQURBO0FBRUEsc0JBRkE7QUFHQSxRQUhBLGtCQUdBO0FBQ0E7QUFDQSxpQ0FEQTtBQUVBO0FBRkE7QUFJQSxLQVJBOztBQVNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFOQSxLQVRBO0FBaUJBO0FBQ0E7QUFEQTtBQWpCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFTQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssU0FBUyxZQUFZLEVBQUU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RCxxQkFBcUIsc0NBQXNDLFlBQVksRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZUFBZTtBQUNmO0FBQ0EsMEJBQTBCLG9DQUFvQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFD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QTtBQUNBLHFCQUFxQixzREFBc0Q7QUFDM0U7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0RBQXNEO0FBQzNFO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixzQkFBc0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNEQUFzRDtBQUMzRTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvQ0FBb0M7QUFDekQsc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLHdJQUFxRSxtREFBbUQ7QUFDeEg7QUFDQSxDIiwiZmlsZSI6ImFwcC40MTdmNDFkM2ZlMjdiZjA1MTcyYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPCEtLVxyXG5AQXV0aG9yOiBBbmRyZWUgUmF5IDxhbmRyZWVyYXk+XHJcbkBEYXRlOiAgIDIwMTgtMDEtMThUMjE6MjM6MDQrMDE6MDBcclxuQEVtYWlsOiAgYW5kcmVlcmF5QGxpdmUuY29tXHJcbkBGaWxlbmFtZTogQXBwLnZ1ZVxyXG5ATGFzdCBtb2RpZmllZCBieTogICBNb3JnYW4gQW5kcmVlIFJheVxyXG5ATGFzdCBtb2RpZmllZCB0aW1lOiAwOC0wNS0yMDE4XHJcbi0tPlxyXG5cclxuPHRlbXBsYXRlPlxuPGRpdiBpZD1cImFwcFwiPlxyXG5cclxuICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItbGlnaHQgYmctbGlnaHQgc3RpY2t5LXRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPiB7eyBhcHBOYW1lIH19IDwvYT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJSZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJSZXNwb25zaXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgdi1vbjpjbGljaz1cInNldEFjdGl2ZU5hdkl0ZW0oJ2hvbWUnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ2hvbWUnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkhvbWUgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCdhYm91dCcpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgnYWJvdXQnKSB9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2LWxpbmtcIiBocmVmPVwiI1wiPkFib3V0IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnc2VydmljZXMnKVwiIDpjbGFzcz1cInsgJ25hdi1pdGVtJzogdHJ1ZSwgYWN0aXZlOiBpc0FjdGl2ZU5hdkl0ZW0oJ3NlcnZpY2VzJyksIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+U2VydmljZXMgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIHYtb246Y2xpY2s9XCJzZXRBY3RpdmVOYXZJdGVtKCd0ZWFtJylcIiA6Y2xhc3M9XCJ7ICduYXYtaXRlbSc6IHRydWUsIGFjdGl2ZTogaXNBY3RpdmVOYXZJdGVtKCd0ZWFtJykgfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdi1saW5rXCIgaHJlZj1cIiNcIj5UZWFtIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSB2LW9uOmNsaWNrPVwic2V0QWN0aXZlTmF2SXRlbSgnY29ubmVjdCcpXCIgOmNsYXNzPVwieyAnbmF2LWl0ZW0nOiB0cnVlLCBhY3RpdmU6IGlzQWN0aXZlTmF2SXRlbSgnY29ubmVjdCcpIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJuYXYtbGlua1wiIGhyZWY9XCIjXCI+Q29ubmVjdCA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcblxyXG4gICAgPGRpdiBpZD1cInNsaWRlc1wiIGNsYXNzPVwiY2Fyb3VzZWwgc2xpZGVcIiBkYXRhLXJpZGU9XCJjYXJvdXNlbFwiPlxyXG4gICAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI3NsaWRlc1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVzXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjc2xpZGVzXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxyXG4gICAgICAgIDwvb2w+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtY2FwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzcz1cImRpc3BsYXktMlwiPkRldmVsU3RyYXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5zdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBwcm9qZWN0cy48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiPkdldCBTdGFydGVkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMi5wbmdcIiA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDMucG5nXCIgPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1bWJvdHJvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtOSBjb2wtbGctOSBjb2wteGwtMTBcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZFwiPlRoaXMgcHJvamVjdCBjYW4gYmUgdXNlZCBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciBWdWUgd2ViIGFwcCBkZXZlbG9wbWVudC4gSXQgcXVpY2tseSBzdHJhcHMgYWxsIHRoZSBuZWVkcyBmb3IgYSBjb21wbGV0ZSBWdWUgd2ViIGFwcCBzb2x1dGlvbi4gRmVlbCBmcmVlIHRvIGNsb25lIHRoZSByZXBvIG92ZXIgYXQgR2l0SHViPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTkgY29sLXhsLTJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxEb2UvZGV2ZWwtdnVlXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGJ0bi1sZ1wiPkdpdEh1YjwvYnV0dG9uPiA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkZWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzPVwiZGlzcGxheS00XCI+QnVpbHQgd2l0aCBlYXNlLjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRcIj5XZWxjb21lIHRvIG15IFZ1ZUpTIHN0cmFwIGFwcGxpY2F0aW9uIVxyXG4gICAgICAgICAgICAgICAgRGV2ZWxTdHJhcCBWdWVKUyBpcyBhIGZyZWUgYW5kIG9wZW4tc291cmNlIGZyb250LWVuZCBWdWUgYXBwbGljYXRpb24gdGhhdCB5b3UgY2FuIHVzZSBhcyBhIHN0YXJ0aW5nIHBvaW50IGZvciB5b3VyIFZ1ZUpTIGFwcGxpY2F0aW9ucy48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZ1ZUpTPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBQcm9ncmVzc2l2ZSBKYXZhU2NyaXB0IEZyYW1ld29yay48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzcxMTAxMzYvMjkwMDI4NTctOWU4MDJmMDgtN2FiNC0xMWU3LTljMzEtNjA0YjVkMGQwYzE5LnBuZ1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlZ1ZVg8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2VudHJhbGl6ZWQgc3RvcmUgZm9yIGFsbCB0aGUgY29tcG9uZW50cyBpbiBhbiBhcHBsaWNhdGlvbjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMTA1NzkxP3Y9MyZzPTQwMFwiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPldlYnBhY2s8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIG1vc3QgcG9wdWxhciBtb2R1bGUgYnVuZGxlci4gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzdhMTk3Y2ZlNDQ1NDhjYzFhM2Y1ODExNTJhZjcwYTMwNTFlMTE2NzEvNzhkZjgvaW1nL2JhYmVsLnN2Z1wiIGFsdD1cIlwiIGhlaWdodD1cIjQyXCIgd2lkdGg9XCI0MlwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkJhYmVsPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlRoZSBuZXh0IGdlbmVyYXRpb24gSmF2YVNjcmlwdCBjb21waWxlci4gPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yMDAwLzEqOUhhbkRzUlUxMVpNc2dER0p3Tjk2dy5wbmdcIiBhbHQ9XCJcIiBoZWlnaHQ9XCI0MlwiIHdpZHRoPVwiNDJcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5Cb290c3RyYXA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+VGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBsaWJyYXJ5IGluIHRoZSB3b3JsZC48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBGaXhlZCBCYWNrZ3JvdW5kIC0tPlxyXG4gICAgPGZpZ3VyZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZml4ZWQtd3JhcFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiZml4ZWRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZmlndXJlPlxyXG5cclxuXHJcblxyXG5cclxuICAgIDwhLS0gTWUgTXlzZWxmIEFuZCBJIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgd2VsY29tZSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJkaXNwbGF5LTRcIj5NZSBNeXNlbGYgYW5kIEk8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiBzdHlsZT1cImJvcmRlcjpub25lO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYXJkLWltZy10b3BcIiBzcmM9XCJodHRwczovL3d3dy53My5vcmcvaHRtbC9sb2dvL2Rvd25sb2Fkcy9IVE1MNV9CYWRnZV8yNTYucG5nXCIgYWx0PVwiXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPlN0cnVjdHVyZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByb3BlciBIVE1MNSBzdHJ1Y3R1cmluZyBhbmQgc2NlbWFudGljcyB0byBpbmRpY2F0ZSBjbGVhcmx5IHdoYXQgcm9sZSBpcyBwbGF5ZWQgYnkgdGhlIGNvbnRlbnQgdGhvc2UgdGFncyBjb250YWluLiBIVE1MIHRhZ3MgYXJlIChtb3N0bHkpIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQsdGhlc2UgdGFncyB0ZWxsIHRoZSBicm93c2VyIGhvdyB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9uIHRoZSBwYWdlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNlbXJ1c2guY29tL2Jsb2cvc2VtYW50aWMtaHRtbDUtZ3VpZGUvXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cImh0dHBzOi8vbWFya2V0aW5nLmRjYXNzZXRjZG4uY29tL2Jsb2cvMjAxNi9KYW51YXJ5LzIwMTYtd2ViLWRlc2lnbi10cmVuZHMvQ1NTM0xvZ29fMzAwLnBuZ1wiIGFsdD1cIlwiID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImNhcmQtdGl0bGVcIj5QcmVzZW50YXRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Nb2JpbGUgZmlyc3QsIHJlc3BvbnNpdmUgZGVzaWduIGZvciBhIHJpY2ggdW5kZXJzdGFuZGluZyBvZiB3aGF0IHVzZXJzIGFyZSBsb29raW5nIGZvciBhbmQgdGhlIHJpZ2h0IHdheSB0byBkZWxpdmVyIGl0IGZvciB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWxpc3RhcGFydC5jb20vYXJ0aWNsZS9yZXNwb25zaXZlLXdlYi1kZXNpZ24vXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHN0eWxlPVwiYm9yZGVyOm5vbmU7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImNhcmQtaW1nLXRvcFwiIHNyYz1cImh0dHBzOi8vd3d3LnBpeGVscGVyZmVjdC5jby56YS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy9KUy5wbmdcIiBhbHQ9XCJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjYXJkLXRpdGxlXCI+QmVoYXZpb3I8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Vc2luZyBKYXZhc2NyaXB0IHRvIGNvZGUgZnJvbnQtZW5kIGhhcyBjb21lIGEgbG9uZyB3YXkgZnJvbSBqdXN0IHZhbGlkYXRpb24gYW5kIGpRdWVyeSBob29rcyB0byBjcmVhdGUgZHluYW1pYyB3ZWIgcGFnZXMuIFRvZGF5IHRoZSBjb21wbGV4IHNpbmdsZSBwYWdlIGFwcGxpY2F0aW9ucyByZWx5IGhlYXZlbHkgb24gZnJhbWV3b3JrcyBzdWNoIGFzIFZ1ZUpTLCBSZWFjdCBhbmQgQW5ndWxhci4gIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNlbXJ1c2guY29tL2Jsb2cvc2VtYW50aWMtaHRtbDUtZ3VpZGUvXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCI+TW9yZTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aHIgY2xhc3M9XCJteS00XCI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFR3byBDb2x1bW4gU2VjdGlvbiAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHBhZGRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctNlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkdldCBTdGFydGVkLi4uPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoND5DbG9uZTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT5naXQgY2xvbmUgZ2l0QGdpdGh1Yi5jb206RGV2ZWxEb2UvZGV2ZWwtdnVlLmdpdDwvY29kZT5cclxuICAgICAgICAgICAgICAgIDxoND5JbnN0YWxsPC9oND5cclxuICAgICAgICAgICAgICAgIDxjb2RlPm5wbSBpbnN0YWxsPC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgPGg0PkJ1aWxkPC9oND5cclxuICAgICAgICAgICAgICAgIDxjb2RlPm5wbSBydW4gZGV2PC9jb2RlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vbWVkaWEud2lyZWQuY29tL3Bob3Rvcy81YjM2YTViNmUyMzdlODdjZTk1OTJiOGUvMTkxOjEwMC9wYXNzL0dpdGh1Yi1NaWNyb3NvZnQtQklaLUZJTkFMLmpwZ1wiIGFsdD1cImdpdGh1YlwiIGNsYXNzPVwiaW1nLWZsdWlkXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLSBTb2NpYWwgLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHRleHQtY2VudGVyIHBhZGRpbmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPkNvbm5lY3Q8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMiBzb2NpYWwgcGFkZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9kZXZlbGRvZVwiPjxpIGNsYXNzPVwiZmEgZmEtZmFjZWJvb2tcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vZGV2ZWxkb2VcIj48aSBjbGFzcz1cImZhIGZhLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kZXZlbGRvZVwiPjxpIGNsYXNzPVwiZmEgZmEtaW5zdGFncmFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vYW5kcmVlcmF5LnNlXCI+PGkgY2xhc3M9XCJmYSBmYS1ob21lXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5SZWxlYXNlIExvZzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj5WdWU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5WMS4wPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+QmFzaWMgVnVlIHNrZWxldG9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0xXCI+UmVzb3VyY2VzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VjEuMTwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPkFwcGxpY2F0aW9uIFByb3RvY2FsIEludGVyZmFjZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0xXCI+Um91dGVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VjEuMjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPkFwcGxpY2F0aW9uIFJvdXRpbmc8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMVwiPlN0b3JlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VjEuMzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPkNlbnRyYWxpemVkIHN0b3JlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJtYi0xXCI+Qm9vdHN0cmFwPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VjEuNDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPkJhc2ljIFNrZWxldG9uIG9mIGEgdnVlIGFwcGxpY2F0aW9uLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz5CYWNrIExvZzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj5BdXRoZW50aWNhdGlvbiAmIEF1dGhvcml6YXRpb248L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5WMS41PC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJtYi0xXCI+VXNlciBzaWdudXAsIHJvbGVzIGFuZCBwZXJtaXNzaW9ucy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwibWItMVwiPkFkbWluaXN0cmF0aW9uPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VjEuNjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPkFkbWluaXN0cmF0aW9uIHNlY3Rpb24gaW50ZXJmYWNlPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cIm1iLTFcIj5GaWxlIFRyYW5zZmVyPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+VjEuNzwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibWItMVwiPlJpY2ggdHJhbnNmZXIgdXNlciBleHBlcmllbmNlIG9mIGZpbGVzIHN1Y2ggYXMgaW1hZ2VzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3M9XCJsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5tYWRlIGJ5IERldmVsRG9lPC9oNT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZm9vdGVyPlxyXG5cclxuXHJcbiAgICA8a2VlcC1hbGl2ZT5cclxuICAgICAgICA8IS0tIDxyb3V0ZXItdmlldyB2LWJpbmQ6bXNnPVwibXNnXCI+PC9yb3V0ZXItdmlldz4gLS0+XHJcbiAgICA8L2tlZXAtYWxpdmU+XHJcblxyXG48L2Rpdj5cbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUudnVlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2FwcCcsXHJcbiAgICBwcm9wczogWyAnYXBwTmFtZScgXSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWN0aXZlTmF2SXRlbTogJ2hvbWUnLFxyXG4gICAgICAgICAgICBhY3RpdmVTbGlkZUl0ZW06ICcwJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgaXNBY3RpdmVOYXZJdGVtOiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZU5hdkl0ZW0gPT09IGl0ZW1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFjdGl2ZU5hdkl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVOYXZJdGVtID0gaXRlbVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgSG9tZVxyXG4gICAgfVxyXG59XG48L3NjcmlwdD5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgYXR0cnM6IHsgaWQ6IFwiYXBwXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcIm5hdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcIm5hdmJhciBuYXZiYXItZXhwYW5kLXNtIG5hdmJhci1saWdodCBiZy1saWdodCBzdGlja3ktdG9wXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLWJyYW5kXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpICsgXCIgXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXZiYXJSZXNwb25zaXZlXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1uYXYgbWwtYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwiaG9tZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJob21lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkhvbWUgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImFib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcImFib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFib3V0IFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdi1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJzZXJ2aWNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJzZXJ2aWNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZXJ2aWNlcyBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwidGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJ0ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRlYW0gXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImNvbm5lY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXRBY3RpdmVOYXZJdGVtKFwiY29ubmVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25uZWN0IFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgzKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oNCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDUpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg2KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oNyksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg5KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMTApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwia2VlcC1hbGl2ZVwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hdmJhci10b2dnbGVyXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIixcbiAgICAgICAgICBcImRhdGEtdGFyZ2V0XCI6IFwiI25hdmJhclJlc3BvbnNpdmVcIlxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci10b2dnbGVyLWljb25cIiB9KV1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwgc2xpZGVcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IFwic2xpZGVzXCIsIFwiZGF0YS1yaWRlXCI6IFwiY2Fyb3VzZWxcIiB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIm9sXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiIH0sIFtcbiAgICAgICAgICBfYyhcImxpXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhcmdldFwiOiBcIiNzbGlkZXNcIiwgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMFwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhcmdldFwiOiBcIiNzbGlkZXNcIiwgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMVwiIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXRhcmdldFwiOiBcIiNzbGlkZXNcIiwgXCJkYXRhLXNsaWRlLXRvXCI6IFwiMlwiIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pbm5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW0gYWN0aXZlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZC5wbmdcIikgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1jYXB0aW9uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS0yXCIgfSwgW192bS5fdihcIkRldmVsU3RyYXBcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwic3RhcnRpbmcgcG9pbnQgZm9yIHlvdXIgVnVlSlMgcHJvamVjdHMuXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR2V0IFN0YXJ0ZWRcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMi5wbmdcIikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi9hc3NldHMvaW1nL2JhY2tncm91bmQzLnBuZ1wiKSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGp1bWJvdHJvblwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTkgY29sLWxnLTkgY29sLXhsLTEwXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJUaGlzIHByb2plY3QgY2FuIGJlIHVzZWQgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgVnVlIHdlYiBhcHAgZGV2ZWxvcG1lbnQuIEl0IHF1aWNrbHkgc3RyYXBzIGFsbCB0aGUgbmVlZHMgZm9yIGEgY29tcGxldGUgVnVlIHdlYiBhcHAgc29sdXRpb24uIEZlZWwgZnJlZSB0byBjbG9uZSB0aGUgcmVwbyBvdmVyIGF0IEdpdEh1YlwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS0xMiBjb2wtbWQtMyBjb2wtbGctOSBjb2wteGwtMlwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0RldmVsRG9lL2RldmVsLXZ1ZVwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBidG4tbGdcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdpdEh1YlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGVkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgd2VsY29tZSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktNFwiIH0sIFtfdm0uX3YoXCJCdWlsdCB3aXRoIGVhc2UuXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImhyXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIldlbGNvbWUgdG8gbXkgVnVlSlMgc3RyYXAgYXBwbGljYXRpb24hXFxyXFxuICAgICAgICAgICAgICAgIERldmVsU3RyYXAgVnVlSlMgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSBmcm9udC1lbmQgVnVlIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiB1c2UgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBhcHBsaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJWdWVKU1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgUHJvZ3Jlc3NpdmUgSmF2YVNjcmlwdCBGcmFtZXdvcmsuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzcxMTAxMzYvMjkwMDI4NTctOWU4MDJmMDgtN2FiNC0xMWU3LTljMzEtNjA0YjVkMGQwYzE5LnBuZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJWdWVYXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ2VudHJhbGl6ZWQgc3RvcmUgZm9yIGFsbCB0aGUgY29tcG9uZW50cyBpbiBhbiBhcHBsaWNhdGlvblwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMTA1NzkxP3Y9MyZzPTQwMFwiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJXZWJwYWNrXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZSBtb3N0IHBvcHVsYXIgbW9kdWxlIGJ1bmRsZXIuIFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzdhMTk3Y2ZlNDQ1NDhjYzFhM2Y1ODExNTJhZjcwYTMwNTFlMTE2NzEvNzhkZjgvaW1nL2JhYmVsLnN2Z1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJCYWJlbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgbmV4dCBnZW5lcmF0aW9uIEphdmFTY3JpcHQgY29tcGlsZXIuIFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yMDAwLzEqOUhhbkRzUlUxMVpNc2dER0p3Tjk2dy5wbmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQm9vdHN0cmFwXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiVGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBsaWJyYXJ5IGluIHRoZSB3b3JsZC5cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImZpZ3VyZVwiLCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpeGVkLXdyYXBcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwiZml4ZWRcIiB9IH0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgd2VsY29tZSB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMVwiLCB7IHN0YXRpY0NsYXNzOiBcImRpc3BsYXktNFwiIH0sIFtfdm0uX3YoXCJNZSBNeXNlbGYgYW5kIElcIildKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJoclwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgYm9yZGVyOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdG9wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy53My5vcmcvaHRtbC9sb2dvL2Rvd25sb2Fkcy9IVE1MNV9CYWRnZV8yNTYucG5nXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJTdHJ1Y3R1cmVcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlByb3BlciBIVE1MNSBzdHJ1Y3R1cmluZyBhbmQgc2NlbWFudGljcyB0byBpbmRpY2F0ZSBjbGVhcmx5IHdoYXQgcm9sZSBpcyBwbGF5ZWQgYnkgdGhlIGNvbnRlbnQgdGhvc2UgdGFncyBjb250YWluLiBIVE1MIHRhZ3MgYXJlIChtb3N0bHkpIHVzZWQgdG8gZm9ybWF0IGNvbnRlbnQsdGhlc2UgdGFncyB0ZWxsIHRoZSBicm93c2VyIGhvdyB0byBkaXNwbGF5IHRoZSBjb250ZW50IG9uIHRoZSBwYWdlLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5zZW1ydXNoLmNvbS9ibG9nL3NlbWFudGljLWh0bWw1LWd1aWRlL1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9yZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgYm9yZGVyOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdG9wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL21hcmtldGluZy5kY2Fzc2V0Y2RuLmNvbS9ibG9nLzIwMTYvSmFudWFyeS8yMDE2LXdlYi1kZXNpZ24tdHJlbmRzL0NTUzNMb2dvXzMwMC5wbmdcIixcbiAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIlByZXNlbnRhdGlvblwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiTW9iaWxlIGZpcnN0LCByZXNwb25zaXZlIGRlc2lnbiBmb3IgYSByaWNoIHVuZGVyc3RhbmRpbmcgb2Ygd2hhdCB1c2VycyBhcmUgbG9va2luZyBmb3IgYW5kIHRoZSByaWdodCB3YXkgdG8gZGVsaXZlciBpdCBmb3IgdGhlIGJlc3QgdXNlciBleHBlcmllbmNlLiBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL2FsaXN0YXBhcnQuY29tL2FydGljbGUvcmVzcG9uc2l2ZS13ZWItZGVzaWduL1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9yZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiwgc3RhdGljU3R5bGU6IHsgYm9yZGVyOiBcIm5vbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1pbWctdG9wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgXCJodHRwczovL3d3dy5waXhlbHBlcmZlY3QuY28uemEvd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDcvSlMucG5nXCIsXG4gICAgICAgICAgICAgICAgYWx0OiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImg0XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiIH0sIFtfdm0uX3YoXCJCZWhhdmlvclwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiVXNpbmcgSmF2YXNjcmlwdCB0byBjb2RlIGZyb250LWVuZCBoYXMgY29tZSBhIGxvbmcgd2F5IGZyb20ganVzdCB2YWxpZGF0aW9uIGFuZCBqUXVlcnkgaG9va3MgdG8gY3JlYXRlIGR5bmFtaWMgd2ViIHBhZ2VzLiBUb2RheSB0aGUgY29tcGxleCBzaW5nbGUgcGFnZSBhcHBsaWNhdGlvbnMgcmVseSBoZWF2ZWx5IG9uIGZyYW1ld29ya3Mgc3VjaCBhcyBWdWVKUywgUmVhY3QgYW5kIEFuZ3VsYXIuICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuc2VtcnVzaC5jb20vYmxvZy9zZW1hbnRpYy1odG1sNS1ndWlkZS9cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIk1vcmVcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHBhZGRpbmdcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTEyIGNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkdldCBTdGFydGVkLi4uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJDbG9uZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJjb2RlXCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcImdpdCBjbG9uZSBnaXRAZ2l0aHViLmNvbTpEZXZlbERvZS9kZXZlbC12dWUuZ2l0XCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJJbnN0YWxsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm5wbSBpbnN0YWxsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImg0XCIsIFtfdm0uX3YoXCJCdWlsZFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoXCJucG0gcnVuIGRldlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1sZy02XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImltZy1mbHVpZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9tZWRpYS53aXJlZC5jb20vcGhvdG9zLzViMzZhNWI2ZTIzN2U4N2NlOTU5MmI4ZS8xOTE6MTAwL3Bhc3MvR2l0aHViLU1pY3Jvc29mdC1CSVotRklOQUwuanBnXCIsXG4gICAgICAgICAgICAgIGFsdDogXCJnaXRodWJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNlbnRlciBwYWRkaW5nXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtfYyhcImgyXCIsIFtfdm0uX3YoXCJDb25uZWN0XCIpXSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTIgc29jaWFsIHBhZGRpbmdcIiB9LCBbXG4gICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vZGV2ZWxkb2VcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWZhY2Vib29rXCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9kZXZlbGRvZVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZ2l0aHViXCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9kZXZlbGRvZVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaW5zdGFncmFtXCIgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cDovL2FuZHJlZXJheS5zZVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtaG9tZVwiIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJmb290ZXJcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIlJlbGVhc2UgTG9nXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWdyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMVwiIH0sIFtfdm0uX3YoXCJWdWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW192bS5fdihcIlYxLjBcIildKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkJhc2ljIFZ1ZSBza2VsZXRvbi5cIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMVwiIH0sIFtfdm0uX3YoXCJSZXNvdXJjZXNcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW192bS5fdihcIlYxLjFcIildKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFwcGxpY2F0aW9uIFByb3RvY2FsIEludGVyZmFjZVwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW192bS5fdihcIlJvdXRlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzbWFsbFwiLCBbX3ZtLl92KFwiVjEuMlwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXBwbGljYXRpb24gUm91dGluZ1wiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW192bS5fdihcIlN0b3JlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtfdm0uX3YoXCJWMS4zXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDZW50cmFsaXplZCBzdG9yZS5cIilcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImxpc3QtZ3JvdXAtaXRlbSBsaXN0LWdyb3VwLWl0ZW0tYWN0aW9uIGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImQtZmxleCB3LTEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMVwiIH0sIFtfdm0uX3YoXCJCb290c3RyYXBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW192bS5fdihcIlYxLjRcIildKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkJhc2ljIFNrZWxldG9uIG9mIGEgdnVlIGFwcGxpY2F0aW9uLlwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQmFjayBMb2dcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQXV0aGVudGljYXRpb24gJiBBdXRob3JpemF0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtfdm0uX3YoXCJWMS41XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJVc2VyIHNpZ251cCwgcm9sZXMgYW5kIHBlcm1pc3Npb25zLlwiKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwibGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZC1mbGV4IHctMTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQWRtaW5pc3RyYXRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic21hbGxcIiwgW192bS5fdihcIlYxLjZcIildKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkFkbWluaXN0cmF0aW9uIHNlY3Rpb24gaW50ZXJmYWNlXCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJsaXN0LWdyb3VwLWl0ZW0gbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkLWZsZXggdy0xMDAganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGaWxlIFRyYW5zZmVyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNtYWxsXCIsIFtfdm0uX3YoXCJWMS43XCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0xXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJSaWNoIHRyYW5zZmVyIHVzZXIgZXhwZXJpZW5jZSBvZiBmaWxlcyBzdWNoIGFzIGltYWdlcy5cIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY0NsYXNzOiBcImxpZ2h0XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoNVwiLCBbX3ZtLl92KFwibWFkZSBieSBEZXZlbERvZVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTEwNTA2ZWNlXCIsIHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH0pXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9