(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Projects\portfolio\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "A3+G":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomeRoutingModule */

    /***/
    function A3G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
        return HomeRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/about-me/about-me.component */
      "E4FO");
      /* harmony import */


      var _pages_what_i_do_what_i_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/what-i-do/what-i-do.component */
      "aatK");
      /* harmony import */


      var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/skills/skills.component */
      "V9/K");
      /* harmony import */


      var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/experience/experience.component */
      "SqXP");
      /* harmony import */


      var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/portfolio/portfolio.component */
      "ZvgT");
      /* harmony import */


      var _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/contact-me/contact-me.component */
      "NKhk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: "about-me"
      }, {
        path: 'about-me',
        component: _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_1__["AboutMeComponent"]
      }, {
        path: 'what-i-do',
        component: _pages_what_i_do_what_i_do_component__WEBPACK_IMPORTED_MODULE_2__["WhatIDoComponent"]
      }, {
        path: 'skills',
        component: _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]
      }, {
        path: 'experience',
        component: _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]
      }, {
        path: 'portfolio',
        component: _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"]
      }, {
        path: 'contact-me',
        component: _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_6__["ContactMeComponent"]
      }];

      var HomeRoutingModule = function HomeRoutingModule() {
        _classCallCheck(this, HomeRoutingModule);
      };

      HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: HomeRoutingModule
      });
      HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function HomeRoutingModule_Factory(t) {
          return new (t || HomeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](HomeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "E4FO":
    /*!***********************************************************!*\
      !*** ./src/app/home/pages/about-me/about-me.component.ts ***!
      \***********************************************************/

    /*! exports provided: AboutMeComponent */

    /***/
    function E4FO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
        return AboutMeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/header-section/header-section.component */
      "x1Ov");

      function AboutMeComponent_app_header_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-section", 15);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title);
        }
      }

      var AboutMeComponent = /*#__PURE__*/function () {
        function AboutMeComponent(translate) {
          var _this = this;

          _classCallCheck(this, AboutMeComponent);

          this.translate = translate;
          this.title = "";
          this.translate.get('AboutMe').subscribe(function (data) {
            _this.title = data;
          });
        }

        _createClass(AboutMeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutMeComponent;
      }();

      AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
        return new (t || AboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutMeComponent,
        selectors: [["app-about-me"]],
        decls: 39,
        vars: 13,
        consts: [[1, "content"], [3, "title", 4, "ngIf"], [1, "row", "flex-md-row", "flex-column-reverse"], [1, "col-12", "col-md-7", "offset-0", "text-center", "text-md-left"], [1, "bubble-dialog", "text-center", "mx-auto", "ml-md-0", "mt-4", "font-weight-bold"], [1, "mt-4"], [1, "text-justify"], [1, "badges-technologies", "d-flex", "justify-content-center", "flex-wrap", "mt-4"], [1, "border-badge", "mt-2", "mr-4"], [1, "badge-dark"], [1, "mt-4", "text-center", "col-4", "offset-4"], ["href", "#", 1, "btn", "btn-sm", "animated-button", "btn-main"], [1, "col-10", "offset-1", "col-sm-8", "offset-sm-2", "col-md-5", "offset-md-0"], [1, "border-gradient-image"], ["src", "assets/images/profile.jpg", "alt", "profile image"], [3, "title"]],
        template: function AboutMeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutMeComponent_app_header_section_1_Template, 1, 1, "app-header-section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Mariana Valdespino");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Javascript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Typescript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, "Im"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, "WebDeveloper"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "AboutMeText"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 11, "DownloadCV"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_3__["HeaderSectionComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: [".bubble-dialog[_ngcontent-%COMP%] {\r\n    border-top: 0px;\r\n    border-radius: 20px 20px 20px 0px;\r\n    padding: 5px;\r\n    background: var(--color-primary);\r\n    width: 110px;\r\n}\r\n\r\n.border-gradient-image[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: relative;\r\n    background: linear-gradient(to right, var(--color-primary), var(--color-secondary));\r\n    padding: 10px;\r\n    float: right;\r\n    border-radius: 50%;\r\n}\r\n\r\n.border-gradient-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: auto;\r\n    border-radius: 50%;\r\n    border: 20px solid var(--dark-primary);\r\n}\r\n\r\n.badges-technologies[_ngcontent-%COMP%]   .badge-dark[_ngcontent-%COMP%] {\r\n    padding: 3px 6px;\r\n    border-radius: 5px;\r\n    background: var(--dark-primary);\r\n}\r\n\r\n.badges-technologies[_ngcontent-%COMP%]   .border-badge[_ngcontent-%COMP%] {\r\n    padding: 2px;\r\n    border-radius: 5px;\r\n    cursor: default;\r\n    background-image: linear-gradient(to right, var(--color-primary), var(--color-primary));\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.badges-technologies[_ngcontent-%COMP%]   .border-badge[_ngcontent-%COMP%]:hover {\r\n    background-image: linear-gradient(to right, var(--color-primary), var(--color-secondary));\r\n    moz-transition: all .4s ease-in-out;\r\n    -o-transition: all .4s ease-in-out;\r\n    -webkit-transition: all .4s ease-in-\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUZBQW1GO0lBQ25GLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1RkFBdUY7SUFDdkYsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseUZBQXlGO0lBQ3pGLG1DQUFtQztJQUNuQyxrQ0FBa0M7SUFDbEM7QUFDSiIsImZpbGUiOiJhYm91dC1tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1YmJsZS1kaWFsb2cge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JhZGllbnQtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNvbG9yLXByaW1hcnkpLCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpKTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5ib3JkZXItZ3JhZGllbnQtaW1hZ2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiAyMHB4IHNvbGlkIHZhcigtLWRhcmstcHJpbWFyeSk7XHJcbn1cclxuXHJcbi5iYWRnZXMtdGVjaG5vbG9naWVzIC5iYWRnZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDNweCA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLXByaW1hcnkpO1xyXG59XHJcblxyXG4uYmFkZ2VzLXRlY2hub2xvZ2llcyAuYm9yZGVyLWJhZGdlIHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdmFyKC0tY29sb3ItcHJpbWFyeSksIHZhcigtLWNvbG9yLXByaW1hcnkpKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5iYWRnZXMtdGVjaG5vbG9naWVzIC5ib3JkZXItYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB2YXIoLS1jb2xvci1wcmltYXJ5KSwgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KSk7XHJcbiAgICBtb3otdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZS1pbi1cclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "Hr2g":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/models/menu-item.ts ***!
      \**************************************************************/

    /*! exports provided: MenuItem */

    /***/
    function Hr2g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuItem", function () {
        return MenuItem;
      });

      var MenuItem = function MenuItem(icon, title, route) {
        _classCallCheck(this, MenuItem);

        this.icon = icon;
        this.title = title;
        this.route = route;
      };
      /***/

    },

    /***/
    "Kgut":
    /*!************************************************************!*\
      !*** ./src/app/home/pages/skills/badge/badge.component.ts ***!
      \************************************************************/

    /*! exports provided: BadgeComponent */

    /***/
    function Kgut(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BadgeComponent", function () {
        return BadgeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");

      var BadgeComponent = /*#__PURE__*/function () {
        function BadgeComponent() {
          _classCallCheck(this, BadgeComponent);

          this.mouseOvered = false;
        }

        _createClass(BadgeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BadgeComponent;
      }();

      BadgeComponent.ɵfac = function BadgeComponent_Factory(t) {
        return new (t || BadgeComponent)();
      };

      BadgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BadgeComponent,
        selectors: [["app-badge"]],
        inputs: {
          iconBadge: "iconBadge",
          textBadge: "textBadge"
        },
        decls: 5,
        vars: 2,
        consts: [[1, "badge"], [1, "circle"], [3, "icon"], [1, "ribbon"]],
        template: function BadgeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.iconBadge);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textBadge);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FaIconComponent"]],
        styles: [".badge[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 1.5em 3em;\r\n    width: 80px;\r\n    height: 130px;\r\n    border-radius: 10px;\r\n    display: inline-block;\r\n    top: 0;\r\n    transition: all 0.2s ease;\r\n    background: linear-gradient(to bottom right, var(--color-primary) 0%, #00796B 100%);\r\n    color: #555;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transition: 0.5;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:before, .badge[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    width: inherit;\r\n    height: inherit;\r\n    border-radius: inherit;\r\n    background: inherit;\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:before {\r\n    transform: rotate(60deg);\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:after {\r\n    transform: rotate(-60deg);\r\n}\r\n\r\n.badge.flip-vertical-right[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.badge.flip-vertical-right[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transform: rotateY(180deg);\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n    width: 78px;\r\n    height: 78px;\r\n    position: absolute;\r\n    background: #fff;\r\n    z-index: 10;\r\n    border-radius: 50%;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    margin: auto;\r\n    transition: 0.3s;\r\n    border-color: 2px solid #fff;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n    top: 15px;\r\n    position: relative;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   .font[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-top: 1em;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   .ribbon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    border-radius: 4px;\r\n    padding: 5px 5px 4px;\r\n    z-index: 11;\r\n    bottom: 0px;\r\n    top: calc(50% - 20px);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    font-size: 14px;\r\n    box-shadow: 0 1px 2px rgb(0 0 0 / 27%);\r\n    text-shadow: 0 2px 2px rgb(0 0 0 / 10%);\r\n    text-transform: uppercase;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    color: #000;\r\n    cursor: default;\r\n    display: flex;\r\n    align-items: center;\r\n    font-family: \"Roboto-Bold\";\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%] {\r\n    top: -30px;\r\n    border: 3px solid var(--color-secondary);\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]:hover   .ribbon[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    top: 70%;\r\n    border: 1px solid var(--color-secondary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLG1GQUFtRjtJQUNuRixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHdDQUF3QztBQUM1QyIsImZpbGUiOiJiYWRnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMS41ZW0gM2VtO1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRvcDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCB2YXIoLS1jb2xvci1wcmltYXJ5KSAwJSwgIzAwNzk2QiAxMDAlKTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uYmFkZ2UgLnJpYmJvbiB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogMC41O1xyXG59XHJcblxyXG4uYmFkZ2U6YmVmb3JlLCAuYmFkZ2U6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5iYWRnZTpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG59XHJcblxyXG4uYmFkZ2U6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTYwZGVnKTtcclxufVxyXG5cclxuLmJhZGdlLmZsaXAtdmVydGljYWwtcmlnaHQgLmNpcmNsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYmFkZ2UuZmxpcC12ZXJ0aWNhbC1yaWdodCAucmliYm9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmJhZGdlIC5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDc4cHg7XHJcbiAgICBoZWlnaHQ6IDc4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAycHggc29saWQgI2ZmZjtcclxufVxyXG5cclxuLmJhZGdlIC5jaXJjbGUgZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iYWRnZSAuZm9udCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5iYWRnZSAucmliYm9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNHB4O1xyXG4gICAgei1pbmRleDogMTE7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyMHB4KTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2IoMCAwIDAgLyAyNyUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMnB4IDJweCByZ2IoMCAwIDAgLyAxMCUpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8tQm9sZFwiO1xyXG59XHJcblxyXG4uYmFkZ2U6aG92ZXIgLmNpcmNsZSB7XHJcbiAgICB0b3A6IC0zMHB4O1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLmJhZGdlOmhvdmVyIC5yaWJib24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRvcDogNzAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "M6Ec":
    /*!**************************************************************************!*\
      !*** ./src/app/home/pages/skills/skill-rating/skill-rating.component.ts ***!
      \**************************************************************************/

    /*! exports provided: SkillRatingComponent */

    /***/
    function M6Ec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillRatingComponent", function () {
        return SkillRatingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0, a1) {
        return {
          "bg-primary": a0,
          "bg-white": a1
        };
      };

      function SkillRatingComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
        }

        if (rf & 2) {
          var number_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, number_r1 <= ctx_r0.rating, number_r1 > ctx_r0.rating));
        }
      }

      var _c1 = function _c1() {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      };

      var SkillRatingComponent = /*#__PURE__*/function () {
        function SkillRatingComponent() {
          _classCallCheck(this, SkillRatingComponent);
        }

        _createClass(SkillRatingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillRatingComponent;
      }();

      SkillRatingComponent.ɵfac = function SkillRatingComponent_Factory(t) {
        return new (t || SkillRatingComponent)();
      };

      SkillRatingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillRatingComponent,
        selectors: [["app-skill-rating"]],
        inputs: {
          rating: "rating"
        },
        decls: 2,
        vars: 2,
        consts: [[1, "d-flex"], ["class", "rounded-circle mr-1", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "rounded-circle", "mr-1", 3, "ngClass"]],
        template: function SkillRatingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkillRatingComponent_div_1_Template, 1, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".rounded-circle[_ngcontent-%COMP%] {\r\n    width: 13px;\r\n    height: 13px;\r\n    border: 2px solid var(--color-primary);\r\n    transition: 0.3s;\r\n}\r\n\r\n.rounded-circle[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.5);\r\n    border-color: var(--color-secondary);\r\n    background-color: #fff!important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxsLXJhdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG9DQUFvQztJQUNwQyxnQ0FBZ0M7QUFDcEMiLCJmaWxlIjoic2tpbGwtcmF0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91bmRlZC1jaXJjbGUge1xyXG4gICAgd2lkdGg6IDEzcHg7XHJcbiAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWNpcmNsZTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "NKhk":
    /*!***************************************************************!*\
      !*** ./src/app/home/pages/contact-me/contact-me.component.ts ***!
      \***************************************************************/

    /*! exports provided: ContactMeComponent */

    /***/
    function NKhk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function () {
        return ContactMeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactMeComponent = /*#__PURE__*/function () {
        function ContactMeComponent() {
          _classCallCheck(this, ContactMeComponent);
        }

        _createClass(ContactMeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactMeComponent;
      }();

      ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) {
        return new (t || ContactMeComponent)();
      };

      ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactMeComponent,
        selectors: [["app-contact-me"]],
        decls: 2,
        vars: 0,
        template: function ContactMeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-me works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LW1lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule, httpTranslateLoader */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function () {
        return httpTranslateLoader;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "mqiu");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _components_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/not-found404/not-found404.component */
      "c9/j");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/header-section/header-section.component */
      "x1Ov");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateLoader"],
            useFactory: httpTranslateLoader,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
          }
        })], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_6__["NotFound404Component"], _components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_9__["HeaderSectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]],
          exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_9__["HeaderSectionComponent"]]
        });
      })(); // AOT compilation support


      function httpTranslateLoader(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http);
      }
      /***/

    },

    /***/
    "SqXP":
    /*!***************************************************************!*\
      !*** ./src/app/home/pages/experience/experience.component.ts ***!
      \***************************************************************/

    /*! exports provided: ExperienceComponent */

    /***/
    function SqXP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
        return ExperienceComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/header-section/header-section.component */
      "x1Ov");

      function ExperienceComponent_app_header_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-section", 14);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title);
        }
      }

      var ExperienceComponent = /*#__PURE__*/function () {
        function ExperienceComponent(translate) {
          var _this2 = this;

          _classCallCheck(this, ExperienceComponent);

          this.translate = translate;
          this.title = "";
          this.translate.get('Experience').subscribe(function (data) {
            _this2.title = data;
          });
        }

        _createClass(ExperienceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ExperienceComponent;
      }();

      ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
        return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ExperienceComponent,
        selectors: [["app-experience"]],
        decls: 54,
        vars: 3,
        consts: [[1, "content"], [3, "title", 4, "ngIf"], [1, "timeline-border"], ["id", "timeline"], [1, "tl-item", 3, "mouseover", "mouseout"], [1, "tl-bg", 2, "background-color", "#ec4c5c"], [1, "tl-year"], [1, "font-weight-bold"], [1, "tl-content"], [1, "text-uppercase"], [1, "tl-bg", 2, "background-color", "#4ABDAC"], [1, "tl-bg", 2, "background-color", "#FC9E4F"], [1, "tl-bg", 2, "background-color", "#3D348B"], [1, "tl-bg", 2, "background-color", "#7B4B94"], [3, "title"]],
        template: function ExperienceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_app_header_section_1_Template, 1, 1, "app-header-section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ExperienceComponent_Template_div_mouseover_4_listener() {
              return ctx.selectedChild = "item-1";
            })("mouseout", function ExperienceComponent_Template_div_mouseout_4_listener() {
              return ctx.selectedChild = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2016");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PHD 2014 Consultores");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Pasante en tecnolog\xEDas de la informaci\xF3n: Aprendizaje de instalaci\xF3n, configuraci\xF3n y uso de herramientas Big Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ExperienceComponent_Template_div_mouseover_14_listener() {
              return ctx.selectedChild = "item-2";
            })("mouseout", function ExperienceComponent_Template_div_mouseout_14_listener() {
              return ctx.selectedChild = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "2017");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Inv. Iconsolutions C.A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Desarrolladora Fullstack: Desarrollo del frontend, backend y modelado y configuraci\xF3n de bases de datos relacionales para sistemas web a la medida ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ExperienceComponent_Template_div_mouseover_24_listener() {
              return ctx.selectedChild = "item-3";
            })("mouseout", function ExperienceComponent_Template_div_mouseout_24_listener() {
              return ctx.selectedChild = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Softech Consultores C.A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Analista programador I: Analizar, dise\xF1ar y programar funcionalidades, clases y subsistemas del sistema Profit Plus 2kDoce ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ExperienceComponent_Template_div_mouseover_34_listener() {
              return ctx.selectedChild = "item-4";
            })("mouseout", function ExperienceComponent_Template_div_mouseout_34_listener() {
              return ctx.selectedChild = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "2018");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Acorde 9S International C.A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Desarrolladora FullStack: Desarrollo de aplicaciones web utilizando tecnolog\xEDas y framework actuales: ReactJS, Angular 4+,Laravel, Drupal. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function ExperienceComponent_Template_div_mouseover_44_listener() {
              return ctx.selectedChild = "item-5";
            })("mouseout", function ExperienceComponent_Template_div_mouseout_44_listener() {
              return ctx.selectedChild = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Interfell Corporation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Desarrolladora Front-end: Maquetaci\xF3n y desarrollo de aplicaciones web, haciendo uso principalmente del framework Angular 8-11, Bootstrap 4, Material Design ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.selectedChild);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_3__["HeaderSectionComponent"]],
        styles: [".timeline-border[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: linear-gradient(to right, #7c6c6d 15%, #9aa6a4 35%, #b4aba3 50%, #3c3b44 65%, #5e5960 95%);\r\n    width: 100%;\r\n    height: 100%;\r\n    margin-left: 50px;\r\n    padding: 10px;\r\n}\r\n\r\n.timeline-border.item-1[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #ec4c5c 20%, #9aa6a4, #b4aba3, #3c3b44, #5e5960);\r\n}\r\n\r\n.timeline-border.item-2[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #7c6c6d, #4ABDAC 30%, #b4aba3, #3c3b44, #5e5960);\r\n}\r\n\r\n.timeline-border.item-3[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #7c6c6d, #9aa6a4, #FC9E4F 40%, #3c3b44, #5e5960);\r\n}\r\n\r\n.timeline-border.item-4[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #7c6c6d, #9aa6a4, #b4aba3, #3D348B 50%, #5e5960);\r\n}\r\n\r\n.timeline-border.item-5[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to right, #7c6c6d, #9aa6a4, #b4aba3, #3c3b44, #7B4B94 70%);\r\n}\r\n\r\n#timeline[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    background-color: #031625;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    width: 20%;\r\n    height: calc(100vh - 180px);\r\n    color: #fff;\r\n    overflow: hidden;\r\n    transition: width 0.5s ease;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]::before, .tl-item[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]::after {\r\n    opacity: 1;\r\n    transition: opacity 0.5s ease;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]::before {\r\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 75%);\r\n    z-index: 1;\r\n    opacity: 0;\r\n    transform: translate3d(0, 0, 0) translateY(50%);\r\n    transition: opacity 0.5s ease, transform 0.5s ease;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]:hover {\r\n    width: 40% !important;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]:hover::after {\r\n    opacity: 0;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]:hover::before {\r\n    opacity: 0;\r\n    opacity: 1;\r\n    transform: translate3d(0, 0, 0) translateY(0);\r\n    transition: opacity 1s ease, transform 1s ease 0.25s;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]:hover   .tl-content[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: translateY(-100px);\r\n    transition: all 0.75s ease 0.5s;\r\n}\r\n\r\n.tl-bg[_ngcontent-%COMP%] {\r\n    transform: translate3d(0, 0, 0);\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center center;\r\n    transition: filter 0.5s ease;\r\n    filter: saturate(0.1);\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]:hover   .tl-bg[_ngcontent-%COMP%] {\r\n    filter: saturate(1);\r\n}\r\n\r\n.tl-content[_ngcontent-%COMP%] {\r\n    transform: translate3d(0, 0, 0) translateY(25px);\r\n    position: relative;\r\n    z-index: 1;\r\n    text-align: center;\r\n    margin: 0 1.618em;\r\n    top: 55%;\r\n    opacity: 0;\r\n}\r\n\r\n.tl-year[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translateX(-50%) translateY(-50%);\r\n    z-index: 1;\r\n    border-top: 1px solid #fff;\r\n    border-bottom: 1px solid #fff;\r\n    transition: 1s ease;\r\n}\r\n\r\n.tl-year[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\n.tl-item[_ngcontent-%COMP%]:hover   .tl-year[_ngcontent-%COMP%] {\r\n    transform: translateY(-120px) translateX(-25px);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .timeline-border[_ngcontent-%COMP%] {\r\n        margin-left: 0;\r\n    }\r\n    #timeline[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n    .tl-item[_ngcontent-%COMP%] {\r\n        height: 130px;\r\n        width: 100%;\r\n        transition: height 0.5s ease;\r\n    }\r\n    .tl-item[_ngcontent-%COMP%]:hover {\r\n        height: 200px;\r\n        width: 100%!important;\r\n    }\r\n    .tl-item[_ngcontent-%COMP%]:hover   .tl-content[_ngcontent-%COMP%] {\r\n        transform: translateY(-50px);\r\n    }\r\n    .tl-item[_ngcontent-%COMP%]:hover   .tl-year[_ngcontent-%COMP%] {\r\n        transform: translateY(-90px) translateX(-25px);\r\n        transition: all 0.75s ease 0.5s;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVyaWVuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixzR0FBc0c7SUFDdEcsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLHNGQUFzRjtBQUMxRjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDViw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpRkFBaUY7SUFDakYsVUFBVTtJQUNWLFVBQVU7SUFDViwrQ0FBK0M7SUFDL0Msa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDViw2Q0FBNkM7SUFDN0Msb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDZCQUE2QjtJQUM3QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxzQkFBc0I7SUFDdEIsa0NBQWtDO0lBQ2xDLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnREFBZ0Q7SUFDaEQsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCw0Q0FBNEM7SUFDNUMsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksK0NBQStDO0FBQ25EOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7UUFDYixXQUFXO1FBQ1gsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxhQUFhO1FBQ2IscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLDhDQUE4QztRQUM5QywrQkFBK0I7SUFDbkM7QUFDSiIsImZpbGUiOiJleHBlcmllbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZWxpbmUtYm9yZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdjNmM2ZCAxNSUsICM5YWE2YTQgMzUlLCAjYjRhYmEzIDUwJSwgIzNjM2I0NCA2NSUsICM1ZTU5NjAgOTUlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4udGltZWxpbmUtYm9yZGVyLml0ZW0tMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlYzRjNWMgMjAlLCAjOWFhNmE0LCAjYjRhYmEzLCAjM2MzYjQ0LCAjNWU1OTYwKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJvcmRlci5pdGVtLTIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2M2YzZkLCAjNEFCREFDIDMwJSwgI2I0YWJhMywgIzNjM2I0NCwgIzVlNTk2MCk7XHJcbn1cclxuXHJcbi50aW1lbGluZS1ib3JkZXIuaXRlbS0zIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzdjNmM2ZCwgIzlhYTZhNCwgI0ZDOUU0RiA0MCUsICMzYzNiNDQsICM1ZTU5NjApO1xyXG59XHJcblxyXG4udGltZWxpbmUtYm9yZGVyLml0ZW0tNCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3YzZjNmQsICM5YWE2YTQsICNiNGFiYTMsICMzRDM0OEIgNTAlLCAjNWU1OTYwKTtcclxufVxyXG5cclxuLnRpbWVsaW5lLWJvcmRlci5pdGVtLTUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjN2M2YzZkLCAjOWFhNmE0LCAjYjRhYmEzLCAjM2MzYjQ0LCAjN0I0Qjk0IDcwJSk7XHJcbn1cclxuXHJcbiN0aW1lbGluZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMTYyNTtcclxufVxyXG5cclxuLnRsLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE4MHB4KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnRsLWl0ZW06OmJlZm9yZSwgLnRsLWl0ZW06OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4udGwtaXRlbTo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlO1xyXG59XHJcblxyXG4udGwtaXRlbTo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMSkgNzUlKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSB0cmFuc2xhdGVZKDUwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnRsLWl0ZW06aG92ZXIge1xyXG4gICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGwtaXRlbTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnRsLWl0ZW06aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgdHJhbnNmb3JtIDFzIGVhc2UgMC4yNXM7XHJcbn1cclxuXHJcbi50bC1pdGVtOmhvdmVyIC50bC1jb250ZW50IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlIDAuNXM7XHJcbn1cclxuXHJcbi50bC1iZyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC41cyBlYXNlO1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgwLjEpO1xyXG59XHJcblxyXG4udGwtaXRlbTpob3ZlciAudGwtYmcge1xyXG4gICAgZmlsdGVyOiBzYXR1cmF0ZSgxKTtcclxufVxyXG5cclxuLnRsLWNvbnRlbnQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSB0cmFuc2xhdGVZKDI1cHgpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCAxLjYxOGVtO1xyXG4gICAgdG9wOiA1NSU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udGwteWVhciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlO1xyXG59XHJcblxyXG4udGwteWVhciBwIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRsLWl0ZW06aG92ZXIgLnRsLXllYXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMjBweCkgdHJhbnNsYXRlWCgtMjVweCk7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudGltZWxpbmUtYm9yZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuICAgICN0aW1lbGluZSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC50bC1pdGVtIHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGVhc2U7XHJcbiAgICB9XHJcbiAgICAudGwtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudGwtaXRlbTpob3ZlciAudGwtY29udGVudCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgIH1cclxuICAgIC50bC1pdGVtOmhvdmVyIC50bC15ZWFyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTkwcHgpIHRyYW5zbGF0ZVgoLTI1cHgpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjc1cyBlYXNlIDAuNXM7XHJcbiAgICB9XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(translate) {
          _classCallCheck(this, AppComponent);

          this.translate = translate;
          this.title = 'portfolio';
          translate.addLangs(['en', 'es']);
          translate.setDefaultLang('es');
        }

        _createClass(AppComponent, [{
          key: "switchLang",
          value: function switchLang(lang) {
            this.translate.use(lang);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 0,
        consts: [[1, "container"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "V9/K":
    /*!*******************************************************!*\
      !*** ./src/app/home/pages/skills/skills.component.ts ***!
      \*******************************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function V9K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-regular-svg-icons */
      "twK/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./badge/badge.component */
      "Kgut");
      /* harmony import */


      var _skill_rating_skill_rating_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./skill-rating/skill-rating.component */
      "M6Ec");
      /* harmony import */


      var _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/components/header-section/header-section.component */
      "x1Ov");

      function SkillsComponent_app_header_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header-section", 10);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx_r0.title);
        }
      }

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent(translate) {
          var _this3 = this;

          _classCallCheck(this, SkillsComponent);

          this.translate = translate;
          this.faUsers = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faUsers"];
          this.faBookReader = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faBookReader"];
          this.faClipboardList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faClipboardList"];
          this.faCalendarAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCalendarAlt"];
          this.faLightbulb = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLightbulb"];
          this.title = "";
          this.translate.get('Skills').subscribe(function (data) {
            _this3.title = data;
          });
        }

        _createClass(SkillsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsComponent;
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 74,
        vars: 35,
        consts: [[1, "content"], [3, "title", 4, "ngIf"], [1, "row"], [1, "col-md-12", "flex-wrap", "d-flex", "justify-content-between"], ["role", "button", 3, "iconBadge", "textBadge"], [1, "col-md-12"], [1, "row", "list-unstyled"], [1, "col-md-6", "d-flex", "justify-content-between", "my-1"], [1, "label-skill"], [3, "rating"], [3, "title"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SkillsComponent_app_header_section_1_Template, 1, 1, "app-header-section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-badge", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-badge", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "app-badge", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-badge", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-badge", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "HTML5");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Bootstrap 4");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Material Design");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Javascript");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Jquery");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Angular 4+");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " React JS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " PHP");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Laravel");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, " Node JS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " SQL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " NoSQL");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Github");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "app-skill-rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconBadge", ctx.faUsers)("textBadge", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 25, "Teamwork"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconBadge", ctx.faBookReader)("textBadge", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 27, "Autodidact"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconBadge", ctx.faClipboardList)("textBadge", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 29, "ProblemSolving"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconBadge", ctx.faCalendarAlt)("textBadge", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 31, "Flexibility"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconBadge", ctx.faLightbulb)("textBadge", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 33, "CriticalThinking"));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("rating", 9);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _badge_badge_component__WEBPACK_IMPORTED_MODULE_5__["BadgeComponent"], _skill_rating_skill_rating_component__WEBPACK_IMPORTED_MODULE_6__["SkillRatingComponent"], _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_7__["HeaderSectionComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
        styles: [".label-skill[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    font-family: 'Roboto-Bold';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJza2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1za2lsbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8tQm9sZCc7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.module */
      "ct+p");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZvgT":
    /*!*************************************************************!*\
      !*** ./src/app/home/pages/portfolio/portfolio.component.ts ***!
      \*************************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function ZvgT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 2,
        vars: 0,
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "portfolio works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "aF9I":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/footer/footer.component.ts ***!
      \**************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 2,
        vars: 0,
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "aZ8m":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function aZ8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @fortawesome/free-regular-svg-icons */
      "twK/");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "wHSu");
      /* harmony import */


      var _models_menu_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./models/menu-item */
      "Hr2g");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "6NWb");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");

      var _c0 = function _c0(a0, a1) {
        return {
          "show-item": a0,
          "no-show-item": a1
        };
      };

      function HeaderComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r1.route)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](6, _c0, ctx_r0.showItem, !ctx_r0.showItem));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", item_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, item_r1.title), " ");
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "show-mobile": a0,
          "no-show-mobile": a1
        };
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);

          this.faHandshake = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHandshake"];
          this.faAddressCard = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faAddressCard"];
          this.faUserNinja = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserNinja"];
          this.faUserTie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserTie"];
          this.faGraduationCap = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"];
          this.faLaptopCode = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"];
          this.faFolderOpen = _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFolderOpen"];
          this.faMobileAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobileAlt"];
          this.showMobile = false;
          this.showItem = null;
          this.menuItems = [];
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initMenuItems();
          }
        }, {
          key: "initMenuItems",
          value: function initMenuItems() {
            this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHandshake"], 'AboutMe', ['about-me']));
            this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faUserTie"], 'WhatIDo', ['what-i-do']));
            this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptopCode"], 'Skills', ['skills']));
            this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGraduationCap"], 'Experience', ['experience']));
            this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFolderOpen"], 'Portfolio', ['portfolio']));
            this.menuItems.push(new _models_menu_item__WEBPACK_IMPORTED_MODULE_2__["MenuItem"](_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMobileAlt"], 'Contact', ['contact-me']));
          }
        }, {
          key: "showMenuMobile",
          value: function showMenuMobile(e) {
            var _this4 = this;

            this.showMobile = e.target.checked;
            setTimeout(function () {
              _this4.showItem = _this4.showMobile;
            }, 500);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 10,
        vars: 5,
        consts: [[1, "navbar-header", "d-block", "d-md-none"], ["type", "checkbox", "id", "menu-btn", 1, "menu-btn", "d-none", 3, "change"], ["for", "menu-btn", 1, "menu-icon"], [1, "navicon"], [1, "navbar-options", 3, "ngClass"], [1, "position-relative", "brand", "d-none", "d-md-block"], ["src", "assets/images/logo2.png", "width", "55px", "alt", "logo"], ["class", "position-relative", 3, "routerLink", "ngClass", 4, "ngFor", "ngForOf"], [1, "position-relative", 3, "routerLink", "ngClass"], [3, "icon"], [1, "position-absolute", "text-nav", "text-center", "w-100"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function HeaderComponent_Template_input_change_3_listener($event) {
              return ctx.showMenuMobile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 5, 9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, ctx.showMobile, !ctx.showMobile));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
        styles: ["nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 50;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\r\n    background: var(--dark-secondary);\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 50px;\r\n    top: 0;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   .navbar-options[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    background: var(--dark-secondary);\r\n    justify-content: space-around;\r\n    display: flex;\r\n    transition: height 0.7s ease-in-out;\r\n}\r\n\r\n.navbar-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: #cdcdcd;\r\n    text-decoration: none;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.navbar-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n}\r\n\r\n.navbar-options[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   .text-nav[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: translateY(75px);\r\n    -webkit-transform: translateY(75px);\r\n}\r\n\r\na[_ngcontent-%COMP%]   .text-nav[_ngcontent-%COMP%] {\r\n    font-family: 'Raleway-Bold';\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n    top: 0px;\r\n    left: 0px;\r\n    opacity: 0;\r\n    transition-duration: 0.4s;\r\n    color: #4ABDAC;\r\n}\r\n\r\na[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    font-size: 40px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    nav[_ngcontent-%COMP%]   .navbar-options[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    nav[_ngcontent-%COMP%]   .navbar-options[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        position: fixed;\r\n        top: 50px;\r\n        flex-wrap: wrap;\r\n    }\r\n    .navbar-options.no-show-mobile[_ngcontent-%COMP%] {\r\n        height: 0%!important;\r\n    }\r\n    a.no-show-item[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .navbar-options.show-mobile[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        height: 100%!important;\r\n        flex-wrap: wrap;\r\n        flex-direction: row!important;\r\n    }\r\n    a.show-item[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    a[_ngcontent-%COMP%]   .text-nav[_ngcontent-%COMP%] {\r\n        opacity: 1;\r\n        transform: translateY(75px);\r\n        -webkit-transform: translateY(75px);\r\n    }\r\n    nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 33.333333%;\r\n    }\r\n}\r\n\r\n@media (max-width: 575px) {\r\n    nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    float: right;\r\n    padding: 28px 20px;\r\n    position: relative;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n            user-select: none;\r\n    margin-right: 20px;\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    display: block;\r\n    height: 2px;\r\n    position: relative;\r\n    transition: background .2s ease-out;\r\n    width: 18px;\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before, .navbar-header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\r\n    background: #fff;\r\n    content: '';\r\n    display: block;\r\n    height: 100%;\r\n    position: absolute;\r\n    transition: all .2s ease-out;\r\n    width: 100%;\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\r\n    top: 5px;\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\r\n    top: -5px;\r\n}\r\n\r\n\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:before {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked ~ .menu-icon[_ngcontent-%COMP%]   .navicon[_ngcontent-%COMP%]:after {\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.navbar-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:before, .navbar-header[_ngcontent-%COMP%]   .menu-btn[_ngcontent-%COMP%]:checked ~ .menu-icon[_ngcontent-%COMP%]:not(.steps)   .navicon[_ngcontent-%COMP%]:after {\r\n    top: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtBQUNWOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixTQUFTO1FBQ1QsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLFVBQVU7UUFDViwyQkFBMkI7UUFDM0IsbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUEsY0FBYzs7QUFFZDtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBaUI7T0FBakIsc0JBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQSxhQUFhOztBQUViO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksTUFBTTtBQUNWIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiA1MDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5uYXYgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbm5hdiAubmF2YmFyLW9wdGlvbnMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuN3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5uYXZiYXItb3B0aW9ucyBhIHtcclxuICAgIGNvbG9yOiAjY2RjZGNkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1vcHRpb25zIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItb3B0aW9ucyBhOmhvdmVyIC50ZXh0LW5hdiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDc1cHgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzVweCk7XHJcbn1cclxuXHJcbmEgLnRleHQtbmF2IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1Cb2xkJztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xyXG4gICAgY29sb3I6ICM0QUJEQUM7XHJcbn1cclxuXHJcbmEgZmEtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgbmF2IC5uYXZiYXItb3B0aW9ucyB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICBuYXYgLm5hdmJhci1vcHRpb25zIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA1MHB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItb3B0aW9ucy5uby1zaG93LW1vYmlsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBhLm5vLXNob3ctaXRlbSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5uYXZiYXItb3B0aW9ucy5zaG93LW1vYmlsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93IWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGEuc2hvdy1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIGEgLnRleHQtbmF2IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3NXB4KTtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg3NXB4KTtcclxuICAgIH1cclxuICAgIG5hdiBhIHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMzMzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICBuYXYgYSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuLyogbWVudSBpY29uICovXHJcblxyXG4ubmF2YmFyLWhlYWRlciAubWVudS1pY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDI4cHggMjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlciAubWVudS1pY29uIC5uYXZpY29uIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAuMnMgZWFzZS1vdXQ7XHJcbiAgICB3aWR0aDogMThweDtcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIgLm1lbnUtaWNvbiAubmF2aWNvbjpiZWZvcmUsIC5uYXZiYXItaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZiYXItaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YmVmb3JlIHtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmFmdGVyIHtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG5cclxuLyogbWVudSBidG4gKi9cclxuXHJcbi5uYXZiYXItaGVhZGVyIC5tZW51LWJ0bjpjaGVja2Vkfi5tZW51LWljb24gLm5hdmljb24ge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXItaGVhZGVyIC5tZW51LWJ0bjpjaGVja2Vkfi5tZW51LWljb24gLm5hdmljb246YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbn1cclxuXHJcbi5uYXZiYXItaGVhZGVyIC5tZW51LWJ0bjpjaGVja2Vkfi5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlciAubWVudS1idG46Y2hlY2tlZH4ubWVudS1pY29uOm5vdCguc3RlcHMpIC5uYXZpY29uOmJlZm9yZSwgLm5hdmJhci1oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWR+Lm1lbnUtaWNvbjpub3QoLnN0ZXBzKSAubmF2aWNvbjphZnRlciB7XHJcbiAgICB0b3A6IDA7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    "aatK":
    /*!*************************************************************!*\
      !*** ./src/app/home/pages/what-i-do/what-i-do.component.ts ***!
      \*************************************************************/

    /*! exports provided: WhatIDoComponent */

    /***/
    function aatK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WhatIDoComponent", function () {
        return WhatIDoComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/components/header-section/header-section.component */
      "x1Ov");

      function WhatIDoComponent_app_header_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header-section", 12);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title);
        }
      }

      var WhatIDoComponent = /*#__PURE__*/function () {
        function WhatIDoComponent(translate) {
          var _this5 = this;

          _classCallCheck(this, WhatIDoComponent);

          this.translate = translate;
          this.title = "";
          this.translate.get('WhatIDo').subscribe(function (data) {
            _this5.title = data;
          });
        }

        _createClass(WhatIDoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WhatIDoComponent;
      }();

      WhatIDoComponent.ɵfac = function WhatIDoComponent_Factory(t) {
        return new (t || WhatIDoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
      };

      WhatIDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WhatIDoComponent,
        selectors: [["app-what-i-do"]],
        decls: 42,
        vars: 19,
        consts: [[1, "content"], [3, "title", 4, "ngIf"], [1, "row"], [1, "col-md-4"], [1, "box-info"], [1, "face", "face1"], [1, "text-center", "content-box"], ["src", "assets/images/web-page-icon.png"], [1, "text-center", "mt-4"], [1, "face", "face2"], ["src", "assets/images/server-icon.png"], ["src", "assets/images/data-icon.png"], [3, "title"]],
        template: function WhatIDoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WhatIDoComponent_app_header_section_1_Template, 1, 1, "app-header-section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "Frontend"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 9, "FrontendDescription"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 11, "Backend"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 13, "BackendDescription"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 15, "Databases"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 17, "DatabasesDescription"));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_header_section_header_section_component__WEBPACK_IMPORTED_MODULE_3__["HeaderSectionComponent"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        styles: [".box-info[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\r\n    height: 200px;\r\n    width: 100%;\r\n    transition: 0.5s;\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: var(--dark-secondary);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1;\r\n    transform: translateY(100px);\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]:hover   .face.face1[_ngcontent-%COMP%] {\r\n    \r\n    background: var(--color-primary);\r\n    transform: translateY(0px);\r\n    color: var(--dark-secondary);\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]   .face.face1[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-height: 80px;\r\n    width: auto;\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: #cdcdcd;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 20px;\r\n    box-sizing: border-box;\r\n    transform: translateY(-100px);\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]:hover   .face.face2[_ngcontent-%COMP%] {\r\n    transform: translateY(0);\r\n}\r\n\r\n.box-info[_ngcontent-%COMP%]   .face.face2[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n    color: var(--dark-primary);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndoYXQtaS1kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsZ0NBQWdDO0lBQ2hDLDBCQUEwQjtJQUMxQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJ3aGF0LWktZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtaW5mbyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5ib3gtaW5mbyAuZmFjZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYm94LWluZm8gLmZhY2UuZmFjZTEge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xyXG59XHJcblxyXG4uYm94LWluZm86aG92ZXIgLmZhY2UuZmFjZTEge1xyXG4gICAgLyogYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTsgKi9cclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1zZWNvbmRhcnkpO1xyXG59XHJcblxyXG4uYm94LWluZm8gLmZhY2UuZmFjZTEgaW1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmJveC1pbmZvIC5mYWNlLmZhY2UyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2Q7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcclxufVxyXG5cclxuLmJveC1pbmZvOmhvdmVyIC5mYWNlLmZhY2UyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLmJveC1pbmZvIC5mYWNlLmZhY2UyIC5jb250ZW50LWJveCBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5KTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "c9/j":
    /*!**************************************************************************!*\
      !*** ./src/app/shared/components/not-found404/not-found404.component.ts ***!
      \**************************************************************************/

    /*! exports provided: NotFound404Component */

    /***/
    function c9J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFound404Component", function () {
        return NotFound404Component;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotFound404Component = /*#__PURE__*/function () {
        function NotFound404Component() {
          _classCallCheck(this, NotFound404Component);
        }

        _createClass(NotFound404Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFound404Component;
      }();

      NotFound404Component.ɵfac = function NotFound404Component_Factory(t) {
        return new (t || NotFound404Component)();
      };

      NotFound404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFound404Component,
        selectors: [["app-not-found404"]],
        decls: 2,
        vars: 0,
        template: function NotFound404Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found404 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQ0MDQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ct+p":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomeModule */

    /***/
    function ctP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
        return HomeModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      "A3+G");
      /* harmony import */


      var _pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pages/about-me/about-me.component */
      "E4FO");
      /* harmony import */


      var _pages_what_i_do_what_i_do_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/what-i-do/what-i-do.component */
      "aatK");
      /* harmony import */


      var _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./pages/skills/skills.component */
      "V9/K");
      /* harmony import */


      var _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/experience/experience.component */
      "SqXP");
      /* harmony import */


      var _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/portfolio/portfolio.component */
      "ZvgT");
      /* harmony import */


      var _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/contact-me/contact-me.component */
      "NKhk");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _pages_skills_skill_rating_skill_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pages/skills/skill-rating/skill-rating.component */
      "M6Ec");
      /* harmony import */


      var _pages_skills_badge_badge_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./pages/skills/badge/badge.component */
      "Kgut");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeModule = function HomeModule() {
        _classCallCheck(this, HomeModule);
      };

      HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: HomeModule
      });
      HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function HomeModule_Factory(t) {
          return new (t || HomeModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](HomeModule, {
          declarations: [_pages_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], _pages_what_i_do_what_i_do_component__WEBPACK_IMPORTED_MODULE_3__["WhatIDoComponent"], _pages_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _pages_experience_experience_component__WEBPACK_IMPORTED_MODULE_5__["ExperienceComponent"], _pages_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _pages_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_7__["ContactMeComponent"], _pages_skills_skill_rating_skill_rating_component__WEBPACK_IMPORTED_MODULE_9__["SkillRatingComponent"], _pages_skills_badge_badge_component__WEBPACK_IMPORTED_MODULE_10__["BadgeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_1__["HomeRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
          exports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "x1Ov":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/header-section/header-section.component.ts ***!
      \******************************************************************************/

    /*! exports provided: HeaderSectionComponent */

    /***/
    function x1Ov(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderSectionComponent", function () {
        return HeaderSectionComponent;
      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return {
          "mr-2": a0
        };
      };

      function HeaderSectionComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function HeaderSectionComponent_span_3_Template_span_mouseover_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r3.animate(i_r2);
          })("@rubberBand.done", function HeaderSectionComponent_span_3_Template_span_animation_rubberBand_done_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);

            var i_r2 = ctx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.reset(i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var letter_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rubberBand", ctx_r0.rubberState[i_r2])("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, letter_r1 == " "));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", letter_r1, " ");
        }
      }

      var HeaderSectionComponent = /*#__PURE__*/function () {
        function HeaderSectionComponent(zone) {
          _classCallCheck(this, HeaderSectionComponent);

          this.zone = zone;
          this.rubberState = ["inactive", "inactive", "inactive"];
        }

        _createClass(HeaderSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "animate",
          value: function animate(i) {
            this.rubberState[i] = "active";
          }
        }, {
          key: "reset",
          value: function reset(i) {
            var _this6 = this;

            this.zone.run(function () {
              _this6.rubberState[i] = "inactive";
            });
          }
        }, {
          key: "getSplit",
          value: function getSplit(string) {
            return string.split('');
          }
        }]);

        return HeaderSectionComponent;
      }();

      HeaderSectionComponent.ɵfac = function HeaderSectionComponent_Factory(t) {
        return new (t || HeaderSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      HeaderSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HeaderSectionComponent,
        selectors: [["app-header-section"]],
        inputs: {
          title: "title"
        },
        decls: 5,
        vars: 1,
        consts: [[1, "row", "header-section"], [1, "col-md-12", "text-center"], [1, "color-primary", "title-section"], ["class", "d-inline-block", 3, "ngClass", "mouseover", 4, "ngFor", "ngForOf"], [1, "d-inline-block", 3, "ngClass", "mouseover"]],
        template: function HeaderSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HeaderSectionComponent_span_3_Template, 2, 5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.title.split(""));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: ["hr[_ngcontent-%COMP%] {\r\n    background-color: var(--color-secondary);\r\n    height: 3px;\r\n    width: 10%;\r\n    margin-top: 5px;\r\n}\r\n\r\ndiv.title-section[_ngcontent-%COMP%] {\r\n    font-family: 'Raleway-Black';\r\n    font-size: calc(1.3em + 1.3vw);\r\n}\r\n\r\ndiv.title-section[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    cursor: default;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci1zZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztJQUNYLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoiaGVhZGVyLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbmRpdi50aXRsZS1zZWN0aW9uIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheS1CbGFjayc7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMS4zZW0gKyAxLjN2dyk7XHJcbn1cclxuXHJcbmRpdi50aXRsZS1zZWN0aW9uIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59Il19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('rubberBand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale3d(1.25, 0.75, 1)',
            offset: .30
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale3d(0.75, 1.25, 1)',
            offset: .40
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale3d(1.15, 0.85, 1)',
            offset: .50
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale3d(0.95, 1.05, 1)',
            offset: .65
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale3d(1.05, 0.95, 1)',
            offset: .75
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'scale3d(1, 1, 1)',
            offset: 1
          })])))])]
        }
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map