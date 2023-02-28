"use strict";
exports.id = 68;
exports.ids = [68];
exports.modules = {

/***/ 5068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_initialRegistrationInputs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1636);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5674);
/* harmony import */ var _utils_hooks_FormHooks_form_hook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(961);
/* harmony import */ var _utils_hooks_FormHooks_submit_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1816);
/* harmony import */ var _components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9360);
/* harmony import */ var _components_UIElements_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4457);
/* harmony import */ var _components_FormElements_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5521);









const UpdateEntries = ({ entry , onUpdate , isModalLoading  })=>{
    const { submitHandler  } = (0,_utils_hooks_FormHooks_submit_hook__WEBPACK_IMPORTED_MODULE_4__/* .useSubmitHook */ .K)();
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(isModalLoading);
    const { 0: formIsTouched , 1: setFormIsTouched  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [formState, inputHandler] = (0,_utils_hooks_FormHooks_form_hook__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .c)(_data_initialRegistrationInputs__WEBPACK_IMPORTED_MODULE_2__/* .INITIAL_REGISTRATION_INPUTS */ .V, false);
    const submitRegistrationForm = (event)=>{
        setIsLoading(true);
        event.preventDefault();
        submitHandler(formState, entry);
        onUpdate();
        setIsLoading(false);
    };
    const formTouchedHandler = ()=>{
        setFormIsTouched(true);
    };
    if (!entry) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_LoadingSpinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                asOverlay: true
            }) : null,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: submitRegistrationForm,
                onChange: formTouchedHandler,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row form-row-flex-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "firstName",
                                element: "input",
                                type: "text",
                                label: "First Name *",
                                validators: [
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                                ],
                                onInput: inputHandler,
                                initialValidity: true,
                                initialValue: entry.firstName
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "lastName",
                                element: "input",
                                type: "text",
                                label: "Last Name *",
                                validators: [
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                                ],
                                onInput: inputHandler,
                                initialValidity: true,
                                initialValue: entry.lastName
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row form-row-flex-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "age",
                                element: "input",
                                type: "number",
                                label: "Age *",
                                min: 0,
                                validators: [
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                                ],
                                onInput: inputHandler,
                                initialValidity: true,
                                initialValue: entry.age
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "city",
                                element: "input",
                                type: "text",
                                label: "City *",
                                validators: [
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                                ],
                                onInput: inputHandler,
                                initialValidity: true,
                                initialValue: entry.city
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-row form-row-flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            id: "church",
                            element: "input",
                            type: "text",
                            label: "Church *",
                            validators: [
                                (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                            ],
                            onInput: inputHandler,
                            initialValidity: true,
                            initialValue: entry.church
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "form-row form-row-flex-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "telephone",
                                element: "input",
                                type: "tel",
                                label: "Phone Number *",
                                validators: [
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                                ],
                                onInput: inputHandler,
                                initialValidity: true,
                                initialValue: entry.telephone
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                id: "email",
                                element: "input",
                                type: "email",
                                label: "Email *",
                                validators: [
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)(),
                                    (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_EMAIL */ .Ox)()
                                ],
                                onInput: inputHandler,
                                initialValidity: true,
                                initialValue: entry.email
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "form-row form-row-flex-1",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_UIElements_Input__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            id: "voiceType",
                            element: "select",
                            type: "input",
                            label: "Voice Type *",
                            validators: [
                                (0,_utils_validators__WEBPACK_IMPORTED_MODULE_8__/* .VALIDATOR_REQUIRE */ .hg)()
                            ],
                            onInput: inputHandler,
                            initialValidity: true,
                            initialValue: entry.voiceType,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "",
                                    disabled: true,
                                    defaultValue: true,
                                    children: "Select"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Soprano",
                                    children: "Soprano"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Alto",
                                    children: "Alto"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Tenor",
                                    children: "Tenor"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Bass",
                                    children: "Bass"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: "Unsure",
                                    children: "Unsure"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FormElements_SubmitButton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        isValid: formState.isValid,
                        formIsTouched: formIsTouched
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateEntries);


/***/ })

};
;