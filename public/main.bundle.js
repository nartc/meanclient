webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n    <flash-messages></flash-messages>\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_clients_clients_component__ = __webpack_require__("../../../../../src/app/components/clients/clients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_client_detail_client_detail_component__ = __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_upload_client_upload_client_component__ = __webpack_require__("../../../../../src/app/components/upload-client/upload-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_add_client_add_client_component__ = __webpack_require__("../../../../../src/app/components/add-client/add-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_edit_client_edit_client_component__ = __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_change_password_change_password_component__ = __webpack_require__("../../../../../src/app/components/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//PrimeNG Imports

//Component Imports













//Service Imports





var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_13__components_upload_client_upload_client_component__["a" /* UploadClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_14__components_add_client_add_client_component__["a" /* AddClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'client/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_edit_client_edit_client_component__["a" /* EditClientComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'password', component: __WEBPACK_IMPORTED_MODULE_19__components_change_password_change_password_component__["a" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_20__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_client_detail_client_detail_component__["a" /* ClientDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_upload_client_upload_client_component__["a" /* UploadClientComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_add_client_add_client_component__["a" /* AddClientComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_edit_client_edit_client_component__["a" /* EditClientComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_change_password_change_password_component__["a" /* ChangePasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_6_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["InputTextModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["InputMaskModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MessagesModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["MenuModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["DataTableModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["SharedModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmDialogModule"],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["SplitButtonModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_22__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_23__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_24__services_client_service__["a" /* ClientService */],
            __WEBPACK_IMPORTED_MODULE_7_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 3px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-6\">\r\n      <button pButton type=\"button\" class=\"ui-button-info\" label=\"Back To Dashboard\" icon=\"fa-arrow-circle-o-left\" iconPos=\"left\" (click)=\"onClick()\"></button>\r\n    </div>\r\n    <div class=\"ui-grid-col-6\">\r\n      \r\n    </div>\r\n  </div>\r\n<br>\r\n\r\n<p-growl [value]=\"addClientMessages\" styleClass=\"addClientGrowl\"></p-growl>\r\n<form \r\n  [formGroup]=\"clientForm\"\r\n  (ngSubmit)=\"onAddSubmit(clientForm.value)\"\r\n>\r\n  <p-panel header=\"Add Client\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          First Name *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"text\"\r\n            formControlName=\"firstName\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all\"\r\n            *ngIf=\"!clientForm.controls['firstName'].valid && clientForm.controls['firstName'].dirty\" \r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"clientForm.controls['firstName'].errors['required']\">This field is required</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Last Name *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"text\"\r\n            formControlName=\"lastName\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all\"\r\n            *ngIf=\"!clientForm.controls['lastName'].valid && clientForm.controls['lastName'].dirty\" \r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"clientForm.controls['lastName'].errors['required']\">This field is required</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Phone *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <p-inputMask \r\n            type=\"text\"\r\n            formControlName=\"phone\"\r\n            placeholder=\"999-999-9999\"\r\n            mask=\"999-999-9999\"\r\n          >\r\n          </p-inputMask>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all\"\r\n            *ngIf=\"!clientForm.controls['phone'].valid && clientForm.controls['phone'].dirty\" \r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"clientForm.controls['phone'].errors['required']\">This field is required</span>\r\n            <span *ngIf=\"clientForm.controls['phone'].errors['pattern']\">Please enter a valid phone number</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Email *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"text\"\r\n            formControlName=\"email\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all\"\r\n            *ngIf=\"!clientForm.controls['email'].valid && clientForm.controls['email'].dirty\" \r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"clientForm.controls['email'].errors['required']\">This field is required</span>\r\n            <span *ngIf=\"clientForm.controls['email'].errors['pattern']\">Please enter a valid email</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Balance *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input \r\n            pInputText\r\n            type=\"number\"\r\n            formControlName=\"balance\"\r\n            placeholder=\"required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div \r\n            class=\"ui-messages ui-messages-error ui-corner-all\"\r\n            *ngIf=\"!clientForm.controls['balance'].valid && clientForm.controls['firstName'].dirty\" \r\n          >\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"clientForm.controls['balance'].errors['required']\">This field is required</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\"></div>\r\n        <div class=\"ui-grid-col-6\">\r\n            <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!clientForm.valid\"></button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-panel>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddClientComponent = (function () {
    function AddClientComponent(router, fB, flashMessagesService, clientService) {
        this.router = router;
        this.fB = fB;
        this.flashMessagesService = flashMessagesService;
        this.clientService = clientService;
        this.addClientMessages = [];
        this.emailRegex = "[^ @]*@[^ @]*";
        this.phoneRegex = "[1-9]{3}-[0-9]{3}-[0-9]{4}";
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.clientForm = this.fB.group({
            'firstName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.phoneRegex)
            ])),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.emailRegex)
            ])),
            'balance': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    };
    AddClientComponent.prototype.onAddSubmit = function (value) {
        var _this = this;
        this.client = value;
        this.clientService.addClient(this.client).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('New Client Added', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.addClientMessages = [];
                _this.addClientMessages.push({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'Failed to add new client'
                });
                _this.router.navigate(['/add']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ;
    AddClientComponent.prototype.onClick = function () {
        this.router.navigate(['/']);
    };
    return AddClientComponent;
}());
AddClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-client',
        template: __webpack_require__("../../../../../src/app/components/add-client/add-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-client/add-client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_client_service__["a" /* ClientService */]) === "function" && _d || Object])
], AddClientComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 3px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"changePasswordMsgs\" styleClass=\"changePasswordGrowl\"></p-growl>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" key=\"confirmChangePassword\"></p-confirmDialog>\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" acceptLabel=\"OK\" [rejectVisible]=\"false\" key=\"confirmSuccessPassword\"></p-confirmDialog>\r\n\r\n<div class=\"ui-grid-row\">\r\n  <div class=\"ui-grid-col-6\">\r\n    <button pButton type=\"button\" class=\"ui-button-info\" label=\"Back To Dashboard\" icon=\"fa-arrow-circle-o-left\" iconPos=\"left\" (click)=\"onClick()\"></button>\r\n  </div>\r\n  <div class=\"ui-grid-col-6\">\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<form\r\n*ngIf=\"user\"\r\n[formGroup]=\"changePasswordForm\"\r\n(ngSubmit)=\"onChangeSubmit(changePasswordForm.value)\"\r\n>\r\n<p-panel header=\"Change Password\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        Current Password *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"password\"\r\n          formControlName=\"candidatePassword\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!changePasswordForm.controls['candidatePassword'].valid && changePasswordForm.controls['candidatePassword'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"changePasswordForm.controls['candidatePassword'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"changePasswordForm.controls['candidatePassword'].errors['minlength']\">Must be at least 6 characters</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        New Password *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"password\"\r\n          formControlName=\"newPassword\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!changePasswordForm.controls['newPassword'].valid && changePasswordForm.controls['newPassword'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"changePasswordForm.controls['newPassword'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"changePasswordForm.controls['newPassword'].errors['minlength']\">Must be at least 6 characters</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        Confirm Password *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"password\"\r\n          formControlName=\"confirmNewPassword\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!changePasswordForm.controls['confirmNewPassword'].valid && changePasswordForm.controls['confirmNewPassword'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"changePasswordForm.controls['confirmNewPassword'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"changePasswordForm.controls['confirmNewPassword'].errors['minlength']\">Must be at least 6 characters</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\"></div>\r\n      <div class=\"ui-grid-col-6\">\r\n          <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!changePasswordForm.valid\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-panel>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, fB, authService, flashMessagesService, confirmationService) {
        this.router = router;
        this.fB = fB;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.confirmationService = confirmationService;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        });
        this.changePasswordForm = this.fB.group({
            'candidatePassword': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)
            ])),
            'newPassword': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)
            ])),
            'confirmNewPassword': new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(6)
            ])),
        });
    };
    ChangePasswordComponent.prototype.onClick = function () {
        this.router.navigate(['/']);
    };
    ChangePasswordComponent.prototype.onChangeSubmit = function (value) {
        var _this = this;
        if (value.newPassword == value.confirmNewPassword) {
            if (value.newPassword != value.candidatePassword) {
                this.confirmationService.confirm({
                    message: 'Are you sure to change password?',
                    key: "confirmChangePassword",
                    accept: function () {
                        _this.authService.changePassword(_this.user, value.candidatePassword, value.newPassword).subscribe(function (data) {
                            console.log(data);
                            if (data.success) {
                                _this.confirmationService.confirm({
                                    message: 'Password Successfully Changed',
                                    key: "confirmSuccessPassword",
                                    accept: function () {
                                        _this.router.navigate(['/']);
                                    }
                                });
                            }
                            else {
                                console.log(data.msg);
                                _this.changePasswordMsgs = [];
                                _this.changePasswordMsgs.push({
                                    severity: 'error',
                                    summary: 'Error',
                                    detail: data.msg
                                });
                                _this.router.navigate(['/password']);
                            }
                        });
                    }
                });
            }
            else {
                this.changePasswordMsgs = [];
                this.changePasswordMsgs.push({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'New Password must be different than Current Password'
                });
                this.router.navigate(['/password']);
            }
        }
        else {
            this.changePasswordMsgs = [];
            this.changePasswordMsgs.push({
                severity: 'error',
                summary: 'Error',
                detail: 'Confirm New Password must match New Password'
            });
            this.router.navigate(['/password']);
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__("../../../../../src/app/components/change-password/change-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/change-password/change-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-grid-row\">\r\n  <div class=\"ui-grid-col-6\">\r\n    <button pButton type=\"button\" class=\"ui-button-info\" label=\"Back To Dashboard\" icon=\"fa-arrow-circle-o-left\" iconPos=\"left\" (click)=\"onClick()\"></button>\r\n  </div>\r\n  <div class=\"ui-grid-col-6 ui-rtl\" dir=\"rtl\">\r\n    <p-splitButton label=\"Manage\" [model]=\"buttonItems\" styleClass=\"ui-button-secondary\" menuStyleClass=\"clientDetailSplitBtnMenu\"></p-splitButton>\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<div *ngIf=\"client\">\r\n  <p-panel styleClass=\"editClientPanel\">\r\n    <p-header>\r\n      <h3 class=\"ui-panel-title\" style=\"display:inline-block;margin-top:10px\">{{client.firstName}} {{client.lastName}}</h3>\r\n    </p-header>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-8 ui-sm-12\">\r\n        <h4 style=\"margin-top: 10px\">Client ID: {{id}}</h4>\r\n      </div>\r\n      <div class=\"ui-grid-col-4 ui-sm-12\">\r\n        <h3 class=\"pull-right\">\r\n          Balance: \r\n          <span\r\n            [class.text-danger]=\"hasBalance\"\r\n            [class.text-success]=\"!hasBalance\"\r\n          >\r\n            {{client.balance | currency:'USD':true}}\r\n          </span>\r\n          <small>\r\n            <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"fa-pencil\" (click)=\"showEditBalanceInput = !showEditBalanceInput\"></button>\r\n          </small>\r\n        </h3>\r\n        <div class=\"clearfix\">\r\n          <form *ngIf=\"showEditBalanceInput\" (submit)=\"updateBalance()\" class=\"form-inline pull-right\">\r\n            <div class=\"form-group\">\r\n              <input pInputText type=\"number\" name=\"balance\" [(ngModel)]=\"client.balance\">\r\n            </div>\r\n            <button pButton type=\"submit\" icon=\"fa-check\" style=\"margin-left: 5px\"></button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">Contact Email: {{client.email}}</li>\r\n      <li class=\"list-group-item\">Contact Phone: {{client.phone}}</li>\r\n    </ul>\r\n    <p-footer></p-footer>\r\n  </p-panel>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/client-detail/client-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientDetailComponent = (function () {
    function ClientDetailComponent(router, aRoute, clientService, flashMessagesService, confirmationService) {
        this.router = router;
        this.aRoute = aRoute;
        this.clientService = clientService;
        this.flashMessagesService = flashMessagesService;
        this.confirmationService = confirmationService;
        this.buttonItems = [];
        this.id = '';
        this.hasBalance = false;
        this.showEditBalanceInput = false;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get ID
        this.id = this.aRoute.snapshot.params['id'];
        //Get Client by Id
        this.clientService.getClientById(this.id).subscribe(function (data) {
            if (data.client.balance > 0) {
                _this.hasBalance = true;
            }
            else {
                _this.hasBalance = false;
            }
            _this.client = data.client;
        });
        //Context Menu
        this.buttonItems = [
            {
                label: 'Edit',
                icon: 'fa-wrench',
                command: function () {
                    _this.router.navigate(['/edit/' + _this.id]);
                }
            },
            {
                label: 'Delete',
                icon: 'fa-close',
                command: function () {
                    _this.confirmationService.confirm({
                        message: 'Are you sure you want to delete "' + _this.id + '" ?',
                        accept: function () {
                            _this.clientService.deleteClient(_this.id).subscribe(function (data) {
                                if (data.success) {
                                    _this.flashMessagesService.show('Client Deleted', {
                                        cssClass: 'ui-messages-info',
                                        timeout: 3000
                                    });
                                    _this.router.navigate(['/']);
                                }
                                else {
                                    _this.flashMessagesService.show(data.msg, {
                                        cssClass: 'ui-messages-warn',
                                        timeout: 3000
                                    });
                                    _this.router.navigate(['/client/' + _this.id]);
                                }
                            });
                        }
                    });
                }
            }
        ];
    };
    ClientDetailComponent.prototype.onClick = function () {
        this.router.navigate(['/']);
    };
    ClientDetailComponent.prototype.updateBalance = function (id) {
        var _this = this;
        this.clientService.updateClient(this.id, this.client).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('Balance Updated', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/client/' + _this.id]);
            }
            else {
                _this.flashMessagesService.show('Balance Update Failed', {
                    cssClass: 'ui-messages-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/client/' + _this.id]);
            }
        });
    };
    return ClientDetailComponent;
}());
ClientDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-client-detail',
        template: __webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/client-detail/client-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object])
], ClientDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=client-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-grid-row\">\r\n  <div class=\"ui-grid-col-6\">\r\n    <h2><i class=\"fa fa-users\"></i> Clients</h2>\r\n  </div>\r\n  <div class=\"ui-grid-col-6\">\r\n    <h5 class=\"pull-right text-muted\">Total Owed: {{totalOwed | currency:'USD':true}}</h5>\r\n  </div>\r\n</div>\r\n<hr>\r\n\r\n<p-dataTable \r\n  [value]=\"clients\" \r\n  [responsive]=\"true\"\r\n  selectionMode=\"single\" \r\n  [(selection)]=\"selectedClient\" \r\n  (onRowSelect)=\"onRowSelect($event)\"\r\n>\r\n  <p-column field=\"_id\" header=\"ID\" [style]=\"{'width':'25%'}\"></p-column>\r\n  <p-column header=\"Name\" [style]=\"{'width':'20%'}\">\r\n    <ng-template let-client=\"rowData\" pTemplate=\"body\">\r\n      <span>{{client.firstName}} {{client.lastName}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-column field=\"email\" header=\"Email\" [style]=\"{'width':'28%'}\"></p-column>\r\n  <p-column field=\"phone\" header=\"Phone\" [style]=\"{'width':'15%'}\"></p-column>\r\n  <p-column header=\"Balance\" [style]=\"{'width':'12%'}\">\r\n    <ng-template let-col let-client=\"rowData\" pTemplate=\"body\">\r\n      <span>{{client.balance | currency:'USD':true}}</span>\r\n    </ng-template>\r\n  </p-column>\r\n  <p-footer>\r\n    Total clients: {{clients.length}} \r\n  </p-footer>\r\n</p-dataTable>"

/***/ }),

/***/ "../../../../../src/app/components/clients/clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientsComponent = (function () {
    function ClientsComponent(clientService, router, confirmationService) {
        this.clientService = clientService;
        this.router = router;
        this.confirmationService = confirmationService;
        this.clients = [];
        this.totalOwed = 0;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data.clients;
            //To have the first row selected onInit:
            //this.selectedClient = this.clients[0];
            _this.getTotal();
        });
    };
    ClientsComponent.prototype.getTotal = function () {
        var total = 0;
        for (var i = 0; i < this.clients.length; i++) {
            total += this.clients[i].balance;
        }
        this.totalOwed = total;
    };
    ClientsComponent.prototype.onRowSelect = function (event) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'View details of "' + event.data._id + '" ?',
            accept: function () {
                _this.router.navigate(['/client/' + event.data._id]);
            }
        });
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-clients',
        template: __webpack_require__("../../../../../src/app/components/clients/clients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/clients/clients.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _c || Object])
], ClientsComponent);

var _a, _b, _c;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-grid-row\">\r\n  <div class=\"ui-grid-col-10 ui-sm-12\">\r\n    <app-clients></app-clients>\r\n  </div>\r\n  <div class=\"ui-grid-col-2 ui-sm-12\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, httpService, router) {
        this.authService = authService;
        this.httpService = httpService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::ng-deep .ui-messages {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<div class=\"ui-grid-row\">\r\n  <div class=\"ui-grid-col-6\">\r\n    <button pButton type=\"button\" class=\"ui-button-info\" label=\"Back To Client Details\" icon=\"fa-arrow-circle-o-left\" iconPos=\"left\" (click)=\"onClick()\"></button>\r\n  </div>\r\n  <div class=\"ui-grid-col-6\">\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<form\r\n*ngIf=\"client\"\r\n[formGroup]=\"editClientForm\"\r\n(ngSubmit)=\"onEditSubmit(editClientForm.value)\"\r\n>\r\n<p-panel header=\"Edit Client\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        First Name *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"text\"\r\n          formControlName=\"firstName\"\r\n          [(ngModel)]=\"client.firstName\"\r\n          placeholder=\"Required\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!editClientForm.controls['firstName'].valid && editClientForm.controls['firstName'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"editClientForm.controls['firstName'].errors['required']\">This field is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        Last Name *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"text\"\r\n          formControlName=\"lastName\"\r\n          [(ngModel)]=\"client.lastName\"\r\n          placeholder=\"Required\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!editClientForm.controls['lastName'].valid && editClientForm.controls['lastName'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"editClientForm.controls['lastName'].errors['required']\">This field is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        Phone *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <p-inputMask \r\n          type=\"text\"\r\n          formControlName=\"phone\"\r\n          [(ngModel)]=\"client.phone\"\r\n          placeholder=\"999-999-9999\"\r\n          mask=\"999-999-9999\"\r\n        >\r\n        </p-inputMask>\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!editClientForm.controls['phone'].valid && editClientForm.controls['phone'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"editClientForm.controls['phone'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"editClientForm.controls['phone'].errors['pattern']\">Please enter a valid phone number</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        Email *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"text\"\r\n          formControlName=\"email\"\r\n          [(ngModel)]=\"client.email\"\r\n          placeholder=\"Required\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!editClientForm.controls['email'].valid && editClientForm.controls['email'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"editClientForm.controls['email'].errors['required']\">This field is required</span>\r\n          <span *ngIf=\"editClientForm.controls['email'].errors['pattern']\">Please enter a valid email</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\">\r\n        Balance *:\r\n      </div>\r\n      <div class=\"ui-grid-col-6\">\r\n        <input \r\n          pInputText\r\n          type=\"number\"\r\n          formControlName=\"balance\"\r\n          [(ngModel)]=\"client.balance\"\r\n          placeholder=\"required\"\r\n        >\r\n      </div>\r\n      <div class=\"ui-grid-col-4\">\r\n        <div \r\n          class=\"ui-messages ui-messages-error ui-corner-all\"\r\n          *ngIf=\"!editClientForm.controls['balance'].valid && editClientForm.controls['firstName'].dirty\" \r\n        >\r\n          <i class=\"fa fa-close\"></i>\r\n          <span *ngIf=\"editClientForm.controls['balance'].errors['required']\">This field is required</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-grid-row\">\r\n      <div class=\"ui-grid-col-2\"></div>\r\n      <div class=\"ui-grid-col-6\">\r\n          <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!editClientForm.valid\"></button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</p-panel>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/edit-client/edit-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_client_service__ = __webpack_require__("../../../../../src/app/services/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditClientComponent = (function () {
    function EditClientComponent(router, aRoute, clientService, flashMessagesService, confirmationService, fB) {
        this.router = router;
        this.aRoute = aRoute;
        this.clientService = clientService;
        this.flashMessagesService = flashMessagesService;
        this.confirmationService = confirmationService;
        this.fB = fB;
        this.emailRegex = "[^ @]*@[^ @]*";
        this.phoneRegex = "[1-9]{3}-[0-9]{3}-[0-9]{4}";
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.aRoute.snapshot.params['id'];
        this.clientService.getClientById(this.id).subscribe(function (data) {
            _this.client = data.client;
        });
        this.editClientForm = this.fB.group({
            'firstName': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            'lastName': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required),
            'phone': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(this.phoneRegex)
            ])),
            'email': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(this.emailRegex)
            ])),
            'balance': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](0, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].required)
        });
    };
    EditClientComponent.prototype.onClick = function () {
        this.router.navigate(['/client/' + this.id]);
    };
    EditClientComponent.prototype.onEditSubmit = function (value) {
        var _this = this;
        this.client = value;
        this.confirmationService.confirm({
            message: 'Are you sure to edit this client?',
            accept: function () {
                _this.clientService.updateClient(_this.id, _this.client).subscribe(function (data) {
                    if (data.success) {
                        _this.flashMessagesService.show('Client Updated', {
                            cssClass: 'ui-messages-info',
                            timeout: 3000
                        });
                        _this.router.navigate(['/client/' + _this.id]);
                    }
                    else {
                        _this.flashMessagesService.show('Client Update Failed', {
                            cssClass: 'ui-messages-danger',
                            timeout: 3000
                        });
                        _this.router.navigate(['/edit/' + _this.id]);
                    }
                });
            }
        });
    };
    return EditClientComponent;
}());
EditClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-client',
        template: __webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-client/edit-client.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_client_service__["a" /* ClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormBuilder"]) === "function" && _f || Object])
], EditClientComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n  <div class=\"ui-grid-row\">\r\n    <div class=\"ui-grid-col-3\"></div>\r\n    <div class=\"ui-grid-col-6\">\r\n      <p-growl [value]=\"loginMessages\" styleClass=\"loginGrowl\"></p-growl>\r\n      <form (submit)=\"onLoginSubmit()\">\r\n        <p-panel header=\"Login\" styleClass=\"loginPanel\">\r\n          <div class=\"ui-grid-row\">\r\n            Email:\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <input\r\n              pInputText \r\n              type=\"email\" \r\n              name=\"email\"\r\n              [(ngModel)]=\"email\" \r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            Password:\r\n          </div>\r\n          <div class=\"ui-grid-row\">\r\n            <input\r\n              pInputText \r\n              type=\"password\" \r\n              name=\"password\"\r\n              [(ngModel)]=\"password\" \r\n            >\r\n          </div>\r\n          <p-footer>\r\n            <button pButton type=\"submit\" label=\"Submit\"></button>\r\n          </p-footer>\r\n        </p-panel>\r\n      </form>\r\n    </div>\r\n    <div class=\"ui-grid-col-3\"></div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, httpService, router, flashMessagesService) {
        this.authService = authService;
        this.httpService = httpService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.email = '';
        this.password = '';
        this.loginMessages = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessagesService.show('You are logged in', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/']);
            }
            else {
                _this.loginMessages = [];
                _this.loginMessages.push({
                    severity: 'error',
                    summary: 'Login Error',
                    detail: data.msg
                });
                _this.router.navigate(['/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<p-menu #menu popup=\"popup\" [model]=\"items\" styleClass=\"navMenu\"></p-menu>\r\n\r\n<!--Confirmation Dialog -->\r\n<p-confirmDialog header=\"Confirmation\" key=\"navConfirm\" icon=\"fa fa-question-circle\"></p-confirmDialog>\r\n\r\n<!--Navbar-->\r\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">ClientPanel</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Dashboard</a>\r\n        </li>\r\n        <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/upload']\">Upload</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\r\n        </li>\r\n        <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"welcomeText\" style=\"cursor: pointer\">Welcome, {{authService.currentUser?.name}}</a>\r\n        </li>\r\n        <!-- <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" id=\"welcomeText\" (click)=\"onLogoutClick()\" style=\"cursor: pointer\">Logout</a>\r\n        </li> -->\r\n        <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"menu.toggle($event)\" style=\"cursor: pointer\"><i class=\"fa fa-user-circle-o\"></i></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br><br>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessagesService, confirmationService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.confirmationService = confirmationService;
        this.items = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [
            {
                label: 'Manage',
                items: [
                    {
                        label: 'Change Password',
                        icon: 'fa-wrench',
                        command: function (event) {
                            _this.router.navigate(['/password/']);
                        }
                    },
                    {
                        label: 'Log out',
                        icon: 'fa-minus',
                        command: function (event) {
                            _this.onLogoutClick();
                        }
                    }
                ]
            }
        ];
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Are you sure to log out?',
            key: "navConfirm",
            accept: function () {
                _this.authService.logout();
                _this.flashMessagesService.show('Logged out', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
        // this.authService.logout();
        // this.flashMessagesService.show('Logged out', {
        //   cssClass: 'ui-messages-info',
        //   timeout: 3000
        // });
        // this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>\r\n  PAGE NOT FOUND\r\n</h2>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-block{\r\n    padding: 20px;\r\n}\r\n\r\n::ng-deep .ui-messages {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 3px;\r\n}\r\n\r\n#checkValid .fa {\r\n    color: green;\r\n}\r\n\r\ninput.ui-inputtext.ng-dirty.ng-invalid {\r\n    border-bottom-color: transparent;\r\n    border-color: red;\r\n    box-shadow: -1px 0px 20px 0px rgba(159, 60, 50, 0.1);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [value]=\"registerMessages\" styleClass=\"registerGrowl\"></p-growl>\r\n<form \r\n  [formGroup]=\"userForm\"\r\n  (ngSubmit)=\"onRegisterSubmit(userForm.value)\"\r\n>\r\n  <p-panel header=\"Register\">\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Name *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input\r\n            pInputText \r\n            type=\"text\" \r\n            formControlName=\"name\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-messages ui-messages-error ui-corner-all animated fadeInLeft\" *ngIf=\"!userForm.controls['name'].valid && userForm.controls['name'].dirty\">\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"userForm.controls['name'].errors['required']\">Name is required</span>\r\n            <span *ngIf=\"userForm.controls['name'].errors['minlength']\">Must be at least 6 characters</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n        <div class=\"ui-grid-col-2\">\r\n          Email *:\r\n        </div>\r\n        <div class=\"ui-grid-col-6\">\r\n          <input\r\n            pInputText \r\n            type=\"email\" \r\n            formControlName=\"email\"\r\n            placeholder=\"Required\"\r\n          >\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-messages ui-messages-error ui-corner-all animated fadeInLeft\" *ngIf=\"!userForm.controls['email'].valid && userForm.controls['email'].dirty\">\r\n            <i class=\"fa fa-close\"></i>\r\n            <span *ngIf=\"userForm.controls['email'].errors['required']\">Email is required</span>\r\n            <span *ngIf=\"userForm.controls['email'].errors['pattern']\">Must be in valid email format</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\">\r\n            Password *:\r\n          </div>\r\n          <div class=\"ui-grid-col-6\">\r\n            <input\r\n              pInputText \r\n              type=\"password\" \r\n              formControlName=\"password\"\r\n              placeholder=\"Required - Min(6)\"\r\n            >\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-messages ui-messages-error ui-corner-all animated fadeInLeft\" *ngIf=\"!userForm.controls['password'].valid && userForm.controls['password'].dirty\">\r\n              <i class=\"fa fa-close\"></i>\r\n              <span *ngIf=\"userForm.controls['password'].errors['required']\">Password is required</span>\r\n              <span *ngIf=\"userForm.controls['password'].errors['minlength']\">Must be at least 6 characters</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row\">\r\n          <div class=\"ui-grid-col-2\"></div>\r\n          <div class=\"ui-grid-col-6\">\r\n              <button pButton type=\"submit\" label=\"Submit\" [disabled]=\"!userForm.valid\"></button>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </p-panel>\r\n</form>\r\n\r\n\r\n\r\n<!-- <div class=\"card\">\r\n  <div class=\"card-header\">\r\n    Register User\r\n  </div>\r\n  <div class=\"card-block\">\r\n    <form \r\n      [formGroup]=\"userForm\"\r\n      (ngSubmit)=\"onRegisterSubmit(userForm.value)\"\r\n    >\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Name</label>\r\n        <input \r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          [(ngModel)]=\"user.name\"\r\n          name=\"name\"\r\n          #userName = \"ngModel\"\r\n          minlength = \"10\"\r\n        >\r\n          <div *ngIf=\"userName.errors?.minlength && userName.touched\" class=\"alert alert-secondary\">\r\n            <small>*Must be at least 10 characters.</small>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input \r\n            type=\"email\"\r\n            class=\"form-control\"\r\n            [(ngModel)]=\"user.email\"\r\n            name=\"email\"\r\n            #userEmail = \"ngModel\"\r\n            minlength = \"10\"\r\n            required\r\n          >\r\n            <div class=\"alert alert-danger\" *ngIf=\"userEmail.errors?.required && userEmail.touched\">\r\n              <small>*Email is required.</small>\r\n            </div>\r\n            <div class=\"alert alert-secondary\" *ngIf=\"userEmail.errors?.minlength && userEmail.touched\">\r\n              <small>*Must be at least 10 characters.</small>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input \r\n              type=\"password\"\r\n              class=\"form-control\"\r\n              [(ngModel)]=\"user.password\"\r\n              name=\"password\"\r\n              #userPassword = \"ngModel\"\r\n              minlength = \"6\"\r\n              required\r\n            >\r\n              <div class=\"alert alert-danger\" *ngIf=\"userPassword.errors?.required && userPassword.touched\">\r\n                <small>*Password is required.</small>\r\n              </div>\r\n              <div class=\"alert alert-secondary\" *ngIf=\"userPassword.errors?.minlength && userPassword.touched\">\r\n                <small>*Must be at least 6 characters.</small>\r\n              </div>\r\n          </div>\r\n          <input type=\"submit\" value=\"Submit\" class=\"btn btn-primary btn-block\">\r\n    </form>\r\n  </div>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fB, authService, router, flashMessagesService) {
        this.fB = fB;
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
        this.registerMessages = [];
        this.emailRegex = "[^ @]*@[^ @]*";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userForm = this.fB.group({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)
            ])),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(this.emailRegex)
            ])),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6)
            ]))
        });
    };
    RegisterComponent.prototype.onRegisterSubmit = function (value) {
        var _this = this;
        this.user = value;
        this.authService.registerUser(this.user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessagesService.show('You are registered and now can log in', {
                    cssClass: 'ui-messages-info',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.registerMessages = [];
                _this.registerMessages.push({
                    severity: 'error',
                    summary: 'Registration Error',
                    detail: data.msg
                });
                _this.userForm.controls['email'].reset();
                _this.router.navigate(['/register']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ;
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<button \r\n    pButton \r\n    type=\"button\" \r\n    class=\"ui-button-success\" \r\n    icon=\"fa-plus\" \r\n    iconPos=\"left\" \r\n    label=\"Add Client\" \r\n    (click)=\"onClick()\" \r\n    id=\"addNewButton\">\r\n</button>"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(router) {
        this.router = router;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.onClick = function () {
        this.router.navigate(['/add']);
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/upload-client/upload-client.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/upload-client/upload-client.component.html":
/***/ (function(module, exports) {

module.exports = "<p-fileUpload name=\"myClientFile[]\" (onSelect)=\"onSelect($event)\" \r\n        multiple=\"multiple\" accept=\".json\" maxFileSize=\"1000000\"\r\n        [showUploadButton]=\"false\" (onClear)=\"onCancelClick()\">\r\n    <ng-template *ngIf=\"hasFile\" pTemplate type=\"content\">\r\n        <ul>\r\n            <li  *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\r\n        </ul>\r\n    </ng-template>        \r\n</p-fileUpload>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/upload-client/upload-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UploadClientComponent = (function () {
    function UploadClientComponent() {
        this.uploadedFiles = [];
        this.hasFile = false;
    }
    UploadClientComponent.prototype.ngOnInit = function () {
    };
    UploadClientComponent.prototype.onSelect = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.hasFile = true;
    };
    UploadClientComponent.prototype.onCancelClick = function () {
        this.uploadedFiles.splice(0, this.uploadedFiles.length);
        this.hasFile = false;
    };
    return UploadClientComponent;
}());
UploadClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload-client',
        template: __webpack_require__("../../../../../src/app/components/upload-client/upload-client.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/upload-client/upload-client.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UploadClientComponent);

//# sourceMappingURL=upload-client.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    ;
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(httpService, localStorageService) {
        this.httpService = httpService;
        this.localStorageService = localStorageService;
    }
    AuthService.prototype.registerUser = function (user) {
        return this.httpService.post('/users/register', user, { 'Content-Type': 'application/json' });
    };
    ;
    AuthService.prototype.authenticateUser = function (user) {
        return this.httpService.post('/users/authenticate', user, { 'Content-Type': 'application/json' });
    };
    ;
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        this.loadCurrentUser();
        return this.httpService.get('/users/profile', { 'Authorization': this.authToken });
    };
    ;
    AuthService.prototype.storeUserData = function (token, user) {
        this.localStorageService.saveValueWithKey('id_token', token);
        this.localStorageService.saveValueWithKey('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    ;
    AuthService.prototype.loadToken = function () {
        this.authToken = this.localStorageService.fetchValueFromKey('id_token');
    };
    ;
    AuthService.prototype.loadCurrentUser = function () {
        return this.currentUser = JSON.parse(this.localStorageService.fetchValueFromKey('user'));
    };
    ;
    AuthService.prototype.isLoggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    ;
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.currentUser = null;
        this.localStorageService.clearAll();
    };
    ;
    AuthService.prototype.changePassword = function (user, candidatePassword, newPassword) {
        var data = { user: user, candidatePassword: candidatePassword, newPassword: newPassword };
        return this.httpService.put('/users/password', data, { 'Content-Type': 'application/json' });
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__local_storage_service__["a" /* LocalStorageService */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = (function () {
    function ClientService(httpService) {
        this.httpService = httpService;
        this.clients = [];
        this.client = {
            _id: ''
        };
    }
    ClientService.prototype.addClient = function (client) {
        return this.httpService.post('/clients/addClient', client, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.getClients = function () {
        return this.httpService.get('/clients/clients', {});
    };
    ClientService.prototype.getClientById = function (id) {
        return this.httpService.get('/clients/client/' + id, {});
    };
    ClientService.prototype.updateClient = function (id, client) {
        console.log(client);
        return this.httpService.put('/clients/edit/' + id, client, { 'Content-Type': 'application/json' });
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.httpService.delete('/clients/delete/' + id, {});
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpService = HttpService_1 = (function () {
    //   public static url = "http://"+ HttpService.domain;
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.get = function (endpoint, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.get(HttpService_1.url + endpoint, options)
            .map(function (res) {
            return res.json();
        });
    };
    ;
    HttpService.prototype.post = function (endpoint, body, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        console.log(HttpService_1.url + endpoint);
        return this.http.post(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HttpService.prototype.put = function (endpoint, body, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.put(HttpService_1.url + endpoint, body, options)
            .map(function (res) {
            return res.json();
        });
    };
    HttpService.prototype.delete = function (endpoint, headersObject) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"](headersObject);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: headers
        });
        return this.http.delete(HttpService_1.url + endpoint, options)
            .map(function (res) {
            return res.json();
        });
    };
    return HttpService;
}());
HttpService.host = "localhost";
HttpService.port = 8080;
HttpService.domain = "mean-auth-ct.herokuapp.com";
HttpService.url = "http://" + HttpService_1.host + ":" + HttpService_1.port;
HttpService = HttpService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], HttpService);

var HttpService_1, _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.saveValueWithKey = function (key, value) {
        localStorage.setItem(key, value);
    };
    LocalStorageService.prototype.fetchValueFromKey = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService.prototype.deleteValueWithKey = function (key) {
        localStorage.removeItem(key);
    };
    LocalStorageService.prototype.clearAll = function () {
        localStorage.clear();
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map