"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Masonry)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(4902);
;// CONCATENATED MODULE: ./src/data/portfolio/classic/masonry.json
const masonry_namespaceObject = JSON.parse('{"u":[{"name":"All","operator":"*"},{"name":"Shipping","operator":".ship"},{"name":"Logistic","operator":".logistic"}],"l":[{"filter":"ship","image":"img/portfolio/1/1.jpg","title":"Creativity Demand","type":"Shipment"},{"filter":"logistic","image":"img/portfolio/1/2.jpg","title":"Through The Breaking","type":"Logistic"},{"filter":"ship","image":"img/portfolio/1/3.jpg","title":"Create With Creatives","type":"Shipment"},{"filter":"logistic","image":"img/portfolio/1/4.jpg","title":"Energies of Love","type":"Logistic"},{"filter":"logistic","image":"img/portfolio/1/5.jpg","title":"See It Yourself","type":"Logistic"},{"filter":"ship","image":"img/portfolio/1/7.jpg","title":"Blast From The Past","type":"Shipment"},{"filter":"ship","image":"img/portfolio/1/6.jpg","title":"See It Yourself","type":"Shipment"},{"filter":"ship","image":"img/portfolio/1/8.jpg","title":"Blast From The Past","type":"Shipment"}]}');
;// CONCATENATED MODULE: ./src/components/Portfolio/Classic/Masonry/index.jsx

/* eslint-disable @next/next/no-img-element */ 



const Portfolio = ()=>{
    (0,external_react_.useEffect)(()=>{
        //= Init Isotope
        setTimeout(()=>{
            (0,initIsotope/* default */.Z)();
        }, 500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "portfolio section-padding pt-0",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container-fluid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "filtering d-flex justify-content-center col-12 mb-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filter",
                            children: masonry_namespaceObject.u.map((filter, index)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    "data-filter": filter.operator,
                                    className: index == 0 ? "active" : "",
                                    children: filter.name
                                }, index)
                            )
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "wild-padding",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gallery col-12 rest",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: masonry_namespaceObject.l.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: `col-lg-3 col-md-6 items md-getter ${item.filter} wow fadeInUp`,
                                    "data-wow-delay": ".4s",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "item-img",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/project-details",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "imago wow",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                            src: item.image,
                                                            alt: "image"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "item-img-overlay"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "cont text-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: "fw-500",
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: item.type
                                                })
                                            ]
                                        })
                                    ]
                                }, index)
                            )
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Masonry = (Portfolio);


/***/ })

};
;