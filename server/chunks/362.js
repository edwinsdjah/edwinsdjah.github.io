"use strict";
exports.id = 362;
exports.ids = [362];
exports.modules = {

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const StickyBar = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sticky_bar = document.querySelector(".sticky-bar");
        if (window.pageYOffset > 600) {
            sticky_bar.classList.add("active");
        } else {
            sticky_bar.classList.remove("active");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 600) {
                sticky_bar.classList.add("active");
            } else {
                sticky_bar.classList.remove("active");
            }
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky-bar",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "left-bar",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact-creative",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "contact-butn",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Contact Us"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "icon ml-10",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "far fa-comment"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StickyBar);


/***/ }),

/***/ 3693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ main_light)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Navbars/MainNavbar/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Navbar = ({ navbarRef , theme , logoTheme  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: `navbar navbar-expand-lg ${theme}`,
        ref: navbarRef,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    className: "navbar-brand",
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "logo",
                        children: [
                            logoTheme === "dark" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-dark.png",
                                alt: ""
                            }),
                            logoTheme === "light" && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-light.png",
                                alt: ""
                            }),
                            !logoTheme && /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "img/logo-dark.png",
                                alt: ""
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-bs-toggle": "collapse",
                    "data-bs-target": "#navbarSupportedContent",
                    "aria-controls": "navbarSupportedContent",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "fas fa-bars"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    id: "navbarSupportedContent",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "navbar-nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/home-index",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link",
                                        role: "button",
                                        children: "Home"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/profile-index",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Profile"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/portfolio-index",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Portfolio"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/brand-index",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "nav-link dropdown-toggle",
                                        role: "button",
                                        children: "Clients"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "nav-item",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact-index",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "nav-link",
                                        children: "Contact"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const MainNavbar = (Navbar);

;// CONCATENATED MODULE: ./src/layouts/main-light.jsx

/* eslint-disable @next/next/no-css-tags */ 


const MainLayout = ({ children , defaultTheme , defaultLogoTheme  })=>{
    const { 0: theme  } = (0,external_react_.useState)("light");
    const { 0: logoTheme , 1: setLogoTheme  } = (0,external_react_.useState)("light");
    const navbarRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
            setLogoTheme("dark");
        } else {
            navbar.classList.remove("nav-scroll");
            setLogoTheme("light");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
                setLogoTheme("dark");
            } else {
                navbar.classList.remove("nav-scroll");
                setLogoTheme("light");
            }
        });
    }, [
        navbarRef
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/plugins.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/style.css"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(MainNavbar, {
                navbarRef: navbarRef,
                theme: defaultTheme ? defaultTheme : theme,
                logoTheme: defaultLogoTheme ? defaultLogoTheme : logoTheme
            }),
            children
        ]
    });
};
/* harmony default export */ const main_light = (MainLayout);


/***/ }),

/***/ 3930:
/***/ ((module) => {

module.exports = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"Ok":[{"title":"Company","url":"/profile-index"},{"title":"Portfolio","url":"/portfolio-index"}],"aC":[{"url":"/blog-grid-modern","image":"img/blog/c3.jpg","title":"How to check the website before releasing it?"},{"url":"/blog-grid-modern","image":"img/blog/c1.jpg","title":"How to check the website before releasing it?"}],"Lk":"JI. Muara Baru Ujung Blok A No. 1 Kel. Penjaringan Kec. Penjaringan - Jakarta Utara 14440","Do":"xxxx@Gmail.com","m7":"(021) 6669 7070","Qz":{"u":"ThemesCamp","H":"https://themeforest.net/user/themescamp"}}');

/***/ })

};
;