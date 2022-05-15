/** @license @lianluoo/vue2-form-antdv (c) 2020-2022 Liu.Jun License: Apache-2.0 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('core-js/modules/es.array.includes.js'), require('vue'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.replace.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.string.trim.js'), require('core-js/modules/es.array.reduce.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/web.dom-collections.iterator.js'), require('core-js/modules/es.symbol.description.js'), require('core-js/modules/es.string.includes.js'), require('core-js/modules/es.string.starts-with.js'), require('core-js/modules/es.json.stringify.js'), require('core-js/modules/es.regexp.constructor.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.array.sort.js'), require('core-js/modules/web.url.to-json.js'), require('core-js/modules/es.array-buffer.slice.js'), require('core-js/modules/es.typed-array.uint8-array.js'), require('core-js/modules/es.typed-array.set.js'), require('core-js/modules/es.typed-array.sort.js'), require('core-js/modules/es.typed-array.to-locale-string.js')) :
  typeof define === 'function' && define.amd ? define(['exports', 'core-js/modules/es.array.includes.js', 'vue', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.replace.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.string.trim.js', 'core-js/modules/es.array.reduce.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/web.dom-collections.iterator.js', 'core-js/modules/es.symbol.description.js', 'core-js/modules/es.string.includes.js', 'core-js/modules/es.string.starts-with.js', 'core-js/modules/es.json.stringify.js', 'core-js/modules/es.regexp.constructor.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.array.sort.js', 'core-js/modules/web.url.to-json.js', 'core-js/modules/es.array-buffer.slice.js', 'core-js/modules/es.typed-array.uint8-array.js', 'core-js/modules/es.typed-array.set.js', 'core-js/modules/es.typed-array.sort.js', 'core-js/modules/es.typed-array.to-locale-string.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["vue2-form-antdv"] = {}, null, global.Vue));
})(this, (function (exports, es_array_includes_js, Vue) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];

    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }

    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");

    return typeof key === "symbol" ? key : String(key);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line no-undef
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    (function () { return this; })() || Function('return this')();

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split;

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var isObject$2 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject$2(document$1) && isObject$2(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  var anObject = function (it) {
    if (!isObject$2(it)) {
      throw TypeError(String(it) + ' is not an object');
    } return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject$2(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$2(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$2(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$2(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var nativeDefineProperty = Object.defineProperty;

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f$4 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return nativeDefineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f$4
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global_1[SHARED] || setGlobal(SHARED, {});

  var sharedStore = store$1;

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.8.3',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  var hasOwnProperty = {}.hasOwnProperty;

  var has$1 = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
  });

  var useSymbolAsUid = nativeSymbol
    // eslint-disable-next-line no-undef
    && !Symbol.sham
    // eslint-disable-next-line no-undef
    && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global_1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!has$1(WellKnownSymbolsStore, name)) {
      if (nativeSymbol && has$1(Symbol$1, name)) WellKnownSymbolsStore[name] = Symbol$1[name];
      else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var ceil = Math.ceil;
  var floor$2 = Math.floor;

  // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger
  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$2 : ceil)(argument);
  };

  var min$4 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min$4(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max$1 = Math.max;
  var min$3 = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max$1(integer + length, 0) : min$3(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$4 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };

  var hiddenKeys$1 = {};

  var indexOf = arrayIncludes.indexOf;


  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has$1(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
  };

  var path = global_1;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global_1[namespace])
      : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var html = getBuiltIn('document', 'documentElement');

  var keys$2 = shared('keys');

  var sharedKey = function (key) {
    return keys$2[key] || (keys$2[key] = uid(key));
  };

  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      /* global ActiveXObject */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO$1] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  };

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype$1 = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};

  var functionToString = Function.toString;

  // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap$1 = global_1.WeakMap;

  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));

  var WeakMap = global_1.WeakMap;
  var set$1, get$1, has;

  var enforce = function (it) {
    return has(it) ? get$1(it) : set$1(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$2(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (nativeWeakMap) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;
    set$1 = function (it, metadata) {
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return wmget.call(store, it) || {};
    };
    has = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;
    set$1 = function (it, metadata) {
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get$1 = function (it) {
      return has$1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return has$1(it, STATE);
    };
  }

  var internalState = {
    set: set$1,
    get: get$1,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$3 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : nativePropertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$3
  };

  var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$2 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return nativeGetOwnPropertyDescriptor(O, P);
    } catch (error) { /* empty */ }
    if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$2
  };

  var redefine = createCommonjsModule(function (module) {
  var getInternalState = internalState.get;
  var enforceInternalState = internalState.enforce;
  var TEMPLATE = String(String).split('String');

  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;
    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$1(value, 'name')) {
        createNonEnumerableProperty(value, 'name', key);
      }
      state = enforceInternalState(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }
    if (O === global_1) {
      if (simple) O[key] = value;
      else setGlobal(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;
    else createNonEnumerableProperty(O, key, value);
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
  });
  });

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
  	f: f$1
  };

  var f = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f
  };

  // all object keys, includes non-enumerable and symbols
  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data$6[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : typeof detection == 'function' ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data$6 = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      // extend global
      redefine(target, key, sourceProperty, options);
    }
  };

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var correctPrototypeGetter = !fails(function () {
    function F() { /* empty */ }
    F.prototype.constructor = null;
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype$2 = Object.prototype;

  // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has$1(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectPrototype$2 : null;
  };

  var ITERATOR$5 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function () { return this; };

  // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

  if ([].keys) {
    arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
    else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
    var test = {};
    // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
  });

  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  if (!has$1(IteratorPrototype$2, ITERATOR$5)) {
    createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$5, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var defineProperty$6 = objectDefineProperty.f;



  var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$4)) {
      defineProperty$6(it, TO_STRING_TAG$4, { configurable: true, value: TAG });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





  var returnThis$1 = function () { return this; };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var aPossiblePrototype = function (it) {
    if (!isObject$2(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    } return it;
  };

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) { /* empty */ }
    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);
      else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () { return this; };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
      switch (KIND) {
        case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
        case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
        case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
      } return function () { return new IteratorConstructor(this); };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4]
      || IterablePrototype['@@iterator']
      || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;

    // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        }
        // Set @@toStringTag to native iterators
        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    }

    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return nativeIterator.call(this); };
    }

    // define iterator
    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
    }
    iterators[NAME] = defaultIterator;

    // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

  // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$2(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated), // target
      index: 0,                          // next index
      kind: kind                         // kind
    });
  // `%ArrayIteratorPrototype%.next` method
  // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return { value: undefined, done: true };
    }
    if (kind == 'keys') return { value: index, done: false };
    if (kind == 'values') return { value: target[index], done: false };
    return { value: [index, target[index]], done: false };
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  iterators.Arguments = iterators.Array;

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global_1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype;
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$3, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$3] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG$3]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
      }
      if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  var nativeAssign = Object.assign;
  var defineProperty$5 = Object.defineProperty;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !nativeAssign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors && nativeAssign({ b: 1 }, nativeAssign(defineProperty$5({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$5(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), { b: 2 })).b !== 1) return true;
    // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) { B[chr] = chr; });
    return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;
    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
      }
    } return T;
  } : nativeAssign;

  // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  _export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
    assign: objectAssign
  });

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    } return it;
  };

  // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod$3 = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aFunction(callbackfn);
      var O = toObject(that);
      var self = indexedObject(O);
      var length = toLength(O.length);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError('Reduce of empty array with no initial value');
        }
      }
      for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$3(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$3(true)
  };

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal
      method.call(null, argument || function () { throw 1; }, 1);
    });
  };

  var defineProperty$4 = Object.defineProperty;
  var cache$2 = {};

  var thrower = function (it) { throw it; };

  var arrayMethodUsesToLength = function (METHOD_NAME, options) {
    if (has$1(cache$2, METHOD_NAME)) return cache$2[METHOD_NAME];
    if (!options) options = {};
    var method = [][METHOD_NAME];
    var ACCESSORS = has$1(options, 'ACCESSORS') ? options.ACCESSORS : false;
    var argument0 = has$1(options, 0) ? options[0] : thrower;
    var argument1 = has$1(options, 1) ? options[1] : undefined;

    return cache$2[METHOD_NAME] = !!method && !fails(function () {
      if (ACCESSORS && !descriptors) return true;
      var O = { length: -1 };

      if (ACCESSORS) defineProperty$4(O, 1, { enumerable: true, get: thrower });
      else O[1] = 1;

      method.call(O, argument0, argument1);
    });
  };

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process = global_1.process;
  var versions = process && process.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version;

  var engineIsNode = classofRaw(global_1.process) == 'process';

  var $reduce = arrayReduce.left;





  var STRICT_METHOD$1 = arrayMethodIsStrict('reduce');
  var USES_TO_LENGTH$1 = arrayMethodUsesToLength('reduce', { 1: 0 });
  // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  _export({ target: 'Array', proto: true, forced: !STRICT_METHOD$1 || !USES_TO_LENGTH$1 || CHROME_BUG }, {
    reduce: function reduce(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $includes = arrayIncludes.includes;



  var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var MATCH$2 = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$2(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw TypeError("The method doesn't accept regular expressions");
    } return it;
  };

  var MATCH$1 = wellKnownSymbol('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~String(requireObjectCoercible(this))
        .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
      // it can work only with native `setPrototypeOf`
      objectSetPrototypeOf &&
      // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
      typeof (NewTarget = dummy.constructor) == 'function' &&
      NewTarget !== Wrapper &&
      isObject$2(NewTargetPrototype = NewTarget.prototype) &&
      NewTargetPrototype !== Wrapper.prototype
    ) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.
  function RE(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y$2 = fails(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });

  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y$2,
  	BROKEN_CARET: BROKEN_CARET
  };

  var SPECIES$3 = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function () { return this; }
      });
    }
  };

  var defineProperty$3 = objectDefineProperty.f;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;





  var setInternalState$1 = internalState.set;



  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g;

  // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;

  var FORCED$4 = descriptors && isForced_1('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y$1 || fails(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  })));

  // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (FORCED$4) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;

      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }

      if (CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof RegExpWrapper) {
        if (flagsAreUndefined) flags = regexpFlags.call(pattern);
        pattern = pattern.source;
      }

      if (UNSUPPORTED_Y$1) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      var result = inheritIfRequired(
        CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
        thisIsRegExp ? this : RegExpPrototype$1,
        RegExpWrapper
      );

      if (UNSUPPORTED_Y$1 && sticky) setInternalState$1(result, { sticky: sticky });

      return result;
    };
    var proxy = function (key) {
      key in RegExpWrapper || defineProperty$3(RegExpWrapper, key, {
        configurable: true,
        get: function () { return NativeRegExp[key]; },
        set: function (it) { NativeRegExp[key] = it; }
      });
    };
    var keys$1 = getOwnPropertyNames$1(NativeRegExp);
    var index = 0;
    while (keys$1.length > index) proxy(keys$1[index++]);
    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    redefine(global_1, 'RegExp', RegExpWrapper);
  }

  // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies('RegExp');

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  })();

  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');
        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex);
        // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        }
        // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  _export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
    exec: regexpExec
  });

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, { unsafe: true });
  }

  var test$1 = [];
  var nativeSort = test$1.sort;

  // IE8-
  var FAILS_ON_UNDEFINED = fails(function () {
    test$1.sort(undefined);
  });
  // V8 bug
  var FAILS_ON_NULL = fails(function () {
    test$1.sort(null);
  });
  // Old WebKit
  var STRICT_METHOD = arrayMethodIsStrict('sort');

  var FORCED$3 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;

  // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  _export({ target: 'Array', proto: true, forced: FORCED$3 }, {
    sort: function sort(comparefn) {
      return comparefn === undefined
        ? nativeSort.call(toObject(this))
        : nativeSort.call(toObject(this), aFunction(comparefn));
    }
  });

  // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson
  _export({ target: 'URL', proto: true, enumerable: true }, {
    toJSON: function toJSON() {
      return URL.prototype.toString.call(this);
    }
  });

  // TODO: Remove from `core-js@4` since it's moved to entry points







  var SPECIES$2 = wellKnownSymbol('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
  var REPLACE_KEEPS_$0 = (function () {
    return 'a'.replace(/./, '$0') === '$0';
  })();

  var REPLACE = wellKnownSymbol('replace');
  // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }
    return false;
  })();

  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {};
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$2] = function () { return re; };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () { execCalled = true; return null; };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !(
        REPLACE_SUPPORTS_NAMED_GROUPS &&
        REPLACE_KEEPS_$0 &&
        !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      )) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];

      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return regexMethod.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return regexMethod.call(string, this); }
      );
    }

    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  };

  var SPECIES$1 = wellKnownSymbol('species');

  // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$1]) == undefined ? defaultConstructor : aFunction(S);
  };

  // `String.prototype.{ codePointAt, at }` methods implementation
  var createMethod$2 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size
        || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
          ? CONVERT_TO_STRING ? S.charAt(position) : first
          : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$2(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$2(true)
  };

  var charAt = stringMultibyte.charAt;

  // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  };

  var arrayPush = [].push;
  var min$2 = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

  // @@split logic
  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'.split(/(b)*/)[1] == 'c' ||
      'test'.split(/(?:)/, -1).length != 4 ||
      'ab'.split(/(?:ab)*/).length != 2 ||
      '.'.split(/(.?)(.?)/).length != 4 ||
      '.'.split(/()()/).length > 1 ||
      ''.split(/.?/).length
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string];
        // If `separator` is not a regex, use native split
        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output.length > lim ? output.slice(0, lim) : output;
      };
    // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [
      // `String.prototype.split` method
      // https://tc39.es/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = requireObjectCoercible(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;

        var rx = anObject(regexp);
        var S = String(this);
        var C = speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  }, !SUPPORTS_Y);

  var floor$1 = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

  // https://tc39.es/ecma262/#sec-getsubstitution
  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  };

  var max = Math.max;
  var min$1 = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

    return [
      // `String.prototype.replace` method
      // https://tc39.es/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = requireObjectCoercible(this);
        var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
        return replacer !== undefined
          ? replacer.call(searchValue, O, replaceValue)
          : nativeReplace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        if (
          (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
          (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
        ) {
          var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
          if (res.done) return res.value;
        }

        var rx = anObject(regexp);
        var S = String(this);

        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);

        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regexpExecAbstract(rx, S);
          if (result === null) break;

          results.push(result);
          if (!global) break;

          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        }

        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];

          var matched = String(result[0]);
          var position = max(min$1(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];
  });

  var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

  var redefineAll = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);
    return target;
  };

  var anInstance = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    } return it;
  };

  // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex
  var toIndex = function (it) {
    if (it === undefined) return 0;
    var number = toInteger(it);
    var length = toLength(number);
    if (number !== length) throw RangeError('Wrong length or index');
    return length;
  };

  // IEEE754 conversions based on https://github.com/feross/ieee754
  // eslint-disable-next-line no-shadow-restricted-names
  var Infinity$1 = 1 / 0;
  var abs = Math.abs;
  var pow = Math.pow;
  var floor = Math.floor;
  var log = Math.log;
  var LN2 = Math.LN2;

  var pack = function (number, mantissaLength, bytes) {
    var buffer = new Array(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs(number);
    // eslint-disable-next-line no-self-compare
    if (number != number || number === Infinity$1) {
      // eslint-disable-next-line no-self-compare
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor(log(number) / LN2);
      if (number * (c = pow(2, -exponent)) < 1) {
        exponent--;
        c *= 2;
      }
      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow(2, 1 - eBias);
      }
      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }
      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
        exponent = 0;
      }
    }
    for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;
    for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function (buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;
    for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;
    for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity$1 : Infinity$1;
    } else {
      mantissa = mantissa + pow(2, mantissaLength);
      exponent = exponent - eBias;
    } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  // `Array.prototype.fill` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.fill
  var arrayFill = function fill(value /* , start = 0, end = @length */) {
    var O = toObject(this);
    var length = toLength(O.length);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };

  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var defineProperty$2 = objectDefineProperty.f;




  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer = global_1[ARRAY_BUFFER];
  var $ArrayBuffer = NativeArrayBuffer;
  var $DataView = global_1[DATA_VIEW];
  var $DataViewPrototype = $DataView && $DataView[PROTOTYPE];
  var ObjectPrototype$1 = Object.prototype;
  var RangeError$1 = global_1.RangeError;

  var packIEEE754 = ieee754.pack;
  var unpackIEEE754 = ieee754.unpack;

  var packInt8 = function (number) {
    return [number & 0xFF];
  };

  var packInt16 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function (number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function (buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function (number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function (number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter = function (Constructor, key) {
    defineProperty$2(Constructor[PROTOTYPE], key, { get: function () { return getInternalState(this)[key]; } });
  };

  var get = function (view, count, index, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState(view);
    if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
    var bytes = getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = bytes.slice(start, start + count);
    return isLittleEndian ? pack : pack.reverse();
  };

  var set = function (view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState(view);
    if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
    var bytes = getInternalState(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);
    for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
  };

  if (!arrayBufferNative) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
      var byteLength = toIndex(length);
      setInternalState(this, {
        bytes: arrayFill.call(new Array(byteLength), 0),
        byteLength: byteLength
      });
      if (!descriptors) this.byteLength = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = getInternalState(buffer).byteLength;
      var offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
      setInternalState(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });
      if (!descriptors) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    if (descriptors) {
      addGetter($ArrayBuffer, 'byteLength');
      addGetter($DataView, 'buffer');
      addGetter($DataView, 'byteLength');
      addGetter($DataView, 'byteOffset');
    }

    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /* , littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /* , littleEndian */) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset /* , littleEndian */) {
        return unpackInt32(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
        set(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
        set(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
        set(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    if (!fails(function () {
      NativeArrayBuffer(1);
    }) || !fails(function () {
      new NativeArrayBuffer(-1); // eslint-disable-line no-new
    }) || fails(function () {
      new NativeArrayBuffer(); // eslint-disable-line no-new
      new NativeArrayBuffer(1.5); // eslint-disable-line no-new
      new NativeArrayBuffer(NaN); // eslint-disable-line no-new
      return NativeArrayBuffer.name != ARRAY_BUFFER;
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, $ArrayBuffer);
        return new NativeArrayBuffer(toIndex(length));
      };
      var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE] = NativeArrayBuffer[PROTOTYPE];
      for (var keys = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) {
          createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
        }
      }
      ArrayBufferPrototype.constructor = $ArrayBuffer;
    }

    // WebKit bug - the same parent prototype for typed arrays and data view
    if (objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype$1) {
      objectSetPrototypeOf($DataViewPrototype, ObjectPrototype$1);
    }

    // iOS Safari 7.x bug
    var testView = new $DataView(new $ArrayBuffer(2));
    var nativeSetInt8 = $DataViewPrototype.setInt8;
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
      setInt8: function setInt8(byteOffset, value) {
        nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        nativeSetInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, { unsafe: true });
  }

  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);

  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var ArrayBuffer$2 = arrayBuffer.ArrayBuffer;
  var DataView$1 = arrayBuffer.DataView;
  var nativeArrayBufferSlice = ArrayBuffer$2.prototype.slice;

  var INCORRECT_SLICE = fails(function () {
    return !new ArrayBuffer$2(2).slice(1, undefined).byteLength;
  });

  // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
  _export({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
    slice: function slice(start, end) {
      if (nativeArrayBufferSlice !== undefined && end === undefined) {
        return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
      }
      var length = anObject(this).byteLength;
      var first = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var result = new (speciesConstructor(this, ArrayBuffer$2))(toLength(fin - first));
      var viewSource = new DataView$1(this);
      var viewTarget = new DataView$1(result);
      var index = 0;
      while (first < fin) {
        viewTarget.setUint8(index++, viewSource.getUint8(first++));
      } return result;
    }
  });

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return { done: !!called++ };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$2] = function () {
      return this;
    };
    // eslint-disable-next-line no-throw-literal
    Array.from(iteratorWithReturn, function () { throw 2; });
  } catch (error) { /* empty */ }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$2] = function () {
        return {
          next: function () {
            return { done: ITERATION_SUPPORT = true };
          }
        };
      };
      exec(object);
    } catch (error) { /* empty */ }
    return ITERATION_SUPPORT;
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG$2] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var defineProperty$1 = objectDefineProperty.f;





  var Int8Array$3 = global_1.Int8Array;
  var Int8ArrayPrototype = Int8Array$3 && Int8Array$3.prototype;
  var Uint8ClampedArray = global_1.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
  var TypedArray = Int8Array$3 && objectGetPrototypeOf(Int8Array$3);
  var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
  var ObjectPrototype = Object.prototype;
  var isPrototypeOf = ObjectPrototype.isPrototypeOf;

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
  // Fixing native typed arrays in Opera Presto crashes the browser, see #595
  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQIRED = false;
  var NAME;

  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };

  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject$2(it)) return false;
    var klass = classof(it);
    return klass === 'DataView'
      || has$1(TypedArrayConstructorsList, klass)
      || has$1(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray = function (it) {
    if (!isObject$2(it)) return false;
    var klass = classof(it);
    return has$1(TypedArrayConstructorsList, klass)
      || has$1(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$3 = function (it) {
    if (isTypedArray(it)) return it;
    throw TypeError('Target is not a typed array');
  };

  var aTypedArrayConstructor$1 = function (C) {
    if (objectSetPrototypeOf) {
      if (isPrototypeOf.call(TypedArray, C)) return C;
    } else for (var ARRAY in TypedArrayConstructorsList) if (has$1(TypedArrayConstructorsList, NAME)) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
        return C;
      }
    } throw TypeError('Target is not a typed array constructor');
  };

  var exportTypedArrayMethod$3 = function (KEY, property, forced) {
    if (!descriptors) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && has$1(TypedArrayConstructor.prototype, KEY)) {
        delete TypedArrayConstructor.prototype[KEY];
      }
    }
    if (!TypedArrayPrototype[KEY] || forced) {
      redefine(TypedArrayPrototype, KEY, forced ? property
        : NATIVE_ARRAY_BUFFER_VIEWS$1 && Int8ArrayPrototype[KEY] || property);
    }
  };

  var exportTypedArrayStaticMethod = function (KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!descriptors) return;
    if (objectSetPrototypeOf) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && has$1(TypedArrayConstructor, KEY)) {
          delete TypedArrayConstructor[KEY];
        }
      }
      if (!TypedArray[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$1 && Int8Array$3[KEY] || property);
        } catch (error) { /* empty */ }
      } else return;
    }
    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME in TypedArrayConstructorsList) {
    if (!global_1[NAME]) NATIVE_ARRAY_BUFFER_VIEWS$1 = false;
  }

  // WebKit bug - typed arrays constructors prototype is Object.prototype
  if (!NATIVE_ARRAY_BUFFER_VIEWS$1 || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow
    TypedArray = function TypedArray() {
      throw TypeError('Incorrect invocation');
    };
    if (NATIVE_ARRAY_BUFFER_VIEWS$1) for (NAME in TypedArrayConstructorsList) {
      if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$1 || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
    TypedArrayPrototype = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$1) for (NAME in TypedArrayConstructorsList) {
      if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
    }
  }

  // WebKit bug - one more object in Uint8ClampedArray prototype chain
  if (NATIVE_ARRAY_BUFFER_VIEWS$1 && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
    objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
  }

  if (descriptors && !has$1(TypedArrayPrototype, TO_STRING_TAG)) {
    TYPED_ARRAY_TAG_REQIRED = true;
    defineProperty$1(TypedArrayPrototype, TO_STRING_TAG, { get: function () {
      return isObject$2(this) ? this[TYPED_ARRAY_TAG] : undefined;
    } });
    for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
      createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$1,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray$3,
    aTypedArrayConstructor: aTypedArrayConstructor$1,
    exportTypedArrayMethod: exportTypedArrayMethod$3,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype
  };

  /* eslint-disable no-new */



  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

  var ArrayBuffer$1 = global_1.ArrayBuffer;
  var Int8Array$2 = global_1.Int8Array;

  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
    Int8Array$2(1);
  }) || !fails(function () {
    new Int8Array$2(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$2();
    new Int8Array$2(null);
    new Int8Array$2(1.5);
    new Int8Array$2(iterable);
  }, true) || fails(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$2(new ArrayBuffer$1(2), 1, undefined).length !== 1;
  });

  var toPositiveInteger = function (it) {
    var result = toInteger(it);
    if (result < 0) throw RangeError("The argument can't be less than 0");
    return result;
  };

  var toOffset = function (it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError('Wrong offset');
    return offset;
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1]
      || it['@@iterator']
      || iterators[classof(it)];
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype;

  // check on default Array iterator
  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
  };

  // optional / simple context binding
  var functionBindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 0: return function () {
        return fn.call(that);
      };
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator, next;
    if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      O = [];
      while (!(step = next.call(iterator)).done) {
        O.push(step.value);
      }
    }
    if (mapping && argumentsLength > 2) {
      mapfn = functionBindContext(mapfn, arguments[2], 2);
    }
    length = toLength(O.length);
    result = new (aTypedArrayConstructor(this))(length);
    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var SPECIES = wellKnownSymbol('species');

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      else if (isObject$2(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push = [].push;

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push.call(target, value); // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push.call(target, value); // filterOut
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$1(7)
  };

  var typedArrayConstructor = createCommonjsModule(function (module) {


















  var getOwnPropertyNames = objectGetOwnPropertyNames.f;

  var forEach = arrayIteration.forEach;






  var getInternalState = internalState.get;
  var setInternalState = internalState.set;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var round = Math.round;
  var RangeError = global_1.RangeError;
  var ArrayBuffer = arrayBuffer.ArrayBuffer;
  var DataView = arrayBuffer.DataView;
  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
  var TypedArray = arrayBufferViewCore.TypedArray;
  var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
  var isTypedArray = arrayBufferViewCore.isTypedArray;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var WRONG_LENGTH = 'Wrong length';

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = new (aTypedArrayConstructor(C))(length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key) {
    nativeDefineProperty(it, key, { get: function () {
      return getInternalState(this)[key];
    } });
  };

  var isArrayBuffer = function (it) {
    var klass;
    return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
  };

  var isTypedArrayIndex = function (target, key) {
    return isTypedArray(target)
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };

  var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
    return isTypedArrayIndex(target, key = toPrimitive(key, true))
      ? createPropertyDescriptor(2, target[key])
      : nativeGetOwnPropertyDescriptor(target, key);
  };

  var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
    if (isTypedArrayIndex(target, key = toPrimitive(key, true))
      && isObject$2(descriptor)
      && has$1(descriptor, 'value')
      && !has$1(descriptor, 'get')
      && !has$1(descriptor, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !descriptor.configurable
      && (!has$1(descriptor, 'writable') || descriptor.writable)
      && (!has$1(descriptor, 'enumerable') || descriptor.enumerable)
    ) {
      target[key] = descriptor.value;
      return target;
    } return nativeDefineProperty(target, key, descriptor);
  };

  if (descriptors) {
    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
      objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
      objectDefineProperty.f = wrappedDefineProperty;
      addGetter(TypedArrayPrototype, 'buffer');
      addGetter(TypedArrayPrototype, 'byteOffset');
      addGetter(TypedArrayPrototype, 'byteLength');
      addGetter(TypedArrayPrototype, 'length');
    }

    _export({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
      getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
      defineProperty: wrappedDefineProperty
    });

    module.exports = function (TYPE, wrapper, CLAMPED) {
      var BYTES = TYPE.match(/\d+$/)[0] / 8;
      var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
      var GETTER = 'get' + TYPE;
      var SETTER = 'set' + TYPE;
      var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
      var TypedArrayConstructor = NativeTypedArrayConstructor;
      var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
      var exported = {};

      var getter = function (that, index) {
        var data = getInternalState(that);
        return data.view[GETTER](index * BYTES + data.byteOffset, true);
      };

      var setter = function (that, index, value) {
        var data = getInternalState(that);
        if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
        data.view[SETTER](index * BYTES + data.byteOffset, value, true);
      };

      var addElement = function (that, index) {
        nativeDefineProperty(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };

      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
          anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
          var index = 0;
          var byteOffset = 0;
          var buffer, byteLength, length;
          if (!isObject$2(data)) {
            length = toIndex(data);
            byteLength = length * BYTES;
            buffer = new ArrayBuffer(byteLength);
          } else if (isArrayBuffer(data)) {
            buffer = data;
            byteOffset = toOffset(offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - byteOffset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (isTypedArray(data)) {
            return fromList(TypedArrayConstructor, data);
          } else {
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }
          setInternalState(that, {
            buffer: buffer,
            byteOffset: byteOffset,
            byteLength: byteLength,
            length: length,
            view: new DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });

        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
      } else if (typedArrayConstructorsRequireWrappers) {
        TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
          anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
          return inheritIfRequired(function () {
            if (!isObject$2(data)) return new NativeTypedArrayConstructor(toIndex(data));
            if (isArrayBuffer(data)) return $length !== undefined
              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
              : typedArrayOffset !== undefined
                ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
                : new NativeTypedArrayConstructor(data);
            if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
            return typedArrayFrom.call(TypedArrayConstructor, data);
          }(), dummy, TypedArrayConstructor);
        });

        if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
        forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
          if (!(key in TypedArrayConstructor)) {
            createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
          }
        });
        TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
      }

      if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
      }

      if (TYPED_ARRAY_TAG) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
      }

      exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

      _export({
        global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
      }, exported);

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
        createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
      }

      if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
        createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
      }

      setSpecies(CONSTRUCTOR_NAME);
    };
  } else module.exports = function () { /* empty */ };
  });

  // `Uint8Array` constructor
  // https://tc39.es/ecma262/#sec-typedarray-objects
  typedArrayConstructor('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod;

  var FORCED$2 = fails(function () {
    // eslint-disable-next-line no-undef
    new Int8Array(1).set({});
  });

  // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
  exportTypedArrayMethod$2('set', function set(arrayLike /* , offset */) {
    aTypedArray$2(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError('Wrong length');
    while (index < len) this[offset + index] = src[index++];
  }, FORCED$2);

  var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
  var $sort = [].sort;

  // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
  exportTypedArrayMethod$1('sort', function sort(comparefn) {
    return $sort.call(aTypedArray$1(this), comparefn);
  });

  var Int8Array$1 = global_1.Int8Array;
  var aTypedArray = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString;
  var $slice = [].slice;

  // iOS Safari 6.x fails here
  var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails(function () {
    $toLocaleString.call(new Int8Array$1(1));
  });

  var FORCED$1 = fails(function () {
    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
  }) || !fails(function () {
    Int8Array$1.prototype.toLocaleString.call([1, 2]);
  });

  // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
  exportTypedArrayMethod('toLocaleString', function toLocaleString() {
    return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice.call(aTypedArray(this)) : aTypedArray(this), arguments);
  }, FORCED$1);

  /**
   * Created by Liu.Jun on 2020/4/17 17:05.
   */
  // is object
  function isObject$1(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
  } // is arguments

  function isArguments$1(object) {
    return Object.prototype.toString.call(object) === '[object Arguments]';
  } // 定义的数据推导出schema 类型


  const guessType$1 = function guessType(value) {
    if (Array.isArray(value)) {
      return 'array';
    }

    if (typeof value === 'string') {
      return 'string';
    }

    if (value == null) {
      return 'null';
    }

    if (typeof value === 'boolean') {
      return 'boolean'; // eslint-disable-next-line no-restricted-globals
    }

    if (!isNaN(value)) {
      return 'number';
    }

    if (typeof value === 'object') {
      return 'object';
    } // Default to string if we can't figure it out


    return 'string';
  };

  function mergeObjects$1(obj1, obj2) {
    let concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // Recursively merge deeply nested objects.
    const preAcc = Object.assign({}, obj1); // Prevent mutation of source object.

    if (!isObject$1(obj2)) return preAcc;
    return Object.keys(obj2).reduce((acc, key) => {
      const left = obj1 ? obj1[key] : {};
      const right = obj2[key];

      if (obj1 && obj1.hasOwnProperty(key) && isObject$1(right)) {
        acc[key] = mergeObjects$1(left, right, concatArrays);
      } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
        acc[key] = left.concat(right);
      } else {
        acc[key] = right;
      }

      return acc;
    }, preAcc);
  } // 获取给定 schema 类型。

  function getSchemaType$1(schema) {
    const {
      type
    } = schema; // 通过const 申明的常量 做类型推断

    if (!type && schema.const) {
      return guessType$1(schema.const);
    } // 枚举默认字符串


    if (!type && schema.enum) {
      return 'string';
    } // items 推断为 array 类型


    if (!type && schema.items) {
      return 'array';
    } // anyOf oneOf 不申明 type 字段


    if (!type && (schema.properties || schema.additionalProperties)) {
      return 'object';
    }

    if (type instanceof Array && type.length === 2 && type.includes('null')) {
      return type.find(curType => curType !== 'null');
    }

    return type;
  } // 深度相等对比

  function deepEquals$1(a, b) {
    let ca = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    let cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    // Partially extracted from node-deeper and adapted to exclude comparison
    // checks for functions.
    // https://github.com/othiym23/node-deeper
    if (a === b) {
      return true;
    }

    if (typeof a === 'function' || typeof b === 'function') {
      // Assume all functions are equivalent
      // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
      return true;
    }

    if (typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }

    if (a === null || b === null) {
      return false;
    }

    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }

    if (a instanceof RegExp && b instanceof RegExp) {
      return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
    }

    if (isArguments$1(a) || isArguments$1(b)) {
      if (!(isArguments$1(a) && isArguments$1(b))) {
        return false;
      }

      const slice = Array.prototype.slice;
      return deepEquals$1(slice.call(a), slice.call(b), ca, cb);
    }

    if (a.constructor !== b.constructor) {
      return false;
    }

    const ka = Object.keys(a);
    const kb = Object.keys(b); // don't bother with stack acrobatics if there's nothing there

    if (ka.length === 0 && kb.length === 0) {
      return true;
    }

    if (ka.length !== kb.length) {
      return false;
    }

    let cal = ca.length; // eslint-disable-next-line no-plusplus

    while (cal--) {
      if (ca[cal] === a) {
        return cb[cal] === b;
      }
    }

    ca.push(a);
    cb.push(b);
    ka.sort();
    kb.sort(); // eslint-disable-next-line no-plusplus

    for (let j = ka.length - 1; j >= 0; j--) {
      if (ka[j] !== kb[j]) {
        return false;
      }
    }

    let key; // eslint-disable-next-line no-plusplus

    for (let k = ka.length - 1; k >= 0; k--) {
      key = ka[k];

      if (!deepEquals$1(a[key], b[key], ca, cb)) {
        return false;
      }
    }

    ca.pop();
    cb.pop();
    return true;
  } // 只保证同时生成不重复

  const genId = function genIdFn() {
    let preKey = "".concat(+new Date());
    let key = 0;
    return () => {
      const curTimestamp = "".concat(+new Date());

      if (curTimestamp === preKey) {
        key += 1;
      } else {
        // 重置 key
        key = 0;
      }

      preKey = curTimestamp;
      return "".concat(preKey, "x").concat(key);
    };
  }(); // 空对象

  function isEmptyObject(obj) {
    if (!obj) return true;

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }

    return true;
  } // 过滤和转换对象的key

  function filterObject(obj, filterFn) {
    return Object.entries(obj).reduce((preVal, _ref) => {
      let [key, value] = _ref;
      const newKey = filterFn(key, value);

      if (undefined !== newKey) {
        preVal[newKey] = value;
      }

      return preVal;
    }, {});
  }

  function lowerCase(str) {
    if (undefined === str) return str;
    return String(str).replace(/^./, s => s.toLocaleLowerCase());
  } // 最大公约数

  function gcd$1(a, b) {
    if (b === 0) return a;
    return gcd$1(b, a % b);
  } // 最小公倍数

  function scm$1(a, b) {
    return a * b / gcd$1(a, b);
  } // 打开新页面

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;






  var nativeStartsWith = ''.startsWith;
  var min = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = String(requireObjectCoercible(this));
      notARegexp(searchString);
      var index = toLength(min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return nativeStartsWith
        ? nativeStartsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });

  // $ref 引用
  function getPathVal$3(obj, pathStr) {
    const pathArr = pathStr.split('/');

    for (let i = 0; i < pathArr.length; i += 1) {
      if (obj === undefined) return undefined;
      obj = pathArr[i] === '' ? obj : obj[pathArr[i]];
    }

    return obj;
  } // 找到ref引用的schema


  function findSchemaDefinition$1($ref) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const origRef = $ref;

    if ($ref.startsWith('#')) {
      // Decode URI fragment representation.
      $ref = decodeURIComponent($ref.substring(1));
    } else {
      throw new Error("Could not find a definition for ".concat(origRef, "."));
    }

    const current = getPathVal$3(rootSchema, $ref);

    if (current === undefined) {
      throw new Error("Could not find a definition for ".concat(origRef, "."));
    }

    if (current.hasOwnProperty('$ref')) {
      return findSchemaDefinition$1(current.$ref, rootSchema);
    }

    return current;
  }

  // a string of all valid unicode whitespaces
  // eslint-disable-next-line max-len
  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$');

  // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod(3)
  };

  var non = '\u200B\u0085\u180E';

  // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim;


  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  _export({ target: 'String', proto: true, forced: stringTrimForced('trim') }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var uri_all$1 = createCommonjsModule(function (module, exports) {
  /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
  (function (global, factory) {
  	factory(exports) ;
  }(commonjsGlobal, (function (exports) {
  function merge() {
      for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
      }

      if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
              sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join('');
      } else {
          return sets[0];
      }
  }
  function subexp(str) {
      return "(?:" + str + ")";
  }
  function typeOf(o) {
      return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
  }
  function toUpperCase(str) {
      return str.toUpperCase();
  }
  function toArray(obj) {
      return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
  }
  function assign(target, source) {
      var obj = target;
      if (source) {
          for (var key in source) {
              obj[key] = source[key];
          }
      }
      return obj;
  }

  function buildExps(isIRI) {
      var ALPHA$$ = "[A-Za-z]",
          DIGIT$$ = "[0-9]",
          HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
          PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
          //expanded
      GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
          SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
          RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
          UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
          //subset, excludes bidi control characters
      IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
          //subset
      UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$);
          subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*");
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*");
          var DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
          //relaxed parsing rules
      IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
          H16$ = subexp(HEXDIG$$ + "{1,4}"),
          LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
          IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
          //                           6( h16 ":" ) ls32
      IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
          //                      "::" 5( h16 ":" ) ls32
      IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
          //[               h16 ] "::" 4( h16 ":" ) ls32
      IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
          //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
      IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
          //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
      IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
          //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
      IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
          //[ *4( h16 ":" ) h16 ] "::"              ls32
      IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
          //[ *5( h16 ":" ) h16 ] "::"              h16
      IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
          //[ *6( h16 ":" ) h16 ] "::"
      IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
          ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+");
          //RFC 6874, with relaxed parsing rules
      subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+");
          //RFC 6874
      subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*");
          var PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]"));
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+");
          subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
      return {
          NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$, "g"),
          OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
      };
  }
  var URI_PROTOCOL = buildExps(false);

  var IRI_PROTOCOL = buildExps(true);

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();













  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /** Highest positive signed 32-bit float value */

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'

  /** Regular expressions */
  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  /** Error messages */
  var errors = {
  	'overflow': 'Overflow: input needs wider integers to process',
  	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  	'invalid-input': 'Invalid input'
  };

  /** Convenience shortcuts */
  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;

  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */
  function error$1(type) {
  	throw new RangeError(errors[type]);
  }

  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */
  function map(array, fn) {
  	var result = [];
  	var length = array.length;
  	while (length--) {
  		result[length] = fn(array[length]);
  	}
  	return result;
  }

  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */
  function mapDomain(string, fn) {
  	var parts = string.split('@');
  	var result = '';
  	if (parts.length > 1) {
  		// In email addresses, only the domain name should be punycoded. Leave
  		// the local part (i.e. everything up to `@`) intact.
  		result = parts[0] + '@';
  		string = parts[1];
  	}
  	// Avoid `split(regex)` for IE8 compatibility. See #17.
  	string = string.replace(regexSeparators, '\x2E');
  	var labels = string.split('.');
  	var encoded = map(labels, fn).join('.');
  	return result + encoded;
  }

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */
  function ucs2decode(string) {
  	var output = [];
  	var counter = 0;
  	var length = string.length;
  	while (counter < length) {
  		var value = string.charCodeAt(counter++);
  		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
  			// It's a high surrogate, and there is a next character.
  			var extra = string.charCodeAt(counter++);
  			if ((extra & 0xFC00) == 0xDC00) {
  				// Low surrogate.
  				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
  			} else {
  				// It's an unmatched surrogate; only append this code unit, in case the
  				// next code unit is the high surrogate of a surrogate pair.
  				output.push(value);
  				counter--;
  			}
  		} else {
  			output.push(value);
  		}
  	}
  	return output;
  }

  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */
  var ucs2encode = function ucs2encode(array) {
  	return String.fromCodePoint.apply(String, toConsumableArray(array));
  };

  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */
  var basicToDigit = function basicToDigit(codePoint) {
  	if (codePoint - 0x30 < 0x0A) {
  		return codePoint - 0x16;
  	}
  	if (codePoint - 0x41 < 0x1A) {
  		return codePoint - 0x41;
  	}
  	if (codePoint - 0x61 < 0x1A) {
  		return codePoint - 0x61;
  	}
  	return base;
  };

  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */
  var digitToBasic = function digitToBasic(digit, flag) {
  	//  0..25 map to ASCII a..z or A..Z
  	// 26..35 map to ASCII 0..9
  	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */
  var adapt = function adapt(delta, numPoints, firstTime) {
  	var k = 0;
  	delta = firstTime ? floor(delta / damp) : delta >> 1;
  	delta += floor(delta / numPoints);
  	for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
  		delta = floor(delta / baseMinusTMin);
  	}
  	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
  var decode = function decode(input) {
  	// Don't use UCS-2.
  	var output = [];
  	var inputLength = input.length;
  	var i = 0;
  	var n = initialN;
  	var bias = initialBias;

  	// Handle the basic code points: let `basic` be the number of input code
  	// points before the last delimiter, or `0` if there is none, then copy
  	// the first basic code points to the output.

  	var basic = input.lastIndexOf(delimiter);
  	if (basic < 0) {
  		basic = 0;
  	}

  	for (var j = 0; j < basic; ++j) {
  		// if it's not a basic code point
  		if (input.charCodeAt(j) >= 0x80) {
  			error$1('not-basic');
  		}
  		output.push(input.charCodeAt(j));
  	}

  	// Main decoding loop: start just after the last delimiter if any basic code
  	// points were copied; start at the beginning otherwise.

  	for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

  		// `index` is the index of the next character to be consumed.
  		// Decode a generalized variable-length integer into `delta`,
  		// which gets added to `i`. The overflow checking is easier
  		// if we increase `i` as we go, then subtract off its starting
  		// value at the end to obtain `delta`.
  		var oldi = i;
  		for (var w = 1, k = base;; /* no condition */k += base) {

  			if (index >= inputLength) {
  				error$1('invalid-input');
  			}

  			var digit = basicToDigit(input.charCodeAt(index++));

  			if (digit >= base || digit > floor((maxInt - i) / w)) {
  				error$1('overflow');
  			}

  			i += digit * w;
  			var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

  			if (digit < t) {
  				break;
  			}

  			var baseMinusT = base - t;
  			if (w > floor(maxInt / baseMinusT)) {
  				error$1('overflow');
  			}

  			w *= baseMinusT;
  		}

  		var out = output.length + 1;
  		bias = adapt(i - oldi, out, oldi == 0);

  		// `i` was supposed to wrap around from `out` to `0`,
  		// incrementing `n` each time, so we'll fix that now:
  		if (floor(i / out) > maxInt - n) {
  			error$1('overflow');
  		}

  		n += floor(i / out);
  		i %= out;

  		// Insert `n` at position `i` of the output.
  		output.splice(i++, 0, n);
  	}

  	return String.fromCodePoint.apply(String, output);
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */
  var encode = function encode(input) {
  	var output = [];

  	// Convert the input in UCS-2 to an array of Unicode code points.
  	input = ucs2decode(input);

  	// Cache the length.
  	var inputLength = input.length;

  	// Initialize the state.
  	var n = initialN;
  	var delta = 0;
  	var bias = initialBias;

  	// Handle the basic code points.
  	var _iteratorNormalCompletion = true;
  	var _didIteratorError = false;
  	var _iteratorError = undefined;

  	try {
  		for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  			var _currentValue2 = _step.value;

  			if (_currentValue2 < 0x80) {
  				output.push(stringFromCharCode(_currentValue2));
  			}
  		}
  	} catch (err) {
  		_didIteratorError = true;
  		_iteratorError = err;
  	} finally {
  		try {
  			if (!_iteratorNormalCompletion && _iterator.return) {
  				_iterator.return();
  			}
  		} finally {
  			if (_didIteratorError) {
  				throw _iteratorError;
  			}
  		}
  	}

  	var basicLength = output.length;
  	var handledCPCount = basicLength;

  	// `handledCPCount` is the number of code points that have been handled;
  	// `basicLength` is the number of basic code points.

  	// Finish the basic string with a delimiter unless it's empty.
  	if (basicLength) {
  		output.push(delimiter);
  	}

  	// Main encoding loop:
  	while (handledCPCount < inputLength) {

  		// All non-basic code points < n have been handled already. Find the next
  		// larger one:
  		var m = maxInt;
  		var _iteratorNormalCompletion2 = true;
  		var _didIteratorError2 = false;
  		var _iteratorError2 = undefined;

  		try {
  			for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  				var currentValue = _step2.value;

  				if (currentValue >= n && currentValue < m) {
  					m = currentValue;
  				}
  			}

  			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
  			// but guard against overflow.
  		} catch (err) {
  			_didIteratorError2 = true;
  			_iteratorError2 = err;
  		} finally {
  			try {
  				if (!_iteratorNormalCompletion2 && _iterator2.return) {
  					_iterator2.return();
  				}
  			} finally {
  				if (_didIteratorError2) {
  					throw _iteratorError2;
  				}
  			}
  		}

  		var handledCPCountPlusOne = handledCPCount + 1;
  		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
  			error$1('overflow');
  		}

  		delta += (m - n) * handledCPCountPlusOne;
  		n = m;

  		var _iteratorNormalCompletion3 = true;
  		var _didIteratorError3 = false;
  		var _iteratorError3 = undefined;

  		try {
  			for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
  				var _currentValue = _step3.value;

  				if (_currentValue < n && ++delta > maxInt) {
  					error$1('overflow');
  				}
  				if (_currentValue == n) {
  					// Represent delta as a generalized variable-length integer.
  					var q = delta;
  					for (var k = base;; /* no condition */k += base) {
  						var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
  						if (q < t) {
  							break;
  						}
  						var qMinusT = q - t;
  						var baseMinusT = base - t;
  						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
  						q = floor(qMinusT / baseMinusT);
  					}

  					output.push(stringFromCharCode(digitToBasic(q, 0)));
  					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
  					delta = 0;
  					++handledCPCount;
  				}
  			}
  		} catch (err) {
  			_didIteratorError3 = true;
  			_iteratorError3 = err;
  		} finally {
  			try {
  				if (!_iteratorNormalCompletion3 && _iterator3.return) {
  					_iterator3.return();
  				}
  			} finally {
  				if (_didIteratorError3) {
  					throw _iteratorError3;
  				}
  			}
  		}

  		++delta;
  		++n;
  	}
  	return output.join('');
  };

  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */
  var toUnicode = function toUnicode(input) {
  	return mapDomain(input, function (string) {
  		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
  	});
  };

  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */
  var toASCII = function toASCII(input) {
  	return mapDomain(input, function (string) {
  		return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
  	});
  };

  /*--------------------------------------------------------------------------*/

  /** Define the public API */
  var punycode = {
  	/**
    * A string representing the current Punycode.js version number.
    * @memberOf punycode
    * @type String
    */
  	'version': '2.1.0',
  	/**
    * An object of methods to convert from JavaScript's internal character
    * representation (UCS-2) to Unicode code points, and back.
    * @see <https://mathiasbynens.be/notes/javascript-encoding>
    * @memberOf punycode
    * @type Object
    */
  	'ucs2': {
  		'decode': ucs2decode,
  		'encode': ucs2encode
  	},
  	'decode': decode,
  	'encode': encode,
  	'toASCII': toASCII,
  	'toUnicode': toUnicode
  };

  /**
   * URI.js
   *
   * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/uri-js
   */
  /**
   * Copyright 2011 Gary Court. All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without modification, are
   * permitted provided that the following conditions are met:
   *
   *    1. Redistributions of source code must retain the above copyright notice, this list of
   *       conditions and the following disclaimer.
   *
   *    2. Redistributions in binary form must reproduce the above copyright notice, this list
   *       of conditions and the following disclaimer in the documentation and/or other materials
   *       provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
   * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
   * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
   * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
   * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * The views and conclusions contained in the software and documentation are those of the
   * authors and should not be interpreted as representing official policies, either expressed
   * or implied, of Gary Court.
   */
  var SCHEMES = {};
  function pctEncChar(chr) {
      var c = chr.charCodeAt(0);
      var e = void 0;
      if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
      return e;
  }
  function pctDecChars(str) {
      var newStr = "";
      var i = 0;
      var il = str.length;
      while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
              newStr += String.fromCharCode(c);
              i += 3;
          } else if (c >= 194 && c < 224) {
              if (il - i >= 6) {
                  var c2 = parseInt(str.substr(i + 4, 2), 16);
                  newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
              } else {
                  newStr += str.substr(i, 6);
              }
              i += 6;
          } else if (c >= 224) {
              if (il - i >= 9) {
                  var _c = parseInt(str.substr(i + 4, 2), 16);
                  var c3 = parseInt(str.substr(i + 7, 2), 16);
                  newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
              } else {
                  newStr += str.substr(i, 9);
              }
              i += 9;
          } else {
              newStr += str.substr(i, 3);
              i += 3;
          }
      }
      return newStr;
  }
  function _normalizeComponentEncoding(components, protocol) {
      function decodeUnreserved(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
      }
      if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
      if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      return components;
  }

  function _stripLeadingZeros(str) {
      return str.replace(/^0*(.*)/, "$1") || "0";
  }
  function _normalizeIPv4(host, protocol) {
      var matches = host.match(protocol.IPV4ADDRESS) || [];

      var _matches = slicedToArray(matches, 2),
          address = _matches[1];

      if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
      } else {
          return host;
      }
  }
  function _normalizeIPv6(host, protocol) {
      var matches = host.match(protocol.IPV6ADDRESS) || [];

      var _matches2 = slicedToArray(matches, 3),
          address = _matches2[1],
          zone = _matches2[2];

      if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
              _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
              last = _address$toLowerCase$2[0],
              first = _address$toLowerCase$2[1];

          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
              fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
          }
          if (isLastFieldIPv4Address) {
              fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function (acc, field, index) {
              if (!field || field === "0") {
                  var lastLongest = acc[acc.length - 1];
                  if (lastLongest && lastLongest.index + lastLongest.length === index) {
                      lastLongest.length++;
                  } else {
                      acc.push({ index: index, length: 1 });
                  }
              }
              return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function (a, b) {
              return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
              var newFirst = fields.slice(0, longestZeroFields.index);
              var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
              newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
              newHost = fields.join(":");
          }
          if (zone) {
              newHost += "%" + zone;
          }
          return newHost;
      } else {
          return host;
      }
  }
  var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
  var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
  function parse(uriString) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var components = {};
      var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
      if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
      var matches = uriString.match(URI_PARSE);
      if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
              //store each component
              components.scheme = matches[1];
              components.userinfo = matches[3];
              components.host = matches[4];
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = matches[7];
              components.fragment = matches[8];
              //fix port number
              if (isNaN(components.port)) {
                  components.port = matches[5];
              }
          } else {
              //IE FIX for improper RegExp matching
              //store each component
              components.scheme = matches[1] || undefined;
              components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
              components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
              components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
              //fix port number
              if (isNaN(components.port)) {
                  components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
              }
          }
          if (components.host) {
              //normalize IP hosts
              components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          //determine reference type
          if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
              components.reference = "same-document";
          } else if (components.scheme === undefined) {
              components.reference = "relative";
          } else if (components.fragment === undefined) {
              components.reference = "absolute";
          } else {
              components.reference = "uri";
          }
          //check for reference errors
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
              components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          //find scheme handler
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          //check if scheme can't handle IRIs
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
              //if host component is a domain name
              if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                  //convert Unicode IDN -> ASCII IDN
                  try {
                      components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                  } catch (e) {
                      components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                  }
              }
              //convert IRI -> URI
              _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
              //normalize encodings
              _normalizeComponentEncoding(components, protocol);
          }
          //perform scheme specific parsing
          if (schemeHandler && schemeHandler.parse) {
              schemeHandler.parse(components, options);
          }
      } else {
          components.error = components.error || "URI can not be parsed.";
      }
      return components;
  }

  function _recomposeAuthority(components, options) {
      var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
      var uriTokens = [];
      if (components.userinfo !== undefined) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
      }
      if (components.host !== undefined) {
          //normalize IP hosts, add brackets and escape zone separator for IPv6
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
              return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
      }
      if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
      }
      return uriTokens.length ? uriTokens.join("") : undefined;
  }

  var RDS1 = /^\.\.?\//;
  var RDS2 = /^\/\.(\/|$)/;
  var RDS3 = /^\/\.\.(\/|$)/;
  var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
  function removeDotSegments(input) {
      var output = [];
      while (input.length) {
          if (input.match(RDS1)) {
              input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
              input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
              input = input.replace(RDS3, "/");
              output.pop();
          } else if (input === "." || input === "..") {
              input = "";
          } else {
              var im = input.match(RDS5);
              if (im) {
                  var s = im[0];
                  input = input.slice(s.length);
                  output.push(s);
              } else {
                  throw new Error("Unexpected dot segment condition");
              }
          }
      }
      return output.join("");
  }

  function serialize(components) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
      var uriTokens = [];
      //find scheme handler
      var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
      //perform scheme specific serialization
      if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
      if (components.host) {
          //if host component is an IPv6 address
          if (protocol.IPV6ADDRESS.test(components.host)) ;
          //TODO: normalize IPv6 address as per RFC 5952

          //if host component is a domain name
          else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                  //convert IDN via punycode
                  try {
                      components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                  } catch (e) {
                      components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                  }
              }
      }
      //normalize encoding
      _normalizeComponentEncoding(components, protocol);
      if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
      }
      var authority = _recomposeAuthority(components, options);
      if (authority !== undefined) {
          if (options.reference !== "suffix") {
              uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
              uriTokens.push("/");
          }
      }
      if (components.path !== undefined) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
              s = removeDotSegments(s);
          }
          if (authority === undefined) {
              s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
          }
          uriTokens.push(s);
      }
      if (components.query !== undefined) {
          uriTokens.push("?");
          uriTokens.push(components.query);
      }
      if (components.fragment !== undefined) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
      }
      return uriTokens.join(""); //merge tokens into a string
  }

  function resolveComponents(base, relative) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var skipNormalization = arguments[3];

      var target = {};
      if (!skipNormalization) {
          base = parse(serialize(base, options), options); //normalize base components
          relative = parse(serialize(relative, options), options); //normalize relative components
      }
      options = options || {};
      if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          //target.authority = relative.authority;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
      } else {
          if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
              //target.authority = relative.authority;
              target.userinfo = relative.userinfo;
              target.host = relative.host;
              target.port = relative.port;
              target.path = removeDotSegments(relative.path || "");
              target.query = relative.query;
          } else {
              if (!relative.path) {
                  target.path = base.path;
                  if (relative.query !== undefined) {
                      target.query = relative.query;
                  } else {
                      target.query = base.query;
                  }
              } else {
                  if (relative.path.charAt(0) === "/") {
                      target.path = removeDotSegments(relative.path);
                  } else {
                      if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                          target.path = "/" + relative.path;
                      } else if (!base.path) {
                          target.path = relative.path;
                      } else {
                          target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                      }
                      target.path = removeDotSegments(target.path);
                  }
                  target.query = relative.query;
              }
              //target.authority = base.authority;
              target.userinfo = base.userinfo;
              target.host = base.host;
              target.port = base.port;
          }
          target.scheme = base.scheme;
      }
      target.fragment = relative.fragment;
      return target;
  }

  function resolve(baseURI, relativeURI, options) {
      var schemelessOptions = assign({ scheme: 'null' }, options);
      return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
  }

  function normalize(uri, options) {
      if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
      } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
      }
      return uri;
  }

  function equal(uriA, uriB, options) {
      if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
      } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
      }
      if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
      } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
      }
      return uriA === uriB;
  }

  function escapeComponent(str, options) {
      return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
  }

  function unescapeComponent(str, options) {
      return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
  }

  var handler = {
      scheme: "http",
      domainHost: true,
      parse: function parse(components, options) {
          //report missing host
          if (!components.host) {
              components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
      },
      serialize: function serialize(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          //normalize the default port
          if (components.port === (secure ? 443 : 80) || components.port === "") {
              components.port = undefined;
          }
          //normalize the empty path
          if (!components.path) {
              components.path = "/";
          }
          //NOTE: We do not parse query strings for HTTP URIs
          //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
          //and not the HTTP spec.
          return components;
      }
  };

  var handler$1 = {
      scheme: "https",
      domainHost: handler.domainHost,
      parse: handler.parse,
      serialize: handler.serialize
  };

  function isSecure(wsComponents) {
      return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
  }
  //RFC 6455
  var handler$2 = {
      scheme: "ws",
      domainHost: true,
      parse: function parse(components, options) {
          var wsComponents = components;
          //indicate if the secure flag is set
          wsComponents.secure = isSecure(wsComponents);
          //construct resouce name
          wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
          wsComponents.path = undefined;
          wsComponents.query = undefined;
          return wsComponents;
      },
      serialize: function serialize(wsComponents, options) {
          //normalize the default port
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
              wsComponents.port = undefined;
          }
          //ensure scheme matches secure flag
          if (typeof wsComponents.secure === 'boolean') {
              wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
              wsComponents.secure = undefined;
          }
          //reconstruct path from resource name
          if (wsComponents.resourceName) {
              var _wsComponents$resourc = wsComponents.resourceName.split('?'),
                  _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
                  path = _wsComponents$resourc2[0],
                  query = _wsComponents$resourc2[1];

              wsComponents.path = path && path !== '/' ? path : undefined;
              wsComponents.query = query;
              wsComponents.resourceName = undefined;
          }
          //forbid fragment component
          wsComponents.fragment = undefined;
          return wsComponents;
      }
  };

  var handler$3 = {
      scheme: "wss",
      domainHost: handler$2.domainHost,
      parse: handler$2.parse,
      serialize: handler$2.serialize
  };

  var O = {};
  //RFC 3986
  var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ("\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
  var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
  var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
  //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
  //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
  //const WSP$$ = "[\\x20\\x09]";
  //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
  //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
  //const VCHAR$$ = "[\\x21-\\x7E]";
  //const WSP$$ = "[\\x20\\x09]";
  //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
  //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
  //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
  //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
  var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
  var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
  var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
  var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
  var UNRESERVED = new RegExp(UNRESERVED$$, "g");
  var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
  var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
  var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
  var NOT_HFVALUE = NOT_HFNAME;
  function decodeUnreserved(str) {
      var decStr = pctDecChars(str);
      return !decStr.match(UNRESERVED) ? str : decStr;
  }
  var handler$4 = {
      scheme: "mailto",
      parse: function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = undefined;
          if (mailtoComponents.query) {
              var unknownHeaders = false;
              var headers = {};
              var hfields = mailtoComponents.query.split("&");
              for (var x = 0, xl = hfields.length; x < xl; ++x) {
                  var hfield = hfields[x].split("=");
                  switch (hfield[0]) {
                      case "to":
                          var toAddrs = hfield[1].split(",");
                          for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                              to.push(toAddrs[_x]);
                          }
                          break;
                      case "subject":
                          mailtoComponents.subject = unescapeComponent(hfield[1], options);
                          break;
                      case "body":
                          mailtoComponents.body = unescapeComponent(hfield[1], options);
                          break;
                      default:
                          unknownHeaders = true;
                          headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                          break;
                  }
              }
              if (unknownHeaders) mailtoComponents.headers = headers;
          }
          mailtoComponents.query = undefined;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
              var addr = to[_x2].split("@");
              addr[0] = unescapeComponent(addr[0]);
              if (!options.unicodeSupport) {
                  //convert Unicode IDN -> ASCII IDN
                  try {
                      addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                  } catch (e) {
                      mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                  }
              } else {
                  addr[1] = unescapeComponent(addr[1], options).toLowerCase();
              }
              to[_x2] = addr.join("@");
          }
          return mailtoComponents;
      },
      serialize: function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
              for (var x = 0, xl = to.length; x < xl; ++x) {
                  var toAddr = String(to[x]);
                  var atIdx = toAddr.lastIndexOf("@");
                  var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                  var domain = toAddr.slice(atIdx + 1);
                  //convert IDN via punycode
                  try {
                      domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                  } catch (e) {
                      components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                  }
                  to[x] = localPart + "@" + domain;
              }
              components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
              if (headers[name] !== O[name]) {
                  fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
              }
          }
          if (fields.length) {
              components.query = fields.join("&");
          }
          return components;
      }
  };

  var URN_PARSE = /^([^\:]+)\:(.*)/;
  //RFC 2141
  var handler$5 = {
      scheme: "urn",
      parse: function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
              var scheme = options.scheme || urnComponents.scheme || "urn";
              var nid = matches[1].toLowerCase();
              var nss = matches[2];
              var urnScheme = scheme + ":" + (options.nid || nid);
              var schemeHandler = SCHEMES[urnScheme];
              urnComponents.nid = nid;
              urnComponents.nss = nss;
              urnComponents.path = undefined;
              if (schemeHandler) {
                  urnComponents = schemeHandler.parse(urnComponents, options);
              }
          } else {
              urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
      },
      serialize: function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
              urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
      }
  };

  var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
  //RFC 4122
  var handler$6 = {
      scheme: "urn:uuid",
      parse: function parse(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = undefined;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
              uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
      },
      serialize: function serialize(uuidComponents, options) {
          var urnComponents = uuidComponents;
          //normalize UUID
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
      }
  };

  SCHEMES[handler.scheme] = handler;
  SCHEMES[handler$1.scheme] = handler$1;
  SCHEMES[handler$2.scheme] = handler$2;
  SCHEMES[handler$3.scheme] = handler$3;
  SCHEMES[handler$4.scheme] = handler$4;
  SCHEMES[handler$5.scheme] = handler$5;
  SCHEMES[handler$6.scheme] = handler$6;

  exports.SCHEMES = SCHEMES;
  exports.pctEncChar = pctEncChar;
  exports.pctDecChars = pctDecChars;
  exports.parse = parse;
  exports.removeDotSegments = removeDotSegments;
  exports.serialize = serialize;
  exports.resolveComponents = resolveComponents;
  exports.resolve = resolve;
  exports.normalize = normalize;
  exports.equal = equal;
  exports.escapeComponent = escapeComponent;
  exports.unescapeComponent = unescapeComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

  })));

  });

  unwrapExports(uri_all$1);

  // do not edit .js files directly - edit src/index.jst



  var fastDeepEqual$1 = function equal(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }



      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        var key = keys[i];

        if (!equal(a[key], b[key])) return false;
      }

      return true;
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };

  // https://mathiasbynens.be/notes/javascript-encoding
  // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
  var ucs2length$3 = function ucs2length(str) {
    var length = 0
      , len = str.length
      , pos = 0
      , value;
    while (pos < len) {
      length++;
      value = str.charCodeAt(pos++);
      if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
        // high surrogate, and there is a next character
        value = str.charCodeAt(pos);
        if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
      }
    }
    return length;
  };

  var util$1 = {
    copy: copy$1,
    checkDataType: checkDataType$1,
    checkDataTypes: checkDataTypes$1,
    coerceToTypes: coerceToTypes$1,
    toHash: toHash$3,
    getProperty: getProperty$1,
    escapeQuotes: escapeQuotes$1,
    equal: fastDeepEqual$1,
    ucs2length: ucs2length$3,
    varOccurences: varOccurences$1,
    varReplace: varReplace$1,
    schemaHasRules: schemaHasRules$1,
    schemaHasRulesExcept: schemaHasRulesExcept$1,
    schemaUnknownRules: schemaUnknownRules$1,
    toQuotedString: toQuotedString$1,
    getPathExpr: getPathExpr$1,
    getPath: getPath$1,
    getData: getData$1,
    unescapeFragment: unescapeFragment$1,
    unescapeJsonPointer: unescapeJsonPointer$1,
    escapeFragment: escapeFragment$1,
    escapeJsonPointer: escapeJsonPointer$1
  };


  function copy$1(o, to) {
    to = to || {};
    for (var key in o) to[key] = o[key];
    return to;
  }


  function checkDataType$1(dataType, data, strictNumbers, negate) {
    var EQUAL = negate ? ' !== ' : ' === '
      , AND = negate ? ' || ' : ' && '
      , OK = negate ? '!' : ''
      , NOT = negate ? '' : '!';
    switch (dataType) {
      case 'null': return data + EQUAL + 'null';
      case 'array': return OK + 'Array.isArray(' + data + ')';
      case 'object': return '(' + OK + data + AND +
                            'typeof ' + data + EQUAL + '"object"' + AND +
                            NOT + 'Array.isArray(' + data + '))';
      case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
                             NOT + '(' + data + ' % 1)' +
                             AND + data + EQUAL + data +
                             (strictNumbers ? (AND + OK + 'isFinite(' + data + ')') : '') + ')';
      case 'number': return '(typeof ' + data + EQUAL + '"' + dataType + '"' +
                            (strictNumbers ? (AND + OK + 'isFinite(' + data + ')') : '') + ')';
      default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
    }
  }


  function checkDataTypes$1(dataTypes, data, strictNumbers) {
    switch (dataTypes.length) {
      case 1: return checkDataType$1(dataTypes[0], data, strictNumbers, true);
      default:
        var code = '';
        var types = toHash$3(dataTypes);
        if (types.array && types.object) {
          code = types.null ? '(': '(!' + data + ' || ';
          code += 'typeof ' + data + ' !== "object")';
          delete types.null;
          delete types.array;
          delete types.object;
        }
        if (types.number) delete types.integer;
        for (var t in types)
          code += (code ? ' && ' : '' ) + checkDataType$1(t, data, strictNumbers, true);

        return code;
    }
  }


  var COERCE_TO_TYPES$1 = toHash$3([ 'string', 'number', 'integer', 'boolean', 'null' ]);
  function coerceToTypes$1(optionCoerceTypes, dataTypes) {
    if (Array.isArray(dataTypes)) {
      var types = [];
      for (var i=0; i<dataTypes.length; i++) {
        var t = dataTypes[i];
        if (COERCE_TO_TYPES$1[t]) types[types.length] = t;
        else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
      }
      if (types.length) return types;
    } else if (COERCE_TO_TYPES$1[dataTypes]) {
      return [dataTypes];
    } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
      return ['array'];
    }
  }


  function toHash$3(arr) {
    var hash = {};
    for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
    return hash;
  }


  var IDENTIFIER$3 = /^[a-z$_][a-z$_0-9]*$/i;
  var SINGLE_QUOTE$1 = /'|\\/g;
  function getProperty$1(key) {
    return typeof key == 'number'
            ? '[' + key + ']'
            : IDENTIFIER$3.test(key)
              ? '.' + key
              : "['" + escapeQuotes$1(key) + "']";
  }


  function escapeQuotes$1(str) {
    return str.replace(SINGLE_QUOTE$1, '\\$&')
              .replace(/\n/g, '\\n')
              .replace(/\r/g, '\\r')
              .replace(/\f/g, '\\f')
              .replace(/\t/g, '\\t');
  }


  function varOccurences$1(str, dataVar) {
    dataVar += '[^0-9]';
    var matches = str.match(new RegExp(dataVar, 'g'));
    return matches ? matches.length : 0;
  }


  function varReplace$1(str, dataVar, expr) {
    dataVar += '([^0-9])';
    expr = expr.replace(/\$/g, '$$$$');
    return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
  }


  function schemaHasRules$1(schema, rules) {
    if (typeof schema == 'boolean') return !schema;
    for (var key in schema) if (rules[key]) return true;
  }


  function schemaHasRulesExcept$1(schema, rules, exceptKeyword) {
    if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
    for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
  }


  function schemaUnknownRules$1(schema, rules) {
    if (typeof schema == 'boolean') return;
    for (var key in schema) if (!rules[key]) return key;
  }


  function toQuotedString$1(str) {
    return '\'' + escapeQuotes$1(str) + '\'';
  }


  function getPathExpr$1(currentPath, expr, jsonPointers, isNumber) {
    var path = jsonPointers // false by default
                ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
                : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
    return joinPaths$1(currentPath, path);
  }


  function getPath$1(currentPath, prop, jsonPointers) {
    var path = jsonPointers // false by default
                ? toQuotedString$1('/' + escapeJsonPointer$1(prop))
                : toQuotedString$1(getProperty$1(prop));
    return joinPaths$1(currentPath, path);
  }


  var JSON_POINTER$3 = /^\/(?:[^~]|~0|~1)*$/;
  var RELATIVE_JSON_POINTER$3 = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function getData$1($data, lvl, paths) {
    var up, jsonPointer, data, matches;
    if ($data === '') return 'rootData';
    if ($data[0] == '/') {
      if (!JSON_POINTER$3.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
      jsonPointer = $data;
      data = 'rootData';
    } else {
      matches = $data.match(RELATIVE_JSON_POINTER$3);
      if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
      up = +matches[1];
      jsonPointer = matches[2];
      if (jsonPointer == '#') {
        if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
        return paths[lvl - up];
      }

      if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
      data = 'data' + ((lvl - up) || '');
      if (!jsonPointer) return data;
    }

    var expr = data;
    var segments = jsonPointer.split('/');
    for (var i=0; i<segments.length; i++) {
      var segment = segments[i];
      if (segment) {
        data += getProperty$1(unescapeJsonPointer$1(segment));
        expr += ' && ' + data;
      }
    }
    return expr;
  }


  function joinPaths$1 (a, b) {
    if (a == '""') return b;
    return (a + ' + ' + b).replace(/([^\\])' \+ '/g, '$1');
  }


  function unescapeFragment$1(str) {
    return unescapeJsonPointer$1(decodeURIComponent(str));
  }


  function escapeFragment$1(str) {
    return encodeURIComponent(escapeJsonPointer$1(str));
  }


  function escapeJsonPointer$1(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }


  function unescapeJsonPointer$1(str) {
    return str.replace(/~1/g, '/').replace(/~0/g, '~');
  }
  util$1.copy;
  util$1.checkDataType;
  util$1.checkDataTypes;
  util$1.coerceToTypes;
  util$1.toHash;
  util$1.getProperty;
  util$1.escapeQuotes;
  util$1.equal;
  util$1.ucs2length;
  util$1.varOccurences;
  util$1.varReplace;
  util$1.schemaHasRules;
  util$1.schemaHasRulesExcept;
  util$1.schemaUnknownRules;
  util$1.toQuotedString;
  util$1.getPathExpr;
  util$1.getPath;
  util$1.getData;
  util$1.unescapeFragment;
  util$1.unescapeJsonPointer;
  util$1.escapeFragment;
  util$1.escapeJsonPointer;

  var schema_obj$1 = SchemaObject$1;

  function SchemaObject$1(obj) {
    util$1.copy(obj, this);
  }

  var jsonSchemaTraverse$1 = createCommonjsModule(function (module) {

  var traverse = module.exports = function (schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
      cb = opts;
      opts = {};
    }

    cb = opts.cb || cb;
    var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};
    var post = cb.post || function() {};

    _traverse(opts, pre, post, schema, '', schema);
  };


  traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true
  };

  traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };

  traverse.propsKeywords = {
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
  };

  traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };


  function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
      pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      for (var key in schema) {
        var sch = schema[key];
        if (Array.isArray(sch)) {
          if (key in traverse.arrayKeywords) {
            for (var i=0; i<sch.length; i++)
              _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
          }
        } else if (key in traverse.propsKeywords) {
          if (sch && typeof sch == 'object') {
            for (var prop in sch)
              _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          }
        } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
          _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
        }
      }
      post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
  }


  function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  });

  var resolve_1$1 = resolve$1;

  resolve$1.normalizeId = normalizeId$1;
  resolve$1.fullPath = getFullPath$1;
  resolve$1.url = resolveUrl$1;
  resolve$1.ids = resolveIds$1;
  resolve$1.inlineRef = inlineRef$1;
  resolve$1.schema = resolveSchema$3;

  /**
   * [resolve and compile the references ($ref)]
   * @this   Ajv
   * @param  {Function} compile reference to schema compilation funciton (localCompile)
   * @param  {Object} root object with information about the root schema for the current schema
   * @param  {String} ref reference to resolve
   * @return {Object|Function} schema object (if the schema can be inlined) or validation function
   */
  function resolve$1(compile, root, ref) {
    /* jshint validthis: true */
    var refVal = this._refs[ref];
    if (typeof refVal == 'string') {
      if (this._refs[refVal]) refVal = this._refs[refVal];
      else return resolve$1.call(this, compile, root, refVal);
    }

    refVal = refVal || this._schemas[ref];
    if (refVal instanceof schema_obj$1) {
      return inlineRef$1(refVal.schema, this._opts.inlineRefs)
              ? refVal.schema
              : refVal.validate || this._compile(refVal);
    }

    var res = resolveSchema$3.call(this, root, ref);
    var schema, v, baseId;
    if (res) {
      schema = res.schema;
      root = res.root;
      baseId = res.baseId;
    }

    if (schema instanceof schema_obj$1) {
      v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
    } else if (schema !== undefined) {
      v = inlineRef$1(schema, this._opts.inlineRefs)
          ? schema
          : compile.call(this, schema, root, undefined, baseId);
    }

    return v;
  }


  /**
   * Resolve schema, its root and baseId
   * @this Ajv
   * @param  {Object} root root object with properties schema, refVal, refs
   * @param  {String} ref  reference to resolve
   * @return {Object} object with properties schema, root, baseId
   */
  function resolveSchema$3(root, ref) {
    /* jshint validthis: true */
    var p = uri_all$1.parse(ref)
      , refPath = _getFullPath$1(p)
      , baseId = getFullPath$1(this._getId(root.schema));
    if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
      var id = normalizeId$1(refPath);
      var refVal = this._refs[id];
      if (typeof refVal == 'string') {
        return resolveRecursive$1.call(this, root, refVal, p);
      } else if (refVal instanceof schema_obj$1) {
        if (!refVal.validate) this._compile(refVal);
        root = refVal;
      } else {
        refVal = this._schemas[id];
        if (refVal instanceof schema_obj$1) {
          if (!refVal.validate) this._compile(refVal);
          if (id == normalizeId$1(ref))
            return { schema: refVal, root: root, baseId: baseId };
          root = refVal;
        } else {
          return;
        }
      }
      if (!root.schema) return;
      baseId = getFullPath$1(this._getId(root.schema));
    }
    return getJsonPointer$1.call(this, p, baseId, root.schema, root);
  }


  /* @this Ajv */
  function resolveRecursive$1(root, ref, parsedRef) {
    /* jshint validthis: true */
    var res = resolveSchema$3.call(this, root, ref);
    if (res) {
      var schema = res.schema;
      var baseId = res.baseId;
      root = res.root;
      var id = this._getId(schema);
      if (id) baseId = resolveUrl$1(baseId, id);
      return getJsonPointer$1.call(this, parsedRef, baseId, schema, root);
    }
  }


  var PREVENT_SCOPE_CHANGE$1 = util$1.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
  /* @this Ajv */
  function getJsonPointer$1(parsedRef, baseId, schema, root) {
    /* jshint validthis: true */
    parsedRef.fragment = parsedRef.fragment || '';
    if (parsedRef.fragment.slice(0,1) != '/') return;
    var parts = parsedRef.fragment.split('/');

    for (var i = 1; i < parts.length; i++) {
      var part = parts[i];
      if (part) {
        part = util$1.unescapeFragment(part);
        schema = schema[part];
        if (schema === undefined) break;
        var id;
        if (!PREVENT_SCOPE_CHANGE$1[part]) {
          id = this._getId(schema);
          if (id) baseId = resolveUrl$1(baseId, id);
          if (schema.$ref) {
            var $ref = resolveUrl$1(baseId, schema.$ref);
            var res = resolveSchema$3.call(this, root, $ref);
            if (res) {
              schema = res.schema;
              root = res.root;
              baseId = res.baseId;
            }
          }
        }
      }
    }
    if (schema !== undefined && schema !== root.schema)
      return { schema: schema, root: root, baseId: baseId };
  }


  var SIMPLE_INLINED$1 = util$1.toHash([
    'type', 'format', 'pattern',
    'maxLength', 'minLength',
    'maxProperties', 'minProperties',
    'maxItems', 'minItems',
    'maximum', 'minimum',
    'uniqueItems', 'multipleOf',
    'required', 'enum'
  ]);
  function inlineRef$1(schema, limit) {
    if (limit === false) return false;
    if (limit === undefined || limit === true) return checkNoRef$1(schema);
    else if (limit) return countKeys$1(schema) <= limit;
  }


  function checkNoRef$1(schema) {
    var item;
    if (Array.isArray(schema)) {
      for (var i=0; i<schema.length; i++) {
        item = schema[i];
        if (typeof item == 'object' && !checkNoRef$1(item)) return false;
      }
    } else {
      for (var key in schema) {
        if (key == '$ref') return false;
        item = schema[key];
        if (typeof item == 'object' && !checkNoRef$1(item)) return false;
      }
    }
    return true;
  }


  function countKeys$1(schema) {
    var count = 0, item;
    if (Array.isArray(schema)) {
      for (var i=0; i<schema.length; i++) {
        item = schema[i];
        if (typeof item == 'object') count += countKeys$1(item);
        if (count == Infinity) return Infinity;
      }
    } else {
      for (var key in schema) {
        if (key == '$ref') return Infinity;
        if (SIMPLE_INLINED$1[key]) {
          count++;
        } else {
          item = schema[key];
          if (typeof item == 'object') count += countKeys$1(item) + 1;
          if (count == Infinity) return Infinity;
        }
      }
    }
    return count;
  }


  function getFullPath$1(id, normalize) {
    if (normalize !== false) id = normalizeId$1(id);
    var p = uri_all$1.parse(id);
    return _getFullPath$1(p);
  }


  function _getFullPath$1(p) {
    return uri_all$1.serialize(p).split('#')[0] + '#';
  }


  var TRAILING_SLASH_HASH$1 = /#\/?$/;
  function normalizeId$1(id) {
    return id ? id.replace(TRAILING_SLASH_HASH$1, '') : '';
  }


  function resolveUrl$1(baseId, id) {
    id = normalizeId$1(id);
    return uri_all$1.resolve(baseId, id);
  }


  /* @this Ajv */
  function resolveIds$1(schema) {
    var schemaId = normalizeId$1(this._getId(schema));
    var baseIds = {'': schemaId};
    var fullPaths = {'': getFullPath$1(schemaId, false)};
    var localRefs = {};
    var self = this;

    jsonSchemaTraverse$1(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (jsonPtr === '') return;
      var id = self._getId(sch);
      var baseId = baseIds[parentJsonPtr];
      var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
      if (keyIndex !== undefined)
        fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util$1.escapeFragment(keyIndex));

      if (typeof id == 'string') {
        id = baseId = normalizeId$1(baseId ? uri_all$1.resolve(baseId, id) : id);

        var refVal = self._refs[id];
        if (typeof refVal == 'string') refVal = self._refs[refVal];
        if (refVal && refVal.schema) {
          if (!fastDeepEqual$1(sch, refVal.schema))
            throw new Error('id "' + id + '" resolves to more than one schema');
        } else if (id != normalizeId$1(fullPath)) {
          if (id[0] == '#') {
            if (localRefs[id] && !fastDeepEqual$1(sch, localRefs[id]))
              throw new Error('id "' + id + '" resolves to more than one schema');
            localRefs[id] = sch;
          } else {
            self._refs[id] = fullPath;
          }
        }
      }
      baseIds[jsonPtr] = baseId;
      fullPaths[jsonPtr] = fullPath;
    });

    return localRefs;
  }

  var error_classes$1 = {
    Validation: errorSubclass$1(ValidationError$3),
    MissingRef: errorSubclass$1(MissingRefError$3)
  };


  function ValidationError$3(errors) {
    this.message = 'validation failed';
    this.errors = errors;
    this.ajv = this.validation = true;
  }


  MissingRefError$3.message = function (baseId, ref) {
    return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
  };


  function MissingRefError$3(baseId, ref, message) {
    this.message = message || MissingRefError$3.message(baseId, ref);
    this.missingRef = resolve_1$1.url(baseId, ref);
    this.missingSchema = resolve_1$1.normalizeId(resolve_1$1.fullPath(this.missingRef));
  }


  function errorSubclass$1(Subclass) {
    Subclass.prototype = Object.create(Error.prototype);
    Subclass.prototype.constructor = Subclass;
    return Subclass;
  }

  var fastJsonStableStringify$1 = function (data, opts) {
      if (!opts) opts = {};
      if (typeof opts === 'function') opts = { cmp: opts };
      var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

      var cmp = opts.cmp && (function (f) {
          return function (node) {
              return function (a, b) {
                  var aobj = { key: a, value: node[a] };
                  var bobj = { key: b, value: node[b] };
                  return f(aobj, bobj);
              };
          };
      })(opts.cmp);

      var seen = [];
      return (function stringify (node) {
          if (node && node.toJSON && typeof node.toJSON === 'function') {
              node = node.toJSON();
          }

          if (node === undefined) return;
          if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
          if (typeof node !== 'object') return JSON.stringify(node);

          var i, out;
          if (Array.isArray(node)) {
              out = '[';
              for (i = 0; i < node.length; i++) {
                  if (i) out += ',';
                  out += stringify(node[i]) || 'null';
              }
              return out + ']';
          }

          if (node === null) return 'null';

          if (seen.indexOf(node) !== -1) {
              if (cycles) return JSON.stringify('__cycle__');
              throw new TypeError('Converting circular structure to JSON');
          }

          var seenIndex = seen.push(node) - 1;
          var keys = Object.keys(node).sort(cmp && cmp(node));
          out = '';
          for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              var value = stringify(node[key]);

              if (!value) continue;
              if (out) out += ',';
              out += JSON.stringify(key) + ':' + value;
          }
          seen.splice(seenIndex, 1);
          return '{' + out + '}';
      })(data);
  };

  var validate$4 = function generate_validate(it, $keyword, $ruleType) {
    var out = '';
    var $async = it.schema.$async === true,
      $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
      $id = it.self._getId(it.schema);
    if (it.opts.strictKeywords) {
      var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
      if ($unknownKwd) {
        var $keywordsMsg = 'unknown keyword: ' + $unknownKwd;
        if (it.opts.strictKeywords === 'log') it.logger.warn($keywordsMsg);
        else throw new Error($keywordsMsg);
      }
    }
    if (it.isTop) {
      out += ' var validate = ';
      if ($async) {
        it.async = true;
        out += 'async ';
      }
      out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
      if ($id && (it.opts.sourceCode || it.opts.processCode)) {
        out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
      }
    }
    if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
      var $keyword = 'false schema';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      if (it.schema === false) {
        if (it.isTop) {
          $breakOnError = true;
        } else {
          out += ' var ' + ($valid) + ' = false; ';
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
          if (it.opts.messages !== false) {
            out += ' , message: \'boolean schema is false\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      } else {
        if (it.isTop) {
          if ($async) {
            out += ' return data; ';
          } else {
            out += ' validate.errors = null; return true; ';
          }
        } else {
          out += ' var ' + ($valid) + ' = true; ';
        }
      }
      if (it.isTop) {
        out += ' }; return validate; ';
      }
      return out;
    }
    if (it.isTop) {
      var $top = it.isTop,
        $lvl = it.level = 0,
        $dataLvl = it.dataLevel = 0,
        $data = 'data';
      it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
      it.baseId = it.baseId || it.rootId;
      delete it.isTop;
      it.dataPathArr = [""];
      if (it.schema.default !== undefined && it.opts.useDefaults && it.opts.strictDefaults) {
        var $defaultMsg = 'default is ignored in the schema root';
        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
        else throw new Error($defaultMsg);
      }
      out += ' var vErrors = null; ';
      out += ' var errors = 0;     ';
      out += ' if (rootData === undefined) rootData = data; ';
    } else {
      var $lvl = it.level,
        $dataLvl = it.dataLevel,
        $data = 'data' + ($dataLvl || '');
      if ($id) it.baseId = it.resolve.url(it.baseId, $id);
      if ($async && !it.async) throw new Error('async schema in sync schema');
      out += ' var errs_' + ($lvl) + ' = errors;';
    }
    var $valid = 'valid' + $lvl,
      $breakOnError = !it.opts.allErrors,
      $closingBraces1 = '',
      $closingBraces2 = '';
    var $errorKeyword;
    var $typeSchema = it.schema.type,
      $typeIsArray = Array.isArray($typeSchema);
    if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
      if ($typeIsArray) {
        if ($typeSchema.indexOf('null') == -1) $typeSchema = $typeSchema.concat('null');
      } else if ($typeSchema != 'null') {
        $typeSchema = [$typeSchema, 'null'];
        $typeIsArray = true;
      }
    }
    if ($typeIsArray && $typeSchema.length == 1) {
      $typeSchema = $typeSchema[0];
      $typeIsArray = false;
    }
    if (it.schema.$ref && $refKeywords) {
      if (it.opts.extendRefs == 'fail') {
        throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
      } else if (it.opts.extendRefs !== true) {
        $refKeywords = false;
        it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
      }
    }
    if (it.schema.$comment && it.opts.$comment) {
      out += ' ' + (it.RULES.all.$comment.code(it, '$comment'));
    }
    if ($typeSchema) {
      if (it.opts.coerceTypes) {
        var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
      }
      var $rulesGroup = it.RULES.types[$typeSchema];
      if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
        var $schemaPath = it.schemaPath + '.type',
          $errSchemaPath = it.errSchemaPath + '/type';
        var $schemaPath = it.schemaPath + '.type',
          $errSchemaPath = it.errSchemaPath + '/type',
          $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
        out += ' if (' + (it.util[$method]($typeSchema, $data, it.opts.strictNumbers, true)) + ') { ';
        if ($coerceToTypes) {
          var $dataType = 'dataType' + $lvl,
            $coerced = 'coerced' + $lvl;
          out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; var ' + ($coerced) + ' = undefined; ';
          if (it.opts.coerceTypes == 'array') {
            out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ') && ' + ($data) + '.length == 1) { ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + '; if (' + (it.util.checkDataType(it.schema.type, $data, it.opts.strictNumbers)) + ') ' + ($coerced) + ' = ' + ($data) + '; } ';
          }
          out += ' if (' + ($coerced) + ' !== undefined) ; ';
          var arr1 = $coerceToTypes;
          if (arr1) {
            var $type, $i = -1,
              l1 = arr1.length - 1;
            while ($i < l1) {
              $type = arr1[$i += 1];
              if ($type == 'string') {
                out += ' else if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
              } else if ($type == 'number' || $type == 'integer') {
                out += ' else if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
                if ($type == 'integer') {
                  out += ' && !(' + ($data) + ' % 1)';
                }
                out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
              } else if ($type == 'boolean') {
                out += ' else if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
              } else if ($type == 'null') {
                out += ' else if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
              } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
                out += ' else if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
              }
            }
          }
          out += ' else {   ';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should be ';
              if ($typeIsArray) {
                out += '' + ($typeSchema.join(","));
              } else {
                out += '' + ($typeSchema);
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } if (' + ($coerced) + ' !== undefined) {  ';
          var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
            $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
          out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
          if (!$dataLvl) {
            out += 'if (' + ($parentData) + ' !== undefined)';
          }
          out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
        } else {
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should be ';
              if ($typeIsArray) {
                out += '' + ($typeSchema.join(","));
              } else {
                out += '' + ($typeSchema);
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
        }
        out += ' } ';
      }
    }
    if (it.schema.$ref && !$refKeywords) {
      out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
      if ($breakOnError) {
        out += ' } if (errors === ';
        if ($top) {
          out += '0';
        } else {
          out += 'errs_' + ($lvl);
        }
        out += ') { ';
        $closingBraces2 += '}';
      }
    } else {
      var arr2 = it.RULES;
      if (arr2) {
        var $rulesGroup, i2 = -1,
          l2 = arr2.length - 1;
        while (i2 < l2) {
          $rulesGroup = arr2[i2 += 1];
          if ($shouldUseGroup($rulesGroup)) {
            if ($rulesGroup.type) {
              out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data, it.opts.strictNumbers)) + ') { ';
            }
            if (it.opts.useDefaults) {
              if ($rulesGroup.type == 'object' && it.schema.properties) {
                var $schema = it.schema.properties,
                  $schemaKeys = Object.keys($schema);
                var arr3 = $schemaKeys;
                if (arr3) {
                  var $propertyKey, i3 = -1,
                    l3 = arr3.length - 1;
                  while (i3 < l3) {
                    $propertyKey = arr3[i3 += 1];
                    var $sch = $schema[$propertyKey];
                    if ($sch.default !== undefined) {
                      var $passData = $data + it.util.getProperty($propertyKey);
                      if (it.compositeRule) {
                        if (it.opts.strictDefaults) {
                          var $defaultMsg = 'default is ignored for: ' + $passData;
                          if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
                          else throw new Error($defaultMsg);
                        }
                      } else {
                        out += ' if (' + ($passData) + ' === undefined ';
                        if (it.opts.useDefaults == 'empty') {
                          out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
                        }
                        out += ' ) ' + ($passData) + ' = ';
                        if (it.opts.useDefaults == 'shared') {
                          out += ' ' + (it.useDefault($sch.default)) + ' ';
                        } else {
                          out += ' ' + (JSON.stringify($sch.default)) + ' ';
                        }
                        out += '; ';
                      }
                    }
                  }
                }
              } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
                var arr4 = it.schema.items;
                if (arr4) {
                  var $sch, $i = -1,
                    l4 = arr4.length - 1;
                  while ($i < l4) {
                    $sch = arr4[$i += 1];
                    if ($sch.default !== undefined) {
                      var $passData = $data + '[' + $i + ']';
                      if (it.compositeRule) {
                        if (it.opts.strictDefaults) {
                          var $defaultMsg = 'default is ignored for: ' + $passData;
                          if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
                          else throw new Error($defaultMsg);
                        }
                      } else {
                        out += ' if (' + ($passData) + ' === undefined ';
                        if (it.opts.useDefaults == 'empty') {
                          out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
                        }
                        out += ' ) ' + ($passData) + ' = ';
                        if (it.opts.useDefaults == 'shared') {
                          out += ' ' + (it.useDefault($sch.default)) + ' ';
                        } else {
                          out += ' ' + (JSON.stringify($sch.default)) + ' ';
                        }
                        out += '; ';
                      }
                    }
                  }
                }
              }
            }
            var arr5 = $rulesGroup.rules;
            if (arr5) {
              var $rule, i5 = -1,
                l5 = arr5.length - 1;
              while (i5 < l5) {
                $rule = arr5[i5 += 1];
                if ($shouldUseRule($rule)) {
                  var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                  if ($code) {
                    out += ' ' + ($code) + ' ';
                    if ($breakOnError) {
                      $closingBraces1 += '}';
                    }
                  }
                }
              }
            }
            if ($breakOnError) {
              out += ' ' + ($closingBraces1) + ' ';
              $closingBraces1 = '';
            }
            if ($rulesGroup.type) {
              out += ' } ';
              if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
                out += ' else { ';
                var $schemaPath = it.schemaPath + '.type',
                  $errSchemaPath = it.errSchemaPath + '/type';
                var $$outStack = $$outStack || [];
                $$outStack.push(out);
                out = ''; /* istanbul ignore else */
                if (it.createErrors !== false) {
                  out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
                  if ($typeIsArray) {
                    out += '' + ($typeSchema.join(","));
                  } else {
                    out += '' + ($typeSchema);
                  }
                  out += '\' } ';
                  if (it.opts.messages !== false) {
                    out += ' , message: \'should be ';
                    if ($typeIsArray) {
                      out += '' + ($typeSchema.join(","));
                    } else {
                      out += '' + ($typeSchema);
                    }
                    out += '\' ';
                  }
                  if (it.opts.verbose) {
                    out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                  }
                  out += ' } ';
                } else {
                  out += ' {} ';
                }
                var __err = out;
                out = $$outStack.pop();
                if (!it.compositeRule && $breakOnError) {
                  /* istanbul ignore if */
                  if (it.async) {
                    out += ' throw new ValidationError([' + (__err) + ']); ';
                  } else {
                    out += ' validate.errors = [' + (__err) + ']; return false; ';
                  }
                } else {
                  out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
                out += ' } ';
              }
            }
            if ($breakOnError) {
              out += ' if (errors === ';
              if ($top) {
                out += '0';
              } else {
                out += 'errs_' + ($lvl);
              }
              out += ') { ';
              $closingBraces2 += '}';
            }
          }
        }
      }
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces2) + ' ';
    }
    if ($top) {
      if ($async) {
        out += ' if (errors === 0) return data;           ';
        out += ' else throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; ';
        out += ' return errors === 0;       ';
      }
      out += ' }; return validate;';
    } else {
      out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
    }

    function $shouldUseGroup($rulesGroup) {
      var rules = $rulesGroup.rules;
      for (var i = 0; i < rules.length; i++)
        if ($shouldUseRule(rules[i])) return true;
    }

    function $shouldUseRule($rule) {
      return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImplementsSomeKeyword($rule));
    }

    function $ruleImplementsSomeKeyword($rule) {
      var impl = $rule.implements;
      for (var i = 0; i < impl.length; i++)
        if (it.schema[impl[i]] !== undefined) return true;
    }
    return out;
  };

  /**
   * Functions below are used inside compiled validations function
   */

  var ucs2length$2 = util$1.ucs2length;


  // this error is thrown by async schemas to return validation errors via exception
  var ValidationError$2 = error_classes$1.Validation;

  var compile_1$1 = compile$3;


  /**
   * Compiles schema to validation function
   * @this   Ajv
   * @param  {Object} schema schema object
   * @param  {Object} root object with information about the root schema for this schema
   * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
   * @param  {String} baseId base ID for IDs in the schema
   * @return {Function} validation function
   */
  function compile$3(schema, root, localRefs, baseId) {
    /* jshint validthis: true, evil: true */
    /* eslint no-shadow: 0 */
    var self = this
      , opts = this._opts
      , refVal = [ undefined ]
      , refs = {}
      , patterns = []
      , patternsHash = {}
      , defaults = []
      , defaultsHash = {}
      , customRules = [];

    root = root || { schema: schema, refVal: refVal, refs: refs };

    var c = checkCompiling$1.call(this, schema, root, baseId);
    var compilation = this._compilations[c.index];
    if (c.compiling) return (compilation.callValidate = callValidate);

    var formats = this._formats;
    var RULES = this.RULES;

    try {
      var v = localCompile(schema, root, localRefs, baseId);
      compilation.validate = v;
      var cv = compilation.callValidate;
      if (cv) {
        cv.schema = v.schema;
        cv.errors = null;
        cv.refs = v.refs;
        cv.refVal = v.refVal;
        cv.root = v.root;
        cv.$async = v.$async;
        if (opts.sourceCode) cv.source = v.source;
      }
      return v;
    } finally {
      endCompiling$1.call(this, schema, root, baseId);
    }

    /* @this   {*} - custom context, see passContext option */
    function callValidate() {
      /* jshint validthis: true */
      var validate = compilation.validate;
      var result = validate.apply(this, arguments);
      callValidate.errors = validate.errors;
      return result;
    }

    function localCompile(_schema, _root, localRefs, baseId) {
      var isRoot = !_root || (_root && _root.schema == _schema);
      if (_root.schema != root.schema)
        return compile$3.call(self, _schema, _root, localRefs, baseId);

      var $async = _schema.$async === true;

      var sourceCode = validate$4({
        isTop: true,
        schema: _schema,
        isRoot: isRoot,
        baseId: baseId,
        root: _root,
        schemaPath: '',
        errSchemaPath: '#',
        errorPath: '""',
        MissingRefError: error_classes$1.MissingRef,
        RULES: RULES,
        validate: validate$4,
        util: util$1,
        resolve: resolve_1$1,
        resolveRef: resolveRef,
        usePattern: usePattern,
        useDefault: useDefault,
        useCustomRule: useCustomRule,
        opts: opts,
        formats: formats,
        logger: self.logger,
        self: self
      });

      sourceCode = vars$1(refVal, refValCode$1) + vars$1(patterns, patternCode$1)
                     + vars$1(defaults, defaultCode$1) + vars$1(customRules, customRuleCode$1)
                     + sourceCode;

      if (opts.processCode) sourceCode = opts.processCode(sourceCode, _schema);
      // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
      var validate;
      try {
        var makeValidate = new Function(
          'self',
          'RULES',
          'formats',
          'root',
          'refVal',
          'defaults',
          'customRules',
          'equal',
          'ucs2length',
          'ValidationError',
          sourceCode
        );

        validate = makeValidate(
          self,
          RULES,
          formats,
          root,
          refVal,
          defaults,
          customRules,
          fastDeepEqual$1,
          ucs2length$2,
          ValidationError$2
        );

        refVal[0] = validate;
      } catch(e) {
        self.logger.error('Error compiling schema, function code:', sourceCode);
        throw e;
      }

      validate.schema = _schema;
      validate.errors = null;
      validate.refs = refs;
      validate.refVal = refVal;
      validate.root = isRoot ? validate : _root;
      if ($async) validate.$async = true;
      if (opts.sourceCode === true) {
        validate.source = {
          code: sourceCode,
          patterns: patterns,
          defaults: defaults
        };
      }

      return validate;
    }

    function resolveRef(baseId, ref, isRoot) {
      ref = resolve_1$1.url(baseId, ref);
      var refIndex = refs[ref];
      var _refVal, refCode;
      if (refIndex !== undefined) {
        _refVal = refVal[refIndex];
        refCode = 'refVal[' + refIndex + ']';
        return resolvedRef(_refVal, refCode);
      }
      if (!isRoot && root.refs) {
        var rootRefId = root.refs[ref];
        if (rootRefId !== undefined) {
          _refVal = root.refVal[rootRefId];
          refCode = addLocalRef(ref, _refVal);
          return resolvedRef(_refVal, refCode);
        }
      }

      refCode = addLocalRef(ref);
      var v = resolve_1$1.call(self, localCompile, root, ref);
      if (v === undefined) {
        var localSchema = localRefs && localRefs[ref];
        if (localSchema) {
          v = resolve_1$1.inlineRef(localSchema, opts.inlineRefs)
              ? localSchema
              : compile$3.call(self, localSchema, root, localRefs, baseId);
        }
      }

      if (v === undefined) {
        removeLocalRef(ref);
      } else {
        replaceLocalRef(ref, v);
        return resolvedRef(v, refCode);
      }
    }

    function addLocalRef(ref, v) {
      var refId = refVal.length;
      refVal[refId] = v;
      refs[ref] = refId;
      return 'refVal' + refId;
    }

    function removeLocalRef(ref) {
      delete refs[ref];
    }

    function replaceLocalRef(ref, v) {
      var refId = refs[ref];
      refVal[refId] = v;
    }

    function resolvedRef(refVal, code) {
      return typeof refVal == 'object' || typeof refVal == 'boolean'
              ? { code: code, schema: refVal, inline: true }
              : { code: code, $async: refVal && !!refVal.$async };
    }

    function usePattern(regexStr) {
      var index = patternsHash[regexStr];
      if (index === undefined) {
        index = patternsHash[regexStr] = patterns.length;
        patterns[index] = regexStr;
      }
      return 'pattern' + index;
    }

    function useDefault(value) {
      switch (typeof value) {
        case 'boolean':
        case 'number':
          return '' + value;
        case 'string':
          return util$1.toQuotedString(value);
        case 'object':
          if (value === null) return 'null';
          var valueStr = fastJsonStableStringify$1(value);
          var index = defaultsHash[valueStr];
          if (index === undefined) {
            index = defaultsHash[valueStr] = defaults.length;
            defaults[index] = value;
          }
          return 'default' + index;
      }
    }

    function useCustomRule(rule, schema, parentSchema, it) {
      if (self._opts.validateSchema !== false) {
        var deps = rule.definition.dependencies;
        if (deps && !deps.every(function(keyword) {
          return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
        }))
          throw new Error('parent schema must have all required keywords: ' + deps.join(','));

        var validateSchema = rule.definition.validateSchema;
        if (validateSchema) {
          var valid = validateSchema(schema);
          if (!valid) {
            var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
            if (self._opts.validateSchema == 'log') self.logger.error(message);
            else throw new Error(message);
          }
        }
      }

      var compile = rule.definition.compile
        , inline = rule.definition.inline
        , macro = rule.definition.macro;

      var validate;
      if (compile) {
        validate = compile.call(self, schema, parentSchema, it);
      } else if (macro) {
        validate = macro.call(self, schema, parentSchema, it);
        if (opts.validateSchema !== false) self.validateSchema(validate, true);
      } else if (inline) {
        validate = inline.call(self, it, rule.keyword, schema, parentSchema);
      } else {
        validate = rule.definition.validate;
        if (!validate) return;
      }

      if (validate === undefined)
        throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

      var index = customRules.length;
      customRules[index] = validate;

      return {
        code: 'customRule' + index,
        validate: validate
      };
    }
  }


  /**
   * Checks if the schema is currently compiled
   * @this   Ajv
   * @param  {Object} schema schema to compile
   * @param  {Object} root root object
   * @param  {String} baseId base schema ID
   * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
   */
  function checkCompiling$1(schema, root, baseId) {
    /* jshint validthis: true */
    var index = compIndex$1.call(this, schema, root, baseId);
    if (index >= 0) return { index: index, compiling: true };
    index = this._compilations.length;
    this._compilations[index] = {
      schema: schema,
      root: root,
      baseId: baseId
    };
    return { index: index, compiling: false };
  }


  /**
   * Removes the schema from the currently compiled list
   * @this   Ajv
   * @param  {Object} schema schema to compile
   * @param  {Object} root root object
   * @param  {String} baseId base schema ID
   */
  function endCompiling$1(schema, root, baseId) {
    /* jshint validthis: true */
    var i = compIndex$1.call(this, schema, root, baseId);
    if (i >= 0) this._compilations.splice(i, 1);
  }


  /**
   * Index of schema compilation in the currently compiled list
   * @this   Ajv
   * @param  {Object} schema schema to compile
   * @param  {Object} root root object
   * @param  {String} baseId base schema ID
   * @return {Integer} compilation index
   */
  function compIndex$1(schema, root, baseId) {
    /* jshint validthis: true */
    for (var i=0; i<this._compilations.length; i++) {
      var c = this._compilations[i];
      if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
    }
    return -1;
  }


  function patternCode$1(i, patterns) {
    return 'var pattern' + i + ' = new RegExp(' + util$1.toQuotedString(patterns[i]) + ');';
  }


  function defaultCode$1(i) {
    return 'var default' + i + ' = defaults[' + i + '];';
  }


  function refValCode$1(i, refVal) {
    return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
  }


  function customRuleCode$1(i) {
    return 'var customRule' + i + ' = customRules[' + i + '];';
  }


  function vars$1(arr, statement) {
    if (!arr.length) return '';
    var code = '';
    for (var i=0; i<arr.length; i++)
      code += statement(i, arr);
    return code;
  }

  var cache$1 = createCommonjsModule(function (module) {


  var Cache = module.exports = function Cache() {
    this._cache = {};
  };


  Cache.prototype.put = function Cache_put(key, value) {
    this._cache[key] = value;
  };


  Cache.prototype.get = function Cache_get(key) {
    return this._cache[key];
  };


  Cache.prototype.del = function Cache_del(key) {
    delete this._cache[key];
  };


  Cache.prototype.clear = function Cache_clear() {
    this._cache = {};
  };
  });

  var DATE$1 = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
  var DAYS$1 = [0,31,28,31,30,31,30,31,31,30,31,30,31];
  var TIME$1 = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  var HOSTNAME$1 = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
  var URI$1 = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  var URIREF$1 = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  // uri-template: https://tools.ietf.org/html/rfc6570
  var URITEMPLATE$1 = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
  // For the source: https://gist.github.com/dperini/729294
  // For test cases: https://mathiasbynens.be/demo/url-regex
  // @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
  // var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
  var URL$2 = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
  var UUID$1 = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
  var JSON_POINTER$2 = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
  var JSON_POINTER_URI_FRAGMENT$1 = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
  var RELATIVE_JSON_POINTER$2 = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


  var formats_1$1 = formats$1;

  function formats$1(mode) {
    mode = mode == 'full' ? 'full' : 'fast';
    return util$1.copy(formats$1[mode]);
  }


  formats$1.fast = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    'uri-reference': /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    'uri-template': URITEMPLATE$1,
    url: URL$2,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    hostname: HOSTNAME$1,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: regex$1,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: UUID$1,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    'json-pointer': JSON_POINTER$2,
    'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT$1,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    'relative-json-pointer': RELATIVE_JSON_POINTER$2
  };


  formats$1.full = {
    date: date$1,
    time: time$1,
    'date-time': date_time$1,
    uri: uri$1,
    'uri-reference': URIREF$1,
    'uri-template': URITEMPLATE$1,
    url: URL$2,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: HOSTNAME$1,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: regex$1,
    uuid: UUID$1,
    'json-pointer': JSON_POINTER$2,
    'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT$1,
    'relative-json-pointer': RELATIVE_JSON_POINTER$2
  };


  function isLeapYear$1(year) {
    // https://tools.ietf.org/html/rfc3339#appendix-C
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }


  function date$1(str) {
    // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
    var matches = str.match(DATE$1);
    if (!matches) return false;

    var year = +matches[1];
    var month = +matches[2];
    var day = +matches[3];

    return month >= 1 && month <= 12 && day >= 1 &&
            day <= (month == 2 && isLeapYear$1(year) ? 29 : DAYS$1[month]);
  }


  function time$1(str, full) {
    var matches = str.match(TIME$1);
    if (!matches) return false;

    var hour = matches[1];
    var minute = matches[2];
    var second = matches[3];
    var timeZone = matches[5];
    return ((hour <= 23 && minute <= 59 && second <= 59) ||
            (hour == 23 && minute == 59 && second == 60)) &&
           (!full || timeZone);
  }


  var DATE_TIME_SEPARATOR$1 = /t|\s/i;
  function date_time$1(str) {
    // http://tools.ietf.org/html/rfc3339#section-5.6
    var dateTime = str.split(DATE_TIME_SEPARATOR$1);
    return dateTime.length == 2 && date$1(dateTime[0]) && time$1(dateTime[1], true);
  }


  var NOT_URI_FRAGMENT$1 = /\/|:/;
  function uri$1(str) {
    // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
    return NOT_URI_FRAGMENT$1.test(str) && URI$1.test(str);
  }


  var Z_ANCHOR$1 = /[^\\]\\Z/;
  function regex$1(str) {
    if (Z_ANCHOR$1.test(str)) return false;
    try {
      new RegExp(str);
      return true;
    } catch(e) {
      return false;
    }
  }

  var ref$1 = function generate_ref(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $async, $refCode;
    if ($schema == '#' || $schema == '#/') {
      if (it.isRoot) {
        $async = it.async;
        $refCode = 'validate';
      } else {
        $async = it.root.schema.$async === true;
        $refCode = 'root.refVal[0]';
      }
    } else {
      var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
      if ($refVal === undefined) {
        var $message = it.MissingRefError.message(it.baseId, $schema);
        if (it.opts.missingRefs == 'fail') {
          it.logger.error($message);
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          if ($breakOnError) {
            out += ' if (false) { ';
          }
        } else if (it.opts.missingRefs == 'ignore') {
          it.logger.warn($message);
          if ($breakOnError) {
            out += ' if (true) { ';
          }
        } else {
          throw new it.MissingRefError(it.baseId, $schema, $message);
        }
      } else if ($refVal.inline) {
        var $it = it.util.copy(it);
        $it.level++;
        var $nextValid = 'valid' + $it.level;
        $it.schema = $refVal.schema;
        $it.schemaPath = '';
        $it.errSchemaPath = $schema;
        var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
        out += ' ' + ($code) + ' ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
        }
      } else {
        $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
        $refCode = $refVal.code;
      }
    }
    if ($refCode) {
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      if (it.opts.passContext) {
        out += ' ' + ($refCode) + '.call(this, ';
      } else {
        out += ' ' + ($refCode) + '( ';
      }
      out += ' ' + ($data) + ', (dataPath || \'\')';
      if (it.errorPath != '""') {
        out += ' + ' + (it.errorPath);
      }
      var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
      out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
      var __callValidate = out;
      out = $$outStack.pop();
      if ($async) {
        if (!it.async) throw new Error('async schema referenced by sync schema');
        if ($breakOnError) {
          out += ' var ' + ($valid) + '; ';
        }
        out += ' try { await ' + (__callValidate) + '; ';
        if ($breakOnError) {
          out += ' ' + ($valid) + ' = true; ';
        }
        out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
        if ($breakOnError) {
          out += ' ' + ($valid) + ' = false; ';
        }
        out += ' } ';
        if ($breakOnError) {
          out += ' if (' + ($valid) + ') { ';
        }
      } else {
        out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
        if ($breakOnError) {
          out += ' else { ';
        }
      }
    }
    return out;
  };

  var allOf$1 = function generate_allOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $currentBaseId = $it.baseId,
      $allSchemasEmpty = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
          $allSchemasEmpty = false;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if ($breakOnError) {
      if ($allSchemasEmpty) {
        out += ' if (true) { ';
      } else {
        out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
      }
    }
    return out;
  };

  var anyOf$1 = function generate_anyOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $noEmptySchema = $schema.every(function($sch) {
      return (it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all));
    });
    if ($noEmptySchema) {
      var $currentBaseId = $it.baseId;
      out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
          $closingBraces += '}';
        }
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match some schema in anyOf\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
      if (it.opts.allErrors) {
        out += ' } ';
      }
    } else {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    }
    return out;
  };

  var comment$1 = function generate_comment(it, $keyword, $ruleType) {
    var out = ' ';
    var $schema = it.schema[$keyword];
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    !it.opts.allErrors;
    var $comment = it.util.toQuotedString($schema);
    if (it.opts.$comment === true) {
      out += ' console.log(' + ($comment) + ');';
    } else if (typeof it.opts.$comment == 'function') {
      out += ' self._opts.$comment(' + ($comment) + ', ' + (it.util.toQuotedString($errSchemaPath)) + ', validate.root.schema);';
    }
    return out;
  };

  var _const$1 = function generate_const(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    }
    if (!$isData) {
      out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
    }
    out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValue: schema' + ($lvl) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be equal to constant\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var contains$1 = function generate_contains(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $idx = 'i' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $currentBaseId = it.baseId,
      $nonEmptySchema = (it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all));
    out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
    if ($nonEmptySchema) {
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      out += ' if (' + ($nextValid) + ') break; }  ';
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
    } else {
      out += ' if (' + ($data) + '.length == 0) {';
    }
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should contain a valid item\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else { ';
    if ($nonEmptySchema) {
      out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    }
    if (it.opts.allErrors) {
      out += ' } ';
    }
    return out;
  };

  var dependencies$1 = function generate_dependencies(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $schemaDeps = {},
      $propertyDeps = {},
      $ownProperties = it.opts.ownProperties;
    for ($property in $schema) {
      if ($property == '__proto__') continue;
      var $sch = $schema[$property];
      var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
      $deps[$property] = $sch;
    }
    out += 'var ' + ($errs) + ' = errors;';
    var $currentErrorPath = it.errorPath;
    out += 'var missing' + ($lvl) + ';';
    for (var $property in $propertyDeps) {
      $deps = $propertyDeps[$property];
      if ($deps.length) {
        out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
        if ($ownProperties) {
          out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
        }
        if ($breakOnError) {
          out += ' && ( ';
          var arr1 = $deps;
          if (arr1) {
            var $propertyKey, $i = -1,
              l1 = arr1.length - 1;
            while ($i < l1) {
              $propertyKey = arr1[$i += 1];
              if ($i) {
                out += ' || ';
              }
              var $prop = it.util.getProperty($propertyKey),
                $useData = $data + $prop;
              out += ' ( ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
            }
          }
          out += ')) {  ';
          var $propertyPath = 'missing' + $lvl,
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should have ';
              if ($deps.length == 1) {
                out += 'property ' + (it.util.escapeQuotes($deps[0]));
              } else {
                out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
              }
              out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
        } else {
          out += ' ) { ';
          var arr2 = $deps;
          if (arr2) {
            var $propertyKey, i2 = -1,
              l2 = arr2.length - 1;
            while (i2 < l2) {
              $propertyKey = arr2[i2 += 1];
              var $prop = it.util.getProperty($propertyKey),
                $missingProperty = it.util.escapeQuotes($propertyKey),
                $useData = $data + $prop;
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              out += ' if ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') {  var err =   '; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should have ';
                  if ($deps.length == 1) {
                    out += 'property ' + (it.util.escapeQuotes($deps[0]));
                  } else {
                    out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
                  }
                  out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
            }
          }
        }
        out += ' }   ';
        if ($breakOnError) {
          $closingBraces += '}';
          out += ' else { ';
        }
      }
    }
    it.errorPath = $currentErrorPath;
    var $currentBaseId = $it.baseId;
    for (var $property in $schemaDeps) {
      var $sch = $schemaDeps[$property];
      if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
        out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
        if ($ownProperties) {
          out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
        }
        out += ') { ';
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + it.util.getProperty($property);
        $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' }  ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
    if ($breakOnError) {
      out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var _enum$1 = function generate_enum(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    }
    var $i = 'i' + $lvl,
      $vSchema = 'schema' + $lvl;
    if (!$isData) {
      out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
    }
    out += 'var ' + ($valid) + ';';
    if ($isData) {
      out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
    }
    out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
    if ($isData) {
      out += '  }  ';
    }
    out += ' if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be equal to one of the allowed values\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var format$1 = function generate_format(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    if (it.opts.format === false) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
      return out;
    }
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $unknownFormats = it.opts.unknownFormats,
      $allowUnknown = Array.isArray($unknownFormats);
    if ($isData) {
      var $format = 'format' + $lvl,
        $isObject = 'isObject' + $lvl,
        $formatType = 'formatType' + $lvl;
      out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
      if (it.async) {
        out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
      }
      out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
      }
      out += ' (';
      if ($unknownFormats != 'ignore') {
        out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
        if ($allowUnknown) {
          out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
        }
        out += ') || ';
      }
      out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
      if (it.async) {
        out += ' (async' + ($lvl) + ' ? await ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
      } else {
        out += ' ' + ($format) + '(' + ($data) + ') ';
      }
      out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
    } else {
      var $format = it.formats[$schema];
      if (!$format) {
        if ($unknownFormats == 'ignore') {
          it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
          if ($breakOnError) {
            out += ' if (true) { ';
          }
          return out;
        } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
          if ($breakOnError) {
            out += ' if (true) { ';
          }
          return out;
        } else {
          throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
        }
      }
      var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
      var $formatType = $isObject && $format.type || 'string';
      if ($isObject) {
        var $async = $format.async === true;
        $format = $format.validate;
      }
      if ($formatType != $ruleType) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      }
      if ($async) {
        if (!it.async) throw new Error('async format in sync schema');
        var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
        out += ' if (!(await ' + ($formatRef) + '(' + ($data) + '))) { ';
      } else {
        out += ' if (! ';
        var $formatRef = 'formats' + it.util.getProperty($schema);
        if ($isObject) $formatRef += '.validate';
        if (typeof $format == 'function') {
          out += ' ' + ($formatRef) + '(' + ($data) + ') ';
        } else {
          out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
        }
        out += ') { ';
      }
    }
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
      if ($isData) {
        out += '' + ($schemaValue);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '  } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match format "';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + (it.util.escapeQuotes($schema));
        }
        out += '"\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + (it.util.toQuotedString($schema));
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _if$1 = function generate_if(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $thenSch = it.schema['then'],
      $elseSch = it.schema['else'],
      $thenPresent = $thenSch !== undefined && (it.opts.strictKeywords ? (typeof $thenSch == 'object' && Object.keys($thenSch).length > 0) || $thenSch === false : it.util.schemaHasRules($thenSch, it.RULES.all)),
      $elsePresent = $elseSch !== undefined && (it.opts.strictKeywords ? (typeof $elseSch == 'object' && Object.keys($elseSch).length > 0) || $elseSch === false : it.util.schemaHasRules($elseSch, it.RULES.all)),
      $currentBaseId = $it.baseId;
    if ($thenPresent || $elsePresent) {
      var $ifClause;
      $it.createErrors = false;
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = true;  ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      $it.createErrors = true;
      out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }  ';
      it.compositeRule = $it.compositeRule = $wasComposite;
      if ($thenPresent) {
        out += ' if (' + ($nextValid) + ') {  ';
        $it.schema = it.schema['then'];
        $it.schemaPath = it.schemaPath + '.then';
        $it.errSchemaPath = it.errSchemaPath + '/then';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
        if ($thenPresent && $elsePresent) {
          $ifClause = 'ifClause' + $lvl;
          out += ' var ' + ($ifClause) + ' = \'then\'; ';
        } else {
          $ifClause = '\'then\'';
        }
        out += ' } ';
        if ($elsePresent) {
          out += ' else { ';
        }
      } else {
        out += ' if (!' + ($nextValid) + ') { ';
      }
      if ($elsePresent) {
        $it.schema = it.schema['else'];
        $it.schemaPath = it.schemaPath + '.else';
        $it.errSchemaPath = it.errSchemaPath + '/else';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
        if ($thenPresent && $elsePresent) {
          $ifClause = 'ifClause' + $lvl;
          out += ' var ' + ($ifClause) + ' = \'else\'; ';
        } else {
          $ifClause = '\'else\'';
        }
        out += ' } ';
      }
      out += ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('if') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { failingKeyword: ' + ($ifClause) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match "\' + ' + ($ifClause) + ' + \'" schema\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      out += ' }   ';
      if ($breakOnError) {
        out += ' else { ';
      }
    } else {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    }
    return out;
  };

  var items$1 = function generate_items(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $idx = 'i' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $currentBaseId = it.baseId;
    out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
    if (Array.isArray($schema)) {
      var $additionalItems = it.schema.additionalItems;
      if ($additionalItems === false) {
        out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
        var $currErrSchemaPath = $errSchemaPath;
        $errSchemaPath = it.errSchemaPath + '/additionalItems';
        out += '  if (!' + ($valid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } ';
        $errSchemaPath = $currErrSchemaPath;
        if ($breakOnError) {
          $closingBraces += '}';
          out += ' else { ';
        }
      }
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
            out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
            var $passData = $data + '[' + $i + ']';
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + '[' + $i + ']';
            $it.errSchemaPath = $errSchemaPath + '/' + $i;
            $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
            $it.dataPathArr[$dataNxt] = $i;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            out += ' }  ';
            if ($breakOnError) {
              out += ' if (' + ($nextValid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
      if (typeof $additionalItems == 'object' && (it.opts.strictKeywords ? (typeof $additionalItems == 'object' && Object.keys($additionalItems).length > 0) || $additionalItems === false : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
        $it.schema = $additionalItems;
        $it.schemaPath = it.schemaPath + '.additionalItems';
        $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
        out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + '[' + $idx + ']';
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
        } else {
          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
        }
        if ($breakOnError) {
          out += ' if (!' + ($nextValid) + ') break; ';
        }
        out += ' } }  ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    } else if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      if ($breakOnError) {
        out += ' if (!' + ($nextValid) + ') break; ';
      }
      out += ' }';
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var _limit$1 = function generate__limit(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $isMax = $keyword == 'maximum',
      $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
      $schemaExcl = it.schema[$exclusiveKeyword],
      $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
      $op = $isMax ? '<' : '>',
      $notOp = $isMax ? '>' : '<',
      $errorKeyword = undefined;
    if (!($isData || typeof $schema == 'number' || $schema === undefined)) {
      throw new Error($keyword + ' must be number');
    }
    if (!($isDataExcl || $schemaExcl === undefined || typeof $schemaExcl == 'number' || typeof $schemaExcl == 'boolean')) {
      throw new Error($exclusiveKeyword + ' must be number or boolean');
    }
    if ($isDataExcl) {
      var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
        $exclusive = 'exclusive' + $lvl,
        $exclType = 'exclType' + $lvl,
        $exclIsNumber = 'exclIsNumber' + $lvl,
        $opExpr = 'op' + $lvl,
        $opStr = '\' + ' + $opExpr + ' + \'';
      out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
      $schemaValueExcl = 'schemaExcl' + $lvl;
      out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
      var $errorKeyword = $exclusiveKeyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } else if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\'; ';
      if ($schema === undefined) {
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
        $schemaValue = $schemaValueExcl;
        $isData = $isDataExcl;
      }
    } else {
      var $exclIsNumber = typeof $schemaExcl == 'number',
        $opStr = $op;
      if ($exclIsNumber && $isData) {
        var $opExpr = '\'' + $opStr + '\'';
        out += ' if ( ';
        if ($isData) {
          out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
        }
        out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
      } else {
        if ($exclIsNumber && $schema === undefined) {
          $exclusive = true;
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
          $schemaValue = $schemaExcl;
          $notOp += '=';
        } else {
          if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
          if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
            $exclusive = true;
            $errorKeyword = $exclusiveKeyword;
            $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
            $notOp += '=';
          } else {
            $exclusive = false;
            $opStr += '=';
          }
        }
        var $opExpr = '\'' + $opStr + '\'';
        out += ' if ( ';
        if ($isData) {
          out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
        }
        out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
      }
    }
    $errorKeyword = $errorKeyword || $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be ' + ($opStr) + ' ';
        if ($isData) {
          out += '\' + ' + ($schemaValue);
        } else {
          out += '' + ($schemaValue) + '\'';
        }
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _limitItems$1 = function generate__limitItems(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    var $op = $keyword == 'maxItems' ? '>' : '<';
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
    var $errorKeyword = $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have ';
        if ($keyword == 'maxItems') {
          out += 'more';
        } else {
          out += 'fewer';
        }
        out += ' than ';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + ($schema);
        }
        out += ' items\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _limitLength$1 = function generate__limitLength(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    var $op = $keyword == 'maxLength' ? '>' : '<';
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    if (it.opts.unicode === false) {
      out += ' ' + ($data) + '.length ';
    } else {
      out += ' ucs2length(' + ($data) + ') ';
    }
    out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
    var $errorKeyword = $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be ';
        if ($keyword == 'maxLength') {
          out += 'longer';
        } else {
          out += 'shorter';
        }
        out += ' than ';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + ($schema);
        }
        out += ' characters\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _limitProperties$1 = function generate__limitProperties(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    var $op = $keyword == 'maxProperties' ? '>' : '<';
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
    var $errorKeyword = $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have ';
        if ($keyword == 'maxProperties') {
          out += 'more';
        } else {
          out += 'fewer';
        }
        out += ' than ';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + ($schema);
        }
        out += ' properties\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var multipleOf$1 = function generate_multipleOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    out += 'var division' + ($lvl) + ';if (';
    if ($isData) {
      out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
    }
    out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
    if (it.opts.multipleOfPrecision) {
      out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
    } else {
      out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
    }
    out += ' ) ';
    if ($isData) {
      out += '  )  ';
    }
    out += ' ) {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be multiple of ';
        if ($isData) {
          out += '\' + ' + ($schemaValue);
        } else {
          out += '' + ($schemaValue) + '\'';
        }
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var not$1 = function generate_not(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += ' var ' + ($errs) + ' = errors;  ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      $it.createErrors = false;
      var $allErrorsOption;
      if ($it.opts.allErrors) {
        $allErrorsOption = $it.opts.allErrors;
        $it.opts.allErrors = false;
      }
      out += ' ' + (it.validate($it)) + ' ';
      $it.createErrors = true;
      if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' if (' + ($nextValid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT be valid\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
      if (it.opts.allErrors) {
        out += ' } ';
      }
    } else {
      out += '  var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT be valid\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if ($breakOnError) {
        out += ' if (false) { ';
      }
    }
    return out;
  };

  var oneOf$1 = function generate_oneOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $currentBaseId = $it.baseId,
      $prevValid = 'prevValid' + $lvl,
      $passingSchemas = 'passingSchemas' + $lvl;
    out += 'var ' + ($errs) + ' = errors , ' + ($prevValid) + ' = false , ' + ($valid) + ' = false , ' + ($passingSchemas) + ' = null; ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        } else {
          out += ' var ' + ($nextValid) + ' = true; ';
        }
        if ($i) {
          out += ' if (' + ($nextValid) + ' && ' + ($prevValid) + ') { ' + ($valid) + ' = false; ' + ($passingSchemas) + ' = [' + ($passingSchemas) + ', ' + ($i) + ']; } else { ';
          $closingBraces += '}';
        }
        out += ' if (' + ($nextValid) + ') { ' + ($valid) + ' = ' + ($prevValid) + ' = true; ' + ($passingSchemas) + ' = ' + ($i) + '; }';
      }
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { passingSchemas: ' + ($passingSchemas) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match exactly one schema in oneOf\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
    if (it.opts.allErrors) {
      out += ' } ';
    }
    return out;
  };

  var pattern$1 = function generate_pattern(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
    }
    out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
      if ($isData) {
        out += '' + ($schemaValue);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '  } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match pattern "';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + (it.util.escapeQuotes($schema));
        }
        out += '"\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + (it.util.toQuotedString($schema));
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var properties$5 = function generate_properties(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $key = 'key' + $lvl,
      $idx = 'idx' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $dataProperties = 'dataProperties' + $lvl;
    var $schemaKeys = Object.keys($schema || {}).filter(notProto),
      $pProperties = it.schema.patternProperties || {},
      $pPropertyKeys = Object.keys($pProperties).filter(notProto),
      $aProperties = it.schema.additionalProperties,
      $someProperties = $schemaKeys.length || $pPropertyKeys.length,
      $noAdditional = $aProperties === false,
      $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
      $removeAdditional = it.opts.removeAdditional,
      $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
      $ownProperties = it.opts.ownProperties,
      $currentBaseId = it.baseId;
    var $required = it.schema.required;
    if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) {
      var $requiredHash = it.util.toHash($required);
    }

    function notProto(p) {
      return p !== '__proto__';
    }
    out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
    if ($ownProperties) {
      out += ' var ' + ($dataProperties) + ' = undefined;';
    }
    if ($checkAdditional) {
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      if ($someProperties) {
        out += ' var isAdditional' + ($lvl) + ' = !(false ';
        if ($schemaKeys.length) {
          if ($schemaKeys.length > 8) {
            out += ' || validate.schema' + ($schemaPath) + '.hasOwnProperty(' + ($key) + ') ';
          } else {
            var arr1 = $schemaKeys;
            if (arr1) {
              var $propertyKey, i1 = -1,
                l1 = arr1.length - 1;
              while (i1 < l1) {
                $propertyKey = arr1[i1 += 1];
                out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
              }
            }
          }
        }
        if ($pPropertyKeys.length) {
          var arr2 = $pPropertyKeys;
          if (arr2) {
            var $pProperty, $i = -1,
              l2 = arr2.length - 1;
            while ($i < l2) {
              $pProperty = arr2[$i += 1];
              out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
            }
          }
        }
        out += ' ); if (isAdditional' + ($lvl) + ') { ';
      }
      if ($removeAdditional == 'all') {
        out += ' delete ' + ($data) + '[' + ($key) + ']; ';
      } else {
        var $currentErrorPath = it.errorPath;
        var $additionalProperty = '\' + ' + $key + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
        }
        if ($noAdditional) {
          if ($removeAdditional) {
            out += ' delete ' + ($data) + '[' + ($key) + ']; ';
          } else {
            out += ' ' + ($nextValid) + ' = false; ';
            var $currErrSchemaPath = $errSchemaPath;
            $errSchemaPath = it.errSchemaPath + '/additionalProperties';
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is an invalid additional property';
                } else {
                  out += 'should NOT have additional properties';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            $errSchemaPath = $currErrSchemaPath;
            if ($breakOnError) {
              out += ' break; ';
            }
          }
        } else if ($additionalIsSchema) {
          if ($removeAdditional == 'failing') {
            out += ' var ' + ($errs) + ' = errors;  ';
            var $wasComposite = it.compositeRule;
            it.compositeRule = $it.compositeRule = true;
            $it.schema = $aProperties;
            $it.schemaPath = it.schemaPath + '.additionalProperties';
            $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
            $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
            it.compositeRule = $it.compositeRule = $wasComposite;
          } else {
            $it.schema = $aProperties;
            $it.schemaPath = it.schemaPath + '.additionalProperties';
            $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
            $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            if ($breakOnError) {
              out += ' if (!' + ($nextValid) + ') break; ';
            }
          }
        }
        it.errorPath = $currentErrorPath;
      }
      if ($someProperties) {
        out += ' } ';
      }
      out += ' }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
    var $useDefaults = it.opts.useDefaults && !it.compositeRule;
    if ($schemaKeys.length) {
      var arr3 = $schemaKeys;
      if (arr3) {
        var $propertyKey, i3 = -1,
          l3 = arr3.length - 1;
        while (i3 < l3) {
          $propertyKey = arr3[i3 += 1];
          var $sch = $schema[$propertyKey];
          if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
            var $prop = it.util.getProperty($propertyKey),
              $passData = $data + $prop,
              $hasDefault = $useDefaults && $sch.default !== undefined;
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + $prop;
            $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
            $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
            $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              $code = it.util.varReplace($code, $nextData, $passData);
              var $useData = $passData;
            } else {
              var $useData = $nextData;
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
            }
            if ($hasDefault) {
              out += ' ' + ($code) + ' ';
            } else {
              if ($requiredHash && $requiredHash[$propertyKey]) {
                out += ' if ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') { ' + ($nextValid) + ' = false; ';
                var $currentErrorPath = it.errorPath,
                  $currErrSchemaPath = $errSchemaPath,
                  $missingProperty = it.util.escapeQuotes($propertyKey);
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                $errSchemaPath = it.errSchemaPath + '/required';
                var $$outStack = $$outStack || [];
                $$outStack.push(out);
                out = ''; /* istanbul ignore else */
                if (it.createErrors !== false) {
                  out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                  if (it.opts.messages !== false) {
                    out += ' , message: \'';
                    if (it.opts._errorDataPathProperty) {
                      out += 'is a required property';
                    } else {
                      out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                    }
                    out += '\' ';
                  }
                  if (it.opts.verbose) {
                    out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                  }
                  out += ' } ';
                } else {
                  out += ' {} ';
                }
                var __err = out;
                out = $$outStack.pop();
                if (!it.compositeRule && $breakOnError) {
                  /* istanbul ignore if */
                  if (it.async) {
                    out += ' throw new ValidationError([' + (__err) + ']); ';
                  } else {
                    out += ' validate.errors = [' + (__err) + ']; return false; ';
                  }
                } else {
                  out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
                $errSchemaPath = $currErrSchemaPath;
                it.errorPath = $currentErrorPath;
                out += ' } else { ';
              } else {
                if ($breakOnError) {
                  out += ' if ( ' + ($useData) + ' === undefined ';
                  if ($ownProperties) {
                    out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                  }
                  out += ') { ' + ($nextValid) + ' = true; } else { ';
                } else {
                  out += ' if (' + ($useData) + ' !== undefined ';
                  if ($ownProperties) {
                    out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                  }
                  out += ' ) { ';
                }
              }
              out += ' ' + ($code) + ' } ';
            }
          }
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if ($pPropertyKeys.length) {
      var arr4 = $pPropertyKeys;
      if (arr4) {
        var $pProperty, i4 = -1,
          l4 = arr4.length - 1;
        while (i4 < l4) {
          $pProperty = arr4[i4 += 1];
          var $sch = $pProperties[$pProperty];
          if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
            $it.schema = $sch;
            $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
            $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
            if ($ownProperties) {
              out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
            } else {
              out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
            }
            out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
            $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            if ($breakOnError) {
              out += ' if (!' + ($nextValid) + ') break; ';
            }
            out += ' } ';
            if ($breakOnError) {
              out += ' else ' + ($nextValid) + ' = true; ';
            }
            out += ' }  ';
            if ($breakOnError) {
              out += ' if (' + ($nextValid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var propertyNames$1 = function generate_propertyNames(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    out += 'var ' + ($errs) + ' = errors;';
    if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      var $key = 'key' + $lvl,
        $idx = 'idx' + $lvl,
        $i = 'i' + $lvl,
        $invalidName = '\' + ' + $key + ' + \'',
        $dataNxt = $it.dataLevel = it.dataLevel + 1,
        $nextData = 'data' + $dataNxt,
        $dataProperties = 'dataProperties' + $lvl,
        $ownProperties = it.opts.ownProperties,
        $currentBaseId = it.baseId;
      if ($ownProperties) {
        out += ' var ' + ($dataProperties) + ' = undefined; ';
      }
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      out += ' var startErrs' + ($lvl) + ' = errors; ';
      var $passData = $key;
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      if ($breakOnError) {
        out += ' break; ';
      }
      out += ' } }';
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var required$3 = function generate_required(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    }
    var $vSchema = 'schema' + $lvl;
    if (!$isData) {
      if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
        var $required = [];
        var arr1 = $schema;
        if (arr1) {
          var $property, i1 = -1,
            l1 = arr1.length - 1;
          while (i1 < l1) {
            $property = arr1[i1 += 1];
            var $propertySch = it.schema.properties[$property];
            if (!($propertySch && (it.opts.strictKeywords ? (typeof $propertySch == 'object' && Object.keys($propertySch).length > 0) || $propertySch === false : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
              $required[$required.length] = $property;
            }
          }
        }
      } else {
        var $required = $schema;
      }
    }
    if ($isData || $required.length) {
      var $currentErrorPath = it.errorPath,
        $loopRequired = $isData || $required.length >= it.opts.loopRequired,
        $ownProperties = it.opts.ownProperties;
      if ($breakOnError) {
        out += ' var missing' + ($lvl) + '; ';
        if ($loopRequired) {
          if (!$isData) {
            out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
          }
          var $i = 'i' + $lvl,
            $propertyPath = 'schema' + $lvl + '[' + $i + ']',
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
          }
          out += ' var ' + ($valid) + ' = true; ';
          if ($isData) {
            out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
          }
          out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
          if ($ownProperties) {
            out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
          }
          out += '; if (!' + ($valid) + ') break; } ';
          if ($isData) {
            out += '  }  ';
          }
          out += '  if (!' + ($valid) + ') {   ';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } else { ';
        } else {
          out += ' if ( ';
          var arr2 = $required;
          if (arr2) {
            var $propertyKey, $i = -1,
              l2 = arr2.length - 1;
            while ($i < l2) {
              $propertyKey = arr2[$i += 1];
              if ($i) {
                out += ' || ';
              }
              var $prop = it.util.getProperty($propertyKey),
                $useData = $data + $prop;
              out += ' ( ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
            }
          }
          out += ') {  ';
          var $propertyPath = 'missing' + $lvl,
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } else { ';
        }
      } else {
        if ($loopRequired) {
          if (!$isData) {
            out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
          }
          var $i = 'i' + $lvl,
            $propertyPath = 'schema' + $lvl + '[' + $i + ']',
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
          }
          if ($isData) {
            out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
          }
          out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
          if ($ownProperties) {
            out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
          }
          out += ') {  var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
          if ($isData) {
            out += '  }  ';
          }
        } else {
          var arr3 = $required;
          if (arr3) {
            var $propertyKey, i3 = -1,
              l3 = arr3.length - 1;
            while (i3 < l3) {
              $propertyKey = arr3[i3 += 1];
              var $prop = it.util.getProperty($propertyKey),
                $missingProperty = it.util.escapeQuotes($propertyKey),
                $useData = $data + $prop;
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              out += ' if ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') {  var err =   '; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
            }
          }
        }
      }
      it.errorPath = $currentErrorPath;
    } else if ($breakOnError) {
      out += ' if (true) {';
    }
    return out;
  };

  var uniqueItems$1 = function generate_uniqueItems(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (($schema || $isData) && it.opts.uniqueItems !== false) {
      if ($isData) {
        out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
      }
      out += ' var i = ' + ($data) + '.length , ' + ($valid) + ' = true , j; if (i > 1) { ';
      var $itemType = it.schema.items && it.schema.items.type,
        $typeIsArray = Array.isArray($itemType);
      if (!$itemType || $itemType == 'object' || $itemType == 'array' || ($typeIsArray && ($itemType.indexOf('object') >= 0 || $itemType.indexOf('array') >= 0))) {
        out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } ';
      } else {
        out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + ($data) + '[i]; ';
        var $method = 'checkDataType' + ($typeIsArray ? 's' : '');
        out += ' if (' + (it.util[$method]($itemType, 'item', it.opts.strictNumbers, true)) + ') continue; ';
        if ($typeIsArray) {
          out += ' if (typeof item == \'string\') item = \'"\' + item; ';
        }
        out += ' if (typeof itemIndices[item] == \'number\') { ' + ($valid) + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
      }
      out += ' } ';
      if ($isData) {
        out += '  }  ';
      }
      out += ' if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    } else {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    }
    return out;
  };

  //all requires must be explicit because browserify won't work with dynamic requires
  var dotjs$1 = {
    '$ref': ref$1,
    allOf: allOf$1,
    anyOf: anyOf$1,
    '$comment': comment$1,
    const: _const$1,
    contains: contains$1,
    dependencies: dependencies$1,
    'enum': _enum$1,
    format: format$1,
    'if': _if$1,
    items: items$1,
    maximum: _limit$1,
    minimum: _limit$1,
    maxItems: _limitItems$1,
    minItems: _limitItems$1,
    maxLength: _limitLength$1,
    minLength: _limitLength$1,
    maxProperties: _limitProperties$1,
    minProperties: _limitProperties$1,
    multipleOf: multipleOf$1,
    not: not$1,
    oneOf: oneOf$1,
    pattern: pattern$1,
    properties: properties$5,
    propertyNames: propertyNames$1,
    required: required$3,
    uniqueItems: uniqueItems$1,
    validate: validate$4
  };

  var toHash$2 = util$1.toHash;

  var rules$1 = function rules() {
    var RULES = [
      { type: 'number',
        rules: [ { 'maximum': ['exclusiveMaximum'] },
                 { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
      { type: 'string',
        rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
      { type: 'array',
        rules: [ 'maxItems', 'minItems', 'items', 'contains', 'uniqueItems' ] },
      { type: 'object',
        rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
                 { 'properties': ['additionalProperties', 'patternProperties'] } ] },
      { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if' ] }
    ];

    var ALL = [ 'type', '$comment' ];
    var KEYWORDS = [
      '$schema', '$id', 'id', '$data', '$async', 'title',
      'description', 'default', 'definitions',
      'examples', 'readOnly', 'writeOnly',
      'contentMediaType', 'contentEncoding',
      'additionalItems', 'then', 'else'
    ];
    var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
    RULES.all = toHash$2(ALL);
    RULES.types = toHash$2(TYPES);

    RULES.forEach(function (group) {
      group.rules = group.rules.map(function (keyword) {
        var implKeywords;
        if (typeof keyword == 'object') {
          var key = Object.keys(keyword)[0];
          implKeywords = keyword[key];
          keyword = key;
          implKeywords.forEach(function (k) {
            ALL.push(k);
            RULES.all[k] = true;
          });
        }
        ALL.push(keyword);
        var rule = RULES.all[keyword] = {
          keyword: keyword,
          code: dotjs$1[keyword],
          implements: implKeywords
        };
        return rule;
      });

      RULES.all.$comment = {
        keyword: '$comment',
        code: dotjs$1.$comment
      };

      if (group.type) RULES.types[group.type] = group;
    });

    RULES.keywords = toHash$2(ALL.concat(KEYWORDS));
    RULES.custom = {};

    return RULES;
  };

  var KEYWORDS$1 = [
    'multipleOf',
    'maximum',
    'exclusiveMaximum',
    'minimum',
    'exclusiveMinimum',
    'maxLength',
    'minLength',
    'pattern',
    'additionalItems',
    'maxItems',
    'minItems',
    'uniqueItems',
    'maxProperties',
    'minProperties',
    'required',
    'additionalProperties',
    'enum',
    'format',
    'const'
  ];

  var data$5 = function (metaSchema, keywordsJsonPointers) {
    for (var i=0; i<keywordsJsonPointers.length; i++) {
      metaSchema = JSON.parse(JSON.stringify(metaSchema));
      var segments = keywordsJsonPointers[i].split('/');
      var keywords = metaSchema;
      var j;
      for (j=1; j<segments.length; j++)
        keywords = keywords[segments[j]];

      for (j=0; j<KEYWORDS$1.length; j++) {
        var key = KEYWORDS$1[j];
        var schema = keywords[key];
        if (schema) {
          keywords[key] = {
            anyOf: [
              schema,
              { $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#' }
            ]
          };
        }
      }
    }

    return metaSchema;
  };

  var MissingRefError$2 = error_classes$1.MissingRef;

  var async$1 = compileAsync$1;


  /**
   * Creates validating function for passed schema with asynchronous loading of missing schemas.
   * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
   * @this  Ajv
   * @param {Object}   schema schema object
   * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
   * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
   * @return {Promise} promise that resolves with a validating function.
   */
  function compileAsync$1(schema, meta, callback) {
    /* eslint no-shadow: 0 */
    /* global Promise */
    /* jshint validthis: true */
    var self = this;
    if (typeof this._opts.loadSchema != 'function')
      throw new Error('options.loadSchema should be a function');

    if (typeof meta == 'function') {
      callback = meta;
      meta = undefined;
    }

    var p = loadMetaSchemaOf(schema).then(function () {
      var schemaObj = self._addSchema(schema, undefined, meta);
      return schemaObj.validate || _compileAsync(schemaObj);
    });

    if (callback) {
      p.then(
        function(v) { callback(null, v); },
        callback
      );
    }

    return p;


    function loadMetaSchemaOf(sch) {
      var $schema = sch.$schema;
      return $schema && !self.getSchema($schema)
              ? compileAsync$1.call(self, { $ref: $schema }, true)
              : Promise.resolve();
    }


    function _compileAsync(schemaObj) {
      try { return self._compile(schemaObj); }
      catch(e) {
        if (e instanceof MissingRefError$2) return loadMissingSchema(e);
        throw e;
      }


      function loadMissingSchema(e) {
        var ref = e.missingSchema;
        if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

        var schemaPromise = self._loadingSchemas[ref];
        if (!schemaPromise) {
          schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
          schemaPromise.then(removePromise, removePromise);
        }

        return schemaPromise.then(function (sch) {
          if (!added(ref)) {
            return loadMetaSchemaOf(sch).then(function () {
              if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
            });
          }
        }).then(function() {
          return _compileAsync(schemaObj);
        });

        function removePromise() {
          delete self._loadingSchemas[ref];
        }

        function added(ref) {
          return self._refs[ref] || self._schemas[ref];
        }
      }
    }
  }

  var custom$1 = function generate_custom(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $rule = this,
      $definition = 'definition' + $lvl,
      $rDef = $rule.definition,
      $closingBraces = '';
    var $compile, $inline, $macro, $ruleValidate, $validateCode;
    if ($isData && $rDef.$data) {
      $validateCode = 'keywordValidate' + $lvl;
      var $validateSchema = $rDef.validateSchema;
      out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
    } else {
      $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
      if (!$ruleValidate) return;
      $schemaValue = 'validate.schema' + $schemaPath;
      $validateCode = $ruleValidate.code;
      $compile = $rDef.compile;
      $inline = $rDef.inline;
      $macro = $rDef.macro;
    }
    var $ruleErrs = $validateCode + '.errors',
      $i = 'i' + $lvl,
      $ruleErr = 'ruleErr' + $lvl,
      $asyncKeyword = $rDef.async;
    if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
    if (!($inline || $macro)) {
      out += '' + ($ruleErrs) + ' = null;';
    }
    out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
    if ($isData && $rDef.$data) {
      $closingBraces += '}';
      out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
      if ($validateSchema) {
        $closingBraces += '}';
        out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
      }
    }
    if ($inline) {
      if ($rDef.statements) {
        out += ' ' + ($ruleValidate.validate) + ' ';
      } else {
        out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
      }
    } else if ($macro) {
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      $it.schema = $ruleValidate.validate;
      $it.schemaPath = '';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' ' + ($code);
    } else {
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      out += '  ' + ($validateCode) + '.call( ';
      if (it.opts.passContext) {
        out += 'this';
      } else {
        out += 'self';
      }
      if ($compile || $rDef.schema === false) {
        out += ' , ' + ($data) + ' ';
      } else {
        out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
      }
      out += ' , (dataPath || \'\')';
      if (it.errorPath != '""') {
        out += ' + ' + (it.errorPath);
      }
      var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
      out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
      var def_callRuleValidate = out;
      out = $$outStack.pop();
      if ($rDef.errors === false) {
        out += ' ' + ($valid) + ' = ';
        if ($asyncKeyword) {
          out += 'await ';
        }
        out += '' + (def_callRuleValidate) + '; ';
      } else {
        if ($asyncKeyword) {
          $ruleErrs = 'customErrors' + $lvl;
          out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = await ' + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
        } else {
          out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
        }
      }
    }
    if ($rDef.modifying) {
      out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
    }
    out += '' + ($closingBraces);
    if ($rDef.valid) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    } else {
      out += ' if ( ';
      if ($rDef.valid === undefined) {
        out += ' !';
        if ($macro) {
          out += '' + ($nextValid);
        } else {
          out += '' + ($valid);
        }
      } else {
        out += ' ' + (!$rDef.valid) + ' ';
      }
      out += ') { ';
      $errorKeyword = $rule.keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      var def_customError = out;
      out = $$outStack.pop();
      if ($inline) {
        if ($rDef.errors) {
          if ($rDef.errors != 'full') {
            out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
            if (it.opts.verbose) {
              out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
            }
            out += ' } ';
          }
        } else {
          if ($rDef.errors === false) {
            out += ' ' + (def_customError) + ' ';
          } else {
            out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
            if (it.opts.verbose) {
              out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
            }
            out += ' } } ';
          }
        }
      } else if ($macro) {
        out += '   var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError(vErrors); ';
          } else {
            out += ' validate.errors = vErrors; return false; ';
          }
        }
      } else {
        if ($rDef.errors === false) {
          out += ' ' + (def_customError) + ' ';
        } else {
          out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } } else { ' + (def_customError) + ' } ';
        }
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    }
    return out;
  };

  var $schema$3 = "http://json-schema.org/draft-07/schema#";
  var $id$3 = "http://json-schema.org/draft-07/schema#";
  var title$1 = "Core schema meta-schema";
  var definitions$1 = {
  	schemaArray: {
  		type: "array",
  		minItems: 1,
  		items: {
  			$ref: "#"
  		}
  	},
  	nonNegativeInteger: {
  		type: "integer",
  		minimum: 0
  	},
  	nonNegativeIntegerDefault0: {
  		allOf: [
  			{
  				$ref: "#/definitions/nonNegativeInteger"
  			},
  			{
  				"default": 0
  			}
  		]
  	},
  	simpleTypes: {
  		"enum": [
  			"array",
  			"boolean",
  			"integer",
  			"null",
  			"number",
  			"object",
  			"string"
  		]
  	},
  	stringArray: {
  		type: "array",
  		items: {
  			type: "string"
  		},
  		uniqueItems: true,
  		"default": [
  		]
  	}
  };
  var type$3 = [
  	"object",
  	"boolean"
  ];
  var properties$4 = {
  	$id: {
  		type: "string",
  		format: "uri-reference"
  	},
  	$schema: {
  		type: "string",
  		format: "uri"
  	},
  	$ref: {
  		type: "string",
  		format: "uri-reference"
  	},
  	$comment: {
  		type: "string"
  	},
  	title: {
  		type: "string"
  	},
  	description: {
  		type: "string"
  	},
  	"default": true,
  	readOnly: {
  		type: "boolean",
  		"default": false
  	},
  	examples: {
  		type: "array",
  		items: true
  	},
  	multipleOf: {
  		type: "number",
  		exclusiveMinimum: 0
  	},
  	maximum: {
  		type: "number"
  	},
  	exclusiveMaximum: {
  		type: "number"
  	},
  	minimum: {
  		type: "number"
  	},
  	exclusiveMinimum: {
  		type: "number"
  	},
  	maxLength: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minLength: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	pattern: {
  		type: "string",
  		format: "regex"
  	},
  	additionalItems: {
  		$ref: "#"
  	},
  	items: {
  		anyOf: [
  			{
  				$ref: "#"
  			},
  			{
  				$ref: "#/definitions/schemaArray"
  			}
  		],
  		"default": true
  	},
  	maxItems: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minItems: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	uniqueItems: {
  		type: "boolean",
  		"default": false
  	},
  	contains: {
  		$ref: "#"
  	},
  	maxProperties: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minProperties: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	required: {
  		$ref: "#/definitions/stringArray"
  	},
  	additionalProperties: {
  		$ref: "#"
  	},
  	definitions: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		"default": {
  		}
  	},
  	properties: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		"default": {
  		}
  	},
  	patternProperties: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		propertyNames: {
  			format: "regex"
  		},
  		"default": {
  		}
  	},
  	dependencies: {
  		type: "object",
  		additionalProperties: {
  			anyOf: [
  				{
  					$ref: "#"
  				},
  				{
  					$ref: "#/definitions/stringArray"
  				}
  			]
  		}
  	},
  	propertyNames: {
  		$ref: "#"
  	},
  	"const": true,
  	"enum": {
  		type: "array",
  		items: true,
  		minItems: 1,
  		uniqueItems: true
  	},
  	type: {
  		anyOf: [
  			{
  				$ref: "#/definitions/simpleTypes"
  			},
  			{
  				type: "array",
  				items: {
  					$ref: "#/definitions/simpleTypes"
  				},
  				minItems: 1,
  				uniqueItems: true
  			}
  		]
  	},
  	format: {
  		type: "string"
  	},
  	contentMediaType: {
  		type: "string"
  	},
  	contentEncoding: {
  		type: "string"
  	},
  	"if": {
  		$ref: "#"
  	},
  	then: {
  		$ref: "#"
  	},
  	"else": {
  		$ref: "#"
  	},
  	allOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	anyOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	oneOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	not: {
  		$ref: "#"
  	}
  };
  var jsonSchemaDraft07$2 = {
  	$schema: $schema$3,
  	$id: $id$3,
  	title: title$1,
  	definitions: definitions$1,
  	type: type$3,
  	properties: properties$4,
  	"default": true
  };

  var jsonSchemaDraft07$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $schema: $schema$3,
    $id: $id$3,
    title: title$1,
    definitions: definitions$1,
    type: type$3,
    properties: properties$4,
    'default': jsonSchemaDraft07$2
  });

  var require$$2$1 = getCjsExportFromNamespace(jsonSchemaDraft07$3);

  var definition_schema$1 = {
    $id: 'https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js',
    definitions: {
      simpleTypes: require$$2$1.definitions.simpleTypes
    },
    type: 'object',
    dependencies: {
      schema: ['validate'],
      $data: ['validate'],
      statements: ['inline'],
      valid: {not: {required: ['macro']}}
    },
    properties: {
      type: require$$2$1.properties.type,
      schema: {type: 'boolean'},
      statements: {type: 'boolean'},
      dependencies: {
        type: 'array',
        items: {type: 'string'}
      },
      metaSchema: {type: 'object'},
      modifying: {type: 'boolean'},
      valid: {type: 'boolean'},
      $data: {type: 'boolean'},
      async: {type: 'boolean'},
      errors: {
        anyOf: [
          {type: 'boolean'},
          {const: 'full'}
        ]
      }
    }
  };
  definition_schema$1.$id;
  definition_schema$1.definitions;
  definition_schema$1.type;
  definition_schema$1.dependencies;
  definition_schema$1.properties;

  var IDENTIFIER$2 = /^[a-z_$][a-z0-9_$-]*$/i;



  var keyword$1 = {
    add: addKeyword$1,
    get: getKeyword$1,
    remove: removeKeyword$1,
    validate: validateKeyword$1
  };


  /**
   * Define custom keyword
   * @this  Ajv
   * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
   * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
   * @return {Ajv} this for method chaining
   */
  function addKeyword$1(keyword, definition) {
    /* jshint validthis: true */
    /* eslint no-shadow: 0 */
    var RULES = this.RULES;
    if (RULES.keywords[keyword])
      throw new Error('Keyword ' + keyword + ' is already defined');

    if (!IDENTIFIER$2.test(keyword))
      throw new Error('Keyword ' + keyword + ' is not a valid identifier');

    if (definition) {
      this.validateKeyword(definition, true);

      var dataType = definition.type;
      if (Array.isArray(dataType)) {
        for (var i=0; i<dataType.length; i++)
          _addRule(keyword, dataType[i], definition);
      } else {
        _addRule(keyword, dataType, definition);
      }

      var metaSchema = definition.metaSchema;
      if (metaSchema) {
        if (definition.$data && this._opts.$data) {
          metaSchema = {
            anyOf: [
              metaSchema,
              { '$ref': 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#' }
            ]
          };
        }
        definition.validateSchema = this.compile(metaSchema, true);
      }
    }

    RULES.keywords[keyword] = RULES.all[keyword] = true;


    function _addRule(keyword, dataType, definition) {
      var ruleGroup;
      for (var i=0; i<RULES.length; i++) {
        var rg = RULES[i];
        if (rg.type == dataType) {
          ruleGroup = rg;
          break;
        }
      }

      if (!ruleGroup) {
        ruleGroup = { type: dataType, rules: [] };
        RULES.push(ruleGroup);
      }

      var rule = {
        keyword: keyword,
        definition: definition,
        custom: true,
        code: custom$1,
        implements: definition.implements
      };
      ruleGroup.rules.push(rule);
      RULES.custom[keyword] = rule;
    }

    return this;
  }


  /**
   * Get keyword
   * @this  Ajv
   * @param {String} keyword pre-defined or custom keyword.
   * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
   */
  function getKeyword$1(keyword) {
    /* jshint validthis: true */
    var rule = this.RULES.custom[keyword];
    return rule ? rule.definition : this.RULES.keywords[keyword] || false;
  }


  /**
   * Remove keyword
   * @this  Ajv
   * @param {String} keyword pre-defined or custom keyword.
   * @return {Ajv} this for method chaining
   */
  function removeKeyword$1(keyword) {
    /* jshint validthis: true */
    var RULES = this.RULES;
    delete RULES.keywords[keyword];
    delete RULES.all[keyword];
    delete RULES.custom[keyword];
    for (var i=0; i<RULES.length; i++) {
      var rules = RULES[i].rules;
      for (var j=0; j<rules.length; j++) {
        if (rules[j].keyword == keyword) {
          rules.splice(j, 1);
          break;
        }
      }
    }
    return this;
  }


  /**
   * Validate keyword definition
   * @this  Ajv
   * @param {Object} definition keyword definition object.
   * @param {Boolean} throwError true to throw exception if definition is invalid
   * @return {boolean} validation result
   */
  function validateKeyword$1(definition, throwError) {
    validateKeyword$1.errors = null;
    var v = this._validateKeyword = this._validateKeyword
                                    || this.compile(definition_schema$1, true);

    if (v(definition)) return true;
    validateKeyword$1.errors = v.errors;
    if (throwError)
      throw new Error('custom keyword definition is invalid: '  + this.errorsText(v.errors));
    else
      return false;
  }

  var $schema$2 = "http://json-schema.org/draft-07/schema#";
  var $id$2 = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
  var description$1 = "Meta-schema for $data reference (JSON Schema extension proposal)";
  var type$2 = "object";
  var required$2 = [
  	"$data"
  ];
  var properties$3 = {
  	$data: {
  		type: "string",
  		anyOf: [
  			{
  				format: "relative-json-pointer"
  			},
  			{
  				format: "json-pointer"
  			}
  		]
  	}
  };
  var additionalProperties$1 = false;
  var data$3 = {
  	$schema: $schema$2,
  	$id: $id$2,
  	description: description$1,
  	type: type$2,
  	required: required$2,
  	properties: properties$3,
  	additionalProperties: additionalProperties$1
  };

  var data$4 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $schema: $schema$2,
    $id: $id$2,
    description: description$1,
    type: type$2,
    required: required$2,
    properties: properties$3,
    additionalProperties: additionalProperties$1,
    'default': data$3
  });

  var require$$1$1 = getCjsExportFromNamespace(data$4);

  var ajv$3 = Ajv$1;

  Ajv$1.prototype.validate = validate$3;
  Ajv$1.prototype.compile = compile$2;
  Ajv$1.prototype.addSchema = addSchema$1;
  Ajv$1.prototype.addMetaSchema = addMetaSchema$1;
  Ajv$1.prototype.validateSchema = validateSchema$1;
  Ajv$1.prototype.getSchema = getSchema$1;
  Ajv$1.prototype.removeSchema = removeSchema$1;
  Ajv$1.prototype.addFormat = addFormat$1;
  Ajv$1.prototype.errorsText = errorsText$1;

  Ajv$1.prototype._addSchema = _addSchema$1;
  Ajv$1.prototype._compile = _compile$1;

  Ajv$1.prototype.compileAsync = async$1;

  Ajv$1.prototype.addKeyword = keyword$1.add;
  Ajv$1.prototype.getKeyword = keyword$1.get;
  Ajv$1.prototype.removeKeyword = keyword$1.remove;
  Ajv$1.prototype.validateKeyword = keyword$1.validate;


  Ajv$1.ValidationError = error_classes$1.Validation;
  Ajv$1.MissingRefError = error_classes$1.MissingRef;
  Ajv$1.$dataMetaSchema = data$5;

  var META_SCHEMA_ID$1 = 'http://json-schema.org/draft-07/schema';

  var META_IGNORE_OPTIONS$1 = [ 'removeAdditional', 'useDefaults', 'coerceTypes', 'strictDefaults' ];
  var META_SUPPORT_DATA$1 = ['/properties'];

  /**
   * Creates validator instance.
   * Usage: `Ajv(opts)`
   * @param {Object} opts optional options
   * @return {Object} ajv instance
   */
  function Ajv$1(opts) {
    if (!(this instanceof Ajv$1)) return new Ajv$1(opts);
    opts = this._opts = util$1.copy(opts) || {};
    setLogger$1(this);
    this._schemas = {};
    this._refs = {};
    this._fragments = {};
    this._formats = formats_1$1(opts.format);

    this._cache = opts.cache || new cache$1;
    this._loadingSchemas = {};
    this._compilations = [];
    this.RULES = rules$1();
    this._getId = chooseGetId$1(opts);

    opts.loopRequired = opts.loopRequired || Infinity;
    if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
    if (opts.serialize === undefined) opts.serialize = fastJsonStableStringify$1;
    this._metaOpts = getMetaSchemaOptions$1(this);

    if (opts.formats) addInitialFormats$1(this);
    if (opts.keywords) addInitialKeywords$1(this);
    addDefaultMetaSchema$1(this);
    if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
    if (opts.nullable) this.addKeyword('nullable', {metaSchema: {type: 'boolean'}});
    addInitialSchemas$1(this);
  }



  /**
   * Validate data using schema
   * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
   * @this   Ajv
   * @param  {String|Object} schemaKeyRef key, ref or schema object
   * @param  {Any} data to be validated
   * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
   */
  function validate$3(schemaKeyRef, data) {
    var v;
    if (typeof schemaKeyRef == 'string') {
      v = this.getSchema(schemaKeyRef);
      if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
    } else {
      var schemaObj = this._addSchema(schemaKeyRef);
      v = schemaObj.validate || this._compile(schemaObj);
    }

    var valid = v(data);
    if (v.$async !== true) this.errors = v.errors;
    return valid;
  }


  /**
   * Create validating function for passed schema.
   * @this   Ajv
   * @param  {Object} schema schema object
   * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
   * @return {Function} validating function
   */
  function compile$2(schema, _meta) {
    var schemaObj = this._addSchema(schema, undefined, _meta);
    return schemaObj.validate || this._compile(schemaObj);
  }


  /**
   * Adds schema to the instance.
   * @this   Ajv
   * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
   * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
   * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
   * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
   * @return {Ajv} this for method chaining
   */
  function addSchema$1(schema, key, _skipValidation, _meta) {
    if (Array.isArray(schema)){
      for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
      return this;
    }
    var id = this._getId(schema);
    if (id !== undefined && typeof id != 'string')
      throw new Error('schema id must be string');
    key = resolve_1$1.normalizeId(key || id);
    checkUnique$1(this, key);
    this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
    return this;
  }


  /**
   * Add schema that will be used to validate other schemas
   * options in META_IGNORE_OPTIONS are alway set to false
   * @this   Ajv
   * @param {Object} schema schema object
   * @param {String} key optional schema key
   * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
   * @return {Ajv} this for method chaining
   */
  function addMetaSchema$1(schema, key, skipValidation) {
    this.addSchema(schema, key, skipValidation, true);
    return this;
  }


  /**
   * Validate schema
   * @this   Ajv
   * @param {Object} schema schema to validate
   * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
   * @return {Boolean} true if schema is valid
   */
  function validateSchema$1(schema, throwOrLogError) {
    var $schema = schema.$schema;
    if ($schema !== undefined && typeof $schema != 'string')
      throw new Error('$schema must be a string');
    $schema = $schema || this._opts.defaultMeta || defaultMeta$1(this);
    if (!$schema) {
      this.logger.warn('meta-schema not available');
      this.errors = null;
      return true;
    }
    var valid = this.validate($schema, schema);
    if (!valid && throwOrLogError) {
      var message = 'schema is invalid: ' + this.errorsText();
      if (this._opts.validateSchema == 'log') this.logger.error(message);
      else throw new Error(message);
    }
    return valid;
  }


  function defaultMeta$1(self) {
    var meta = self._opts.meta;
    self._opts.defaultMeta = typeof meta == 'object'
                              ? self._getId(meta) || meta
                              : self.getSchema(META_SCHEMA_ID$1)
                                ? META_SCHEMA_ID$1
                                : undefined;
    return self._opts.defaultMeta;
  }


  /**
   * Get compiled schema from the instance by `key` or `ref`.
   * @this   Ajv
   * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
   * @return {Function} schema validating function (with property `schema`).
   */
  function getSchema$1(keyRef) {
    var schemaObj = _getSchemaObj$1(this, keyRef);
    switch (typeof schemaObj) {
      case 'object': return schemaObj.validate || this._compile(schemaObj);
      case 'string': return this.getSchema(schemaObj);
      case 'undefined': return _getSchemaFragment$1(this, keyRef);
    }
  }


  function _getSchemaFragment$1(self, ref) {
    var res = resolve_1$1.schema.call(self, { schema: {} }, ref);
    if (res) {
      var schema = res.schema
        , root = res.root
        , baseId = res.baseId;
      var v = compile_1$1.call(self, schema, root, undefined, baseId);
      self._fragments[ref] = new schema_obj$1({
        ref: ref,
        fragment: true,
        schema: schema,
        root: root,
        baseId: baseId,
        validate: v
      });
      return v;
    }
  }


  function _getSchemaObj$1(self, keyRef) {
    keyRef = resolve_1$1.normalizeId(keyRef);
    return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
  }


  /**
   * Remove cached schema(s).
   * If no parameter is passed all schemas but meta-schemas are removed.
   * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
   * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
   * @this   Ajv
   * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
   * @return {Ajv} this for method chaining
   */
  function removeSchema$1(schemaKeyRef) {
    if (schemaKeyRef instanceof RegExp) {
      _removeAllSchemas$1(this, this._schemas, schemaKeyRef);
      _removeAllSchemas$1(this, this._refs, schemaKeyRef);
      return this;
    }
    switch (typeof schemaKeyRef) {
      case 'undefined':
        _removeAllSchemas$1(this, this._schemas);
        _removeAllSchemas$1(this, this._refs);
        this._cache.clear();
        return this;
      case 'string':
        var schemaObj = _getSchemaObj$1(this, schemaKeyRef);
        if (schemaObj) this._cache.del(schemaObj.cacheKey);
        delete this._schemas[schemaKeyRef];
        delete this._refs[schemaKeyRef];
        return this;
      case 'object':
        var serialize = this._opts.serialize;
        var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
        this._cache.del(cacheKey);
        var id = this._getId(schemaKeyRef);
        if (id) {
          id = resolve_1$1.normalizeId(id);
          delete this._schemas[id];
          delete this._refs[id];
        }
    }
    return this;
  }


  function _removeAllSchemas$1(self, schemas, regex) {
    for (var keyRef in schemas) {
      var schemaObj = schemas[keyRef];
      if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
        self._cache.del(schemaObj.cacheKey);
        delete schemas[keyRef];
      }
    }
  }


  /* @this   Ajv */
  function _addSchema$1(schema, skipValidation, meta, shouldAddSchema) {
    if (typeof schema != 'object' && typeof schema != 'boolean')
      throw new Error('schema should be object or boolean');
    var serialize = this._opts.serialize;
    var cacheKey = serialize ? serialize(schema) : schema;
    var cached = this._cache.get(cacheKey);
    if (cached) return cached;

    shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

    var id = resolve_1$1.normalizeId(this._getId(schema));
    if (id && shouldAddSchema) checkUnique$1(this, id);

    var willValidate = this._opts.validateSchema !== false && !skipValidation;
    var recursiveMeta;
    if (willValidate && !(recursiveMeta = id && id == resolve_1$1.normalizeId(schema.$schema)))
      this.validateSchema(schema, true);

    var localRefs = resolve_1$1.ids.call(this, schema);

    var schemaObj = new schema_obj$1({
      id: id,
      schema: schema,
      localRefs: localRefs,
      cacheKey: cacheKey,
      meta: meta
    });

    if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
    this._cache.put(cacheKey, schemaObj);

    if (willValidate && recursiveMeta) this.validateSchema(schema, true);

    return schemaObj;
  }


  /* @this   Ajv */
  function _compile$1(schemaObj, root) {
    if (schemaObj.compiling) {
      schemaObj.validate = callValidate;
      callValidate.schema = schemaObj.schema;
      callValidate.errors = null;
      callValidate.root = root ? root : callValidate;
      if (schemaObj.schema.$async === true)
        callValidate.$async = true;
      return callValidate;
    }
    schemaObj.compiling = true;

    var currentOpts;
    if (schemaObj.meta) {
      currentOpts = this._opts;
      this._opts = this._metaOpts;
    }

    var v;
    try { v = compile_1$1.call(this, schemaObj.schema, root, schemaObj.localRefs); }
    catch(e) {
      delete schemaObj.validate;
      throw e;
    }
    finally {
      schemaObj.compiling = false;
      if (schemaObj.meta) this._opts = currentOpts;
    }

    schemaObj.validate = v;
    schemaObj.refs = v.refs;
    schemaObj.refVal = v.refVal;
    schemaObj.root = v.root;
    return v;


    /* @this   {*} - custom context, see passContext option */
    function callValidate() {
      /* jshint validthis: true */
      var _validate = schemaObj.validate;
      var result = _validate.apply(this, arguments);
      callValidate.errors = _validate.errors;
      return result;
    }
  }


  function chooseGetId$1(opts) {
    switch (opts.schemaId) {
      case 'auto': return _get$IdOrId$1;
      case 'id': return _getId$1;
      default: return _get$Id$1;
    }
  }

  /* @this   Ajv */
  function _getId$1(schema) {
    if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
    return schema.id;
  }

  /* @this   Ajv */
  function _get$Id$1(schema) {
    if (schema.id) this.logger.warn('schema id ignored', schema.id);
    return schema.$id;
  }


  function _get$IdOrId$1(schema) {
    if (schema.$id && schema.id && schema.$id != schema.id)
      throw new Error('schema $id is different from id');
    return schema.$id || schema.id;
  }


  /**
   * Convert array of error message objects to string
   * @this   Ajv
   * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
   * @param  {Object} options optional options with properties `separator` and `dataVar`.
   * @return {String} human readable string with all errors descriptions
   */
  function errorsText$1(errors, options) {
    errors = errors || this.errors;
    if (!errors) return 'No errors';
    options = options || {};
    var separator = options.separator === undefined ? ', ' : options.separator;
    var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

    var text = '';
    for (var i=0; i<errors.length; i++) {
      var e = errors[i];
      if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
    }
    return text.slice(0, -separator.length);
  }


  /**
   * Add custom format
   * @this   Ajv
   * @param {String} name format name
   * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
   * @return {Ajv} this for method chaining
   */
  function addFormat$1(name, format) {
    if (typeof format == 'string') format = new RegExp(format);
    this._formats[name] = format;
    return this;
  }


  function addDefaultMetaSchema$1(self) {
    var $dataSchema;
    if (self._opts.$data) {
      $dataSchema = require$$1$1;
      self.addMetaSchema($dataSchema, $dataSchema.$id, true);
    }
    if (self._opts.meta === false) return;
    var metaSchema = require$$2$1;
    if (self._opts.$data) metaSchema = data$5(metaSchema, META_SUPPORT_DATA$1);
    self.addMetaSchema(metaSchema, META_SCHEMA_ID$1, true);
    self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID$1;
  }


  function addInitialSchemas$1(self) {
    var optsSchemas = self._opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
    else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
  }


  function addInitialFormats$1(self) {
    for (var name in self._opts.formats) {
      var format = self._opts.formats[name];
      self.addFormat(name, format);
    }
  }


  function addInitialKeywords$1(self) {
    for (var name in self._opts.keywords) {
      var keyword = self._opts.keywords[name];
      self.addKeyword(name, keyword);
    }
  }


  function checkUnique$1(self, id) {
    if (self._schemas[id] || self._refs[id])
      throw new Error('schema with key or id "' + id + '" already exists');
  }


  function getMetaSchemaOptions$1(self) {
    var metaOpts = util$1.copy(self._opts);
    for (var i=0; i<META_IGNORE_OPTIONS$1.length; i++)
      delete metaOpts[META_IGNORE_OPTIONS$1[i]];
    return metaOpts;
  }


  function setLogger$1(self) {
    var logger = self._opts.logger;
    if (logger === false) {
      self.logger = {log: noop$1, warn: noop$1, error: noop$1};
    } else {
      if (logger === undefined) logger = console;
      if (!(typeof logger == 'object' && logger.log && logger.warn && logger.error))
        throw new Error('logger must implement log, warn and error methods');
      self.logger = logger;
    }
  }


  function noop$1() {}

  // https://github.com/epoberezkin/ajv-i18n
  function localizeZh$1(errors) {
    if (!(errors && errors.length)) return;

    for (let i = 0; i < errors.length; i += 1) {
      const e = errors[i];
      let out;
      let n;
      let cond;

      switch (e.keyword) {
        case '$ref':
          out = "\u65E0\u6CD5\u627E\u5230\u5F15\u7528".concat(e.params.ref);
          break;

        case 'additionalItems':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5141\u8BB8\u8D85\u8FC7".concat(n, "\u4E2A\u5143\u7D20");
          break;

        case 'additionalProperties':
          out = '不允许有额外的属性';
          break;

        case 'anyOf':
          out = '数据应为 anyOf 所指定的其中一个';
          break;

        case 'const':
          out = '应当等于常量';
          break;

        case 'contains':
          out = '应当包含一个有效项';
          break;

        case 'custom':
          out = "\u5E94\u5F53\u901A\u8FC7 \"".concat(e.keyword, " \u5173\u952E\u8BCD\u6821\u9A8C\"");
          break;

        case 'dependencies':
          out = '';
          n = e.params.depsCount;
          out += "\u5E94\u5F53\u62E5\u6709\u5C5E\u6027".concat(e.params.property, "\u7684\u4F9D\u8D56\u5C5E\u6027").concat(e.params.deps);
          break;

        case 'enum':
          out = '应当是预设定的枚举值之一';
          break;

        case 'exclusiveMaximum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'exclusiveMinimum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'false schema':
          out = '布尔模式出错';
          break;

        case 'format':
          out = "\u5E94\u5F53\u5339\u914D\u683C\u5F0F \"".concat(e.params.format, "\"");
          break;

        case 'formatExclusiveMaximum':
          out = 'formatExclusiveMaximum 应当是布尔值';
          break;

        case 'formatExclusiveMinimum':
          out = 'formatExclusiveMinimum 应当是布尔值';
          break;

        case 'formatMaximum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u662F ".concat(cond);
          break;

        case 'formatMinimum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u662F ".concat(cond);
          break;

        case 'if':
          out = "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"".concat(e.params.failingKeyword, "\" ");
          break;

        case 'maximum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'maxItems':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u591A\u4E8E ".concat(n, " \u4E2A\u9879");
          break;

        case 'maxLength':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u591A\u4E8E ".concat(n, " \u4E2A\u5B57\u7B26");
          break;

        case 'maxProperties':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u6709\u591A\u4E8E ".concat(n, " \u4E2A\u5C5E\u6027");
          break;

        case 'minimum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'minItems':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u5C11\u4E8E ".concat(n, " \u4E2A\u9879");
          break;

        case 'minLength':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u5C11\u4E8E ".concat(n, " \u4E2A\u5B57\u7B26");
          break;

        case 'minProperties':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u6709\u5C11\u4E8E ".concat(n, " \u4E2A\u5C5E\u6027");
          break;

        case 'multipleOf':
          out = "\u5E94\u5F53\u662F ".concat(e.params.multipleOf, " \u7684\u6574\u6570\u500D");
          break;

        case 'not':
          out = '不应当匹配 "not" schema';
          break;

        case 'oneOf':
          out = '只能匹配一个 "oneOf" 中的 schema';
          break;

        case 'pattern':
          out = "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"".concat(e.params.pattern, "\"");
          break;

        case 'patternRequired':
          out = "\u5E94\u5F53\u6709\u5C5E\u6027\u5339\u914D\u6A21\u5F0F ".concat(e.params.missingPattern);
          break;

        case 'propertyNames':
          out = "\u5C5E\u6027\u540D '".concat(e.params.propertyName, "' \u65E0\u6548");
          break;

        case 'required':
          out = "\u5E94\u5F53\u6709\u5FC5\u9700\u5C5E\u6027 ".concat(e.params.missingProperty);
          break;

        case 'switch':
          out = "\u7531\u4E8E ".concat(e.params.caseIndex, " \u5931\u8D25\uFF0C\u672A\u901A\u8FC7 \"switch\" \u6821\u9A8C, ");
          break;

        case 'type':
          out = "\u5E94\u5F53\u662F ".concat(e.params.type, " \u7C7B\u578B");
          break;

        case 'uniqueItems':
          out = "\u4E0D\u5E94\u5F53\u542B\u6709\u91CD\u590D\u9879 (\u7B2C ".concat(e.params.j, " \u9879\u4E0E\u7B2C ").concat(e.params.i, " \u9879\u662F\u91CD\u590D\u7684)");
          break;

        default:
          // eslint-disable-next-line no-continue
          continue;
      }

      e.message = out;
    }
  }

  /**
   * Created by Liu.Jun on 2020/4/30 11:22.
   */
  var i18n$1 = {
    $$currentLocalizeFn: localizeZh$1,

    getCurrentLocalize() {
      return this.$$currentLocalizeFn;
    },

    useLocal(fn) {
      this.$$currentLocalizeFn = fn;
    }

  };

  var $stringify = getBuiltIn('JSON', 'stringify');
  var re = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var fix = function (match, offset, string) {
    var prev = string.charAt(offset - 1);
    var next = string.charAt(offset + 1);
    if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
      return '\\u' + match.charCodeAt(0).toString(16);
    } return match;
  };

  var FORCED = fails(function () {
    return $stringify('\uDF06\uD834') !== '"\\udf06\\ud834"'
      || $stringify('\uDEAD') !== '"\\udead"';
  });

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-well-formed-stringify
    _export({ target: 'JSON', stat: true, forced: FORCED }, {
      // eslint-disable-next-line no-unused-vars
      stringify: function stringify(it, replacer, space) {
        var result = $stringify.apply(null, arguments);
        return typeof result == 'string' ? result.replace(re, fix) : result;
      }
    });
  }

  /**
   * Created by Liu.Jun on 2020/4/25 10:53.
   */
  // 通过 index 上移
  function moveUpAt(target, index) {
    if (index === 0) return false;
    const item = target[index];
    const newItems = [item, target[index - 1]];
    return target.splice(index - 1, 2, ...newItems);
  } // 通过 index 下移动

  function moveDownAt(target, index) {
    if (index === target.length - 1) return false;
    const item = target[index];
    const newItems = [target[index + 1], item];
    return target.splice(index, 2, ...newItems);
  } // 移除

  function removeAt(target, index) {
    // 移除数组中指定位置的元素，返回布尔表示成功与否
    return !!target.splice(index, 1).length;
  } // 数组填充对象

  function fillObj$1(target, data) {
    // 简单复制 异常直接抛错
    try {
      if (typeof data === 'object') {
        return target.fill(null).map(() => JSON.parse(JSON.stringify(data)));
      }
    } catch (e) {// nothing ...
    } // 默认返回一个 undefined


    return undefined;
  } // 切割分为多个数组

  function cutOff(target, cutOffPointIndex) {
    return target.reduce((preVal, curVal, curIndex) => {
      preVal[curIndex > cutOffPointIndex ? 1 : 0].push(curVal);
      return preVal;
    }, [[], []]);
  } // 数组交集

  function intersection$1(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }

  const _excluded$9 = ["$ref"],
        _excluded2$1 = ["allOf"],
        _excluded3$1 = ["allOf"];
  // 自动添加分割线
  // export const ADDITIONAL_PROPERTY_FLAG = '__additional_property';
  // resolve Schema - dependencies
  // https://json-schema.org/understanding-json-schema/reference/object.html#dependencies

  /*
  export function resolveDependencies(schema, rootSchema, formData) {
      // 从源模式中删除依赖项。
      const { dependencies = {} } = schema;
      let { ...resolvedSchema } = schema;
      if ('oneOf' in resolvedSchema) {
          resolvedSchema = resolvedSchema.oneOf[
              getMatchingOption(formData, resolvedSchema.oneOf, rootSchema)
          ];
      } else if ('anyOf' in resolvedSchema) {
          resolvedSchema = resolvedSchema.anyOf[
              getMatchingOption(formData, resolvedSchema.anyOf, rootSchema)
          ];
      }
      return processDependencies(
          dependencies,
          resolvedSchema,
          rootSchema,
          formData
      );
  }
  */
  // 处理依赖关系 dependencies
  // https://json-schema.org/understanding-json-schema/reference/object.html#dependencies

  /*

  function processDependencies(
      dependencies,
      resolvedSchema,
      rootSchema,
      formData
  ) {
      // Process dependencies updating the local schema properties as appropriate.
      for (const dependencyKey in dependencies) {
          // Skip this dependency if its trigger property is not present.
          if (formData[dependencyKey] === undefined) {
              // eslint-disable-next-line no-continue
              continue;
          }
          // Skip this dependency if it is not included in the schema (such as when dependencyKey is itself a hidden dependency.)
          if (
              resolvedSchema.properties
              && !(dependencyKey in resolvedSchema.properties)
          ) {
              // eslint-disable-next-line no-continue
              continue;
          }
          const {
              [dependencyKey]: dependencyValue,
              ...remainingDependencies
          } = dependencies;
          if (Array.isArray(dependencyValue)) {
              resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
          } else if (isObject(dependencyValue)) {
              resolvedSchema = withDependentSchema(
                  resolvedSchema,
                  rootSchema,
                  formData,
                  dependencyKey,
                  dependencyValue
              );
          }
          return processDependencies(
              remainingDependencies,
              resolvedSchema,
              rootSchema,
              formData
          );
      }
      return resolvedSchema;
  }
  */
  // 属性依赖
  // https://json-schema.org/understanding-json-schema/reference/object.html#property-dependencies

  /*
  function withDependentProperties(schema, additionallyRequired) {
      if (!additionallyRequired) {
          return schema;
      }
      const required = Array.isArray(schema.required)
          ? Array.from(new Set([...schema.required, ...additionallyRequired]))
          : additionallyRequired;
      return { ...schema, required };
  }
  */
  // schema 依赖
  // https://json-schema.org/understanding-json-schema/reference/object.html#schema-dependencies

  /*
  function withDependentSchema(
      schema,
      rootSchema,
      formData,
      dependencyKey,
      dependencyValue
  ) {
      const { oneOf, ...dependentSchema } = retrieveSchema(
          dependencyValue,
          rootSchema,
          formData
      );
      schema = mergeSchemas(schema, dependentSchema);
      // Since it does not contain oneOf, we return the original schema.
      if (oneOf === undefined) {
          return schema;
      } if (!Array.isArray(oneOf)) {
          throw new Error(`invalid: it is some ${typeof oneOf} instead of an array`);
      }
      // Resolve $refs inside oneOf.
      const resolvedOneOf = oneOf.map(subschema => (subschema.hasOwnProperty('$ref')
          ? resolveReference(subschema, rootSchema, formData)
          : subschema));
      return withExactlyOneSubschema(
          schema,
          rootSchema,
          formData,
          dependencyKey,
          resolvedOneOf
      );
  }

  function withExactlyOneSubschema(
      schema,
      rootSchema,
      formData,
      dependencyKey,
      oneOf
  ) {
      // eslint-disable-next-line array-callback-return,consistent-return
      const validSubschemas = oneOf.filter((subschema) => {
          if (!subschema.properties) {
              return false;
          }
          const { [dependencyKey]: conditionPropertySchema } = subschema.properties;
          if (conditionPropertySchema) {
              const conditionSchema = {
                  type: 'object',
                  properties: {
                      [dependencyKey]: conditionPropertySchema,
                  },
              };

              return isValid(conditionSchema, formData);
          }
      });
      if (validSubschemas.length !== 1) {
          console.warn(
              "ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"
          );
          return schema;
      }
      const subschema = validSubschemas[0];
      const {
          // eslint-disable-next-line no-unused-vars
          [dependencyKey]: conditionPropertySchema,
          ...dependentSubschema
      } = subschema.properties;
      const dependentSchema = { ...subschema, properties: dependentSubschema };
      return mergeSchemas(
          schema,
          retrieveSchema(dependentSchema, rootSchema, formData)
      );
  }
  */
  // resolve Schema - $ref
  // https://json-schema.org/understanding-json-schema/structuring.html#using-id-with-ref

  function resolveReference$1(schema, rootSchema, formData) {
    // Retrieve the referenced schema definition.
    const $refSchema = findSchemaDefinition$1(schema.$ref, rootSchema); // Drop the $ref property of the source schema.
    // eslint-disable-next-line no-unused-vars

    const localSchema = _objectWithoutProperties(schema, _excluded$9); // Update referenced schema definition with local schema properties.


    return retrieveSchema$1(_objectSpread2(_objectSpread2({}, $refSchema), localSchema), rootSchema, formData);
  } // 深度递归合并 合并allOf的每2项


  function mergeSchemaAllOf$1() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length < 2) return args[0];
    let preVal = {};
    const copyArgs = [...args];

    while (copyArgs.length >= 2) {
      const obj1 = isObject$1(copyArgs[0]) ? copyArgs[0] : {};
      const obj2 = isObject$1(copyArgs[1]) ? copyArgs[1] : {};
      preVal = Object.assign({}, obj1);
      Object.keys(obj2).reduce((acc, key) => {
        const left = obj1[key];
        const right = obj2[key]; // 左右一边为object

        if (isObject$1(left) || isObject$1(right)) {
          // 两边同时为object
          if (isObject$1(left) && isObject$1(right)) {
            acc[key] = mergeSchemaAllOf$1(left, right);
          } else {
            // 其中一边为 object
            const [objTypeData, baseTypeData] = isObject$1(left) ? [left, right] : [right, left];

            if (key === 'additionalProperties') {
              // 适配类型： 一边配置了对象一边没配置或者true false
              // {
              //     additionalProperties: {
              //         type: 'string',
              //     },
              //     additionalProperties: false
              // }
              acc[key] = baseTypeData === true ? objTypeData : false; // default false
            } else {
              acc[key] = objTypeData;
            }
          } // 一边为array

        } else if (Array.isArray(left) || Array.isArray(right)) {
          // 同为数组取交集
          if (Array.isArray(left) && Array.isArray(right)) {
            // 数组里面嵌套对象不支持 因为我不知道该怎么合并
            if (isObject$1(left[0]) || isObject$1(right[0])) {
              throw new Error('暂不支持如上数组对象元素合并');
            } // 交集


            const intersectionArray = intersection$1([].concat(left), [].concat(right)); // 没有交集

            if (intersectionArray.length <= 0) {
              throw new Error('无法合并如上数据');
            }

            if (intersectionArray.length === 0 && key === 'type') {
              // 自己取出值
              acc[key] = intersectionArray[0];
            } else {
              acc[key] = intersectionArray;
            }
          } else {
            // 其中一边为 Array
            // 查找包含关系
            const [arrayTypeData, baseTypeData] = Array.isArray(left) ? [left, right] : [right, left]; // 空值直接合并另一边

            if (baseTypeData === undefined) {
              acc[key] = arrayTypeData;
            } else {
              if (!arrayTypeData.includes(baseTypeData)) {
                throw new Error('无法合并如下数据');
              }

              acc[key] = baseTypeData;
            }
          }
        } else if (left !== undefined && right !== undefined) {
          // 两边都不是 undefined - 基础数据类型 string number boolean...
          if (key === 'maxLength' || key === 'maximum' || key === 'maxItems' || key === 'exclusiveMaximum' || key === 'maxProperties') {
            acc[key] = Math.min(left, right);
          } else if (key === 'minLength' || key === 'minimum' || key === 'minItems' || key === 'exclusiveMinimum' || key === 'minProperties') {
            acc[key] = Math.max(left, right);
          } else if (key === 'multipleOf') {
            // 获取最小公倍数
            acc[key] = scm$1(left, right);
          } else {
            // if (left !== right) {
            //     throw new Error('无法合并如下数据');
            // }
            acc[key] = left;
          }
        } else {
          // 一边为undefined
          acc[key] = left === undefined ? right : left;
        }

        return acc;
      }, preVal); // 先进先出

      copyArgs.splice(0, 2, preVal);
    }

    return preVal;
  } // resolve Schema - allOf


  function resolveAllOf$1(schema, rootSchema, formData) {
    // allOf item中可能存在 $ref
    const resolvedAllOfRefSchema = _objectSpread2(_objectSpread2({}, schema), {}, {
      allOf: schema.allOf.map(allOfItem => retrieveSchema$1(allOfItem, rootSchema, formData))
    });

    try {
      const {
        allOf
      } = resolvedAllOfRefSchema,
            originProperties = _objectWithoutProperties(resolvedAllOfRefSchema, _excluded2$1);

      return mergeSchemaAllOf$1(originProperties, ...allOf);
    } catch (e) {
      console.error("\u65E0\u6CD5\u5408\u5E76allOf\uFF0C\u4E22\u5F03allOf\u914D\u7F6E\u7EE7\u7EED\u6E32\u67D3: \n".concat(e)); // eslint-disable-next-line no-unused-vars

      const resolvedSchemaWithoutAllOf = _objectWithoutProperties(resolvedAllOfRefSchema, _excluded3$1);

      return resolvedSchemaWithoutAllOf;
    }
  } // resolve Schema

  function resolveSchema$2(schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // allOf 、$ref、dependencies 可能被同时配置
    // allOf
    if (schema.hasOwnProperty('allOf')) {
      schema = resolveAllOf$1(schema, rootSchema, formData);
    } // $ref


    if (schema.hasOwnProperty('$ref')) {
      schema = resolveReference$1(schema, rootSchema, formData);
    } // dependencies

    /*
    if (schema.hasOwnProperty('dependencies')) {
        const resolvedSchema = resolveDependencies(schema, rootSchema, formData);
        schema = retrieveSchema(resolvedSchema, rootSchema, formData);
    }
    */
    // additionalProperties

    /*
    const hasAdditionalProperties = schema.hasOwnProperty('additionalProperties') && schema.additionalProperties !== false;
    if (hasAdditionalProperties) {
        return stubExistingAdditionalProperties(
            schema,
            rootSchema,
            formData
        );
    }
    */


    return schema;
  } // 这个函数将为formData中的每个键创建新的“属性”项
  // 查找到附加属性统一到properties[key]格式 并且打上标准

  /* function stubExistingAdditionalProperties(
      schema,
      rootSchema = {},
      formData = {}
  ) {
      // clone the schema so we don't ruin the consumer's original
      schema = {
          ...schema,
          properties: { ...schema.properties },
      };

      Object.keys(formData).forEach((key) => {
          if (schema.properties.hasOwnProperty(key)) {
              // No need to stub, our schema already has the property
              return;
          }

          let additionalProperties;
          if (schema.additionalProperties.hasOwnProperty('$ref')) {
              additionalProperties = retrieveSchema(
                  { $ref: schema.additionalProperties.$ref },
                  rootSchema,
                  formData
              );
          } else if (schema.additionalProperties.hasOwnProperty('type')) {
              additionalProperties = { ...schema.additionalProperties };
          } else {
              additionalProperties = { type: guessType(formData[key]) };
          }

          // The type of our new key should match the additionalProperties value;
          // 把追加进去的属性设置为标准 schema格式，同时打上标志
          schema.properties[key] = additionalProperties;
          // Set our additional property flag so we know it was dynamically added
          schema.properties[key][ADDITIONAL_PROPERTY_FLAG] = true;
      });

      return schema;
  } */
  // 索引当前节点


  function retrieveSchema$1(schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isObject$1(schema)) {
      return {};
    }

    return resolveSchema$2(schema, rootSchema, formData);
  }

  var defineProperty = objectDefineProperty.f;


  var NativeSymbol = global_1.Symbol;

  if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined
  )) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
      var result = this instanceof SymbolWrapper
        ? new NativeSymbol(description)
        // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
        : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;

    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty(symbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = isObject$2(this) ? this.valueOf() : this;
        var string = symbolToString.call(symbol);
        if (has$1(EmptyStringDescriptionStore, symbol)) return '';
        var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });

    _export({ global: true, forced: true }, {
      Symbol: SymbolWrapper
    });
  }

  const pathSeparator$1 = '.'; // nodePath 转css类名

  function nodePath2ClassName$1(path) {
    const rootPathName = '__pathRoot';
    return path ? "".concat(rootPathName, ".").concat(path).replace(/\./g, '_') : rootPathName;
  } // 是否为根节点

  function isRootNodePath$1(path) {
    return path === '';
  } // 计算当前节点path

  function computedCurPath$1(prePath, curKey) {
    return prePath === '' ? curKey : [prePath, curKey].join(pathSeparator$1);
  } // 删除当前path值

  function deletePathVal$1(vueData, name) {
    Vue__default["default"].delete(vueData, name);
  } // 设置当前path值

  function setPathVal$1(obj, path, value) {
    // Vue.set ?
    const pathArr = path.split(pathSeparator$1);

    for (let i = 0; i < pathArr.length; i += 1) {
      if (pathArr.length - i < 2) {
        // 倒数第一个数据
        // obj[pathArr[pathArr.length - 1]] = value;
        Vue__default["default"].set(obj, pathArr[pathArr.length - 1], value);
        break;
      }

      obj = obj[pathArr[i]];
    }
  } // 获取当前path值

  function getPathVal$2(obj, path) {
    let leftDeviation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const pathArr = path.split(pathSeparator$1);

    for (let i = 0; i < pathArr.length - leftDeviation; i += 1) {
      // 错误路径或者undefined中断查找
      if (obj === undefined) return undefined;
      obj = pathArr[i] === '' ? obj : obj[pathArr[i]];
    }

    return obj;
  } // path 等于props

  function path2prop$1(path) {
    return path;
  }

  const _excluded$8 = ["widget", "title", "labelWidth", "description", "attrs", "class", "style", "widgetListeners", "fieldAttrs", "fieldStyle", "fieldClass", "emptyValue", "width", "getWidget", "renderScopedSlots", "renderChildren", "onChange"];
  // 这里打破 JSON Schema 规范

  const regExpression$1 = /{{(.*)}}/;

  function handleExpression$1(rootFormData, curNodePath, expression, fallBack) {
    // 未配置
    if (undefined === expression) {
      return undefined;
    } // 配置了 mustache 表达式


    const matchExpression = regExpression$1.exec(expression);
    regExpression$1.lastIndex = 0; // 重置索引

    if (matchExpression) {
      const code = matchExpression[1].trim(); // eslint-disable-next-line no-new-func

      const fn = new Function('parentFormData', 'rootFormData', "return ".concat(code));
      return fn(getPathVal$2(rootFormData, curNodePath, 1), rootFormData);
    } // 回退


    return fallBack();
  }

  function replaceArrayIndex$1() {
    let {
      schema,
      uiSchema
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let index = arguments.length > 1 ? arguments[1] : undefined;
    const itemUiOptions = getUiOptions$1({
      schema,
      uiSchema,
      containsSpec: false
    });
    return ['title', 'description'].reduce((preVal, curItem) => {
      if (itemUiOptions[curItem]) {
        preVal["ui:".concat(curItem)] = String(itemUiOptions[curItem]).replace(/\$index/g, index + 1);
      }

      return preVal;
    }, {});
  } // 是否为 hidden Widget

  function isHiddenWidget$1(_ref) {
    let {
      schema = {},
      uiSchema = {},
      curNodePath = '',
      rootFormData = {}
    } = _ref;
    const widget = uiSchema['ui:widget'] || schema['ui:widget'];
    const hiddenExpression = uiSchema['ui:hidden'] || schema['ui:hidden']; // 支持配置 ui:hidden 表达式

    return widget === 'HiddenWidget' || widget === 'hidden' || !!handleExpression$1(rootFormData, curNodePath, hiddenExpression, () => {
      // 配置了函数 function
      if (typeof hiddenExpression === 'function') {
        return hiddenExpression(getPathVal$2(rootFormData, curNodePath, 1), rootFormData);
      } // 配置了常量 ？？


      return hiddenExpression;
    });
  } // 解析当前节点 ui field

  function getUiField$1(FIELDS_MAP, _ref2) {
    let {
      schema = {},
      uiSchema = {}
    } = _ref2;
    const field = schema['ui:field'] || uiSchema['ui:field']; // vue 组件，或者已注册的组件名

    if (typeof field === 'function' || typeof field === 'object' || typeof field === 'string') {
      return {
        field,
        fieldProps: uiSchema['ui:fieldProps'] || schema['ui:fieldProps'] // 自定义field ，支持传入额外的 props

      };
    } // 类型默认 field


    const fieldCtor = FIELDS_MAP[getSchemaType$1(schema)];

    if (fieldCtor) {
      return {
        field: fieldCtor
      };
    } // 如果包含 oneOf anyOf 返回空不异常
    // SchemaField 会附加onyOf anyOf信息


    if (!fieldCtor && (schema.anyOf || schema.oneOf)) {
      return {
        field: null
      };
    } // 不支持的类型


    throw new Error("\u4E0D\u652F\u6301\u7684field\u7C7B\u578B ".concat(schema.type));
  } // 解析用户配置的 uiSchema options

  function getUserUiOptions$1(_ref3) {
    let {
      schema = {},
      uiSchema = {},
      curNodePath,
      // undefined 不处理 表达式
      rootFormData = {}
    } = _ref3;
    // 支持 uiSchema配置在 schema文件中
    return Object.assign({}, ...[schema, uiSchema].map(itemSchema => Object.keys(itemSchema).reduce((options, key) => {
      const value = itemSchema[key]; // options 内外合并

      if (key === 'ui:options' && isObject$1(value)) {
        return _objectSpread2(_objectSpread2({}, options), value);
      } // https://github.com/lljj-x/vue-json-schema-form/issues/170
      // ui:hidden需要作为内置属性使用，不能直接透传给widget组件，如果组件需要只能在ui:options 中使用hidden传递


      if (key !== 'ui:hidden' && key.indexOf('ui:') === 0) {
        // 只对 ui:xxx 配置形式支持表达式
        return _objectSpread2(_objectSpread2({}, options), {}, {
          [key.substring(3)]: curNodePath === undefined ? value : handleExpression$1(rootFormData, curNodePath, value, () => value)
        });
      }

      return options;
    }, {})));
  } // 解析当前节点的ui options参数

  function getUiOptions$1(_ref4) {
    let {
      schema = {},
      uiSchema = {},
      containsSpec = true,
      curNodePath,
      rootFormData
    } = _ref4;
    const spec = {};

    if (containsSpec) {
      spec.readonly = !!schema.readOnly;

      if (undefined !== schema.multipleOf) {
        // 组件计数器步长
        spec.step = schema.multipleOf;
      }

      if (schema.minimum || schema.minimum === 0) {
        spec.min = schema.minimum;
      }

      if (schema.maximum || schema.maximum === 0) {
        spec.max = schema.maximum;
      }

      if (schema.minLength || schema.minLength === 0) {
        spec.minlength = schema.minLength;
      }

      if (schema.maxLength || schema.maxLength === 0) {
        spec.maxlength = schema.maxLength;
      }

      if (schema.format === 'date-time' || schema.format === 'date') {
        // 数组类型 时间区间
        // 打破了schema的规范，type array 配置了 format
        if (schema.type === 'array') {
          spec.isRange = true;
          spec.isNumberValue = !(schema.items && schema.items.type === 'string');
        } else {
          // 字符串 ISO 时间
          spec.isNumberValue = !(schema.type === 'string');
        }
      }
    }

    if (schema.title) spec.title = schema.title;
    if (schema.description) spec.description = schema.description; // 计算ui配置

    return _objectSpread2(_objectSpread2({}, spec), getUserUiOptions$1({
      schema,
      uiSchema,
      curNodePath,
      rootFormData
    }));
  } // 获取当前节点的ui 配置 （options + widget）
  // 处理成 Widget 组件需要的格式

  function getWidgetConfig$1(_ref5) {
    let {
      schema = {},
      uiSchema = {},
      curNodePath,
      rootFormData
    } = _ref5;
    let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const uiOptions = getUiOptions$1({
      schema,
      uiSchema,
      curNodePath,
      rootFormData
    }); // 没有配置 Widget ，各个Field组件根据类型判断

    if (!uiOptions.widget && fallback) {
      Object.assign(uiOptions, fallback({
        schema,
        uiSchema
      }));
    }

    const {
      widget,
      title: label,
      labelWidth,
      description,
      attrs: widgetAttrs,
      class: widgetClass,
      style: widgetStyle,
      widgetListeners,
      fieldAttrs,
      fieldStyle,
      fieldClass,
      emptyValue,
      width,
      getWidget,
      renderScopedSlots,
      renderChildren,
      onChange
    } = uiOptions,
          uiProps = _objectWithoutProperties(uiOptions, _excluded$8);

    return {
      widget,
      label,
      labelWidth,
      description,
      widgetAttrs,
      widgetClass,
      widgetStyle,
      fieldAttrs,
      width,
      fieldStyle,
      fieldClass,
      emptyValue,
      getWidget,
      renderScopedSlots,
      renderChildren,
      onChange,
      widgetListeners,
      uiProps
    };
  } // 解析用户配置的 errorSchema options

  function getUserErrOptions$1(_ref6) {
    let {
      schema = {},
      uiSchema = {},
      errorSchema = {}
    } = _ref6;
    return Object.assign({}, ...[schema, uiSchema, errorSchema].map(itemSchema => Object.keys(itemSchema).reduce((options, key) => {
      const value = itemSchema[key]; // options 内外合并

      if (key === 'err:options' && isObject$1(value)) {
        return _objectSpread2(_objectSpread2({}, options), value);
      }

      if (key.indexOf('err:') === 0) {
        return _objectSpread2(_objectSpread2({}, options), {}, {
          [key.substring(4)]: value
        });
      }

      return options;
    }, {})));
  } // ui:order object-> properties 排序

  function orderProperties$1(properties, order) {
    if (!Array.isArray(order)) {
      return properties;
    }

    const arrayToHash = arr => arr.reduce((prev, curr) => {
      prev[curr] = true;
      return prev;
    }, {});

    const errorPropList = arr => arr.length > 1 ? "properties '".concat(arr.join("', '"), "'") : "property '".concat(arr[0], "'");

    const propertyHash = arrayToHash(properties);
    const orderFiltered = order.filter(prop => prop === '*' || propertyHash[prop]);
    const orderHash = arrayToHash(orderFiltered);
    const rest = properties.filter(prop => !orderHash[prop]);
    const restIndex = orderFiltered.indexOf('*');

    if (restIndex === -1) {
      if (rest.length) {
        throw new Error("uiSchema order list does not contain ".concat(errorPropList(rest)));
      }

      return orderFiltered;
    }

    if (restIndex !== orderFiltered.lastIndexOf('*')) {
      throw new Error('uiSchema order list contains more than one wildcard item');
    }

    const complete = [...orderFiltered];
    complete.splice(restIndex, 1, ...rest);
    return complete;
  }
  /**
   * 单个匹配
   * 常量，或者只有一个枚举
   */

  function isConstant$1(schema) {
    return Array.isArray(schema.enum) && schema.enum.length === 1 || schema.hasOwnProperty('const');
  }
  function toConstant$1(schema) {
    if (Array.isArray(schema.enum) && schema.enum.length === 1) {
      return schema.enum[0];
    }

    if (schema.hasOwnProperty('const')) {
      return schema.const;
    }

    throw new Error('schema cannot be inferred as a constant');
  }
  /**
   * 是否为选择列表
   * 枚举 或者 oneOf anyOf 每项都只有一个固定常量值
   * @param _schema
   * @param rootSchema
   * @returns {boolean|*}
   */

  function isSelect$1(_schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const schema = retrieveSchema$1(_schema, rootSchema);
    const altSchemas = schema.oneOf || schema.anyOf;

    if (Array.isArray(schema.enum)) {
      return true;
    }

    if (Array.isArray(altSchemas)) {
      return altSchemas.every(altSchemasItem => isConstant$1(altSchemasItem));
    }

    return false;
  } // items 都为一个对象

  function isFixedItems$1(schema) {
    return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(item => isObject$1(item));
  } // 是否为多选

  function isMultiSelect$1(schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!schema.uniqueItems || !schema.items) {
      return false;
    }

    return isSelect$1(schema.items, rootSchema);
  } // array additionalItems
  // https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation

  function allowAdditionalItems$1(schema) {
    if (schema.additionalItems === true) {
      console.warn('additionalItems=true is currently not supported');
    }

    return isObject$1(schema.additionalItems);
  } // 下拉选项

  function optionsList$1(schema, uiSchema, curNodePath, rootFormData) {
    // enum
    if (schema.enum) {
      const uiOptions = getUserUiOptions$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      }); // ui配置 enumNames 优先

      const enumNames = uiOptions.enumNames || schema.enumNames;
      return schema.enum.map((value, i) => {
        const label = enumNames && enumNames[i] || String(value);
        return {
          label,
          value
        };
      });
    } // oneOf | anyOf


    const altSchemas = schema.oneOf || schema.anyOf;
    const altUiSchemas = uiSchema.oneOf || uiSchema.anyOf;
    return altSchemas.map((curSchema, i) => {
      const uiOptions = altUiSchemas && altUiSchemas[i] ? getUserUiOptions$1({
        schema: curSchema,
        uiSchema: altUiSchemas[i],
        curNodePath,
        rootFormData
      }) : {};
      const value = toConstant$1(curSchema);
      const label = uiOptions.title || curSchema.title || String(value);
      return {
        label,
        value
      };
    });
  }
  function fallbackLabel$1(oriLabel, isFallback, curNodePath) {
    if (oriLabel) return oriLabel;

    if (isFallback) {
      const backLabel = curNodePath.split('.').pop(); // 过滤纯数字字符串

      if (backLabel && backLabel !== "".concat(Number(backLabel))) return backLabel;
    }

    return '';
  }

  let ajv$2 = createAjvInstance$1();
  let formerCustomFormats$1 = null;
  let formerMetaSchema$1 = null; // 创建实例

  function createAjvInstance$1() {
    const ajvInstance = new ajv$3({
      errorDataPath: 'property',
      allErrors: true,
      multipleOfPrecision: 8,
      schemaId: 'auto',
      unknownFormats: 'ignore'
    }); // 添加base-64 format

    ajvInstance.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/); // 添加color format

    ajvInstance.addFormat('color', // eslint-disable-next-line max-len
    /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
    return ajvInstance;
  }
  /**
   * 将错误输出从ajv转换为jsonschema使用的格式
   * At some point, components should be updated to support ajv.
   */


  function transformAjvErrors$1() {
    let errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (errors === null) {
      return [];
    }

    return errors.map(e => {
      const {
        dataPath,
        keyword,
        message,
        params,
        schemaPath
      } = e;
      const property = "".concat(dataPath); // put data in expected format

      return {
        name: keyword,
        property,
        message,
        params,
        // specific to ajv
        stack: "".concat(property, " ").concat(message).trim(),
        schemaPath
      };
    });
  }
  /**
   * 通过 schema校验formData并返回错误信息
   * @param formData 校验的数据
   * @param schema
   * @param transformErrors function - 转换错误, 如个性化的配置
   * @param additionalMetaSchemas 数组 添加 ajv metaSchema
   * @param customFormats 添加 ajv 自定义 formats
   * @returns {{errors: ([]|{stack: string, schemaPath: *, name: *, property: string, message: *, params: *}[])}}
   */


  function ajvValidateFormData$1() {
    let {
      formData,
      schema,
      transformErrors,
      additionalMetaSchemas = [],
      customFormats = {}
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const hasNewMetaSchemas = !deepEquals$1(formerMetaSchema$1, additionalMetaSchemas);
    const hasNewFormats = !deepEquals$1(formerCustomFormats$1, customFormats); // 变更了 Meta或者调整了format配置重置新的实例

    if (hasNewMetaSchemas || hasNewFormats) {
      ajv$2 = createAjvInstance$1();
    } // 添加更多要验证的模式


    if (additionalMetaSchemas && hasNewMetaSchemas && Array.isArray(additionalMetaSchemas)) {
      ajv$2.addMetaSchema(additionalMetaSchemas);
      formerMetaSchema$1 = additionalMetaSchemas;
    } // 注册自定义的 formats - 没有变更只会注册一次 - 否则重新创建实例


    if (customFormats && hasNewFormats && isObject$1(customFormats)) {
      Object.keys(customFormats).forEach(formatName => {
        ajv$2.addFormat(formatName, customFormats[formatName]);
      });
      formerCustomFormats$1 = customFormats;
    }

    let validationError = null;

    try {
      ajv$2.validate(schema, formData);
    } catch (err) {
      validationError = err;
    } // ajv 默认多语言处理


    i18n$1.getCurrentLocalize()(ajv$2.errors);
    let errors = transformAjvErrors$1(ajv$2.errors); // 清除错误

    ajv$2.errors = null; // 处理异常

    const noProperMetaSchema = validationError && validationError.message && typeof validationError.message === 'string' && validationError.message.includes('no schema with key or ref ');

    if (noProperMetaSchema) {
      errors = [...errors, {
        stack: validationError.message
      }];
    } // 转换错误, 如传入自定义的错误


    if (typeof transformErrors === 'function') {
      errors = transformErrors(errors);
    }

    return {
      errors
    };
  } // 校验formData 并转换错误信息

  function validateFormDataAndTransformMsg$1() {
    let {
      formData,
      schema,
      uiSchema,
      transformErrors,
      additionalMetaSchemas = [],
      customFormats = {},
      errorSchema = {},
      required = false,
      propPath = '',
      isOnlyFirstError = true // 只取第一条错误信息

    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // 如果数组类型针对配置了 format 的特殊处理

    const emptyArray = schema.type === 'array' && Array.isArray(formData) && formData.length === 0;
    const isEmpty = formData === undefined || emptyArray;

    if (required) {
      if (isEmpty) {
        const requireErrObj = {
          keyword: 'required',
          params: {
            missingProperty: propPath
          }
        }; // 用户设置校验信息

        const errSchemaMsg = getUserErrOptions$1({
          schema,
          uiSchema,
          errorSchema
        }).required;

        if (errSchemaMsg) {
          requireErrObj.message = errSchemaMsg;
        } else {
          // 处理多语言require提示信息 （ajv 修改原引用）
          i18n$1.getCurrentLocalize()([requireErrObj]);
        }

        return [requireErrObj];
      }
    } else if (isEmpty && !emptyArray) {
      // 非required 为空 校验通过
      return [];
    } // 校验ajv错误信息


    let ajvErrors = ajvValidateFormData$1({
      formData,
      schema,
      transformErrors,
      additionalMetaSchemas,
      customFormats
    }).errors; // 过滤顶级错误

    {
      ajvErrors = ajvErrors.filter(item => item.property === '' && !item.schemaPath.includes('#/anyOf/') && !item.schemaPath.includes('#/oneOf/') || item.name === 'additionalProperties');
    }

    const userErrOptions = getUserErrOptions$1({
      schema,
      uiSchema,
      errorSchema
    });
    return (isOnlyFirstError && ajvErrors.length > 0 ? [ajvErrors[0]] : ajvErrors).reduce((preErrors, errorItem) => {
      // 优先获取 errorSchema 配置
      errorItem.message = userErrOptions[errorItem.name] !== undefined ? userErrOptions[errorItem.name] : errorItem.message;
      preErrors.push(errorItem);
      return preErrors;
    }, []);
  }
  /**
   * 根据模式验证数据，如果数据有效则返回true，否则返回* false。如果模式无效，那么这个函数将返回* false。
   * @param schema
   * @param data
   * @returns {boolean|PromiseLike<any>}
   */

  function isValid$1(schema, data) {
    try {
      return ajv$2.validate(schema, data);
    } catch (e) {
      return false;
    }
  } // ajv valida
  // return -1

  function getMatchingIndex$1(formData, options, rootSchema) {
    let haveAllFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < options.length; i++) {
      const option = retrieveSchema$1(options[i], rootSchema, formData); // If the schema describes an object then we need to add slightly more
      // strict matching to the schema, because unless the schema uses the
      // "requires" keyword, an object will match the schema as long as it
      // doesn't have matching keys with a conflicting type. To do this we use an
      // "anyOf" with an array of requires. This augmentation expresses that the
      // schema should match if any of the keys in the schema are present on the
      // object and pass validation.

      if (option.properties) {
        // Create an "anyOf" schema that requires at least one of the keys in the
        // "properties" object
        const requiresAnyOf = _objectSpread2(_objectSpread2({}, rootSchema.definitions ? {
          definitions: rootSchema.definitions
        } : {}), {}, {
          anyOf: Object.keys(option.properties).map(key => ({
            required: [key]
          }))
        });

        let augmentedSchema; // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"

        if (option.anyOf) {
          // Create a shallow clone of the option
          const shallowClone = Object.assign({}, option);

          if (!shallowClone.allOf) {
            shallowClone.allOf = [];
          } else {
            // If "allOf" already exists, shallow clone the array
            shallowClone.allOf = shallowClone.allOf.slice();
          }

          shallowClone.allOf.push(requiresAnyOf);
          augmentedSchema = shallowClone;
        } else {
          augmentedSchema = Object.assign({}, option, requiresAnyOf);
        } // Remove the "required" field as it's likely that not all fields have
        // been filled in yet, which will mean that the schema is not valid
        // 如果编辑回填数据的场景 可直接使用 required 判断


        if (!haveAllFields) delete augmentedSchema.required;

        if (isValid$1(augmentedSchema, formData)) {
          return i;
        }
      } else if (isValid$1(options[i], formData)) {
        return i;
      }
    } // 尝试查找const 配置


    if (options[0] && options[0].properties) {
      const constProperty = Object.keys(options[0].properties).find(k => options[0].properties[k].const);

      if (constProperty) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < options.length; i++) {
          if (options[i].properties && options[i].properties[constProperty] && options[i].properties[constProperty].const === formData[constProperty]) {
            return i;
          }
        }
      }
    }

    return -1;
  } // oneOf anyOf 通过formData的值来找到当前匹配项索引

  function getMatchingOption$1(formData, options, rootSchema) {
    let haveAllFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const index = getMatchingIndex$1(formData, options, rootSchema, haveAllFields);
    return index === -1 ? 0 : index;
  }

  /**
   * When merging defaults and form data, we want to merge in this specific way:
   * - objects are deeply merged
   * - arrays are merged in such a way that:
   *   - when the array is set in form data, only array entries set in form data
   *     are deeply merged; additional entries from the defaults are ignored
   *   - when the array is not set in form data, the default is copied over
   * - scalars are overwritten/set by form data
   */

  function mergeDefaultsWithFormData$1(defaults, formData) {
    if (Array.isArray(formData)) {
      if (!Array.isArray(defaults)) {
        defaults = [];
      }

      return formData.map((value, idx) => {
        if (defaults[idx]) {
          return mergeDefaultsWithFormData$1(defaults[idx], value);
        }

        return value;
      });
    }

    if (isObject$1(formData)) {
      const acc = Object.assign({}, defaults); // Prevent mutation of source object.

      return Object.keys(formData).reduce((preAcc, key) => {
        preAcc[key] = mergeDefaultsWithFormData$1(defaults ? defaults[key] : {}, formData[key]);
        return preAcc;
      }, acc);
    }

    return formData;
  }

  function computeDefaults$1(_schema, parentDefaults, rootSchema) {
    let rawFormData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let includeUndefinedValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let haveAllFields = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    let schema = isObject$1(_schema) ? _schema : {};
    const formData = isObject$1(rawFormData) ? rawFormData : {}; // allOf 处理合并数据

    if ('allOf' in schema) {
      schema = resolveAllOf$1(schema, rootSchema, formData);
    } // Compute the defaults recursively: give highest priority to deepest nodes.


    let defaults = parentDefaults;

    if (isObject$1(defaults) && isObject$1(schema.default)) {
      // For object defaults, only override parent defaults that are defined in
      // schema.default.
      defaults = mergeObjects$1(defaults, schema.default);
    } else if ('default' in schema) {
      // Use schema defaults for this node.
      defaults = schema.default;
    } else if ('$ref' in schema) {
      // Use referenced schema defaults for this node.
      const refSchema = findSchemaDefinition$1(schema.$ref, rootSchema);
      return computeDefaults$1(refSchema, defaults, rootSchema, formData, includeUndefinedValues, haveAllFields);
    } else if (isFixedItems$1(schema)) {
      defaults = schema.items.map((itemSchema, idx) => computeDefaults$1(itemSchema, Array.isArray(parentDefaults) ? parentDefaults[idx] : undefined, rootSchema, formData, includeUndefinedValues, haveAllFields));
    } else if ('oneOf' in schema) {
      const matchSchema = retrieveSchema$1(schema.oneOf[getMatchingOption$1(formData, schema.oneOf, rootSchema, haveAllFields)], rootSchema, formData);
      schema = mergeObjects$1(schema, matchSchema);
      delete schema.oneOf; // if (schema.properties && matchSchema.properties) {
      //     // 对象 oneOf 需要合并原属性和 oneOf 属性
      //     const mergeSchema = mergeObjects(schema, matchSchema);
      //     delete mergeSchema.oneOf;
      //     schema = mergeSchema;
      // } else {
      //     schema = matchSchema;
      // }
    } else if ('anyOf' in schema) {
      const matchSchema = retrieveSchema$1(schema.anyOf[getMatchingOption$1(formData, schema.anyOf, rootSchema, haveAllFields)], rootSchema, formData);
      schema = mergeObjects$1(schema, matchSchema);
      delete schema.anyOf; // if (schema.properties && matchSchema.properties) {
      //     // 对象 anyOf 需要合并原属性和 anyOf 属性
      //     const mergeSchema = mergeObjects(schema, matchSchema);
      //     delete mergeSchema.anyOf;
      //     schema = mergeSchema;
      // } else {
      //     schema = matchSchema;
      // }
    } // Not defaults defined for this node, fallback to generic typed ones.


    if (typeof defaults === 'undefined') {
      defaults = schema.default;
    } // eslint-disable-next-line default-case


    switch (getSchemaType$1(schema)) {
      case 'null':
        return null;
      // We need to recur for object schema inner default values.

      case 'object':
        return Object.keys(schema.properties || {}).reduce((acc, key) => {
          // Compute the defaults for this node, with the parent defaults we might
          // have from a previous run: defaults[key].
          const computedDefault = computeDefaults$1(schema.properties[key], (defaults || {})[key], rootSchema, (formData || {})[key], includeUndefinedValues, haveAllFields);

          if (includeUndefinedValues || computedDefault !== undefined) {
            acc[key] = computedDefault;
          }

          return acc;
        }, {});

      case 'array':
        // Inject defaults into existing array defaults
        if (Array.isArray(defaults)) {
          defaults = defaults.map((item, idx) => computeDefaults$1(schema.items[idx] || schema.additionalItems || {}, item, rootSchema, {}, includeUndefinedValues, haveAllFields));
        } // Deeply inject defaults into already existing form data


        if (Array.isArray(rawFormData)) {
          defaults = rawFormData.map((item, idx) => computeDefaults$1(schema.items, (defaults || {})[idx], rootSchema, item, {}, includeUndefinedValues, haveAllFields));
        }

        if (schema.minItems) {
          if (!isMultiSelect$1(schema, rootSchema)) {
            const defaultsLength = defaults ? defaults.length : 0;

            if (schema.minItems > defaultsLength) {
              const defaultEntries = defaults || []; // populate the array with the defaults

              const fillerSchema = Array.isArray(schema.items) ? schema.additionalItems : schema.items;
              const fillerEntries = fillObj$1(new Array(schema.minItems - defaultsLength), computeDefaults$1(fillerSchema, fillerSchema.defaults, rootSchema, {}, includeUndefinedValues, haveAllFields));
              return defaultEntries.concat(fillerEntries);
            }
          } else {
            return defaults || [];
          }
        } // undefined 默认一个空数组


        defaults = defaults === undefined ? [] : defaults;
    }

    return defaults;
  } // 获取默认form data


  function getDefaultFormState$1(_schema, formData) {
    let rootSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let includeUndefinedValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    let haveAllFields = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (!isObject$1(_schema)) {
      throw new Error("Invalid schema: ".concat(_schema));
    }

    const schema = retrieveSchema$1(_schema, rootSchema, formData);
    const defaults = computeDefaults$1(schema, _schema.default, rootSchema, formData, includeUndefinedValues, haveAllFields);

    if (typeof formData === 'undefined') {
      // No form data? Use schema defaults.
      return defaults;
    } // 传入formData时，合并传入数据


    if (isObject$1(formData) || Array.isArray(formData)) {
      return mergeDefaultsWithFormData$1(defaults, formData);
    }

    if (formData === 0 || formData === false || formData === '') {
      return formData;
    }

    return formData || defaults;
  }

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$1 = ".genFromComponent{font-size:14px;line-height:1;word-wrap:break-word;word-break:break-word;padding:0;margin:0}.genFromComponent a,.genFromComponent h1,.genFromComponent h2,.genFromComponent h3,.genFromComponent li,.genFromComponent p,.genFromComponent ul{font-size:14px}.genFromComponent .genFormIcon{width:12px;height:12px;vertical-align:top}.genFromComponent .genFormBtn{display:inline-block;line-height:1;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;color:#606266;-webkit-appearance:none;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;margin:0;-webkit-transition:.1s;transition:.1s;font-weight:500;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;padding:12px 20px;font-size:14px;border-radius:4px}.genFromComponent .genFormBtn.is-plain:focus,.genFromComponent .genFormBtn.is-plain:hover{background:#fff;border-color:#409eff;color:#409eff}.genFromComponent .hiddenWidget{display:none}.genFromComponent .fieldGroupWrap+.fieldGroupWrap .fieldGroupWrap_title{margin-top:20px}.genFromComponent .fieldGroupWrap_title{position:relative;display:block;width:100%;line-height:26px;margin-bottom:8px;font-size:15px;font-weight:700;border:0}.genFromComponent .fieldGroupWrap_des{font-size:12px;line-height:20px;margin-bottom:10px;color:#999}.genFromComponent .genFromWidget_des{padding:0;margin-top:0;margin-bottom:2px;font-size:12px;line-height:20px;color:#999;text-align:left;width:100%;-ms-flex-negative:0;flex-shrink:0}.genFromComponent .formItemErrorBox{margin:0 auto;color:#ff5757;padding-top:2px;position:absolute;top:100%;left:0;display:-webkit-box!important;line-height:16px;text-overflow:ellipsis;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:1;white-space:normal;font-size:12px;text-align:left}.genFromComponent .genFormIcon-qs{fill:#606266;vertical-align:middle;display:inline-block;width:16px;height:16px;margin-left:2px;margin-top:-2px;cursor:pointer}.genFromComponent .genFormItemRequired:before{content:\"*\";color:#f56c6c;margin-right:4px}.genFromComponent .appendCombining_box{margin-bottom:22px}.genFromComponent .appendCombining_box .appendCombining_box{margin-bottom:10px}.genFromComponent .appendCombining_box{padding:10px;background:hsla(0,0%,94.9%,.8);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1)}.genFromComponent .validateWidget{margin-bottom:0!important;width:100%!important;-ms-flex-preferred-size:100%!important;flex-basis:100%!important;padding:0!important}.genFromComponent .validateWidget .formItemErrorBox{padding:5px 0;position:relative}.genFromComponent .arrayField:not(.genFormItem){margin-bottom:22px}.genFromComponent .arrayField:not(.genFormItem) .arrayField{margin-bottom:10px}.genFromComponent .arrayOrderList{background:hsla(0,0%,94.9%,.8);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 0 3px 1px rgba(0,0,0,.1)}.genFromComponent .arrayOrderList_item{position:relative;padding:25px 10px 12px;border-radius:2px;margin-bottom:6px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.genFromComponent .arrayOrderList_bottomAddBtn{text-align:right;padding:15px 10px;margin-bottom:10px}.genFromComponent .bottomAddBtn{width:40%;min-width:10px;max-width:180px}.genFromComponent .arrayListItem_content{padding-top:15px;-webkit-box-flex:1;-ms-flex:1;flex:1;margin:0 auto;-webkit-box-shadow:0 -1px 0 0 rgba(0,0,0,.05);box-shadow:0 -1px 0 0 rgba(0,0,0,.05)}.genFromComponent .arrayListItem_index,.genFromComponent .arrayListItem_operateTool{position:absolute;height:25px}.genFromComponent .arrayListItem_index{top:6px;line-height:18px;height:18px;padding:0 6px;background-color:rgba(0,0,0,.28);color:#fff;font-size:12px;border-radius:2px}.genFromComponent .arrayListItem_operateTool{width:75px;right:9px;top:-1px;text-align:right;font-size:0}.genFromComponent .arrayListItem_btn{vertical-align:top;display:inline-block;padding:6px;margin:0;font-size:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;border:none;cursor:pointer;text-align:center;background:transparent;color:#666}.genFromComponent .arrayListItem_btn:hover{opacity:.6}.genFromComponent .arrayListItem_btn[disabled]{color:#999;opacity:.3!important;cursor:not-allowed}.genFromComponent .arrayListItem_orderBtn-bottom,.genFromComponent .arrayListItem_orderBtn-top{background-color:#f0f9eb}.genFromComponent .arrayListItem_btn-delete{background-color:#fef0f0}.genFromComponent .formFooter_item{text-align:right;border-top:1px solid rgba(0,0,0,.08);padding-top:10px}.genFromComponent.formInlineFooter>.fieldGroupWrap{display:inline-block;margin-right:10px}.genFromComponent.formInline .validateWidget{margin-right:0}.genFromComponent.formInline .formFooter_item{border-top:none;padding-top:0}.genFromWidget_des_mini{font-size:14px;line-height:1.5715}.layoutColumn .layoutColumn_w100{width:100%!important;-ms-flex-preferred-size:100%!important;flex-basis:100%!important}.layoutColumn .fieldGroupWrap_box{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.layoutColumn .fieldGroupWrap_box>div{width:100%;-ms-flex-preferred-size:100%;flex-basis:100%}.layoutColumn .fieldGroupWrap_box>.genFormItem{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:10px}.layoutColumn.layoutColumn-1 .fieldGroupWrap_box>.genFormItem{padding-right:0}.layoutColumn.layoutColumn-2 .fieldGroupWrap_box>.genFormItem{width:50%;-ms-flex-preferred-size:50%;flex-basis:50%}.layoutColumn.layoutColumn-3 .fieldGroupWrap_box>.genFormItem{width:33.333%;-ms-flex-preferred-size:33.333%;flex-basis:33.333%}";
  styleInject(css_248z$1);

  /**
   * Created by Liu.Jun on 2020/4/16 10:47 下午.
   */
  var vueProps$1 = {
    formFooter: {
      type: Object,
      default: () => ({
        show: true,
        okBtn: '保存',
        cancelBtn: '取消'
      })
    },
    value: {
      type: null,
      default: () => ({}),
      required: true
    },
    formProps: {
      type: Object,
      default: () => ({})
    },
    fallbackLabel: {
      type: Boolean,
      default: false
    },
    strictMode: {
      type: Boolean,
      default: false
    },
    schema: {
      type: Object,
      default: () => ({}),
      required: true
    },
    // 重置ui样式
    uiSchema: {
      type: Object,
      default: () => ({})
    },
    // 自定义校验规则
    customFormats: {
      type: Object,
      default: () => ({})
    },
    // 自定义校验
    customRule: {
      type: Function,
      default: null
    },
    // 重置自定义错误
    errorSchema: {
      type: Object,
      default: () => ({})
    }
  };

  /**
   * Created by Liu.Jun on 2020/12/27 9:53 下午.
   */
  var FormFooter = {
    name: 'FormFooter',
    props: {
      okBtn: {
        type: String,
        default: '保存'
      },
      okBtnProps: {
        type: Object,
        default: () => ({})
      },
      cancelBtn: {
        type: String,
        default: '取消'
      },
      formItemAttrs: {
        type: Object,
        default: () => ({})
      },
      globalOptions: null
    },

    render(h) {
      const self = this;
      const {
        okBtn,
        okBtnProps,
        cancelBtn,
        globalOptions: {
          COMPONENT_MAP
        }
      } = this.$props;
      return h(COMPONENT_MAP.formItem, _objectSpread2({
        class: {
          formFooter_item: true
        }
      }, this.formItemAttrs), [h(COMPONENT_MAP.button, {
        on: {
          click() {
            self.$emit('onCancel');
          }

        }
      }, cancelBtn), h(COMPONENT_MAP.button, {
        style: {
          marginLeft: '10px'
        },
        props: _objectSpread2({
          type: 'primary'
        }, okBtnProps),
        on: {
          click() {
            self.$emit('onSubmit');
          }

        }
      }, okBtn)]);
    }

  };

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
  var script$2 = {
    name: 'FieldGroupWrap',
    inject: ['genFormProvide'],
    props: {
      // 当前节点路径
      curNodePath: {
        type: String,
        default: ''
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showDescription: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    },
    computed: {
      trueTitle() {
        const title = this.title;

        if (title) {
          return title;
        }

        const genFormProvide = this.genFormProvide.value || this.genFormProvide;
        const backTitle = genFormProvide.fallbackLabel && this.curNodePath.split('.').pop();
        if (backTitle !== "".concat(Number(backTitle))) return backTitle;
        return '';
      }

    }
  };

  function normalizeComponent$1(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1$1 = normalizeComponent$1;

  const __vue_script__$2 = script$2;
  /* template */

  var __vue_render__$9 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "fieldGroupWrap"
    }, [_vm.showTitle && _vm.trueTitle ? _c("h3", {
      staticClass: "fieldGroupWrap_title"
    }, [_vm._v("\n        " + _vm._s(_vm.trueTitle) + "\n    ")]) : _vm._e(), _vm._v(" "), _vm.showDescription && _vm.description ? _c("p", {
      staticClass: "fieldGroupWrap_des",
      domProps: {
        innerHTML: _vm._s(_vm.description)
      }
    }) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "fieldGroupWrap_box"
    }, [_vm._t("default")], 2)]);
  };

  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;
  /* style */

  const __vue_inject_styles__$9 = undefined;
  /* scoped */

  const __vue_scope_id__$9 = undefined;
  /* module identifier */

  const __vue_module_identifier__$9 = undefined;
  /* functional template */

  const __vue_is_functional_template__$9 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$9 = /*#__PURE__*/normalizeComponent_1$1({
    render: __vue_render__$9,
    staticRenderFns: __vue_staticRenderFns__$9
  }, __vue_inject_styles__$9, __vue_script__$2, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

  /**
   * Created by Liu.Jun on 2020/4/22 18:58.
   */
  // 递归参数，统一props
  var vueProps = {
    formProps: {
      type: null
    },
    // 全局的配置，用于 初始化差异，适配不同的ui框架
    globalOptions: {
      type: null
    },
    // 当前节点schema
    schema: {
      type: Object,
      default: () => ({})
    },
    // 当前节点Ui Schema
    uiSchema: {
      type: Object,
      default: () => ({})
    },
    // 当前节点Error Schema
    errorSchema: {
      type: Object,
      default: () => ({})
    },
    // 自定义校验
    customRule: {
      type: Function,
      default: null
    },
    // 自定义校验规则
    customFormats: {
      type: Object,
      default: () => ({})
    },
    // 根节点 Schema
    rootSchema: {
      type: Object,
      default: () => ({})
    },
    // 根节点的数据
    rootFormData: {
      type: null,
      default: () => ({})
    },
    // 当前节点路径
    curNodePath: {
      type: String,
      default: ''
    },
    // 是否必填
    required: {
      type: Boolean,
      default: false
    },
    // 是否需要校验数据组
    // object array 类型默认会最后追加一个校验组件校验整体数据
    needValidFieldGroup: {
      type: Boolean,
      default: true
    }
  };

  /* script */

  /* template */
  var __vue_render__$8 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("svg", {
      staticClass: "genFormIcon genFormIcon-down",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }
    }, [_c("path", {
      attrs: {
        d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
      }
    })]);
  };

  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;
  /* style */

  const __vue_inject_styles__$8 = undefined;
  /* scoped */

  const __vue_scope_id__$8 = undefined;
  /* module identifier */

  const __vue_module_identifier__$8 = undefined;
  /* functional template */

  const __vue_is_functional_template__$8 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$8 = /*#__PURE__*/normalizeComponent_1$1({
    render: __vue_render__$8,
    staticRenderFns: __vue_staticRenderFns__$8
  }, __vue_inject_styles__$8, {}, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

  /* script */

  /* template */
  var __vue_render__$7 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("svg", {
      staticClass: "genFormIcon genFormIcon-up",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }
    }, [_c("path", {
      attrs: {
        d: "M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
      }
    })]);
  };

  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;
  /* style */

  const __vue_inject_styles__$7 = undefined;
  /* scoped */

  const __vue_scope_id__$7 = undefined;
  /* module identifier */

  const __vue_module_identifier__$7 = undefined;
  /* functional template */

  const __vue_is_functional_template__$7 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$7 = /*#__PURE__*/normalizeComponent_1$1({
    render: __vue_render__$7,
    staticRenderFns: __vue_staticRenderFns__$7
  }, __vue_inject_styles__$7, {}, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

  /* script */

  /* template */
  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("svg", {
      staticClass: "genFormIcon genFormIcon-close",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }
    }, [_c("path", {
      attrs: {
        d: "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1\n        191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0\n        0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
      }
    })]);
  };

  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;
  /* style */

  const __vue_inject_styles__$6 = undefined;
  /* scoped */

  const __vue_scope_id__$6 = undefined;
  /* module identifier */

  const __vue_module_identifier__$6 = undefined;
  /* functional template */

  const __vue_is_functional_template__$6 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$6 = /*#__PURE__*/normalizeComponent_1$1({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
  }, __vue_inject_styles__$6, {}, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

  /* script */

  /* template */
  var __vue_render__$5 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("svg", {
      staticClass: "genFormIcon genFormIcon-plus",
      attrs: {
        t: "1551322312294",
        viewBox: "0 0 1024 1024",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": "10297",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        width: "200",
        height: "200"
      }
    }, [_c("path", {
      attrs: {
        d: "M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z",
        "p-id": "10298"
      }
    }), _vm._v(" "), _c("path", {
      attrs: {
        d: "M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z",
        "p-id": "10299"
      }
    })]);
  };

  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;
  /* style */

  const __vue_inject_styles__$5 = undefined;
  /* scoped */

  const __vue_scope_id__$5 = undefined;
  /* module identifier */

  const __vue_module_identifier__$5 = undefined;
  /* functional template */

  const __vue_is_functional_template__$5 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$5 = /*#__PURE__*/normalizeComponent_1$1({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
  }, __vue_inject_styles__$5, {}, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

  /* script */

  /* template */
  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("svg", {
      staticClass: "genFormIcon genFormIcon-qs",
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 1024 1024"
      }
    }, [_c("path", {
      attrs: {
        d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 708c-22.1\n        0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm62.9-219.5a48.3 48.3 0 0\n        0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8\n        52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6\n        8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6\n        40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"
      }
    })]);
  };

  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;
  /* style */

  const __vue_inject_styles__$4 = undefined;
  /* scoped */

  const __vue_scope_id__$4 = undefined;
  /* module identifier */

  const __vue_module_identifier__$4 = undefined;
  /* functional template */

  const __vue_is_functional_template__$4 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$4 = /*#__PURE__*/normalizeComponent_1$1({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$4, {}, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  var Widget = {
    name: 'Widget',
    inject: ['genFormProvide'],
    props: {
      // 是否同步formData的值，默认表单元素都需要
      // oneOf anyOf 中的select属于formData之外的数据
      isFormData: {
        type: Boolean,
        default: true
      },
      // isFormData = false时需要传入当前 value 否则会通过 curNodePath 自动计算
      curValue: {
        type: null,
        default: 0
      },
      schema: {
        type: Object,
        default: () => ({})
      },
      uiSchema: {
        type: Object,
        default: () => ({})
      },
      errorSchema: {
        type: Object,
        default: () => ({})
      },
      customFormats: {
        type: Object,
        default: () => ({})
      },
      // 自定义校验
      customRule: {
        type: Function,
        default: null
      },
      widget: {
        type: [String, Function, Object],
        default: null
      },
      required: {
        type: Boolean,
        default: false
      },
      // 解决 JSON Schema和实际输入元素中空字符串 required 判定的差异性
      // 元素输入为 '' 使用 emptyValue 的值
      emptyValue: {
        type: null,
        default: undefined
      },
      // 部分场景可能需要格式化值，如vue .number 修饰符
      formatValue: {
        type: [Function],
        default: val => ({
          update: true,
          value: val
        })
      },
      rootFormData: {
        type: null
      },
      curNodePath: {
        type: String,
        default: ''
      },
      label: {
        type: String,
        default: ''
      },
      // width -> formItem width
      width: {
        type: String,
        default: ''
      },
      labelWidth: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      },
      // Widget attrs
      widgetAttrs: {
        type: Object,
        default: () => ({})
      },
      // Widget className
      widgetClass: {
        type: Object,
        default: () => ({})
      },
      // Widget style
      widgetStyle: {
        type: Object,
        default: () => ({})
      },
      // Field attrs
      fieldAttrs: {
        type: Object,
        default: () => ({})
      },
      // Field className
      fieldClass: {
        type: Object,
        default: () => ({})
      },
      // Field style
      fieldStyle: {
        type: Object,
        default: () => ({})
      },
      // props
      uiProps: {
        type: Object,
        default: () => ({})
      },
      widgetListeners: null,
      // widget组件 emits
      formProps: null,
      getWidget: null,
      renderScopedSlots: null,
      // 作用域插槽
      renderChildren: null,
      // 子节点 插槽
      globalOptions: null,
      // 全局配置
      onChange: null
    },
    computed: {
      value: {
        get() {
          if (this.isFormData) {
            return getPathVal$2(this.rootFormData, this.curNodePath);
          }

          return this.curValue;
        },

        set(value) {
          // 大多组件删除为空值会重置为null。
          const trueValue = value === '' || value === null ? this.emptyValue : value;

          if (this.isFormData) {
            setPathVal$1(this.rootFormData, this.curNodePath, trueValue);
          } else {
            this.$emit('onOtherDataChange', trueValue);
          }
        }

      }
    },

    created() {
      // 枚举类型默认值为第一个选项
      if (this.uiProps.enumOptions && this.uiProps.enumOptions.length > 0 && this.value === undefined && this.value !== this.uiProps.enumOptions[0]) {
        // array 渲染为多选框时默认为空数组
        if (this.schema.items) {
          this.value = [];
        } else if (this.required) {
          this.value = this.uiProps.enumOptions[0].value;
        }
      }
    },

    render(h) {
      const self = this;
      const {
        curNodePath
      } = this.$props; // 判断是否为根节点

      const isRootNode = isRootNodePath$1(curNodePath);
      const isMiniDes = self.formProps && self.formProps.isMiniDes;
      const miniDesModel = isMiniDes || self.globalOptions.HELPERS.isMiniDes(self.formProps);
      const descriptionVNode = self.description ? h('div', {
        domProps: {
          innerHTML: self.description
        },
        class: {
          genFromWidget_des: true,
          genFromWidget_des_mini: miniDesModel
        }
      }) : null;
      const {
        COMPONENT_MAP
      } = self.globalOptions;
      const miniDescriptionVNode = miniDesModel && descriptionVNode ? h(COMPONENT_MAP.popover, {
        style: {
          margin: '0 2px',
          fontSize: '16px',
          cursor: 'pointer'
        },
        props: {
          placement: 'top',
          trigger: 'hover'
        }
      }, [descriptionVNode, h(__vue_component__$4, {
        slot: 'reference'
      })]) : null; // form-item style

      const formItemStyle = _objectSpread2(_objectSpread2({}, self.fieldStyle), self.width ? {
        width: self.width,
        flexBasis: self.width,
        paddingRight: '10px'
      } : {}); // 运行配置回退到 属性名


      const label = fallbackLabel$1(self.label, self.widget && this.genFormProvide.fallbackLabel, curNodePath);
      return h(COMPONENT_MAP.formItem, {
        class: _objectSpread2(_objectSpread2({}, self.fieldClass), {}, {
          genFormItem: true
        }),
        style: formItemStyle,
        attrs: self.fieldAttrs,
        props: _objectSpread2(_objectSpread2({}, self.labelWidth ? {
          labelWidth: self.labelWidth
        } : {}), this.isFormData ? {
          // 这里对根节点打特殊标志，绕过elementUi无prop属性不校验
          prop: isRootNode ? '__$$root' : path2prop$1(curNodePath),
          rules: [{
            validator(rule, value, callback) {
              if (isRootNode) value = self.rootFormData; // 校验是通过对schema逐级展开校验 这里只捕获根节点错误

              const errors = validateFormDataAndTransformMsg$1({
                formData: value,
                schema: self.$props.schema,
                uiSchema: self.$props.uiSchema,
                customFormats: self.$props.customFormats,
                errorSchema: self.errorSchema,
                required: self.required,
                propPath: path2prop$1(curNodePath)
              });
              if (errors.length > 0) return callback(errors[0].message); // customRule 如果存在自定义校验

              const curCustomRule = self.$props.customRule;

              if (curCustomRule && typeof curCustomRule === 'function') {
                return curCustomRule({
                  field: curNodePath,
                  value,
                  rootFormData: self.rootFormData,
                  callback
                });
              }

              return callback();
            },

            trigger: 'change'
          }]
        } : {}),
        scopedSlots: {
          // 错误只能显示一行，多余...
          error: props => props.error ? h('div', {
            class: {
              formItemErrorBox: true
            },
            attrs: {
              title: props.error
            }
          }, [props.error]) : null
        }
      }, [label ? h('span', {
        slot: 'label',
        class: {
          genFormLabel: true,
          genFormItemRequired: self.required
        }
      }, ["".concat(label), miniDescriptionVNode, "".concat(self.formProps && self.formProps.labelSuffix || '')]) : null, // description
      // 非mini模式显示 description
      !miniDesModel ? descriptionVNode : null, h( // 关键输入组件
      self.widget, _objectSpread2(_objectSpread2({
        style: self.widgetStyle,
        class: self.widgetClass,
        attrs: _objectSpread2(_objectSpread2(_objectSpread2({}, self.widgetAttrs), self.uiProps), {}, {
          value: this.value // v-model

        }),
        ref: 'widgetRef'
      }, self.renderScopedSlots ? {
        scopedSlots: self.renderScopedSlots(h) || {}
      } : {}), {}, {
        on: _objectSpread2(_objectSpread2({}, self.widgetListeners ? self.widgetListeners : {}), {}, {
          'hook:mounted': function widgetMounted() {
            if (self.widgetListeners && self.widgetListeners['hook:mounted']) {
              // eslint-disable-next-line prefer-rest-params
              self.widgetListeners['hook:mounted'].apply(this, [...arguments]);
            } // 提供一种特殊的配置 允许直接访问到 widget vm


            if (self.getWidget && typeof self.getWidget === 'function') {
              self.getWidget.call(null, self.$refs.widgetRef);
            }
          },

          input(event) {
            console.log('event :>> ', event);
            debugger;
            const formatValue = self.formatValue(event); // 默认用户输入变了都是需要更新form数据保持同步，唯一特例 input number
            // 为了兼容 number 小数点后0结尾的数据场景
            // 比如 1. 1.010 这类特殊数据输入是不需要触发 新值的设置，否则会导致schema校验为非数字
            // 但由于element为了解另外的问题，会在nextTick时强制同步dom的值等于vm的值所以无法通过这种方式来hack，这里旧的这份逻辑依旧保留 不过update一直为true

            const preVal = self.value;

            if (formatValue.update && preVal !== formatValue.value) {
              self.value = formatValue.value;

              if (self.onChange) {
                self.onChange({
                  curVal: formatValue.value,
                  preVal,
                  parentFormData: getPathVal$2(self.rootFormData, self.curNodePath, 1),
                  rootFormData: self.rootFormData
                });
              }
            }

            if (self.widgetListeners && self.widgetListeners.input) {
              // eslint-disable-next-line prefer-rest-params
              self.widgetListeners.input.apply(this, [...arguments]);
            }
          }

        })
      }), self.renderChildren ? self.renderChildren(h) : null)]);
    }

  };

  var ObjectField = {
    name: 'ObjectField',
    functional: true,
    props: vueProps,

    render(h, context) {
      const {
        schema,
        uiSchema,
        errorSchema,
        needValidFieldGroup,
        curNodePath,
        rootFormData,
        globalOptions
      } = context.props; // required

      const isRequired = name => Array.isArray(schema.required) && !!~schema.required.indexOf(name); // 存在 dependencies 配置，需要当前属性是否存在依赖关系 和当前属性是否正在被依赖
      // tip: 判断依赖关系需要使用了 formData 的值来做判断，所以当用户输入的时候会触发整个对象树重新渲染
      // TODO: 每个属性都需要单独来遍历 dependencies 属性可以优化一点点点点点（可通过 key value 反转值加个缓存来计算）


      const isDependOn = name => {
        let isDependency = false; // 是否是一个被依赖项

        let curDependent = false; // 当前是否触发依赖

        if (isObject$1(schema.dependencies)) {
          curDependent = Object.entries(schema.dependencies).some(_ref => {
            let [key, value] = _ref;
            // 是否和当前属性存在依赖关系
            const tempDependency = !!(Array.isArray(value) && ~value.indexOf(name)); // 是否是一个被依赖项

            isDependency = isDependency || tempDependency; // 当前需要依赖

            return tempDependency && getPathVal$2(rootFormData, curNodePath)[key] !== undefined;
          });
        }

        return {
          isDependency,
          curDependent
        };
      };

      const {
        title,
        description,
        showTitle,
        showDescription,
        order,
        fieldClass,
        fieldAttrs,
        fieldStyle,
        onlyShowIfDependent
      } = getUiOptions$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      });
      const properties = Object.keys(schema.properties || {});
      const orderedProperties = orderProperties$1(properties, order); // 递归参数

      const propertiesVNodeList = orderedProperties.map(name => {
        const required = isRequired(name);
        const {
          isDependency,
          curDependent
        } = isDependOn(name); // onlyShowWhenDependent 只渲染被依赖的属性

        return isDependency && onlyShowIfDependent && !curDependent ? null : h(SchemaField, {
          key: name,
          props: _objectSpread2(_objectSpread2({}, context.props), {}, {
            schema: schema.properties[name],
            uiSchema: uiSchema[name],
            errorSchema: errorSchema[name],
            required: required || curDependent,
            curNodePath: computedCurPath$1(curNodePath, name)
          })
        });
      });
      return h(__vue_component__$9, {
        props: {
          title,
          description,
          showTitle,
          showDescription,
          curNodePath
        },
        class: _objectSpread2(_objectSpread2({}, context.data.class), fieldClass),
        attrs: fieldAttrs,
        style: fieldStyle
      }, [h('template', {
        slot: 'default'
      }, [...propertiesVNodeList, // 插入一个Widget，校验 object组 - minProperties. maxProperties. oneOf 等需要外层校验的数据
      needValidFieldGroup ? h(Widget, {
        key: 'validateWidget-object',
        class: {
          validateWidget: true,
          'validateWidget-object': true
        },
        props: {
          schema: Object.entries(schema).reduce((preVal, _ref2) => {
            let [key, value] = _ref2;
            if (schema.additionalProperties === false || !['properties', 'id', '$id'].includes(key)) preVal[key] = value;
            return preVal;
          }, {}),
          uiSchema,
          errorSchema,
          curNodePath,
          rootFormData,
          globalOptions
        }
      }) : null])]);
    }

  };

  var StringField = {
    name: 'StringField',
    props: vueProps,
    functional: true,

    render(h, context) {
      const {
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
        globalOptions: {
          WIDGET_MAP
        }
      } = context.props; // 可能是枚举数据使用select组件，否则使用 input

      const enumOptions = isSelect$1(schema) && optionsList$1(schema, uiSchema, curNodePath, rootFormData);
      const widgetConfig = getWidgetConfig$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      }, () => {
        const isNumber = schema.type === 'number' || schema.type === 'integer';
        return {
          widget: enumOptions ? WIDGET_MAP.common.select : WIDGET_MAP.formats[schema.format] || (isNumber ? WIDGET_MAP.types.number : WIDGET_MAP.types.string)
        };
      }); // 存在枚举数据列表 传入 enumOptions

      if (enumOptions && !widgetConfig.uiProps.enumOptions) {
        widgetConfig.uiProps.enumOptions = enumOptions;
      }

      return h(Widget, _objectSpread2(_objectSpread2({}, context.data), {}, {
        props: _objectSpread2(_objectSpread2({}, context.props), widgetConfig)
      }));
    }

  };

  /**
   * Created by Liu.Jun on 2020/4/21 9:24.
   * NumberField 复用StringField
   */
  var NumberField = {
    name: 'NumberField',
    props: vueProps,
    functional: true,

    render(h, context) {
      return h(StringField, context.data);
    }

  };

  /**
   * Created by Liu.Jun on 2020/4/21 9:24.
   * IntegerField 复用StringField
   */
  var IntegerField = {
    name: 'IntegerField',
    props: vueProps,
    functional: true,

    render(h, context) {
      return h(StringField, context.data);
    }

  };

  var BooleanField = {
    name: 'BooleanField',
    props: vueProps,
    functional: true,

    render(h, context) {
      const {
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
        globalOptions
      } = context.props; // Bool 会默认传入枚举类型选项 true false

      const enumOptions = optionsList$1({
        enumNames: schema.enumNames || ['true', 'false'],
        enum: schema.enum || [true, false]
      }, uiSchema, curNodePath, rootFormData);
      const widgetConfig = getWidgetConfig$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      }, () => ({
        widget: globalOptions.WIDGET_MAP.types.boolean
      }));
      widgetConfig.uiProps.enumOptions = widgetConfig.uiProps.enumOptions || enumOptions;
      return h(Widget, _objectSpread2(_objectSpread2({}, context.data), {}, {
        props: _objectSpread2(_objectSpread2({}, context.props), widgetConfig)
      }));
    }

  };

  var ArrayOrderList = {
    name: 'ArrayOrderList',
    props: {
      // 需要被排序的VNode list
      vNodeList: {
        type: Array,
        default: []
      },
      // tuple类型的数组，需要固定前值
      tupleItemsLength: {
        type: Number,
        default: 0
      },
      addable: {
        // 是否启用添加
        type: Boolean,
        default: true
      },
      showIndexNumber: {
        // 是否显示当前序号
        type: Boolean,
        default: false
      },
      sortable: {
        // 是否可排序
        type: Boolean,
        default: true
      },
      removable: {
        // 是否可移除
        type: Boolean,
        default: true
      },
      maxItems: {// 最多添加个数
      },
      minItems: {// 最少添加个数
      },
      globalOptions: null
    },
    computed: {
      canAdd() {
        const {
          addable,
          maxItems,
          vNodeList
        } = this.$props; // 配置不可添加

        if (!addable) return false; // 配置了最大个数

        if (maxItems !== undefined) {
          return vNodeList.length < maxItems;
        }

        return true;
      },

      canRemove() {
        const {
          removable,
          minItems,
          vNodeList
        } = this.$props; // 配置不可添加

        if (!removable) return false;

        if (minItems !== undefined) {
          return vNodeList.length > minItems;
        }

        return true;
      }

    },

    render(h) {
      // 没有数据，且不能添加不渲染该组件
      if (this.vNodeList.length <= 0 && !this.addable) return null; // 是否可继续添加元素

      return h('div', {
        class: {
          arrayOrderList: true
        }
      }, this.vNodeList.map((_ref, index) => {
        let {
          key,
          vNode: VnodeItem
        } = _ref;
        const trueIndex = this.tupleItemsLength + index;
        const indexNumber = index + 1;
        return h('div', {
          key,
          class: {
            arrayOrderList_item: true
          }
        }, [this.showIndexNumber ? h('div', {
          class: {
            arrayListItem_index: true
          }
        }, indexNumber) : null, h('div', {
          class: {
            arrayListItem_operateTool: true
          }
        }, [h('button', {
          // 配置不可排序不显示排序按钮
          style: _objectSpread2({}, !this.sortable ? {
            display: 'none'
          } : {}),
          attrs: {
            type: 'button',
            disabled: !this.sortable || index === 0
          },
          class: {
            arrayListItem_btn: true,
            'arrayListItem_orderBtn-top': true
          },
          on: {
            click: () => {
              this.$emit('onArrayOperate', {
                command: 'moveUp',
                data: {
                  index: trueIndex
                }
              });
            }
          }
        }, [h(__vue_component__$7)]), h('button', {
          // 配置不可排序不显示排序按钮
          style: _objectSpread2({}, !this.sortable ? {
            display: 'none'
          } : {}),
          attrs: {
            type: 'button',
            disabled: !this.sortable || index === this.vNodeList.length - 1
          },
          class: {
            arrayListItem_btn: true,
            'arrayListItem_orderBtn-bottom': true
          },
          on: {
            click: () => {
              this.$emit('onArrayOperate', {
                command: 'moveDown',
                data: {
                  index: trueIndex
                }
              });
            }
          }
        }, [h(__vue_component__$8)]), h('button', {
          // 配置不可移除不显示移除按钮
          style: _objectSpread2({}, !this.removable ? {
            display: 'none'
          } : {}),
          attrs: {
            type: 'button',
            disabled: !this.canRemove
          },
          class: {
            arrayListItem_btn: true,
            'arrayListItem_btn-delete': true
          },
          on: {
            click: () => {
              this.$emit('onArrayOperate', {
                command: 'remove',
                data: {
                  index: trueIndex
                }
              });
            }
          }
        }, [h(__vue_component__$6)])]), h('div', {
          class: {
            arrayListItem_content: true
          }
        }, [VnodeItem])]);
      }).concat([h('p', {
        style: _objectSpread2({}, !this.canAdd ? {
          display: 'none'
        } : {}),
        class: {
          arrayOrderList_bottomAddBtn: true
        }
      }, [h('button', {
        attrs: {
          type: 'button'
        },
        class: {
          bottomAddBtn: true,
          'is-plain': true,
          genFormBtn: true
        },
        on: {
          click: () => {
            this.$emit('onArrayOperate', {
              command: 'add'
            });
          }
        }
      }, [h(__vue_component__$5, {
        style: {
          marginRight: '5px'
        }
      }), this.maxItems ? "( ".concat(this.vNodeList.length, " / ").concat(this.maxItems, " )") : ''])])]));
    }

  };

  var ArrayFieldNormal = {
    name: 'ArrayFieldNormal',
    functional: true,
    props: _objectSpread2(_objectSpread2({}, vueProps), {}, {
      itemsFormData: {
        type: Array // default: () => []

      }
    }),

    render(h, context) {
      const {
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
        itemsFormData,
        errorSchema,
        globalOptions
      } = context.props;
      const {
        title,
        description,
        addable,
        showIndexNumber,
        sortable,
        removable,
        showTitle,
        showDescription,
        fieldClass,
        fieldAttrs,
        fieldStyle
      } = getUiOptions$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      });
      const arrayItemsVNodeList = itemsFormData.map((item, index) => {
        const tempUiSchema = replaceArrayIndex$1({
          schema: schema.items,
          uiSchema: uiSchema.items
        }, index);
        return {
          key: item.key,
          vNode: h(SchemaField, {
            key: item.key,
            props: _objectSpread2(_objectSpread2({}, context.props), {}, {
              schema: schema.items,
              required: ![].concat(schema.items.type).includes('null'),
              uiSchema: _objectSpread2(_objectSpread2({}, uiSchema.items), tempUiSchema),
              errorSchema: errorSchema.items,
              curNodePath: computedCurPath$1(curNodePath, index)
            })
          })
        };
      });
      return h(__vue_component__$9, {
        props: {
          title,
          description,
          showTitle,
          showDescription,
          curNodePath
        },
        class: _objectSpread2(_objectSpread2({}, context.data.class), fieldClass),
        attrs: fieldAttrs,
        style: fieldStyle
      }, [h(ArrayOrderList, {
        props: {
          vNodeList: arrayItemsVNodeList,
          showIndexNumber,
          addable,
          sortable,
          removable,
          maxItems: schema.maxItems,
          minItems: schema.minItems,
          globalOptions
        },
        on: context.listeners
      })]);
    }

  };

  var ArrayFieldMultiSelect = {
    name: 'ArrayFieldMultiSelect',
    functional: true,
    props: _objectSpread2({}, vueProps),

    render(h, context) {
      const {
        schema,
        rootSchema,
        uiSchema,
        curNodePath,
        rootFormData,
        globalOptions
      } = context.props; // 这里需要索引当前节点，通过到schemaField组件的会统一处理

      const itemsSchema = retrieveSchema$1(schema.items, rootSchema);
      const enumOptions = optionsList$1(itemsSchema, uiSchema, curNodePath, rootFormData);
      const widgetConfig = getWidgetConfig$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      }, () => ({
        widget: globalOptions.WIDGET_MAP.common.checkboxGroup
      })); // 存在枚举数据列表 传入 enumOptions

      widgetConfig.uiProps.multiple = true;

      if (enumOptions && !widgetConfig.uiProps.enumOptions) {
        widgetConfig.uiProps.enumOptions = enumOptions;
      }

      return h(Widget, _objectSpread2(_objectSpread2({}, context.data), {}, {
        props: _objectSpread2(_objectSpread2({}, context.props), widgetConfig)
      }));
    }

  };

  var ArrayFieldTuple = {
    name: 'ArrayFieldTuple',
    props: _objectSpread2(_objectSpread2({}, vueProps), {}, {
      itemsFormData: {
        type: Array,
        default: () => []
      }
    }),

    created() {
      this.fixItemsFormData();
    },

    methods: {
      // 兼容数据 长度不足的的场景
      fixItemsFormData() {
        const isNoArray = !Array.isArray(this.itemsFormData);

        if (isNoArray || this.itemsFormData.length < this.schema.items.length) {
          // 这里需要补齐默认数据，计算出需要的数据
          const curSchemaState = getDefaultFormState$1(this.schema, undefined, this.rootSchema);

          if (isNoArray) {
            // 数据修复 - 重置一个新的值
            this.$emit('onArrayOperate', {
              command: 'setNewTarget',
              data: {
                newTarget: curSchemaState
              }
            });
          } else {
            // 修复数据 - 追加不足的数据
            this.$emit('onArrayOperate', {
              command: 'batchPush',
              data: {
                pushArray: curSchemaState.slice(this.itemsFormData.length)
              }
            });
          }
        }
      }

    },

    render(h) {
      if (!Array.isArray(this.itemsFormData)) return null;
      const {
        schema,
        uiSchema,
        errorSchema,
        curNodePath,
        globalOptions
      } = this.$props;
      const {
        title,
        description,
        addable,
        showIndexNumber,
        sortable,
        removable,
        showTitle,
        showDescription,
        fieldClass,
        fieldAttrs,
        fieldStyle
      } = getUiOptions$1({
        schema,
        uiSchema,
        curNodePath,
        rootFormData: this.rootFormData
      }); // 拆分为 tuple 和 additional

      const cutOfArr = cutOff(this.itemsFormData, this.schema.items.length - 1);
      const tupleVnodeArr = cutOfArr[0].map((item, index) => h(SchemaField, {
        key: item.key,
        props: _objectSpread2(_objectSpread2({}, this.$props), {}, {
          required: ![].concat(schema.items[index].type).includes('null'),
          schema: schema.items[index],
          uiSchema: uiSchema.items ? uiSchema.items[index] : {},
          errorSchema: errorSchema.items ? errorSchema.items[index] : {},
          curNodePath: computedCurPath$1(curNodePath, index)
        })
      })); // 通过order组件做可排序处理

      const additionalVnodeArr = cutOfArr[1].map((item, index) => {
        const tempUiSchema = replaceArrayIndex$1({
          schema: schema.additionalItems,
          uiSchema: uiSchema.additionalItems
        }, index);
        return {
          key: item.key,
          vNode: h(SchemaField, {
            key: item.key,
            props: _objectSpread2(_objectSpread2({}, this.$props), {}, {
              schema: schema.additionalItems,
              required: ![].concat(schema.additionalItems.type).includes('null'),
              uiSchema: _objectSpread2(_objectSpread2({}, uiSchema.additionalItems), tempUiSchema),
              errorSchema: errorSchema.additionalItems,
              curNodePath: computedCurPath$1(curNodePath, index + schema.items.length)
            })
          })
        };
      }); // 是否可添加同时受限于 additionalItems 属性

      const trueAddable = (addable === undefined ? true : addable) && allowAdditionalItems$1(this.schema); // 默认循环固定配置的数据 长度外的使用ArrayOrderList渲染

      return h(__vue_component__$9, {
        props: {
          title,
          description,
          showTitle,
          showDescription,
          curNodePath
        },
        class: fieldClass,
        attrs: fieldAttrs,
        style: fieldStyle
      }, [// 先显示Tuple固定项
      ...tupleVnodeArr, // additional items
      h(ArrayOrderList, {
        props: {
          vNodeList: additionalVnodeArr,
          tupleItemsLength: schema.items.length,
          addable: trueAddable,
          showIndexNumber,
          sortable,
          removable,
          maxItems: schema.maxItems,
          minItems: schema.minItems,
          globalOptions
        },
        on: this.$listeners
      })]);
    }

  };

  var ArrayFieldSpecialFormat = {
    name: 'ArrayFieldSpecialFormat',
    props: vueProps,
    functional: true,

    render(h, context) {
      const {
        schema,
        uiSchema,
        curNodePath,
        rootFormData,
        globalOptions
      } = context.props;
      const widgetConfig = getWidgetConfig$1({
        schema: _objectSpread2({
          'ui:widget': globalOptions.WIDGET_MAP.formats[schema.format]
        }, schema),
        uiSchema,
        curNodePath,
        rootFormData
      });
      return h(Widget, _objectSpread2(_objectSpread2({}, context.data), {}, {
        props: _objectSpread2(_objectSpread2({}, context.props), widgetConfig)
      }));
    }

  };

  var ArrayField = {
    name: 'ArrayField',
    props: vueProps,

    data() {
      return {
        // 通过维护一份key，一份值 来解决list key的问题
        formKeys: this.getCuFormData().map(() => genId())
      };
    },

    computed: {
      itemsFormData() {
        const formKeys = this.$data.formKeys;
        return this.curFormData.map((item, index) => ({
          key: formKeys[index],
          value: item
        }));
      },

      curFormData() {
        return this.getCuFormData();
      }

    },
    watch: {
      curFormData(newVal, oldVal) {
        // 引用类型，当值不相等，说明是被重新赋值
        if (newVal !== oldVal && Array.isArray(newVal)) {
          this.formKeys = newVal.map(() => genId());
        }
      }

    },
    methods: {
      // 获取当前的值
      getCuFormData() {
        const {
          rootFormData,
          curNodePath
        } = this.$props;
        const value = getPathVal$2(rootFormData, curNodePath);
        if (Array.isArray(value)) return value;
        console.error('error: type array，值必须为 array 类型');
        return [];
      },

      // 获取一个新item
      getNewFormDataRow() {
        const {
          schema,
          rootSchema
        } = this.$props;
        let itemSchema = schema.items; // https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation
        // 数组为项的集合搭配additionalItems属性需要特殊处理

        if (isFixedItems$1(this.schema) && allowAdditionalItems$1(this.schema)) {
          itemSchema = schema.additionalItems;
        }

        return getDefaultFormState$1(itemSchema, undefined, rootSchema);
      },

      // 数组排序相关操作
      handleArrayOperate(_ref) {
        let {
          command,
          data
        } = _ref;
        // 统一处理数组数据的 新增，删除，排序等变更
        const strategyMap = {
          moveUp(target, _ref2) {
            let {
              index
            } = _ref2;
            moveUpAt(target, index);
          },

          moveDown(target, _ref3) {
            let {
              index
            } = _ref3;
            moveDownAt(target, index);
          },

          remove(target, _ref4) {
            let {
              index
            } = _ref4;
            removeAt(target, index);
          },

          add(target, _ref5) {
            let {
              newRowData
            } = _ref5;
            target.push(newRowData);
          },

          batchPush(target, _ref6) {
            let {
              pushArray
            } = _ref6;
            pushArray.forEach(item => {
              target.push(item);
            });
          },

          setNewTarget(target, _ref7) {
            let {
              formData,
              nodePath,
              newTarget
            } = _ref7;
            setPathVal$1(formData, nodePath, newTarget);
          }

        };
        const curStrategy = strategyMap[command];

        if (curStrategy) {
          let formDataPrams = data;
          let keysParams = data;

          if (command === 'add') {
            // 单个添加
            formDataPrams = {
              newRowData: this.getNewFormDataRow()
            };
            keysParams = {
              newRowData: genId()
            };
          } else if (command === 'batchPush') {
            // 批量添加
            keysParams = {
              pushArray: formDataPrams.pushArray.map(item => genId())
            };
          } else if (command === 'setNewTarget') {
            // 设置
            formDataPrams = {
              formData: this.rootFormData,
              nodePath: this.curNodePath,
              newTarget: formDataPrams.newTarget
            };
            keysParams = {
              formData: this.$data,
              nodePath: 'formKeys',
              newTarget: formDataPrams.newTarget.map(item => genId())
            };
          } // 同步修改 formData keys


          curStrategy.apply(this, [this.$data.formKeys, keysParams]); // 修改formData数据

          curStrategy.apply(this, [this.curFormData, formDataPrams]);
        } else {
          throw new Error("\u9519\u8BEF - \u672A\u77E5\u7684\u64CD\u4F5C\uFF1A[".concat(command, "]"));
        }
      }

    },

    render(h) {
      const self = this;
      const {
        schema,
        uiSchema,
        rootSchema,
        rootFormData,
        curNodePath,
        globalOptions
      } = this.$props;

      if (!schema.hasOwnProperty('items')) {
        throw new Error("[".concat(schema, "] \u8BF7\u5148\u5B9A\u4E49 items\u5C5E\u6027"));
      } // 多选类型


      if (isMultiSelect$1(schema, rootSchema)) {
        // item 为枚举固定值
        return h(ArrayFieldMultiSelect, {
          props: this.$props,
          class: {
            [lowerCase(ArrayFieldMultiSelect.name)]: true
          }
        });
      } // 特殊处理 date datetime time url-upload
      // array 支持配置 ui:widget
      // 时间日期区间 或者 ui:widget 特殊配置


      if (schema.format || schema['ui:widget'] || uiSchema['ui:widget']) {
        return h(ArrayFieldSpecialFormat, {
          props: this.$props,
          class: {
            [lowerCase(ArrayFieldSpecialFormat.name)]: true
          }
        });
      } // https://json-schema.org/understanding-json-schema/reference/array.html#list-validation
      // https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation


      const CurrentField = isFixedItems$1(schema) ? ArrayFieldTuple : ArrayFieldNormal;
      return h('div', [h(CurrentField, {
        props: _objectSpread2({
          itemsFormData: this.itemsFormData
        }, this.$props),
        class: {
          [lowerCase(CurrentField.name)]: true
        },
        on: {
          onArrayOperate: this.handleArrayOperate
        }
      }), // 插入一个Widget，校验 array - maxItems. minItems. uniqueItems 等items外的属性校验
      this.needValidFieldGroup ? h(Widget, {
        key: 'validateWidget-array',
        class: {
          validateWidget: true,
          'validateWidget-array': true
        },
        props: {
          schema: Object.entries(self.$props.schema).reduce((preVal, _ref8) => {
            let [key, value] = _ref8;
            if (key !== 'items') preVal[key] = value;
            return preVal;
          }, {}),
          uiSchema,
          errorSchema: this.errorSchema,
          curNodePath,
          rootFormData,
          globalOptions
        }
      }) : null]);
    }

  };

  const _excluded$7 = ["title", "description", "properties"];
  var SelectLinkageField = {
    name: 'SelectLinkageField',
    props: _objectSpread2(_objectSpread2({}, vueProps), {}, {
      combiningType: {
        type: String,
        default: 'anyOf' // anyOf oneOf

      },
      selectList: {
        type: Array,
        require: true
      }
    }),

    data() {
      const curSelectIndex = this.computedCurSelectIndexByFormData(getPathVal$2(this.rootFormData, this.curNodePath));
      return {
        curSelectIndex
      };
    },

    methods: {
      computedCurSelectIndexByFormData(formData) {
        return getMatchingOption$1(formData, this.selectList, this.rootSchema, true);
      },

      // 下拉选项 VNode
      getSelectBoxVNode() {
        // 下拉选项参数
        const selectWidgetConfig = getWidgetConfig$1({
          schema: this.schema["".concat(this.combiningType, "Select")] || {},
          // 扩展 oneOfSelect,anyOfSelect字段
          uiSchema: this.uiSchema["".concat(this.combiningType, "Select")] || {},
          // 通过 uiSchema['oneOf'] 配置ui信息
          curNodePath: this.curNodePath,
          rootFormData: this.rootFormData
        }, () => ({
          // 枚举参数
          widget: 'SelectWidget'
        })); // title description 回退到 schema 配置，但这里不使用 uiSchema配置
        // select ui配置需要使用 (oneOf|anyOf)Select

        selectWidgetConfig.label = selectWidgetConfig.label || this.schema.title;
        selectWidgetConfig.description = selectWidgetConfig.description || this.schema.description; // 下拉列表枚举值

        if (!selectWidgetConfig.uiProps.enumOptions) {
          const uiSchemaSelectList = this.uiSchema[this.combiningType] || [];
          selectWidgetConfig.uiProps.enumOptions = this.selectList.map((option, index) => {
            const curUiOptions = getUiOptions$1({
              schema: option,
              uiSchema: uiSchemaSelectList[index],
              containsSpec: false // curNodePath: this.curNodePath,
              // rootFormData: this.rootFormData,

            });
            return {
              label: curUiOptions.title || "\u9009\u9879 ".concat(index + 1),
              value: index
            };
          });
        } // oneOf option 渲染
        // 选择框 VNode


        return this.$createElement(Widget, {
          key: "fieldSelect_".concat(this.combiningType),
          class: {
            ["fieldSelect_".concat(this.combiningType)]: true
          },
          props: _objectSpread2({
            isFormData: false,
            curValue: this.curSelectIndex,
            globalOptions: this.globalOptions,
            rootFormData: this.rootFormData,
            curNodePath: this.curNodePath
          }, selectWidgetConfig),
          on: {
            onOtherDataChange: event => {
              this.curSelectIndex = event;
            }
          }
        });
      }

    },
    watch: {
      // 对象 切换了select
      // 如果object 类型 option有添加属性 这里做移除
      // 对新option计算默认值
      curSelectIndex(newVal, oldVal) {
        const curFormData = getPathVal$2(this.rootFormData, this.curNodePath); // 计算出 新选项默认值

        const newOptionData = getDefaultFormState$1(this.selectList[newVal], undefined, this.rootSchema);
        const hasOwn = Object.prototype.hasOwnProperty; // 移除旧key

        if (isObject$1(curFormData)) {
          const oldSelectSchema = retrieveSchema$1(this.selectList[oldVal], this.rootSchema);

          if (getSchemaType$1(oldSelectSchema) === 'object') {
            // 移除旧schema添加的属性
            // Object.keys(oldSelectSchema.properties)
            for (const key in oldSelectSchema.properties) {
              if (hasOwn.call(oldSelectSchema.properties, key) && !hasOwn.call(newOptionData, key)) {
                deletePathVal$1(curFormData, key); // delete curFormData[key];
              }
            }
          }
        } // 设置新值


        if (isObject$1(newOptionData)) {
          Object.entries(newOptionData).forEach(_ref => {
            let [key, value] = _ref;

            if (value !== undefined && (curFormData[key] === undefined || this.selectList[newVal].properties[key].const !== undefined || isObject$1(value))) {
              // 这里没找到一个比较合理的新旧值合并方式
              //
              // 1. 如果anyOf里面同名属性中的schema包含了 const 配置，产生了新的值这里做覆盖处理
              // 2. 其它场景保留同名key的旧的值
              setPathVal$1(curFormData, key, value);
            }
          });
        } else {
          setPathVal$1(this.rootFormData, this.curNodePath, newOptionData || curFormData);
        } // 可添加一个配置通知外部这里变更
        // todo: onChangeOption

      }

    },

    render(h) {
      const {
        curNodePath
      } = this.$props;
      const pathClassName = nodePath2ClassName$1(curNodePath); // is object

      const isTypeObject = this.schema.type === 'object' || this.schema.properties; // 选择附加的节点

      const childrenVNodeList = [this.getSelectBoxVNode()]; // 当前option内容

      let curSelectSchema = this.selectList[this.curSelectIndex]; // 当前选中节点合并schema

      if (curSelectSchema) {
        const _this$schema = this.schema,
              _this$combiningType = this.combiningType,
              _ref2 = "".concat(this.combiningType, "Select"),
              parentSchema = _objectWithoutProperties(_this$schema, ["properties", _this$combiningType, _ref2].map(_toPropertyKey)); // 合并父级schema


        curSelectSchema = Object.assign({}, parentSchema, curSelectSchema);
      } // object类型但没有附加属性


      const isObjectEmptyAttachProperties = isTypeObject && isEmptyObject(curSelectSchema && curSelectSchema.properties); // 当前选中的 oneOf 附加节点 VNode

      if (curSelectSchema && !isObjectEmptyAttachProperties) {
        // 覆盖父级的属性
        const _this$schema2 = this.schema,
              _this$combiningType2 = this.combiningType,
              _ref3 = "".concat(this.combiningType, "Select"),
              parentSchema = _objectWithoutProperties(_this$schema2, ["properties", _this$combiningType2, _ref3].map(_toPropertyKey));

        curSelectSchema = Object.assign({}, parentSchema, curSelectSchema); // 当前节点的ui err配置，用来支持所有选项的统一配置
        // 取出 oneOf anyOf 同级配置，然后再合并到 当前选中的schema中

        const userUiOptions = filterObject(getUiOptions$1({
          schema: {},
          uiSchema: this.uiSchema,
          containsSpec: false,
          curNodePath,
          rootFormData: this.rootFormData
        }), key => key === this.combiningType ? undefined : "ui:".concat(key));
        const userErrOptions = filterObject(getUserErrOptions$1({
          schema: {},
          uiSchema: this.uiSchema,
          errorSchema: this.errorSchema
        }), key => key === this.combiningType ? undefined : "err:".concat(key));
        childrenVNodeList.push(h(SchemaField, {
          key: "appendSchema_".concat(this.combiningType),
          props: _objectSpread2(_objectSpread2({}, this.$props), {}, {
            schema: _objectSpread2({
              'ui:showTitle': false,
              // 默认不显示title
              'ui:showDescription': false
            }, curSelectSchema),
            required: this.required,
            uiSchema: _objectSpread2(_objectSpread2({}, userUiOptions), (this.uiSchema[this.combiningType] || [])[this.curSelectIndex]),
            errorSchema: _objectSpread2(_objectSpread2({}, userErrOptions), (this.errorSchema[this.combiningType] || [])[this.curSelectIndex]) // needValidFieldGroup: false // 单独校验，这里无需处理

          })
        }));
      } // object 需要保持原有属性，如果存在原有属性这里单独渲染


      let originVNode = null;

      if (isTypeObject && !isEmptyObject(this.schema.properties)) {
        const optionSchema = _objectWithoutProperties(curSelectSchema, _excluded$7); // object 原始项渲染也需要合并anyOf的内容


        const origSchema = Object.assign({}, this.schema, optionSchema);
        delete origSchema[this.combiningType];
        originVNode = h(SchemaField, {
          key: "origin_".concat(this.combiningType),
          class: {
            ["".concat(this.combiningType, "_originBox")]: true,
            ["".concat(pathClassName, "-originBox")]: true
          },
          props: _objectSpread2(_objectSpread2({}, this.$props), {}, {
            schema: origSchema // needValidFieldGroup: false // 单独校验，这里无需处理

          })
        });
      } // oneOf 校验 VNode


      childrenVNodeList.push(h(Widget, {
        key: "validateWidget-".concat(this.combiningType),
        class: {
          validateWidget: true,
          ["validateWidget-".concat(this.combiningType)]: true
        },
        props: {
          schema: this.schema,
          uiSchema: this.uiSchema,
          errorSchema: this.errorSchema,
          curNodePath: this.curNodePath,
          rootFormData: this.rootFormData,
          globalOptions: this.globalOptions
        }
      }));
      return h('div', [originVNode, h('div', {
        key: "appendBox_".concat(this.combiningType),
        class: {
          appendCombining_box: true,
          ["".concat(this.combiningType, "_appendBox")]: true,
          ["".concat(pathClassName, "-appendBox")]: true
        }
      }, childrenVNodeList)]);
    }

  };

  const _excluded$6 = ["props"];
  var AnyOfField = {
    name: 'AnyOfField',
    functional: true,

    render(h, context) {
      const _context$data = context.data,
            {
        props
      } = _context$data,
            otherData = _objectWithoutProperties(_context$data, _excluded$6);

      return h(SelectLinkageField, _objectSpread2(_objectSpread2({}, otherData), {}, {
        props: _objectSpread2(_objectSpread2({}, props), {}, {
          combiningType: 'anyOf',
          selectList: props.schema.anyOf
        })
      }), context.children);
    }

  };

  const _excluded$5 = ["props"];
  var OneOfField = {
    name: 'oneOfField',
    functional: true,

    render(h, context) {
      const _context$data = context.data,
            {
        props
      } = _context$data,
            otherData = _objectWithoutProperties(_context$data, _excluded$5);

      return h(SelectLinkageField, _objectSpread2(_objectSpread2({}, otherData), {}, {
        props: _objectSpread2(_objectSpread2({}, props), {}, {
          combiningType: 'oneOf',
          selectList: props.schema.oneOf
        })
      }), context.children);
    }

  };

  /**
   * Created by Liu.Jun on 2020/4/20 9:55 下午.
   */

  const FIELDS_MAPS = {
    array: ArrayField,
    boolean: BooleanField,
    integer: IntegerField,
    number: NumberField,
    object: ObjectField,
    string: StringField,
    null: {
      render() {
        return null;
      }

    },
    anyOf: AnyOfField,
    oneOf: OneOfField
  };
  var FIELDS_MAP = FIELDS_MAPS;

  var SchemaField = {
    name: 'SchemaField',
    props: vueProps,
    functional: true,

    render(h, context) {
      const props = context.props;
      const {
        rootSchema
      } = props; // 目前不支持schema依赖和additionalProperties 展示不需要传递formData
      // const schema = retrieveSchema(props.schema, rootSchema, formData);

      const schema = retrieveSchema$1(props.schema, rootSchema); // 当前参数

      const curProps = _objectSpread2(_objectSpread2({}, props), {}, {
        schema
      }); // 空数据


      if (Object.keys(schema).length === 0) {
        return null;
      } // 获取节点Ui配置渲染field组件


      const {
        field: fieldComponent,
        fieldProps
      } = getUiField$1(FIELDS_MAP, curProps); // hidden

      const hiddenWidget = isHiddenWidget$1({
        schema,
        uiSchema: props.uiSchema,
        curNodePath: props.curNodePath,
        rootFormData: props.rootFormData
      });
      const pathClassName = nodePath2ClassName$1(props.curNodePath);

      if (schema.anyOf && schema.anyOf.length > 0 && !isSelect$1(schema)) {
        // anyOf
        return h(FIELDS_MAP.anyOf, {
          class: {
            ["".concat(pathClassName, "-anyOf")]: true,
            fieldItem: true,
            anyOfField: true
          },
          props: curProps
        });
      }

      if (schema.oneOf && schema.oneOf.length > 0 && !isSelect$1(schema)) {
        // oneOf
        return h(FIELDS_MAP.oneOf, {
          class: {
            ["".concat(pathClassName, "-oneOf")]: true,
            fieldItem: true,
            oneOfField: true
          },
          props: curProps
        });
      }

      return fieldComponent && !hiddenWidget ? h(fieldComponent, {
        props: _objectSpread2(_objectSpread2({}, curProps), {}, {
          fieldProps
        }),
        class: _objectSpread2(_objectSpread2({}, context.data.class), {}, {
          [lowerCase(fieldComponent.name) || fieldComponent]: true,
          hiddenWidget,
          fieldItem: true,
          [pathClassName]: true
        })
      }) : null;
    }

  };

  const _excluded$4 = ["layoutColumn", "inlineFooter"];
  function createForm() {
    let globalOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // global components
    if (globalOptions.WIDGET_MAP.widgetComponents) {
      Object.entries(globalOptions.WIDGET_MAP.widgetComponents).forEach(_ref => {
        let [key, value] = _ref;
        return Vue__default["default"].component(key, value);
      });
    }

    return {
      name: 'VueForm',
      props: vueProps$1,

      provide() {
        return {
          genFormProvide: this.genFormProvide
        };
      },

      data() {
        const formData = getDefaultFormState$1(this.$props.schema, this.$props.value, this.$props.schema, this.$props.strictMode); // 保持v-model双向数据及时性

        this.emitFormDataChange(formData, this.value);
        return {
          formData
        };
      },

      computed: {
        genFormProvide() {
          return {
            fallbackLabel: this.fallbackLabel
          };
        },

        footerParams() {
          return _objectSpread2({
            show: true,
            okBtn: '保存',
            cancelBtn: '取消'
          }, this.formFooter);
        }

      },
      watch: {
        formData: {
          handler(newValue, oldValue) {
            this.emitFormDataChange(newValue, oldValue);
          },

          deep: true
        },

        // 用于初始化了formData，监听变更是否重新计算 formData
        schema(newVal, oldVal) {
          this.willReceiveProps(newVal, oldVal);
        },

        value(newVal, oldVal) {
          this.willReceiveProps(newVal, oldVal);
        }

      },
      methods: {
        emitFormDataChange(newValue, oldValue) {
          // 支持v-model ，引用类型
          this.$emit('input', newValue); // change 事件，引用类型修改属性 newValue

          this.$emit('on-change', {
            newValue,
            oldValue
          });
        },

        // 避免用于双向绑定v-model 可能导致的循环调用
        willReceiveProps(newVal, oldVal) {
          if (!deepEquals$1(newVal, oldVal)) {
            const formData = getDefaultFormState$1(this.$props.schema, this.$props.value, this.$props.schema, this.$props.strictMode);

            if (!deepEquals$1(this.formData, formData)) {
              this.formData = formData;
            }
          }
        }

      },

      mounted() {
        this.$$uiFormRef = this.$refs.genEditForm;
        this.$emit('on-form-mounted', this.$refs.genEditForm, {
          formData: this.formData
        });
      },

      render(h) {
        const self = this; // default scoped slot

        const defaultSlot = this.$scopedSlots.default ? this.$scopedSlots.default({
          formData: self.formData,
          formRefFn: () => self.$refs.genEditForm
        }) : this.footerParams.show ? h(FormFooter, {
          props: {
            globalOptions,
            okBtn: self.footerParams.okBtn,
            okBtnProps: self.footerParams.okBtnProps,
            cancelBtn: self.footerParams.cancelBtn,
            formItemAttrs: self.footerParams.formItemAttrs
          },
          on: {
            onCancel() {
              self.$emit('on-cancel');
            },

            onSubmit() {
              self.$refs.genEditForm.validate((isValid, resData) => {
                if (isValid) {
                  return self.$emit('on-submit', self.formData);
                }

                console.warn(resData);
                return self.$emit('on-validation-failed', resData);
              });
            }

          }
        }) : undefined;

        const _self$$props$formProp = self.$props.formProps,
              {
          layoutColumn = 1,
          inlineFooter
        } = _self$$props$formProp,
              formProps = _objectWithoutProperties(_self$$props$formProp, _excluded$4);

        const props = {
          schema: this.schema,
          uiSchema: this.uiSchema,
          errorSchema: this.errorSchema,
          customFormats: this.customFormats,
          customRule: this.customRule,
          rootSchema: this.schema,
          rootFormData: this.formData,
          // 根节点的数据
          curNodePath: '',
          // 当前节点路径
          globalOptions,
          // 全局配置，差异化ui框架
          formProps: _objectSpread2({
            labelPosition: 'top',
            labelSuffix: '：'
          }, formProps)
        };
        const inline = formProps.inline;
        return h(globalOptions.COMPONENT_MAP.form, {
          class: {
            genFromComponent: true,
            formInlineFooter: inlineFooter,
            formInline: inline,
            ["genFromComponent_".concat(this.schema.id, "Form")]: !!this.schema.id,
            layoutColumn: !inline,
            ["layoutColumn-".concat(layoutColumn)]: !inline
          },
          nativeOn: {
            submit(e) {
              e.preventDefault();
            }

          },
          ref: 'genEditForm',
          props: _objectSpread2({
            model: self.formData
          }, props.formProps)
        }, [h(SchemaField, {
          props
        }), defaultSlot]);
      }

    };
  }

  // https://github.com/epoberezkin/ajv-i18n
  function localizeZh(errors) {
    if (!(errors && errors.length)) return;

    for (let i = 0; i < errors.length; i += 1) {
      const e = errors[i];
      let out;
      let n;
      let cond;

      switch (e.keyword) {
        case '$ref':
          out = "\u65E0\u6CD5\u627E\u5230\u5F15\u7528".concat(e.params.ref);
          break;

        case 'additionalItems':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5141\u8BB8\u8D85\u8FC7".concat(n, "\u4E2A\u5143\u7D20");
          break;

        case 'additionalProperties':
          out = '不允许有额外的属性';
          break;

        case 'anyOf':
          out = '数据应为 anyOf 所指定的其中一个';
          break;

        case 'const':
          out = '应当等于常量';
          break;

        case 'contains':
          out = '应当包含一个有效项';
          break;

        case 'custom':
          out = "\u5E94\u5F53\u901A\u8FC7 \"".concat(e.keyword, " \u5173\u952E\u8BCD\u6821\u9A8C\"");
          break;

        case 'dependencies':
          out = '';
          n = e.params.depsCount;
          out += "\u5E94\u5F53\u62E5\u6709\u5C5E\u6027".concat(e.params.property, "\u7684\u4F9D\u8D56\u5C5E\u6027").concat(e.params.deps);
          break;

        case 'enum':
          out = '应当是预设定的枚举值之一';
          break;

        case 'exclusiveMaximum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'exclusiveMinimum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'false schema':
          out = '布尔模式出错';
          break;

        case 'format':
          out = "\u5E94\u5F53\u5339\u914D\u683C\u5F0F \"".concat(e.params.format, "\"");
          break;

        case 'formatExclusiveMaximum':
          out = 'formatExclusiveMaximum 应当是布尔值';
          break;

        case 'formatExclusiveMinimum':
          out = 'formatExclusiveMinimum 应当是布尔值';
          break;

        case 'formatMaximum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u662F ".concat(cond);
          break;

        case 'formatMinimum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u662F ".concat(cond);
          break;

        case 'if':
          out = "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"".concat(e.params.failingKeyword, "\" ");
          break;

        case 'maximum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'maxItems':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u591A\u4E8E ".concat(n, " \u4E2A\u9879");
          break;

        case 'maxLength':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u591A\u4E8E ".concat(n, " \u4E2A\u5B57\u7B26");
          break;

        case 'maxProperties':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u6709\u591A\u4E8E ".concat(n, " \u4E2A\u5C5E\u6027");
          break;

        case 'minimum':
          out = '';
          cond = "".concat(e.params.comparison, " ").concat(e.params.limit);
          out += "\u5E94\u5F53\u4E3A ".concat(cond);
          break;

        case 'minItems':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u5C11\u4E8E ".concat(n, " \u4E2A\u9879");
          break;

        case 'minLength':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u5C11\u4E8E ".concat(n, " \u4E2A\u5B57\u7B26");
          break;

        case 'minProperties':
          out = '';
          n = e.params.limit;
          out += "\u4E0D\u5E94\u6709\u5C11\u4E8E ".concat(n, " \u4E2A\u5C5E\u6027");
          break;

        case 'multipleOf':
          out = "\u5E94\u5F53\u662F ".concat(e.params.multipleOf, " \u7684\u6574\u6570\u500D");
          break;

        case 'not':
          out = '不应当匹配 "not" schema';
          break;

        case 'oneOf':
          out = '只能匹配一个 "oneOf" 中的 schema';
          break;

        case 'pattern':
          out = "\u5E94\u5F53\u5339\u914D\u6A21\u5F0F \"".concat(e.params.pattern, "\"");
          break;

        case 'patternRequired':
          out = "\u5E94\u5F53\u6709\u5C5E\u6027\u5339\u914D\u6A21\u5F0F ".concat(e.params.missingPattern);
          break;

        case 'propertyNames':
          out = "\u5C5E\u6027\u540D '".concat(e.params.propertyName, "' \u65E0\u6548");
          break;

        case 'required':
          out = "\u5E94\u5F53\u6709\u5FC5\u9700\u5C5E\u6027 ".concat(e.params.missingProperty);
          break;

        case 'switch':
          out = "\u7531\u4E8E ".concat(e.params.caseIndex, " \u5931\u8D25\uFF0C\u672A\u901A\u8FC7 \"switch\" \u6821\u9A8C, ");
          break;

        case 'type':
          out = "\u5E94\u5F53\u662F ".concat(e.params.type, " \u7C7B\u578B");
          break;

        case 'uniqueItems':
          out = "\u4E0D\u5E94\u5F53\u542B\u6709\u91CD\u590D\u9879 (\u7B2C ".concat(e.params.j, " \u9879\u4E0E\u7B2C ").concat(e.params.i, " \u9879\u662F\u91CD\u590D\u7684)");
          break;

        default:
          // eslint-disable-next-line no-continue
          continue;
      }

      e.message = out;
    }
  }

  /**
   * Created by Liu.Jun on 2020/4/30 11:22.
   */
  var i18n = {
    $$currentLocalizeFn: localizeZh,

    getCurrentLocalize() {
      return this.$$currentLocalizeFn;
    },

    useLocal(fn) {
      this.$$currentLocalizeFn = fn;
    }

  };

  const pathSeparator = '.'; // nodePath 转css类名

  function nodePath2ClassName(path) {
    const rootPathName = '__pathRoot';
    return path ? "".concat(rootPathName, ".").concat(path).replace(/\./g, '_') : rootPathName;
  } // 是否为根节点

  function isRootNodePath(path) {
    return path === '';
  } // 计算当前节点path

  function computedCurPath(prePath, curKey) {
    return prePath === '' ? curKey : [prePath, curKey].join(pathSeparator);
  } // 删除当前path值

  function deletePathVal(vueData, name) {
    Vue__default["default"].delete(vueData, name);
  } // 设置当前path值

  function setPathVal(obj, path, value) {
    // Vue.set ?
    const pathArr = path.split(pathSeparator);

    for (let i = 0; i < pathArr.length; i += 1) {
      if (pathArr.length - i < 2) {
        // 倒数第一个数据
        // obj[pathArr[pathArr.length - 1]] = value;
        Vue__default["default"].set(obj, pathArr[pathArr.length - 1], value);
        break;
      }

      obj = obj[pathArr[i]];
    }
  } // 获取当前path值

  function getPathVal$1(obj, path) {
    let leftDeviation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const pathArr = path.split(pathSeparator);

    for (let i = 0; i < pathArr.length - leftDeviation; i += 1) {
      // 错误路径或者undefined中断查找
      if (obj === undefined) return undefined;
      obj = pathArr[i] === '' ? obj : obj[pathArr[i]];
    }

    return obj;
  } // path 等于props

  function path2prop(path) {
    return path;
  }

  var vueUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    nodePath2ClassName: nodePath2ClassName,
    isRootNodePath: isRootNodePath,
    computedCurPath: computedCurPath,
    deletePathVal: deletePathVal,
    setPathVal: setPathVal,
    getPathVal: getPathVal$1,
    path2prop: path2prop
  });

  // $ref 引用
  function getPathVal(obj, pathStr) {
    const pathArr = pathStr.split('/');

    for (let i = 0; i < pathArr.length; i += 1) {
      if (obj === undefined) return undefined;
      obj = pathArr[i] === '' ? obj : obj[pathArr[i]];
    }

    return obj;
  } // 找到ref引用的schema


  function findSchemaDefinition($ref) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const origRef = $ref;

    if ($ref.startsWith('#')) {
      // Decode URI fragment representation.
      $ref = decodeURIComponent($ref.substring(1));
    } else {
      throw new Error("Could not find a definition for ".concat(origRef, "."));
    }

    const current = getPathVal(rootSchema, $ref);

    if (current === undefined) {
      throw new Error("Could not find a definition for ".concat(origRef, "."));
    }

    if (current.hasOwnProperty('$ref')) {
      return findSchemaDefinition(current.$ref, rootSchema);
    }

    return current;
  }

  function fillObj(target, data) {
    // 简单复制 异常直接抛错
    try {
      if (typeof data === 'object') {
        return target.fill(null).map(() => JSON.parse(JSON.stringify(data)));
      }
    } catch (e) {// nothing ...
    } // 默认返回一个 undefined


    return undefined;
  } // 切割分为多个数组

  function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }

  /**
   * Created by Liu.Jun on 2020/4/17 17:05.
   */
  // is object
  function isObject(object) {
    return Object.prototype.toString.call(object) === '[object Object]';
  } // is arguments

  function isArguments(object) {
    return Object.prototype.toString.call(object) === '[object Arguments]';
  } // 定义的数据推导出schema 类型


  const guessType = function guessType(value) {
    if (Array.isArray(value)) {
      return 'array';
    }

    if (typeof value === 'string') {
      return 'string';
    }

    if (value == null) {
      return 'null';
    }

    if (typeof value === 'boolean') {
      return 'boolean'; // eslint-disable-next-line no-restricted-globals
    }

    if (!isNaN(value)) {
      return 'number';
    }

    if (typeof value === 'object') {
      return 'object';
    } // Default to string if we can't figure it out


    return 'string';
  };

  function mergeObjects(obj1, obj2) {
    let concatArrays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    // Recursively merge deeply nested objects.
    const preAcc = Object.assign({}, obj1); // Prevent mutation of source object.

    if (!isObject(obj2)) return preAcc;
    return Object.keys(obj2).reduce((acc, key) => {
      const left = obj1 ? obj1[key] : {};
      const right = obj2[key];

      if (obj1 && obj1.hasOwnProperty(key) && isObject(right)) {
        acc[key] = mergeObjects(left, right, concatArrays);
      } else if (concatArrays && Array.isArray(left) && Array.isArray(right)) {
        acc[key] = left.concat(right);
      } else {
        acc[key] = right;
      }

      return acc;
    }, preAcc);
  } // 获取给定 schema 类型。

  function getSchemaType(schema) {
    const {
      type
    } = schema; // 通过const 申明的常量 做类型推断

    if (!type && schema.const) {
      return guessType(schema.const);
    } // 枚举默认字符串


    if (!type && schema.enum) {
      return 'string';
    } // items 推断为 array 类型


    if (!type && schema.items) {
      return 'array';
    } // anyOf oneOf 不申明 type 字段


    if (!type && (schema.properties || schema.additionalProperties)) {
      return 'object';
    }

    if (type instanceof Array && type.length === 2 && type.includes('null')) {
      return type.find(curType => curType !== 'null');
    }

    return type;
  } // 深度相等对比

  function deepEquals(a, b) {
    let ca = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    let cb = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    // Partially extracted from node-deeper and adapted to exclude comparison
    // checks for functions.
    // https://github.com/othiym23/node-deeper
    if (a === b) {
      return true;
    }

    if (typeof a === 'function' || typeof b === 'function') {
      // Assume all functions are equivalent
      // see https://github.com/mozilla-services/react-jsonschema-form/issues/255
      return true;
    }

    if (typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }

    if (a === null || b === null) {
      return false;
    }

    if (a instanceof Date && b instanceof Date) {
      return a.getTime() === b.getTime();
    }

    if (a instanceof RegExp && b instanceof RegExp) {
      return a.source === b.source && a.global === b.global && a.multiline === b.multiline && a.lastIndex === b.lastIndex && a.ignoreCase === b.ignoreCase;
    }

    if (isArguments(a) || isArguments(b)) {
      if (!(isArguments(a) && isArguments(b))) {
        return false;
      }

      const slice = Array.prototype.slice;
      return deepEquals(slice.call(a), slice.call(b), ca, cb);
    }

    if (a.constructor !== b.constructor) {
      return false;
    }

    const ka = Object.keys(a);
    const kb = Object.keys(b); // don't bother with stack acrobatics if there's nothing there

    if (ka.length === 0 && kb.length === 0) {
      return true;
    }

    if (ka.length !== kb.length) {
      return false;
    }

    let cal = ca.length; // eslint-disable-next-line no-plusplus

    while (cal--) {
      if (ca[cal] === a) {
        return cb[cal] === b;
      }
    }

    ca.push(a);
    cb.push(b);
    ka.sort();
    kb.sort(); // eslint-disable-next-line no-plusplus

    for (let j = ka.length - 1; j >= 0; j--) {
      if (ka[j] !== kb[j]) {
        return false;
      }
    }

    let key; // eslint-disable-next-line no-plusplus

    for (let k = ka.length - 1; k >= 0; k--) {
      key = ka[k];

      if (!deepEquals(a[key], b[key], ca, cb)) {
        return false;
      }
    }

    ca.pop();
    cb.pop();
    return true;
  } // 只保证同时生成不重复

  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  } // 最小公倍数

  function scm(a, b) {
    return a * b / gcd(a, b);
  } // 打开新页面

  const _excluded$3 = ["$ref"],
        _excluded2 = ["allOf"],
        _excluded3 = ["allOf"];
  // 自动添加分割线
  // export const ADDITIONAL_PROPERTY_FLAG = '__additional_property';
  // resolve Schema - dependencies
  // https://json-schema.org/understanding-json-schema/reference/object.html#dependencies

  /*
  export function resolveDependencies(schema, rootSchema, formData) {
      // 从源模式中删除依赖项。
      const { dependencies = {} } = schema;
      let { ...resolvedSchema } = schema;
      if ('oneOf' in resolvedSchema) {
          resolvedSchema = resolvedSchema.oneOf[
              getMatchingOption(formData, resolvedSchema.oneOf, rootSchema)
          ];
      } else if ('anyOf' in resolvedSchema) {
          resolvedSchema = resolvedSchema.anyOf[
              getMatchingOption(formData, resolvedSchema.anyOf, rootSchema)
          ];
      }
      return processDependencies(
          dependencies,
          resolvedSchema,
          rootSchema,
          formData
      );
  }
  */
  // 处理依赖关系 dependencies
  // https://json-schema.org/understanding-json-schema/reference/object.html#dependencies

  /*

  function processDependencies(
      dependencies,
      resolvedSchema,
      rootSchema,
      formData
  ) {
      // Process dependencies updating the local schema properties as appropriate.
      for (const dependencyKey in dependencies) {
          // Skip this dependency if its trigger property is not present.
          if (formData[dependencyKey] === undefined) {
              // eslint-disable-next-line no-continue
              continue;
          }
          // Skip this dependency if it is not included in the schema (such as when dependencyKey is itself a hidden dependency.)
          if (
              resolvedSchema.properties
              && !(dependencyKey in resolvedSchema.properties)
          ) {
              // eslint-disable-next-line no-continue
              continue;
          }
          const {
              [dependencyKey]: dependencyValue,
              ...remainingDependencies
          } = dependencies;
          if (Array.isArray(dependencyValue)) {
              resolvedSchema = withDependentProperties(resolvedSchema, dependencyValue);
          } else if (isObject(dependencyValue)) {
              resolvedSchema = withDependentSchema(
                  resolvedSchema,
                  rootSchema,
                  formData,
                  dependencyKey,
                  dependencyValue
              );
          }
          return processDependencies(
              remainingDependencies,
              resolvedSchema,
              rootSchema,
              formData
          );
      }
      return resolvedSchema;
  }
  */
  // 属性依赖
  // https://json-schema.org/understanding-json-schema/reference/object.html#property-dependencies

  /*
  function withDependentProperties(schema, additionallyRequired) {
      if (!additionallyRequired) {
          return schema;
      }
      const required = Array.isArray(schema.required)
          ? Array.from(new Set([...schema.required, ...additionallyRequired]))
          : additionallyRequired;
      return { ...schema, required };
  }
  */
  // schema 依赖
  // https://json-schema.org/understanding-json-schema/reference/object.html#schema-dependencies

  /*
  function withDependentSchema(
      schema,
      rootSchema,
      formData,
      dependencyKey,
      dependencyValue
  ) {
      const { oneOf, ...dependentSchema } = retrieveSchema(
          dependencyValue,
          rootSchema,
          formData
      );
      schema = mergeSchemas(schema, dependentSchema);
      // Since it does not contain oneOf, we return the original schema.
      if (oneOf === undefined) {
          return schema;
      } if (!Array.isArray(oneOf)) {
          throw new Error(`invalid: it is some ${typeof oneOf} instead of an array`);
      }
      // Resolve $refs inside oneOf.
      const resolvedOneOf = oneOf.map(subschema => (subschema.hasOwnProperty('$ref')
          ? resolveReference(subschema, rootSchema, formData)
          : subschema));
      return withExactlyOneSubschema(
          schema,
          rootSchema,
          formData,
          dependencyKey,
          resolvedOneOf
      );
  }

  function withExactlyOneSubschema(
      schema,
      rootSchema,
      formData,
      dependencyKey,
      oneOf
  ) {
      // eslint-disable-next-line array-callback-return,consistent-return
      const validSubschemas = oneOf.filter((subschema) => {
          if (!subschema.properties) {
              return false;
          }
          const { [dependencyKey]: conditionPropertySchema } = subschema.properties;
          if (conditionPropertySchema) {
              const conditionSchema = {
                  type: 'object',
                  properties: {
                      [dependencyKey]: conditionPropertySchema,
                  },
              };

              return isValid(conditionSchema, formData);
          }
      });
      if (validSubschemas.length !== 1) {
          console.warn(
              "ignoring oneOf in dependencies because there isn't exactly one subschema that is valid"
          );
          return schema;
      }
      const subschema = validSubschemas[0];
      const {
          // eslint-disable-next-line no-unused-vars
          [dependencyKey]: conditionPropertySchema,
          ...dependentSubschema
      } = subschema.properties;
      const dependentSchema = { ...subschema, properties: dependentSubschema };
      return mergeSchemas(
          schema,
          retrieveSchema(dependentSchema, rootSchema, formData)
      );
  }
  */
  // resolve Schema - $ref
  // https://json-schema.org/understanding-json-schema/structuring.html#using-id-with-ref

  function resolveReference(schema, rootSchema, formData) {
    // Retrieve the referenced schema definition.
    const $refSchema = findSchemaDefinition(schema.$ref, rootSchema); // Drop the $ref property of the source schema.
    // eslint-disable-next-line no-unused-vars

    const localSchema = _objectWithoutProperties(schema, _excluded$3); // Update referenced schema definition with local schema properties.


    return retrieveSchema(_objectSpread2(_objectSpread2({}, $refSchema), localSchema), rootSchema, formData);
  } // 深度递归合并 合并allOf的每2项


  function mergeSchemaAllOf() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length < 2) return args[0];
    let preVal = {};
    const copyArgs = [...args];

    while (copyArgs.length >= 2) {
      const obj1 = isObject(copyArgs[0]) ? copyArgs[0] : {};
      const obj2 = isObject(copyArgs[1]) ? copyArgs[1] : {};
      preVal = Object.assign({}, obj1);
      Object.keys(obj2).reduce((acc, key) => {
        const left = obj1[key];
        const right = obj2[key]; // 左右一边为object

        if (isObject(left) || isObject(right)) {
          // 两边同时为object
          if (isObject(left) && isObject(right)) {
            acc[key] = mergeSchemaAllOf(left, right);
          } else {
            // 其中一边为 object
            const [objTypeData, baseTypeData] = isObject(left) ? [left, right] : [right, left];

            if (key === 'additionalProperties') {
              // 适配类型： 一边配置了对象一边没配置或者true false
              // {
              //     additionalProperties: {
              //         type: 'string',
              //     },
              //     additionalProperties: false
              // }
              acc[key] = baseTypeData === true ? objTypeData : false; // default false
            } else {
              acc[key] = objTypeData;
            }
          } // 一边为array

        } else if (Array.isArray(left) || Array.isArray(right)) {
          // 同为数组取交集
          if (Array.isArray(left) && Array.isArray(right)) {
            // 数组里面嵌套对象不支持 因为我不知道该怎么合并
            if (isObject(left[0]) || isObject(right[0])) {
              throw new Error('暂不支持如上数组对象元素合并');
            } // 交集


            const intersectionArray = intersection([].concat(left), [].concat(right)); // 没有交集

            if (intersectionArray.length <= 0) {
              throw new Error('无法合并如上数据');
            }

            if (intersectionArray.length === 0 && key === 'type') {
              // 自己取出值
              acc[key] = intersectionArray[0];
            } else {
              acc[key] = intersectionArray;
            }
          } else {
            // 其中一边为 Array
            // 查找包含关系
            const [arrayTypeData, baseTypeData] = Array.isArray(left) ? [left, right] : [right, left]; // 空值直接合并另一边

            if (baseTypeData === undefined) {
              acc[key] = arrayTypeData;
            } else {
              if (!arrayTypeData.includes(baseTypeData)) {
                throw new Error('无法合并如下数据');
              }

              acc[key] = baseTypeData;
            }
          }
        } else if (left !== undefined && right !== undefined) {
          // 两边都不是 undefined - 基础数据类型 string number boolean...
          if (key === 'maxLength' || key === 'maximum' || key === 'maxItems' || key === 'exclusiveMaximum' || key === 'maxProperties') {
            acc[key] = Math.min(left, right);
          } else if (key === 'minLength' || key === 'minimum' || key === 'minItems' || key === 'exclusiveMinimum' || key === 'minProperties') {
            acc[key] = Math.max(left, right);
          } else if (key === 'multipleOf') {
            // 获取最小公倍数
            acc[key] = scm(left, right);
          } else {
            // if (left !== right) {
            //     throw new Error('无法合并如下数据');
            // }
            acc[key] = left;
          }
        } else {
          // 一边为undefined
          acc[key] = left === undefined ? right : left;
        }

        return acc;
      }, preVal); // 先进先出

      copyArgs.splice(0, 2, preVal);
    }

    return preVal;
  } // resolve Schema - allOf


  function resolveAllOf(schema, rootSchema, formData) {
    // allOf item中可能存在 $ref
    const resolvedAllOfRefSchema = _objectSpread2(_objectSpread2({}, schema), {}, {
      allOf: schema.allOf.map(allOfItem => retrieveSchema(allOfItem, rootSchema, formData))
    });

    try {
      const {
        allOf
      } = resolvedAllOfRefSchema,
            originProperties = _objectWithoutProperties(resolvedAllOfRefSchema, _excluded2);

      return mergeSchemaAllOf(originProperties, ...allOf);
    } catch (e) {
      console.error("\u65E0\u6CD5\u5408\u5E76allOf\uFF0C\u4E22\u5F03allOf\u914D\u7F6E\u7EE7\u7EED\u6E32\u67D3: \n".concat(e)); // eslint-disable-next-line no-unused-vars

      const resolvedSchemaWithoutAllOf = _objectWithoutProperties(resolvedAllOfRefSchema, _excluded3);

      return resolvedSchemaWithoutAllOf;
    }
  } // resolve Schema

  function resolveSchema$1(schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    // allOf 、$ref、dependencies 可能被同时配置
    // allOf
    if (schema.hasOwnProperty('allOf')) {
      schema = resolveAllOf(schema, rootSchema, formData);
    } // $ref


    if (schema.hasOwnProperty('$ref')) {
      schema = resolveReference(schema, rootSchema, formData);
    } // dependencies

    /*
    if (schema.hasOwnProperty('dependencies')) {
        const resolvedSchema = resolveDependencies(schema, rootSchema, formData);
        schema = retrieveSchema(resolvedSchema, rootSchema, formData);
    }
    */
    // additionalProperties

    /*
    const hasAdditionalProperties = schema.hasOwnProperty('additionalProperties') && schema.additionalProperties !== false;
    if (hasAdditionalProperties) {
        return stubExistingAdditionalProperties(
            schema,
            rootSchema,
            formData
        );
    }
    */


    return schema;
  } // 这个函数将为formData中的每个键创建新的“属性”项
  // 查找到附加属性统一到properties[key]格式 并且打上标准

  /* function stubExistingAdditionalProperties(
      schema,
      rootSchema = {},
      formData = {}
  ) {
      // clone the schema so we don't ruin the consumer's original
      schema = {
          ...schema,
          properties: { ...schema.properties },
      };

      Object.keys(formData).forEach((key) => {
          if (schema.properties.hasOwnProperty(key)) {
              // No need to stub, our schema already has the property
              return;
          }

          let additionalProperties;
          if (schema.additionalProperties.hasOwnProperty('$ref')) {
              additionalProperties = retrieveSchema(
                  { $ref: schema.additionalProperties.$ref },
                  rootSchema,
                  formData
              );
          } else if (schema.additionalProperties.hasOwnProperty('type')) {
              additionalProperties = { ...schema.additionalProperties };
          } else {
              additionalProperties = { type: guessType(formData[key]) };
          }

          // The type of our new key should match the additionalProperties value;
          // 把追加进去的属性设置为标准 schema格式，同时打上标志
          schema.properties[key] = additionalProperties;
          // Set our additional property flag so we know it was dynamically added
          schema.properties[key][ADDITIONAL_PROPERTY_FLAG] = true;
      });

      return schema;
  } */
  // 索引当前节点


  function retrieveSchema(schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let formData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isObject(schema)) {
      return {};
    }

    return resolveSchema$1(schema, rootSchema, formData);
  }

  const _excluded$2 = ["widget", "title", "labelWidth", "description", "attrs", "class", "style", "widgetListeners", "fieldAttrs", "fieldStyle", "fieldClass", "emptyValue", "width", "getWidget", "renderScopedSlots", "renderChildren", "onChange"];
  // 这里打破 JSON Schema 规范

  const regExpression = /{{(.*)}}/;

  function handleExpression(rootFormData, curNodePath, expression, fallBack) {
    // 未配置
    if (undefined === expression) {
      return undefined;
    } // 配置了 mustache 表达式


    const matchExpression = regExpression.exec(expression);
    regExpression.lastIndex = 0; // 重置索引

    if (matchExpression) {
      const code = matchExpression[1].trim(); // eslint-disable-next-line no-new-func

      const fn = new Function('parentFormData', 'rootFormData', "return ".concat(code));
      return fn(getPathVal$1(rootFormData, curNodePath, 1), rootFormData);
    } // 回退


    return fallBack();
  }

  function replaceArrayIndex() {
    let {
      schema,
      uiSchema
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let index = arguments.length > 1 ? arguments[1] : undefined;
    const itemUiOptions = getUiOptions({
      schema,
      uiSchema,
      containsSpec: false
    });
    return ['title', 'description'].reduce((preVal, curItem) => {
      if (itemUiOptions[curItem]) {
        preVal["ui:".concat(curItem)] = String(itemUiOptions[curItem]).replace(/\$index/g, index + 1);
      }

      return preVal;
    }, {});
  } // 是否为 hidden Widget

  function isHiddenWidget(_ref) {
    let {
      schema = {},
      uiSchema = {},
      curNodePath = '',
      rootFormData = {}
    } = _ref;
    const widget = uiSchema['ui:widget'] || schema['ui:widget'];
    const hiddenExpression = uiSchema['ui:hidden'] || schema['ui:hidden']; // 支持配置 ui:hidden 表达式

    return widget === 'HiddenWidget' || widget === 'hidden' || !!handleExpression(rootFormData, curNodePath, hiddenExpression, () => {
      // 配置了函数 function
      if (typeof hiddenExpression === 'function') {
        return hiddenExpression(getPathVal$1(rootFormData, curNodePath, 1), rootFormData);
      } // 配置了常量 ？？


      return hiddenExpression;
    });
  } // 解析当前节点 ui field

  function getUiField(FIELDS_MAP, _ref2) {
    let {
      schema = {},
      uiSchema = {}
    } = _ref2;
    const field = schema['ui:field'] || uiSchema['ui:field']; // vue 组件，或者已注册的组件名

    if (typeof field === 'function' || typeof field === 'object' || typeof field === 'string') {
      return {
        field,
        fieldProps: uiSchema['ui:fieldProps'] || schema['ui:fieldProps'] // 自定义field ，支持传入额外的 props

      };
    } // 类型默认 field


    const fieldCtor = FIELDS_MAP[getSchemaType(schema)];

    if (fieldCtor) {
      return {
        field: fieldCtor
      };
    } // 如果包含 oneOf anyOf 返回空不异常
    // SchemaField 会附加onyOf anyOf信息


    if (!fieldCtor && (schema.anyOf || schema.oneOf)) {
      return {
        field: null
      };
    } // 不支持的类型


    throw new Error("\u4E0D\u652F\u6301\u7684field\u7C7B\u578B ".concat(schema.type));
  } // 解析用户配置的 uiSchema options

  function getUserUiOptions(_ref3) {
    let {
      schema = {},
      uiSchema = {},
      curNodePath,
      // undefined 不处理 表达式
      rootFormData = {}
    } = _ref3;
    // 支持 uiSchema配置在 schema文件中
    return Object.assign({}, ...[schema, uiSchema].map(itemSchema => Object.keys(itemSchema).reduce((options, key) => {
      const value = itemSchema[key]; // options 内外合并

      if (key === 'ui:options' && isObject(value)) {
        return _objectSpread2(_objectSpread2({}, options), value);
      } // https://github.com/lljj-x/vue-json-schema-form/issues/170
      // ui:hidden需要作为内置属性使用，不能直接透传给widget组件，如果组件需要只能在ui:options 中使用hidden传递


      if (key !== 'ui:hidden' && key.indexOf('ui:') === 0) {
        // 只对 ui:xxx 配置形式支持表达式
        return _objectSpread2(_objectSpread2({}, options), {}, {
          [key.substring(3)]: curNodePath === undefined ? value : handleExpression(rootFormData, curNodePath, value, () => value)
        });
      }

      return options;
    }, {})));
  } // 解析当前节点的ui options参数

  function getUiOptions(_ref4) {
    let {
      schema = {},
      uiSchema = {},
      containsSpec = true,
      curNodePath,
      rootFormData
    } = _ref4;
    const spec = {};

    if (containsSpec) {
      spec.readonly = !!schema.readOnly;

      if (undefined !== schema.multipleOf) {
        // 组件计数器步长
        spec.step = schema.multipleOf;
      }

      if (schema.minimum || schema.minimum === 0) {
        spec.min = schema.minimum;
      }

      if (schema.maximum || schema.maximum === 0) {
        spec.max = schema.maximum;
      }

      if (schema.minLength || schema.minLength === 0) {
        spec.minlength = schema.minLength;
      }

      if (schema.maxLength || schema.maxLength === 0) {
        spec.maxlength = schema.maxLength;
      }

      if (schema.format === 'date-time' || schema.format === 'date') {
        // 数组类型 时间区间
        // 打破了schema的规范，type array 配置了 format
        if (schema.type === 'array') {
          spec.isRange = true;
          spec.isNumberValue = !(schema.items && schema.items.type === 'string');
        } else {
          // 字符串 ISO 时间
          spec.isNumberValue = !(schema.type === 'string');
        }
      }
    }

    if (schema.title) spec.title = schema.title;
    if (schema.description) spec.description = schema.description; // 计算ui配置

    return _objectSpread2(_objectSpread2({}, spec), getUserUiOptions({
      schema,
      uiSchema,
      curNodePath,
      rootFormData
    }));
  } // 获取当前节点的ui 配置 （options + widget）
  // 处理成 Widget 组件需要的格式

  function getWidgetConfig(_ref5) {
    let {
      schema = {},
      uiSchema = {},
      curNodePath,
      rootFormData
    } = _ref5;
    let fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    const uiOptions = getUiOptions({
      schema,
      uiSchema,
      curNodePath,
      rootFormData
    }); // 没有配置 Widget ，各个Field组件根据类型判断

    if (!uiOptions.widget && fallback) {
      Object.assign(uiOptions, fallback({
        schema,
        uiSchema
      }));
    }

    const {
      widget,
      title: label,
      labelWidth,
      description,
      attrs: widgetAttrs,
      class: widgetClass,
      style: widgetStyle,
      widgetListeners,
      fieldAttrs,
      fieldStyle,
      fieldClass,
      emptyValue,
      width,
      getWidget,
      renderScopedSlots,
      renderChildren,
      onChange
    } = uiOptions,
          uiProps = _objectWithoutProperties(uiOptions, _excluded$2);

    return {
      widget,
      label,
      labelWidth,
      description,
      widgetAttrs,
      widgetClass,
      widgetStyle,
      fieldAttrs,
      width,
      fieldStyle,
      fieldClass,
      emptyValue,
      getWidget,
      renderScopedSlots,
      renderChildren,
      onChange,
      widgetListeners,
      uiProps
    };
  } // 解析用户配置的 errorSchema options

  function getUserErrOptions(_ref6) {
    let {
      schema = {},
      uiSchema = {},
      errorSchema = {}
    } = _ref6;
    return Object.assign({}, ...[schema, uiSchema, errorSchema].map(itemSchema => Object.keys(itemSchema).reduce((options, key) => {
      const value = itemSchema[key]; // options 内外合并

      if (key === 'err:options' && isObject(value)) {
        return _objectSpread2(_objectSpread2({}, options), value);
      }

      if (key.indexOf('err:') === 0) {
        return _objectSpread2(_objectSpread2({}, options), {}, {
          [key.substring(4)]: value
        });
      }

      return options;
    }, {})));
  } // ui:order object-> properties 排序

  function orderProperties(properties, order) {
    if (!Array.isArray(order)) {
      return properties;
    }

    const arrayToHash = arr => arr.reduce((prev, curr) => {
      prev[curr] = true;
      return prev;
    }, {});

    const errorPropList = arr => arr.length > 1 ? "properties '".concat(arr.join("', '"), "'") : "property '".concat(arr[0], "'");

    const propertyHash = arrayToHash(properties);
    const orderFiltered = order.filter(prop => prop === '*' || propertyHash[prop]);
    const orderHash = arrayToHash(orderFiltered);
    const rest = properties.filter(prop => !orderHash[prop]);
    const restIndex = orderFiltered.indexOf('*');

    if (restIndex === -1) {
      if (rest.length) {
        throw new Error("uiSchema order list does not contain ".concat(errorPropList(rest)));
      }

      return orderFiltered;
    }

    if (restIndex !== orderFiltered.lastIndexOf('*')) {
      throw new Error('uiSchema order list contains more than one wildcard item');
    }

    const complete = [...orderFiltered];
    complete.splice(restIndex, 1, ...rest);
    return complete;
  }
  /**
   * 单个匹配
   * 常量，或者只有一个枚举
   */

  function isConstant(schema) {
    return Array.isArray(schema.enum) && schema.enum.length === 1 || schema.hasOwnProperty('const');
  }
  function toConstant(schema) {
    if (Array.isArray(schema.enum) && schema.enum.length === 1) {
      return schema.enum[0];
    }

    if (schema.hasOwnProperty('const')) {
      return schema.const;
    }

    throw new Error('schema cannot be inferred as a constant');
  }
  /**
   * 是否为选择列表
   * 枚举 或者 oneOf anyOf 每项都只有一个固定常量值
   * @param _schema
   * @param rootSchema
   * @returns {boolean|*}
   */

  function isSelect(_schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const schema = retrieveSchema(_schema, rootSchema);
    const altSchemas = schema.oneOf || schema.anyOf;

    if (Array.isArray(schema.enum)) {
      return true;
    }

    if (Array.isArray(altSchemas)) {
      return altSchemas.every(altSchemasItem => isConstant(altSchemasItem));
    }

    return false;
  } // items 都为一个对象

  function isFixedItems(schema) {
    return Array.isArray(schema.items) && schema.items.length > 0 && schema.items.every(item => isObject(item));
  } // 是否为多选

  function isMultiSelect(schema) {
    let rootSchema = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!schema.uniqueItems || !schema.items) {
      return false;
    }

    return isSelect(schema.items, rootSchema);
  } // array additionalItems
  // https://json-schema.org/understanding-json-schema/reference/array.html#tuple-validation

  function allowAdditionalItems(schema) {
    if (schema.additionalItems === true) {
      console.warn('additionalItems=true is currently not supported');
    }

    return isObject(schema.additionalItems);
  } // 下拉选项

  function optionsList(schema, uiSchema, curNodePath, rootFormData) {
    // enum
    if (schema.enum) {
      const uiOptions = getUserUiOptions({
        schema,
        uiSchema,
        curNodePath,
        rootFormData
      }); // ui配置 enumNames 优先

      const enumNames = uiOptions.enumNames || schema.enumNames;
      return schema.enum.map((value, i) => {
        const label = enumNames && enumNames[i] || String(value);
        return {
          label,
          value
        };
      });
    } // oneOf | anyOf


    const altSchemas = schema.oneOf || schema.anyOf;
    const altUiSchemas = uiSchema.oneOf || uiSchema.anyOf;
    return altSchemas.map((curSchema, i) => {
      const uiOptions = altUiSchemas && altUiSchemas[i] ? getUserUiOptions({
        schema: curSchema,
        uiSchema: altUiSchemas[i],
        curNodePath,
        rootFormData
      }) : {};
      const value = toConstant(curSchema);
      const label = uiOptions.title || curSchema.title || String(value);
      return {
        label,
        value
      };
    });
  }
  function fallbackLabel(oriLabel, isFallback, curNodePath) {
    if (oriLabel) return oriLabel;

    if (isFallback) {
      const backLabel = curNodePath.split('.').pop(); // 过滤纯数字字符串

      if (backLabel && backLabel !== "".concat(Number(backLabel))) return backLabel;
    }

    return '';
  }

  var formUtils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    replaceArrayIndex: replaceArrayIndex,
    isHiddenWidget: isHiddenWidget,
    getUiField: getUiField,
    getUserUiOptions: getUserUiOptions,
    getUiOptions: getUiOptions,
    getWidgetConfig: getWidgetConfig,
    getUserErrOptions: getUserErrOptions,
    orderProperties: orderProperties,
    isConstant: isConstant,
    toConstant: toConstant,
    isSelect: isSelect,
    isFixedItems: isFixedItems,
    isMultiSelect: isMultiSelect,
    allowAdditionalItems: allowAdditionalItems,
    optionsList: optionsList,
    fallbackLabel: fallbackLabel
  });

  var uri_all = createCommonjsModule(function (module, exports) {
  /** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
  (function (global, factory) {
  	factory(exports) ;
  }(commonjsGlobal, (function (exports) {
  function merge() {
      for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
          sets[_key] = arguments[_key];
      }

      if (sets.length > 1) {
          sets[0] = sets[0].slice(0, -1);
          var xl = sets.length - 1;
          for (var x = 1; x < xl; ++x) {
              sets[x] = sets[x].slice(1, -1);
          }
          sets[xl] = sets[xl].slice(1);
          return sets.join('');
      } else {
          return sets[0];
      }
  }
  function subexp(str) {
      return "(?:" + str + ")";
  }
  function typeOf(o) {
      return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
  }
  function toUpperCase(str) {
      return str.toUpperCase();
  }
  function toArray(obj) {
      return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
  }
  function assign(target, source) {
      var obj = target;
      if (source) {
          for (var key in source) {
              obj[key] = source[key];
          }
      }
      return obj;
  }

  function buildExps(isIRI) {
      var ALPHA$$ = "[A-Za-z]",
          DIGIT$$ = "[0-9]",
          HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
          PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
          //expanded
      GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
          SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
          RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
          UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
          //subset, excludes bidi control characters
      IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
          //subset
      UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$);
          subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*");
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*");
          var DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
          //relaxed parsing rules
      IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
          H16$ = subexp(HEXDIG$$ + "{1,4}"),
          LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
          IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
          //                           6( h16 ":" ) ls32
      IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
          //                      "::" 5( h16 ":" ) ls32
      IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
          //[               h16 ] "::" 4( h16 ":" ) ls32
      IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
          //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
      IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
          //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
      IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
          //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
      IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
          //[ *4( h16 ":" ) h16 ] "::"              ls32
      IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
          //[ *5( h16 ":" ) h16 ] "::"              h16
      IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
          //[ *6( h16 ":" ) h16 ] "::"
      IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
          ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+");
          //RFC 6874, with relaxed parsing rules
      subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+");
          //RFC 6874
      subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*");
          var PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]"));
          subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+");
          subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*");
      return {
          NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
          NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
          NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
          ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
          UNRESERVED: new RegExp(UNRESERVED$$, "g"),
          OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
          PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
          IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
          IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
      };
  }
  var URI_PROTOCOL = buildExps(false);

  var IRI_PROTOCOL = buildExps(true);

  var slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();













  var toConsumableArray = function (arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    } else {
      return Array.from(arr);
    }
  };

  /** Highest positive signed 32-bit float value */

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  /** Bootstring parameters */
  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80
  var delimiter = '-'; // '\x2D'

  /** Regular expressions */
  var regexPunycode = /^xn--/;
  var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
  var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  /** Error messages */
  var errors = {
  	'overflow': 'Overflow: input needs wider integers to process',
  	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
  	'invalid-input': 'Invalid input'
  };

  /** Convenience shortcuts */
  var baseMinusTMin = base - tMin;
  var floor = Math.floor;
  var stringFromCharCode = String.fromCharCode;

  /*--------------------------------------------------------------------------*/

  /**
   * A generic error utility function.
   * @private
   * @param {String} type The error type.
   * @returns {Error} Throws a `RangeError` with the applicable error message.
   */
  function error$1(type) {
  	throw new RangeError(errors[type]);
  }

  /**
   * A generic `Array#map` utility function.
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} callback The function that gets called for every array
   * item.
   * @returns {Array} A new array of values returned by the callback function.
   */
  function map(array, fn) {
  	var result = [];
  	var length = array.length;
  	while (length--) {
  		result[length] = fn(array[length]);
  	}
  	return result;
  }

  /**
   * A simple `Array#map`-like wrapper to work with domain name strings or email
   * addresses.
   * @private
   * @param {String} domain The domain name or email address.
   * @param {Function} callback The function that gets called for every
   * character.
   * @returns {Array} A new string of characters returned by the callback
   * function.
   */
  function mapDomain(string, fn) {
  	var parts = string.split('@');
  	var result = '';
  	if (parts.length > 1) {
  		// In email addresses, only the domain name should be punycoded. Leave
  		// the local part (i.e. everything up to `@`) intact.
  		result = parts[0] + '@';
  		string = parts[1];
  	}
  	// Avoid `split(regex)` for IE8 compatibility. See #17.
  	string = string.replace(regexSeparators, '\x2E');
  	var labels = string.split('.');
  	var encoded = map(labels, fn).join('.');
  	return result + encoded;
  }

  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   * @see `punycode.ucs2.encode`
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode.ucs2
   * @name decode
   * @param {String} string The Unicode input string (UCS-2).
   * @returns {Array} The new array of code points.
   */
  function ucs2decode(string) {
  	var output = [];
  	var counter = 0;
  	var length = string.length;
  	while (counter < length) {
  		var value = string.charCodeAt(counter++);
  		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
  			// It's a high surrogate, and there is a next character.
  			var extra = string.charCodeAt(counter++);
  			if ((extra & 0xFC00) == 0xDC00) {
  				// Low surrogate.
  				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
  			} else {
  				// It's an unmatched surrogate; only append this code unit, in case the
  				// next code unit is the high surrogate of a surrogate pair.
  				output.push(value);
  				counter--;
  			}
  		} else {
  			output.push(value);
  		}
  	}
  	return output;
  }

  /**
   * Creates a string based on an array of numeric code points.
   * @see `punycode.ucs2.decode`
   * @memberOf punycode.ucs2
   * @name encode
   * @param {Array} codePoints The array of numeric code points.
   * @returns {String} The new Unicode string (UCS-2).
   */
  var ucs2encode = function ucs2encode(array) {
  	return String.fromCodePoint.apply(String, toConsumableArray(array));
  };

  /**
   * Converts a basic code point into a digit/integer.
   * @see `digitToBasic()`
   * @private
   * @param {Number} codePoint The basic numeric code point value.
   * @returns {Number} The numeric value of a basic code point (for use in
   * representing integers) in the range `0` to `base - 1`, or `base` if
   * the code point does not represent a value.
   */
  var basicToDigit = function basicToDigit(codePoint) {
  	if (codePoint - 0x30 < 0x0A) {
  		return codePoint - 0x16;
  	}
  	if (codePoint - 0x41 < 0x1A) {
  		return codePoint - 0x41;
  	}
  	if (codePoint - 0x61 < 0x1A) {
  		return codePoint - 0x61;
  	}
  	return base;
  };

  /**
   * Converts a digit/integer into a basic code point.
   * @see `basicToDigit()`
   * @private
   * @param {Number} digit The numeric value of a basic code point.
   * @returns {Number} The basic code point whose value (when used for
   * representing integers) is `digit`, which needs to be in the range
   * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
   * used; else, the lowercase form is used. The behavior is undefined
   * if `flag` is non-zero and `digit` has no uppercase form.
   */
  var digitToBasic = function digitToBasic(digit, flag) {
  	//  0..25 map to ASCII a..z or A..Z
  	// 26..35 map to ASCII 0..9
  	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
  };

  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   * @private
   */
  var adapt = function adapt(delta, numPoints, firstTime) {
  	var k = 0;
  	delta = firstTime ? floor(delta / damp) : delta >> 1;
  	delta += floor(delta / numPoints);
  	for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
  		delta = floor(delta / baseMinusTMin);
  	}
  	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };

  /**
   * Converts a Punycode string of ASCII-only symbols to a string of Unicode
   * symbols.
   * @memberOf punycode
   * @param {String} input The Punycode string of ASCII-only symbols.
   * @returns {String} The resulting string of Unicode symbols.
   */
  var decode = function decode(input) {
  	// Don't use UCS-2.
  	var output = [];
  	var inputLength = input.length;
  	var i = 0;
  	var n = initialN;
  	var bias = initialBias;

  	// Handle the basic code points: let `basic` be the number of input code
  	// points before the last delimiter, or `0` if there is none, then copy
  	// the first basic code points to the output.

  	var basic = input.lastIndexOf(delimiter);
  	if (basic < 0) {
  		basic = 0;
  	}

  	for (var j = 0; j < basic; ++j) {
  		// if it's not a basic code point
  		if (input.charCodeAt(j) >= 0x80) {
  			error$1('not-basic');
  		}
  		output.push(input.charCodeAt(j));
  	}

  	// Main decoding loop: start just after the last delimiter if any basic code
  	// points were copied; start at the beginning otherwise.

  	for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

  		// `index` is the index of the next character to be consumed.
  		// Decode a generalized variable-length integer into `delta`,
  		// which gets added to `i`. The overflow checking is easier
  		// if we increase `i` as we go, then subtract off its starting
  		// value at the end to obtain `delta`.
  		var oldi = i;
  		for (var w = 1, k = base;; /* no condition */k += base) {

  			if (index >= inputLength) {
  				error$1('invalid-input');
  			}

  			var digit = basicToDigit(input.charCodeAt(index++));

  			if (digit >= base || digit > floor((maxInt - i) / w)) {
  				error$1('overflow');
  			}

  			i += digit * w;
  			var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

  			if (digit < t) {
  				break;
  			}

  			var baseMinusT = base - t;
  			if (w > floor(maxInt / baseMinusT)) {
  				error$1('overflow');
  			}

  			w *= baseMinusT;
  		}

  		var out = output.length + 1;
  		bias = adapt(i - oldi, out, oldi == 0);

  		// `i` was supposed to wrap around from `out` to `0`,
  		// incrementing `n` each time, so we'll fix that now:
  		if (floor(i / out) > maxInt - n) {
  			error$1('overflow');
  		}

  		n += floor(i / out);
  		i %= out;

  		// Insert `n` at position `i` of the output.
  		output.splice(i++, 0, n);
  	}

  	return String.fromCodePoint.apply(String, output);
  };

  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   * @memberOf punycode
   * @param {String} input The string of Unicode symbols.
   * @returns {String} The resulting Punycode string of ASCII-only symbols.
   */
  var encode = function encode(input) {
  	var output = [];

  	// Convert the input in UCS-2 to an array of Unicode code points.
  	input = ucs2decode(input);

  	// Cache the length.
  	var inputLength = input.length;

  	// Initialize the state.
  	var n = initialN;
  	var delta = 0;
  	var bias = initialBias;

  	// Handle the basic code points.
  	var _iteratorNormalCompletion = true;
  	var _didIteratorError = false;
  	var _iteratorError = undefined;

  	try {
  		for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
  			var _currentValue2 = _step.value;

  			if (_currentValue2 < 0x80) {
  				output.push(stringFromCharCode(_currentValue2));
  			}
  		}
  	} catch (err) {
  		_didIteratorError = true;
  		_iteratorError = err;
  	} finally {
  		try {
  			if (!_iteratorNormalCompletion && _iterator.return) {
  				_iterator.return();
  			}
  		} finally {
  			if (_didIteratorError) {
  				throw _iteratorError;
  			}
  		}
  	}

  	var basicLength = output.length;
  	var handledCPCount = basicLength;

  	// `handledCPCount` is the number of code points that have been handled;
  	// `basicLength` is the number of basic code points.

  	// Finish the basic string with a delimiter unless it's empty.
  	if (basicLength) {
  		output.push(delimiter);
  	}

  	// Main encoding loop:
  	while (handledCPCount < inputLength) {

  		// All non-basic code points < n have been handled already. Find the next
  		// larger one:
  		var m = maxInt;
  		var _iteratorNormalCompletion2 = true;
  		var _didIteratorError2 = false;
  		var _iteratorError2 = undefined;

  		try {
  			for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
  				var currentValue = _step2.value;

  				if (currentValue >= n && currentValue < m) {
  					m = currentValue;
  				}
  			}

  			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
  			// but guard against overflow.
  		} catch (err) {
  			_didIteratorError2 = true;
  			_iteratorError2 = err;
  		} finally {
  			try {
  				if (!_iteratorNormalCompletion2 && _iterator2.return) {
  					_iterator2.return();
  				}
  			} finally {
  				if (_didIteratorError2) {
  					throw _iteratorError2;
  				}
  			}
  		}

  		var handledCPCountPlusOne = handledCPCount + 1;
  		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
  			error$1('overflow');
  		}

  		delta += (m - n) * handledCPCountPlusOne;
  		n = m;

  		var _iteratorNormalCompletion3 = true;
  		var _didIteratorError3 = false;
  		var _iteratorError3 = undefined;

  		try {
  			for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
  				var _currentValue = _step3.value;

  				if (_currentValue < n && ++delta > maxInt) {
  					error$1('overflow');
  				}
  				if (_currentValue == n) {
  					// Represent delta as a generalized variable-length integer.
  					var q = delta;
  					for (var k = base;; /* no condition */k += base) {
  						var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
  						if (q < t) {
  							break;
  						}
  						var qMinusT = q - t;
  						var baseMinusT = base - t;
  						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
  						q = floor(qMinusT / baseMinusT);
  					}

  					output.push(stringFromCharCode(digitToBasic(q, 0)));
  					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
  					delta = 0;
  					++handledCPCount;
  				}
  			}
  		} catch (err) {
  			_didIteratorError3 = true;
  			_iteratorError3 = err;
  		} finally {
  			try {
  				if (!_iteratorNormalCompletion3 && _iterator3.return) {
  					_iterator3.return();
  				}
  			} finally {
  				if (_didIteratorError3) {
  					throw _iteratorError3;
  				}
  			}
  		}

  		++delta;
  		++n;
  	}
  	return output.join('');
  };

  /**
   * Converts a Punycode string representing a domain name or an email address
   * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
   * it doesn't matter if you call it on a string that has already been
   * converted to Unicode.
   * @memberOf punycode
   * @param {String} input The Punycoded domain name or email address to
   * convert to Unicode.
   * @returns {String} The Unicode representation of the given Punycode
   * string.
   */
  var toUnicode = function toUnicode(input) {
  	return mapDomain(input, function (string) {
  		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
  	});
  };

  /**
   * Converts a Unicode string representing a domain name or an email address to
   * Punycode. Only the non-ASCII parts of the domain name will be converted,
   * i.e. it doesn't matter if you call it with a domain that's already in
   * ASCII.
   * @memberOf punycode
   * @param {String} input The domain name or email address to convert, as a
   * Unicode string.
   * @returns {String} The Punycode representation of the given domain name or
   * email address.
   */
  var toASCII = function toASCII(input) {
  	return mapDomain(input, function (string) {
  		return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
  	});
  };

  /*--------------------------------------------------------------------------*/

  /** Define the public API */
  var punycode = {
  	/**
    * A string representing the current Punycode.js version number.
    * @memberOf punycode
    * @type String
    */
  	'version': '2.1.0',
  	/**
    * An object of methods to convert from JavaScript's internal character
    * representation (UCS-2) to Unicode code points, and back.
    * @see <https://mathiasbynens.be/notes/javascript-encoding>
    * @memberOf punycode
    * @type Object
    */
  	'ucs2': {
  		'decode': ucs2decode,
  		'encode': ucs2encode
  	},
  	'decode': decode,
  	'encode': encode,
  	'toASCII': toASCII,
  	'toUnicode': toUnicode
  };

  /**
   * URI.js
   *
   * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
   * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
   * @see http://github.com/garycourt/uri-js
   */
  /**
   * Copyright 2011 Gary Court. All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without modification, are
   * permitted provided that the following conditions are met:
   *
   *    1. Redistributions of source code must retain the above copyright notice, this list of
   *       conditions and the following disclaimer.
   *
   *    2. Redistributions in binary form must reproduce the above copyright notice, this list
   *       of conditions and the following disclaimer in the documentation and/or other materials
   *       provided with the distribution.
   *
   * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
   * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
   * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
   * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
   * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
   * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
   * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
   * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * The views and conclusions contained in the software and documentation are those of the
   * authors and should not be interpreted as representing official policies, either expressed
   * or implied, of Gary Court.
   */
  var SCHEMES = {};
  function pctEncChar(chr) {
      var c = chr.charCodeAt(0);
      var e = void 0;
      if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
      return e;
  }
  function pctDecChars(str) {
      var newStr = "";
      var i = 0;
      var il = str.length;
      while (i < il) {
          var c = parseInt(str.substr(i + 1, 2), 16);
          if (c < 128) {
              newStr += String.fromCharCode(c);
              i += 3;
          } else if (c >= 194 && c < 224) {
              if (il - i >= 6) {
                  var c2 = parseInt(str.substr(i + 4, 2), 16);
                  newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
              } else {
                  newStr += str.substr(i, 6);
              }
              i += 6;
          } else if (c >= 224) {
              if (il - i >= 9) {
                  var _c = parseInt(str.substr(i + 4, 2), 16);
                  var c3 = parseInt(str.substr(i + 7, 2), 16);
                  newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
              } else {
                  newStr += str.substr(i, 9);
              }
              i += 9;
          } else {
              newStr += str.substr(i, 3);
              i += 3;
          }
      }
      return newStr;
  }
  function _normalizeComponentEncoding(components, protocol) {
      function decodeUnreserved(str) {
          var decStr = pctDecChars(str);
          return !decStr.match(protocol.UNRESERVED) ? str : decStr;
      }
      if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
      if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
      return components;
  }

  function _stripLeadingZeros(str) {
      return str.replace(/^0*(.*)/, "$1") || "0";
  }
  function _normalizeIPv4(host, protocol) {
      var matches = host.match(protocol.IPV4ADDRESS) || [];

      var _matches = slicedToArray(matches, 2),
          address = _matches[1];

      if (address) {
          return address.split(".").map(_stripLeadingZeros).join(".");
      } else {
          return host;
      }
  }
  function _normalizeIPv6(host, protocol) {
      var matches = host.match(protocol.IPV6ADDRESS) || [];

      var _matches2 = slicedToArray(matches, 3),
          address = _matches2[1],
          zone = _matches2[2];

      if (address) {
          var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
              _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
              last = _address$toLowerCase$2[0],
              first = _address$toLowerCase$2[1];

          var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
          var lastFields = last.split(":").map(_stripLeadingZeros);
          var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
          var fieldCount = isLastFieldIPv4Address ? 7 : 8;
          var lastFieldsStart = lastFields.length - fieldCount;
          var fields = Array(fieldCount);
          for (var x = 0; x < fieldCount; ++x) {
              fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
          }
          if (isLastFieldIPv4Address) {
              fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
          }
          var allZeroFields = fields.reduce(function (acc, field, index) {
              if (!field || field === "0") {
                  var lastLongest = acc[acc.length - 1];
                  if (lastLongest && lastLongest.index + lastLongest.length === index) {
                      lastLongest.length++;
                  } else {
                      acc.push({ index: index, length: 1 });
                  }
              }
              return acc;
          }, []);
          var longestZeroFields = allZeroFields.sort(function (a, b) {
              return b.length - a.length;
          })[0];
          var newHost = void 0;
          if (longestZeroFields && longestZeroFields.length > 1) {
              var newFirst = fields.slice(0, longestZeroFields.index);
              var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
              newHost = newFirst.join(":") + "::" + newLast.join(":");
          } else {
              newHost = fields.join(":");
          }
          if (zone) {
              newHost += "%" + zone;
          }
          return newHost;
      } else {
          return host;
      }
  }
  var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
  var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
  function parse(uriString) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var components = {};
      var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
      if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
      var matches = uriString.match(URI_PARSE);
      if (matches) {
          if (NO_MATCH_IS_UNDEFINED) {
              //store each component
              components.scheme = matches[1];
              components.userinfo = matches[3];
              components.host = matches[4];
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = matches[7];
              components.fragment = matches[8];
              //fix port number
              if (isNaN(components.port)) {
                  components.port = matches[5];
              }
          } else {
              //IE FIX for improper RegExp matching
              //store each component
              components.scheme = matches[1] || undefined;
              components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
              components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
              components.port = parseInt(matches[5], 10);
              components.path = matches[6] || "";
              components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
              components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
              //fix port number
              if (isNaN(components.port)) {
                  components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
              }
          }
          if (components.host) {
              //normalize IP hosts
              components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
          }
          //determine reference type
          if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
              components.reference = "same-document";
          } else if (components.scheme === undefined) {
              components.reference = "relative";
          } else if (components.fragment === undefined) {
              components.reference = "absolute";
          } else {
              components.reference = "uri";
          }
          //check for reference errors
          if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
              components.error = components.error || "URI is not a " + options.reference + " reference.";
          }
          //find scheme handler
          var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
          //check if scheme can't handle IRIs
          if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
              //if host component is a domain name
              if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                  //convert Unicode IDN -> ASCII IDN
                  try {
                      components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                  } catch (e) {
                      components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                  }
              }
              //convert IRI -> URI
              _normalizeComponentEncoding(components, URI_PROTOCOL);
          } else {
              //normalize encodings
              _normalizeComponentEncoding(components, protocol);
          }
          //perform scheme specific parsing
          if (schemeHandler && schemeHandler.parse) {
              schemeHandler.parse(components, options);
          }
      } else {
          components.error = components.error || "URI can not be parsed.";
      }
      return components;
  }

  function _recomposeAuthority(components, options) {
      var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
      var uriTokens = [];
      if (components.userinfo !== undefined) {
          uriTokens.push(components.userinfo);
          uriTokens.push("@");
      }
      if (components.host !== undefined) {
          //normalize IP hosts, add brackets and escape zone separator for IPv6
          uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
              return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
          }));
      }
      if (typeof components.port === "number" || typeof components.port === "string") {
          uriTokens.push(":");
          uriTokens.push(String(components.port));
      }
      return uriTokens.length ? uriTokens.join("") : undefined;
  }

  var RDS1 = /^\.\.?\//;
  var RDS2 = /^\/\.(\/|$)/;
  var RDS3 = /^\/\.\.(\/|$)/;
  var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
  function removeDotSegments(input) {
      var output = [];
      while (input.length) {
          if (input.match(RDS1)) {
              input = input.replace(RDS1, "");
          } else if (input.match(RDS2)) {
              input = input.replace(RDS2, "/");
          } else if (input.match(RDS3)) {
              input = input.replace(RDS3, "/");
              output.pop();
          } else if (input === "." || input === "..") {
              input = "";
          } else {
              var im = input.match(RDS5);
              if (im) {
                  var s = im[0];
                  input = input.slice(s.length);
                  output.push(s);
              } else {
                  throw new Error("Unexpected dot segment condition");
              }
          }
      }
      return output.join("");
  }

  function serialize(components) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
      var uriTokens = [];
      //find scheme handler
      var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
      //perform scheme specific serialization
      if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
      if (components.host) {
          //if host component is an IPv6 address
          if (protocol.IPV6ADDRESS.test(components.host)) ;
          //TODO: normalize IPv6 address as per RFC 5952

          //if host component is a domain name
          else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                  //convert IDN via punycode
                  try {
                      components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                  } catch (e) {
                      components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                  }
              }
      }
      //normalize encoding
      _normalizeComponentEncoding(components, protocol);
      if (options.reference !== "suffix" && components.scheme) {
          uriTokens.push(components.scheme);
          uriTokens.push(":");
      }
      var authority = _recomposeAuthority(components, options);
      if (authority !== undefined) {
          if (options.reference !== "suffix") {
              uriTokens.push("//");
          }
          uriTokens.push(authority);
          if (components.path && components.path.charAt(0) !== "/") {
              uriTokens.push("/");
          }
      }
      if (components.path !== undefined) {
          var s = components.path;
          if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
              s = removeDotSegments(s);
          }
          if (authority === undefined) {
              s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
          }
          uriTokens.push(s);
      }
      if (components.query !== undefined) {
          uriTokens.push("?");
          uriTokens.push(components.query);
      }
      if (components.fragment !== undefined) {
          uriTokens.push("#");
          uriTokens.push(components.fragment);
      }
      return uriTokens.join(""); //merge tokens into a string
  }

  function resolveComponents(base, relative) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var skipNormalization = arguments[3];

      var target = {};
      if (!skipNormalization) {
          base = parse(serialize(base, options), options); //normalize base components
          relative = parse(serialize(relative, options), options); //normalize relative components
      }
      options = options || {};
      if (!options.tolerant && relative.scheme) {
          target.scheme = relative.scheme;
          //target.authority = relative.authority;
          target.userinfo = relative.userinfo;
          target.host = relative.host;
          target.port = relative.port;
          target.path = removeDotSegments(relative.path || "");
          target.query = relative.query;
      } else {
          if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
              //target.authority = relative.authority;
              target.userinfo = relative.userinfo;
              target.host = relative.host;
              target.port = relative.port;
              target.path = removeDotSegments(relative.path || "");
              target.query = relative.query;
          } else {
              if (!relative.path) {
                  target.path = base.path;
                  if (relative.query !== undefined) {
                      target.query = relative.query;
                  } else {
                      target.query = base.query;
                  }
              } else {
                  if (relative.path.charAt(0) === "/") {
                      target.path = removeDotSegments(relative.path);
                  } else {
                      if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                          target.path = "/" + relative.path;
                      } else if (!base.path) {
                          target.path = relative.path;
                      } else {
                          target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                      }
                      target.path = removeDotSegments(target.path);
                  }
                  target.query = relative.query;
              }
              //target.authority = base.authority;
              target.userinfo = base.userinfo;
              target.host = base.host;
              target.port = base.port;
          }
          target.scheme = base.scheme;
      }
      target.fragment = relative.fragment;
      return target;
  }

  function resolve(baseURI, relativeURI, options) {
      var schemelessOptions = assign({ scheme: 'null' }, options);
      return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
  }

  function normalize(uri, options) {
      if (typeof uri === "string") {
          uri = serialize(parse(uri, options), options);
      } else if (typeOf(uri) === "object") {
          uri = parse(serialize(uri, options), options);
      }
      return uri;
  }

  function equal(uriA, uriB, options) {
      if (typeof uriA === "string") {
          uriA = serialize(parse(uriA, options), options);
      } else if (typeOf(uriA) === "object") {
          uriA = serialize(uriA, options);
      }
      if (typeof uriB === "string") {
          uriB = serialize(parse(uriB, options), options);
      } else if (typeOf(uriB) === "object") {
          uriB = serialize(uriB, options);
      }
      return uriA === uriB;
  }

  function escapeComponent(str, options) {
      return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
  }

  function unescapeComponent(str, options) {
      return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
  }

  var handler = {
      scheme: "http",
      domainHost: true,
      parse: function parse(components, options) {
          //report missing host
          if (!components.host) {
              components.error = components.error || "HTTP URIs must have a host.";
          }
          return components;
      },
      serialize: function serialize(components, options) {
          var secure = String(components.scheme).toLowerCase() === "https";
          //normalize the default port
          if (components.port === (secure ? 443 : 80) || components.port === "") {
              components.port = undefined;
          }
          //normalize the empty path
          if (!components.path) {
              components.path = "/";
          }
          //NOTE: We do not parse query strings for HTTP URIs
          //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
          //and not the HTTP spec.
          return components;
      }
  };

  var handler$1 = {
      scheme: "https",
      domainHost: handler.domainHost,
      parse: handler.parse,
      serialize: handler.serialize
  };

  function isSecure(wsComponents) {
      return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
  }
  //RFC 6455
  var handler$2 = {
      scheme: "ws",
      domainHost: true,
      parse: function parse(components, options) {
          var wsComponents = components;
          //indicate if the secure flag is set
          wsComponents.secure = isSecure(wsComponents);
          //construct resouce name
          wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
          wsComponents.path = undefined;
          wsComponents.query = undefined;
          return wsComponents;
      },
      serialize: function serialize(wsComponents, options) {
          //normalize the default port
          if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
              wsComponents.port = undefined;
          }
          //ensure scheme matches secure flag
          if (typeof wsComponents.secure === 'boolean') {
              wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
              wsComponents.secure = undefined;
          }
          //reconstruct path from resource name
          if (wsComponents.resourceName) {
              var _wsComponents$resourc = wsComponents.resourceName.split('?'),
                  _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
                  path = _wsComponents$resourc2[0],
                  query = _wsComponents$resourc2[1];

              wsComponents.path = path && path !== '/' ? path : undefined;
              wsComponents.query = query;
              wsComponents.resourceName = undefined;
          }
          //forbid fragment component
          wsComponents.fragment = undefined;
          return wsComponents;
      }
  };

  var handler$3 = {
      scheme: "wss",
      domainHost: handler$2.domainHost,
      parse: handler$2.parse,
      serialize: handler$2.serialize
  };

  var O = {};
  //RFC 3986
  var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + ("\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" ) + "]";
  var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
  var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
  //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
  //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
  //const WSP$$ = "[\\x20\\x09]";
  //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
  //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
  //const VCHAR$$ = "[\\x21-\\x7E]";
  //const WSP$$ = "[\\x20\\x09]";
  //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
  //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
  //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
  //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
  var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
  var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
  var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
  var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
  var UNRESERVED = new RegExp(UNRESERVED$$, "g");
  var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
  var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
  var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
  var NOT_HFVALUE = NOT_HFNAME;
  function decodeUnreserved(str) {
      var decStr = pctDecChars(str);
      return !decStr.match(UNRESERVED) ? str : decStr;
  }
  var handler$4 = {
      scheme: "mailto",
      parse: function parse$$1(components, options) {
          var mailtoComponents = components;
          var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
          mailtoComponents.path = undefined;
          if (mailtoComponents.query) {
              var unknownHeaders = false;
              var headers = {};
              var hfields = mailtoComponents.query.split("&");
              for (var x = 0, xl = hfields.length; x < xl; ++x) {
                  var hfield = hfields[x].split("=");
                  switch (hfield[0]) {
                      case "to":
                          var toAddrs = hfield[1].split(",");
                          for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                              to.push(toAddrs[_x]);
                          }
                          break;
                      case "subject":
                          mailtoComponents.subject = unescapeComponent(hfield[1], options);
                          break;
                      case "body":
                          mailtoComponents.body = unescapeComponent(hfield[1], options);
                          break;
                      default:
                          unknownHeaders = true;
                          headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                          break;
                  }
              }
              if (unknownHeaders) mailtoComponents.headers = headers;
          }
          mailtoComponents.query = undefined;
          for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
              var addr = to[_x2].split("@");
              addr[0] = unescapeComponent(addr[0]);
              if (!options.unicodeSupport) {
                  //convert Unicode IDN -> ASCII IDN
                  try {
                      addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                  } catch (e) {
                      mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                  }
              } else {
                  addr[1] = unescapeComponent(addr[1], options).toLowerCase();
              }
              to[_x2] = addr.join("@");
          }
          return mailtoComponents;
      },
      serialize: function serialize$$1(mailtoComponents, options) {
          var components = mailtoComponents;
          var to = toArray(mailtoComponents.to);
          if (to) {
              for (var x = 0, xl = to.length; x < xl; ++x) {
                  var toAddr = String(to[x]);
                  var atIdx = toAddr.lastIndexOf("@");
                  var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                  var domain = toAddr.slice(atIdx + 1);
                  //convert IDN via punycode
                  try {
                      domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                  } catch (e) {
                      components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                  }
                  to[x] = localPart + "@" + domain;
              }
              components.path = to.join(",");
          }
          var headers = mailtoComponents.headers = mailtoComponents.headers || {};
          if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
          if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
          var fields = [];
          for (var name in headers) {
              if (headers[name] !== O[name]) {
                  fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
              }
          }
          if (fields.length) {
              components.query = fields.join("&");
          }
          return components;
      }
  };

  var URN_PARSE = /^([^\:]+)\:(.*)/;
  //RFC 2141
  var handler$5 = {
      scheme: "urn",
      parse: function parse$$1(components, options) {
          var matches = components.path && components.path.match(URN_PARSE);
          var urnComponents = components;
          if (matches) {
              var scheme = options.scheme || urnComponents.scheme || "urn";
              var nid = matches[1].toLowerCase();
              var nss = matches[2];
              var urnScheme = scheme + ":" + (options.nid || nid);
              var schemeHandler = SCHEMES[urnScheme];
              urnComponents.nid = nid;
              urnComponents.nss = nss;
              urnComponents.path = undefined;
              if (schemeHandler) {
                  urnComponents = schemeHandler.parse(urnComponents, options);
              }
          } else {
              urnComponents.error = urnComponents.error || "URN can not be parsed.";
          }
          return urnComponents;
      },
      serialize: function serialize$$1(urnComponents, options) {
          var scheme = options.scheme || urnComponents.scheme || "urn";
          var nid = urnComponents.nid;
          var urnScheme = scheme + ":" + (options.nid || nid);
          var schemeHandler = SCHEMES[urnScheme];
          if (schemeHandler) {
              urnComponents = schemeHandler.serialize(urnComponents, options);
          }
          var uriComponents = urnComponents;
          var nss = urnComponents.nss;
          uriComponents.path = (nid || options.nid) + ":" + nss;
          return uriComponents;
      }
  };

  var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
  //RFC 4122
  var handler$6 = {
      scheme: "urn:uuid",
      parse: function parse(urnComponents, options) {
          var uuidComponents = urnComponents;
          uuidComponents.uuid = uuidComponents.nss;
          uuidComponents.nss = undefined;
          if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
              uuidComponents.error = uuidComponents.error || "UUID is not valid.";
          }
          return uuidComponents;
      },
      serialize: function serialize(uuidComponents, options) {
          var urnComponents = uuidComponents;
          //normalize UUID
          urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
          return urnComponents;
      }
  };

  SCHEMES[handler.scheme] = handler;
  SCHEMES[handler$1.scheme] = handler$1;
  SCHEMES[handler$2.scheme] = handler$2;
  SCHEMES[handler$3.scheme] = handler$3;
  SCHEMES[handler$4.scheme] = handler$4;
  SCHEMES[handler$5.scheme] = handler$5;
  SCHEMES[handler$6.scheme] = handler$6;

  exports.SCHEMES = SCHEMES;
  exports.pctEncChar = pctEncChar;
  exports.pctDecChars = pctDecChars;
  exports.parse = parse;
  exports.removeDotSegments = removeDotSegments;
  exports.serialize = serialize;
  exports.resolveComponents = resolveComponents;
  exports.resolve = resolve;
  exports.normalize = normalize;
  exports.equal = equal;
  exports.escapeComponent = escapeComponent;
  exports.unescapeComponent = unescapeComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

  })));

  });

  unwrapExports(uri_all);

  // do not edit .js files directly - edit src/index.jst



  var fastDeepEqual = function equal(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
      if (a.constructor !== b.constructor) return false;

      var length, i, keys;
      if (Array.isArray(a)) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0;)
          if (!equal(a[i], b[i])) return false;
        return true;
      }



      if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

      keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        var key = keys[i];

        if (!equal(a[key], b[key])) return false;
      }

      return true;
    }

    // true if both NaN, false otherwise
    return a!==a && b!==b;
  };

  // https://mathiasbynens.be/notes/javascript-encoding
  // https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
  var ucs2length$1 = function ucs2length(str) {
    var length = 0
      , len = str.length
      , pos = 0
      , value;
    while (pos < len) {
      length++;
      value = str.charCodeAt(pos++);
      if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
        // high surrogate, and there is a next character
        value = str.charCodeAt(pos);
        if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
      }
    }
    return length;
  };

  var util = {
    copy: copy,
    checkDataType: checkDataType,
    checkDataTypes: checkDataTypes,
    coerceToTypes: coerceToTypes,
    toHash: toHash$1,
    getProperty: getProperty,
    escapeQuotes: escapeQuotes,
    equal: fastDeepEqual,
    ucs2length: ucs2length$1,
    varOccurences: varOccurences,
    varReplace: varReplace,
    schemaHasRules: schemaHasRules,
    schemaHasRulesExcept: schemaHasRulesExcept,
    schemaUnknownRules: schemaUnknownRules,
    toQuotedString: toQuotedString,
    getPathExpr: getPathExpr,
    getPath: getPath,
    getData: getData,
    unescapeFragment: unescapeFragment,
    unescapeJsonPointer: unescapeJsonPointer,
    escapeFragment: escapeFragment,
    escapeJsonPointer: escapeJsonPointer
  };


  function copy(o, to) {
    to = to || {};
    for (var key in o) to[key] = o[key];
    return to;
  }


  function checkDataType(dataType, data, strictNumbers, negate) {
    var EQUAL = negate ? ' !== ' : ' === '
      , AND = negate ? ' || ' : ' && '
      , OK = negate ? '!' : ''
      , NOT = negate ? '' : '!';
    switch (dataType) {
      case 'null': return data + EQUAL + 'null';
      case 'array': return OK + 'Array.isArray(' + data + ')';
      case 'object': return '(' + OK + data + AND +
                            'typeof ' + data + EQUAL + '"object"' + AND +
                            NOT + 'Array.isArray(' + data + '))';
      case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
                             NOT + '(' + data + ' % 1)' +
                             AND + data + EQUAL + data +
                             (strictNumbers ? (AND + OK + 'isFinite(' + data + ')') : '') + ')';
      case 'number': return '(typeof ' + data + EQUAL + '"' + dataType + '"' +
                            (strictNumbers ? (AND + OK + 'isFinite(' + data + ')') : '') + ')';
      default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
    }
  }


  function checkDataTypes(dataTypes, data, strictNumbers) {
    switch (dataTypes.length) {
      case 1: return checkDataType(dataTypes[0], data, strictNumbers, true);
      default:
        var code = '';
        var types = toHash$1(dataTypes);
        if (types.array && types.object) {
          code = types.null ? '(': '(!' + data + ' || ';
          code += 'typeof ' + data + ' !== "object")';
          delete types.null;
          delete types.array;
          delete types.object;
        }
        if (types.number) delete types.integer;
        for (var t in types)
          code += (code ? ' && ' : '' ) + checkDataType(t, data, strictNumbers, true);

        return code;
    }
  }


  var COERCE_TO_TYPES = toHash$1([ 'string', 'number', 'integer', 'boolean', 'null' ]);
  function coerceToTypes(optionCoerceTypes, dataTypes) {
    if (Array.isArray(dataTypes)) {
      var types = [];
      for (var i=0; i<dataTypes.length; i++) {
        var t = dataTypes[i];
        if (COERCE_TO_TYPES[t]) types[types.length] = t;
        else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
      }
      if (types.length) return types;
    } else if (COERCE_TO_TYPES[dataTypes]) {
      return [dataTypes];
    } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
      return ['array'];
    }
  }


  function toHash$1(arr) {
    var hash = {};
    for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
    return hash;
  }


  var IDENTIFIER$1 = /^[a-z$_][a-z$_0-9]*$/i;
  var SINGLE_QUOTE = /'|\\/g;
  function getProperty(key) {
    return typeof key == 'number'
            ? '[' + key + ']'
            : IDENTIFIER$1.test(key)
              ? '.' + key
              : "['" + escapeQuotes(key) + "']";
  }


  function escapeQuotes(str) {
    return str.replace(SINGLE_QUOTE, '\\$&')
              .replace(/\n/g, '\\n')
              .replace(/\r/g, '\\r')
              .replace(/\f/g, '\\f')
              .replace(/\t/g, '\\t');
  }


  function varOccurences(str, dataVar) {
    dataVar += '[^0-9]';
    var matches = str.match(new RegExp(dataVar, 'g'));
    return matches ? matches.length : 0;
  }


  function varReplace(str, dataVar, expr) {
    dataVar += '([^0-9])';
    expr = expr.replace(/\$/g, '$$$$');
    return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
  }


  function schemaHasRules(schema, rules) {
    if (typeof schema == 'boolean') return !schema;
    for (var key in schema) if (rules[key]) return true;
  }


  function schemaHasRulesExcept(schema, rules, exceptKeyword) {
    if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
    for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
  }


  function schemaUnknownRules(schema, rules) {
    if (typeof schema == 'boolean') return;
    for (var key in schema) if (!rules[key]) return key;
  }


  function toQuotedString(str) {
    return '\'' + escapeQuotes(str) + '\'';
  }


  function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
    var path = jsonPointers // false by default
                ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
                : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
    return joinPaths(currentPath, path);
  }


  function getPath(currentPath, prop, jsonPointers) {
    var path = jsonPointers // false by default
                ? toQuotedString('/' + escapeJsonPointer(prop))
                : toQuotedString(getProperty(prop));
    return joinPaths(currentPath, path);
  }


  var JSON_POINTER$1 = /^\/(?:[^~]|~0|~1)*$/;
  var RELATIVE_JSON_POINTER$1 = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function getData($data, lvl, paths) {
    var up, jsonPointer, data, matches;
    if ($data === '') return 'rootData';
    if ($data[0] == '/') {
      if (!JSON_POINTER$1.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
      jsonPointer = $data;
      data = 'rootData';
    } else {
      matches = $data.match(RELATIVE_JSON_POINTER$1);
      if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
      up = +matches[1];
      jsonPointer = matches[2];
      if (jsonPointer == '#') {
        if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
        return paths[lvl - up];
      }

      if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
      data = 'data' + ((lvl - up) || '');
      if (!jsonPointer) return data;
    }

    var expr = data;
    var segments = jsonPointer.split('/');
    for (var i=0; i<segments.length; i++) {
      var segment = segments[i];
      if (segment) {
        data += getProperty(unescapeJsonPointer(segment));
        expr += ' && ' + data;
      }
    }
    return expr;
  }


  function joinPaths (a, b) {
    if (a == '""') return b;
    return (a + ' + ' + b).replace(/([^\\])' \+ '/g, '$1');
  }


  function unescapeFragment(str) {
    return unescapeJsonPointer(decodeURIComponent(str));
  }


  function escapeFragment(str) {
    return encodeURIComponent(escapeJsonPointer(str));
  }


  function escapeJsonPointer(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }


  function unescapeJsonPointer(str) {
    return str.replace(/~1/g, '/').replace(/~0/g, '~');
  }
  util.copy;
  util.checkDataType;
  util.checkDataTypes;
  util.coerceToTypes;
  util.toHash;
  util.getProperty;
  util.escapeQuotes;
  util.equal;
  util.ucs2length;
  util.varOccurences;
  util.varReplace;
  util.schemaHasRules;
  util.schemaHasRulesExcept;
  util.schemaUnknownRules;
  util.toQuotedString;
  util.getPathExpr;
  util.getPath;
  util.getData;
  util.unescapeFragment;
  util.unescapeJsonPointer;
  util.escapeFragment;
  util.escapeJsonPointer;

  var schema_obj = SchemaObject;

  function SchemaObject(obj) {
    util.copy(obj, this);
  }

  var jsonSchemaTraverse = createCommonjsModule(function (module) {

  var traverse = module.exports = function (schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == 'function') {
      cb = opts;
      opts = {};
    }

    cb = opts.cb || cb;
    var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};
    var post = cb.post || function() {};

    _traverse(opts, pre, post, schema, '', schema);
  };


  traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true
  };

  traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
  };

  traverse.propsKeywords = {
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
  };

  traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
  };


  function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
      pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
      for (var key in schema) {
        var sch = schema[key];
        if (Array.isArray(sch)) {
          if (key in traverse.arrayKeywords) {
            for (var i=0; i<sch.length; i++)
              _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
          }
        } else if (key in traverse.propsKeywords) {
          if (sch && typeof sch == 'object') {
            for (var prop in sch)
              _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
          }
        } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
          _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
        }
      }
      post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
  }


  function escapeJsonPtr(str) {
    return str.replace(/~/g, '~0').replace(/\//g, '~1');
  }
  });

  var resolve_1 = resolve;

  resolve.normalizeId = normalizeId;
  resolve.fullPath = getFullPath;
  resolve.url = resolveUrl;
  resolve.ids = resolveIds;
  resolve.inlineRef = inlineRef;
  resolve.schema = resolveSchema;

  /**
   * [resolve and compile the references ($ref)]
   * @this   Ajv
   * @param  {Function} compile reference to schema compilation funciton (localCompile)
   * @param  {Object} root object with information about the root schema for the current schema
   * @param  {String} ref reference to resolve
   * @return {Object|Function} schema object (if the schema can be inlined) or validation function
   */
  function resolve(compile, root, ref) {
    /* jshint validthis: true */
    var refVal = this._refs[ref];
    if (typeof refVal == 'string') {
      if (this._refs[refVal]) refVal = this._refs[refVal];
      else return resolve.call(this, compile, root, refVal);
    }

    refVal = refVal || this._schemas[ref];
    if (refVal instanceof schema_obj) {
      return inlineRef(refVal.schema, this._opts.inlineRefs)
              ? refVal.schema
              : refVal.validate || this._compile(refVal);
    }

    var res = resolveSchema.call(this, root, ref);
    var schema, v, baseId;
    if (res) {
      schema = res.schema;
      root = res.root;
      baseId = res.baseId;
    }

    if (schema instanceof schema_obj) {
      v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
    } else if (schema !== undefined) {
      v = inlineRef(schema, this._opts.inlineRefs)
          ? schema
          : compile.call(this, schema, root, undefined, baseId);
    }

    return v;
  }


  /**
   * Resolve schema, its root and baseId
   * @this Ajv
   * @param  {Object} root root object with properties schema, refVal, refs
   * @param  {String} ref  reference to resolve
   * @return {Object} object with properties schema, root, baseId
   */
  function resolveSchema(root, ref) {
    /* jshint validthis: true */
    var p = uri_all.parse(ref)
      , refPath = _getFullPath(p)
      , baseId = getFullPath(this._getId(root.schema));
    if (Object.keys(root.schema).length === 0 || refPath !== baseId) {
      var id = normalizeId(refPath);
      var refVal = this._refs[id];
      if (typeof refVal == 'string') {
        return resolveRecursive.call(this, root, refVal, p);
      } else if (refVal instanceof schema_obj) {
        if (!refVal.validate) this._compile(refVal);
        root = refVal;
      } else {
        refVal = this._schemas[id];
        if (refVal instanceof schema_obj) {
          if (!refVal.validate) this._compile(refVal);
          if (id == normalizeId(ref))
            return { schema: refVal, root: root, baseId: baseId };
          root = refVal;
        } else {
          return;
        }
      }
      if (!root.schema) return;
      baseId = getFullPath(this._getId(root.schema));
    }
    return getJsonPointer.call(this, p, baseId, root.schema, root);
  }


  /* @this Ajv */
  function resolveRecursive(root, ref, parsedRef) {
    /* jshint validthis: true */
    var res = resolveSchema.call(this, root, ref);
    if (res) {
      var schema = res.schema;
      var baseId = res.baseId;
      root = res.root;
      var id = this._getId(schema);
      if (id) baseId = resolveUrl(baseId, id);
      return getJsonPointer.call(this, parsedRef, baseId, schema, root);
    }
  }


  var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
  /* @this Ajv */
  function getJsonPointer(parsedRef, baseId, schema, root) {
    /* jshint validthis: true */
    parsedRef.fragment = parsedRef.fragment || '';
    if (parsedRef.fragment.slice(0,1) != '/') return;
    var parts = parsedRef.fragment.split('/');

    for (var i = 1; i < parts.length; i++) {
      var part = parts[i];
      if (part) {
        part = util.unescapeFragment(part);
        schema = schema[part];
        if (schema === undefined) break;
        var id;
        if (!PREVENT_SCOPE_CHANGE[part]) {
          id = this._getId(schema);
          if (id) baseId = resolveUrl(baseId, id);
          if (schema.$ref) {
            var $ref = resolveUrl(baseId, schema.$ref);
            var res = resolveSchema.call(this, root, $ref);
            if (res) {
              schema = res.schema;
              root = res.root;
              baseId = res.baseId;
            }
          }
        }
      }
    }
    if (schema !== undefined && schema !== root.schema)
      return { schema: schema, root: root, baseId: baseId };
  }


  var SIMPLE_INLINED = util.toHash([
    'type', 'format', 'pattern',
    'maxLength', 'minLength',
    'maxProperties', 'minProperties',
    'maxItems', 'minItems',
    'maximum', 'minimum',
    'uniqueItems', 'multipleOf',
    'required', 'enum'
  ]);
  function inlineRef(schema, limit) {
    if (limit === false) return false;
    if (limit === undefined || limit === true) return checkNoRef(schema);
    else if (limit) return countKeys(schema) <= limit;
  }


  function checkNoRef(schema) {
    var item;
    if (Array.isArray(schema)) {
      for (var i=0; i<schema.length; i++) {
        item = schema[i];
        if (typeof item == 'object' && !checkNoRef(item)) return false;
      }
    } else {
      for (var key in schema) {
        if (key == '$ref') return false;
        item = schema[key];
        if (typeof item == 'object' && !checkNoRef(item)) return false;
      }
    }
    return true;
  }


  function countKeys(schema) {
    var count = 0, item;
    if (Array.isArray(schema)) {
      for (var i=0; i<schema.length; i++) {
        item = schema[i];
        if (typeof item == 'object') count += countKeys(item);
        if (count == Infinity) return Infinity;
      }
    } else {
      for (var key in schema) {
        if (key == '$ref') return Infinity;
        if (SIMPLE_INLINED[key]) {
          count++;
        } else {
          item = schema[key];
          if (typeof item == 'object') count += countKeys(item) + 1;
          if (count == Infinity) return Infinity;
        }
      }
    }
    return count;
  }


  function getFullPath(id, normalize) {
    if (normalize !== false) id = normalizeId(id);
    var p = uri_all.parse(id);
    return _getFullPath(p);
  }


  function _getFullPath(p) {
    return uri_all.serialize(p).split('#')[0] + '#';
  }


  var TRAILING_SLASH_HASH = /#\/?$/;
  function normalizeId(id) {
    return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
  }


  function resolveUrl(baseId, id) {
    id = normalizeId(id);
    return uri_all.resolve(baseId, id);
  }


  /* @this Ajv */
  function resolveIds(schema) {
    var schemaId = normalizeId(this._getId(schema));
    var baseIds = {'': schemaId};
    var fullPaths = {'': getFullPath(schemaId, false)};
    var localRefs = {};
    var self = this;

    jsonSchemaTraverse(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
      if (jsonPtr === '') return;
      var id = self._getId(sch);
      var baseId = baseIds[parentJsonPtr];
      var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
      if (keyIndex !== undefined)
        fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util.escapeFragment(keyIndex));

      if (typeof id == 'string') {
        id = baseId = normalizeId(baseId ? uri_all.resolve(baseId, id) : id);

        var refVal = self._refs[id];
        if (typeof refVal == 'string') refVal = self._refs[refVal];
        if (refVal && refVal.schema) {
          if (!fastDeepEqual(sch, refVal.schema))
            throw new Error('id "' + id + '" resolves to more than one schema');
        } else if (id != normalizeId(fullPath)) {
          if (id[0] == '#') {
            if (localRefs[id] && !fastDeepEqual(sch, localRefs[id]))
              throw new Error('id "' + id + '" resolves to more than one schema');
            localRefs[id] = sch;
          } else {
            self._refs[id] = fullPath;
          }
        }
      }
      baseIds[jsonPtr] = baseId;
      fullPaths[jsonPtr] = fullPath;
    });

    return localRefs;
  }

  var error_classes = {
    Validation: errorSubclass(ValidationError$1),
    MissingRef: errorSubclass(MissingRefError$1)
  };


  function ValidationError$1(errors) {
    this.message = 'validation failed';
    this.errors = errors;
    this.ajv = this.validation = true;
  }


  MissingRefError$1.message = function (baseId, ref) {
    return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
  };


  function MissingRefError$1(baseId, ref, message) {
    this.message = message || MissingRefError$1.message(baseId, ref);
    this.missingRef = resolve_1.url(baseId, ref);
    this.missingSchema = resolve_1.normalizeId(resolve_1.fullPath(this.missingRef));
  }


  function errorSubclass(Subclass) {
    Subclass.prototype = Object.create(Error.prototype);
    Subclass.prototype.constructor = Subclass;
    return Subclass;
  }

  var fastJsonStableStringify = function (data, opts) {
      if (!opts) opts = {};
      if (typeof opts === 'function') opts = { cmp: opts };
      var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;

      var cmp = opts.cmp && (function (f) {
          return function (node) {
              return function (a, b) {
                  var aobj = { key: a, value: node[a] };
                  var bobj = { key: b, value: node[b] };
                  return f(aobj, bobj);
              };
          };
      })(opts.cmp);

      var seen = [];
      return (function stringify (node) {
          if (node && node.toJSON && typeof node.toJSON === 'function') {
              node = node.toJSON();
          }

          if (node === undefined) return;
          if (typeof node == 'number') return isFinite(node) ? '' + node : 'null';
          if (typeof node !== 'object') return JSON.stringify(node);

          var i, out;
          if (Array.isArray(node)) {
              out = '[';
              for (i = 0; i < node.length; i++) {
                  if (i) out += ',';
                  out += stringify(node[i]) || 'null';
              }
              return out + ']';
          }

          if (node === null) return 'null';

          if (seen.indexOf(node) !== -1) {
              if (cycles) return JSON.stringify('__cycle__');
              throw new TypeError('Converting circular structure to JSON');
          }

          var seenIndex = seen.push(node) - 1;
          var keys = Object.keys(node).sort(cmp && cmp(node));
          out = '';
          for (i = 0; i < keys.length; i++) {
              var key = keys[i];
              var value = stringify(node[key]);

              if (!value) continue;
              if (out) out += ',';
              out += JSON.stringify(key) + ':' + value;
          }
          seen.splice(seenIndex, 1);
          return '{' + out + '}';
      })(data);
  };

  var validate$2 = function generate_validate(it, $keyword, $ruleType) {
    var out = '';
    var $async = it.schema.$async === true,
      $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
      $id = it.self._getId(it.schema);
    if (it.opts.strictKeywords) {
      var $unknownKwd = it.util.schemaUnknownRules(it.schema, it.RULES.keywords);
      if ($unknownKwd) {
        var $keywordsMsg = 'unknown keyword: ' + $unknownKwd;
        if (it.opts.strictKeywords === 'log') it.logger.warn($keywordsMsg);
        else throw new Error($keywordsMsg);
      }
    }
    if (it.isTop) {
      out += ' var validate = ';
      if ($async) {
        it.async = true;
        out += 'async ';
      }
      out += 'function(data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
      if ($id && (it.opts.sourceCode || it.opts.processCode)) {
        out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
      }
    }
    if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
      var $keyword = 'false schema';
      var $lvl = it.level;
      var $dataLvl = it.dataLevel;
      var $schema = it.schema[$keyword];
      var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
      var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
      var $breakOnError = !it.opts.allErrors;
      var $errorKeyword;
      var $data = 'data' + ($dataLvl || '');
      var $valid = 'valid' + $lvl;
      if (it.schema === false) {
        if (it.isTop) {
          $breakOnError = true;
        } else {
          out += ' var ' + ($valid) + ' = false; ';
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
          if (it.opts.messages !== false) {
            out += ' , message: \'boolean schema is false\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      } else {
        if (it.isTop) {
          if ($async) {
            out += ' return data; ';
          } else {
            out += ' validate.errors = null; return true; ';
          }
        } else {
          out += ' var ' + ($valid) + ' = true; ';
        }
      }
      if (it.isTop) {
        out += ' }; return validate; ';
      }
      return out;
    }
    if (it.isTop) {
      var $top = it.isTop,
        $lvl = it.level = 0,
        $dataLvl = it.dataLevel = 0,
        $data = 'data';
      it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
      it.baseId = it.baseId || it.rootId;
      delete it.isTop;
      it.dataPathArr = [""];
      if (it.schema.default !== undefined && it.opts.useDefaults && it.opts.strictDefaults) {
        var $defaultMsg = 'default is ignored in the schema root';
        if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
        else throw new Error($defaultMsg);
      }
      out += ' var vErrors = null; ';
      out += ' var errors = 0;     ';
      out += ' if (rootData === undefined) rootData = data; ';
    } else {
      var $lvl = it.level,
        $dataLvl = it.dataLevel,
        $data = 'data' + ($dataLvl || '');
      if ($id) it.baseId = it.resolve.url(it.baseId, $id);
      if ($async && !it.async) throw new Error('async schema in sync schema');
      out += ' var errs_' + ($lvl) + ' = errors;';
    }
    var $valid = 'valid' + $lvl,
      $breakOnError = !it.opts.allErrors,
      $closingBraces1 = '',
      $closingBraces2 = '';
    var $errorKeyword;
    var $typeSchema = it.schema.type,
      $typeIsArray = Array.isArray($typeSchema);
    if ($typeSchema && it.opts.nullable && it.schema.nullable === true) {
      if ($typeIsArray) {
        if ($typeSchema.indexOf('null') == -1) $typeSchema = $typeSchema.concat('null');
      } else if ($typeSchema != 'null') {
        $typeSchema = [$typeSchema, 'null'];
        $typeIsArray = true;
      }
    }
    if ($typeIsArray && $typeSchema.length == 1) {
      $typeSchema = $typeSchema[0];
      $typeIsArray = false;
    }
    if (it.schema.$ref && $refKeywords) {
      if (it.opts.extendRefs == 'fail') {
        throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
      } else if (it.opts.extendRefs !== true) {
        $refKeywords = false;
        it.logger.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
      }
    }
    if (it.schema.$comment && it.opts.$comment) {
      out += ' ' + (it.RULES.all.$comment.code(it, '$comment'));
    }
    if ($typeSchema) {
      if (it.opts.coerceTypes) {
        var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
      }
      var $rulesGroup = it.RULES.types[$typeSchema];
      if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
        var $schemaPath = it.schemaPath + '.type',
          $errSchemaPath = it.errSchemaPath + '/type';
        var $schemaPath = it.schemaPath + '.type',
          $errSchemaPath = it.errSchemaPath + '/type',
          $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
        out += ' if (' + (it.util[$method]($typeSchema, $data, it.opts.strictNumbers, true)) + ') { ';
        if ($coerceToTypes) {
          var $dataType = 'dataType' + $lvl,
            $coerced = 'coerced' + $lvl;
          out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; var ' + ($coerced) + ' = undefined; ';
          if (it.opts.coerceTypes == 'array') {
            out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ') && ' + ($data) + '.length == 1) { ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + '; if (' + (it.util.checkDataType(it.schema.type, $data, it.opts.strictNumbers)) + ') ' + ($coerced) + ' = ' + ($data) + '; } ';
          }
          out += ' if (' + ($coerced) + ' !== undefined) ; ';
          var arr1 = $coerceToTypes;
          if (arr1) {
            var $type, $i = -1,
              l1 = arr1.length - 1;
            while ($i < l1) {
              $type = arr1[$i += 1];
              if ($type == 'string') {
                out += ' else if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
              } else if ($type == 'number' || $type == 'integer') {
                out += ' else if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
                if ($type == 'integer') {
                  out += ' && !(' + ($data) + ' % 1)';
                }
                out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
              } else if ($type == 'boolean') {
                out += ' else if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
              } else if ($type == 'null') {
                out += ' else if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
              } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
                out += ' else if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
              }
            }
          }
          out += ' else {   ';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should be ';
              if ($typeIsArray) {
                out += '' + ($typeSchema.join(","));
              } else {
                out += '' + ($typeSchema);
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } if (' + ($coerced) + ' !== undefined) {  ';
          var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
            $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
          out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
          if (!$dataLvl) {
            out += 'if (' + ($parentData) + ' !== undefined)';
          }
          out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
        } else {
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should be ';
              if ($typeIsArray) {
                out += '' + ($typeSchema.join(","));
              } else {
                out += '' + ($typeSchema);
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
        }
        out += ' } ';
      }
    }
    if (it.schema.$ref && !$refKeywords) {
      out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
      if ($breakOnError) {
        out += ' } if (errors === ';
        if ($top) {
          out += '0';
        } else {
          out += 'errs_' + ($lvl);
        }
        out += ') { ';
        $closingBraces2 += '}';
      }
    } else {
      var arr2 = it.RULES;
      if (arr2) {
        var $rulesGroup, i2 = -1,
          l2 = arr2.length - 1;
        while (i2 < l2) {
          $rulesGroup = arr2[i2 += 1];
          if ($shouldUseGroup($rulesGroup)) {
            if ($rulesGroup.type) {
              out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data, it.opts.strictNumbers)) + ') { ';
            }
            if (it.opts.useDefaults) {
              if ($rulesGroup.type == 'object' && it.schema.properties) {
                var $schema = it.schema.properties,
                  $schemaKeys = Object.keys($schema);
                var arr3 = $schemaKeys;
                if (arr3) {
                  var $propertyKey, i3 = -1,
                    l3 = arr3.length - 1;
                  while (i3 < l3) {
                    $propertyKey = arr3[i3 += 1];
                    var $sch = $schema[$propertyKey];
                    if ($sch.default !== undefined) {
                      var $passData = $data + it.util.getProperty($propertyKey);
                      if (it.compositeRule) {
                        if (it.opts.strictDefaults) {
                          var $defaultMsg = 'default is ignored for: ' + $passData;
                          if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
                          else throw new Error($defaultMsg);
                        }
                      } else {
                        out += ' if (' + ($passData) + ' === undefined ';
                        if (it.opts.useDefaults == 'empty') {
                          out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
                        }
                        out += ' ) ' + ($passData) + ' = ';
                        if (it.opts.useDefaults == 'shared') {
                          out += ' ' + (it.useDefault($sch.default)) + ' ';
                        } else {
                          out += ' ' + (JSON.stringify($sch.default)) + ' ';
                        }
                        out += '; ';
                      }
                    }
                  }
                }
              } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
                var arr4 = it.schema.items;
                if (arr4) {
                  var $sch, $i = -1,
                    l4 = arr4.length - 1;
                  while ($i < l4) {
                    $sch = arr4[$i += 1];
                    if ($sch.default !== undefined) {
                      var $passData = $data + '[' + $i + ']';
                      if (it.compositeRule) {
                        if (it.opts.strictDefaults) {
                          var $defaultMsg = 'default is ignored for: ' + $passData;
                          if (it.opts.strictDefaults === 'log') it.logger.warn($defaultMsg);
                          else throw new Error($defaultMsg);
                        }
                      } else {
                        out += ' if (' + ($passData) + ' === undefined ';
                        if (it.opts.useDefaults == 'empty') {
                          out += ' || ' + ($passData) + ' === null || ' + ($passData) + ' === \'\' ';
                        }
                        out += ' ) ' + ($passData) + ' = ';
                        if (it.opts.useDefaults == 'shared') {
                          out += ' ' + (it.useDefault($sch.default)) + ' ';
                        } else {
                          out += ' ' + (JSON.stringify($sch.default)) + ' ';
                        }
                        out += '; ';
                      }
                    }
                  }
                }
              }
            }
            var arr5 = $rulesGroup.rules;
            if (arr5) {
              var $rule, i5 = -1,
                l5 = arr5.length - 1;
              while (i5 < l5) {
                $rule = arr5[i5 += 1];
                if ($shouldUseRule($rule)) {
                  var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                  if ($code) {
                    out += ' ' + ($code) + ' ';
                    if ($breakOnError) {
                      $closingBraces1 += '}';
                    }
                  }
                }
              }
            }
            if ($breakOnError) {
              out += ' ' + ($closingBraces1) + ' ';
              $closingBraces1 = '';
            }
            if ($rulesGroup.type) {
              out += ' } ';
              if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
                out += ' else { ';
                var $schemaPath = it.schemaPath + '.type',
                  $errSchemaPath = it.errSchemaPath + '/type';
                var $$outStack = $$outStack || [];
                $$outStack.push(out);
                out = ''; /* istanbul ignore else */
                if (it.createErrors !== false) {
                  out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
                  if ($typeIsArray) {
                    out += '' + ($typeSchema.join(","));
                  } else {
                    out += '' + ($typeSchema);
                  }
                  out += '\' } ';
                  if (it.opts.messages !== false) {
                    out += ' , message: \'should be ';
                    if ($typeIsArray) {
                      out += '' + ($typeSchema.join(","));
                    } else {
                      out += '' + ($typeSchema);
                    }
                    out += '\' ';
                  }
                  if (it.opts.verbose) {
                    out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                  }
                  out += ' } ';
                } else {
                  out += ' {} ';
                }
                var __err = out;
                out = $$outStack.pop();
                if (!it.compositeRule && $breakOnError) {
                  /* istanbul ignore if */
                  if (it.async) {
                    out += ' throw new ValidationError([' + (__err) + ']); ';
                  } else {
                    out += ' validate.errors = [' + (__err) + ']; return false; ';
                  }
                } else {
                  out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
                out += ' } ';
              }
            }
            if ($breakOnError) {
              out += ' if (errors === ';
              if ($top) {
                out += '0';
              } else {
                out += 'errs_' + ($lvl);
              }
              out += ') { ';
              $closingBraces2 += '}';
            }
          }
        }
      }
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces2) + ' ';
    }
    if ($top) {
      if ($async) {
        out += ' if (errors === 0) return data;           ';
        out += ' else throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; ';
        out += ' return errors === 0;       ';
      }
      out += ' }; return validate;';
    } else {
      out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
    }

    function $shouldUseGroup($rulesGroup) {
      var rules = $rulesGroup.rules;
      for (var i = 0; i < rules.length; i++)
        if ($shouldUseRule(rules[i])) return true;
    }

    function $shouldUseRule($rule) {
      return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImplementsSomeKeyword($rule));
    }

    function $ruleImplementsSomeKeyword($rule) {
      var impl = $rule.implements;
      for (var i = 0; i < impl.length; i++)
        if (it.schema[impl[i]] !== undefined) return true;
    }
    return out;
  };

  /**
   * Functions below are used inside compiled validations function
   */

  var ucs2length = util.ucs2length;


  // this error is thrown by async schemas to return validation errors via exception
  var ValidationError = error_classes.Validation;

  var compile_1 = compile$1;


  /**
   * Compiles schema to validation function
   * @this   Ajv
   * @param  {Object} schema schema object
   * @param  {Object} root object with information about the root schema for this schema
   * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
   * @param  {String} baseId base ID for IDs in the schema
   * @return {Function} validation function
   */
  function compile$1(schema, root, localRefs, baseId) {
    /* jshint validthis: true, evil: true */
    /* eslint no-shadow: 0 */
    var self = this
      , opts = this._opts
      , refVal = [ undefined ]
      , refs = {}
      , patterns = []
      , patternsHash = {}
      , defaults = []
      , defaultsHash = {}
      , customRules = [];

    root = root || { schema: schema, refVal: refVal, refs: refs };

    var c = checkCompiling.call(this, schema, root, baseId);
    var compilation = this._compilations[c.index];
    if (c.compiling) return (compilation.callValidate = callValidate);

    var formats = this._formats;
    var RULES = this.RULES;

    try {
      var v = localCompile(schema, root, localRefs, baseId);
      compilation.validate = v;
      var cv = compilation.callValidate;
      if (cv) {
        cv.schema = v.schema;
        cv.errors = null;
        cv.refs = v.refs;
        cv.refVal = v.refVal;
        cv.root = v.root;
        cv.$async = v.$async;
        if (opts.sourceCode) cv.source = v.source;
      }
      return v;
    } finally {
      endCompiling.call(this, schema, root, baseId);
    }

    /* @this   {*} - custom context, see passContext option */
    function callValidate() {
      /* jshint validthis: true */
      var validate = compilation.validate;
      var result = validate.apply(this, arguments);
      callValidate.errors = validate.errors;
      return result;
    }

    function localCompile(_schema, _root, localRefs, baseId) {
      var isRoot = !_root || (_root && _root.schema == _schema);
      if (_root.schema != root.schema)
        return compile$1.call(self, _schema, _root, localRefs, baseId);

      var $async = _schema.$async === true;

      var sourceCode = validate$2({
        isTop: true,
        schema: _schema,
        isRoot: isRoot,
        baseId: baseId,
        root: _root,
        schemaPath: '',
        errSchemaPath: '#',
        errorPath: '""',
        MissingRefError: error_classes.MissingRef,
        RULES: RULES,
        validate: validate$2,
        util: util,
        resolve: resolve_1,
        resolveRef: resolveRef,
        usePattern: usePattern,
        useDefault: useDefault,
        useCustomRule: useCustomRule,
        opts: opts,
        formats: formats,
        logger: self.logger,
        self: self
      });

      sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
                     + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
                     + sourceCode;

      if (opts.processCode) sourceCode = opts.processCode(sourceCode, _schema);
      // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
      var validate;
      try {
        var makeValidate = new Function(
          'self',
          'RULES',
          'formats',
          'root',
          'refVal',
          'defaults',
          'customRules',
          'equal',
          'ucs2length',
          'ValidationError',
          sourceCode
        );

        validate = makeValidate(
          self,
          RULES,
          formats,
          root,
          refVal,
          defaults,
          customRules,
          fastDeepEqual,
          ucs2length,
          ValidationError
        );

        refVal[0] = validate;
      } catch(e) {
        self.logger.error('Error compiling schema, function code:', sourceCode);
        throw e;
      }

      validate.schema = _schema;
      validate.errors = null;
      validate.refs = refs;
      validate.refVal = refVal;
      validate.root = isRoot ? validate : _root;
      if ($async) validate.$async = true;
      if (opts.sourceCode === true) {
        validate.source = {
          code: sourceCode,
          patterns: patterns,
          defaults: defaults
        };
      }

      return validate;
    }

    function resolveRef(baseId, ref, isRoot) {
      ref = resolve_1.url(baseId, ref);
      var refIndex = refs[ref];
      var _refVal, refCode;
      if (refIndex !== undefined) {
        _refVal = refVal[refIndex];
        refCode = 'refVal[' + refIndex + ']';
        return resolvedRef(_refVal, refCode);
      }
      if (!isRoot && root.refs) {
        var rootRefId = root.refs[ref];
        if (rootRefId !== undefined) {
          _refVal = root.refVal[rootRefId];
          refCode = addLocalRef(ref, _refVal);
          return resolvedRef(_refVal, refCode);
        }
      }

      refCode = addLocalRef(ref);
      var v = resolve_1.call(self, localCompile, root, ref);
      if (v === undefined) {
        var localSchema = localRefs && localRefs[ref];
        if (localSchema) {
          v = resolve_1.inlineRef(localSchema, opts.inlineRefs)
              ? localSchema
              : compile$1.call(self, localSchema, root, localRefs, baseId);
        }
      }

      if (v === undefined) {
        removeLocalRef(ref);
      } else {
        replaceLocalRef(ref, v);
        return resolvedRef(v, refCode);
      }
    }

    function addLocalRef(ref, v) {
      var refId = refVal.length;
      refVal[refId] = v;
      refs[ref] = refId;
      return 'refVal' + refId;
    }

    function removeLocalRef(ref) {
      delete refs[ref];
    }

    function replaceLocalRef(ref, v) {
      var refId = refs[ref];
      refVal[refId] = v;
    }

    function resolvedRef(refVal, code) {
      return typeof refVal == 'object' || typeof refVal == 'boolean'
              ? { code: code, schema: refVal, inline: true }
              : { code: code, $async: refVal && !!refVal.$async };
    }

    function usePattern(regexStr) {
      var index = patternsHash[regexStr];
      if (index === undefined) {
        index = patternsHash[regexStr] = patterns.length;
        patterns[index] = regexStr;
      }
      return 'pattern' + index;
    }

    function useDefault(value) {
      switch (typeof value) {
        case 'boolean':
        case 'number':
          return '' + value;
        case 'string':
          return util.toQuotedString(value);
        case 'object':
          if (value === null) return 'null';
          var valueStr = fastJsonStableStringify(value);
          var index = defaultsHash[valueStr];
          if (index === undefined) {
            index = defaultsHash[valueStr] = defaults.length;
            defaults[index] = value;
          }
          return 'default' + index;
      }
    }

    function useCustomRule(rule, schema, parentSchema, it) {
      if (self._opts.validateSchema !== false) {
        var deps = rule.definition.dependencies;
        if (deps && !deps.every(function(keyword) {
          return Object.prototype.hasOwnProperty.call(parentSchema, keyword);
        }))
          throw new Error('parent schema must have all required keywords: ' + deps.join(','));

        var validateSchema = rule.definition.validateSchema;
        if (validateSchema) {
          var valid = validateSchema(schema);
          if (!valid) {
            var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
            if (self._opts.validateSchema == 'log') self.logger.error(message);
            else throw new Error(message);
          }
        }
      }

      var compile = rule.definition.compile
        , inline = rule.definition.inline
        , macro = rule.definition.macro;

      var validate;
      if (compile) {
        validate = compile.call(self, schema, parentSchema, it);
      } else if (macro) {
        validate = macro.call(self, schema, parentSchema, it);
        if (opts.validateSchema !== false) self.validateSchema(validate, true);
      } else if (inline) {
        validate = inline.call(self, it, rule.keyword, schema, parentSchema);
      } else {
        validate = rule.definition.validate;
        if (!validate) return;
      }

      if (validate === undefined)
        throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

      var index = customRules.length;
      customRules[index] = validate;

      return {
        code: 'customRule' + index,
        validate: validate
      };
    }
  }


  /**
   * Checks if the schema is currently compiled
   * @this   Ajv
   * @param  {Object} schema schema to compile
   * @param  {Object} root root object
   * @param  {String} baseId base schema ID
   * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
   */
  function checkCompiling(schema, root, baseId) {
    /* jshint validthis: true */
    var index = compIndex.call(this, schema, root, baseId);
    if (index >= 0) return { index: index, compiling: true };
    index = this._compilations.length;
    this._compilations[index] = {
      schema: schema,
      root: root,
      baseId: baseId
    };
    return { index: index, compiling: false };
  }


  /**
   * Removes the schema from the currently compiled list
   * @this   Ajv
   * @param  {Object} schema schema to compile
   * @param  {Object} root root object
   * @param  {String} baseId base schema ID
   */
  function endCompiling(schema, root, baseId) {
    /* jshint validthis: true */
    var i = compIndex.call(this, schema, root, baseId);
    if (i >= 0) this._compilations.splice(i, 1);
  }


  /**
   * Index of schema compilation in the currently compiled list
   * @this   Ajv
   * @param  {Object} schema schema to compile
   * @param  {Object} root root object
   * @param  {String} baseId base schema ID
   * @return {Integer} compilation index
   */
  function compIndex(schema, root, baseId) {
    /* jshint validthis: true */
    for (var i=0; i<this._compilations.length; i++) {
      var c = this._compilations[i];
      if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
    }
    return -1;
  }


  function patternCode(i, patterns) {
    return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
  }


  function defaultCode(i) {
    return 'var default' + i + ' = defaults[' + i + '];';
  }


  function refValCode(i, refVal) {
    return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
  }


  function customRuleCode(i) {
    return 'var customRule' + i + ' = customRules[' + i + '];';
  }


  function vars(arr, statement) {
    if (!arr.length) return '';
    var code = '';
    for (var i=0; i<arr.length; i++)
      code += statement(i, arr);
    return code;
  }

  var cache = createCommonjsModule(function (module) {


  var Cache = module.exports = function Cache() {
    this._cache = {};
  };


  Cache.prototype.put = function Cache_put(key, value) {
    this._cache[key] = value;
  };


  Cache.prototype.get = function Cache_get(key) {
    return this._cache[key];
  };


  Cache.prototype.del = function Cache_del(key) {
    delete this._cache[key];
  };


  Cache.prototype.clear = function Cache_clear() {
    this._cache = {};
  };
  });

  var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
  var DAYS = [0,31,28,31,30,31,30,31,31,30,31,30,31];
  var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i;
  var HOSTNAME = /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i;
  var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
  // uri-template: https://tools.ietf.org/html/rfc6570
  var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
  // For the source: https://gist.github.com/dperini/729294
  // For test cases: https://mathiasbynens.be/demo/url-regex
  // @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
  // var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
  var URL$1 = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-)*(?:[0-9a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[a-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
  var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
  var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$/;
  var JSON_POINTER_URI_FRAGMENT = /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
  var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


  var formats_1 = formats;

  function formats(mode) {
    mode = mode == 'full' ? 'full' : 'fast';
    return util.copy(formats[mode]);
  }


  formats.fast = {
    // date: http://tools.ietf.org/html/rfc3339#section-5.6
    date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
    // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
    time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
    'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
    // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
    uri: /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/)?[^\s]*$/i,
    'uri-reference': /^(?:(?:[a-z][a-z0-9+\-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
    'uri-template': URITEMPLATE,
    url: URL$1,
    // email (sources from jsen validator):
    // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
    // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
    email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    hostname: HOSTNAME,
    // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: regex,
    // uuid: http://tools.ietf.org/html/rfc4122
    uuid: UUID,
    // JSON-pointer: https://tools.ietf.org/html/rfc6901
    // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
    'json-pointer': JSON_POINTER,
    'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
    // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
    'relative-json-pointer': RELATIVE_JSON_POINTER
  };


  formats.full = {
    date: date,
    time: time,
    'date-time': date_time,
    uri: uri,
    'uri-reference': URIREF,
    'uri-template': URITEMPLATE,
    url: URL$1,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
    hostname: HOSTNAME,
    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
    regex: regex,
    uuid: UUID,
    'json-pointer': JSON_POINTER,
    'json-pointer-uri-fragment': JSON_POINTER_URI_FRAGMENT,
    'relative-json-pointer': RELATIVE_JSON_POINTER
  };


  function isLeapYear(year) {
    // https://tools.ietf.org/html/rfc3339#appendix-C
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }


  function date(str) {
    // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
    var matches = str.match(DATE);
    if (!matches) return false;

    var year = +matches[1];
    var month = +matches[2];
    var day = +matches[3];

    return month >= 1 && month <= 12 && day >= 1 &&
            day <= (month == 2 && isLeapYear(year) ? 29 : DAYS[month]);
  }


  function time(str, full) {
    var matches = str.match(TIME);
    if (!matches) return false;

    var hour = matches[1];
    var minute = matches[2];
    var second = matches[3];
    var timeZone = matches[5];
    return ((hour <= 23 && minute <= 59 && second <= 59) ||
            (hour == 23 && minute == 59 && second == 60)) &&
           (!full || timeZone);
  }


  var DATE_TIME_SEPARATOR = /t|\s/i;
  function date_time(str) {
    // http://tools.ietf.org/html/rfc3339#section-5.6
    var dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
  }


  var NOT_URI_FRAGMENT = /\/|:/;
  function uri(str) {
    // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
    return NOT_URI_FRAGMENT.test(str) && URI.test(str);
  }


  var Z_ANCHOR = /[^\\]\\Z/;
  function regex(str) {
    if (Z_ANCHOR.test(str)) return false;
    try {
      new RegExp(str);
      return true;
    } catch(e) {
      return false;
    }
  }

  var ref = function generate_ref(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $async, $refCode;
    if ($schema == '#' || $schema == '#/') {
      if (it.isRoot) {
        $async = it.async;
        $refCode = 'validate';
      } else {
        $async = it.root.schema.$async === true;
        $refCode = 'root.refVal[0]';
      }
    } else {
      var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
      if ($refVal === undefined) {
        var $message = it.MissingRefError.message(it.baseId, $schema);
        if (it.opts.missingRefs == 'fail') {
          it.logger.error($message);
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          if ($breakOnError) {
            out += ' if (false) { ';
          }
        } else if (it.opts.missingRefs == 'ignore') {
          it.logger.warn($message);
          if ($breakOnError) {
            out += ' if (true) { ';
          }
        } else {
          throw new it.MissingRefError(it.baseId, $schema, $message);
        }
      } else if ($refVal.inline) {
        var $it = it.util.copy(it);
        $it.level++;
        var $nextValid = 'valid' + $it.level;
        $it.schema = $refVal.schema;
        $it.schemaPath = '';
        $it.errSchemaPath = $schema;
        var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
        out += ' ' + ($code) + ' ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
        }
      } else {
        $async = $refVal.$async === true || (it.async && $refVal.$async !== false);
        $refCode = $refVal.code;
      }
    }
    if ($refCode) {
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      if (it.opts.passContext) {
        out += ' ' + ($refCode) + '.call(this, ';
      } else {
        out += ' ' + ($refCode) + '( ';
      }
      out += ' ' + ($data) + ', (dataPath || \'\')';
      if (it.errorPath != '""') {
        out += ' + ' + (it.errorPath);
      }
      var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
      out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
      var __callValidate = out;
      out = $$outStack.pop();
      if ($async) {
        if (!it.async) throw new Error('async schema referenced by sync schema');
        if ($breakOnError) {
          out += ' var ' + ($valid) + '; ';
        }
        out += ' try { await ' + (__callValidate) + '; ';
        if ($breakOnError) {
          out += ' ' + ($valid) + ' = true; ';
        }
        out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
        if ($breakOnError) {
          out += ' ' + ($valid) + ' = false; ';
        }
        out += ' } ';
        if ($breakOnError) {
          out += ' if (' + ($valid) + ') { ';
        }
      } else {
        out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
        if ($breakOnError) {
          out += ' else { ';
        }
      }
    }
    return out;
  };

  var allOf = function generate_allOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $currentBaseId = $it.baseId,
      $allSchemasEmpty = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
          $allSchemasEmpty = false;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if ($breakOnError) {
      if ($allSchemasEmpty) {
        out += ' if (true) { ';
      } else {
        out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
      }
    }
    return out;
  };

  var anyOf = function generate_anyOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $noEmptySchema = $schema.every(function($sch) {
      return (it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all));
    });
    if ($noEmptySchema) {
      var $currentBaseId = $it.baseId;
      out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
          out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
          $closingBraces += '}';
        }
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match some schema in anyOf\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
      if (it.opts.allErrors) {
        out += ' } ';
      }
    } else {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    }
    return out;
  };

  var comment = function generate_comment(it, $keyword, $ruleType) {
    var out = ' ';
    var $schema = it.schema[$keyword];
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    !it.opts.allErrors;
    var $comment = it.util.toQuotedString($schema);
    if (it.opts.$comment === true) {
      out += ' console.log(' + ($comment) + ');';
    } else if (typeof it.opts.$comment == 'function') {
      out += ' self._opts.$comment(' + ($comment) + ', ' + (it.util.toQuotedString($errSchemaPath)) + ', validate.root.schema);';
    }
    return out;
  };

  var _const = function generate_const(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    }
    if (!$isData) {
      out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
    }
    out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValue: schema' + ($lvl) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be equal to constant\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var contains = function generate_contains(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $idx = 'i' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $currentBaseId = it.baseId,
      $nonEmptySchema = (it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all));
    out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
    if ($nonEmptySchema) {
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      out += ' if (' + ($nextValid) + ') break; }  ';
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
    } else {
      out += ' if (' + ($data) + '.length == 0) {';
    }
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should contain a valid item\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else { ';
    if ($nonEmptySchema) {
      out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    }
    if (it.opts.allErrors) {
      out += ' } ';
    }
    return out;
  };

  var dependencies = function generate_dependencies(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $schemaDeps = {},
      $propertyDeps = {},
      $ownProperties = it.opts.ownProperties;
    for ($property in $schema) {
      if ($property == '__proto__') continue;
      var $sch = $schema[$property];
      var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
      $deps[$property] = $sch;
    }
    out += 'var ' + ($errs) + ' = errors;';
    var $currentErrorPath = it.errorPath;
    out += 'var missing' + ($lvl) + ';';
    for (var $property in $propertyDeps) {
      $deps = $propertyDeps[$property];
      if ($deps.length) {
        out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
        if ($ownProperties) {
          out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
        }
        if ($breakOnError) {
          out += ' && ( ';
          var arr1 = $deps;
          if (arr1) {
            var $propertyKey, $i = -1,
              l1 = arr1.length - 1;
            while ($i < l1) {
              $propertyKey = arr1[$i += 1];
              if ($i) {
                out += ' || ';
              }
              var $prop = it.util.getProperty($propertyKey),
                $useData = $data + $prop;
              out += ' ( ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
            }
          }
          out += ')) {  ';
          var $propertyPath = 'missing' + $lvl,
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should have ';
              if ($deps.length == 1) {
                out += 'property ' + (it.util.escapeQuotes($deps[0]));
              } else {
                out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
              }
              out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
        } else {
          out += ' ) { ';
          var arr2 = $deps;
          if (arr2) {
            var $propertyKey, i2 = -1,
              l2 = arr2.length - 1;
            while (i2 < l2) {
              $propertyKey = arr2[i2 += 1];
              var $prop = it.util.getProperty($propertyKey),
                $missingProperty = it.util.escapeQuotes($propertyKey),
                $useData = $data + $prop;
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              out += ' if ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') {  var err =   '; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should have ';
                  if ($deps.length == 1) {
                    out += 'property ' + (it.util.escapeQuotes($deps[0]));
                  } else {
                    out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
                  }
                  out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
            }
          }
        }
        out += ' }   ';
        if ($breakOnError) {
          $closingBraces += '}';
          out += ' else { ';
        }
      }
    }
    it.errorPath = $currentErrorPath;
    var $currentBaseId = $it.baseId;
    for (var $property in $schemaDeps) {
      var $sch = $schemaDeps[$property];
      if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
        out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
        if ($ownProperties) {
          out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
        }
        out += ') { ';
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + it.util.getProperty($property);
        $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' }  ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
    if ($breakOnError) {
      out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var _enum = function generate_enum(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    }
    var $i = 'i' + $lvl,
      $vSchema = 'schema' + $lvl;
    if (!$isData) {
      out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
    }
    out += 'var ' + ($valid) + ';';
    if ($isData) {
      out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
    }
    out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
    if ($isData) {
      out += '  }  ';
    }
    out += ' if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be equal to one of the allowed values\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var format = function generate_format(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    if (it.opts.format === false) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
      return out;
    }
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $unknownFormats = it.opts.unknownFormats,
      $allowUnknown = Array.isArray($unknownFormats);
    if ($isData) {
      var $format = 'format' + $lvl,
        $isObject = 'isObject' + $lvl,
        $formatType = 'formatType' + $lvl;
      out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
      if (it.async) {
        out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
      }
      out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
      }
      out += ' (';
      if ($unknownFormats != 'ignore') {
        out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
        if ($allowUnknown) {
          out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
        }
        out += ') || ';
      }
      out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
      if (it.async) {
        out += ' (async' + ($lvl) + ' ? await ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
      } else {
        out += ' ' + ($format) + '(' + ($data) + ') ';
      }
      out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
    } else {
      var $format = it.formats[$schema];
      if (!$format) {
        if ($unknownFormats == 'ignore') {
          it.logger.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
          if ($breakOnError) {
            out += ' if (true) { ';
          }
          return out;
        } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
          if ($breakOnError) {
            out += ' if (true) { ';
          }
          return out;
        } else {
          throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
        }
      }
      var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
      var $formatType = $isObject && $format.type || 'string';
      if ($isObject) {
        var $async = $format.async === true;
        $format = $format.validate;
      }
      if ($formatType != $ruleType) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      }
      if ($async) {
        if (!it.async) throw new Error('async format in sync schema');
        var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
        out += ' if (!(await ' + ($formatRef) + '(' + ($data) + '))) { ';
      } else {
        out += ' if (! ';
        var $formatRef = 'formats' + it.util.getProperty($schema);
        if ($isObject) $formatRef += '.validate';
        if (typeof $format == 'function') {
          out += ' ' + ($formatRef) + '(' + ($data) + ') ';
        } else {
          out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
        }
        out += ') { ';
      }
    }
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
      if ($isData) {
        out += '' + ($schemaValue);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '  } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match format "';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + (it.util.escapeQuotes($schema));
        }
        out += '"\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + (it.util.toQuotedString($schema));
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _if = function generate_if(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $thenSch = it.schema['then'],
      $elseSch = it.schema['else'],
      $thenPresent = $thenSch !== undefined && (it.opts.strictKeywords ? (typeof $thenSch == 'object' && Object.keys($thenSch).length > 0) || $thenSch === false : it.util.schemaHasRules($thenSch, it.RULES.all)),
      $elsePresent = $elseSch !== undefined && (it.opts.strictKeywords ? (typeof $elseSch == 'object' && Object.keys($elseSch).length > 0) || $elseSch === false : it.util.schemaHasRules($elseSch, it.RULES.all)),
      $currentBaseId = $it.baseId;
    if ($thenPresent || $elsePresent) {
      var $ifClause;
      $it.createErrors = false;
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = true;  ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      $it.createErrors = true;
      out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }  ';
      it.compositeRule = $it.compositeRule = $wasComposite;
      if ($thenPresent) {
        out += ' if (' + ($nextValid) + ') {  ';
        $it.schema = it.schema['then'];
        $it.schemaPath = it.schemaPath + '.then';
        $it.errSchemaPath = it.errSchemaPath + '/then';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
        if ($thenPresent && $elsePresent) {
          $ifClause = 'ifClause' + $lvl;
          out += ' var ' + ($ifClause) + ' = \'then\'; ';
        } else {
          $ifClause = '\'then\'';
        }
        out += ' } ';
        if ($elsePresent) {
          out += ' else { ';
        }
      } else {
        out += ' if (!' + ($nextValid) + ') { ';
      }
      if ($elsePresent) {
        $it.schema = it.schema['else'];
        $it.schemaPath = it.schemaPath + '.else';
        $it.errSchemaPath = it.errSchemaPath + '/else';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($nextValid) + '; ';
        if ($thenPresent && $elsePresent) {
          $ifClause = 'ifClause' + $lvl;
          out += ' var ' + ($ifClause) + ' = \'else\'; ';
        } else {
          $ifClause = '\'else\'';
        }
        out += ' } ';
      }
      out += ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('if') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { failingKeyword: ' + ($ifClause) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should match "\' + ' + ($ifClause) + ' + \'" schema\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      out += ' }   ';
      if ($breakOnError) {
        out += ' else { ';
      }
    } else {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    }
    return out;
  };

  var items = function generate_items(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $idx = 'i' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $currentBaseId = it.baseId;
    out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
    if (Array.isArray($schema)) {
      var $additionalItems = it.schema.additionalItems;
      if ($additionalItems === false) {
        out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
        var $currErrSchemaPath = $errSchemaPath;
        $errSchemaPath = it.errSchemaPath + '/additionalItems';
        out += '  if (!' + ($valid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } ';
        $errSchemaPath = $currErrSchemaPath;
        if ($breakOnError) {
          $closingBraces += '}';
          out += ' else { ';
        }
      }
      var arr1 = $schema;
      if (arr1) {
        var $sch, $i = -1,
          l1 = arr1.length - 1;
        while ($i < l1) {
          $sch = arr1[$i += 1];
          if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
            out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
            var $passData = $data + '[' + $i + ']';
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + '[' + $i + ']';
            $it.errSchemaPath = $errSchemaPath + '/' + $i;
            $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
            $it.dataPathArr[$dataNxt] = $i;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            out += ' }  ';
            if ($breakOnError) {
              out += ' if (' + ($nextValid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
      if (typeof $additionalItems == 'object' && (it.opts.strictKeywords ? (typeof $additionalItems == 'object' && Object.keys($additionalItems).length > 0) || $additionalItems === false : it.util.schemaHasRules($additionalItems, it.RULES.all))) {
        $it.schema = $additionalItems;
        $it.schemaPath = it.schemaPath + '.additionalItems';
        $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
        out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
        $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
        var $passData = $data + '[' + $idx + ']';
        $it.dataPathArr[$dataNxt] = $idx;
        var $code = it.validate($it);
        $it.baseId = $currentBaseId;
        if (it.util.varOccurences($code, $nextData) < 2) {
          out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
        } else {
          out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
        }
        if ($breakOnError) {
          out += ' if (!' + ($nextValid) + ') break; ';
        }
        out += ' } }  ';
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    } else if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      if ($breakOnError) {
        out += ' if (!' + ($nextValid) + ') break; ';
      }
      out += ' }';
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var _limit = function generate__limit(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $isMax = $keyword == 'maximum',
      $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
      $schemaExcl = it.schema[$exclusiveKeyword],
      $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
      $op = $isMax ? '<' : '>',
      $notOp = $isMax ? '>' : '<',
      $errorKeyword = undefined;
    if (!($isData || typeof $schema == 'number' || $schema === undefined)) {
      throw new Error($keyword + ' must be number');
    }
    if (!($isDataExcl || $schemaExcl === undefined || typeof $schemaExcl == 'number' || typeof $schemaExcl == 'boolean')) {
      throw new Error($exclusiveKeyword + ' must be number or boolean');
    }
    if ($isDataExcl) {
      var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
        $exclusive = 'exclusive' + $lvl,
        $exclType = 'exclType' + $lvl,
        $exclIsNumber = 'exclIsNumber' + $lvl,
        $opExpr = 'op' + $lvl,
        $opStr = '\' + ' + $opExpr + ' + \'';
      out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
      $schemaValueExcl = 'schemaExcl' + $lvl;
      out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
      var $errorKeyword = $exclusiveKeyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } else if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\'; ';
      if ($schema === undefined) {
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
        $schemaValue = $schemaValueExcl;
        $isData = $isDataExcl;
      }
    } else {
      var $exclIsNumber = typeof $schemaExcl == 'number',
        $opStr = $op;
      if ($exclIsNumber && $isData) {
        var $opExpr = '\'' + $opStr + '\'';
        out += ' if ( ';
        if ($isData) {
          out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
        }
        out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
      } else {
        if ($exclIsNumber && $schema === undefined) {
          $exclusive = true;
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
          $schemaValue = $schemaExcl;
          $notOp += '=';
        } else {
          if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
          if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
            $exclusive = true;
            $errorKeyword = $exclusiveKeyword;
            $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
            $notOp += '=';
          } else {
            $exclusive = false;
            $opStr += '=';
          }
        }
        var $opExpr = '\'' + $opStr + '\'';
        out += ' if ( ';
        if ($isData) {
          out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
        }
        out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
      }
    }
    $errorKeyword = $errorKeyword || $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be ' + ($opStr) + ' ';
        if ($isData) {
          out += '\' + ' + ($schemaValue);
        } else {
          out += '' + ($schemaValue) + '\'';
        }
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _limitItems = function generate__limitItems(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    var $op = $keyword == 'maxItems' ? '>' : '<';
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
    var $errorKeyword = $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have ';
        if ($keyword == 'maxItems') {
          out += 'more';
        } else {
          out += 'fewer';
        }
        out += ' than ';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + ($schema);
        }
        out += ' items\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _limitLength = function generate__limitLength(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    var $op = $keyword == 'maxLength' ? '>' : '<';
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    if (it.opts.unicode === false) {
      out += ' ' + ($data) + '.length ';
    } else {
      out += ' ucs2length(' + ($data) + ') ';
    }
    out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
    var $errorKeyword = $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be ';
        if ($keyword == 'maxLength') {
          out += 'longer';
        } else {
          out += 'shorter';
        }
        out += ' than ';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + ($schema);
        }
        out += ' characters\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var _limitProperties = function generate__limitProperties(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    var $op = $keyword == 'maxProperties' ? '>' : '<';
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
    var $errorKeyword = $keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have ';
        if ($keyword == 'maxProperties') {
          out += 'more';
        } else {
          out += 'fewer';
        }
        out += ' than ';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + ($schema);
        }
        out += ' properties\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var multipleOf = function generate_multipleOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (!($isData || typeof $schema == 'number')) {
      throw new Error($keyword + ' must be number');
    }
    out += 'var division' + ($lvl) + ';if (';
    if ($isData) {
      out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
    }
    out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
    if (it.opts.multipleOfPrecision) {
      out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
    } else {
      out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
    }
    out += ' ) ';
    if ($isData) {
      out += '  )  ';
    }
    out += ' ) {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should be multiple of ';
        if ($isData) {
          out += '\' + ' + ($schemaValue);
        } else {
          out += '' + ($schemaValue) + '\'';
        }
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var not = function generate_not(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      out += ' var ' + ($errs) + ' = errors;  ';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      $it.createErrors = false;
      var $allErrorsOption;
      if ($it.opts.allErrors) {
        $allErrorsOption = $it.opts.allErrors;
        $it.opts.allErrors = false;
      }
      out += ' ' + (it.validate($it)) + ' ';
      $it.createErrors = true;
      if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' if (' + ($nextValid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT be valid\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
      if (it.opts.allErrors) {
        out += ' } ';
      }
    } else {
      out += '  var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT be valid\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if ($breakOnError) {
        out += ' if (false) { ';
      }
    }
    return out;
  };

  var oneOf = function generate_oneOf(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $currentBaseId = $it.baseId,
      $prevValid = 'prevValid' + $lvl,
      $passingSchemas = 'passingSchemas' + $lvl;
    out += 'var ' + ($errs) + ' = errors , ' + ($prevValid) + ' = false , ' + ($valid) + ' = false , ' + ($passingSchemas) + ' = null; ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        } else {
          out += ' var ' + ($nextValid) + ' = true; ';
        }
        if ($i) {
          out += ' if (' + ($nextValid) + ' && ' + ($prevValid) + ') { ' + ($valid) + ' = false; ' + ($passingSchemas) + ' = [' + ($passingSchemas) + ', ' + ($i) + ']; } else { ';
          $closingBraces += '}';
        }
        out += ' if (' + ($nextValid) + ') { ' + ($valid) + ' = ' + ($prevValid) + ' = true; ' + ($passingSchemas) + ' = ' + ($i) + '; }';
      }
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { passingSchemas: ' + ($passingSchemas) + ' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match exactly one schema in oneOf\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
    if (it.opts.allErrors) {
      out += ' } ';
    }
    return out;
  };

  var pattern = function generate_pattern(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
    out += 'if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
    }
    out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
      if ($isData) {
        out += '' + ($schemaValue);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '  } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match pattern "';
        if ($isData) {
          out += '\' + ' + ($schemaValue) + ' + \'';
        } else {
          out += '' + (it.util.escapeQuotes($schema));
        }
        out += '"\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + (it.util.toQuotedString($schema));
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) {
      /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += '} ';
    if ($breakOnError) {
      out += ' else { ';
    }
    return out;
  };

  var properties$2 = function generate_properties(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    var $key = 'key' + $lvl,
      $idx = 'idx' + $lvl,
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $dataProperties = 'dataProperties' + $lvl;
    var $schemaKeys = Object.keys($schema || {}).filter(notProto),
      $pProperties = it.schema.patternProperties || {},
      $pPropertyKeys = Object.keys($pProperties).filter(notProto),
      $aProperties = it.schema.additionalProperties,
      $someProperties = $schemaKeys.length || $pPropertyKeys.length,
      $noAdditional = $aProperties === false,
      $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
      $removeAdditional = it.opts.removeAdditional,
      $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
      $ownProperties = it.opts.ownProperties,
      $currentBaseId = it.baseId;
    var $required = it.schema.required;
    if ($required && !(it.opts.$data && $required.$data) && $required.length < it.opts.loopRequired) {
      var $requiredHash = it.util.toHash($required);
    }

    function notProto(p) {
      return p !== '__proto__';
    }
    out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
    if ($ownProperties) {
      out += ' var ' + ($dataProperties) + ' = undefined;';
    }
    if ($checkAdditional) {
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      if ($someProperties) {
        out += ' var isAdditional' + ($lvl) + ' = !(false ';
        if ($schemaKeys.length) {
          if ($schemaKeys.length > 8) {
            out += ' || validate.schema' + ($schemaPath) + '.hasOwnProperty(' + ($key) + ') ';
          } else {
            var arr1 = $schemaKeys;
            if (arr1) {
              var $propertyKey, i1 = -1,
                l1 = arr1.length - 1;
              while (i1 < l1) {
                $propertyKey = arr1[i1 += 1];
                out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
              }
            }
          }
        }
        if ($pPropertyKeys.length) {
          var arr2 = $pPropertyKeys;
          if (arr2) {
            var $pProperty, $i = -1,
              l2 = arr2.length - 1;
            while ($i < l2) {
              $pProperty = arr2[$i += 1];
              out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
            }
          }
        }
        out += ' ); if (isAdditional' + ($lvl) + ') { ';
      }
      if ($removeAdditional == 'all') {
        out += ' delete ' + ($data) + '[' + ($key) + ']; ';
      } else {
        var $currentErrorPath = it.errorPath;
        var $additionalProperty = '\' + ' + $key + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
        }
        if ($noAdditional) {
          if ($removeAdditional) {
            out += ' delete ' + ($data) + '[' + ($key) + ']; ';
          } else {
            out += ' ' + ($nextValid) + ' = false; ';
            var $currErrSchemaPath = $errSchemaPath;
            $errSchemaPath = it.errSchemaPath + '/additionalProperties';
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is an invalid additional property';
                } else {
                  out += 'should NOT have additional properties';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) {
              /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
            $errSchemaPath = $currErrSchemaPath;
            if ($breakOnError) {
              out += ' break; ';
            }
          }
        } else if ($additionalIsSchema) {
          if ($removeAdditional == 'failing') {
            out += ' var ' + ($errs) + ' = errors;  ';
            var $wasComposite = it.compositeRule;
            it.compositeRule = $it.compositeRule = true;
            $it.schema = $aProperties;
            $it.schemaPath = it.schemaPath + '.additionalProperties';
            $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
            $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
            it.compositeRule = $it.compositeRule = $wasComposite;
          } else {
            $it.schema = $aProperties;
            $it.schemaPath = it.schemaPath + '.additionalProperties';
            $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
            $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            if ($breakOnError) {
              out += ' if (!' + ($nextValid) + ') break; ';
            }
          }
        }
        it.errorPath = $currentErrorPath;
      }
      if ($someProperties) {
        out += ' } ';
      }
      out += ' }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
    var $useDefaults = it.opts.useDefaults && !it.compositeRule;
    if ($schemaKeys.length) {
      var arr3 = $schemaKeys;
      if (arr3) {
        var $propertyKey, i3 = -1,
          l3 = arr3.length - 1;
        while (i3 < l3) {
          $propertyKey = arr3[i3 += 1];
          var $sch = $schema[$propertyKey];
          if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
            var $prop = it.util.getProperty($propertyKey),
              $passData = $data + $prop,
              $hasDefault = $useDefaults && $sch.default !== undefined;
            $it.schema = $sch;
            $it.schemaPath = $schemaPath + $prop;
            $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
            $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
            $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              $code = it.util.varReplace($code, $nextData, $passData);
              var $useData = $passData;
            } else {
              var $useData = $nextData;
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
            }
            if ($hasDefault) {
              out += ' ' + ($code) + ' ';
            } else {
              if ($requiredHash && $requiredHash[$propertyKey]) {
                out += ' if ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') { ' + ($nextValid) + ' = false; ';
                var $currentErrorPath = it.errorPath,
                  $currErrSchemaPath = $errSchemaPath,
                  $missingProperty = it.util.escapeQuotes($propertyKey);
                if (it.opts._errorDataPathProperty) {
                  it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
                }
                $errSchemaPath = it.errSchemaPath + '/required';
                var $$outStack = $$outStack || [];
                $$outStack.push(out);
                out = ''; /* istanbul ignore else */
                if (it.createErrors !== false) {
                  out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                  if (it.opts.messages !== false) {
                    out += ' , message: \'';
                    if (it.opts._errorDataPathProperty) {
                      out += 'is a required property';
                    } else {
                      out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                    }
                    out += '\' ';
                  }
                  if (it.opts.verbose) {
                    out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                  }
                  out += ' } ';
                } else {
                  out += ' {} ';
                }
                var __err = out;
                out = $$outStack.pop();
                if (!it.compositeRule && $breakOnError) {
                  /* istanbul ignore if */
                  if (it.async) {
                    out += ' throw new ValidationError([' + (__err) + ']); ';
                  } else {
                    out += ' validate.errors = [' + (__err) + ']; return false; ';
                  }
                } else {
                  out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
                }
                $errSchemaPath = $currErrSchemaPath;
                it.errorPath = $currentErrorPath;
                out += ' } else { ';
              } else {
                if ($breakOnError) {
                  out += ' if ( ' + ($useData) + ' === undefined ';
                  if ($ownProperties) {
                    out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                  }
                  out += ') { ' + ($nextValid) + ' = true; } else { ';
                } else {
                  out += ' if (' + ($useData) + ' !== undefined ';
                  if ($ownProperties) {
                    out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                  }
                  out += ' ) { ';
                }
              }
              out += ' ' + ($code) + ' } ';
            }
          }
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if ($pPropertyKeys.length) {
      var arr4 = $pPropertyKeys;
      if (arr4) {
        var $pProperty, i4 = -1,
          l4 = arr4.length - 1;
        while (i4 < l4) {
          $pProperty = arr4[i4 += 1];
          var $sch = $pProperties[$pProperty];
          if ((it.opts.strictKeywords ? (typeof $sch == 'object' && Object.keys($sch).length > 0) || $sch === false : it.util.schemaHasRules($sch, it.RULES.all))) {
            $it.schema = $sch;
            $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
            $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
            if ($ownProperties) {
              out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
            } else {
              out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
            }
            out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
            $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
            var $passData = $data + '[' + $key + ']';
            $it.dataPathArr[$dataNxt] = $key;
            var $code = it.validate($it);
            $it.baseId = $currentBaseId;
            if (it.util.varOccurences($code, $nextData) < 2) {
              out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
            } else {
              out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
            }
            if ($breakOnError) {
              out += ' if (!' + ($nextValid) + ') break; ';
            }
            out += ' } ';
            if ($breakOnError) {
              out += ' else ' + ($nextValid) + ' = true; ';
            }
            out += ' }  ';
            if ($breakOnError) {
              out += ' if (' + ($nextValid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var propertyNames = function generate_propertyNames(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $errs = 'errs__' + $lvl;
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    out += 'var ' + ($errs) + ' = errors;';
    if ((it.opts.strictKeywords ? (typeof $schema == 'object' && Object.keys($schema).length > 0) || $schema === false : it.util.schemaHasRules($schema, it.RULES.all))) {
      $it.schema = $schema;
      $it.schemaPath = $schemaPath;
      $it.errSchemaPath = $errSchemaPath;
      var $key = 'key' + $lvl,
        $idx = 'idx' + $lvl,
        $i = 'i' + $lvl,
        $invalidName = '\' + ' + $key + ' + \'',
        $dataNxt = $it.dataLevel = it.dataLevel + 1,
        $nextData = 'data' + $dataNxt,
        $dataProperties = 'dataProperties' + $lvl,
        $ownProperties = it.opts.ownProperties,
        $currentBaseId = it.baseId;
      if ($ownProperties) {
        out += ' var ' + ($dataProperties) + ' = undefined; ';
      }
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      out += ' var startErrs' + ($lvl) + ' = errors; ';
      var $passData = $key;
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
      if ($breakOnError) {
        out += ' break; ';
      }
      out += ' } }';
    }
    if ($breakOnError) {
      out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
    }
    return out;
  };

  var required$1 = function generate_required(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    }
    var $vSchema = 'schema' + $lvl;
    if (!$isData) {
      if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
        var $required = [];
        var arr1 = $schema;
        if (arr1) {
          var $property, i1 = -1,
            l1 = arr1.length - 1;
          while (i1 < l1) {
            $property = arr1[i1 += 1];
            var $propertySch = it.schema.properties[$property];
            if (!($propertySch && (it.opts.strictKeywords ? (typeof $propertySch == 'object' && Object.keys($propertySch).length > 0) || $propertySch === false : it.util.schemaHasRules($propertySch, it.RULES.all)))) {
              $required[$required.length] = $property;
            }
          }
        }
      } else {
        var $required = $schema;
      }
    }
    if ($isData || $required.length) {
      var $currentErrorPath = it.errorPath,
        $loopRequired = $isData || $required.length >= it.opts.loopRequired,
        $ownProperties = it.opts.ownProperties;
      if ($breakOnError) {
        out += ' var missing' + ($lvl) + '; ';
        if ($loopRequired) {
          if (!$isData) {
            out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
          }
          var $i = 'i' + $lvl,
            $propertyPath = 'schema' + $lvl + '[' + $i + ']',
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
          }
          out += ' var ' + ($valid) + ' = true; ';
          if ($isData) {
            out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
          }
          out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
          if ($ownProperties) {
            out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
          }
          out += '; if (!' + ($valid) + ') break; } ';
          if ($isData) {
            out += '  }  ';
          }
          out += '  if (!' + ($valid) + ') {   ';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } else { ';
        } else {
          out += ' if ( ';
          var arr2 = $required;
          if (arr2) {
            var $propertyKey, $i = -1,
              l2 = arr2.length - 1;
            while ($i < l2) {
              $propertyKey = arr2[$i += 1];
              if ($i) {
                out += ' || ';
              }
              var $prop = it.util.getProperty($propertyKey),
                $useData = $data + $prop;
              out += ' ( ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
            }
          }
          out += ') {  ';
          var $propertyPath = 'missing' + $lvl,
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
          }
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) {
            /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          out += ' } else { ';
        }
      } else {
        if ($loopRequired) {
          if (!$isData) {
            out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
          }
          var $i = 'i' + $lvl,
            $propertyPath = 'schema' + $lvl + '[' + $i + ']',
            $missingProperty = '\' + ' + $propertyPath + ' + \'';
          if (it.opts._errorDataPathProperty) {
            it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
          }
          if ($isData) {
            out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
          }
          out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
          if ($ownProperties) {
            out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
          }
          out += ') {  var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
          if ($isData) {
            out += '  }  ';
          }
        } else {
          var arr3 = $required;
          if (arr3) {
            var $propertyKey, i3 = -1,
              l3 = arr3.length - 1;
            while (i3 < l3) {
              $propertyKey = arr3[i3 += 1];
              var $prop = it.util.getProperty($propertyKey),
                $missingProperty = it.util.escapeQuotes($propertyKey),
                $useData = $data + $prop;
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              out += ' if ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') {  var err =   '; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
            }
          }
        }
      }
      it.errorPath = $currentErrorPath;
    } else if ($breakOnError) {
      out += ' if (true) {';
    }
    return out;
  };

  var uniqueItems = function generate_uniqueItems(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    if (($schema || $isData) && it.opts.uniqueItems !== false) {
      if ($isData) {
        out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
      }
      out += ' var i = ' + ($data) + '.length , ' + ($valid) + ' = true , j; if (i > 1) { ';
      var $itemType = it.schema.items && it.schema.items.type,
        $typeIsArray = Array.isArray($itemType);
      if (!$itemType || $itemType == 'object' || $itemType == 'array' || ($typeIsArray && ($itemType.indexOf('object') >= 0 || $itemType.indexOf('array') >= 0))) {
        out += ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } ';
      } else {
        out += ' var itemIndices = {}, item; for (;i--;) { var item = ' + ($data) + '[i]; ';
        var $method = 'checkDataType' + ($typeIsArray ? 's' : '');
        out += ' if (' + (it.util[$method]($itemType, 'item', it.opts.strictNumbers, true)) + ') continue; ';
        if ($typeIsArray) {
          out += ' if (typeof item == \'string\') item = \'"\' + item; ';
        }
        out += ' if (typeof itemIndices[item] == \'number\') { ' + ($valid) + ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ';
      }
      out += ' } ';
      if ($isData) {
        out += '  }  ';
      }
      out += ' if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema:  ';
          if ($isData) {
            out += 'validate.schema' + ($schemaPath);
          } else {
            out += '' + ($schema);
          }
          out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    } else {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    }
    return out;
  };

  //all requires must be explicit because browserify won't work with dynamic requires
  var dotjs = {
    '$ref': ref,
    allOf: allOf,
    anyOf: anyOf,
    '$comment': comment,
    const: _const,
    contains: contains,
    dependencies: dependencies,
    'enum': _enum,
    format: format,
    'if': _if,
    items: items,
    maximum: _limit,
    minimum: _limit,
    maxItems: _limitItems,
    minItems: _limitItems,
    maxLength: _limitLength,
    minLength: _limitLength,
    maxProperties: _limitProperties,
    minProperties: _limitProperties,
    multipleOf: multipleOf,
    not: not,
    oneOf: oneOf,
    pattern: pattern,
    properties: properties$2,
    propertyNames: propertyNames,
    required: required$1,
    uniqueItems: uniqueItems,
    validate: validate$2
  };

  var toHash = util.toHash;

  var rules = function rules() {
    var RULES = [
      { type: 'number',
        rules: [ { 'maximum': ['exclusiveMaximum'] },
                 { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
      { type: 'string',
        rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
      { type: 'array',
        rules: [ 'maxItems', 'minItems', 'items', 'contains', 'uniqueItems' ] },
      { type: 'object',
        rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
                 { 'properties': ['additionalProperties', 'patternProperties'] } ] },
      { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf', 'if' ] }
    ];

    var ALL = [ 'type', '$comment' ];
    var KEYWORDS = [
      '$schema', '$id', 'id', '$data', '$async', 'title',
      'description', 'default', 'definitions',
      'examples', 'readOnly', 'writeOnly',
      'contentMediaType', 'contentEncoding',
      'additionalItems', 'then', 'else'
    ];
    var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
    RULES.all = toHash(ALL);
    RULES.types = toHash(TYPES);

    RULES.forEach(function (group) {
      group.rules = group.rules.map(function (keyword) {
        var implKeywords;
        if (typeof keyword == 'object') {
          var key = Object.keys(keyword)[0];
          implKeywords = keyword[key];
          keyword = key;
          implKeywords.forEach(function (k) {
            ALL.push(k);
            RULES.all[k] = true;
          });
        }
        ALL.push(keyword);
        var rule = RULES.all[keyword] = {
          keyword: keyword,
          code: dotjs[keyword],
          implements: implKeywords
        };
        return rule;
      });

      RULES.all.$comment = {
        keyword: '$comment',
        code: dotjs.$comment
      };

      if (group.type) RULES.types[group.type] = group;
    });

    RULES.keywords = toHash(ALL.concat(KEYWORDS));
    RULES.custom = {};

    return RULES;
  };

  var KEYWORDS = [
    'multipleOf',
    'maximum',
    'exclusiveMaximum',
    'minimum',
    'exclusiveMinimum',
    'maxLength',
    'minLength',
    'pattern',
    'additionalItems',
    'maxItems',
    'minItems',
    'uniqueItems',
    'maxProperties',
    'minProperties',
    'required',
    'additionalProperties',
    'enum',
    'format',
    'const'
  ];

  var data$2 = function (metaSchema, keywordsJsonPointers) {
    for (var i=0; i<keywordsJsonPointers.length; i++) {
      metaSchema = JSON.parse(JSON.stringify(metaSchema));
      var segments = keywordsJsonPointers[i].split('/');
      var keywords = metaSchema;
      var j;
      for (j=1; j<segments.length; j++)
        keywords = keywords[segments[j]];

      for (j=0; j<KEYWORDS.length; j++) {
        var key = KEYWORDS[j];
        var schema = keywords[key];
        if (schema) {
          keywords[key] = {
            anyOf: [
              schema,
              { $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#' }
            ]
          };
        }
      }
    }

    return metaSchema;
  };

  var MissingRefError = error_classes.MissingRef;

  var async = compileAsync;


  /**
   * Creates validating function for passed schema with asynchronous loading of missing schemas.
   * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
   * @this  Ajv
   * @param {Object}   schema schema object
   * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
   * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
   * @return {Promise} promise that resolves with a validating function.
   */
  function compileAsync(schema, meta, callback) {
    /* eslint no-shadow: 0 */
    /* global Promise */
    /* jshint validthis: true */
    var self = this;
    if (typeof this._opts.loadSchema != 'function')
      throw new Error('options.loadSchema should be a function');

    if (typeof meta == 'function') {
      callback = meta;
      meta = undefined;
    }

    var p = loadMetaSchemaOf(schema).then(function () {
      var schemaObj = self._addSchema(schema, undefined, meta);
      return schemaObj.validate || _compileAsync(schemaObj);
    });

    if (callback) {
      p.then(
        function(v) { callback(null, v); },
        callback
      );
    }

    return p;


    function loadMetaSchemaOf(sch) {
      var $schema = sch.$schema;
      return $schema && !self.getSchema($schema)
              ? compileAsync.call(self, { $ref: $schema }, true)
              : Promise.resolve();
    }


    function _compileAsync(schemaObj) {
      try { return self._compile(schemaObj); }
      catch(e) {
        if (e instanceof MissingRefError) return loadMissingSchema(e);
        throw e;
      }


      function loadMissingSchema(e) {
        var ref = e.missingSchema;
        if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

        var schemaPromise = self._loadingSchemas[ref];
        if (!schemaPromise) {
          schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
          schemaPromise.then(removePromise, removePromise);
        }

        return schemaPromise.then(function (sch) {
          if (!added(ref)) {
            return loadMetaSchemaOf(sch).then(function () {
              if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
            });
          }
        }).then(function() {
          return _compileAsync(schemaObj);
        });

        function removePromise() {
          delete self._loadingSchemas[ref];
        }

        function added(ref) {
          return self._refs[ref] || self._schemas[ref];
        }
      }
    }
  }

  var custom = function generate_custom(it, $keyword, $ruleType) {
    var out = ' ';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    var $errs = 'errs__' + $lvl;
    var $isData = it.opts.$data && $schema && $schema.$data,
      $schemaValue;
    if ($isData) {
      out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
      $schemaValue = 'schema' + $lvl;
    } else {
      $schemaValue = $schema;
    }
    var $rule = this,
      $definition = 'definition' + $lvl,
      $rDef = $rule.definition,
      $closingBraces = '';
    var $compile, $inline, $macro, $ruleValidate, $validateCode;
    if ($isData && $rDef.$data) {
      $validateCode = 'keywordValidate' + $lvl;
      var $validateSchema = $rDef.validateSchema;
      out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
    } else {
      $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
      if (!$ruleValidate) return;
      $schemaValue = 'validate.schema' + $schemaPath;
      $validateCode = $ruleValidate.code;
      $compile = $rDef.compile;
      $inline = $rDef.inline;
      $macro = $rDef.macro;
    }
    var $ruleErrs = $validateCode + '.errors',
      $i = 'i' + $lvl,
      $ruleErr = 'ruleErr' + $lvl,
      $asyncKeyword = $rDef.async;
    if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
    if (!($inline || $macro)) {
      out += '' + ($ruleErrs) + ' = null;';
    }
    out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
    if ($isData && $rDef.$data) {
      $closingBraces += '}';
      out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
      if ($validateSchema) {
        $closingBraces += '}';
        out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
      }
    }
    if ($inline) {
      if ($rDef.statements) {
        out += ' ' + ($ruleValidate.validate) + ' ';
      } else {
        out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
      }
    } else if ($macro) {
      var $it = it.util.copy(it);
      var $closingBraces = '';
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      $it.schema = $ruleValidate.validate;
      $it.schemaPath = '';
      var $wasComposite = it.compositeRule;
      it.compositeRule = $it.compositeRule = true;
      var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
      it.compositeRule = $it.compositeRule = $wasComposite;
      out += ' ' + ($code);
    } else {
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      out += '  ' + ($validateCode) + '.call( ';
      if (it.opts.passContext) {
        out += 'this';
      } else {
        out += 'self';
      }
      if ($compile || $rDef.schema === false) {
        out += ' , ' + ($data) + ' ';
      } else {
        out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
      }
      out += ' , (dataPath || \'\')';
      if (it.errorPath != '""') {
        out += ' + ' + (it.errorPath);
      }
      var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
        $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
      out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
      var def_callRuleValidate = out;
      out = $$outStack.pop();
      if ($rDef.errors === false) {
        out += ' ' + ($valid) + ' = ';
        if ($asyncKeyword) {
          out += 'await ';
        }
        out += '' + (def_callRuleValidate) + '; ';
      } else {
        if ($asyncKeyword) {
          $ruleErrs = 'customErrors' + $lvl;
          out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = await ' + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
        } else {
          out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
        }
      }
    }
    if ($rDef.modifying) {
      out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
    }
    out += '' + ($closingBraces);
    if ($rDef.valid) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
    } else {
      out += ' if ( ';
      if ($rDef.valid === undefined) {
        out += ' !';
        if ($macro) {
          out += '' + ($nextValid);
        } else {
          out += '' + ($valid);
        }
      } else {
        out += ' ' + (!$rDef.valid) + ' ';
      }
      out += ') { ';
      $errorKeyword = $rule.keyword;
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = '';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) {
        /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      var def_customError = out;
      out = $$outStack.pop();
      if ($inline) {
        if ($rDef.errors) {
          if ($rDef.errors != 'full') {
            out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
            if (it.opts.verbose) {
              out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
            }
            out += ' } ';
          }
        } else {
          if ($rDef.errors === false) {
            out += ' ' + (def_customError) + ' ';
          } else {
            out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
            if (it.opts.verbose) {
              out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
            }
            out += ' } } ';
          }
        }
      } else if ($macro) {
        out += '   var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        if (!it.compositeRule && $breakOnError) {
          /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError(vErrors); ';
          } else {
            out += ' validate.errors = vErrors; return false; ';
          }
        }
      } else {
        if ($rDef.errors === false) {
          out += ' ' + (def_customError) + ' ';
        } else {
          out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } } else { ' + (def_customError) + ' } ';
        }
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    }
    return out;
  };

  var $schema$1 = "http://json-schema.org/draft-07/schema#";
  var $id$1 = "http://json-schema.org/draft-07/schema#";
  var title = "Core schema meta-schema";
  var definitions = {
  	schemaArray: {
  		type: "array",
  		minItems: 1,
  		items: {
  			$ref: "#"
  		}
  	},
  	nonNegativeInteger: {
  		type: "integer",
  		minimum: 0
  	},
  	nonNegativeIntegerDefault0: {
  		allOf: [
  			{
  				$ref: "#/definitions/nonNegativeInteger"
  			},
  			{
  				"default": 0
  			}
  		]
  	},
  	simpleTypes: {
  		"enum": [
  			"array",
  			"boolean",
  			"integer",
  			"null",
  			"number",
  			"object",
  			"string"
  		]
  	},
  	stringArray: {
  		type: "array",
  		items: {
  			type: "string"
  		},
  		uniqueItems: true,
  		"default": [
  		]
  	}
  };
  var type$1 = [
  	"object",
  	"boolean"
  ];
  var properties$1 = {
  	$id: {
  		type: "string",
  		format: "uri-reference"
  	},
  	$schema: {
  		type: "string",
  		format: "uri"
  	},
  	$ref: {
  		type: "string",
  		format: "uri-reference"
  	},
  	$comment: {
  		type: "string"
  	},
  	title: {
  		type: "string"
  	},
  	description: {
  		type: "string"
  	},
  	"default": true,
  	readOnly: {
  		type: "boolean",
  		"default": false
  	},
  	examples: {
  		type: "array",
  		items: true
  	},
  	multipleOf: {
  		type: "number",
  		exclusiveMinimum: 0
  	},
  	maximum: {
  		type: "number"
  	},
  	exclusiveMaximum: {
  		type: "number"
  	},
  	minimum: {
  		type: "number"
  	},
  	exclusiveMinimum: {
  		type: "number"
  	},
  	maxLength: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minLength: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	pattern: {
  		type: "string",
  		format: "regex"
  	},
  	additionalItems: {
  		$ref: "#"
  	},
  	items: {
  		anyOf: [
  			{
  				$ref: "#"
  			},
  			{
  				$ref: "#/definitions/schemaArray"
  			}
  		],
  		"default": true
  	},
  	maxItems: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minItems: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	uniqueItems: {
  		type: "boolean",
  		"default": false
  	},
  	contains: {
  		$ref: "#"
  	},
  	maxProperties: {
  		$ref: "#/definitions/nonNegativeInteger"
  	},
  	minProperties: {
  		$ref: "#/definitions/nonNegativeIntegerDefault0"
  	},
  	required: {
  		$ref: "#/definitions/stringArray"
  	},
  	additionalProperties: {
  		$ref: "#"
  	},
  	definitions: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		"default": {
  		}
  	},
  	properties: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		"default": {
  		}
  	},
  	patternProperties: {
  		type: "object",
  		additionalProperties: {
  			$ref: "#"
  		},
  		propertyNames: {
  			format: "regex"
  		},
  		"default": {
  		}
  	},
  	dependencies: {
  		type: "object",
  		additionalProperties: {
  			anyOf: [
  				{
  					$ref: "#"
  				},
  				{
  					$ref: "#/definitions/stringArray"
  				}
  			]
  		}
  	},
  	propertyNames: {
  		$ref: "#"
  	},
  	"const": true,
  	"enum": {
  		type: "array",
  		items: true,
  		minItems: 1,
  		uniqueItems: true
  	},
  	type: {
  		anyOf: [
  			{
  				$ref: "#/definitions/simpleTypes"
  			},
  			{
  				type: "array",
  				items: {
  					$ref: "#/definitions/simpleTypes"
  				},
  				minItems: 1,
  				uniqueItems: true
  			}
  		]
  	},
  	format: {
  		type: "string"
  	},
  	contentMediaType: {
  		type: "string"
  	},
  	contentEncoding: {
  		type: "string"
  	},
  	"if": {
  		$ref: "#"
  	},
  	then: {
  		$ref: "#"
  	},
  	"else": {
  		$ref: "#"
  	},
  	allOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	anyOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	oneOf: {
  		$ref: "#/definitions/schemaArray"
  	},
  	not: {
  		$ref: "#"
  	}
  };
  var jsonSchemaDraft07 = {
  	$schema: $schema$1,
  	$id: $id$1,
  	title: title,
  	definitions: definitions,
  	type: type$1,
  	properties: properties$1,
  	"default": true
  };

  var jsonSchemaDraft07$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $schema: $schema$1,
    $id: $id$1,
    title: title,
    definitions: definitions,
    type: type$1,
    properties: properties$1,
    'default': jsonSchemaDraft07
  });

  var require$$2 = getCjsExportFromNamespace(jsonSchemaDraft07$1);

  var definition_schema = {
    $id: 'https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js',
    definitions: {
      simpleTypes: require$$2.definitions.simpleTypes
    },
    type: 'object',
    dependencies: {
      schema: ['validate'],
      $data: ['validate'],
      statements: ['inline'],
      valid: {not: {required: ['macro']}}
    },
    properties: {
      type: require$$2.properties.type,
      schema: {type: 'boolean'},
      statements: {type: 'boolean'},
      dependencies: {
        type: 'array',
        items: {type: 'string'}
      },
      metaSchema: {type: 'object'},
      modifying: {type: 'boolean'},
      valid: {type: 'boolean'},
      $data: {type: 'boolean'},
      async: {type: 'boolean'},
      errors: {
        anyOf: [
          {type: 'boolean'},
          {const: 'full'}
        ]
      }
    }
  };
  definition_schema.$id;
  definition_schema.definitions;
  definition_schema.type;
  definition_schema.dependencies;
  definition_schema.properties;

  var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;



  var keyword = {
    add: addKeyword,
    get: getKeyword,
    remove: removeKeyword,
    validate: validateKeyword
  };


  /**
   * Define custom keyword
   * @this  Ajv
   * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
   * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
   * @return {Ajv} this for method chaining
   */
  function addKeyword(keyword, definition) {
    /* jshint validthis: true */
    /* eslint no-shadow: 0 */
    var RULES = this.RULES;
    if (RULES.keywords[keyword])
      throw new Error('Keyword ' + keyword + ' is already defined');

    if (!IDENTIFIER.test(keyword))
      throw new Error('Keyword ' + keyword + ' is not a valid identifier');

    if (definition) {
      this.validateKeyword(definition, true);

      var dataType = definition.type;
      if (Array.isArray(dataType)) {
        for (var i=0; i<dataType.length; i++)
          _addRule(keyword, dataType[i], definition);
      } else {
        _addRule(keyword, dataType, definition);
      }

      var metaSchema = definition.metaSchema;
      if (metaSchema) {
        if (definition.$data && this._opts.$data) {
          metaSchema = {
            anyOf: [
              metaSchema,
              { '$ref': 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#' }
            ]
          };
        }
        definition.validateSchema = this.compile(metaSchema, true);
      }
    }

    RULES.keywords[keyword] = RULES.all[keyword] = true;


    function _addRule(keyword, dataType, definition) {
      var ruleGroup;
      for (var i=0; i<RULES.length; i++) {
        var rg = RULES[i];
        if (rg.type == dataType) {
          ruleGroup = rg;
          break;
        }
      }

      if (!ruleGroup) {
        ruleGroup = { type: dataType, rules: [] };
        RULES.push(ruleGroup);
      }

      var rule = {
        keyword: keyword,
        definition: definition,
        custom: true,
        code: custom,
        implements: definition.implements
      };
      ruleGroup.rules.push(rule);
      RULES.custom[keyword] = rule;
    }

    return this;
  }


  /**
   * Get keyword
   * @this  Ajv
   * @param {String} keyword pre-defined or custom keyword.
   * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
   */
  function getKeyword(keyword) {
    /* jshint validthis: true */
    var rule = this.RULES.custom[keyword];
    return rule ? rule.definition : this.RULES.keywords[keyword] || false;
  }


  /**
   * Remove keyword
   * @this  Ajv
   * @param {String} keyword pre-defined or custom keyword.
   * @return {Ajv} this for method chaining
   */
  function removeKeyword(keyword) {
    /* jshint validthis: true */
    var RULES = this.RULES;
    delete RULES.keywords[keyword];
    delete RULES.all[keyword];
    delete RULES.custom[keyword];
    for (var i=0; i<RULES.length; i++) {
      var rules = RULES[i].rules;
      for (var j=0; j<rules.length; j++) {
        if (rules[j].keyword == keyword) {
          rules.splice(j, 1);
          break;
        }
      }
    }
    return this;
  }


  /**
   * Validate keyword definition
   * @this  Ajv
   * @param {Object} definition keyword definition object.
   * @param {Boolean} throwError true to throw exception if definition is invalid
   * @return {boolean} validation result
   */
  function validateKeyword(definition, throwError) {
    validateKeyword.errors = null;
    var v = this._validateKeyword = this._validateKeyword
                                    || this.compile(definition_schema, true);

    if (v(definition)) return true;
    validateKeyword.errors = v.errors;
    if (throwError)
      throw new Error('custom keyword definition is invalid: '  + this.errorsText(v.errors));
    else
      return false;
  }

  var $schema = "http://json-schema.org/draft-07/schema#";
  var $id = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#";
  var description = "Meta-schema for $data reference (JSON Schema extension proposal)";
  var type = "object";
  var required = [
  	"$data"
  ];
  var properties = {
  	$data: {
  		type: "string",
  		anyOf: [
  			{
  				format: "relative-json-pointer"
  			},
  			{
  				format: "json-pointer"
  			}
  		]
  	}
  };
  var additionalProperties = false;
  var data = {
  	$schema: $schema,
  	$id: $id,
  	description: description,
  	type: type,
  	required: required,
  	properties: properties,
  	additionalProperties: additionalProperties
  };

  var data$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    $schema: $schema,
    $id: $id,
    description: description,
    type: type,
    required: required,
    properties: properties,
    additionalProperties: additionalProperties,
    'default': data
  });

  var require$$1 = getCjsExportFromNamespace(data$1);

  var ajv$1 = Ajv;

  Ajv.prototype.validate = validate$1;
  Ajv.prototype.compile = compile;
  Ajv.prototype.addSchema = addSchema;
  Ajv.prototype.addMetaSchema = addMetaSchema;
  Ajv.prototype.validateSchema = validateSchema;
  Ajv.prototype.getSchema = getSchema;
  Ajv.prototype.removeSchema = removeSchema;
  Ajv.prototype.addFormat = addFormat;
  Ajv.prototype.errorsText = errorsText;

  Ajv.prototype._addSchema = _addSchema;
  Ajv.prototype._compile = _compile;

  Ajv.prototype.compileAsync = async;

  Ajv.prototype.addKeyword = keyword.add;
  Ajv.prototype.getKeyword = keyword.get;
  Ajv.prototype.removeKeyword = keyword.remove;
  Ajv.prototype.validateKeyword = keyword.validate;


  Ajv.ValidationError = error_classes.Validation;
  Ajv.MissingRefError = error_classes.MissingRef;
  Ajv.$dataMetaSchema = data$2;

  var META_SCHEMA_ID = 'http://json-schema.org/draft-07/schema';

  var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes', 'strictDefaults' ];
  var META_SUPPORT_DATA = ['/properties'];

  /**
   * Creates validator instance.
   * Usage: `Ajv(opts)`
   * @param {Object} opts optional options
   * @return {Object} ajv instance
   */
  function Ajv(opts) {
    if (!(this instanceof Ajv)) return new Ajv(opts);
    opts = this._opts = util.copy(opts) || {};
    setLogger(this);
    this._schemas = {};
    this._refs = {};
    this._fragments = {};
    this._formats = formats_1(opts.format);

    this._cache = opts.cache || new cache;
    this._loadingSchemas = {};
    this._compilations = [];
    this.RULES = rules();
    this._getId = chooseGetId(opts);

    opts.loopRequired = opts.loopRequired || Infinity;
    if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
    if (opts.serialize === undefined) opts.serialize = fastJsonStableStringify;
    this._metaOpts = getMetaSchemaOptions(this);

    if (opts.formats) addInitialFormats(this);
    if (opts.keywords) addInitialKeywords(this);
    addDefaultMetaSchema(this);
    if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
    if (opts.nullable) this.addKeyword('nullable', {metaSchema: {type: 'boolean'}});
    addInitialSchemas(this);
  }



  /**
   * Validate data using schema
   * Schema will be compiled and cached (using serialized JSON as key. [fast-json-stable-stringify](https://github.com/epoberezkin/fast-json-stable-stringify) is used to serialize.
   * @this   Ajv
   * @param  {String|Object} schemaKeyRef key, ref or schema object
   * @param  {Any} data to be validated
   * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
   */
  function validate$1(schemaKeyRef, data) {
    var v;
    if (typeof schemaKeyRef == 'string') {
      v = this.getSchema(schemaKeyRef);
      if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
    } else {
      var schemaObj = this._addSchema(schemaKeyRef);
      v = schemaObj.validate || this._compile(schemaObj);
    }

    var valid = v(data);
    if (v.$async !== true) this.errors = v.errors;
    return valid;
  }


  /**
   * Create validating function for passed schema.
   * @this   Ajv
   * @param  {Object} schema schema object
   * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
   * @return {Function} validating function
   */
  function compile(schema, _meta) {
    var schemaObj = this._addSchema(schema, undefined, _meta);
    return schemaObj.validate || this._compile(schemaObj);
  }


  /**
   * Adds schema to the instance.
   * @this   Ajv
   * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
   * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
   * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
   * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
   * @return {Ajv} this for method chaining
   */
  function addSchema(schema, key, _skipValidation, _meta) {
    if (Array.isArray(schema)){
      for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
      return this;
    }
    var id = this._getId(schema);
    if (id !== undefined && typeof id != 'string')
      throw new Error('schema id must be string');
    key = resolve_1.normalizeId(key || id);
    checkUnique(this, key);
    this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
    return this;
  }


  /**
   * Add schema that will be used to validate other schemas
   * options in META_IGNORE_OPTIONS are alway set to false
   * @this   Ajv
   * @param {Object} schema schema object
   * @param {String} key optional schema key
   * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
   * @return {Ajv} this for method chaining
   */
  function addMetaSchema(schema, key, skipValidation) {
    this.addSchema(schema, key, skipValidation, true);
    return this;
  }


  /**
   * Validate schema
   * @this   Ajv
   * @param {Object} schema schema to validate
   * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
   * @return {Boolean} true if schema is valid
   */
  function validateSchema(schema, throwOrLogError) {
    var $schema = schema.$schema;
    if ($schema !== undefined && typeof $schema != 'string')
      throw new Error('$schema must be a string');
    $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
    if (!$schema) {
      this.logger.warn('meta-schema not available');
      this.errors = null;
      return true;
    }
    var valid = this.validate($schema, schema);
    if (!valid && throwOrLogError) {
      var message = 'schema is invalid: ' + this.errorsText();
      if (this._opts.validateSchema == 'log') this.logger.error(message);
      else throw new Error(message);
    }
    return valid;
  }


  function defaultMeta(self) {
    var meta = self._opts.meta;
    self._opts.defaultMeta = typeof meta == 'object'
                              ? self._getId(meta) || meta
                              : self.getSchema(META_SCHEMA_ID)
                                ? META_SCHEMA_ID
                                : undefined;
    return self._opts.defaultMeta;
  }


  /**
   * Get compiled schema from the instance by `key` or `ref`.
   * @this   Ajv
   * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
   * @return {Function} schema validating function (with property `schema`).
   */
  function getSchema(keyRef) {
    var schemaObj = _getSchemaObj(this, keyRef);
    switch (typeof schemaObj) {
      case 'object': return schemaObj.validate || this._compile(schemaObj);
      case 'string': return this.getSchema(schemaObj);
      case 'undefined': return _getSchemaFragment(this, keyRef);
    }
  }


  function _getSchemaFragment(self, ref) {
    var res = resolve_1.schema.call(self, { schema: {} }, ref);
    if (res) {
      var schema = res.schema
        , root = res.root
        , baseId = res.baseId;
      var v = compile_1.call(self, schema, root, undefined, baseId);
      self._fragments[ref] = new schema_obj({
        ref: ref,
        fragment: true,
        schema: schema,
        root: root,
        baseId: baseId,
        validate: v
      });
      return v;
    }
  }


  function _getSchemaObj(self, keyRef) {
    keyRef = resolve_1.normalizeId(keyRef);
    return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
  }


  /**
   * Remove cached schema(s).
   * If no parameter is passed all schemas but meta-schemas are removed.
   * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
   * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
   * @this   Ajv
   * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
   * @return {Ajv} this for method chaining
   */
  function removeSchema(schemaKeyRef) {
    if (schemaKeyRef instanceof RegExp) {
      _removeAllSchemas(this, this._schemas, schemaKeyRef);
      _removeAllSchemas(this, this._refs, schemaKeyRef);
      return this;
    }
    switch (typeof schemaKeyRef) {
      case 'undefined':
        _removeAllSchemas(this, this._schemas);
        _removeAllSchemas(this, this._refs);
        this._cache.clear();
        return this;
      case 'string':
        var schemaObj = _getSchemaObj(this, schemaKeyRef);
        if (schemaObj) this._cache.del(schemaObj.cacheKey);
        delete this._schemas[schemaKeyRef];
        delete this._refs[schemaKeyRef];
        return this;
      case 'object':
        var serialize = this._opts.serialize;
        var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
        this._cache.del(cacheKey);
        var id = this._getId(schemaKeyRef);
        if (id) {
          id = resolve_1.normalizeId(id);
          delete this._schemas[id];
          delete this._refs[id];
        }
    }
    return this;
  }


  function _removeAllSchemas(self, schemas, regex) {
    for (var keyRef in schemas) {
      var schemaObj = schemas[keyRef];
      if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
        self._cache.del(schemaObj.cacheKey);
        delete schemas[keyRef];
      }
    }
  }


  /* @this   Ajv */
  function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
    if (typeof schema != 'object' && typeof schema != 'boolean')
      throw new Error('schema should be object or boolean');
    var serialize = this._opts.serialize;
    var cacheKey = serialize ? serialize(schema) : schema;
    var cached = this._cache.get(cacheKey);
    if (cached) return cached;

    shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

    var id = resolve_1.normalizeId(this._getId(schema));
    if (id && shouldAddSchema) checkUnique(this, id);

    var willValidate = this._opts.validateSchema !== false && !skipValidation;
    var recursiveMeta;
    if (willValidate && !(recursiveMeta = id && id == resolve_1.normalizeId(schema.$schema)))
      this.validateSchema(schema, true);

    var localRefs = resolve_1.ids.call(this, schema);

    var schemaObj = new schema_obj({
      id: id,
      schema: schema,
      localRefs: localRefs,
      cacheKey: cacheKey,
      meta: meta
    });

    if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
    this._cache.put(cacheKey, schemaObj);

    if (willValidate && recursiveMeta) this.validateSchema(schema, true);

    return schemaObj;
  }


  /* @this   Ajv */
  function _compile(schemaObj, root) {
    if (schemaObj.compiling) {
      schemaObj.validate = callValidate;
      callValidate.schema = schemaObj.schema;
      callValidate.errors = null;
      callValidate.root = root ? root : callValidate;
      if (schemaObj.schema.$async === true)
        callValidate.$async = true;
      return callValidate;
    }
    schemaObj.compiling = true;

    var currentOpts;
    if (schemaObj.meta) {
      currentOpts = this._opts;
      this._opts = this._metaOpts;
    }

    var v;
    try { v = compile_1.call(this, schemaObj.schema, root, schemaObj.localRefs); }
    catch(e) {
      delete schemaObj.validate;
      throw e;
    }
    finally {
      schemaObj.compiling = false;
      if (schemaObj.meta) this._opts = currentOpts;
    }

    schemaObj.validate = v;
    schemaObj.refs = v.refs;
    schemaObj.refVal = v.refVal;
    schemaObj.root = v.root;
    return v;


    /* @this   {*} - custom context, see passContext option */
    function callValidate() {
      /* jshint validthis: true */
      var _validate = schemaObj.validate;
      var result = _validate.apply(this, arguments);
      callValidate.errors = _validate.errors;
      return result;
    }
  }


  function chooseGetId(opts) {
    switch (opts.schemaId) {
      case 'auto': return _get$IdOrId;
      case 'id': return _getId;
      default: return _get$Id;
    }
  }

  /* @this   Ajv */
  function _getId(schema) {
    if (schema.$id) this.logger.warn('schema $id ignored', schema.$id);
    return schema.id;
  }

  /* @this   Ajv */
  function _get$Id(schema) {
    if (schema.id) this.logger.warn('schema id ignored', schema.id);
    return schema.$id;
  }


  function _get$IdOrId(schema) {
    if (schema.$id && schema.id && schema.$id != schema.id)
      throw new Error('schema $id is different from id');
    return schema.$id || schema.id;
  }


  /**
   * Convert array of error message objects to string
   * @this   Ajv
   * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
   * @param  {Object} options optional options with properties `separator` and `dataVar`.
   * @return {String} human readable string with all errors descriptions
   */
  function errorsText(errors, options) {
    errors = errors || this.errors;
    if (!errors) return 'No errors';
    options = options || {};
    var separator = options.separator === undefined ? ', ' : options.separator;
    var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

    var text = '';
    for (var i=0; i<errors.length; i++) {
      var e = errors[i];
      if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
    }
    return text.slice(0, -separator.length);
  }


  /**
   * Add custom format
   * @this   Ajv
   * @param {String} name format name
   * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
   * @return {Ajv} this for method chaining
   */
  function addFormat(name, format) {
    if (typeof format == 'string') format = new RegExp(format);
    this._formats[name] = format;
    return this;
  }


  function addDefaultMetaSchema(self) {
    var $dataSchema;
    if (self._opts.$data) {
      $dataSchema = require$$1;
      self.addMetaSchema($dataSchema, $dataSchema.$id, true);
    }
    if (self._opts.meta === false) return;
    var metaSchema = require$$2;
    if (self._opts.$data) metaSchema = data$2(metaSchema, META_SUPPORT_DATA);
    self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
    self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
  }


  function addInitialSchemas(self) {
    var optsSchemas = self._opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
    else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
  }


  function addInitialFormats(self) {
    for (var name in self._opts.formats) {
      var format = self._opts.formats[name];
      self.addFormat(name, format);
    }
  }


  function addInitialKeywords(self) {
    for (var name in self._opts.keywords) {
      var keyword = self._opts.keywords[name];
      self.addKeyword(name, keyword);
    }
  }


  function checkUnique(self, id) {
    if (self._schemas[id] || self._refs[id])
      throw new Error('schema with key or id "' + id + '" already exists');
  }


  function getMetaSchemaOptions(self) {
    var metaOpts = util.copy(self._opts);
    for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
      delete metaOpts[META_IGNORE_OPTIONS[i]];
    return metaOpts;
  }


  function setLogger(self) {
    var logger = self._opts.logger;
    if (logger === false) {
      self.logger = {log: noop, warn: noop, error: noop};
    } else {
      if (logger === undefined) logger = console;
      if (!(typeof logger == 'object' && logger.log && logger.warn && logger.error))
        throw new Error('logger must implement log, warn and error methods');
      self.logger = logger;
    }
  }


  function noop() {}

  let ajv = createAjvInstance();
  let formerCustomFormats = null;
  let formerMetaSchema = null; // 创建实例

  function createAjvInstance() {
    const ajvInstance = new ajv$1({
      errorDataPath: 'property',
      allErrors: true,
      multipleOfPrecision: 8,
      schemaId: 'auto',
      unknownFormats: 'ignore'
    }); // 添加base-64 format

    ajvInstance.addFormat('data-url', /^data:([a-z]+\/[a-z0-9-+.]+)?;(?:name=(.*);)?base64,(.*)$/); // 添加color format

    ajvInstance.addFormat('color', // eslint-disable-next-line max-len
    /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/);
    return ajvInstance;
  }
  /**
   * 将错误输出从ajv转换为jsonschema使用的格式
   * At some point, components should be updated to support ajv.
   */


  function transformAjvErrors() {
    let errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    if (errors === null) {
      return [];
    }

    return errors.map(e => {
      const {
        dataPath,
        keyword,
        message,
        params,
        schemaPath
      } = e;
      const property = "".concat(dataPath); // put data in expected format

      return {
        name: keyword,
        property,
        message,
        params,
        // specific to ajv
        stack: "".concat(property, " ").concat(message).trim(),
        schemaPath
      };
    });
  }
  /**
   * 通过 schema校验formData并返回错误信息
   * @param formData 校验的数据
   * @param schema
   * @param transformErrors function - 转换错误, 如个性化的配置
   * @param additionalMetaSchemas 数组 添加 ajv metaSchema
   * @param customFormats 添加 ajv 自定义 formats
   * @returns {{errors: ([]|{stack: string, schemaPath: *, name: *, property: string, message: *, params: *}[])}}
   */


  function ajvValidateFormData() {
    let {
      formData,
      schema,
      transformErrors,
      additionalMetaSchemas = [],
      customFormats = {}
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const hasNewMetaSchemas = !deepEquals(formerMetaSchema, additionalMetaSchemas);
    const hasNewFormats = !deepEquals(formerCustomFormats, customFormats); // 变更了 Meta或者调整了format配置重置新的实例

    if (hasNewMetaSchemas || hasNewFormats) {
      ajv = createAjvInstance();
    } // 添加更多要验证的模式


    if (additionalMetaSchemas && hasNewMetaSchemas && Array.isArray(additionalMetaSchemas)) {
      ajv.addMetaSchema(additionalMetaSchemas);
      formerMetaSchema = additionalMetaSchemas;
    } // 注册自定义的 formats - 没有变更只会注册一次 - 否则重新创建实例


    if (customFormats && hasNewFormats && isObject(customFormats)) {
      Object.keys(customFormats).forEach(formatName => {
        ajv.addFormat(formatName, customFormats[formatName]);
      });
      formerCustomFormats = customFormats;
    }

    let validationError = null;

    try {
      ajv.validate(schema, formData);
    } catch (err) {
      validationError = err;
    } // ajv 默认多语言处理


    i18n.getCurrentLocalize()(ajv.errors);
    let errors = transformAjvErrors(ajv.errors); // 清除错误

    ajv.errors = null; // 处理异常

    const noProperMetaSchema = validationError && validationError.message && typeof validationError.message === 'string' && validationError.message.includes('no schema with key or ref ');

    if (noProperMetaSchema) {
      errors = [...errors, {
        stack: validationError.message
      }];
    } // 转换错误, 如传入自定义的错误


    if (typeof transformErrors === 'function') {
      errors = transformErrors(errors);
    }

    return {
      errors
    };
  } // 校验formData 并转换错误信息

  function validateFormDataAndTransformMsg() {
    let {
      formData,
      schema,
      uiSchema,
      transformErrors,
      additionalMetaSchemas = [],
      customFormats = {},
      errorSchema = {},
      required = false,
      propPath = '',
      isOnlyFirstError = true // 只取第一条错误信息

    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // 如果数组类型针对配置了 format 的特殊处理

    const emptyArray = schema.type === 'array' && Array.isArray(formData) && formData.length === 0;
    const isEmpty = formData === undefined || emptyArray;

    if (required) {
      if (isEmpty) {
        const requireErrObj = {
          keyword: 'required',
          params: {
            missingProperty: propPath
          }
        }; // 用户设置校验信息

        const errSchemaMsg = getUserErrOptions({
          schema,
          uiSchema,
          errorSchema
        }).required;

        if (errSchemaMsg) {
          requireErrObj.message = errSchemaMsg;
        } else {
          // 处理多语言require提示信息 （ajv 修改原引用）
          i18n.getCurrentLocalize()([requireErrObj]);
        }

        return [requireErrObj];
      }
    } else if (isEmpty && !emptyArray) {
      // 非required 为空 校验通过
      return [];
    } // 校验ajv错误信息


    let ajvErrors = ajvValidateFormData({
      formData,
      schema,
      transformErrors,
      additionalMetaSchemas,
      customFormats
    }).errors; // 过滤顶级错误

    {
      ajvErrors = ajvErrors.filter(item => item.property === '' && !item.schemaPath.includes('#/anyOf/') && !item.schemaPath.includes('#/oneOf/') || item.name === 'additionalProperties');
    }

    const userErrOptions = getUserErrOptions({
      schema,
      uiSchema,
      errorSchema
    });
    return (isOnlyFirstError && ajvErrors.length > 0 ? [ajvErrors[0]] : ajvErrors).reduce((preErrors, errorItem) => {
      // 优先获取 errorSchema 配置
      errorItem.message = userErrOptions[errorItem.name] !== undefined ? userErrOptions[errorItem.name] : errorItem.message;
      preErrors.push(errorItem);
      return preErrors;
    }, []);
  }
  /**
   * 根据模式验证数据，如果数据有效则返回true，否则返回* false。如果模式无效，那么这个函数将返回* false。
   * @param schema
   * @param data
   * @returns {boolean|PromiseLike<any>}
   */

  function isValid(schema, data) {
    try {
      return ajv.validate(schema, data);
    } catch (e) {
      return false;
    }
  } // ajv valida

  function ajvValid(schema, data) {
    return ajv.validate(schema, data);
  } // 如果查找不到
  // return -1

  function getMatchingIndex(formData, options, rootSchema) {
    let haveAllFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < options.length; i++) {
      const option = retrieveSchema(options[i], rootSchema, formData); // If the schema describes an object then we need to add slightly more
      // strict matching to the schema, because unless the schema uses the
      // "requires" keyword, an object will match the schema as long as it
      // doesn't have matching keys with a conflicting type. To do this we use an
      // "anyOf" with an array of requires. This augmentation expresses that the
      // schema should match if any of the keys in the schema are present on the
      // object and pass validation.

      if (option.properties) {
        // Create an "anyOf" schema that requires at least one of the keys in the
        // "properties" object
        const requiresAnyOf = _objectSpread2(_objectSpread2({}, rootSchema.definitions ? {
          definitions: rootSchema.definitions
        } : {}), {}, {
          anyOf: Object.keys(option.properties).map(key => ({
            required: [key]
          }))
        });

        let augmentedSchema; // If the "anyOf" keyword already exists, wrap the augmentation in an "allOf"

        if (option.anyOf) {
          // Create a shallow clone of the option
          const shallowClone = Object.assign({}, option);

          if (!shallowClone.allOf) {
            shallowClone.allOf = [];
          } else {
            // If "allOf" already exists, shallow clone the array
            shallowClone.allOf = shallowClone.allOf.slice();
          }

          shallowClone.allOf.push(requiresAnyOf);
          augmentedSchema = shallowClone;
        } else {
          augmentedSchema = Object.assign({}, option, requiresAnyOf);
        } // Remove the "required" field as it's likely that not all fields have
        // been filled in yet, which will mean that the schema is not valid
        // 如果编辑回填数据的场景 可直接使用 required 判断


        if (!haveAllFields) delete augmentedSchema.required;

        if (isValid(augmentedSchema, formData)) {
          return i;
        }
      } else if (isValid(options[i], formData)) {
        return i;
      }
    } // 尝试查找const 配置


    if (options[0] && options[0].properties) {
      const constProperty = Object.keys(options[0].properties).find(k => options[0].properties[k].const);

      if (constProperty) {
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < options.length; i++) {
          if (options[i].properties && options[i].properties[constProperty] && options[i].properties[constProperty].const === formData[constProperty]) {
            return i;
          }
        }
      }
    }

    return -1;
  } // oneOf anyOf 通过formData的值来找到当前匹配项索引

  function getMatchingOption(formData, options, rootSchema) {
    let haveAllFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    const index = getMatchingIndex(formData, options, rootSchema, haveAllFields);
    return index === -1 ? 0 : index;
  }

  var validate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ajvValidateFormData: ajvValidateFormData,
    validateFormDataAndTransformMsg: validateFormDataAndTransformMsg,
    isValid: isValid,
    ajvValid: ajvValid,
    getMatchingIndex: getMatchingIndex,
    getMatchingOption: getMatchingOption
  });

  /**
   * When merging defaults and form data, we want to merge in this specific way:
   * - objects are deeply merged
   * - arrays are merged in such a way that:
   *   - when the array is set in form data, only array entries set in form data
   *     are deeply merged; additional entries from the defaults are ignored
   *   - when the array is not set in form data, the default is copied over
   * - scalars are overwritten/set by form data
   */

  function mergeDefaultsWithFormData(defaults, formData) {
    if (Array.isArray(formData)) {
      if (!Array.isArray(defaults)) {
        defaults = [];
      }

      return formData.map((value, idx) => {
        if (defaults[idx]) {
          return mergeDefaultsWithFormData(defaults[idx], value);
        }

        return value;
      });
    }

    if (isObject(formData)) {
      const acc = Object.assign({}, defaults); // Prevent mutation of source object.

      return Object.keys(formData).reduce((preAcc, key) => {
        preAcc[key] = mergeDefaultsWithFormData(defaults ? defaults[key] : {}, formData[key]);
        return preAcc;
      }, acc);
    }

    return formData;
  }

  function computeDefaults(_schema, parentDefaults, rootSchema) {
    let rawFormData = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let includeUndefinedValues = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    let haveAllFields = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    let schema = isObject(_schema) ? _schema : {};
    const formData = isObject(rawFormData) ? rawFormData : {}; // allOf 处理合并数据

    if ('allOf' in schema) {
      schema = resolveAllOf(schema, rootSchema, formData);
    } // Compute the defaults recursively: give highest priority to deepest nodes.


    let defaults = parentDefaults;

    if (isObject(defaults) && isObject(schema.default)) {
      // For object defaults, only override parent defaults that are defined in
      // schema.default.
      defaults = mergeObjects(defaults, schema.default);
    } else if ('default' in schema) {
      // Use schema defaults for this node.
      defaults = schema.default;
    } else if ('$ref' in schema) {
      // Use referenced schema defaults for this node.
      const refSchema = findSchemaDefinition(schema.$ref, rootSchema);
      return computeDefaults(refSchema, defaults, rootSchema, formData, includeUndefinedValues, haveAllFields);
    } else if (isFixedItems(schema)) {
      defaults = schema.items.map((itemSchema, idx) => computeDefaults(itemSchema, Array.isArray(parentDefaults) ? parentDefaults[idx] : undefined, rootSchema, formData, includeUndefinedValues, haveAllFields));
    } else if ('oneOf' in schema) {
      const matchSchema = retrieveSchema(schema.oneOf[getMatchingOption(formData, schema.oneOf, rootSchema, haveAllFields)], rootSchema, formData);
      schema = mergeObjects(schema, matchSchema);
      delete schema.oneOf; // if (schema.properties && matchSchema.properties) {
      //     // 对象 oneOf 需要合并原属性和 oneOf 属性
      //     const mergeSchema = mergeObjects(schema, matchSchema);
      //     delete mergeSchema.oneOf;
      //     schema = mergeSchema;
      // } else {
      //     schema = matchSchema;
      // }
    } else if ('anyOf' in schema) {
      const matchSchema = retrieveSchema(schema.anyOf[getMatchingOption(formData, schema.anyOf, rootSchema, haveAllFields)], rootSchema, formData);
      schema = mergeObjects(schema, matchSchema);
      delete schema.anyOf; // if (schema.properties && matchSchema.properties) {
      //     // 对象 anyOf 需要合并原属性和 anyOf 属性
      //     const mergeSchema = mergeObjects(schema, matchSchema);
      //     delete mergeSchema.anyOf;
      //     schema = mergeSchema;
      // } else {
      //     schema = matchSchema;
      // }
    } // Not defaults defined for this node, fallback to generic typed ones.


    if (typeof defaults === 'undefined') {
      defaults = schema.default;
    } // eslint-disable-next-line default-case


    switch (getSchemaType(schema)) {
      case 'null':
        return null;
      // We need to recur for object schema inner default values.

      case 'object':
        return Object.keys(schema.properties || {}).reduce((acc, key) => {
          // Compute the defaults for this node, with the parent defaults we might
          // have from a previous run: defaults[key].
          const computedDefault = computeDefaults(schema.properties[key], (defaults || {})[key], rootSchema, (formData || {})[key], includeUndefinedValues, haveAllFields);

          if (includeUndefinedValues || computedDefault !== undefined) {
            acc[key] = computedDefault;
          }

          return acc;
        }, {});

      case 'array':
        // Inject defaults into existing array defaults
        if (Array.isArray(defaults)) {
          defaults = defaults.map((item, idx) => computeDefaults(schema.items[idx] || schema.additionalItems || {}, item, rootSchema, {}, includeUndefinedValues, haveAllFields));
        } // Deeply inject defaults into already existing form data


        if (Array.isArray(rawFormData)) {
          defaults = rawFormData.map((item, idx) => computeDefaults(schema.items, (defaults || {})[idx], rootSchema, item, {}, includeUndefinedValues, haveAllFields));
        }

        if (schema.minItems) {
          if (!isMultiSelect(schema, rootSchema)) {
            const defaultsLength = defaults ? defaults.length : 0;

            if (schema.minItems > defaultsLength) {
              const defaultEntries = defaults || []; // populate the array with the defaults

              const fillerSchema = Array.isArray(schema.items) ? schema.additionalItems : schema.items;
              const fillerEntries = fillObj(new Array(schema.minItems - defaultsLength), computeDefaults(fillerSchema, fillerSchema.defaults, rootSchema, {}, includeUndefinedValues, haveAllFields));
              return defaultEntries.concat(fillerEntries);
            }
          } else {
            return defaults || [];
          }
        } // undefined 默认一个空数组


        defaults = defaults === undefined ? [] : defaults;
    }

    return defaults;
  } // 获取默认form data


  function getDefaultFormState(_schema, formData) {
    let rootSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let includeUndefinedValues = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    let haveAllFields = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (!isObject(_schema)) {
      throw new Error("Invalid schema: ".concat(_schema));
    }

    const schema = retrieveSchema(_schema, rootSchema, formData);
    const defaults = computeDefaults(schema, _schema.default, rootSchema, formData, includeUndefinedValues, haveAllFields);

    if (typeof formData === 'undefined') {
      // No form data? Use schema defaults.
      return defaults;
    } // 传入formData时，合并传入数据


    if (isObject(formData) || Array.isArray(formData)) {
      return mergeDefaultsWithFormData(defaults, formData);
    }

    if (formData === 0 || formData === false || formData === '') {
      return formData;
    }

    return formData || defaults;
  }

  var CheckboxesWidget$1 = {
    functional: true,

    render(h, context) {
      let {
        enumOptions
      } = context.data.attrs;
      enumOptions = Array.isArray(enumOptions) ? enumOptions : [];
      return h('a-checkbox-group', context.data, {
        default() {
          return enumOptions.map((item, i) => h('a-checkbox', {
            key: i,
            value: item.value
          }, {
            default: () => item.label
          }));
        }

      });
    }

  };

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
  var script$1 = {
    name: "RadioWidget",
    props: {
      enumOptions: {
        default: () => [],
        type: [Array]
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function (context) {
        style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("el-radio-group", _vm._g(_vm._b({
      on: {
        change: function change(val) {
          return _vm.$emit("input", val);
        }
      }
    }, "el-radio-group", _vm.$attrs, false), _vm.$listeners), _vm._l(_vm.enumOptions, function (item, index) {
      return _c("el-radio", {
        key: index,
        attrs: {
          label: item.value
        }
      }, [_vm._v("\n    " + _vm._s(item.label) + "\n  ")]);
    }), 1);
  };

  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;
  /* style */

  const __vue_inject_styles__$3 = undefined;
  /* scoped */

  const __vue_scope_id__$3 = undefined;
  /* module identifier */

  const __vue_module_identifier__$3 = undefined;
  /* functional template */

  const __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$3 = /*#__PURE__*/normalizeComponent_1({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$3, __vue_script__$1, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

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
  var script = {
    name: "SelectWidget",
    props: {
      enumOptions: {
        default: () => [],
        type: [Array]
      }
    }
  };

  /* script */
  const __vue_script__ = script;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("a-select", _vm._g(_vm._b({
      attrs: {
        mode: "default"
      },
      on: {
        change: function change(val) {
          return _vm.$emit("input", val);
        }
      }
    }, "a-select", _vm.$attrs, false), _vm.$listeners), _vm._l(_vm.enumOptions, function (item, i) {
      return _c("a-select-option", {
        key: i,
        attrs: {
          value: item.value
        }
      }, [_vm._v("\n    " + _vm._s(item.label) + "\n  ")]);
    }), 1);
  };

  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;
  /* style */

  const __vue_inject_styles__$2 = undefined;
  /* scoped */

  const __vue_scope_id__$2 = undefined;
  /* module identifier */

  const __vue_module_identifier__$2 = undefined;
  /* functional template */

  const __vue_is_functional_template__$2 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$2 = /*#__PURE__*/normalizeComponent_1({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$2, __vue_script__, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  const _excluded$1 = ["isNumberValue", "isRange"];
  // /**
  //  * Created by Liu.Jun on 2020/7/22 13:21.
  //  */
  //  import moment from 'moment';
  var DatePickerWidget$1 = {
    name: 'DatePickerWidget',
    functional: true,

    render(h, context) {
      const _ref = context.data.attrs || {},
            {
        isNumberValue,
        isRange
      } = _ref,
            otherProps = _objectWithoutProperties(_ref, _excluded$1);

      context.data.attrs = _objectSpread2({
        valueFormat: isNumberValue ? 'x' : 'YYYY-MM-DD'
      }, otherProps);
      const oldinput = context.data.on.input;
      context.data.on = _objectSpread2(_objectSpread2({}, context.data.on), {}, {
        change(val) {
          oldinput.apply(context.data.on, [val]);
        }

      });
      return h(isRange ? 'a-range-picker' : 'a-date-picker', context.data, context.children);
    }

  };

  const _excluded = ["isNumberValue", "isRange"];
  // /**
  //  * Created by Liu.Jun on 2020/7/22 13:21.
  //  */
  //  import moment from 'moment';
  var DateTimePickerWidget$1 = {
    name: 'DatePickerWidget',
    functional: true,

    render(h, context) {
      const _ref = context.data.attrs || {},
            {
        isNumberValue,
        isRange
      } = _ref,
            otherProps = _objectWithoutProperties(_ref, _excluded);

      context.data.attrs = _objectSpread2({
        valueFormat: isNumberValue ? 'x' : 'YYYY-MM-DDTHH:mm:ssZ'
      }, otherProps);
      const oldinput = context.data.on.input;
      context.data.on = _objectSpread2(_objectSpread2({}, context.data.on), {}, {
        change(val) {
          oldinput.apply(context.data.on, [val]);
        }

      });
      return h(isRange ? 'a-range-picker' : 'a-date-picker', context.data, context.children);
    }

  };

  var TimePickerWidget$1 = {
    name: 'TimePickerWidget',
    functional: true,

    render(h, context) {
      context.data.attrs = _objectSpread2({
        valueFormat: 'HH:mm:ss'
      }, context.data.attrs);
      const oldinput = context.data.on.input;
      context.data.on = _objectSpread2(_objectSpread2({}, context.data.on), {}, {
        change(val) {
          oldinput.apply(context.data.on, [val]);
        }

      });
      return h('a-time-picker', context.data, context.children);
    }

  };

  /**
   * Created by Liu.Jun on 2020/11/26 10:01 下午.
   */
  // mock
  // https://run.mocky.io/v3/518d7af7-204f-45ab-9628-a6e121dab8ca
  var UploadWidget = {
    name: 'UploadWidget',
    props: {
      value: {
        default: null,
        type: [String, Array]
      },
      responseFileUrl: {
        default: res => res ? res.url || res.data && res.data.url : '',
        type: [Function]
      },
      btnText: {
        type: String,
        default: '点击上传'
      },
      // 传入 VNode
      slots: {
        type: null,
        default: null
      }
    },

    data() {
      // 设置默认 fileList
      const value = this.value;
      const isArrayValue = Array.isArray(value);

      const fileList = this.$attrs.fileList || (() => {
        if (isArrayValue) {
          return value.map((item, index) => ({
            name: "\u5DF2\u4E0A\u4F20\u6587\u4EF6\uFF08".concat(index + 1, "\uFF09"),
            url: item
          }));
        }

        if (value) {
          return [{
            name: '已上传文件',
            url: value
          }];
        }

        return [];
      })();

      return {
        isArrayValue,
        fileList
      };
    },

    methods: {
      getUrl(fileItem) {
        return fileItem && (fileItem.response && this.responseFileUrl(fileItem.response) || fileItem.url) || '';
      },

      emitValue(fileList) {
        // v-model
        let value;

        if (this.isArrayValue) {
          value = fileList.length ? fileList.reduce((pre, item) => {
            const url = this.getUrl(item);
            if (url) pre.push(url);
            return pre;
          }, []) : [];
        } else {
          const fileItem = fileList[fileList.length - 1];
          value = this.getUrl(fileItem);
        }

        this.$emit('input', value);
      }

    },

    render() {
      const h = this.$createElement;
      const attrs = this.$attrs;
      const {
        slots
      } = this.$props;
      console.log('object :>> ', this);
      const data = {
        attrs: _objectSpread2(_objectSpread2({}, attrs), {}, {
          fileList: this.fileList,
          'list-type': 'picture',
          showUploadList: true
        }),
        on: {
          change: val => {
            if (val.file.status !== 'uploading') {
              this.emitValue(val.fileList);
            }

            if (attrs.onChange) {
              attrs.onChange.call(this, val);
            }
          }
        }
      };
      if (!this.isArrayValue) data.attrs.limit = 1;
      const childVNode = [];

      if (slots && slots.default) {
        childVNode.push(h('template', {
          slot: 'default'
        }, [typeof slots.default === 'function' ? slots.default(h) : slots.default]));
      } else {
        childVNode.push(h('a-button', {
          props: {
            type: 'primary'
          }
        }, [this.btnText]));
      }

      if (slots && slots.tip) {
        childVNode.push(h('template', {
          slot: 'tip'
        }, [typeof slots.tip === 'function' ? slots.tip(h) : slots.tip]));
      }

      return h('a-upload', data, childVNode);
    }

  };

  /* script */

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("a-input", _vm._g(_vm._b({}, "a-input", _vm.$attrs, false), _vm.$listeners), [_c("input", {
      attrs: {
        slot: "addonAfter",
        type: "color"
      },
      on: {
        input: function input($event) {
          return _vm.$emit("input", $event.target.value);
        },
        change: function change($event) {
          return _vm.$emit("update:value", $event.target.value);
        }
      },
      slot: "addonAfter"
    })]);
  };

  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;
  /* style */

  const __vue_inject_styles__$1 = undefined;
  /* scoped */

  const __vue_scope_id__$1 = undefined;
  /* module identifier */

  const __vue_module_identifier__$1 = undefined;
  /* functional template */

  const __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__$1 = /*#__PURE__*/normalizeComponent_1({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  /* script */

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("a-input-number", _vm._g(_vm._b({
      on: {
        change: function change(val) {
          return _vm.$emit("input", val);
        }
      }
    }, "a-input-number", _vm.$attrs, false), _vm.$listeners));
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  const __vue_inject_styles__ = undefined;
  /* scoped */

  const __vue_scope_id__ = undefined;
  /* module identifier */

  const __vue_module_identifier__ = undefined;
  /* functional template */

  const __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  const __vue_component__ = /*#__PURE__*/normalizeComponent_1({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, {}, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  var InputWidget$1 = {
    functional: true,

    render(h, context) {
      const oldinput = context.data.on.input;
      let {
        type
      } = context.props;
      context.data.on = _objectSpread2(_objectSpread2({}, context.data.on), {}, {
        input(e) {
          oldinput(e.target.value);
        },

        change(e) {
          console.log('change :>> ', e.target.value); //   oldinput.apply(context.data.on, e.target.value)    

          oldinput(e.target.value);
        }

      });

      if (type === 'textarea') {
        return h('a-textarea', context.data, context.children);
      }

      return h('a-input', context.data);
    }

  }; // export default {
  //   props: {
  //     type: String,
  //   },
  //   render(){
  //     const h = this.$createElement
  //     console.log('this :>> ', this);
  //     let {attrs} = this.$attrs 
  //     let data = {
  //         attrs,
  //         on: {
  //           change(val){
  //             console.log('val')
  //             this.$emit('input', val)
  //           }
  //         }
  //       }
  //     if(this.type === 'texarea'){
  //       return h('a-textarea', data)
  //     }
  //     return h('a-input', data)
  //   }
  // }
  // <template>
  //   <a-textarea v-if="type === 'textarea'" v-bind="$attrs" v-on="$listeners" @change="(val) => $emit('input', val)"></a-textarea>
  //   <a-input v-else v-bind="$attrs" v-on="$listeners" @change="(val) => $emit('input', val)" ></a-input>
  // </template>
  // <script>
  // export default {
  //   props: {
  //     type: String ,
  //   }
  // }
  // </script>

  var EmailWidget$1 = {
    name: 'DatePickerWidget',
    functional: true,

    render(h, context) {
      context.data.domAttrs = _objectSpread2(_objectSpread2({}, context.data.domAttrs), {}, {
        type: 'email'
      });
      const oldinput = context.data.on.input;
      context.data.on = _objectSpread2(_objectSpread2({}, context.data.on), {}, {
        input(val) {
          oldinput.apply(context.data.on, val);
        }

      });
      return h('a-input', context.data, context.children);
    }

  };

  var SwitchWidget$1 = {
    functional: true,

    render(h, context) {
      const oldinput = context.data.on.input;
      context.data.on = _objectSpread2(_objectSpread2({}, context.data.on), {}, {
        change(val) {
          console.log('switch val :>> ', val);
          oldinput.apply(context.data.on, [val]);
        }

      });
      return h('a-switch', context.data, context.children);
    }

  };

  /**
   * Created by Liu.Jun on 2020/5/17 10:41 下午.
   */
  // const files = require.context('.', true, /\.js|vue$/);
  // const widgetComponents = files.keys().reduce((preVal, curKey) => {
  //     if (curKey !== './index.js') {
  //         preVal[curKey.replace(/(\.\/|\/index\.(js|vue))/g, '')] = files(curKey).default;
  //     }
  //     return preVal;
  // }, {});

  const widgetComponents = {
    CheckboxesWidget: CheckboxesWidget$1,
    RadioWidget: __vue_component__$3,
    SelectWidget: __vue_component__$2,
    TimePickerWidget: TimePickerWidget$1,
    DatePickerWidget: DatePickerWidget$1,
    DateTimePickerWidget: DateTimePickerWidget$1,
    UploadWidget,
    ColorWidget: __vue_component__$1,
    InputNumber: __vue_component__,
    InputWidget: InputWidget$1,
    EmailWidget: EmailWidget$1,
    SwitchWidget: SwitchWidget$1
  };

  /**
   * Created by Liu.Jun on 2020/4/21 18:23.
   */
  const {
    CheckboxesWidget,
    RadioWidget,
    SelectWidget,
    TimePickerWidget,
    DatePickerWidget,
    DateTimePickerWidget,
    ColorWidget,
    InputNumber,
    InputWidget,
    EmailWidget,
    SwitchWidget
  } = widgetComponents;
  var WIDGET_MAP = {
    types: {
      boolean: SwitchWidget,
      string: InputWidget,
      number: InputNumber,
      integer: InputNumber
    },
    formats: {
      color: ColorWidget,
      time: TimePickerWidget,
      // 20:20:39+00:00
      date: DatePickerWidget,
      // 2018-11-13
      'date-time': DateTimePickerWidget,
      // 2018-11-13T20:20:39+00:00,
      email: EmailWidget
    },
    common: {
      select: SelectWidget,
      radioGroup: RadioWidget,
      checkboxGroup: CheckboxesWidget
    },
    widgetComponents
  };

  var css_248z = "/* element plus 重置样式*/\n.genFromComponent {\n    &.ant-form-vertical {\n        .ant-form-item-label {\n            line-height: 26px;\n            padding-bottom: 6px;\n            font-size: 14px;\n        }\n    }\n    .ant-form-item {\n        margin-bottom: 22px;\n        &.ant-form-item-with-help {\n            margin-bottom: 2px;\n        }\n    }\n    .ant-form-explain {\n        padding-top: 2px;\n        display: -webkit-box!important;\n        text-overflow: ellipsis;\n        overflow: hidden;\n        -webkit-box-orient: vertical;\n        -webkit-line-clamp: 2;\n        white-space: normal;\n        text-align: left;\n        line-height: 1.2;\n        font-size: 12px;\n    }\n    .validateWidget .ant-form-explain {\n        padding: 5px 0;\n        position: relative;\n    }\n    .ant-form-item-label > label.ant-form-item-no-colon::after {\n        display: none;\n    }\n}\n";
  styleInject(css_248z);

  const globalOptions = Object.freeze({
    WIDGET_MAP: Object.freeze(WIDGET_MAP),
    COMPONENT_MAP: Object.freeze({
      form: {
        functional: true,

        render(h, context) {
          console.log('form', context.slots()); // 处理 labelPosition 参数和layout之间转换

          const labelPositionMap = {
            top: {
              layout: 'vertical'
            },
            left: {
              layout: 'horizontal',
              labelAlign: 'left'
            },
            right: {
              layout: 'horizontal',
              labelAlign: 'right'
            }
          };
          context.data.props = _objectSpread2(_objectSpread2({}, context.data.props), labelPositionMap[context.data.props.labelPosition || 'top']);
          return h('a-form-model', context.data, context.children);
        }

      },
      formItem: {
        functional: true,

        render(h, context) {
          // https://github.com/vuejs/vue/issues/8380
          // 具名插槽需要重新显示的指定，无法直接透传 Orz...
          return h('a-form-model-item', context.data, context.children);
        }

      },
      button: 'a-button',
      popover: {
        functional: true,

        render(h, context) {
          console.log('popover', context); // 交换 slot

          return h('a-popover', context.data, [h('template', {
            slot: 'defalut'
          }, context.slots().default), h('template', {
            slot: 'content'
          }, context.slots().reference)]);
        }

      }
    }),
    HELPERS: {
      // 是否mini显示 description
      isMiniDes(formProps) {
        return formProps && ['left', 'right'].includes(formProps.labelPosition);
      }

    }
  });
  const JsonSchemaForm = createForm(globalOptions); // 存在Vue 全局变量默认注册 VueForm 组件

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('VueForm', JsonSchemaForm);
  }

  exports.SchemaField = SchemaField;
  exports["default"] = JsonSchemaForm;
  exports.fieldProps = vueProps;
  exports.formUtils = formUtils;
  exports.getDefaultFormState = getDefaultFormState;
  exports.globalOptions = globalOptions;
  exports.i18n = i18n;
  exports.schemaValidate = validate;
  exports.vueUtils = vueUtils;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
