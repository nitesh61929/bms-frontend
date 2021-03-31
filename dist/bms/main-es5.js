(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
      var map = {
        "./af": "./node_modules/moment/locale/af.js",
        "./af.js": "./node_modules/moment/locale/af.js",
        "./ar": "./node_modules/moment/locale/ar.js",
        "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
        "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
        "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
        "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
        "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
        "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
        "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
        "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
        "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
        "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
        "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
        "./ar.js": "./node_modules/moment/locale/ar.js",
        "./az": "./node_modules/moment/locale/az.js",
        "./az.js": "./node_modules/moment/locale/az.js",
        "./be": "./node_modules/moment/locale/be.js",
        "./be.js": "./node_modules/moment/locale/be.js",
        "./bg": "./node_modules/moment/locale/bg.js",
        "./bg.js": "./node_modules/moment/locale/bg.js",
        "./bm": "./node_modules/moment/locale/bm.js",
        "./bm.js": "./node_modules/moment/locale/bm.js",
        "./bn": "./node_modules/moment/locale/bn.js",
        "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
        "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
        "./bn.js": "./node_modules/moment/locale/bn.js",
        "./bo": "./node_modules/moment/locale/bo.js",
        "./bo.js": "./node_modules/moment/locale/bo.js",
        "./br": "./node_modules/moment/locale/br.js",
        "./br.js": "./node_modules/moment/locale/br.js",
        "./bs": "./node_modules/moment/locale/bs.js",
        "./bs.js": "./node_modules/moment/locale/bs.js",
        "./ca": "./node_modules/moment/locale/ca.js",
        "./ca.js": "./node_modules/moment/locale/ca.js",
        "./cs": "./node_modules/moment/locale/cs.js",
        "./cs.js": "./node_modules/moment/locale/cs.js",
        "./cv": "./node_modules/moment/locale/cv.js",
        "./cv.js": "./node_modules/moment/locale/cv.js",
        "./cy": "./node_modules/moment/locale/cy.js",
        "./cy.js": "./node_modules/moment/locale/cy.js",
        "./da": "./node_modules/moment/locale/da.js",
        "./da.js": "./node_modules/moment/locale/da.js",
        "./de": "./node_modules/moment/locale/de.js",
        "./de-at": "./node_modules/moment/locale/de-at.js",
        "./de-at.js": "./node_modules/moment/locale/de-at.js",
        "./de-ch": "./node_modules/moment/locale/de-ch.js",
        "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
        "./de.js": "./node_modules/moment/locale/de.js",
        "./dv": "./node_modules/moment/locale/dv.js",
        "./dv.js": "./node_modules/moment/locale/dv.js",
        "./el": "./node_modules/moment/locale/el.js",
        "./el.js": "./node_modules/moment/locale/el.js",
        "./en-au": "./node_modules/moment/locale/en-au.js",
        "./en-au.js": "./node_modules/moment/locale/en-au.js",
        "./en-ca": "./node_modules/moment/locale/en-ca.js",
        "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
        "./en-gb": "./node_modules/moment/locale/en-gb.js",
        "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
        "./en-ie": "./node_modules/moment/locale/en-ie.js",
        "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
        "./en-il": "./node_modules/moment/locale/en-il.js",
        "./en-il.js": "./node_modules/moment/locale/en-il.js",
        "./en-in": "./node_modules/moment/locale/en-in.js",
        "./en-in.js": "./node_modules/moment/locale/en-in.js",
        "./en-nz": "./node_modules/moment/locale/en-nz.js",
        "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
        "./en-sg": "./node_modules/moment/locale/en-sg.js",
        "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
        "./eo": "./node_modules/moment/locale/eo.js",
        "./eo.js": "./node_modules/moment/locale/eo.js",
        "./es": "./node_modules/moment/locale/es.js",
        "./es-do": "./node_modules/moment/locale/es-do.js",
        "./es-do.js": "./node_modules/moment/locale/es-do.js",
        "./es-mx": "./node_modules/moment/locale/es-mx.js",
        "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
        "./es-us": "./node_modules/moment/locale/es-us.js",
        "./es-us.js": "./node_modules/moment/locale/es-us.js",
        "./es.js": "./node_modules/moment/locale/es.js",
        "./et": "./node_modules/moment/locale/et.js",
        "./et.js": "./node_modules/moment/locale/et.js",
        "./eu": "./node_modules/moment/locale/eu.js",
        "./eu.js": "./node_modules/moment/locale/eu.js",
        "./fa": "./node_modules/moment/locale/fa.js",
        "./fa.js": "./node_modules/moment/locale/fa.js",
        "./fi": "./node_modules/moment/locale/fi.js",
        "./fi.js": "./node_modules/moment/locale/fi.js",
        "./fil": "./node_modules/moment/locale/fil.js",
        "./fil.js": "./node_modules/moment/locale/fil.js",
        "./fo": "./node_modules/moment/locale/fo.js",
        "./fo.js": "./node_modules/moment/locale/fo.js",
        "./fr": "./node_modules/moment/locale/fr.js",
        "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
        "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
        "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
        "./fr.js": "./node_modules/moment/locale/fr.js",
        "./fy": "./node_modules/moment/locale/fy.js",
        "./fy.js": "./node_modules/moment/locale/fy.js",
        "./ga": "./node_modules/moment/locale/ga.js",
        "./ga.js": "./node_modules/moment/locale/ga.js",
        "./gd": "./node_modules/moment/locale/gd.js",
        "./gd.js": "./node_modules/moment/locale/gd.js",
        "./gl": "./node_modules/moment/locale/gl.js",
        "./gl.js": "./node_modules/moment/locale/gl.js",
        "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
        "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
        "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
        "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
        "./gu": "./node_modules/moment/locale/gu.js",
        "./gu.js": "./node_modules/moment/locale/gu.js",
        "./he": "./node_modules/moment/locale/he.js",
        "./he.js": "./node_modules/moment/locale/he.js",
        "./hi": "./node_modules/moment/locale/hi.js",
        "./hi.js": "./node_modules/moment/locale/hi.js",
        "./hr": "./node_modules/moment/locale/hr.js",
        "./hr.js": "./node_modules/moment/locale/hr.js",
        "./hu": "./node_modules/moment/locale/hu.js",
        "./hu.js": "./node_modules/moment/locale/hu.js",
        "./hy-am": "./node_modules/moment/locale/hy-am.js",
        "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
        "./id": "./node_modules/moment/locale/id.js",
        "./id.js": "./node_modules/moment/locale/id.js",
        "./is": "./node_modules/moment/locale/is.js",
        "./is.js": "./node_modules/moment/locale/is.js",
        "./it": "./node_modules/moment/locale/it.js",
        "./it-ch": "./node_modules/moment/locale/it-ch.js",
        "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
        "./it.js": "./node_modules/moment/locale/it.js",
        "./ja": "./node_modules/moment/locale/ja.js",
        "./ja.js": "./node_modules/moment/locale/ja.js",
        "./jv": "./node_modules/moment/locale/jv.js",
        "./jv.js": "./node_modules/moment/locale/jv.js",
        "./ka": "./node_modules/moment/locale/ka.js",
        "./ka.js": "./node_modules/moment/locale/ka.js",
        "./kk": "./node_modules/moment/locale/kk.js",
        "./kk.js": "./node_modules/moment/locale/kk.js",
        "./km": "./node_modules/moment/locale/km.js",
        "./km.js": "./node_modules/moment/locale/km.js",
        "./kn": "./node_modules/moment/locale/kn.js",
        "./kn.js": "./node_modules/moment/locale/kn.js",
        "./ko": "./node_modules/moment/locale/ko.js",
        "./ko.js": "./node_modules/moment/locale/ko.js",
        "./ku": "./node_modules/moment/locale/ku.js",
        "./ku.js": "./node_modules/moment/locale/ku.js",
        "./ky": "./node_modules/moment/locale/ky.js",
        "./ky.js": "./node_modules/moment/locale/ky.js",
        "./lb": "./node_modules/moment/locale/lb.js",
        "./lb.js": "./node_modules/moment/locale/lb.js",
        "./lo": "./node_modules/moment/locale/lo.js",
        "./lo.js": "./node_modules/moment/locale/lo.js",
        "./lt": "./node_modules/moment/locale/lt.js",
        "./lt.js": "./node_modules/moment/locale/lt.js",
        "./lv": "./node_modules/moment/locale/lv.js",
        "./lv.js": "./node_modules/moment/locale/lv.js",
        "./me": "./node_modules/moment/locale/me.js",
        "./me.js": "./node_modules/moment/locale/me.js",
        "./mi": "./node_modules/moment/locale/mi.js",
        "./mi.js": "./node_modules/moment/locale/mi.js",
        "./mk": "./node_modules/moment/locale/mk.js",
        "./mk.js": "./node_modules/moment/locale/mk.js",
        "./ml": "./node_modules/moment/locale/ml.js",
        "./ml.js": "./node_modules/moment/locale/ml.js",
        "./mn": "./node_modules/moment/locale/mn.js",
        "./mn.js": "./node_modules/moment/locale/mn.js",
        "./mr": "./node_modules/moment/locale/mr.js",
        "./mr.js": "./node_modules/moment/locale/mr.js",
        "./ms": "./node_modules/moment/locale/ms.js",
        "./ms-my": "./node_modules/moment/locale/ms-my.js",
        "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
        "./ms.js": "./node_modules/moment/locale/ms.js",
        "./mt": "./node_modules/moment/locale/mt.js",
        "./mt.js": "./node_modules/moment/locale/mt.js",
        "./my": "./node_modules/moment/locale/my.js",
        "./my.js": "./node_modules/moment/locale/my.js",
        "./nb": "./node_modules/moment/locale/nb.js",
        "./nb.js": "./node_modules/moment/locale/nb.js",
        "./ne": "./node_modules/moment/locale/ne.js",
        "./ne.js": "./node_modules/moment/locale/ne.js",
        "./nl": "./node_modules/moment/locale/nl.js",
        "./nl-be": "./node_modules/moment/locale/nl-be.js",
        "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
        "./nl.js": "./node_modules/moment/locale/nl.js",
        "./nn": "./node_modules/moment/locale/nn.js",
        "./nn.js": "./node_modules/moment/locale/nn.js",
        "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
        "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
        "./pa-in": "./node_modules/moment/locale/pa-in.js",
        "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
        "./pl": "./node_modules/moment/locale/pl.js",
        "./pl.js": "./node_modules/moment/locale/pl.js",
        "./pt": "./node_modules/moment/locale/pt.js",
        "./pt-br": "./node_modules/moment/locale/pt-br.js",
        "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
        "./pt.js": "./node_modules/moment/locale/pt.js",
        "./ro": "./node_modules/moment/locale/ro.js",
        "./ro.js": "./node_modules/moment/locale/ro.js",
        "./ru": "./node_modules/moment/locale/ru.js",
        "./ru.js": "./node_modules/moment/locale/ru.js",
        "./sd": "./node_modules/moment/locale/sd.js",
        "./sd.js": "./node_modules/moment/locale/sd.js",
        "./se": "./node_modules/moment/locale/se.js",
        "./se.js": "./node_modules/moment/locale/se.js",
        "./si": "./node_modules/moment/locale/si.js",
        "./si.js": "./node_modules/moment/locale/si.js",
        "./sk": "./node_modules/moment/locale/sk.js",
        "./sk.js": "./node_modules/moment/locale/sk.js",
        "./sl": "./node_modules/moment/locale/sl.js",
        "./sl.js": "./node_modules/moment/locale/sl.js",
        "./sq": "./node_modules/moment/locale/sq.js",
        "./sq.js": "./node_modules/moment/locale/sq.js",
        "./sr": "./node_modules/moment/locale/sr.js",
        "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
        "./sr.js": "./node_modules/moment/locale/sr.js",
        "./ss": "./node_modules/moment/locale/ss.js",
        "./ss.js": "./node_modules/moment/locale/ss.js",
        "./sv": "./node_modules/moment/locale/sv.js",
        "./sv.js": "./node_modules/moment/locale/sv.js",
        "./sw": "./node_modules/moment/locale/sw.js",
        "./sw.js": "./node_modules/moment/locale/sw.js",
        "./ta": "./node_modules/moment/locale/ta.js",
        "./ta.js": "./node_modules/moment/locale/ta.js",
        "./te": "./node_modules/moment/locale/te.js",
        "./te.js": "./node_modules/moment/locale/te.js",
        "./tet": "./node_modules/moment/locale/tet.js",
        "./tet.js": "./node_modules/moment/locale/tet.js",
        "./tg": "./node_modules/moment/locale/tg.js",
        "./tg.js": "./node_modules/moment/locale/tg.js",
        "./th": "./node_modules/moment/locale/th.js",
        "./th.js": "./node_modules/moment/locale/th.js",
        "./tk": "./node_modules/moment/locale/tk.js",
        "./tk.js": "./node_modules/moment/locale/tk.js",
        "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
        "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
        "./tlh": "./node_modules/moment/locale/tlh.js",
        "./tlh.js": "./node_modules/moment/locale/tlh.js",
        "./tr": "./node_modules/moment/locale/tr.js",
        "./tr.js": "./node_modules/moment/locale/tr.js",
        "./tzl": "./node_modules/moment/locale/tzl.js",
        "./tzl.js": "./node_modules/moment/locale/tzl.js",
        "./tzm": "./node_modules/moment/locale/tzm.js",
        "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
        "./tzm.js": "./node_modules/moment/locale/tzm.js",
        "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
        "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
        "./uk": "./node_modules/moment/locale/uk.js",
        "./uk.js": "./node_modules/moment/locale/uk.js",
        "./ur": "./node_modules/moment/locale/ur.js",
        "./ur.js": "./node_modules/moment/locale/ur.js",
        "./uz": "./node_modules/moment/locale/uz.js",
        "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
        "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
        "./uz.js": "./node_modules/moment/locale/uz.js",
        "./vi": "./node_modules/moment/locale/vi.js",
        "./vi.js": "./node_modules/moment/locale/vi.js",
        "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
        "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
        "./yo": "./node_modules/moment/locale/yo.js",
        "./yo.js": "./node_modules/moment/locale/yo.js",
        "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
        "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
        "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
        "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
        "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
        "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
        "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
        "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
      /***/
    },

    /***/
    "./src/app/app-injector.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/app-injector.service.ts ***!
      \*****************************************/

    /*! exports provided: AppInjector */

    /***/
    function srcAppAppInjectorServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppInjector", function () {
        return AppInjector;
      });

      var AppInjector = /*#__PURE__*/function () {
        function AppInjector() {
          _classCallCheck(this, AppInjector);
        }

        _createClass(AppInjector, null, [{
          key: "setInjector",
          value: function setInjector(injector) {
            AppInjector.injector = injector;
          }
        }, {
          key: "getInjector",
          value: function getInjector() {
            return AppInjector.injector;
          }
        }]);

        return AppInjector;
      }();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule, getDefaultRedirectTo */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getDefaultRedirectTo", function () {
        return getDefaultRedirectTo;
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


      var _core_utilities_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/utilities/utils */
      "./src/app/core/utilities/utils.ts");
      /* harmony import */


      var _shared_error_pages_components_access_forbidden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/error-pages/components/access-forbidden */
      "./src/app/shared/error-pages/components/access-forbidden/index.ts");
      /* harmony import */


      var _shared_error_pages_components_not_found__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @shared/error-pages/components/not-found */
      "./src/app/shared/error-pages/components/not-found/index.ts");
      /* harmony import */


      var _shared_error_pages_components_invalid_link_invalid_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/error-pages/components/invalid-link/invalid-link.component */
      "./src/app/shared/error-pages/components/invalid-link/invalid-link.component.ts");

      var routes = [{
        path: "",
        redirectTo: getDefaultRedirectTo(),
        pathMatch: "full"
      }, {
        path: "auth",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-auth-auth-module */
          "features-auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./features/auth/auth.module */
          "./src/app/features/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }, {
        path: "admin-auth",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-admin-auth-admin-auth-module */
          "features-admin-auth-admin-auth-module").then(__webpack_require__.bind(null,
          /*! ./features/admin-auth/admin-auth.module */
          "./src/app/features/admin-auth/admin-auth.module.ts")).then(function (m) {
            return m.AdminAuthModule;
          });
        }
      }, {
        path: "admin-dashboard",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-admin-dashboard-admin-dashboard-module */
          "features-admin-dashboard-admin-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./features/admin-dashboard/admin-dashboard.module */
          "./src/app/features/admin-dashboard/admin-dashboard.module.ts")).then(function (m) {
            return m.AdminDashboardModule;
          });
        }
      }, {
        path: "dashboard",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-dashboard-dashboard-module */
          "features-dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./features/dashboard/dashboard.module */
          "./src/app/features/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        }
      }, {
        path: "on-board",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | features-on-board-on-board-module */
          "features-on-board-on-board-module").then(__webpack_require__.bind(null,
          /*! ./features/on-board/on-board.module */
          "./src/app/features/on-board/on-board.module.ts")).then(function (m) {
            return m.OnBoardModule;
          });
        }
      }, {
        path: "designs",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | designs-designs-module */
          "designs-designs-module").then(__webpack_require__.bind(null,
          /*! ./designs/designs.module */
          "./src/app/designs/designs.module.ts")).then(function (m) {
            return m.DesignsModule;
          });
        }
      }, // {
      //   path: "admin",
      //   loadChildren: () => import("./features/admin/admin.module").then((m) => m.AdminModule),
      // },
      {
        path: "access-denied",
        component: _shared_error_pages_components_access_forbidden__WEBPACK_IMPORTED_MODULE_3__["AccessForbiddenComponent"],
        data: {
          title: "access_denied"
        }
      }, {
        path: "invalid-link",
        component: _shared_error_pages_components_invalid_link_invalid_link_component__WEBPACK_IMPORTED_MODULE_5__["InvalidLinkComponent"]
      }, {
        path: "**",
        component: _shared_error_pages_components_not_found__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();

      function getDefaultRedirectTo() {
        var subDomain = _core_utilities_utils__WEBPACK_IMPORTED_MODULE_2__["default"].getSubDomain();

        if (subDomain === "app") {
          return "admin";
        } else {
          return "admin-auth";
        } // return subDomain === "admin" ? "admin-auth" : "auth";

      }
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core */
      "./src/app/core/index.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _core_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/services/loading/loading.service */
      "./src/app/core/services/loading/loading.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

      function AppComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function (_core__WEBPACK_IMPORT) {
        _inherits(AppComponent, _core__WEBPACK_IMPORT);

        var _super = _createSuper(AppComponent);

        function AppComponent(title, activatedRoute, loadingService) {
          var _this;

          _classCallCheck(this, AppComponent);

          _this = _super.call(this);
          _this.title = title;
          _this.activatedRoute = activatedRoute;
          _this.loadingService = loadingService;
          _this.loading = false;

          _this.setDefaultLanguage();

          return _this;
        }
        /**
         * Set browser title
         */


        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setBrowserTitle();
            this.listenToLoading();
          }
          /**
           * Listen to the loadingSub property in the LoadingService class. This drives the
           * display of the loading spinner.
           */

        }, {
          key: "listenToLoading",
          value: function listenToLoading() {
            var _this2 = this;

            this.loadingService.loadingSub.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
            .subscribe(function (loading) {
              _this2.loading = loading;
            });
          }
          /**
           * Set default language for app
           */

        }, {
          key: "setDefaultLanguage",
          value: function setDefaultLanguage() {
            var currentLanguage = _core__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"].CURRENT_LANGUAGE;
            this.translate.setDefaultLang(currentLanguage);
          }
          /**
           * Set browser title from route data
           */

        }, {
          key: "setBrowserTitle",
          value: function setBrowserTitle() {
            var _this3 = this;

            var appTitle = this.title.getTitle();
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
              var titleString = "title";
              var child = _this3.activatedRoute.firstChild;

              while (child.firstChild) {
                child = child.firstChild;
              }

              if (child.snapshot.data[titleString]) {
                return child.snapshot.data[titleString];
              }

              return appTitle;
            })).subscribe(function (titleString) {
              var translatedTitle = _this3.translate.instant(titleString);

              _this3.title.setTitle(translatedTitle);
            });
          }
        }]);

        return AppComponent;
      }(_core__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 2,
        vars: 1,
        consts: [["class", "spinner-wrapper", 4, "ngIf"], [1, "spinner-wrapper"], ["color", "primary", "mode", "indeterminate"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinner"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _core_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_5__["LoadingService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule, HttpLoaderFactory */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
        return HttpLoaderFactory;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
      /* harmony import */


      var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/service-worker */
      "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/core.module */
      "./src/app/core/core.module.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store-devtools */
      "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/http-loader */
      "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_injector_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./app-injector.service */
      "./src/app/app-injector.service.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./store */
      "./src/app/store/index.ts");
      /* harmony import */


      var _store_effects_app_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./store/effects/app.effects */
      "./src/app/store/effects/app.effects.ts");

      var AppModule = function AppModule(injector) {
        _classCallCheck(this, AppModule);

        _app_injector_service__WEBPACK_IMPORTED_MODULE_13__["AppInjector"].setInjector(injector);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register("ngsw-worker.js", {
          enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
        }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
          loader: {
            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
            useFactory: HttpLoaderFactory,
            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
          }
        }), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
          metaReducers: _store__WEBPACK_IMPORTED_MODULE_16__["metaReducers"],
          runtimeChecks: {
            strictStateImmutability: false,
            strictActionImmutability: false
          }
        }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_effects_app_effects__WEBPACK_IMPORTED_MODULE_17__["AppEffects"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsRootModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"].forRoot(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register("ngsw-worker.js", {
              enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production
            }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forRoot({
              loader: {
                provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                useFactory: HttpLoaderFactory,
                deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
              }
            }), _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_16__["reducers"], {
              metaReducers: _store__WEBPACK_IMPORTED_MODULE_16__["metaReducers"],
              runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false
              }
            }), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument(), _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_effects_app_effects__WEBPACK_IMPORTED_MODULE_17__["AppEffects"]])],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }];
        }, null);
      })();
      /**
       * required for AOT compilation
       * @param http Httpclient
       */


      function HttpLoaderFactory(http) {
        return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
      }
      /***/

    },

    /***/
    "./src/app/core/components/base.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/components/base.component.ts ***!
      \***************************************************/

    /*! exports provided: BaseComponent */

    /***/
    function srcAppCoreComponentsBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return BaseComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _core_services_datas_datas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/services/datas/datas.service */
      "./src/app/core/services/datas/datas.service.ts");
      /* harmony import */


      var _core_services_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/services/storage */
      "./src/app/core/services/storage/index.ts");
      /* harmony import */


      var _core_utilities_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @core/utilities/utils */
      "./src/app/core/utilities/utils.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _shared_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/confirm-dialog/confirm-dialog.service */
      "./src/app/shared/confirm-dialog/confirm-dialog.service.ts");
      /* harmony import */


      var _shared_error_messages_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @shared/error-messages/services */
      "./src/app/shared/error-messages/services/index.ts");
      /* harmony import */


      var app_app_injector_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! app/app-injector.service */
      "./src/app/app-injector.service.ts");

      var BaseComponent = /*#__PURE__*/function () {
        function BaseComponent() {
          _classCallCheck(this, BaseComponent);

          var injector = app_app_injector_service__WEBPACK_IMPORTED_MODULE_10__["AppInjector"].getInjector();
          this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
          this.constants = injector.get(_core_services__WEBPACK_IMPORTED_MODULE_3__["ConstantsService"]);
          this.translate = injector.get(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]);
          this.storage = injector.get(_core_services_storage__WEBPACK_IMPORTED_MODULE_5__["StorageService"]);
          this.snackBar = injector.get(_core_services__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]);
          this.datasService = injector.get(_core_services_datas_datas_service__WEBPACK_IMPORTED_MODULE_4__["DatasService"]);
          this.confirmDialog = injector.get(_shared_confirm_dialog_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_8__["ConfirmDialogService"]);
          this.formBuilder = injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]);
          this.errorMessageService = injector.get(_shared_error_messages_services__WEBPACK_IMPORTED_MODULE_9__["ErrorMessageService"]);
        }

        _createClass(BaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           *
           * @param translationString accepts module and key combination e.g: module_key.property_key
           */

        }, {
          key: "getTranslatedString",
          value: function getTranslatedString(translationString) {
            return this.translate.instant(translationString);
          }
          /**
           *
           * @param route accepts route to navigate e.g: module/path (auth/login)
           */

        }, {
          key: "redirectTo",
          value: function redirectTo(route) {
            this.router.navigateByUrl(route);
          }
          /**
           * Set null value for empty string to a formControl
           * @param control
           * @param value
           */

        }, {
          key: "onEmptyToNull",
          value: function onEmptyToNull(control, value) {
            control.setValue(value);
          }
          /**
           * Get first alphabet.
           * @param name
           */

        }, {
          key: "getDefaultAlphabet",
          value: function getDefaultAlphabet(name) {
            return _core_utilities_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getFirstCharacter(name);
          }
        }]);

        return BaseComponent;
      }();

      BaseComponent.ɵfac = function BaseComponent_Factory(t) {
        return new (t || BaseComponent)();
      };

      BaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BaseComponent,
        selectors: [["ng-component"]],
        decls: 0,
        vars: 0,
        template: function BaseComponent_Template(rf, ctx) {},
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            template: ""
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/components/index.ts":
    /*!******************************************!*\
      !*** ./src/app/core/components/index.ts ***!
      \******************************************/

    /*! exports provided: BaseComponent */

    /***/
    function srcAppCoreComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return _base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"];
      });
      /***/

    },

    /***/
    "./src/app/core/core.module.ts":
    /*!*************************************!*\
      !*** ./src/app/core/core.module.ts ***!
      \*************************************/

    /*! exports provided: CoreModule */

    /***/
    function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return CoreModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./interceptors */
      "./src/app/core/interceptors/index.ts");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _store_reducers_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./store/reducers/index */
      "./src/app/core/store/reducers/index.ts");

      var CoreModule = /*#__PURE__*/function () {
        function CoreModule(parentModule) {
          _classCallCheck(this, CoreModule);

          if (parentModule) {
            throw new Error("CoreModule is already loaded. Import it in the AppModule only");
          }
        }

        _createClass(CoreModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: CoreModule,
              providers: []
            };
          }
        }]);

        return CoreModule;
      }();

      CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CoreModule
      });
      CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CoreModule_Factory(t) {
          return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12));
        },
        providers: [_services__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"], _interceptors__WEBPACK_IMPORTED_MODULE_5__["httpInterceptorProviders"], {
          provide: "BASE_API_URL",
          useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature("coreModule", _store_reducers_index__WEBPACK_IMPORTED_MODULE_7__["coreReducers"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, {
          declarations: [_components__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_components__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature("coreModule", _store_reducers_index__WEBPACK_IMPORTED_MODULE_7__["coreReducers"])],
            exports: [],
            providers: [_services__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"], _interceptors__WEBPACK_IMPORTED_MODULE_5__["httpInterceptorProviders"], {
              provide: "BASE_API_URL",
              useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl
            }]
          }]
        }], function () {
          return [{
            type: CoreModule,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/enums/api-urls.ts":
    /*!****************************************!*\
      !*** ./src/app/core/enums/api-urls.ts ***!
      \****************************************/

    /*! exports provided: ApiUrls */

    /***/
    function srcAppCoreEnumsApiUrlsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiUrls", function () {
        return ApiUrls;
      });

      var ApiUrls;

      (function (ApiUrls) {
        ApiUrls["GENERATE_OTP"] = "auth/generate-otp";
        ApiUrls["GENERATE_FORGOT_PASSWORD_OTP"] = "users/forgot-password/generate-otp";
        ApiUrls["AUTHENTICATE"] = "authenticate";
        ApiUrls["RESET_PASSWORD"] = "users/forgot-password";
        ApiUrls["PASSWORD_AUTHENTICATE"] = "authenticate/login";
        ApiUrls["LOGOUT"] = "authenticate/logout";
        ApiUrls["BUSINESS_LIST"] = "businesses";
        ApiUrls["BUSINESS"] = "businesses";
        ApiUrls["BUSINESS_TYPES"] = "businesses/types";
        ApiUrls["FILE"] = "files";
        ApiUrls["NEWS"] = "news";
        ApiUrls["USERS"] = "users";
        ApiUrls["OWNER"] = "owner";
        ApiUrls["CREATE_UPDATE_PASSWORD"] = "users/create-update-password";
        ApiUrls["NOTIFICATIONS"] = "notifications";
        ApiUrls["NOTIFICATIONS_COUNT"] = "notifications/unread-count";
        ApiUrls["BUILDINGS"] = "buildings";
        ApiUrls["MY_BUILDINGS"] = "users/my-buildings";
        ApiUrls["ROLES"] = "roles";
        ApiUrls["MARK_READ"] = "notifications/mark-read";
        ApiUrls["TICKETS"] = "tickets";
        ApiUrls["ADMIN_AUTHENTICATE"] = "ownant/authenticate";
        ApiUrls["INVITE_PROPERTY_OWNER"] = "invitation/invite-property-owner";
        ApiUrls["VERIFY_MOBILE_NUMBER"] = "invitation/verify/mobile-number";
        ApiUrls["VERIFY_OTP"] = "invitation/verify/otp";
        ApiUrls["VERIFY_INVITATION"] = "invitation/verify/invitation-link";
        ApiUrls["OWNERSHIP_TYPES"] = "property/ownershipTypes";
        ApiUrls["LOGIN_WITH_OTP"] = "property/authenticate";
        ApiUrls["ONBOARD_OWNER"] = "owner/onboard-owner";
        ApiUrls["PROPERTY_TYPES"] = "property/propertyTypes";
        ApiUrls["ONBOARD_PROPERTY"] = "property/onboard-property";
        ApiUrls["PROPERTY_OWNER_PENDING_INVITATIONS"] = "invitation/getPendingInvitations";
        ApiUrls["ACTIVE_OWNERS"] = "owner/getAllVerifiedPropertyOwner";
        ApiUrls["UPDATE_INVITATION_STATUS"] = "invitation/update/property-owner";
      })(ApiUrls || (ApiUrls = {}));
      /***/

    },

    /***/
    "./src/app/core/enums/app-icons.ts":
    /*!*****************************************!*\
      !*** ./src/app/core/enums/app-icons.ts ***!
      \*****************************************/

    /*! exports provided: AppIcons */

    /***/
    function srcAppCoreEnumsAppIconsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppIcons", function () {
        return AppIcons;
      });

      var AppIcons;

      (function (AppIcons) {
        AppIcons["REGISTRATION_PAGE"] = "add_to_home_screen";
        AppIcons["LOGIN_PAGE"] = "smartphone";
        AppIcons["DOWN_ARROW"] = "keyboard_arrow_down";
      })(AppIcons || (AppIcons = {}));
      /***/

    },

    /***/
    "./src/app/core/enums/app-permissions.ts":
    /*!***********************************************!*\
      !*** ./src/app/core/enums/app-permissions.ts ***!
      \***********************************************/

    /*! exports provided: AppPermissions */

    /***/
    function srcAppCoreEnumsAppPermissionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppPermissions", function () {
        return AppPermissions;
      });

      var AppPermissions;

      (function (AppPermissions) {
        AppPermissions["dashboard_module"] = "dashboard";
        AppPermissions["business_module"] = "businesses";
        AppPermissions["create_business"] = "businesses.create";
        AppPermissions["list_business"] = "businesses.list";
        AppPermissions["detail_business"] = "businesses.detail";
        AppPermissions["update_business"] = "business.update";
        AppPermissions["delete_business"] = "business.delete";
        AppPermissions["building_module"] = "buildings";
        AppPermissions["list_building"] = "buildings.list";
        AppPermissions["create_building"] = "buildings.create";
        AppPermissions["detail_building"] = "buildings.detail";
        AppPermissions["update_building"] = "building.update";
        AppPermissions["delete_building"] = "building.delete";
        AppPermissions["tenants_module"] = "tenants";
        AppPermissions["create_tenants"] = "tenants.create";
        AppPermissions["list_tenants"] = "tenants.list";
        AppPermissions["detail_tenants"] = "tenants.detail";
        AppPermissions["update_tenants"] = "tenants.update";
        AppPermissions["delete_tenants"] = "tenants.delete";
        AppPermissions["users_module"] = "users";
        AppPermissions["create_users"] = "users.create";
        AppPermissions["list_users"] = "users.list";
        AppPermissions["detail_users"] = "users.detail";
        AppPermissions["update_users"] = "users.update";
        AppPermissions["delete_users"] = "users.delete";
        AppPermissions["news_module"] = "news";
      })(AppPermissions || (AppPermissions = {}));
      /***/

    },

    /***/
    "./src/app/core/enums/app-routes.ts":
    /*!******************************************!*\
      !*** ./src/app/core/enums/app-routes.ts ***!
      \******************************************/

    /*! exports provided: AppRoutes */

    /***/
    function srcAppCoreEnumsAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return AppRoutes;
      });

      var AppRoutes;

      (function (AppRoutes) {
        AppRoutes["LOGIN_PAGE"] = "/auth/login";
        AppRoutes["LOGIN_WITH_PASSWORD"] = "/auth/password-login";
        AppRoutes["FORGOT_PASSWORD"] = "/auth/forgot-password";
        AppRoutes["RESET_PASSWORD"] = "/auth/reset-password";
        AppRoutes["REGISTRATION_PAGE"] = "/auth/register";
        AppRoutes["PROFILE_PAGE"] = "/admin/profile";
        AppRoutes["BUSINESS"] = "/admin/business";
        AppRoutes["CREATE_BUSINESS"] = "/admin/business/create";
        AppRoutes["EDIT_BUSINESS"] = "/admin/business/edit";
        AppRoutes["EDIT_PROFILE"] = "/admin/profile/edit";
        AppRoutes["NEWS"] = "/admin/news";
        AppRoutes["CREATE_NEWS"] = "/admin/news/create";
        AppRoutes["EDIT_NEWS"] = "/admin/news/edit";
        AppRoutes["USERS"] = "/admin/users";
        AppRoutes["CREATE_USERS"] = "/admin/users/create";
        AppRoutes["BUILDINGS"] = "/admin/buildings";
        AppRoutes["TICKETS"] = "/admin/tickets";
        AppRoutes["CREATE_BUILDING"] = "/admin/buildings/create";
        AppRoutes["ADMIN_DASHBOARD"] = "/admin-dashboard";
        AppRoutes["ADMIN_LOGIN"] = "admin-auth/login";
        AppRoutes["SIGN_UP_OTP"] = "auth/sign-up-otp";
        AppRoutes["ON_BOARD_OWNER_TYPE"] = "on-board/owner-type";
        AppRoutes["ON_BOARD_OWNER_COMPANY"] = "on-board/owner-detail/company";
        AppRoutes["ON_BOARD_OWNER_INDIVIDUAL"] = "on-board/owner-detail/individual";
        AppRoutes["ON_BOARD_PROPERTY_DETAIL"] = "on-board/property-detail"; // ON_BOARD_PROPERTY_HOUSING = "on-board/property-detail/housing",
        // ON_BOARD_PROPERTY_APARTMENT = "on-board/property-detail/apartment",

        AppRoutes["ON_BOARD_PROPERTY_TYPE"] = "on-board/property-type";
        AppRoutes["ON_BOARD_GREET"] = "on-board/greet";
        AppRoutes["INVALID_LINK"] = "invalid-link";
        AppRoutes["DASHBOARD"] = "dashboard";
        AppRoutes["AUTH_LOGIN"] = "auth/login";
        AppRoutes["ACTIVE_OWNERS"] = "/admin-dashboard/owner/active";
        AppRoutes["INVITED_OWNERS"] = "/admin-dashboard/owner/invited";
      })(AppRoutes || (AppRoutes = {}));
      /***/

    },

    /***/
    "./src/app/core/enums/general.ts":
    /*!***************************************!*\
      !*** ./src/app/core/enums/general.ts ***!
      \***************************************/

    /*! exports provided: General */

    /***/
    function srcAppCoreEnumsGeneralTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "General", function () {
        return General;
      });

      var General;

      (function (General) {
        /*****************************************
         * Filter parameters.
         * ****************************************
         */
        General[General["PAGINATE_SMALL"] = 5] = "PAGINATE_SMALL";
        General[General["PAGINATE_MEDIUM"] = 10] = "PAGINATE_MEDIUM";
        General[General["PAGINATE_LARGE"] = 250] = "PAGINATE_LARGE";
        General[General["DEFAULT_PAGE"] = 0] = "DEFAULT_PAGE";
        General["DEFAULT_SEARCH"] = "";
        General["IMAGE_TYPE_PROFILE"] = "profile";
        /*****************************************
         * File types.
         * ****************************************
         */

        General["FILE_TYPE_BUILDING"] = "building";
        General["FILE_TYPE_BUSINESS"] = "business";
        General["FILE_TYPE_PROFILE"] = "profile";
        General["FILE_TYPE_TICKET"] = "ticket";
        /*****************************************
         * Roles
         * ****************************************
         */

        General["ROLE_SUPER_ADMIN"] = "Super Admin";
        General["ROLE_BUILDING_OWNER"] = "Building Owner";
        General["ROLE_BUILDING_MANAGER"] = "Building Manager";
        General["ROLE_TENANT"] = "Tenant";
        General["ROLE_GATEKEEPER"] = "Gatekeeper";
        /*****************************************
         * Modules
         * ****************************************
         */

        General["SCOPE_BUSINESS"] = "business";
        General["SCOPE_BUILDING"] = "building";
        /**
         * Imageable Types
         */

        General["NEWS"] = "news";
      })(General || (General = {}));
      /***/

    },

    /***/
    "./src/app/core/enums/index.ts":
    /*!*************************************!*\
      !*** ./src/app/core/enums/index.ts ***!
      \*************************************/

    /*! exports provided: ApiUrls, AppIcons, AppPermissions, AppRoutes, General, RegularExpressions, StorageKeys */

    /***/
    function srcAppCoreEnumsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _api_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api-urls */
      "./src/app/core/enums/api-urls.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiUrls", function () {
        return _api_urls__WEBPACK_IMPORTED_MODULE_0__["ApiUrls"];
      });
      /* harmony import */


      var _app_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-icons */
      "./src/app/core/enums/app-icons.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppIcons", function () {
        return _app_icons__WEBPACK_IMPORTED_MODULE_1__["AppIcons"];
      });
      /* harmony import */


      var _app_permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-permissions */
      "./src/app/core/enums/app-permissions.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPermissions", function () {
        return _app_permissions__WEBPACK_IMPORTED_MODULE_2__["AppPermissions"];
      });
      /* harmony import */


      var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routes */
      "./src/app/core/enums/app-routes.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return _app_routes__WEBPACK_IMPORTED_MODULE_3__["AppRoutes"];
      });
      /* harmony import */


      var _general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./general */
      "./src/app/core/enums/general.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "General", function () {
        return _general__WEBPACK_IMPORTED_MODULE_4__["General"];
      });
      /* harmony import */


      var _regular_expressions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./regular-expressions */
      "./src/app/core/enums/regular-expressions.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegularExpressions", function () {
        return _regular_expressions__WEBPACK_IMPORTED_MODULE_5__["RegularExpressions"];
      });
      /* harmony import */


      var _storage_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./storage-keys */
      "./src/app/core/enums/storage-keys.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageKeys", function () {
        return _storage_keys__WEBPACK_IMPORTED_MODULE_6__["StorageKeys"];
      });
      /***/

    },

    /***/
    "./src/app/core/enums/regular-expressions.ts":
    /*!***************************************************!*\
      !*** ./src/app/core/enums/regular-expressions.ts ***!
      \***************************************************/

    /*! exports provided: RegularExpressions */

    /***/
    function srcAppCoreEnumsRegularExpressionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegularExpressions", function () {
        return RegularExpressions;
      });

      var RegularExpressions;

      (function (RegularExpressions) {
        RegularExpressions["URL"] = "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?";
      })(RegularExpressions || (RegularExpressions = {}));
      /***/

    },

    /***/
    "./src/app/core/enums/storage-keys.ts":
    /*!********************************************!*\
      !*** ./src/app/core/enums/storage-keys.ts ***!
      \********************************************/

    /*! exports provided: StorageKeys */

    /***/
    function srcAppCoreEnumsStorageKeysTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageKeys", function () {
        return StorageKeys;
      });

      var StorageKeys;

      (function (StorageKeys) {
        StorageKeys["token"] = "token";
        StorageKeys["permissions"] = "permissions";
        StorageKeys["business"] = "business";
        StorageKeys["DEFAULT_ROUTE"] = "default_route";
        StorageKeys["USER"] = "user";
        StorageKeys["SCOPES"] = "scopes";
        StorageKeys["PER_PAGE"] = "per_page";
        StorageKeys["HAS_PASSWORD"] = "has_password";
        StorageKeys["COMMENTS_PER_PAGE"] = "comments_per_page";
        StorageKeys["ALLOWED_BUSINESSES"] = "allowed_businesses";
        StorageKeys["ALLOWED_BUILDINGS"] = "allowed_buildings";
        StorageKeys["ACTIVE_BUSINESS"] = "active_business";
        StorageKeys["ACTIVE_BUILDING"] = "active_building";
        StorageKeys["ACTIVE_NEWS"] = "active_news";
        StorageKeys["ACTIVE_TICKET"] = "active_ticket";
      })(StorageKeys || (StorageKeys = {}));
      /***/

    },

    /***/
    "./src/app/core/guards/auth/auth.guard.ts":
    /*!************************************************!*\
      !*** ./src/app/core/guards/auth/auth.guard.ts ***!
      \************************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppCoreGuardsAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services/auth/auth.service */
      "./src/app/core/services/auth/auth.service.ts");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, authService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (this.authService.isLoggedIn()) {
              return true;
            }

            this.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].REGISTRATION_PAGE);
          }
        }, {
          key: "canActivateChild",
          value: function canActivateChild(childRoute, state) {
            return this.canActivate(childRoute, state);
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _core_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/guards/auth/index.ts":
    /*!*******************************************!*\
      !*** ./src/app/core/guards/auth/index.ts ***!
      \*******************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppCoreGuardsAuthIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.guard */
      "./src/app/core/guards/auth/auth.guard.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "./src/app/core/guards/index.ts":
    /*!**************************************!*\
      !*** ./src/app/core/guards/index.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function srcAppCoreGuardsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth */
      "./src/app/core/guards/auth/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _auth__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
      });
      /***/

    },

    /***/
    "./src/app/core/index.ts":
    /*!*******************************!*\
      !*** ./src/app/core/index.ts ***!
      \*******************************/

    /*! no static exports found */

    /***/
    function srcAppCoreIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      "./src/app/core/components/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"];
      });
      /* harmony import */


      var _core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core.module */
      "./src/app/core/core.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
        return _core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"];
      });
      /* harmony import */


      var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./enums */
      "./src/app/core/enums/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ApiUrls", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["ApiUrls"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppIcons", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["AppIcons"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppPermissions", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["AppPermissions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AppRoutes", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "General", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["General"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "RegularExpressions", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["RegularExpressions"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageKeys", function () {
        return _enums__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"];
      });
      /* harmony import */


      var _guards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guards */
      "./src/app/core/guards/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return _guards__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"];
      });
      /* harmony import */


      var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./models */
      "./src/app/core/models/index.ts");
      /* harmony reexport (unknown) */


      for (var __WEBPACK_IMPORT_KEY__ in _models__WEBPACK_IMPORTED_MODULE_4__) {
        if (["BaseComponent", "CoreModule", "ApiUrls", "AppIcons", "AppPermissions", "AppRoutes", "General", "RegularExpressions", "StorageKeys", "AuthGuard", "default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function (key) {
          __webpack_require__.d(__webpack_exports__, key, function () {
            return _models__WEBPACK_IMPORTED_MODULE_4__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
      }
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services */
      "./src/app/core/services/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["BaseService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatasService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["DatasService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExceptionMessagesService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["ExceptionMessagesService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_5__["StorageService"];
      });
      /* harmony import */


      var _utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return _utilities__WEBPACK_IMPORTED_MODULE_6__["CustomValidators"];
      });
      /***/

    },

    /***/
    "./src/app/core/interceptors/base-url.interceptor.ts":
    /*!***********************************************************!*\
      !*** ./src/app/core/interceptors/base-url.interceptor.ts ***!
      \***********************************************************/

    /*! exports provided: BaseUrlInterceptor */

    /***/
    function srcAppCoreInterceptorsBaseUrlInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function () {
        return BaseUrlInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BaseUrlInterceptor = /*#__PURE__*/function () {
        function BaseUrlInterceptor(baseUrl) {
          _classCallCheck(this, BaseUrlInterceptor);

          this.baseUrl = baseUrl;
        }
        /**
         *
         * @param request
         * @param next
         */


        _createClass(BaseUrlInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // Ignore the request from translation files
            if (request.url.startsWith("/assets/i18n") && request) {
              return next.handle(request);
            }

            var apiReq = request.clone({
              url: "".concat(this.baseUrl, "/").concat(request.url)
            });
            return next.handle(apiReq);
          }
        }]);

        return BaseUrlInterceptor;
      }();

      BaseUrlInterceptor.ɵfac = function BaseUrlInterceptor_Factory(t) {
        return new (t || BaseUrlInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"]("BASE_API_URL"));
      };

      BaseUrlInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BaseUrlInterceptor,
        factory: BaseUrlInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseUrlInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: ["BASE_API_URL"]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/interceptors/error.interceptor.ts":
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/error.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function srcAppCoreInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(snackbar, storage, router) {
          _classCallCheck(this, ErrorInterceptor);

          this.snackbar = snackbar;
          this.storage = storage;
          this.router = router;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this4 = this;

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {// success code
            }, function (error) {
              if (error.status === 403) {
                _this4.router.navigateByUrl("access-denied");
              }

              if (error.status === 422 && error.error.message.toLowerCase() === "invalid token") {
                _this4.snackbar.open(error.error.message);

                _this4.storage.clear();

                _this4.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].LOGIN_PAGE);
              } else {
                if (error.error && error.error.message && error.error.statusCode !== 400) {
                  _this4.snackbar.open(error.error.message);
                }
              }
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _core_services__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/interceptors/index.ts":
    /*!********************************************!*\
      !*** ./src/app/core/interceptors/index.ts ***!
      \********************************************/

    /*! exports provided: BaseUrlInterceptor, httpInterceptorProviders */

    /***/
    function srcAppCoreInterceptorsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
        return httpInterceptorProviders;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./base-url.interceptor */
      "./src/app/core/interceptors/base-url.interceptor.ts");
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error.interceptor */
      "./src/app/core/interceptors/error.interceptor.ts");
      /* harmony import */


      var _notify_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notify.interceptor */
      "./src/app/core/interceptors/notify.interceptor.ts");
      /* harmony import */


      var _request_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./request.interceptor */
      "./src/app/core/interceptors/request.interceptor.ts");
      /* harmony import */


      var _token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./token.interceptor */
      "./src/app/core/interceptors/token.interceptor.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function () {
        return _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__["BaseUrlInterceptor"];
      });

      var httpInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__["BaseUrlInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _notify_interceptor__WEBPACK_IMPORTED_MODULE_3__["NotifyInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_5__["TokenInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
        useClass: _request_interceptor__WEBPACK_IMPORTED_MODULE_4__["RequestInterceptor"],
        multi: true
      }];
      /***/
    },

    /***/
    "./src/app/core/interceptors/notify.interceptor.ts":
    /*!*********************************************************!*\
      !*** ./src/app/core/interceptors/notify.interceptor.ts ***!
      \*********************************************************/

    /*! exports provided: NotifyInterceptor */

    /***/
    function srcAppCoreInterceptorsNotifyInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotifyInterceptor", function () {
        return NotifyInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var NotifyInterceptor = /*#__PURE__*/function () {
        function NotifyInterceptor(snackBarService) {
          _classCallCheck(this, NotifyInterceptor);

          this.snackBarService = snackBarService;
        }

        _createClass(NotifyInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            // Ignore the request from translation files
            if (request.url.startsWith("/assets/i18n") && request) {
              return next.handle(request);
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (event) {// if (event instanceof HttpResponse && event.status === 200) {
              //   this.snackBarService.open("List fetched successfully");
              // }
            }));
          }
        }]);

        return NotifyInterceptor;
      }();

      NotifyInterceptor.ɵfac = function NotifyInterceptor_Factory(t) {
        return new (t || NotifyInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]));
      };

      NotifyInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotifyInterceptor,
        factory: NotifyInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotifyInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _core_services__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/interceptors/request.interceptor.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/interceptors/request.interceptor.ts ***!
      \**********************************************************/

    /*! exports provided: RequestInterceptor */

    /***/
    function srcAppCoreInterceptorsRequestInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RequestInterceptor", function () {
        return RequestInterceptor;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../services/loading/loading.service */
      "./src/app/core/services/loading/loading.service.ts");
      /**
       * This class is for intercepting http requests. When a request starts, we set the loadingSub property
       * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
       * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
       * @class {HttpRequestInterceptor}
       */


      var RequestInterceptor = /*#__PURE__*/function () {
        function RequestInterceptor(loadingService) {
          _classCallCheck(this, RequestInterceptor);

          this.loadingService = loadingService;
        }

        _createClass(RequestInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var _this5 = this;

            this.loadingService.setLoading(true, request.url);
            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {
              if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]) {
                _this5.loadingService.setLoading(false, request.url);
              }

              return event;
            }, function (error) {
              _this5.loadingService.setLoading(false, request.url);

              return error;
            }));
          }
        }]);

        return RequestInterceptor;
      }();

      RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) {
        return new (t || RequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]));
      };

      RequestInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RequestInterceptor,
        factory: RequestInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _services_loading_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/interceptors/token.interceptor.ts":
    /*!********************************************************!*\
      !*** ./src/app/core/interceptors/token.interceptor.ts ***!
      \********************************************************/

    /*! exports provided: TokenInterceptor */

    /***/
    function srcAppCoreInterceptorsTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
        return TokenInterceptor;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var TokenInterceptor = /*#__PURE__*/function () {
        function TokenInterceptor(storageService) {
          _classCallCheck(this, TokenInterceptor);

          this.storageService = storageService;
        }

        _createClass(TokenInterceptor, [{
          key: "intercept",
          value: function intercept(request, next) {
            var token = this.storageService.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].token);

            if (token) {
              if (request.body instanceof FormData) {
                request = request.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(token)
                  }
                });
              } else {
                request = request.clone({
                  setHeaders: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                  }
                });
              }
            }

            return next.handle(request);
          }
        }]);

        return TokenInterceptor;
      }();

      TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
        return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_2__["StorageService"]));
      };

      TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TokenInterceptor,
        factory: TokenInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _core_services__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/models/index.ts":
    /*!**************************************!*\
      !*** ./src/app/core/models/index.ts ***!
      \**************************************/

    /*! no static exports found */

    /***/
    function srcAppCoreModelsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _login_payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-payload */
      "./src/app/core/models/login-payload.ts");
      /* harmony import */


      var _login_payload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_login_payload__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony reexport (unknown) */


      for (var __WEBPACK_IMPORT_KEY__ in _login_payload__WEBPACK_IMPORTED_MODULE_0__) {
        if (__WEBPACK_IMPORT_KEY__ !== 'default') (function (key) {
          __webpack_require__.d(__webpack_exports__, key, function () {
            return _login_payload__WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
      }
      /***/

    },

    /***/
    "./src/app/core/models/login-payload.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/models/login-payload.ts ***!
      \**********************************************/

    /*! no static exports found */

    /***/
    function srcAppCoreModelsLoginPayloadTs(module, exports) {
      /***/
    },

    /***/
    "./src/app/core/services/auth/auth.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/core/services/auth/auth.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppCoreServicesAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../base */
      "./src/app/core/services/base/index.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var AuthService = /*#__PURE__*/function (_base__WEBPACK_IMPORT) {
        _inherits(AuthService, _base__WEBPACK_IMPORT);

        var _super2 = _createSuper(AuthService);

        function AuthService(injector, store) {
          var _this6;

          _classCallCheck(this, AuthService);

          _this6 = _super2.call(this, injector);
          _this6.store = store;
          return _this6;
        }

        _createClass(AuthService, [{
          key: "verifyMobileNumber",
          value: function verifyMobileNumber(verifyMobileNumberPayload) {
            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].VERIFY_MOBILE_NUMBER, verifyMobileNumberPayload);
          }
        }, {
          key: "verifyOtp",
          value: function verifyOtp(verifyOTPPayload) {
            var _this7 = this;

            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].VERIFY_OTP, verifyOTPPayload, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this7.setTokenToStorage(response);
            }));
          }
        }, {
          key: "verifyInvitation",
          value: function verifyInvitation(invitationId) {
            return this.http.post("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].VERIFY_INVITATION, "/").concat(invitationId), null);
          }
          /**
           * API call to generate OTP
           * @param mobilePayload
           */

        }, {
          key: "generateOTP",
          value: function generateOTP(mobilePayload) {
            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].GENERATE_OTP, mobilePayload);
          }
          /**
           *
           * @param userId
           */

        }, {
          key: "getUserById",
          value: function getUserById(userId) {
            return this.http.get("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].USERS, "/").concat(userId));
          }
          /**
           * API for login with mobile number and password
           * @param loginWithPasswordPayload
           */

        }, {
          key: "loginWithPassword",
          value: function loginWithPassword(loginWithPasswordPayload) {
            var _this8 = this;

            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].PASSWORD_AUTHENTICATE, loginWithPasswordPayload, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this8.onLoginSuccess(response);
            }));
          }
        }, {
          key: "authenticate",
          value: function authenticate(otpPayload) {
            var _this9 = this;

            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].AUTHENTICATE, otpPayload, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this9.onLoginSuccess(response);

              return response;
            }));
          }
        }, {
          key: "onLoginSuccess",
          value: function onLoginSuccess(response) {
            var _this10 = this;

            this.setPermissionToStorage(response);
            this.setTokenToStorage(response);
            this.setHasPasswordToStorage(response);
            this.setUserToStorage(response.body.data);
            this.getUserById(response.body.data.id).subscribe(function (d) {
              _this10.setBusinessessToStorage(d.data);

              _this10.setBuildingsToStorage(d.data);

              _this10.redirectAccordingToRole();
            }, function (err) {});
          }
        }, {
          key: "setBusinessessToStorage",
          value: function setBusinessessToStorage(data) {
            var businesses = data.businesses;
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].ALLOWED_BUSINESSES, businesses);
          }
        }, {
          key: "setBuildingsToStorage",
          value: function setBuildingsToStorage(data) {
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].ALLOWED_BUILDINGS, data.buildings);
          }
        }, {
          key: "generateOTPForForgotPassword",
          value: function generateOTPForForgotPassword(mobilePayload) {
            return this.http.put(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].GENERATE_FORGOT_PASSWORD_OTP, mobilePayload);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(resetPasswordPayload) {
            return this.http.put(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].RESET_PASSWORD, resetPasswordPayload);
          }
          /**
           * Check whether logged in or not
           */

        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.storage.get("token");
          }
        }, {
          key: "logOut",
          value: function logOut() {
            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].LOGOUT, null);
          }
          /**
           * Fetch permissions from response body and set them to the storage
           * @param response
           */

        }, {
          key: "setPermissionToStorage",
          value: function setPermissionToStorage(response) {
            var permissions = response.body.data.permissions;
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].permissions, permissions);
          }
        }, {
          key: "setHasPasswordToStorage",
          value: function setHasPasswordToStorage(response) {
            var hasPassword = response.body.data.hasPassword;
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].HAS_PASSWORD, hasPassword);
          }
          /**
           * Fetch token from headers and set it to the storage
           * @param response
           */

        }, {
          key: "setTokenToStorage",
          value: function setTokenToStorage(response) {
            var token = response.headers.get("token");
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].token, token);
          }
          /**
           * Set user to local storage.
           * @private
           * @param userData
           */

        }, {
          key: "setUserToStorage",
          value: function setUserToStorage(userData) {
            var id = userData.id,
                name = userData.name,
                email = userData.email,
                mobileNumber = userData.mobileNumber,
                image = userData.image,
                superAdmin = userData.superAdmin,
                status = userData.status;
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].USER, {
              id: id,
              name: name,
              email: email,
              mobileNumber: mobileNumber,
              image: image,
              superAdmin: superAdmin,
              status: status
            });
          }
          /**
           * Get current user from local storage.
           */

        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            return this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].USER);
          }
        }, {
          key: "redirectAccordingToRole",
          value: function redirectAccordingToRole() {
            var userDetail = this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].USER);
            var isSuperAdmin = userDetail.superAdmin;

            if (isSuperAdmin) {
              this.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].BUSINESS);
            } else {
              this.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].BUILDINGS);
            }
          }
        }, {
          key: "registerMobileNumber",
          value: function registerMobileNumber(registerMobileNumberPayload) {
            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].GENERATE_OTP, registerMobileNumberPayload);
          }
        }, {
          key: "loginWithOtp",
          value: function loginWithOtp(loginWithOTPPayload) {
            var _this11 = this;

            return this.http.post(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].LOGIN_WITH_OTP, loginWithOTPPayload, {
              observe: "response"
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
              _this11.setTokenToStorage(response);
            }));
          }
        }]);

        return AuthService;
      }(_base__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/auth/index.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/services/auth/index.ts ***!
      \*********************************************/

    /*! exports provided: AuthService */

    /***/
    function srcAppCoreServicesAuthIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/core/services/auth/auth.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/base/base.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/core/services/base/base.service.ts ***!
      \****************************************************/

    /*! exports provided: BaseService */

    /***/
    function srcAppCoreServicesBaseBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseService", function () {
        return BaseService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../constants */
      "./src/app/core/services/constants/index.ts");
      /* harmony import */


      var _datas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../datas */
      "./src/app/core/services/datas/index.ts");
      /* harmony import */


      var _storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storage */
      "./src/app/core/services/storage/index.ts");

      var BaseService = /*#__PURE__*/function () {
        function BaseService(injector) {
          _classCallCheck(this, BaseService);

          this.injector = injector;
          this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
          this.storage = injector.get(_storage__WEBPACK_IMPORTED_MODULE_6__["StorageService"]);
          this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
          this.constants = injector.get(_constants__WEBPACK_IMPORTED_MODULE_4__["ConstantsService"]);
          this.dataService = injector.get(_datas__WEBPACK_IMPORTED_MODULE_5__["DatasService"]);
        }

        _createClass(BaseService, [{
          key: "onLoginSuccess",
          value: function onLoginSuccess(response) {
            this.setTokenToStorage(response);
            this.setUserToStorage(response.body.data);
          }
          /**
           * Fetch token from headers and set it to the storage
           * @param response
           */

        }, {
          key: "setTokenToStorage",
          value: function setTokenToStorage(response) {
            var token = response.headers.get("token");
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_3__["StorageKeys"].token, token);
          }
          /**
           * Set user to local storage.
           * @private
           * @param userData
           */

        }, {
          key: "setUserToStorage",
          value: function setUserToStorage(userData) {
            var id = userData.id,
                name = userData.name,
                email = userData.email,
                mobileNumber = userData.mobileNumber,
                image = userData.image,
                status = userData.status;
            this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_3__["StorageKeys"].USER, {
              id: id,
              name: name,
              email: email,
              mobileNumber: mobileNumber,
              image: image,
              status: status
            });
          }
        }]);

        return BaseService;
      }();

      BaseService.ɵfac = function BaseService_Factory(t) {
        return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]));
      };

      BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BaseService,
        factory: BaseService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/base/index.ts":
    /*!*********************************************!*\
      !*** ./src/app/core/services/base/index.ts ***!
      \*********************************************/

    /*! exports provided: BaseService */

    /***/
    function srcAppCoreServicesBaseIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./base.service */
      "./src/app/core/services/base/base.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseService", function () {
        return _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/constants/constants.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/core/services/constants/constants.service.ts ***!
      \**************************************************************/

    /*! exports provided: ConstantsService */

    /***/
    function srcAppCoreServicesConstantsConstantsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
        return ConstantsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ConstantsService = function ConstantsService() {
        _classCallCheck(this, ConstantsService);
      };

      ConstantsService.CURRENT_STORAGE = localStorage;
      ConstantsService.CURRENT_LANGUAGE = "en";

      ConstantsService.ɵfac = function ConstantsService_Factory(t) {
        return new (t || ConstantsService)();
      };

      ConstantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConstantsService,
        factory: ConstantsService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConstantsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/constants/index.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/services/constants/index.ts ***!
      \**************************************************/

    /*! exports provided: ConstantsService */

    /***/
    function srcAppCoreServicesConstantsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _constants_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./constants.service */
      "./src/app/core/services/constants/constants.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
        return _constants_service__WEBPACK_IMPORTED_MODULE_0__["ConstantsService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/datas/datas.service.ts":
    /*!******************************************************!*\
      !*** ./src/app/core/services/datas/datas.service.ts ***!
      \******************************************************/

    /*! exports provided: DatasService */

    /***/
    function srcAppCoreServicesDatasDatasServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatasService", function () {
        return DatasService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var DatasService = /*#__PURE__*/function () {
        function DatasService() {
          _classCallCheck(this, DatasService);

          this.cardContents = [{
            icon: "domain",
            sub_title: "dashboard.engaged_organizations",
            title: "10",
            color: "accent",
            has_access_module: "*"
          }, {
            icon: "apartment",
            sub_title: "dashboard.rent_received",
            title: "1.75k",
            color: "primary",
            has_access_module: "*"
          }, {
            icon: "perm_identity",
            sub_title: "dashboard.rent_due",
            title: "1.25k",
            color: "warn",
            has_access_module: "*"
          }, {
            icon: "perm_identity",
            sub_title: "dashboard.contracts_expiring_soon",
            title: "4",
            color: "warn",
            has_access_module: "*"
          }, {
            icon: "perm_identity",
            sub_title: "dashboard.pending_contracts",
            title: "4",
            color: "warn",
            has_access_module: "*"
          }];
          this.buildingData = [{
            name: "Houghton Lodge",
            registration_no: "132465ABC",
            address: "Teenkune, Kathmandu",
            latitude: "28.39 N",
            longitude: "84.124 E",
            description: "A lodge can also be a cabin in the woods; like an inn, it’s usually a temporary accommodation. But if you join your local lodge, you’ll be expected to be a regular visitor, at least at the monthly the meetings. Lodge is also a verb, meaning to stay temporarily, or to give someone a place to stay. If you lodge a toothpick between your teeth, though, you’ll probably hope it won’t stay there too long."
          }];
          this.countries = [{
            value: "Nepal",
            title: "Nepal"
          }];
          this.provinces = [{
            value: "Province No. 1",
            name: "Province No. 1"
          }, {
            value: "Province No. 2",
            name: "Province No. 2"
          }, {
            value: "Bagmati Pradesh",
            name: "Bagmati Pradesh"
          }, {
            value: "Gandaki Pradesh",
            name: "Gandaki Pradesh"
          }, {
            value: "Province No. 5",
            name: "Province No. 5"
          }, {
            value: "Karnali Pradesh",
            name: "Karnali Pradesh"
          }, {
            value: "Sudurpashchim Pradesh",
            name: "Sudurpashchim Pradesh"
          }];
        }

        _createClass(DatasService, [{
          key: "getCardContents",
          value: function getCardContents() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cardContents);
          }
        }]);

        return DatasService;
      }();

      DatasService.ɵfac = function DatasService_Factory(t) {
        return new (t || DatasService)();
      };

      DatasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DatasService,
        factory: DatasService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatasService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/datas/index.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/services/datas/index.ts ***!
      \**********************************************/

    /*! exports provided: DatasService */

    /***/
    function srcAppCoreServicesDatasIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _datas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./datas.service */
      "./src/app/core/services/datas/datas.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatasService", function () {
        return _datas_service__WEBPACK_IMPORTED_MODULE_0__["DatasService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/exception-messages/exception-messages.service.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/core/services/exception-messages/exception-messages.service.ts ***!
      \********************************************************************************/

    /*! exports provided: ExceptionMessagesService */

    /***/
    function srcAppCoreServicesExceptionMessagesExceptionMessagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExceptionMessagesService", function () {
        return ExceptionMessagesService;
      });

      var ExceptionMessagesService = function ExceptionMessagesService() {
        _classCallCheck(this, ExceptionMessagesService);
      };

      ExceptionMessagesService.MISSING_HAS_ACCESS = "hasAccess property missing in route data. Please pass data in route with permission guard.";
      /***/
    },

    /***/
    "./src/app/core/services/exception-messages/index.ts":
    /*!***********************************************************!*\
      !*** ./src/app/core/services/exception-messages/index.ts ***!
      \***********************************************************/

    /*! exports provided: ExceptionMessagesService */

    /***/
    function srcAppCoreServicesExceptionMessagesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _exception_messages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./exception-messages.service */
      "./src/app/core/services/exception-messages/exception-messages.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExceptionMessagesService", function () {
        return _exception_messages_service__WEBPACK_IMPORTED_MODULE_0__["ExceptionMessagesService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/index.ts":
    /*!****************************************!*\
      !*** ./src/app/core/services/index.ts ***!
      \****************************************/

    /*! exports provided: AuthService, BaseService, ConstantsService, DatasService, ExceptionMessagesService, PermissionsService, SnackBarService, StorageService */

    /***/
    function srcAppCoreServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./auth */
      "./src/app/core/services/auth/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return _auth__WEBPACK_IMPORTED_MODULE_0__["AuthService"];
      });
      /* harmony import */


      var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./base */
      "./src/app/core/services/base/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BaseService", function () {
        return _base__WEBPACK_IMPORTED_MODULE_1__["BaseService"];
      });
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./constants */
      "./src/app/core/services/constants/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ConstantsService", function () {
        return _constants__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"];
      });
      /* harmony import */


      var _datas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./datas */
      "./src/app/core/services/datas/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DatasService", function () {
        return _datas__WEBPACK_IMPORTED_MODULE_3__["DatasService"];
      });
      /* harmony import */


      var _exception_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./exception-messages */
      "./src/app/core/services/exception-messages/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ExceptionMessagesService", function () {
        return _exception_messages__WEBPACK_IMPORTED_MODULE_4__["ExceptionMessagesService"];
      });
      /* harmony import */


      var _permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./permissions */
      "./src/app/core/services/permissions/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return _permissions__WEBPACK_IMPORTED_MODULE_5__["PermissionsService"];
      });
      /* harmony import */


      var _snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./snack-bar */
      "./src/app/core/services/snack-bar/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
        return _snack_bar__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"];
      });
      /* harmony import */


      var _storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./storage */
      "./src/app/core/services/storage/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _storage__WEBPACK_IMPORTED_MODULE_7__["StorageService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/loading/loading.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/loading/loading.service.ts ***!
      \**********************************************************/

    /*! exports provided: LoadingService */

    /***/
    function srcAppCoreServicesLoadingLoadingServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingService", function () {
        return LoadingService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/internal/BehaviorSubject */
      "./node_modules/rxjs/internal/BehaviorSubject.js");
      /* harmony import */


      var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);

      var LoadingService = /*#__PURE__*/function () {
        function LoadingService() {
          _classCallCheck(this, LoadingService);

          this.loadingSub = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
          /**
           * Contains in-progress loading requests
           */

          this.loadingMap = new Map();
        }
        /**
         * Sets the loadingSub property value based on the following:
         * - If loading is true, add the provided url to the loadingMap with a true value, set loadingSub value to true
         * - If loading is false, remove the loadingMap entry and only when the map is empty will we set loadingSub to false
         * This pattern ensures if there are multiple requests awaiting completion, we don't set loading to false before
         * other requests have completed. At the moment, this function is only called from the @link{HttpRequestInterceptor}
         * @param loading {boolean}
         * @param url {string}
         */


        _createClass(LoadingService, [{
          key: "setLoading",
          value: function setLoading(loading, url) {
            if (!url) {
              throw new Error("The request URL must be provided to the LoadingService.setLoading function");
            }

            if (loading === true) {
              this.loadingMap.set(url, loading);
              this.loadingSub.next(true);
            } else if (loading === false && this.loadingMap.has(url)) {
              this.loadingMap["delete"](url);
            }

            if (this.loadingMap.size === 0) {
              this.loadingSub.next(false);
            }
          }
        }]);

        return LoadingService;
      }();

      LoadingService.ɵfac = function LoadingService_Factory(t) {
        return new (t || LoadingService)();
      };

      LoadingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LoadingService,
        factory: LoadingService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/permissions/index.ts":
    /*!****************************************************!*\
      !*** ./src/app/core/services/permissions/index.ts ***!
      \****************************************************/

    /*! exports provided: PermissionsService */

    /***/
    function srcAppCoreServicesPermissionsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _permissions_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./permissions.service */
      "./src/app/core/services/permissions/permissions.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return _permissions_service__WEBPACK_IMPORTED_MODULE_0__["PermissionsService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/permissions/permissions.service.ts":
    /*!******************************************************************!*\
      !*** ./src/app/core/services/permissions/permissions.service.ts ***!
      \******************************************************************/

    /*! exports provided: PermissionsService */

    /***/
    function srcAppCoreServicesPermissionsPermissionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PermissionsService", function () {
        return PermissionsService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../base */
      "./src/app/core/services/base/index.ts");

      var PermissionsService = /*#__PURE__*/function (_base__WEBPACK_IMPORT2) {
        _inherits(PermissionsService, _base__WEBPACK_IMPORT2);

        var _super3 = _createSuper(PermissionsService);

        function PermissionsService(injector) {
          _classCallCheck(this, PermissionsService);

          return _super3.call(this, injector);
        }
        /**
         *
         * @param canAccess
         */


        _createClass(PermissionsService, [{
          key: "checkAuthorization",
          value: function checkAuthorization(canAccess) {
            this.permissionsFromStorage = this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["StorageKeys"].permissions);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.doCheckAuthorization(canAccess));
          }
          /**
           * Check if user can access component or not
           * @param canAccess should be string separate by dot or not->
           * string before dot represents module name and string after dot represents method name
           */

        }, {
          key: "doCheckAuthorization",
          value: function doCheckAuthorization(canAccess) {
            if (canAccess) {
              var moduleMethodAccess = canAccess.split(".");
              var moduleName = moduleMethodAccess[0];
              var methodName = moduleMethodAccess[1];

              if (moduleName && !methodName) {
                return this.checkForModuleNameOnly(moduleName);
              } else {// return this.checkForModuleAndMethodName(moduleName, methodName);
              }
            }
          }
          /**
           *
           * @param moduleName
           */

        }, {
          key: "checkForModuleNameOnly",
          value: function checkForModuleNameOnly(moduleName) {
            return !!(moduleName && (this.permissionsFromStorage[moduleName] || moduleName === "*"));
          }
        }]);

        return PermissionsService;
      }(_base__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

      PermissionsService.ɵfac = function PermissionsService_Factory(t) {
        return new (t || PermissionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      PermissionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PermissionsService,
        factory: PermissionsService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PermissionsService, [{
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
    "./src/app/core/services/snack-bar/index.ts":
    /*!**************************************************!*\
      !*** ./src/app/core/services/snack-bar/index.ts ***!
      \**************************************************/

    /*! exports provided: SnackBarService */

    /***/
    function srcAppCoreServicesSnackBarIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _snack_bar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./snack-bar.service */
      "./src/app/core/services/snack-bar/snack-bar.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
        return _snack_bar_service__WEBPACK_IMPORTED_MODULE_0__["SnackBarService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/snack-bar/snack-bar.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/core/services/snack-bar/snack-bar.service.ts ***!
      \**************************************************************/

    /*! exports provided: SnackBarService */

    /***/
    function srcAppCoreServicesSnackBarSnackBarServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
        return SnackBarService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

      var SnackBarService = /*#__PURE__*/function () {
        function SnackBarService(snackBar) {
          _classCallCheck(this, SnackBarService);

          this.snackBar = snackBar;
        }

        _createClass(SnackBarService, [{
          key: "open",
          value: function open(message) {
            this.snackBar.open(message, null, {
              duration: 3000
            });
          }
        }, {
          key: "close",
          value: function close() {}
        }]);

        return SnackBarService;
      }();

      SnackBarService.ɵfac = function SnackBarService_Factory(t) {
        return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
      };

      SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SnackBarService,
        factory: SnackBarService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/services/storage/index.ts":
    /*!************************************************!*\
      !*** ./src/app/core/services/storage/index.ts ***!
      \************************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppCoreServicesStorageIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./storage.service */
      "./src/app/core/services/storage/storage.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return _storage_service__WEBPACK_IMPORTED_MODULE_0__["StorageService"];
      });
      /***/

    },

    /***/
    "./src/app/core/services/storage/storage.service.ts":
    /*!**********************************************************!*\
      !*** ./src/app/core/services/storage/storage.service.ts ***!
      \**********************************************************/

    /*! exports provided: StorageService */

    /***/
    function srcAppCoreServicesStorageStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageService", function () {
        return StorageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../constants */
      "./src/app/core/services/constants/index.ts");

      var StorageService = /*#__PURE__*/function () {
        function StorageService() {
          _classCallCheck(this, StorageService);

          this.currentStorage = _constants__WEBPACK_IMPORTED_MODULE_2__["ConstantsService"].CURRENT_STORAGE;
          this.storageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        /**
         * Watch the stroage for change.
         */


        _createClass(StorageService, [{
          key: "watchStorage",
          value: function watchStorage() {
            return this.storageSubject.asObservable();
          }
          /**
           * Get the value with provided key.
           * @param key
           */

        }, {
          key: "get",
          value: function get(key) {
            if (key && this.currentStorage.getItem(key)) {
              return JSON.parse(this.currentStorage.getItem(key));
            }
          }
          /**
           * Store the provided key and value.
           * @param key
           * @param value
           */

        }, {
          key: "set",
          value: function set(key, value) {
            if (key) {
              this.currentStorage.setItem(key, JSON.stringify(value));
              this.storageSubject.next(key);
            }
          }
          /**
           * Clear all the stored values from storage.
           */

        }, {
          key: "clear",
          value: function clear() {
            this.currentStorage.clear();
          }
        }]);

        return StorageService;
      }();

      StorageService.ɵfac = function StorageService_Factory(t) {
        return new (t || StorageService)();
      };

      StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: StorageService,
        factory: StorageService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/core/store/actions/global.actions.ts":
    /*!******************************************************!*\
      !*** ./src/app/core/store/actions/global.actions.ts ***!
      \******************************************************/

    /*! exports provided: setGlobals, setGlobalBusiness, setGlobalBuilding, setGlobalNews, setGlobalTicket, logout */

    /***/
    function srcAppCoreStoreActionsGlobalActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGlobals", function () {
        return setGlobals;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGlobalBusiness", function () {
        return setGlobalBusiness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGlobalBuilding", function () {
        return setGlobalBuilding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGlobalNews", function () {
        return setGlobalNews;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setGlobalTicket", function () {
        return setGlobalTicket;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logout", function () {
        return logout;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var setGlobals = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Globals] Set Globals", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setGlobalBusiness = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Globals] Set Global Business", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setGlobalBuilding = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Globals] Set Global Building", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setGlobalNews = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Globals] Set Global News", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setGlobalTicket = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Globals] Set global ticket", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] logout request");
      /***/
    },

    /***/
    "./src/app/core/store/reducers/global.reducer.ts":
    /*!*******************************************************!*\
      !*** ./src/app/core/store/reducers/global.reducer.ts ***!
      \*******************************************************/

    /*! exports provided: initialGlobalState, globalReducer */

    /***/
    function srcAppCoreStoreReducersGlobalReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialGlobalState", function () {
        return initialGlobalState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "globalReducer", function () {
        return globalReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/global.actions */
      "./src/app/core/store/actions/global.actions.ts");

      var initialGlobalState = {
        globals: null,
        globalBusiness: null,
        globalBuilding: null,
        globalNews: null,
        globalTicket: null
      };
      var globalReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialGlobalState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobals"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          globals: action.globals
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobalBusiness"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          globalBusiness: action.globalBusiness
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobalBuilding"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          globalBuilding: action.globalBuilding
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobalNews"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          globalNews: action.globalNews
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__["setGlobalTicket"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          globalTicket: action.globalTicket
        });
      }));
      /***/
    },

    /***/
    "./src/app/core/store/reducers/index.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/store/reducers/index.ts ***!
      \**********************************************/

    /*! exports provided: coreReducers, selectCoreModuleState */

    /***/
    function srcAppCoreStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coreReducers", function () {
        return coreReducers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectCoreModuleState", function () {
        return selectCoreModuleState;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _global_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./global.reducer */
      "./src/app/core/store/reducers/global.reducer.ts");

      var coreReducers = {
        global: _global_reducer__WEBPACK_IMPORTED_MODULE_1__["globalReducer"]
      };
      var selectCoreModuleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("coreModule");
      /***/
    },

    /***/
    "./src/app/core/utilities/custom-validator.ts":
    /*!****************************************************!*\
      !*** ./src/app/core/utilities/custom-validator.ts ***!
      \****************************************************/

    /*! exports provided: CustomValidators */

    /***/
    function srcAppCoreUtilitiesCustomValidatorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return CustomValidators;
      });

      var CustomValidators = /*#__PURE__*/function () {
        function CustomValidators() {
          _classCallCheck(this, CustomValidators);
        }

        _createClass(CustomValidators, null, [{
          key: "inputLengthValidator",

          /**
           *
           * @param inputLength
           */
          value: function inputLengthValidator(inputLength) {
            return function (control) {
              if (control.value) {
                var characterLength = control.value.toString().length;

                if (characterLength !== inputLength) {
                  return {
                    invalidLength: {
                      requiredLength: inputLength
                    }
                  };
                }
              }

              return null;
            };
          }
        }, {
          key: "mobileNumber",
          value: function mobileNumber() {
            return function (control) {
              if (control.value !== null) {
                var MOBILE_NUMBER_REGEXP = /^$|^((\\+91-?)|0)?[0-9]{10}$/g;
                return MOBILE_NUMBER_REGEXP.test(control.value) ? null : {
                  mobile_number: {
                    valid: false
                  }
                };
              }
            };
          }
        }, {
          key: "checkPassword",
          value: function checkPassword(passwordField, confirmPasswordField) {
            return function (formGroup) {
              var pass = formGroup.get(passwordField).value;
              var confirmPass = formGroup.get(confirmPasswordField).value;

              if (pass && confirmPass) {
                if (pass !== confirmPass) {
                  return {
                    compare_password: {
                      valid: false
                    }
                  };
                }
              }

              return null;
            };
          }
        }]);

        return CustomValidators;
      }();
      /***/

    },

    /***/
    "./src/app/core/utilities/date-utils.ts":
    /*!**********************************************!*\
      !*** ./src/app/core/utilities/date-utils.ts ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppCoreUtilitiesDateUtilsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return DateUtils;
      });
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

      var DateUtils = /*#__PURE__*/function () {
        function DateUtils() {
          _classCallCheck(this, DateUtils);
        }

        _createClass(DateUtils, null, [{
          key: "convertDateTimeFormat",

          /**
           *
           * @param dateTime
           * @param {string} format
           * @returns {string}
           */
          value: function convertDateTimeFormat(dateTime, format) {
            return moment__WEBPACK_IMPORTED_MODULE_0__(dateTime).format(format);
          }
          /**
           *
           * @param {string} dateTime
           * @param format
           * @returns {string}
           */

        }, {
          key: "convertUTCToLocal",
          value: function convertUTCToLocal(dateTime) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Y-MM-DD HH:MM";
            return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](dateTime).local().format(format);
          }
          /**
           *
           * @param {string} dateTime
           * @param format
           * @returns {string}
           */

        }, {
          key: "convertLocalToUTC",
          value: function convertLocalToUTC(dateTime) {
            var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Y-MM-DD HH:MM";
            return moment__WEBPACK_IMPORTED_MODULE_0__["utc"](dateTime).format(format);
          }
        }]);

        return DateUtils;
      }();
      /***/

    },

    /***/
    "./src/app/core/utilities/index.ts":
    /*!*****************************************!*\
      !*** ./src/app/core/utilities/index.ts ***!
      \*****************************************/

    /*! exports provided: CustomValidators */

    /***/
    function srcAppCoreUtilitiesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _custom_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./custom-validator */
      "./src/app/core/utilities/custom-validator.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return _custom_validator__WEBPACK_IMPORTED_MODULE_0__["CustomValidators"];
      });
      /* harmony import */


      var _date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./date-utils */
      "./src/app/core/utilities/date-utils.ts");
      /* empty/unused harmony star reexport */

      /* harmony import */


      var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./utils */
      "./src/app/core/utilities/utils.ts");
      /* empty/unused harmony star reexport */

      /***/

    },

    /***/
    "./src/app/core/utilities/utils.ts":
    /*!*****************************************!*\
      !*** ./src/app/core/utilities/utils.ts ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppCoreUtilitiesUtilsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return Utils;
      });

      var Utils = /*#__PURE__*/function () {
        function Utils() {
          _classCallCheck(this, Utils);
        }

        _createClass(Utils, null, [{
          key: "getFirstCharacter",

          /**
           *
           * @param value
           */
          value: function getFirstCharacter(value) {
            if (value) {
              var firstChar = value.charAt(0);
              return firstChar.toUpperCase().toString();
            }
          }
          /**
           *
           * @param param
           */

        }, {
          key: "checkParameters",
          value: function checkParameters(param) {
            if (param) {
              Object.entries(param).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                // if (key === "page") {
                //   param[key] = value + 1;
                // }
                if (value === "" || value === null || value === undefined) {
                  delete param[key];
                }
              });
              var stringParams = Utils.convertPropertiesToString(param);
              return stringParams;
            }
          }
          /**
           *
           * @param obj
           */

        }, {
          key: "convertPropertiesToString",
          value: function convertPropertiesToString(obj) {
            Object.entries(obj).forEach(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];

              obj[key] = value.toString();
            });
            return obj;
          }
          /**
           *
           * @param param
           */

        }, {
          key: "getFilteredParams",
          value: function getFilteredParams(param) {
            Object.entries(param).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  key = _ref6[0],
                  value = _ref6[1];

              if (value === "" || value === null) {
                delete param[key];
              }
            });
            return param;
          }
        }, {
          key: "getSubDomain",
          value: function getSubDomain() {
            var full = window.location.host;
            var parts = full.split(".");
            var sub = parts[0];
            var domain = parts[1];
            var type = parts[2];
            return sub;
          }
        }]);

        return Utils;
      }();
      /***/

    },

    /***/
    "./src/app/shared/actions/card-action.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/actions/card-action.component.ts ***!
      \*********************************************************/

    /*! exports provided: CardActionComponent */

    /***/
    function srcAppSharedActionsCardActionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CardActionComponent", function () {
        return CardActionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      function CardActionComponent_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardActionComponent_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.onEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "edit"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        }
      }

      function CardActionComponent_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardActionComponent_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.onView();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "view_detail"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        }
      }

      function CardActionComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardActionComponent_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "delete"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");
        }
      }

      var CardActionComponent = /*#__PURE__*/function () {
        function CardActionComponent() {
          _classCallCheck(this, CardActionComponent);

          this.editClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.viewClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.deleteClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(CardActionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onEdit",
          value: function onEdit() {
            this.editClicked.emit();
          }
        }, {
          key: "onView",
          value: function onView() {
            this.viewClicked.emit();
          }
        }, {
          key: "onDelete",
          value: function onDelete() {
            this.deleteClicked.emit();
          }
        }]);

        return CardActionComponent;
      }();

      CardActionComponent.ɵfac = function CardActionComponent_Factory(t) {
        return new (t || CardActionComponent)();
      };

      CardActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardActionComponent,
        selectors: [["app-card-action"]],
        inputs: {
          cardActionOption: "cardActionOption"
        },
        outputs: {
          editClicked: "editClicked",
          viewClicked: "viewClicked",
          deleteClicked: "deleteClicked"
        },
        decls: 4,
        vars: 3,
        consts: [["mat-icon-button", "", "color", "primary", "class", "icon-edit-records", 3, "matTooltip", "matTooltipPosition", "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", "class", "icon-view-records", 3, "matTooltip", "matTooltipPosition", "click", 4, "ngIf"], ["mat-icon-button", "", "color", "warn", "class", "icon-delete-records", 3, "matTooltip", "matTooltipPosition", "click", 4, "ngIf"], ["mat-icon-button", "", "color", "primary", 1, "icon-edit-records", 3, "matTooltip", "matTooltipPosition", "click"], ["mat-icon-button", "", "color", "primary", 1, "icon-view-records", 3, "matTooltip", "matTooltipPosition", "click"], ["mat-icon-button", "", "color", "warn", 1, "icon-delete-records", 3, "matTooltip", "matTooltipPosition", "click"]],
        template: function CardActionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardActionComponent_a_1_Template, 4, 4, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardActionComponent_a_2_Template, 4, 4, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardActionComponent_a_3_Template, 4, 4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardActionOption == null ? null : ctx.cardActionOption.edit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardActionOption == null ? null : ctx.cardActionOption.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cardActionOption == null ? null : ctx.cardActionOption["delete"]);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardActionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-card-action",
            templateUrl: "./card-action.component.html"
          }]
        }], function () {
          return [];
        }, {
          editClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          viewClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          deleteClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          cardActionOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/admin-login-section/admin-login-section.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/admin-login-section/admin-login-section.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: AdminLoginSectionComponent */

    /***/
    function srcAppSharedAdminLoginSectionAdminLoginSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLoginSectionComponent", function () {
        return AdminLoginSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var AdminLoginSectionComponent = /*#__PURE__*/function () {
        function AdminLoginSectionComponent() {
          _classCallCheck(this, AdminLoginSectionComponent);
        }

        _createClass(AdminLoginSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminLoginSectionComponent;
      }();

      AdminLoginSectionComponent.ɵfac = function AdminLoginSectionComponent_Factory(t) {
        return new (t || AdminLoginSectionComponent)();
      };

      AdminLoginSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminLoginSectionComponent,
        selectors: [["app-admin-login-section"]],
        ngContentSelectors: _c0,
        decls: 13,
        vars: 0,
        consts: [[1, "app-container", "auth", "d-flex", "align-center"], [1, "auth-content", "d-flex"], [1, "app-info"], [1, "app-icon"], [1, "text-center"], ["src", "./assets/images/bms-wizard-footer-img.png", "alt", "estateCloud"], [1, "form-wrapper"]],
        template: function AdminLoginSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OWNANT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PRODUCT ADMIN LOGIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hZG1pbi1sb2dpbi1zZWN0aW9uL2FkbWluLWxvZ2luLXNlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-admin-login-section",
            templateUrl: "./admin-login-section.component.html",
            styleUrls: ["./admin-login-section.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/admin-navigation-bar/admin-navigation-bar/admin-navigation-bar.component.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/shared/admin-navigation-bar/admin-navigation-bar/admin-navigation-bar.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: AdminNavigationBarComponent */

    /***/
    function srcAppSharedAdminNavigationBarAdminNavigationBarAdminNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminNavigationBarComponent", function () {
        return AdminNavigationBarComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

      var _c0 = ["*"];

      var AdminNavigationBarComponent = /*#__PURE__*/function () {
        function AdminNavigationBarComponent(router) {
          _classCallCheck(this, AdminNavigationBarComponent);

          this.router = router;
        }

        _createClass(AdminNavigationBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogout",
          value: function onLogout() {
            localStorage.clear();
            this.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].ADMIN_LOGIN);
          }
        }, {
          key: "goTo",
          value: function goTo(route) {
            this.router.navigateByUrl(route);
          }
        }, {
          key: "toggleActive",
          value: function toggleActive() {
            this.active = !this.active;
          }
        }]);

        return AdminNavigationBarComponent;
      }();

      AdminNavigationBarComponent.ɵfac = function AdminNavigationBarComponent_Factory(t) {
        return new (t || AdminNavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AdminNavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminNavigationBarComponent,
        selectors: [["app-admin-navigation-bar"]],
        ngContentSelectors: _c0,
        decls: 30,
        vars: 2,
        consts: [[1, "app-container"], [1, "d-flex", "align-center"], [1, "building-logo", "d-flex", "align-center"], ["src", "./assets/images/favicon.png", "alt", "Building Logo"], [1, "text-primary", "bold"], [1, "nav-toggle", 3, "click"], [1, "las", "la-bars"], [1, "nav", "nav-primary"], [1, "nav", "nav-secondary"], ["mat-list-item", "", 3, "click"], [1, "las", "la-sign-out-alt"], [1, "app-content"], ["mode", "side", "opened", ""], ["drawer", ""], [1, "nav", "nav-sidebar"], [1, "ownant-admin"], ["mat-list-item", "", 1, "has-submenu", 3, "click"], [1, "las", "la-user-tie"], [1, "submenu"], ["mat-list-item", "", 1, "active", 3, "click"]],
        template: function AdminNavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ownant Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminNavigationBarComponent_Template_span_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-nav-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-nav-list", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminNavigationBarComponent_Template_a_click_11_listener() {
              return ctx.onLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-drawer-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-drawer", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-nav-list", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminNavigationBarComponent_Template_a_click_19_listener() {
              return ctx.toggleActive();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-nav-list", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminNavigationBarComponent_Template_a_click_24_listener() {
              return ctx.goTo("/admin-dashboard/owner/active");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminNavigationBarComponent_Template_a_click_26_listener() {
              return ctx.goTo("/admin-dashboard/owner/invited");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Invited");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-drawer-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.active);
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hZG1pbi1uYXZpZ2F0aW9uLWJhci9hZG1pbi1uYXZpZ2F0aW9uLWJhci9hZG1pbi1uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminNavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-admin-navigation-bar",
            templateUrl: "./admin-navigation-bar.component.html",
            styleUrls: ["./admin-navigation-bar.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/auth-section/auth-section/auth-section.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/auth-section/auth-section/auth-section.component.ts ***!
      \****************************************************************************/

    /*! exports provided: AuthSectionComponent */

    /***/
    function srcAppSharedAuthSectionAuthSectionAuthSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthSectionComponent", function () {
        return AuthSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var AuthSectionComponent = /*#__PURE__*/function () {
        function AuthSectionComponent() {
          _classCallCheck(this, AuthSectionComponent);
        }

        _createClass(AuthSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthSectionComponent;
      }();

      AuthSectionComponent.ɵfac = function AuthSectionComponent_Factory(t) {
        return new (t || AuthSectionComponent)();
      };

      AuthSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthSectionComponent,
        selectors: [["app-auth-section"]],
        ngContentSelectors: _c0,
        decls: 15,
        vars: 0,
        consts: [[1, "app-container", "auth", "d-flex", "align-center"], [1, "auth-content", "d-flex"], [1, "app-info"], [1, "app-icon"], [1, "text-center"], ["src", "./assets/images/bms-wizard-footer-img.png", "alt", "estateCloud"], [1, "form-wrapper"]],
        template: function AuthSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OWNANT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You are few clicks away from adding your first property");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add your property in minutes and enjoy managing it efficiently");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-auth-section",
            templateUrl: "./auth-section.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/users/add-user-modal/add-user-modal.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/shared/components/users/add-user-modal/add-user-modal.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AddUserModalComponent */

    /***/
    function srcAppSharedComponentsUsersAddUserModalAddUserModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddUserModalComponent", function () {
        return AddUserModalComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _core_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @core/utilities */
      "./src/app/core/utilities/index.ts");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @shared/services */
      "./src/app/shared/services/index.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../../file-upload/file-upload.component */
      "./src/app/shared/file-upload/file-upload.component.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../../pipes/image-path/image-path.pipe */
      "./src/app/shared/pipes/image-path/image-path.pipe.ts");

      var _c0 = ["fileUploadCmp"];

      function AddUserModalComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-error-message", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "common.name"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "placeholders.name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.userForm.get("name"));
        }
      }

      function AddUserModalComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-error-message", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, "common.email"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, "placeholders.email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.userForm.get("email"));
        }
      }

      var _c1 = function _c1() {
        return ["jpeg", "jpg", "png"];
      };
      /**
       * @title Dialog Overview
       */


      var AddUserModalComponent = /*#__PURE__*/function (_core_components__WEB) {
        _inherits(AddUserModalComponent, _core_components__WEB);

        var _super4 = _createSuper(AddUserModalComponent);

        /**
         *
         * @param {MatDialogRef<AddUserModalComponent>} dialogRef
         * @param data
         * @param {UsersService} userService
         */
        function AddUserModalComponent(dialogRef, data, userService) {
          var _this12;

          _classCallCheck(this, AddUserModalComponent);

          _this12 = _super4.call(this);
          _this12.dialogRef = dialogRef;
          _this12.data = data;
          _this12.userService = userService;
          _this12.saveOrUpdateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this12.loading = true;
          return _this12;
        }

        _createClass(AddUserModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.data.userId) {
              this.createUpdateForm(this.data.userId);
              this.getAndSetUser(this.data.userId);
              this.title = this.getTranslatedString("mod_user.update_user");
              this.buttonText = this.getTranslatedString("common.update");
            } else {
              this.createUserForm();
              this.title = this.getTranslatedString("mod_user.add_user");
              this.buttonText = this.getTranslatedString("common.save");
            }

            this.listenErrors();
            this.getRoles();
          }
          /**
           * Handle no button clicked.
           */

        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
          /**
           * Handle user form submission.
           */

        }, {
          key: "handleSubmit",
          value: function handleSubmit() {
            if (this.userForm.valid && !this.fileUploadCmp.errors.invalidFileFormat && !this.fileUploadCmp.errors.invalidFileSize) {
              this.saveOrUpdateClicked.emit(this.userForm.value);
            }
          }
          /**
           *
           * @private
           */

        }, {
          key: "createUserForm",
          value: function createUserForm() {
            this.userForm = this.formBuilder.group({
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].mobileNumber()]],
              namespace: this.data.namespace,
              namespaceId: this.data.namespaceId,
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: "",
                disabled: true
              }),
              roleCode: [],
              status: true
            });
          }
          /**
           * Listen to errors observables and set them to the form.
           * @private
           */

        }, {
          key: "listenErrors",
          value: function listenErrors() {
            var _this13 = this;

            this.data.errors$.subscribe(function (err) {
              if (err && _this13.userForm) {
                _this13.errorMessageService.handleServerSideError(_this13.userForm, err);
              }
            });
          }
          /**
           *
           * @param {number} userId
           * @private
           */

        }, {
          key: "createUpdateForm",
          value: function createUpdateForm(userId) {
            this.userForm = this.formBuilder.group({
              id: userId,
              status: true,
              namespace: this.data.namespace,
              namespaceId: this.data.namespaceId,
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]],
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].mobileNumber()]],
              role: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                value: "",
                disabled: true
              }),
              roleId: [],
              imageId: [],
              file: []
            });
          }
          /**
           *
           * @param {number} userId
           * @private
           */

        }, {
          key: "getAndSetUser",
          value: function getAndSetUser(userId) {
            var _this14 = this;

            this.userService.getUserById(userId).subscribe(function (user) {
              _this14.userForm.patchValue(user.data);

              _this14.imageUrl = user.image ? user.image.url : "";
            });
          }
          /**
           *
           * @private
           */

        }, {
          key: "getRoles",
          value: function getRoles() {
            var _this15 = this;

            var currentBuilding = this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_4__["StorageKeys"].ACTIVE_BUILDING);
            var params = null;

            if (currentBuilding) {
              params = {
                buildingId: currentBuilding.id
              };
            }

            this.userService.getRoles(params).subscribe(function (res) {
              _this15.loading = false;
              var role$ = res.data.find(function (role) {
                return role.title === _this15.data.role;
              });

              _this15.userForm.get("roleCode").setValue(role$.code);

              _this15.userForm.get("role").setValue(_this15.data.role);
            }, function (error) {
              return _this15.loading = false;
            });
          }
          /**
           *
           * @param {File} file
           */

        }, {
          key: "onFileUpload",
          value: function onFileUpload(file) {
            this.userForm.get("file").setValue(file);
          }
        }]);

        return AddUserModalComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

      AddUserModalComponent.ɵfac = function AddUserModalComponent_Factory(t) {
        return new (t || AddUserModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_6__["UsersService"]));
      };

      AddUserModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddUserModalComponent,
        selectors: [["app-add-user-modal"]],
        viewQuery: function AddUserModalComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileUploadCmp = _t.first);
          }
        },
        outputs: {
          saveOrUpdateClicked: "saveOrUpdateClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 35,
        vars: 25,
        consts: [["mat-dialog-title", "", 1, "fs-18"], ["mat-dialog-content", ""], ["fxLayout", "row wrap", "fxLayout.lt-sm", "column", "fxLayoutAlign", "start", "fxLayoutGap", "16px", 3, "formGroup"], ["fxFlex", "1 1 calc(45% - 16px)", "class", "form-field-wrapper", 4, "ngIf"], ["fxFlex", "1 1 calc(50% - 16px)", "class", "form-field-wrapper", 4, "ngIf"], ["fxFlex", "1 1 calc(45% - 16px)", 1, "form-field-wrapper"], [1, "field-label"], ["matInput", "", "type", "text", "appOnlyNumber", "", "formControlName", "mobileNumber", 3, "placeholder"], [3, "control"], ["fxFlex", "1 1 calc(50% - 16px)", 1, "form-field-wrapper", "is-user-role-field"], ["type", "text", "matInput", "", "formControlName", "role"], [1, "user-profile-image-upload", 3, "hidden"], [3, "expectedExtensions", "expectedFileSize", "url", "fileUpload"], ["fileUploadCmp", ""], ["mat-dialog-actions", ""], ["mat-button", "", "color", "primary", 1, "btn-primary", 3, "click"], ["mat-button", "", "color", "accent", "type", "button", 1, "btn-outline-accent", 3, "click"], ["type", "text", "matInput", "", "formControlName", "name", 3, "placeholder"], ["fxFlex", "1 1 calc(50% - 16px)", 1, "form-field-wrapper"], ["type", "text", "matInput", "", "formControlName", "email", 3, "placeholder"]],
        template: function AddUserModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AddUserModalComponent_div_4_Template, 11, 7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddUserModalComponent_div_5_Template, 11, 7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "phone_iphone");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-error-message", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "engineering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "app-file-upload", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("fileUpload", function AddUserModalComponent_Template_app_file_upload_fileUpload_26_listener($event) {
              return ctx.onFileUpload($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "imagePath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserModalComponent_Template_button_click_30_listener() {
              return ctx.handleSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddUserModalComponent_Template_button_click_32_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.userId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.userId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 14, "common.mobile_number"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "placeholders.mobile"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.userForm.get("mobileNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 18, "common.role"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.data.userId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expectedExtensions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c1))("expectedFileSize", 2048)("url", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 20, ctx.imageUrl));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.buttonText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 22, "common.cancel"), " ");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_12__["OnlyNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_13__["ErrorMessageComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_14__["FileUploadComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"], _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_17__["ImagePathPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-add-user-modal",
            templateUrl: "add-user-modal.component.html"
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_6__["UsersService"]
          }];
        }, {
          saveOrUpdateClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          fileUploadCmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["fileUploadCmp"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/users/users-detail-modal/user-details-modal.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/shared/components/users/users-detail-modal/user-details-modal.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: UserDetailsModalComponent */

    /***/
    function srcAppSharedComponentsUsersUsersDetailModalUserDetailsModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailsModalComponent", function () {
        return UserDetailsModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @shared/services */
      "./src/app/shared/services/index.ts");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../pipes/image-path/image-path.pipe */
      "./src/app/shared/pipes/image-path/image-path.pipe.ts");

      function UserDetailsModalComponent_mat_card_subtitle_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "engineering");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.userRoles);
        }
      }

      function UserDetailsModalComponent_mat_card_subtitle_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.user == null ? null : ctx_r1.user.email);
        }
      }

      function UserDetailsModalComponent_mat_card_subtitle_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "smartphone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user == null ? null : ctx_r2.user.mobileNumber);
        }
      }
      /**
       * @title Dialog Overview
       */


      var UserDetailsModalComponent = /*#__PURE__*/function (_core_components__WEB2) {
        _inherits(UserDetailsModalComponent, _core_components__WEB2);

        var _super5 = _createSuper(UserDetailsModalComponent);

        /**
         *
         * @param dialogRef
         * @param data
         * @param {UsersService} userService
         */
        function UserDetailsModalComponent(dialogRef, data, userService) {
          var _this16;

          _classCallCheck(this, UserDetailsModalComponent);

          _this16 = _super5.call(this);
          _this16.dialogRef = dialogRef;
          _this16.data = data;
          _this16.userService = userService;
          _this16.saveOrUpdateClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this16.loading = true;
          return _this16;
        }

        _createClass(UserDetailsModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.userService.getUserById(this.data.userId).subscribe(function (res) {
              _this17.user = res.data;
              var roles = _this17.user.roles;
              _this17.loading = false; // const roleNames = [];
              // roles.forEach((role, key) => {
              //   if (role) {
              //     roleNames.push(role.title);
              //   }
              // });
              // this.userRoles = roleNames.join(",");
            });
          }
          /**
           * Handle no button clicked.
           */

        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return UserDetailsModalComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      UserDetailsModalComponent.ɵfac = function UserDetailsModalComponent_Factory(t) {
        return new (t || UserDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"]));
      };

      UserDetailsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserDetailsModalComponent,
        selectors: [["app-user-details-modal"]],
        outputs: {
          saveOrUpdateClicked: "saveOrUpdateClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 13,
        consts: [["mat-dialog-title", "", 1, "fs-18"], ["mat-dialog-content", "", "fxLayout", "row wrap", "fxLayout.lt-md", "column", "fxLayoutAlign", "start", "fxLayoutGap", "16px"], ["fxFlex", "1 1 300px"], [1, "display-image", "user-profile-image"], ["mat-card-image", "", "alt", "User Profile Image", 1, "has-initial", 3, "src"], ["fxFlex", "1 1 calc(100% - 316px)", 1, "user-profile-content"], [4, "ngIf"]],
        template: function UserDetailsModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "imagePath");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserDetailsModalComponent_mat_card_subtitle_11_Template, 6, 1, "mat-card-subtitle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserDetailsModalComponent_mat_card_subtitle_12_Template, 5, 1, "mat-card-subtitle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDetailsModalComponent_mat_card_subtitle_13_Template, 5, 1, "mat-card-subtitle", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, "mod_user.user_details"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-initial-only", !(ctx.user == null ? null : ctx.user.image));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, ctx.user == null ? null : ctx.user.image == null ? null : ctx.user.image.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-record-initial", ctx.getDefaultAlphabet(ctx.user == null ? null : ctx.user.name));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user == null ? null : ctx.user.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data == null ? null : ctx.data.userRoles);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user == null ? null : ctx.user.mobileNumber);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardSubtitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagePathPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDetailsModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-user-details-modal",
            templateUrl: "user-details-modal.component.html"
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_3__["UsersService"]
          }];
        }, {
          saveOrUpdateClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/users/users-list/users-list.component.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/shared/components/users/users-list/users-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: UsersListComponent */

    /***/
    function srcAppSharedComponentsUsersUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
        return UsersListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../search-input/search-input.component */
      "./src/app/shared/search-input/search-input.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../pipes/image-path/image-path.pipe */
      "./src/app/shared/pipes/image-path/image-path.pipe.ts");

      var _c0 = ["searchInputCmp"];

      function UsersListComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "subtitles_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "no_records_found"));
        }
      }

      function UsersListComponent_div_19_p_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3 == null ? null : user_r3.roles[0].title);
        }
      }

      function UsersListComponent_div_19_p_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "phone_iphone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3 == null ? null : user_r3.mobileNumber);
        }
      }

      function UsersListComponent_div_19_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3 == null ? null : user_r3.email);
        }
      }

      function UsersListComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "imagePath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UsersListComponent_div_19_p_7_Template, 3, 1, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsersListComponent_div_19_p_8_Template, 5, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersListComponent_div_19_p_9_Template, 5, 1, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_div_19_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var user_r3 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.showUserDetails(user_r3 == null ? null : user_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "visibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r3 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-initial-only", !(user_r3 == null ? null : user_r3.image));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, user_r3 == null ? null : user_r3.image == null ? null : user_r3.image.url), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-record-initial", ctx_r2.getDefaultAlphabet(user_r3 == null ? null : user_r3.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r3 == null ? null : user_r3.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3 == null ? null : user_r3.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3 == null ? null : user_r3.mobileNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r3 == null ? null : user_r3.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "view_detail"));
        }
      }

      var _c1 = function _c1() {
        return [5, 10, 25, 100];
      };
      /**
       * @title Dialog Overview
       */


      var UsersListComponent = /*#__PURE__*/function (_core_components__WEB3) {
        _inherits(UsersListComponent, _core_components__WEB3);

        var _super6 = _createSuper(UsersListComponent);

        /**
         *
         */
        function UsersListComponent(store) {
          var _this18;

          _classCallCheck(this, UsersListComponent);

          _this18 = _super6.call(this);
          _this18.store = store;
          _this18.addUserClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this18.paramsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this18.viewUserDetailsClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this18.editUserDetailsClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this18;
        }

        _createClass(UsersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this19 = this;

            this.users$.subscribe(function (users) {
              _this19.usersCount = users.length;
            });
            this.pagination$.subscribe(function (params) {
              if (params) {
                _this19.pagination = params;
              }
            });
            this.searchText$ = this.store.select(function (store) {
              return store.sharedModule.users.filterParams.search;
            });
          }
          /**
           * Emit an event to show the user add modal.
           */

        }, {
          key: "handleModalShow",
          value: function handleModalShow() {
            this.addUserClicked.emit();
          }
          /**
           *
           * @param e
           * @returns {any}
           */

        }, {
          key: "trackPaginator",
          value: function trackPaginator(e) {
            if (this.paginator) {
              this.storage.set(_core_enums__WEBPACK_IMPORTED_MODULE_3__["StorageKeys"].PER_PAGE, e.pageSize);
              var params = {
                page: e.pageIndex + 1,
                size: e.pageSize,
                search: ""
              };
              this.paramsChanged.emit(params);
            }

            return e;
          }
          /**
           *
           * @param {string} search
           */

        }, {
          key: "handleSearch",
          value: function handleSearch(search) {
            this.paramsChanged.emit({
              page: this.paginator.pageIndex,
              size: this.paginator.pageSize,
              search: search
            });
          }
          /**
           *
           * @param userId
           */

        }, {
          key: "showUserDetails",
          value: function showUserDetails(userId) {
            this.viewUserDetailsClicked.emit(userId);
          }
          /**
           *
           * @param {number} userId
           */

        }, {
          key: "onUserEdit",
          value: function onUserEdit(userId) {
            this.editUserDetailsClicked.emit(userId);
          }
        }, {
          key: "resetSearchInput",
          value: function resetSearchInput() {
            this.searchInputCmp.searchInput.nativeElement.value = "";
          }
        }]);

        return UsersListComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      UsersListComponent.ɵfac = function UsersListComponent_Factory(t) {
        return new (t || UsersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      UsersListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsersListComponent,
        selectors: [["app-users-list"]],
        viewQuery: function UsersListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInputCmp = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        inputs: {
          users$: "users$",
          pagination$: "pagination$"
        },
        outputs: {
          addUserClicked: "addUserClicked",
          paramsChanged: "paramsChanged",
          viewUserDetailsClicked: "viewUserDetailsClicked",
          editUserDetailsClicked: "editUserDetailsClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 22,
        vars: 18,
        consts: [[1, "has-top-margin", "has-border-top", "linked-users"], [1, "fs-18", "text-primary"], ["mat-button", "", "color", "primary", 1, "btn-primary", "btn-add", 3, "click"], [1, "filters-row"], ["fxFlex", "0 0 calc(25% - 16px)", "fxFlex.md", "0 0 calc(50% - 16px)", 1, "search-lists"], [3, "search", "searched"], ["searchInputCmp", ""], ["fxLayout", "row wrap", "fxLayout.lt-md", "column", "fxLayoutGap", "16px", "fxLayoutAlign", "start"], ["class", "no-records-found", 4, "ngIf"], ["fxFlex", "0 0 calc(20% - 16px)", "fxFlex.md", "0 0 calc(50% - 16px)", "class", "data-lists-item", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageSizeOptions", "pageIndex", "page"], [1, "no-records-found"], ["fxFlex", "0 0 calc(20% - 16px)", "fxFlex.md", "0 0 calc(50% - 16px)", 1, "data-lists-item"], [1, "users-list"], [1, "display-image"], ["mat-card-image", "", "alt", "user", 3, "src"], ["class", "user-role", 4, "ngIf"], [4, "ngIf"], ["mat-icon-button", "", "color", "primary", 1, "icon-view-records", 3, "matTooltip", "click"], [1, "user-role"]],
        template: function UsersListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersListComponent_Template_button_click_5_listener() {
              return ctx.handleModalShow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-search-input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searched", function UsersListComponent_Template_app_search_input_searched_12_listener($event) {
              return ctx.handleSearch($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, UsersListComponent_div_18_Template, 6, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UsersListComponent_div_19_Template, 15, 13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-paginator", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function UsersListComponent_Template_mat_paginator_page_21_listener($event) {
              return ctx.pageEvent = ctx.trackPaginator($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 9, "users"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "add_user"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, ctx.searchText$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersCount === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, ctx.users$));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.pagination == null ? null : ctx.pagination.totalItems)("pageSize", ctx.pagination == null ? null : ctx.pagination.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1))("pageIndex", (ctx.pagination == null ? null : ctx.pagination.currentPage) - 1);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_8__["SearchInputComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_13__["ImagePathPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-users-list",
            templateUrl: "users-list.component.html"
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }];
        }, {
          searchInputCmp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["searchInputCmp"]
          }],
          users$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
          }],
          pagination$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          addUserClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          paramsChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          viewUserDetailsClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          editUserDetailsClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
      \*******************************************************************/

    /*! exports provided: ConfirmDialogComponent */

    /***/
    function srcAppSharedConfirmDialogConfirmDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function () {
        return ConfirmDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var ConfirmDialogComponent = /*#__PURE__*/function () {
        function ConfirmDialogComponent(data, mdDialogRef) {
          _classCallCheck(this, ConfirmDialogComponent);

          this.data = data;
          this.mdDialogRef = mdDialogRef;
          this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }

        _createClass(ConfirmDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cancel",
          value: function cancel() {
            this.close(false);
          }
        }, {
          key: "close",
          value: function close(value) {
            this.mdDialogRef.close(value);
          }
        }, {
          key: "confirm",
          value: function confirm() {
            this.close(true);
          }
        }, {
          key: "onEsc",
          value: function onEsc() {
            this.close(false);
          }
        }]);

        return ConfirmDialogComponent;
      }();

      ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) {
        return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmDialogComponent,
        selectors: [["app-confirm-dialog"]],
        hostBindings: function ConfirmDialogComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.esc", function ConfirmDialogComponent_keydown_esc_HostBindingHandler() {
              return ctx.onEsc();
            });
          }
        },
        decls: 11,
        vars: 4,
        consts: [[1, "header"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "dialog-message"], ["mat-dialog-actions", "", 1, "fl-align-right"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"]],
        template: function ConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_7_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_9_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancelText, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.confirmText, " ");
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-confirm-dialog",
            templateUrl: "./confirm-dialog.component.html"
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, {
          onEsc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown.esc"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/confirm-dialog/confirm-dialog.service.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/confirm-dialog/confirm-dialog.service.ts ***!
      \*****************************************************************/

    /*! exports provided: ConfirmDialogService */

    /***/
    function srcAppSharedConfirmDialogConfirmDialogServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmDialogService", function () {
        return ConfirmDialogService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./confirm-dialog.component */
      "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

      var ConfirmDialogService = /*#__PURE__*/function () {
        function ConfirmDialogService(dialog) {
          _classCallCheck(this, ConfirmDialogService);

          this.dialog = dialog;
        }

        _createClass(ConfirmDialogService, [{
          key: "open",
          value: function open(options) {
            this.dialogRef = this.dialog.open(_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
              data: {
                title: options.title,
                message: options.message,
                cancelText: options.cancelText,
                confirmText: options.confirmText
              }
            });
          }
        }, {
          key: "confirmed",
          value: function confirmed() {
            return this.dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) {
              return res;
            }));
          }
        }]);

        return ConfirmDialogService;
      }();

      ConfirmDialogService.ɵfac = function ConfirmDialogService_Factory(t) {
        return new (t || ConfirmDialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
      };

      ConfirmDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ConfirmDialogService,
        factory: ConfirmDialogService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/has-access/has-access.directive.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/directives/has-access/has-access.directive.ts ***!
      \**********************************************************************/

    /*! exports provided: HasAccessDirective */

    /***/
    function srcAppSharedDirectivesHasAccessHasAccessDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HasAccessDirective", function () {
        return HasAccessDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var HasAccessDirective = /*#__PURE__*/function () {
        function HasAccessDirective(templateRef, viewContainer, permissionsService) {
          _classCallCheck(this, HasAccessDirective);

          this.templateRef = templateRef;
          this.viewContainer = viewContainer;
          this.permissionsService = permissionsService;
        }

        _createClass(HasAccessDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.permissionsService.checkAuthorization(this.appHasAccess).subscribe(function (authorized) {
              if (authorized) {
                _this20.viewContainer.createEmbeddedView(_this20.templateRef);
              } else {
                _this20.viewContainer.clear();
              }
            });
          }
        }]);

        return HasAccessDirective;
      }();

      HasAccessDirective.ɵfac = function HasAccessDirective_Factory(t) {
        return new (t || HasAccessDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"]));
      };

      HasAccessDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: HasAccessDirective,
        selectors: [["", "appHasAccess", ""]],
        inputs: {
          appHasAccess: "appHasAccess"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HasAccessDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[appHasAccess]"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"]
          }];
        }, {
          appHasAccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/null-value/null-value.directive.ts":
    /*!**********************************************************************!*\
      !*** ./src/app/shared/directives/null-value/null-value.directive.ts ***!
      \**********************************************************************/

    /*! exports provided: NullValueDirective */

    /***/
    function srcAppSharedDirectivesNullValueNullValueDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NullValueDirective", function () {
        return NullValueDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var NullValueDirective = /*#__PURE__*/function () {
        function NullValueDirective() {
          _classCallCheck(this, NullValueDirective);

          this.emptyToNull = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(NullValueDirective, [{
          key: "onKeyDowns",
          value: function onKeyDowns(target) {
            this.emptyToNull.emit(target.value === "" ? null : target.value);
          }
        }]);

        return NullValueDirective;
      }();

      NullValueDirective.ɵfac = function NullValueDirective_Factory(t) {
        return new (t || NullValueDirective)();
      };

      NullValueDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NullValueDirective,
        selectors: [["", "appNullValue", ""]],
        hostBindings: function NullValueDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function NullValueDirective_keyup_HostBindingHandler($event) {
              return ctx.onKeyDowns($event.target);
            });
          }
        },
        outputs: {
          emptyToNull: "emptyToNull"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NullValueDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[appNullValue]"
          }]
        }], function () {
          return [];
        }, {
          emptyToNull: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          onKeyDowns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keyup", ["$event.target"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/directives/only-number/only-number.directive.ts":
    /*!************************************************************************!*\
      !*** ./src/app/shared/directives/only-number/only-number.directive.ts ***!
      \************************************************************************/

    /*! exports provided: OnlyNumberDirective */

    /***/
    function srcAppSharedDirectivesOnlyNumberOnlyNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlyNumberDirective", function () {
        return OnlyNumberDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OnlyNumberDirective = /*#__PURE__*/function () {
        function OnlyNumberDirective(el) {
          _classCallCheck(this, OnlyNumberDirective);

          this.el = el;
          this.decimalCounter = 0;
          this.navigationKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter", "Home", "End", "ArrowLeft", "ArrowRight", "Clear", "Copy", "Paste"];
          this.decimal = false;
          this.decimalSeparator = ".";
          this.inputElement = el.nativeElement;
        }

        _createClass(OnlyNumberDirective, [{
          key: "onKeyDown",
          value: function onKeyDown(e) {
            if (this.navigationKeys.indexOf(e.key) > -1 || // Allow: navigation keys: backspace, delete, arrows etc.
            e.key === "a" && e.ctrlKey === true || // Allow: Ctrl+A
            e.key === "c" && e.ctrlKey === true || // Allow: Ctrl+C
            e.key === "v" && e.ctrlKey === true || // Allow: Ctrl+V
            e.key === "x" && e.ctrlKey === true || // Allow: Ctrl+X
            e.key === "a" && e.metaKey === true || // Allow: Cmd+A (Mac)
            e.key === "c" && e.metaKey === true || // Allow: Cmd+C (Mac)
            e.key === "v" && e.metaKey === true || // Allow: Cmd+V (Mac)
            e.key === "x" && e.metaKey === true || // Allow: Cmd+X (Mac)
            this.decimal && e.key === this.decimalSeparator && this.decimalCounter < 1 // Allow: only one decimal point
            ) {
                // let it happen, don't do anything
                return;
              } // Ensure that it is a number and stop the keypress


            if (e.key === " " || isNaN(Number(e.key))) {
              e.preventDefault();
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp(e) {
            this.setDecimalCounter();
          }
        }, {
          key: "onPaste",
          value: function onPaste(event) {
            var pastedInput = event.clipboardData.getData("text/plain");
            this.pasteData(pastedInput);
            event.preventDefault();
          }
        }, {
          key: "onDrop",
          value: function onDrop(event) {
            var textData = event.dataTransfer.getData("text");
            this.inputElement.focus();
            this.pasteData(textData);
            event.preventDefault();
          }
        }, {
          key: "pasteData",
          value: function pasteData(pastedContent) {
            var sanitizedContent = this.sanitizeInput(pastedContent);
            var pasted = document.execCommand("insertText", false, sanitizedContent);

            if (!pasted) {
              var _this$inputElement = this.inputElement,
                  start = _this$inputElement.selectionStart,
                  end = _this$inputElement.selectionEnd;
              this.inputElement.setRangeText(sanitizedContent, start, end, "end");
            }

            this.setDecimalCounter();
          }
        }, {
          key: "sanitizeInput",
          value: function sanitizeInput(input) {
            var result = "";

            if (this.decimal && this.isValidDecimal(input)) {
              var regex = new RegExp("[^0-9".concat(this.decimalSeparator, "]"), "g");
              result = input.replace(regex, "");
            } else {
              result = input.replace(/[^0-9]/g, "");
            }

            var maxLength = this.inputElement.maxLength;

            if (maxLength > 0) {
              // the input element has maxLength limit
              var allowedLength = maxLength - this.inputElement.value.length;
              result = allowedLength > 0 ? result.substring(0, allowedLength) : "";
            }

            return result;
          }
        }, {
          key: "isValidDecimal",
          value: function isValidDecimal(string) {
            if (this.decimalCounter == 0) {
              return string.split(this.decimalSeparator).length <= 2;
            } else {
              // the input element already has a decimal separator
              var selectedText = this.getSelection();

              if (selectedText && selectedText.indexOf(this.decimalSeparator) > -1) {
                return string.split(this.decimalSeparator).length <= 2;
              } else {
                return string.indexOf(this.decimalSeparator) < 0;
              }
            }
          }
        }, {
          key: "setDecimalCounter",
          value: function setDecimalCounter() {
            if (this.decimal) {
              this.decimalCounter = this.inputElement.value.split(this.decimalSeparator).length - 1;
            }
          }
        }, {
          key: "getSelection",
          value: function getSelection() {
            return this.inputElement.value.substring(this.inputElement.selectionStart, this.inputElement.selectionEnd);
          }
        }]);

        return OnlyNumberDirective;
      }();

      OnlyNumberDirective.ɵfac = function OnlyNumberDirective_Factory(t) {
        return new (t || OnlyNumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
      };

      OnlyNumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OnlyNumberDirective,
        selectors: [["", "appOnlyNumber", ""]],
        hostBindings: function OnlyNumberDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function OnlyNumberDirective_keydown_HostBindingHandler($event) {
              return ctx.onKeyDown($event);
            })("keyup", function OnlyNumberDirective_keyup_HostBindingHandler($event) {
              return ctx.onKeyUp($event);
            })("paste", function OnlyNumberDirective_paste_HostBindingHandler($event) {
              return ctx.onPaste($event);
            })("drop", function OnlyNumberDirective_drop_HostBindingHandler($event) {
              return ctx.onDrop($event);
            });
          }
        },
        inputs: {
          decimal: "decimal",
          decimalSeparator: "decimalSeparator"
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlyNumberDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: "[appOnlyNumber]"
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }];
        }, {
          decimal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          decimalSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keydown", ["$event"]]
          }],
          onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keyup", ["$event"]]
          }],
          onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["paste", ["$event"]]
          }],
          onDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["drop", ["$event"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-messages/components/error-message.component.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/shared/error-messages/components/error-message.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ErrorMessageComponent */

    /***/
    function srcAppSharedErrorMessagesComponentsErrorMessageComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function () {
        return ErrorMessageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services */
      "./src/app/shared/error-messages/services/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ErrorMessageComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "\n");
        }
      }

      function ErrorMessageComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.control == null ? null : ctx_r1.control.errors == null ? null : ctx_r1.control.errors.serverError, "\n");
        }
      }

      var ErrorMessageComponent = /*#__PURE__*/function () {
        function ErrorMessageComponent(errorMessageService) {
          _classCallCheck(this, ErrorMessageComponent);

          this.errorMessageService = errorMessageService;
        }

        _createClass(ErrorMessageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "errorMessage",
          get: function get() {
            if (this.control) {
              for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName)) {
                  return this.errorMessageService.getValidationErrorMessage(propertyName, this.control.errors[propertyName], this.customValidationErrorMessages);
                }
              }
            }

            return null;
          }
        }]);

        return ErrorMessageComponent;
      }();

      ErrorMessageComponent.ɵfac = function ErrorMessageComponent_Factory(t) {
        return new (t || ErrorMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ErrorMessageService"]));
      };

      ErrorMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorMessageComponent,
        selectors: [["app-error-message"]],
        inputs: {
          control: "control",
          customValidationErrorMessages: "customValidationErrorMessages"
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"]],
        template: function ErrorMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorMessageComponent_ng_container_0_Template, 2, 1, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorMessageComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage !== null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control == null ? null : ctx.control.errors == null ? null : ctx.control.errors.serverError);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-error-message",
            templateUrl: "./error-message.component.html"
          }]
        }], function () {
          return [{
            type: _services__WEBPACK_IMPORTED_MODULE_1__["ErrorMessageService"]
          }];
        }, {
          control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          customValidationErrorMessages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-messages/services/error-message.service.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/error-messages/services/error-message.service.ts ***!
      \*************************************************************************/

    /*! exports provided: ErrorMessageService */

    /***/
    function srcAppSharedErrorMessagesServicesErrorMessageServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function () {
        return ErrorMessageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ErrorMessageService = /*#__PURE__*/function () {
        function ErrorMessageService() {
          _classCallCheck(this, ErrorMessageService);
        }

        _createClass(ErrorMessageService, [{
          key: "getValidationErrorMessage",
          value: function getValidationErrorMessage(validatorName, validatorValue, customConfig) {
            var config = {
              required: "This field is required.",
              email: "This email is invalid.",
              minlength: "This field must have minimum length ".concat(validatorValue.requiredLength),
              maxlength: "This field must have maximum length ".concat(validatorValue.requiredLength),
              pattern: "Invalid URL",
              mobile_number: "Mobile is invalid",
              invalidLength: "This field must have length ".concat(validatorValue.requiredLength)
            };
            return customConfig ? customConfig[validatorName] : config[validatorName];
          }
        }, {
          key: "handleServerSideError",
          value: function handleServerSideError(formGroup, error) {
            if (error.statusCode === 400 && error.data) {
              Object.keys(error.data).forEach(function (prop) {
                var formControl = formGroup.get(prop);

                if (formControl) {
                  formControl.setErrors({
                    serverError: error.data[prop]
                  });
                }
              });
            }
          }
        }]);

        return ErrorMessageService;
      }();

      ErrorMessageService.ɵfac = function ErrorMessageService_Factory(t) {
        return new (t || ErrorMessageService)();
      };

      ErrorMessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorMessageService,
        factory: ErrorMessageService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-messages/services/index.ts":
    /*!*********************************************************!*\
      !*** ./src/app/shared/error-messages/services/index.ts ***!
      \*********************************************************/

    /*! exports provided: ErrorMessageService */

    /***/
    function srcAppSharedErrorMessagesServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _error_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-message.service */
      "./src/app/shared/error-messages/services/error-message.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessageService", function () {
        return _error_message_service__WEBPACK_IMPORTED_MODULE_0__["ErrorMessageService"];
      });
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/access-forbidden/access-forbidden.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/shared/error-pages/components/access-forbidden/access-forbidden.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: AccessForbiddenComponent */

    /***/
    function srcAppSharedErrorPagesComponentsAccessForbiddenAccessForbiddenComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccessForbiddenComponent", function () {
        return AccessForbiddenComponent;
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var AccessForbiddenComponent = /*#__PURE__*/function (_core_components__WEB4) {
        _inherits(AccessForbiddenComponent, _core_components__WEB4);

        var _super7 = _createSuper(AccessForbiddenComponent);

        function AccessForbiddenComponent() {
          _classCallCheck(this, AccessForbiddenComponent);

          return _super7.call(this);
        }

        _createClass(AccessForbiddenComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "redirectToDefaultPage",
          value: function redirectToDefaultPage() {
            this.router.navigateByUrl(this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].DEFAULT_ROUTE));
          }
        }]);

        return AccessForbiddenComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      AccessForbiddenComponent.ɵfac = function AccessForbiddenComponent_Factory(t) {
        return new (t || AccessForbiddenComponent)();
      };

      AccessForbiddenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AccessForbiddenComponent,
        selectors: [["app-access-forbidden"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "error-pg-wrapper"], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "16px", "fxLayout.sm", "column", "fxLayout.xs", "column"], ["fxFlex", "1 1 50%", "fxFlexAlign", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "emoji-container"], ["fxFlex", "1 1 50%", 1, "error-msg-container"], [1, "fs-26"]],
        template: function AccessForbiddenComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sentiment_dissatisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Access Denied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sorry, you don't have permission to view this page.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccessForbiddenComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-access-forbidden",
            templateUrl: "./access-forbidden.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/access-forbidden/index.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/shared/error-pages/components/access-forbidden/index.ts ***!
      \*************************************************************************/

    /*! exports provided: AccessForbiddenComponent */

    /***/
    function srcAppSharedErrorPagesComponentsAccessForbiddenIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _access_forbidden_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./access-forbidden.component */
      "./src/app/shared/error-pages/components/access-forbidden/access-forbidden.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessForbiddenComponent", function () {
        return _access_forbidden_component__WEBPACK_IMPORTED_MODULE_0__["AccessForbiddenComponent"];
      });
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/index.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/error-pages/components/index.ts ***!
      \********************************************************/

    /*! exports provided: AccessForbiddenComponent, InternalServerErrorComponent, NotFoundComponent */

    /***/
    function srcAppSharedErrorPagesComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _access_forbidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./access-forbidden */
      "./src/app/shared/error-pages/components/access-forbidden/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessForbiddenComponent", function () {
        return _access_forbidden__WEBPACK_IMPORTED_MODULE_0__["AccessForbiddenComponent"];
      });
      /* harmony import */


      var _internal_server_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./internal-server-error */
      "./src/app/shared/error-pages/components/internal-server-error/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function () {
        return _internal_server_error__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorComponent"];
      });
      /* harmony import */


      var _not_found__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./not-found */
      "./src/app/shared/error-pages/components/not-found/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return _not_found__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"];
      });
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/internal-server-error/index.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/error-pages/components/internal-server-error/index.ts ***!
      \******************************************************************************/

    /*! exports provided: InternalServerErrorComponent */

    /***/
    function srcAppSharedErrorPagesComponentsInternalServerErrorIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _internal_server_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./internal-server-error.component */
      "./src/app/shared/error-pages/components/internal-server-error/internal-server-error.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function () {
        return _internal_server_error_component__WEBPACK_IMPORTED_MODULE_0__["InternalServerErrorComponent"];
      });
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/internal-server-error/internal-server-error.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/shared/error-pages/components/internal-server-error/internal-server-error.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: InternalServerErrorComponent */

    /***/
    function srcAppSharedErrorPagesComponentsInternalServerErrorInternalServerErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function () {
        return InternalServerErrorComponent;
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


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var InternalServerErrorComponent = /*#__PURE__*/function (_core_components__WEB5) {
        _inherits(InternalServerErrorComponent, _core_components__WEB5);

        var _super8 = _createSuper(InternalServerErrorComponent);

        function InternalServerErrorComponent() {
          _classCallCheck(this, InternalServerErrorComponent);

          return _super8.call(this);
        }

        _createClass(InternalServerErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "redirectToDefaultPage",
          value: function redirectToDefaultPage() {
            this.router.navigateByUrl(this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].DEFAULT_ROUTE));
          }
        }]);

        return InternalServerErrorComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      InternalServerErrorComponent.ɵfac = function InternalServerErrorComponent_Factory(t) {
        return new (t || InternalServerErrorComponent)();
      };

      InternalServerErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InternalServerErrorComponent,
        selectors: [["app-internal-server-error"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 0,
        consts: [[1, "error-pg-wrapper", "d-flex", "justify-content-center", "align-items-center"], [1, "container"], [1, "row", "justify-content-center", "align-items-center"], [1, "col-lg-3", "col-md-4"], [1, "emoji-container", "d-flex", "justify-content-center", "align-items-center", "rounded-circle", "text-center", "ml-lg-auto", "ml-md-auto", "mx-auto"], [1, "col-lg-9", "col-md-8", "error-msg-container"]],
        template: function InternalServerErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sentiment_dissatisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sorry, the page you are trying to reach has been moved or doesn't exist.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InternalServerErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-internal-server-error",
            templateUrl: "./internal-server-error.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/invalid-link/invalid-link.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/error-pages/components/invalid-link/invalid-link.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: InvalidLinkComponent */

    /***/
    function srcAppSharedErrorPagesComponentsInvalidLinkInvalidLinkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvalidLinkComponent", function () {
        return InvalidLinkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InvalidLinkComponent = /*#__PURE__*/function () {
        function InvalidLinkComponent() {
          _classCallCheck(this, InvalidLinkComponent);
        }

        _createClass(InvalidLinkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InvalidLinkComponent;
      }();

      InvalidLinkComponent.ɵfac = function InvalidLinkComponent_Factory(t) {
        return new (t || InvalidLinkComponent)();
      };

      InvalidLinkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InvalidLinkComponent,
        selectors: [["app-invalid-link"]],
        decls: 2,
        vars: 0,
        template: function InvalidLinkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, this link is no longer valid.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lcnJvci1wYWdlcy9jb21wb25lbnRzL2ludmFsaWQtbGluay9pbnZhbGlkLWxpbmsuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvalidLinkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-invalid-link",
            templateUrl: "./invalid-link.component.html",
            styleUrls: ["./invalid-link.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/not-found/index.ts":
    /*!******************************************************************!*\
      !*** ./src/app/shared/error-pages/components/not-found/index.ts ***!
      \******************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function srcAppSharedErrorPagesComponentsNotFoundIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found.component */
      "./src/app/shared/error-pages/components/not-found/not-found.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"];
      });
      /***/

    },

    /***/
    "./src/app/shared/error-pages/components/not-found/not-found.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/shared/error-pages/components/not-found/not-found.component.ts ***!
      \********************************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function srcAppSharedErrorPagesComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

      var NotFoundComponent = /*#__PURE__*/function (_core_components__WEB6) {
        _inherits(NotFoundComponent, _core_components__WEB6);

        var _super9 = _createSuper(NotFoundComponent);

        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);

          return _super9.call(this);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "redirectToDefaultPage",
          value: function redirectToDefaultPage() {
            this.router.navigateByUrl(this.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].DEFAULT_ROUTE));
          }
        }]);

        return NotFoundComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 14,
        vars: 0,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "error-pg-wrapper"], [1, "container"], ["fxLayout", "row", "fxLayoutAlign", "space-around center", "fxLayoutGap", "16px", "fxLayout.sm", "column", "fxLayout.xs", "column"], ["fxFlex", "1 1 50%", "fxFlexAlign", "center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "emoji-container"], ["fxFlex", "1 1 50%", 1, "error-msg-container"], [1, "fs-26"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "sentiment_dissatisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Page Not Found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sorry, the page you are trying to reach has been moved or doesn't exist.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-not-found",
            templateUrl: "./not-found.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-pages/error-pages.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/shared/error-pages/error-pages.component.ts ***!
      \*************************************************************/

    /*! exports provided: ErrorPagesComponent */

    /***/
    function srcAppSharedErrorPagesErrorPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesComponent", function () {
        return ErrorPagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ErrorPagesComponent = /*#__PURE__*/function () {
        function ErrorPagesComponent() {
          _classCallCheck(this, ErrorPagesComponent);
        }

        _createClass(ErrorPagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ErrorPagesComponent;
      }();

      ErrorPagesComponent.ɵfac = function ErrorPagesComponent_Factory(t) {
        return new (t || ErrorPagesComponent)();
      };

      ErrorPagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorPagesComponent,
        selectors: [["app-error-pages"]],
        decls: 2,
        vars: 0,
        template: function ErrorPagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "error-pages works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9lcnJvci1wYWdlcy9lcnJvci1wYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPagesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-error-pages",
            templateUrl: "./error-pages.component.html",
            styleUrls: ["./error-pages.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-pages/index.ts":
    /*!*********************************************!*\
      !*** ./src/app/shared/error-pages/index.ts ***!
      \*********************************************/

    /*! exports provided: AccessForbiddenComponent, InternalServerErrorComponent, NotFoundComponent, ErrorPagesComponent, ErrorPagesService */

    /***/
    function srcAppSharedErrorPagesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./components */
      "./src/app/shared/error-pages/components/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "AccessForbiddenComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["AccessForbiddenComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "InternalServerErrorComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["InternalServerErrorComponent"];
      });
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return _components__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"];
      });
      /* harmony import */


      var _error_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error-pages.component */
      "./src/app/shared/error-pages/error-pages.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesComponent", function () {
        return _error_pages_component__WEBPACK_IMPORTED_MODULE_1__["ErrorPagesComponent"];
      });
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./services */
      "./src/app/shared/error-pages/services/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesService", function () {
        return _services__WEBPACK_IMPORTED_MODULE_2__["ErrorPagesService"];
      });
      /***/

    },

    /***/
    "./src/app/shared/error-pages/services/error-pages.service.ts":
    /*!********************************************************************!*\
      !*** ./src/app/shared/error-pages/services/error-pages.service.ts ***!
      \********************************************************************/

    /*! exports provided: ErrorPagesService */

    /***/
    function srcAppSharedErrorPagesServicesErrorPagesServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesService", function () {
        return ErrorPagesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ErrorPagesService = /*#__PURE__*/function () {
        function ErrorPagesService(router) {
          _classCallCheck(this, ErrorPagesService);

          this.router = router;
          this.errorMessage = "";
        }

        _createClass(ErrorPagesService, [{
          key: "handleError",
          value: function handleError(error) {
            if (error.status === 500) {
              this.handle500Error(error);
            } else if (error.status === 404) {
              this.handle404Error(error);
            } else if (error.status === 403) {
              this.handle403Error(error);
            } else {
              this.handleOtherError(error);
            }
          }
        }, {
          key: "handle500Error",
          value: function handle500Error(error) {
            this.createErrorMessage(error);
            this.router.navigate(["/500"]);
          }
        }, {
          key: "handle404Error",
          value: function handle404Error(error) {
            this.createErrorMessage(error);
            this.router.navigate(["/404"]);
          }
        }, {
          key: "handle403Error",
          value: function handle403Error(error) {
            this.createErrorMessage(error);
            this.router.navigate(["/403"]);
          }
        }, {
          key: "handleOtherError",
          value: function handleOtherError(error) {
            this.createErrorMessage(error);
          }
        }, {
          key: "createErrorMessage",
          value: function createErrorMessage(error) {
            this.errorMessage = error.error ? error.error : error.statusText;
          }
        }]);

        return ErrorPagesService;
      }();

      ErrorPagesService.ɵfac = function ErrorPagesService_Factory(t) {
        return new (t || ErrorPagesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      ErrorPagesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorPagesService,
        factory: ErrorPagesService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPagesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/error-pages/services/index.ts":
    /*!******************************************************!*\
      !*** ./src/app/shared/error-pages/services/index.ts ***!
      \******************************************************/

    /*! exports provided: ErrorPagesService */

    /***/
    function srcAppSharedErrorPagesServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _error_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./error-pages.service */
      "./src/app/shared/error-pages/services/error-pages.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ErrorPagesService", function () {
        return _error_pages_service__WEBPACK_IMPORTED_MODULE_0__["ErrorPagesService"];
      });
      /***/

    },

    /***/
    "./src/app/shared/file-upload/file-upload.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/shared/file-upload/file-upload.component.ts ***!
      \*************************************************************/

    /*! exports provided: FileUploadComponent */

    /***/
    function srcAppSharedFileUploadFileUploadComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FileUploadComponent", function () {
        return FileUploadComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      function FileUploadComponent_mat_error_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "invalid_file"), "\n");
        }
      }

      var FileUploadComponent = /*#__PURE__*/function () {
        function FileUploadComponent() {
          _classCallCheck(this, FileUploadComponent);

          this.fileUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.errors = {
            invalidFileFormat: false,
            invalidFileSize: false
          };
        }

        _createClass(FileUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.expectedFileSize) {
              this.maxFileSizeInMB = this.expectedFileSize / 1024;
            }
          }
        }, {
          key: "onSelectFile",
          value: function onSelectFile(event) {
            var _this21 = this;

            if (event.target.files && event.target.files[0]) {
              this.getFileDetails(event.target.files);

              if (!this.errors.invalidFileFormat && !this.errors.invalidFileSize) {
                var reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);

                reader.onload = function (file) {
                  _this21.url = file.target.result;
                };

                this.fileUpload.emit(event.target.files[0]);
              }
            }
          }
        }, {
          key: "getFileDetails",
          value: function getFileDetails(files) {
            if (files && files.length > 0) {
              this.fileSizeInKb = Math.round(files[0].size / 1024);
              this.fileExtension = files[0].name.split(".").pop().toLowerCase();
              this.validateFile();
              this.validateExtension();
            }
          }
        }, {
          key: "validateFile",
          value: function validateFile() {
            if (this.fileSizeInKb >= this.expectedFileSize) {
              this.errors["invalidFileFormat"] = true;
            } else {
              this.errors["invalidFileFormat"] = false;
            }
          }
        }, {
          key: "validateExtension",
          value: function validateExtension() {
            if (this.expectedExtensions && this.expectedExtensions.indexOf(this.fileExtension.toLowerCase()) === -1) {
              this.errors["invalidFileSize"] = true;
            } else {
              this.errors["invalidFileSize"] = false;
            }
          }
        }]);

        return FileUploadComponent;
      }();

      FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
        return new (t || FileUploadComponent)();
      };

      FileUploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FileUploadComponent,
        selectors: [["app-file-upload"]],
        inputs: {
          expectedExtensions: "expectedExtensions",
          expectedFileSize: "expectedFileSize",
          url: "url",
          fileSizeInMb: "fileSizeInMb"
        },
        outputs: {
          fileUpload: "fileUpload"
        },
        decls: 20,
        vars: 13,
        consts: [[1, "helper-text", "aligned-right"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "16px", 1, "form-field-wrapper", "is-file-upload-field", "contains-single-file"], ["fxFlex", "1 1 calc(50% - 16px)", "fxFlex.md", "1 1 calc(33.33% - 16px)", "fxFlex.xs", "1 1 calc(50% - 16px)"], [1, "image-container"], ["alt", "", 3, "src"], ["fxFlex", "1 1 calc(50% - 16px)", "fxFlex.md", "1 1 calc(33.33% - 16px)", "fxFlex.xs", "1 1 calc(50% - 16px)", 1, "image-upload-btn"], [1, "icon-container", 3, "matTooltip", "matTooltipPosition"], ["type", "file", 3, "change"], [1, "fs-14"], [4, "ngIf"]],
        template: function FileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileUploadComponent_Template_input_change_13_listener($event) {
              return ctx.onSelectFile($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "camera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FileUploadComponent_mat_error_19_Template, 3, 3, "mat-error", 9);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "supported_formats"), " ", ctx.maxFileSizeInMB, " MB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, "upload_file"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipPosition", "above");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 11, "upload_file"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.errors == null ? null : ctx.errors.invalidFileSize) || (ctx.errors == null ? null : ctx.errors.invalidFileFormat));
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileUploadComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-file-upload",
            templateUrl: "./file-upload.component.html"
          }]
        }], function () {
          return [];
        }, {
          fileUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          expectedExtensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          expectedFileSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          fileSizeInMb: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/form/form.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/shared/form/form.component.ts ***!
      \***********************************************/

    /*! exports provided: FormComponent */

    /***/
    function srcAppSharedFormFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
        return FormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function FormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formOption == null ? null : ctx_r0.formOption.title);
        }
      }

      function FormComponent_button_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_button_7_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onOptionalButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.formOption == null ? null : ctx_r1.formOption.optional_button_label, " ");
        }
      }

      function FormComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.onPrimarytButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.formOption == null ? null : ctx_r2.formOption.primary_button_label, " ");
        }
      }

      function FormComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onAccentButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.formOption == null ? null : ctx_r3.formOption.accent_button_label, " ");
        }
      }

      var _c0 = ["*"];

      var FormComponent = /*#__PURE__*/function () {
        function FormComponent() {
          _classCallCheck(this, FormComponent);

          this.primaryButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.accentButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.optionalButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(FormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onPrimarytButtonClick",
          value: function onPrimarytButtonClick() {
            this.primaryButtonClicked.emit();
          }
        }, {
          key: "onAccentButtonClick",
          value: function onAccentButtonClick() {
            this.accentButtonClicked.emit();
          }
        }, {
          key: "onOptionalButtonClick",
          value: function onOptionalButtonClick() {
            this.optionalButtonClicked.emit();
          }
        }]);

        return FormComponent;
      }();

      FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || FormComponent)();
      };

      FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FormComponent,
        selectors: [["app-form"]],
        inputs: {
          formOption: "formOption"
        },
        outputs: {
          primaryButtonClicked: "primaryButtonClicked",
          accentButtonClicked: "accentButtonClicked",
          optionalButtonClicked: "optionalButtonClicked"
        },
        ngContentSelectors: _c0,
        decls: 10,
        vars: 4,
        consts: [[1, "module-wrapper"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", "class", "module-title", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start", "fxLayoutGap", "16px"], [1, "form-wrapper"], [1, "form", "business-form"], [1, "has-top-margin", "button-group", "text-right"], ["class", "btn-save-and-publish btn-green", "mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "btn-primary", "mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "btn-outline-accent", "mat-button", "", "color", "accent", "type", "button", 3, "click", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "module-title"], ["mat-button", "", "color", "primary", 1, "btn-save-and-publish", "btn-green", 3, "click"], ["mat-button", "", "color", "primary", 1, "btn-primary", 3, "click"], ["mat-button", "", "color", "accent", "type", "button", 1, "btn-outline-accent", 3, "click"]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_1_Template, 3, 1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormComponent_button_7_Template, 2, 1, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormComponent_button_8_Template, 2, 1, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormComponent_button_9_Template, 2, 1, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formOption == null ? null : ctx.formOption.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formOption == null ? null : ctx.formOption.optional_button_label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formOption == null ? null : ctx.formOption.primary_button_label);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formOption == null ? null : ctx.formOption.accent_button_label);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-form",
            templateUrl: "./form.component.html"
          }]
        }], function () {
          return [];
        }, {
          primaryButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          accentButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          optionalButtonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          formOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/language-select/index.ts":
    /*!*************************************************!*\
      !*** ./src/app/shared/language-select/index.ts ***!
      \*************************************************/

    /*! exports provided: LanguageSelectComponent */

    /***/
    function srcAppSharedLanguageSelectIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _language_select_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./language-select.component */
      "./src/app/shared/language-select/language-select.component.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "LanguageSelectComponent", function () {
        return _language_select_component__WEBPACK_IMPORTED_MODULE_0__["LanguageSelectComponent"];
      });
      /***/

    },

    /***/
    "./src/app/shared/language-select/language-select.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/shared/language-select/language-select.component.ts ***!
      \*********************************************************************/

    /*! exports provided: LanguageSelectComponent */

    /***/
    function srcAppSharedLanguageSelectLanguageSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageSelectComponent", function () {
        return LanguageSelectComponent;
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


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

      function LanguageSelectComponent_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var language_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", language_r1.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", language_r1.viewValue, " ");
        }
      }

      var LanguageSelectComponent = /*#__PURE__*/function (_core_components_base) {
        _inherits(LanguageSelectComponent, _core_components_base);

        var _super10 = _createSuper(LanguageSelectComponent);

        function LanguageSelectComponent() {
          var _this22;

          _classCallCheck(this, LanguageSelectComponent);

          _this22 = _super10.call(this);
          _this22.languages = [{
            value: "en",
            viewValue: "English"
          }, {
            value: "np",
            viewValue: "Nepali"
          }];
          return _this22;
        }

        _createClass(LanguageSelectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "useLanguage",
          value: function useLanguage(language) {
            this.translate.use(language);
          }
        }]);

        return LanguageSelectComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      LanguageSelectComponent.ɵfac = function LanguageSelectComponent_Factory(t) {
        return new (t || LanguageSelectComponent)();
      };

      LanguageSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LanguageSelectComponent,
        selectors: [["app-language-select"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 5,
        vars: 1,
        consts: [[3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
        template: function LanguageSelectComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select language");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function LanguageSelectComponent_Template_mat_select_selectionChange_3_listener($event) {
              return ctx.useLanguage($event.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LanguageSelectComponent_mat_option_4_Template, 2, 2, "mat-option", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_3__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatOption"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYW5ndWFnZS1zZWxlY3QvbGFuZ3VhZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageSelectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-language-select",
            templateUrl: "./language-select.component.html",
            styleUrls: ["./language-select.component.scss"]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/list/list.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/shared/list/list.component.ts ***!
      \***********************************************/

    /*! exports provided: ListComponent */

    /***/
    function srcAppSharedListListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
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


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _core_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/components */
      "./src/app/core/components/index.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../search-input/search-input.component */
      "./src/app/shared/search-input/search-input.component.ts");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      function ListComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searched", function ListComponent_div_1_Template_app_search_input_searched_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onSearch($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx_r0.search);
        }
      }

      function ListComponent_div_2_div_10_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var statusFilterOption_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", statusFilterOption_r12.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](statusFilterOption_r12 == null ? null : statusFilterOption_r12.title);
        }
      }

      function ListComponent_div_2_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "toggle_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter by Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ListComponent_div_2_div_10_Template_mat_select_selectionChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.onStatusChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_div_2_div_10_mat_option_9_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.statusFilterOptions);
        }
      }

      function ListComponent_div_2_div_11_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var typeFilterOption_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", typeFilterOption_r16.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](typeFilterOption_r16 == null ? null : typeFilterOption_r16.title);
        }
      }

      function ListComponent_div_2_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "toggle_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter by Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function ListComponent_div_2_div_11_Template_mat_select_selectionChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.onTypeChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "All Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_div_2_div_11_mat_option_9_Template, 2, 2, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.typeFilterOptions);
        }
      }

      function ListComponent_div_2_div_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "date_range");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Filter by Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-date-range-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-datepicker-toggle", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-datepicker-toggle", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_2_div_12_Template_mat_datepicker_toggle_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.clearDateRange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-date-range-picker", null, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-error-message", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-error-message", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r19)("formGroup", ctx_r10.dateRangeForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r10.dateRangeForm.get("startDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r10.dateRangeForm.get("endDate"))("customValidationErrorMessages", ctx_r10.customValidationErrorMessages);
        }
      }

      function ListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "tune");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "More Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_2_Template_a_click_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            $event.stopPropagation();
            return $event.preventDefault();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_div_2_div_10_Template, 10, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ListComponent_div_2_div_11_Template, 10, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ListComponent_div_2_div_12_Template, 19, 6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_div_2_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.onApplyFilters();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apply Filters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filterOptions == null ? null : ctx_r1.filterOptions.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filterOptions == null ? null : ctx_r1.filterOptions.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.filterOptions == null ? null : ctx_r1.filterOptions.dateRange);
        }
      }

      function ListComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "subtitles_off");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "no_records_found"));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          item: a0
        };
      };

      function ListComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "template", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r25 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r3.getActiveItem(item_r25));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r25))("ngTemplateOutlet", ctx_r3.templateVariable);
        }
      }

      var ListComponent = /*#__PURE__*/function (_core_components__WEB7) {
        _inherits(ListComponent, _core_components__WEB7);

        var _super11 = _createSuper(ListComponent);

        function ListComponent() {
          var _this23;

          _classCallCheck(this, ListComponent);

          _this23 = _super11.call(this);
          _this23.searched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this23.applyFilters = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          _this23.enableSearch = false;
          _this23.search = null;
          _this23.enableFilters = false;
          return _this23;
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.setDateRangeForm();
            this.setCustomValidationErrorMessages();
          }
        }, {
          key: "setCustomValidationErrorMessages",
          value: function setCustomValidationErrorMessages() {
            this.customValidationErrorMessages = {
              required: this.translate.instant("validation_messages.end_date_required")
            };
          }
        }, {
          key: "setDateRangeForm",
          value: function setDateRangeForm() {
            this.dateRangeForm = this.formBuilder.group({
              startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
            });
          }
        }, {
          key: "onSearch",
          value: function onSearch(searchValue) {
            this.searched.emit(searchValue);
          }
        }, {
          key: "getActiveItem",
          value: function getActiveItem(item) {
            if (item && this.activeItem) {
              return item.id === this.activeItem.id;
            }
          }
        }, {
          key: "onApplyFilters",
          value: function onApplyFilters() {
            var filters = {
              status: this.statusFilter || this.statusFilter === false ? this.statusFilter : null,
              dateRange: this.dateRangeForm.valid ? this.dateRangeForm.value : null,
              type: this.typeFilter ? this.typeFilter : null
            };
            this.clickMenuTrigger.closeMenu();
            this.applyFilters.emit(filters);
          }
        }, {
          key: "onStatusChange",
          value: function onStatusChange(event) {
            this.statusFilter = event.value;
          }
        }, {
          key: "onTypeChange",
          value: function onTypeChange(event) {
            this.typeFilter = event.value;
          }
        }, {
          key: "getClass",
          value: function getClass() {
            if (this.enableSearch && !this.enableFilters) {
              return "contains-lists has-search-filter-only";
            } else if (this.enableSearch && this.enableFilters) {
              return "contains-lists has-multiple-filters";
            } else {
              return "contains-lists";
            }
          }
        }, {
          key: "clearDateRange",
          value: function clearDateRange() {
            this.dateRangeForm.reset();
            this.dateRangeForm.markAsPristine();
            this.dateRangeForm.markAsUntouched();
            this.dateRangeForm.updateValueAndValidity();
          }
        }]);

        return ListComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]);

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)();
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        contentQueries: function ListComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateVariable = _t.first);
          }
        },
        viewQuery: function ListComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.clickMenuTrigger = _t.first);
          }
        },
        inputs: {
          items: "items",
          activeItem: "activeItem",
          enableSearch: "enableSearch",
          search: "search",
          statusFilterOptions: "statusFilterOptions",
          typeFilterOptions: "typeFilterOptions",
          enableFilters: "enableFilters",
          filterOptions: "filterOptions"
        },
        outputs: {
          searched: "searched",
          applyFilters: "applyFilters"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 6,
        vars: 6,
        consts: [["class", "search-lists", 4, "ngIf"], ["class", "filters", 4, "ngIf"], ["class", "no-records-found", 4, "ngIf"], [1, "lists-inner"], ["class", "data-lists-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "search-lists"], [3, "search", "searched"], [1, "filters"], ["mat-button", "", 1, "has-more-filters", 3, "matMenuTriggerFor"], ["clickMenuTrigger", "matMenuTrigger"], [1, "records-filter-options"], ["filters", "matMenu"], [3, "click"], ["class", "form-field-wrapper", 4, "ngIf"], ["mat-button", "", 1, "btn-primary", 3, "click"], [1, "form-field-wrapper"], [1, "field-label"], [3, "selectionChange"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "rangePicker", "formGroup"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "startDate"], ["matEndDate", "", "placeholder", "End date", "formControlName", "endDate"], ["matSuffix", "", 3, "for"], ["matSuffix", "", 3, "click"], ["matDatepickerToggleIcon", ""], ["picker", ""], [3, "control"], [3, "control", "customValidationErrorMessages"], [1, "no-records-found"], [1, "data-lists-item"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"]],
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListComponent_div_1_Template, 5, 1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListComponent_div_2_Template, 15, 4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListComponent_div_3_Template, 6, 3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListComponent_div_5_Template, 2, 6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getClass());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableSearch);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.enableFilters);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_6__["SearchInputComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangeInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatStartDate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDateRangePicker"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_13__["ErrorMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-list",
            templateUrl: "./list.component.html"
          }]
        }], function () {
          return [];
        }, {
          templateVariable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
          }],
          clickMenuTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"]]
          }],
          searched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          applyFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          activeItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          statusFilterOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          typeFilterOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          enableFilters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          filterOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/login-section/login-section.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/login-section/login-section.component.ts ***!
      \*****************************************************************/

    /*! exports provided: LoginSectionComponent */

    /***/
    function srcAppSharedLoginSectionLoginSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginSectionComponent", function () {
        return LoginSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var LoginSectionComponent = /*#__PURE__*/function () {
        function LoginSectionComponent() {
          _classCallCheck(this, LoginSectionComponent);
        }

        _createClass(LoginSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoginSectionComponent;
      }();

      LoginSectionComponent.ɵfac = function LoginSectionComponent_Factory(t) {
        return new (t || LoginSectionComponent)();
      };

      LoginSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginSectionComponent,
        selectors: [["app-login-section"]],
        ngContentSelectors: _c0,
        decls: 15,
        vars: 0,
        consts: [[1, "app-container", "auth", "d-flex", "align-center"], [1, "auth-content", "d-flex"], [1, "app-info"], [1, "app-icon"], [1, "text-center"], ["src", "./assets/images/bms-wizard-footer-img.png", "alt", "estateCloud"], [1, "form-wrapper"]],
        template: function LoginSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OWNANT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manage your property");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login and enjoy managing it efficiently");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-login-section",
            templateUrl: "./login-section.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/module-header/module-header.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/module-header/module-header.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ModuleHeaderComponent */

    /***/
    function srcAppSharedModuleHeaderModuleHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModuleHeaderComponent", function () {
        return ModuleHeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      function ModuleHeaderComponent_h2_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.moduleHeaderOption == null ? null : ctx_r0.moduleHeaderOption.title);
        }
      }

      function ModuleHeaderComponent_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModuleHeaderComponent_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.moduleHeaderOption == null ? null : ctx_r1.moduleHeaderOption.button_label);
        }
      }

      var ModuleHeaderComponent = /*#__PURE__*/function () {
        function ModuleHeaderComponent() {
          _classCallCheck(this, ModuleHeaderComponent);

          this.buttonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(ModuleHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onButtonClick",
          value: function onButtonClick() {
            this.buttonClicked.emit();
          }
        }]);

        return ModuleHeaderComponent;
      }();

      ModuleHeaderComponent.ɵfac = function ModuleHeaderComponent_Factory(t) {
        return new (t || ModuleHeaderComponent)();
      };

      ModuleHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModuleHeaderComponent,
        selectors: [["app-module-header"]],
        inputs: {
          moduleHeaderOption: "moduleHeaderOption"
        },
        outputs: {
          buttonClicked: "buttonClicked"
        },
        decls: 3,
        vars: 2,
        consts: [["fxLayout", "row wrap", "fxLayoutAlign", "space-between center", 1, "module-title"], [4, "ngIf"], ["mat-button", "", "class", "btn-primary", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 1, "btn-primary", 3, "click"]],
        template: function ModuleHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModuleHeaderComponent_h2_1_Template, 2, 1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModuleHeaderComponent_button_2_Template, 3, 1, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleHeaderOption == null ? null : ctx.moduleHeaderOption.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleHeaderOption == null ? null : ctx.moduleHeaderOption.button_label);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleHeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-module-header",
            templateUrl: "./module-header.component.html"
          }]
        }], function () {
          return [];
        }, {
          buttonClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          moduleHeaderOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/modules/index.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/modules/index.ts ***!
      \*****************************************/

    /*! exports provided: MaterialModule */

    /***/
    function srcAppSharedModulesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./material.module */
      "./src/app/shared/modules/material.module.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return _material_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"];
      });
      /***/

    },

    /***/
    "./src/app/shared/modules/material.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/modules/material.module.ts ***!
      \***************************************************/

    /*! exports provided: MaterialModule */

    /***/
    function srcAppSharedModulesMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
      /* harmony import */


      var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/checkbox */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/core */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/expansion */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/paginator */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/select */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slider */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
      /* harmony import */


      var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/sort */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/table */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/tabs */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
      /* harmony import */


      var _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/tree */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]],
            exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__["MatSnackBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_27__["MatTooltipModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_19__["MatSidenavModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_24__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__["MatSortModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_28__["MatTreeModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_20__["MatSlideToggleModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/navigation-bar/navigation-bar.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/navigation-bar/navigation-bar.component.ts ***!
      \*******************************************************************/

    /*! exports provided: NavigationBarComponent */

    /***/
    function srcAppSharedNavigationBarNavigationBarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function () {
        return NavigationBarComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");

      var _c0 = ["*"];

      var NavigationBarComponent = /*#__PURE__*/function () {
        function NavigationBarComponent(router) {
          _classCallCheck(this, NavigationBarComponent);

          this.router = router;
        }

        _createClass(NavigationBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onLogout",
          value: function onLogout() {
            localStorage.clear();
            this.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_1__["AppRoutes"].AUTH_LOGIN);
          }
        }]);

        return NavigationBarComponent;
      }();

      NavigationBarComponent.ɵfac = function NavigationBarComponent_Factory(t) {
        return new (t || NavigationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      NavigationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavigationBarComponent,
        selectors: [["app-navigation-bar"]],
        ngContentSelectors: _c0,
        decls: 18,
        vars: 0,
        consts: [[1, "app-container"], [1, "d-flex", "align-center"], [1, "building-logo", "d-flex", "align-center"], ["src", "./assets/images/favicon.png", "alt", "Building Logo"], [1, "text-primary", "bold"], [1, "nav-toggle", 3, "click"], [1, "las", "la-bars"], [1, "nav", "nav-secondary"], ["mat-list-item", "", 3, "click"], [1, "las", "la-sign-out-alt"], [1, "app-content"], ["mode", "side", "opened", ""], ["drawer", ""]],
        template: function NavigationBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sunrise Builder");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_span_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

              return _r0.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavigationBarComponent_Template_a_click_10_listener() {
              return ctx.onLogout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-drawer-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-drawer", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-drawer-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-navigation-bar",
            templateUrl: "./navigation-bar.component.html",
            styleUrls: ["./navigation-bar.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/page-title/page-title.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/page-title/page-title.component.ts ***!
      \***********************************************************/

    /*! exports provided: PageTitleComponent */

    /***/
    function srcAppSharedPageTitlePageTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageTitleComponent", function () {
        return PageTitleComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var PageTitleComponent = /*#__PURE__*/function () {
        function PageTitleComponent() {
          _classCallCheck(this, PageTitleComponent);
        }

        _createClass(PageTitleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageTitleComponent;
      }();

      PageTitleComponent.ɵfac = function PageTitleComponent_Factory(t) {
        return new (t || PageTitleComponent)();
      };

      PageTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageTitleComponent,
        selectors: [["app-page-title"]],
        inputs: {
          pageTitle: "pageTitle"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "page-title"]],
        template: function PageTitleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.pageTitle));
          }
        },
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageTitleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-page-title",
            templateUrl: "./page-title.component.html"
          }]
        }], function () {
          return [];
        }, {
          pageTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/pipes/datetime/utc-to-local.pipe.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/pipes/datetime/utc-to-local.pipe.ts ***!
      \************************************************************/

    /*! exports provided: UtcToLocalPipe */

    /***/
    function srcAppSharedPipesDatetimeUtcToLocalPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtcToLocalPipe", function () {
        return UtcToLocalPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_utilities_date_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @core/utilities/date-utils */
      "./src/app/core/utilities/date-utils.ts");

      var UtcToLocalPipe = /*#__PURE__*/function () {
        function UtcToLocalPipe() {
          _classCallCheck(this, UtcToLocalPipe);
        }

        _createClass(UtcToLocalPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value) {
              return _core_utilities_date_utils__WEBPACK_IMPORTED_MODULE_1__["default"].convertUTCToLocal(value, "MMM Do YYYY, h:mm A");
            }
          }
        }]);

        return UtcToLocalPipe;
      }();

      UtcToLocalPipe.ɵfac = function UtcToLocalPipe_Factory(t) {
        return new (t || UtcToLocalPipe)();
      };

      UtcToLocalPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "utcToLocalDate",
        type: UtcToLocalPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtcToLocalPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: "utcToLocalDate"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/pipes/image-path/image-path.pipe.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/pipes/image-path/image-path.pipe.ts ***!
      \************************************************************/

    /*! exports provided: ImagePathPipe */

    /***/
    function srcAppSharedPipesImagePathImagePathPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ImagePathPipe", function () {
        return ImagePathPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");

      var ImagePathPipe = /*#__PURE__*/function () {
        function ImagePathPipe() {
          _classCallCheck(this, ImagePathPipe);
        }

        _createClass(ImagePathPipe, [{
          key: "transform",
          value: function transform(value) {
            if (value) {
              return "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].imageApi, "/").concat(value);
            }

            return "/assets/images/placeholder-img.jpg";
          }
        }]);

        return ImagePathPipe;
      }();

      ImagePathPipe.ɵfac = function ImagePathPipe_Factory(t) {
        return new (t || ImagePathPipe)();
      };

      ImagePathPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "imagePath",
        type: ImagePathPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagePathPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: "imagePath"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/property-owner-invitation/property-owner-invitation.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/shared/property-owner-invitation/property-owner-invitation.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: PropertyOwnerInvitationComponent */

    /***/
    function srcAppSharedPropertyOwnerInvitationPropertyOwnerInvitationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyOwnerInvitationComponent", function () {
        return PropertyOwnerInvitationComponent;
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


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

      var _c0 = ["invitationNgForm"];

      var PropertyOwnerInvitationComponent = /*#__PURE__*/function (_core_components__WEB8) {
        _inherits(PropertyOwnerInvitationComponent, _core_components__WEB8);

        var _super12 = _createSuper(PropertyOwnerInvitationComponent);

        function PropertyOwnerInvitationComponent(store) {
          var _this24;

          _classCallCheck(this, PropertyOwnerInvitationComponent);

          _this24 = _super12.call(this);
          _this24.store = store;
          _this24.invitePropertyOwnerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          return _this24;
        }

        _createClass(PropertyOwnerInvitationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            this.setInvitationForm();
            this.error$ = this.store.select(function (store) {
              return store.sharedModule.invitations.error;
            });
            this.error$.subscribe(function (err) {
              if (err && _this25.invitationForm) {
                _this25.errorMessageService.handleServerSideError(_this25.invitationForm, err);
              }
            });
          }
        }, {
          key: "setInvitationForm",
          value: function setInvitationForm() {
            this.invitationForm = this.formBuilder.group({
              name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              mobileNumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _core_utilities__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].inputLengthValidator(10)]],
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
            });
          }
        }, {
          key: "onInvite",
          value: function onInvite() {
            if (this.invitationForm.valid) {
              this.invitePropertyOwnerClicked.emit(this.invitationForm.value);
            }
          }
        }]);

        return PropertyOwnerInvitationComponent;
      }(_core_components__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

      PropertyOwnerInvitationComponent.ɵfac = function PropertyOwnerInvitationComponent_Factory(t) {
        return new (t || PropertyOwnerInvitationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
      };

      PropertyOwnerInvitationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PropertyOwnerInvitationComponent,
        selectors: [["app-property-owner-invitation"]],
        viewQuery: function PropertyOwnerInvitationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.invitationNgForm = _t.first);
          }
        },
        outputs: {
          invitePropertyOwnerClicked: "invitePropertyOwnerClicked"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 32,
        vars: 4,
        consts: [[3, "formGroup"], ["invitationNgForm", "ngForm"], [1, "ng-trigger-detailExpand"], [1, "info", "owner-invite"], [1, "d-flex", "has-3-cols"], [1, "form-field-wrapper", "col"], ["type", "text", "matInput", "", "formControlName", "name"], [3, "control"], ["matInput", "", "formControlName", "mobileNumber", "appOnlyNumber", ""], ["type", "text", "matInput", "", "formControlName", "email"], [1, "col"], ["mat-button", "", 1, "btn", "btn-theme-green", 3, "click"]],
        template: function PropertyOwnerInvitationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Invite Owner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-error-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-error-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-error-message", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyOwnerInvitationComponent_Template_button_click_30_listener() {
              return ctx.onInvite();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Invite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.invitationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.invitationForm.get("name"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.invitationForm.get("mobileNumber"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.invitationForm.get("email"));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"], _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_7__["ErrorMessageComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_8__["OnlyNumberDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyOwnerInvitationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-property-owner-invitation",
            templateUrl: "./property-owner-invitation.component.html"
          }]
        }], function () {
          return [{
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
          }];
        }, {
          invitePropertyOwnerClicked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          invitationNgForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["invitationNgForm"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/search-input/search-input.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/search-input/search-input.component.ts ***!
      \***************************************************************/

    /*! exports provided: SearchInputComponent */

    /***/
    function srcAppSharedSearchInputSearchInputComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchInputComponent", function () {
        return SearchInputComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var _c0 = ["searchInput"];

      var SearchInputComponent = /*#__PURE__*/function () {
        function SearchInputComponent() {
          _classCallCheck(this, SearchInputComponent);

          this.searched = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SearchInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this26 = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, "keyup").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (event) {
              _this26.searched.emit(event.target.value);
            });
          }
        }]);

        return SearchInputComponent;
      }();

      SearchInputComponent.ɵfac = function SearchInputComponent_Factory(t) {
        return new (t || SearchInputComponent)();
      };

      SearchInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SearchInputComponent,
        selectors: [["app-search-input"]],
        viewQuery: function SearchInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
          }
        },
        inputs: {
          search: "search"
        },
        outputs: {
          searched: "searched"
        },
        decls: 6,
        vars: 4,
        consts: [["fxFlex", "1 1 calc(25% - 16px)", "fxFlex.md", "1 1 calc(50% - 16px)"], ["matInput", "", 3, "value", "placeholder"], ["searchInput", ""]],
        template: function SearchInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.search)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, "search_placeholder"));
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"]],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-search-input",
            templateUrl: "./search-input.component.html"
          }]
        }], function () {
          return [];
        }, {
          searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["searchInput"]
          }],
          searched: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/business/business.service.ts":
    /*!**************************************************************!*\
      !*** ./src/app/shared/services/business/business.service.ts ***!
      \**************************************************************/

    /*! exports provided: BusinessService */

    /***/
    function srcAppSharedServicesBusinessBusinessServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessService", function () {
        return BusinessService;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var BusinessService = /*#__PURE__*/function (_core_services__WEBPA) {
        _inherits(BusinessService, _core_services__WEBPA);

        var _super13 = _createSuper(BusinessService);

        function BusinessService(injector) {
          _classCallCheck(this, BusinessService);

          return _super13.call(this, injector);
        }

        _createClass(BusinessService, [{
          key: "getBusinessList",
          value: function getBusinessList(parameters) {
            return this.http.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].BUSINESS, {
              params: parameters
            });
          }
        }, {
          key: "getBusinessTypes",
          value: function getBusinessTypes() {
            return this.http.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].BUSINESS_TYPES);
          }
        }, {
          key: "getBusinessDetail",
          value: function getBusinessDetail(businessId) {
            return this.http.get("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].BUSINESS, "/").concat(businessId));
          }
        }, {
          key: "saveBusiness",
          value: function saveBusiness(business) {
            return this.http.post("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].BUSINESS), business);
          }
        }, {
          key: "updateBusiness",
          value: function updateBusiness(business) {
            return this.http.put("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].BUSINESS, "/").concat(business.id), business);
          }
        }, {
          key: "deleteBusiness",
          value: function deleteBusiness(businessId) {
            return this.http["delete"]("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].BUSINESS, "/").concat(businessId));
          }
        }]);

        return BusinessService;
      }(_core_services__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

      BusinessService.ɵfac = function BusinessService_Factory(t) {
        return new (t || BusinessService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      BusinessService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BusinessService,
        factory: BusinessService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessService, [{
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
    "./src/app/shared/services/business/index.ts":
    /*!***************************************************!*\
      !*** ./src/app/shared/services/business/index.ts ***!
      \***************************************************/

    /*! exports provided: BusinessService */

    /***/
    function srcAppSharedServicesBusinessIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _business_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./business.service */
      "./src/app/shared/services/business/business.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BusinessService", function () {
        return _business_service__WEBPACK_IMPORTED_MODULE_0__["BusinessService"];
      });
      /***/

    },

    /***/
    "./src/app/shared/services/index.ts":
    /*!******************************************!*\
      !*** ./src/app/shared/services/index.ts ***!
      \******************************************/

    /*! exports provided: BusinessService, NotificationsService, UsersService */

    /***/
    function srcAppSharedServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _business__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./business */
      "./src/app/shared/services/business/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "BusinessService", function () {
        return _business__WEBPACK_IMPORTED_MODULE_0__["BusinessService"];
      });
      /* harmony import */


      var _notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notifications */
      "./src/app/shared/services/notifications/index.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return _notifications__WEBPACK_IMPORTED_MODULE_1__["NotificationsService"];
      });
      /* harmony import */


      var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users/users.service */
      "./src/app/shared/services/users/users.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return _users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"];
      });
      /***/

    },

    /***/
    "./src/app/shared/services/notifications/index.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/notifications/index.ts ***!
      \********************************************************/

    /*! exports provided: NotificationsService */

    /***/
    function srcAppSharedServicesNotificationsIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _notifications_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notifications.service */
      "./src/app/shared/services/notifications/notifications.service.ts");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return _notifications_service__WEBPACK_IMPORTED_MODULE_0__["NotificationsService"];
      });
      /***/

    },

    /***/
    "./src/app/shared/services/notifications/notifications.service.ts":
    /*!************************************************************************!*\
      !*** ./src/app/shared/services/notifications/notifications.service.ts ***!
      \************************************************************************/

    /*! exports provided: NotificationsService */

    /***/
    function srcAppSharedServicesNotificationsNotificationsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsService", function () {
        return NotificationsService;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var NotificationsService = /*#__PURE__*/function (_core_services__WEBPA2) {
        _inherits(NotificationsService, _core_services__WEBPA2);

        var _super14 = _createSuper(NotificationsService);

        function NotificationsService(injector) {
          _classCallCheck(this, NotificationsService);

          return _super14.call(this, injector);
        }
        /**
         *
         * @param userId
         * @param parameters
         */


        _createClass(NotificationsService, [{
          key: "getNotificationsList",
          value: function getNotificationsList(userId, parameters) {
            return this.http.get("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].NOTIFICATIONS, "/").concat(userId), {
              params: parameters
            });
          }
          /**
           *
           * @param userId
           */

        }, {
          key: "getNotificationCount",
          value: function getNotificationCount(userId) {
            return this.http.get("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].NOTIFICATIONS_COUNT, "/").concat(userId));
          }
          /**
           *
           * @param markReadPayload
           */

        }, {
          key: "markAsRead",
          value: function markAsRead(markReadPayload) {
            return this.http.put("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].MARK_READ), markReadPayload);
          }
        }]);

        return NotificationsService;
      }(_core_services__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

      NotificationsService.ɵfac = function NotificationsService_Factory(t) {
        return new (t || NotificationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      NotificationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NotificationsService,
        factory: NotificationsService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsService, [{
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
    "./src/app/shared/services/property-owner-invitation/property-owner-invitation.service.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/shared/services/property-owner-invitation/property-owner-invitation.service.ts ***!
      \************************************************************************************************/

    /*! exports provided: PropertyOwnerInvitationService */

    /***/
    function srcAppSharedServicesPropertyOwnerInvitationPropertyOwnerInvitationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PropertyOwnerInvitationService", function () {
        return PropertyOwnerInvitationService;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var PropertyOwnerInvitationService = /*#__PURE__*/function (_core_services__WEBPA3) {
        _inherits(PropertyOwnerInvitationService, _core_services__WEBPA3);

        var _super15 = _createSuper(PropertyOwnerInvitationService);

        function PropertyOwnerInvitationService(injector) {
          _classCallCheck(this, PropertyOwnerInvitationService);

          return _super15.call(this, injector);
        }

        _createClass(PropertyOwnerInvitationService, [{
          key: "invitePropertyOwner",
          value: function invitePropertyOwner(propertyOwnerInvitaionPayload) {
            return this.http.post("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].INVITE_PROPERTY_OWNER), propertyOwnerInvitaionPayload);
          }
        }]);

        return PropertyOwnerInvitationService;
      }(_core_services__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

      PropertyOwnerInvitationService.ɵfac = function PropertyOwnerInvitationService_Factory(t) {
        return new (t || PropertyOwnerInvitationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      PropertyOwnerInvitationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: PropertyOwnerInvitationService,
        factory: PropertyOwnerInvitationService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyOwnerInvitationService, [{
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
    "./src/app/shared/services/users/users.service.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/services/users/users.service.ts ***!
      \********************************************************/

    /*! exports provided: UsersService */

    /***/
    function srcAppSharedServicesUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersService", function () {
        return UsersService;
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


      var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var UsersService = /*#__PURE__*/function (_core_services__WEBPA4) {
        _inherits(UsersService, _core_services__WEBPA4);

        var _super16 = _createSuper(UsersService);

        function UsersService(injector) {
          _classCallCheck(this, UsersService);

          return _super16.call(this, injector);
        }
        /**
         *
         * @param parameters
         */


        _createClass(UsersService, [{
          key: "getUsersList",
          value: function getUsersList(parameters) {
            return this.http.get(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].USERS, {
              params: parameters
            });
          }
          /**
           *
           * @param userId
           */

        }, {
          key: "getUserById",
          value: function getUserById(userId) {
            return this.http.get("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].USERS, "/").concat(userId));
          }
          /**
           *
           * @param user
           */

        }, {
          key: "createNewUser",
          value: function createNewUser(user) {
            return this.http.post("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].USERS), user);
          }
          /**
           *
           * @param user
           */

        }, {
          key: "updateUser",
          value: function updateUser(user) {
            return this.http.put("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].USERS, "/").concat(user.id), user);
          }
          /**
           *
           * @param userId
           */

        }, {
          key: "deleteUser",
          value: function deleteUser(userId) {
            return this.http["delete"]("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].USERS, "/").concat(userId));
          }
          /**
           * Get list of roles.
           * @param params
           * @returns {Observable<Object>}
           */

        }, {
          key: "getRoles",
          value: function getRoles(params) {
            return this.http.get("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].ROLES), {
              params: params
            });
          }
        }, {
          key: "createUpdatePassword",
          value: function createUpdatePassword(payload) {
            return this.http.put("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_1__["ApiUrls"].CREATE_UPDATE_PASSWORD), payload);
          }
        }]);

        return UsersService;
      }(_core_services__WEBPACK_IMPORTED_MODULE_2__["BaseService"]);

      UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
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
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _shared_components_users_add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @shared/components/users/add-user-modal/add-user-modal.component */
      "./src/app/shared/components/users/add-user-modal/add-user-modal.component.ts");
      /* harmony import */


      var _shared_components_users_users_detail_modal_user_details_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @shared/components/users/users-detail-modal/user-details-modal.component */
      "./src/app/shared/components/users/users-detail-modal/user-details-modal.component.ts");
      /* harmony import */


      var _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @shared/components/users/users-list/users-list.component */
      "./src/app/shared/components/users/users-list/users-list.component.ts");
      /* harmony import */


      var _shared_pipes_datetime_utc_to_local_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @shared/pipes/datetime/utc-to-local.pipe */
      "./src/app/shared/pipes/datetime/utc-to-local.pipe.ts");
      /* harmony import */


      var ngx_quill__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ngx-quill */
      "./node_modules/ngx-quill/__ivy_ngcc__/fesm2015/ngx-quill.js");
      /* harmony import */


      var _actions_card_action_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./actions/card-action.component */
      "./src/app/shared/actions/card-action.component.ts");
      /* harmony import */


      var _admin_login_section_admin_login_section_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./admin-login-section/admin-login-section.component */
      "./src/app/shared/admin-login-section/admin-login-section.component.ts");
      /* harmony import */


      var _admin_navigation_bar_admin_navigation_bar_admin_navigation_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./admin-navigation-bar/admin-navigation-bar/admin-navigation-bar.component */
      "./src/app/shared/admin-navigation-bar/admin-navigation-bar/admin-navigation-bar.component.ts");
      /* harmony import */


      var _auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./auth-section/auth-section/auth-section.component */
      "./src/app/shared/auth-section/auth-section/auth-section.component.ts");
      /* harmony import */


      var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./confirm-dialog/confirm-dialog.component */
      "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
      /* harmony import */


      var _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./directives/has-access/has-access.directive */
      "./src/app/shared/directives/has-access/has-access.directive.ts");
      /* harmony import */


      var _directives_null_value_null_value_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./directives/null-value/null-value.directive */
      "./src/app/shared/directives/null-value/null-value.directive.ts");
      /* harmony import */


      var _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./directives/only-number/only-number.directive */
      "./src/app/shared/directives/only-number/only-number.directive.ts");
      /* harmony import */


      var _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./error-messages/components/error-message.component */
      "./src/app/shared/error-messages/components/error-message.component.ts");
      /* harmony import */


      var _error_pages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./error-pages */
      "./src/app/shared/error-pages/index.ts");
      /* harmony import */


      var _error_pages_components_access_forbidden_access_forbidden_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./error-pages/components/access-forbidden/access-forbidden.component */
      "./src/app/shared/error-pages/components/access-forbidden/access-forbidden.component.ts");
      /* harmony import */


      var _error_pages_components_internal_server_error__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./error-pages/components/internal-server-error */
      "./src/app/shared/error-pages/components/internal-server-error/index.ts");
      /* harmony import */


      var _error_pages_components_invalid_link_invalid_link_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./error-pages/components/invalid-link/invalid-link.component */
      "./src/app/shared/error-pages/components/invalid-link/invalid-link.component.ts");
      /* harmony import */


      var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./file-upload/file-upload.component */
      "./src/app/shared/file-upload/file-upload.component.ts");
      /* harmony import */


      var _form_form_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./form/form.component */
      "./src/app/shared/form/form.component.ts");
      /* harmony import */


      var _language_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./language-select */
      "./src/app/shared/language-select/index.ts");
      /* harmony import */


      var _list_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./list/list.component */
      "./src/app/shared/list/list.component.ts");
      /* harmony import */


      var _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./login-section/login-section.component */
      "./src/app/shared/login-section/login-section.component.ts");
      /* harmony import */


      var _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./module-header/module-header.component */
      "./src/app/shared/module-header/module-header.component.ts");
      /* harmony import */


      var _modules__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./modules */
      "./src/app/shared/modules/index.ts");
      /* harmony import */


      var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./navigation-bar/navigation-bar.component */
      "./src/app/shared/navigation-bar/navigation-bar.component.ts");
      /* harmony import */


      var _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./page-title/page-title.component */
      "./src/app/shared/page-title/page-title.component.ts");
      /* harmony import */


      var _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pipes/image-path/image-path.pipe */
      "./src/app/shared/pipes/image-path/image-path.pipe.ts");
      /* harmony import */


      var _property_owner_invitation_property_owner_invitation_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./property-owner-invitation/property-owner-invitation.component */
      "./src/app/shared/property-owner-invitation/property-owner-invitation.component.ts");
      /* harmony import */


      var _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./search-input/search-input.component */
      "./src/app/shared/search-input/search-input.component.ts");
      /* harmony import */


      var _store_effects_business_effects__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! ./store/effects/business.effects */
      "./src/app/shared/store/effects/business.effects.ts");
      /* harmony import */


      var _store_effects_invitations_effects__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./store/effects/invitations.effects */
      "./src/app/shared/store/effects/invitations.effects.ts");
      /* harmony import */


      var _store_effects_notifications_effects__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! ./store/effects/notifications.effects */
      "./src/app/shared/store/effects/notifications.effects.ts");
      /* harmony import */


      var _store_effects_users_effects__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
      /*! ./store/effects/users.effects */
      "./src/app/shared/store/effects/users.effects.ts");
      /* harmony import */


      var _store_reducers__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
      /*! ./store/reducers */
      "./src/app/shared/store/reducers/index.ts");
      /* harmony import */


      var _wizard_nav_wizard_nav_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
      /*! ./wizard-nav/wizard-nav.component */
      "./src/app/shared/wizard-nav/wizard-nav.component.ts");
      /* harmony import */


      var _wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
      /*! ./wizard-section/wizard-section.component */
      "./src/app/shared/wizard-section/wizard-section.component.ts");

      var modules = [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_34__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]];
      var components = [_error_pages__WEBPACK_IMPORTED_MODULE_24__["ErrorPagesComponent"], _error_pages__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _error_pages_components_internal_server_error__WEBPACK_IMPORTED_MODULE_26__["InternalServerErrorComponent"], _language_select__WEBPACK_IMPORTED_MODULE_30__["LanguageSelectComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"], _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_36__["PageTitleComponent"], _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__["HasAccessDirective"], _error_pages_components_access_forbidden_access_forbidden_component__WEBPACK_IMPORTED_MODULE_25__["AccessForbiddenComponent"], _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_33__["ModuleHeaderComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_29__["FormComponent"], _actions_card_action_component__WEBPACK_IMPORTED_MODULE_15__["CardActionComponent"], _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"], _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_39__["SearchInputComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_28__["FileUploadComponent"], _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_37__["ImagePathPipe"], _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__["HasAccessDirective"], _directives_null_value_null_value_directive__WEBPACK_IMPORTED_MODULE_21__["NullValueDirective"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_22__["OnlyNumberDirective"], _shared_components_users_add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_10__["AddUserModalComponent"], _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"], _shared_components_users_users_detail_modal_user_details_modal_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsModalComponent"], _shared_pipes_datetime_utc_to_local_pipe__WEBPACK_IMPORTED_MODULE_13__["UtcToLocalPipe"], _auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_18__["AuthSectionComponent"], _wizard_nav_wizard_nav_component__WEBPACK_IMPORTED_MODULE_45__["WizardNavComponent"], _property_owner_invitation_property_owner_invitation_component__WEBPACK_IMPORTED_MODULE_38__["PropertyOwnerInvitationComponent"], _wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_46__["WizardSectionComponent"], _error_pages_components_invalid_link_invalid_link_component__WEBPACK_IMPORTED_MODULE_27__["InvalidLinkComponent"], _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_32__["LoginSectionComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavigationBarComponent"], _admin_login_section_admin_login_section_component__WEBPACK_IMPORTED_MODULE_16__["AdminLoginSectionComponent"], _admin_navigation_bar_admin_navigation_bar_admin_navigation_bar_component__WEBPACK_IMPORTED_MODULE_17__["AdminNavigationBarComponent"]];
      var entryComponents = [_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"]];

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[].concat(modules, [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({}), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature("sharedModule", _store_reducers__WEBPACK_IMPORTED_MODULE_44__["sharedReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_effects_business_effects__WEBPACK_IMPORTED_MODULE_40__["BusinessEffects"], _store_effects_users_effects__WEBPACK_IMPORTED_MODULE_43__["UsersEffects"], _store_effects_notifications_effects__WEBPACK_IMPORTED_MODULE_42__["NotificationsEffects"], _store_effects_invitations_effects__WEBPACK_IMPORTED_MODULE_41__["InvitationsEffects"]]), ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"].forRoot({
          modules: {
            syntax: false,
            toolbar: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].quillToolbars
          }
        })]), _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_34__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_error_pages__WEBPACK_IMPORTED_MODULE_24__["ErrorPagesComponent"], _error_pages__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _error_pages_components_internal_server_error__WEBPACK_IMPORTED_MODULE_26__["InternalServerErrorComponent"], _language_select__WEBPACK_IMPORTED_MODULE_30__["LanguageSelectComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"], _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_36__["PageTitleComponent"], _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__["HasAccessDirective"], _error_pages_components_access_forbidden_access_forbidden_component__WEBPACK_IMPORTED_MODULE_25__["AccessForbiddenComponent"], _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_33__["ModuleHeaderComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_29__["FormComponent"], _actions_card_action_component__WEBPACK_IMPORTED_MODULE_15__["CardActionComponent"], _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"], _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_39__["SearchInputComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_28__["FileUploadComponent"], _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_37__["ImagePathPipe"], _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__["HasAccessDirective"], _directives_null_value_null_value_directive__WEBPACK_IMPORTED_MODULE_21__["NullValueDirective"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_22__["OnlyNumberDirective"], _shared_components_users_add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_10__["AddUserModalComponent"], _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"], _shared_components_users_users_detail_modal_user_details_modal_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsModalComponent"], _shared_pipes_datetime_utc_to_local_pipe__WEBPACK_IMPORTED_MODULE_13__["UtcToLocalPipe"], _auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_18__["AuthSectionComponent"], _wizard_nav_wizard_nav_component__WEBPACK_IMPORTED_MODULE_45__["WizardNavComponent"], _property_owner_invitation_property_owner_invitation_component__WEBPACK_IMPORTED_MODULE_38__["PropertyOwnerInvitationComponent"], _wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_46__["WizardSectionComponent"], _error_pages_components_invalid_link_invalid_link_component__WEBPACK_IMPORTED_MODULE_27__["InvalidLinkComponent"], _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_32__["LoginSectionComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavigationBarComponent"], _admin_login_section_admin_login_section_component__WEBPACK_IMPORTED_MODULE_16__["AdminLoginSectionComponent"], _admin_navigation_bar_admin_navigation_bar_admin_navigation_bar_component__WEBPACK_IMPORTED_MODULE_17__["AdminNavigationBarComponent"], _admin_login_section_admin_login_section_component__WEBPACK_IMPORTED_MODULE_16__["AdminLoginSectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_34__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsFeatureModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"]],
          exports: [_error_pages__WEBPACK_IMPORTED_MODULE_24__["ErrorPagesComponent"], _error_pages__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _error_pages_components_internal_server_error__WEBPACK_IMPORTED_MODULE_26__["InternalServerErrorComponent"], _language_select__WEBPACK_IMPORTED_MODULE_30__["LanguageSelectComponent"], _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmDialogComponent"], _page_title_page_title_component__WEBPACK_IMPORTED_MODULE_36__["PageTitleComponent"], _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__["HasAccessDirective"], _error_pages_components_access_forbidden_access_forbidden_component__WEBPACK_IMPORTED_MODULE_25__["AccessForbiddenComponent"], _module_header_module_header_component__WEBPACK_IMPORTED_MODULE_33__["ModuleHeaderComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_29__["FormComponent"], _actions_card_action_component__WEBPACK_IMPORTED_MODULE_15__["CardActionComponent"], _error_messages_components_error_message_component__WEBPACK_IMPORTED_MODULE_23__["ErrorMessageComponent"], _search_input_search_input_component__WEBPACK_IMPORTED_MODULE_39__["SearchInputComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_31__["ListComponent"], _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_28__["FileUploadComponent"], _pipes_image_path_image_path_pipe__WEBPACK_IMPORTED_MODULE_37__["ImagePathPipe"], _directives_has_access_has_access_directive__WEBPACK_IMPORTED_MODULE_20__["HasAccessDirective"], _directives_null_value_null_value_directive__WEBPACK_IMPORTED_MODULE_21__["NullValueDirective"], _directives_only_number_only_number_directive__WEBPACK_IMPORTED_MODULE_22__["OnlyNumberDirective"], _shared_components_users_add_user_modal_add_user_modal_component__WEBPACK_IMPORTED_MODULE_10__["AddUserModalComponent"], _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_12__["UsersListComponent"], _shared_components_users_users_detail_modal_user_details_modal_component__WEBPACK_IMPORTED_MODULE_11__["UserDetailsModalComponent"], _shared_pipes_datetime_utc_to_local_pipe__WEBPACK_IMPORTED_MODULE_13__["UtcToLocalPipe"], _auth_section_auth_section_auth_section_component__WEBPACK_IMPORTED_MODULE_18__["AuthSectionComponent"], _wizard_nav_wizard_nav_component__WEBPACK_IMPORTED_MODULE_45__["WizardNavComponent"], _property_owner_invitation_property_owner_invitation_component__WEBPACK_IMPORTED_MODULE_38__["PropertyOwnerInvitationComponent"], _wizard_section_wizard_section_component__WEBPACK_IMPORTED_MODULE_46__["WizardSectionComponent"], _error_pages_components_invalid_link_invalid_link_component__WEBPACK_IMPORTED_MODULE_27__["InvalidLinkComponent"], _login_section_login_section_component__WEBPACK_IMPORTED_MODULE_32__["LoginSectionComponent"], _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_35__["NavigationBarComponent"], _admin_login_section_admin_login_section_component__WEBPACK_IMPORTED_MODULE_16__["AdminLoginSectionComponent"], _admin_navigation_bar_admin_navigation_bar_admin_navigation_bar_component__WEBPACK_IMPORTED_MODULE_17__["AdminNavigationBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _modules__WEBPACK_IMPORTED_MODULE_34__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [].concat(components, [_admin_login_section_admin_login_section_component__WEBPACK_IMPORTED_MODULE_16__["AdminLoginSectionComponent"]]),
            entryComponents: [].concat(entryComponents),
            imports: [].concat(modules, [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({}), _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature("sharedModule", _store_reducers__WEBPACK_IMPORTED_MODULE_44__["sharedReducers"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_effects_business_effects__WEBPACK_IMPORTED_MODULE_40__["BusinessEffects"], _store_effects_users_effects__WEBPACK_IMPORTED_MODULE_43__["UsersEffects"], _store_effects_notifications_effects__WEBPACK_IMPORTED_MODULE_42__["NotificationsEffects"], _store_effects_invitations_effects__WEBPACK_IMPORTED_MODULE_41__["InvitationsEffects"]]), ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"].forRoot({
              modules: {
                syntax: false,
                toolbar: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].quillToolbars
              }
            })]),
            exports: [].concat(components, modules, [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"], ngx_quill__WEBPACK_IMPORTED_MODULE_14__["QuillModule"]])
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/store/actions/business.actions.ts":
    /*!**********************************************************!*\
      !*** ./src/app/shared/store/actions/business.actions.ts ***!
      \**********************************************************/

    /*! exports provided: setParameters, loadBusinesses, loadBusinessesSuccess, loadBusinessesFailure, getBusiness, getBusinessSuccess, getBusinessesFailure, getBusinessTypes, getBusinessTypesSuccess, getBusinessesTypesFailure, saveBusiness, saveBusinessSuccess, saveBusinessesFailure, updateBusiness, updateBusinessSuccess, updateBusinessesFailure, deleteBusiness, deleteBusinessSuccess, deleteBusinessesFailure, createUserForBusiness, createUserForBusinessSuccess, createUserForBusinessFailure */

    /***/
    function srcAppSharedStoreActionsBusinessActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setParameters", function () {
        return setParameters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBusinesses", function () {
        return loadBusinesses;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBusinessesSuccess", function () {
        return loadBusinessesSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadBusinessesFailure", function () {
        return loadBusinessesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBusiness", function () {
        return getBusiness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBusinessSuccess", function () {
        return getBusinessSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBusinessesFailure", function () {
        return getBusinessesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBusinessTypes", function () {
        return getBusinessTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBusinessTypesSuccess", function () {
        return getBusinessTypesSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getBusinessesTypesFailure", function () {
        return getBusinessesTypesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saveBusiness", function () {
        return saveBusiness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saveBusinessSuccess", function () {
        return saveBusinessSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "saveBusinessesFailure", function () {
        return saveBusinessesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBusiness", function () {
        return updateBusiness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBusinessSuccess", function () {
        return updateBusinessSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateBusinessesFailure", function () {
        return updateBusinessesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBusiness", function () {
        return deleteBusiness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBusinessSuccess", function () {
        return deleteBusinessSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteBusinessesFailure", function () {
        return deleteBusinessesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUserForBusiness", function () {
        return createUserForBusiness;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUserForBusinessSuccess", function () {
        return createUserForBusinessSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUserForBusinessFailure", function () {
        return createUserForBusinessFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var setParameters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Set Filter", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadBusinesses = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Load Businesses", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadBusinessesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Load Businesses Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadBusinessesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Load Businesses Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getBusiness = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Get Business", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getBusinessSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Get Businesses Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getBusinessesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Get Businesses Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getBusinessTypes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Get Business Types", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getBusinessTypesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Get Businesses Types Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getBusinessesTypesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Get Businesses Types Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var saveBusiness = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Save Business", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var saveBusinessSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Save Businesses Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var saveBusinessesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Save Businesses Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBusiness = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Update Business", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBusinessSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Update Businesses Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateBusinessesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Update Businesses Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteBusiness = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Delete Business", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteBusinessSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Delete Businesses Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteBusinessesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Businesses] Delete Businesses Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createUserForBusiness = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Business] Create new User for business", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createUserForBusinessSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Business] Create User for business Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createUserForBusinessFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Business] Create User for business Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/shared/store/actions/invitations.actions.ts":
    /*!*************************************************************!*\
      !*** ./src/app/shared/store/actions/invitations.actions.ts ***!
      \*************************************************************/

    /*! exports provided: invitePropertyOwner, invitePropertyOwnerSuccess, invitePropertyOwnerFailure */

    /***/
    function srcAppSharedStoreActionsInvitationsActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "invitePropertyOwner", function () {
        return invitePropertyOwner;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "invitePropertyOwnerSuccess", function () {
        return invitePropertyOwnerSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "invitePropertyOwnerFailure", function () {
        return invitePropertyOwnerFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var invitePropertyOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[INVITATIONS] Invite Property Owner", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var invitePropertyOwnerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[INVITATIONS] Invite Property Owner Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var invitePropertyOwnerFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[INVITATIONS] Invite Property Owner Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/shared/store/actions/notifications.actions.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/store/actions/notifications.actions.ts ***!
      \***************************************************************/

    /*! exports provided: setParameters, loadNotifications, loadNotificationsSuccess, loadNotificationsFailure, loadNotificationCount, loadNotificationCountSuccess, loadNotificationCountFailure, markAsRead, markAsReadSuccess, markAsReadFailure */

    /***/
    function srcAppSharedStoreActionsNotificationsActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setParameters", function () {
        return setParameters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadNotifications", function () {
        return loadNotifications;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadNotificationsSuccess", function () {
        return loadNotificationsSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadNotificationsFailure", function () {
        return loadNotificationsFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadNotificationCount", function () {
        return loadNotificationCount;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadNotificationCountSuccess", function () {
        return loadNotificationCountSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadNotificationCountFailure", function () {
        return loadNotificationCountFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "markAsRead", function () {
        return markAsRead;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "markAsReadSuccess", function () {
        return markAsReadSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "markAsReadFailure", function () {
        return markAsReadFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var setParameters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Set Filter", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadNotifications = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Load Notifications", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadNotificationsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Load Notifications Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadNotificationsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Load Notifications Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadNotificationCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Load Notification Count", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadNotificationCountSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Load Notification Count Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadNotificationCountFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Load Notification Count Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var markAsRead = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Mark As Read", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var markAsReadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Mark As Read Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var markAsReadFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Notifications] Mark As Read Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/shared/store/actions/users.actions.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/store/actions/users.actions.ts ***!
      \*******************************************************/

    /*! exports provided: setFilterParameters, loadUsers, loadUsersSuccess, loadUsersFailure, getUserById, getUserByIdSuccess, getUserByIdFailure, getUserTypes, getUserTypesSuccess, getUsersTypesFailure, createNewUser, createNewUserSuccess, createNewUsersFailure, updateUser, updateUserSuccess, updateUserFailure, deleteUser, deleteUserSuccess, deleteUserFailure, setCurrentUser, updateProfile, updateProfileSuccess, updateProfileFailure, getAllRoles, getAllRolesSuccess, getAllRolesFailure, createUpdatePassword, createUpdatePasswordSuccess, createUpdatePasswordFailure */

    /***/
    function srcAppSharedStoreActionsUsersActionsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setFilterParameters", function () {
        return setFilterParameters;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadUsers", function () {
        return loadUsers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadUsersSuccess", function () {
        return loadUsersSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "loadUsersFailure", function () {
        return loadUsersFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUserById", function () {
        return getUserById;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUserByIdSuccess", function () {
        return getUserByIdSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUserByIdFailure", function () {
        return getUserByIdFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUserTypes", function () {
        return getUserTypes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUserTypesSuccess", function () {
        return getUserTypesSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getUsersTypesFailure", function () {
        return getUsersTypesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createNewUser", function () {
        return createNewUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createNewUserSuccess", function () {
        return createNewUserSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createNewUsersFailure", function () {
        return createNewUsersFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateUser", function () {
        return updateUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateUserSuccess", function () {
        return updateUserSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateUserFailure", function () {
        return updateUserFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteUser", function () {
        return deleteUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteUserSuccess", function () {
        return deleteUserSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "deleteUserFailure", function () {
        return deleteUserFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "setCurrentUser", function () {
        return setCurrentUser;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateProfile", function () {
        return updateProfile;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateProfileSuccess", function () {
        return updateProfileSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "updateProfileFailure", function () {
        return updateProfileFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllRoles", function () {
        return getAllRoles;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllRolesSuccess", function () {
        return getAllRolesSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getAllRolesFailure", function () {
        return getAllRolesFailure;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUpdatePassword", function () {
        return createUpdatePassword;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUpdatePasswordSuccess", function () {
        return createUpdatePasswordSuccess;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "createUpdatePasswordFailure", function () {
        return createUpdatePasswordFailure;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var setFilterParameters = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Set Filter parameters", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Load Users", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Load Users Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var loadUsersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Load Users Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getUserById = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get User by id.", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getUserByIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get Users Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getUserByIdFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get Users Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getUserTypes = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get User Types", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getUserTypesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get Users Types Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getUsersTypesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get Users Types Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createNewUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Create new User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createNewUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Create User Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createNewUsersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Save Users Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Update User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Update Users Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Update Users Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Delete User", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Delete Users Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var deleteUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Delete Users Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var setCurrentUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Set current logged in user", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Update Profile Of the user", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[User] Update profile success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var updateProfileFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[User Profile] Update profile failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getAllRoles = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get all roles", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getAllRolesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get all roles Success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var getAllRolesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Get all roles Failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createUpdatePassword = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Create or update password Of the user", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createUpdatePasswordSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Create or update password success", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      var createUpdatePasswordFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])("[Users] Create or update password failure", Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
      /***/
    },

    /***/
    "./src/app/shared/store/effects/business.effects.ts":
    /*!**********************************************************!*\
      !*** ./src/app/shared/store/effects/business.effects.ts ***!
      \**********************************************************/

    /*! exports provided: BusinessEffects */

    /***/
    function srcAppSharedStoreEffectsBusinessEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BusinessEffects", function () {
        return BusinessEffects;
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


      var _core_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @core/store/actions/global.actions */
      "./src/app/core/store/actions/global.actions.ts");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../actions/business.actions */
      "./src/app/shared/store/actions/business.actions.ts");
      /* harmony import */


      var _shared_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @shared/services */
      "./src/app/shared/services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var BusinessEffects = function BusinessEffects(actions$, businessService, router, snackBar, translate, userService, store) {
        var _this27 = this;

        _classCallCheck(this, BusinessEffects);

        this.actions$ = actions$;
        this.businessService = businessService;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.userService = userService;
        this.store = store;
        this.loadBusinesses$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["loadBusinesses"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.businessService.getBusinessList(action.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["loadBusinessesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["loadBusinessesFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.getBusiness$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["getBusiness"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.businessService.getBusinessDetail(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["getBusinessSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["getBusinessesFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.getBusinessTypes$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["getBusinessTypes"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.businessService.getBusinessTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["getBusinessTypesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["getBusinessesTypesFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.saveBusiness$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["saveBusiness"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.businessService.saveBusiness(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["saveBusinessSuccess"](response.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["saveBusinessesFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.updateBusiness$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["updateBusiness"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.businessService.updateBusiness(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["updateBusinessSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["updateBusinessesFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.deleteBusiness$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["deleteBusiness"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.businessService.deleteBusiness(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["deleteBusinessSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["deleteBusinessesFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.saveBusinessSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["saveBusinessSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (business) {
          _this27.store.dispatch(Object(_core_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_3__["setGlobals"])({
            globals: {
              business: business
            }
          }));

          _this27.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].BUSINESS);

          _this27.snackBar.open(_this27.translate.instant("business_add_success"));
        }));
        this.updateBusinessSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["updateBusinessSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (businessData) {
          _this27.store.dispatch(Object(_core_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_3__["setGlobals"])({
            globals: {
              business: businessData.data
            }
          }));

          _this27.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].BUSINESS);

          _this27.snackBar.open(_this27.translate.instant("business_update_success"));
        }));
        this.deleteBusinessSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["deleteBusinessSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (_ref7) {
          var payload = _ref7.payload;

          _this27.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].BUSINESS);

          _this27.store.dispatch(Object(_core_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_3__["setGlobals"])({
            globals: {
              business: null
            }
          }));

          _this27.store.dispatch(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["loadBusinesses"](null));

          _this27.snackBar.open(_this27.translate.instant("business_delete_success"));
        }));
        this.setParam = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["setParameters"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
          _this27.store.dispatch(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["loadBusinesses"]({
            params: res.params
          }));
        }));
        /**
         * Create new user for business.
         */

        this.createUserForBusiness$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
          return _this27.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["createUserForBusiness"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["exhaustMap"])(function (action) {
            return _this27.userService.createNewUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (response) {
              return _actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["createUserForBusinessSuccess"](response.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["createUserForBusinessFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.createUserForBusinessSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_7__["createUserForBusinessSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) {
          _this27.snackBar.open(_this27.translate.instant("mod_user.add_success"));
        }));
      };

      BusinessEffects.ɵfac = function BusinessEffects_Factory(t) {
        return new (t || BusinessEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_8__["BusinessService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_10__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services__WEBPACK_IMPORTED_MODULE_8__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__["Store"]));
      };

      BusinessEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BusinessEffects,
        factory: BusinessEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      })], BusinessEffects.prototype, "saveBusinessSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      })], BusinessEffects.prototype, "updateBusinessSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      })], BusinessEffects.prototype, "deleteBusinessSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      })], BusinessEffects.prototype, "setParam", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({
        dispatch: false
      })], BusinessEffects.prototype, "createUserForBusinessSuccess$", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BusinessEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["BusinessService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_10__["SnackBarService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
          }, {
            type: _shared_services__WEBPACK_IMPORTED_MODULE_8__["UsersService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["Store"]
          }];
        }, {
          saveBusinessSuccess: [],
          updateBusinessSuccess: [],
          deleteBusinessSuccess: [],
          setParam: [],
          createUserForBusinessSuccess$: []
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/store/effects/invitations.effects.ts":
    /*!*************************************************************!*\
      !*** ./src/app/shared/store/effects/invitations.effects.ts ***!
      \*************************************************************/

    /*! exports provided: InvitationsEffects */

    /***/
    function srcAppSharedStoreEffectsInvitationsEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvitationsEffects", function () {
        return InvitationsEffects;
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


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _actions_invitations_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../actions/invitations.actions */
      "./src/app/shared/store/actions/invitations.actions.ts");
      /* harmony import */


      var _services_property_owner_invitation_property_owner_invitation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/property-owner-invitation/property-owner-invitation.service */
      "./src/app/shared/services/property-owner-invitation/property-owner-invitation.service.ts");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var InvitationsEffects = function InvitationsEffects(actions$, propertyOwnerInvitationService, snackBar, translate, router) {
        var _this28 = this;

        _classCallCheck(this, InvitationsEffects);

        this.actions$ = actions$;
        this.propertyOwnerInvitationService = propertyOwnerInvitationService;
        this.snackBar = snackBar;
        this.translate = translate;
        this.router = router;
        this.invitePropertyOwner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
          return _this28.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_invitations_actions__WEBPACK_IMPORTED_MODULE_5__["invitePropertyOwner"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
            return _this28.propertyOwnerInvitationService.invitePropertyOwner(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
              return _actions_invitations_actions__WEBPACK_IMPORTED_MODULE_5__["invitePropertyOwnerSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_invitations_actions__WEBPACK_IMPORTED_MODULE_5__["invitePropertyOwnerFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.invitePropertyOwnerSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_invitations_actions__WEBPACK_IMPORTED_MODULE_5__["invitePropertyOwnerSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (invitation) {
          _this28.snackBar.open(_this28.translate.instant("invitation_sent_success"));
        }));
      };

      InvitationsEffects.ɵfac = function InvitationsEffects_Factory(t) {
        return new (t || InvitationsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_property_owner_invitation_property_owner_invitation_service__WEBPACK_IMPORTED_MODULE_6__["PropertyOwnerInvitationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]));
      };

      InvitationsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: InvitationsEffects,
        factory: InvitationsEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({
        dispatch: false
      })], InvitationsEffects.prototype, "invitePropertyOwnerSuccess", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvitationsEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]
          }, {
            type: _services_property_owner_invitation_property_owner_invitation_service__WEBPACK_IMPORTED_MODULE_6__["PropertyOwnerInvitationService"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_7__["SnackBarService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
          }];
        }, {
          invitePropertyOwnerSuccess: []
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/store/effects/notifications.effects.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/store/effects/notifications.effects.ts ***!
      \***************************************************************/

    /*! exports provided: NotificationsEffects */

    /***/
    function srcAppSharedStoreEffectsNotificationsEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationsEffects", function () {
        return NotificationsEffects;
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


      var _actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../actions/notifications.actions */
      "./src/app/shared/store/actions/notifications.actions.ts");
      /* harmony import */


      var _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./../../services/notifications/notifications.service */
      "./src/app/shared/services/notifications/notifications.service.ts");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");

      var NotificationsEffects = function NotificationsEffects(actions$, notificationsService, store, storage) {
        var _this29 = this;

        _classCallCheck(this, NotificationsEffects);

        this.actions$ = actions$;
        this.notificationsService = notificationsService;
        this.store = store;
        this.storage = storage;
        /**
         * Fetch all the notifications.
         */

        this.loadnotifications$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this29.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotifications"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this29.notificationsService.getNotificationsList(action.id, action.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotificationsSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotificationsFailure"]({
                error: error
              }));
            }));
          }));
        });
        /**
         * Fetch notification count.
         */

        this.loadnotificationCount$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this29.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotificationCount"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this29.notificationsService.getNotificationCount(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotificationCountSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotificationCountFailure"]({
                error: error
              }));
            }));
          }));
        });
        /**
         * Mark one/all notification as read
         */

        this.markAsRead$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this29.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["markAsRead"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this29.notificationsService.markAsRead(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["markAsReadSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["markAsReadFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.markAsReadSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["markAsReadSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
          var userId = _this29.storage.get(_core_enums__WEBPACK_IMPORTED_MODULE_2__["StorageKeys"].USER).id;

          _this29.store.dispatch(Object(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotificationCount"])({
            id: userId
          }));

          _this29.store.dispatch(Object(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_6__["loadNotifications"])({
            id: userId,
            params: null
          }));
        }));
      };

      NotificationsEffects.ɵfac = function NotificationsEffects_Factory(t) {
        return new (t || NotificationsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_9__["StorageService"]));
      };

      NotificationsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: NotificationsEffects,
        factory: NotificationsEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], NotificationsEffects.prototype, "markAsReadSuccess", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotificationsEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _services_notifications_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_9__["StorageService"]
          }];
        }, {
          markAsReadSuccess: []
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/store/effects/users.effects.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/store/effects/users.effects.ts ***!
      \*******************************************************/

    /*! exports provided: UsersEffects */

    /***/
    function srcAppSharedStoreEffectsUsersEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersEffects", function () {
        return UsersEffects;
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


      var _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../actions/users.actions */
      "./src/app/shared/store/actions/users.actions.ts");
      /* harmony import */


      var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services */
      "./src/app/shared/services/index.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _core_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @core/services */
      "./src/app/core/services/index.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

      var UsersEffects = function UsersEffects(actions$, service, router, snackBar, translate, store, authService) {
        var _this30 = this;

        _classCallCheck(this, UsersEffects);

        this.actions$ = actions$;
        this.service = service;
        this.router = router;
        this.snackBar = snackBar;
        this.translate = translate;
        this.store = store;
        this.authService = authService;
        /**
         * Fetch all the users.
         */

        this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsers"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.getUsersList(action.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsersSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsersFailure"]({
                error: error
              }));
            }));
          }));
        });
        /**
         * Fetch user details by provided user id.
         */

        this.getUserById$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["getUserById"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.getUserById(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["getUserByIdSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["getUserByIdFailure"]({
                error: error
              }));
            }));
          }));
        });
        /**
         * Create new user.
         */

        this.createUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createNewUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.createNewUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createNewUserSuccess"](response.data);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createNewUsersFailure"]({
                error: error
              }));
            }));
          }));
        });
        /**
         * Update the user details.
         */

        this.updateUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.updateUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUserSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUserFailure"]({
                error: error
              }));
            }));
          }));
        });
        /**
         * Delete the user.
         */

        this.deleteUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.deleteUser(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUserSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUserFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.createNewUserSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createNewUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
          _this30.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].USERS);

          _this30.snackBar.open(_this30.translate.instant("user_add_success"));
        }));
        this.updateUserSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (userData) {
          _this30.router.navigateByUrl("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].USERS, "/").concat(userData.data.id));

          _this30.snackBar.open(_this30.translate.instant("user_update_success"));
        }));
        this.deleteUserSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["deleteUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref8) {
          var payload = _ref8.payload;

          _this30.router.navigateByUrl(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].USERS);

          _this30.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsers"](null));

          _this30.snackBar.open(_this30.translate.instant("user_delete_success"));
        }));
        this.setFilterParameters = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["setFilterParameters"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
          _this30.store.dispatch(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["loadUsers"]({
            params: res.params
          }));
        }));
        this.updateUserProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.updateUser(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateProfileSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateProfileFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.createUpdatePassword$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createUpdatePassword"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.createUpdatePassword(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createUpdatePasswordSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["createUpdatePasswordFailure"]({
                error: error
              }));
            }));
          }));
        });
        this.updateProfileSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["updateProfileSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_ref9) {
          var data = _ref9.data;

          _this30.authService.setUserToStorage(data);

          _this30.router.navigateByUrl("".concat(_core_enums__WEBPACK_IMPORTED_MODULE_2__["AppRoutes"].PROFILE_PAGE));

          _this30.snackBar.open(_this30.translate.instant("mod_profile.update_profile_success"));
        }));
        /**
         * Fetch all the users.
         */

        this.getAllRoles$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () {
          return _this30.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["getAllRoles"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (action) {
            return _this30.service.getUsersList(action.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
              return _actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["getAllRolesSuccess"](response);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_6__["getAllRolesFailure"]({
                error: error
              }));
            }));
          }));
        });
      };

      UsersEffects.ɵfac = function UsersEffects_Factory(t) {
        return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_9__["AuthService"]));
      };

      UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: UsersEffects,
        factory: UsersEffects.ɵfac
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], UsersEffects.prototype, "createNewUserSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], UsersEffects.prototype, "updateUserSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], UsersEffects.prototype, "deleteUserSuccess", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], UsersEffects.prototype, "setFilterParameters", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({
        dispatch: false
      })], UsersEffects.prototype, "updateProfileSuccess", void 0);
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]
          }, {
            type: _services__WEBPACK_IMPORTED_MODULE_7__["UsersService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_9__["SnackBarService"]
          }, {
            type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
          }, {
            type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"]
          }, {
            type: _core_services__WEBPACK_IMPORTED_MODULE_9__["AuthService"]
          }];
        }, {
          createNewUserSuccess: [],
          updateUserSuccess: [],
          deleteUserSuccess: [],
          setFilterParameters: [],
          updateProfileSuccess: []
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/store/reducers/business.reducer.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/store/reducers/business.reducer.ts ***!
      \***********************************************************/

    /*! exports provided: businessFeatureKey, initialBusinessState, businessReducer */

    /***/
    function srcAppSharedStoreReducersBusinessReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "businessFeatureKey", function () {
        return businessFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialBusinessState", function () {
        return initialBusinessState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "businessReducer", function () {
        return businessReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _actions_business_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/business.actions */
      "./src/app/shared/store/actions/business.actions.ts");

      var businessFeatureKey = "business";
      var initialBusinessState = {
        list: [],
        businessTypes: [],
        pagination: null,
        loading: false,
        message: "",
        detail: null,
        parameters: null,
        error: null
      };
      var businessReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialBusinessState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["setParameters"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          parameters: action.params
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["loadBusinesses"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["loadBusinessesSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          list: action.data,
          pagination: action.pagination,
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["loadBusinessesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["getBusiness"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["getBusinessSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          detail: action.data,
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["getBusinessesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["getBusinessTypes"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["getBusinessTypesSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          businessTypes: action.data,
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["getBusinessesTypesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["saveBusiness"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["saveBusinessSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["saveBusinessesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          error: action.error
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["updateBusiness"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["updateBusinessSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["updateBusinessesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["deleteBusiness"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["deleteBusinessSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["deleteBusinessesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["createUserForBusiness"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["createUserForBusinessSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_business_actions__WEBPACK_IMPORTED_MODULE_1__["createUserForBusinessFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message,
          error: action.error
        });
      }));
      /***/
    },

    /***/
    "./src/app/shared/store/reducers/index.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/store/reducers/index.ts ***!
      \************************************************/

    /*! exports provided: sharedReducers, selectSharedModuleState */

    /***/
    function srcAppSharedStoreReducersIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sharedReducers", function () {
        return sharedReducers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "selectSharedModuleState", function () {
        return selectSharedModuleState;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _business_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./business.reducer */
      "./src/app/shared/store/reducers/business.reducer.ts");
      /* harmony import */


      var _invitations_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invitations.reducers */
      "./src/app/shared/store/reducers/invitations.reducers.ts");
      /* harmony import */


      var _notifications_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notifications.reducer */
      "./src/app/shared/store/reducers/notifications.reducer.ts");
      /* harmony import */


      var _users_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./users.reducer */
      "./src/app/shared/store/reducers/users.reducer.ts");

      var sharedReducers = {
        business: _business_reducer__WEBPACK_IMPORTED_MODULE_1__["businessReducer"],
        users: _users_reducer__WEBPACK_IMPORTED_MODULE_4__["usersReducer"],
        notifications: _notifications_reducer__WEBPACK_IMPORTED_MODULE_3__["notificationsReducer"],
        invitations: _invitations_reducers__WEBPACK_IMPORTED_MODULE_2__["invitationsReducer"]
      };
      var selectSharedModuleState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])("sharedModule");
      /***/
    },

    /***/
    "./src/app/shared/store/reducers/invitations.reducers.ts":
    /*!***************************************************************!*\
      !*** ./src/app/shared/store/reducers/invitations.reducers.ts ***!
      \***************************************************************/

    /*! exports provided: invitationsFeatureKey, initialInvitationsState, invitationsReducer */

    /***/
    function srcAppSharedStoreReducersInvitationsReducersTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "invitationsFeatureKey", function () {
        return invitationsFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialInvitationsState", function () {
        return initialInvitationsState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "invitationsReducer", function () {
        return invitationsReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _actions_invitations_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/invitations.actions */
      "./src/app/shared/store/actions/invitations.actions.ts");

      var invitationsFeatureKey = "invitations";
      var initialInvitationsState = {
        list: [],
        loading: false,
        message: "",
        error: []
      };
      var invitationsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialInvitationsState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_invitations_actions__WEBPACK_IMPORTED_MODULE_1__["invitePropertyOwner"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_invitations_actions__WEBPACK_IMPORTED_MODULE_1__["invitePropertyOwnerSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_invitations_actions__WEBPACK_IMPORTED_MODULE_1__["invitePropertyOwnerFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          error: action.error.error
        });
      }));
      /***/
    },

    /***/
    "./src/app/shared/store/reducers/notifications.reducer.ts":
    /*!****************************************************************!*\
      !*** ./src/app/shared/store/reducers/notifications.reducer.ts ***!
      \****************************************************************/

    /*! exports provided: notificationFeatureKey, initialNotificationsState, notificationsReducer */

    /***/
    function srcAppSharedStoreReducersNotificationsReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notificationFeatureKey", function () {
        return notificationFeatureKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialNotificationsState", function () {
        return initialNotificationsState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "notificationsReducer", function () {
        return notificationsReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../actions/notifications.actions */
      "./src/app/shared/store/actions/notifications.actions.ts");

      var notificationFeatureKey = "notification";
      var initialNotificationsState = {
        list: [],
        pagination: null,
        loading: false,
        message: "",
        parameters: null,
        error: null,
        count: null
      };
      var notificationsReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialNotificationsState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["setParameters"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          parameters: action.params
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["loadNotifications"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["loadNotificationsSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          list: action.data,
          pagination: action.pagination,
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["loadNotificationsFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["loadNotificationCount"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["loadNotificationCountSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          count: action.data.count,
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["loadNotificationCountFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["markAsRead"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["markAsReadSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          message: action.message,
          loading: false
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_notifications_actions__WEBPACK_IMPORTED_MODULE_1__["markAsReadFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false
        });
      }));
      /***/
    },

    /***/
    "./src/app/shared/store/reducers/users.reducer.ts":
    /*!********************************************************!*\
      !*** ./src/app/shared/store/reducers/users.reducer.ts ***!
      \********************************************************/

    /*! exports provided: initialUsersState, usersKey, usersReducer */

    /***/
    function srcAppSharedStoreReducersUsersReducerTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "initialUsersState", function () {
        return initialUsersState;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "usersKey", function () {
        return usersKey;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "usersReducer", function () {
        return usersReducer;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _core_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../core/enums */
      "./src/app/core/enums/index.ts");
      /* harmony import */


      var _actions_users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../actions/users.actions */
      "./src/app/shared/store/actions/users.actions.ts");

      var initialUsersState = {
        list: [],
        pagination: null,
        loading: false,
        message: "",
        detail: null,
        currentUser: null,
        filterParams: {
          search: String(_core_enums__WEBPACK_IMPORTED_MODULE_1__["General"].DEFAULT_SEARCH),
          page: Number(_core_enums__WEBPACK_IMPORTED_MODULE_1__["General"].DEFAULT_PAGE),
          size: Number(_core_enums__WEBPACK_IMPORTED_MODULE_1__["General"].PAGINATE_SMALL)
        },
        error: null,
        roles: []
      };
      var usersKey = "users";
      var usersReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialUsersState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["setFilterParameters"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          filterParams: action.params
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUsers"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUsersSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          list: action.data,
          pagination: action.pagination,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["loadUsersFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["getUserById"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["getUserByIdSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          detail: action.data,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["getUserByIdFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["createNewUser"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["createNewUserSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["createNewUsersFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message,
          error: action.error
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateUserSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateUserFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message,
          error: action.error
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUser"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUserSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["deleteUserFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateProfile"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateProfileSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["updateProfileFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          error: action.error,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["getAllRoles"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["getAllRolesSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          roles: action.data,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["getAllRolesFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["createUpdatePassword"], function (state) {
        return Object.assign(Object.assign({}, state), {
          loading: true
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["createUpdatePasswordSuccess"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          message: action.message
        });
      }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_users_actions__WEBPACK_IMPORTED_MODULE_2__["createUpdatePasswordFailure"], function (state, action) {
        return Object.assign(Object.assign({}, state), {
          loading: false,
          error: action.error,
          message: action.message
        });
      }));
      /***/
    },

    /***/
    "./src/app/shared/wizard-nav/wizard-nav.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/shared/wizard-nav/wizard-nav.component.ts ***!
      \***********************************************************/

    /*! exports provided: WizardNavComponent */

    /***/
    function srcAppSharedWizardNavWizardNavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardNavComponent", function () {
        return WizardNavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var _c0 = ["*"];

      var WizardNavComponent = /*#__PURE__*/function () {
        function WizardNavComponent() {
          _classCallCheck(this, WizardNavComponent);
        }

        _createClass(WizardNavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WizardNavComponent;
      }();

      WizardNavComponent.ɵfac = function WizardNavComponent_Factory(t) {
        return new (t || WizardNavComponent)();
      };

      WizardNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardNavComponent,
        selectors: [["app-wizard-nav"]],
        ngContentSelectors: _c0,
        decls: 30,
        vars: 0,
        consts: [[1, "app-container", "auth", "setup", "d-flex", "align-center"], [1, "auth-content", "d-flex"], [1, "setup-wizard"], [1, "app-icon"], [1, "setup-wizard-steps"], [1, "current-step"], ["href", "owner-type.html"], ["href", "owner-detail-individual.html"], ["href", "site-type.html"], ["href", "site-detail.html"], [1, "text-center"], ["src", "assets/images/bms-wizard-footer-img.png", "alt", "estateCloud"], [1, "form-wrapper"], [1, "help-text"], ["href", "#", 1, "text-primary", "bold"]],
        template: function WizardNavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "estate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cloud");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Owner Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Owner Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Site Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Site Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Having troubles? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Get Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardNavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-wizard-nav",
            templateUrl: "./wizard-nav.component.html"
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/wizard-section/wizard-section.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/shared/wizard-section/wizard-section.component.ts ***!
      \*******************************************************************/

    /*! exports provided: WizardSectionComponent */

    /***/
    function srcAppSharedWizardSectionWizardSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WizardSectionComponent", function () {
        return WizardSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _core_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../core/components/base.component */
      "./src/app/core/components/base.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

      var _c0 = ["*"];

      var WizardSectionComponent = /*#__PURE__*/function (_core_components_base2) {
        _inherits(WizardSectionComponent, _core_components_base2);

        var _super17 = _createSuper(WizardSectionComponent);

        function WizardSectionComponent(router) {
          _classCallCheck(this, WizardSectionComponent);

          return _super17.call(this);
        }

        _createClass(WizardSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isCurrentStep",
          value: function isCurrentStep(section) {
            if (section && this.pathName) {
              var bool = this.pathName.includes(section);
              return bool;
            }
          }
        }, {
          key: "isCompleted",
          value: function isCompleted(section) {
            if (section === "owner-type" && (this.pathName.includes("owner-detail") || this.pathName.includes("property-type") || this.pathName.includes("property-detail") || this.pathName.includes("greet"))) {
              return true;
            }

            if (section === "owner-detail" && (this.pathName.includes("property-type") || this.pathName.includes("property-detail") || this.pathName.includes("greet"))) {
              return true;
            }

            if (section === "property-type" && (this.pathName.includes("property-detail") || this.pathName.includes("greet"))) {
              return true;
            }

            if (section === "property-detail" && this.pathName.includes("greet")) {
              return true;
            }

            if (section === "greet") {}
          }
        }]);

        return WizardSectionComponent;
      }(_core_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

      WizardSectionComponent.ɵfac = function WizardSectionComponent_Factory(t) {
        return new (t || WizardSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      WizardSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WizardSectionComponent,
        selectors: [["app-wizard-section"]],
        inputs: {
          pathName: "pathName"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 22,
        vars: 20,
        consts: [[1, "app-container", "auth", "setup", "d-flex", "align-center"], [1, "auth-content", "d-flex"], [1, "setup-wizard"], [1, "app-icon"], [1, "setup-wizard-steps"], ["mat-list-item", ""], [1, "text-center"], ["src", "./assets/images/bms-wizard-footer-img.png", "alt", "OWNANT"], [1, "form-wrapper"]],
        template: function WizardSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OWNANT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-nav-list", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Owner Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Owner Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Property Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Property Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "End");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-step", ctx.isCurrentStep("owner-type"))("completed-step", ctx.isCompleted("owner-type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-step", ctx.isCurrentStep("owner-detail"))("completed-step", ctx.isCompleted("owner-detail"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-step", ctx.isCurrentStep("property-type"))("completed-step", ctx.isCompleted("property-type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-step", ctx.isCurrentStep("property-detail"))("completed-step", ctx.isCompleted("property-detail"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-step", ctx.isCurrentStep("greet"))("completed-step", ctx.isCompleted("greet"));
          }
        },
        directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-wizard-section",
            templateUrl: "./wizard-section.component.html"
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          pathName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/store/effects/app.effects.ts":
    /*!**********************************************!*\
      !*** ./src/app/store/effects/app.effects.ts ***!
      \**********************************************/

    /*! exports provided: AppEffects */

    /***/
    function srcAppStoreEffectsAppEffectsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
        return AppEffects;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ngrx/effects */
      "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");

      var AppEffects = function AppEffects(actions$) {
        _classCallCheck(this, AppEffects);

        this.actions$ = actions$;
      };

      AppEffects.ɵfac = function AppEffects_Factory(t) {
        return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]));
      };

      AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppEffects,
        factory: AppEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppEffects, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/store/index.ts":
    /*!********************************!*\
      !*** ./src/app/store/index.ts ***!
      \********************************/

    /*! exports provided: logout, metaReducers, reducers */

    /***/
    function srcAppStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "logout", function () {
        return logout;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "metaReducers", function () {
        return metaReducers;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reducers", function () {
        return reducers;
      });
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/store */
      "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
      /* harmony import */


      var _core_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../core/store/actions/global.actions */
      "./src/app/core/store/actions/global.actions.ts");

      function logout(reducer) {
        return function (state, action) {
          if (action != null && action.type === _core_store_actions_global_actions__WEBPACK_IMPORTED_MODULE_1__["logout"].type) {
            return reducer(undefined, {
              type: _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"]
            });
          }

          return reducer(state, action);
        };
      }

      var metaReducers = [logout];
      var reducers = {}; // export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

      /***/
    },

    /***/
    "./src/environments/environment.default.ts":
    /*!*************************************************!*\
      !*** ./src/environments/environment.default.ts ***!
      \*************************************************/

    /*! exports provided: defaultEnvironment */

    /***/
    function srcEnvironmentsEnvironmentDefaultTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "defaultEnvironment", function () {
        return defaultEnvironment;
      });

      var defaultEnvironment = {
        // modules to be shown on text editor toolbar
        quillToolbars: [["bold", "italic", "underline", "strike"], ["blockquote", "code-block"], [{
          list: "ordered"
        }, {
          list: "bullet"
        }], [{
          script: "sub"
        }, {
          script: "super"
        }], [{
          indent: "-1"
        }, {
          indent: "+1"
        }], [{
          direction: "rtl"
        }], [{
          header: [1, 2, 3, 4, 5, 6, false]
        }], ["link"], ["clean"]]
      };
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /* harmony import */


      var _environment_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./environment.default */
      "./src/environments/environment.default.ts");

      var environment = Object.assign(Object.assign({}, _environment_default__WEBPACK_IMPORTED_MODULE_0__["defaultEnvironment"]), {
        production: false,
        // apiUrl: "http://sunrise-housing.bms.test:8080/api",
        apiUrl: "http://bms.smartmobe.com:9002/api",
        imageApi: "http://bms.smartmobe.com:9002"
      });
      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/nitesh/projects/bms-front-end/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map