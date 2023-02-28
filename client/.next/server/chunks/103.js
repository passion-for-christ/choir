exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 8531:
/***/ ((module) => {

// Exports
module.exports = {
	"requiredText": "SubmitButton_requiredText__u_JD5"
};


/***/ }),

/***/ 5521:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UIElements_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2946);
/* harmony import */ var _SubmitButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8531);
/* harmony import */ var _SubmitButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SubmitButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);



const SubmitButton = ({ isValid , formIsTouched =true  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UIElements_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                disabled: !isValid || !formIsTouched,
                type: "submit",
                children: "Submit"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_SubmitButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default().requiredText),
                children: "* Required"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmitButton);


/***/ }),

/***/ 2946:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Button = (props)=>{
    if (props.href) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: props.href,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: `button button--${props.size || "default"} button--${props.color || "color"}`,
                target: props.target,
                children: props.children
            })
        });
    }
    if (props.to) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: props.to,
            exact: props.exact,
            target: props.target,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: `button button--${props.size || "default"} button--${props.color || "color"}`,
                children: props.children
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `button button--${props.size || "default"} button--${props.color || "color"}${props.classes ? " " + props.classes : ""}`,
        type: props.type,
        onClick: props.onClick,
        disabled: props.disabled,
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 9360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5674);



// add styling to the select element so there's a down arrow
const inputReducer = (state, action)=>{
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                value: action.val,
                isValid: (0,_utils_validators__WEBPACK_IMPORTED_MODULE_2__/* .validate */ .Gu)(action.val, action.validators)
            };
        case "TOUCH":
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};
const Input = (props)=>{
    const initialValue = props.initialValue || props.initialValue === false ? props.initialValue : "";
    const { id , type , element , onInput , label , placeholder , validators , errorText , disabled , initialValidity , children , autocomplete , rows , actionChange , align , name , min ,  } = props;
    const { 0: inputState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(inputReducer, {
        value: initialValue,
        isValid: initialValidity || false,
        isTouched: false
    });
    const { value , isValid , isTouched  } = inputState;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        onInput(id, value, isValid);
    }, [
        id,
        value,
        isValid,
        onInput,
        inputState
    ]);
    const changeHandler = (event)=>{
        const { target  } = event;
        switch(type){
            case "checkbox":
                dispatch({
                    type: "CHANGE",
                    val: target.checked,
                    validators: validators
                });
                if (actionChange) actionChange(event);
                break;
            case "radio":
                dispatch({
                    type: "CHANGE",
                    val: target.value,
                    validators: validators
                });
                if (actionChange) actionChange(event);
                break;
            default:
                dispatch({
                    type: "CHANGE",
                    val: target.value,
                    validators: validators
                });
                if (actionChange) actionChange(event);
                break;
        }
    };
    const touchHandler = ()=>{
        dispatch({
            type: "TOUCH"
        });
    };
    let htmlElement;
    switch(element){
        case "input":
            htmlElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                id: id,
                type: type,
                placeholder: placeholder,
                onChange: changeHandler,
                onBlur: touchHandler,
                value: value,
                min: min,
                disabled: disabled || false,
                autoComplete: autocomplete
            });
            break;
        case "textarea":
            htmlElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: id,
                rows: rows || 3,
                onChange: changeHandler,
                onBlur: touchHandler,
                value: value
            });
            break;
        case "select":
            htmlElement = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                id: id,
                value: value,
                onChange: changeHandler,
                onBlur: touchHandler,
                placeholder: placeholder,
                children: children
            });
            break;
        case "checkbox":
            htmlElement = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `form-control form-control--checkbox form-control--checkbox--${align || "center"} ${!isValid && isTouched && "form-control--invalid"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: type,
                        id: id,
                        onBlur: touchHandler,
                        onChange: changeHandler,
                        checked: value
                    }),
                    !isValid && isTouched && errorText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: errorText
                    })
                ]
            });
            break;
        case "radio":
            htmlElement = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `form-control form-control--radio form-control--radio--${align || "center"} ${!isValid && isTouched && "form-control--invalid"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: type,
                        id: id,
                        onBlur: touchHandler,
                        name: name,
                        onChange: changeHandler,
                        value: initialValue
                    }),
                    !isValid && isTouched && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: errorText
                    })
                ]
            });
            break;
        default:
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `form-control ${!isValid && isTouched && "form-control--invalid"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: id,
                children: label
            }),
            htmlElement,
            !isValid && isTouched && errorText && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: errorText
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ }),

/***/ 4457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const LoadingSpinner = (props)=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.style.overflow = "hidden";
        const reset = ()=>{
            return document.body.style.overflow = "";
        };
        return reset;
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${props.asOverlay ? "loading-spinner__overlay" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "lds-dual-ring"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);


/***/ }),

/***/ 1636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ INITIAL_REGISTRATION_INPUTS)
/* harmony export */ });
const INITIAL_REGISTRATION_INPUTS = {
    firstName: {
        value: "",
        isValid: false
    },
    lastName: {
        value: "",
        isValid: false
    },
    age: {
        value: "",
        isValid: false
    },
    telephone: {
        value: "",
        isValid: false
    },
    email: {
        value: "",
        isValid: false
    },
    city: {
        value: "",
        isValid: false
    },
    church: {
        value: "",
        isValid: false
    },
    experienced: {
        value: false,
        isValid: true
    },
    voiceType: {
        value: "",
        isValid: false
    }
};


/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const formReducer = (state, action)=>{
    switch(action.type){
        case "INPUT_CHANGE":
            let formIsValid = true;
            for(const inputId in state.inputs){
                if (!state.inputs[inputId]) continue;
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            };
        case "SET_DATA":
            return {
                ...state,
                inputs: action.inputs,
                isValid: action.formIsValid
            };
        default:
            return state;
    }
};
const useForm = (initialInputs, initialFormValidity)=>{
    const { 0: formState , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity
    });
    const inputHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, value, isValid)=>{
        dispatch({
            type: "INPUT_CHANGE",
            value: value,
            isValid: isValid,
            inputId: id
        });
    }, []);
    const setFormData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((inputData, formValidity)=>{
        dispatch({
            type: "SET_DATA",
            inputs: inputData,
            formIsValid: formValidity
        });
    }, []);
    return [
        formState,
        inputHandler,
        setFormData
    ];
};


/***/ }),

/***/ 1816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ useSubmitHook)
/* harmony export */ });
/* harmony import */ var _http_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3993);

const useSubmitHook = ()=>{
    const { sendRequest  } = (0,_http_hook__WEBPACK_IMPORTED_MODULE_0__/* .useHttpClient */ .x)();
    const submitHandler = async (formState, entry = false)=>{
        if (formState.inputs.voiceType.value === "Unsure") {
            formState.inputs.voiceType.value = "Soprano";
        }
        const formData = {
            firstName: formState.inputs.firstName.value,
            lastName: formState.inputs.lastName.value,
            age: formState.inputs.age.value,
            city: formState.inputs.city.value,
            church: formState.inputs.church.value,
            telephone: formState.inputs.telephone.value,
            email: formState.inputs.email.value,
            experienced: formState.inputs.experienced.value,
            voiceType: formState.inputs.voiceType.value
        };
        try {
            if (entry) {
                await sendRequest("https://api.passionforchrist.org/api/v1" + "/sign-up/" + entry._id, "PATCH", JSON.stringify(formData), {
                    "Content-Type": "application/json"
                });
            } else {
                await sendRequest("https://api.passionforchrist.org/api/v1" + "/sign-up/", "POST", JSON.stringify(formData), {
                    "Content-Type": "application/json"
                });
            }
        } catch (err) {
            console.error(`There was an error updating choir entry:`, err);
        }
    };
    return {
        submitHandler
    };
};


/***/ }),

/***/ 3993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ useHttpClient)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useHttpClient = ()=>{
    const { 0: isLoading , 1: setIsLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const activeHttpRequests = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    const sendRequest = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (url, method = "GET", body = null, headers = {})=>{
        setIsLoading(true);
        // use this controller to request
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);
        try {
            const response = await fetch(url, {
                method,
                body,
                headers,
                signal: httpAbortCtrl.signal,
                mode: "cors"
            });
            const responseData = await response.json();
            activeHttpRequests.current = activeHttpRequests.current.filter((reqCtrl)=>reqCtrl !== httpAbortCtrl);
            if (!response.ok) {
                throw new Error(responseData.message);
            }
            setIsLoading(false);
            return responseData;
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
            throw err;
        }
    }, []);
    const clearError = ()=>{
        setError(null);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            activeHttpRequests.current.forEach((abortCtrl)=>abortCtrl.abort());
        };
    }, []);
    return {
        isLoading,
        error,
        sendRequest,
        clearError
    };
};


/***/ }),

/***/ 5674:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gu": () => (/* binding */ validate),
/* harmony export */   "Ox": () => (/* binding */ VALIDATOR_EMAIL),
/* harmony export */   "hg": () => (/* binding */ VALIDATOR_REQUIRE)
/* harmony export */ });
/* unused harmony exports VALIDATOR_NOT_REQUIRED, VALIDATOR_TRUE, VALIDATOR_MINLENGTH, VALIDATOR_MAX_LENGTH, VALIDATOR_MIN, VALIDATOR_MAX, VALIDATOR_EQUAL */
const VALIDATOR_TYPE_REQUIRE = "REQUIRE";
const VALIDATOR_TYPE_NOT_REQUIRED = "NOT_REQUIRED";
const VALIDATOR_TYPE_TRUE = "TRUE";
const VALIDATOR_TYPE_MIN_LENGTH = "MIN_LENGTH";
const VALIDATOR_TYPE_MAX_LENGTH = "MAX_LENGTH";
const VALIDATOR_TYPE_MIN = "MIN";
const VALIDATOR_TYPE_MAX = "MAX";
const VALIDATOR_TYPE_EMAIL = "EMAIL";
const VALIDATOR_TYPE_EQUAL = "EQUAL";
const VALIDATOR_REQUIRE = ()=>({
        type: VALIDATOR_TYPE_REQUIRE
    });
const VALIDATOR_NOT_REQUIRED = ()=>({
        type: VALIDATOR_TYPE_NOT_REQUIRED
    });
const VALIDATOR_TRUE = ()=>({
        type: VALIDATOR_TYPE_TRUE
    });
const VALIDATOR_MINLENGTH = (val)=>({
        type: VALIDATOR_TYPE_MIN_LENGTH,
        val: val
    });
const VALIDATOR_MAX_LENGTH = (val)=>({
        type: VALIDATOR_TYPE_MAX_LENGTH,
        val: val
    });
const VALIDATOR_MIN = (val)=>({
        type: VALIDATOR_TYPE_MIN,
        val: val
    });
const VALIDATOR_MAX = (val)=>({
        type: VALIDATOR_TYPE_MAX,
        val: val
    });
const VALIDATOR_EMAIL = ()=>({
        type: VALIDATOR_TYPE_EMAIL
    });
const VALIDATOR_EQUAL = (val)=>({
        type: VALIDATOR_TYPE_EQUAL,
        val: val
    });
const validate = (value, validators)=>{
    let isValid = true;
    for (const validator of validators){
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            isValid = isValid && value.trim().length > 0;
        }
        if (validator.type === VALIDATOR_TYPE_NOT_REQUIRED) {
            isValid = true;
        }
        if (validator.type === VALIDATOR_TYPE_TRUE) {
            isValid = isValid && value === true;
        }
        if (validator.type === VALIDATOR_TYPE_MIN_LENGTH) {
            isValid = isValid && value.trim().length >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX_LENGTH) {
            isValid = isValid && value.trim().length <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MIN) {
            isValid = isValid && +value >= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_MAX) {
            isValid = isValid && +value <= validator.val;
        }
        if (validator.type === VALIDATOR_TYPE_EMAIL) {
            isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
        }
        if (validator.type === VALIDATOR_TYPE_EQUAL) {
            isValid = isValid && value === validator.val;
        }
    }
    return isValid;
};


/***/ })

};
;