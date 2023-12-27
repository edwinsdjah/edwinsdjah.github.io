"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 3341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/corporate/blog.json
const blog_namespaceObject = JSON.parse('[{"bg":"img/blog/b/v1.jpg","tag":"Tranding","date":"14 sep 2021","title":"ways to quickly increase traffic to your website","image":"img/blog/a1.jpg","author":"Chris Pratt"},{"bg":"img/blog/b/v2.jpg","tag":"Tranding","date":"14 sep 2021","title":"ways to quickly increase traffic to your website","image":"img/blog/a1.jpg","author":"Chris Pratt"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Blog/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const Blog = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "round-head text-center mb-80",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    className: "ls2 text-u fz-12 mb-15",
                                    children: [
                                        "Our Blogs ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fw-700",
                                    children: "Latest News"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blog_namespaceObject.map((blog, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "item side-img stwo box-shadow radius-5",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-5 rest",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "img bg-img",
                                                style: {
                                                    backgroundImage: `url('${blog.bg}')`
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blog-grid-clean",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "gat",
                                                            children: blog.tag
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-lg-7 valign",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "full-width",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "date text-u fz-13 fw-500 gr-sunrise-text mb-10",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: blog.date
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "title",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                className: "fw-700 line-height-30 mb-10",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: "/blog-side-img",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        children: blog.title
                                                                    })
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "info flex",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "author flex",
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-img",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                                className: "author-img circle-50 mr-15",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                                    src: blog.image,
                                                                                    alt: ""
                                                                                })
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                            className: "flex-cont valign",
                                                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                                        className: "fz-12 opacity-8",
                                                                                        children: "Written By :"
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                                                        className: "fz-16",
                                                                                        children: blog.author
                                                                                    })
                                                                                ]
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        }, idx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Corporate_Blog = (Blog);


/***/ }),

/***/ 9855:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_corporate_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__]);
swiper_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 




const Testimonials = ({ additionalClass , services  })=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: `testimonials corp ${services ? "" : "pt-80"} ${additionalClass ? additionalClass : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-img bg-fixed",
                        style: {
                            backgroundImage: "url('img/testimonials/bg.jpg')"
                        },
                        "data-overlay-dark": "4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "play-button",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://youtu.be/AzwC6umvd1s",
                                    className: "btn vid",
                                    onClick: openVideo,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            width: "100px",
                                            height: "100px",
                                            viewBox: "0 0 100 100",
                                            preserveAspectRatio: "none",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                                                className: "circle",
                                                cx: "50",
                                                cy: "50",
                                                r: "48",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                fill: "none"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fas fa-play"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Watch the trailer"
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "box-testim",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    className: "swiper-container swiper-testim",
                                    speed: 1000,
                                    slidesPerView: 1,
                                    loop: true,
                                    children: _data_corporate_testimonials_json__WEBPACK_IMPORTED_MODULE_4__.map((testimonial, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": ".6s",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "cont",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "quote-icon",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "img/icons/quote.svg",
                                                                alt: ""
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: testimonial.text
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "info flex mt-50",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author-img valign",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "circle",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: testimonial.image,
                                                                            alt: ""
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "author-info valign",
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        className: "full-width",
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                className: "fz-12 fw-700 text-u ls1 gr-sunrise-text mb-5",
                                                                                children: testimonial.author.name
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                className: "fz-12",
                                                                                children: testimonial.author.position
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        }, idx)
                                    )
                                })
                            })
                        })
                    })
                ]
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5818:
/***/ ((module) => {

module.exports = JSON.parse('[{"text":"I dont know what else to say. This is something you haven’t seen before. Unique design, high performance and outstanding support!","image":"img/testimonials/01.jpg","author":{"name":"Tom Cruise","position":"Envato Author"}},{"text":"I dont know what else to say. This is something you haven’t seen before. Unique design, high performance and outstanding support!","image":"img/testimonials/01.jpg","author":{"name":"Tom Cruise","position":"Envato Author"}},{"text":"I dont know what else to say. This is something you haven’t seen before. Unique design, high performance and outstanding support!","image":"img/testimonials/01.jpg","author":{"name":"Tom Cruise","position":"Envato Author"}}]');

/***/ })

};
;