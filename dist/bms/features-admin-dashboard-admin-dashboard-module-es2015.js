(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-admin-dashboard-admin-dashboard-module"],{

/***/ "./src/app/features/admin-dashboard/admin-dashboard.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/admin-dashboard/admin-dashboard.module.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-dashboard.routing.module */ "./src/app/features/admin-dashboard/admin-dashboard.routing.module.ts");
/* harmony import */ var _components_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-dashboard.component */ "./src/app/features/admin-dashboard/components/admin-dashboard.component.ts");
/* harmony import */ var _containers_admin_dashboard_container_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/admin-dashboard-container.component */ "./src/app/features/admin-dashboard/containers/admin-dashboard-container.component.ts");






class AdminDashboardModule {
}
AdminDashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminDashboardModule });
AdminDashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminDashboardModule_Factory(t) { return new (t || AdminDashboardModule)(); }, imports: [[_admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminDashboardModule, { declarations: [_containers_admin_dashboard_container_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardContainerComponent"], _components_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]], imports: [_admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_containers_admin_dashboard_container_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardContainerComponent"], _components_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]],
                imports: [_admin_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin-dashboard/admin-dashboard.routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/admin-dashboard/admin-dashboard.routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: AdminDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardRoutingModule", function() { return AdminDashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers_admin_dashboard_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/admin-dashboard-container.component */ "./src/app/features/admin-dashboard/containers/admin-dashboard-container.component.ts");





const routes = [
    {
        path: "",
        component: _containers_admin_dashboard_container_component__WEBPACK_IMPORTED_MODULE_2__["AdminDashboardContainerComponent"],
        children: [
            {
                path: "owner",
                loadChildren: () => __webpack_require__.e(/*! import() | modules-owners-owner-module */ "modules-owners-owner-module").then(__webpack_require__.bind(null, /*! ./modules/owners/owner.module */ "./src/app/features/admin-dashboard/modules/owners/owner.module.ts")).then((m) => m.OwnerModule),
            },
        ],
    },
];
class AdminDashboardRoutingModule {
}
AdminDashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminDashboardRoutingModule });
AdminDashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminDashboardRoutingModule_Factory(t) { return new (t || AdminDashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminDashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/admin-dashboard/components/admin-dashboard.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/admin-dashboard/components/admin-dashboard.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_admin_navigation_bar_admin_navigation_bar_admin_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/admin-navigation-bar/admin-navigation-bar/admin-navigation-bar.component */ "./src/app/shared/admin-navigation-bar/admin-navigation-bar/admin-navigation-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AdminDashboardComponent {
    constructor() { }
    ngOnInit() { }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 2, vars: 0, template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-admin-navigation-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_admin_navigation_bar_admin_navigation_bar_admin_navigation_bar_component__WEBPACK_IMPORTED_MODULE_1__["AdminNavigationBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-admin-dashboard",
                templateUrl: "./admin-dashboard.component.html",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/features/admin-dashboard/containers/admin-dashboard-container.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/features/admin-dashboard/containers/admin-dashboard-container.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AdminDashboardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardContainerComponent", function() { return AdminDashboardContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/admin-dashboard.component */ "./src/app/features/admin-dashboard/components/admin-dashboard.component.ts");



class AdminDashboardContainerComponent {
    constructor() { }
    ngOnInit() { }
}
AdminDashboardContainerComponent.ɵfac = function AdminDashboardContainerComponent_Factory(t) { return new (t || AdminDashboardContainerComponent)(); };
AdminDashboardContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardContainerComponent, selectors: [["app-admin-dashboard-container"]], decls: 1, vars: 0, template: function AdminDashboardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-admin-dashboard");
    } }, directives: [_components_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["AdminDashboardComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-admin-dashboard-container",
                templateUrl: "./admin-dashboard-container.component.html",
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=features-admin-dashboard-admin-dashboard-module-es2015.js.map