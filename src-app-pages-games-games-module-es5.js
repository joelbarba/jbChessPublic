(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-games-games-module"], {
    /***/
    "BKPx":
    /*!*********************************************!*\
      !*** ./src/app/pages/games/games.module.ts ***!
      \*********************************************/

    /*! exports provided: GamesModule */

    /***/
    function BKPx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamesModule", function () {
        return GamesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _games_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./games.component */
      "f9X1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/core.module */
      "pKmL");

      var routes = [{
        path: '',
        component: _games_component__WEBPACK_IMPORTED_MODULE_1__["GamesComponent"]
      }];

      var GamesModule = function GamesModule() {
        _classCallCheck(this, GamesModule);
      };

      GamesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GamesModule
      });
      GamesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GamesModule_Factory(t) {
          return new (t || GamesModule)();
        },
        imports: [[_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GamesModule, {
          declarations: [_games_component__WEBPACK_IMPORTED_MODULE_1__["GamesComponent"]],
          imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_games_component__WEBPACK_IMPORTED_MODULE_1__["GamesComponent"]],
            imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "f9X1":
    /*!************************************************!*\
      !*** ./src/app/pages/games/games.component.ts ***!
      \************************************************/

    /*! exports provided: GamesComponent */

    /***/
    function f9X1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamesComponent", function () {
        return GamesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! jb-ui-lib */
      "tHpM");
      /* harmony import */


      var _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/store/store.service */
      "7w41");
      /* harmony import */


      var _core_core_lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/core-lib/helpers */
      "SUed");
      /* harmony import */


      var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/common/jb-profile.service */
      "i0JM");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function GamesComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "jb-btn", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function GamesComponent_li_15_Template_jb_btn_jbClick_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var game_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.deleteGame(game_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "jb-btn", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function GamesComponent_li_15_Template_jb_btn_jbClick_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var game_r1 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.showLink(game_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "jb-btn", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function GamesComponent_li_15_Template_jb_btn_jbClick_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var game_r1 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.router.navigate(["game/", game_r1.id, game_r1.token1]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var game_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx_r0.gamesList.loadingStatus > ctx_r0.status.LOADING);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.requestDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.playerName1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](game_r1.playerName2);
        }
      }

      var _c0 = function _c0() {
        return [3, 2, 3, 3, 1];
      };

      var GamesComponent = /*#__PURE__*/function () {
        function GamesComponent(profile, afAuth, afs, growl, store, router, confirm) {
          _classCallCheck(this, GamesComponent);

          this.profile = profile;
          this.afAuth = afAuth;
          this.afs = afs;
          this.growl = growl;
          this.store = store;
          this.router = router;
          this.confirm = confirm;
          this.status = jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["ListStatus"];
          this.REQUESTED = _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].REQUESTED;
          this.gamesList = new jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbListHandler"]({
            listName: 'games-list',
            filterFields: ['playerName1', 'playerName2'],
            orderFields: ['reqTime'],
            orderReverse: true,
            rowsPerPage: 10
          });
        }

        _createClass(GamesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sub = this.store.games$.subscribe(function (games) {
              _this.gamesList.load(games.map(function (game) {
                return Object.assign(Object.assign({}, game), {
                  reqTime: Object(_core_core_lib_helpers__WEBPACK_IMPORTED_MODULE_3__["strToDate"])(game.requestDate).getTime(),
                  canJoin: _this.store.canJoinGame(game),
                  canPlay: _this.store.canPlayGame(game)
                });
              }));

              console.log('gamesList', _this.gamesList.loadedList);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "newGame",
          value: function newGame() {
            var _this2 = this;

            this.store.newGame().then(function (game) {
              _this2.growl.success('view.games.request_send');

              console.log('game', game);

              _this2.showLink(game);
            });
          }
        }, {
          key: "showLink",
          value: function showLink(game) {
            this.confirm.open({
              title: 'view.game.details',
              htmlContent: "Use this link to join as <b>Player1</b>:<br>\n                       http:\\\\127.0.0.1:4200\\game\\".concat(game.id, "\\").concat(game.token1, "<br><br>\n                       Or use this link to join as <b>Player2</b>:<br>\n                       http:\\\\127.0.0.1:4200\\game\\").concat(game.id, "\\").concat(game.token2),
              yesButtonText: 'view.common.ok',
              showNo: false,
              showCancel: false
            });
          }
        }, {
          key: "deleteGame",
          value: function deleteGame(game) {
            var _this3 = this;

            this.confirm.open({
              title: 'Remove Game'
            }).then(function (res) {
              if (res === 'yes') {
                _this3.store.deleteGame(game.id);
              }
            });
          }
        }]);

        return GamesComponent;
      }();

      GamesComponent.ɵfac = function GamesComponent_Factory(t) {
        return new (t || GamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbGrowlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbConfirmService"]));
      };

      GamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GamesComponent,
        selectors: [["jb-games"]],
        decls: 21,
        vars: 17,
        consts: [["translate", ""], [1, "row", "whiteBg", "padB10"], ["jbIcon", "icon-search", "jbPlaceholder", "view.common.search", 1, "col-md-7", 3, "jbAutoFocus", "ngModel", "ngModelChange"], [1, "col-md-5", "marB15", "text-right"], ["jbType", "add", "jbText", "view.games.new_game", 3, "jbClick"], [1, "row", 3, "show"], [1, "col-12"], [1, "list-unstyled", "table-list"], [1, "list-header"], ["colTitle", "view.games.request_date", "fieldName", "reqTime", 1, "col-3", 3, "orderConf"], ["colTitle", "view.common.status", "fieldName", "status", 1, "col-2", 3, "orderConf"], ["colTitle", "view.games.player1", "fieldName", "playerName1", 1, "col-2", 3, "orderConf"], ["colTitle", "view.games.player2", "fieldName", "playerName2", 1, "col-2", 3, "orderConf"], [3, "show", "jbColumns"], ["class", "list-row", 3, "show", 4, "ngFor", "ngForOf"], [1, "row", "whiteBg", 3, "show"], ["jbShowSelector", "true", 1, "col-12", "mobile-sm", 3, "jbCtrl"], ["jbIcon", "icon-finish", "jbTitle", "view.games.no_games", 1, "col-12", 3, "jbIsPlaceholder"], [1, "list-row", 3, "show"], [1, "col-3"], [1, "col-2"], [1, "col-3", "text-right"], ["jbType", "delete-icon", 3, "jbClick"], ["jbType", "view-icon", 3, "jbClick"], ["jbType", "update", "jbText", "view.common.go", 3, "jbClick"]],
        template: function GamesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view.games.title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "jb-input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GamesComponent_Template_jb_input_ngModelChange_3_listener($event) {
              return ctx.gamesList.filterText = $event;
            })("ngModelChange", function GamesComponent_Template_jb_input_ngModelChange_3_listener($event) {
              return ctx.gamesList.filter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "jb-btn", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClick", function GamesComponent_Template_jb_btn_jbClick_5_listener() {
              return ctx.newGame();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "jb-list-header-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "jb-list-header-col", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "jb-list-header-col", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "jb-list-header-col", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "jb-list-placeholder", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GamesComponent_li_15_Template, 13, 5, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "jb-list-paginator", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "jb-no-data", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jbAutoFocus", true)("ngModel", ctx.gamesList.filterText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.gamesList.loadingStatus <= ctx.status.LOADING || ctx.gamesList.totalFiltered > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderConf", ctx.gamesList.orderConf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderConf", ctx.gamesList.orderConf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderConf", ctx.gamesList.orderConf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("orderConf", ctx.gamesList.orderConf);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.gamesList.loadingStatus <= ctx.status.LOADING)("jbColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx.gamesList.renderList$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.gamesList.totalFiltered > 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jbCtrl", ctx.gamesList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.gamesList.loadingStatus > ctx.status.LOADING && ctx.gamesList.totalFiltered === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("jbIsPlaceholder", true);
          }
        },
        directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbBtnComponent"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["ShowDirective"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbListHeaderColComponent"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbListPlaceholderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbListPaginatorComponent"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbNoDataComponent"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GamesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'jb-games',
            templateUrl: './games.component.html',
            styleUrls: ['./games.component.scss']
          }]
        }], function () {
          return [{
            type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__["JbProfileService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]
          }, {
            type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbGrowlService"]
          }, {
            type: _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_1__["JbConfirmService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src-app-pages-games-games-module-es5.js.map