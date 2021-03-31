(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-on-board-on-board-module"], {
    /***/
    "./src/app/features/on-board/components/greet/greet.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/features/on-board/components/greet/greet.component.ts ***!
      \***********************************************************************/

    /*! exports provided: GreetComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsGreetGreetComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GreetComponent", function () {
        return GreetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var GreetComponent = /*#__PURE__*/function (_core_components__WEB) {
        _inherits(GreetComponent, _core_components__WEB);

        var _super = _createSuper(GreetComponent);

        function GreetComponent() {
          _classCallCheck(this, GreetComponent);

          return _super.call(this);
        }

        _createClass(GreetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onGoToDashboard",
          value: function onGoToDashboard() {
            this.redirectTo("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].DASHBOARD));
          }
        }]);

        return GreetComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      GreetComponent.ɵfac = function GreetComponent_Factory(t) {
        return new (t || GreetComponent)();
      };

      GreetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GreetComponent,
        selectors: [["app-greet"]],
        inputs: {
          pathName: "pathName"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 8,
        vars: 1,
        consts: [[3, "pathName"], [1, "success-msg", "text-center"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"]],
        template: function GreetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Congratulation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " You have submitted all the required detail of yours and your first property for verification. You must get an SMS and an email and when your profile and your property both are verified at our end. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GreetComponent_Template_button_click_6_listener() {
              return ctx.onGoToDashboard();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_3__["WizardSectionComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvZ3JlZXQvZ3JlZXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-greet",
            templateUrl: "./greet.component.html",
            styleUrls: ["./greet.component.scss"]
          }]
        }], function () {
          return [];
        }, {
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/on-board/on-board.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/features/on-board/components/on-board/on-board.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: OnBoardComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsOnBoardOnBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardComponent", function () {
        return OnBoardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var OnBoardComponent = /*#__PURE__*/function () {
        function OnBoardComponent() {
          _classCallCheck(this, OnBoardComponent);
        }

        _createClass(OnBoardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OnBoardComponent;
      }();

      OnBoardComponent.ɵfac = function OnBoardComponent_Factory(t) {
        return new (t || OnBoardComponent)();
      };

      OnBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OnBoardComponent,
        selectors: [["app-on-board"]],
        decls: 1,
        vars: 0,
        template: function OnBoardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnBoardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-on-board",
            templateUrl: "./on-board.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/owner-company/owner-company.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/on-board/components/owner-company/owner-company.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: OwnerCompanyComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsOwnerCompanyOwnerCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerCompanyComponent", function () {
        return OwnerCompanyComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function OwnerCompanyComponent_ng_container_36_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCompanyComponent_ng_container_36_button_12_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.removeContact(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OwnerCompanyComponent_ng_container_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCompanyComponent_ng_container_36_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r5 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onPhoneIconClick(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCompanyComponent_ng_container_36_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r5 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.onMobileIconClick(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OwnerCompanyComponent_ng_container_36_button_12_Template, 2, 0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var contact_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", contact_r4.value.type === "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", contact_r4.value.type === "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", contact_r4.value.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contactsFormArray.controls.length > 1);
        }
      }

      function OwnerCompanyComponent_mat_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r13.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r13.title);
        }
      }

      function OwnerCompanyComponent_mat_option_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var province_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", province_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", province_r14.name, " ");
        }
      }

      var OwnerCompanyComponent = /*#__PURE__*/function (_core_components__WEB2) {
        _inherits(OwnerCompanyComponent, _core_components__WEB2);

        var _super2 = _createSuper(OwnerCompanyComponent);

        function OwnerCompanyComponent(activatedRoute) {
          var _this;

          _classCallCheck(this, OwnerCompanyComponent);

          _this = _super2.call(this);
          _this.activatedRoute = activatedRoute;
          _this.previousClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this.nextClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this.countries = [];
          _this.provinces = [];
          return _this;
        }

        _createClass(OwnerCompanyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.countries = this.datasService.countries;
            this.provinces = this.datasService.provinces;
            this.ownerType = this.activatedRoute.snapshot.paramMap.get("ownerType").toUpperCase();

            if (this.ownerType) {
              this.setOwnerCompanyForm();
              this.listenProvinceChanges();
            }
          }
        }, {
          key: "listenProvinceChanges",
          value: function listenProvinceChanges() {
            var _this2 = this;

            this.filteredProvinces = this.ownerCompanyForm.get("address").get("province").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this2.filterProvince(value);
            }));
          }
        }, {
          key: "filterProvince",
          value: function filterProvince(value) {
            var filterValue = value.toLowerCase();
            return this.provinces.filter(function (province) {
              return province.value.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "setOwnerCompanyForm",
          value: function setOwnerCompanyForm() {
            this.contactsFormArray = this.formBuilder.array([this.createContact()]);
            this.ownerCompanyForm = this.formBuilder.group({
              ownerType: [this.ownerType],
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              registrationNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              panNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              address: this.formBuilder.group({
                addressLine1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                addressLine2: "",
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                wardNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                province: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                street: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              }),
              contacts: this.contactsFormArray
            });
            var defaultCountry = this.countries.filter(function (c) {
              return c.value === "Nepal";
            }).map(function (res) {
              return res.value;
            });
            this.ownerCompanyForm.get("address").get("country").setValue(defaultCountry[0]);
          }
        }, {
          key: "createContact",
          value: function createContact() {
            return this.formBuilder.group({
              type: ["phone"],
              number: ""
            });
          }
        }, {
          key: "addContact",
          value: function addContact() {
            this.contactsFormArray.push(this.createContact());
          }
        }, {
          key: "removeContact",
          value: function removeContact(index) {
            this.contactsFormArray.removeAt(index);
          }
        }, {
          key: "onPrevious",
          value: function onPrevious() {
            this.previousClicked.next();
          }
        }, {
          key: "onNext",
          value: function onNext() {
            if (this.ownerCompanyForm.valid) {
              this.ownerCompanyForm.value["phones"] = this.ownerCompanyForm.value.contacts.filter(function (contact) {
                return contact.type === "phone";
              }).map(function (el) {
                return el.number.toString();
              });
              this.ownerCompanyForm.value["mobileNumbers"] = this.ownerCompanyForm.value.contacts.filter(function (contact) {
                return contact.type === "mobile";
              }).map(function (el) {
                return el.number.toString();
              });
              this.nextClicked.emit(this.ownerCompanyForm.value);
            }
          }
        }, {
          key: "getContactLabel",
          value: function getContactLabel(index) {
            return "Phone";
          }
        }, {
          key: "onPhoneIconClick",
          value: function onPhoneIconClick(index) {
            this.contactsFormArray.controls[index]["controls"]["type"].setValue("phone");
          }
        }, {
          key: "onMobileIconClick",
          value: function onMobileIconClick(index) {
            this.contactsFormArray.controls[index]["controls"]["type"].setValue("mobile");
          }
        }]);

        return OwnerCompanyComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      OwnerCompanyComponent.ɵfac = function OwnerCompanyComponent_Factory(t) {
        return new (t || OwnerCompanyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      OwnerCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OwnerCompanyComponent,
        selectors: [["app-owner-company"]],
        inputs: {
          pathName: "pathName"
        },
        outputs: {
          previousClicked: "previousClicked",
          nextClicked: "nextClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 107,
        vars: 20,
        consts: [[3, "pathName"], [1, "detail-form", 3, "formGroup"], [1, "form-field-wrapper"], ["type", "text", "matInput", "", "formControlName", "name"], [3, "control"], ["type", "text", "matInput", "", "formControlName", "registrationNumber"], ["type", "text", "matInput", "", "formControlName", "panNumber"], ["type", "email", "matInput", "", "formControlName", "email"], [1, "contact-details", "contact-details-company"], [1, "form-section-title"], [1, "las", "la-plus", 3, "click"], ["formArrayName", "contacts", 4, "ngFor", "ngForOf"], ["formGroupName", "address", 1, "address-details", "address-details-company"], [1, "d-flex", "has-2-cols"], [1, "form-field-wrapper", "col", "full-width"], ["type", "text", "matInput", "", "formControlName", "addressLine1"], ["type", "text", "matInput", "", "formControlName", "addressLine2"], [1, "form-field-wrapper", "col"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select Province", "matInput", "", "formControlName", "province", 3, "matAutocomplete"], ["auto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "zipCode", "appOnlyNumber", ""], ["matInput", "", "formControlName", "wardNo", "appOnlyNumber", ""], ["matInput", "", "formControlName", "street"], [1, "buttons-wrapper", "d-flex"], ["mat-button", "", 1, "btn", "btn-theme-white", 3, "click"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"], ["formArrayName", "contacts"], [1, "d-flex", "has-2-cols", 3, "formGroupName"], [1, "contact-type-options"], ["mat-icon-button", "", "matPrefix", "", 1, "matPrefix", 3, "click"], [1, "las", "la-phone"], [1, "las", "la-mobile"], ["appOnlyNumber", "", "matInput", "", "formControlName", "number"], ["mat-icon-button", "", "matSuffix", "", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", ""], [1, "las", "la-minus-circle", 3, "click"], [3, "value"]],
        template: function OwnerCompanyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Company Detail as owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Company Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Company Registration Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Company PAN Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Company Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCompanyComponent_Template_i_click_35_listener() {
              return ctx.addContact();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OwnerCompanyComponent_ng_container_36_Template, 13, 7, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Address Line 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Address Line 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, OwnerCompanyComponent_mat_option_60_Template, 2, 2, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Province ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-autocomplete", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, OwnerCompanyComponent_mat_option_70_Template, 2, 2, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Zip Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Ward No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Street ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCompanyComponent_Template_a_click_103_listener() {
              return ctx.onPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerCompanyComponent_Template_button_click_105_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ownerCompanyForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("registrationNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("panNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactsFormArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("addressLine1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("addressLine2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("country"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 18, ctx.filteredProvinces));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("province"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("city"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("zipCode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("wardNo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerCompanyForm.get("address").get("street"));
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_5__["WizardSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__["OnlyNumberDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvb3duZXItY29tcGFueS9vd25lci1jb21wYW55LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerCompanyComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-owner-company",
            templateUrl: "./owner-company.component.html",
            styleUrls: ["./owner-company.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, {
          previousClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nextClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/owner-detail/owner-detail.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/features/on-board/components/owner-detail/owner-detail.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: OwnerDetailComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsOwnerDetailOwnerDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerDetailComponent", function () {
        return OwnerDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OwnerDetailComponent = /*#__PURE__*/function () {
        function OwnerDetailComponent() {
          _classCallCheck(this, OwnerDetailComponent);
        }

        _createClass(OwnerDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OwnerDetailComponent;
      }();

      OwnerDetailComponent.ɵfac = function OwnerDetailComponent_Factory(t) {
        return new (t || OwnerDetailComponent)();
      };

      OwnerDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OwnerDetailComponent,
        selectors: [["app-owner-detail"]],
        decls: 2,
        vars: 0,
        template: function OwnerDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "owner-detail works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvb3duZXItZGV0YWlsL293bmVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-owner-detail",
            templateUrl: "./owner-detail.component.html",
            styleUrls: ["./owner-detail.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/owner-individual/owner-individual.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/features/on-board/components/owner-individual/owner-individual.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: OwnerIndividualComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsOwnerIndividualOwnerIndividualComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerIndividualComponent", function () {
        return OwnerIndividualComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function OwnerIndividualComponent_ng_container_36_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerIndividualComponent_ng_container_36_button_12_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.removeContact(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OwnerIndividualComponent_ng_container_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerIndividualComponent_ng_container_36_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r5 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onPhoneIconClick(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerIndividualComponent_ng_container_36_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r5 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.onMobileIconClick(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OwnerIndividualComponent_ng_container_36_button_12_Template, 2, 0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var contact_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", contact_r4.value.type === "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", contact_r4.value.type === "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", contact_r4.value.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contactsFormArray.controls.length > 1);
        }
      }

      function OwnerIndividualComponent_mat_option_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r13.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r13.title);
        }
      }

      function OwnerIndividualComponent_mat_option_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var province_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", province_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", province_r14.name, " ");
        }
      }

      var OwnerIndividualComponent = /*#__PURE__*/function (_core_components__WEB3) {
        _inherits(OwnerIndividualComponent, _core_components__WEB3);

        var _super3 = _createSuper(OwnerIndividualComponent);

        function OwnerIndividualComponent(activatedRoute) {
          var _this3;

          _classCallCheck(this, OwnerIndividualComponent);

          _this3 = _super3.call(this);
          _this3.activatedRoute = activatedRoute;
          _this3.previousClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this3.nextClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this3.countries = [];
          _this3.provinces = [];
          return _this3;
        }

        _createClass(OwnerIndividualComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.countries = this.datasService.countries;
            this.provinces = this.datasService.provinces;
            this.ownerType = this.activatedRoute.snapshot.paramMap.get("ownerType").toUpperCase();

            if (this.ownerType) {
              this.setOwnerCompanyForm();
              this.listenProvinceChanges();
            }
          }
        }, {
          key: "listenProvinceChanges",
          value: function listenProvinceChanges() {
            var _this4 = this;

            this.filteredProvinces = this.ownerIndividualForm.get("address").get("province").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this4.filterProvince(value);
            }));
          }
        }, {
          key: "filterProvince",
          value: function filterProvince(value) {
            var filterValue = value.toLowerCase();
            return this.provinces.filter(function (province) {
              return province.value.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "setOwnerCompanyForm",
          value: function setOwnerCompanyForm() {
            this.contactsFormArray = this.formBuilder.array([this.createContact()]);
            this.ownerIndividualForm = this.formBuilder.group({
              ownerType: [this.ownerType],
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              citizenshipNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              panNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              address: this.formBuilder.group({
                addressLine1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                addressLine2: "",
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                wardNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                province: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                street: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              }),
              contacts: this.contactsFormArray
            });
            var defaultCountry = this.countries.filter(function (c) {
              return c.value === "Nepal";
            }).map(function (res) {
              return res.value;
            });
            this.ownerIndividualForm.get("address").get("country").setValue(defaultCountry[0]);
          }
        }, {
          key: "createContact",
          value: function createContact() {
            return this.formBuilder.group({
              type: ["phone"],
              number: ""
            });
          }
        }, {
          key: "addContact",
          value: function addContact() {
            this.contactsFormArray.push(this.createContact());
          }
        }, {
          key: "removeContact",
          value: function removeContact(index) {
            this.contactsFormArray.removeAt(index);
          }
        }, {
          key: "onPrevious",
          value: function onPrevious() {
            this.previousClicked.next();
          }
        }, {
          key: "onNext",
          value: function onNext() {
            if (this.ownerIndividualForm.valid) {
              this.ownerIndividualForm.value["phones"] = this.ownerIndividualForm.value.contacts.filter(function (contact) {
                return contact.type === "phone";
              }).map(function (el) {
                return el.number.toString();
              });
              this.ownerIndividualForm.value["mobileNumbers"] = this.ownerIndividualForm.value.contacts.filter(function (contact) {
                return contact.type === "mobile";
              }).map(function (el) {
                return el.number.toString();
              });
              this.nextClicked.emit(this.ownerIndividualForm.value);
            }
          }
        }, {
          key: "getContactLabel",
          value: function getContactLabel(index) {
            return "Phone";
          }
        }, {
          key: "onPhoneIconClick",
          value: function onPhoneIconClick(index) {
            this.contactsFormArray.controls[index]["controls"]["type"].setValue("phone");
          }
        }, {
          key: "onMobileIconClick",
          value: function onMobileIconClick(index) {
            this.contactsFormArray.controls[index]["controls"]["type"].setValue("mobile");
          }
        }]);

        return OwnerIndividualComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      OwnerIndividualComponent.ɵfac = function OwnerIndividualComponent_Factory(t) {
        return new (t || OwnerIndividualComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      OwnerIndividualComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OwnerIndividualComponent,
        selectors: [["app-owner-individual"]],
        inputs: {
          pathName: "pathName"
        },
        outputs: {
          previousClicked: "previousClicked",
          nextClicked: "nextClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 107,
        vars: 20,
        consts: [[3, "pathName"], [1, "detail-form", 3, "formGroup"], [1, "form-field-wrapper"], ["type", "text", "matInput", "", "formControlName", "name"], [3, "control"], ["type", "text", "matInput", "", "formControlName", "panNumber"], ["type", "text", "matInput", "", "formControlName", "citizenshipNumber"], ["type", "text", "matInput", "", "formControlName", "email"], [1, "contact-details", "contact-details-individual"], [1, "form-section-title"], [1, "las", "la-plus", 3, "click"], ["formArrayName", "contacts", 4, "ngFor", "ngForOf"], ["formGroupName", "address", 1, "address-details", "address-details-individual"], [1, "d-flex", "has-2-cols"], [1, "form-field-wrapper", "col", "full-width"], ["type", "text", "matInput", "", "formControlName", "addressLine1"], ["type", "text", "matInput", "", "formControlName", "addressLine2"], [1, "form-field-wrapper", "col"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select Province", "matInput", "", "formControlName", "province", 3, "matAutocomplete"], ["auto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "zipCode", "appOnlyNumber", ""], ["matInput", "", "formControlName", "wardNo", "appOnlyNumber", ""], ["matInput", "", "formControlName", "street"], [1, "buttons-wrapper", "d-flex"], ["mat-button", "", 1, "btn", "btn-theme-white", 3, "click"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"], ["formArrayName", "contacts"], [1, "d-flex", "has-2-cols", 3, "formGroupName"], [1, "contact-type-options"], ["mat-icon-button", "", "matPrefix", "", 1, "matPrefix", 3, "click"], [1, "las", "la-phone"], [1, "las", "la-mobile"], ["appOnlyNumber", "", "matInput", "", "formControlName", "number"], ["mat-icon-button", "", "matSuffix", "", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", ""], [1, "las", "la-minus-circle", 3, "click"], [3, "value"]],
        template: function OwnerIndividualComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Individual Detail as owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Full Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " PAN Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Citizenship Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerIndividualComponent_Template_i_click_35_listener() {
              return ctx.addContact();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, OwnerIndividualComponent_ng_container_36_Template, 13, 7, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Address Line 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Address Line 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, OwnerIndividualComponent_mat_option_60_Template, 2, 2, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Province ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-autocomplete", null, 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, OwnerIndividualComponent_mat_option_70_Template, 2, 2, "mat-option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Zip Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Ward No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Street ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerIndividualComponent_Template_a_click_103_listener() {
              return ctx.onPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerIndividualComponent_Template_button_click_105_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ownerIndividualForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("panNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("citizenshipNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactsFormArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("addressLine1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("addressLine2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("country"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 18, ctx.filteredProvinces));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("province"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("city"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("zipCode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("wardNo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.ownerIndividualForm.get("address").get("street"));
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_5__["WizardSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__["OnlyNumberDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvb3duZXItaW5kaXZpZHVhbC9vd25lci1pbmRpdmlkdWFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerIndividualComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-owner-individual",
            templateUrl: "./owner-individual.component.html",
            styleUrls: ["./owner-individual.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, {
          previousClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nextClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/owner-type/owner-type.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/features/on-board/components/owner-type/owner-type.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: OwnerTypeComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsOwnerTypeOwnerTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerTypeComponent", function () {
        return OwnerTypeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function OwnerTypeComponent_ng_container_4_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
        }
      }

      function OwnerTypeComponent_ng_container_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        }
      }

      function OwnerTypeComponent_ng_container_4_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Company with multiple sites");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OwnerTypeComponent_ng_container_4_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Individual complex");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function OwnerTypeComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerTypeComponent_ng_container_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ownershipType_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onSelectOwnerType(ownershipType_r1.code);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OwnerTypeComponent_ng_container_4_i_3_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OwnerTypeComponent_ng_container_4_i_4_Template, 1, 0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OwnerTypeComponent_ng_container_4_span_8_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OwnerTypeComponent_ng_container_4_span_9_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ownershipType_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ownershipType_r1.code === ctx_r0.selectedOwnerTypeCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ownershipType_r1.code === "COMPANY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ownershipType_r1.code === "INDIVIDUAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ownershipType_r1 == null ? null : ownershipType_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ownershipType_r1.code === "COMPANY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ownershipType_r1.code === "INDIVIDUAL");
        }
      }

      var OwnerTypeComponent = /*#__PURE__*/function (_core_components__WEB4) {
        _inherits(OwnerTypeComponent, _core_components__WEB4);

        var _super4 = _createSuper(OwnerTypeComponent);

        function OwnerTypeComponent() {
          _classCallCheck(this, OwnerTypeComponent);

          return _super4.call(this);
        }

        _createClass(OwnerTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedOwnerTypeCode = "COMPANY";
          }
        }, {
          key: "onNext",
          value: function onNext() {
            if (this.selectedOwnerTypeCode === "COMPANY") {
              this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_OWNER_COMPANY);
            }

            if (this.selectedOwnerTypeCode === "INDIVIDUAL") {
              this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_OWNER_INDIVIDUAL);
            }
          }
        }, {
          key: "onSelectOwnerType",
          value: function onSelectOwnerType(ownerTypeCode) {
            this.selectedOwnerTypeCode = ownerTypeCode;
          }
        }]);

        return OwnerTypeComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      OwnerTypeComponent.ɵfac = function OwnerTypeComponent_Factory(t) {
        return new (t || OwnerTypeComponent)();
      };

      OwnerTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OwnerTypeComponent,
        selectors: [["app-owner-type"]],
        inputs: {
          pathName: "pathName",
          ownershipTypes$: "ownershipTypes$"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 4,
        consts: [[3, "pathName"], [1, "lists", "lists-owner-type"], [4, "ngFor", "ngForOf"], [1, "buttons-wrapper", "d-flex"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"], ["mat-list-item", "", 1, "d-flex", "lists-item", "selected", 3, "click"], ["class", "las la-city", 4, "ngIf"], ["class", "las la-building", 4, "ngIf"], [1, "lists-item-content"], [4, "ngIf"], [1, "las", "la-city"], [1, "las", "la-building"]],
        template: function OwnerTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Owner Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OwnerTypeComponent_ng_container_4_Template, 10, 7, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OwnerTypeComponent_Template_button_click_7_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.ownershipTypes$));
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_3__["WizardSectionComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerTypeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-owner-type",
            templateUrl: "./owner-type.component.html"
          }]
        }], function () {
          return [];
        }, {
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          ownershipTypes$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/property-apartment/property-apartment.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/features/on-board/components/property-apartment/property-apartment.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PropertyApartmentComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsPropertyApartmentPropertyApartmentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyApartmentComponent", function () {
        return PropertyApartmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var PropertyApartmentComponent = /*#__PURE__*/function () {
        function PropertyApartmentComponent() {
          _classCallCheck(this, PropertyApartmentComponent);
        }

        _createClass(PropertyApartmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PropertyApartmentComponent;
      }();

      PropertyApartmentComponent.ɵfac = function PropertyApartmentComponent_Factory(t) {
        return new (t || PropertyApartmentComponent)();
      };

      PropertyApartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyApartmentComponent,
        selectors: [["app-property-apartment"]],
        decls: 93,
        vars: 0,
        consts: [[1, "detail-form"], [1, "form-field-wrapper"], ["type", "text", "matInput", ""], [1, "form-field-input"], ["type", "text"], [1, "underline"], [1, "contact-details", "contact-details-site"], [1, "form-section-title"], [1, "las", "la-plus"], [1, "d-flex", "has-2-cols"], [1, "form-field-wrapper", "col"], ["type", "number", "matInput", ""], [1, "address-details", "address-details-site"], [1, "form-field-wrapper", "col", "full-width"], ["value", "nepal"], ["value", "bagmati"], ["matInput", ""], [1, "buttons-wrapper", "d-flex"], ["href", "owner-type.html", "mat-button", "", 1, "btn", "btn-theme-white"], ["mat-button", "", 1, "btn", "btn-theme-green"]],
        template: function PropertyApartmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Housing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Site Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Apartment Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Address Line 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Address Line 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Nepal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Province ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Bagmati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Zip Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Ward No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Facilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "No. of Houses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_1__["WizardSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvcHJvcGVydHktYXBhcnRtZW50L3Byb3BlcnR5LWFwYXJ0bWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyApartmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-apartment",
            templateUrl: "./property-apartment.component.html",
            styleUrls: ["./property-apartment.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/property-detail/property-detail.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/on-board/components/property-detail/property-detail.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PropertyDetailComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsPropertyDetailPropertyDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyDetailComponent", function () {
        return PropertyDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function PropertyDetailComponent_ng_container_23_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_ng_container_23_button_12_Template_i_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.removeContact(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyDetailComponent_ng_container_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_ng_container_23_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r5 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.onPhoneIconClick(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_ng_container_23_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r5 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.onMobileIconClick(i_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PropertyDetailComponent_ng_container_23_button_12_Template, 2, 0, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var contact_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", contact_r4.value.type === "phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", contact_r4.value.type === "mobile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", contact_r4.value.type, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.contactsFormArray.controls.length > 1);
        }
      }

      function PropertyDetailComponent_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", country_r13.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r13.title);
        }
      }

      function PropertyDetailComponent_mat_option_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var province_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", province_r14.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", province_r14.name, " ");
        }
      }

      var PropertyDetailComponent = /*#__PURE__*/function (_core_components__WEB5) {
        _inherits(PropertyDetailComponent, _core_components__WEB5);

        var _super5 = _createSuper(PropertyDetailComponent);

        function PropertyDetailComponent(activatedRoute) {
          var _this5;

          _classCallCheck(this, PropertyDetailComponent);

          _this5 = _super5.call(this);
          _this5.activatedRoute = activatedRoute;
          _this5.previousClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this5.nextClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this5.countries = [];
          _this5.provinces = [];
          _this5.ownerId = _this5.activatedRoute.snapshot.paramMap.get("ownerId");
          _this5.propertyType = _this5.activatedRoute.snapshot.paramMap.get("propertyType").toUpperCase();
          return _this5;
        }

        _createClass(PropertyDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.countries = this.datasService.countries;
            this.provinces = this.datasService.provinces;
            this.setPropertyDetailForm();
            this.listenProvinceChanges();
          }
        }, {
          key: "listenProvinceChanges",
          value: function listenProvinceChanges() {
            var _this6 = this;

            this.filteredProvinces = this.propertyDetailForm.get("address").get("province").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(""), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) {
              return _this6.filterProvince(value);
            }));
          }
        }, {
          key: "filterProvince",
          value: function filterProvince(value) {
            var filterValue = value.toLowerCase();
            return this.provinces.filter(function (province) {
              return province.value.toLowerCase().includes(filterValue);
            });
          }
        }, {
          key: "setPropertyDetailForm",
          value: function setPropertyDetailForm() {
            this.contactsFormArray = this.formBuilder.array([this.createContact()]);
            this.propertyDetailForm = this.formBuilder.group({
              ownerId: [this.ownerId],
              propertyType: [this.propertyType],
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              address: this.formBuilder.group({
                addressLine1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                addressLine2: "",
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                wardNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                province: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                street: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
              }),
              contacts: this.contactsFormArray,
              facilities: [""]
            });
            var defaultCountry = this.countries.filter(function (c) {
              return c.value === "Nepal";
            }).map(function (res) {
              return res.value;
            });
            this.propertyDetailForm.get("address").get("country").setValue(defaultCountry[0]);
          }
        }, {
          key: "onPrevious",
          value: function onPrevious() {
            this.previousClicked.next();
          }
        }, {
          key: "onNext",
          value: function onNext() {
            if (this.propertyDetailForm.valid) {
              this.propertyDetailForm.value["phones"] = this.propertyDetailForm.value.contacts.filter(function (contact) {
                return contact.type === "phone";
              }).map(function (el) {
                return el.number.toString();
              });
              this.propertyDetailForm.value["mobileNumbers"] = this.propertyDetailForm.value.contacts.filter(function (contact) {
                return contact.type === "mobile";
              }).map(function (el) {
                return el.number.toString();
              });
              this.nextClicked.emit(this.propertyDetailForm.value);
            }
          }
        }, {
          key: "createContact",
          value: function createContact() {
            return this.formBuilder.group({
              type: ["phone"],
              number: ""
            });
          }
        }, {
          key: "addContact",
          value: function addContact() {
            this.contactsFormArray.push(this.createContact());
          }
        }, {
          key: "removeContact",
          value: function removeContact(index) {
            this.contactsFormArray.removeAt(index);
          }
        }, {
          key: "onPhoneIconClick",
          value: function onPhoneIconClick(index) {
            this.contactsFormArray.controls[index]["controls"]["type"].setValue("phone");
          }
        }, {
          key: "onMobileIconClick",
          value: function onMobileIconClick(index) {
            this.contactsFormArray.controls[index]["controls"]["type"].setValue("mobile");
          }
        }]);

        return PropertyDetailComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      PropertyDetailComponent.ɵfac = function PropertyDetailComponent_Factory(t) {
        return new (t || PropertyDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      PropertyDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyDetailComponent,
        selectors: [["app-property-detail"]],
        inputs: {
          pathName: "pathName"
        },
        outputs: {
          previousClicked: "previousClicked",
          nextClicked: "nextClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 101,
        vars: 22,
        consts: [[3, "pathName"], [1, "detail-form", 3, "formGroup"], [1, "form-field-wrapper"], ["type", "text", "matInput", "", "formControlName", "name"], [3, "control"], ["type", "email", "matInput", "", "formControlName", "email"], [1, "contact-details", "contact-details-site"], [1, "form-section-title"], [1, "las", "la-plus", 3, "click"], ["formArrayName", "contacts", 4, "ngFor", "ngForOf"], ["formGroupName", "address", 1, "address-details", "address-details-site"], [1, "d-flex", "has-2-cols"], [1, "form-field-wrapper", "col", "full-width"], ["type", "text", "matInput", "", "formControlName", "addressLine1"], ["type", "text", "matInput", "", "formControlName", "addressLine2"], [1, "form-field-wrapper", "col"], ["formControlName", "country"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Select Province", "matInput", "", "formControlName", "province", 3, "matAutocomplete"], ["auto", "matAutocomplete"], ["type", "text", "matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "zipCode", "appOnlyNumber", ""], ["matInput", "", "formControlName", "wardNo", "appOnlyNumber", ""], ["matInput", "", "formControlName", "street"], ["matInput", "", "formControlName", "facilities"], [1, "buttons-wrapper", "d-flex"], ["mat-button", "", 1, "btn", "btn-theme-white", 3, "click"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"], ["formArrayName", "contacts"], [1, "d-flex", "has-2-cols", 3, "formGroupName"], [1, "contact-type-options"], ["mat-icon-button", "", "matPrefix", "", 1, "matPrefix", 3, "click"], [1, "las", "la-phone"], [1, "las", "la-mobile"], ["appOnlyNumber", "", "matInput", "", "formControlName", "number"], ["mat-icon-button", "", "matSuffix", "", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", ""], [1, "las", "la-minus-circle", 3, "click"], [3, "value"]],
        template: function PropertyDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Property Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Company Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_Template_i_click_22_listener() {
              return ctx.addContact();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, PropertyDetailComponent_ng_container_23_Template, 13, 7, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Address Line 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Address Line 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-select", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, PropertyDetailComponent_mat_option_47_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Province ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-autocomplete", null, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PropertyDetailComponent_mat_option_57_Template, 2, 2, "mat-option", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Zip Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Ward No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Street ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Facilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "textarea", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "app-error-message", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_Template_a_click_97_listener() {
              return ctx.onPrevious();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyDetailComponent_Template_button_click_99_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 18, ctx.propertyType));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.propertyDetailForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("email"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contactsFormArray.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("addressLine1"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("addressLine2"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countries);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("country"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 20, ctx.filteredProvinces));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("province"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("city"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("zipCode"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("wardNo"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("address").get("street"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.propertyDetailForm.get("facilities"));
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_5__["WizardSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__["OnlyNumberDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvcHJvcGVydHktZGV0YWlsL3Byb3BlcnR5LWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-detail",
            templateUrl: "./property-detail.component.html",
            styleUrls: ["./property-detail.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, {
          previousClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          nextClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/property-housing/property-housing.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/features/on-board/components/property-housing/property-housing.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: PropertyHousingComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsPropertyHousingPropertyHousingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyHousingComponent", function () {
        return PropertyHousingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var PropertyHousingComponent = /*#__PURE__*/function () {
        function PropertyHousingComponent() {
          _classCallCheck(this, PropertyHousingComponent);
        }

        _createClass(PropertyHousingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PropertyHousingComponent;
      }();

      PropertyHousingComponent.ɵfac = function PropertyHousingComponent_Factory(t) {
        return new (t || PropertyHousingComponent)();
      };

      PropertyHousingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyHousingComponent,
        selectors: [["app-property-housing"]],
        decls: 93,
        vars: 0,
        consts: [[1, "detail-form"], [1, "form-field-wrapper"], ["type", "text", "matInput", ""], [1, "form-field-input"], ["type", "text"], [1, "underline"], [1, "contact-details", "contact-details-site"], [1, "form-section-title"], [1, "las", "la-plus"], [1, "d-flex", "has-2-cols"], [1, "form-field-wrapper", "col"], ["type", "number", "matInput", ""], [1, "address-details", "address-details-site"], [1, "form-field-wrapper", "col", "full-width"], ["value", "nepal"], ["value", "bagmati"], ["matInput", ""], [1, "buttons-wrapper", "d-flex"], ["href", "owner-type.html", "mat-button", "", 1, "btn", "btn-theme-white"], ["mat-button", "", 1, "btn", "btn-theme-green"]],
        template: function PropertyHousingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Housing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Site Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "House Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Address Line 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Address Line 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Nepal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Province ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-select");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Bagmati");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Zip Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Ward No. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Facilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "textarea", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "No. of Houses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Previous");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_1__["WizardSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbXBvbmVudHMvcHJvcGVydHktaG91c2luZy9wcm9wZXJ0eS1ob3VzaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyHousingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-housing",
            templateUrl: "./property-housing.component.html",
            styleUrls: ["./property-housing.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/components/property-type/property-type.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/on-board/components/property-type/property-type.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PropertyTypeComponent */

    /***/
    function srcAppFeaturesOnBoardComponentsPropertyTypePropertyTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTypeComponent", function () {
        return PropertyTypeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function PropertyTypeComponent_ng_container_4_i_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
        }
      }

      function PropertyTypeComponent_ng_container_4_i_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
        }
      }

      function PropertyTypeComponent_ng_container_4_span_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Residence flat");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyTypeComponent_ng_container_4_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Individual house");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function PropertyTypeComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyTypeComponent_ng_container_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var propertyType_r1 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onSelectPropertyType(propertyType_r1.code);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PropertyTypeComponent_ng_container_4_i_3_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyTypeComponent_ng_container_4_i_4_Template, 1, 0, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PropertyTypeComponent_ng_container_4_span_8_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PropertyTypeComponent_ng_container_4_span_9_Template, 2, 0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var propertyType_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", propertyType_r1.code === ctx_r0.selectedPropertyTypeCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", propertyType_r1.code === "APARTMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", propertyType_r1.code === "HOUSING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](propertyType_r1 == null ? null : propertyType_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", propertyType_r1.code === "APARTMENT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", propertyType_r1.code === "HOUSING");
        }
      }

      var PropertyTypeComponent = /*#__PURE__*/function (_core_components__WEB6) {
        _inherits(PropertyTypeComponent, _core_components__WEB6);

        var _super6 = _createSuper(PropertyTypeComponent);

        function PropertyTypeComponent(activatedRoute) {
          var _this7;

          _classCallCheck(this, PropertyTypeComponent);

          _this7 = _super6.call(this);
          _this7.activatedRoute = activatedRoute;
          return _this7;
        }

        _createClass(PropertyTypeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ownerId = this.activatedRoute.snapshot.paramMap.get("ownerId");
            this.selectedPropertyTypeCode = "APARTMENT";
          }
        }, {
          key: "onNext",
          value: function onNext() {
            if (this.selectedPropertyTypeCode === "APARTMENT") {
              this.redirectTo("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_PROPERTY_DETAIL, "/").concat(this.ownerId, "/apartment"));
            }

            if (this.selectedPropertyTypeCode === "HOUSING") {
              this.redirectTo("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_PROPERTY_DETAIL, "/").concat(this.ownerId, "/housing"));
            }
          }
        }, {
          key: "onSelectPropertyType",
          value: function onSelectPropertyType(propertyTypeCode) {
            this.selectedPropertyTypeCode = propertyTypeCode;
          }
        }]);

        return PropertyTypeComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      PropertyTypeComponent.ɵfac = function PropertyTypeComponent_Factory(t) {
        return new (t || PropertyTypeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      PropertyTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyTypeComponent,
        selectors: [["app-property-type"]],
        inputs: {
          pathName: "pathName",
          propertyTypes$: "propertyTypes$"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 9,
        vars: 4,
        consts: [[3, "pathName"], [1, "lists", "lists-site-type"], [4, "ngFor", "ngForOf"], [1, "buttons-wrapper", "d-flex"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"], ["mat-list-item", "", 1, "d-flex", "lists-item", "selected", 3, "click"], ["class", "las la-city", 4, "ngIf"], ["class", "las la-building", 4, "ngIf"], [1, "lists-item-content"], [4, "ngIf"], [1, "las", "la-city"], [1, "las", "la-building"]],
        template: function PropertyTypeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-wizard-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Property Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PropertyTypeComponent_ng_container_4_Template, 10, 7, "ng-container", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyTypeComponent_Template_button_click_7_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.propertyTypes$));
          }
        },
        directives: [_shared_wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_4__["WizardSectionComponent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyTypeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-type",
            templateUrl: "./property-type.component.html"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          propertyTypes$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/greet/greet-container.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/features/on-board/containers/greet/greet-container.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: GreetContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersGreetGreetContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GreetContainerComponent", function () {
        return GreetContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../core/components/base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony import */


      var _components_greet_greet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/greet/greet.component */
      "./src/app/features/on-board/components/greet/greet.component.ts");

      var GreetContainerComponent = /*#__PURE__*/function (_core_components_base) {
        _inherits(GreetContainerComponent, _core_components_base);

        var _super7 = _createSuper(GreetContainerComponent);

        function GreetContainerComponent() {
          var _this8;

          _classCallCheck(this, GreetContainerComponent);

          _this8 = _super7.call(this);

          _this8.router.events.subscribe(function (val) {
            _this8.pathName = location.pathname;
          });

          return _this8;
        }

        _createClass(GreetContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GreetContainerComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      GreetContainerComponent.ɵfac = function GreetContainerComponent_Factory(t) {
        return new (t || GreetContainerComponent)();
      };

      GreetContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GreetContainerComponent,
        selectors: [["app-greet-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "pathName"]],
        template: function GreetContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-greet", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);
          }
        },
        directives: [_components_greet_greet_component__WEBPACK_IMPORTED_MODULE_2__["GreetComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbnRhaW5lcnMvZ3JlZXQvZ3JlZXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GreetContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-greet-container",
            templateUrl: "./greet-container.component.html",
            styleUrls: ["./greet-container.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/owner-detail/owner-detail-container.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/features/on-board/containers/owner-detail/owner-detail-container.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: OwnerDetailContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersOwnerDetailOwnerDetailContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerDetailContainerComponent", function () {
        return OwnerDetailContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../store/actions/on-board.actions */
      "./src/app/features/on-board/store/actions/on-board.actions.ts");
      /* harmony import */


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../../../core/components/base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_owner_company_owner_company_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/owner-company/owner-company.component */
      "./src/app/features/on-board/components/owner-company/owner-company.component.ts");
      /* harmony import */


      var _components_owner_individual_owner_individual_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/owner-individual/owner-individual.component */
      "./src/app/features/on-board/components/owner-individual/owner-individual.component.ts");

      function OwnerDetailContainerComponent_app_owner_company_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-owner-company", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousClicked", function OwnerDetailContainerComponent_app_owner_company_0_Template_app_owner_company_previousClicked_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onPreviousClick();
          })("nextClicked", function OwnerDetailContainerComponent_app_owner_company_0_Template_app_owner_company_nextClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onNextClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx_r0.pathName);
        }
      }

      function OwnerDetailContainerComponent_app_owner_individual_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-owner-individual", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousClicked", function OwnerDetailContainerComponent_app_owner_individual_1_Template_app_owner_individual_previousClicked_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onPreviousClick();
          })("nextClicked", function OwnerDetailContainerComponent_app_owner_individual_1_Template_app_owner_individual_nextClicked_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onNextClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx_r1.pathName);
        }
      }

      var OwnerDetailContainerComponent = /*#__PURE__*/function (_core_components_base2) {
        _inherits(OwnerDetailContainerComponent, _core_components_base2);

        var _super8 = _createSuper(OwnerDetailContainerComponent);

        function OwnerDetailContainerComponent(activatedRoute, store) {
          var _this9;

          _classCallCheck(this, OwnerDetailContainerComponent);

          _this9 = _super8.call(this);
          _this9.activatedRoute = activatedRoute;
          _this9.store = store;

          _this9.router.events.subscribe(function (val) {
            _this9.pathName = location.pathname;
          });

          return _this9;
        }

        _createClass(OwnerDetailContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ownerType = this.activatedRoute.snapshot.paramMap.get("ownerType");
          }
        }, {
          key: "onPreviousClick",
          value: function onPreviousClick() {
            this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].ON_BOARD_OWNER_TYPE);
          }
        }, {
          key: "onNextClick",
          value: function onNextClick(ownerDetailPayload) {
            this.store.dispatch(Object(_store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__["onBoardOwner"])({
              payload: ownerDetailPayload
            }));
          }
        }]);

        return OwnerDetailContainerComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

      OwnerDetailContainerComponent.ɵfac = function OwnerDetailContainerComponent_Factory(t) {
        return new (t || OwnerDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
      };

      OwnerDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OwnerDetailContainerComponent,
        selectors: [["app-owner-detail-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 2,
        consts: [[3, "pathName", "previousClicked", "nextClicked", 4, "ngIf"], [3, "pathName", "previousClicked", "nextClicked"]],
        template: function OwnerDetailContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OwnerDetailContainerComponent_app_owner_company_0_Template, 1, 1, "app-owner-company", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OwnerDetailContainerComponent_app_owner_individual_1_Template, 1, 1, "app-owner-individual", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerType === "company");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ownerType === "individual");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_owner_company_owner_company_component__WEBPACK_IMPORTED_MODULE_7__["OwnerCompanyComponent"], _components_owner_individual_owner_individual_component__WEBPACK_IMPORTED_MODULE_8__["OwnerIndividualComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbnRhaW5lcnMvb3duZXItZGV0YWlsL293bmVyLWRldGFpbC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerDetailContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-owner-detail-container",
            templateUrl: "./owner-detail-container.component.html",
            styleUrls: ["./owner-detail-container.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/owner-type/owner-type-container.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/on-board/containers/owner-type/owner-type-container.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: OwnerTypeContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersOwnerTypeOwnerTypeContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OwnerTypeContainerComponent", function () {
        return OwnerTypeContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../store/actions/on-board.actions */
      "./src/app/features/on-board/store/actions/on-board.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components_owner_type_owner_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/owner-type/owner-type.component */
      "./src/app/features/on-board/components/owner-type/owner-type.component.ts");

      var OwnerTypeContainerComponent = /*#__PURE__*/function (_core_components__WEB7) {
        _inherits(OwnerTypeContainerComponent, _core_components__WEB7);

        var _super9 = _createSuper(OwnerTypeContainerComponent);

        function OwnerTypeContainerComponent(store) {
          var _this10;

          _classCallCheck(this, OwnerTypeContainerComponent);

          _this10 = _super9.call(this);
          _this10.store = store;

          _this10.router.events.subscribe(function (val) {
            _this10.pathName = location.pathname;
          });

          return _this10;
        }

        _createClass(OwnerTypeContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ownershipTypes$ = this.store.select(function (store) {
              return store.onBoard.ownershipTypes;
            });
            this.store.dispatch(Object(_store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__["loadOwnershipType"])(null));
          }
        }]);

        return OwnerTypeContainerComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      OwnerTypeContainerComponent.ɵfac = function OwnerTypeContainerComponent_Factory(t) {
        return new (t || OwnerTypeContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      OwnerTypeContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OwnerTypeContainerComponent,
        selectors: [["app-owner-type-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 2,
        consts: [[3, "pathName", "ownershipTypes$"]],
        template: function OwnerTypeContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-owner-type", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName)("ownershipTypes$", ctx.ownershipTypes$);
          }
        },
        directives: [_components_owner_type_owner_type_component__WEBPACK_IMPORTED_MODULE_4__["OwnerTypeComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwnerTypeContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-owner-type-container",
            templateUrl: "./owner-type-container.component.html"
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/property-apartment/property-apartment-container.component.ts":
    /*!***********************************************************************************************************!*\
      !*** ./src/app/features/on-board/containers/property-apartment/property-apartment-container.component.ts ***!
      \***********************************************************************************************************/

    /*! exports provided: PropertyApartmentContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersPropertyApartmentPropertyApartmentContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyApartmentContainerComponent", function () {
        return PropertyApartmentContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _components_property_apartment_property_apartment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/property-apartment/property-apartment.component */
      "./src/app/features/on-board/components/property-apartment/property-apartment.component.ts");

      var PropertyApartmentContainerComponent = /*#__PURE__*/function () {
        function PropertyApartmentContainerComponent() {
          _classCallCheck(this, PropertyApartmentContainerComponent);
        }

        _createClass(PropertyApartmentContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PropertyApartmentContainerComponent;
      }();

      PropertyApartmentContainerComponent.ɵfac = function PropertyApartmentContainerComponent_Factory(t) {
        return new (t || PropertyApartmentContainerComponent)();
      };

      PropertyApartmentContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyApartmentContainerComponent,
        selectors: [["app-property-apartment-container"]],
        decls: 1,
        vars: 0,
        template: function PropertyApartmentContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-property-apartment");
          }
        },
        directives: [_components_property_apartment_property_apartment_component__WEBPACK_IMPORTED_MODULE_1__["PropertyApartmentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbnRhaW5lcnMvcHJvcGVydHktYXBhcnRtZW50L3Byb3BlcnR5LWFwYXJ0bWVudC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyApartmentContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-apartment-container",
            templateUrl: "./property-apartment-container.component.html",
            styleUrls: ["./property-apartment-container.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/property-detail/property-detail-container.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/features/on-board/containers/property-detail/property-detail-container.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: PropertyDetailContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersPropertyDetailPropertyDetailContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyDetailContainerComponent", function () {
        return PropertyDetailContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../../core/components/base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony import */


      var _store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../store/actions/on-board.actions */
      "./src/app/features/on-board/store/actions/on-board.actions.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/property-detail/property-detail.component */
      "./src/app/features/on-board/components/property-detail/property-detail.component.ts");

      var PropertyDetailContainerComponent = /*#__PURE__*/function (_core_components_base3) {
        _inherits(PropertyDetailContainerComponent, _core_components_base3);

        var _super10 = _createSuper(PropertyDetailContainerComponent);

        function PropertyDetailContainerComponent(activatedRoute, store) {
          var _this11;

          _classCallCheck(this, PropertyDetailContainerComponent);

          _this11 = _super10.call(this);
          _this11.activatedRoute = activatedRoute;
          _this11.store = store;

          _this11.router.events.subscribe(function (val) {
            _this11.pathName = location.pathname;
          });

          return _this11;
        }

        _createClass(PropertyDetailContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.propertyType = this.activatedRoute.snapshot.paramMap.get("propertyType");
            this.ownerId = this.activatedRoute.snapshot.paramMap.get("ownerId");
          }
        }, {
          key: "onNextClick",
          value: function onNextClick(propertyDetailPayload) {
            this.store.dispatch(Object(_store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__["onBoardProperty"])({
              payload: propertyDetailPayload
            }));
          }
        }, {
          key: "onPreviousClick",
          value: function onPreviousClick() {}
        }]);

        return PropertyDetailContainerComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      PropertyDetailContainerComponent.ɵfac = function PropertyDetailContainerComponent_Factory(t) {
        return new (t || PropertyDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      PropertyDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyDetailContainerComponent,
        selectors: [["app-property-detail-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "pathName", "previousClicked", "nextClicked"]],
        template: function PropertyDetailContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-property-detail", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("previousClicked", function PropertyDetailContainerComponent_Template_app_property_detail_previousClicked_0_listener() {
              return ctx.onPreviousClick();
            })("nextClicked", function PropertyDetailContainerComponent_Template_app_property_detail_nextClicked_0_listener($event) {
              return ctx.onNextClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName);
          }
        },
        directives: [_components_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_5__["PropertyDetailComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyDetailContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-detail-container",
            templateUrl: "./property-detail-container.component.html"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/property-housing/property-housing-container.component.ts":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/features/on-board/containers/property-housing/property-housing-container.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: PropertyHousingContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersPropertyHousingPropertyHousingContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyHousingContainerComponent", function () {
        return PropertyHousingContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _components_property_housing_property_housing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/property-housing/property-housing.component */
      "./src/app/features/on-board/components/property-housing/property-housing.component.ts");

      var PropertyHousingContainerComponent = /*#__PURE__*/function () {
        function PropertyHousingContainerComponent() {
          _classCallCheck(this, PropertyHousingContainerComponent);
        }

        _createClass(PropertyHousingContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PropertyHousingContainerComponent;
      }();

      PropertyHousingContainerComponent.ɵfac = function PropertyHousingContainerComponent_Factory(t) {
        return new (t || PropertyHousingContainerComponent)();
      };

      PropertyHousingContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyHousingContainerComponent,
        selectors: [["app-property-housing-container"]],
        decls: 1,
        vars: 0,
        template: function PropertyHousingContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-property-housing");
          }
        },
        directives: [_components_property_housing_property_housing_component__WEBPACK_IMPORTED_MODULE_1__["PropertyHousingComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL29uLWJvYXJkL2NvbnRhaW5lcnMvcHJvcGVydHktaG91c2luZy9wcm9wZXJ0eS1ob3VzaW5nLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyHousingContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-housing-container",
            templateUrl: "./property-housing-container.component.html",
            styleUrls: ["./property-housing-container.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/containers/property-type/property-type-container.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/features/on-board/containers/property-type/property-type-container.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: PropertyTypeContainerComponent */

    /***/
    function srcAppFeaturesOnBoardContainersPropertyTypePropertyTypeContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyTypeContainerComponent", function () {
        return PropertyTypeContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../store/actions/on-board.actions */
      "./src/app/features/on-board/store/actions/on-board.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components_property_type_property_type_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/property-type/property-type.component */
      "./src/app/features/on-board/components/property-type/property-type.component.ts");

      var PropertyTypeContainerComponent = /*#__PURE__*/function (_core_components__WEB8) {
        _inherits(PropertyTypeContainerComponent, _core_components__WEB8);

        var _super11 = _createSuper(PropertyTypeContainerComponent);

        function PropertyTypeContainerComponent(store) {
          var _this12;

          _classCallCheck(this, PropertyTypeContainerComponent);

          _this12 = _super11.call(this);
          _this12.store = store;

          _this12.router.events.subscribe(function (val) {
            _this12.pathName = location.pathname;
          });

          return _this12;
        }

        _createClass(PropertyTypeContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.propertyTypes$ = this.store.select(function (store) {
              return store.onBoard.propertyTypes;
            });
            this.store.dispatch(Object(_store_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_2__["loadPropertyType"])(null));
          }
        }]);

        return PropertyTypeContainerComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      PropertyTypeContainerComponent.ɵfac = function PropertyTypeContainerComponent_Factory(t) {
        return new (t || PropertyTypeContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      PropertyTypeContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyTypeContainerComponent,
        selectors: [["app-property-type-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 2,
        consts: [[3, "pathName", "propertyTypes$"]],
        template: function PropertyTypeContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-property-type", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pathName", ctx.pathName)("propertyTypes$", ctx.propertyTypes$);
          }
        },
        directives: [_components_property_type_property_type_component__WEBPACK_IMPORTED_MODULE_4__["PropertyTypeComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyTypeContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-type-container",
            templateUrl: "./property-type-container.component.html"
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/on-board.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/features/on-board/on-board.module.ts ***!
      \******************************************************/

    /*! exports provided: OnBoardModule */

    /***/
    function srcAppFeaturesOnBoardOnBoardModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardModule", function () {
        return OnBoardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _components_on_board_on_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/on-board/on-board.component */
      "./src/app/features/on-board/components/on-board/on-board.component.ts");
      /* harmony import */


      var _components_owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/owner-detail/owner-detail.component */
      "./src/app/features/on-board/components/owner-detail/owner-detail.component.ts");
      /* harmony import */


      var _components_owner_type_owner_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/owner-type/owner-type.component */
      "./src/app/features/on-board/components/owner-type/owner-type.component.ts");
      /* harmony import */


      var _components_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/property-detail/property-detail.component */
      "./src/app/features/on-board/components/property-detail/property-detail.component.ts");
      /* harmony import */


      var _components_property_type_property_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/property-type/property-type.component */
      "./src/app/features/on-board/components/property-type/property-type.component.ts");
      /* harmony import */


      var _containers_owner_detail_owner_detail_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./containers/owner-detail/owner-detail-container.component */
      "./src/app/features/on-board/containers/owner-detail/owner-detail-container.component.ts");
      /* harmony import */


      var _containers_owner_type_owner_type_container_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./containers/owner-type/owner-type-container.component */
      "./src/app/features/on-board/containers/owner-type/owner-type-container.component.ts");
      /* harmony import */


      var _containers_property_detail_property_detail_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./containers/property-detail/property-detail-container.component */
      "./src/app/features/on-board/containers/property-detail/property-detail-container.component.ts");
      /* harmony import */


      var _containers_property_type_property_type_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./containers/property-type/property-type-container.component */
      "./src/app/features/on-board/containers/property-type/property-type-container.component.ts");
      /* harmony import */


      var _on_board_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./on-board.routing.module */
      "./src/app/features/on-board/on-board.routing.module.ts");
      /* harmony import */


      var _store_effects_on_board_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./store/effects/on-board.effects */
      "./src/app/features/on-board/store/effects/on-board.effects.ts");
      /* harmony import */


      var _store_reducers_on_board_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./store/reducers/on-board.reducer */
      "./src/app/features/on-board/store/reducers/on-board.reducer.ts");
      /* harmony import */


      var _components_owner_company_owner_company_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/owner-company/owner-company.component */
      "./src/app/features/on-board/components/owner-company/owner-company.component.ts");
      /* harmony import */


      var _components_owner_individual_owner_individual_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/owner-individual/owner-individual.component */
      "./src/app/features/on-board/components/owner-individual/owner-individual.component.ts");
      /* harmony import */


      var _containers_property_housing_property_housing_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./containers/property-housing/property-housing-container.component */
      "./src/app/features/on-board/containers/property-housing/property-housing-container.component.ts");
      /* harmony import */


      var _components_property_housing_property_housing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/property-housing/property-housing.component */
      "./src/app/features/on-board/components/property-housing/property-housing.component.ts");
      /* harmony import */


      var _components_property_apartment_property_apartment_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/property-apartment/property-apartment.component */
      "./src/app/features/on-board/components/property-apartment/property-apartment.component.ts");
      /* harmony import */


      var _containers_property_apartment_property_apartment_container_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./containers/property-apartment/property-apartment-container.component */
      "./src/app/features/on-board/containers/property-apartment/property-apartment-container.component.ts");
      /* harmony import */


      var _containers_greet_greet_container_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./containers/greet/greet-container.component */
      "./src/app/features/on-board/containers/greet/greet-container.component.ts");
      /* harmony import */


      var _components_greet_greet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/greet/greet.component */
      "./src/app/features/on-board/components/greet/greet.component.ts");

      var OnBoardModule = function OnBoardModule() {
        _classCallCheck(this, OnBoardModule);
      };

      OnBoardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnBoardModule
      });
      OnBoardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnBoardModule_Factory(t) {
          return new (t || OnBoardModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _on_board_routing_module__WEBPACK_IMPORTED_MODULE_13__["OnBoardRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("onBoard", _store_reducers_on_board_reducer__WEBPACK_IMPORTED_MODULE_15__["onBoardReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_store_effects_on_board_effects__WEBPACK_IMPORTED_MODULE_14__["OnBoardEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnBoardModule, {
          declarations: [_components_on_board_on_board_component__WEBPACK_IMPORTED_MODULE_4__["OnBoardComponent"], _containers_owner_type_owner_type_container_component__WEBPACK_IMPORTED_MODULE_10__["OwnerTypeContainerComponent"], _components_owner_type_owner_type_component__WEBPACK_IMPORTED_MODULE_6__["OwnerTypeComponent"], _components_owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_5__["OwnerDetailComponent"], _containers_owner_detail_owner_detail_container_component__WEBPACK_IMPORTED_MODULE_9__["OwnerDetailContainerComponent"], _containers_property_type_property_type_container_component__WEBPACK_IMPORTED_MODULE_12__["PropertyTypeContainerComponent"], _components_property_type_property_type_component__WEBPACK_IMPORTED_MODULE_8__["PropertyTypeComponent"], _containers_property_detail_property_detail_container_component__WEBPACK_IMPORTED_MODULE_11__["PropertyDetailContainerComponent"], _components_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailComponent"], _components_owner_company_owner_company_component__WEBPACK_IMPORTED_MODULE_16__["OwnerCompanyComponent"], _components_owner_individual_owner_individual_component__WEBPACK_IMPORTED_MODULE_17__["OwnerIndividualComponent"], _containers_property_housing_property_housing_container_component__WEBPACK_IMPORTED_MODULE_18__["PropertyHousingContainerComponent"], _components_property_housing_property_housing_component__WEBPACK_IMPORTED_MODULE_19__["PropertyHousingComponent"], _components_property_apartment_property_apartment_component__WEBPACK_IMPORTED_MODULE_20__["PropertyApartmentComponent"], _containers_property_apartment_property_apartment_container_component__WEBPACK_IMPORTED_MODULE_21__["PropertyApartmentContainerComponent"], _containers_greet_greet_container_component__WEBPACK_IMPORTED_MODULE_22__["GreetContainerComponent"], _components_greet_greet_component__WEBPACK_IMPORTED_MODULE_23__["GreetComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _on_board_routing_module__WEBPACK_IMPORTED_MODULE_13__["OnBoardRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnBoardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_on_board_on_board_component__WEBPACK_IMPORTED_MODULE_4__["OnBoardComponent"], _containers_owner_type_owner_type_container_component__WEBPACK_IMPORTED_MODULE_10__["OwnerTypeContainerComponent"], _components_owner_type_owner_type_component__WEBPACK_IMPORTED_MODULE_6__["OwnerTypeComponent"], _components_owner_detail_owner_detail_component__WEBPACK_IMPORTED_MODULE_5__["OwnerDetailComponent"], _containers_owner_detail_owner_detail_container_component__WEBPACK_IMPORTED_MODULE_9__["OwnerDetailContainerComponent"], _containers_property_type_property_type_container_component__WEBPACK_IMPORTED_MODULE_12__["PropertyTypeContainerComponent"], _components_property_type_property_type_component__WEBPACK_IMPORTED_MODULE_8__["PropertyTypeComponent"], _containers_property_detail_property_detail_container_component__WEBPACK_IMPORTED_MODULE_11__["PropertyDetailContainerComponent"], _components_property_detail_property_detail_component__WEBPACK_IMPORTED_MODULE_7__["PropertyDetailComponent"], _components_owner_company_owner_company_component__WEBPACK_IMPORTED_MODULE_16__["OwnerCompanyComponent"], _components_owner_individual_owner_individual_component__WEBPACK_IMPORTED_MODULE_17__["OwnerIndividualComponent"], _containers_property_housing_property_housing_container_component__WEBPACK_IMPORTED_MODULE_18__["PropertyHousingContainerComponent"], _components_property_housing_property_housing_component__WEBPACK_IMPORTED_MODULE_19__["PropertyHousingComponent"], _components_property_apartment_property_apartment_component__WEBPACK_IMPORTED_MODULE_20__["PropertyApartmentComponent"], _containers_property_apartment_property_apartment_container_component__WEBPACK_IMPORTED_MODULE_21__["PropertyApartmentContainerComponent"], _containers_greet_greet_container_component__WEBPACK_IMPORTED_MODULE_22__["GreetContainerComponent"], _components_greet_greet_component__WEBPACK_IMPORTED_MODULE_23__["GreetComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _on_board_routing_module__WEBPACK_IMPORTED_MODULE_13__["OnBoardRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("onBoard", _store_reducers_on_board_reducer__WEBPACK_IMPORTED_MODULE_15__["onBoardReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_store_effects_on_board_effects__WEBPACK_IMPORTED_MODULE_14__["OnBoardEffects"]])]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/on-board.routing.module.ts":
    /*!**************************************************************!*\
      !*** ./src/app/features/on-board/on-board.routing.module.ts ***!
      \**************************************************************/

    /*! exports provided: OnBoardRoutingModule */

    /***/
    function srcAppFeaturesOnBoardOnBoardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardRoutingModule", function () {
        return OnBoardRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _components_on_board_on_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/on-board/on-board.component */
      "./src/app/features/on-board/components/on-board/on-board.component.ts");
      /* harmony import */


      var _containers_owner_detail_owner_detail_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers/owner-detail/owner-detail-container.component */
      "./src/app/features/on-board/containers/owner-detail/owner-detail-container.component.ts");
      /* harmony import */


      var _containers_owner_type_owner_type_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers/owner-type/owner-type-container.component */
      "./src/app/features/on-board/containers/owner-type/owner-type-container.component.ts");
      /* harmony import */


      var _containers_property_detail_property_detail_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./containers/property-detail/property-detail-container.component */
      "./src/app/features/on-board/containers/property-detail/property-detail-container.component.ts");
      /* harmony import */


      var _containers_property_type_property_type_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./containers/property-type/property-type-container.component */
      "./src/app/features/on-board/containers/property-type/property-type-container.component.ts");
      /* harmony import */


      var _containers_greet_greet_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./containers/greet/greet-container.component */
      "./src/app/features/on-board/containers/greet/greet-container.component.ts");
      /**
       * Owner type can be 'individual' or 'company'
       */


      var routes = [{
        path: "",
        component: _components_on_board_on_board_component__WEBPACK_IMPORTED_MODULE_2__["OnBoardComponent"],
        children: [{
          path: "",
          redirectTo: "owner-type",
          pathMatch: "full"
        }, {
          path: "owner-type",
          component: _containers_owner_type_owner_type_container_component__WEBPACK_IMPORTED_MODULE_4__["OwnerTypeContainerComponent"]
        }, {
          path: "owner-detail/:ownerType",
          component: _containers_owner_detail_owner_detail_container_component__WEBPACK_IMPORTED_MODULE_3__["OwnerDetailContainerComponent"]
        }, {
          path: "property-type/:ownerId",
          component: _containers_property_type_property_type_container_component__WEBPACK_IMPORTED_MODULE_6__["PropertyTypeContainerComponent"]
        }, {
          path: "property-detail/:ownerId/:propertyType",
          component: _containers_property_detail_property_detail_container_component__WEBPACK_IMPORTED_MODULE_5__["PropertyDetailContainerComponent"]
        }, {
          path: "greet",
          component: _containers_greet_greet_container_component__WEBPACK_IMPORTED_MODULE_7__["GreetContainerComponent"]
        }]
      }];

      var OnBoardRoutingModule = function OnBoardRoutingModule() {
        _classCallCheck(this, OnBoardRoutingModule);
      };

      OnBoardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: OnBoardRoutingModule
      });
      OnBoardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function OnBoardRoutingModule_Factory(t) {
          return new (t || OnBoardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](OnBoardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnBoardRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/services/on-board.service.ts":
    /*!****************************************************************!*\
      !*** ./src/app/features/on-board/services/on-board.service.ts ***!
      \****************************************************************/

    /*! exports provided: OnBoardService */

    /***/
    function srcAppFeaturesOnBoardServicesOnBoardServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardService", function () {
        return OnBoardService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _core_services_base_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../core/services/base/base.service */
      "./src/app/core/services/base/base.service.ts");

      var OnBoardService = /*#__PURE__*/function (_core_services_base_b) {
        _inherits(OnBoardService, _core_services_base_b);

        var _super12 = _createSuper(OnBoardService);

        function OnBoardService(injector) {
          _classCallCheck(this, OnBoardService);

          return _super12.call(this, injector);
        }

        _createClass(OnBoardService, [{
          key: "getOwnershipTypes",
          value: function getOwnershipTypes() {
            return this.http.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].OWNERSHIP_TYPES);
          }
        }, {
          key: "onBoardOwner",
          value: function onBoardOwner(ownerDetail) {
            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].ONBOARD_OWNER, ownerDetail);
          }
        }, {
          key: "getPropertyTypes",
          value: function getPropertyTypes() {
            return this.http.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].PROPERTY_TYPES);
          }
        }, {
          key: "onBoardProperty",
          value: function onBoardProperty(propertyDetail) {
            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].ONBOARD_PROPERTY, propertyDetail);
          }
        }]);

        return OnBoardService;
      }(_core_services_base_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

      OnBoardService.ɵfac = function OnBoardService_Factory(t) {
        return new (t || OnBoardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      OnBoardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: OnBoardService,
        factory: OnBoardService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnBoardService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/store/actions/on-board.actions.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/features/on-board/store/actions/on-board.actions.ts ***!
      \*********************************************************************/

    /*! exports provided: loadOwnershipType, loadOwnershipTypeSuccess, loadOwnershipTypeFailure, onBoardOwner, onBoardOwnerSuccess, onBoardOwnerFailure, loadPropertyType, loadPropertyTypeSuccess, loadPropertyTypeFailure, onBoardProperty, onBoardPropertySuccess, onBoardPropertyFailure */

    /***/
    function srcAppFeaturesOnBoardStoreActionsOnBoardActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadOwnershipType", function () {
        return loadOwnershipType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadOwnershipTypeSuccess", function () {
        return loadOwnershipTypeSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadOwnershipTypeFailure", function () {
        return loadOwnershipTypeFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardOwner", function () {
        return onBoardOwner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardOwnerSuccess", function () {
        return onBoardOwnerSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardOwnerFailure", function () {
        return onBoardOwnerFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadPropertyType", function () {
        return loadPropertyType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadPropertyTypeSuccess", function () {
        return loadPropertyTypeSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadPropertyTypeFailure", function () {
        return loadPropertyTypeFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardProperty", function () {
        return onBoardProperty;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardPropertySuccess", function () {
        return onBoardPropertySuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardPropertyFailure", function () {
        return onBoardPropertyFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var loadOwnershipType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] Load Ownership Type", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadOwnershipTypeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] Load Ownership Type Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadOwnershipTypeFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] Load Ownership TypeFailure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var onBoardOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] On Board Owner", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var onBoardOwnerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] On Board Owner Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var onBoardOwnerFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] On Board Owner Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadPropertyType = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] Load Property Type", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadPropertyTypeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] Load Property Type Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadPropertyTypeFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] Load Property TypeFailure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var onBoardProperty = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] On Board Property", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var onBoardPropertySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] On Board Property Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var onBoardPropertyFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[ON_BOARD] On Board Property Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/features/on-board/store/effects/on-board.effects.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/features/on-board/store/effects/on-board.effects.ts ***!
      \*********************************************************************/

    /*! exports provided: OnBoardEffects */

    /***/
    function srcAppFeaturesOnBoardStoreEffectsOnBoardEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnBoardEffects", function () {
        return OnBoardEffects;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../actions/on-board.actions */
      "./src/app/features/on-board/store/actions/on-board.actions.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _services_on_board_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./../../services/on-board.service */
      "./src/app/features/on-board/services/on-board.service.ts");

      var OnBoardEffects = function OnBoardEffects(actions$, router, snackBar, translate, onBoardService) {
        var _this13 = this;

        _classCallCheck(this, OnBoardEffects);

        this.actions$ = actions$;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.onBoardService = onBoardService;
        this.getOwnershipTypes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["loadOwnershipType"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this13.onBoardService.getOwnershipTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["loadOwnershipTypeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["loadOwnershipTypeFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.onBoardOwner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardOwner"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this13.onBoardService.onBoardOwner(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardOwnerSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardOwnerFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.onBoardOwnerSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardOwnerSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this13.router.navigateByUrl("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_PROPERTY_TYPE, "/").concat(res.data.id)); // this.snackBar.open(this.translate.instant("logged_in_success"));

        })); // adminLogin$ = createEffect(() => {
        //   return this.actions$.pipe(
        //     ofType(AdminAuthActions.adminLogin),
        //     exhaustMap((action) =>
        //       this.adminAuthService.adminLogin(action.payload).pipe(
        //         map((response: any) => AdminAuthActions.adminLoginSuccess(response)),
        //         catchError((error) => of(AdminAuthActions.adminLoginFailure({ error })))
        //       )
        //     )
        //   );
        // });
        // @Effect({ dispatch: false })
        // adminLoginSuccess = this.actions$.pipe(
        //   ofType<any>(AdminAuthActions.adminLoginSuccess),
        //   map((res: any) => {
        //     this.router.navigateByUrl(AppRoutes.ADMIN_DASHBOARD);
        //     this.snackBar.open(this.translate.instant("logged_in_success"));
        //   })
        // );

        this.getPropertyTypes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["loadPropertyType"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this13.onBoardService.getPropertyTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["loadPropertyTypeSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["loadPropertyTypeFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.onBoardProperty$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this13.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardProperty"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this13.onBoardService.onBoardProperty(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardPropertySuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardPropertyFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.onBoardPropertySuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_6__["onBoardPropertySuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this13.router.navigateByUrl("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_GREET)); // this.snackBar.open(this.translate.instant("logged_in_success"));

        }));
      };

      OnBoardEffects.ɵfac = function OnBoardEffects_Factory(t) {
        return new (t || OnBoardEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_on_board_service__WEBPACK_IMPORTED_MODULE_10__["OnBoardService"]));
      };

      OnBoardEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: OnBoardEffects,
        factory: OnBoardEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], OnBoardEffects.prototype, "onBoardOwnerSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], OnBoardEffects.prototype, "onBoardPropertySuccess", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OnBoardEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_8__["SnackBarService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
          }, {
            type: _services_on_board_service__WEBPACK_IMPORTED_MODULE_10__["OnBoardService"]
          }];
        }, {
          onBoardOwnerSuccess: [],
          onBoardPropertySuccess: []
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/on-board/store/reducers/on-board.reducer.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/features/on-board/store/reducers/on-board.reducer.ts ***!
      \**********************************************************************/

    /*! exports provided: onBoardFeatureKey, initialState, onBoardReducer */

    /***/
    function srcAppFeaturesOnBoardStoreReducersOnBoardReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardFeatureKey", function () {
        return onBoardFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "onBoardReducer", function () {
        return onBoardReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/on-board.actions */
      "./src/app/features/on-board/store/actions/on-board.actions.ts");

      var onBoardFeatureKey = "on-board";
      var initialState = {
        ownershipTypes: [],
        propertyTypes: [],
        loading: false
      };
      var onBoardReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["loadOwnershipType"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["loadOwnershipTypeSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          ownershipTypes: action.data,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["loadOwnershipTypeFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["onBoardOwner"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["onBoardOwnerSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["onBoardOwnerFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["loadPropertyType"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["loadPropertyTypeSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          propertyTypes: action.data,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["loadPropertyTypeFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["onBoardProperty"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["onBoardPropertySuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_on_board_actions__WEBPACK_IMPORTED_MODULE_1__["onBoardPropertyFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }));
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-on-board-on-board-module-es5.js.map