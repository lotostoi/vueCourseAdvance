/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["a949","chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "0029":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cotalog_vue_vue_type_style_index_0_id_ee6f6310_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1446");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cotalog_vue_vue_type_style_index_0_id_ee6f6310_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cotalog_vue_vue_type_style_index_0_id_ee6f6310_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cotalog_vue_vue_type_style_index_0_id_ee6f6310_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0854":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0a89":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0b71":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1246":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_6fe034d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8ac9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_6fe034d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_6fe034d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_style_index_0_id_6fe034d4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1446":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30c3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "5c01":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_2b5296b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e482");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_2b5296b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_2b5296b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_style_index_0_id_2b5296b0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8225":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageGood_vue_vue_type_style_index_0_id_2c351e69_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("93e0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageGood_vue_vue_type_style_index_0_id_2c351e69_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageGood_vue_vue_type_style_index_0_id_2c351e69_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageGood_vue_vue_type_style_index_0_id_2c351e69_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "827d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_644cb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f8a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_644cb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_644cb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Base_vue_vue_type_style_index_0_id_644cb074_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8ac9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "93e0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9b7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_457b269e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b854");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_457b269e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_457b269e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_404_vue_vue_type_style_index_0_id_457b269e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9c0c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a949":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js
var es_promise_finally = __webpack_require__("a79d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=52d67e6a&
var Appvue_type_template_id_52d67e6a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_c('app-arlet'),_c('app-header',{on:{"showCart":function($event){_vm.on=false},"showCotalog":function($event){_vm.on=true}}}),_c('div',{staticClass:"row main"},[_c('app-nav',{staticClass:"mt-2"}),_c('div',{staticClass:"col-10 mt-2 contAnim"},[_c('transition',{attrs:{"enter-active-class":"enter","leave-active-class":"leave","mode":"out-in"}},[_c('router-view')],1)],1)],1),_c('app-footer')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=52d67e6a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__("5530");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=962dcede&scoped=true&
var Headervue_type_template_id_962dcede_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"container"},[_c('div',{staticClass:"d-block"},[_c('div',{staticClass:"cont"},[_c('router-link',{staticClass:"hover",attrs:{"to":{name:'Main'}}},[_c('h1',[_vm._v("Silmple SPA")])]),_c('router-link',{staticClass:"cart",attrs:{"to":{name:'Cart'},"active-class":"cart-activ"}},[_c('b-icon-cart',{staticClass:"b-icon hover ml-10",attrs:{"icon":"cart"}}),_c('div',[_c('p',[_vm._v("Amount: "+_vm._s(_vm.total.cnt))]),_c('p',[_vm._v("Price: $"+_vm._s(_vm.total.price))])])],1),_c('router-link',{staticClass:"login",attrs:{"to":{name:'Login'},"active-class":"cart-activ"}},[(!_vm.user)?_c('p',[_vm._v("Enter")]):_c('p',[_vm._v(_vm._s(_vm.user.login))])])],1)])])])}
var Headervue_type_template_id_962dcede_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=962dcede&scoped=true&

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/icons/icons.js + 1 modules
var icons = __webpack_require__("7386");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {
    BIconCart: icons["b" /* BIconCart */]
  },
  data: function data() {
    return {};
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    total: "cart/total",
    user: "user/user"
  }))
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Header.vue?vue&type=style&index=0&id=962dcede&lang=scss&scoped=true&
var Headervue_type_style_index_0_id_962dcede_lang_scss_scoped_true_ = __webpack_require__("d7ab");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/Header.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_962dcede_scoped_true_render,
  Headervue_type_template_id_962dcede_scoped_true_staticRenderFns,
  false,
  null,
  "962dcede",
  null
  
)

/* harmony default export */ var Header = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Cotalog.vue?vue&type=template&id=ee6f6310&scoped=true&
var Cotalogvue_type_template_id_ee6f6310_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"mt-1"},[(_vm.goods.length>0)?_c('div',{staticClass:"container border rounded pl-3 pr-3 pb-3"},[_c('h1',[_vm._v("Catalog")]),_c('div',{staticClass:"cont-prod"},_vm._l((_vm.goods),function(good){return _c('section',{key:good.id,staticClass:"prod"},[_c('img',{attrs:{"src":good.img,"alt":good.title}}),_c('h3',[_vm._v(_vm._s(good.title))]),_c('p',[_vm._v("$"+_vm._s(good.price))]),_c('router-link',{attrs:{"to":{ name: 'Good', params: { id: good.id }}}},[_vm._v("Подробнее...")]),_c('transition',{attrs:{"enter-active-class":"btn-enter","leave-active-class":"btn-leave","mode":"out-in"}},[(_vm.checkInCart(good.id))?_c('button',{key:"remove",staticClass:"btn btn-info persp",class:good.inProcessing ? 'blok-btn': '',attrs:{"disabled":good.inProcessing},on:{"click":function($event){return _vm.decCart({id:good.id})}}},[_vm._v("Remove from cart")]):_c('button',{key:"add",staticClass:"btn btn-info persp",class:good.inProcessing ? 'blok-btn': '',attrs:{"disabled":good.inProcessing},on:{"click":function($event){return _vm.addCart({id:good.id})}}},[_vm._v("Add to cart")])])],1)}),0)]):_c('div',{staticClass:"spa-loading-cont"},[_vm._m(0)])])}
var Cotalogvue_type_template_id_ee6f6310_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner-border",staticStyle:{"width":"10rem","height":"10rem"},attrs:{"role":"status"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Loading...")])])}]


// CONCATENATED MODULE: ./src/views/Cotalog.vue?vue&type=template&id=ee6f6310&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/good.vue?vue&type=template&id=1038ef6c&
var goodvue_type_template_id_1038ef6c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"border "},[_c('img',{staticClass:"col col-sm-8",attrs:{"src":_vm.good.img,"alt":"name"}}),_c('h2',{staticClass:"col col-sm-8"},[_vm._v(_vm._s(_vm.good.name))]),_c('div',{staticClass:"price"},[_vm._v(_vm._s(_vm.good.price))])])}
var goodvue_type_template_id_1038ef6c_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/good.vue?vue&type=template&id=1038ef6c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/good.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var goodvue_type_script_lang_js_ = ({
  props: {
    good: {
      type: Object,
      required: true
    }
  },
  computed: Object(vuex_esm["c" /* mapGetters */])(["price", "cnt"]),
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])(["getCnt"])), {}, {
    chengCnt: function chengCnt(id, e) {
      this.getCnt({
        id: id,
        e: e
      });
    }
  })
});
// CONCATENATED MODULE: ./src/components/good.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_goodvue_type_script_lang_js_ = (goodvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/good.vue





/* normalize component */

var good_component = Object(componentNormalizer["a" /* default */])(
  components_goodvue_type_script_lang_js_,
  goodvue_type_template_id_1038ef6c_render,
  goodvue_type_template_id_1038ef6c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var components_good = (good_component.exports);
// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/card/card.js + 9 modules
var card = __webpack_require__("205f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Cotalog.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Cotalogvue_type_script_lang_js_ = ({
  components: {
    AppProduct: components_good,
    BCard: card["a" /* BCard */]
  },
  created: function created() {
    this.$store.dispatch("title/setTitle", "Catalog");
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    goods: "cotalog/goods",
    checkInCart: "cart/checkInCart"
  })),
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])({
    decCart: "cart/decCart",
    addCart: "cart/addCart"
  }))
});
// CONCATENATED MODULE: ./src/views/Cotalog.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Cotalogvue_type_script_lang_js_ = (Cotalogvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Cotalog.vue?vue&type=style&index=0&id=ee6f6310&lang=scss&scoped=true&
var Cotalogvue_type_style_index_0_id_ee6f6310_lang_scss_scoped_true_ = __webpack_require__("0029");

// CONCATENATED MODULE: ./src/views/Cotalog.vue






/* normalize component */

var Cotalog_component = Object(componentNormalizer["a" /* default */])(
  views_Cotalogvue_type_script_lang_js_,
  Cotalogvue_type_template_id_ee6f6310_scoped_true_render,
  Cotalogvue_type_template_id_ee6f6310_scoped_true_staticRenderFns,
  false,
  null,
  "ee6f6310",
  null
  
)

/* harmony default export */ var Cotalog = (Cotalog_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Cart.vue?vue&type=template&id=daccf1c2&scoped=true&
var Cartvue_type_template_id_daccf1c2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mt-1"},[(_vm.status)?_c('div',{staticClass:"spa-cart-container border rounded p-2"},[_c('h1',[_vm._v("Cart")]),(_vm.goodsDitailed.length>0)?_c('table',{staticClass:"spa-table"},[_vm._m(0),_c('transition-group',{attrs:{"leave-active-class":"prod-leave","teg":"tbody"}},_vm._l((_vm.goodsDitailed),function(good){return _c('tr',{key:good.id,staticClass:"spa-table-row"},[_c('th',{staticClass:"spa-img"},[_c('img',{attrs:{"src":good.img,"alt":"good.img"}})]),_c('td',{staticClass:"spa-name"},[_c('router-link',{attrs:{"to":{ name: 'Good', params: { id: good.id }}}},[_c('span',[_vm._v(_vm._s(good.title))])])],1),_c('td',{staticClass:"spa-price"},[_vm._v("$ "+_vm._s(good.price))]),_c('td',{staticClass:"spa-amount"},[_c('div',{staticClass:"spa-div"},[_c('button',{staticClass:"btn btn-warning",class:good.inProcessing ? 'blok-btn': '',attrs:{"disabled":good.inProcessing},on:{"click":function($event){return _vm.decCart({id:good.id})}}},[_vm._v("-1")]),_c('input',{staticClass:"spa-input",attrs:{"type":"text"},domProps:{"value":good.cnt},on:{"change":function($event){return _vm.chengCart({id:good.id,e:$event})}}}),_c('button',{staticClass:"btn btn-success",class:_vm.clearCartBlok ? 'blok-btn': '',attrs:{"disabled":good.inProcessing},on:{"click":function($event){return _vm.incCart({id:good.id})}}},[_vm._v("+1")])])])])}),0)],1):_c('div',{staticClass:"cartEmpty"},[_c('p',[_vm._v("Cart is empty...")]),_c('p',[_vm._v(" Select some products from the "),_c('router-link',{attrs:{"to":{name:'Cotalog'}}},[_vm._v("catalog")])],1)]),_c('hr'),_c('p',[_vm._v("TotalQuantit: "+_vm._s(_vm.total.cnt))]),_c('p',[_vm._v("TotalPrice: "+_vm._s(_vm.total.price))]),_c('hr'),(_vm.goodsDitailed.length>0)?_c('button',{staticClass:"btn btn-success clear",attrs:{"disabled":_vm.clearCartBlok},on:{"click":_vm.clear}},[_vm._v("Clear cart")]):_vm._e()]):_c('div',{staticClass:"spa-loading-cont"},[_vm._m(1)])])}
var Cartvue_type_template_id_daccf1c2_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',{staticClass:"spa-table-header"},[_c('th',{staticClass:"spa-img"},[_vm._v("Image")]),_c('th',{staticClass:"spa-name"},[_vm._v("Name")]),_c('th',{staticClass:"spa-price"},[_vm._v("Price")]),_c('th',{staticClass:"spa-amount"},[_vm._v("Amount")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner-border",staticStyle:{"width":"10rem","height":"10rem"},attrs:{"role":"status"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Loading...")])])}]


// CONCATENATED MODULE: ./src/views/Cart.vue?vue&type=template&id=daccf1c2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Cart.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Cartvue_type_script_lang_js_ = ({
  components: {
    BCard: card["a" /* BCard */]
  },
  created: function created() {
    this.$store.dispatch("title/setTitle", "Cart");
  },
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    goodsInCart: "cart/goodsInCart",
    total: "cart/total",
    goodsDitailed: "cart/goodsDitailed"
  })), {}, {
    status: function status() {
      return this.$store.state.cart.status;
    },
    clearCartBlok: function clearCartBlok() {
      return this.$store.state.cart.clearCartBlok;
    }
  }),
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])({
    decCart: "cart/decCart",
    incCart: "cart/incCart",
    chengCart: "cart/chengCart",
    clear: "cart/clearCart",
    getCart: "cart/getCart"
  }))
});
// CONCATENATED MODULE: ./src/views/Cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Cartvue_type_script_lang_js_ = (Cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Cart.vue?vue&type=style&index=0&id=daccf1c2&lang=scss&scoped=true&
var Cartvue_type_style_index_0_id_daccf1c2_lang_scss_scoped_true_ = __webpack_require__("f8ea");

// CONCATENATED MODULE: ./src/views/Cart.vue






/* normalize component */

var Cart_component = Object(componentNormalizer["a" /* default */])(
  views_Cartvue_type_script_lang_js_,
  Cartvue_type_template_id_daccf1c2_scoped_true_render,
  Cartvue_type_template_id_daccf1c2_scoped_true_staticRenderFns,
  false,
  null,
  "daccf1c2",
  null
  
)

/* harmony default export */ var Cart = (Cart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav.vue?vue&type=template&id=56a39a86&scoped=true&
var navvue_type_template_id_56a39a86_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"col-2 mt-2"},[_c('ul',{staticClass:"list-group"},[_vm._l((_vm.menu),function(rout){return _c('router-link',{key:rout.path,staticClass:"list-group-item",attrs:{"exact":"","active-class":"spa-nav-link-active","to":{name:rout.name},"tag":"li"}},[_c('a',[_vm._v(_vm._s(rout.name))])])}),(_vm.user)?_c('router-link',{key:"offis",staticClass:"list-group-item",attrs:{"exact":"","active-class":"spa-nav-link-active","to":"/office","teg":"li"}},[_c('a',[_vm._v("Office")])]):_vm._e()],2)])}
var navvue_type_template_id_56a39a86_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/nav.vue?vue&type=template&id=56a39a86&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/nav.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var navvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      menu: [{
        name: "Main"
      }, {
        name: "Cotalog"
      }]
    };
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    user: "user/user"
  }))
});
// CONCATENATED MODULE: ./src/components/nav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_navvue_type_script_lang_js_ = (navvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/nav.vue?vue&type=style&index=0&id=56a39a86&lang=scss&scoped=true&
var navvue_type_style_index_0_id_56a39a86_lang_scss_scoped_true_ = __webpack_require__("cca5");

// CONCATENATED MODULE: ./src/components/nav.vue






/* normalize component */

var nav_component = Object(componentNormalizer["a" /* default */])(
  components_navvue_type_script_lang_js_,
  navvue_type_template_id_56a39a86_scoped_true_render,
  navvue_type_template_id_56a39a86_scoped_true_staticRenderFns,
  false,
  null,
  "56a39a86",
  null
  
)

/* harmony default export */ var nav = (nav_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=template&id=2b5296b0&scoped=true&
var footervue_type_template_id_2b5296b0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_c('p',[_vm._v("© Brand All Rights Reserved.")]),_c('div',[_vm._v(_vm._s(_vm.year))])])}
var footervue_type_template_id_2b5296b0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/footer.vue?vue&type=template&id=2b5296b0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/footer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var footervue_type_script_lang_js_ = ({
  data: function data() {
    return {
      year: 2015
    };
  },
  beforeMount: function beforeMount() {
    var d = new Date();
    this.year = d.getFullYear();
  }
});
// CONCATENATED MODULE: ./src/components/footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_footervue_type_script_lang_js_ = (footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/footer.vue?vue&type=style&index=0&id=2b5296b0&lang=scss&scoped=true&
var footervue_type_style_index_0_id_2b5296b0_lang_scss_scoped_true_ = __webpack_require__("5c01");

// CONCATENATED MODULE: ./src/components/footer.vue






/* normalize component */

var footer_component = Object(componentNormalizer["a" /* default */])(
  components_footervue_type_script_lang_js_,
  footervue_type_template_id_2b5296b0_scoped_true_render,
  footervue_type_template_id_2b5296b0_scoped_true_staticRenderFns,
  false,
  null,
  "2b5296b0",
  null
  
)

/* harmony default export */ var footer = (footer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert.vue?vue&type=template&id=2686417a&scoped=true&
var alertvue_type_template_id_2686417a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{staticClass:"cont-arlet",attrs:{"tag":"div","leave-active-class":"leave","enter-active-class":"enter","mode":"out-in"}},_vm._l((_vm.alerts),function(alert){return _c('div',{key:alert.id,staticClass:"message"},[_c('p',[_vm._v(_vm._s(alert.text))])])}),0)}
var alertvue_type_template_id_2686417a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/alert.vue?vue&type=template&id=2686417a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/alert.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//

/* harmony default export */ var alertvue_type_script_lang_js_ = ({
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    alerts: "alerts/all"
  }))
});
// CONCATENATED MODULE: ./src/components/alert.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_alertvue_type_script_lang_js_ = (alertvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/alert.vue?vue&type=style&index=0&id=2686417a&lang=scss&scoped=true&
var alertvue_type_style_index_0_id_2686417a_lang_scss_scoped_true_ = __webpack_require__("bbed");

// CONCATENATED MODULE: ./src/components/alert.vue






/* normalize component */

var alert_component = Object(componentNormalizer["a" /* default */])(
  components_alertvue_type_script_lang_js_,
  alertvue_type_template_id_2686417a_scoped_true_render,
  alertvue_type_template_id_2686417a_scoped_true_staticRenderFns,
  false,
  null,
  "2686417a",
  null
  
)

/* harmony default export */ var components_alert = (alert_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  components: {
    AppHeader: Header,
    AppContent: Cotalog,
    AppCart: Cart,
    AppNav: nav,
    AppFooter: footer,
    mapActions: vuex_esm["b" /* mapActions */],
    AppArlet: components_alert
  },
  data: function data() {
    return {};
  },
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    orderStatus: "status"
  })),
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])({
    makeOrder: "send"
  }))
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_52d67e6a_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("1da1");

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Main.vue?vue&type=template&id=7be0c706&scoped=true&
var Mainvue_type_template_id_7be0c706_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Mainvue_type_template_id_7be0c706_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h1',[_vm._v("The Shop")]),_c('p',[_vm._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ex facilis obcaecati, aperiam perspiciatis dolor? Dolore accusantium doloremque laudantium? Explicabo, vel eligendi exercitationem beatae eum omnis odit. Alias sequi molestiae quo exercitationem ab itaque ex omnis inventore consectetur voluptate explicabo placeat maxime eos, atque quisquam nam ut quos error reiciendis recusandae. Repudiandae sint dolor et, reiciendis, veniam labore animi quam mollitia ullam voluptates vitae ad est quia ratione quis porro libero aspernatur deleniti eaque amet. Reprehenderit doloremque modi laudantium nisi consectetur tempore autem, nostrum dicta nesciunt cumque odit nobis, facere explicabo, rem nemo laboriosam at corrupti recusandae itaque id quos obcaecati eum officiis quod! Ipsum alias repudiandae nemo! Facere culpa vero atque magni reprehenderit, nostrum perferendis in eos distinctio id a vitae sunt ab nisi! Dolorem odio quis similique laudantium praesentium delectus ab animi sit velit? Eveniet exercitationem saepe, temporibus fugit, culpa nam, assumenda sapiente corrupti provident omnis necessitatibus eligendi nisi atque minus aliquid rerum totam sequi possimus. Dignissimos labore atque iusto eum possimus, similique fugit illum, magnam laboriosam, provident harum adipisci neque deleniti. Cumque voluptatum maiores vel sunt eveniet, repellat modi at beatae officiis laudantium ab harum excepturi! Repudiandae delectus esse, laudantium totam maxime commodi provident praesentium reiciendis doloremque facilis reprehenderit ipsa exercitationem, quia laborum. Distinctio tempora mollitia nemo exercitationem, deserunt eum veniam explicabo officiis unde libero. Reprehenderit totam quae animi quod recusandae? Enim autem voluptatum alias maiores ducimus explicabo veritatis, cum ipsam velit doloremque dolorem obcaecati, dolorum distinctio, voluptatibus eligendi deleniti beatae fugit iure cumque eum quae temporibus. Odit neque excepturi commodi. Dolore non deserunt cum. In amet necessitatibus atque, aliquid, dolor tempora numquam id nam veniam qui exercitationem possimus ratione quod modi a, totam officiis natus. Corporis quibusdam fuga numquam vero dolore ad, debitis aliquid maiores dicta omnis consequuntur, sed nemo delectus assumenda aspernatur repellendus tenetur dolor.")])])}]


// CONCATENATED MODULE: ./src/views/Main.vue?vue&type=template&id=7be0c706&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Main.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var Mainvue_type_script_lang_js_ = ({
  created: function created() {
    this.$store.dispatch("title/setTitle", "Main");
  }
});
// CONCATENATED MODULE: ./src/views/Main.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Mainvue_type_script_lang_js_ = (Mainvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Main.vue?vue&type=style&index=0&id=7be0c706&leng=scss&scoped=true&lang=css&
var Mainvue_type_style_index_0_id_7be0c706_leng_scss_scoped_true_lang_css_ = __webpack_require__("c0e7");

// CONCATENATED MODULE: ./src/views/Main.vue






/* normalize component */

var Main_component = Object(componentNormalizer["a" /* default */])(
  views_Mainvue_type_script_lang_js_,
  Mainvue_type_template_id_7be0c706_scoped_true_render,
  Mainvue_type_template_id_7be0c706_scoped_true_staticRenderFns,
  false,
  null,
  "7be0c706",
  null
  
)

/* harmony default export */ var Main = (Main_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=template&id=94aa835c&
var _404vue_type_template_id_94aa835c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('spa-404')}
var _404vue_type_template_id_94aa835c_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/404.vue?vue&type=template&id=94aa835c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/404.vue?vue&type=template&id=457b269e&scoped=true&
var _404vue_type_template_id_457b269e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cont"},[_c('h1',[_vm._v("404")]),_c('router-link',{attrs:{"to":{name:'Main'}}},[_vm._v("Come back to Home page....")])],1)}
var _404vue_type_template_id_457b269e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/404.vue?vue&type=template&id=457b269e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/404.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var _404vue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/components/404.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_404vue_type_script_lang_js_ = (_404vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/404.vue?vue&type=style&index=0&id=457b269e&lang=scss&scoped=true&
var _404vue_type_style_index_0_id_457b269e_lang_scss_scoped_true_ = __webpack_require__("9b7e");

// CONCATENATED MODULE: ./src/components/404.vue






/* normalize component */

var _404_component = Object(componentNormalizer["a" /* default */])(
  components_404vue_type_script_lang_js_,
  _404vue_type_template_id_457b269e_scoped_true_render,
  _404vue_type_template_id_457b269e_scoped_true_staticRenderFns,
  false,
  null,
  "457b269e",
  null
  
)

/* harmony default export */ var _404 = (_404_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/404.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var views_404vue_type_script_lang_js_ = ({
  components: {
    Spa404: _404
  },
  created: function created() {
    this.$store.dispatch('title/setTitle', '404');
  }
});
// CONCATENATED MODULE: ./src/views/404.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_views_404vue_type_script_lang_js_ = (views_404vue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/404.vue





/* normalize component */

var views_404_component = Object(componentNormalizer["a" /* default */])(
  src_views_404vue_type_script_lang_js_,
  _404vue_type_template_id_94aa835c_render,
  _404vue_type_template_id_94aa835c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var views_404 = (views_404_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PageGood.vue?vue&type=template&id=2c351e69&scoped=true&
var PageGoodvue_type_template_id_2c351e69_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spa-cont"},[( _vm.id && _vm.item)?_c('div',{staticClass:"spa-cont-good"},[_c('img',{staticClass:"spa-img",attrs:{"src":_vm.item.img,"alt":""}}),_c('div',{staticClass:"spa-cont-buttons"},[_c('transition',{attrs:{"enter-active-class":"btn-enter","leave-active-class":"btn-leave","mode":"out-in"}},[(_vm.checkInCart(_vm.id))?_c('button',{key:"remove",staticClass:"btn btn-info btn-block persp",class:_vm.item.inProcessing ? 'blok-btn': '',attrs:{"disabled":_vm.item.inProcessing},on:{"click":function($event){return _vm.decCart({id:_vm.id})}}},[_vm._v("Remove from cart")]):_c('button',{key:"add",staticClass:"btn btn-info btn-block persp",class:_vm.item.inProcessing ? 'blok-btn': '',attrs:{"disabled":_vm.item.inProcessing},on:{"click":function($event){return _vm.addCart({id:_vm.id})}}},[_vm._v("Add to cart")])])],1),_c('h1',[_vm._v(_vm._s(_vm.item.title))]),_c('p',{staticClass:"price"},[_vm._v("Prise: $ "+_vm._s(_vm.item.price))]),_c('hr'),_c('div',{staticClass:"mb-1"},[_vm._v("Current Product Rating: "+_vm._s(_vm.currentRating)+"("+_vm._s(_vm.amountMarks)+" marks)")]),(_vm.showRatingEdit)?_c('div',{staticClass:"row"},[_c('div',{staticClass:"col col-2"},[_c('div',[_c('small',[_vm._v("Your last mark: "+_vm._s(_vm.lastMark || '...'))])]),_c('div',[_c('small',[_vm._v("Your current mark: "+_vm._s(_vm.currentMark || '...'))])])]),_c('div',{staticClass:"col col-8"},[_c('b-form-rating',{model:{value:(_vm.userMark),callback:function ($$v) {_vm.userMark=$$v},expression:"userMark"}})],1),_c('div',{staticClass:"col col-2"},[_c('button',{staticClass:"btn btn-primary",attrs:{"disabled":_vm.blockButton},on:{"click":_vm.sendRating}},[_vm._v("Send")])])]):_vm._e(),_c('hr'),_c('p',{staticClass:"spa-description"},[_vm._v(_vm._s(_vm.item.description))]),_c('router-link',{attrs:{"to":{name:'Cotalog'}}},[_vm._v("Back to producs")])],1):_c('div',{staticClass:"spa-loading-cont"},[_vm._m(0)])])}
var PageGoodvue_type_template_id_2c351e69_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner-border",staticStyle:{"width":"10rem","height":"10rem"},attrs:{"role":"status"}},[_c('span',{staticClass:"sr-only"},[_vm._v("Loading...")])])}]


// CONCATENATED MODULE: ./src/views/PageGood.vue?vue&type=template&id=2c351e69&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.to-fixed.js
var es_number_to_fixed = __webpack_require__("b680");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/form-rating/form-rating.js + 4 modules
var form_rating = __webpack_require__("db6c");

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// CONCATENATED MODULE: ./src/utils/tokens.js


var LOCAL_ACCESS_NAME = 'auth_accessToken';

function setTokens(access) {
  if (true) {
    localStorage.setItem(LOCAL_ACCESS_NAME, access);
  }
}

function cleanTokensData() {
  if (true) {
    localStorage.removeItem(LOCAL_ACCESS_NAME);
  }
}

function getAccessToken() {
  if (true) {
    return localStorage.getItem(LOCAL_ACCESS_NAME);
  }
}

function getJWTPayload(token) {
  return parseJWT(token).payload;
}

function parseJWT(token) {
  var parts = token.split('.');
  return {
    header: parsePart(parts[0]),
    payload: parsePart(parts[1]),
    sign: parts[2]
  };
}

function parsePart(str) {
  return JSON.parse(atob(str));
}


// CONCATENATED MODULE: ./src/api/http.js





var instance = axios_default.a.create({
  baseURL: 'http://localhost/VueCourse/',
  timeout: 10000,
  withCredentials: true
});
instance.interceptors.request.use(addAccessToken);
instance.interceptors.response.use(function (request) {
  return request;
}, /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(error) {
    var responce;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!('response' in error) || !error.response || !('config' in error) || !('errorSuppression' in error.config))) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", Promise.reject(error));

          case 2:
            if (!(error.response.status !== 401)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", Promise.reject(error));

          case 4:
            _context.next = 6;
            return instance.get('auth/refresh/refresh.php');

          case 6:
            responce = _context.sent;

            if (responce.data.res) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", Promise.reject(error));

          case 9:
            setTokens(responce.data.accessToken);
            return _context.abrupt("return", axios_default()(addAccessToken(error.config)));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
function addResponseHandler(onSuccess, onError) {
  instance.interceptors.response.use(onSuccess, onError);
}
/* harmony default export */ var http = (instance);

function addAccessToken(request) {
  var accessToken = getAccessToken();

  if (accessToken !== null) {
    request.headers.Authorization = "Bearer ".concat(accessToken);
  }

  return request;
}
// CONCATENATED MODULE: ./src/api/cotalog.js



function cotalog_all() {
  return _all.apply(this, arguments);
}

function _all() {
  _all = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$myhttp, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return http('products.php');

          case 2:
            _yield$myhttp = _context.sent;
            data = _yield$myhttp.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _all.apply(this, arguments);
}

function getRating(_x) {
  return _getRating.apply(this, arguments);
}

function _getRating() {
  _getRating = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var _yield$myhttp2, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return http('ratings.php', {
              params: {
                id: id
              }
            });

          case 2:
            _yield$myhttp2 = _context2.sent;
            data = _yield$myhttp2.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getRating.apply(this, arguments);
}

function sentRating(_x2, _x3) {
  return _sentRating.apply(this, arguments);
}

function _sentRating() {
  _sentRating = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id, mark) {
    var _yield$myhttp$put, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return http.put('ratings.php', {
              id: id,
              mark: mark
            }, {
              errorSuppression: {
                text: 'при отправке рейтинга. Повторите действие, если ошибка повториться, отбратитесь в слушжбу поддержки...'
              }
            });

          case 2:
            _yield$myhttp$put = _context3.sent;
            data = _yield$myhttp$put.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _sentRating.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/PageGood.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var PageGoodvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      userMark: "",
      rating: null,
      lastMark: null
    };
  },
  created: function created() {
    var _this = this;

    this.$store.getters["user/ready"].then(function () {
      return _this.gRaring();
    });
    this.$store.dispatch("title/setTitle", "".concat(this.item.title));
  },
  components: {
    Spa404: _404,
    BFormRating: form_rating["a" /* BFormRating */]
  },
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])({
    decCart: "cart/decCart",
    addCart: "cart/addCart",
    alert: "alerts/add"
  })), {}, {
    sendRating: function sendRating() {
      var _this2 = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return sentRating(_this2.id, _this2.userMark);

              case 2:
                res = _context.sent;
                res && _this2.gRaring();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    gRaring: function gRaring() {
      var _this3 = this;

      getRating(this.id).then(function (data) {
        _this3.rating = data;
        _this3.lastMark = data.your;
      });
    }
  }),
  computed: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    goods: "cotalog/goods",
    good: "cotalog/getGood",
    checkInCart: "cart/checkInCart",
    checkRole: "user/checkRole",
    user: "user/user",
    ready: "user/ready"
  })), {}, {
    id: function id() {
      return /\D/.test(this.$route.params.id) ? false : this.$route.params.id;
    },
    item: function item() {
      return this.good(this.id);
    },
    currentMark: function currentMark() {
      return this.userMark === "" ? 0 : this.userMark;
    },
    currentRating: function currentRating() {
      return this.rating ? this.rating.average.toFixed(2) : 0;
    },
    showRatingEdit: function showRatingEdit() {
      return this.user && this.checkRole(["auditor"]);
    },
    blockButton: function blockButton() {
      return this.currentMark === this.lastMark || this.currentMark === 0;
    },
    amountMarks: function amountMarks() {
      return this.rating ? this.rating.count : "";
    }
  })
});
// CONCATENATED MODULE: ./src/views/PageGood.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_PageGoodvue_type_script_lang_js_ = (PageGoodvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/PageGood.vue?vue&type=style&index=0&id=2c351e69&lang=scss&scoped=true&
var PageGoodvue_type_style_index_0_id_2c351e69_lang_scss_scoped_true_ = __webpack_require__("8225");

// CONCATENATED MODULE: ./src/views/PageGood.vue






/* normalize component */

var PageGood_component = Object(componentNormalizer["a" /* default */])(
  views_PageGoodvue_type_script_lang_js_,
  PageGoodvue_type_template_id_2c351e69_scoped_true_render,
  PageGoodvue_type_template_id_2c351e69_scoped_true_staticRenderFns,
  false,
  null,
  "2c351e69",
  null
  
)

/* harmony default export */ var PageGood = (PageGood_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=template&id=6fe034d4&scoped=true&
var Loginvue_type_template_id_6fe034d4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"form"},[_c('transition',{attrs:{"enter-active-class":"enter","leave-active-class":"leave","mode":"out-in"}},[(!_vm.user)?_c('div',{key:"login",staticClass:"login"},[_c('div',{staticClass:"fields"},[_c('b-form-input',{attrs:{"placeholder":"Login"},model:{value:(_vm.authData.login),callback:function ($$v) {_vm.$set(_vm.authData, "login", $$v)},expression:"authData.login"}})],1),_c('div',{staticClass:"fields"},[_c('b-form-input',{attrs:{"placeholder":"Password","type":"password"},model:{value:(_vm.authData.password),callback:function ($$v) {_vm.$set(_vm.authData, "password", $$v)},expression:"authData.password"}})],1),_c('div',{staticClass:"fields"},[_c('button',{staticClass:"btn btn-primary",attrs:{"type":"button"},on:{"click":_vm.tryLogin}},[_vm._v("Login")])]),(_vm.authData.errorText != '')?_c('div',[_c('p',{staticClass:"mt-2 mb-0 text-danger"},[_vm._v(_vm._s(_vm.authData.errorText))])]):_vm._e()]):_c('div',{key:"logOut",staticClass:"logout"},[_c('div',{staticClass:"fields"},[_c('strong',[_vm._v("User name:")]),_c('span',{staticClass:"ml-2"},[_vm._v(_vm._s(_vm.user.login))])]),_c('div',{staticClass:"fields"},[_c('button',{staticClass:"btn btn-danger",attrs:{"type":"button"},on:{"click":_vm.logOut}},[_vm._v("LogOut")])])])])],1)}
var Loginvue_type_template_id_6fe034d4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=template&id=6fe034d4&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js
var es_array_join = __webpack_require__("a15b");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("ade3");

// EXTERNAL MODULE: ./node_modules/bootstrap-vue/esm/components/form-input/form-input.js + 9 modules
var form_input = __webpack_require__("4797");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Login.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Loginvue_type_script_lang_js_ = (Object(defineProperty["a" /* default */])({
  components: {
    BFormInput: form_input["a" /* BFormInput */]
  },
  data: function data() {
    return {
      authData: {
        login: "",
        password: "",
        errorText: ""
      }
    };
  },
  created: function created() {
    this.$store.dispatch("title/setTitle", "Enter");
  },
  computed: {},
  methods: Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])({
    login: "user/login",
    logOut: "user/logOut"
  })), {}, {
    tryLogin: function tryLogin() {
      var _this = this;

      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(true);

                if (false) {}

                _context.next = 4;
                return _this.login({
                  login: _this.authData.login,
                  password: _this.authData.password
                });

              case 4:
                data = _context.sent;

                //  console.log(data);
                if (data.res) {
                  _this.authData.login = "";
                  _this.authData.password = "";
                  _this.authData.errorText = "";

                  _this.$router.push({
                    name: "office"
                  });
                } else {
                  _this.authData.errorText = data.errors.join(",");
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
}, "computed", Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
  user: "user/user"
}))));
// CONCATENATED MODULE: ./src/views/Login.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_Loginvue_type_script_lang_js_ = (Loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/Login.vue?vue&type=style&index=0&id=6fe034d4&lang=scss&scoped=true&
var Loginvue_type_style_index_0_id_6fe034d4_lang_scss_scoped_true_ = __webpack_require__("1246");

// CONCATENATED MODULE: ./src/views/Login.vue






/* normalize component */

var Login_component = Object(componentNormalizer["a" /* default */])(
  views_Loginvue_type_script_lang_js_,
  Loginvue_type_template_id_6fe034d4_scoped_true_render,
  Loginvue_type_template_id_6fe034d4_scoped_true_staticRenderFns,
  false,
  null,
  "6fe034d4",
  null
  
)

/* harmony default export */ var Login = (Login_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office/Base.vue?vue&type=template&id=644cb074&scoped=true&
var Basevue_type_template_id_644cb074_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"cont"},[_c('div',{staticClass:"nav"},[_c('router-link',{staticClass:"links",attrs:{"tag":"p","to":{name: 'office'}}},[_c('a',[_vm._v("Main screen")])]),_c('router-link',{staticClass:"links",attrs:{"tag":"p","to":{name: 'office-orders'}}},[_c('a',[_vm._v("Orders history")])])],1),_c('div',{staticClass:"col col-9"},[_c('router-view')],1)])}
var Basevue_type_template_id_644cb074_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/office/Base.vue?vue&type=template&id=644cb074&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office/Base.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Basevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/views/office/Base.vue?vue&type=script&lang=js&
 /* harmony default export */ var office_Basevue_type_script_lang_js_ = (Basevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/office/Base.vue?vue&type=style&index=0&id=644cb074&lang=scss&scoped=true&
var Basevue_type_style_index_0_id_644cb074_lang_scss_scoped_true_ = __webpack_require__("827d");

// CONCATENATED MODULE: ./src/views/office/Base.vue






/* normalize component */

var Base_component = Object(componentNormalizer["a" /* default */])(
  office_Basevue_type_script_lang_js_,
  Basevue_type_template_id_644cb074_scoped_true_render,
  Basevue_type_template_id_644cb074_scoped_true_staticRenderFns,
  false,
  null,
  "644cb074",
  null
  
)

/* harmony default export */ var Base = (Base_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office/Index.vue?vue&type=template&id=5f37b6a8&
var Indexvue_type_template_id_5f37b6a8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var Indexvue_type_template_id_5f37b6a8_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("Office screen screen")])])}]


// CONCATENATED MODULE: ./src/views/office/Index.vue?vue&type=template&id=5f37b6a8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var Indexvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./src/views/office/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var office_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/office/Index.vue





/* normalize component */

var Index_component = Object(componentNormalizer["a" /* default */])(
  office_Indexvue_type_script_lang_js_,
  Indexvue_type_template_id_5f37b6a8_render,
  Indexvue_type_template_id_5f37b6a8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = (Index_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"78727f73-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office/Orders.vue?vue&type=template&id=6490ba84&
var Ordersvue_type_template_id_6490ba84_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("User orders")]),_c('ul',_vm._l((_vm.orders),function(order,i){return _c('li',{key:i},[_vm._v("Order "+_vm._s(order))])}),0)])}
var Ordersvue_type_template_id_6490ba84_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/office/Orders.vue?vue&type=template&id=6490ba84&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office/Orders.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Ordersvue_type_script_lang_js_ = ({
  created: function created() {
    this.getAll();
  },
  methods: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["b" /* mapActions */])({
    logOut: "user/logOut",
    getAll: "orders/getAll"
  })),
  computed: Object(objectSpread2["a" /* default */])({}, Object(vuex_esm["c" /* mapGetters */])({
    orders: "orders/orders"
  }))
});
// CONCATENATED MODULE: ./src/views/office/Orders.vue?vue&type=script&lang=js&
 /* harmony default export */ var office_Ordersvue_type_script_lang_js_ = (Ordersvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/office/Orders.vue





/* normalize component */

var Orders_component = Object(componentNormalizer["a" /* default */])(
  office_Ordersvue_type_script_lang_js_,
  Ordersvue_type_template_id_6490ba84_render,
  Ordersvue_type_template_id_6490ba84_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Orders = (Orders_component.exports);
// CONCATENATED MODULE: ./src/router/index.js







vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);









var routes = [{
  path: "/AlexanderPlotnitcov.io/",
  component: Main
}, {
  name: 'Main',
  path: "/",
  component: Main
}, {
  name: 'Cotalog',
  path: "/cotalog",
  component: Cotalog
}, {
  name: 'Cart',
  path: "/toCart",
  component: Cart
}, {
  name: 'Good',
  path: '/cotalog/:id',
  component: PageGood
}, {
  name: 'Login',
  path: "/login",
  component: Login
}, {
  path: '/office',
  component: Base,
  meta: {
    auth: true
  },
  children: [{
    name: 'office',
    path: '',
    component: Index
  }, {
    name: 'office-orders',
    path: 'orders',
    component: Orders
  }]
}, {
  name: '404',
  path: "*",
  component: views_404
}];

var router_routerFunc = function routerFunc() {
  return new vue_router_esm["a" /* default */]({
    mode: 'history',
    routes: routes
  });
};

router_routerFunc().beforeEach( /*#__PURE__*/function () {
  var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(to, from, next) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!to.path.includes("/office")) {
              _context.next = 7;
              break;
            }

            _context.next = 3;
            return src_store.getters['user/ready'];

          case 3:
            console.log('test');

            if (src_store.getters['user/user']) {
              next();
            } else {
              next({
                name: "Login"
              });
            }

            _context.next = 8;
            break;

          case 7:
            next();

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
/* harmony default export */ var router = (router_routerFunc);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./src/api/cart.js



function cart_all(_x) {
  return api_cart_all.apply(this, arguments);
}

function api_cart_all() {
  api_cart_all = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(token) {
    var _yield$myhttp$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return http.get('cart.php', {
              params: {
                token: token
              },
              errorSuppression: {
                text: 'при загрузке корзины',
                critical: true
              }
            });

          case 2:
            _yield$myhttp$get = _context.sent;
            data = _yield$myhttp$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return api_cart_all.apply(this, arguments);
}

function cart_add(_x2, _x3) {
  return _add.apply(this, arguments);
}

function _add() {
  _add = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(token, id) {
    var _yield$myhttp$post, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return http.post('cart.php', {
              token: token,
              id: id
            }, {
              errorSuppression: {
                text: 'при добавлении товара'
              }
            });

          case 2:
            _yield$myhttp$post = _context2.sent;
            data = _yield$myhttp$post.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _add.apply(this, arguments);
}

function change(_x4, _x5, _x6) {
  return _change.apply(this, arguments);
}

function _change() {
  _change = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(token, id, count) {
    var _yield$myhttp$put, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return http.put('cart.php', {
              token: token,
              id: id,
              cnt: count
            }, {
              errorSuppression: {
                text: 'при изменении количества товара',
                exclude: [422]
              }
            });

          case 2:
            _yield$myhttp$put = _context3.sent;
            data = _yield$myhttp$put.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _change.apply(this, arguments);
}

function remove(_x7, _x8) {
  return _remove.apply(this, arguments);
}

function _remove() {
  _remove = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(token, id) {
    var _yield$myhttp$delete, data;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return http.delete('cart.php', {
              params: {
                token: token,
                id: id
              },
              errorSuppression: {
                text: 'при удалении товара'
              }
            });

          case 2:
            _yield$myhttp$delete = _context4.sent;
            data = _yield$myhttp$delete.data;
            return _context4.abrupt("return", data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _remove.apply(this, arguments);
}

function clear(_x9) {
  return _clear.apply(this, arguments);
}

function _clear() {
  _clear = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(token) {
    var _yield$myhttp$delete2, data;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return http.delete('cart.php', {
              params: {
                token: token
              },
              errorSuppression: {
                text: 'при очистке корзины'
              }
            });

          case 2:
            _yield$myhttp$delete2 = _context5.sent;
            data = _yield$myhttp$delete2.data;
            return _context5.abrupt("return", data);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _clear.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/store/cart.js










/* harmony default export */ var store_cart = ({
  namespaced: true,
  state: function state() {
    return {
      goodsInCart: [],
      status: false,
      clearCartBlok: false
    };
  },
  getters: {
    goodsInCart: function goodsInCart(state) {
      return state.goodsInCart;
    },
    checkInCart: function checkInCart(state) {
      return function (id) {
        return state.goodsInCart.find(function (e) {
          return e.id === id;
        });
      };
    },
    indexInCart: function indexInCart(state) {
      return function (id) {
        return state.goodsInCart.findIndex(function (e) {
          return e.id === id;
        });
      };
    },
    total: function total() {
      for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
      }

      var state = arg[0],
          _arg$ = arg[3],
          allGet = _arg$ === void 0 ? rootGetters : _arg$;
      return {
        price: state.goodsInCart.reduce(function (total, e) {
          return total + e.cnt * allGet['cotalog/getGood'](e.id).price;
        }, 0),
        cnt: state.goodsInCart.length
      };
    },
    goodsDitailed: function goodsDitailed() {
      for (var _len2 = arguments.length, arg = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        arg[_key2] = arguments[_key2];
      }

      var state = arg[0],
          _arg$2 = arg[3],
          allGet = _arg$2 === void 0 ? rootGetters : _arg$2;
      var good = allGet['cotalog/getGood'];
      return state.goodsInCart.map(function (e) {
        return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, e), good(e.id));
      });
    }
  },
  mutations: {
    getCart: function getCart(state, _ref) {
      var data = _ref.data,
          token = _ref.token;
      state.goodsInCart = data;
      state.token = token;
    },
    addCart: function addCart(_ref2, id) {
      var goodsInCart = _ref2.goodsInCart;
      goodsInCart.push({
        id: id,
        cnt: 1
      });
    },
    incCart: function incCart(_ref3, index) {
      var goodsInCart = _ref3.goodsInCart;
      ++goodsInCart[index]['cnt'];
    },
    decCart: function decCart(_ref4, index) {
      var goodsInCart = _ref4.goodsInCart;
      --goodsInCart[index]['cnt'];
    },
    delCart: function delCart(_ref5, index) {
      var goodsInCart = _ref5.goodsInCart;
      goodsInCart.splice(index, 1);
    },
    chengCart: function chengCart(_ref6, _ref7) {
      var goodsInCart = _ref6.goodsInCart;
      var index = _ref7.index,
          val = _ref7.val;
      vue_runtime_esm["a" /* default */].set(goodsInCart[index], 'cnt', val);
    },
    clearCart: function clearCart(_ref8) {
      var goodsInCart = _ref8.goodsInCart;
      goodsInCart.splice(0, goodsInCart.length);
    },
    changeStatus: function changeStatus(state) {
      state.status = !state.status;
    },
    clearCartBlok: function clearCartBlok(state) {
      state.clearCartBlok = !state.clearCartBlok;
    }
  },
  actions: {
    // get all cart
    getCart: function getCart(_ref9) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var dispatch, commit, oldToken, _yield$cartApi$all, _yield$cartApi$all$da, cart, token, needUpdate;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch = _ref9.dispatch, commit = _ref9.commit;
                oldToken = localStorage.getItem('CART__TOKEN');
                _context.prev = 2;
                _context.next = 5;
                return cart_all(oldToken);

              case 5:
                _yield$cartApi$all = _context.sent;
                _yield$cartApi$all$da = _yield$cartApi$all.data;
                cart = _yield$cartApi$all$da.cart;
                token = _yield$cartApi$all$da.token;
                needUpdate = _yield$cartApi$all$da.needUpdate;

                if (needUpdate) {
                  localStorage.setItem('CART__TOKEN', token);
                }

                commit('changeStatus');
                commit('getCart', {
                  token: token,
                  data: cart
                });
                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](2);
                commit('changeStatus');
                dispatch('cotalog/blockButtons', null, {
                  root: true
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 15]]);
      }))();
    },
    addCart: function addCart(_ref10, _ref11) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, state, dispatch, id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref10.commit, state = _ref10.state, dispatch = _ref10.dispatch;
                id = _ref11.id;
                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });
                _context2.next = 5;
                return cart_add(state.token, id);

              case 5:
                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                }); // unblocking button

                commit('addCart', id);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    incCart: function incCart(_ref12, _ref13) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, getters, state, dispatch, id, goodsInCart, checkInCart, indexInCart, cnt;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref12.commit, getters = _ref12.getters, state = _ref12.state, dispatch = _ref12.dispatch;
                id = _ref13.id;
                goodsInCart = getters.goodsInCart, checkInCart = getters.checkInCart, indexInCart = getters.indexInCart;
                cnt = goodsInCart[indexInCart(id)]['cnt'];

                if (!checkInCart(id)) {
                  _context3.next = 10;
                  break;
                }

                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });
                _context3.next = 8;
                return change(state.toke, id, ++cnt);

              case 8:
                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });
                commit('incCart', indexInCart(id));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    decCart: function decCart(_ref14, _ref15) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var commit, getters, state, dispatch, id, goodsInCart, checkInCart, indexInCart, cnt;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                commit = _ref14.commit, getters = _ref14.getters, state = _ref14.state, dispatch = _ref14.dispatch;
                id = _ref15.id;
                goodsInCart = getters.goodsInCart, checkInCart = getters.checkInCart, indexInCart = getters.indexInCart;
                cnt = goodsInCart[indexInCart(id)]['cnt'];

                if (!checkInCart(id)) {
                  _context4.next = 19;
                  break;
                }

                if (!(cnt > 1)) {
                  _context4.next = 13;
                  break;
                }

                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });
                _context4.next = 9;
                return change(state.token, id, --cnt);

              case 9:
                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });
                commit('decCart', indexInCart(id));
                _context4.next = 19;
                break;

              case 13:
                if (!(cnt === 1)) {
                  _context4.next = 19;
                  break;
                }

                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });
                _context4.next = 17;
                return remove(state.token, id);

              case 17:
                commit('delCart', indexInCart(id));
                dispatch('cotalog/cInProc', {
                  id: id
                }, {
                  root: true
                });

              case 19:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    chengCart: function chengCart(_ref16, _ref17) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var commit, getters, state, id, e, checkInCart, indexInCart, cnt, newCnt;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                commit = _ref16.commit, getters = _ref16.getters, state = _ref16.state;
                id = _ref17.id, e = _ref17.e;
                checkInCart = getters.checkInCart, indexInCart = getters.indexInCart;

                if (!checkInCart(id)) {
                  _context5.next = 10;
                  break;
                }

                cnt = parseInt(e.target.value);
                newCnt = isNaN(cnt) || cnt < 1 ? 1 : cnt;
                _context5.next = 8;
                return change(state.token, id, newCnt);

              case 8:
                commit('chengCart', {
                  index: indexInCart(id),
                  val: false
                });
                commit('chengCart', {
                  index: indexInCart(id),
                  val: newCnt
                });

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    clearCart: function clearCart(_ref18) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var commit, state;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                commit = _ref18.commit, state = _ref18.state;
                commit('clearCartBlok');
                _context6.next = 4;
                return clear(state.token);

              case 4:
                commit('clearCartBlok');
                commit('clearCart');

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    }
  },
  claerCartSimple: function claerCartSimple(_ref19) {
    var commit = _ref19.commit;
    commit('clearCart');
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./src/store/cotalog.js









var addParams = {
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi qui possimus delectus reprehenderit iusto quidem dolorum deserunt corporis non dolor sunt culpa, inventore, veritatis voluptates. Cupiditate voluptas earum ut necessitatibus, animi harum, ipsum similique quis, reprehenderit praesentium sint voluptatibus iste dolorem placeat laborum. Aperiam, maxime voluptatum alias illum dolor magnam sunt sequi, vitae nostrum, possimus tenetur facere praesentium fugit ipsam. Alias molestias doloremque, magnam quod nulla optio voluptas dicta debitis ut amet. Magnam ipsa porro perferendis similique magni? Odit soluta aut ad assumenda maxime eius architecto rem et, ipsa optio quasi nulla dolorum necessitatibus neque. Asperiores dolorum perspiciatis eum.",
  img: "http://placehold.it/200",
  inProcessing: false
};
/* harmony default export */ var cotalog = ({
  namespaced: true,
  state: function state() {
    return {
      goods: []
    };
  },
  getters: {
    goods: function goods(state) {
      return state.goods;
    },
    indexInGoods: function indexInGoods(state) {
      return function (id) {
        return state.goods.findIndex(function (e) {
          return e.id === id;
        });
      };
    },
    getGood: function getGood(state) {
      return function (id) {
        if (state.goods.findIndex(function (e) {
          return e.id == id;
        }) != -1) {
          return state.goods[state.goods.findIndex(function (e) {
            return e.id == id;
          })];
        }
      };
    }
  },
  mutations: {
    getGoods: function getGoods(state, data) {
      state.goods = data;
    },
    changeInProcessing: function changeInProcessing(_ref, id) {
      var goods = _ref.goods;
      var index = goods.findIndex(function (g) {
        return g.id.toString() === id.toString();
      });
      var value = goods[index]['inProcessing'];
      vue_runtime_esm["a" /* default */].set(goods[index], 'inProcessing', !value);
    },
    blockAllButtons: function blockAllButtons(state) {
      console.log('block');
      state.goods.map(function (g) {
        return vue_runtime_esm["a" /* default */].set(g, 'inProcessing', !g.inProcessing);
      });
    }
  },
  actions: {
    getGoods: function getGoods(_ref2) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, state, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref2.commit, state = _ref2.state;
                _context.next = 3;
                return cotalog_all();

              case 3:
                data = _context.sent;
                commit('getGoods', data.map(function (e) {
                  return Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, e), addParams);
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cInProc: function cInProc(_ref3, _ref4) {
      var commit = _ref3.commit;
      var id = _ref4.id;
      commit('changeInProcessing', id);
    },
    blockButtons: function blockButtons(_ref5) {
      var commit = _ref5.commit;
      return commit('blockAllButtons');
    }
  }
});
// CONCATENATED MODULE: ./src/store/alerts.js



// module for working with alerts
/* harmony default export */ var alerts = ({
  namespaced: true,
  state: function state() {
    return {
      // array of all alerts
      all: []
    };
  },
  getters: {
    all: function all(state) {
      return state.all;
    }
  },
  mutations: {
    add: function add(state, payload) {
      // adding object of error in the array
      state.all.push(payload);
    },
    // deleteing  object by index
    dellByIndex: function dellByIndex(state, id) {
      var index = state.all.findIndex(function (a) {
        return a.id === id;
      });
      state.all.splice(index, 1);
    }
  },
  actions: {
    add: function add(_ref, payload) {
      var commit = _ref.commit,
          state = _ref.state;
      console.log('alert');
      var id = Date.now(); // adding error's object 

      commit('add', Object(objectSpread2["a" /* default */])(Object(objectSpread2["a" /* default */])({}, payload), {}, {
        id: id
      }));

      if (payload.timeout) {
        //  if the "timeout" property is defined, then we are deleting this object from the array, after <timeout> ms
        setTimeout(function () {
          return commit('dellByIndex', id);
        }, payload.timeout);
      }
    }
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.some.js
var es_array_some = __webpack_require__("45fc");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// CONCATENATED MODULE: ./src/api/user.js



function user_login(_x, _x2) {
  return api_user_login.apply(this, arguments);
}

function api_user_login() {
  api_user_login = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee(login, password) {
    var _yield$myhttp$post, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return http.post('auth/login.php', {
              login: login,
              password: password
            }, {
              errorSuppression: {
                text: 'при попытке логина'
              }
            });

          case 2:
            _yield$myhttp$post = _context.sent;
            data = _yield$myhttp$post.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return api_user_login.apply(this, arguments);
}

function check() {
  return _check.apply(this, arguments);
}

function _check() {
  _check = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var _yield$myhttp$get, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return http.get('auth/check.php?sleep', {
              errorSuppression: {
                check: true
              }
            });

          case 2:
            _yield$myhttp$get = _context2.sent;
            data = _yield$myhttp$get.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _check.apply(this, arguments);
}

function user_logOut() {
  return _logOut.apply(this, arguments);
}

function _logOut() {
  _logOut = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var _yield$myhttp$get2, data;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return http.get('auth/logout.php', {
              errorSuppression: {
                text: 'при разлогинивании'
              }
            });

          case 2:
            _yield$myhttp$get2 = _context3.sent;
            data = _yield$myhttp$get2.data;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _logOut.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/store/user.js









var autoLog;
var endLoad = new Promise(function (resolve) {
  autoLog = resolve;
});
/* harmony default export */ var user = ({
  namespaced: true,
  state: function state() {
    return {
      user: null
    };
  },
  getters: {
    user: function user(state) {
      return state.user;
    },
    isLogin: function isLogin(state) {
      return state.user !== null;
    },
    ready: function ready() {
      return endLoad;
    },
    checkRole: function checkRole(state) {
      return function (allowedRoles) {
        return state.user !== null && allowedRoles.some(function (role) {
          return state.user.roles.includes(role);
        });
      };
    }
  },
  mutations: {
    setUser: function setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    login: function login(_ref, _ref2) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, dispatch, login, password, _yield$userApi$login, ok, data, _getJWTPayload, _login, name, roles;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit, dispatch = _ref.dispatch;
                login = _ref2.login, password = _ref2.password;
                _context.prev = 2;
                _context.next = 5;
                return user_login(login, password);

              case 5:
                _yield$userApi$login = _context.sent;
                ok = _yield$userApi$login.ok;
                data = _yield$userApi$login.data;

                if (ok && data.res) {
                  // save token in localstorage
                  setTokens(data.accessToken); //  picking user's data up from token

                  _getJWTPayload = getJWTPayload(data.accessToken), _login = _getJWTPayload.login, name = _getJWTPayload.name, roles = _getJWTPayload.roles;
                  commit('setUser', {
                    login: _login,
                    name: name,
                    roles: roles
                  });
                }

                return _context.abrupt("return", data);

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                dispatch('alerts/add', {
                  text: "Error by logging",
                  timeout: DALAY
                }, {
                  root: true
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 12]]);
      }))();
    },
    autoLogin: function autoLogin(_ref3) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var commit, dispatch, _yield$userApi$check, ok, data, _getJWTPayload2, login, name, roles;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                commit = _ref3.commit, dispatch = _ref3.dispatch;
                _context2.prev = 1;
                _context2.next = 4;
                return check();

              case 4:
                _yield$userApi$check = _context2.sent;
                ok = _yield$userApi$check.ok;
                data = _yield$userApi$check.data;

                if (ok && data) {
                  _getJWTPayload2 = getJWTPayload(getAccessToken()), login = _getJWTPayload2.login, name = _getJWTPayload2.name, roles = _getJWTPayload2.roles;
                  commit('setUser', {
                    login: login,
                    name: name,
                    roles: roles
                  });
                } else {
                  commit('setUser', null);
                }

                autoLog();
                return _context2.abrupt("return", data);

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 12]]);
      }))();
    },
    logOut: function logOut(_ref4) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var commit, dispatch;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                commit = _ref4.commit, dispatch = _ref4.dispatch;
                _context3.next = 3;
                return user_logOut();

              case 3:
                commit('setUser', null);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});
// CONCATENATED MODULE: ./src/api/orders.js



function orders_all() {
  return api_orders_all.apply(this, arguments);
}

function api_orders_all() {
  api_orders_all = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$myhttp$get, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return http.get('orders.php', {
              errorSuppression: {
                text: 'при разлогинивании'
              }
            });

          case 2:
            _yield$myhttp$get = _context.sent;
            data = _yield$myhttp$get.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return api_orders_all.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/store/orders.js



/* harmony default export */ var store_orders = ({
  namespaced: true,
  state: function state() {
    return {
      orders: null
    };
  },
  getters: {
    orders: function orders(state) {
      return state.orders;
    }
  },
  mutations: {
    getOrders: function getOrders(state, orders) {
      return state.orders = orders;
    }
  },
  actions: {
    getAll: function getAll(_ref) {
      return Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var commit, res, ok, orders;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                commit = _ref.commit;
                _context.prev = 1;
                _context.next = 4;
                return orders_all();

              case 4:
                res = _context.sent;
                ok = res.ok, orders = res.data.orders;
                commit('getOrders', orders);
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", false);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    },
    claerOrders: function claerOrders(_ref2) {
      var commit = _ref2.commit;
      commit('getOrders', null);
    }
  }
});
// CONCATENATED MODULE: ./src/store/title.js
/* harmony default export */ var title = ({
  namespaced: true,
  state: function state() {
    return {
      title: null
    };
  },
  getters: {
    title: function title(state) {
      return state.title;
    }
  },
  mutations: {
    setTitle: function setTitle(state, title) {
      state.title = title;
    }
  },
  actions: {
    setTitle: function setTitle(_ref, title) {
      var state = _ref.state,
          commit = _ref.commit;
      commit('setTitle', title);

      if (true) {
        document.title = state.title;
      }
    }
  }
});
// CONCATENATED MODULE: ./src/store/index.js






vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);







/* harmony default export */ var src_store = (function () {
  return new vuex_esm["a" /* default */].Store({
    modules: {
      cart: store_cart,
      cotalog: cotalog,
      alerts: alerts,
      user: user,
      orders: store_orders,
      title: title
    },
    strict: "production" !== 'production'
  });
});
addResponseHandler(function (response) {
  if ('errorSuppression' in response.config && response.status === 200) {
    response.data = {
      ok: true,
      data: response.data
    };
  }

  return response;
}, function (error) {
  if (!('response' in error) || !error.response || !('config' in error) || !('errorSuppression' in error.config)) {
    return Promise.reject(error);
  }

  var es = error.config.errorSuppression;

  if (error.response.status === 401 && !('check' in es)) {
    store.dispatch('user/logOut');
    store.dispatch['cart/clearCartSimple'] = [];
    store.dispatch['orders/clearOrders'] = [];
    return router.push({
      name: 'Login'
    });
  }

  if ('exclude' in es && es.exclude.includes(error.response.status)) {
    return Promise.reject(error);
  }

  if ('text' in es) {
    var alert = {
      text: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u0432\u0435\u0442\u0430 \u043E\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 ".concat(es.text)
    };

    if ('critical' in es) {
      alert.text += ' Рекомендуем перезагрузить страницу!';
    } else {
      alert.timeout = 3000;
    }

    store.dispatch('alerts/add', alert);
  }

  return {
    data: {
      ok: false
    }
  };
});
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.css
var bootstrap = __webpack_require__("f9e3");

// CONCATENATED MODULE: ./src/entry-client.js










var entry_client_store = src_store();
var entry_client_router = router();
entry_client_store.dispatch('user/autoLogin');
entry_client_store.dispatch('cotalog/getGoods').then(function () {
  new vue_runtime_esm["a" /* default */]({
    el: '#app',
    render: function render(h) {
      return h(App);
    },
    store: entry_client_store,
    router: entry_client_router
  });
}).catch(function (err) {
  return document.querySelector('body').innerHTML = err;
}).finally(function () {
  return entry_client_store.dispatch('cart/getCart');
});

/***/ }),

/***/ "b854":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "bbed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_style_index_0_id_2686417a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0b71");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_style_index_0_id_2686417a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_style_index_0_id_2686417a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alert_vue_vue_type_style_index_0_id_2686417a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c0e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7be0c706_leng_scss_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e1df");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7be0c706_leng_scss_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7be0c706_leng_scss_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_7be0c706_leng_scss_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cca5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_56a39a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0854");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_56a39a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_56a39a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_style_index_0_id_56a39a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d7ab":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_962dcede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("30c3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_962dcede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_962dcede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_962dcede_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e1df":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e482":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f8a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f8ea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_id_daccf1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0a89");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_id_daccf1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_id_daccf1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_style_index_0_id_daccf1c2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ })

/******/ });