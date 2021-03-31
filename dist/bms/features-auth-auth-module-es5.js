(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-auth-auth-module"], {
    /***/
    "./src/app/features/auth/auth-routing.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/features/auth/auth-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function srcAppFeaturesAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth.component */
      "./src/app/features/auth/auth.component.ts");
      /* harmony import */


      var _containers_forgot_password_forgot_password_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers/forgot-password/forgot-password-container.component */
      "./src/app/features/auth/containers/forgot-password/forgot-password-container.component.ts");
      /* harmony import */


      var _containers_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./containers/login */
      "./src/app/features/auth/containers/login/index.ts");
      /* harmony import */


      var _containers_login_with_password_login_with_password_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./containers/login-with-password/login-with-password-container.component */
      "./src/app/features/auth/containers/login-with-password/login-with-password-container.component.ts");
      /* harmony import */


      var _containers_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./containers/register */
      "./src/app/features/auth/containers/register/index.ts");
      /* harmony import */


      var _containers_reset_password_reset_password_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./containers/reset-password/reset-password-container.component */
      "./src/app/features/auth/containers/reset-password/reset-password-container.component.ts");
      /* harmony import */


      var _containers_sign_up_otp_sign_up_otp_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers/sign-up-otp/sign-up-otp-container.component */
      "./src/app/features/auth/containers/sign-up-otp/sign-up-otp-container.component.ts");
      /* harmony import */


      var _containers_sign_up_sign_up_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./containers/sign-up/sign-up-container.component */
      "./src/app/features/auth/containers/sign-up/sign-up-container.component.ts");

      var routes = [{
        path: "",
        component: _auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"],
        children: [{
          path: "",
          redirectTo: "register",
          pathMatch: "full"
        }, {
          path: "login",
          component: _containers_login__WEBPACK_IMPORTED_MODULE_4__["LoginContainerComponent"],
          data: {
            title: "browser_titles.login"
          }
        }, {
          path: "register",
          component: _containers_register__WEBPACK_IMPORTED_MODULE_6__["RegisterContainerComponent"],
          data: {
            title: "browser_titles.register"
          }
        }, {
          path: "password-login",
          component: _containers_login_with_password_login_with_password_container_component__WEBPACK_IMPORTED_MODULE_5__["LoginWithPasswordContainerComponent"],
          data: {
            title: "browser_titles.password_login"
          }
        }, {
          path: "forgot-password",
          component: _containers_forgot_password_forgot_password_container_component__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordContainerComponent"],
          data: {
            title: "browser_titles.forgot_password"
          }
        }, {
          path: "reset-password",
          component: _containers_reset_password_reset_password_container_component__WEBPACK_IMPORTED_MODULE_7__["ResetPasswordContainerComponent"],
          data: {
            title: "browser_titles.reset_password"
          }
        }, {
          path: "sign-up",
          component: _containers_sign_up_sign_up_container_component__WEBPACK_IMPORTED_MODULE_9__["SignUpContainerComponent"]
        }, {
          path: "sign-up-otp/:mobileNumber",
          component: _containers_sign_up_otp_sign_up_otp_container_component__WEBPACK_IMPORTED_MODULE_8__["SignUpOtpContainerComponent"]
        }]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
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
    "./src/app/features/auth/auth.component.ts":
    /*!*************************************************!*\
      !*** ./src/app/features/auth/auth.component.ts ***!
      \*************************************************/

    /*! exports provided: AuthComponent */

    /***/
    function srcAppFeaturesAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent() {
          _classCallCheck(this, AuthComponent);
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)();
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 1,
        vars: 0,
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-auth",
            templateUrl: "./auth.component.html",
            styleUrls: ["./auth.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/auth.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/features/auth/auth.module.ts ***!
      \**********************************************/

    /*! exports provided: AuthModule */

    /***/
    function srcAppFeaturesAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth-routing.module */
      "./src/app/features/auth/auth-routing.module.ts");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth.component */
      "./src/app/features/auth/auth.component.ts");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/forgot-password/forgot-password.component */
      "./src/app/features/auth/components/forgot-password/forgot-password.component.ts");
      /* harmony import */


      var _components_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/login */
      "./src/app/features/auth/components/login/index.ts");
      /* harmony import */


      var _components_login_with_password_login_with_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/login-with-password/login-with-password.component */
      "./src/app/features/auth/components/login-with-password/login-with-password.component.ts");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/register/register.component */
      "./src/app/features/auth/components/register/register.component.ts");
      /* harmony import */


      var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/reset-password/reset-password.component */
      "./src/app/features/auth/components/reset-password/reset-password.component.ts");
      /* harmony import */


      var _components_sign_up_otp_sign_up_otp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/sign-up-otp/sign-up-otp.component */
      "./src/app/features/auth/components/sign-up-otp/sign-up-otp.component.ts");
      /* harmony import */


      var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/sign-up/sign-up.component */
      "./src/app/features/auth/components/sign-up/sign-up.component.ts");
      /* harmony import */


      var _containers_forgot_password_forgot_password_container_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./containers/forgot-password/forgot-password-container.component */
      "./src/app/features/auth/containers/forgot-password/forgot-password-container.component.ts");
      /* harmony import */


      var _containers_login__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./containers/login */
      "./src/app/features/auth/containers/login/index.ts");
      /* harmony import */


      var _containers_login_with_password_login_with_password_container_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./containers/login-with-password/login-with-password-container.component */
      "./src/app/features/auth/containers/login-with-password/login-with-password-container.component.ts");
      /* harmony import */


      var _containers_register__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./containers/register */
      "./src/app/features/auth/containers/register/index.ts");
      /* harmony import */


      var _containers_reset_password_reset_password_container_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./containers/reset-password/reset-password-container.component */
      "./src/app/features/auth/containers/reset-password/reset-password-container.component.ts");
      /* harmony import */


      var _containers_sign_up_otp_sign_up_otp_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./containers/sign-up-otp/sign-up-otp-container.component */
      "./src/app/features/auth/containers/sign-up-otp/sign-up-otp-container.component.ts");
      /* harmony import */


      var _containers_sign_up_sign_up_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./containers/sign-up/sign-up-container.component */
      "./src/app/features/auth/containers/sign-up/sign-up-container.component.ts");
      /* harmony import */


      var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./store/effects/auth.effects */
      "./src/app/features/auth/store/effects/auth.effects.ts");
      /* harmony import */


      var _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./store/reducers/auth.reducer */
      "./src/app/features/auth/store/reducers/auth.reducer.ts");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("auth", _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_22__["authReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_21__["AuthEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_components_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _containers_login__WEBPACK_IMPORTED_MODULE_15__["LoginContainerComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _containers_register__WEBPACK_IMPORTED_MODULE_17__["RegisterContainerComponent"], _containers_login_with_password_login_with_password_container_component__WEBPACK_IMPORTED_MODULE_16__["LoginWithPasswordContainerComponent"], _components_login_with_password_login_with_password_component__WEBPACK_IMPORTED_MODULE_9__["LoginWithPasswordComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _containers_forgot_password_forgot_password_container_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordContainerComponent"], _containers_reset_password_reset_password_container_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordContainerComponent"], _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"], _containers_sign_up_sign_up_container_component__WEBPACK_IMPORTED_MODULE_20__["SignUpContainerComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"], _containers_sign_up_otp_sign_up_otp_container_component__WEBPACK_IMPORTED_MODULE_19__["SignUpOtpContainerComponent"], _components_sign_up_otp_sign_up_otp_component__WEBPACK_IMPORTED_MODULE_12__["SignUpOtpComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_login__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _containers_login__WEBPACK_IMPORTED_MODULE_15__["LoginContainerComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _containers_register__WEBPACK_IMPORTED_MODULE_17__["RegisterContainerComponent"], _containers_login_with_password_login_with_password_container_component__WEBPACK_IMPORTED_MODULE_16__["LoginWithPasswordContainerComponent"], _components_login_with_password_login_with_password_component__WEBPACK_IMPORTED_MODULE_9__["LoginWithPasswordComponent"], _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"], _containers_forgot_password_forgot_password_container_component__WEBPACK_IMPORTED_MODULE_14__["ForgotPasswordContainerComponent"], _containers_reset_password_reset_password_container_component__WEBPACK_IMPORTED_MODULE_18__["ResetPasswordContainerComponent"], _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_11__["ResetPasswordComponent"], _containers_sign_up_sign_up_container_component__WEBPACK_IMPORTED_MODULE_20__["SignUpContainerComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"], _containers_sign_up_otp_sign_up_otp_container_component__WEBPACK_IMPORTED_MODULE_19__["SignUpOtpContainerComponent"], _components_sign_up_otp_sign_up_otp_component__WEBPACK_IMPORTED_MODULE_12__["SignUpOtpComponent"]],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature("auth", _store_reducers_auth_reducer__WEBPACK_IMPORTED_MODULE_22__["authReducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forFeature([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_21__["AuthEffects"]])]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/forgot-password/forgot-password.component.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/auth/components/forgot-password/forgot-password.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: ForgotPasswordComponent */

    /***/
    function srcAppFeaturesAuthComponentsForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
        return ForgotPasswordComponent;
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


      var _core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _core_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ForgotPasswordComponent = /*#__PURE__*/function (_core_components__WEB) {
        _inherits(ForgotPasswordComponent, _core_components__WEB);

        var _super = _createSuper(ForgotPasswordComponent);

        function ForgotPasswordComponent() {
          var _this;

          _classCallCheck(this, ForgotPasswordComponent);

          _this = _super.call(this);
          _this.requestOTP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this;
        }

        _createClass(ForgotPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setForgotPasswordForm();
          }
        }, {
          key: "setForgotPasswordForm",
          value: function setForgotPasswordForm() {
            this.forgotPasswordForm = this.formBuilder.group({
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].mobileNumber()]]
            });
          }
        }, {
          key: "onRequestOTP",
          value: function onRequestOTP() {
            if (this.forgotPasswordForm.valid) {
              this.requestOTP.emit(this.forgotPasswordForm.value);
            }
          }
        }, {
          key: "goToLoginScreen",
          value: function goToLoginScreen() {
            this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"].LOGIN_WITH_PASSWORD);
          }
        }]);

        return ForgotPasswordComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) {
        return new (t || ForgotPasswordComponent)();
      };

      ForgotPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordComponent,
        selectors: [["app-forgot-password"]],
        outputs: {
          requestOTP: "requestOTP"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 33,
        vars: 17,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "auth-form-wrapper"], ["fxFlex", "1 1 400px", "fxFlex.xs", " 1 1 100%", 1, "container"], [1, "text-center", "fs-24"], [1, "fs-14", "text-center", "help-text"], [1, "auth-form", "form-fw", 3, "formGroup", "submit"], [1, "form-field-wrapper"], ["matInput", "", "type", "number", "formControlName", "mobileNumber", 3, "placeholder"], [3, "control"], ["mat-button", "", "color", "primary", 1, "btn-primary"], [1, "fs-14", "text-gray", "text-center", "text-link", 3, "click"], [1, "text-center", "small-text", "fs-14"], [1, "text-uppercase"]],
        template: function ForgotPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings_cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forgot Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter your mobile number to generate OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ForgotPasswordComponent_Template_form_submit_10_listener() {
              return ctx.onRequestOTP();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "phone_iphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-error-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotPasswordComponent_Template_a_click_25_listener() {
              return ctx.goToLoginScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, "mobile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, "placeholders.mobile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.forgotPasswordForm.get("mobileNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 11, "common.generate_otp"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 13, "back_to_login"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 15, "login.building_management"), " ");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-forgot-password",
            templateUrl: "./forgot-password.component.html"
          }]
        }], function () {
          return [];
        }, {
          requestOTP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/login-with-password/login-with-password.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/features/auth/components/login-with-password/login-with-password.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: LoginWithPasswordComponent */

    /***/
    function srcAppFeaturesAuthComponentsLoginWithPasswordLoginWithPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginWithPasswordComponent", function () {
        return LoginWithPasswordComponent;
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


      var _core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _core_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var LoginWithPasswordComponent = /*#__PURE__*/function (_core_components__WEB2) {
        _inherits(LoginWithPasswordComponent, _core_components__WEB2);

        var _super2 = _createSuper(LoginWithPasswordComponent);

        function LoginWithPasswordComponent() {
          var _this2;

          _classCallCheck(this, LoginWithPasswordComponent);

          _this2 = _super2.call(this);
          _this2.loginWithPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this2;
        }

        _createClass(LoginWithPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setLoginWithPasswordForm();
          }
        }, {
          key: "setLoginWithPasswordForm",
          value: function setLoginWithPasswordForm() {
            this.loginWithPasswordForm = this.formBuilder.group({
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].mobileNumber()]],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onLoginWithPassword",
          value: function onLoginWithPassword() {
            if (this.loginWithPasswordForm.valid) {
              this.loginWithPassword.emit(this.loginWithPasswordForm.value);
            }
          }
        }, {
          key: "onForgotPassword",
          value: function onForgotPassword() {
            this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"].FORGOT_PASSWORD);
          }
        }, {
          key: "goToRegister",
          value: function goToRegister() {
            this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"].REGISTRATION_PAGE);
          }
        }]);

        return LoginWithPasswordComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      LoginWithPasswordComponent.ɵfac = function LoginWithPasswordComponent_Factory(t) {
        return new (t || LoginWithPasswordComponent)();
      };

      LoginWithPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginWithPasswordComponent,
        selectors: [["app-login-with-password"]],
        outputs: {
          loginWithPassword: "loginWithPassword"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 47,
        vars: 27,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "auth-form-wrapper"], ["fxFlex", "1 1 400px", "fxFlex.xs", " 1 1 100%", 1, "container"], [1, "text-center", "fs-24"], [1, "fs-14", "text-center", "help-text"], [1, "auth-form", "form-fw", 3, "formGroup", "submit"], [1, "form-field-wrapper"], ["matInput", "", "type", "number", "formControlName", "mobileNumber", 3, "placeholder"], [3, "control"], [1, "form-field-wrapper", "is-pwd-field"], ["matInput", "", "type", "password", "formControlName", "password", 3, "placeholder"], ["mat-button", "", "color", "primary", 1, "btn-primary"], [1, "fs-14", "text-gray", "text-center", "text-link", 3, "click"], [1, "text-center", "small-text", "fs-14"], [1, "text-uppercase"]],
        template: function LoginWithPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "settings_cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Login with password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginWithPasswordComponent_Template_form_submit_10_listener() {
              return ctx.onLoginWithPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "phone_iphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-error-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "app-error-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginWithPasswordComponent_Template_a_click_36_listener() {
              return ctx.onForgotPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginWithPasswordComponent_Template_a_click_39_listener() {
              return ctx.goToRegister();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginWithPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, "mobile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 13, "placeholders.mobile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginWithPasswordForm.get("mobileNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 15, "common.password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 17, "placeholders.password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginWithPasswordForm.get("password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 19, "common.login"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 21, "forgot_password"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 23, "login_with_otp"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 25, "login.building_management"), " ");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginWithPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login-with-password",
            templateUrl: "./login-with-password.component.html"
          }]
        }], function () {
          return [];
        }, {
          loginWithPassword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/login/index.ts":
    /*!*********************************************************!*\
      !*** ./src/app/features/auth/components/login/index.ts ***!
      \*********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppFeaturesAuthComponentsLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component */
      "./src/app/features/auth/components/login/login.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
      });
      /***/

    },

    /***/
    "./src/app/features/auth/components/login/login.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/features/auth/components/login/login.component.ts ***!
      \*******************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppFeaturesAuthComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
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


      var _shared_login_section_login_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../shared/login-section/login-section.component */
      "./src/app/shared/login-section/login-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var LoginComponent = /*#__PURE__*/function (_core_components__WEB3) {
        _inherits(LoginComponent, _core_components__WEB3);

        var _super3 = _createSuper(LoginComponent);

        function LoginComponent() {
          var _this3;

          _classCallCheck(this, LoginComponent);

          _this3 = _super3.call(this);
          _this3.loginWithOTP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this3;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.otpLogin = true;
            this.setLoginWithOTPForm();
          }
        }, {
          key: "onSubmitLoginForm",
          value: function onSubmitLoginForm() {
            if (this.loginForm.valid) {
              this.loginWithOTP.emit(this.loginForm.value);
            }
          }
        }, {
          key: "setLoginWithOTPForm",
          value: function setLoginWithOTPForm() {
            this.loginForm = this.formBuilder.group({
              otpLogin: [this.otpLogin],
              otpToken: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6)]]
            });
          }
        }]);

        return LoginComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)();
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        outputs: {
          loginWithOTP: "loginWithOTP"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 15,
        vars: 2,
        consts: [[1, "text-center"], [1, "login-form", 3, "formGroup"], [1, "form-field-wrapper"], [1, "las", "la-mobile"], ["type", "text", "matInput", "", "formControlName", "otpToken", "appOnlyNumber", ""], [3, "control"], [1, "buttons-wrapper"], ["mat-button", "", 1, "btn-theme-green", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your OTP to Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
              return ctx.onSubmitLoginForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.loginForm.get("otpToken"));
          }
        },
        directives: [_shared_login_section_login_section_component__WEBPACK_IMPORTED_MODULE_3__["LoginSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_6__["OnlyNumberDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login",
            templateUrl: "./login.component.html"
          }]
        }], function () {
          return [];
        }, {
          loginWithOTP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/register/register.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/features/auth/components/register/register.component.ts ***!
      \*************************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppFeaturesAuthComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
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


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/components/base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony import */


      var _core_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony import */


      var _shared_login_section_login_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/login-section/login-section.component */
      "./src/app/shared/login-section/login-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var RegisterComponent = /*#__PURE__*/function (_core_components_base) {
        _inherits(RegisterComponent, _core_components_base);

        var _super4 = _createSuper(RegisterComponent);

        function RegisterComponent() {
          var _this4;

          _classCallCheck(this, RegisterComponent);

          _this4 = _super4.call(this);
          _this4.registerMobileNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this4;
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.buildRegistrationForm();
            this.error$.subscribe(function (err) {
              if (err && _this5.registrationForm) {
                _this5.errorMessageService.handleServerSideError(_this5.registrationForm, err);
              }
            });
          }
        }, {
          key: "buildRegistrationForm",
          value: function buildRegistrationForm() {
            this.registrationForm = this.formBuilder.group({
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].inputLengthValidator(10)]]
            });
          }
        }, {
          key: "onGenerateOTP",
          value: function onGenerateOTP() {
            if (this.registrationForm.valid) {
              this.registerMobileNumber.emit(this.registrationForm.value);
            }
          }
        }]);

        return RegisterComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)();
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        inputs: {
          error$: "error$"
        },
        outputs: {
          registerMobileNumber: "registerMobileNumber"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 15,
        vars: 2,
        consts: [[1, "text-center"], [1, "login-form", 3, "formGroup"], [1, "form-field-wrapper"], [1, "las", "la-mobile"], ["type", "text", "matInput", "", "formControlName", "mobileNumber", "appOnlyNumber", ""], [3, "control"], [1, "buttons-wrapper"], ["mat-button", "", 1, "btn-theme-green", 3, "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your mobile number to receive OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_13_listener() {
              return ctx.onGenerateOTP();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Generate OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registrationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.registrationForm.get("mobileNumber"));
          }
        },
        directives: [_shared_login_section_login_section_component__WEBPACK_IMPORTED_MODULE_4__["LoginSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__["OnlyNumberDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-register",
            templateUrl: "./register.component.html"
          }]
        }], function () {
          return [];
        }, {
          registerMobileNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          error$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/reset-password/reset-password.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/features/auth/components/reset-password/reset-password.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: ResetPasswordComponent */

    /***/
    function srcAppFeaturesAuthComponentsResetPasswordResetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function () {
        return ResetPasswordComponent;
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


      var _core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _core_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      function ResetPasswordComponent_mat_error_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "passwords_match"), " ");
        }
      }

      var ResetPasswordComponent = /*#__PURE__*/function (_core_components__WEB4) {
        _inherits(ResetPasswordComponent, _core_components__WEB4);

        var _super5 = _createSuper(ResetPasswordComponent);

        function ResetPasswordComponent() {
          var _this6;

          _classCallCheck(this, ResetPasswordComponent);

          _this6 = _super5.call(this);
          _this6.resetPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this6;
        }

        _createClass(ResetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setResetPasswordForm();
          }
        }, {
          key: "setResetPasswordForm",
          value: function setResetPasswordForm() {
            this.resetPasswordForm = this.formBuilder.group({
              otp: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].inputLengthValidator(6)]],
              newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]],
              newPasswordConfirm: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            }, {
              validator: _core_utilities__WEBPACK_IMPORTED_MODULE_4__["CustomValidators"].checkPassword("newPassword", "newPasswordConfirm")
            });
          }
        }, {
          key: "onResetPassword",
          value: function onResetPassword() {
            if (this.resetPasswordForm.valid) {
              this.resetPassword.emit(this.resetPasswordForm.value);
            }
          }
        }, {
          key: "goToLoginScreen",
          value: function goToLoginScreen() {
            this.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"].LOGIN_WITH_PASSWORD);
          }
        }]);

        return ResetPasswordComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) {
        return new (t || ResetPasswordComponent)();
      };

      ResetPasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordComponent,
        selectors: [["app-reset-password"]],
        outputs: {
          resetPassword: "resetPassword"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 54,
        vars: 32,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "auth-form-wrapper"], ["fxFlex", "1 1 400px", "fxFlex.xs", " 1 1 100%", 1, "container"], [1, "text-center", "fs-24"], [1, "auth-form", "form-fw", 3, "formGroup", "submit"], [1, "form-field-wrapper"], ["matInput", "", "type", "number", "formControlName", "otp", 3, "placeholder"], [3, "control"], [1, "form-field-wrapper", "is-pwd-field"], ["matInput", "", "type", "password", "formControlName", "newPassword", 3, "placeholder"], ["matInput", "", "type", "password", "formControlName", "newPasswordConfirm", 3, "placeholder"], ["class", "compare-error pwd-compare", 4, "ngIf"], ["mat-button", "", "color", "primary", 1, "btn-primary"], [1, "fs-14", "text-gray", "text-center", "text-link", 3, "click"], [1, "text-center", "small-text", "fs-14"], [1, "text-uppercase"], [1, "compare-error", "pwd-compare"]],
        template: function ResetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ResetPasswordComponent_Template_form_submit_8_listener() {
              return ctx.onResetPassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "settings_cell");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-error-message", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-error-message", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "vpn_key");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-error-message", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ResetPasswordComponent_mat_error_42_Template, 3, 3, "mat-error", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_a_click_46_listener() {
              return ctx.goToLoginScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \xA9 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.resetPasswordForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, "common.otp"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 16, "placeholders.otp"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.resetPasswordForm.get("otp"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 18, "common.password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, "placeholders.password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.resetPasswordForm.get("newPassword"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 22, "common.confirm_password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 24, "placeholders.password"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.resetPasswordForm.get("newPasswordConfirm"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resetPasswordForm.errors == null ? null : ctx.resetPasswordForm.errors.compare_password);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 26, "reset_password"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 28, "back_to_login"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 30, "login.building_management"), " ");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_10__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-reset-password",
            templateUrl: "./reset-password.component.html"
          }]
        }], function () {
          return [];
        }, {
          resetPassword: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/sign-up-otp/sign-up-otp.component.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/features/auth/components/sign-up-otp/sign-up-otp.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: SignUpOtpComponent */

    /***/
    function srcAppFeaturesAuthComponentsSignUpOtpSignUpOtpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpOtpComponent", function () {
        return SignUpOtpComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/auth-section/auth-section/auth-section.component */
      "./src/app/shared/auth-section/auth-section/auth-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var SignUpOtpComponent = /*#__PURE__*/function (_core_components__WEB5) {
        _inherits(SignUpOtpComponent, _core_components__WEB5);

        var _super6 = _createSuper(SignUpOtpComponent);

        function SignUpOtpComponent(activatedRoute) {
          var _this7;

          _classCallCheck(this, SignUpOtpComponent);

          _this7 = _super6.call(this);
          _this7.activatedRoute = activatedRoute;
          _this7.verifyOTP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this7;
        }

        _createClass(SignUpOtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mobileNumber = this.activatedRoute.snapshot.paramMap.get("mobileNumber");

            if (this.mobileNumber) {
              this.setSignUpOTPForm();
            }
          }
        }, {
          key: "setSignUpOTPForm",
          value: function setSignUpOTPForm() {
            this.signUpOTPForm = this.formBuilder.group({
              mobileNumber: [this.mobileNumber],
              otpToken: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            if (this.signUpOTPForm.valid) {
              this.verifyOTP.emit(this.signUpOTPForm.value);
            }
          }
        }]);

        return SignUpOtpComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      SignUpOtpComponent.ɵfac = function SignUpOtpComponent_Factory(t) {
        return new (t || SignUpOtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      SignUpOtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpOtpComponent,
        selectors: [["app-sign-up-otp"]],
        outputs: {
          verifyOTP: "verifyOTP"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 15,
        vars: 2,
        consts: [[1, "text-center"], [1, "login-form", 3, "formGroup"], [1, "form-field-wrapper"], [1, "las", "la-mobile"], ["type", "text", "matInput", "", "formControlName", "otpToken", "appOnlyNumber", ""], [3, "control"], [1, "buttons-wrapper"], ["mat-button", "", 1, "btn-theme-green", 3, "click"]],
        template: function SignUpOtpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your OTP to Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpOtpComponent_Template_button_click_13_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpOTPForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.signUpOTPForm.get("otpToken"));
          }
        },
        directives: [_shared_auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_4__["AuthSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__["OnlyNumberDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvY29tcG9uZW50cy9zaWduLXVwLW90cC9zaWduLXVwLW90cC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpOtpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-sign-up-otp",
            templateUrl: "./sign-up-otp.component.html",
            styleUrls: ["./sign-up-otp.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, {
          verifyOTP: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/components/sign-up/sign-up.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/features/auth/components/sign-up/sign-up.component.ts ***!
      \***********************************************************************/

    /*! exports provided: SignUpComponent */

    /***/
    function srcAppFeaturesAuthComponentsSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
        return SignUpComponent;
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


      var _core_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony import */


      var _shared_auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/auth-section/auth-section/auth-section.component */
      "./src/app/shared/auth-section/auth-section/auth-section.component.ts");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../shared/error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var SignUpComponent = /*#__PURE__*/function (_core_components__WEB6) {
        _inherits(SignUpComponent, _core_components__WEB6);

        var _super7 = _createSuper(SignUpComponent);

        function SignUpComponent() {
          var _this8;

          _classCallCheck(this, SignUpComponent);

          _this8 = _super7.call(this);
          _this8.verifyMobileNumber = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this8;
        }

        _createClass(SignUpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setSignUpForm();
          }
        }, {
          key: "setSignUpForm",
          value: function setSignUpForm() {
            this.signUpForm = this.formBuilder.group({
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].inputLengthValidator(10)]],
              invitationCode: [this.invitationCode]
            });
          }
        }, {
          key: "onGenerateOTP",
          value: function onGenerateOTP() {
            if (this.signUpForm.valid) {
              this.verifyMobileNumber.emit(this.signUpForm.value);
            }
          }
        }]);

        return SignUpComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      SignUpComponent.ɵfac = function SignUpComponent_Factory(t) {
        return new (t || SignUpComponent)();
      };

      SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpComponent,
        selectors: [["app-sign-up"]],
        inputs: {
          invitationCode: "invitationCode"
        },
        outputs: {
          verifyMobileNumber: "verifyMobileNumber"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 15,
        vars: 2,
        consts: [[1, "text-center"], [1, "login-form", 3, "formGroup"], [1, "form-field-wrapper"], [1, "las", "la-mobile"], ["type", "text", "matInput", "", "formControlName", "mobileNumber", "appOnlyNumber", ""], [3, "control"], [1, "buttons-wrapper"], ["mat-button", "", 1, "btn-theme-green", 3, "click"]],
        template: function SignUpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-auth-section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your mobile number to receive OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Mobile Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-error-message", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignUpComponent_Template_button_click_13_listener() {
              return ctx.onGenerateOTP();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Generate OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signUpForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.signUpForm.get("mobileNumber"));
          }
        },
        directives: [_shared_auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_4__["AuthSectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_7__["OnlyNumberDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _shared_error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_8__["ErrorMessageComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-sign-up",
            templateUrl: "./sign-up.component.html",
            styleUrls: ["./sign-up.component.scss"]
          }]
        }], function () {
          return [];
        }, {
          verifyMobileNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          invitationCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/containers/forgot-password/forgot-password-container.component.ts":
    /*!*************************************************************************************************!*\
      !*** ./src/app/features/auth/containers/forgot-password/forgot-password-container.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ForgotPasswordContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersForgotPasswordForgotPasswordContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPasswordContainerComponent", function () {
        return ForgotPasswordContainerComponent;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/forgot-password/forgot-password.component */
      "./src/app/features/auth/components/forgot-password/forgot-password.component.ts");

      var ForgotPasswordContainerComponent = /*#__PURE__*/function (_core_components__WEB7) {
        _inherits(ForgotPasswordContainerComponent, _core_components__WEB7);

        var _super8 = _createSuper(ForgotPasswordContainerComponent);

        function ForgotPasswordContainerComponent(authService) {
          var _this9;

          _classCallCheck(this, ForgotPasswordContainerComponent);

          _this9 = _super8.call(this);
          _this9.authService = authService;
          return _this9;
        }

        _createClass(ForgotPasswordContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onRequestOTP",
          value: function onRequestOTP(mobilePayload) {
            var _this10 = this;

            this.authService.generateOTPForForgotPassword(mobilePayload).subscribe(function (res) {
              _this10.snackBar.open(_this10.getTranslatedString("snackbar_messages.otp_sent"));

              _this10.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].RESET_PASSWORD);
            }, function (err) {});
          }
        }]);

        return ForgotPasswordContainerComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      ForgotPasswordContainerComponent.ɵfac = function ForgotPasswordContainerComponent_Factory(t) {
        return new (t || ForgotPasswordContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ForgotPasswordContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotPasswordContainerComponent,
        selectors: [["app-forgot-password-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [[3, "requestOTP"]],
        template: function ForgotPasswordContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-forgot-password", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("requestOTP", function ForgotPasswordContainerComponent_Template_app_forgot_password_requestOTP_0_listener($event) {
              return ctx.onRequestOTP($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotPasswordContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-forgot-password-container",
            templateUrl: "./forgot-password-container.component.html"
          }]
        }], function () {
          return [{
            type: _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/containers/login-with-password/login-with-password-container.component.ts":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/features/auth/containers/login-with-password/login-with-password-container.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: LoginWithPasswordContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersLoginWithPasswordLoginWithPasswordContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginWithPasswordContainerComponent", function () {
        return LoginWithPasswordContainerComponent;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services */
      "./src/app/shared/services/index.ts");
      /* harmony import */


      var _components_login_with_password_login_with_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/login-with-password/login-with-password.component */
      "./src/app/features/auth/components/login-with-password/login-with-password.component.ts");

      var LoginWithPasswordContainerComponent = /*#__PURE__*/function (_core_components__WEB8) {
        _inherits(LoginWithPasswordContainerComponent, _core_components__WEB8);

        var _super9 = _createSuper(LoginWithPasswordContainerComponent);

        function LoginWithPasswordContainerComponent(authService, userService) {
          var _this11;

          _classCallCheck(this, LoginWithPasswordContainerComponent);

          _this11 = _super9.call(this);
          _this11.authService = authService;
          _this11.userService = userService;
          return _this11;
        }

        _createClass(LoginWithPasswordContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLoginWithPassword",
          value: function onLoginWithPassword(loginWithPasswordPayload) {
            this.authService.loginWithPassword(loginWithPasswordPayload).subscribe(function (res) {}, function (err) {});
          }
        }]);

        return LoginWithPasswordContainerComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      LoginWithPasswordContainerComponent.ɵfac = function LoginWithPasswordContainerComponent_Factory(t) {
        return new (t || LoginWithPasswordContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
      };

      LoginWithPasswordContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginWithPasswordContainerComponent,
        selectors: [["app-login-with-password-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [[3, "loginWithPassword"]],
        template: function LoginWithPasswordContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login-with-password", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginWithPassword", function LoginWithPasswordContainerComponent_Template_app_login_with_password_loginWithPassword_0_listener($event) {
              return ctx.onLoginWithPassword($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_login_with_password_login_with_password_component__WEBPACK_IMPORTED_MODULE_4__["LoginWithPasswordComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginWithPasswordContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login-with-password-container",
            templateUrl: "./login-with-password-container.component.html"
          }]
        }], function () {
          return [{
            type: _core_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/containers/login/index.ts":
    /*!*********************************************************!*\
      !*** ./src/app/features/auth/containers/login/index.ts ***!
      \*********************************************************/

    /*! exports provided: LoginContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-container.component */
      "./src/app/features/auth/containers/login/login-container.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LoginContainerComponent", function () {
        return _login_container_component__WEBPACK_IMPORTED_MODULE_0__["LoginContainerComponent"];
      });
      /***/

    },

    /***/
    "./src/app/features/auth/containers/login/login-container.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/features/auth/containers/login/login-container.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LoginContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersLoginLoginContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginContainerComponent", function () {
        return LoginContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components/base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony import */


      var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../store/actions/auth.actions */
      "./src/app/features/auth/store/actions/auth.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/login/login.component */
      "./src/app/features/auth/components/login/login.component.ts");

      var LoginContainerComponent = /*#__PURE__*/function (_core_components_base2) {
        _inherits(LoginContainerComponent, _core_components_base2);

        var _super10 = _createSuper(LoginContainerComponent);

        function LoginContainerComponent(store) {
          var _this12;

          _classCallCheck(this, LoginContainerComponent);

          _this12 = _super10.call(this);
          _this12.store = store;
          return _this12;
        }

        _createClass(LoginContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLoginWithOTP",
          value: function onLoginWithOTP(loginWithOtpPayload) {
            this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_2__["loginWithOTP"])({
              payload: loginWithOtpPayload
            }));
          }
        }]);

        return LoginContainerComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      LoginContainerComponent.ɵfac = function LoginContainerComponent_Factory(t) {
        return new (t || LoginContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]));
      };

      LoginContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginContainerComponent,
        selectors: [["app-login-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 0,
        consts: [[3, "loginWithOTP"]],
        template: function LoginContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-login", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("loginWithOTP", function LoginContainerComponent_Template_app_login_loginWithOTP_0_listener($event) {
              return ctx.onLoginWithOTP($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login-container",
            templateUrl: "./login-container.component.html"
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
    "./src/app/features/auth/containers/register/index.ts":
    /*!************************************************************!*\
      !*** ./src/app/features/auth/containers/register/index.ts ***!
      \************************************************************/

    /*! exports provided: RegisterContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersRegisterIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _register_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-container.component */
      "./src/app/features/auth/containers/register/register-container.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegisterContainerComponent", function () {
        return _register_container_component__WEBPACK_IMPORTED_MODULE_0__["RegisterContainerComponent"];
      });
      /***/

    },

    /***/
    "./src/app/features/auth/containers/register/register-container.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/features/auth/containers/register/register-container.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: RegisterContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersRegisterRegisterContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterContainerComponent", function () {
        return RegisterContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/components/base.component */
      "./src/app/core/components/base.component.ts");
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


      var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../store/actions/auth.actions */
      "./src/app/features/auth/store/actions/auth.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/register/register.component */
      "./src/app/features/auth/components/register/register.component.ts");

      var RegisterContainerComponent = /*#__PURE__*/function (_core_components_base3) {
        _inherits(RegisterContainerComponent, _core_components_base3);

        var _super11 = _createSuper(RegisterContainerComponent);

        function RegisterContainerComponent(store, verifyMobileNumberSuccess$) {
          var _this13;

          _classCallCheck(this, RegisterContainerComponent);

          _this13 = _super11.call(this);
          _this13.store = store;
          _this13.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          verifyMobileNumberSuccess$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["registerMobileNumberSuccess"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this13.destroyed$)).subscribe(function (d) {
            _this13.redirectTo("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].LOGIN_PAGE));
          });
          return _this13;
        }

        _createClass(RegisterContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.error$ = this.store.select(function (store) {
              return store.auth.error;
            });
          }
        }, {
          key: "onRegisterMobileNumber",
          value: function onRegisterMobileNumber(registerMobileNumberPayload) {
            this.registerPayload = registerMobileNumberPayload;
            this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["registerMobileNumber"])({
              payload: registerMobileNumberPayload
            }));
          }
        }]);

        return RegisterContainerComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      RegisterContainerComponent.ɵfac = function RegisterContainerComponent_Factory(t) {
        return new (t || RegisterContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]));
      };

      RegisterContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterContainerComponent,
        selectors: [["app-register-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "error$", "registerMobileNumber"]],
        template: function RegisterContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-register", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("registerMobileNumber", function RegisterContainerComponent_Template_app_register_registerMobileNumber_0_listener($event) {
              return ctx.onRegisterMobileNumber($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("error$", ctx.error$);
          }
        },
        directives: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-register-container",
            templateUrl: "./register-container.component.html"
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/containers/reset-password/reset-password-container.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/features/auth/containers/reset-password/reset-password-container.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: ResetPasswordContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersResetPasswordResetPasswordContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPasswordContainerComponent", function () {
        return ResetPasswordContainerComponent;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/reset-password/reset-password.component */
      "./src/app/features/auth/components/reset-password/reset-password.component.ts");

      var _c0 = ["resetPasswordCmp"];

      var ResetPasswordContainerComponent = /*#__PURE__*/function (_core_components__WEB9) {
        _inherits(ResetPasswordContainerComponent, _core_components__WEB9);

        var _super12 = _createSuper(ResetPasswordContainerComponent);

        function ResetPasswordContainerComponent(authService) {
          var _this14;

          _classCallCheck(this, ResetPasswordContainerComponent);

          _this14 = _super12.call(this);
          _this14.authService = authService;
          return _this14;
        }

        _createClass(ResetPasswordContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onResetPassword",
          value: function onResetPassword(resetPasswordPayload) {
            var _this15 = this;

            this.authService.resetPassword(resetPasswordPayload).subscribe(function (res) {
              _this15.snackBar.open(_this15.getTranslatedString("change_password_success"));

              _this15.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].LOGIN_WITH_PASSWORD);
            }, function (err) {
              if (err && _this15.resetPasswordCmp.resetPasswordForm) {
                _this15.errorMessageService.handleServerSideError(_this15.resetPasswordCmp.resetPasswordForm, err);
              }
            });
          }
        }]);

        return ResetPasswordContainerComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      ResetPasswordContainerComponent.ɵfac = function ResetPasswordContainerComponent_Factory(t) {
        return new (t || ResetPasswordContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      ResetPasswordContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ResetPasswordContainerComponent,
        selectors: [["app-reset-password-container"]],
        viewQuery: function ResetPasswordContainerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resetPasswordCmp = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 0,
        consts: [[3, "resetPassword"], ["resetPasswordCmp", ""]],
        template: function ResetPasswordContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-reset-password", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resetPassword", function ResetPasswordContainerComponent_Template_app_reset_password_resetPassword_0_listener($event) {
              return ctx.onResetPassword($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetPasswordContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-reset-password-container",
            templateUrl: "./reset-password-container.component.html"
          }]
        }], function () {
          return [{
            type: _core_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, {
          resetPasswordCmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["resetPasswordCmp"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/containers/sign-up-otp/sign-up-otp-container.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/features/auth/containers/sign-up-otp/sign-up-otp-container.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: SignUpOtpContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersSignUpOtpSignUpOtpContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpOtpContainerComponent", function () {
        return SignUpOtpContainerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../store/actions/auth.actions */
      "./src/app/features/auth/store/actions/auth.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components_sign_up_otp_sign_up_otp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/sign-up-otp/sign-up-otp.component */
      "./src/app/features/auth/components/sign-up-otp/sign-up-otp.component.ts");

      var SignUpOtpContainerComponent = /*#__PURE__*/function () {
        function SignUpOtpContainerComponent(store) {
          _classCallCheck(this, SignUpOtpContainerComponent);

          this.store = store;
        }

        _createClass(SignUpOtpContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onVerifyOTP",
          value: function onVerifyOTP(verifyOtpPayload) {
            this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["verifyOTP"])({
              payload: verifyOtpPayload
            }));
          }
        }]);

        return SignUpOtpContainerComponent;
      }();

      SignUpOtpContainerComponent.ɵfac = function SignUpOtpContainerComponent_Factory(t) {
        return new (t || SignUpOtpContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]));
      };

      SignUpOtpContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpOtpContainerComponent,
        selectors: [["app-sign-up-otp-container"]],
        decls: 1,
        vars: 0,
        consts: [[3, "verifyOTP"]],
        template: function SignUpOtpContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sign-up-otp", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("verifyOTP", function SignUpOtpContainerComponent_Template_app_sign_up_otp_verifyOTP_0_listener($event) {
              return ctx.onVerifyOTP($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_components_sign_up_otp_sign_up_otp_component__WEBPACK_IMPORTED_MODULE_3__["SignUpOtpComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvY29udGFpbmVycy9zaWduLXVwLW90cC9zaWduLXVwLW90cC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpOtpContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-sign-up-otp-container",
            templateUrl: "./sign-up-otp-container.component.html",
            styleUrls: ["./sign-up-otp-container.component.scss"]
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/containers/sign-up/sign-up-container.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/features/auth/containers/sign-up/sign-up-container.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SignUpContainerComponent */

    /***/
    function srcAppFeaturesAuthContainersSignUpSignUpContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignUpContainerComponent", function () {
        return SignUpContainerComponent;
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


      var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../store/actions/auth.actions */
      "./src/app/features/auth/store/actions/auth.actions.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/sign-up/sign-up.component */
      "./src/app/features/auth/components/sign-up/sign-up.component.ts");

      function SignUpContainerComponent_app_sign_up_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sign-up", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("verifyMobileNumber", function SignUpContainerComponent_app_sign_up_0_Template_app_sign_up_verifyMobileNumber_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onVerifyMobileNumber($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invitationCode", ctx_r0.invitationCode);
        }
      }

      var SignUpContainerComponent = /*#__PURE__*/function (_core_components__WEB10) {
        _inherits(SignUpContainerComponent, _core_components__WEB10);

        var _super13 = _createSuper(SignUpContainerComponent);

        function SignUpContainerComponent(store, activatedRoute, authService, verifyMobileNumberSuccess$) {
          var _this16;

          _classCallCheck(this, SignUpContainerComponent);

          _this16 = _super13.call(this);
          _this16.store = store;
          _this16.activatedRoute = activatedRoute;
          _this16.authService = authService;
          _this16.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          verifyMobileNumberSuccess$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyMobileNumberSuccess"])(null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(_this16.destroyed$)).subscribe(function (d) {
            _this16.redirectTo("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].SIGN_UP_OTP, "/").concat(_this16.mobileNumberPayload.mobileNumber));
          });
          return _this16;
        }

        _createClass(SignUpContainerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getInvitationId();
          }
        }, {
          key: "getInvitationId",
          value: function getInvitationId() {
            var _this17 = this;

            this.activatedRoute.queryParams.subscribe(function (params) {
              _this17.invitationId = params.invitationId;

              _this17.verifyInvitation();
            });
          }
        }, {
          key: "verifyInvitation",
          value: function verifyInvitation() {
            var _this18 = this;

            this.authService.verifyInvitation(this.invitationId).subscribe(function (d) {
              _this18.invitationCode = d.data.invitationCode;
            }, function (err) {
              _this18.redirectTo(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].INVALID_LINK);
            });
          }
        }, {
          key: "onVerifyMobileNumber",
          value: function onVerifyMobileNumber(verifyMobileNumberPayload) {
            this.mobileNumberPayload = verifyMobileNumberPayload;
            this.store.dispatch(Object(_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyMobileNumber"])({
              payload: verifyMobileNumberPayload
            }));
          }
        }]);

        return SignUpContainerComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      SignUpContainerComponent.ɵfac = function SignUpContainerComponent_Factory(t) {
        return new (t || SignUpContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]));
      };

      SignUpContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignUpContainerComponent,
        selectors: [["app-sign-up-container"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "invitationCode", "verifyMobileNumber", 4, "ngIf"], [3, "invitationCode", "verifyMobileNumber"]],
        template: function SignUpContainerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SignUpContainerComponent_app_sign_up_0_Template, 1, 1, "app-sign-up", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invitationCode);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_11__["SignUpComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2F1dGgvY29udGFpbmVycy9zaWduLXVwL3NpZ24tdXAtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpContainerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-sign-up-container",
            templateUrl: "./sign-up-container.component.html",
            styleUrls: ["./sign-up-container.component.scss"]
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
          }, {
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/store/actions/auth.actions.ts":
    /*!*************************************************************!*\
      !*** ./src/app/features/auth/store/actions/auth.actions.ts ***!
      \*************************************************************/

    /*! exports provided: verifyMobileNumber, verifyMobileNumberSuccess, verifyMobileNumberFailure, verifyOTP, verifyOTPSuccess, verifyOTPFailure, verifyInvitation, verifyInvitationSuccess, verifyInvitationFailure, registerMobileNumber, registerMobileNumberSuccess, registerMobileNumberFailure, loginWithOTP, loginWithOTPSuccess, loginWithOTPFailure */

    /***/
    function srcAppFeaturesAuthStoreActionsAuthActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyMobileNumber", function () {
        return verifyMobileNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyMobileNumberSuccess", function () {
        return verifyMobileNumberSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyMobileNumberFailure", function () {
        return verifyMobileNumberFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyOTP", function () {
        return verifyOTP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyOTPSuccess", function () {
        return verifyOTPSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyOTPFailure", function () {
        return verifyOTPFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyInvitation", function () {
        return verifyInvitation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyInvitationSuccess", function () {
        return verifyInvitationSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "verifyInvitationFailure", function () {
        return verifyInvitationFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerMobileNumber", function () {
        return registerMobileNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerMobileNumberSuccess", function () {
        return registerMobileNumberSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "registerMobileNumberFailure", function () {
        return registerMobileNumberFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginWithOTP", function () {
        return loginWithOTP;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginWithOTPSuccess", function () {
        return loginWithOTPSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loginWithOTPFailure", function () {
        return loginWithOTPFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var verifyMobileNumber = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify Mobile Number", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyMobileNumberSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify Mobile Number Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyMobileNumberFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify Mobile Number Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyOTP = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify OTP", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyOTPSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify OTP Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyOTPFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify OTP Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyInvitation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify Invitation", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyInvitationSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify Invitation Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var verifyInvitationFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Verify Invitation Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var registerMobileNumber = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Register Mobile Number", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var registerMobileNumberSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Register Mobile Number Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var registerMobileNumberFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Register Mobile Number Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loginWithOTP = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Login With OTP", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loginWithOTPSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Login With OTP Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loginWithOTPFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[AUTH] Login With OTP Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/features/auth/store/effects/auth.effects.ts":
    /*!*************************************************************!*\
      !*** ./src/app/features/auth/store/effects/auth.effects.ts ***!
      \*************************************************************/

    /*! exports provided: AuthEffects */

    /***/
    function srcAppFeaturesAuthStoreEffectsAuthEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthEffects", function () {
        return AuthEffects;
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


      var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../actions/auth.actions */
      "./src/app/features/auth/store/actions/auth.actions.ts");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var AuthEffects = function AuthEffects(actions$, authService, router, snackBar, translate) {
        var _this19 = this;

        _classCallCheck(this, AuthEffects);

        this.actions$ = actions$;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.verifyMobileNumber$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyMobileNumber"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this19.authService.verifyMobileNumber(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyMobileNumberSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyMobileNumberFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.verifyMobileNumberSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyMobileNumberSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this19.snackBar.open(_this19.translate.instant("snackbar_messages.otp_sent"));
        }));
        this.verifyOTP$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyOTP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this19.authService.verifyOtp(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyOTPSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyOTPFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.verifyOTPSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyOTPSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this19.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_OWNER_TYPE);

          _this19.snackBar.open(_this19.translate.instant("verify_otp_success"));
        }));
        this.verifyInvitation$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyInvitation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this19.authService.verifyInvitation(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyInvitationSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["verifyInvitationFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.registerMobileNumber$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["registerMobileNumber"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this19.authService.registerMobileNumber(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["registerMobileNumberSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["registerMobileNumberFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.registerMobileNumberSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["registerMobileNumberSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this19.snackBar.open(_this19.translate.instant("snackbar_messages.otp_sent"));
        }));
        this.loginWithOTP$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this19.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["loginWithOTP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this19.authService.loginWithOtp(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["loginWithOTPSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["loginWithOTPFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.loginWithOTPSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_6__["loginWithOTPSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this19.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].ON_BOARD_OWNER_TYPE);

          _this19.snackBar.open(_this19.translate.instant("logged_in_success"));
        }));
      };

      AuthEffects.ɵfac = function AuthEffects_Factory(t) {
        return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]));
      };

      AuthEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AuthEffects,
        factory: AuthEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], AuthEffects.prototype, "verifyMobileNumberSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], AuthEffects.prototype, "verifyOTPSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], AuthEffects.prototype, "registerMobileNumberSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], AuthEffects.prototype, "loginWithOTPSuccess", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
          }];
        }, {
          verifyMobileNumberSuccess: [],
          verifyOTPSuccess: [],
          registerMobileNumberSuccess: [],
          loginWithOTPSuccess: []
        });
      })();
      /***/

    },

    /***/
    "./src/app/features/auth/store/reducers/auth.reducer.ts":
    /*!**************************************************************!*\
      !*** ./src/app/features/auth/store/reducers/auth.reducer.ts ***!
      \**************************************************************/

    /*! exports provided: authFeatureKey, initialState, authReducer */

    /***/
    function srcAppFeaturesAuthStoreReducersAuthReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authFeatureKey", function () {
        return authFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialState", function () {
        return initialState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "authReducer", function () {
        return authReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/auth.actions */
      "./src/app/features/auth/store/actions/auth.actions.ts");

      var authFeatureKey = "auth";
      var initialState = {
        loading: false,
        message: "",
        error: null
      };
      var authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["verifyMobileNumber"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["verifyMobileNumberSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["verifyMobileNumberFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerMobileNumberSuccess"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerMobileNumberSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["registerMobileNumberFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          error: action.error.error
        });
      }));
      /***/
    }
  }]);
})();
//# sourceMappingURL=features-auth-auth-module-es5.js.map