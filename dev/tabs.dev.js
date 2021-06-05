(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  function getEls(target) {
    var arr = [];

    for (var _len = arguments.length, els = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      els[_key - 1] = arguments[_key];
    }

    for (var _i = 0, _els = els; _i < _els.length; _i++) {
      var el = _els[_i];

      if ("string" == typeof el) {
        var nodes = target.querySelectorAll(el);
        arr.push.apply(arr, _toConsumableArray(nodes));
      } else el instanceof Element && arr.push(el);
    }

    return arr;
  }

  function recursiveAppend(el) {
    for (var _len2 = arguments.length, content = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      content[_key2 - 1] = arguments[_key2];
    }

    for (var _i2 = 0, _content = content; _i2 < _content.length; _i2++) {
      var entity = _content[_i2];
      Array.isArray(entity) ? recursiveAppend.apply(void 0, [el].concat(_toConsumableArray(entity))) : el.append(entity);
    }
  }

  function tickHelper(cbs, cb) {
    var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    setTimeout(function () {
      cb(), cbs.length && _nextTick.apply(void 0, _toConsumableArray(cbs));
    }, num);
  }

  function _nextTick() {
    for (var _len3 = arguments.length, cbs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      cbs[_key3] = arguments[_key3];
    }

    var current = cbs.shift();
    return "function" == typeof current ? tickHelper(cbs, current) : Array.isArray(current) && tickHelper(cbs, current[0], current[1]), this;
  }

  var MicroDOM = /*#__PURE__*/function (_Array) {
    _inherits(MicroDOM, _Array);

    var _super = _createSuper(MicroDOM);

    function MicroDOM() {
      _classCallCheck(this, MicroDOM);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _super.call.apply(_super, [this].concat(args));
    }
    /**
     * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
     */


    _createClass(MicroDOM, [{
      key: "get",
      value: function get() {
        var newInstance = new MicroDOM();

        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        if (this.length) {
          var _iterator = _createForOfIteratorHelper(this),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var el = _step.value;
              newInstance.push.apply(newInstance, _toConsumableArray(getEls.apply(void 0, [el].concat(args))));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else newInstance.push.apply(newInstance, _toConsumableArray(getEls.apply(void 0, [document].concat(args))));

        return newInstance;
      }
      /**
       * Returns a new instance with new created elements according to the passed parameters
       */

    }, {
      key: "create",
      value: function create() {
        var newInstance = new MicroDOM();

        for (var _len6 = arguments.length, entities = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          entities[_key6] = arguments[_key6];
        }

        for (var _i3 = 0, _entities = entities; _i3 < _entities.length; _i3++) {
          var entity = _entities[_i3];
          if ("string" == typeof entity) newInstance.push(document.createElement(entity));else if (entity instanceof Object) {
            var el = document.createElement(entity.tagName || "div");
            entity.content && (Array.isArray(entity.content) ? recursiveAppend.apply(void 0, [el].concat(_toConsumableArray(entity.content))) : recursiveAppend(el, entity.content)), newInstance.push(el);
          }
        }

        return newInstance;
      }
      /**
       * Clears the contents of each element in the set and returns the instance itself
       */

    }, {
      key: "empty",
      value: function empty() {
        return this.forEach(function (el) {
          return el.innerHTML = "";
        }), this;
      }
      /**
       * Sets the textContent property for each collection item and returns an instance
       */

    }, {
      key: "text",
      value: function text(_text) {
        return this.forEach(function (el) {
          return el.textContent = _text || "";
        }), this;
      }
      /**
       * Inserts a set of Node objects or DOMString objects after the last child of each array element
       */

    }, {
      key: "append",
      value: function append() {
        for (var _len7 = arguments.length, _append = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          _append[_key7] = arguments[_key7];
        }

        return this.forEach(function (el) {
          return recursiveAppend.apply(void 0, [el].concat(_append));
        }), this;
      }
      /**
       * Adds a class or classes to all array elements
       */

    }, {
      key: "addClass",
      value: function addClass() {
        for (var _len8 = arguments.length, classes = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          classes[_key8] = arguments[_key8];
        }

        return this.forEach(function (el) {
          var _el$classList;

          return (_el$classList = el.classList).add.apply(_el$classList, classes);
        }), this;
      }
      /**
       * Removes a class or classes from all array elements
       */

    }, {
      key: "removeClass",
      value: function removeClass() {
        for (var _len9 = arguments.length, classes = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          classes[_key9] = arguments[_key9];
        }

        return this.forEach(function (el) {
          var _el$classList2;

          return (_el$classList2 = el.classList).remove.apply(_el$classList2, classes);
        }), this;
      }
      /**
       * Adds or removes a class for each element of the array, depending on its presence
       */

    }, {
      key: "toggleClass",
      value: function toggleClass(classname) {
        return this.forEach(function (el) {
          return el.classList.toggle(classname);
        }), this;
      }
      /**
       * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
       */

    }, {
      key: "hasClass",
      value: function hasClass(classname) {
        var reqtForAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var newInstance = new MicroDOM();
        if (reqtForAll) // The presence of a class for each element of the set
          return this.forEach(function (el) {
            el.classList.contains(classname) && newInstance.push(el);
          }), newInstance; // the presence of a class for at least one element of the set

        var _iterator2 = _createForOfIteratorHelper(this),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var el = _step2.value;
            el.classList.contains(classname) && newInstance.push(el);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return newInstance;
      }
      /**
       * Calls the "addEventListener" method for each set item
       */

    }, {
      key: "addEventListener",
      value: function addEventListener(type, listener, options) {
        return this.forEach(function (el) {
          return el.addEventListener(type, listener, options);
        }), this;
      }
      /**
       * Calls the "removeEventListener" method for each set item
       */

    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, listener, options) {
        return this.forEach(function (el) {
          return el.removeEventListener(type, listener, options);
        }), this;
      }
      /**
       * Calls dispatchEvent with an event of the specified type for each item in the set
       */

    }, {
      key: "fireEvent",
      value: function fireEvent(type) {
        return this.forEach(function (el) {
          return el.dispatchEvent(new Event(type));
        }), this;
      }
      /**
       * Sets the style attribute property passed in the object by key
       */

    }, {
      key: "css",
      value: function css(obj) {
        return this.forEach(function (el) {
          return Object.keys(obj).forEach(function (key) {
            return el.style[key] = obj[key];
          });
        }), this;
      }
      /**
       * Sets the attribute property passed in the object by key
       */

    }, {
      key: "attr",
      value: function attr(obj) {
        return this.forEach(function (el) {
          return Object.keys(obj).forEach(function (key) {
            return el.setAttribute(key, obj[key]);
          });
        }), this;
      }
      /**
       * Recursively calls each passed function in a new setTimeout(() => {}, 0)
       */

    }, {
      key: "nextTick",
      value: function nextTick() {
        return _nextTick.apply(void 0, arguments), this;
      }
    }]);

    return MicroDOM;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function _() {
    for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      args[_key10] = arguments[_key10];
    }

    return args instanceof MicroDOM ? args : _construct(MicroDOM, _toConsumableArray(getEls.apply(void 0, [document].concat(args))));
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  var _default$1 = /*#__PURE__*/function () {
    /**
     * Event list
     */

    /**
     * Create Emitter
     */
    function _default() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      _defineProperty(this, "events", {});

      for (var s in e) {
        e[s] && this.subscribe(s, e[s]);
      }
    }
    /**
     * Creates a key for the event and subscribes the passed callback to it.
     */


    _createClass(_default, [{
      key: "subscribe",
      value: function subscribe(e, s) {
        var _this = this;

        this.has(e) || (this.events[e] = []);
        var t = [];

        if (Array.isArray(s)) {
          var _iterator = _createForOfIteratorHelper(s),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var r = _step.value;
              t.push.apply(t, _toConsumableArray(this.subscribe(e, r)));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else this.events[e].push(s), t.push(function () {
          return _this.removeListener(e, s);
        });

        return t;
      }
      /**
       * Unsubscribes all callback functions from the event and removes the event
       * key.
       */

    }, {
      key: "unsubscribe",
      value: function unsubscribe() {
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        for (var _i = 0, _e = e; _i < _e.length; _i++) {
          var s = _e[_i];
          this.events[s] && delete this.events[s];
        }
      }
      /**
       * Removes a specific event key callback function.
       */

    }, {
      key: "removeListener",
      value: function removeListener(e, s) {
        // if (typeof this.events[key] === 'object') {
        if (Array.isArray(this.events[e])) {
          var t = this.events[e].indexOf(s);
          t > -1 && this.events[e].splice(t, 1);
        }
      }
      /**
       * Calls the callback function only once, and then removes it.
       */

    }, {
      key: "once",
      value: function once(e, s) {
        var t = this.subscribe(e, function () {
          t[0](), Array.isArray(s) ? s.forEach(function (e) {
            return e();
          }) : s();
        });
      }
      /**
       * Checks for an event by key.
       * (Doesn't check for callback functions)
       */

    }, {
      key: "has",
      value: function has(e) {
        return !!this.events[e];
      }
      /**
       * Returns the number of callback functions for the event key or "false" if
       * there is no key
       */

    }, {
      key: "listenerCount",
      value: function listenerCount(e) {
        return !!this.events.hasOwnProperty(e) && this.events[e].length;
      }
      /**
       * Calls all callback functions on events using the event key.
       */

    }, {
      key: "emit",
      value: function emit(e) {
        var t = this.events[e];

        for (var _len2 = arguments.length, s = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          s[_key2 - 1] = arguments[_key2];
        }

        if (t) {
          var _iterator2 = _createForOfIteratorHelper(t),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _e2 = _step2.value;

              _e2.apply(void 0, s);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
      /**
       * Just like "emit" calls all callback functions. However, the callback must
       * return a boolean value, which determines whether or not the next callback
       * will execute.
       * As a result, it returns the result of the last executed callback function.
       */

    }, {
      key: "validateEmit",
      value: function validateEmit(e) {
        var t = this.events[e];
        if (!t) return !1;

        for (var _len3 = arguments.length, s = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          s[_key3 - 1] = arguments[_key3];
        }

        var _iterator3 = _createForOfIteratorHelper(t),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _e3 = _step3.value;
            if (!_e3.apply(void 0, s)) return !1;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        return !0;
      }
      /**
       * Just like "emit" calls all callbacks, but unlike "emit" it passes the
       * result of the previous callback to the next one as an argument.
       * As aresult, it will return the result of the last callback.
       */

    }, {
      key: "seriesEmit",
      value: function seriesEmit(e) {
        var t = this.events[e];
        if (!t) return;
        var r;

        for (var _len4 = arguments.length, s = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          s[_key4 - 1] = arguments[_key4];
        }

        for (var _e4 = 0; _e4 < t.length; _e4++) {
          r = 0 === _e4 ? t[_e4].apply(t, s) : t[_e4](r);
        }

        return r;
      }
    }]);

    return _default;
  }();

  function isObject$1(item) {
    return typeof item === 'object' && !Array.isArray(item) && item !== null;
  }
  function deepmerge(target, source) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var mergeObject = options.mergeObject === undefined ? true : !!options.mergeObject;

    if (isObject$1(target) && isObject$1(source)) {
      for (var _i = 0, _Object$keys = Object.keys(source); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];

        if (mergeObject && isObject$1(source[key])) {
          if (!target[key] || !isObject$1(target[key])) {
            target[key] = source[key];
          }

          deepmerge(target[key], source[key]);
        } else if (options.mergeArray && Array.isArray(source[key])) {
          console.log(key);

          if (Array.isArray(target[key])) {
            var _target$key;

            (_target$key = target[key]).push.apply(_target$key, _toConsumableArray(source[key]));
          } else {
            Object.assign(target, {
              [key]: source[key]
            });
          }
        } else {
          Object.assign(target, {
            [key]: source[key]
          });
        }
      }
    }

    return target;
  }

  var isObject = function (el) { return el && typeof el === 'object' && el !== null; };
  function animate(_a, afterEnd) {
      var animInst = _a.animInst, // CSSClassAnimations
      clsFrom = _a.clsFrom, // string
      clsActive = _a.clsActive, // string
      clsTo = _a.clsTo;
      animInst.els.addClass(clsFrom);
      _nextTick([
          function () { return animInst.els.addClass(clsActive); },
          10
      ], [
          function () { return animInst.els.removeClass(clsFrom); },
          10
      ], [
          function () {
              animInst.emitter.once('end', function () {
                  animInst.els.removeClass(clsTo, clsActive);
                  afterEnd && afterEnd();
              });
              animInst.els.addClass(clsTo);
          },
          10
      ]);
  }

  var Plugin = /** @class */ (function () {
      function class_1(tabs) {
          this.tabs = tabs;
      }
      return class_1;
  }());

  function t(t) {
    var s = [];

    for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      e[_key - 1] = arguments[_key];
    }

    for (var _i = 0, _e = e; _i < _e.length; _i++) {
      var _r = _e[_i];

      if ("string" == typeof _r) {
        var _e2 = t.querySelectorAll(_r);

        s.push.apply(s, _toConsumableArray(_e2));
      } else _r instanceof Element && s.push(_r);
    }

    return s;
  }

  function e$1(t) {
    for (var _len2 = arguments.length, s = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      s[_key2 - 1] = arguments[_key2];
    }

    for (var _i2 = 0, _s = s; _i2 < _s.length; _i2++) {
      var _r2 = _s[_i2];
      Array.isArray(_r2) ? e$1.apply(void 0, [t].concat(_toConsumableArray(_r2))) : t.append(_r2);
    }
  }

  function s() {
    for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      t[_key3] = arguments[_key3];
    }

    var e = t,
        r = t.shift();
    return r && setTimeout(function () {
      r(), e.length && s.apply(void 0, e);
    }, 0), this;
  }

  var r = /*#__PURE__*/function (_Array) {
    _inherits(r, _Array);

    var _super = _createSuper(r);

    function r() {
      _classCallCheck(this, r);

      for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        t[_key4] = arguments[_key4];
      }

      return _super.call.apply(_super, [this].concat(t));
    }
    /**
     * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
     */


    _createClass(r, [{
      key: "get",
      value: function get() {
        var s = new r();

        for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          e[_key5] = arguments[_key5];
        }

        if (this.length) {
          var _iterator = _createForOfIteratorHelper(this),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _r7 = _step.value;
              s.push.apply(s, _toConsumableArray(t.apply(void 0, [_r7].concat(e))));
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else s.push.apply(s, _toConsumableArray(t.apply(void 0, [document].concat(e))));

        return s;
      }
      /**
       * Returns a new instance with new created elements according to the passed parameters
       */

    }, {
      key: "create",
      value: function create() {
        var s = new r();

        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }

        for (var _i3 = 0, _t = t; _i3 < _t.length; _i3++) {
          var _r8 = _t[_i3];
          if ("string" == typeof _r8) s.push(document.createElement(_r8));else if (_r8 instanceof Object) {
            var _t2 = document.createElement(_r8.tagName || "div");

            _r8.content && (Array.isArray(_r8.content) ? e$1.apply(void 0, [_t2].concat(_toConsumableArray(_r8.content))) : e$1(_t2, _r8.content)), s.push(_t2);
          }
        }

        return s;
      }
      /**
       * Clears the contents of each element in the set and returns the instance itself
       */

    }, {
      key: "empty",
      value: function empty() {
        return this.forEach(function (t) {
          return t.innerHTML = "";
        }), this;
      }
      /**
       * Sets the textContent property for each collection item and returns an instance
       */

    }, {
      key: "text",
      value: function text(t) {
        return this.forEach(function (e) {
          return e.textContent = t || "";
        }), this;
      }
      /**
       * Inserts a set of Node objects or DOMString objects after the last child of each array element
       */

    }, {
      key: "append",
      value: function append() {
        for (var _len7 = arguments.length, t = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          t[_key7] = arguments[_key7];
        }

        return this.forEach(function (s) {
          return e$1.apply(void 0, [s].concat(t));
        }), this;
      }
      /**
       * Adds a class or classes to all array elements
       */

    }, {
      key: "addClass",
      value: function addClass() {
        for (var _len8 = arguments.length, t = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
          t[_key8] = arguments[_key8];
        }

        return this.forEach(function (e) {
          var _e$classList;

          return (_e$classList = e.classList).add.apply(_e$classList, t);
        }), this;
      }
      /**
       * Removes a class or classes from all array elements
       */

    }, {
      key: "removeClass",
      value: function removeClass() {
        for (var _len9 = arguments.length, t = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
          t[_key9] = arguments[_key9];
        }

        return this.forEach(function (e) {
          var _e$classList2;

          return (_e$classList2 = e.classList).remove.apply(_e$classList2, t);
        }), this;
      }
      /**
       * Adds or removes a class for each element of the array, depending on its presence
       */

    }, {
      key: "toggleClass",
      value: function toggleClass(t) {
        return this.forEach(function (e) {
          return e.classList.toggle(t);
        }), this;
      }
      /**
       * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
       */

    }, {
      key: "hasClass",
      value: function hasClass(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;

        if (e) {
          // The presence of a class for each element of the set
          var _e3 = 0;
          return this.forEach(function (s) {
            s.classList.contains(t) && _e3++;
          }), _e3 === this.length;
        } // the presence of a class for at least one element of the set


        var _iterator2 = _createForOfIteratorHelper(this),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _e4 = _step2.value;
            if (_e4.classList.contains(t)) return !0;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return !1;
      }
      /**
       * Calls the "addEventListener" method for each set item
       */

    }, {
      key: "addEventListener",
      value: function addEventListener(t, e, s) {
        return this.forEach(function (_r5) {
          return _r5.addEventListener(t, e, s);
        }), this;
      }
      /**
       * Calls the "removeEventListener" method for each set item
       */

    }, {
      key: "removeEventListener",
      value: function removeEventListener(t, e, s) {
        return this.forEach(function (_r6) {
          return _r6.removeEventListener(t, e, s);
        }), this;
      }
      /**
       * Calls dispatchEvent with an event of the specified type for each item in the set
       */

    }, {
      key: "fireEvent",
      value: function fireEvent(t) {
        return this.forEach(function (e) {
          return e.dispatchEvent(new Event(t));
        }), this;
      }
      /**
       * Sets the style attribute property passed in the object by key
       */

    }, {
      key: "css",
      value: function css(t) {
        return this.forEach(function (e) {
          return Object.keys(t).forEach(function (s) {
            return e.style[s] = t[s];
          });
        }), this;
      }
      /**
       * Sets the attribute property passed in the object by key
       */

    }, {
      key: "attr",
      value: function attr(t) {
        return this.forEach(function (e) {
          return Object.keys(t).forEach(function (s) {
            return e.setAttribute(s, t[s]);
          });
        }), this;
      }
      /**
       * Recursively calls each passed function in a new setTimeout(() => {}, 0)
       */

    }, {
      key: "nextTick",
      value: function nextTick() {
        return s.apply(void 0, arguments), this;
      }
    }]);

    return r;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function n$1() {
    for (var _len10 = arguments.length, e = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      e[_key10] = arguments[_key10];
    }

    return e instanceof r ? e : _construct(r, _toConsumableArray(t.apply(void 0, [document].concat(e))));
  }

  var e = {
    animationstart: "__mutationStartListener",
    animationcancel: "__mutationCancelListener",
    animationend: "__mutationEndListener",
    animationiteration: "__mutationIterationListener",
    transitionstart: "__mutationStartListener",
    transitioncancel: "__mutationCancelListener",
    transitionend: "__mutationEndListener",
    transitionrun: "__mutationRunListener"
  },
      n = Object.keys(e);

  var _default = /*#__PURE__*/function () {
    function _default(s) {
      var _this = this;

      _classCallCheck(this, _default);

      _defineProperty(this, "els", void 0);

      _defineProperty(this, "emitter", void 0);

      _defineProperty(this, "allow", void 0);

      _defineProperty(this, "pending", !1);

      this.emitter = new _default$1(s.on), this.els = Array.isArray(s.el) ? n$1.apply(void 0, _toConsumableArray(s.el)) : n$1(s.el);
      var r = s.allow,
          a = s.disallow;
      r && r.length > 0 ? this.allow = (Array.isArray(r) ? r : [r]).filter(function (t) {
        return n.includes(t.toLowerCase());
      }) : a && a.length > 0 ? this.allow = (Array.isArray(a) ? a : [a]).filter(function (t) {
        return n.includes(t.toLowerCase());
      }) : this.allow = n, // if (config.allow) {
      //   this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
      // } else if (config.disallow && config.disallow.length > 0) {
      //   this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
      // } else {
      //   this.allow = events;
      // }
      Object.keys(e).forEach(function (t) {
        return _this[e[t]] = _this[e[t]].bind(_this);
      }), this.els.forEach(function (t) {
        return _this.allow.forEach(function (i) {
          return t.addEventListener(i, _this[e[i]]);
        });
      });
    }

    _createClass(_default, [{
      key: "__mutationStartListener",
      value: function __mutationStartListener(t) {
        this.pending = !0, this.emitter.emit("start", t);
      }
    }, {
      key: "__mutationCancelListener",
      value: function __mutationCancelListener(t) {
        this.emitter.emit("cancel", t), this.pending = !1;
      }
    }, {
      key: "__mutationEndListener",
      value: function __mutationEndListener(t) {
        this.emitter.emit("end", t), this.pending = !1;
      }
    }, {
      key: "__mutationIterationListener",
      value: function __mutationIterationListener(t) {
        this.emitter.emit("iteration", t);
      }
    }, {
      key: "__mutationRunListener",
      value: function __mutationRunListener(t) {
        this.pending = !0, this.emitter.emit("run", t);
      }
    }, {
      key: "addEvent",
      value: function addEvent(t) {
        var _this2 = this;

        n.includes(t) && (this.allow.push(t), this.els.forEach(function (i) {
          return i.addEventListener(t, _this2[e[t]]);
        }));
      }
    }, {
      key: "removeEvent",
      value: function removeEvent(t) {
        var _this3 = this;

        n.includes(t) && this.allow.includes(t) && (this.allow.splice(this.allow.indexOf(t)), this.els.forEach(function (i) {
          return i.removeEventListener(t, _this3[e[t]]);
        }));
      }
    }, {
      key: "on",
      value: function on(t, i) {
        this.emitter.subscribe(t, i);
      }
    }]);

    return _default;
  }();

  var animEventsPostfix = {
      animation: ['start', 'cancel', 'end', 'iteration'],
      transition: ['start', 'cancel', 'end', 'run']
  };
  var Tab = /** @class */ (function () {
      function class_1(tabs, config) {
          this.pending = false;
          this.tabs = tabs;
          this.helper = config.helper;
          this.config = {
              el: config.el,
              $el: _(config.el),
              index: config.index,
              current: config.current
          };
          var mutation = this.tabs.config.mutation;
          if (mutation) {
              this.anim = new _default({
                  el: this.config.el,
                  allow: animEventsPostfix[mutation].map(function (item) { return mutation + item; })
              });
          }
      }
      // _worked__change(hide: boolean): void {
      //   const cls = this.tabs.config.classes;
      //   if (this.tabs.config.isMutable) {
      //     const mutation = this.tabs.config.mutation as MutationType;
      //     this.pending = true;
      //     if (hide) {
      //       this.anim!.emitter.once('end', () => {
      //         this.config.current = false;
      //         this.config.$el.removeClass(cls.tabs.active, cls.tabs[mutation].show, cls.tabs[mutation].hide);
      //         this.pending = false;
      //         this.helper.cb && this.helper.cb(this);
      //       });
      //       this.config.$el.addClass(cls.tabs[mutation].hide);
      //     } else {
      //       this.anim!.emitter.once('end', () => {
      //         this.config.current = true;
      //         this.pending = false;
      //         this.helper.cb && this.helper.cb(this);
      //       })
      //       this.config.$el.addClass(cls.tabs.active);
      //       nextTick(() => {
      //         this.config.$el.addClass(cls.tabs[mutation].show);
      //       })
      //     }
      //   } else {
      //     this.config.current = !hide;
      //     this.config.$el[(hide ? 'remove' : 'add') + 'Class'](cls.tabs.active);
      //     this.helper.cb && this.helper.cb(this);
      //   }
      // }
      class_1.prototype.change = function (hide) {
          var _this = this;
          var cls = this.tabs.config.classes;
          if (this.tabs.config.isMutable) {
              this.tabs.config.mutation;
              var el_1 = this.config.el;
              this.pending = true;
              if (hide) {
                  animate({
                      animInst: this.anim,
                      clsFrom: 'x-tab--t-hide-from',
                      clsActive: 'x-tab--t-hide-active',
                      clsTo: 'x-tab--t-hide-to'
                  }, function () {
                      el_1.classList.remove('x-tabs__tab--active');
                      _this.config.current = false;
                      _this.pending = false;
                      _nextTick(function () { return _this.helper.cb && _this.helper.cb(_this); });
                  });
              }
              else {
                  el_1.classList.add('x-tabs__tab--active');
                  animate({
                      animInst: this.anim,
                      clsFrom: 'x-tab--t-show-from',
                      clsActive: 'x-tab--t-show-active',
                      clsTo: 'x-tab--t-show-to'
                  }, function () {
                      _this.config.current = true;
                      _this.pending = false;
                      _nextTick(function () { return _this.helper.cb && _this.helper.cb(_this); });
                  });
              }
          }
          else {
              this.config.current = !hide;
              this.config.$el[(hide ? 'remove' : 'add') + 'Class'](cls.tabs.active);
              this.helper.cb && this.helper.cb(this);
          }
      };
      class_1.prototype.hide = function () {
          this.change(true);
      };
      class_1.prototype.show = function () {
          this.change(false);
      };
      return class_1;
  }());

  var Helper = /** @class */ (function () {
      function class_1() {
      }
      return class_1;
  }());

  var _a;
  var defaultClasses = {
      transition: 'x-tabs--transition',
      animation: 'x-tabs--animation',
      tabs: {
          wrapper: 'x-tabs__tabs',
          tab: 'x-tabs__tab',
          active: 'x-tabs__tab--active',
          transition: {
              hide: {
                  from: 'x-tab--t-hide-from',
                  active: 'x-tab--t-hide-active',
                  to: 'x-tab--t-hide-to'
              },
              show: {
                  from: 'x-tab--t-show-from',
                  active: 'x-tab--t-show-active',
                  to: 'x-tab--t-show-to'
              }
          },
          animation: {
              hide: {
                  from: 'x-tab--a-hide-from',
                  active: 'x-tab--a-hide-active',
                  to: 'x-tab--a-hide-to'
              },
              show: {
                  from: 'x-tab--a-show-from',
                  active: 'x-tab--a-show-active',
                  to: 'x-tab--a-show-to'
              }
          }
      }
  };
  var Tabs = (_a = /** @class */ (function () {
          function class_1(config) {
              var e_1, _a;
              this.tabs = [];
              this.plugins = [];
              this.emitter = new _default$1(config.on);
              this.config = {
                  el: config.el,
                  $el: _(config.el),
                  mutation: config.mutation || false,
                  isMutable: !!config.mutation,
                  current: 0,
                  pendingTab: undefined,
                  classes: config.classes ?
                      deepmerge(defaultClasses, config.classes) :
                      defaultClasses
              };
              this.helper = new Helper;
              if (this.config.isMutable) {
                  this.config.el.classList.add('x-tabs--' + this.config.mutation);
              }
              var $tabsWrap = _('.x-tabs__tabs');
              var $tabs = $tabsWrap.get('.x-tabs__tab');
              var currentIndex;
              for (var i = 0, l = $tabs.length; i < l; i++) {
                  if ($tabs[i].classList.contains('x-tabs__tab--active')) {
                      currentIndex = i;
                  }
              }
              for (var i = 0, l = $tabs.length; i < l; i++) {
                  var el = $tabs[i];
                  var tab = new Tab(this, {
                      el: el,
                      index: i,
                      current: i === currentIndex,
                      helper: this.helper
                  });
                  this.tabs.push(tab);
              }
              this.config.current = currentIndex || 0;
              Tabs.instances.push(this);
              if (config.plugins && Array.isArray(config.plugins)) {
                  try {
                      for (var _b = __values(config.plugins), _c = _b.next(); !_c.done; _c = _b.next()) {
                          var plugin = _c.value;
                          if (plugin instanceof Plugin) {
                              this.plugins.push(new plugin(this));
                          }
                          else if (isObject(plugin)) {
                              this.plugins.push(new plugin.ctor(this, plugin.config));
                          }
                      }
                  }
                  catch (e_1_1) { e_1 = { error: e_1_1 }; }
                  finally {
                      try {
                          if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                      }
                      finally { if (e_1) throw e_1.error; }
                  }
              }
              this.emitter.emit('init', this, this.config.current);
          }
          class_1.prototype.goTo = function (index) {
              var _this = this;
              if (!this.tabs[index]) {
                  return false;
              }
              var current = this.config.current;
              this.emitter.emit('beforeChange', this, current, index);
              this.config.current = index;
              if (this.config.isMutable) {
                  if (this.config.pendingTab) {
                      this.helper.cb = function (tab) {
                          if (tab.config.current) {
                              _this.helper.cb = function (tab) {
                                  _this.helper.cb = function () {
                                      _this.config.pendingTab = undefined;
                                      _this.helper.cb = undefined;
                                      _this.emitter.emit('afterChange', _this, current, index);
                                  };
                                  _this.tabs[index].show();
                              };
                              tab.hide();
                          }
                          else {
                              _this.helper.cb = function () {
                                  _this.config.pendingTab = undefined;
                                  _this.helper.cb = undefined;
                                  _this.emitter.emit('afterChange', _this, current, index);
                              };
                              _this.tabs[index].show();
                          }
                      };
                  }
                  else {
                      this.config.pendingTab = this.tabs[current];
                      this.helper.cb = function (tab) {
                          _this.helper.cb = function () {
                              _this.config.pendingTab = undefined;
                              _this.helper.cb = undefined;
                              _this.emitter.emit('afterChange', _this, current, index);
                          };
                          _this.tabs[index].show();
                      };
                      this.tabs[current].hide();
                  }
              }
              else {
                  this.helper.cb = function () {
                      _this.helper.cb = undefined;
                      _this.helper.cb = function () { return _this.emitter.emit('afterChange', _this, current, index); };
                      _this.tabs[index].show();
                  };
                  this.tabs[current].hide();
              }
              return true;
          };
          class_1.prototype.prev = function () {
              return this.goTo(this.config.current - 1);
          };
          class_1.prototype.next = function () {
              return this.goTo(this.config.current + 1);
          };
          return class_1;
      }()),
      _a.instances = [],
      _a);

  var NavigationItem = /** @class */ (function () {
      function class_1(plugin, config) {
          var _this = this;
          this.plugin = plugin;
          this.config = {
              el: config.el,
              index: config.index,
              pending: false
          };
          console.log(this.config.el);
          // this.click = this.click.bind(this);
          this.config.el.addEventListener('click', function () {
              _this.click();
          });
          this.anim = new _default({
              el: this.config.el,
              allow: [
                  'transitionend',
                  'animationend',
              ]
          });
          this.config.el;
      }
      class_1.prototype.click = function () {
          this.anim.emitter.once('end', function () {
          });
          animate({
              animInst: this.anim,
              clsFrom: 'x-nav--t-activate-from',
              clsActive: 'x-nav--t-activate-active',
              clsTo: 'x-nav--t-activate-to'
          });
          this.plugin.tabs.goTo(this.config.index);
      };
      return class_1;
  }());

  var Navigation = /** @class */ (function (_super) {
      __extends(class_1, _super);
      function class_1(tabs) {
          var _this = _super.call(this, tabs) || this;
          _this.items = [];
          var tabsCfgClasses = _this.tabs.config.classes;
          tabsCfgClasses.navs = deepmerge({
              wrapper: 'x-tabs__navs',
              nav: 'x-tabs__nav',
              active: 'x-tabs__nav--active',
              transition: {
                  show: 'x-tabs__nav--show',
                  hide: 'x-tabs__nav--hide'
              },
              animation: {
                  show: 'x-tabs__nav--show',
                  hide: 'x-tabs__nav--hide'
              }
          }, tabsCfgClasses.navs || {});
          _this.classes = tabsCfgClasses.navs;
          tabs.config.navigation;
          // this.mutation = cfgFromTabs ? cfgFromTabs.mutation ?
          _this.helper = new Helper;
          // this.tabs.config.$el.get<HTMLElement>(this.classes.wrapper);
          var $wrapper = _(_this.tabs.config.$el.get('.' + _this.classes.wrapper)[0]);
          var $els = $wrapper.get('.' + _this.classes.nav);
          for (var i = 0, l = $els.length; i < l; i++) {
              _this.items.push(new NavigationItem(_this, {
                  el: $els[i],
                  index: i
              }));
          }
          return _this;
      }
      class_1.prototype.click = function (index) {
          if (!this.items[index]) {
              return false;
          }
          var current = this.tabs.config.current;
          this.tabs.emitter.emit('beforeNavClick', this, current, index);
          return true;
      };
      return class_1;
  }(Plugin));

  var tabs = new Tabs({
      el: _('.x-tabs')[0],
      mutation: 'transition',
      on: {
          init: function (tabs, currentIndex) {
              console.log('init', currentIndex);
          },
          beforeChange: function (tabs, prevIndex, nextIndex) {
              console.log('on beforeChange', prevIndex, nextIndex);
          },
          afterChange: function (tabs, prevIndex, nextIndex) {
              console.log('on afterChange', prevIndex, nextIndex);
          }
      },
      plugins: [
          {
              ctor: Navigation,
              config: {
                  el: _('.x-tabs__navs')[0]
              }
          }
      ],
      classes: {
      // tabs: {
      //   transition: {
      //     hide: {
      //     }
      //   }
      // }
      }
  });
  _('.btn-prev').addEventListener('click', function () { return tabs.prev(); });
  _('.btn-next').addEventListener('click', function () { return tabs.next(); });
  window.tabs = tabs;
  // console.log(tabs);
  console.log('entry result', tabs);

}());
//# sourceMappingURL=tabs.dev.js.map
