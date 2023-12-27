"use strict";
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 6405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Corporate_Services)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/data/corporate/services.json
const services_namespaceObject = JSON.parse('[{"icon":"img/icons/serv1.png","title":"Product Research","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with just a single click"},{"icon":"img/icons/serv2.png","title":"Design & Development","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with just a single click"},{"icon":"img/icons/serv3.png","title":"Testing & Support","description":"No coding skills required to customize and create unique looks.","srdescription":"No coding skills required to customize and create unique looks. Install any demo with just a single click"}]');
;// CONCATENATED MODULE: ./src/components/Corporate/Services/index.jsx

/* eslint-disable @next/next/no-img-element */ 
const Services = ({ services: isServicesPage  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: `services section-padding ${isServicesPage ? "pb-0" : "pt-0"}`,
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
                                        "Best Features",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "fw-700",
                                    children: "Designed For You"
                                })
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: services_namespaceObject.map((service, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item text-center padding-rl-30",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "icon-img-70 m-auto mb-40",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: service.icon,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-15 fz-20 fw-600",
                                        children: service.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: isServicesPage ? service.srdescription : service.description
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Corporate_Services = (Services);


/***/ })

};
;