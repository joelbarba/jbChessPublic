(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/barba/DEV/JB-CHESS/src/main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");




class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["home-page"]], decls: 3, vars: 0, consts: [["jbType", "update", "jbText", "view.common.go", 3, "jbClick"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "jb-btn", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function HomeComponent_Template_jb_btn_jbClick_2_listener() { return ctx.router.navigate(["games/"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbBtnComponent"]], styles: [".test[_ngcontent-%COMP%]:hover {\n  border: 3px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxxQkFBQTtBQUFKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVzdCB7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'home-page',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "1wQQ":
/*!******************************************************************!*\
  !*** ./src/app/shell/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["jb-page-not-found"]], decls: 13, vars: 3, consts: [[1, "text-center"], ["translate", ""], [3, "innerHTML"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "views.page-not-found.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ":(");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "a mistyped address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "an out-of-date link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, "views.page-not-found.message"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateDirective"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  font-size: 50px;\n  color: #525254;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #bbb;\n}\np[_ngcontent-%COMP%] {\n  margin: 1em 0;\n  font-size: 14px;\n}\nul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 14px;\n  color: #525254;\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NBLGdGQUFBO0FBQ0EsZ0ZBQUE7QUF3QkE7RUFBYSx3QkFBQTtFQUEwQixpQ0FBQTtBQ3hEdkM7QUFIQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0RRZ0I7QUNIbEI7QUFKRTtFQUFPLFdBQUE7QUFPVDtBQUxBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFRRjtBQU5BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0RIZ0I7RUNJaEIscUJBQUE7QUFTRiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKiBNYWluIENvbG9ycyAqKioqKioqKioqKlxuJHByaW1hcnlfY29sb3IgICAgOiAjMThjYWNkO1xuJHNlY29uZGFyeV9jb2xvciAgOiAjNTdjMTZmO1xuJHRlcnRpYXJ5X2NvbG9yICAgOiAjRjE3QjNGO1xuJHF1YXRlcm5hcnlfY29sb3IgOiAjM2Y4Y2NhO1xuJHdhcm5pbmdfY29sb3IgICAgOiAjZTg0ZTNhO1xuJGV4dHJhX2NvbG9yICAgICAgOiAjYTc2NmIyO1xuXG4kd2hpdGUgICAgICAgICAgOiAjZmZmO1xuJGJsYWNrICAgICAgICAgIDogIzAwMDtcbiRncmV5ICAgICAgICAgICA6ICM5MjkyOTI7XG4kbGlnaHQtZ3JheSAgICAgOiAjZTNlM2UzO1xuJGxpZ2h0ZXItZ3JheSAgIDogI2Y1ZjVmNTtcbiR0ZXh0LWNvbG9yICAgICA6ICM1MjUyNTQ7XG4kb3B0aW9uYWwtY29sb3IgOiAjY2NjOyAgICAgICAvLyAoYm9vdHN0cmFwIGRlZmF1bHQgLSAkaW5wdXQtYm9yZGVyKVxuJGRpc2FibGVkLWNvbG9yIDogI2EwYTBhMDtcbiRmb2N1c2VkLWNvbG9yICA6IGRhcmtlbigkcHJpbWFyeV9jb2xvciwgMjAlKTtcbiRyZXF1aXJlZC1jb2xvciA6ICRwcmltYXJ5X2NvbG9yO1xuJHZhbGlkLWNvbG9yICAgIDogJHByaW1hcnlfY29sb3I7XG4kaW52YWxpZC1jb2xvciAgOiAkd2FybmluZ19jb2xvcjtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogI2MwYzBjMDtcbiRzcGVjaWFsLWxpbmstY29sb3I6ICRwcmltYXJ5X2NvbG9yO1xuXG4vLyAqKioqKioqKiogU2hlbGwgKioqKioqKioqKipcbiRuYXZiYXItaGVpZ2h0ICA6IDcycHg7ICAgICAgLy8gSGVpZ2h0IG9mIHRoZSBoZWFkZXJcbiRtZW51LXdpZHRoICAgICA6IDU1cHg7ICAgICAgLy8gV2lkdGggb2YgdGhlIGNvbGxhcHNlZCBtZW51XG4kbWVudS1leHAtd2lkdGggOiAyMDBweDsgICAgIC8vIFdpZHRoIG9mIHRoZSBleHBhbmRlZCBtZW51ICh0b3RhbCA9ICRtZW51LXdpZHRoICsgJG1lbnUtZXhwLXdpZHRoKVxuXG4vLyAqKioqKioqKiogSGVhZGVyIE5hdmJhciAqKioqKioqKioqKlxuJG5hdi1iZy1jb2xvciAgICAgIDogJHByaW1hcnlfY29sb3I7ICAgICAgLy8gQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgbmF2YmFyXG4kbmF2LWNvbG9yICAgICAgICAgOiAkd2hpdGU7ICAgICAgICAgICAgICAvLyBDb2xvciBvZiB0aGUgbmF2YmFyIHRleHRcbiRuYXYtbGluay1jb2xvciAgICA6ICR3aGl0ZTsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgdGV4dCBvZiB0aGUgbGlua3NcbiRuYXYtaG92ZXItY29sb3IgICA6IGRhcmtlbigkd2hpdGUsIDEwJSk7IC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgaWNvbnMgd2hlbiBob3ZlcmluZ1xuJG1heC1sb2dvLXdpZHRoICAgIDogMzAwcHg7ICAgICAgICAgICAgICAgLy8gTWF4IHNpemUgb2YgdGhlIGxvZ28gaW4gdGhlIG5hdmJhclxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogIEJvb3RzdHJhcCB0aGVtZSBvdmVyd3JpdGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9zY3NzL192YXJpYWJsZXMuc2NzcyAqKioqKiovXG4kcHJpbWFyeSAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRzZWNvbmRhcnkgICAgICA6ICRzZWNvbmRhcnlfY29sb3I7XG4kc3VjY2VzcyAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRpbmZvICAgICAgICAgICA6ICRxdWF0ZXJuYXJ5X2NvbG9yO1xuJHdhcm5pbmcgICAgICAgIDogJGV4dHJhX2NvbG9yO1xuJGRhbmdlciAgICAgICAgIDogJHdhcm5pbmdfY29sb3I7XG4kbGlnaHQgICAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRkYXJrICAgICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGVycm9yLWNvbG9yICAgIDogJHdhcm5pbmdfY29sb3I7XG4kc3VjY2Vzcy1jb2xvciAgOiAkcHJpbWFyeV9jb2xvcjtcbiRsaW5rLWNvbG9yICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkcHJpbWFyeV9jb2xvciwgNSUpO1xuJGJvZHktY29sb3IgICAgIDogJHRleHQtY29sb3I7XG4kYm9keS1iZyAgICAgICAgOiAjZWJlZmYyO1xuXG4kbmF2YmFyLWRhcmstY29sb3IgICAgICAgICAgICAgIDogJHdoaXRlO1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yICAgICAgICA6IHJnYmEoJHdoaXRlLCAuNzUpO1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAgICAgICA6IHJnYmEoJHdoaXRlLCAuODApO1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yICAgICA6IHJnYmEoJHdoaXRlLCAuMjUpO1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yICA6ICR3aGl0ZTtcblxuLy8gLS0tLS0tIEdsb2JhbHMgLS0tLS0tXG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICdXRi1TYW5zLU0nOyBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL1B1YmxpY1NhbnMtTWVkaXVtLnR0ZicpOyB9XG4kZm9udC1mYW1pbHktYmFzZTogJ1dGLVNhbnMtTScsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1dGLVNhbnMtTScsIHNhbnMtc2VyaWY7XG4vLyRmb250LWZhbWlseS1tb25vc3BhY2U6IG1vbm9zcGFjZTtcbiRmb250LXNpemUtYmFzZTogMC44NzVyZW07IC8vIDE0cHg7IChkZWZhdWx0IDFyZW0gPSAxNnB4KVxuJGZvbnQtd2VpZ2h0LWJhc2U6IDQwMDtcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XG5cblxuLy8gR3JpZCBicmVha3BvaW50cyAtIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMS9sYXlvdXQvb3ZlcnZpZXcvP3NvdXJjZT1wb3N0X3BhZ2UjcmVzcG9uc2l2ZS1icmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6ICh4czogMCwgc206IDc2OHB4LCBtZDogOTkycHgsIGxnOiAxMjAwcHgsIHhsOiAxNjAwcHgpO1xuXG4vLyBNb2RhbCBzaXplc1xuLy8kbW9kYWwteGw6ICAxMTQwcHg7XG4kbW9kYWwtbGc6ICA5MDBweDsgLy8gRGVmYXVsdD04MDBcbiRtb2RhbC1tZDogIDYwMHB4OyAvLyBEZWZhdWx0PTUwMFxuJG1vZGFsLXNtOiAgNDAwcHg7IC8vIERlZmF1bHQ9MzAwXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6IDI1cHg7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAwO1xuXG5cbi8vIFogcG9zaXRpb24gZm9yIG1vZGFsc1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogMTA0MDsgLy8gMTA0MDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgIDEwNTA7IC8vIDEwNTA7XG5cbi8vIEJvb3RzdHJhcCBUb29sdGlwcyAoKyBuZ2IgVG9vbHRpcHMpXG4kemluZGV4LXRvb2x0aXA6IDUxMDA7ICAvLyBTaG93IHRvb2x0aXBzIG92ZXIgbmF2YmFyIGFuZCBtZW51XG4kdG9vbHRpcC1iZzogZGFya2VuKCRxdWF0ZXJuYXJ5X2NvbG9yLCA1JSk7XG4kdG9vbHRpcC1vcGFjaXR5OiAwLjk7XG4vLyR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc207XG4vLyR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4O1xuLy8kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGU7XG4vLyR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzO1xuLy8kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW07XG4vLyR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtO1xuLy8kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwO1xuLy8kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbTtcbi8vJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW07XG4vLyR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnO1xuXG4vLyBCb290c3RyYXAgUG9wb3ZlcnNcbiRwb3BvdmVyLWJnOiBkYXJrZW4oJHF1YXRlcm5hcnlfY29sb3IsIDUlKTtcbi8vJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcbi8vJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHg7XG4vLyRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGg7XG4vLyRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMik7XG4vLyRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnO1xuLy8kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpO1xuLy8kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKTtcbi8vJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yO1xuLy8kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbTtcbi8vJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtO1xuLy8kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvcjtcbi8vJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcbi8vJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcbi8vJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbTtcbi8vJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW07XG4vLyRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnO1xuLy8kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KTtcblxuXG4iLCJAaW1wb3J0ICdzcmMvc2Nzcy9jb25maWcvdmFyaWFibGVzJztcblxuaDEge1xuICBtYXJnaW46IDAgMTBweDtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogJHRleHQtY29sb3I7XG4gIHNwYW4geyBjb2xvcjogI2JiYjsgfVxufVxucCB7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jb-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4FMf":
/*!**********************************************************!*\
  !*** ./src/app/pages/login/sign-in/sign-in.component.ts ***!
  \**********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "AytR");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








class SignInComponent {
    constructor(confirm, router, afAuth, growl) {
        this.confirm = confirm;
        this.router = router;
        this.afAuth = afAuth;
        this.growl = growl;
        this.email = '';
        this.password = '';
        this.password2 = '';
    }
    ngOnInit() { }
    signIn() {
        this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then(userCredential => {
            userCredential.user.updateProfile({ displayName: this.email }).then(() => {
                const settings = { url: `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url}/login`, handleCodeInApp: true };
                userCredential.user.sendEmailVerification(settings).then(() => {
                    this.confirm.open({
                        title: 'view.login.sign_in',
                        text: 'view.sign.sent_msg',
                        yesButtonText: 'view.common.ok',
                        showCancel: false,
                    }).then(() => {
                        this.router.navigate(['/login']);
                    });
                });
            });
        }, err => this.growl.error(err.message));
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbConfirmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbGrowlService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in-page"]], decls: 16, vars: 12, consts: [[1, "whiteBg"], ["autocomplete", "off"], ["signForm", "ngForm"], [1, "row", "pad15"], [1, "col-12"], ["translate", "", 1, "text-center"], ["type", "email", "name", "email", 1, "hidden-field"], ["type", "password", "name", "hidden-pass", 1, "hidden-field"], ["translate", "", 1, "col-12", "padB15"], ["name", "the-email", "jbLabel", "view.common.email", "jbPlaceholder", "view.common.email", "jbType", "email", 1, "col-12", 3, "ngModel", "jbRequired", "jbAutocomplete", "jbAutoFocus", "ngModelChange"], ["name", "password", "jbLabel", "view.common.password", "jbPlaceholder", "view.common.password", "jbType", "password", 1, "col-12", 3, "ngModel", "jbAutocomplete", "jbRequired", "ngModelChange"], ["name", "password2", "jbLabel", "view.common.repeat_password", "jbPlaceholder", "view.common.password", "jbType", "password", 1, "col-12", 3, "ngModel", "jbRequired", "jbAutocomplete", "jbValidIf", "ngModelChange"], ["jbText", "view.login.sign_in", "jbType", "update", 1, "col-12", "padT30", "full-width", 3, "jbDisabled", "jbClick"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "view.login.sign_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "view.sign.email_tip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "jb-input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_jb_input_ngModelChange_12_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "jb-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_jb_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "jb-input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_jb_input_ngModelChange_14_listener($event) { return ctx.password2 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "jb-btn", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function SignInComponent_Template_jb_btn_jbClick_15_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("jbRequired", true)("jbAutocomplete", false)("jbAutoFocus", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("jbAutocomplete", false)("jbRequired", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password2)("jbRequired", true)("jbAutocomplete", false)("jbValidIf", ctx.password == ctx.password2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jbDisabled", _r0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbBtnComponent"]], styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\n.whiteBg[_ngcontent-%COMP%] {\n  width: 450px;\n  margin: 5% calc(50% - 225px);\n}\n@media screen and (max-width: 600px) {\n  .whiteBg[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    left: 0;\n    right: 0;\n  }\n}\n.hidden-field[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ0EsZ0ZBQUE7QUFDQSxnRkFBQTtBQXdCQTtFQUFhLHdCQUFBO0VBQTBCLGlDQUFBO0FDeER2QztBQUhBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FBS0Y7QUFIRTtFQUpGO0lBS0ksV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0EsUUFBQTtFQU1GO0FBQ0Y7QUFIQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQU1GIiwiZmlsZSI6InNpZ24taW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKiogTWFpbiBDb2xvcnMgKioqKioqKioqKipcbiRwcmltYXJ5X2NvbG9yICAgIDogIzE4Y2FjZDtcbiRzZWNvbmRhcnlfY29sb3IgIDogIzU3YzE2ZjtcbiR0ZXJ0aWFyeV9jb2xvciAgIDogI0YxN0IzRjtcbiRxdWF0ZXJuYXJ5X2NvbG9yIDogIzNmOGNjYTtcbiR3YXJuaW5nX2NvbG9yICAgIDogI2U4NGUzYTtcbiRleHRyYV9jb2xvciAgICAgIDogI2E3NjZiMjtcblxuJHdoaXRlICAgICAgICAgIDogI2ZmZjtcbiRibGFjayAgICAgICAgICA6ICMwMDA7XG4kZ3JleSAgICAgICAgICAgOiAjOTI5MjkyO1xuJGxpZ2h0LWdyYXkgICAgIDogI2UzZTNlMztcbiRsaWdodGVyLWdyYXkgICA6ICNmNWY1ZjU7XG4kdGV4dC1jb2xvciAgICAgOiAjNTI1MjU0O1xuJG9wdGlvbmFsLWNvbG9yIDogI2NjYzsgICAgICAgLy8gKGJvb3RzdHJhcCBkZWZhdWx0IC0gJGlucHV0LWJvcmRlcilcbiRkaXNhYmxlZC1jb2xvciA6ICNhMGEwYTA7XG4kZm9jdXNlZC1jb2xvciAgOiBkYXJrZW4oJHByaW1hcnlfY29sb3IsIDIwJSk7XG4kcmVxdWlyZWQtY29sb3IgOiAkcHJpbWFyeV9jb2xvcjtcbiR2YWxpZC1jb2xvciAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGludmFsaWQtY29sb3IgIDogJHdhcm5pbmdfY29sb3I7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICNjMGMwYzA7XG4kc3BlY2lhbC1saW5rLWNvbG9yOiAkcHJpbWFyeV9jb2xvcjtcblxuLy8gKioqKioqKioqIFNoZWxsICoqKioqKioqKioqXG4kbmF2YmFyLWhlaWdodCAgOiA3MnB4OyAgICAgIC8vIEhlaWdodCBvZiB0aGUgaGVhZGVyXG4kbWVudS13aWR0aCAgICAgOiA1NXB4OyAgICAgIC8vIFdpZHRoIG9mIHRoZSBjb2xsYXBzZWQgbWVudVxuJG1lbnUtZXhwLXdpZHRoIDogMjAwcHg7ICAgICAvLyBXaWR0aCBvZiB0aGUgZXhwYW5kZWQgbWVudSAodG90YWwgPSAkbWVudS13aWR0aCArICRtZW51LWV4cC13aWR0aClcblxuLy8gKioqKioqKioqIEhlYWRlciBOYXZiYXIgKioqKioqKioqKipcbiRuYXYtYmctY29sb3IgICAgICA6ICRwcmltYXJ5X2NvbG9yOyAgICAgIC8vIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIG5hdmJhclxuJG5hdi1jb2xvciAgICAgICAgIDogJHdoaXRlOyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciB0ZXh0XG4kbmF2LWxpbmstY29sb3IgICAgOiAkd2hpdGU7ICAgICAgICAgICAgICAvLyBDb2xvciBvZiB0aGUgbmF2YmFyIHRleHQgb2YgdGhlIGxpbmtzXG4kbmF2LWhvdmVyLWNvbG9yICAgOiBkYXJrZW4oJHdoaXRlLCAxMCUpOyAvLyBDb2xvciBvZiB0aGUgbmF2YmFyIGljb25zIHdoZW4gaG92ZXJpbmdcbiRtYXgtbG9nby13aWR0aCAgICA6IDMwMHB4OyAgICAgICAgICAgICAgIC8vIE1heCBzaXplIG9mIHRoZSBsb2dvIGluIHRoZSBuYXZiYXJcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqICBCb290c3RyYXAgdGhlbWUgb3ZlcndyaXRlICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvc2Nzcy9fdmFyaWFibGVzLnNjc3MgKioqKioqL1xuJHByaW1hcnkgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kc2Vjb25kYXJ5ICAgICAgOiAkc2Vjb25kYXJ5X2NvbG9yO1xuJHN1Y2Nlc3MgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kaW5mbyAgICAgICAgICAgOiAkcXVhdGVybmFyeV9jb2xvcjtcbiR3YXJuaW5nICAgICAgICA6ICRleHRyYV9jb2xvcjtcbiRkYW5nZXIgICAgICAgICA6ICR3YXJuaW5nX2NvbG9yO1xuJGxpZ2h0ICAgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kZGFyayAgICAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRlcnJvci1jb2xvciAgICA6ICR3YXJuaW5nX2NvbG9yO1xuJHN1Y2Nlc3MtY29sb3IgIDogJHByaW1hcnlfY29sb3I7XG4kbGluay1jb2xvciAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJHByaW1hcnlfY29sb3IsIDUlKTtcbiRib2R5LWNvbG9yICAgICA6ICR0ZXh0LWNvbG9yO1xuJGJvZHktYmcgICAgICAgIDogI2ViZWZmMjtcblxuJG5hdmJhci1kYXJrLWNvbG9yICAgICAgICAgICAgICA6ICR3aGl0ZTtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvciAgICAgICAgOiByZ2JhKCR3aGl0ZSwgLjc1KTtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgICAgICAgOiByZ2JhKCR3aGl0ZSwgLjgwKTtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvciAgICAgOiByZ2JhKCR3aGl0ZSwgLjI1KTtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvciAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvciAgOiAkd2hpdGU7XG5cbi8vIC0tLS0tLSBHbG9iYWxzIC0tLS0tLVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAnV0YtU2Fucy1NJzsgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9QdWJsaWNTYW5zLU1lZGl1bS50dGYnKTsgfVxuJGZvbnQtZmFtaWx5LWJhc2U6ICdXRi1TYW5zLU0nLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdXRi1TYW5zLU0nLCBzYW5zLXNlcmlmO1xuLy8kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBtb25vc3BhY2U7XG4kZm9udC1zaXplLWJhc2U6IDAuODc1cmVtOyAvLyAxNHB4OyAoZGVmYXVsdCAxcmVtID0gMTZweClcbiRmb250LXdlaWdodC1iYXNlOiA0MDA7XG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHMgLSBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjEvbGF5b3V0L292ZXJ2aWV3Lz9zb3VyY2U9cG9zdF9wYWdlI3Jlc3BvbnNpdmUtYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoeHM6IDAsIHNtOiA3NjhweCwgbWQ6IDk5MnB4LCBsZzogMTIwMHB4LCB4bDogMTYwMHB4KTtcblxuLy8gTW9kYWwgc2l6ZXNcbi8vJG1vZGFsLXhsOiAgMTE0MHB4O1xuJG1vZGFsLWxnOiAgOTAwcHg7IC8vIERlZmF1bHQ9ODAwXG4kbW9kYWwtbWQ6ICA2MDBweDsgLy8gRGVmYXVsdD01MDBcbiRtb2RhbC1zbTogIDQwMHB4OyAvLyBEZWZhdWx0PTMwMFxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAyNXB4O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDA7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMDtcblxuXG4vLyBaIHBvc2l0aW9uIGZvciBtb2RhbHNcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6IDEwNDA7IC8vIDEwNDA7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAxMDUwOyAvLyAxMDUwO1xuXG4vLyBCb290c3RyYXAgVG9vbHRpcHMgKCsgbmdiIFRvb2x0aXBzKVxuJHppbmRleC10b29sdGlwOiA1MTAwOyAgLy8gU2hvdyB0b29sdGlwcyBvdmVyIG5hdmJhciBhbmQgbWVudVxuJHRvb2x0aXAtYmc6IGRhcmtlbigkcXVhdGVybmFyeV9jb2xvciwgNSUpO1xuJHRvb2x0aXAtb3BhY2l0eTogMC45O1xuLy8kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtO1xuLy8kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweDtcbi8vJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlO1xuLy8kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cztcbi8vJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtO1xuLy8kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbTtcbi8vJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMDtcbi8vJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW07XG4vLyR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtO1xuLy8kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZztcblxuLy8gQm9vdHN0cmFwIFBvcG92ZXJzXG4kcG9wb3Zlci1iZzogZGFya2VuKCRxdWF0ZXJuYXJ5X2NvbG9yLCA1JSk7XG4vLyRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc207XG4vLyRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4O1xuLy8kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoO1xuLy8kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpO1xuLy8kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZztcbi8vJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKTtcbi8vJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSk7XG4vLyRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcbi8vJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW07XG4vLyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbTtcbi8vJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3I7XG4vLyRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XG4vLyRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XG4vLyRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW07XG4vLyRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtO1xuLy8kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZztcbi8vJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSk7XG5cblxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLndoaXRlQmcge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbjogNSUgY2FsYyg1MCUgLSAyMjVweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuXG4uaGlkZGVuLWZpZWxkIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in-page',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return [{ type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbConfirmService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbGrowlService"] }]; }, null); })();


/***/ }),

/***/ "7Ue0":
/*!*****************************************************************!*\
  !*** ./src/app/core/core-lib/jb-form-valid-change.directive.ts ***!
  \*****************************************************************/
/*! exports provided: JfFormValidChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JfFormValidChangeDirective", function() { return JfFormValidChangeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



/***
 * Automatically detects when the status of the ngForm changes from valid / invalid
 * It emits the valid (true/false) status of the ngForm, located on the same node
 *
 *    <form #detailsForm="ngForm" (jjBormValidChange)="doSomething($event)">
 */
class JfFormValidChangeDirective {
    constructor(ngForm) {
        this.ngForm = ngForm;
        this.jjBormValidChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.sub = this.ngForm.form.valueChanges.subscribe(value => {
            // If it's changing status (valid - invalid)
            if (this.isValid !== this.ngForm.valid) {
                this.jjBormValidChange.emit(this.ngForm.valid);
            }
            this.isValid = this.ngForm.valid;
        });
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
JfFormValidChangeDirective.ɵfac = function JfFormValidChangeDirective_Factory(t) { return new (t || JfFormValidChangeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])); };
JfFormValidChangeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: JfFormValidChangeDirective, selectors: [["", "jjBormValidChange", ""]], outputs: { jjBormValidChange: "jjBormValidChange" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JfFormValidChangeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[jjBormValidChange]' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]; }, { jjBormValidChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");




class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]], imports: [src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
                imports: [src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var _secrets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../.secrets.js */ "BIQs");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: _secrets_js__WEBPACK_IMPORTED_MODULE_0__["firebaseConfig"],
    url: 'http://127.0.0.1:4200',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BIQs":
/*!*********************!*\
  !*** ./.secrets.js ***!
  \*********************/
/*! exports provided: firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
const firebaseConfig = {
  apiKey: "AIzaSyAFMmi_fp4UBprEM9kA8o_SL45FJ58Juhc",
  // databaseURL: 'https://jb-chess-default-rtdb.firebaseio.com/',    // RealTime DB
  authDomain: "jb-chess.firebaseapp.com",
  projectId: "jb-chess",
  storageBucket: "jb-chess.appspot.com",
  messagingSenderId: "230963432377",
  appId: "1:230963432377:web:c26e6ad8a28380d0d70468"
};


/***/ }),

/***/ "CXgY":
/*!**********************************************!*\
  !*** ./src/app/shell/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! subsink */ "33Jv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function MenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuEntry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", menuEntry_r1.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 6, menuEntry_r1.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", menuEntry_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", menuEntry_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, menuEntry_r1.label));
} }
class MenuComponent {
    constructor(router) {
        this.router = router;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__["SubSink"]();
        this.menuEntries = [
            { id: 1, path: 'home', icon: 'icon-home', isActive: false },
            { id: 2, path: 'games', icon: 'icon-finish', isActive: false },
            { id: 3, path: 'page2', icon: 'icon-user', isActive: false },
        ];
    }
    ngOnInit() {
        // Listen to routing changes and mark the active route on the menu
        this.subs.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event.snapshot.routeConfig.path !== '')).subscribe((event) => {
            this.menuEntries.forEach(entry => entry.isActive = entry.path === event.snapshot.routeConfig.path);
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 2, vars: 1, consts: [[1, "menu-bar"], ["class", "menu-entry", "placement", "right", "container", "body", "tooltipClass", "menu-tooltip", 3, "active", "ngbTooltip", 4, "ngFor", "ngForOf"], ["placement", "right", "container", "body", "tooltipClass", "menu-tooltip", 1, "menu-entry", 3, "ngbTooltip"], [1, "menu-entry-link", 3, "routerLink"], [1, "menu-entry-icon", 3, "ngClass"], [1, "menu-entry-name"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MenuComponent_div_1_Template, 7, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuEntries);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTooltip"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\n.menu-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  bottom: 0;\n  top: 72px;\n  background: #0d7072;\n  font-weight: 600;\n  letter-spacing: 1px;\n  overflow: hidden;\n}\n.menu-bar[_ngcontent-%COMP%]   div.menu-entry[_ngcontent-%COMP%] {\n  max-width: 55px;\n  margin-bottom: 2px;\n  cursor: pointer;\n}\n.menu-bar[_ngcontent-%COMP%]   div.menu-entry[_ngcontent-%COMP%]   .menu-entry-link[_ngcontent-%COMP%] {\n  text-align: left;\n  color: #fff;\n  font-size: 20px;\n  text-decoration: none;\n  outline: none;\n  display: flex;\n  transition: background 0.2s;\n  padding: 17.5px 15px;\n  border-left: 2px solid transparent;\n  border-right: 2px solid transparent;\n}\n.menu-bar[_ngcontent-%COMP%]   div.menu-entry[_ngcontent-%COMP%]:hover   .menu-entry-link[_ngcontent-%COMP%] {\n  color: #f2f2f2;\n  background: #15b4b6;\n  border-left: 2px solid #fff;\n}\n.menu-bar[_ngcontent-%COMP%]   div.menu-entry.active[_ngcontent-%COMP%]   .menu-entry-link[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #15b4b6;\n  border-left: 2px solid #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ0EsZ0ZBQUE7QUFDQSxnRkFBQTtBQXdCQTtFQUFhLHdCQUFBO0VBQTBCLGlDQUFBO0FDeER2QztBQVlBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFNERWdCO0VDRGhCLG1CQWpCWTtFQWtCWixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVlFO0VBQ0UsZUEzQmM7RUE0QmQsa0JBQUE7RUFDQSxlQUFBO0FBVko7QUFXSTtFQUNFLGdCQUFBO0VBQ0EsV0QxQlk7RUMyQlosZUFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtBQVROO0FBV0k7RUFDRSxjQWpDd0I7RUFrQ3hCLG1CQXZDUTtFQXdDUiwyQkFBQTtBQVROO0FBV0k7RUFDRSxXRDFDWTtFQzJDWixtQkE1Q1E7RUE2Q1IsMkJBQUE7QUFUTiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqIE1haW4gQ29sb3JzICoqKioqKioqKioqXG4kcHJpbWFyeV9jb2xvciAgICA6ICMxOGNhY2Q7XG4kc2Vjb25kYXJ5X2NvbG9yICA6ICM1N2MxNmY7XG4kdGVydGlhcnlfY29sb3IgICA6ICNGMTdCM0Y7XG4kcXVhdGVybmFyeV9jb2xvciA6ICMzZjhjY2E7XG4kd2FybmluZ19jb2xvciAgICA6ICNlODRlM2E7XG4kZXh0cmFfY29sb3IgICAgICA6ICNhNzY2YjI7XG5cbiR3aGl0ZSAgICAgICAgICA6ICNmZmY7XG4kYmxhY2sgICAgICAgICAgOiAjMDAwO1xuJGdyZXkgICAgICAgICAgIDogIzkyOTI5MjtcbiRsaWdodC1ncmF5ICAgICA6ICNlM2UzZTM7XG4kbGlnaHRlci1ncmF5ICAgOiAjZjVmNWY1O1xuJHRleHQtY29sb3IgICAgIDogIzUyNTI1NDtcbiRvcHRpb25hbC1jb2xvciA6ICNjY2M7ICAgICAgIC8vIChib290c3RyYXAgZGVmYXVsdCAtICRpbnB1dC1ib3JkZXIpXG4kZGlzYWJsZWQtY29sb3IgOiAjYTBhMGEwO1xuJGZvY3VzZWQtY29sb3IgIDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAyMCUpO1xuJHJlcXVpcmVkLWNvbG9yIDogJHByaW1hcnlfY29sb3I7XG4kdmFsaWQtY29sb3IgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRpbnZhbGlkLWNvbG9yICA6ICR3YXJuaW5nX2NvbG9yO1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjYzBjMGMwO1xuJHNwZWNpYWwtbGluay1jb2xvcjogJHByaW1hcnlfY29sb3I7XG5cbi8vICoqKioqKioqKiBTaGVsbCAqKioqKioqKioqKlxuJG5hdmJhci1oZWlnaHQgIDogNzJweDsgICAgICAvLyBIZWlnaHQgb2YgdGhlIGhlYWRlclxuJG1lbnUtd2lkdGggICAgIDogNTVweDsgICAgICAvLyBXaWR0aCBvZiB0aGUgY29sbGFwc2VkIG1lbnVcbiRtZW51LWV4cC13aWR0aCA6IDIwMHB4OyAgICAgLy8gV2lkdGggb2YgdGhlIGV4cGFuZGVkIG1lbnUgKHRvdGFsID0gJG1lbnUtd2lkdGggKyAkbWVudS1leHAtd2lkdGgpXG5cbi8vICoqKioqKioqKiBIZWFkZXIgTmF2YmFyICoqKioqKioqKioqXG4kbmF2LWJnLWNvbG9yICAgICAgOiAkcHJpbWFyeV9jb2xvcjsgICAgICAvLyBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBuYXZiYXJcbiRuYXYtY29sb3IgICAgICAgICA6ICR3aGl0ZTsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgdGV4dFxuJG5hdi1saW5rLWNvbG9yICAgIDogJHdoaXRlOyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciB0ZXh0IG9mIHRoZSBsaW5rc1xuJG5hdi1ob3Zlci1jb2xvciAgIDogZGFya2VuKCR3aGl0ZSwgMTAlKTsgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciBpY29ucyB3aGVuIGhvdmVyaW5nXG4kbWF4LWxvZ28td2lkdGggICAgOiAzMDBweDsgICAgICAgICAgICAgICAvLyBNYXggc2l6ZSBvZiB0aGUgbG9nbyBpbiB0aGUgbmF2YmFyXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiAgQm9vdHN0cmFwIHRoZW1lIG92ZXJ3cml0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKiogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL3Njc3MvX3ZhcmlhYmxlcy5zY3NzICoqKioqKi9cbiRwcmltYXJ5ICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJHNlY29uZGFyeSAgICAgIDogJHNlY29uZGFyeV9jb2xvcjtcbiRzdWNjZXNzICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGluZm8gICAgICAgICAgIDogJHF1YXRlcm5hcnlfY29sb3I7XG4kd2FybmluZyAgICAgICAgOiAkZXh0cmFfY29sb3I7XG4kZGFuZ2VyICAgICAgICAgOiAkd2FybmluZ19jb2xvcjtcbiRsaWdodCAgICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGRhcmsgICAgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kZXJyb3ItY29sb3IgICAgOiAkd2FybmluZ19jb2xvcjtcbiRzdWNjZXNzLWNvbG9yICA6ICRwcmltYXJ5X2NvbG9yO1xuJGxpbmstY29sb3IgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCA1JSk7XG4kYm9keS1jb2xvciAgICAgOiAkdGV4dC1jb2xvcjtcbiRib2R5LWJnICAgICAgICA6ICNlYmVmZjI7XG5cbiRuYXZiYXItZGFyay1jb2xvciAgICAgICAgICAgICAgOiAkd2hpdGU7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3IgICAgICAgIDogcmdiYSgkd2hpdGUsIC43NSk7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICAgICAgIDogcmdiYSgkd2hpdGUsIC44MCk7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3IgICAgIDogcmdiYSgkd2hpdGUsIC4yNSk7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3IgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3IgIDogJHdoaXRlO1xuXG4vLyAtLS0tLS0gR2xvYmFscyAtLS0tLS1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ1dGLVNhbnMtTSc7IHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvUHVibGljU2Fucy1NZWRpdW0udHRmJyk7IH1cbiRmb250LWZhbWlseS1iYXNlOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbi8vJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogbW9ub3NwYWNlO1xuJGZvbnQtc2l6ZS1iYXNlOiAwLjg3NXJlbTsgLy8gMTRweDsgKGRlZmF1bHQgMXJlbSA9IDE2cHgpXG4kZm9udC13ZWlnaHQtYmFzZTogNDAwO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzIC0gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4xL2xheW91dC9vdmVydmlldy8/c291cmNlPXBvc3RfcGFnZSNyZXNwb25zaXZlLWJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNzY4cHgsIG1kOiA5OTJweCwgbGc6IDEyMDBweCwgeGw6IDE2MDBweCk7XG5cbi8vIE1vZGFsIHNpemVzXG4vLyRtb2RhbC14bDogIDExNDBweDtcbiRtb2RhbC1sZzogIDkwMHB4OyAvLyBEZWZhdWx0PTgwMFxuJG1vZGFsLW1kOiAgNjAwcHg7IC8vIERlZmF1bHQ9NTAwXG4kbW9kYWwtc206ICA0MDBweDsgLy8gRGVmYXVsdD0zMDBcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogMjVweDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwO1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDA7XG5cblxuLy8gWiBwb3NpdGlvbiBmb3IgbW9kYWxzXG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAxMDQwOyAvLyAxMDQwO1xuJHppbmRleC1tb2RhbDogICAgICAgICAgMTA1MDsgLy8gMTA1MDtcblxuLy8gQm9vdHN0cmFwIFRvb2x0aXBzICgrIG5nYiBUb29sdGlwcylcbiR6aW5kZXgtdG9vbHRpcDogNTEwMDsgIC8vIFNob3cgdG9vbHRpcHMgb3ZlciBuYXZiYXIgYW5kIG1lbnVcbiR0b29sdGlwLWJnOiBkYXJrZW4oJHF1YXRlcm5hcnlfY29sb3IsIDUlKTtcbiR0b29sdGlwLW9wYWNpdHk6IDAuOTtcbi8vJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcbi8vJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHg7XG4vLyR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZTtcbi8vJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXM7XG4vLyR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbTtcbi8vJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW07XG4vLyR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDA7XG4vLyR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtO1xuLy8kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbTtcbi8vJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmc7XG5cbi8vIEJvb3RzdHJhcCBQb3BvdmVyc1xuJHBvcG92ZXItYmc6IGRhcmtlbigkcXVhdGVybmFyeV9jb2xvciwgNSUpO1xuLy8kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtO1xuLy8kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweDtcbi8vJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aDtcbi8vJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKTtcbi8vJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGc7XG4vLyRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMik7XG4vLyRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpO1xuLy8kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XG4vLyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtO1xuLy8kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW07XG4vLyRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yO1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xuLy8kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtO1xuLy8kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbTtcbi8vJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmc7XG4vLyRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpO1xuXG5cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbiRtZW51LXdpZHRoICAgICA6IDU1cHggOyAvLyBXaWR0aCBvZiB0aGUgY29sbGFwc2VkIG1lbnVcbiRtZW51LWV4cC13aWR0aCA6IDIwMHB4OyAvLyBXaWR0aCBvZiB0aGUgZXhwYW5kZWQgbWVudSAodG90YWwgPSAkbWVudS13aWR0aCArICRtZW51LWV4cC13aWR0aClcbiRlbnRyeS1oZWlnaHQgICA6IDU1cHggOyAvLyBIZWlnaHQgb2YgdGhlIGVudHJpZXMgb2YgdGhlIG1lbnVcblxuJG1lbnUtYmcgICAgOiBkYXJrZW4oJHByaW1hcnlfY29sb3IsIDIwJSk7IC8vIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIG1lbnVcbiRtZW51LWhvdmVyIDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCA1JSk7XG4kbWVudS10ZXh0ICA6ICR3aGl0ZTtcblxuJG1lbnUtZW50cnktY29sb3IgICAgICAgICAgIDogJG1lbnUtdGV4dDsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBpY29ucyBvZiB0aGUgbWVudSAoJG5hdl9saW5rX2NvbG9yKVxuJG1lbnUtZW50cnktaG92ZXItYmcgICAgICAgIDogJG1lbnUtaG92ZXI7ICAgICAgICAgICAgIC8vIEJhY2tncm91bmQgb2YgdGhlIGVudHJ5IG9uIGhvdmVyaW5nICgkbmF2X2hvdmVyX2xpbmtfYmdfY29sb3IpXG4kbWVudS1lbnRyeS1ob3Zlci1jb2xvciAgICAgOiBkYXJrZW4oJG1lbnUtdGV4dCwgNSUpOyAgLy8gQ29sb3Igb2YgdGhlIGljb25zIG9mIHRoZSBtZW51IG9uIGhvdmVyaW5nICgkbmF2X2hvdmVyX2xpbmtfY29sb3IpXG4kbWVudS1lbnRyeS1hY3RpdmUtYmcgICAgICAgOiAkbWVudS1ob3ZlcjsgICAgICAgICAgICAgLy8gQmFja2dyb3VuZCBvZiB0aGUgYWN0aXZlIGVudHJ5XG4kbWVudS1lbnRyeS1hY3RpdmUtY29sb3IgICAgOiAkbWVudS10ZXh0OyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIGljb24gb2YgdGhlIGFjdGl2ZSBtZW51IGVudHJ5XG5cblxuLm1lbnUtYmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHRvcDogJG5hdmJhci1oZWlnaHQ7XG4gIGJhY2tncm91bmQ6ICRtZW51LWJnO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpdi5tZW51LWVudHJ5IHtcbiAgICBtYXgtd2lkdGg6ICRtZW51LXdpZHRoO1xuICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLm1lbnUtZW50cnktbGluayB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6ICRtZW51LWVudHJ5LWNvbG9yO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgICBwYWRkaW5nOiAxNy41cHggMTVweDtcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgJjpob3ZlciAubWVudS1lbnRyeS1saW5rIHtcbiAgICAgIGNvbG9yOiAkbWVudS1lbnRyeS1ob3Zlci1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQ6ICRtZW51LWVudHJ5LWhvdmVyLWJnO1xuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkbWVudS1lbnRyeS1hY3RpdmUtY29sb3I7XG4gICAgfVxuICAgICYuYWN0aXZlIC5tZW51LWVudHJ5LWxpbmsge1xuICAgICAgY29sb3I6ICRtZW51LWVudHJ5LWFjdGl2ZS1jb2xvcjtcbiAgICAgIGJhY2tncm91bmQ6ICRtZW51LWVudHJ5LWFjdGl2ZS1iZztcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgJG1lbnUtZW50cnktYWN0aXZlLWNvbG9yO1xuICAgIH1cbiAgfVxuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/common/jb-profile.service */ "i0JM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









class LoginComponent {
    constructor(profile, router, afAuth, growl, afs) {
        this.profile = profile;
        this.router = router;
        this.afAuth = afAuth;
        this.growl = growl;
        this.afs = afs;
        this.email = '';
        this.password = '';
    }
    ngOnInit() {
        // If logged in, redirect to dashboard directly
        this.profile.ready.then(() => {
            if (this.profile.isLoggedIn) {
                this.router.navigate(['/home']);
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_1__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbGrowlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login-page"]], decls: 11, vars: 7, consts: [[1, "whiteBg"], ["loginForm", "ngForm"], [1, "row", "pad15"], [1, "col-12", "padB50"], ["translate", "", 1, "login-text", "text-center"], ["name", "email", "jbPlaceholder", "view.common.email", "jbType", "email", 1, "col-12", 3, "ngModel", "jbRequired", "jbAutoFocus", "ngModelChange", "jbOnEnter"], ["name", "pass", "jbPlaceholder", "view.common.password", "jbErrorPos", "none", "jbType", "password", 1, "col-12", 3, "ngModel", "jbRequired", "ngModelChange", "jbOnEnter"], ["jbText", "view.login.log_in_btn", "jbType", "update", 1, "col-12", "full-width", 3, "jbDisabled", "jbAsyncPromise", "jbClick"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "view.login.text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "jb-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_jb_input_ngModelChange_8_listener($event) { return ctx.email = $event; })("jbOnEnter", function LoginComponent_Template_jb_input_jbOnEnter_8_listener() { return ctx.profile.login(ctx.email, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "jb-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_jb_input_ngModelChange_9_listener($event) { return ctx.password = $event; })("jbOnEnter", function LoginComponent_Template_jb_input_jbOnEnter_9_listener() { return ctx.profile.login(ctx.email, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jb-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function LoginComponent_Template_jb_btn_jbClick_10_listener() { return ctx.profile.login(ctx.email, ctx.password); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email)("jbRequired", true)("jbAutoFocus", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("jbRequired", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jbDisabled", _r0.invalid)("jbAsyncPromise", ctx.loggingPromise);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbBtnComponent"]], styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\n.whiteBg[_ngcontent-%COMP%] {\n  width: 450px;\n  margin: 5% calc(50% - 225px);\n}\n@media screen and (max-width: 600px) {\n  .whiteBg[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    left: 0;\n    right: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0NBLGdGQUFBO0FBQ0EsZ0ZBQUE7QUF3QkE7RUFBYSx3QkFBQTtFQUEwQixpQ0FBQTtBQ3hEdkM7QUFIQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtBQUtGO0FBSEU7RUFKRjtJQUtJLFdBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7RUFNRjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqIE1haW4gQ29sb3JzICoqKioqKioqKioqXG4kcHJpbWFyeV9jb2xvciAgICA6ICMxOGNhY2Q7XG4kc2Vjb25kYXJ5X2NvbG9yICA6ICM1N2MxNmY7XG4kdGVydGlhcnlfY29sb3IgICA6ICNGMTdCM0Y7XG4kcXVhdGVybmFyeV9jb2xvciA6ICMzZjhjY2E7XG4kd2FybmluZ19jb2xvciAgICA6ICNlODRlM2E7XG4kZXh0cmFfY29sb3IgICAgICA6ICNhNzY2YjI7XG5cbiR3aGl0ZSAgICAgICAgICA6ICNmZmY7XG4kYmxhY2sgICAgICAgICAgOiAjMDAwO1xuJGdyZXkgICAgICAgICAgIDogIzkyOTI5MjtcbiRsaWdodC1ncmF5ICAgICA6ICNlM2UzZTM7XG4kbGlnaHRlci1ncmF5ICAgOiAjZjVmNWY1O1xuJHRleHQtY29sb3IgICAgIDogIzUyNTI1NDtcbiRvcHRpb25hbC1jb2xvciA6ICNjY2M7ICAgICAgIC8vIChib290c3RyYXAgZGVmYXVsdCAtICRpbnB1dC1ib3JkZXIpXG4kZGlzYWJsZWQtY29sb3IgOiAjYTBhMGEwO1xuJGZvY3VzZWQtY29sb3IgIDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAyMCUpO1xuJHJlcXVpcmVkLWNvbG9yIDogJHByaW1hcnlfY29sb3I7XG4kdmFsaWQtY29sb3IgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRpbnZhbGlkLWNvbG9yICA6ICR3YXJuaW5nX2NvbG9yO1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjYzBjMGMwO1xuJHNwZWNpYWwtbGluay1jb2xvcjogJHByaW1hcnlfY29sb3I7XG5cbi8vICoqKioqKioqKiBTaGVsbCAqKioqKioqKioqKlxuJG5hdmJhci1oZWlnaHQgIDogNzJweDsgICAgICAvLyBIZWlnaHQgb2YgdGhlIGhlYWRlclxuJG1lbnUtd2lkdGggICAgIDogNTVweDsgICAgICAvLyBXaWR0aCBvZiB0aGUgY29sbGFwc2VkIG1lbnVcbiRtZW51LWV4cC13aWR0aCA6IDIwMHB4OyAgICAgLy8gV2lkdGggb2YgdGhlIGV4cGFuZGVkIG1lbnUgKHRvdGFsID0gJG1lbnUtd2lkdGggKyAkbWVudS1leHAtd2lkdGgpXG5cbi8vICoqKioqKioqKiBIZWFkZXIgTmF2YmFyICoqKioqKioqKioqXG4kbmF2LWJnLWNvbG9yICAgICAgOiAkcHJpbWFyeV9jb2xvcjsgICAgICAvLyBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBuYXZiYXJcbiRuYXYtY29sb3IgICAgICAgICA6ICR3aGl0ZTsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgdGV4dFxuJG5hdi1saW5rLWNvbG9yICAgIDogJHdoaXRlOyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciB0ZXh0IG9mIHRoZSBsaW5rc1xuJG5hdi1ob3Zlci1jb2xvciAgIDogZGFya2VuKCR3aGl0ZSwgMTAlKTsgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciBpY29ucyB3aGVuIGhvdmVyaW5nXG4kbWF4LWxvZ28td2lkdGggICAgOiAzMDBweDsgICAgICAgICAgICAgICAvLyBNYXggc2l6ZSBvZiB0aGUgbG9nbyBpbiB0aGUgbmF2YmFyXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiAgQm9vdHN0cmFwIHRoZW1lIG92ZXJ3cml0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKiogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL3Njc3MvX3ZhcmlhYmxlcy5zY3NzICoqKioqKi9cbiRwcmltYXJ5ICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJHNlY29uZGFyeSAgICAgIDogJHNlY29uZGFyeV9jb2xvcjtcbiRzdWNjZXNzICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGluZm8gICAgICAgICAgIDogJHF1YXRlcm5hcnlfY29sb3I7XG4kd2FybmluZyAgICAgICAgOiAkZXh0cmFfY29sb3I7XG4kZGFuZ2VyICAgICAgICAgOiAkd2FybmluZ19jb2xvcjtcbiRsaWdodCAgICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGRhcmsgICAgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kZXJyb3ItY29sb3IgICAgOiAkd2FybmluZ19jb2xvcjtcbiRzdWNjZXNzLWNvbG9yICA6ICRwcmltYXJ5X2NvbG9yO1xuJGxpbmstY29sb3IgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCA1JSk7XG4kYm9keS1jb2xvciAgICAgOiAkdGV4dC1jb2xvcjtcbiRib2R5LWJnICAgICAgICA6ICNlYmVmZjI7XG5cbiRuYXZiYXItZGFyay1jb2xvciAgICAgICAgICAgICAgOiAkd2hpdGU7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3IgICAgICAgIDogcmdiYSgkd2hpdGUsIC43NSk7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICAgICAgIDogcmdiYSgkd2hpdGUsIC44MCk7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3IgICAgIDogcmdiYSgkd2hpdGUsIC4yNSk7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3IgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3IgIDogJHdoaXRlO1xuXG4vLyAtLS0tLS0gR2xvYmFscyAtLS0tLS1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ1dGLVNhbnMtTSc7IHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvUHVibGljU2Fucy1NZWRpdW0udHRmJyk7IH1cbiRmb250LWZhbWlseS1iYXNlOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbi8vJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogbW9ub3NwYWNlO1xuJGZvbnQtc2l6ZS1iYXNlOiAwLjg3NXJlbTsgLy8gMTRweDsgKGRlZmF1bHQgMXJlbSA9IDE2cHgpXG4kZm9udC13ZWlnaHQtYmFzZTogNDAwO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzIC0gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4xL2xheW91dC9vdmVydmlldy8/c291cmNlPXBvc3RfcGFnZSNyZXNwb25zaXZlLWJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNzY4cHgsIG1kOiA5OTJweCwgbGc6IDEyMDBweCwgeGw6IDE2MDBweCk7XG5cbi8vIE1vZGFsIHNpemVzXG4vLyRtb2RhbC14bDogIDExNDBweDtcbiRtb2RhbC1sZzogIDkwMHB4OyAvLyBEZWZhdWx0PTgwMFxuJG1vZGFsLW1kOiAgNjAwcHg7IC8vIERlZmF1bHQ9NTAwXG4kbW9kYWwtc206ICA0MDBweDsgLy8gRGVmYXVsdD0zMDBcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogMjVweDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwO1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDA7XG5cblxuLy8gWiBwb3NpdGlvbiBmb3IgbW9kYWxzXG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAxMDQwOyAvLyAxMDQwO1xuJHppbmRleC1tb2RhbDogICAgICAgICAgMTA1MDsgLy8gMTA1MDtcblxuLy8gQm9vdHN0cmFwIFRvb2x0aXBzICgrIG5nYiBUb29sdGlwcylcbiR6aW5kZXgtdG9vbHRpcDogNTEwMDsgIC8vIFNob3cgdG9vbHRpcHMgb3ZlciBuYXZiYXIgYW5kIG1lbnVcbiR0b29sdGlwLWJnOiBkYXJrZW4oJHF1YXRlcm5hcnlfY29sb3IsIDUlKTtcbiR0b29sdGlwLW9wYWNpdHk6IDAuOTtcbi8vJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcbi8vJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHg7XG4vLyR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZTtcbi8vJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXM7XG4vLyR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbTtcbi8vJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW07XG4vLyR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDA7XG4vLyR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtO1xuLy8kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbTtcbi8vJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmc7XG5cbi8vIEJvb3RzdHJhcCBQb3BvdmVyc1xuJHBvcG92ZXItYmc6IGRhcmtlbigkcXVhdGVybmFyeV9jb2xvciwgNSUpO1xuLy8kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtO1xuLy8kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweDtcbi8vJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aDtcbi8vJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKTtcbi8vJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGc7XG4vLyRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMik7XG4vLyRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpO1xuLy8kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XG4vLyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtO1xuLy8kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW07XG4vLyRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yO1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xuLy8kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtO1xuLy8kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbTtcbi8vJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmc7XG4vLyRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpO1xuXG5cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi53aGl0ZUJnIHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW46IDUlIGNhbGMoNTAlIC0gMjI1cHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-page',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_1__["JbProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbGrowlService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "D8EZ");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "4FMf");





class LoginModule {
}
LoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginModule_Factory(t) { return new (t || LoginModule)(); }, imports: [[
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]], imports: [src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]],
                imports: [
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PnGL":
/*!***********************************************!*\
  !*** ./src/app/core/common/host.component.ts ***!
  \***********************************************/
/*! exports provided: HostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostComponent", function() { return HostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HostComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        var _a, _b;
        const gameId = (_a = this.route.snapshot.queryParams) === null || _a === void 0 ? void 0 : _a.gameId;
        const token = (_b = this.route.snapshot.queryParams) === null || _b === void 0 ? void 0 : _b.token;
        if (gameId && token) {
            console.log('Redirecting to game', this.route.snapshot.queryParams);
            this.router.navigate(['/game/', gameId, token]);
        }
        else {
            this.router.navigate(['/home']);
        }
    }
}
HostComponent.ɵfac = function HostComponent_Factory(t) { return new (t || HostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HostComponent, selectors: [["host-page"]], decls: 2, vars: 0, template: function HostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Redirecting...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{ selector: 'host-page', template: '<h1>Redirecting...</h1>' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "RM7K":
/*!***********************************************!*\
  !*** ./src/app/core/core-lib/jb-date.pipe.ts ***!
  \***********************************************/
/*! exports provided: JbDatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbDatePipe", function() { return JbDatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_jb_translate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/jb-translate.service */ "yHbQ");




// import {SelectSnapshot} from '@ngxs-labs/select-snapshot';
// import moment from 'moment';
// import 'moment-timezone';
class JbDatePipe {
    // @SelectSnapshot(state => state.app.profile.time_zone) profileTimezone;
    constructor(jbTranslate) {
        this.jbTranslate = jbTranslate;
    }
    transform(date, format = 'mediumDate', timezone, locale) {
        const currentLocale = this.jbTranslate.currentLocale;
        // According to the backend, dates always come with the profile timezone applied, so we needn't convert it again.
        // if (!timezone) { timezone = moment(date).tz(this.profileTimezone).format('Z'); }
        if (date !== this.lastDate || currentLocale !== this.lastLocale || timezone !== this.lastTimeZone) {
            this.value = new _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"](currentLocale).transform(date, format, timezone);
            this.lastDate = date;
            this.lastLocale = currentLocale;
            this.lastTimeZone = timezone;
        }
        return this.value;
    }
}
JbDatePipe.ɵfac = function JbDatePipe_Factory(t) { return new (t || JbDatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_2__["JbTranslateService"])); };
JbDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "jbDate", type: JbDatePipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JbDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'jbDate', pure: false }]
    }], function () { return [{ type: _common_jb_translate_service__WEBPACK_IMPORTED_MODULE_2__["JbTranslateService"] }]; }, null); })();


/***/ }),

/***/ "RNcW":
/*!******************************************!*\
  !*** ./src/app/core/store/all-states.ts ***!
  \******************************************/
/*! exports provided: AllStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllStates", function() { return AllStates; });
/* harmony import */ var _app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.state */ "SWdn");

const AllStates = [
    _app_state__WEBPACK_IMPORTED_MODULE_0__["AppState"],
];


/***/ }),

/***/ "SR9A":
/*!****************************************!*\
  !*** ./src/assets/dicctionaries/en.ts ***!
  \****************************************/
/*! exports provided: enDic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enDic", function() { return enDic; });
const enDic = {
    'tag.title': 'jbChess',
    'view.common.yes': 'Yes',
    'view.common.no': 'No',
    'view.common.ok': 'Ok',
    'view.common.cancel': 'Cancel',
    'view.common.username': 'Username',
    'view.common.email': 'Email',
    'view.common.password': 'Password',
    'view.common.repeat_password': 'Repeat Password',
    'view.common.invalid_value': 'Invalid value',
    'view.common.required_field': 'Required field',
    'view.common.logout': 'Log Out',
    'scripts.common.oauth.interceptor.connection_error': 'Error',
    'scripts.common.oauth.interceptor.forbidden': 'Forbidden',
    'scripts.common.oauth.interceptor.internal_server_error': 'Internal Error',
    'scripts.common.oauth.interceptor.service_unavailable': 'Service Unavailable',
    'scripts.common.oauth.interceptor.bad_request_error': 'Bad Request',
    'views.page-not-found.title': 'Page Not Found',
    'views.page-not-found.message': 'Sorry, it seems this page does not exist',
    'view.sign.email_tip': 'Please provide a valid email address. A verification with a confirmation will be sent through to activate your new account. This will be your user ID to login into the app.',
    'view.sign.sent_msg': 'A verification link has been sent to your email address. Please use it to finish your account activation',
    'page.label.login': 'Login',
    'page.label.home': 'Home',
    'view.login.text': 'Login',
    'view.login.log_in_btn': 'Login',
    'view.login.reset_forgotten_password': 'Forgot Password?',
    'view.login.new_user': 'Sign in (new user)',
    'view.login.sign_in': 'Sign In',
    'view.repeat_password': 'Repeat Password',
    'view.login.user_not_activated': 'Please, use the link on the email to activate your account',
    'view.profile.title': 'Profile',
    'view.profile.update': 'Update',
    'view.profile.display_name': 'Display Name',
    'view.profile.updated_successfully': 'Profile updated successfully',
    'view.profile.confirm_logout': 'Do you want to log out?',
    'view.games.title': 'Games',
    'view.games.new_game': 'New Game',
    'view.games.request_send': 'A new game request has been sent, please wait for someone to join',
    'view.games.player1': 'Player 1',
    'view.games.player2': 'Player 2',
    'view.games.no_games': 'No Games',
    'view.games.request_date': 'Request Date',
    'view.game.select_piece.header': 'Select a Piece',
    'view.game.check_mate': 'Check Mate',
    'view.game.turn': 'Turn around',
    'view.game.analyse': 'Analise mode',
    'view.game.prev_move': 'Previous move',
    'view.game.next_move': 'Next move',
    'view.game.reset': 'Reset to current move',
    'view.game.finish_tooltip': 'Finish game',
    'view.game.back_tooltip': 'Go back to all games',
    'view.game.details': 'Game Details',
    'view.game.finish_confirmation': 'Are you sure you want to give up?',
    'view.game.unknown_player': 'Unknown player',
    'views.game.tabs.moves': 'Moves',
    'views.game.tabs.chat': 'Chat',
    'views.game.tabs.video': 'Video',
    'view.game.win_by_timeout': 'Win By Timeout',
    'view.game.win_by_resign': 'Win By Resignation',
    'view.modal.confirm.text': 'Are you sure?',
    'view.common.status': 'Status',
    'view.common.id': 'Id',
    'view.common.join': 'Join',
    'view.common.go': 'Go',
    'view.common.search': 'Search',
    'view.common.game': 'Game',
    'view.common.back': 'Back',
    'views.common.5_items_per_page': '5 Items per page',
    'views.common.10_items_per_page': '10 Items per page',
    'views.common.15_items_per_page': '15 Items per page',
    'views.common.20_items_per_page': '20 Items per page',
    'views.common.30_items_per_page': '30 Items per page',
    'views.common.50_items_per_page': '50 Items per page',
};


/***/ }),

/***/ "SWdn":
/*!*****************************************!*\
  !*** ./src/app/core/store/app.state.ts ***!
  \*****************************************/
/*! exports provided: AppState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppState", function() { return AppState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.actions */ "hJ+V");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const defaults = { profile: null };
// ---- REDUCER -------------------------------------------------------------
let AppState = class AppState {
    constructor() { }
    clearProfile(ctx) { return ctx.setState(defaults); }
    initProfile(ctx, action) {
        ctx.setState({ profile: action.profile });
    }
    updateProfile(ctx, action) {
        const profile = ctx.getState().profile.dCopy();
        profile.username = action.profile.username;
        ctx.patchState({ profile });
    }
};
AppState.ɵfac = function AppState_Factory(t) { return new (t || AppState)(); };
AppState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppState, factory: AppState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_2__["ClearProfile"])
], AppState.prototype, "clearProfile", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_2__["InitProfile"])
], AppState.prototype, "initProfile", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_app_actions__WEBPACK_IMPORTED_MODULE_2__["UpdateProfile"])
], AppState.prototype, "updateProfile", null);
AppState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({ name: 'app', defaults })
], AppState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
    }], function () { return []; }, { clearProfile: [], initProfile: [], updateProfile: [] }); })();


/***/ }),

/***/ "StVS":
/*!****************************************************!*\
  !*** ./src/app/shell/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/common/jb-profile.service */ "i0JM");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _core_core_lib_jb_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/core-lib/jb-events.service */ "ZWFk");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = ["profileContainer"];
class ProfileComponent {
    constructor(router, profile, growl, jbEvents) {
        this.router = router;
        this.profile = profile;
        this.growl = growl;
        this.jbEvents = jbEvents;
        this.displayName = '';
        this.updateProfile = () => {
            this.profile.updateProfile(this.displayName).then(() => {
                this.growl.success('view.profile.updated_successfully');
                this.profile.toggleProfile(false);
            });
        };
    }
    ngOnInit() {
        this.displayName = this.profile.user.displayName;
        this.inputCtrl$ = this.profile.isPanelExp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(v => v), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(_ => ({ action: 'setFocus' })));
    }
    // ngAfterViewInit() { // Collapse on click outside
    //   this.sub = this.jbEvents.detectClickOutside([this.profileContainer.nativeElement], { ignoreTextSelection: true }).subscribe(() => {
    //     this.profile.toggleProfile(false);
    //   });
    // }
    // ngOnDestroy() { this.sub.unsubscribe(); }
    ngOnDestroy() { }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_3__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbGrowlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_core_lib_jb_events_service__WEBPACK_IMPORTED_MODULE_5__["JbEventsService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], viewQuery: function ProfileComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.profileContainer = _t.first);
    } }, decls: 10, vars: 6, consts: [[1, "profile-panel"], ["profileContainer", ""], ["translate", ""], [1, "row", "padT20"], ["jbLabel", "view.profile.display_name", 1, "col-12", 3, "ngModel", "extCtrl$", "jbOnEnter", "ngModelChange"], [1, "row"], ["jbType", "cancel", 1, "col-6", "block", "full-width", "mar0", "padR5", 3, "jbClick"], ["jbText", "view.profile.update", "jbType", "save", 1, "col-6", "block", "full-width", "mar0", "padL5", 3, "jbClick"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "view.profile.title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "jb-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbOnEnter", function ProfileComponent_Template_jb_input_jbOnEnter_6_listener() { return ctx.updateProfile(); })("ngModelChange", function ProfileComponent_Template_jb_input_ngModelChange_6_listener($event) { return ctx.displayName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "jb-btn", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function ProfileComponent_Template_jb_btn_jbClick_8_listener() { return ctx.profile.toggleProfile(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "jb-btn", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function ProfileComponent_Template_jb_btn_jbClick_9_listener() { return ctx.updateProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-expanded", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.profile.isPanelExp$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.displayName)("extCtrl$", ctx.inputCtrl$);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbBtnComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\n.profile-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1020;\n  top: 70px;\n  right: 0;\n  width: 300px;\n  height: 200px;\n  border: 1px solid rgba(24, 202, 205, 0.5);\n  background: white;\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  box-shadow: 0 2px 3px rgba(34, 36, 38, 0.15);\n  padding: 15px;\n  transform: translateY(-250px);\n  transition-property: transform;\n  transition-duration: 250ms;\n  transition-timing-function: ease-out;\n}\n.profile-panel.is-expanded[_ngcontent-%COMP%] {\n  transform: translateY(0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ0EsZ0ZBQUE7QUFDQSxnRkFBQTtBQXdCQTtFQUFhLHdCQUFBO0VBQTBCLGlDQUFBO0FDeER2QztBQUhBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQUtGO0FBSkU7RUFBZ0Isd0JBQUE7QUFPbEIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICoqKioqKioqKiBNYWluIENvbG9ycyAqKioqKioqKioqKlxuJHByaW1hcnlfY29sb3IgICAgOiAjMThjYWNkO1xuJHNlY29uZGFyeV9jb2xvciAgOiAjNTdjMTZmO1xuJHRlcnRpYXJ5X2NvbG9yICAgOiAjRjE3QjNGO1xuJHF1YXRlcm5hcnlfY29sb3IgOiAjM2Y4Y2NhO1xuJHdhcm5pbmdfY29sb3IgICAgOiAjZTg0ZTNhO1xuJGV4dHJhX2NvbG9yICAgICAgOiAjYTc2NmIyO1xuXG4kd2hpdGUgICAgICAgICAgOiAjZmZmO1xuJGJsYWNrICAgICAgICAgIDogIzAwMDtcbiRncmV5ICAgICAgICAgICA6ICM5MjkyOTI7XG4kbGlnaHQtZ3JheSAgICAgOiAjZTNlM2UzO1xuJGxpZ2h0ZXItZ3JheSAgIDogI2Y1ZjVmNTtcbiR0ZXh0LWNvbG9yICAgICA6ICM1MjUyNTQ7XG4kb3B0aW9uYWwtY29sb3IgOiAjY2NjOyAgICAgICAvLyAoYm9vdHN0cmFwIGRlZmF1bHQgLSAkaW5wdXQtYm9yZGVyKVxuJGRpc2FibGVkLWNvbG9yIDogI2EwYTBhMDtcbiRmb2N1c2VkLWNvbG9yICA6IGRhcmtlbigkcHJpbWFyeV9jb2xvciwgMjAlKTtcbiRyZXF1aXJlZC1jb2xvciA6ICRwcmltYXJ5X2NvbG9yO1xuJHZhbGlkLWNvbG9yICAgIDogJHByaW1hcnlfY29sb3I7XG4kaW52YWxpZC1jb2xvciAgOiAkd2FybmluZ19jb2xvcjtcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogI2MwYzBjMDtcbiRzcGVjaWFsLWxpbmstY29sb3I6ICRwcmltYXJ5X2NvbG9yO1xuXG4vLyAqKioqKioqKiogU2hlbGwgKioqKioqKioqKipcbiRuYXZiYXItaGVpZ2h0ICA6IDcycHg7ICAgICAgLy8gSGVpZ2h0IG9mIHRoZSBoZWFkZXJcbiRtZW51LXdpZHRoICAgICA6IDU1cHg7ICAgICAgLy8gV2lkdGggb2YgdGhlIGNvbGxhcHNlZCBtZW51XG4kbWVudS1leHAtd2lkdGggOiAyMDBweDsgICAgIC8vIFdpZHRoIG9mIHRoZSBleHBhbmRlZCBtZW51ICh0b3RhbCA9ICRtZW51LXdpZHRoICsgJG1lbnUtZXhwLXdpZHRoKVxuXG4vLyAqKioqKioqKiogSGVhZGVyIE5hdmJhciAqKioqKioqKioqKlxuJG5hdi1iZy1jb2xvciAgICAgIDogJHByaW1hcnlfY29sb3I7ICAgICAgLy8gQmFja2dyb3VuZCBjb2xvciBvZiB0aGUgbmF2YmFyXG4kbmF2LWNvbG9yICAgICAgICAgOiAkd2hpdGU7ICAgICAgICAgICAgICAvLyBDb2xvciBvZiB0aGUgbmF2YmFyIHRleHRcbiRuYXYtbGluay1jb2xvciAgICA6ICR3aGl0ZTsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgdGV4dCBvZiB0aGUgbGlua3NcbiRuYXYtaG92ZXItY29sb3IgICA6IGRhcmtlbigkd2hpdGUsIDEwJSk7IC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgaWNvbnMgd2hlbiBob3ZlcmluZ1xuJG1heC1sb2dvLXdpZHRoICAgIDogMzAwcHg7ICAgICAgICAgICAgICAgLy8gTWF4IHNpemUgb2YgdGhlIGxvZ28gaW4gdGhlIG5hdmJhclxuXG5cbi8qKioqKioqKioqKioqKioqKioqKioqKiogIEJvb3RzdHJhcCB0aGVtZSBvdmVyd3JpdGUgKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9zY3NzL192YXJpYWJsZXMuc2NzcyAqKioqKiovXG4kcHJpbWFyeSAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRzZWNvbmRhcnkgICAgICA6ICRzZWNvbmRhcnlfY29sb3I7XG4kc3VjY2VzcyAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRpbmZvICAgICAgICAgICA6ICRxdWF0ZXJuYXJ5X2NvbG9yO1xuJHdhcm5pbmcgICAgICAgIDogJGV4dHJhX2NvbG9yO1xuJGRhbmdlciAgICAgICAgIDogJHdhcm5pbmdfY29sb3I7XG4kbGlnaHQgICAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRkYXJrICAgICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGVycm9yLWNvbG9yICAgIDogJHdhcm5pbmdfY29sb3I7XG4kc3VjY2Vzcy1jb2xvciAgOiAkcHJpbWFyeV9jb2xvcjtcbiRsaW5rLWNvbG9yICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkcHJpbWFyeV9jb2xvciwgNSUpO1xuJGJvZHktY29sb3IgICAgIDogJHRleHQtY29sb3I7XG4kYm9keS1iZyAgICAgICAgOiAjZWJlZmYyO1xuXG4kbmF2YmFyLWRhcmstY29sb3IgICAgICAgICAgICAgIDogJHdoaXRlO1xuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yICAgICAgICA6IHJnYmEoJHdoaXRlLCAuNzUpO1xuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvciAgICAgICA6IHJnYmEoJHdoaXRlLCAuODApO1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yICAgICA6IHJnYmEoJHdoaXRlLCAuMjUpO1xuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJG5hdmJhci1kYXJrLWJyYW5kLWhvdmVyLWNvbG9yICA6ICR3aGl0ZTtcblxuLy8gLS0tLS0tIEdsb2JhbHMgLS0tLS0tXG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICdXRi1TYW5zLU0nOyBzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnRzL1B1YmxpY1NhbnMtTWVkaXVtLnR0ZicpOyB9XG4kZm9udC1mYW1pbHktYmFzZTogJ1dGLVNhbnMtTScsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1dGLVNhbnMtTScsIHNhbnMtc2VyaWY7XG4vLyRmb250LWZhbWlseS1tb25vc3BhY2U6IG1vbm9zcGFjZTtcbiRmb250LXNpemUtYmFzZTogMC44NzVyZW07IC8vIDE0cHg7IChkZWZhdWx0IDFyZW0gPSAxNnB4KVxuJGZvbnQtd2VpZ2h0LWJhc2U6IDQwMDtcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XG5cblxuLy8gR3JpZCBicmVha3BvaW50cyAtIGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzQuMS9sYXlvdXQvb3ZlcnZpZXcvP3NvdXJjZT1wb3N0X3BhZ2UjcmVzcG9uc2l2ZS1icmVha3BvaW50c1xuJGdyaWQtYnJlYWtwb2ludHM6ICh4czogMCwgc206IDc2OHB4LCBtZDogOTkycHgsIGxnOiAxMjAwcHgsIHhsOiAxNjAwcHgpO1xuXG4vLyBNb2RhbCBzaXplc1xuLy8kbW9kYWwteGw6ICAxMTQwcHg7XG4kbW9kYWwtbGc6ICA5MDBweDsgLy8gRGVmYXVsdD04MDBcbiRtb2RhbC1tZDogIDYwMHB4OyAvLyBEZWZhdWx0PTUwMFxuJG1vZGFsLXNtOiAgNDAwcHg7IC8vIERlZmF1bHQ9MzAwXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6IDI1cHg7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAwO1xuXG5cbi8vIFogcG9zaXRpb24gZm9yIG1vZGFsc1xuJHppbmRleC1tb2RhbC1iYWNrZHJvcDogMTA0MDsgLy8gMTA0MDtcbiR6aW5kZXgtbW9kYWw6ICAgICAgICAgIDEwNTA7IC8vIDEwNTA7XG5cbi8vIEJvb3RzdHJhcCBUb29sdGlwcyAoKyBuZ2IgVG9vbHRpcHMpXG4kemluZGV4LXRvb2x0aXA6IDUxMDA7ICAvLyBTaG93IHRvb2x0aXBzIG92ZXIgbmF2YmFyIGFuZCBtZW51XG4kdG9vbHRpcC1iZzogZGFya2VuKCRxdWF0ZXJuYXJ5X2NvbG9yLCA1JSk7XG4kdG9vbHRpcC1vcGFjaXR5OiAwLjk7XG4vLyR0b29sdGlwLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc207XG4vLyR0b29sdGlwLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDIwMHB4O1xuLy8kdG9vbHRpcC1jb2xvcjogICAgICAgICAgICAgICAgICAgICAkd2hpdGU7XG4vLyR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzO1xuLy8kdG9vbHRpcC1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAuMjVyZW07XG4vLyR0b29sdGlwLXBhZGRpbmcteDogICAgICAgICAgICAgICAgIC41cmVtO1xuLy8kdG9vbHRpcC1tYXJnaW46ICAgICAgICAgICAgICAgICAgICAwO1xuLy8kdG9vbHRpcC1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAuOHJlbTtcbi8vJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjRyZW07XG4vLyR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICR0b29sdGlwLWJnO1xuXG4vLyBCb290c3RyYXAgUG9wb3ZlcnNcbiRwb3BvdmVyLWJnOiBkYXJrZW4oJHF1YXRlcm5hcnlfY29sb3IsIDUlKTtcbi8vJHBvcG92ZXItZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcbi8vJHBvcG92ZXItbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjc2cHg7XG4vLyRwb3BvdmVyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICRib3JkZXItd2lkdGg7XG4vLyRwb3BvdmVyLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgIHJnYmEoJGJsYWNrLCAuMik7XG4vLyRwb3BvdmVyLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICRib3JkZXItcmFkaXVzLWxnO1xuLy8kcG9wb3Zlci1ib3gtc2hhZG93OiAgICAgICAgICAgICAgICAwIC4yNXJlbSAuNXJlbSByZ2JhKCRibGFjaywgLjIpO1xuLy8kcG9wb3Zlci1oZWFkZXItYmc6ICAgICAgICAgICAgICAgICBkYXJrZW4oJHBvcG92ZXItYmcsIDMlKTtcbi8vJHBvcG92ZXItaGVhZGVyLWNvbG9yOiAgICAgICAgICAgICAgJGhlYWRpbmdzLWNvbG9yO1xuLy8kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAgICAgICAgICAuNXJlbTtcbi8vJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDogICAgICAgICAgLjc1cmVtO1xuLy8kcG9wb3Zlci1ib2R5LWNvbG9yOiAgICAgICAgICAgICAgICAkYm9keS1jb2xvcjtcbi8vJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTtcbi8vJHBvcG92ZXItYm9keS1wYWRkaW5nLXg6ICAgICAgICAgICAgJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcbi8vJHBvcG92ZXItYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgMXJlbTtcbi8vJHBvcG92ZXItYXJyb3ctaGVpZ2h0OiAgICAgICAgICAgICAgLjVyZW07XG4vLyRwb3BvdmVyLWFycm93LWNvbG9yOiAgICAgICAgICAgICAgICRwb3BvdmVyLWJnO1xuLy8kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgLjA1KTtcblxuXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4ucHJvZmlsZS1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAyMDtcbiAgdG9wOiA3MHB4O1xuICByaWdodDogMDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCRwcmltYXJ5X2NvbG9yLCAwLjUpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiKDM0IDM2IDM4IC8gMTUlKTtcbiAgcGFkZGluZzogMTVweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNTBweCk7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjUwbXM7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgJi5pcy1leHBhbmRlZCB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_3__["JbProfileService"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbGrowlService"] }, { type: _core_core_lib_jb_events_service__WEBPACK_IMPORTED_MODULE_5__["JbEventsService"] }]; }, { profileContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['profileContainer']
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/common/jb-profile.service */ "i0JM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _core_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/common/jb-translate.service */ "yHbQ");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _shell_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shell/navbar/navbar.component */ "qk0r");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shell_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shell/profile/profile.component */ "StVS");













function AppComponent_app_profile_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-profile");
} }
class AppComponent {
    constructor(profile, ngbTooltip, titleService, router, jbTrans, translate) {
        this.profile = profile;
        this.ngbTooltip = ngbTooltip;
        this.titleService = titleService;
        this.router = router;
        this.jbTrans = jbTrans;
        this.translate = translate;
        // ngb tooltip global config (https://ng-bootstrap.github.io/#/components/tooltip/api#NgbTooltip)
        ngbTooltip.placement = 'top';
        ngbTooltip.container = 'body';
        // Listen to the routing and set the title of the document dynamically
        let pageTitle = ''; // Label to display on the page title (left)
        let isTitleSet = false; // Flag to know if the title has been found within the nested child process
        this.router.events.subscribe((routeEvent) => {
            if (routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                isTitleSet = false;
            }
            if (routeEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivationEnd"]) {
                // Update the page title with the new page label. Take the label of the last nested route
                if (!isTitleSet && !!routeEvent.snapshot.routeConfig.data && !!routeEvent.snapshot.routeConfig.data.label) {
                    pageTitle = routeEvent.snapshot.routeConfig.data.label;
                    this.titleService.setTitle(`${this.jbTrans.doTranslate(pageTitle)} | ${this.jbTrans.doTranslate('tag.title')}`);
                    isTitleSet = true;
                }
            }
        });
        // Update the page title every time the translation language changes
        this.titleService.setTitle(`${this.jbTrans.doTranslate('tag.title')}`);
        this.translate.onLangChange.subscribe((event) => {
            this.titleService.setTitle(`${this.jbTrans.doTranslate(pageTitle)} | ${this.jbTrans.doTranslate('tag.title')}`);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_5__["JbTranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["jb-root"]], decls: 6, vars: 1, consts: [[4, "ngIf"], [1, "container-fluid", "route-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "jb-growl-pop-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "jb-loading-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_profile_3_Template, 1, 0, "app-profile", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile.isLoggedIn);
    } }, directives: [jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__["JbGrowlPopUpComponent"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__["JbLoadingBarComponent"], _shell_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shell_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jb-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__["JbProfileService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTooltipConfig"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_5__["JbTranslateService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _core_common_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/common/app-routing.module */ "gJy2");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "pKmL");
/* harmony import */ var _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shell/shell.module */ "ZpN7");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _ngxs_labs_select_snapshot__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngxs-labs/select-snapshot */ "Y8Bm");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _core_store_all_states__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/store/all-states */ "RNcW");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _core_common_jb_translate_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/common/jb-translate-loader.service */ "oC/T");
/* harmony import */ var _core_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/common/jb-translate.service */ "yHbQ");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/locales/en-US-POSIX */ "vYhH");
/* harmony import */ var _angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _core_common_host_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @core/common/host.component */ "PnGL");































Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["registerLocaleData"])(_angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_21___default.a, 'en'); // Default locale
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'en' },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig, 'jb-chess'),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot(_core_store_all_states__WEBPACK_IMPORTED_MODULE_10__["AllStates"], { developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production }),
            _ngxs_labs_select_snapshot__WEBPACK_IMPORTED_MODULE_8__["NgxsSelectSnapshotModule"].forRoot(),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsReduxDevtoolsPluginModule"].forRoot({ disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production }),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({ loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"], useClass: _core_common_jb_translate_loader_service__WEBPACK_IMPORTED_MODULE_13__["JbTranslateLoader"] } }),
            jb_ui_lib__WEBPACK_IMPORTED_MODULE_15__["JbUiLibModule"].forRoot({ trans: { useExisting: _core_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_14__["JbTranslateService"] } }),
            _core_common_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _core_common_host_component__WEBPACK_IMPORTED_MODULE_23__["HostComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], // imports firebase
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
        _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["ɵk"], _ngxs_labs_select_snapshot__WEBPACK_IMPORTED_MODULE_8__["NgxsSelectSnapshotModule"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsReduxDevtoolsPluginModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_15__["JbUiLibModule"], _core_common_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
        _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _core_common_host_component__WEBPACK_IMPORTED_MODULE_23__["HostComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebaseConfig, 'jb-chess'),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_17__["AngularFirestoreModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthModule"],
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_19__["AngularFireStorageModule"],
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_22__["AngularFireDatabaseModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot(_core_store_all_states__WEBPACK_IMPORTED_MODULE_10__["AllStates"], { developmentMode: !_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production }),
                    _ngxs_labs_select_snapshot__WEBPACK_IMPORTED_MODULE_8__["NgxsSelectSnapshotModule"].forRoot(),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_9__["NgxsReduxDevtoolsPluginModule"].forRoot({ disabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production }),
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({ loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"], useClass: _core_common_jb_translate_loader_service__WEBPACK_IMPORTED_MODULE_13__["JbTranslateLoader"] } }),
                    jb_ui_lib__WEBPACK_IMPORTED_MODULE_15__["JbUiLibModule"].forRoot({ trans: { useExisting: _core_common_jb_translate_service__WEBPACK_IMPORTED_MODULE_14__["JbTranslateService"] } }),
                    _core_common_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                    _shell_shell_module__WEBPACK_IMPORTED_MODULE_6__["ShellModule"],
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'en' },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZM+9":
/*!**********************************************************!*\
  !*** ./src/app/core/common/app-routing-guard.service.ts ***!
  \**********************************************************/
/*! exports provided: AppRoutingGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingGuardService", function() { return AppRoutingGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _jb_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jb-profile.service */ "i0JM");




class AppRoutingGuardService {
    constructor(router, profile) {
        this.router = router;
        this.profile = profile;
    }
    canActivateChild(nextRoute, state) {
        var _a;
        const route = nextRoute.routeConfig;
        if ((_a = route.data) === null || _a === void 0 ? void 0 : _a.noLogin) {
            return true;
        }
        return this.profile.ready.then(() => {
            var _a, _b, _c;
            if (!this.profile.isLoggedIn) {
                return this.router.parseUrl('login'); // If not logged in, and route requires it --> Redirect to login
            }
            else { // Check permission to route
                if (!((_a = route.data) === null || _a === void 0 ? void 0 : _a.permission) || this.profile.permissions.includes((_b = route.data) === null || _b === void 0 ? void 0 : _b.permission)) {
                    return true; // <-- All good, go ahead
                }
                console.error(`No permission '${(_c = route.data) === null || _c === void 0 ? void 0 : _c.permission}' for route: ${route.path}`);
                if (nextRoute.routeConfig.path !== 'home') {
                    return this.router.parseUrl('home'); // If not authorized --> Redirect to home
                }
                return false; // If not authorized to home, force a logout.
            }
        });
    }
}
AppRoutingGuardService.ɵfac = function AppRoutingGuardService_Factory(t) { return new (t || AppRoutingGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__["JbProfileService"])); };
AppRoutingGuardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppRoutingGuardService, factory: AppRoutingGuardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingGuardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _jb_profile_service__WEBPACK_IMPORTED_MODULE_2__["JbProfileService"] }]; }, null); })();


/***/ }),

/***/ "ZWFk":
/*!****************************************************!*\
  !*** ./src/app/core/core-lib/jb-events.service.ts ***!
  \****************************************************/
/*! exports provided: JbEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbEventsService", function() { return JbEventsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





/**
 * @ngdoc service
 * @description This service handles global events on the main document.
 * It provides observables to react on those elements so no more listeners need to be added
 *
 * @method detectClickOutside([containers], options?): Subject<Event>
 *   @description You can generate an observable that emits only if the click was outside a list of given html elements
 *                Subscribing to that you can trigger a function for that case only.
 *    Example:
 *
 *    <div #myContainer>...</div>
 *    @ViewChild("myContainer", { static: false }) myContainer: ElementRef;
 *
 *    ngAfterViewInit() {
 *      this.sub = this.JbEventsService.detectClickOutside([this.myContainer.nativeElement], { ignoreTextSelection: true })
 *      .subscribe(res => {
 *        console.log('Danny, you are out of your element!');
 *      });
 *    }
 *    ngOnDestroy() { this.sub.unsubscribe(); }
 *
 *
 *
 * @method onKeyUp(options?): Subject<KeyboardEvent>
 *   @description Generates an observable that emits on keyboard key up. Options can define prebuild filters
 *                - onlyBody: boolean   (false by default). If true it emits only if the event is produced on the body
 *                                      This is useful to make sure it was not inside an input/textarea
 *                - key: string         Filter (emit only) the keys that generate this string
 *                - code: number        Filter (emit only) if the keyCode matches. Some keyCodes:
 *                                        KeyA - a
 *                                        Digit0 - 0
 *                                        Enter / NumpadEnter
 *                                        Escape - Escape
 *                                        Space - Space
 *                                        Backspace / Delete
 *                                        ArrowLeft / ArrowUp / ArrowRight /  ArrowDown
 *    Example:
 *    this.jbEvents.onKeyUp({ key: 'p' }).subscribe(ev => console.log('key up', ev.code, ev.key, ev.keyCode));
 *
 */
class JbEventsService {
    constructor(eManager) {
        this.eManager = eManager;
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keyUp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onWindowResize$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // Listen globally to click events
        this.eManager.addGlobalEventListener('document', 'click', ($event) => this.click$.next($event));
        this.eManager.addGlobalEventListener('document', 'keyup', ($event) => this.keyUp$.next($event));
        this.eManager.addGlobalEventListener('window', 'resize', ($event) => this.onWindowResize$.next($event));
        this.onEsc$ = this.onKeyUp({ code: 'Escape' });
    }
    // Returns an observable that emits if the click was not inside the containers
    detectClickOutside(containers, options = {}) {
        const aContainers = !Array.isArray(containers) ? [containers] : containers; // In case of 1 element only
        options = Object.assign({ ignoreTextSelection: false, usePosition: true }, options); // Set default options
        const click$ = this.click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(($event) => {
            if (options.usePosition) {
                // Calculate whether the clicked position is inside any of the containers
                // using the positioning coordinates of:
                //  - https://developer.mozilla.org/en-US/docs/Web/API/Element/getClientRects
                //  - https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
                for (const container of aContainers) {
                    if (!!container) {
                        const rect = container.getClientRects();
                        // console.log(`Click = [${$event.clientX}, ${$event.clientY}] ---- Container [left, top, right, bottom] = [${rect[0].left}, ${rect[0].top}, ${rect[0].right}, ${rect[0].bottom}]`);
                        if (rect.length && $event.clientX >= rect[0].left && $event.clientX <= rect[0].right && $event.clientY >= rect[0].top && $event.clientY <= rect[0].bottom) {
                            return false; // Click inside
                        }
                    }
                }
                return true; // Click outside
            }
            else {
                // Calculate whether the click was inside a child node of any of the containers
                // This may not catch every case, since the html elements can mutate and not match the $event.target
                let scanningTarget = $event.target;
                while (!!scanningTarget) {
                    for (const container of aContainers) {
                        if (container === scanningTarget) {
                            return false;
                        } // Click inside
                    }
                    scanningTarget = scanningTarget.parentNode; // Loop up til root
                }
                return true; // Click outside
            }
        }));
        if (!options.ignoreTextSelection) {
            return click$;
        }
        else { // If user is selecting text, ignore the click outside
            return click$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(200), // Average double click time is max .5s, but we'll give .2 to make the ux smoother
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(_ => !window.getSelection().toString().replace('\n', '')));
        }
    }
    // Returns an observable that emits when a key is pressed (up), and it was not in an input/textarea field
    // keyCode:  a='KeyA', 3='Digit3',
    onKeyUp(options = { key: '', code: '', onlyBody: false }) {
        return this.keyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(keyEvent => !options.onlyBody || keyEvent.target['tagName'] === 'BODY'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(keyEvent => !options.key || options.key === keyEvent.key), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(keyEvent => !options.code || options.code === keyEvent.code));
    }
}
JbEventsService.ɵfac = function JbEventsService_Factory(t) { return new (t || JbEventsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"])); };
JbEventsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JbEventsService, factory: JbEventsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JbEventsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["EventManager"] }]; }, null); })();


/***/ }),

/***/ "ZpN7":
/*!***************************************!*\
  !*** ./src/app/shell/shell.module.ts ***!
  \***************************************/
/*! exports provided: ShellModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellModule", function() { return ShellModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "qk0r");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "CXgY");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fMe5");
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/core.module */ "pKmL");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "1wQQ");
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/login/login.module */ "F4UR");
/* harmony import */ var _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/home/home.module */ "99Un");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile/profile.component */ "StVS");










class ShellModule {
}
ShellModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShellModule });
ShellModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShellModule_Factory(t) { return new (t || ShellModule)(); }, imports: [[
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            // Static pages (not lazy loaded)
            _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
            _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
        ], _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShellModule, { declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]], imports: [src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        // Static pages (not lazy loaded)
        _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"]], exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
        _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
        _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShellModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                ],
                imports: [
                    src_app_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    // Static pages (not lazy loaded)
                    _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                    _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
                exports: [
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                    _profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                    _pages_login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                    _pages_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "fMe5":
/*!**************************************************!*\
  !*** ./src/app/shell/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["jb-prefix-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " footer works!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jb-prefix-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gJy2":
/*!***************************************************!*\
  !*** ./src/app/core/common/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_shell_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shell/page-not-found/page-not-found.component */ "1wQQ");
/* harmony import */ var _app_routing_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing-config */ "i4e0");
/* harmony import */ var _app_routing_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing-guard.service */ "ZM+9");







// Wrap all routes into a main single route where to apply the global guards
const mainRoute = [
    { path: '',
        children: [
            ..._app_routing_config__WEBPACK_IMPORTED_MODULE_3__["routes"],
            // Wildcard (should be always the last route):
            { path: '**', component: src_app_shell_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"], data: { label: 'page.label.pageNotFound', requireLogin: false } }
        ],
        canActivateChild: [_app_routing_guard_service__WEBPACK_IMPORTED_MODULE_4__["AppRoutingGuardService"]],
    },
];
// ---------------------------------------------
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(mainRoute),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(mainRoute),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "hJ+V":
/*!*******************************************!*\
  !*** ./src/app/core/store/app.actions.ts ***!
  \*******************************************/
/*! exports provided: InitProfile, UpdateProfile, ClearProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitProfile", function() { return InitProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearProfile", function() { return ClearProfile; });
// ---- ACTIONS -------------------------------------------------------------
class InitProfile {
    constructor(profile) {
        this.profile = profile;
    }
}
InitProfile.type = '[APP] Init Profile';
class UpdateProfile {
    constructor(profile) {
        this.profile = profile;
    }
}
UpdateProfile.type = '[APP] Update Profile';
class ClearProfile {
}
ClearProfile.type = '[APP] Clear Profile';


/***/ }),

/***/ "i0JM":
/*!***************************************************!*\
  !*** ./src/app/core/common/jb-profile.service.ts ***!
  \***************************************************/
/*! exports provided: JbProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbProfileService", function() { return JbProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");







class JbProfileService {
    constructor(router, route, afAuth, growl) {
        this.router = router;
        this.route = route;
        this.afAuth = afAuth;
        this.growl = growl;
        this.isLoggedIn = false;
        this.permissions = ['any']; // Add here the profile's permissions
        this.isPanelExp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // Profile panel is expanded
        this.logout = () => {
            this.afAuth.signOut().then(() => {
                // window.location.href = '/login'; // Force page reload
            });
            this.router.navigate(['login']);
            this.clearProfile();
        };
        this.updateProfile = (displayName) => {
            return this.user.fireBaseUser.updateProfile({ displayName });
        };
        this.toggleProfile = (value) => {
            this.isPanelExp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(isExp => {
                if (value === undefined) {
                    value = !isExp;
                }
                if (value !== isExp) {
                    this.isPanelExp$.next(value);
                }
            });
        };
        this.change$ = this.afAuth.user;
        this.afAuth.user.subscribe(user => {
            // console.log('afAuth.user', user);
            if (user && user.emailVerified) {
                this.isLoggedIn = true;
                this.user = {
                    id: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    emailVerified: user.emailVerified,
                    fireBaseUser: user,
                };
            }
            else if (user && user.isAnonymous) {
                this.isLoggedIn = true;
                this.user = {
                    id: user.uid,
                    displayName: 'Guest',
                    email: 'none',
                    emailVerified: false,
                    fireBaseUser: user,
                };
            }
            else {
                this.clearProfile();
            }
        });
        this.ready = Promise.all([
            this.afAuth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise(),
            this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise().then(() => {
                // if (!this.isLoggedIn) {
                //   console.warn('Not logged in');
                // } else {
                //   console.warn('Logged in');
                // }
            }),
        ]);
        this.ready.then(() => console.log('READY'));
    }
    clearProfile() {
        this.isLoggedIn = false;
        this.user = undefined;
    }
    login(email, pass) {
        return this.afAuth.signInWithEmailAndPassword(email, pass).then(data => {
            if (!data.user.emailVerified) { // User not activated (waiting for email click)
                this.growl.error('view.login.user_not_activated');
            }
            else {
                this.ready = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).toPromise(); // refresh so router waits
                this.router.navigate(['home']);
            }
        }, (err) => this.growl.error(err.message));
    }
    anonymousLogin() {
        return this.afAuth.signInAnonymously().then(data => {
            // console.log('Anonymous correct', data);
        }).catch((error) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
        });
    }
}
JbProfileService.ɵfac = function JbProfileService_Factory(t) { return new (t || JbProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_5__["JbGrowlService"])); };
JbProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JbProfileService, factory: JbProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JbProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root', }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_5__["JbGrowlService"] }]; }, null); })();


/***/ }),

/***/ "i4e0":
/*!***************************************************!*\
  !*** ./src/app/core/common/app-routing-config.ts ***!
  \***************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/login/sign-in/sign-in.component */ "4FMf");
/* harmony import */ var _host_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./host.component */ "PnGL");




/******************************************************************************************
 * ADD MAIN ROUTES HERE
 * Routes here should be the first entry of a static route or lazy loaded module
 * Routes in lazy loaded modules can be defined within the modules (do not add them here)
 ******************************************************************************************/
const routes = [
    { path: '', component: _host_component__WEBPACK_IMPORTED_MODULE_3__["HostComponent"], data: { label: 'page.label.login', noLogin: true, } },
    // { path: '', redirectTo: '/games', pathMatch: 'full', data: { label: '-' }},
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], data: { label: 'page.label.login', noLogin: true, } },
    { path: 'login/sign', component: _pages_login_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"], data: { label: 'view.login.sign_in', noLogin: true, } },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], data: { label: 'page.label.home', permission: 'any' } },
    // Lazy loaded pages:
    { path: 'games', data: { label: 'view.games.title', permission: 'any' },
        loadChildren: () => Promise.all(/*! import() | src-app-pages-games-games-module */[__webpack_require__.e("default~src-app-pages-game-game-module~src-app-pages-games-games-module"), __webpack_require__.e("src-app-pages-games-games-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/games/games.module */ "BKPx")).then(mod => mod.GamesModule),
    },
    { path: 'game', data: { label: 'view.games.title', permission: 'any', noLogin: true },
        loadChildren: () => Promise.all(/*! import() | src-app-pages-game-game-module */[__webpack_require__.e("default~src-app-pages-game-game-module~src-app-pages-games-games-module"), __webpack_require__.e("src-app-pages-game-game-module")]).then(__webpack_require__.bind(null, /*! src/app/pages/game/game.module */ "kgeY")).then(mod => mod.GameModule),
    },
    { path: 'page2', data: { label: 'page.label.xxxxx', permission: 'any' },
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-pages-page2-page2-module */ "src-app-pages-page2-page2-module").then(__webpack_require__.bind(null, /*! src/app/pages/page2/page2.module */ "Lykl")).then(mod => mod.Page2Module),
    },
]; // RouteEnd


/***/ }),

/***/ "oC/T":
/*!************************************************************!*\
  !*** ./src/app/core/common/jb-translate-loader.service.ts ***!
  \************************************************************/
/*! exports provided: JbTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbTranslateLoader", function() { return JbTranslateLoader; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_assets_dicctionaries_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/dicctionaries/en */ "SR9A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");






/*************************************************************************************************
 * Hook up the ngx-translate loader with getTranslation(), to load the dictionaries dynamically
 ************************************************************************************************/
class JbTranslateLoader {
    // Watch the DIs here --> This will be injected in jb-ui-lib
    constructor(http, loadingBar) {
        this.http = http;
        this.loadingBar = loadingBar;
    }
    getTranslation(lang) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(src_assets_dicctionaries_en__WEBPACK_IMPORTED_MODULE_2__["enDic"]);
    }
}
JbTranslateLoader.ɵfac = function JbTranslateLoader_Factory(t) { return new (t || JbTranslateLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbLoadingBarService"])); };
JbTranslateLoader.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JbTranslateLoader, factory: JbTranslateLoader.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JbTranslateLoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_4__["JbLoadingBarService"] }]; }, null); })();


/***/ }),

/***/ "pKmL":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _core_lib_core_lib_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core-lib/core-lib.module */ "vrJq");










class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__["JbUiLibModule"],
        _core_lib_core_lib_module__WEBPACK_IMPORTED_MODULE_8__["CoreLibModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
        jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__["JbUiLibModule"],
        _core_lib_core_lib_module__WEBPACK_IMPORTED_MODULE_8__["CoreLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
                    jb_ui_lib__WEBPACK_IMPORTED_MODULE_7__["JbUiLibModule"],
                    _core_lib_core_lib_module__WEBPACK_IMPORTED_MODULE_8__["CoreLibModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qk0r":
/*!**************************************************!*\
  !*** ./src/app/shell/navbar/navbar.component.ts ***!
  \**************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/common/jb-profile.service */ "i0JM");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function NavbarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.profile.toggleProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "view.profile.title"));
} }
function NavbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "view.common.logout"));
} }
class NavbarComponent {
    constructor(router, profile, afs, afAuth, confirm) {
        this.router = router;
        this.profile = profile;
        this.afs = afs;
        this.afAuth = afAuth;
        this.confirm = confirm;
    }
    ngOnInit() { }
    logout() {
        this.confirm.open({
            title: 'view.common.logout',
            text: 'view.profile.confirm_logout',
        }).then(() => {
            this.profile.logout();
        }, () => { });
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_5__["JbConfirmService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 2, consts: [[1, "navbar"], [1, "navbar-brand"], ["routerLink", "/home"], ["src", "assets/logo.png?v=0.1"], [1, "navbar-content"], ["class", "nav-item", 3, "click", 4, "ngIf"], [1, "nav-item", 3, "click"], ["placement", "left", 1, "icon-user", 3, "ngbTooltip"], ["placement", "left", 1, "icon-switch", 3, "ngbTooltip"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NavbarComponent_div_5_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_div_6_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profile.isLoggedIn);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltip"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\nnav.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  background: #18cacd;\n  color: #fff;\n  position: fixed;\n  z-index: 1030;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 72px;\n  border-bottom: 1px #16bdbf solid;\n  padding: 0 1px;\n  box-shadow: 0 2px 3px rgba(34, 36, 38, 0.15);\n}\nnav.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\nnav.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  max-width: 300px;\n  padding: 0 10px;\n  margin-right: 15px;\n}\nnav.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: calc(72px - 20px);\n}\nnav.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%] {\n  flex: 0 1 100%;\n  height: 72px;\n  overflow-x: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\nnav.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 4px 20px 2px;\n  font-size: 30px;\n  line-height: 30px;\n}\nnav.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   span[class*=icon-][_ngcontent-%COMP%]:hover {\n  color: #e6e6e6;\n}\n@media (max-width: 992px) {\n  nav.navbar[_ngcontent-%COMP%]   .navbar-content[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n    padding: 4px 10px 2px;\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DQSxnRkFBQTtBQUNBLGdGQUFBO0FBd0JBO0VBQWEsd0JBQUE7RUFBMEIsaUNBQUE7QUN4RHZDO0FBSEE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUVBLG1CRE5rQjtFQ09sQixXQUFBO0VBS0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxZRE1nQjtFQ0xoQixnQ0FBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtBQUFGO0FBWkU7RUFDRSxXREZjO0VDR2QscUJBQUE7QUFjSjtBQUZFO0VBQ0UsY0FBQTtFQUNBLGdCRFFpQjtFQ1BqQixlQUFBO0VBQ0Esa0JBQUE7QUFJSjtBQUhJO0VBQU0sNkJBQUE7QUFNVjtBQUhFO0VBQ0UsY0FBQTtFQUNBLFlEVGM7RUNVZCxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBS0o7QUFISTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUtOO0FBSk07RUFBNkIsY0RaZDtBQ21CckI7QUFERTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxlQUFBO0VBR0o7QUFDRiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKiogTWFpbiBDb2xvcnMgKioqKioqKioqKipcbiRwcmltYXJ5X2NvbG9yICAgIDogIzE4Y2FjZDtcbiRzZWNvbmRhcnlfY29sb3IgIDogIzU3YzE2ZjtcbiR0ZXJ0aWFyeV9jb2xvciAgIDogI0YxN0IzRjtcbiRxdWF0ZXJuYXJ5X2NvbG9yIDogIzNmOGNjYTtcbiR3YXJuaW5nX2NvbG9yICAgIDogI2U4NGUzYTtcbiRleHRyYV9jb2xvciAgICAgIDogI2E3NjZiMjtcblxuJHdoaXRlICAgICAgICAgIDogI2ZmZjtcbiRibGFjayAgICAgICAgICA6ICMwMDA7XG4kZ3JleSAgICAgICAgICAgOiAjOTI5MjkyO1xuJGxpZ2h0LWdyYXkgICAgIDogI2UzZTNlMztcbiRsaWdodGVyLWdyYXkgICA6ICNmNWY1ZjU7XG4kdGV4dC1jb2xvciAgICAgOiAjNTI1MjU0O1xuJG9wdGlvbmFsLWNvbG9yIDogI2NjYzsgICAgICAgLy8gKGJvb3RzdHJhcCBkZWZhdWx0IC0gJGlucHV0LWJvcmRlcilcbiRkaXNhYmxlZC1jb2xvciA6ICNhMGEwYTA7XG4kZm9jdXNlZC1jb2xvciAgOiBkYXJrZW4oJHByaW1hcnlfY29sb3IsIDIwJSk7XG4kcmVxdWlyZWQtY29sb3IgOiAkcHJpbWFyeV9jb2xvcjtcbiR2YWxpZC1jb2xvciAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGludmFsaWQtY29sb3IgIDogJHdhcm5pbmdfY29sb3I7XG4kaW5wdXQtcGxhY2Vob2xkZXItY29sb3I6ICNjMGMwYzA7XG4kc3BlY2lhbC1saW5rLWNvbG9yOiAkcHJpbWFyeV9jb2xvcjtcblxuLy8gKioqKioqKioqIFNoZWxsICoqKioqKioqKioqXG4kbmF2YmFyLWhlaWdodCAgOiA3MnB4OyAgICAgIC8vIEhlaWdodCBvZiB0aGUgaGVhZGVyXG4kbWVudS13aWR0aCAgICAgOiA1NXB4OyAgICAgIC8vIFdpZHRoIG9mIHRoZSBjb2xsYXBzZWQgbWVudVxuJG1lbnUtZXhwLXdpZHRoIDogMjAwcHg7ICAgICAvLyBXaWR0aCBvZiB0aGUgZXhwYW5kZWQgbWVudSAodG90YWwgPSAkbWVudS13aWR0aCArICRtZW51LWV4cC13aWR0aClcblxuLy8gKioqKioqKioqIEhlYWRlciBOYXZiYXIgKioqKioqKioqKipcbiRuYXYtYmctY29sb3IgICAgICA6ICRwcmltYXJ5X2NvbG9yOyAgICAgIC8vIEJhY2tncm91bmQgY29sb3Igb2YgdGhlIG5hdmJhclxuJG5hdi1jb2xvciAgICAgICAgIDogJHdoaXRlOyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciB0ZXh0XG4kbmF2LWxpbmstY29sb3IgICAgOiAkd2hpdGU7ICAgICAgICAgICAgICAvLyBDb2xvciBvZiB0aGUgbmF2YmFyIHRleHQgb2YgdGhlIGxpbmtzXG4kbmF2LWhvdmVyLWNvbG9yICAgOiBkYXJrZW4oJHdoaXRlLCAxMCUpOyAvLyBDb2xvciBvZiB0aGUgbmF2YmFyIGljb25zIHdoZW4gaG92ZXJpbmdcbiRtYXgtbG9nby13aWR0aCAgICA6IDMwMHB4OyAgICAgICAgICAgICAgIC8vIE1heCBzaXplIG9mIHRoZSBsb2dvIGluIHRoZSBuYXZiYXJcblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqICBCb290c3RyYXAgdGhlbWUgb3ZlcndyaXRlICoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvc2Nzcy9fdmFyaWFibGVzLnNjc3MgKioqKioqL1xuJHByaW1hcnkgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kc2Vjb25kYXJ5ICAgICAgOiAkc2Vjb25kYXJ5X2NvbG9yO1xuJHN1Y2Nlc3MgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kaW5mbyAgICAgICAgICAgOiAkcXVhdGVybmFyeV9jb2xvcjtcbiR3YXJuaW5nICAgICAgICA6ICRleHRyYV9jb2xvcjtcbiRkYW5nZXIgICAgICAgICA6ICR3YXJuaW5nX2NvbG9yO1xuJGxpZ2h0ICAgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kZGFyayAgICAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRlcnJvci1jb2xvciAgICA6ICR3YXJuaW5nX2NvbG9yO1xuJHN1Y2Nlc3MtY29sb3IgIDogJHByaW1hcnlfY29sb3I7XG4kbGluay1jb2xvciAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRsaW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJHByaW1hcnlfY29sb3IsIDUlKTtcbiRib2R5LWNvbG9yICAgICA6ICR0ZXh0LWNvbG9yO1xuJGJvZHktYmcgICAgICAgIDogI2ViZWZmMjtcblxuJG5hdmJhci1kYXJrLWNvbG9yICAgICAgICAgICAgICA6ICR3aGl0ZTtcbiRuYXZiYXItZGFyay1ob3Zlci1jb2xvciAgICAgICAgOiByZ2JhKCR3aGl0ZSwgLjc1KTtcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3IgICAgICAgOiByZ2JhKCR3aGl0ZSwgLjgwKTtcbiRuYXZiYXItZGFyay1kaXNhYmxlZC1jb2xvciAgICAgOiByZ2JhKCR3aGl0ZSwgLjI1KTtcbiRuYXZiYXItZGFyay1icmFuZC1jb2xvciAgICAgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvciAgOiAkd2hpdGU7XG5cbi8vIC0tLS0tLSBHbG9iYWxzIC0tLS0tLVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAnV0YtU2Fucy1NJzsgc3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250cy9QdWJsaWNTYW5zLU1lZGl1bS50dGYnKTsgfVxuJGZvbnQtZmFtaWx5LWJhc2U6ICdXRi1TYW5zLU0nLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6ICdXRi1TYW5zLU0nLCBzYW5zLXNlcmlmO1xuLy8kZm9udC1mYW1pbHktbW9ub3NwYWNlOiBtb25vc3BhY2U7XG4kZm9udC1zaXplLWJhc2U6IDAuODc1cmVtOyAvLyAxNHB4OyAoZGVmYXVsdCAxcmVtID0gMTZweClcbiRmb250LXdlaWdodC1iYXNlOiA0MDA7XG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHMgLSBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjEvbGF5b3V0L292ZXJ2aWV3Lz9zb3VyY2U9cG9zdF9wYWdlI3Jlc3BvbnNpdmUtYnJlYWtwb2ludHNcbiRncmlkLWJyZWFrcG9pbnRzOiAoeHM6IDAsIHNtOiA3NjhweCwgbWQ6IDk5MnB4LCBsZzogMTIwMHB4LCB4bDogMTYwMHB4KTtcblxuLy8gTW9kYWwgc2l6ZXNcbi8vJG1vZGFsLXhsOiAgMTE0MHB4O1xuJG1vZGFsLWxnOiAgOTAwcHg7IC8vIERlZmF1bHQ9ODAwXG4kbW9kYWwtbWQ6ICA2MDBweDsgLy8gRGVmYXVsdD01MDBcbiRtb2RhbC1zbTogIDQwMHB4OyAvLyBEZWZhdWx0PTMwMFxuJG1vZGFsLWhlYWRlci1wYWRkaW5nOiAyNXB4O1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDA7XG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteDogMDtcblxuXG4vLyBaIHBvc2l0aW9uIGZvciBtb2RhbHNcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6IDEwNDA7IC8vIDEwNDA7XG4kemluZGV4LW1vZGFsOiAgICAgICAgICAxMDUwOyAvLyAxMDUwO1xuXG4vLyBCb290c3RyYXAgVG9vbHRpcHMgKCsgbmdiIFRvb2x0aXBzKVxuJHppbmRleC10b29sdGlwOiA1MTAwOyAgLy8gU2hvdyB0b29sdGlwcyBvdmVyIG5hdmJhciBhbmQgbWVudVxuJHRvb2x0aXAtYmc6IGRhcmtlbigkcXVhdGVybmFyeV9jb2xvciwgNSUpO1xuJHRvb2x0aXAtb3BhY2l0eTogMC45O1xuLy8kdG9vbHRpcC1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtO1xuLy8kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyMDBweDtcbi8vJHRvb2x0aXAtY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJHdoaXRlO1xuLy8kdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cztcbi8vJHRvb2x0aXAtcGFkZGluZy15OiAgICAgICAgICAgICAgICAgLjI1cmVtO1xuLy8kdG9vbHRpcC1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgICAuNXJlbTtcbi8vJHRvb2x0aXAtbWFyZ2luOiAgICAgICAgICAgICAgICAgICAgMDtcbi8vJHRvb2x0aXAtYXJyb3ctd2lkdGg6ICAgICAgICAgICAgICAgLjhyZW07XG4vLyR0b29sdGlwLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC40cmVtO1xuLy8kdG9vbHRpcC1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkdG9vbHRpcC1iZztcblxuLy8gQm9vdHN0cmFwIFBvcG92ZXJzXG4kcG9wb3Zlci1iZzogZGFya2VuKCRxdWF0ZXJuYXJ5X2NvbG9yLCA1JSk7XG4vLyRwb3BvdmVyLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICRmb250LXNpemUtc207XG4vLyRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgIDI3NnB4O1xuLy8kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAkYm9yZGVyLXdpZHRoO1xuLy8kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICByZ2JhKCRibGFjaywgLjIpO1xuLy8kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1sZztcbi8vJHBvcG92ZXItYm94LXNoYWRvdzogICAgICAgICAgICAgICAgMCAuMjVyZW0gLjVyZW0gcmdiYSgkYmxhY2ssIC4yKTtcbi8vJHBvcG92ZXItaGVhZGVyLWJnOiAgICAgICAgICAgICAgICAgZGFya2VuKCRwb3BvdmVyLWJnLCAzJSk7XG4vLyRwb3BvdmVyLWhlYWRlci1jb2xvcjogICAgICAgICAgICAgICRoZWFkaW5ncy1jb2xvcjtcbi8vJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogICAgICAgICAgLjVyZW07XG4vLyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6ICAgICAgICAgIC43NXJlbTtcbi8vJHBvcG92ZXItYm9keS1jb2xvcjogICAgICAgICAgICAgICAgJGJvZHktY29sb3I7XG4vLyRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XG4vLyRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAgICAgICAgICAgICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg7XG4vLyRwb3BvdmVyLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIDFyZW07XG4vLyRwb3BvdmVyLWFycm93LWhlaWdodDogICAgICAgICAgICAgIC41cmVtO1xuLy8kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAkcG9wb3Zlci1iZztcbi8vJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIC4wNSk7XG5cblxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxubmF2Lm5hdmJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbiAgYmFja2dyb3VuZDogJG5hdi1iZy1jb2xvcjtcbiAgY29sb3I6ICRuYXYtY29sb3I7XG4gIGEge1xuICAgIGNvbG9yOiAkbmF2LWxpbmstY29sb3I7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiAgbm9uZTtcbiAgfVxuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMzA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogJG5hdmJhci1oZWlnaHQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXJrZW4oJHByaW1hcnlfY29sb3IsIDMlKSBzb2xpZDtcbiAgcGFkZGluZzogMCAxcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDM0LDM2LDM4LC4xNSk7XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgbWF4LXdpZHRoOiAkbWF4LWxvZ28td2lkdGg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICBpbWcgeyBtYXgtaGVpZ2h0OiBjYWxjKCN7JG5hdmJhci1oZWlnaHR9IC0gMjBweCk7IH1cbiAgfVxuXG4gIC5uYXZiYXItY29udGVudCB7XG4gICAgZmxleDogMCAxIDEwMCU7XG4gICAgaGVpZ2h0OiAkbmF2YmFyLWhlaWdodDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgcGFkZGluZzogNHB4IDIwcHggMnB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICBzcGFuW2NsYXNzKj1cImljb24tXCJdOmhvdmVyIHsgY29sb3I6ICRuYXYtaG92ZXItY29sb3I7IH1cbiAgICB9XG5cbiAgfVxuXG4gIC8vIE5hdkJhciBmb3Igc21hbGwgcmVzb2x1dGlvbnNcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgLm5hdmJhci1jb250ZW50IC5uYXYtaXRlbSB7XG4gICAgICBwYWRkaW5nOiA0cHggMTBweCAycHg7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_2__["JbProfileService"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_5__["JbConfirmService"] }]; }, null); })();


/***/ }),

/***/ "vrJq":
/*!**************************************************!*\
  !*** ./src/app/core/core-lib/core-lib.module.ts ***!
  \**************************************************/
/*! exports provided: CoreLibModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreLibModule", function() { return CoreLibModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _jb_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jb-date.pipe */ "RM7K");
/* harmony import */ var _jb_form_valid_change_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jb-form-valid-change.directive */ "7Ue0");
/* harmony import */ var _jb_form_change_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jb-form-change.directive */ "vz9o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");










class CoreLibModule {
}
CoreLibModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreLibModule });
CoreLibModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreLibModule_Factory(t) { return new (t || CoreLibModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreLibModule, { declarations: [_jb_date_pipe__WEBPACK_IMPORTED_MODULE_1__["JbDatePipe"],
        _jb_form_valid_change_directive__WEBPACK_IMPORTED_MODULE_2__["JfFormValidChangeDirective"],
        _jb_form_change_directive__WEBPACK_IMPORTED_MODULE_3__["JjBormChangeDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]], exports: [_jb_date_pipe__WEBPACK_IMPORTED_MODULE_1__["JbDatePipe"],
        _jb_form_valid_change_directive__WEBPACK_IMPORTED_MODULE_2__["JfFormValidChangeDirective"],
        _jb_form_change_directive__WEBPACK_IMPORTED_MODULE_3__["JjBormChangeDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreLibModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _jb_date_pipe__WEBPACK_IMPORTED_MODULE_1__["JbDatePipe"],
                    _jb_form_valid_change_directive__WEBPACK_IMPORTED_MODULE_2__["JfFormValidChangeDirective"],
                    _jb_form_change_directive__WEBPACK_IMPORTED_MODULE_3__["JjBormChangeDirective"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                ],
                exports: [
                    _jb_date_pipe__WEBPACK_IMPORTED_MODULE_1__["JbDatePipe"],
                    _jb_form_valid_change_directive__WEBPACK_IMPORTED_MODULE_2__["JfFormValidChangeDirective"],
                    _jb_form_change_directive__WEBPACK_IMPORTED_MODULE_3__["JjBormChangeDirective"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vz9o":
/*!***********************************************************!*\
  !*** ./src/app/core/core-lib/jb-form-change.directive.ts ***!
  \***********************************************************/
/*! exports provided: JjBormChangeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JjBormChangeDirective", function() { return JjBormChangeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



/***
 * Automatically detects when the form changes, and emits the new values
 *
 *    <form #detailsForm="ngForm" (jjBormChange)="doSomething($event)">
 */
class JjBormChangeDirective {
    constructor(ngForm) {
        this.ngForm = ngForm;
        this.jjBormChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngAfterViewInit() {
        this.sub = this.ngForm.form.valueChanges.subscribe(value => this.jjBormChange.emit(value));
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
JjBormChangeDirective.ɵfac = function JjBormChangeDirective_Factory(t) { return new (t || JjBormChangeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])); };
JjBormChangeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: JjBormChangeDirective, selectors: [["", "jjBormChange", ""]], outputs: { jjBormChange: "jjBormChange" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JjBormChangeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[jjBormChange]' }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"] }]; }, { jjBormChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "yHbQ":
/*!*****************************************************!*\
  !*** ./src/app/core/common/jb-translate.service.ts ***!
  \*****************************************************/
/*! exports provided: JbTranslateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JbTranslateService", function() { return JbTranslateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/en-US-POSIX */ "vYhH");
/* harmony import */ var _angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/locales/de */ "VLs4");
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/it */ "1IWC");
/* harmony import */ var _angular_common_locales_it__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/es */ "2Yyj");
/* harmony import */ var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/locales/ca */ "hDpI");
/* harmony import */ var _angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




// Locale configs










Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_en_US_POSIX__WEBPACK_IMPORTED_MODULE_5___default.a, 'en');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_6___default.a, 'de');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_it__WEBPACK_IMPORTED_MODULE_7___default.a, 'it');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_8___default.a, 'es');
Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_ca__WEBPACK_IMPORTED_MODULE_9___default.a, 'ca');
/********************************************************
 * This is a wrapper for ngx-translate service
 * DOC: https://github.com/ngx-translate/core
********************************************************/
class JbTranslateService extends jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["AbstractTranslateService"] {
    // Watch the DIs here --> This will be injected in jb-ui-lib
    constructor(http, loadingBar, translate) {
        super();
        this.http = http;
        this.loadingBar = loadingBar;
        this.translate = translate;
        this.storageLocaleKey = 'NG_TRANSLATE_LANG_KEY';
        this.fallbackLocaleId = 'en';
        this.fallbackLanguage = 'en'; // Fallback dictionary. If a translation is not found for the current, use this
        this.supportedLanguages = [
            { code: 'en', name: 'English', country: 'US', localeId: 'en' },
            { code: 'de', name: 'German', country: 'DE', localeId: 'de' },
            { code: 'it', name: 'Italian', country: 'IT', localeId: 'it' },
            { code: 'es', name: 'Spanish', country: 'ES', localeId: 'es' },
            { code: 'cat', name: 'Catalan', country: 'ES', localeId: 'ca' },
        ];
        this.currentLocale = this.fallbackLocaleId;
        this.locale$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.fallbackLocaleId);
        // Change the current locale and reload the translations dictionary
        this.changeLanguage = (newLang) => {
            // console.log('CHANGING LANGUAGE TO ----> ', newLang);
            this.translate.use(newLang);
            localStorage.setItem(this.storageLocaleKey, newLang);
            // Set current locale from the language
            const currentLang = this.supportedLanguages.getByProp('code', newLang);
            this.currentLocale = (currentLang ? currentLang.localeId : this.fallbackLocaleId) || this.fallbackLocaleId;
            // This doesn't work (LOCALE_ID is static). We must use 'jbDate' extended pipe
            // @Inject(LOCALE_ID) private _locale: string,
            // const currentLocale = getLocaleId(this._locale);
            // this._locale = newLocale;
        };
        // Instant translation
        this.doTranslate = (label, params = {}) => {
            let response = (label || '') + '';
            if (!!this.translate && !!this.translate.instant && !!label) {
                response = this.translate.instant(label, params);
            }
            return response;
        };
        // Returns an observable the reacts to label changes across languages
        this.getLabel$ = (label, params = {}) => {
            if (!label) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])('');
            }
            return this.translate.stream(label + '', params);
        };
        this.onLangChange$ = this.translate.onLangChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((event) => ({ lang: event.lang, translations: event.translations })));
        this.translate.onLangChange.subscribe((event) => this.locale$.next(event.lang));
        // this.translate.onTranslationChange.subscribe((event: TranslationChangeEvent) => { ... });
        // this.translate.onDefaultLangChange.subscribe((event: DefaultLangChangeEvent) => { ... });
        this.translate.addLangs(this.supportedLanguages.map(lang => lang.code)); // Add to ngx-translate module
        // You can get'em with: translate.getLangs();
        // This would enable the fallback language loading
        // this.translate.setDefaultLang(this.fallbackLanguage);
        // Select NG_TRANSLATE_LANG_KEY
        const storedLanguage = localStorage.getItem(this.storageLocaleKey);
        if (storedLanguage) {
            this.changeLanguage(storedLanguage);
        }
        // If there is no valid stored language, determine a default one
        if (!this.supportedLanguages.getByProp('code', storedLanguage)) {
            const browserLang = (navigator.language || navigator.languages && navigator.languages[0] || navigator['userLanguage'] || '').toLowerCase();
            if (this.supportedLanguages.getByProp('code', browserLang)) {
                this.changeLanguage(browserLang); // Browser's language
            }
            else {
                this.changeLanguage(this.fallbackLanguage); // Default
            }
        }
    }
}
JbTranslateService.ɵfac = function JbTranslateService_Factory(t) { return new (t || JbTranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbLoadingBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"])); };
JbTranslateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JbTranslateService, factory: JbTranslateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JbTranslateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbLoadingBarService"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "SYky");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jb_ui_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jb-ui-lib */ "tHpM");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));

// Initialize prototypes



jb_ui_lib__WEBPACK_IMPORTED_MODULE_3__["JbPrototypes"].run(); // Extend all common prototypes


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map