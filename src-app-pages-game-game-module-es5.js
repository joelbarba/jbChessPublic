(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-pages-game-game-module"], {
    /***/
    "/JRT":
    /*!**********************************************!*\
      !*** ./src/app/pages/game/game.component.ts ***!
      \**********************************************/

    /*! exports provided: GameComponent */

    /***/
    function JRT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
        return GameComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/store/store.service */
      "7w41");
      /* harmony import */


      var _piece_selector_modal_piece_selector_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./piece-selector-modal/piece-selector.modal */
      "xERD");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var subsink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! subsink */
      "33Jv");
      /* harmony import */


      var _core_store_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/store/chat.service */
      "VMvn");
      /* harmony import */


      var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @core/common/jb-profile.service */
      "i0JM");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! jb-ui-lib */
      "tHpM");
      /* harmony import */


      var _core_store_video_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @core/store/video.service */
      "BVtM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["panel"];

      function GameComponent_div_71_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 29);
        }

        if (rf & 2) {
          var pos_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("has-piece", ctx_r15.game.board[ctx_r15.getPos(pos_r14)] > 0);
        }
      }

      function GameComponent_div_71_div_1_img_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
        }

        if (rf & 2) {
          var pos_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r16.store.getPiece(ctx_r16.game.board[ctx_r16.getPos(pos_r14)]).img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function GameComponent_div_71_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_71_div_1_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var pos_r14 = ctx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r19.selectSquare(ctx_r19.getPos(pos_r14));
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameComponent_div_71_div_1_span_2_Template, 1, 2, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameComponent_div_71_div_1_img_3_Template, 1, 1, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var pos_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r13.store.squareColor(pos_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-selectable", ctx_r13.isSelectable(ctx_r13.getPos(pos_r14)))("selected", ctx_r13.selPos === ctx_r13.getPos(pos_r14));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.phase === 1 && ctx_r13.validMoves.includes(ctx_r13.getPos(pos_r14)));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r13.game.board[ctx_r13.getPos(pos_r14)] > 0);
        }
      }

      function GameComponent_div_71_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_71_div_1_Template, 4, 7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r1.boardSize, "px")("height", ctx_r1.boardSize, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.squares);
        }
      }

      function GameComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "jb-btn", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_div_74_Template_jb_btn_jbClick_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.resetGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "jb-btn", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_div_74_Template_jb_btn_jbClick_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.revertLast();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_jb_btn_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jb-btn", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_jb_btn_77_Template_jb_btn_jbClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.mode = "analyse";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_jb_btn_78_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "jb-btn", 35);
        }
      }

      function GameComponent_jb_btn_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "jb-btn", 36);
        }
      }

      function GameComponent_jb_btn_80_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "jb-btn", 37);
        }
      }

      function GameComponent_jb_btn_81_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jb-btn", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_jb_btn_81_Template_jb_btn_jbClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r26.finishGame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_jb_btn_82_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jb-btn", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_jb_btn_82_Template_jb_btn_jbClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r28.router.navigate(["/games"]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_div_83_img_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
        }

        if (rf & 2) {
          var piece_r32 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", piece_r32 == null ? null : piece_r32.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function GameComponent_div_83_img_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 30);
        }

        if (rf & 2) {
          var piece_r33 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", piece_r33 == null ? null : piece_r33.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function GameComponent_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "(WHITE)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "(BLACK)");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, GameComponent_div_83_img_25_Template, 1, 1, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, GameComponent_div_83_img_27_Template, 1, 1, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.game.playerName1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.game.playerName2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 8, ctx_r9.wTime$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 10, ctx_r9.bTime$));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.getPoints("WHITE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r9.getPoints("BLACK"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.getTakenPieces("BLACK"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.getTakenPieces("WHITE"));
        }
      }

      function GameComponent_div_84_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_84_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r34.changeTab("moves");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "views.game.tabs.moves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_84_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r36.changeTab("chat");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "views.game.tabs.chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GameComponent_div_84_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r37.changeTab("video");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "views.game.tabs.video");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r10.tab === "moves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r10.tab === "chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx_r10.tab === "video");
        }
      }

      function GameComponent_div_85_div_1_div_1_div_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var move_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](", TAKES=", move_r43.takes, "");
        }
      }

      function GameComponent_div_85_div_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameComponent_div_85_div_1_div_1_div_1_span_4_Template, 2, 1, "span", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var move_r43 = ctx.$implicit;
          var ind_r44 = ctx.index;

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate4"](" ", ctx_r42.game.history.length - ind_r44, " - ", move_r43.note, " - posOri=", move_r43.posOri, ", posDes=", move_r43.posDes, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - (", move_r43.piece.color, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", move_r43.takes);
        }
      }

      function GameComponent_div_85_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_85_div_1_div_1_div_1_Template, 5, 6, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r41.game.history.slice().reverse());
        }
      }

      function GameComponent_div_85_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_85_div_1_div_1_Template, 2, 1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.game == null ? null : ctx_r38.game.history);
        }
      }

      function GameComponent_div_85_div_2_div_1_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var msg_r49 = ctx.$implicit;

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r49.owner === ctx_r48.yourColor ? "(me): " : "(" + (ctx_r48.yourColor === "WHITE" ? ctx_r48.game.playerName2 : ctx_r48.game.playerName1) + "): ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](msg_r49.text);
        }
      }

      function GameComponent_div_85_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_85_div_2_div_1_p_1_Template, 5, 2, "p", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r47.game.chat);
        }
      }

      function GameComponent_div_85_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_85_div_2_div_1_Template, 2, 1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r39.game == null ? null : ctx_r39.game.chat);
        }
      }

      function GameComponent_div_85_div_3_jb_btn_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jb-btn", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_div_85_div_3_jb_btn_2_Template_jb_btn_jbClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r53.video.hangup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_div_85_div_3_jb_btn_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jb-btn", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_div_85_div_3_jb_btn_3_Template_jb_btn_jbClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r55.video.makeCall();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_div_85_div_3_jb_btn_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "jb-btn", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_div_85_div_3_jb_btn_4_Template_jb_btn_jbClick_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r57.video.answerCall();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function GameComponent_div_85_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameComponent_div_85_div_3_jb_btn_2_Template, 1, 0, "jb-btn", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameComponent_div_85_div_3_jb_btn_3_Template, 1, 0, "jb-btn", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, GameComponent_div_85_div_3_jb_btn_4_Template, 1, 0, "jb-btn", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "jb-label", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "video", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "video", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.video.videoStatus !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.video.videoStatus === "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r40.canAnswerCall());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("jbValue", ctx_r40.video.statusText);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("srcObject", ctx_r40.video.localStream);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("srcObject", ctx_r40.video.remoteStream);
        }
      }

      function GameComponent_div_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameComponent_div_85_div_1_Template, 2, 1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameComponent_div_85_div_2_Template, 2, 1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameComponent_div_85_div_3_Template, 8, 6, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r11.getVideoStatusClass());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("video", ctx_r11.tab === "video");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.tab === "moves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.tab === "chat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.tab === "video");
        }
      }

      function GameComponent_div_87_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "jb-input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GameComponent_div_87_Template_jb_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r59.chatInput = $event;
          })("jbOnEnter", function GameComponent_div_87_Template_jb_input_jbOnEnter_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r61.sendMsg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "jb-btn", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_div_87_Template_jb_btn_jbClick_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r62.sendMsg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("jbAutoFocus", true)("ngModel", ctx_r12.chatInput);
        }
      }

      var GameComponent = /*#__PURE__*/function () {
        function GameComponent(store, chat, profile, router, route, modal, confirm, video) {
          var _this = this;

          _classCallCheck(this, GameComponent);

          this.store = store;
          this.chat = chat;
          this.profile = profile;
          this.router = router;
          this.route = route;
          this.modal = modal;
          this.confirm = confirm;
          this.video = video;
          this.subs = new subsink__WEBPACK_IMPORTED_MODULE_6__["SubSink"]();
          this.phase = 0; // 0=select piece, 1=select destination

          this.validMoves = []; // Valid destination nums for the selected piece

          this.reverseBoard = false; // false=white at the bottom, true=black at the bottom

          this.mode = 'play'; // play=make next move,  analyse=play both (no commit)

          this.squares = Array.from({
            length: 64
          }, function (x, i) {
            return i;
          });
          this.tab = 'moves';
          this.chatInput = '';
          this.boardSize = 500;
          this.minRightPanelWidth = 500;
          this.isSmall = false;

          this.isAdmin = function () {
            return _this.yourColor === 'WHITE';
          };

          this.isGameOn = function () {
            var _a, _b;

            return ((_a = _this.game) === null || _a === void 0 ? void 0 : _a.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE || ((_b = _this.game) === null || _b === void 0 ? void 0 : _b.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK;
          }; // White player (reverseBoard=false) --> pos = pos
          // Black player (reverseBoard=true) ---> pos = 64 - pos


          this.getPos = function (pos) {
            return !_this.reverseBoard ? pos : 63 - pos;
          }; // Returns an array of the taken pieces of the given color


          this.getTakenPieces = function (color) {
            return _this.game.history.filter(function (m) {
              return m.takes;
            }).map(function (m) {
              return _this.store.getPiece(m.takes);
            }).filter(function (p) {
              return p.color === color;
            });
          }; // Returns the points ahead for the winning player (if <= 0 an empty string is displayed)


          this.getPoints = function (color) {
            var calcPoints = function calcPoints(color) {
              return _this.getTakenPieces(color).reduce(function (acc, piece) {
                if (piece.name === 'pawn') {
                  return acc + 1;
                }

                if (piece.name === 'knight') {
                  return acc + 3;
                }

                if (piece.name === 'bishop') {
                  return acc + 3;
                }

                if (piece.name === 'rook') {
                  return acc + 5;
                }

                if (piece.name === 'queen') {
                  return acc + 9;
                }

                return 0;
              }, 0);
            };

            var points = calcPoints(color === 'WHITE' ? 'BLACK' : 'WHITE') - calcPoints(color);

            if (points > 0) {
              return '+' + points;
            }

            return '';
          }; // Calculate the remaining times for the players moves


          this.wTime$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) {
            return _this.getFormattedTime('WHITE');
          }));
          this.bTime$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(200).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_) {
            return _this.getFormattedTime('BLACK');
          }));

          this.getRemainingTime = function () {
            var _a;

            if (_this.game) {
              var expireTime = new Date(((_a = _this.game.history.getLast()) === null || _a === void 0 ? void 0 : _a.timeStamp) || _this.game.startTime);
              expireTime.addMinutes(30000); // <--- TIME FOR THE NEXT MOVE

              var now = new Date();
              return Math.round((expireTime.getTime() - now.getTime()) / 1000);
            } else {
              return 1;
            }
          };

          this.getFormattedTime = function (color) {
            if (_this.game.status === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_TIMEOUT && color === 'WHITE') {
              return 'Timeout';
            }

            if (_this.game.status === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_TIMEOUT && color === 'BLACK') {
              return 'Timeout';
            }

            var time = _this.getRemainingTime();

            if (_this.game.status !== color) {
              return '--:--:--';
            } // If not your turn, or draw.


            var sec = time % 60;
            var min = Math.floor((time - sec) / 60) % 60;
            var hour = Math.floor((time - min - sec) / 3600); // const day = Math.floor((time - hour - min - sec) / 86400);

            return "".concat(hour.pad(2), ":").concat(min.pad(2), ":").concat(sec.pad(2));
          };

          this.resetGame = function () {
            _this.store.resetGame(_this.game);

            _this.store.updateGame(_this.game);
          };

          this.revertLast = function () {
            _this.game.history.pop();

            var lastMove = _this.game.history.getLast();

            if (lastMove) {
              _this.game.board = _toConsumableArray(lastMove.nextBoard);
              _this.game.status = _this.game.status === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE ? _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK : _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE;
            } else {
              _this.store.resetGame(_this.game);
            }

            _this.store.updateGame(_this.game).then(function () {
              return _this.clearPhase();
            });
          };

          this.clearPhase = function () {
            _this.selPos = null;
            _this.validMoves = [];
            _this.phase = 0;
          };

          this.selectPiece = function (pos) {
            _this.selPos = pos;
            _this.validMoves = _this.store.getValidMoves(_this.game, pos).map(function (m) {
              return m.posDes;
            });
            _this.phase = 1;
          };

          this.selectSquare = function (pos) {
            if (_this.yourColor !== _this.game.status) {
              return console.log('NOT YOUR TURN, PLEASE WAIT');
            }

            if (_this.phase === 0) {
              // Select a piece to move
              if (_this.isYourPiece(pos)) {
                _this.selectPiece(pos);
              }
            } else {
              // Select destination
              if (_this.selPos === pos) {
                return _this.clearPhase();
              } // unselect the same piece


              var pieceAtPos = _this.store.getPiece(_this.game.board[pos]);

              if (pieceAtPos.color === _this.yourColor) {
                _this.selectPiece(pos);
              } // Selecting another of your pieces (switch selection)


              if (pieceAtPos.color !== _this.yourColor) {
                var oriPiece = _this.store.getPiece(_this.game.board[_this.selPos]); // Moving pawn


                if (_this.store.isPawnFinished(_this.selPos, pos, oriPiece)) {
                  // Select a promoted piece for a pawn
                  var modalRef = _this.modal.open(_piece_selector_modal_piece_selector_modal__WEBPACK_IMPORTED_MODULE_3__["PieceSelectorModal"], {
                    size: 'md',
                    backdrop: 'static'
                  });

                  modalRef.componentInstance.color = _this.yourColor;
                  modalRef.result.then(function (code) {
                    return _this.commitMove(_this.game, _this.selPos, pos, code);
                  })["finally"](function () {
                    return _this.clearPhase();
                  });
                } else {
                  // Make the move
                  _this.commitMove(_this.game, _this.selPos, pos).then(function () {
                    return _this.clearPhase();
                  });
                }
              }
            }
          };

          this.isSelectable = function (pos) {
            var _a;

            if (_this.yourColor !== ((_a = _this.game) === null || _a === void 0 ? void 0 : _a.status)) {
              return false;
            }

            if (_this.phase === 0) {
              return _this.isYourPiece(pos);
            } // Select piece


            if (_this.phase === 1) {
              return _this.isYourPiece(pos) || _this.validMoves.includes(pos);
            } // Select destination

          };

          this.isYourPiece = function (pos) {
            if (_this.game.board[pos] === 0) {
              return false;
            }

            var piece = _this.store.getPiece(_this.game.board[pos]);

            return piece.color === _this.yourColor;
          }; // Check if the game is finished, and prompt the (win / lose) popup to notify it


          this.checkEndState = function (game) {
            var winner, title, htmlContent;

            switch (game.status) {
              case _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_MATE:
                winner = 'WHITE';
                title = 'view.game.check_mate';
                break;

              case _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_TIMEOUT:
                winner = 'WHITE';
                title = 'view.game.win_by_timeout';
                break;

              case _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_RESIGN:
                winner = 'WHITE';
                title = 'view.game.win_by_resign';
                break;

              case _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_MATE:
                winner = 'BLACK';
                title = 'view.game.check_mate';
                break;

              case _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_TIMEOUT:
                winner = 'BLACK';
                title = 'view.game.win_by_timeout';
                break;

              case _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_RESIGN:
                winner = 'BLACK';
                title = 'view.game.win_by_resign';
                break;

              default:
                break;
            }

            if (_this.yourColor === winner) {
              htmlContent = '<h4 class="text-center">Congratulations, you won!</h4>';

              _this.confirm.open({
                title: title,
                htmlContent: htmlContent,
                yesButtonText: 'view.common.ok',
                showNo: false,
                showCancel: false
              });
            }

            if (_this.otherColor === winner) {
              htmlContent = '<h4 class="text-center">Sorry, you lost.</h4>';

              _this.confirm.open({
                title: title,
                htmlContent: htmlContent,
                yesButtonText: 'view.common.ok',
                showNo: false,
                showCancel: false
              });
            }
          };
        }

        _createClass(GameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var firstLoad, tokenId;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      firstLoad = true;
                      this.gameId = this.route.snapshot.paramMap.get('gameId');
                      tokenId = this.route.snapshot.paramMap.get('tokenId');
                      console.log('GAME ID:', this.gameId, 'TOKEN ID:', tokenId);

                      if (this.profile.user) {
                        _context.next = 8;
                        break;
                      }

                      if (!tokenId) {
                        this.unknownPlayer();
                      }

                      _context.next = 8;
                      return this.profile.anonymousLogin();

                    case 8:
                      _context.next = 10;
                      return this.profile.ready;

                    case 10:
                      // 1st game load
                      this.subs.add(this.store.getGame$(this.gameId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (game) {
                        console.log('My profile ID:', _this2.profile.user.id); // Determine who you are (player 1 or 2)

                        if (game.token1 === tokenId || game.player1 === _this2.profile.user.id) {
                          _this2.yourColor = 'WHITE';
                        }

                        if (game.token2 === tokenId || game.player2 === _this2.profile.user.id) {
                          _this2.yourColor = 'BLACK';
                        }

                        if (!_this2.yourColor) {
                          _this2.unknownPlayer();
                        } // If this is not your game, get out


                        _this2.otherColor = _this2.yourColor === 'BLACK' ? 'WHITE' : 'BLACK';
                        _this2.reverseBoard = _this2.yourColor === 'BLACK';

                        _this2.video.initSignaling(_this2.gameId, _this2.yourColor);

                        _this2.changeTab('video');
                      })); // Subscribe to game's changes

                      this.subs.add(this.store.getGame$(this.gameId).subscribe(function (game) {
                        _this2.game = Object.assign(Object.assign({}, game), {
                          id: _this2.gameId
                        }); // Join the requested game

                        if (game.token2 === tokenId) {
                          if (game.status === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].REQUESTED) {
                            _this2.store.joinGame(_this2.game);
                          }

                          if (game.player2 !== _this2.profile.user.id) {
                            _this2.store.updateGamePlayer(_this2.game);
                          }
                        }
                      })); // Subscribe to game's status changes

                      this.subs.add(this.store.getGame$(this.gameId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])(function (prev, curr) {
                        return prev.status === curr.status;
                      })).subscribe(function (game) {
                        console.log(new Date(), 'GAME STATUS CHANGE', _this2.game.status);

                        if (!firstLoad) {
                          _this2.checkEndState(game);
                        } // Check if check mate (opponent's won)


                        firstLoad = false;
                      }));
                      this.subs.add(this.video.tabChange$.subscribe(function (tab) {
                        return _this2.changeTab(tab);
                      }));
                      this.onResize(); // Constantly check the move timeout. TODO: Move this to a cloud function

                      this.subs.add(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000).subscribe(function (_) {
                        if (_this2.getRemainingTime() < 0) {
                          if (_this2.game.status === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE) {
                            _this2.game.status = _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_TIMEOUT;

                            _this2.store.updateGame(_this2.game);
                          }

                          if (_this2.game.status === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK) {
                            _this2.game.status = _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_TIMEOUT;

                            _this2.store.updateGame(_this2.game);
                          }
                        }
                      }));

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subs.unsubscribe();
            this.video.endSignaling();
          }
        }, {
          key: "onResize",
          value: function onResize() {
            var width = this.panel.nativeElement.getBoundingClientRect().width;
            var height = this.panel.nativeElement.getBoundingClientRect().height;
            this.isSmall = width < 1000; // Small screen mode

            if (this.isSmall) {
              this.boardSize = Math.round(Math.min(width, height));
            } else {
              this.boardSize = Math.round(Math.min(width - this.minRightPanelWidth, height));
            }
          }
        }, {
          key: "unknownPlayer",
          value: function unknownPlayer() {
            var _this3 = this;

            this.confirm.open({
              title: 'view.game.unknown_player',
              text: 'view.game.unknown_player',
              yesButtonText: 'view.common.ok',
              showNo: false
            }).then(function () {
              _this3.router.navigate(['home']);
            });
          }
        }, {
          key: "finishGame",
          value: function finishGame() {
            var _this4 = this;

            this.confirm.open({
              title: 'view.game.finish_tooltip',
              text: 'view.game.finish_confirmation',
              showCancel: false,
              showNo: true
            }).then(function (res) {
              if (res === 'yes') {
                _this4.store.endGame(_this4.game, _this4.profile.user.id);
              }
            }, function () {});
          }
        }, {
          key: "getStatusText",
          value: function getStatusText() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

            if (((_a = this.game) === null || _a === void 0 ? void 0 : _a.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].REQUESTED) {
              return 'Awaiting player to join the game';
            }

            if (((_b = this.game) === null || _b === void 0 ? void 0 : _b.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE) {
              if (this.yourColor === 'WHITE') {
                return 'You (white) play';
              }

              if (this.yourColor === 'BLACK') {
                return 'White plays (wait for it)';
              }
            }

            if (((_c = this.game) === null || _c === void 0 ? void 0 : _c.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK) {
              if (this.yourColor === 'WHITE') {
                return 'Black plays (wait for it)';
              }

              if (this.yourColor === 'BLACK') {
                return 'You (black) play';
              }
            }

            if (((_d = this.game) === null || _d === void 0 ? void 0 : _d.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].DRAW) {
              return 'Game finished, ended in Draw';
            }

            if (((_e = this.game) === null || _e === void 0 ? void 0 : _e.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_MATE) {
              return 'Game finished, white won by mate';
            }

            if (((_f = this.game) === null || _f === void 0 ? void 0 : _f.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_TIMEOUT) {
              return 'Game finished, white won by timeout';
            }

            if (((_g = this.game) === null || _g === void 0 ? void 0 : _g.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].WHITE_WON_BY_RESIGN) {
              return 'Game finished, white won by resignation';
            }

            if (((_h = this.game) === null || _h === void 0 ? void 0 : _h.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_MATE) {
              return 'Game finished, black won by mate';
            }

            if (((_j = this.game) === null || _j === void 0 ? void 0 : _j.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_TIMEOUT) {
              return 'Game finished, black won by timeout';
            }

            if (((_k = this.game) === null || _k === void 0 ? void 0 : _k.status) === _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["EGameStatus"].BLACK_WON_BY_RESIGN) {
              return 'Game finished, black won by resignation';
            }

            return '';
          }
        }, {
          key: "commitMove",
          value: function commitMove(game, posOri, posDes, promotedPieceCode) {
            this.store.makeMove(game, posOri, posDes, promotedPieceCode);
            this.checkEndState(game);
            return this.store.updateGame(game);
          }
        }, {
          key: "changeTab",
          value: function changeTab() {
            var newTab = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'moves';
            this.tab = newTab;

            if (this.tab === 'video' && !this.video.localStream) {
              this.video.initMedia();
            }
          } /// ------------ CHAT -------------

        }, {
          key: "sendMsg",
          value: function sendMsg() {
            this.chat.sendMsg(this.game, this.chatInput, this.yourColor);
            this.chatInput = '';
          }
        }, {
          key: "canAnswerCall",
          value: function canAnswerCall() {
            return this.video.playerNum === 1 && this.video.videoStatus === 'A<-B' || this.video.playerNum === 2 && this.video.videoStatus === 'A->B';
          }
        }, {
          key: "getVideoStatusClass",
          value: function getVideoStatusClass() {
            if (!this.video.videoStatus) {
              return 'off';
            }

            if (this.video.videoStatus === 'A==B') {
              return 'connected';
            }

            return 'connecting';
          }
        }]);

        return GameComponent;
      }();

      GameComponent.ɵfac = function GameComponent_Factory(t) {
        return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_store_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_8__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__["JbConfirmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_store_video_service__WEBPACK_IMPORTED_MODULE_12__["VideoService"]));
      };

      GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: GameComponent,
        selectors: [["jb-game"]],
        viewQuery: function GameComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
          }
        },
        hostBindings: function GameComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function GameComponent_resize_HostBindingHandler($event) {
              return ctx.onResize($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 90,
        vars: 23,
        consts: [[1, "panel"], ["panel", ""], [1, "left-side"], [1, "marks-h", 3, "show"], [1, "marks-v", 3, "show"], ["class", "board", 3, "width", "height", 4, "ngIf"], [1, "right-side"], [1, "game-info"], ["class", "admin-buttons-row marB15", 4, "ngIf"], [1, "buttons-row"], ["jbTooltip", "view.game.turn", "jbIcon", "icon-loop", 3, "jbClick"], ["jbTooltip", "view.game.analyse", "jbIcon", "icon-pencil5", 3, "jbClick", 4, "ngIf"], ["jbTooltip", "view.game.prev_move", "jbIcon", "icon-arrow-left6", 4, "ngIf"], ["jbTooltip", "view.game.next_move", "jbIcon", "icon-arrow-right3", 4, "ngIf"], ["jbTooltip", "view.game.reset", "jbIcon", "icon-flag7", 4, "ngIf"], ["jbTooltip", "view.game.finish_tooltip", "jbIcon", "icon-finish", 3, "jbClick", 4, "ngIf"], ["class", "back-btn quaternary marL20", "jbTooltip", "view.game.back_tooltip", "jbIcon", "icon-undo2", "jbText", "view.common.back", 3, "jbClick", 4, "ngIf"], ["class", "marT30", 4, "ngIf"], ["class", "tab-headers", 4, "ngIf"], ["class", "tab-body", 3, "video", "class", 4, "ngIf"], [1, "tab-footer"], ["class", "chat-input-row", 4, "ngIf"], [1, "marH5"], [1, "board"], ["class", "square", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "square", 3, "ngClass"], [1, "selector", 3, "click"], ["class", "move-mark", 3, "has-piece", 4, "ngIf"], [3, "src", 4, "ngIf"], [1, "move-mark"], [3, "src"], [1, "admin-buttons-row", "marB15"], ["jbText", "RESET", "jbType", "add", 3, "jbClick"], ["jbText", "UNDO", "jbType", "back", 3, "jbClick"], ["jbTooltip", "view.game.analyse", "jbIcon", "icon-pencil5", 3, "jbClick"], ["jbTooltip", "view.game.prev_move", "jbIcon", "icon-arrow-left6"], ["jbTooltip", "view.game.next_move", "jbIcon", "icon-arrow-right3"], ["jbTooltip", "view.game.reset", "jbIcon", "icon-flag7"], ["jbTooltip", "view.game.finish_tooltip", "jbIcon", "icon-finish", 3, "jbClick"], ["jbTooltip", "view.game.back_tooltip", "jbIcon", "icon-undo2", "jbText", "view.common.back", 1, "back-btn", "quaternary", "marL20", 3, "jbClick"], [1, "marT30"], [1, "d-flex"], [1, "flex-1", "text-center"], [1, "d-flex", "game-points"], [1, "d-flex", "game-points", "marB10"], [1, "taken-pieces"], [3, "src", 4, "ngFor", "ngForOf"], [1, "tab-headers"], ["translate", "", 1, "tab-header", 3, "click"], [1, "tab-body"], [4, "ngIf"], ["style", "font-family: monospace", 4, "ngIf"], [2, "font-family", "monospace"], [4, "ngFor", "ngForOf"], [1, "video-buttons"], ["jbText", "Hang Up", 3, "jbClick", 4, "ngIf"], ["jbText", "Make Call", 3, "jbClick", 4, "ngIf"], ["jbText", "Answer Call", 3, "jbClick", 4, "ngIf"], ["jbText", "Status", 1, "padL15", "value-inline", 3, "jbValue"], ["playsinline", "", "autoplay", "", "muted", "", 1, "local-video", 3, "srcObject"], ["playsinline", "", "autoplay", "", 1, "remote-video", 3, "srcObject"], ["jbText", "Hang Up", 3, "jbClick"], ["jbText", "Make Call", 3, "jbClick"], ["jbText", "Answer Call", 3, "jbClick"], [1, "chat-input-row"], [1, "flat", "w-100", "padR10", 3, "jbAutoFocus", "ngModel", "ngModelChange", "jbOnEnter"], ["jbType", "update-icon", 3, "jbClick"]],
        template: function GameComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "c");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "e");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "f");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "h");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "h");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "g");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "f");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "e");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "d");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "c");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "6");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "7");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "8");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, GameComponent_div_71_Template, 2, 5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, GameComponent_div_74_Template, 3, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "jb-btn", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("jbClick", function GameComponent_Template_jb_btn_jbClick_76_listener() {
              return ctx.reverseBoard = !ctx.reverseBoard;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, GameComponent_jb_btn_77_Template, 1, 0, "jb-btn", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](78, GameComponent_jb_btn_78_Template, 1, 0, "jb-btn", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, GameComponent_jb_btn_79_Template, 1, 0, "jb-btn", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, GameComponent_jb_btn_80_Template, 1, 0, "jb-btn", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, GameComponent_jb_btn_81_Template, 1, 0, "jb-btn", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, GameComponent_jb_btn_82_Template, 1, 0, "jb-btn", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, GameComponent_div_83_Template, 28, 12, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, GameComponent_div_84_Template, 7, 6, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, GameComponent_div_85_Template, 4, 7, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](87, GameComponent_div_87_Template, 3, 2, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-small", ctx.isSmall);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", !ctx.reverseBoard);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.reverseBoard);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.boardSize, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", !ctx.reverseBoard);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.boardSize, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("show", ctx.reverseBoard);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isGameOn());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.game);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tab === "chat");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.getStatusText());
          }
        },
        directives: [jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__["ShowDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__["JbBtnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__["JbLabelComponent"], jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__["JbInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]],
        styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 100px;\n  left: 30px;\n  bottom: 30px;\n  right: 30px;\n}\n.panel[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.panel[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  flex: 1;\n  display: flex;\n  flex-flow: column;\n}\n.panel[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .buttons-row[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n  border-bottom: 1px solid #d6d6d6;\n}\n.panel[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .buttons-row[_ngcontent-%COMP%]   jb-btn.back-btn[_ngcontent-%COMP%] {\n  float: right;\n}\n.panel[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.panel.is-small[_ngcontent-%COMP%] {\n  display: block;\n}\n.panel.is-small[_ngcontent-%COMP%]   .left-side[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.panel.is-small[_ngcontent-%COMP%]   .right-side[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  border: 1px solid black;\n  border-radius: 2px;\n  cursor: pointer;\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%] {\n  width: 12.5%;\n  height: 12.5%;\n  display: inline-block;\n}\n.board[_ngcontent-%COMP%]   .square.white[_ngcontent-%COMP%] {\n  background: white;\n}\n.board[_ngcontent-%COMP%]   .square.black[_ngcontent-%COMP%] {\n  background: #139d9f;\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%] {\n  border: 3px solid transparent;\n  height: 100%;\n  position: relative;\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .selector.selected[_ngcontent-%COMP%] {\n  border: 3px solid #57c16f;\n  background: rgba(87, 193, 111, 0.6);\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .selector.is-selectable[_ngcontent-%COMP%]:hover {\n  border: 3px solid #57c16f;\n  background: rgba(87, 193, 111, 0.3);\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]   .move-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 32%;\n  left: 32%;\n  right: 32%;\n  bottom: 32%;\n  border-radius: 100%;\n  background: rgba(128, 128, 128, 0.2);\n  z-index: 1;\n}\n.board[_ngcontent-%COMP%]   .square[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]   .move-mark.has-piece[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: -1px;\n  border-radius: 3px;\n  border: 4px dashed rgba(128, 128, 128, 0.4);\n  background: transparent;\n}\n.board[_ngcontent-%COMP%]   .square.black[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]   .move-mark[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n}\n.board[_ngcontent-%COMP%]   .square.black[_ngcontent-%COMP%]   .selector[_ngcontent-%COMP%]   .move-mark.has-piece[_ngcontent-%COMP%] {\n  border: 4px dashed rgba(255, 255, 255, 0.6);\n  background: transparent;\n}\n.marks-h[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -17px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  font-size: 12px;\n  color: #bbbbbb;\n}\n.marks-h[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.marks-v[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: flex-end;\n  font-size: 12px;\n  left: -12px;\n  color: #bbbbbb;\n}\n.marks-v[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.game-points[_ngcontent-%COMP%] {\n  font-family: monospace;\n}\n.taken-pieces[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.taken-pieces[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 28px;\n  margin: 0 -1px;\n}\n.tab-headers[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: flex;\n}\n.tab-headers[_ngcontent-%COMP%]   .tab-header[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 5px 15px;\n  text-align: center;\n  border: 1px solid black;\n  border-bottom: none;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n  cursor: pointer;\n  color: #fff;\n  background: #139d9f;\n}\n.tab-headers[_ngcontent-%COMP%]   .tab-header.selected[_ngcontent-%COMP%] {\n  background: #18cacd;\n}\n.tab-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid black;\n  padding: 20px;\n  background: rgba(19, 157, 159, 0.25);\n  position: relative;\n}\n.tab-body.video[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  background: #2c2c2c;\n}\n.tab-body.video[_ngcontent-%COMP%]   .video-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 40px;\n  padding: 2px;\n  background: black;\n}\n.tab-body.video[_ngcontent-%COMP%]   .local-video[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 30%;\n  z-index: 1;\n  border-top: 1px solid white;\n  border-left: 1px solid white;\n  border-top-left-radius: 6px;\n}\n.tab-body.video[_ngcontent-%COMP%]   .remote-video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 40px);\n}\n.tab-body.video.off[_ngcontent-%COMP%] {\n  background: red;\n  border: none;\n  border-radius: 0;\n  width: 100%;\n  height: 100%;\n}\n.tab-footer[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  border-top: none;\n  min-height: 22px;\n  padding: 0;\n  background: rgba(19, 157, 159, 0.25);\n}\n.chat-input-row[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ0EsZ0ZBQUE7QUFDQSxnRkFBQTtBQXdCQTtFQUFhLHdCQUFBO0VBQTBCLGlDQUFBO0FDeER2QztBQUhBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUtGO0FBSkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQU1KO0FBSkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFNSjtBQUxJO0VBQ0Usb0JBQUE7RUFDQSxnQ0FBQTtBQU9OO0FBTk07RUFBa0IsWUFBQTtBQVN4QjtBQVBJO0VBQVksT0FBQTtBQVVoQjtBQVJFO0VBQ0UsY0FBQTtBQVVKO0FBVEk7RUFBYSxtQkFBQTtBQVlqQjtBQVhJO0VBQWMsZUFBQTtBQWNsQjtBQVBBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVVGO0FBVEU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBV0o7QUFWSTtFQUFVLGlCQUFBO0FBYWQ7QUFaSTtFQUFVLG1CQUFBO0FBZWQ7QUFkSTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBZ0JOO0FBZk07RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQlI7QUFmTTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7QUFpQlI7QUFmTTtFQUNFLHlCQUFBO0VBQ0EsbUNBQUE7QUFpQlI7QUFmTTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FBaUJSO0FBWlE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBRUEsMkNBQUE7RUFDQSx1QkFBQTtBQWFWO0FBUEk7RUFDRSxvQ0FBQTtBQVNOO0FBUk07RUFFRSwyQ0FBQTtFQUNBLHVCQUFBO0FBU1I7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtGO0FBSkU7RUFBSSxrQkFBQTtBQU9OO0FBTEE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFRRjtBQVBFO0VBQUksa0JBQUE7QUFVTjtBQU5BO0VBQWUsc0JBQUE7QUFVZjtBQVRBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFZRjtBQVhFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBYUo7QUFUQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtBQVlGO0FBWEU7RUFDRSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLFdEbEpjO0VDbUpkLG1CQUFBO0FBYUo7QUFaSTtFQUFhLG1CRDNKRztBQzBLcEI7QUFaQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBZUY7QUFkRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFnQko7QUFmSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWlCTjtBQWZJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBaUJOO0FBZkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBaUJOO0FBZkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFpQk47QUFiQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQWdCRjtBQWJBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQWdCRiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqIE1haW4gQ29sb3JzICoqKioqKioqKioqXG4kcHJpbWFyeV9jb2xvciAgICA6ICMxOGNhY2Q7XG4kc2Vjb25kYXJ5X2NvbG9yICA6ICM1N2MxNmY7XG4kdGVydGlhcnlfY29sb3IgICA6ICNGMTdCM0Y7XG4kcXVhdGVybmFyeV9jb2xvciA6ICMzZjhjY2E7XG4kd2FybmluZ19jb2xvciAgICA6ICNlODRlM2E7XG4kZXh0cmFfY29sb3IgICAgICA6ICNhNzY2YjI7XG5cbiR3aGl0ZSAgICAgICAgICA6ICNmZmY7XG4kYmxhY2sgICAgICAgICAgOiAjMDAwO1xuJGdyZXkgICAgICAgICAgIDogIzkyOTI5MjtcbiRsaWdodC1ncmF5ICAgICA6ICNlM2UzZTM7XG4kbGlnaHRlci1ncmF5ICAgOiAjZjVmNWY1O1xuJHRleHQtY29sb3IgICAgIDogIzUyNTI1NDtcbiRvcHRpb25hbC1jb2xvciA6ICNjY2M7ICAgICAgIC8vIChib290c3RyYXAgZGVmYXVsdCAtICRpbnB1dC1ib3JkZXIpXG4kZGlzYWJsZWQtY29sb3IgOiAjYTBhMGEwO1xuJGZvY3VzZWQtY29sb3IgIDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAyMCUpO1xuJHJlcXVpcmVkLWNvbG9yIDogJHByaW1hcnlfY29sb3I7XG4kdmFsaWQtY29sb3IgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRpbnZhbGlkLWNvbG9yICA6ICR3YXJuaW5nX2NvbG9yO1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjYzBjMGMwO1xuJHNwZWNpYWwtbGluay1jb2xvcjogJHByaW1hcnlfY29sb3I7XG5cbi8vICoqKioqKioqKiBTaGVsbCAqKioqKioqKioqKlxuJG5hdmJhci1oZWlnaHQgIDogNzJweDsgICAgICAvLyBIZWlnaHQgb2YgdGhlIGhlYWRlclxuJG1lbnUtd2lkdGggICAgIDogNTVweDsgICAgICAvLyBXaWR0aCBvZiB0aGUgY29sbGFwc2VkIG1lbnVcbiRtZW51LWV4cC13aWR0aCA6IDIwMHB4OyAgICAgLy8gV2lkdGggb2YgdGhlIGV4cGFuZGVkIG1lbnUgKHRvdGFsID0gJG1lbnUtd2lkdGggKyAkbWVudS1leHAtd2lkdGgpXG5cbi8vICoqKioqKioqKiBIZWFkZXIgTmF2YmFyICoqKioqKioqKioqXG4kbmF2LWJnLWNvbG9yICAgICAgOiAkcHJpbWFyeV9jb2xvcjsgICAgICAvLyBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBuYXZiYXJcbiRuYXYtY29sb3IgICAgICAgICA6ICR3aGl0ZTsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgdGV4dFxuJG5hdi1saW5rLWNvbG9yICAgIDogJHdoaXRlOyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciB0ZXh0IG9mIHRoZSBsaW5rc1xuJG5hdi1ob3Zlci1jb2xvciAgIDogZGFya2VuKCR3aGl0ZSwgMTAlKTsgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciBpY29ucyB3aGVuIGhvdmVyaW5nXG4kbWF4LWxvZ28td2lkdGggICAgOiAzMDBweDsgICAgICAgICAgICAgICAvLyBNYXggc2l6ZSBvZiB0aGUgbG9nbyBpbiB0aGUgbmF2YmFyXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiAgQm9vdHN0cmFwIHRoZW1lIG92ZXJ3cml0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKiogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL3Njc3MvX3ZhcmlhYmxlcy5zY3NzICoqKioqKi9cbiRwcmltYXJ5ICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJHNlY29uZGFyeSAgICAgIDogJHNlY29uZGFyeV9jb2xvcjtcbiRzdWNjZXNzICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGluZm8gICAgICAgICAgIDogJHF1YXRlcm5hcnlfY29sb3I7XG4kd2FybmluZyAgICAgICAgOiAkZXh0cmFfY29sb3I7XG4kZGFuZ2VyICAgICAgICAgOiAkd2FybmluZ19jb2xvcjtcbiRsaWdodCAgICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGRhcmsgICAgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kZXJyb3ItY29sb3IgICAgOiAkd2FybmluZ19jb2xvcjtcbiRzdWNjZXNzLWNvbG9yICA6ICRwcmltYXJ5X2NvbG9yO1xuJGxpbmstY29sb3IgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCA1JSk7XG4kYm9keS1jb2xvciAgICAgOiAkdGV4dC1jb2xvcjtcbiRib2R5LWJnICAgICAgICA6ICNlYmVmZjI7XG5cbiRuYXZiYXItZGFyay1jb2xvciAgICAgICAgICAgICAgOiAkd2hpdGU7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3IgICAgICAgIDogcmdiYSgkd2hpdGUsIC43NSk7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICAgICAgIDogcmdiYSgkd2hpdGUsIC44MCk7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3IgICAgIDogcmdiYSgkd2hpdGUsIC4yNSk7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3IgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3IgIDogJHdoaXRlO1xuXG4vLyAtLS0tLS0gR2xvYmFscyAtLS0tLS1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ1dGLVNhbnMtTSc7IHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvUHVibGljU2Fucy1NZWRpdW0udHRmJyk7IH1cbiRmb250LWZhbWlseS1iYXNlOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbi8vJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogbW9ub3NwYWNlO1xuJGZvbnQtc2l6ZS1iYXNlOiAwLjg3NXJlbTsgLy8gMTRweDsgKGRlZmF1bHQgMXJlbSA9IDE2cHgpXG4kZm9udC13ZWlnaHQtYmFzZTogNDAwO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzIC0gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4xL2xheW91dC9vdmVydmlldy8/c291cmNlPXBvc3RfcGFnZSNyZXNwb25zaXZlLWJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNzY4cHgsIG1kOiA5OTJweCwgbGc6IDEyMDBweCwgeGw6IDE2MDBweCk7XG5cbi8vIE1vZGFsIHNpemVzXG4vLyRtb2RhbC14bDogIDExNDBweDtcbiRtb2RhbC1sZzogIDkwMHB4OyAvLyBEZWZhdWx0PTgwMFxuJG1vZGFsLW1kOiAgNjAwcHg7IC8vIERlZmF1bHQ9NTAwXG4kbW9kYWwtc206ICA0MDBweDsgLy8gRGVmYXVsdD0zMDBcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogMjVweDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwO1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDA7XG5cblxuLy8gWiBwb3NpdGlvbiBmb3IgbW9kYWxzXG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAxMDQwOyAvLyAxMDQwO1xuJHppbmRleC1tb2RhbDogICAgICAgICAgMTA1MDsgLy8gMTA1MDtcblxuLy8gQm9vdHN0cmFwIFRvb2x0aXBzICgrIG5nYiBUb29sdGlwcylcbiR6aW5kZXgtdG9vbHRpcDogNTEwMDsgIC8vIFNob3cgdG9vbHRpcHMgb3ZlciBuYXZiYXIgYW5kIG1lbnVcbiR0b29sdGlwLWJnOiBkYXJrZW4oJHF1YXRlcm5hcnlfY29sb3IsIDUlKTtcbiR0b29sdGlwLW9wYWNpdHk6IDAuOTtcbi8vJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcbi8vJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHg7XG4vLyR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZTtcbi8vJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXM7XG4vLyR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbTtcbi8vJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW07XG4vLyR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDA7XG4vLyR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtO1xuLy8kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbTtcbi8vJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmc7XG5cbi8vIEJvb3RzdHJhcCBQb3BvdmVyc1xuJHBvcG92ZXItYmc6IGRhcmtlbigkcXVhdGVybmFyeV9jb2xvciwgNSUpO1xuLy8kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtO1xuLy8kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweDtcbi8vJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aDtcbi8vJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKTtcbi8vJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGc7XG4vLyRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMik7XG4vLyRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpO1xuLy8kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XG4vLyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtO1xuLy8kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW07XG4vLyRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yO1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xuLy8kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtO1xuLy8kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbTtcbi8vJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmc7XG4vLyRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpO1xuXG5cbiIsIkBpbXBvcnQgJ3NyYy9zY3NzL2NvbmZpZy92YXJpYWJsZXMnO1xuXG4ucGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwcHg7XG4gIGxlZnQ6IDMwcHg7XG4gIGJvdHRvbTogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIC5sZWZ0LXNpZGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIC5yaWdodC1zaWRlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIC5idXR0b25zLXJvdyB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDZkNmQ2O1xuICAgICAgamItYnRuLmJhY2stYnRuIHsgZmxvYXQ6IHJpZ2h0OyB9XG4gICAgfVxuICAgIC50YWItYm9keSB7IGZsZXg6IDE7IH1cbiAgfVxuICAmLmlzLXNtYWxsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAubGVmdC1zaWRlIHsgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICAgIC5yaWdodC1zaWRlIHsgcGFkZGluZy1sZWZ0OiAwOyB9XG4gIH1cbn1cblxuXG5cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC5zcXVhcmUge1xuICAgIHdpZHRoOiAxMi41JTtcbiAgICBoZWlnaHQ6IDEyLjUlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAmLndoaXRlIHsgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgICAmLmJsYWNrIHsgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAxMCUpOyB9XG4gICAgLnNlbGVjdG9ye1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKCRzZWNvbmRhcnlfY29sb3IsIDEpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRzZWNvbmRhcnlfY29sb3IsIDAuNik7XG4gICAgICB9XG4gICAgICAmLmlzLXNlbGVjdGFibGU6aG92ZXIge1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKCRzZWNvbmRhcnlfY29sb3IsIDEpO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRzZWNvbmRhcnlfY29sb3IsIDAuMyk7XG4gICAgICB9XG4gICAgICAubW92ZS1tYXJrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDMyJTtcbiAgICAgICAgbGVmdDogMzIlO1xuICAgICAgICByaWdodDogMzIlO1xuICAgICAgICBib3R0b206IDMyJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYShncmF5LCAwLjIpO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAvL2JhY2tncm91bmQ6IHJnYmEoJHByaW1hcnlfY29sb3IsIDAuNCk7XG4gICAgICAgIC8vYmFja2dyb3VuZDogcmdiYSgkc2Vjb25kYXJ5X2NvbG9yLCAwLjQpO1xuICAgICAgICAvL2JvcmRlcjogOHB4IHNvbGlkIHJnYmEoJHByaW1hcnlfY29sb3IsIDAuNik7XG5cbiAgICAgICAgJi5oYXMtcGllY2Uge1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBtYXJnaW46IC0xcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgIC8vYm9yZGVyOiA0cHggZGFzaGVkIGxpZ2h0ZW4oJHByaW1hcnlfY29sb3IsIDUlKTtcbiAgICAgICAgICBib3JkZXI6IDRweCBkYXNoZWQgcmdiYShncmF5LCAwLjQpO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLmJsYWNrIC5zZWxlY3RvciAubW92ZS1tYXJrIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEod2hpdGUsIDAuMik7XG4gICAgICAmLmhhcy1waWVjZSB7XG4gICAgICAgIC8vYm9yZGVyOiA0cHggZGFzaGVkIGxpZ2h0ZW4oJHByaW1hcnlfY29sb3IsIDUlKTtcbiAgICAgICAgYm9yZGVyOiA0cHggZGFzaGVkIHJnYmEod2hpdGUsIDAuNik7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi5tYXJrcy1oIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xN3B4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICNiYmJiYmI7XG4gIGkgeyBmb250LXN0eWxlOiBub3JtYWw7IH1cbn1cbi5tYXJrcy12IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxlZnQ6IC0xMnB4O1xuICBjb2xvcjogI2JiYmJiYjtcbiAgaSB7IGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxufVxuXG5cbi5nYW1lLXBvaW50cyB7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IH1cbi50YWtlbi1waWVjZXMge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwIC0xcHg7XG4gIH1cbn1cblxuLnRhYi1oZWFkZXJzIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgLnRhYi1oZWFkZXIge1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAxMCUpO1xuICAgICYuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAkcHJpbWFyeV9jb2xvcjsgfVxuICB9XG59XG4udGFiLWJvZHkge1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAxMCUpLCAwLjI1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmLnZpZGVvIHtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZDogIzJjMmMyYzs7XG4gICAgLnZpZGVvLWJ1dHRvbnMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgfVxuICAgIC5sb2NhbC12aWRlbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICB9XG4gICAgLnJlbW90ZS12aWRlbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDQwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIH1cbiAgICAmLm9mZiB7XG4gICAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG4udGFiLWZvb3RlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wOiBub25lO1xuICBtaW4taGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKGRhcmtlbigkcHJpbWFyeV9jb2xvciwgMTAlKSwgMC4yNSk7XG59XG5cbi5jaGF0LWlucHV0LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'jb-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.scss']
          }]
        }], function () {
          return [{
            type: _core_store_store_service__WEBPACK_IMPORTED_MODULE_2__["StoreService"]
          }, {
            type: _core_store_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]
          }, {
            type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_8__["JbProfileService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]
          }, {
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
          }, {
            type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_11__["JbConfirmService"]
          }, {
            type: _core_store_video_service__WEBPACK_IMPORTED_MODULE_12__["VideoService"]
          }];
        }, {
          panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['panel', {
              "static": true
            }]
          }],
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize', ['$event']]
          }]
        });
      })();
      /***/

    },

    /***/
    "BVtM":
    /*!*********************************************!*\
      !*** ./src/app/core/store/video.service.ts ***!
      \*********************************************/

    /*! exports provided: VideoService */

    /***/
    function BVtM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VideoService", function () {
        return VideoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/common/jb-profile.service */
      "i0JM");
      /* harmony import */


      var _core_store_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/store/store.service */
      "7w41");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var jb_ui_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! jb-ui-lib */
      "tHpM");
      /*** Player 1 calls player 2:
       - Both are idle: video.status = '';
       - Player 1 makes a call changing the ----> video.status = 'A-> ';
       - Player 2 detects that 1 is calling, and starts ringing. It changes the ----> video.status = 'A->B';
       - Player 2 answers the call, changing the ----> video.status = 'A>>B'.
       - ICE Candidate gathering process happens for Player 1
       - Player 1 detects that and the WebRTC process starts -----> video.offerSDP = 'xxxx'
       - ICE Candidate gathering process happens for Player 2
       - Player 2 detects the offer SDP, and generates answer ----> video.answerSDP = 'xxxx'
       - Once the WebRTC is ready (ontrack) the remote stream is displayed on the html.
       Player 1 detects it and updates the status ----> video.status = 'A==B';
       - Player 1 stops the call updating ----> video.status = '    ';
       - Player 2 detects it and stops the call too.
       */

      /*** Player 1 calls, but player 2 rejects:
       - Both are idle: video.status = '';
       - Player 1 makes a call changing the ----> video.status = 'A-> ';
       - Player 2 detects that 1 is calling, and starts ringing. It changes the ----> video.status = 'A->B';
       - Player 2 rejects the call, changing the ----> video.status = '    '.
       - Player 1 detects that and stops the call
       */


      var VideoService = /*#__PURE__*/function () {
        function VideoService(profile, store, afAuth, afs, growl, confirm) {
          var _this5 = this;

          _classCallCheck(this, VideoService);

          this.profile = profile;
          this.store = store;
          this.afAuth = afAuth;
          this.afs = afs;
          this.growl = growl;
          this.confirm = confirm;
          this.CONSTRAINTS = {
            audio: true,
            video: true
          };
          this.PEER_CONFIG = {
            iceServers: [{
              urls: 'stun:stun.l.google.com:19302'
            }, {
              urls: 'stun:stun1.1.google.com:19302'
            }, {
              urls: 'stun:stun2.1.google.com:19302'
            }]
          };
          this.OFFER_OPTIONS = {
            iceRestart: true,
            offerToReceiveAudio: true,
            offerToReceiveVideo: true
          };
          this.RTCPeerConnection = window['RTCPeerConnection'] || window['mozRTCPeerConnection'] || window['webkitRTCPeerConnection'];
          this.statusText = 'Off';
          this.videoStatus = '';
          /***
          ''     No call
          'A-> ' A calling B              ' <-B' B calling A
          'A->B' A calling B (Ringing)    'A<-B' B calling A (Ringing)
          'A>>B' WebRTC connecting        'A<<B' WebRTC connecting
          'A==B' Connected   */

          this.myICECandidates = [];
          this.sdpPromise = new Promise(function (resolve) {
            return _this5.sdpPromiseResolve = resolve;
          });
          this.tabChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('moves'); // To force the UI to change the video tab
        }

        _createClass(VideoService, [{
          key: "initSignaling",
          value: function initSignaling(gameId, yourColor) {
            var _this6 = this;

            this.playerNum = yourColor === 'WHITE' ? 1 : 2;
            this.gameDoc = this.afs.doc('games/' + gameId);
            var game$ = this.store.getGame$(gameId);

            if (!this.sub1) {
              this.sub1 = game$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('videoStatus'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (video) {
                return _this6.videoStatusChange(video);
              });
            }

            if (!this.sub2) {
              this.sub2 = game$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('offerSDP'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (offer) {
                return _this6.offerChanged(offer);
              });
            }

            if (!this.sub3) {
              this.sub3 = game$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('answerSDP'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (answer) {
                return _this6.answerChanged(answer);
              });
            }
          }
        }, {
          key: "endSignaling",
          value: function endSignaling() {
            if (this.sub1) {
              this.sub1.unsubscribe();
            }

            if (this.sub2) {
              this.sub2.unsubscribe();
            }

            if (this.sub3) {
              this.sub3.unsubscribe();
            }
          }
        }, {
          key: "offerChanged",
          value: function offerChanged(offerSDP) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!offerSDP) {
                        _context2.next = 7;
                        break;
                      }

                      if (!(this.playerNum === 1 && this.videoStatus === 'A<<B')) {
                        _context2.next = 4;
                        break;
                      }

                      _context2.next = 4;
                      return this.answerOffer(offerSDP);

                    case 4:
                      if (!(this.playerNum === 2 && this.videoStatus === 'A>>B')) {
                        _context2.next = 7;
                        break;
                      }

                      _context2.next = 7;
                      return this.answerOffer(offerSDP);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "answerChanged",
          value: function answerChanged(answerSDP) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!answerSDP) {
                        _context3.next = 7;
                        break;
                      }

                      if (!(this.playerNum === 1 && this.videoStatus === 'A>>B')) {
                        _context3.next = 4;
                        break;
                      }

                      _context3.next = 4;
                      return this.acknowledgeAnswer(answerSDP);

                    case 4:
                      if (!(this.playerNum === 2 && this.videoStatus === 'A<<B')) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 7;
                      return this.acknowledgeAnswer(answerSDP);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "videoStatusChange",
          value: function videoStatusChange(status) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var prevStatus;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      prevStatus = this.videoStatus;

                      if (prevStatus !== status) {
                        console.log(new Date(), "VIDEO status ".concat(prevStatus, " ===> '").concat(status, "'"));
                      }

                      this.statusText = status; // Player 1 --- calling ---> Player 2

                      if (!(this.playerNum === 1)) {
                        _context4.next = 9;
                        break;
                      }

                      if (status === 'A-> ') {
                        this.statusText += ' - You are making a call';
                      }

                      if (status === 'A->B') {
                        this.statusText += ' - The other end is RINGING';
                      }

                      if (!(status === 'A>>B' && prevStatus === 'A->B')) {
                        _context4.next = 9;
                        break;
                      }

                      _context4.next = 9;
                      return this.startOffer();

                    case 9:
                      if (this.playerNum === 2) {
                        if (status === 'A-> ') {
                          this.updateStatus('A->B');
                          this.statusText += ' - New Incoming Call';
                        } // Start ringing


                        if (status === 'A->B') {
                          this.statusText += ' - RING RING! You are receiving a call. Want to answer?';
                          this.showRingAlert();
                        }
                      } // Player 2 --- calling ---> Player 1


                      if (!(this.playerNum === 2)) {
                        _context4.next = 16;
                        break;
                      }

                      if (status === ' <-B') {
                        this.statusText += ' - You are making a call';
                      }

                      if (status === 'A<-B') {
                        this.statusText += ' - The other end is RINGING';
                      }

                      if (!(status === 'A<<B' && prevStatus === 'A<-B')) {
                        _context4.next = 16;
                        break;
                      }

                      _context4.next = 16;
                      return this.startOffer();

                    case 16:
                      if (this.playerNum === 1) {
                        if (status === ' <-B') {
                          this.updateStatus('A<-B');
                          this.statusText += ' - New Incoming Call';
                        } // Start ringing


                        if (status === 'A<-B') {
                          this.statusText += ' - RING RING! You are receiving a call. Want to answer?';
                          this.showRingAlert();
                        }
                      } // Init the timeout when starting the webrtc connection


                      if (prevStatus === 'A->B' && status === 'A>>B' || prevStatus === 'A<-B' && status === 'A<<B') {
                        this.connexionTimeout = setInterval(function () {
                          _this7.growl.error('Something went wrong, please try again later');

                          _this7.hangup();
                        }, 10 * 1000);
                      }

                      if (status === 'A>>B') {
                        this.statusText += ' - Connecting...';
                      }

                      if (status === 'A<<B') {
                        this.statusText += ' - Connecting...';
                      }

                      if (status === 'A==B') {
                        this.statusText += ' - On Call';

                        if (this.connexionTimeout) {
                          clearInterval(this.connexionTimeout);
                        }
                      }

                      if (status === '') {
                        this.statusText += 'Off';
                      }

                      if (prevStatus !== '' && status === '') {
                        this.statusText += ' - The call has been terminated';
                        this.terminate();
                      }

                      this.videoStatus = status;

                    case 24:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "makeCall",
          value: function makeCall() {
            if (this.videoStatus !== '') {
              this.growl.error("There is another ongoing call ".concat(this.videoStatus));
              return;
            }

            this.gameDoc.update({
              videoStatus: this.playerNum === 1 ? 'A-> ' : ' <-B',
              offerSDP: null,
              answerSDP: null
            });
          }
        }, {
          key: "showRingAlert",
          value: function showRingAlert() {
            var _this8 = this;

            this.confirm.open({
              title: 'Incoming Call',
              text: 'Your opponent is sending you a video call. Do you want to answer it?',
              yesButtonText: 'Yes, answer the call',
              noButtonText: 'No, reject it',
              showNo: true
            }).then(function (res) {
              if (res === 'yes') {
                _this8.answerCall();

                _this8.tabChange$.next('video');
              }

              if (res === 'no') {
                _this8.hangup();
              }
            });
          }
        }, {
          key: "answerCall",
          value: function answerCall() {
            if (this.videoStatus === 'A<-B' && this.playerNum === 1) {
              this.updateStatus('A<<B');
            }

            if (this.videoStatus === 'A->B' && this.playerNum === 2) {
              this.updateStatus('A>>B');
            }
          }
        }, {
          key: "hangup",
          value: function hangup() {
            // if (this.videoStatus === '') { console.warn('No call to hang up'); return }
            this.terminate();
            this.myICECandidates = [];
            return this.gameDoc.update({
              videoStatus: '',
              offerSDP: null,
              answerSDP: null
            });
          }
        }, {
          key: "updateStatus",
          value: function updateStatus(status) {
            return this.gameDoc.update({
              videoStatus: status
            });
          } // ------------------ WebRTC -------------------

        }, {
          key: "initMedia",
          value: function initMedia() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var tracks;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return navigator.mediaDevices.getUserMedia(this.CONSTRAINTS);

                    case 3:
                      this.localStream = _context5.sent;
                      tracks = {
                        video: this.localStream.getVideoTracks(),
                        audio: this.localStream.getAudioTracks()
                      };

                      if (tracks.video.length) {
                        console.log('Using video', tracks.video[0].label);
                      }

                      if (tracks.audio.length) {
                        console.log('Using audio', tracks.audio[0].label);
                      }

                      _context5.next = 12;
                      break;

                    case 9:
                      _context5.prev = 9;
                      _context5.t0 = _context5["catch"](0);
                      console.error('Video - initMedia() error', _context5.t0);

                    case 12:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 9]]);
            }));
          }
        }, {
          key: "initPeer",
          value: function initPeer() {
            var _this9 = this;

            if (!this.localStream) {
              this.growl.error('There is a problem with your Camera / Microphone');
            }

            this.peer = new this.RTCPeerConnection(this.PEER_CONFIG);
            this.remoteStream = new MediaStream();

            this.peer.onicecandidate = function (ev) {
              return _this9.gatherICECandidate(ev);
            };

            this.peer.oniceconnectionstatechange = function (ev) {
              return _this9.ICEConnectionChange(ev);
            };

            this.peer.ontrack = function (ev) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _this10 = this;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        return _context6.abrupt("return", ev.streams[0].getTracks().forEach(function (track) {
                          return _this10.remoteStream.addTrack(track);
                        }));

                      case 1:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              }));
            };

            this.localStream.getTracks().forEach(function (track) {
              return _this9.peer.addTrack(track, _this9.localStream);
            });
            this.sdpPromise = new Promise(function (resolve) {
              return _this9.sdpPromiseResolve = resolve;
            });
          }
        }, {
          key: "startOffer",
          value: function startOffer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var offer;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;

                      if (this.localStream) {
                        _context7.next = 4;
                        break;
                      }

                      _context7.next = 4;
                      return this.initMedia();

                    case 4:
                      if (!this.peer) {
                        this.initPeer();
                      }

                      _context7.next = 7;
                      return this.peer.createOffer(this.OFFER_OPTIONS);

                    case 7:
                      offer = _context7.sent;
                      _context7.next = 10;
                      return this.peer.setLocalDescription(offer);

                    case 10:
                      // <-- after this, ICE candidate gathering starts
                      console.log('----------- startOffer - setLocalDescription');
                      _context7.next = 16;
                      break;

                    case 13:
                      _context7.prev = 13;
                      _context7.t0 = _context7["catch"](0);
                      console.error('Video - startOffer() error', _context7.t0);

                    case 16:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 13]]);
            }));
          }
        }, {
          key: "answerOffer",
          value: function answerOffer(offerSDP) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var answer;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;

                      if (this.localStream) {
                        _context8.next = 4;
                        break;
                      }

                      _context8.next = 4;
                      return this.initMedia();

                    case 4:
                      this.initPeer();
                      _context8.next = 7;
                      return this.peer.setRemoteDescription({
                        type: 'offer',
                        sdp: offerSDP
                      });

                    case 7:
                      console.log('----------- answerOffer - setRemoteDescription');
                      _context8.next = 10;
                      return this.peer.createAnswer();

                    case 10:
                      answer = _context8.sent;
                      _context8.next = 13;
                      return this.peer.setLocalDescription(answer);

                    case 13:
                      console.log('----------- answerOffer - setLocalDescription');
                      _context8.next = 19;
                      break;

                    case 16:
                      _context8.prev = 16;
                      _context8.t0 = _context8["catch"](0);
                      console.error('Video - answerOffer() error', _context8.t0);

                    case 19:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 16]]);
            }));
          }
        }, {
          key: "acknowledgeAnswer",
          value: function acknowledgeAnswer(answerSDP) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;

                      if (this.peer) {
                        _context9.next = 4;
                        break;
                      }

                      console.error('no peerconnection');
                      return _context9.abrupt("return");

                    case 4:
                      _context9.next = 6;
                      return this.peer.setRemoteDescription({
                        type: 'answer',
                        sdp: answerSDP
                      });

                    case 6:
                      console.log('----------- answerOffer - setRemoteDescription');
                      this.sdpPromiseResolve();
                      _context9.next = 13;
                      break;

                    case 10:
                      _context9.prev = 10;
                      _context9.t0 = _context9["catch"](0);
                      console.error('Video - acknowledgeAnswer() error', _context9.t0);

                    case 13:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 10]]);
            }));
          }
        }, {
          key: "gatherICECandidate",
          value: function gatherICECandidate(ev) {
            var newICE = {
              type: 'candidate',
              candidate: null
            };

            if (ev.candidate) {
              newICE.candidate = ev.candidate.candidate;
              newICE.sdpMid = ev.candidate.sdpMid;
              newICE.sdpMLineIndex = ev.candidate.sdpMLineIndex;
            }

            console.log(new Date(), 'PLAYER', this.playerNum, ' HAS DISCOVER A NEW CANDIDATE!!!!');
            this.myICECandidates.push(newICE);
            console.log('RTCPeerConnection.iceConnectionState = ', this.peer.iceConnectionState);

            if (this.peer.iceGatheringState === 'complete') {
              console.log('ICE GATHERING COMPLETE!! sending SDP to the remote');

              if (this.videoStatus === 'A>>B') {
                if (this.playerNum === 1) {
                  this.gameDoc.update({
                    offerSDP: this.peer.localDescription.sdp
                  });
                }

                if (this.playerNum === 2) {
                  this.gameDoc.update({
                    answerSDP: this.peer.localDescription.sdp
                  });
                  this.sdpPromiseResolve();
                }
              }

              if (this.videoStatus === 'A<<B') {
                if (this.playerNum === 2) {
                  this.gameDoc.update({
                    offerSDP: this.peer.localDescription.sdp
                  });
                }

                if (this.playerNum === 1) {
                  this.gameDoc.update({
                    answerSDP: this.peer.localDescription.sdp
                  });
                  this.sdpPromiseResolve();
                }
              }
            }
          }
        }, {
          key: "ICEConnectionChange",
          value: function ICEConnectionChange(ev) {
            var _this11 = this;

            console.log('RTCPeerConnection.iceConnectionState = ', this.peer.iceConnectionState);

            if (this.peer.iceConnectionState === 'connected') {
              this.sdpPromise.then(function () {
                console.log('WebRTC Connected !');

                _this11.updateStatus('A==B');

                _this11.tabChange$.next('video');
              });
            }
          }
        }, {
          key: "terminate",
          value: function terminate() {
            var _this12 = this;

            if (this.peer) {
              this.peer.close();
              this.peer = null;
            }

            if (this.localStream) {
              this.localStream.getTracks().forEach(function (track) {
                return track.stop();
              });
              this.localStream = null;
            }

            if (this.remoteStream) {
              this.remoteStream.getTracks().forEach(function (track) {
                return track.stop();
              });
              this.remoteStream = null;
            }

            this.sdpPromise = new Promise(function (resolve) {
              return _this12.sdpPromiseResolve = resolve;
            });

            if (this.connexionTimeout) {
              clearInterval(this.connexionTimeout);
            }
          }
        }]);

        return VideoService;
      }();

      VideoService.ɵfac = function VideoService_Factory(t) {
        return new (t || VideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_store_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_8__["JbGrowlService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](jb_ui_lib__WEBPACK_IMPORTED_MODULE_8__["JbConfirmService"]));
      };

      VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: VideoService,
        factory: VideoService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VideoService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_4__["JbProfileService"]
          }, {
            type: _core_store_store_service__WEBPACK_IMPORTED_MODULE_5__["StoreService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
          }, {
            type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_8__["JbGrowlService"]
          }, {
            type: jb_ui_lib__WEBPACK_IMPORTED_MODULE_8__["JbConfirmService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VMvn":
    /*!********************************************!*\
      !*** ./src/app/core/store/chat.service.ts ***!
      \********************************************/

    /*! exports provided: ChatService */

    /***/
    function VMvn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatService", function () {
        return ChatService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/common/jb-profile.service */
      "i0JM");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");

      var ChatService = /*#__PURE__*/function () {
        function ChatService(profile, afAuth, afs) {
          _classCallCheck(this, ChatService);

          this.profile = profile;
          this.afAuth = afAuth;
          this.afs = afs;
        }

        _createClass(ChatService, [{
          key: "sendMsg",
          value: function sendMsg(game, text, owner) {
            var gameDoc = this.afs.doc('games/' + game.id);
            game.chat.push({
              order: game.chat.length + 1,
              timeMsg: new Date() + '',
              text: text,
              owner: owner
            });
            console.log('game.chat', game.chat);
            return gameDoc.update({
              chat: game.chat
            });
          }
        }]);

        return ChatService;
      }();

      ChatService.ɵfac = function ChatService_Factory(t) {
        return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_1__["JbProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]));
      };

      ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ChatService,
        factory: ChatService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _core_common_jb_profile_service__WEBPACK_IMPORTED_MODULE_1__["JbProfileService"]
          }, {
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "kgeY":
    /*!*******************************************!*\
      !*** ./src/app/pages/game/game.module.ts ***!
      \*******************************************/

    /*! exports provided: GameModule */

    /***/
    function kgeY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameModule", function () {
        return GameModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./game.component */
      "/JRT");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _piece_selector_modal_piece_selector_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./piece-selector-modal/piece-selector.modal */
      "xERD");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/core.module */
      "pKmL");

      var routes = [{
        path: '',
        component: _game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]
      }, {
        path: ':gameId',
        data: {
          noLogin: true
        },
        children: [{
          path: ':tokenId',
          data: {
            noLogin: true
          },
          component: _game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"]
        }]
      }];

      var GameModule = function GameModule() {
        _classCallCheck(this, GameModule);
      };

      GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GameModule
      });
      GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GameModule_Factory(t) {
          return new (t || GameModule)();
        },
        imports: [[_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GameModule, {
          declarations: [_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"], _piece_selector_modal_piece_selector_modal__WEBPACK_IMPORTED_MODULE_3__["PieceSelectorModal"]],
          imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_game_component__WEBPACK_IMPORTED_MODULE_1__["GameComponent"], _piece_selector_modal_piece_selector_modal__WEBPACK_IMPORTED_MODULE_3__["PieceSelectorModal"]],
            imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "xERD":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/game/piece-selector-modal/piece-selector.modal.ts ***!
      \*************************************************************************/

    /*! exports provided: PieceSelectorModal */

    /***/
    function xERD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PieceSelectorModal", function () {
        return PieceSelectorModal;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jb-ui-lib */
      "tHpM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PieceSelectorModal_img_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_2_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.selectPiece("knight");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_3_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.selectPiece("bishop");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_4_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.selectPiece("rook");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_5_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.selectPiece("queen");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_6_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.selectPiece("knight");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_7_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.selectPiece("bishop");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_8_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.selectPiece("rook");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PieceSelectorModal_img_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PieceSelectorModal_img_9_Template_img_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.selectPiece("queen");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var PieceSelectorModal = /*#__PURE__*/function () {
        function PieceSelectorModal(activeModal) {
          var _this13 = this;

          _classCallCheck(this, PieceSelectorModal);

          this.activeModal = activeModal;
          this.color = 'WHITE';

          this.selectPiece = function (piece) {
            if (_this13.color === 'WHITE') {
              switch (piece) {
                case 'rook':
                  _this13.activeModal.close(9);

                  break;

                case 'knight':
                  _this13.activeModal.close(10);

                  break;

                case 'bishop':
                  _this13.activeModal.close(11);

                  break;

                case 'queen':
                  _this13.activeModal.close(12);

                  break;
              }
            } else {
              switch (piece) {
                case 'rook':
                  _this13.activeModal.close(25);

                  break;

                case 'knight':
                  _this13.activeModal.close(26);

                  break;

                case 'bishop':
                  _this13.activeModal.close(27);

                  break;

                case 'queen':
                  _this13.activeModal.close(28);

                  break;
              }
            }
          };
        }

        _createClass(PieceSelectorModal, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PieceSelectorModal;
      }();

      PieceSelectorModal.ɵfac = function PieceSelectorModal_Factory(t) {
        return new (t || PieceSelectorModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
      };

      PieceSelectorModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PieceSelectorModal,
        selectors: [["jb-piece-selector"]],
        decls: 10,
        vars: 8,
        consts: [["jbTitle", "view.game.select_piece.header", 3, "jbClose"], [1, "modal-body"], ["src", "../../../../assets/w-knight.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/w-bishop.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/w-rook.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/w-queen.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/b-knight.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/b-bishop.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/b-rook.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/b-queen.png", 3, "click", 4, "ngIf"], ["src", "../../../../assets/w-knight.png", 3, "click"], ["src", "../../../../assets/w-bishop.png", 3, "click"], ["src", "../../../../assets/w-rook.png", 3, "click"], ["src", "../../../../assets/w-queen.png", 3, "click"], ["src", "../../../../assets/b-knight.png", 3, "click"], ["src", "../../../../assets/b-bishop.png", 3, "click"], ["src", "../../../../assets/b-rook.png", 3, "click"], ["src", "../../../../assets/b-queen.png", 3, "click"]],
        template: function PieceSelectorModal_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "jb-modal-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("jbClose", function PieceSelectorModal_Template_jb_modal_header_jbClose_0_listener() {
              return ctx.activeModal.dismiss();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PieceSelectorModal_img_2_Template, 1, 0, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PieceSelectorModal_img_3_Template, 1, 0, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PieceSelectorModal_img_4_Template, 1, 0, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PieceSelectorModal_img_5_Template, 1, 0, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PieceSelectorModal_img_6_Template, 1, 0, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PieceSelectorModal_img_7_Template, 1, 0, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PieceSelectorModal_img_8_Template, 1, 0, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PieceSelectorModal_img_9_Template, 1, 0, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "WHITE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "WHITE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "WHITE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "WHITE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "BLACK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "BLACK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "BLACK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.color === "BLACK");
          }
        },
        directives: [jb_ui_lib__WEBPACK_IMPORTED_MODULE_2__["JbModalHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
        styles: ["@font-face {\n  font-family: \"WF-Sans-M\";\n  src: url('PublicSans-Medium.ttf');\n}\n.modal-body[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 110px;\n  border: 1px solid gray;\n  border-radius: 5px;\n  padding: 6px;\n  margin: 5px 0 10px;\n}\n.modal-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 2px solid #000000;\n  padding: 5px;\n  box-shadow: #bdbdbd 5px 4px 5px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvY29uZmlnL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vcGllY2Utc2VsZWN0b3IubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ0EsZ0ZBQUE7QUFDQSxnRkFBQTtBQXdCQTtFQUFhLHdCQUFBO0VBQTBCLGlDQUFBO0FDeER2QztBQUhBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FBS0Y7QUFKRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KO0FBTEk7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7QUFPTiIsImZpbGUiOiJwaWVjZS1zZWxlY3Rvci5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKioqKioqKioqIE1haW4gQ29sb3JzICoqKioqKioqKioqXG4kcHJpbWFyeV9jb2xvciAgICA6ICMxOGNhY2Q7XG4kc2Vjb25kYXJ5X2NvbG9yICA6ICM1N2MxNmY7XG4kdGVydGlhcnlfY29sb3IgICA6ICNGMTdCM0Y7XG4kcXVhdGVybmFyeV9jb2xvciA6ICMzZjhjY2E7XG4kd2FybmluZ19jb2xvciAgICA6ICNlODRlM2E7XG4kZXh0cmFfY29sb3IgICAgICA6ICNhNzY2YjI7XG5cbiR3aGl0ZSAgICAgICAgICA6ICNmZmY7XG4kYmxhY2sgICAgICAgICAgOiAjMDAwO1xuJGdyZXkgICAgICAgICAgIDogIzkyOTI5MjtcbiRsaWdodC1ncmF5ICAgICA6ICNlM2UzZTM7XG4kbGlnaHRlci1ncmF5ICAgOiAjZjVmNWY1O1xuJHRleHQtY29sb3IgICAgIDogIzUyNTI1NDtcbiRvcHRpb25hbC1jb2xvciA6ICNjY2M7ICAgICAgIC8vIChib290c3RyYXAgZGVmYXVsdCAtICRpbnB1dC1ib3JkZXIpXG4kZGlzYWJsZWQtY29sb3IgOiAjYTBhMGEwO1xuJGZvY3VzZWQtY29sb3IgIDogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCAyMCUpO1xuJHJlcXVpcmVkLWNvbG9yIDogJHByaW1hcnlfY29sb3I7XG4kdmFsaWQtY29sb3IgICAgOiAkcHJpbWFyeV9jb2xvcjtcbiRpbnZhbGlkLWNvbG9yICA6ICR3YXJuaW5nX2NvbG9yO1xuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAjYzBjMGMwO1xuJHNwZWNpYWwtbGluay1jb2xvcjogJHByaW1hcnlfY29sb3I7XG5cbi8vICoqKioqKioqKiBTaGVsbCAqKioqKioqKioqKlxuJG5hdmJhci1oZWlnaHQgIDogNzJweDsgICAgICAvLyBIZWlnaHQgb2YgdGhlIGhlYWRlclxuJG1lbnUtd2lkdGggICAgIDogNTVweDsgICAgICAvLyBXaWR0aCBvZiB0aGUgY29sbGFwc2VkIG1lbnVcbiRtZW51LWV4cC13aWR0aCA6IDIwMHB4OyAgICAgLy8gV2lkdGggb2YgdGhlIGV4cGFuZGVkIG1lbnUgKHRvdGFsID0gJG1lbnUtd2lkdGggKyAkbWVudS1leHAtd2lkdGgpXG5cbi8vICoqKioqKioqKiBIZWFkZXIgTmF2YmFyICoqKioqKioqKioqXG4kbmF2LWJnLWNvbG9yICAgICAgOiAkcHJpbWFyeV9jb2xvcjsgICAgICAvLyBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBuYXZiYXJcbiRuYXYtY29sb3IgICAgICAgICA6ICR3aGl0ZTsgICAgICAgICAgICAgIC8vIENvbG9yIG9mIHRoZSBuYXZiYXIgdGV4dFxuJG5hdi1saW5rLWNvbG9yICAgIDogJHdoaXRlOyAgICAgICAgICAgICAgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciB0ZXh0IG9mIHRoZSBsaW5rc1xuJG5hdi1ob3Zlci1jb2xvciAgIDogZGFya2VuKCR3aGl0ZSwgMTAlKTsgLy8gQ29sb3Igb2YgdGhlIG5hdmJhciBpY29ucyB3aGVuIGhvdmVyaW5nXG4kbWF4LWxvZ28td2lkdGggICAgOiAzMDBweDsgICAgICAgICAgICAgICAvLyBNYXggc2l6ZSBvZiB0aGUgbG9nbyBpbiB0aGUgbmF2YmFyXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKiAgQm9vdHN0cmFwIHRoZW1lIG92ZXJ3cml0ZSAqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKiogaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL3Njc3MvX3ZhcmlhYmxlcy5zY3NzICoqKioqKi9cbiRwcmltYXJ5ICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJHNlY29uZGFyeSAgICAgIDogJHNlY29uZGFyeV9jb2xvcjtcbiRzdWNjZXNzICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGluZm8gICAgICAgICAgIDogJHF1YXRlcm5hcnlfY29sb3I7XG4kd2FybmluZyAgICAgICAgOiAkZXh0cmFfY29sb3I7XG4kZGFuZ2VyICAgICAgICAgOiAkd2FybmluZ19jb2xvcjtcbiRsaWdodCAgICAgICAgICA6ICRwcmltYXJ5X2NvbG9yO1xuJGRhcmsgICAgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kZXJyb3ItY29sb3IgICAgOiAkd2FybmluZ19jb2xvcjtcbiRzdWNjZXNzLWNvbG9yICA6ICRwcmltYXJ5X2NvbG9yO1xuJGxpbmstY29sb3IgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRwcmltYXJ5X2NvbG9yLCA1JSk7XG4kYm9keS1jb2xvciAgICAgOiAkdGV4dC1jb2xvcjtcbiRib2R5LWJnICAgICAgICA6ICNlYmVmZjI7XG5cbiRuYXZiYXItZGFyay1jb2xvciAgICAgICAgICAgICAgOiAkd2hpdGU7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3IgICAgICAgIDogcmdiYSgkd2hpdGUsIC43NSk7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yICAgICAgIDogcmdiYSgkd2hpdGUsIC44MCk7XG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3IgICAgIDogcmdiYSgkd2hpdGUsIC4yNSk7XG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3IgICAgICAgIDogJHByaW1hcnlfY29sb3I7XG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3IgIDogJHdoaXRlO1xuXG4vLyAtLS0tLS0gR2xvYmFscyAtLS0tLS1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJ1dGLVNhbnMtTSc7IHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udHMvUHVibGljU2Fucy1NZWRpdW0udHRmJyk7IH1cbiRmb250LWZhbWlseS1iYXNlOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnV0YtU2Fucy1NJywgc2Fucy1zZXJpZjtcbi8vJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogbW9ub3NwYWNlO1xuJGZvbnQtc2l6ZS1iYXNlOiAwLjg3NXJlbTsgLy8gMTRweDsgKGRlZmF1bHQgMXJlbSA9IDE2cHgpXG4kZm9udC13ZWlnaHQtYmFzZTogNDAwO1xuJGxpbmUtaGVpZ2h0LWJhc2U6IDEuNTtcblxuXG4vLyBHcmlkIGJyZWFrcG9pbnRzIC0gaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNC4xL2xheW91dC9vdmVydmlldy8/c291cmNlPXBvc3RfcGFnZSNyZXNwb25zaXZlLWJyZWFrcG9pbnRzXG4kZ3JpZC1icmVha3BvaW50czogKHhzOiAwLCBzbTogNzY4cHgsIG1kOiA5OTJweCwgbGc6IDEyMDBweCwgeGw6IDE2MDBweCk7XG5cbi8vIE1vZGFsIHNpemVzXG4vLyRtb2RhbC14bDogIDExNDBweDtcbiRtb2RhbC1sZzogIDkwMHB4OyAvLyBEZWZhdWx0PTgwMFxuJG1vZGFsLW1kOiAgNjAwcHg7IC8vIERlZmF1bHQ9NTAwXG4kbW9kYWwtc206ICA0MDBweDsgLy8gRGVmYXVsdD0zMDBcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogMjVweDtcbiRtb2RhbC1oZWFkZXItcGFkZGluZy15OiAwO1xuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDA7XG5cblxuLy8gWiBwb3NpdGlvbiBmb3IgbW9kYWxzXG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAxMDQwOyAvLyAxMDQwO1xuJHppbmRleC1tb2RhbDogICAgICAgICAgMTA1MDsgLy8gMTA1MDtcblxuLy8gQm9vdHN0cmFwIFRvb2x0aXBzICgrIG5nYiBUb29sdGlwcylcbiR6aW5kZXgtdG9vbHRpcDogNTEwMDsgIC8vIFNob3cgdG9vbHRpcHMgb3ZlciBuYXZiYXIgYW5kIG1lbnVcbiR0b29sdGlwLWJnOiBkYXJrZW4oJHF1YXRlcm5hcnlfY29sb3IsIDUlKTtcbiR0b29sdGlwLW9wYWNpdHk6IDAuOTtcbi8vJHRvb2x0aXAtZm9udC1zaXplOiAgICAgICAgICAgICAgICAgJGZvbnQtc2l6ZS1zbTtcbi8vJHRvb2x0aXAtbWF4LXdpZHRoOiAgICAgICAgICAgICAgICAgMjAwcHg7XG4vLyR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICR3aGl0ZTtcbi8vJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXM7XG4vLyR0b29sdGlwLXBhZGRpbmcteTogICAgICAgICAgICAgICAgIC4yNXJlbTtcbi8vJHRvb2x0aXAtcGFkZGluZy14OiAgICAgICAgICAgICAgICAgLjVyZW07XG4vLyR0b29sdGlwLW1hcmdpbjogICAgICAgICAgICAgICAgICAgIDA7XG4vLyR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgICAgICAgIC44cmVtO1xuLy8kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNHJlbTtcbi8vJHRvb2x0aXAtYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHRvb2x0aXAtYmc7XG5cbi8vIEJvb3RzdHJhcCBQb3BvdmVyc1xuJHBvcG92ZXItYmc6IGRhcmtlbigkcXVhdGVybmFyeV9jb2xvciwgNSUpO1xuLy8kcG9wb3Zlci1mb250LXNpemU6ICAgICAgICAgICAgICAgICAkZm9udC1zaXplLXNtO1xuLy8kcG9wb3Zlci1tYXgtd2lkdGg6ICAgICAgICAgICAgICAgICAyNzZweDtcbi8vJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aDtcbi8vJHBvcG92ZXItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgcmdiYSgkYmxhY2ssIC4yKTtcbi8vJHBvcG92ZXItYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGc7XG4vLyRwb3BvdmVyLWJveC1zaGFkb3c6ICAgICAgICAgICAgICAgIDAgLjI1cmVtIC41cmVtIHJnYmEoJGJsYWNrLCAuMik7XG4vLyRwb3BvdmVyLWhlYWRlci1iZzogICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpO1xuLy8kcG9wb3Zlci1oZWFkZXItY29sb3I6ICAgICAgICAgICAgICAkaGVhZGluZ3MtY29sb3I7XG4vLyRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk6ICAgICAgICAgIC41cmVtO1xuLy8kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAgICAgICAgICAuNzVyZW07XG4vLyRwb3BvdmVyLWJvZHktY29sb3I6ICAgICAgICAgICAgICAgICRib2R5LWNvbG9yO1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteTogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xuLy8kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogICAgICAgICAgICAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xuLy8kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAxcmVtO1xuLy8kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6ICAgICAgICAgICAgICAuNXJlbTtcbi8vJHBvcG92ZXItYXJyb3ctY29sb3I6ICAgICAgICAgICAgICAgJHBvcG92ZXItYmc7XG4vLyRwb3BvdmVyLWFycm93LW91dGVyLWNvbG9yOiAgICAgICAgIGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAuMDUpO1xuXG5cbiIsIkBpbXBvcnQgJ3NyYy9zY3NzL2NvbmZpZy92YXJpYWJsZXMnO1xuXG4ubW9kYWwtYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBpbWcge1xuICAgIG1heC13aWR0aDogMTEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIG1hcmdpbjogNXB4IDAgMTBweDtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBib3gtc2hhZG93OiAjYmRiZGJkIDVweCA0cHggNXB4IDJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PieceSelectorModal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'jb-piece-selector',
            templateUrl: './piece-selector.modal.html',
            styleUrls: ['./piece-selector.modal.scss']
          }]
        }], function () {
          return [{
            type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src-app-pages-game-game-module-es5.js.map