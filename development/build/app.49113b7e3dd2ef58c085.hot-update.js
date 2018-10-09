webpackHotUpdate("app",{

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
      _vm._m(12),
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
    return _c("footer", [
      _c("div", { staticClass: "container-fluid padding" }, [
        _c("div", { staticClass: "row text-center" }, [
          _c("div", { staticClass: "col-md-4" }, [
            _c("h3", [_vm._v("DevelStrap VueJS")]),
            _vm._v(" "),
            _c("hr", { staticClass: "light" }),
            _vm._v(" "),
            _c("p", [_vm._v("+46 (0) 708689241")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvQXBwLnZ1ZT9hMjgyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxTQUFTLFlBQVksRUFBRTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3RELHFCQUFxQixzQ0FBc0MsWUFBWSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQSwwQkFBMEIsb0NBQW9DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrQ0FBa0MsWUFBWSxFQUFFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsa0NBQWtDLFlBQVksRUFBRTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtDQUFrQyxZQUFZLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlC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QUFDUjtBQUNBO0FBQ0E7QUFDQSx3SUFBcUUsbURBQW1EO0FBQ3hIO0FBQ0EsQyIsImZpbGUiOiJhcHAuNDkxMTNiN2UzZGQyZWY1OGMwODUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImFwcFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJuYXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1zbSBuYXZiYXItbGlnaHQgYmctbGlnaHQgc3RpY2t5LXRvcFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1icmFuZFwiLCBhdHRyczogeyBocmVmOiBcIiNcIiB9IH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIERldmVsU3RyYXAgVnVlSlMgXCIpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJuYXZiYXJSZXNwb25zaXZlXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdmJhci1uYXYgbWwtYXV0b1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwiaG9tZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJob21lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkhvbWUgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImFib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2V0QWN0aXZlTmF2SXRlbShcImFib3V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFib3V0IFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdi1pdGVtXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IF92bS5pc0FjdGl2ZU5hdkl0ZW0oXCJzZXJ2aWNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJzZXJ2aWNlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZXJ2aWNlcyBcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXYtaXRlbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBfdm0uaXNBY3RpdmVOYXZJdGVtKFwidGVhbVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldEFjdGl2ZU5hdkl0ZW0oXCJ0ZWFtXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibmF2LWxpbmtcIiwgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlRlYW0gXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF2LWl0ZW1cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogX3ZtLmlzQWN0aXZlTmF2SXRlbShcImNvbm5lY3RcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXRBY3RpdmVOYXZJdGVtKFwiY29ubmVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hdi1saW5rXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDb25uZWN0IFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgzKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oNCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDUpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiaHJcIiwgeyBzdGF0aWNDbGFzczogXCJteS00XCIgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDYpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSg3KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oOCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDkpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmdW5cIixcbiAgICAgICAgICBhdHRyczogeyBcImRhdGEtdG9nZ2xlXCI6IFwiY29sbGFwc2VcIiwgXCJkYXRhLXRhcmdldFwiOiBcIiNiYWNrbG9nXCIgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiY29tbWluZyBzb29uXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX20oMTEpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbSgxMiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJrZWVwLWFsaXZlXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJidXR0b25cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXJcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiZGF0YS10b2dnbGVcIjogXCJjb2xsYXBzZVwiLFxuICAgICAgICAgIFwiZGF0YS10YXJnZXRcIjogXCIjbmF2YmFyUmVzcG9uc2l2ZVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmF2YmFyLXRvZ2dsZXItaWNvblwiIH0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJvdXNlbCBzbGlkZVwiLFxuICAgICAgICBhdHRyczogeyBpZDogXCJzbGlkZXNcIiwgXCJkYXRhLXJpZGVcIjogXCJjYXJvdXNlbFwiIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwib2xcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pbmRpY2F0b3JzXCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIwXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIxXCIgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBcImRhdGEtdGFyZ2V0XCI6IFwiI3NsaWRlc1wiLCBcImRhdGEtc2xpZGUtdG9cIjogXCIyXCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWlubmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2Fyb3VzZWwtaXRlbSBhY3RpdmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLnBuZ1wiKSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWNhcHRpb25cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiRGV2ZWxTdHJhcCBWdWVKU1wiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwic3RhcnRpbmcgcG9pbnQgZm9yIHlvdXIgVnVlSlMgcHJvamVjdHMuXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0IGJ0bi1sZ1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVklFVyBERU1PXCIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkdldCBTdGFydGVkXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJvdXNlbC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuL2Fzc2V0cy9pbWcvYmFja2dyb3VuZDIucG5nXCIpIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcm91c2VsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kMy5wbmdcIikgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBqdW1ib3Ryb25cIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC05IGNvbC1sZy05IGNvbC14bC0xMFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiVGhpcyBwcm9qZWN0IGNhbiBiZSB1c2VkIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIFZ1ZSB3ZWIgYXBwIGRldmVsb3BtZW50LiBJdCBxdWlja2x5IHN0cmFwcyBhbGwgdGhlIG5lZWRzIGZvciBhIGNvbXBsZXRlIFZ1ZSB3ZWIgYXBwIHNvbHV0aW9uLiBGZWVsIGZyZWUgdG8gY2xvbmUgdGhlIHJlcG8gb3ZlciBhdCBHaXRIdWJcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tMTIgY29sLW1kLTMgY29sLWxnLTkgY29sLXhsLTJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9EZXZlbERvZS9kZXZlbC12dWVcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLWxnXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHaXRIdWJcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHBhZGRlZFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHdlbGNvbWUgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgeyBzdGF0aWNDbGFzczogXCJkaXNwbGF5LTRcIiB9LCBbX3ZtLl92KFwiQnVpbHQgd2l0aCBlYXNlLlwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIldlbGNvbWUgdG8gbXkgVnVlSlMgc3RyYXAgYXBwbGljYXRpb24hXFxyXFxuICAgICAgICAgICAgICAgIERldmVsU3RyYXAgVnVlSlMgaXMgYSBmcmVlIGFuZCBvcGVuLXNvdXJjZSBmcm9udC1lbmQgVnVlIGFwcGxpY2F0aW9uIHRoYXQgeW91IGNhbiB1c2UgYXMgYSBzdGFydGluZyBwb2ludCBmb3IgeW91ciBWdWVKUyBhcHBsaWNhdGlvbnMuXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wteHMtMTIgY29sLXNtLTYgY29sLW1kLTRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc3JjOiBcImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJWdWVKU1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgUHJvZ3Jlc3NpdmUgSmF2YVNjcmlwdCBGcmFtZXdvcmsuXCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLXhzLTEyIGNvbC1zbS02IGNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICBcImh0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzcxMTAxMzYvMjkwMDI4NTctOWU4MDJmMDgtN2FiNC0xMWU3LTljMzEtNjA0YjVkMGQwYzE5LnBuZ1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJWdWVYXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ2VudHJhbGl6ZWQgc3RvcmUgZm9yIGFsbCB0aGUgY29tcG9uZW50cyBpbiBhbiBhcHBsaWNhdGlvblwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMTA1NzkxP3Y9MyZzPTQwMFwiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJXZWJwYWNrXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlRoZSBtb3N0IHBvcHVsYXIgbW9kdWxlIGJ1bmRsZXIuIFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtc20tNiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzdhMTk3Y2ZlNDQ1NDhjYzFhM2Y1ODExNTJhZjcwYTMwNTFlMTE2NzEvNzhkZjgvaW1nL2JhYmVsLnN2Z1wiLFxuICAgICAgICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MlwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI0MlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJCYWJlbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJUaGUgbmV4dCBnZW5lcmF0aW9uIEphdmFTY3JpcHQgY29tcGlsZXIuIFwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC14cy0xMiBjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL2Nkbi1pbWFnZXMtMS5tZWRpdW0uY29tL21heC8yMDAwLzEqOUhhbkRzUlUxMVpNc2dER0p3Tjk2dy5wbmdcIixcbiAgICAgICAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiNDJcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNDJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQm9vdHN0cmFwXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiVGhlIG1vc3QgcG9wdWxhciBIVE1MLCBDU1MsIGFuZCBKUyBsaWJyYXJ5IGluIHRoZSB3b3JsZC5cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJoclwiLCB7IHN0YXRpY0NsYXNzOiBcIm15LTRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtMTIgY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiR2V0IFN0YXJ0ZWQuLi5cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkNsb25lXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvZGVcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiZ2l0IGNsb25lIGdpdEBnaXRodWIuY29tOkRldmVsRG9lL2RldmVsLXZ1ZS5naXRcIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkluc3RhbGxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiY29kZVwiLCBbX3ZtLl92KFwibnBtIGluc3RhbGxcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDRcIiwgW192bS5fdihcIkJ1aWxkXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImNvZGVcIiwgW192bS5fdihcIm5wbSBydW4gZGV2XCIpXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTZcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW1nLWZsdWlkXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgXCJodHRwczovL21lZGlhLndpcmVkLmNvbS9waG90b3MvNWIzNmE1YjZlMjM3ZTg3Y2U5NTkyYjhlLzE5MToxMDAvcGFzcy9HaXRodWItTWljcm9zb2Z0LUJJWi1GSU5BTC5qcGdcIixcbiAgICAgICAgICAgICAgYWx0OiBcImdpdGh1YlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB3ZWxjb21lIHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtcbiAgICAgICAgICBfYyhcImgxXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGlzcGxheS00XCIgfSwgW192bS5fdihcIk1lIE15c2VsZiBhbmQgSVwiKV0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImhyXCIpXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIHBhZGRpbmdcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBwYWRkaW5nXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiLCBzdGF0aWNTdHlsZTogeyBib3JkZXI6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10b3BcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LnczLm9yZy9odG1sL2xvZ28vZG93bmxvYWRzL0hUTUw1X0JhZGdlXzI1Ni5wbmdcIixcbiAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIlN0cnVjdHVyZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiUHJvcGVyIEhUTUw1IHN0cnVjdHVyaW5nIGFuZCBzY2VtYW50aWNzIHRvIGluZGljYXRlIGNsZWFybHkgd2hhdCByb2xlIGlzIHBsYXllZCBieSB0aGUgY29udGVudCB0aG9zZSB0YWdzIGNvbnRhaW4uIEhUTUwgdGFncyBhcmUgKG1vc3RseSkgdXNlZCB0byBmb3JtYXQgY29udGVudCx0aGVzZSB0YWdzIHRlbGwgdGhlIGJyb3dzZXIgaG93IHRvIGRpc3BsYXkgdGhlIGNvbnRlbnQgb24gdGhlIHBhZ2UuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3LnNlbXJ1c2guY29tL2Jsb2cvc2VtYW50aWMtaHRtbDUtZ3VpZGUvXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb3JlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiLCBzdGF0aWNTdHlsZTogeyBib3JkZXI6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10b3BcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vbWFya2V0aW5nLmRjYXNzZXRjZG4uY29tL2Jsb2cvMjAxNi9KYW51YXJ5LzIwMTYtd2ViLWRlc2lnbi10cmVuZHMvQ1NTM0xvZ29fMzAwLnBuZ1wiLFxuICAgICAgICAgICAgICAgIGFsdDogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJoNFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGVcIiB9LCBbX3ZtLl92KFwiUHJlc2VudGF0aW9uXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJNb2JpbGUgZmlyc3QsIHJlc3BvbnNpdmUgZGVzaWduIGZvciBhIHJpY2ggdW5kZXJzdGFuZGluZyBvZiB3aGF0IHVzZXJzIGFyZSBsb29raW5nIGZvciBhbmQgdGhlIHJpZ2h0IHdheSB0byBkZWxpdmVyIGl0IGZvciB0aGUgYmVzdCB1c2VyIGV4cGVyaWVuY2UuIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjpcbiAgICAgICAgICAgICAgICAgICAgICBcImh0dHBzOi8vYWxpc3RhcGFydC5jb20vYXJ0aWNsZS9yZXNwb25zaXZlLXdlYi1kZXNpZ24vXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb3JlXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC00XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiLCBzdGF0aWNTdHlsZTogeyBib3JkZXI6IFwibm9uZVwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWltZy10b3BcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICBcImh0dHBzOi8vd3d3LnBpeGVscGVyZmVjdC5jby56YS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy9KUy5wbmdcIixcbiAgICAgICAgICAgICAgICBhbHQ6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWJvZHlcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaDRcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIgfSwgW192bS5fdihcIkJlaGF2aW9yXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJVc2luZyBKYXZhc2NyaXB0IHRvIGNvZGUgZnJvbnQtZW5kIGhhcyBjb21lIGEgbG9uZyB3YXkgZnJvbSBqdXN0IHZhbGlkYXRpb24gYW5kIGpRdWVyeSBob29rcyB0byBjcmVhdGUgZHluYW1pYyB3ZWIgcGFnZXMuIFRvZGF5IHRoZSBjb21wbGV4IHNpbmdsZSBwYWdlIGFwcGxpY2F0aW9ucyByZWx5IGhlYXZlbHkgb24gZnJhbWV3b3JrcyBzdWNoIGFzIFZ1ZUpTLCBSZWFjdCBhbmQgQW5ndWxhci4gIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5zZW1ydXNoLmNvbS9ibG9nL3NlbWFudGljLWh0bWw1LWd1aWRlL1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW9yZVwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXIgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbX2MoXCJoMlwiLCBbX3ZtLl92KFwiQ29ubmVjdFwiKV0pXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyIHNvY2lhbCBwYWRkaW5nXCIgfSwgW1xuICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RldmVsZG9lXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1mYWNlYm9va1wiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vd3d3LmdpdGh1Yi5jb20vZGV2ZWxkb2VcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWdpdGh1YlwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZGV2ZWxkb2VcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWluc3RhZ3JhbVwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcImh0dHA6Ly9hbmRyZWVyYXkuc2VcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWhvbWVcIiB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiUmVsZWFzZSBMb2dcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4wIHNrZWxldG9uXCIpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsaVwiLCBbX3ZtLl92KFwiMS4xIFZ1ZSBSb3V0ZXJcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxpXCIsIFtfdm0uX3YoXCIxLjIgVnVlWFwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwibGlcIiwgW192bS5fdihcIjEuMyBCb290c3RyYXBcIildKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZmlndXJlXCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZml4ZWQtd3JhcFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJmaXhlZFwiIH0gfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xsYXBzZVwiLCBhdHRyczogeyBpZDogXCJiYWNrbG9nXCIgfSB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBwYWRkaW5nXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyB0ZXh0LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1zbS02IGNvbC1tZC0zXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJBdXRoZW50aWNhdGlvbiAmIEF1dGhvcml6YXRpb25cIildKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtc20tNiBjb2wtbWQtM1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRmlsZSBVcGxvYWRlclwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJmb290ZXJcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgcGFkZGluZ1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgdGV4dC1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkRldmVsU3RyYXAgVnVlSlNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImhyXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlnaHRcIiB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIis0NiAoMCkgNzA4Njg5MjQxXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMTA1MDZlY2VcIiwgeyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=