(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-page2-page2-module"],{

/***/ "Lykl":
/*!*********************************************!*\
  !*** ./src/app/pages/page2/page2.module.ts ***!
  \*********************************************/
/*! exports provided: Page2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Module", function() { return Page2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _page2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.component */ "XgbT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");






const routes = [
    { path: '', component: _page2_component__WEBPACK_IMPORTED_MODULE_1__["Page2Component"] }
];
class Page2Module {
}
Page2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Page2Module });
Page2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Page2Module_Factory(t) { return new (t || Page2Module)(); }, imports: [[
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Page2Module, { declarations: [_page2_component__WEBPACK_IMPORTED_MODULE_1__["Page2Component"]], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page2_component__WEBPACK_IMPORTED_MODULE_1__["Page2Component"]],
                imports: [
                    _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "XgbT":
/*!************************************************!*\
  !*** ./src/app/pages/page2/page2.component.ts ***!
  \************************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class Page2Component {
    constructor() { }
    ngOnInit() {
    }
}
Page2Component.ɵfac = function Page2Component_Factory(t) { return new (t || Page2Component)(); };
Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2Component, selectors: [["jb-page2"]], decls: 2, vars: 0, template: function Page2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlMi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jb-page2',
                templateUrl: './page2.component.html',
                styleUrls: ['./page2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-pages-page2-page2-module-es2015.js.map