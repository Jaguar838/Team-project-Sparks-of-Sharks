// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
    // Save the require from previous bundle to this closure if any
    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
    var nodeRequire = typeof require === 'function' && require;
  
    function newRequire(name, jumped) {
      if (!cache[name]) {
        if (!modules[name]) {
          // if we cannot find the module within our internal map or
          // cache jump to the current global require ie. the last bundle
          // that was added to the page.
          var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
          if (!jumped && currentRequire) {
            return currentRequire(name, true);
          }
  
          // If there are other bundles on this page the require from the
          // previous one is saved to 'previousRequire'. Repeat this as
          // many times as there are bundles until the module is found or
          // we exhaust the require chain.
          if (previousRequire) {
            return previousRequire(name, true);
          }
  
          // Try the node require function if it exists.
          if (nodeRequire && typeof name === 'string') {
            return nodeRequire(name);
          }
  
          var err = new Error('Cannot find module \'' + name + '\'');
          err.code = 'MODULE_NOT_FOUND';
          throw err;
        }
  
        localRequire.resolve = resolve;
        localRequire.cache = {};
  
        var module = cache[name] = new newRequire.Module(name);
  
        modules[name][0].call(module.exports, localRequire, module, module.exports, this);
      }
  
      return cache[name].exports;
  
      function localRequire(x){
        return newRequire(localRequire.resolve(x));
      }
  
      function resolve(x){
        return modules[name][1][x] || x;
      }
    }
  
    function Module(moduleName) {
      this.id = moduleName;
      this.bundle = newRequire;
      this.exports = {};
    }
  
    newRequire.isParcelRequire = true;
    newRequire.Module = Module;
    newRequire.modules = modules;
    newRequire.cache = cache;
    newRequire.parent = previousRequire;
    newRequire.register = function (id, exports) {
      modules[id] = [function (require, module) {
        module.exports = exports;
      }, {}];
    };
  
    var error;
    for (var i = 0; i < entry.length; i++) {
      try {
        newRequire(entry[i]);
      } catch (e) {
        // Save first error but execute all entries
        if (!error) {
          error = e;
        }
      }
    }
  
    if (entry.length) {
      // Expose entry point to Node, AMD or browser globals
      // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
      var mainExports = newRequire(entry[entry.length - 1]);
  
      // CommonJS
      if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = mainExports;
  
      // RequireJS
      } else if (typeof define === "function" && define.amd) {
       define(function () {
         return mainExports;
       });
  
      // <script>
      } else if (globalName) {
        this[globalName] = mainExports;
      }
    }
  
    // Override the current require with this new one
    parcelRequire = newRequire;
  
    if (error) {
      // throw error from earlier, _after updating parcelRequire_
      throw error;
    }
  
    return newRequire;
  })({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
  var bundleURL = null;
  
  function getBundleURLCached() {
    if (!bundleURL) {
      bundleURL = getBundleURL();
    }
  
    return bundleURL;
  }
  
  function getBundleURL() {
    // Attempt to find the URL of the current script and use that as the base URL
    try {
      throw new Error();
    } catch (err) {
      var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
  
      if (matches) {
        return getBaseURL(matches[0]);
      }
    }
  
    return '/';
  }
  
  function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
  }
  
  exports.getBundleURL = getBundleURLCached;
  exports.getBaseURL = getBaseURL;
  },{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
  var bundle = require('./bundle-url');
  
  function updateLink(link) {
    var newLink = link.cloneNode();
  
    newLink.onload = function () {
      link.remove();
    };
  
    newLink.href = link.href.split('?')[0] + '?' + Date.now();
    link.parentNode.insertBefore(newLink, link.nextSibling);
  }
  
  var cssTimeout = null;
  
  function reloadCSS() {
    if (cssTimeout) {
      return;
    }
  
    cssTimeout = setTimeout(function () {
      var links = document.querySelectorAll('link[rel="stylesheet"]');
  
      for (var i = 0; i < links.length; i++) {
        if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
          updateLink(links[i]);
        }
      }
  
      cssTimeout = null;
    }, 50);
  }
  
  module.exports = reloadCSS;
  },{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
  var reloadCSS = require('_css_loader');
  
  module.hot.dispose(reloadCSS);
  module.hot.accept(reloadCSS);
  },{"./..\\images\\header\\header_m_x1.jpg":[["header_m_x1.e4f8d701.jpg","images/header/header_m_x1.jpg"],"images/header/header_m_x1.jpg"],"./..\\images\\header\\header_m_x2.jpg":[["header_m_x2.c27f224d.jpg","images/header/header_m_x2.jpg"],"images/header/header_m_x2.jpg"],"./..\\images\\header\\header_t_x1.jpg":[["header_t_x1.b99563fb.jpg","images/header/header_t_x1.jpg"],"images/header/header_t_x1.jpg"],"./..\\images\\header\\header_t_x2.jpg":[["header_t_x2.cb3bc83d.jpg","images/header/header_t_x2.jpg"],"images/header/header_t_x2.jpg"],"./..\\images\\header\\header_d_x1.jpg":[["header_d_x1.5839847b.jpg","images/header/header_d_x1.jpg"],"images/header/header_d_x1.jpg"],"./..\\images\\header\\header_d_x2.jpg":[["header_d_x2.79fb1c57.jpg","images/header/header_d_x2.jpg"],"images/header/header_d_x2.jpg"],"./..\\images\\header\\lib_m_x1.jpg":[["lib_m_x1.ced9630e.jpg","images/header/lib_m_x1.jpg"],"images/header/lib_m_x1.jpg"],"./..\\images\\header\\lib_m_x2.jpg":[["lib_m_x2.51544fcc.jpg","images/header/lib_m_x2.jpg"],"images/header/lib_m_x2.jpg"],"./..\\images\\header\\lib_t_x1.jpg":[["lib_t_x1.838bc25d.jpg","images/header/lib_t_x1.jpg"],"images/header/lib_t_x1.jpg"],"./..\\images\\header\\lib_t_x2.jpg":[["lib_t_x2.9ae5803c.jpg","images/header/lib_t_x2.jpg"],"images/header/lib_t_x2.jpg"],"./..\\images\\header\\lib_d_x1.jpg":[["lib_d_x1.96fcc63b.jpg","images/header/lib_d_x1.jpg"],"images/header/lib_d_x1.jpg"],"./..\\images\\header\\lib_d_x2.jpg":[["lib_d_x2.55038b99.jpg","images/header/lib_d_x2.jpg"],"images/header/lib_d_x2.jpg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/components/theme-switcher.js":[function(require,module,exports) {
  const themeSwitcherToggleRef = document.querySelector('.toggle-input');
  const bodyRef = document.querySelector('.js-body');
  localStorageDataGet();
  themeSwitcherToggleRef.addEventListener('change', switchTheme);
  
  function switchTheme(e) {
    switchThemeOnBackground();
    localStorageDataSet();
  }
  
  function switchThemeOnBackground() {
    bodyRef.classList.toggle('night');
  }
  
  function localStorageDataSet() {
    localStorage.setItem('toggleState', themeSwitcherToggleRef.checked);
  }
  
  function localStorageDataGet() {
    const initialState = localStorage.getItem('toggleState') === 'true';
    themeSwitcherToggleRef.checked = initialState;
  
    if (initialState) {
      switchThemeOnBackground();
    }
  }
  },{}],"../node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
  'use strict';
  
  module.exports = function bind(fn, thisArg) {
    return function wrap() {
      var args = new Array(arguments.length);
      for (var i = 0; i < args.length; i++) {
        args[i] = arguments[i];
      }
      return fn.apply(thisArg, args);
    };
  };
  
  },{}],"../node_modules/axios/lib/utils.js":[function(require,module,exports) {
  'use strict';
  
  var bind = require('./helpers/bind');
  
  /*global toString:true*/
  
  // utils is a library of generic helper functions non-specific to axios
  
  var toString = Object.prototype.toString;
  
  /**
   * Determine if a value is an Array
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Array, otherwise false
   */
  function isArray(val) {
    return toString.call(val) === '[object Array]';
  }
  
  /**
   * Determine if a value is undefined
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if the value is undefined, otherwise false
   */
  function isUndefined(val) {
    return typeof val === 'undefined';
  }
  
  /**
   * Determine if a value is a Buffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Buffer, otherwise false
   */
  function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
      && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
  }
  
  /**
   * Determine if a value is an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an ArrayBuffer, otherwise false
   */
  function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]';
  }
  
  /**
   * Determine if a value is a FormData
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an FormData, otherwise false
   */
  function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
  }
  
  /**
   * Determine if a value is a view on an ArrayBuffer
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
   */
  function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
      result = ArrayBuffer.isView(val);
    } else {
      result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
  }
  
  /**
   * Determine if a value is a String
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a String, otherwise false
   */
  function isString(val) {
    return typeof val === 'string';
  }
  
  /**
   * Determine if a value is a Number
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Number, otherwise false
   */
  function isNumber(val) {
    return typeof val === 'number';
  }
  
  /**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
  function isObject(val) {
    return val !== null && typeof val === 'object';
  }
  
  /**
   * Determine if a value is a plain Object
   *
   * @param {Object} val The value to test
   * @return {boolean} True if value is a plain Object, otherwise false
   */
  function isPlainObject(val) {
    if (toString.call(val) !== '[object Object]') {
      return false;
    }
  
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
  }
  
  /**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
  function isDate(val) {
    return toString.call(val) === '[object Date]';
  }
  
  /**
   * Determine if a value is a File
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a File, otherwise false
   */
  function isFile(val) {
    return toString.call(val) === '[object File]';
  }
  
  /**
   * Determine if a value is a Blob
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Blob, otherwise false
   */
  function isBlob(val) {
    return toString.call(val) === '[object Blob]';
  }
  
  /**
   * Determine if a value is a Function
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Function, otherwise false
   */
  function isFunction(val) {
    return toString.call(val) === '[object Function]';
  }
  
  /**
   * Determine if a value is a Stream
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Stream, otherwise false
   */
  function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
  }
  
  /**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  
  /**
   * Trim excess whitespace off the beginning and end of a string
   *
   * @param {String} str The String to trim
   * @returns {String} The String freed of excess whitespace
   */
  function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  
  /**
   * Determine if we're running in a standard browser environment
   *
   * This allows axios to run in a web worker, and react-native.
   * Both environments support XMLHttpRequest, but not fully standard globals.
   *
   * web workers:
   *  typeof window -> undefined
   *  typeof document -> undefined
   *
   * react-native:
   *  navigator.product -> 'ReactNative'
   * nativescript
   *  navigator.product -> 'NativeScript' or 'NS'
   */
  function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                             navigator.product === 'NativeScript' ||
                                             navigator.product === 'NS')) {
      return false;
    }
    return (
      typeof window !== 'undefined' &&
      typeof document !== 'undefined'
    );
  }
  
  /**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
  function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
      return;
    }
  
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
      /*eslint no-param-reassign:0*/
      obj = [obj];
    }
  
    if (isArray(obj)) {
      // Iterate over array values
      for (var i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      // Iterate over object keys
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  
  /**
   * Accepts varargs expecting each argument to be an object, then
   * immutably merges the properties of each object and returns result.
   *
   * When multiple objects contain the same key the later object in
   * the arguments list will take precedence.
   *
   * Example:
   *
   * ```js
   * var result = merge({foo: 123}, {foo: 456});
   * console.log(result.foo); // outputs 456
   * ```
   *
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
  function merge(/* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
      if (isPlainObject(result[key]) && isPlainObject(val)) {
        result[key] = merge(result[key], val);
      } else if (isPlainObject(val)) {
        result[key] = merge({}, val);
      } else if (isArray(val)) {
        result[key] = val.slice();
      } else {
        result[key] = val;
      }
    }
  
    for (var i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  
  /**
   * Extends object a by mutably adding to it the properties of object b.
   *
   * @param {Object} a The object to be extended
   * @param {Object} b The object to copy properties from
   * @param {Object} thisArg The object to bind function to
   * @return {Object} The resulting value of object a
   */
  function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
      if (thisArg && typeof val === 'function') {
        a[key] = bind(val, thisArg);
      } else {
        a[key] = val;
      }
    });
    return a;
  }
  
  /**
   * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
   *
   * @param {string} content with BOM
   * @return {string} content value without BOM
   */
  function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
    }
    return content;
  }
  
  module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
  };
  
  },{"./helpers/bind":"../node_modules/axios/lib/helpers/bind.js"}],"../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  
  function encode(val) {
    return encodeURIComponent(val).
      replace(/%3A/gi, ':').
      replace(/%24/g, '$').
      replace(/%2C/gi, ',').
      replace(/%20/g, '+').
      replace(/%5B/gi, '[').
      replace(/%5D/gi, ']');
  }
  
  /**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
  module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
      return url;
    }
  
    var serializedParams;
    if (paramsSerializer) {
      serializedParams = paramsSerializer(params);
    } else if (utils.isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      var parts = [];
  
      utils.forEach(params, function serialize(val, key) {
        if (val === null || typeof val === 'undefined') {
          return;
        }
  
        if (utils.isArray(val)) {
          key = key + '[]';
        } else {
          val = [val];
        }
  
        utils.forEach(val, function parseValue(v) {
          if (utils.isDate(v)) {
            v = v.toISOString();
          } else if (utils.isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(encode(key) + '=' + encode(v));
        });
      });
  
      serializedParams = parts.join('&');
    }
  
    if (serializedParams) {
      var hashmarkIndex = url.indexOf('#');
      if (hashmarkIndex !== -1) {
        url = url.slice(0, hashmarkIndex);
      }
  
      url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
  
    return url;
  };
  
  },{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  
  function InterceptorManager() {
    this.handlers = [];
  }
  
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled: fulfilled,
      rejected: rejected
    });
    return this.handlers.length - 1;
  };
  
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   */
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   */
  InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  };
  
  module.exports = InterceptorManager;
  
  },{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  
  /**
   * Transform the data for a request or a response
   *
   * @param {Object|String} data The data to be transformed
   * @param {Array} headers The headers for the request or response
   * @param {Array|Function} fns A single function or Array of functions
   * @returns {*} The resulting transformed data
   */
  module.exports = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
      data = fn(data, headers);
    });
  
    return data;
  };
  
  },{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
  'use strict';
  
  module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
  };
  
  },{}],"../node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('../utils');
  
  module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
      if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
        headers[normalizedName] = value;
        delete headers[name];
      }
    });
  };
  
  },{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
  'use strict';
  
  /**
   * Update an Error with the specified config, error code, and response.
   *
   * @param {Error} error The error to update.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The error.
   */
  module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
      error.code = code;
    }
  
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
  
    error.toJSON = function toJSON() {
      return {
        // Standard
        message: this.message,
        name: this.name,
        // Microsoft
        description: this.description,
        number: this.number,
        // Mozilla
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        // Axios
        config: this.config,
        code: this.code
      };
    };
    return error;
  };
  
  },{}],"../node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
  'use strict';
  
  var enhanceError = require('./enhanceError');
  
  /**
   * Create an Error with the specified message, config, error code, request and response.
   *
   * @param {string} message The error message.
   * @param {Object} config The config.
   * @param {string} [code] The error code (for example, 'ECONNABORTED').
   * @param {Object} [request] The request.
   * @param {Object} [response] The response.
   * @returns {Error} The created error.
   */
  module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
  };
  
  },{"./enhanceError":"../node_modules/axios/lib/core/enhanceError.js"}],"../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
  'use strict';
  
  var createError = require('./createError');
  
  /**
   * Resolve or reject a Promise based on response status.
   *
   * @param {Function} resolve A function that resolves the promise.
   * @param {Function} reject A function that rejects the promise.
   * @param {object} response The response.
   */
  module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) {
      resolve(response);
    } else {
      reject(createError(
        'Request failed with status code ' + response.status,
        response.config,
        null,
        response.request,
        response
      ));
    }
  };
  
  },{"./createError":"../node_modules/axios/lib/core/createError.js"}],"../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs support document.cookie
      (function standardBrowserEnv() {
        return {
          write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + '=' + encodeURIComponent(value));
  
            if (utils.isNumber(expires)) {
              cookie.push('expires=' + new Date(expires).toGMTString());
            }
  
            if (utils.isString(path)) {
              cookie.push('path=' + path);
            }
  
            if (utils.isString(domain)) {
              cookie.push('domain=' + domain);
            }
  
            if (secure === true) {
              cookie.push('secure');
            }
  
            document.cookie = cookie.join('; ');
          },
  
          read: function read(name) {
            var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
            return (match ? decodeURIComponent(match[3]) : null);
          },
  
          remove: function remove(name) {
            this.write(name, '', Date.now() - 86400000);
          }
        };
      })() :
  
    // Non standard browser env (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return {
          write: function write() {},
          read: function read() { return null; },
          remove: function remove() {}
        };
      })()
  );
  
  },{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
  'use strict';
  
  /**
   * Determines whether the specified URL is absolute
   *
   * @param {string} url The URL to test
   * @returns {boolean} True if the specified URL is absolute, otherwise false
   */
  module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
  };
  
  },{}],"../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
  'use strict';
  
  /**
   * Creates a new URL by combining the specified URLs
   *
   * @param {string} baseURL The base URL
   * @param {string} relativeURL The relative URL
   * @returns {string} The combined URL
   */
  module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL
      ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
      : baseURL;
  };
  
  },{}],"../node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
  'use strict';
  
  var isAbsoluteURL = require('../helpers/isAbsoluteURL');
  var combineURLs = require('../helpers/combineURLs');
  
  /**
   * Creates a new URL by combining the baseURL with the requestedURL,
   * only when the requestedURL is not already an absolute URL.
   * If the requestURL is absolute, this function returns the requestedURL untouched.
   *
   * @param {string} baseURL The base URL
   * @param {string} requestedURL Absolute or relative URL to combine
   * @returns {string} The combined full path
   */
  module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  };
  
  },{"../helpers/isAbsoluteURL":"../node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs":"../node_modules/axios/lib/helpers/combineURLs.js"}],"../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  
  // Headers whose duplicates are ignored by node
  // c.f. https://nodejs.org/api/http.html#http_message_headers
  var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
  ];
  
  /**
   * Parse headers into an object
   *
   * ```
   * Date: Wed, 27 Aug 2014 08:58:49 GMT
   * Content-Type: application/json
   * Connection: keep-alive
   * Transfer-Encoding: chunked
   * ```
   *
   * @param {String} headers Headers needing to be parsed
   * @returns {Object} Headers parsed into an object
   */
  module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
  
    if (!headers) { return parsed; }
  
    utils.forEach(headers.split('\n'), function parser(line) {
      i = line.indexOf(':');
      key = utils.trim(line.substr(0, i)).toLowerCase();
      val = utils.trim(line.substr(i + 1));
  
      if (key) {
        if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
          return;
        }
        if (key === 'set-cookie') {
          parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
        } else {
          parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
        }
      }
    });
  
    return parsed;
  };
  
  },{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  
  module.exports = (
    utils.isStandardBrowserEnv() ?
  
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
      (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
  
        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
          var href = url;
  
          if (msie) {
          // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
          }
  
          urlParsingNode.setAttribute('href', href);
  
          // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
          return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
              urlParsingNode.pathname :
              '/' + urlParsingNode.pathname
          };
        }
  
        originURL = resolveURL(window.location.href);
  
        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
          var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
          return (parsed.protocol === originURL.protocol &&
              parsed.host === originURL.host);
        };
      })() :
  
    // Non standard browser envs (web workers, react-native) lack needed support.
      (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
          return true;
        };
      })()
  );
  
  },{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  var settle = require('./../core/settle');
  var cookies = require('./../helpers/cookies');
  var buildURL = require('./../helpers/buildURL');
  var buildFullPath = require('../core/buildFullPath');
  var parseHeaders = require('./../helpers/parseHeaders');
  var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
  var createError = require('../core/createError');
  
  module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config.data;
      var requestHeaders = config.headers;
  
      if (utils.isFormData(requestData)) {
        delete requestHeaders['Content-Type']; // Let the browser set it
      }
  
      var request = new XMLHttpRequest();
  
      // HTTP basic authentication
      if (config.auth) {
        var username = config.auth.username || '';
        var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
        requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
      }
  
      var fullPath = buildFullPath(config.baseURL, config.url);
      request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
  
      // Set the request timeout in MS
      request.timeout = config.timeout;
  
      // Listen for ready state
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
  
        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
  
        // Prepare the response
        var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
        var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
        var response = {
          data: responseData,
          status: request.status,
          statusText: request.statusText,
          headers: responseHeaders,
          config: config,
          request: request
        };
  
        settle(resolve, reject, response);
  
        // Clean up request
        request = null;
      };
  
      // Handle browser request cancellation (as opposed to a manual cancellation)
      request.onabort = function handleAbort() {
        if (!request) {
          return;
        }
  
        reject(createError('Request aborted', config, 'ECONNABORTED', request));
  
        // Clean up request
        request = null;
      };
  
      // Handle low level network errors
      request.onerror = function handleError() {
        // Real errors are hidden from us by the browser
        // onerror should only fire if it's a network error
        reject(createError('Network Error', config, null, request));
  
        // Clean up request
        request = null;
      };
  
      // Handle timeout
      request.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
          request));
  
        // Clean up request
        request = null;
      };
  
      // Add xsrf header
      // This is only done if running in a standard browser environment.
      // Specifically not if we're in a web worker, or react-native.
      if (utils.isStandardBrowserEnv()) {
        // Add xsrf header
        var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;
  
        if (xsrfValue) {
          requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
      }
  
      // Add headers to the request
      if ('setRequestHeader' in request) {
        utils.forEach(requestHeaders, function setRequestHeader(val, key) {
          if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
            // Remove Content-Type if data is undefined
            delete requestHeaders[key];
          } else {
            // Otherwise add header to the request
            request.setRequestHeader(key, val);
          }
        });
      }
  
      // Add withCredentials to request if needed
      if (!utils.isUndefined(config.withCredentials)) {
        request.withCredentials = !!config.withCredentials;
      }
  
      // Add responseType to request if needed
      if (config.responseType) {
        try {
          request.responseType = config.responseType;
        } catch (e) {
          // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
          // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
          if (config.responseType !== 'json') {
            throw e;
          }
        }
      }
  
      // Handle progress if needed
      if (typeof config.onDownloadProgress === 'function') {
        request.addEventListener('progress', config.onDownloadProgress);
      }
  
      // Not all browsers support upload events
      if (typeof config.onUploadProgress === 'function' && request.upload) {
        request.upload.addEventListener('progress', config.onUploadProgress);
      }
  
      if (config.cancelToken) {
        // Handle cancellation
        config.cancelToken.promise.then(function onCanceled(cancel) {
          if (!request) {
            return;
          }
  
          request.abort();
          reject(cancel);
          // Clean up request
          request = null;
        });
      }
  
      if (!requestData) {
        requestData = null;
      }
  
      // Send the request
      request.send(requestData);
    });
  };
  
  },{"./../utils":"../node_modules/axios/lib/utils.js","./../core/settle":"../node_modules/axios/lib/core/settle.js","./../helpers/cookies":"../node_modules/axios/lib/helpers/cookies.js","./../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","../core/buildFullPath":"../node_modules/axios/lib/core/buildFullPath.js","./../helpers/parseHeaders":"../node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../node_modules/axios/lib/core/createError.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {
  
  // shim for using process in browser
  var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
  // don't break things.  But we need to wrap it in a try catch in case it is
  // wrapped in strict mode code which doesn't define any globals.  It's inside a
  // function because try/catches deoptimize in certain engines.
  
  var cachedSetTimeout;
  var cachedClearTimeout;
  
  function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
  }
  
  function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
  }
  
  (function () {
    try {
      if (typeof setTimeout === 'function') {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
  
    try {
      if (typeof clearTimeout === 'function') {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      //normal enviroments in sane situations
      return setTimeout(fun, 0);
    } // if setTimeout wasn't available but was latter defined
  
  
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
  
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      //normal enviroments in sane situations
      return clearTimeout(marker);
    } // if clearTimeout wasn't available but was latter defined
  
  
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
  
    try {
      // when when somebody has screwed with setTimeout but no I.E. maddness
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
        return cachedClearTimeout.call(null, marker);
      } catch (e) {
        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
  
    draining = false;
  
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
  
    if (queue.length) {
      drainQueue();
    }
  }
  
  function drainQueue() {
    if (draining) {
      return;
    }
  
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
  
    while (len) {
      currentQueue = queue;
      queue = [];
  
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
  
      queueIndex = -1;
      len = queue.length;
    }
  
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
  }
  
  process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
  
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
  
    queue.push(new Item(fun, args));
  
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  }; // v8 likes predictible objects
  
  
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  
  Item.prototype.run = function () {
    this.fun.apply(null, this.array);
  };
  
  process.title = 'browser';
  process.env = {};
  process.argv = [];
  process.version = ''; // empty string to avoid regexp issues
  
  process.versions = {};
  
  function noop() {}
  
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  
  process.listeners = function (name) {
    return [];
  };
  
  process.binding = function (name) {
    throw new Error('process.binding is not supported');
  };
  
  process.cwd = function () {
    return '/';
  };
  
  process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
  };
  
  process.umask = function () {
    return 0;
  };
  },{}],"../node_modules/axios/lib/defaults.js":[function(require,module,exports) {
  var process = require("process");
  'use strict';
  
  var utils = require('./utils');
  var normalizeHeaderName = require('./helpers/normalizeHeaderName');
  
  var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
  };
  
  function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
      headers['Content-Type'] = value;
    }
  }
  
  function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== 'undefined') {
      // For browsers use XHR adapter
      adapter = require('./adapters/xhr');
    } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      adapter = require('./adapters/http');
    }
    return adapter;
  }
  
  var defaults = {
    adapter: getDefaultAdapter(),
  
    transformRequest: [function transformRequest(data, headers) {
      normalizeHeaderName(headers, 'Accept');
      normalizeHeaderName(headers, 'Content-Type');
      if (utils.isFormData(data) ||
        utils.isArrayBuffer(data) ||
        utils.isBuffer(data) ||
        utils.isStream(data) ||
        utils.isFile(data) ||
        utils.isBlob(data)
      ) {
        return data;
      }
      if (utils.isArrayBufferView(data)) {
        return data.buffer;
      }
      if (utils.isURLSearchParams(data)) {
        setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
        return data.toString();
      }
      if (utils.isObject(data)) {
        setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
        return JSON.stringify(data);
      }
      return data;
    }],
  
    transformResponse: [function transformResponse(data) {
      /*eslint no-param-reassign:0*/
      if (typeof data === 'string') {
        try {
          data = JSON.parse(data);
        } catch (e) { /* Ignore */ }
      }
      return data;
    }],
  
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
  
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
  
    maxContentLength: -1,
    maxBodyLength: -1,
  
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  
  defaults.headers = {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  };
  
  utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
  });
  
  module.exports = defaults;
  
  },{"./utils":"../node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"../node_modules/axios/lib/adapters/xhr.js","./adapters/http":"../node_modules/axios/lib/adapters/xhr.js","process":"../node_modules/process/browser.js"}],"../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  var transformData = require('./transformData');
  var isCancel = require('../cancel/isCancel');
  var defaults = require('../defaults');
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
      config.cancelToken.throwIfRequested();
    }
  }
  
  /**
   * Dispatch a request to the server using the configured adapter.
   *
   * @param {object} config The config that is to be used for the request
   * @returns {Promise} The Promise to be fulfilled
   */
  module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
  
    // Ensure headers exist
    config.headers = config.headers || {};
  
    // Transform request data
    config.data = transformData(
      config.data,
      config.headers,
      config.transformRequest
    );
  
    // Flatten headers
    config.headers = utils.merge(
      config.headers.common || {},
      config.headers[config.method] || {},
      config.headers
    );
  
    utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      function cleanHeaderConfig(method) {
        delete config.headers[method];
      }
    );
  
    var adapter = config.adapter || defaults.adapter;
  
    return adapter(config).then(function onAdapterResolution(response) {
      throwIfCancellationRequested(config);
  
      // Transform response data
      response.data = transformData(
        response.data,
        response.headers,
        config.transformResponse
      );
  
      return response;
    }, function onAdapterRejection(reason) {
      if (!isCancel(reason)) {
        throwIfCancellationRequested(config);
  
        // Transform response data
        if (reason && reason.response) {
          reason.response.data = transformData(
            reason.response.data,
            reason.response.headers,
            config.transformResponse
          );
        }
      }
  
      return Promise.reject(reason);
    });
  };
  
  },{"./../utils":"../node_modules/axios/lib/utils.js","./transformData":"../node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","../defaults":"../node_modules/axios/lib/defaults.js"}],"../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('../utils');
  
  /**
   * Config-specific merge-function which creates a new config-object
   * by merging two configuration objects together.
   *
   * @param {Object} config1
   * @param {Object} config2
   * @returns {Object} New object resulting from merging config2 to config1
   */
  module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
  
    var valueFromConfig2Keys = ['url', 'method', 'data'];
    var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
    var defaultToConfig2Keys = [
      'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
      'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
      'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
      'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
      'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
    ];
    var directMergeKeys = ['validateStatus'];
  
    function getMergedValue(target, source) {
      if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
        return utils.merge(target, source);
      } else if (utils.isPlainObject(source)) {
        return utils.merge({}, source);
      } else if (utils.isArray(source)) {
        return source.slice();
      }
      return source;
    }
  
    function mergeDeepProperties(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    }
  
    utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      }
    });
  
    utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);
  
    utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
      if (!utils.isUndefined(config2[prop])) {
        config[prop] = getMergedValue(undefined, config2[prop]);
      } else if (!utils.isUndefined(config1[prop])) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });
  
    utils.forEach(directMergeKeys, function merge(prop) {
      if (prop in config2) {
        config[prop] = getMergedValue(config1[prop], config2[prop]);
      } else if (prop in config1) {
        config[prop] = getMergedValue(undefined, config1[prop]);
      }
    });
  
    var axiosKeys = valueFromConfig2Keys
      .concat(mergeDeepPropertiesKeys)
      .concat(defaultToConfig2Keys)
      .concat(directMergeKeys);
  
    var otherKeys = Object
      .keys(config1)
      .concat(Object.keys(config2))
      .filter(function filterAxiosKeys(key) {
        return axiosKeys.indexOf(key) === -1;
      });
  
    utils.forEach(otherKeys, mergeDeepProperties);
  
    return config;
  };
  
  },{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./../utils');
  var buildURL = require('../helpers/buildURL');
  var InterceptorManager = require('./InterceptorManager');
  var dispatchRequest = require('./dispatchRequest');
  var mergeConfig = require('./mergeConfig');
  
  /**
   * Create a new instance of Axios
   *
   * @param {Object} instanceConfig The default config for the instance
   */
  function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  /**
   * Dispatch a request
   *
   * @param {Object} config The config specific for this request (merged with this.defaults)
   */
  Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
      config = arguments[1] || {};
      config.url = arguments[0];
    } else {
      config = config || {};
    }
  
    config = mergeConfig(this.defaults, config);
  
    // Set config.method
    if (config.method) {
      config.method = config.method.toLowerCase();
    } else if (this.defaults.method) {
      config.method = this.defaults.method.toLowerCase();
    } else {
      config.method = 'get';
    }
  
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
  
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
  
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
  
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
  
    return promise;
  };
  
  Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
  };
  
  // Provide aliases for supported request methods
  utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: (config || {}).data
      }));
    };
  });
  
  utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        url: url,
        data: data
      }));
    };
  });
  
  module.exports = Axios;
  
  },{"./../utils":"../node_modules/axios/lib/utils.js","../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js"}],"../node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
  'use strict';
  
  /**
   * A `Cancel` is an object that is thrown when an operation is canceled.
   *
   * @class
   * @param {string=} message The message.
   */
  function Cancel(message) {
    this.message = message;
  }
  
  Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
  };
  
  Cancel.prototype.__CANCEL__ = true;
  
  module.exports = Cancel;
  
  },{}],"../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
  'use strict';
  
  var Cancel = require('./Cancel');
  
  /**
   * A `CancelToken` is an object that can be used to request cancellation of an operation.
   *
   * @class
   * @param {Function} executor The executor function.
   */
  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
  
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
  
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }
  
      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  
  /**
   * Throws a `Cancel` if cancellation has been requested.
   */
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };
  
  module.exports = CancelToken;
  
  },{"./Cancel":"../node_modules/axios/lib/cancel/Cancel.js"}],"../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
  'use strict';
  
  /**
   * Syntactic sugar for invoking a function and expanding an array for arguments.
   *
   * Common use case would be to use `Function.prototype.apply`.
   *
   *  ```js
   *  function f(x, y, z) {}
   *  var args = [1, 2, 3];
   *  f.apply(null, args);
   *  ```
   *
   * With `spread` this example can be re-written.
   *
   *  ```js
   *  spread(function(x, y, z) {})([1, 2, 3]);
   *  ```
   *
   * @param {Function} callback
   * @returns {Function}
   */
  module.exports = function spread(callback) {
    return function wrap(arr) {
      return callback.apply(null, arr);
    };
  };
  
  },{}],"../node_modules/axios/lib/helpers/isAxiosError.js":[function(require,module,exports) {
  'use strict';
  
  /**
   * Determines whether the payload is an error thrown by Axios
   *
   * @param {*} payload The value to test
   * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
   */
  module.exports = function isAxiosError(payload) {
    return (typeof payload === 'object') && (payload.isAxiosError === true);
  };
  
  },{}],"../node_modules/axios/lib/axios.js":[function(require,module,exports) {
  'use strict';
  
  var utils = require('./utils');
  var bind = require('./helpers/bind');
  var Axios = require('./core/Axios');
  var mergeConfig = require('./core/mergeConfig');
  var defaults = require('./defaults');
  
  /**
   * Create an instance of Axios
   *
   * @param {Object} defaultConfig The default config for the instance
   * @return {Axios} A new instance of Axios
   */
  function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
  
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
  
    // Copy context to instance
    utils.extend(instance, context);
  
    return instance;
  }
  
  // Create the default instance to be exported
  var axios = createInstance(defaults);
  
  // Expose Axios class to allow class inheritance
  axios.Axios = Axios;
  
  // Factory for creating new instances
  axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
  };
  
  // Expose Cancel & CancelToken
  axios.Cancel = require('./cancel/Cancel');
  axios.CancelToken = require('./cancel/CancelToken');
  axios.isCancel = require('./cancel/isCancel');
  
  // Expose all/spread
  axios.all = function all(promises) {
    return Promise.all(promises);
  };
  axios.spread = require('./helpers/spread');
  
  // Expose isAxiosError
  axios.isAxiosError = require('./helpers/isAxiosError');
  
  module.exports = axios;
  
  // Allow use of default import syntax in TypeScript
  module.exports.default = axios;
  
  },{"./utils":"../node_modules/axios/lib/utils.js","./helpers/bind":"../node_modules/axios/lib/helpers/bind.js","./core/Axios":"../node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js","./defaults":"../node_modules/axios/lib/defaults.js","./cancel/Cancel":"../node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../node_modules/axios/lib/helpers/spread.js","./helpers/isAxiosError":"../node_modules/axios/lib/helpers/isAxiosError.js"}],"../node_modules/axios/index.js":[function(require,module,exports) {
  module.exports = require('./lib/axios');
  },{"./lib/axios":"../node_modules/axios/lib/axios.js"}],"js/components/Fetch-movies.js":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _axios = _interopRequireDefault(require("axios"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const BASE_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '072ba5d3ab696b78ba3c61da98d3ebeb';
  
  class FetchMovies {
    constructor() {
      this._popularMoviesPage = 1;
      this._queryByNamePage = 1;
      this._searchQuery = '';
      this.lang = 'en-US';
      this.adult = false;
    }
  
    async fetchMainPopularMovies() {
      this._popularMoviesPage = 1;
      const res = await this._fetchMostPopularMovies();
      return res;
    }
  
    async fetchNextPopularMovies() {
      this._popularMoviesPage += 1;
      const res = await this._fetchMostPopularMovies();
      return res;
    }
  
    async fetchPrevPopularMovies() {
      this._popularMoviesPage -= 1;
      const res = await this._fetchMostPopularMovies();
      return res;
    }
  
    async fetchCertainPopularMoviesPage(numberOfPage) {
      this._popularMoviesPage = numberOfPage;
      const res = await this._fetchMostPopularMovies();
      return res;
    }
  
    async searchMovie(movieName) {
      this._searchQuery = movieName;
      localStorage.setItem('searchQuery', movieName);
      const res = await this._fetchMovieByName(movieName);
      localStorage.setItem('searchedPageByName', '1');
      return res;
    }
  
    async nextSearchedMoviePage() {
      this._searchQuery = localStorage.getItem('searchQuery');
      const page = Number(localStorage.getItem('searchedPageByName')) + 1;
      localStorage.setItem('searchedPageByName', page);
      this._queryByNamePage = page;
      const res = await this._fetchMovieByName(this._searchQuery);
      return res;
    }
  
    async certainSearchedMoviePage(numberOfPage) {
      this._searchQuery = localStorage.getItem('searchQuery');
      localStorage.setItem('searchedPageByName', numberOfPage);
      this._queryByNamePage = numberOfPage;
      const res = await this._fetchMovieByName(this._searchQuery);
      return res;
    }
  
    async prevSearchedMoviePage() {
      this._searchQuery = localStorage.getItem('searchQuery');
      const page = Number(localStorage.getItem('searchedPageByName')) - 1;
      localStorage.setItem('searchedPageByName', page);
      this._queryByNamePage = page;
      const res = await this._fetchMovieByName(this._searchQuery);
      return res;
    }
  
    switchLang() {
      this.lang === 'en-US' ? this.lang = 'ru' : this.lang = 'en-US';
    }
  
    switchAdult() {
      this.adult ? this.adult = false : this.adult = true;
    }
  
    async getMovieDetaisById(id) {
      const {
        data
      } = await _axios.default.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${this.lang}`);
  
      if (data.release_date) {
        data.release_date = data.release_date.slice(0, 4);
      }
  
      return data;
    }
  
    async _fetchMovieByName() {
      const {
        data
      } = await _axios.default.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${this._searchQuery}&language=${this.lang}&page=${this._queryByNamePage}&include_adult=${this.adult}`);
      await this._makeupDescription(data);
      return data;
    }
  
    async _fetchMostPopularMovies() {
      const {
        data
      } = await _axios.default.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=${this.lang}&page=${this._popularMoviesPage}`);
      await this._makeupDescription(data);
      return data;
    }
  
    async _fetchGenresList() {
      const genres = await _axios.default.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=${this.lang}`);
      return genres.data.genres;
    }
  
    async _makeupDescription(data) {
      const genres = await this._fetchGenresList();
      const genresIds = genres.map(genre => genre.id);
      const genresData = data.results.map(x => {
        return x.genre_ids.map(y => {
          return genres[genresIds.indexOf(y)].name;
        });
      });
      data.results.forEach((el, i) => {
        if (el.release_date) {
          el.release_date = el.release_date.slice(0, 4);
        } else {
          el.release_date = 'unknown';
        }
  
        el.genre_ids = genresData[i];
        return data;
      });
    }
  
  }
  
  exports.default = FetchMovies;
  },{"axios":"../node_modules/axios/index.js"}],"../node_modules/handlebars/dist/handlebars.runtime.js":[function(require,module,exports) {
  var define;
  var global = arguments[3];
  /**!
  
   @license
   handlebars v4.7.7
  
  Copyright (C) 2011-2019 by Yehuda Katz
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  
  */
  (function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
  })(this, function () {
    return (
      /******/
      function (modules) {
        // webpackBootstrap
  
        /******/
        // The module cache
  
        /******/
        var installedModules = {};
        /******/
        // The require function
  
        /******/
  
        function __webpack_require__(moduleId) {
          /******/
          // Check if module is in cache
  
          /******/
          if (installedModules[moduleId])
            /******/
            return installedModules[moduleId].exports;
          /******/
          // Create a new module (and put it into the cache)
  
          /******/
  
          var module = installedModules[moduleId] = {
            /******/
            exports: {},
  
            /******/
            id: moduleId,
  
            /******/
            loaded: false
            /******/
  
          };
          /******/
          // Execute the module function
  
          /******/
  
          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          /******/
          // Flag the module as loaded
  
          /******/
  
          module.loaded = true;
          /******/
          // Return the exports of the module
  
          /******/
  
          return module.exports;
          /******/
        }
        /******/
        // expose the modules object (__webpack_modules__)
  
        /******/
  
  
        __webpack_require__.m = modules;
        /******/
        // expose the module cache
  
        /******/
  
        __webpack_require__.c = installedModules;
        /******/
        // __webpack_public_path__
  
        /******/
  
        __webpack_require__.p = "";
        /******/
        // Load entry module and return exports
  
        /******/
  
        return __webpack_require__(0);
        /******/
      }(
      /************************************************************************/
  
      /******/
      [
      /* 0 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireWildcard = __webpack_require__(1)['default'];
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
  
        var _handlebarsBase = __webpack_require__(3);
  
        var base = _interopRequireWildcard(_handlebarsBase); // Each of these augment the Handlebars object. No need to setup here.
        // (This is done to easily share code between commonjs and browse envs)
  
  
        var _handlebarsSafeString = __webpack_require__(36);
  
        var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
  
        var _handlebarsException = __webpack_require__(5);
  
        var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
  
        var _handlebarsUtils = __webpack_require__(4);
  
        var Utils = _interopRequireWildcard(_handlebarsUtils);
  
        var _handlebarsRuntime = __webpack_require__(37);
  
        var runtime = _interopRequireWildcard(_handlebarsRuntime);
  
        var _handlebarsNoConflict = __webpack_require__(43);
  
        var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict); // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  
  
        function create() {
          var hb = new base.HandlebarsEnvironment();
          Utils.extend(hb, base);
          hb.SafeString = _handlebarsSafeString2['default'];
          hb.Exception = _handlebarsException2['default'];
          hb.Utils = Utils;
          hb.escapeExpression = Utils.escapeExpression;
          hb.VM = runtime;
  
          hb.template = function (spec) {
            return runtime.template(spec, hb);
          };
  
          return hb;
        }
  
        var inst = create();
        inst.create = create;
  
        _handlebarsNoConflict2['default'](inst);
  
        inst['default'] = inst;
        exports['default'] = inst;
        module.exports = exports['default'];
        /***/
      },
      /* 1 */
  
      /***/
      function (module, exports) {
        "use strict";
  
        exports["default"] = function (obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
  
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
              }
            }
  
            newObj["default"] = obj;
            return newObj;
          }
        };
  
        exports.__esModule = true;
        /***/
      },
      /* 2 */
  
      /***/
      function (module, exports) {
        "use strict";
  
        exports["default"] = function (obj) {
          return obj && obj.__esModule ? obj : {
            "default": obj
          };
        };
  
        exports.__esModule = true;
        /***/
      },
      /* 3 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
        exports.HandlebarsEnvironment = HandlebarsEnvironment;
  
        var _utils = __webpack_require__(4);
  
        var _exception = __webpack_require__(5);
  
        var _exception2 = _interopRequireDefault(_exception);
  
        var _helpers = __webpack_require__(9);
  
        var _decorators = __webpack_require__(29);
  
        var _logger = __webpack_require__(31);
  
        var _logger2 = _interopRequireDefault(_logger);
  
        var _internalProtoAccess = __webpack_require__(32);
  
        var VERSION = '4.7.7';
        exports.VERSION = VERSION;
        var COMPILER_REVISION = 8;
        exports.COMPILER_REVISION = COMPILER_REVISION;
        var LAST_COMPATIBLE_COMPILER_REVISION = 7;
        exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
        var REVISION_CHANGES = {
          1: '<= 1.0.rc.2',
          // 1.0.rc.2 is actually rev2 but doesn't report it
          2: '== 1.0.0-rc.3',
          3: '== 1.0.0-rc.4',
          4: '== 1.x.x',
          5: '== 2.0.0-alpha.x',
          6: '>= 2.0.0-beta.1',
          7: '>= 4.0.0 <4.3.0',
          8: '>= 4.3.0'
        };
        exports.REVISION_CHANGES = REVISION_CHANGES;
        var objectType = '[object Object]';
  
        function HandlebarsEnvironment(helpers, partials, decorators) {
          this.helpers = helpers || {};
          this.partials = partials || {};
          this.decorators = decorators || {};
  
          _helpers.registerDefaultHelpers(this);
  
          _decorators.registerDefaultDecorators(this);
        }
  
        HandlebarsEnvironment.prototype = {
          constructor: HandlebarsEnvironment,
          logger: _logger2['default'],
          log: _logger2['default'].log,
          registerHelper: function registerHelper(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2['default']('Arg not supported with multiple helpers');
              }
  
              _utils.extend(this.helpers, name);
            } else {
              this.helpers[name] = fn;
            }
          },
          unregisterHelper: function unregisterHelper(name) {
            delete this.helpers[name];
          },
          registerPartial: function registerPartial(name, partial) {
            if (_utils.toString.call(name) === objectType) {
              _utils.extend(this.partials, name);
            } else {
              if (typeof partial === 'undefined') {
                throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
              }
  
              this.partials[name] = partial;
            }
          },
          unregisterPartial: function unregisterPartial(name) {
            delete this.partials[name];
          },
          registerDecorator: function registerDecorator(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2['default']('Arg not supported with multiple decorators');
              }
  
              _utils.extend(this.decorators, name);
            } else {
              this.decorators[name] = fn;
            }
          },
          unregisterDecorator: function unregisterDecorator(name) {
            delete this.decorators[name];
          },
  
          /**
           * Reset the memory of illegal property accesses that have already been logged.
           * @deprecated should only be used in handlebars test-cases
           */
          resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
            _internalProtoAccess.resetLoggedProperties();
          }
        };
        var log = _logger2['default'].log;
        exports.log = log;
        exports.createFrame = _utils.createFrame;
        exports.logger = _logger2['default'];
        /***/
      },
      /* 4 */
  
      /***/
      function (module, exports) {
        'use strict';
  
        exports.__esModule = true;
        exports.extend = extend;
        exports.indexOf = indexOf;
        exports.escapeExpression = escapeExpression;
        exports.isEmpty = isEmpty;
        exports.createFrame = createFrame;
        exports.blockParams = blockParams;
        exports.appendContextPath = appendContextPath;
        var escape = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
          '=': '&#x3D;'
        };
        var badChars = /[&<>"'`=]/g,
            possible = /[&<>"'`=]/;
  
        function escapeChar(chr) {
          return escape[chr];
        }
  
        function extend(obj
        /* , ...source */
        ) {
          for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
              if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                obj[key] = arguments[i][key];
              }
            }
          }
  
          return obj;
        }
  
        var toString = Object.prototype.toString;
        exports.toString = toString; // Sourced from lodash
        // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  
        /* eslint-disable func-style */
  
        var isFunction = function isFunction(value) {
          return typeof value === 'function';
        }; // fallback for older versions of Chrome and Safari
  
        /* istanbul ignore next */
  
  
        if (isFunction(/x/)) {
          exports.isFunction = isFunction = function (value) {
            return typeof value === 'function' && toString.call(value) === '[object Function]';
          };
        }
  
        exports.isFunction = isFunction;
        /* eslint-enable func-style */
  
        /* istanbul ignore next */
  
        var isArray = Array.isArray || function (value) {
          return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
        };
  
        exports.isArray = isArray; // Older IE versions do not directly support indexOf so we must implement our own, sadly.
  
        function indexOf(array, value) {
          for (var i = 0, len = array.length; i < len; i++) {
            if (array[i] === value) {
              return i;
            }
          }
  
          return -1;
        }
  
        function escapeExpression(string) {
          if (typeof string !== 'string') {
            // don't escape SafeStrings, since they're already safe
            if (string && string.toHTML) {
              return string.toHTML();
            } else if (string == null) {
              return '';
            } else if (!string) {
              return string + '';
            } // Force a string conversion as this will be done by the append regardless and
            // the regex test will do this transparently behind the scenes, causing issues if
            // an object's to string has escaped characters in it.
  
  
            string = '' + string;
          }
  
          if (!possible.test(string)) {
            return string;
          }
  
          return string.replace(badChars, escapeChar);
        }
  
        function isEmpty(value) {
          if (!value && value !== 0) {
            return true;
          } else if (isArray(value) && value.length === 0) {
            return true;
          } else {
            return false;
          }
        }
  
        function createFrame(object) {
          var frame = extend({}, object);
          frame._parent = object;
          return frame;
        }
  
        function blockParams(params, ids) {
          params.path = ids;
          return params;
        }
  
        function appendContextPath(contextPath, id) {
          return (contextPath ? contextPath + '.' : '') + id;
        }
        /***/
  
      },
      /* 5 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _Object$defineProperty = __webpack_require__(6)['default'];
  
        exports.__esModule = true;
        var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];
  
        function Exception(message, node) {
          var loc = node && node.loc,
              line = undefined,
              endLineNumber = undefined,
              column = undefined,
              endColumn = undefined;
  
          if (loc) {
            line = loc.start.line;
            endLineNumber = loc.end.line;
            column = loc.start.column;
            endColumn = loc.end.column;
            message += ' - ' + line + ':' + column;
          }
  
          var tmp = Error.prototype.constructor.call(this, message); // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  
          for (var idx = 0; idx < errorProps.length; idx++) {
            this[errorProps[idx]] = tmp[errorProps[idx]];
          }
          /* istanbul ignore else */
  
  
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Exception);
          }
  
          try {
            if (loc) {
              this.lineNumber = line;
              this.endLineNumber = endLineNumber; // Work around issue under safari where we can't directly set the column value
  
              /* istanbul ignore next */
  
              if (_Object$defineProperty) {
                Object.defineProperty(this, 'column', {
                  value: column,
                  enumerable: true
                });
                Object.defineProperty(this, 'endColumn', {
                  value: endColumn,
                  enumerable: true
                });
              } else {
                this.column = column;
                this.endColumn = endColumn;
              }
            }
          } catch (nop) {
            /* Ignore if the browser is very particular */
          }
        }
  
        Exception.prototype = new Error();
        exports['default'] = Exception;
        module.exports = exports['default'];
        /***/
      },
      /* 6 */
  
      /***/
      function (module, exports, __webpack_require__) {
        module.exports = {
          "default": __webpack_require__(7),
          __esModule: true
        };
        /***/
      },
      /* 7 */
  
      /***/
      function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(8);
  
        module.exports = function defineProperty(it, key, desc) {
          return $.setDesc(it, key, desc);
        };
        /***/
  
      },
      /* 8 */
  
      /***/
      function (module, exports) {
        var $Object = Object;
        module.exports = {
          create: $Object.create,
          getProto: $Object.getPrototypeOf,
          isEnum: {}.propertyIsEnumerable,
          getDesc: $Object.getOwnPropertyDescriptor,
          setDesc: $Object.defineProperty,
          setDescs: $Object.defineProperties,
          getKeys: $Object.keys,
          getNames: $Object.getOwnPropertyNames,
          getSymbols: $Object.getOwnPropertySymbols,
          each: [].forEach
        };
        /***/
      },
      /* 9 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
        exports.registerDefaultHelpers = registerDefaultHelpers;
        exports.moveHelperToHooks = moveHelperToHooks;
  
        var _helpersBlockHelperMissing = __webpack_require__(10);
  
        var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
  
        var _helpersEach = __webpack_require__(11);
  
        var _helpersEach2 = _interopRequireDefault(_helpersEach);
  
        var _helpersHelperMissing = __webpack_require__(24);
  
        var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
  
        var _helpersIf = __webpack_require__(25);
  
        var _helpersIf2 = _interopRequireDefault(_helpersIf);
  
        var _helpersLog = __webpack_require__(26);
  
        var _helpersLog2 = _interopRequireDefault(_helpersLog);
  
        var _helpersLookup = __webpack_require__(27);
  
        var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
  
        var _helpersWith = __webpack_require__(28);
  
        var _helpersWith2 = _interopRequireDefault(_helpersWith);
  
        function registerDefaultHelpers(instance) {
          _helpersBlockHelperMissing2['default'](instance);
  
          _helpersEach2['default'](instance);
  
          _helpersHelperMissing2['default'](instance);
  
          _helpersIf2['default'](instance);
  
          _helpersLog2['default'](instance);
  
          _helpersLookup2['default'](instance);
  
          _helpersWith2['default'](instance);
        }
  
        function moveHelperToHooks(instance, helperName, keepHelper) {
          if (instance.helpers[helperName]) {
            instance.hooks[helperName] = instance.helpers[helperName];
  
            if (!keepHelper) {
              delete instance.helpers[helperName];
            }
          }
        }
        /***/
  
      },
      /* 10 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        exports.__esModule = true;
  
        var _utils = __webpack_require__(4);
  
        exports['default'] = function (instance) {
          instance.registerHelper('blockHelperMissing', function (context, options) {
            var inverse = options.inverse,
                fn = options.fn;
  
            if (context === true) {
              return fn(this);
            } else if (context === false || context == null) {
              return inverse(this);
            } else if (_utils.isArray(context)) {
              if (context.length > 0) {
                if (options.ids) {
                  options.ids = [options.name];
                }
  
                return instance.helpers.each(context, options);
              } else {
                return inverse(this);
              }
            } else {
              if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
  
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {
                  data: data
                };
              }
  
              return fn(context, options);
            }
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 11 */
  
      /***/
      function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          'use strict';
  
          var _Object$keys = __webpack_require__(12)['default'];
  
          var _interopRequireDefault = __webpack_require__(2)['default'];
  
          exports.__esModule = true;
  
          var _utils = __webpack_require__(4);
  
          var _exception = __webpack_require__(5);
  
          var _exception2 = _interopRequireDefault(_exception);
  
          exports['default'] = function (instance) {
            instance.registerHelper('each', function (context, options) {
              if (!options) {
                throw new _exception2['default']('Must pass iterator to #each');
              }
  
              var fn = options.fn,
                  inverse = options.inverse,
                  i = 0,
                  ret = '',
                  data = undefined,
                  contextPath = undefined;
  
              if (options.data && options.ids) {
                contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
              }
  
              if (_utils.isFunction(context)) {
                context = context.call(this);
              }
  
              if (options.data) {
                data = _utils.createFrame(options.data);
              }
  
              function execIteration(field, index, last) {
                if (data) {
                  data.key = field;
                  data.index = index;
                  data.first = index === 0;
                  data.last = !!last;
  
                  if (contextPath) {
                    data.contextPath = contextPath + field;
                  }
                }
  
                ret = ret + fn(context[field], {
                  data: data,
                  blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
                });
              }
  
              if (context && typeof context === 'object') {
                if (_utils.isArray(context)) {
                  for (var j = context.length; i < j; i++) {
                    if (i in context) {
                      execIteration(i, i, i === context.length - 1);
                    }
                  }
                } else if (global.Symbol && context[global.Symbol.iterator]) {
                  var newContext = [];
                  var iterator = context[global.Symbol.iterator]();
  
                  for (var it = iterator.next(); !it.done; it = iterator.next()) {
                    newContext.push(it.value);
                  }
  
                  context = newContext;
  
                  for (var j = context.length; i < j; i++) {
                    execIteration(i, i, i === context.length - 1);
                  }
                } else {
                  (function () {
                    var priorKey = undefined;
  
                    _Object$keys(context).forEach(function (key) {
                      // We're running the iterations one step out of sync so we can detect
                      // the last iteration without have to scan the object twice and create
                      // an itermediate keys array.
                      if (priorKey !== undefined) {
                        execIteration(priorKey, i - 1);
                      }
  
                      priorKey = key;
                      i++;
                    });
  
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1, true);
                    }
                  })();
                }
              }
  
              if (i === 0) {
                ret = inverse(this);
              }
  
              return ret;
            });
          };
  
          module.exports = exports['default'];
          /* WEBPACK VAR INJECTION */
        }).call(exports, function () {
          return this;
        }());
        /***/
      },
      /* 12 */
  
      /***/
      function (module, exports, __webpack_require__) {
        module.exports = {
          "default": __webpack_require__(13),
          __esModule: true
        };
        /***/
      },
      /* 13 */
  
      /***/
      function (module, exports, __webpack_require__) {
        __webpack_require__(14);
  
        module.exports = __webpack_require__(20).Object.keys;
        /***/
      },
      /* 14 */
  
      /***/
      function (module, exports, __webpack_require__) {
        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__(15);
  
        __webpack_require__(17)('keys', function ($keys) {
          return function keys(it) {
            return $keys(toObject(it));
          };
        });
        /***/
  
      },
      /* 15 */
  
      /***/
      function (module, exports, __webpack_require__) {
        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__(16);
  
        module.exports = function (it) {
          return Object(defined(it));
        };
        /***/
  
      },
      /* 16 */
  
      /***/
      function (module, exports) {
        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function (it) {
          if (it == undefined) throw TypeError("Can't call method on  " + it);
          return it;
        };
        /***/
  
      },
      /* 17 */
  
      /***/
      function (module, exports, __webpack_require__) {
        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__(18),
            core = __webpack_require__(20),
            fails = __webpack_require__(23);
  
        module.exports = function (KEY, exec) {
          var fn = (core.Object || {})[KEY] || Object[KEY],
              exp = {};
          exp[KEY] = exec(fn);
          $export($export.S + $export.F * fails(function () {
            fn(1);
          }), 'Object', exp);
        };
        /***/
  
      },
      /* 18 */
  
      /***/
      function (module, exports, __webpack_require__) {
        var global = __webpack_require__(19),
            core = __webpack_require__(20),
            ctx = __webpack_require__(21),
            PROTOTYPE = 'prototype';
  
        var $export = function (type, name, source) {
          var IS_FORCED = type & $export.F,
              IS_GLOBAL = type & $export.G,
              IS_STATIC = type & $export.S,
              IS_PROTO = type & $export.P,
              IS_BIND = type & $export.B,
              IS_WRAP = type & $export.W,
              exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
              target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
              key,
              own,
              out;
          if (IS_GLOBAL) source = name;
  
          for (key in source) {
            // contains in native
            own = !IS_FORCED && target && key in target;
            if (own && key in exports) continue; // export native or passed
  
            out = own ? target[key] : source[key]; // prevent global pollution for namespaces
  
            exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] // bind timers to global for call from export context
            : IS_BIND && own ? ctx(out, global) // wrap global constructors for prevent change them in library
            : IS_WRAP && target[key] == out ? function (C) {
              var F = function (param) {
                return this instanceof C ? new C(param) : C(param);
              };
  
              F[PROTOTYPE] = C[PROTOTYPE];
              return F; // make static versions for prototype methods
            }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
            if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
          }
        }; // type bitmap
  
  
        $export.F = 1; // forced
  
        $export.G = 2; // global
  
        $export.S = 4; // static
  
        $export.P = 8; // proto
  
        $export.B = 16; // bind
  
        $export.W = 32; // wrap
  
        module.exports = $export;
        /***/
      },
      /* 19 */
  
      /***/
      function (module, exports) {
        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  
        /***/
      },
      /* 20 */
  
      /***/
      function (module, exports) {
        var core = module.exports = {
          version: '1.2.6'
        };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  
        /***/
      },
      /* 21 */
  
      /***/
      function (module, exports, __webpack_require__) {
        // optional / simple context binding
        var aFunction = __webpack_require__(22);
  
        module.exports = function (fn, that, length) {
          aFunction(fn);
          if (that === undefined) return fn;
  
          switch (length) {
            case 1:
              return function (a) {
                return fn.call(that, a);
              };
  
            case 2:
              return function (a, b) {
                return fn.call(that, a, b);
              };
  
            case 3:
              return function (a, b, c) {
                return fn.call(that, a, b, c);
              };
          }
  
          return function ()
          /* ...args */
          {
            return fn.apply(that, arguments);
          };
        };
        /***/
  
      },
      /* 22 */
  
      /***/
      function (module, exports) {
        module.exports = function (it) {
          if (typeof it != 'function') throw TypeError(it + ' is not a function!');
          return it;
        };
        /***/
  
      },
      /* 23 */
  
      /***/
      function (module, exports) {
        module.exports = function (exec) {
          try {
            return !!exec();
          } catch (e) {
            return true;
          }
        };
        /***/
  
      },
      /* 24 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
  
        var _exception = __webpack_require__(5);
  
        var _exception2 = _interopRequireDefault(_exception);
  
        exports['default'] = function (instance) {
          instance.registerHelper('helperMissing', function ()
          /* [args, ]options */
          {
            if (arguments.length === 1) {
              // A missing field in a {{foo}} construct.
              return undefined;
            } else {
              // Someone is actually trying to call something, blow up.
              throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
            }
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 25 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
  
        var _utils = __webpack_require__(4);
  
        var _exception = __webpack_require__(5);
  
        var _exception2 = _interopRequireDefault(_exception);
  
        exports['default'] = function (instance) {
          instance.registerHelper('if', function (conditional, options) {
            if (arguments.length != 2) {
              throw new _exception2['default']('#if requires exactly one argument');
            }
  
            if (_utils.isFunction(conditional)) {
              conditional = conditional.call(this);
            } // Default behavior is to render the positive path if the value is truthy and not empty.
            // The `includeZero` option may be set to treat the condtional as purely not empty based on the
            // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
  
  
            if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
              return options.inverse(this);
            } else {
              return options.fn(this);
            }
          });
          instance.registerHelper('unless', function (conditional, options) {
            if (arguments.length != 2) {
              throw new _exception2['default']('#unless requires exactly one argument');
            }
  
            return instance.helpers['if'].call(this, conditional, {
              fn: options.inverse,
              inverse: options.fn,
              hash: options.hash
            });
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 26 */
  
      /***/
      function (module, exports) {
        'use strict';
  
        exports.__esModule = true;
  
        exports['default'] = function (instance) {
          instance.registerHelper('log', function ()
          /* message, options */
          {
            var args = [undefined],
                options = arguments[arguments.length - 1];
  
            for (var i = 0; i < arguments.length - 1; i++) {
              args.push(arguments[i]);
            }
  
            var level = 1;
  
            if (options.hash.level != null) {
              level = options.hash.level;
            } else if (options.data && options.data.level != null) {
              level = options.data.level;
            }
  
            args[0] = level;
            instance.log.apply(instance, args);
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 27 */
  
      /***/
      function (module, exports) {
        'use strict';
  
        exports.__esModule = true;
  
        exports['default'] = function (instance) {
          instance.registerHelper('lookup', function (obj, field, options) {
            if (!obj) {
              // Note for 5.0: Change to "obj == null" in 5.0
              return obj;
            }
  
            return options.lookupProperty(obj, field);
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 28 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
  
        var _utils = __webpack_require__(4);
  
        var _exception = __webpack_require__(5);
  
        var _exception2 = _interopRequireDefault(_exception);
  
        exports['default'] = function (instance) {
          instance.registerHelper('with', function (context, options) {
            if (arguments.length != 2) {
              throw new _exception2['default']('#with requires exactly one argument');
            }
  
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
  
            var fn = options.fn;
  
            if (!_utils.isEmpty(context)) {
              var data = options.data;
  
              if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
              }
  
              return fn(context, {
                data: data,
                blockParams: _utils.blockParams([context], [data && data.contextPath])
              });
            } else {
              return options.inverse(this);
            }
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 29 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
        exports.registerDefaultDecorators = registerDefaultDecorators;
  
        var _decoratorsInline = __webpack_require__(30);
  
        var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
  
        function registerDefaultDecorators(instance) {
          _decoratorsInline2['default'](instance);
        }
        /***/
  
      },
      /* 30 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        exports.__esModule = true;
  
        var _utils = __webpack_require__(4);
  
        exports['default'] = function (instance) {
          instance.registerDecorator('inline', function (fn, props, container, options) {
            var ret = fn;
  
            if (!props.partials) {
              props.partials = {};
  
              ret = function (context, options) {
                // Create a new partials stack frame prior to exec.
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
              };
            }
  
            props.partials[options.args[0]] = options.fn;
            return ret;
          });
        };
  
        module.exports = exports['default'];
        /***/
      },
      /* 31 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        exports.__esModule = true;
  
        var _utils = __webpack_require__(4);
  
        var logger = {
          methodMap: ['debug', 'info', 'warn', 'error'],
          level: 'info',
          // Maps a given level value to the `methodMap` indexes above.
          lookupLevel: function lookupLevel(level) {
            if (typeof level === 'string') {
              var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
  
              if (levelMap >= 0) {
                level = levelMap;
              } else {
                level = parseInt(level, 10);
              }
            }
  
            return level;
          },
          // Can be overridden in the host environment
          log: function log(level) {
            level = logger.lookupLevel(level);
  
            if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
              var method = logger.methodMap[level]; // eslint-disable-next-line no-console
  
              if (!console[method]) {
                method = 'log';
              }
  
              for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                message[_key - 1] = arguments[_key];
              }
  
              console[method].apply(console, message); // eslint-disable-line no-console
            }
          }
        };
        exports['default'] = logger;
        module.exports = exports['default'];
        /***/
      },
      /* 32 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _Object$create = __webpack_require__(33)['default'];
  
        var _Object$keys = __webpack_require__(12)['default'];
  
        var _interopRequireWildcard = __webpack_require__(1)['default'];
  
        exports.__esModule = true;
        exports.createProtoAccessControl = createProtoAccessControl;
        exports.resultIsAllowed = resultIsAllowed;
        exports.resetLoggedProperties = resetLoggedProperties;
  
        var _createNewLookupObject = __webpack_require__(35);
  
        var _logger = __webpack_require__(31);
  
        var logger = _interopRequireWildcard(_logger);
  
        var loggedProperties = _Object$create(null);
  
        function createProtoAccessControl(runtimeOptions) {
          var defaultMethodWhiteList = _Object$create(null);
  
          defaultMethodWhiteList['constructor'] = false;
          defaultMethodWhiteList['__defineGetter__'] = false;
          defaultMethodWhiteList['__defineSetter__'] = false;
          defaultMethodWhiteList['__lookupGetter__'] = false;
  
          var defaultPropertyWhiteList = _Object$create(null); // eslint-disable-next-line no-proto
  
  
          defaultPropertyWhiteList['__proto__'] = false;
          return {
            properties: {
              whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
              defaultValue: runtimeOptions.allowProtoPropertiesByDefault
            },
            methods: {
              whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
              defaultValue: runtimeOptions.allowProtoMethodsByDefault
            }
          };
        }
  
        function resultIsAllowed(result, protoAccessControl, propertyName) {
          if (typeof result === 'function') {
            return checkWhiteList(protoAccessControl.methods, propertyName);
          } else {
            return checkWhiteList(protoAccessControl.properties, propertyName);
          }
        }
  
        function checkWhiteList(protoAccessControlForType, propertyName) {
          if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
            return protoAccessControlForType.whitelist[propertyName] === true;
          }
  
          if (protoAccessControlForType.defaultValue !== undefined) {
            return protoAccessControlForType.defaultValue;
          }
  
          logUnexpecedPropertyAccessOnce(propertyName);
          return false;
        }
  
        function logUnexpecedPropertyAccessOnce(propertyName) {
          if (loggedProperties[propertyName] !== true) {
            loggedProperties[propertyName] = true;
            logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
          }
        }
  
        function resetLoggedProperties() {
          _Object$keys(loggedProperties).forEach(function (propertyName) {
            delete loggedProperties[propertyName];
          });
        }
        /***/
  
      },
      /* 33 */
  
      /***/
      function (module, exports, __webpack_require__) {
        module.exports = {
          "default": __webpack_require__(34),
          __esModule: true
        };
        /***/
      },
      /* 34 */
  
      /***/
      function (module, exports, __webpack_require__) {
        var $ = __webpack_require__(8);
  
        module.exports = function create(P, D) {
          return $.create(P, D);
        };
        /***/
  
      },
      /* 35 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _Object$create = __webpack_require__(33)['default'];
  
        exports.__esModule = true;
        exports.createNewLookupObject = createNewLookupObject;
  
        var _utils = __webpack_require__(4);
        /**
         * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
         * The resulting object can be used with "object[property]" to check if a property exists
         * @param {...object} sources a varargs parameter of source objects that will be merged
         * @returns {object}
         */
  
  
        function createNewLookupObject() {
          for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
            sources[_key] = arguments[_key];
          }
  
          return _utils.extend.apply(undefined, [_Object$create(null)].concat(sources));
        }
        /***/
  
      },
      /* 36 */
  
      /***/
      function (module, exports) {
        // Build out our basic SafeString type
        'use strict';
  
        exports.__esModule = true;
  
        function SafeString(string) {
          this.string = string;
        }
  
        SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
          return '' + this.string;
        };
  
        exports['default'] = SafeString;
        module.exports = exports['default'];
        /***/
      },
      /* 37 */
  
      /***/
      function (module, exports, __webpack_require__) {
        'use strict';
  
        var _Object$seal = __webpack_require__(38)['default'];
  
        var _Object$keys = __webpack_require__(12)['default'];
  
        var _interopRequireWildcard = __webpack_require__(1)['default'];
  
        var _interopRequireDefault = __webpack_require__(2)['default'];
  
        exports.__esModule = true;
        exports.checkRevision = checkRevision;
        exports.template = template;
        exports.wrapProgram = wrapProgram;
        exports.resolvePartial = resolvePartial;
        exports.invokePartial = invokePartial;
        exports.noop = noop;
  
        var _utils = __webpack_require__(4);
  
        var Utils = _interopRequireWildcard(_utils);
  
        var _exception = __webpack_require__(5);
  
        var _exception2 = _interopRequireDefault(_exception);
  
        var _base = __webpack_require__(3);
  
        var _helpers = __webpack_require__(9);
  
        var _internalWrapHelper = __webpack_require__(42);
  
        var _internalProtoAccess = __webpack_require__(32);
  
        function checkRevision(compilerInfo) {
          var compilerRevision = compilerInfo && compilerInfo[0] || 1,
              currentRevision = _base.COMPILER_REVISION;
  
          if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
            return;
          }
  
          if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
            var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
                compilerVersions = _base.REVISION_CHANGES[compilerRevision];
            throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
          } else {
            // Use the embedded version info since the runtime doesn't know about this revision yet
            throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
          }
        }
  
        function template(templateSpec, env) {
          /* istanbul ignore next */
          if (!env) {
            throw new _exception2['default']('No environment passed to template');
          }
  
          if (!templateSpec || !templateSpec.main) {
            throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
          }
  
          templateSpec.main.decorator = templateSpec.main_d; // Note: Using env.VM references rather than local var references throughout this section to allow
          // for external users to override these as pseudo-supported APIs.
  
          env.VM.checkRevision(templateSpec.compiler); // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  
          var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;
  
          function invokePartialWrapper(partial, context, options) {
            if (options.hash) {
              context = Utils.extend({}, context, options.hash);
  
              if (options.ids) {
                options.ids[0] = true;
              }
            }
  
            partial = env.VM.resolvePartial.call(this, partial, context, options);
            var extendedOptions = Utils.extend({}, options, {
              hooks: this.hooks,
              protoAccessControl: this.protoAccessControl
            });
            var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);
  
            if (result == null && env.compile) {
              options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
              result = options.partials[options.name](context, extendedOptions);
            }
  
            if (result != null) {
              if (options.indent) {
                var lines = result.split('\n');
  
                for (var i = 0, l = lines.length; i < l; i++) {
                  if (!lines[i] && i + 1 === l) {
                    break;
                  }
  
                  lines[i] = options.indent + lines[i];
                }
  
                result = lines.join('\n');
              }
  
              return result;
            } else {
              throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
            }
          } // Just add water
  
  
          var container = {
            strict: function strict(obj, name, loc) {
              if (!obj || !(name in obj)) {
                throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
                  loc: loc
                });
              }
  
              return container.lookupProperty(obj, name);
            },
            lookupProperty: function lookupProperty(parent, propertyName) {
              var result = parent[propertyName];
  
              if (result == null) {
                return result;
              }
  
              if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return result;
              }
  
              if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
                return result;
              }
  
              return undefined;
            },
            lookup: function lookup(depths, name) {
              var len = depths.length;
  
              for (var i = 0; i < len; i++) {
                var result = depths[i] && container.lookupProperty(depths[i], name);
  
                if (result != null) {
                  return depths[i][name];
                }
              }
            },
            lambda: function lambda(current, context) {
              return typeof current === 'function' ? current.call(context) : current;
            },
            escapeExpression: Utils.escapeExpression,
            invokePartial: invokePartialWrapper,
            fn: function fn(i) {
              var ret = templateSpec[i];
              ret.decorator = templateSpec[i + '_d'];
              return ret;
            },
            programs: [],
            program: function program(i, data, declaredBlockParams, blockParams, depths) {
              var programWrapper = this.programs[i],
                  fn = this.fn(i);
  
              if (data || depths || blockParams || declaredBlockParams) {
                programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
              } else if (!programWrapper) {
                programWrapper = this.programs[i] = wrapProgram(this, i, fn);
              }
  
              return programWrapper;
            },
            data: function data(value, depth) {
              while (value && depth--) {
                value = value._parent;
              }
  
              return value;
            },
            mergeIfNeeded: function mergeIfNeeded(param, common) {
              var obj = param || common;
  
              if (param && common && param !== common) {
                obj = Utils.extend({}, common, param);
              }
  
              return obj;
            },
            // An empty object to use as replacement for null-contexts
            nullContext: _Object$seal({}),
            noop: env.VM.noop,
            compilerInfo: templateSpec.compiler
          };
  
          function ret(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var data = options.data;
  
            ret._setup(options);
  
            if (!options.partial && templateSpec.useData) {
              data = initData(context, data);
            }
  
            var depths = undefined,
                blockParams = templateSpec.useBlockParams ? [] : undefined;
  
            if (templateSpec.useDepths) {
              if (options.depths) {
                depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
              } else {
                depths = [context];
              }
            }
  
            function main(context
            /*, options*/
            ) {
              return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
            }
  
            main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
            return main(context, options);
          }
  
          ret.isTop = true;
  
          ret._setup = function (options) {
            if (!options.partial) {
              var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
              wrapHelpersToPassLookupProperty(mergedHelpers, container);
              container.helpers = mergedHelpers;
  
              if (templateSpec.usePartial) {
                // Use mergeIfNeeded here to prevent compiling global partials multiple times
                container.partials = container.mergeIfNeeded(options.partials, env.partials);
              }
  
              if (templateSpec.usePartial || templateSpec.useDecorators) {
                container.decorators = Utils.extend({}, env.decorators, options.decorators);
              }
  
              container.hooks = {};
              container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);
              var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
  
              _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
  
              _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
            } else {
              container.protoAccessControl = options.protoAccessControl; // internal option
  
              container.helpers = options.helpers;
              container.partials = options.partials;
              container.decorators = options.decorators;
              container.hooks = options.hooks;
            }
          };
  
          ret._child = function (i, data, blockParams, depths) {
            if (templateSpec.useBlockParams && !blockParams) {
              throw new _exception2['default']('must pass block params');
            }
  
            if (templateSpec.useDepths && !depths) {
              throw new _exception2['default']('must pass parent depths');
            }
  
            return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
          };
  
          return ret;
        }
  
        function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
          function prog(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var currentDepths = depths;
  
            if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
              currentDepths = [context].concat(depths);
            }
  
            return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
          }
  
          prog = executeDecorators(fn, prog, container, depths, data, blockParams);
          prog.program = i;
          prog.depth = depths ? depths.length : 0;
          prog.blockParams = declaredBlockParams || 0;
          return prog;
        }
        /**
         * This is currently part of the official API, therefore implementation details should not be changed.
         */
  
  
        function resolvePartial(partial, context, options) {
          if (!partial) {
            if (options.name === '@partial-block') {
              partial = options.data['partial-block'];
            } else {
              partial = options.partials[options.name];
            }
          } else if (!partial.call && !options.name) {
            // This is a dynamic partial that returned a string
            options.name = partial;
            partial = options.partials[partial];
          }
  
          return partial;
        }
  
        function invokePartial(partial, context, options) {
          // Use the current closure context to save the partial-block if this partial
          var currentPartialBlock = options.data && options.data['partial-block'];
          options.partial = true;
  
          if (options.ids) {
            options.data.contextPath = options.ids[0] || options.data.contextPath;
          }
  
          var partialBlock = undefined;
  
          if (options.fn && options.fn !== noop) {
            (function () {
              options.data = _base.createFrame(options.data); // Wrapper function to get access to currentPartialBlock from the closure
  
              var fn = options.fn;
  
              partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
                var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1]; // Restore the partial-block from the closure for the execution of the block
                // i.e. the part inside the block of the partial call.
  
                options.data = _base.createFrame(options.data);
                options.data['partial-block'] = currentPartialBlock;
                return fn(context, options);
              };
  
              if (fn.partials) {
                options.partials = Utils.extend({}, options.partials, fn.partials);
              }
            })();
          }
  
          if (partial === undefined && partialBlock) {
            partial = partialBlock;
          }
  
          if (partial === undefined) {
            throw new _exception2['default']('The partial ' + options.name + ' could not be found');
          } else if (partial instanceof Function) {
            return partial(context, options);
          }
        }
  
        function noop() {
          return '';
        }
  
        function initData(context, data) {
          if (!data || !('root' in data)) {
            data = data ? _base.createFrame(data) : {};
            data.root = context;
          }
  
          return data;
        }
  
        function executeDecorators(fn, prog, container, depths, data, blockParams) {
          if (fn.decorator) {
            var props = {};
            prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
            Utils.extend(prog, props);
          }
  
          return prog;
        }
  
        function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
          _Object$keys(mergedHelpers).forEach(function (helperName) {
            var helper = mergedHelpers[helperName];
            mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
          });
        }
  
        function passLookupPropertyOption(helper, container) {
          var lookupProperty = container.lookupProperty;
          return _internalWrapHelper.wrapHelper(helper, function (options) {
            return Utils.extend({
              lookupProperty: lookupProperty
            }, options);
          });
        }
        /***/
  
      },
      /* 38 */
  
      /***/
      function (module, exports, __webpack_require__) {
        module.exports = {
          "default": __webpack_require__(39),
          __esModule: true
        };
        /***/
      },
      /* 39 */
  
      /***/
      function (module, exports, __webpack_require__) {
        __webpack_require__(40);
  
        module.exports = __webpack_require__(20).Object.seal;
        /***/
      },
      /* 40 */
  
      /***/
      function (module, exports, __webpack_require__) {
        // 19.1.2.17 Object.seal(O)
        var isObject = __webpack_require__(41);
  
        __webpack_require__(17)('seal', function ($seal) {
          return function seal(it) {
            return $seal && isObject(it) ? $seal(it) : it;
          };
        });
        /***/
  
      },
      /* 41 */
  
      /***/
      function (module, exports) {
        module.exports = function (it) {
          return typeof it === 'object' ? it !== null : typeof it === 'function';
        };
        /***/
  
      },
      /* 42 */
  
      /***/
      function (module, exports) {
        'use strict';
  
        exports.__esModule = true;
        exports.wrapHelper = wrapHelper;
  
        function wrapHelper(helper, transformOptionsFn) {
          if (typeof helper !== 'function') {
            // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
            // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
            return helper;
          }
  
          var wrapper = function wrapper()
          /* dynamic arguments */
          {
            var options = arguments[arguments.length - 1];
            arguments[arguments.length - 1] = transformOptionsFn(options);
            return helper.apply(this, arguments);
          };
  
          return wrapper;
        }
        /***/
  
      },
      /* 43 */
  
      /***/
      function (module, exports) {
        /* WEBPACK VAR INJECTION */
        (function (global) {
          'use strict';
  
          exports.__esModule = true;
  
          exports['default'] = function (Handlebars) {
            /* istanbul ignore next */
            var root = typeof global !== 'undefined' ? global : window,
                $Handlebars = root.Handlebars;
            /* istanbul ignore next */
  
            Handlebars.noConflict = function () {
              if (root.Handlebars === Handlebars) {
                root.Handlebars = $Handlebars;
              }
  
              return Handlebars;
            };
          };
  
          module.exports = exports['default'];
          /* WEBPACK VAR INJECTION */
        }).call(exports, function () {
          return this;
        }());
        /***/
      }
      /******/
      ])
    );
  });
  
  ;
  },{}],"templates/cardLibrary.hbs":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const templateFunction = _handlebars.default.template({
    "1": function (container, depth0, helpers, partials, data) {
      var helper,
          lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
  
        return undefined;
      };
  
      return "        <span>\r\n          " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 16,
            "column": 10
          },
          "end": {
            "line": 16,
            "column": 18
          }
        }
      }) : helper)) + "\r\n        </span>\r\n";
    },
    "compiler": [8, ">= 4.3.0"],
    "main": function (container, depth0, helpers, partials, data) {
      var stack1,
          helper,
          alias1 = depth0 != null ? depth0 : container.nullContext || {},
          alias2 = container.hooks.helperMissing,
          alias3 = "function",
          alias4 = container.escapeExpression,
          lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
  
        return undefined;
      };
  
      return "<li class='card-item'>\r\n  <img\r\n    class='card-image'\r\n    src=\"https://image.tmdb.org/t/p/w500" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "poster_path",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 40
          },
          "end": {
            "line": 4,
            "column": 55
          }
        }
      }) : helper)) + "\"\r\n    alt=\"" + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 9
          },
          "end": {
            "line": 5,
            "column": 18
          }
        }
      }) : helper)) + "\"\r\n    data-src=\"https://image.tmdb.org/t/p/original" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "poster_path",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 6,
            "column": 49
          },
          "end": {
            "line": 6,
            "column": 64
          }
        }
      }) : helper)) + "\"\r\n    data-id=" + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 7,
            "column": 12
          },
          "end": {
            "line": 7,
            "column": 18
          }
        }
      }) : helper)) + "\r\n  />\r\n  <h2 class='movie-title'>\r\n    " + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 10,
            "column": 4
          },
          "end": {
            "line": 10,
            "column": 13
          }
        }
      }) : helper)) + "\r\n  </h2>\r\n  <p class='genre'>\r\n    <span class='genre-title'>\r\n" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "genres") : depth0, {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 14,
            "column": 6
          },
          "end": {
            "line": 18,
            "column": 15
          }
        }
      })) != null ? stack1 : "") + "    </span>\r\n    <span>\r\n      |\r\n      " + alias4((helper = (helper = lookupProperty(helpers, "release_date") || (depth0 != null ? lookupProperty(depth0, "release_date") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "release_date",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 22,
            "column": 6
          },
          "end": {
            "line": 22,
            "column": 22
          }
        }
      }) : helper)) + "\r\n    </span>\r\n    <span class='movie-vote'>\r\n      " + alias4((helper = (helper = lookupProperty(helpers, "vote_average") || (depth0 != null ? lookupProperty(depth0, "vote_average") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "vote_average",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 25,
            "column": 6
          },
          "end": {
            "line": 25,
            "column": 22
          }
        }
      }) : helper)) + "\r\n    </span>\r\n  </p>\r\n</li>";
    },
    "useData": true
  });
  
  var _default = templateFunction;
  exports.default = _default;
  },{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"js/components/librery-render-marcup.js":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _default;
  exports.featchFilmsByIdWatched = featchFilmsByIdWatched;
  exports.featchFilmsByIdQueue = featchFilmsByIdQueue;
  exports.renderQueueIfTheyActive = renderQueueIfTheyActive;
  
  var _FetchMovies = _interopRequireDefault(require("./Fetch-movies.js"));
  
  var _cardLibrary = _interopRequireDefault(require("../../templates/cardLibrary.hbs"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const refs = {
    main: document.querySelector('.library-cards')
  };
  const fetchMovies = new _FetchMovies.default();
  
  function _default(watched, queue) {
    onMovieCardClickWatched(watched);
    onMovieCardClickQueue(queue);
  }
  
  function featchFilmsByIdWatched() {
    let watchedForRender = JSON.parse(localStorage.getItem(`watched`)) || [];
    watchedForRender.forEach(element => {
      fetchMovies.getMovieDetaisById(element).then(response => {
        renderMarcupForWotchedFilms(response);
      });
    });
  }
  
  function featchFilmsByIdQueue() {
    let queueForRender = JSON.parse(localStorage.getItem(`queue`)) || [];
    queueForRender.forEach(element => {
      fetchMovies.getMovieDetaisById(element).then(response => {
        renderMarcupForQueueFilms(response);
      });
    });
  }
  
  function onMovieCardClickWatched(watched) {
    watched = JSON.parse(localStorage.getItem(`watched`));
  }
  
  function onMovieCardClickQueue(queue) {
    queue = JSON.parse(localStorage.getItem(`queue`));
  }
  
  function renderMarcupForWotchedFilms(data) {
    refs.main.insertAdjacentHTML('beforeend', (0, _cardLibrary.default)(data));
  }
  
  function renderMarcupForQueueFilms(data) {
    refs.main.insertAdjacentHTML('beforeend', (0, _cardLibrary.default)(data));
  }
  
  function renderQueueIfTheyActive() {
    if (localStorage.getItem('activeButton') === 'queue') {
      return;
    } else {
      featchFilmsByIdWatched();
    }
  }
  },{"./Fetch-movies.js":"js/components/Fetch-movies.js","../../templates/cardLibrary.hbs":"templates/cardLibrary.hbs"}],"js/components/localStorage.js":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _default;
  
  var _libreryRenderMarcup = _interopRequireDefault(require("./librery-render-marcup"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _default() {
    const refs = {
      buttonToW: document.querySelector('.js-watched'),
      buttonToQ: document.querySelector('.js-queue'),
      imageModal: document.querySelector('.modal-poster')
    };
    let watched = JSON.parse(localStorage.getItem(`watched`)) || [];
    let queue = JSON.parse(localStorage.getItem(`queue`)) || [];
    const labelAddW = 'Add to watched';
    const labelRemoveW = 'Remove from watched';
    const labelAddQ = 'Add to queue';
    const labelRemoveQ = 'Remove from queue';
    getButtonOnLocalStorage();
    getButtonQueueOnLocalStorage();
  
    function onMovieCardClickWatched(evt) {
      let filmId = refs.imageModal.dataset.id;
      switchNameButtonWathced(filmId);
      pushFilmId(filmId);
      localStorageIdSetToWatched(); // libreryRenderMarcup(watched);
    }
  
    function onMovieCardClickQueue(evt) {
      let filmId = refs.imageModal.dataset.id;
      switchNameButtonQueue(filmId);
      pushFilmIdQueue(filmId);
      localStorageIdSetToQueue(); // libreryRenderMarcup(queue);
    }
  
    function localStorageIdSetToWatched() {
      localStorage.setItem('watched', JSON.stringify(watched));
    }
  
    function localStorageIdSetToQueue() {
      localStorage.setItem('queue', JSON.stringify(queue));
    }
  
    function pushFilmId(id) {
      if (!watched.includes(id)) {
        watched.push(id);
      } else {
        deleteFilmId(id);
      }
    }
  
    function pushFilmIdQueue(id) {
      if (!queue.includes(id)) {
        queue.push(id);
      } else {
        deleteFilmIdQueue(id);
      }
    }
  
    function deleteFilmId(id) {
      watched.forEach((element, index) => {
        if (element === id) {
          watched.splice(index, 1);
        }
      });
    }
  
    function deleteFilmIdQueue(id) {
      queue.forEach((element, index) => {
        if (element === id) {
          queue.splice(index, 1);
        }
      });
    }
  
    function switchNameButtonWathced() {
      const buttonText = refs.buttonToW.textContent.toLowerCase().trim();
  
      if (buttonText === labelAddW.toLowerCase()) {
        refs.buttonToW.textContent = labelRemoveW;
      } else {
        refs.buttonToW.textContent = labelAddW;
      }
    }
  
    function switchNameButtonQueue() {
      const buttonText = refs.buttonToQ.textContent.toLowerCase().trim();
  
      if (buttonText === labelAddQ.toLowerCase()) {
        refs.buttonToQ.textContent = labelRemoveQ;
      } else {
        refs.buttonToQ.textContent = labelAddQ;
      }
    }
  
    function getButtonOnLocalStorage() {
      if (watched.includes(refs.imageModal.dataset.id)) {
        refs.buttonToW.textContent = labelRemoveW;
      }
    }
  
    function getButtonQueueOnLocalStorage() {
      if (queue.includes(refs.imageModal.dataset.id)) {
        refs.buttonToQ.textContent = labelRemoveQ;
      }
    }
  
    refs.buttonToW.addEventListener('click', onMovieCardClickWatched);
    refs.buttonToQ.addEventListener('click', onMovieCardClickQueue);
  }
  },{"./librery-render-marcup":"js/components/librery-render-marcup.js"}],"js/components/team-modal.js":[function(require,module,exports) {
  const refs = {
    body: document.querySelector('body'),
    openTeamModal: document.querySelector('.team_link'),
    teamModal: document.querySelector('.js-team-modal'),
    backdropTeamModal: document.querySelector('.team-backdrop'),
    closeTeamlBtn: document.querySelector('.modal-team-close')
  };
  refs.openTeamModal.addEventListener('click', openModal);
  
  function openModal(e) {
    e.preventDefault();
    window.addEventListener('keydown', escKey);
    refs.backdropTeamModal.addEventListener('click', backdropClick);
    refs.closeTeamlBtn.addEventListener('click', closeTeamModal);
    refs.body.classList.add('modal-team-open');
    refs.teamModal.classList.remove('is-hiddden');
  }
  
  function closeTeamModal() {
    window.removeEventListener('keydown', escKey);
    refs.body.classList.remove('modal-team-open');
    refs.teamModal.classList.add('is-hiddden');
    refs.backdropTeamModal.removeEventListener('click', backdropClick);
    refs.closeTeamlBtn.removeEventListener('click', closeTeamModal);
  }
  
  function backdropClick(e) {
    if (e.currentTarget === e.target) {
      closeTeamModal();
    }
  }
  
  function escKey(e) {
    if (e.code === 'Escape') {
      closeTeamModal();
    }
  }
  },{}],"templates/modal.hbs":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _handlebars = _interopRequireDefault(require("handlebars/dist/handlebars.runtime"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const templateFunction = _handlebars.default.template({
    "1": function (container, depth0, helpers, partials, data) {
      var helper,
          lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
  
        return undefined;
      };
  
      return " " + container.escapeExpression((helper = (helper = lookupProperty(helpers, "name") || (depth0 != null ? lookupProperty(depth0, "name") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
        "name": "name",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 30,
            "column": 57
          },
          "end": {
            "line": 30,
            "column": 65
          }
        }
      }) : helper)) + " ";
    },
    "compiler": [8, ">= 4.3.0"],
    "main": function (container, depth0, helpers, partials, data) {
      var stack1,
          helper,
          alias1 = depth0 != null ? depth0 : container.nullContext || {},
          alias2 = container.hooks.helperMissing,
          alias3 = "function",
          alias4 = container.escapeExpression,
          lookupProperty = container.lookupProperty || function (parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
  
        return undefined;
      };
  
      return "<div class='modal-img-container'>\r\n  <img\r\n    class='modal-poster'\r\n    src='https://image.tmdb.org/t/p/original" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "poster_path",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 4,
            "column": 44
          },
          "end": {
            "line": 4,
            "column": 59
          }
        }
      }) : helper)) + "'\r\n    alt='" + alias4((helper = (helper = lookupProperty(helpers, "original_title") || (depth0 != null ? lookupProperty(depth0, "original_title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "original_title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 5,
            "column": 9
          },
          "end": {
            "line": 5,
            "column": 27
          }
        }
      }) : helper)) + "'\r\n    data-id='" + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "id",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 6,
            "column": 13
          },
          "end": {
            "line": 6,
            "column": 19
          }
        }
      }) : helper)) + "'\r\n    data-src='https://image.tmdb.org/t/p/original" + alias4((helper = (helper = lookupProperty(helpers, "poster_path") || (depth0 != null ? lookupProperty(depth0, "poster_path") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "poster_path",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 7,
            "column": 49
          },
          "end": {
            "line": 7,
            "column": 64
          }
        }
      }) : helper)) + "'\r\n  />\r\n</div>\r\n\r\n<div class='modal-data'>\r\n  <h2 class='modal-title'>" + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 12,
            "column": 26
          },
          "end": {
            "line": 12,
            "column": 35
          }
        }
      }) : helper)) + "</h2>\r\n  <ul class='movie-cardinfo-list'>\r\n    <li class='movie-cardinfo-list-item'>\r\n      <h3 class='movie-cardinfo-title'>Vote / Votes</h3>\r\n      <p class='movie-cardcontent-item'><span class='movie-cardvote'>" + alias4((helper = (helper = lookupProperty(helpers, "vote_average") || (depth0 != null ? lookupProperty(depth0, "vote_average") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "vote_average",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 16,
            "column": 69
          },
          "end": {
            "line": 16,
            "column": 85
          }
        }
      }) : helper)) + "</span>\r\n        /\r\n        " + alias4((helper = (helper = lookupProperty(helpers, "vote_count") || (depth0 != null ? lookupProperty(depth0, "vote_count") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "vote_count",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 18,
            "column": 8
          },
          "end": {
            "line": 18,
            "column": 22
          }
        }
      }) : helper)) + "</p>\r\n    </li>\r\n    <li class='movie-cardinfo-list-item'>\r\n      <h3 class='movie-cardinfo-title'>Popularity</h3>\r\n      <p class='movie-cardcontent-item'>" + alias4((helper = (helper = lookupProperty(helpers, "popularity") || (depth0 != null ? lookupProperty(depth0, "popularity") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "popularity",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 22,
            "column": 40
          },
          "end": {
            "line": 22,
            "column": 54
          }
        }
      }) : helper)) + "</p>\r\n    </li>\r\n    <li class='movie-cardinfo-list-item'>\r\n      <h3 class='movie-cardinfo-title'>Original Title</h3>\r\n      <p class='movie-cardcontent-item'>" + alias4((helper = (helper = lookupProperty(helpers, "original_title") || (depth0 != null ? lookupProperty(depth0, "original_title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "original_title",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 26,
            "column": 40
          },
          "end": {
            "line": 26,
            "column": 58
          }
        }
      }) : helper)) + "</p>\r\n    </li>\r\n    <li class='movie-cardinfo-list-item'>\r\n      <h3 class='movie-cardinfo-title'>Genre</h3>\r\n      <p class='movie-cardcontent-item'>" + ((stack1 = lookupProperty(helpers, "each").call(alias1, depth0 != null ? lookupProperty(depth0, "genres") : depth0, {
        "name": "each",
        "hash": {},
        "fn": container.program(1, data, 0),
        "inverse": container.noop,
        "data": data,
        "loc": {
          "start": {
            "line": 30,
            "column": 40
          },
          "end": {
            "line": 30,
            "column": 75
          }
        }
      })) != null ? stack1 : "") + "</p>\r\n    </li>\r\n  </ul>\r\n\r\n  <p class='modal-overview-title'>About</p>\r\n  <p class='modal-overview'>" + alias4((helper = (helper = lookupProperty(helpers, "overview") || (depth0 != null ? lookupProperty(depth0, "overview") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
        "name": "overview",
        "hash": {},
        "data": data,
        "loc": {
          "start": {
            "line": 35,
            "column": 28
          },
          "end": {
            "line": 35,
            "column": 40
          }
        }
      }) : helper)) + "</p>\r\n  <div class='modal-buttons js-modal-buttons'>\r\n    <button class='modal-buttons-watched js-watched added' type='button' data-action='add'>\r\n      Add to watched\r\n    </button>\r\n    <button class='modal-buttons-queue js-queue added' type='button' data-action='add'>\r\n      Add to queue\r\n    </button>\r\n  </div>\r\n</div>";
    },
    "useData": true
  });
  
  var _default = templateFunction;
  exports.default = _default;
  },{"handlebars/dist/handlebars.runtime":"../node_modules/handlebars/dist/handlebars.runtime.js"}],"../node_modules/spin.js/spin.js":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Spinner = void 0;
  
  var __assign = void 0 && (void 0).__assign || function () {
    __assign = Object.assign || function (t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
  
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
  
      return t;
    };
  
    return __assign.apply(this, arguments);
  };
  
  var defaults = {
    lines: 12,
    length: 7,
    width: 5,
    radius: 10,
    scale: 1.0,
    corners: 1,
    color: '#000',
    fadeColor: 'transparent',
    animation: 'spinner-line-fade-default',
    rotate: 0,
    direction: 1,
    speed: 1,
    zIndex: 2e9,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: '0 0 1px transparent',
    position: 'absolute'
  };
  
  var Spinner =
  /** @class */
  function () {
    function Spinner(opts) {
      if (opts === void 0) {
        opts = {};
      }
  
      this.opts = __assign(__assign({}, defaults), opts);
    }
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target by calling
     * stop() internally.
     */
  
  
    Spinner.prototype.spin = function (target) {
      this.stop();
      this.el = document.createElement('div');
      this.el.className = this.opts.className;
      this.el.setAttribute('role', 'progressbar');
      css(this.el, {
        position: this.opts.position,
        width: 0,
        zIndex: this.opts.zIndex,
        left: this.opts.left,
        top: this.opts.top,
        transform: "scale(" + this.opts.scale + ")"
      });
  
      if (target) {
        target.insertBefore(this.el, target.firstChild || null);
      }
  
      drawLines(this.el, this.opts);
      return this;
    };
    /**
     * Stops and removes the Spinner.
     * Stopped spinners may be reused by calling spin() again.
     */
  
  
    Spinner.prototype.stop = function () {
      if (this.el) {
        if (typeof requestAnimationFrame !== 'undefined') {
          cancelAnimationFrame(this.animateId);
        } else {
          clearTimeout(this.animateId);
        }
  
        if (this.el.parentNode) {
          this.el.parentNode.removeChild(this.el);
        }
  
        this.el = undefined;
      }
  
      return this;
    };
  
    return Spinner;
  }();
  
  exports.Spinner = Spinner;
  
  /**
   * Sets multiple style properties at once.
   */
  function css(el, props) {
    for (var prop in props) {
      el.style[prop] = props[prop];
    }
  
    return el;
  }
  /**
   * Returns the line color from the given string or array.
   */
  
  
  function getColor(color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length];
  }
  /**
   * Internal method that draws the individual lines.
   */
  
  
  function drawLines(el, opts) {
    var borderRadius = Math.round(opts.corners * opts.width * 500) / 1000 + 'px';
    var shadow = 'none';
  
    if (opts.shadow === true) {
      shadow = '0 2px 4px #000'; // default shadow
    } else if (typeof opts.shadow === 'string') {
      shadow = opts.shadow;
    }
  
    var shadows = parseBoxShadow(shadow);
  
    for (var i = 0; i < opts.lines; i++) {
      var degrees = ~~(360 / opts.lines * i + opts.rotate);
      var backgroundLine = css(document.createElement('div'), {
        position: 'absolute',
        top: -opts.width / 2 + "px",
        width: opts.length + opts.width + 'px',
        height: opts.width + 'px',
        background: getColor(opts.fadeColor, i),
        borderRadius: borderRadius,
        transformOrigin: 'left',
        transform: "rotate(" + degrees + "deg) translateX(" + opts.radius + "px)"
      });
      var delay = i * opts.direction / opts.lines / opts.speed;
      delay -= 1 / opts.speed; // so initial animation state will include trail
  
      var line = css(document.createElement('div'), {
        width: '100%',
        height: '100%',
        background: getColor(opts.color, i),
        borderRadius: borderRadius,
        boxShadow: normalizeShadow(shadows, degrees),
        animation: 1 / opts.speed + "s linear " + delay + "s infinite " + opts.animation
      });
      backgroundLine.appendChild(line);
      el.appendChild(backgroundLine);
    }
  }
  
  function parseBoxShadow(boxShadow) {
    var regex = /^\s*([a-zA-Z]+\s+)?(-?\d+(\.\d+)?)([a-zA-Z]*)\s+(-?\d+(\.\d+)?)([a-zA-Z]*)(.*)$/;
    var shadows = [];
  
    for (var _i = 0, _a = boxShadow.split(','); _i < _a.length; _i++) {
      var shadow = _a[_i];
      var matches = shadow.match(regex);
  
      if (matches === null) {
        continue; // invalid syntax
      }
  
      var x = +matches[2];
      var y = +matches[5];
      var xUnits = matches[4];
      var yUnits = matches[7];
  
      if (x === 0 && !xUnits) {
        xUnits = yUnits;
      }
  
      if (y === 0 && !yUnits) {
        yUnits = xUnits;
      }
  
      if (xUnits !== yUnits) {
        continue; // units must match to use as coordinates
      }
  
      shadows.push({
        prefix: matches[1] || '',
        x: x,
        y: y,
        xUnits: xUnits,
        yUnits: yUnits,
        end: matches[8]
      });
    }
  
    return shadows;
  }
  /**
   * Modify box-shadow x/y offsets to counteract rotation
   */
  
  
  function normalizeShadow(shadows, degrees) {
    var normalized = [];
  
    for (var _i = 0, shadows_1 = shadows; _i < shadows_1.length; _i++) {
      var shadow = shadows_1[_i];
      var xy = convertOffset(shadow.x, shadow.y, degrees);
      normalized.push(shadow.prefix + xy[0] + shadow.xUnits + ' ' + xy[1] + shadow.yUnits + shadow.end);
    }
  
    return normalized.join(', ');
  }
  
  function convertOffset(x, y, degrees) {
    var radians = degrees * Math.PI / 180;
    var sin = Math.sin(radians);
    var cos = Math.cos(radians);
    return [Math.round((x * cos + y * sin) * 1000) / 1000, Math.round((-x * sin + y * cos) * 1000) / 1000];
  }
  },{}],"../node_modules/spin.js/spin.css":[function(require,module,exports) {
  
          var reloadCSS = require('_css_loader');
          module.hot.dispose(reloadCSS);
          module.hot.accept(reloadCSS);
        
  },{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/basiclightbox/dist/basicLightbox.min.js":[function(require,module,exports) {
  var define;
  var global = arguments[3];
  !function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).basicLightbox=e()}}((function(){return function e(n,t,o){function r(c,u){if(!t[c]){if(!n[c]){var s="function"==typeof require&&require;if(!u&&s)return s(c,!0);if(i)return i(c,!0);var a=new Error("Cannot find module '"+c+"'");throw a.code="MODULE_NOT_FOUND",a}var l=t[c]={exports:{}};n[c][0].call(l.exports,(function(e){return r(n[c][1][e]||e)}),l,l.exports,e,n,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)r(o[c]);return r}({1:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=t.visible=void 0;var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");return t.innerHTML=e.trim(),!0===n?t.children:t.firstChild},r=function(e,n){var t=e.children;return 1===t.length&&t[0].tagName===n},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};t.visible=i;t.create=function(e,n){var t=function(e,n){var t=o('\n\t\t<div class="basicLightbox '.concat(n.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=t.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var c=r(i,"IMG"),u=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===c&&t.classList.add("basicLightbox--img"),!0===u&&t.classList.add("basicLightbox--video"),!0===s&&t.classList.add("basicLightbox--iframe"),t}(e=function(e){var n="string"==typeof e,t=e instanceof HTMLElement==1;if(!1===n&&!1===t)throw new Error("Content must be a DOM element/node or string");return!0===n?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(n)),c=function(e){return!1!==n.onClose(u)&&function(e,n){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),n()}),410),!0}(t,(function(){if("function"==typeof e)return e(u)}))};!0===n.closable&&t.addEventListener("click",(function(e){e.target===t&&c()}));var u={element:function(){return t},visible:function(){return i(t)},show:function(e){return!1!==n.onShow(u)&&function(e,n){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),n()}))}),10),!0}(t,(function(){if("function"==typeof e)return e(u)}))},close:c};return u}},{}]},{},[1])(1)}));
  },{}],"js/components/server-answers/preloader.js":[function(require,module,exports) {
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.spinner = void 0;
  
  var _spin = require("spin.js");
  
  require("spin.js/spin.css");
  
  var basicLightbox = _interopRequireWildcard(require("basiclightbox"));
  
  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
  
  const spinnerOptions = {
    lines: 15,
    // The number of lines to draw
    length: 28,
    // The length of each line
    width: 17,
    // The line thickness
    radius: 45,
    // The radius of the inner circle
    scale: 1,
    // Scales overall size of the spinner
    corners: 1,
    // Corner roundness (0..1)
    speed: 1,
    // Rounds per second
    rotate: 0,
    // The rotation offset
    animation: 'spinner-line-fade-quick',
    // The CSS animation name for the lines
    direction: 1,
    // 1: clockwise, -1: counterclockwise
    color: 'white',
    // CSS color or array of colors
    fadeColor: 'transparent',
    // CSS color or array of colors
    top: '50%',
    // Top position relative to parent
    left: '50%',
    // Left position relative to parent
    shadow: '0 0 1px transparent',
    // Box-shadow for the lines
    zIndex: 2000000000,
    // The z-index (defaults to 2e9)
    className: 'spinner',
    // The CSS class to assign to the spinner
    position: 'absolute' // Element positioning
  
  };
  const spinner = basicLightbox.create(`
          <h1></h1>
          <p></p>
    <div id="spinner-root"></div>
  `);
  exports.spinner = spinner;
  const spinnerRoot = spinner.element().querySelector('#spinner-root');
  new _spin.Spinner(spinnerOptions).spin(spinnerRoot);
  },{"spin.js":"../node_modules/spin.js/spin.js","spin.js/spin.css":"../node_modules/spin.js/spin.css","basiclightbox":"../node_modules/basiclightbox/dist/basicLightbox.min.js"}],"js/components/librery-gallery-filter.js":[function(require,module,exports) {
  "use strict";
  
  var _libreryRenderMarcup = require("./librery-render-marcup");
  
  var _modal = _interopRequireDefault(require("../../templates/modal.hbs"));
  
  var _preloader = require("../../js/components/server-answers/preloader");
  
  var _FetchMovies = _interopRequireDefault(require("./Fetch-movies"));
  
  var _localStorage = _interopRequireDefault(require("./localStorage.js"));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  const fetchMovies = new _FetchMovies.default();
  const refs = {
    watchedBtn: document.querySelector('.js_btn_w'),
    queueBtn: document.querySelector('.js_btn_q'),
    cardsList: document.querySelector('.library-cards'),
    main: document.querySelector('.js_container'),
    backdrop: document.querySelector('.backdrop'),
    modal: document.querySelector('.modal-container'),
    closeModalBtn: document.querySelector('.modal-close-btn'),
    body: document.querySelector('.js-body')
  };
  const watched = JSON.parse(localStorage.getItem(`watched`));
  const queue = JSON.parse(localStorage.getItem(`queue`));
  let backdropEvtListner = 0;
  let closeModalEscEvtListner = 0;
  let cardRefForDelete;
  
  if (localStorage.getItem('activeButton') === 'queue') {
    refs.cardsList.innerHTML = '';
    (0, _libreryRenderMarcup.featchFilmsByIdQueue)(queue);
    refs.queueBtn.classList.add('current_btn');
    refs.watchedBtn.classList.remove('current_btn');
  }
  
  refs.watchedBtn.addEventListener('click', sortFilmsForWatched);
  refs.queueBtn.addEventListener('click', sortFilmsForQueue);
  
  function sortFilmsForWatched(evt) {
    if (evt.currentTarget.classList.contains('current_btn')) {
      return;
    } else if (refs.queueBtn.classList.contains('current_btn')) {
      refs.queueBtn.classList.remove('current_btn');
      switchCurrentBtn(evt);
      refs.cardsList.innerHTML = '';
      (0, _libreryRenderMarcup.featchFilmsByIdWatched)(watched);
      localStorage.setItem('activeButton', 'watched');
    }
  }
  
  function sortFilmsForQueue(evt) {
    if (evt.currentTarget.classList.contains('current_btn')) {
      return;
    } else {
      switchCurrentBtn(evt);
      refs.watchedBtn.classList.remove('current_btn');
      refs.cardsList.innerHTML = '';
      (0, _libreryRenderMarcup.featchFilmsByIdQueue)(queue);
      localStorage.setItem('activeButton', 'queue');
    }
  }
  
  function switchCurrentBtn(evt) {
    if (evt.currentTarget === refs.watchedBtn && !refs.watchedBtn.classList.contains('current_btn') || evt.currentTarget === refs.queueBtn && !refs.queueBtn.classList.contains('current_btn')) {
      evt.currentTarget.classList.add('current_btn');
    } else {
      evt.currentTarget.classList.remove('current_btn');
    }
  } ////💀 ON CARD CLICK (FOR MODAL)
  
  
  refs.main.addEventListener('click', deleteCardsFromLibrary);
  
  function deleteCardsFromLibrary(evt) {
    const cardRef = evt.target.closest('.card-item');
    cardRefForDelete = cardRef;
  
    if (cardRef && localStorage.getItem('activeButton') === 'watched') {
      let imageId = cardRef.querySelector('.card-image').dataset.id;
      refs.backdrop.classList.add('is-open');
      openModalOnClick(imageId);
    } else if (cardRef && localStorage.getItem('activeButton') === 'queue') {
      let imageId = cardRef.querySelector('.card-image').dataset.id;
      refs.backdrop.classList.add('is-open');
      openModalOnClick(imageId);
    } else {
      return;
    }
  }
  
  function openModalOnClick(id) {
    fetchMovies.getMovieDetaisById(id).then(openModal).catch(console.log);
  }
  
  function openModal(data) {
    refs.modal.innerHTML = (0, _modal.default)(data);
    backdropEvtListner = refs.backdrop.addEventListener('click', onBackdropClick);
    closeModalEscEvtListner = window.addEventListener('keydown', onBackdropEscClick);
    refs.body.classList.add('is-hidden');
    (0, _localStorage.default)();
  }
  
  function closeModal() {
    refs.backdrop.removeEventListener('click', backdropEvtListner);
    window.removeEventListener('keydown', closeModalEscEvtListner);
    refs.backdrop.classList.remove('is-open');
    refs.body.classList.remove('is-hidden');
    refs.modal.innerHTML = '';
  }
  
  function onBackdropClick(evt) {
    const nodeName = evt.target.nodeName;
    const classList = evt.target.classList;
    const watchedButton = evt.target.closest('.js-watched');
    const queueButton = evt.target.closest('.js-queue');
  
    if (nodeName === 'DIV' && classList.contains('backdrop') || nodeName === 'svg' && classList.contains('close-button-image') || nodeName === 'use') {
      closeModal();
    } else if (watchedButton && refs.watchedBtn.classList.contains('current_btn')) {
      cardRefForDelete.style.display = 'none';
      watchedButton.classList.toggle('added');
  
      if (watchedButton && watchedButton.classList.contains('added')) {
        cardRefForDelete.style.display = 'block';
      }
    } else if (queueButton && refs.queueBtn.classList.contains('current_btn')) {
      cardRefForDelete.style.display = 'none';
      queueButton.classList.toggle('added');
  
      if (queueButton && queueButton.classList.contains('added')) {
        cardRefForDelete.style.display = 'block';
      }
    } else {
      return;
    }
  }
  
  function onBackdropEscClick(evt) {
    if (evt.code === 'Escape') {
      closeModal();
    }
  }
  },{"./librery-render-marcup":"js/components/librery-render-marcup.js","../../templates/modal.hbs":"templates/modal.hbs","../../js/components/server-answers/preloader":"js/components/server-answers/preloader.js","./Fetch-movies":"js/components/Fetch-movies.js","./localStorage.js":"js/components/localStorage.js"}],"js/components/buttonScrollTo.js":[function(require,module,exports) {
  const ofs = 100;
  const scrollUp = document.querySelector('.scroll-up');
  const scrollUpSvgPath = document.querySelector('.scroll-up__svg-path');
  const pathLength = scrollUpSvgPath.getTotalLength();
  scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
  scrollUpSvgPath.style.transition = 'stroke-dashOffset 20ms';
  
  const getTop = () => window.pageYOffset || document.documentElement.scrollTop; // function #1: updateDashoffset
  
  
  const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - getTop() * pathLength / height;
    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
  }; // function #2: onScroll
  
  
  window.addEventListener('scroll', () => {
    updateDashoffset();
  
    if (getTop() > ofs) {
      scrollUp.classList.add('scroll-up--active');
    } else {
      scrollUp.classList.remove('scroll-up--active');
    }
  }); // function #3: click
  
  scrollUp.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  },{}],"library.js":[function(require,module,exports) {
  "use strict";
  
  require("./sass/main.scss");
  
  require("./js/components/theme-switcher.js");
  
  require("./js/components/localStorage");
  
  require("./js/components/team-modal");
  
  var _libreryRenderMarcup = require("./js/components/librery-render-marcup");
  
  require("./js/components/librery-gallery-filter");
  
  require("./js/components/buttonScrollTo");
  
  //🍅Тут импорт стилей:
  //🍅Тут импорт js файлов:
  (0, _libreryRenderMarcup.renderQueueIfTheyActive)();
  },{"./sass/main.scss":"sass/main.scss","./js/components/theme-switcher.js":"js/components/theme-switcher.js","./js/components/localStorage":"js/components/localStorage.js","./js/components/team-modal":"js/components/team-modal.js","./js/components/librery-render-marcup":"js/components/librery-render-marcup.js","./js/components/librery-gallery-filter":"js/components/librery-gallery-filter.js","./js/components/buttonScrollTo":"js/components/buttonScrollTo.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
  var global = arguments[3];
  var OVERLAY_ID = '__parcel__error__overlay__';
  var OldModule = module.bundle.Module;
  
  function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
      data: module.bundle.hotData,
      _acceptCallbacks: [],
      _disposeCallbacks: [],
      accept: function (fn) {
        this._acceptCallbacks.push(fn || function () {});
      },
      dispose: function (fn) {
        this._disposeCallbacks.push(fn);
      }
    };
    module.bundle.hotData = null;
  }
  
  module.bundle.Module = Module;
  var checkedAssets, assetsToAccept;
  var parent = module.bundle.parent;
  
  if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = "" || location.hostname;
    var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + ':' + "54547" + '/');
  
    ws.onmessage = function (event) {
      checkedAssets = {};
      assetsToAccept = [];
      var data = JSON.parse(event.data);
  
      if (data.type === 'update') {
        var handled = false;
        data.assets.forEach(function (asset) {
          if (!asset.isNew) {
            var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
  
            if (didAccept) {
              handled = true;
            }
          }
        }); // Enable HMR for CSS by default.
  
        handled = handled || data.assets.every(function (asset) {
          return asset.type === 'css' && asset.generated.js;
        });
  
        if (handled) {
          console.clear();
          data.assets.forEach(function (asset) {
            hmrApply(global.parcelRequire, asset);
          });
          assetsToAccept.forEach(function (v) {
            hmrAcceptRun(v[0], v[1]);
          });
        } else if (location.reload) {
          // `location` global exists in a web worker context but lacks `.reload()` function.
          location.reload();
        }
      }
  
      if (data.type === 'reload') {
        ws.close();
  
        ws.onclose = function () {
          location.reload();
        };
      }
  
      if (data.type === 'error-resolved') {
        console.log('[parcel] ✨ Error resolved');
        removeErrorOverlay();
      }
  
      if (data.type === 'error') {
        console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
        removeErrorOverlay();
        var overlay = createErrorOverlay(data);
        document.body.appendChild(overlay);
      }
    };
  }
  
  function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
  
    if (overlay) {
      overlay.remove();
    }
  }
  
  function createErrorOverlay(data) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID; // html encode message and stack trace
  
    var message = document.createElement('div');
    var stackTrace = document.createElement('pre');
    message.innerText = data.error.message;
    stackTrace.innerText = data.error.stack;
    overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
    return overlay;
  }
  
  function getParents(bundle, id) {
    var modules = bundle.modules;
  
    if (!modules) {
      return [];
    }
  
    var parents = [];
    var k, d, dep;
  
    for (k in modules) {
      for (d in modules[k][1]) {
        dep = modules[k][1][d];
  
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
          parents.push(k);
        }
      }
    }
  
    if (bundle.parent) {
      parents = parents.concat(getParents(bundle.parent, id));
    }
  
    return parents;
  }
  
  function hmrApply(bundle, asset) {
    var modules = bundle.modules;
  
    if (!modules) {
      return;
    }
  
    if (modules[asset.id] || !bundle.parent) {
      var fn = new Function('require', 'module', 'exports', asset.generated.js);
      asset.isNew = !modules[asset.id];
      modules[asset.id] = [fn, asset.deps];
    } else if (bundle.parent) {
      hmrApply(bundle.parent, asset);
    }
  }
  
  function hmrAcceptCheck(bundle, id) {
    var modules = bundle.modules;
  
    if (!modules) {
      return;
    }
  
    if (!modules[id] && bundle.parent) {
      return hmrAcceptCheck(bundle.parent, id);
    }
  
    if (checkedAssets[id]) {
      return;
    }
  
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([bundle, id]);
  
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
      return true;
    }
  
    return getParents(global.parcelRequire, id).some(function (id) {
      return hmrAcceptCheck(global.parcelRequire, id);
    });
  }
  
  function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
  
    if (cached) {
      cached.hot.data = bundle.hotData;
    }
  
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
      cached.hot._disposeCallbacks.forEach(function (cb) {
        cb(bundle.hotData);
      });
    }
  
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
  
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
      cached.hot._acceptCallbacks.forEach(function (cb) {
        cb();
      });
  
      return true;
    }
  }
  },{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","library.js"], null)
  //# sourceMappingURL=/library.cbab63f8.js.map