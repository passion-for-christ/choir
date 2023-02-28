"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/applications/conference-choir",{

/***/ "./utils/hooks/FormHooks/submit.hook.js":
/*!**********************************************!*\
  !*** ./utils/hooks/FormHooks/submit.hook.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useSubmitHook\": function() { return /* binding */ useSubmitHook; }\n/* harmony export */ });\n/* harmony import */ var _http_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.hook */ \"./utils/hooks/http.hook.js\");\nvar _s = $RefreshSig$();\n\nconst useSubmitHook = ()=>{\n    _s();\n    const { sendRequest  } = (0,_http_hook__WEBPACK_IMPORTED_MODULE_0__.useHttpClient)();\n    const submitHandler = async function(formState) {\n        let entry = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        if (formState.inputs.voiceType.value === \"Unsure\") {\n            formState.inputs.voiceType.value = \"Soprano\";\n        }\n        const formData = {\n            firstName: formState.inputs.firstName.value,\n            lastName: formState.inputs.lastName.value,\n            age: formState.inputs.age.value,\n            city: formState.inputs.city.value,\n            church: formState.inputs.church.value,\n            telephone: formState.inputs.telephone.value,\n            email: formState.inputs.email.value,\n            experienced: formState.inputs.experienced.value,\n            voiceType: formState.inputs.voiceType.value\n        };\n        console.log(\"URL: \", \"http://localhost:80/api/v1\");\n        try {\n            if (entry) {\n                await sendRequest(\"http://localhost:80/api/v1\" + \"/sign-up/\" + entry._id, \"PATCH\", JSON.stringify(formData), {\n                    \"Content-Type\": \"application/json\"\n                });\n            } else {\n                await sendRequest(\"http://localhost:80/api/v1\" + \"/sign-up/\", \"POST\", JSON.stringify(formData), {\n                    \"Content-Type\": \"application/json\"\n                });\n            }\n        } catch (err) {\n            console.error(\"There was an error updating choir entry:\", err);\n        }\n    };\n    return {\n        submitHandler\n    };\n};\n_s(useSubmitHook, \"ATw6GeJO5irgKnk14OhhfSdWy40=\", false, function() {\n    return [\n        _http_hook__WEBPACK_IMPORTED_MODULE_0__.useHttpClient\n    ];\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ob29rcy9Gb3JtSG9va3Mvc3VibWl0Lmhvb2suanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTZDO0FBRXRDLE1BQU1DLGdCQUFnQixJQUFNOztJQUMvQixNQUFNLEVBQUVDLFlBQVcsRUFBRSxHQUFHRix5REFBYUE7SUFFckMsTUFBTUcsZ0JBQWdCLGVBQU9DLFdBQTZCO1lBQWxCQyx5RUFBUSxLQUFLO1FBQ2pELElBQUlELFVBQVVFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLEtBQUssVUFBVTtZQUMvQ0osVUFBVUUsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEtBQUssR0FBRztRQUN2QyxDQUFDO1FBRUQsTUFBTUMsV0FBVztZQUNiQyxXQUFXTixVQUFVRSxNQUFNLENBQUNJLFNBQVMsQ0FBQ0YsS0FBSztZQUMzQ0csVUFBVVAsVUFBVUUsTUFBTSxDQUFDSyxRQUFRLENBQUNILEtBQUs7WUFDekNJLEtBQUtSLFVBQVVFLE1BQU0sQ0FBQ00sR0FBRyxDQUFDSixLQUFLO1lBQy9CSyxNQUFNVCxVQUFVRSxNQUFNLENBQUNPLElBQUksQ0FBQ0wsS0FBSztZQUNqQ00sUUFBUVYsVUFBVUUsTUFBTSxDQUFDUSxNQUFNLENBQUNOLEtBQUs7WUFDckNPLFdBQVdYLFVBQVVFLE1BQU0sQ0FBQ1MsU0FBUyxDQUFDUCxLQUFLO1lBQzNDUSxPQUFPWixVQUFVRSxNQUFNLENBQUNVLEtBQUssQ0FBQ1IsS0FBSztZQUNuQ1MsYUFBYWIsVUFBVUUsTUFBTSxDQUFDVyxXQUFXLENBQUNULEtBQUs7WUFDL0NELFdBQVdILFVBQVVFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLO1FBQy9DO1FBRUFVLFFBQVFDLEdBQUcsQ0FBQyxTQUFTQyw0QkFBdUI7UUFFNUMsSUFBSTtZQUNBLElBQUlmLE9BQU87Z0JBQ1AsTUFBTUgsWUFBWWtCLDRCQUF1QixHQUFHLGNBQWNmLE1BQU1rQixHQUFHLEVBQUUsU0FBU0MsS0FBS0MsU0FBUyxDQUFDaEIsV0FBVztvQkFDcEcsZ0JBQWdCO2dCQUNwQjtZQUNKLE9BQU87Z0JBQ0gsTUFBTVAsWUFBWWtCLDRCQUF1QixHQUFHLGFBQWEsUUFBUUksS0FBS0MsU0FBUyxDQUFDaEIsV0FBVztvQkFDdkYsZ0JBQWdCO2dCQUNwQjtZQUNKLENBQUM7UUFDTCxFQUFFLE9BQU9pQixLQUFLO1lBQ1ZSLFFBQVFTLEtBQUssQ0FBRSw0Q0FBMkNEO1FBQzlEO0lBQ0o7SUFFQSxPQUFPO1FBQUV2QjtJQUFjO0FBQzNCLEVBQUU7R0F0Q1dGOztRQUNlRCxxREFBYUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvaG9va3MvRm9ybUhvb2tzL3N1Ym1pdC5ob29rLmpzPzljYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlSHR0cENsaWVudCB9IGZyb20gJy4uL2h0dHAuaG9vayc7XG5cbmV4cG9ydCBjb25zdCB1c2VTdWJtaXRIb29rID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VuZFJlcXVlc3QgfSA9IHVzZUh0dHBDbGllbnQoKTtcblxuICAgIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZm9ybVN0YXRlLCBlbnRyeSA9IGZhbHNlKSA9PiB7XG4gICAgICAgIGlmIChmb3JtU3RhdGUuaW5wdXRzLnZvaWNlVHlwZS52YWx1ZSA9PT0gJ1Vuc3VyZScpIHtcbiAgICAgICAgICAgIGZvcm1TdGF0ZS5pbnB1dHMudm9pY2VUeXBlLnZhbHVlID0gJ1NvcHJhbm8nO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IGZvcm1TdGF0ZS5pbnB1dHMuZmlyc3ROYW1lLnZhbHVlLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGZvcm1TdGF0ZS5pbnB1dHMubGFzdE5hbWUudmFsdWUsXG4gICAgICAgICAgICBhZ2U6IGZvcm1TdGF0ZS5pbnB1dHMuYWdlLnZhbHVlLFxuICAgICAgICAgICAgY2l0eTogZm9ybVN0YXRlLmlucHV0cy5jaXR5LnZhbHVlLFxuICAgICAgICAgICAgY2h1cmNoOiBmb3JtU3RhdGUuaW5wdXRzLmNodXJjaC52YWx1ZSxcbiAgICAgICAgICAgIHRlbGVwaG9uZTogZm9ybVN0YXRlLmlucHV0cy50ZWxlcGhvbmUudmFsdWUsXG4gICAgICAgICAgICBlbWFpbDogZm9ybVN0YXRlLmlucHV0cy5lbWFpbC52YWx1ZSxcbiAgICAgICAgICAgIGV4cGVyaWVuY2VkOiBmb3JtU3RhdGUuaW5wdXRzLmV4cGVyaWVuY2VkLnZhbHVlLFxuICAgICAgICAgICAgdm9pY2VUeXBlOiBmb3JtU3RhdGUuaW5wdXRzLnZvaWNlVHlwZS52YWx1ZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zb2xlLmxvZygnVVJMOiAnLCBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2VuZFJlcXVlc3QocHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyAnL3NpZ24tdXAvJyArIGVudHJ5Ll9pZCwgJ1BBVENIJywgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLCB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IHNlbmRSZXF1ZXN0KHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgJy9zaWduLXVwLycsICdQT1NUJywgSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpLCB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgVGhlcmUgd2FzIGFuIGVycm9yIHVwZGF0aW5nIGNob2lyIGVudHJ5OmAsIGVycik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc3VibWl0SGFuZGxlciB9O1xufTsiXSwibmFtZXMiOlsidXNlSHR0cENsaWVudCIsInVzZVN1Ym1pdEhvb2siLCJzZW5kUmVxdWVzdCIsInN1Ym1pdEhhbmRsZXIiLCJmb3JtU3RhdGUiLCJlbnRyeSIsImlucHV0cyIsInZvaWNlVHlwZSIsInZhbHVlIiwiZm9ybURhdGEiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFnZSIsImNpdHkiLCJjaHVyY2giLCJ0ZWxlcGhvbmUiLCJlbWFpbCIsImV4cGVyaWVuY2VkIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EX1VSTCIsIl9pZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnIiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/hooks/FormHooks/submit.hook.js\n"));

/***/ })

});