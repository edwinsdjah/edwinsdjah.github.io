"use strict";
exports.id = 189;
exports.ids = [189];
exports.modules = {

/***/ 4902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initIsotope = ()=>{
    let iso;
    let grid = document.querySelectorAll(".gallery");
    let filtersElem = document.querySelector(".filtering");
    let buttonGroups = document.querySelectorAll(".filtering");
    if (grid.length >= 1) {
        grid.forEach((item)=>{
            iso = new Isotope(item, {
                itemSelector: ".items"
            });
        });
    }
    if (filtersElem) {
        filtersElem.addEventListener("click", function(event) {
            if (!matchesSelector(event.target, "span")) {
                return;
            }
            var filterValue = event.target.getAttribute("data-filter");
            filterValue = filterValue;
            iso.arrange({
                filter: filterValue
            });
        });
        const radioButtonGroup = (buttonGroup)=>{
            buttonGroup.addEventListener("click", (event)=>{
                if (!matchesSelector(event.target, "span")) {
                    return;
                }
                buttonGroup.querySelector(".active").classList.remove("active");
                event.target.classList.add("active");
            });
        };
        for(var i = 0, len = buttonGroups.length; i < len; i++){
            var buttonGroup1 = buttonGroups[i];
            radioButtonGroup(buttonGroup1);
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initIsotope);


/***/ }),

/***/ 3169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Header = ({ title , subTitle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "pg-header-sipm pg-work gr-purple-light-bg valign",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row justify-content-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-8 col-md-10",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "caption text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "fz-16 mb-10 gr-purple-red-text",
                                children: subTitle
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "fz-60",
                                children: title
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ })

};
;