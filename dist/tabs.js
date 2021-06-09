var Tabs = function() {
    "use strict";
    function t(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function e(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    function n(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    }
    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    function i(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && o(t, e);
    }
    function a(t) {
        return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
    }
    function o(t, e) {
        return (o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t;
        })(t, e);
    }
    function s() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
            !0;
        } catch (t) {
            return !1;
        }
    }
    function c(t, e, n) {
        return (c = s() ? Reflect.construct : function(t, e, n) {
            var r = [ null ];
            r.push.apply(r, e);
            var i = new (Function.bind.apply(t, r));
            return n && o(i, n.prototype), i;
        }).apply(null, arguments);
    }
    function u(t) {
        var e = "function" == typeof Map ? new Map : void 0;
        return (u = function(t) {
            if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t;
            var n;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, r);
            }
            function r() {
                return c(t, arguments, a(this).constructor);
            }
            return r.prototype = Object.create(t.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(r, t);
        })(t);
    }
    function l(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t;
        }(t) : e;
    }
    function h(t) {
        var e = s();
        return function() {
            var n, r = a(t);
            if (e) {
                var i = a(this).constructor;
                n = Reflect.construct(r, arguments, i);
            } else n = r.apply(this, arguments);
            return l(this, n);
        };
    }
    function f(t) {
        return function(t) {
            if (Array.isArray(t)) return y(t);
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
        }(t) || v(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
    }
    function v(t, e) {
        if (t) {
            if ("string" == typeof t) return y(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
        }
    }
    function y(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
    }
    function p(t, e) {
        var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
        if (!n) {
            if (Array.isArray(t) || (n = v(t)) || e && t && "number" == typeof t.length) {
                n && (t = n);
                var r = 0, i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[r++]
                        };
                    },
                    e: function(t) {
                        throw t;
                    },
                    f: i
                };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var a, o = !0, s = !1;
        return {
            s: function() {
                n = n.call(t);
            },
            n: function() {
                var t = n.next();
                return o = t.done, t;
            },
            e: function(t) {
                s = !0, a = t;
            },
            f: function() {
                try {
                    o || null == n.return || n.return();
                } finally {
                    if (s) throw a;
                }
            }
        };
    }
    var d =  function() {
        /**
     * Event list
     */
        /**
     * Create Emitter
     */
        function e() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            for (var i in t(this, e), r(this, "events", {}), n) n[i] && this.subscribe(i, n[i]);
        }
        /**
     * Creates a key for the event and subscribes the passed callback to it.
     */        return n(e, [ {
            key: "subscribe",
            value: function(t, e) {
                var n = this;
                this.has(t) || (this.events[t] = []);
                var r = [];
                if (Array.isArray(e)) {
                    var i, a = p(e);
                    try {
                        for (a.s(); !(i = a.n()).done; ) {
                            var o = i.value;
                            r.push.apply(r, f(this.subscribe(t, o)));
                        }
                    } catch (t) {
                        a.e(t);
                    } finally {
                        a.f();
                    }
                } else this.events[t].push(e), r.push((function() {
                    return n.removeListener(t, e);
                }));
                return r;
            }
            /**
       * Unsubscribes all callback functions from the event and removes the event
       * key.
       */        }, {
            key: "unsubscribe",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                for (var r = 0, i = e; r < i.length; r++) {
                    var a = i[r];
                    this.events[a] && delete this.events[a];
                }
            }
            /**
       * Removes a specific event key callback function.
       */        }, {
            key: "removeListener",
            value: function(t, e) {
                // if (typeof this.events[key] === 'object') {
                if (Array.isArray(this.events[t])) {
                    var n = this.events[t].indexOf(e);
                    n > -1 && this.events[t].splice(n, 1);
                }
            }
            /**
       * Calls the callback function only once, and then removes it.
       */        }, {
            key: "once",
            value: function(t, e) {
                var n = this.subscribe(t, (function() {
                    n[0](), Array.isArray(e) ? e.forEach((function(t) {
                        return t();
                    })) : e();
                }));
            }
            /**
       * Checks for an event by key.
       * (Doesn't check for callback functions)
       */        }, {
            key: "has",
            value: function(t) {
                return !!this.events[t];
            }
            /**
       * Returns the number of callback functions for the event key or "false" if
       * there is no key
       */        }, {
            key: "listenerCount",
            value: function(t) {
                return !!this.events.hasOwnProperty(t) && this.events[t].length;
            }
            /**
       * Calls all callback functions on events using the event key.
       */        }, {
            key: "emit",
            value: function(t) {
                for (var e = this.events[t], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                if (e) {
                    var a, o = p(e);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var s = a.value;
                            s.apply(void 0, r);
                        }
                    } catch (t) {
                        o.e(t);
                    } finally {
                        o.f();
                    }
                }
            }
            /**
       * Just like "emit" calls all callback functions. However, the callback must
       * return a boolean value, which determines whether or not the next callback
       * will execute.
       * As a result, it returns the result of the last executed callback function.
       */        }, {
            key: "validateEmit",
            value: function(t) {
                var e = this.events[t];
                if (!e) return !1;
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                var a, o = p(e);
                try {
                    for (o.s(); !(a = o.n()).done; ) {
                        var s = a.value;
                        if (!s.apply(void 0, r)) return !1;
                    }
                } catch (t) {
                    o.e(t);
                } finally {
                    o.f();
                }
                return !0;
            }
            /**
       * Just like "emit" calls all callbacks, but unlike "emit" it passes the
       * result of the previous callback to the next one as an argument.
       * As aresult, it will return the result of the last callback.
       */        }, {
            key: "seriesEmit",
            value: function(t) {
                var e = this.events[t];
                if (e) {
                    for (var n, r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) i[a - 1] = arguments[a];
                    for (var o = 0; o < e.length; o++) n = 0 === o ? e[o].apply(e, i) : e[o](n);
                    return n;
                }
            }
        } ]), e;
    }();
    function b(t) {
        for (var e = [], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        for (var a = 0, o = r; a < o.length; a++) {
            var s = o[a];
            if ("string" == typeof s) {
                var c = t.querySelectorAll(s);
                e.push.apply(e, f(c));
            } else s instanceof Element && e.push(s);
        }
        return e;
    }
    function g(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        for (var i = 0, a = n; i < a.length; i++) {
            var o = a[i];
            Array.isArray(o) ? g.apply(void 0, [ t ].concat(f(o))) : t.append(o);
        }
    }
    function m(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        setTimeout((function() {
            e(), t.length && w.apply(void 0, f(t));
        }), n);
    }
    function w() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = e.shift();
        return "function" == typeof r ? m(e, r) : Array.isArray(r) && m(e, r[0], r[1]), 
        this;
    }
    var A =  function(e) {
        i(a, e);
        var r = h(a);
        function a() {
            t(this, a);
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return r.call.apply(r, [ this ].concat(n));
        }
        /**
     * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
     */        return n(a, [ {
            key: "get",
            value: function() {
                for (var t = new a, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                if (this.length) {
                    var i, o = p(this);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            var s = i.value;
                            t.push.apply(t, f(b.apply(void 0, [ s ].concat(n))));
                        }
                    } catch (t) {
                        o.e(t);
                    } finally {
                        o.f();
                    }
                } else t.push.apply(t, f(b.apply(void 0, [ document ].concat(n))));
                return t;
            }
            /**
       * Returns a new instance with new created elements according to the passed parameters
       */        }, {
            key: "create",
            value: function() {
                for (var t = new a, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                for (var i = 0, o = n; i < o.length; i++) {
                    var s = o[i];
                    if ("string" == typeof s) t.push(document.createElement(s)); else if (s instanceof Object) {
                        var c = document.createElement(s.tagName || "div");
                        s.content && (Array.isArray(s.content) ? g.apply(void 0, [ c ].concat(f(s.content))) : g(c, s.content)), 
                        t.push(c);
                    }
                }
                return t;
            }
            /**
       * Clears the contents of each element in the set and returns the instance itself
       */        }, {
            key: "empty",
            value: function() {
                return this.forEach((function(t) {
                    return t.innerHTML = "";
                })), this
                /**
       * Sets the textContent property for each collection item and returns an instance
       */;
            }
        }, {
            key: "text",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.textContent = t || "";
                })), this
                /**
       * Inserts a set of Node objects or DOMString objects after the last child of each array element
       */;
            }
        }, {
            key: "append",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    return g.apply(void 0, [ t ].concat(e));
                })), this
                /**
       * Adds a class or classes to all array elements
       */;
            }
        }, {
            key: "addClass",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    var n;
                    return (n = t.classList).add.apply(n, e);
                })), this
                /**
       * Removes a class or classes from all array elements
       */;
            }
        }, {
            key: "removeClass",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    var n;
                    return (n = t.classList).remove.apply(n, e);
                })), this
                /**
       * Adds or removes a class for each element of the array, depending on its presence
       */;
            }
        }, {
            key: "toggleClass",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.classList.toggle(t);
                })), this
                /**
       * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
       */;
            }
        }, {
            key: "hasClass",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n = new a;
                if (e) // The presence of a class for each element of the set
                return this.forEach((function(e) {
                    e.classList.contains(t) && n.push(e);
                })), n;
 // the presence of a class for at least one element of the set
                                var r, i = p(this);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var o = r.value;
                        o.classList.contains(t) && n.push(o);
                    }
                } catch (t) {
                    i.e(t);
                } finally {
                    i.f();
                }
                return n;
            }
            /**
       * Calls the "addEventListener" method for each set item
       */        }, {
            key: "addEventListener",
            value: function(t, e, n) {
                return this.forEach((function(r) {
                    return r.addEventListener(t, e, n);
                })), this
                /**
       * Calls the "removeEventListener" method for each set item
       */;
            }
        }, {
            key: "removeEventListener",
            value: function(t, e, n) {
                return this.forEach((function(r) {
                    return r.removeEventListener(t, e, n);
                })), this
                /**
       * Calls dispatchEvent with an event of the specified type for each item in the set
       */;
            }
        }, {
            key: "fireEvent",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.dispatchEvent(new Event(t));
                })), this
                /**
       * Sets the style attribute property passed in the object by key
       */;
            }
        }, {
            key: "css",
            value: function(t) {
                return this.forEach((function(e) {
                    return Object.keys(t).forEach((function(n) {
                        return e.style[n] = t[n];
                    }));
                })), this
                /**
       * Sets the attribute property passed in the object by key
       */;
            }
        }, {
            key: "attr",
            value: function(t) {
                return this.forEach((function(e) {
                    return Object.keys(t).forEach((function(n) {
                        return e.setAttribute(n, t[n]);
                    }));
                })), this
                /**
       * Recursively calls each passed function in a new setTimeout(() => {}, 0)
       */;
            }
        }, {
            key: "nextTick",
            value: function() {
                return w.apply(void 0, arguments), this;
            }
        } ]), a;
    }( u(Array));
    function E() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e instanceof A ? e : c(A, f(b.apply(void 0, [ document ].concat(e))));
    }
    function k(t) {
        return "object" == typeof t && !Array.isArray(t) && null !== t;
    }
    function _(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = void 0 === n.mergeObject || !!n.mergeObject;
        if (k(t) && k(e)) for (var i = 0, a = Object.keys(e); i < a.length; i++) {
            var o = a[i];
            if (r && k(e[o])) t[o] && k(t[o]) || (t[o] = e[o]), _(t[o], e[o]); else if (n.mergeArray && Array.isArray(e[o])) {
                var s;
                if (console.log(o), Array.isArray(t[o])) (s = t[o]).push.apply(s, f(e[o])); else Object.assign(t, {
                    [o]: e[o]
                });
            } else Object.assign(t, {
                [o]: e[o]
            });
        }
        return t;
    }
    function x({animInst: t, clsFrom: // CSSClassAnimations
    e, clsActive: // string
    n, clsTo: // string
    r}, i) {
        t.els.addClass(e), w([ () => t.els.addClass(n), 10 ], [ () => t.els.removeClass(e), 10 ], [ () => {
            t.emitter.once("end", (() => {
                t.els.removeClass(r, n), i && i();
            })), t.els.addClass(r);
        }, 10 ]);
    }
    const L = class {
        tabs;
        constructor(t) {
            this.tabs = t;
        }
    };
    function O(t) {
        for (var e = [], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        for (var a = 0, o = r; a < o.length; a++) {
            var s = o[a];
            if ("string" == typeof s) {
                var c = t.querySelectorAll(s);
                e.push.apply(e, f(c));
            } else s instanceof Element && e.push(s);
        }
        return e;
    }
    function C(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        for (var i = 0, a = n; i < a.length; i++) {
            var o = a[i];
            Array.isArray(o) ? C.apply(void 0, [ t ].concat(f(o))) : t.append(o);
        }
    }
    function j() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var r = e, i = e.shift();
        return i && setTimeout((function() {
            i(), r.length && j.apply(void 0, r);
        }), 0), this;
    }
    var T =  function(e) {
        i(a, e);
        var r = h(a);
        function a() {
            t(this, a);
            for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
            return r.call.apply(r, [ this ].concat(n));
        }
        /**
     * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
     */        return n(a, [ {
            key: "get",
            value: function() {
                for (var t = new a, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                if (this.length) {
                    var i, o = p(this);
                    try {
                        for (o.s(); !(i = o.n()).done; ) {
                            var s = i.value;
                            t.push.apply(t, f(O.apply(void 0, [ s ].concat(n))));
                        }
                    } catch (t) {
                        o.e(t);
                    } finally {
                        o.f();
                    }
                } else t.push.apply(t, f(O.apply(void 0, [ document ].concat(n))));
                return t;
            }
            /**
       * Returns a new instance with new created elements according to the passed parameters
       */        }, {
            key: "create",
            value: function() {
                for (var t = new a, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                for (var i = 0, o = n; i < o.length; i++) {
                    var s = o[i];
                    if ("string" == typeof s) t.push(document.createElement(s)); else if (s instanceof Object) {
                        var c = document.createElement(s.tagName || "div");
                        s.content && (Array.isArray(s.content) ? C.apply(void 0, [ c ].concat(f(s.content))) : C(c, s.content)), 
                        t.push(c);
                    }
                }
                return t;
            }
            /**
       * Clears the contents of each element in the set and returns the instance itself
       */        }, {
            key: "empty",
            value: function() {
                return this.forEach((function(t) {
                    return t.innerHTML = "";
                })), this
                /**
       * Sets the textContent property for each collection item and returns an instance
       */;
            }
        }, {
            key: "text",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.textContent = t || "";
                })), this
                /**
       * Inserts a set of Node objects or DOMString objects after the last child of each array element
       */;
            }
        }, {
            key: "append",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    return C.apply(void 0, [ t ].concat(e));
                })), this
                /**
       * Adds a class or classes to all array elements
       */;
            }
        }, {
            key: "addClass",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    var n;
                    return (n = t.classList).add.apply(n, e);
                })), this
                /**
       * Removes a class or classes from all array elements
       */;
            }
        }, {
            key: "removeClass",
            value: function() {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return this.forEach((function(t) {
                    var n;
                    return (n = t.classList).remove.apply(n, e);
                })), this
                /**
       * Adds or removes a class for each element of the array, depending on its presence
       */;
            }
        }, {
            key: "toggleClass",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.classList.toggle(t);
                })), this
                /**
       * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
       */;
            }
        }, {
            key: "hasClass",
            value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e) {
                    // The presence of a class for each element of the set
                    var n = 0;
                    return this.forEach((function(e) {
                        e.classList.contains(t) && n++;
                    })), n === this.length;
                }
 // the presence of a class for at least one element of the set
                                var r, i = p(this);
                try {
                    for (i.s(); !(r = i.n()).done; ) {
                        var a = r.value;
                        if (a.classList.contains(t)) return !0;
                    }
                } catch (t) {
                    i.e(t);
                } finally {
                    i.f();
                }
                return !1;
            }
            /**
       * Calls the "addEventListener" method for each set item
       */        }, {
            key: "addEventListener",
            value: function(t, e, n) {
                return this.forEach((function(r) {
                    return r.addEventListener(t, e, n);
                })), this
                /**
       * Calls the "removeEventListener" method for each set item
       */;
            }
        }, {
            key: "removeEventListener",
            value: function(t, e, n) {
                return this.forEach((function(r) {
                    return r.removeEventListener(t, e, n);
                })), this
                /**
       * Calls dispatchEvent with an event of the specified type for each item in the set
       */;
            }
        }, {
            key: "fireEvent",
            value: function(t) {
                return this.forEach((function(e) {
                    return e.dispatchEvent(new Event(t));
                })), this
                /**
       * Sets the style attribute property passed in the object by key
       */;
            }
        }, {
            key: "css",
            value: function(t) {
                return this.forEach((function(e) {
                    return Object.keys(t).forEach((function(n) {
                        return e.style[n] = t[n];
                    }));
                })), this
                /**
       * Sets the attribute property passed in the object by key
       */;
            }
        }, {
            key: "attr",
            value: function(t) {
                return this.forEach((function(e) {
                    return Object.keys(t).forEach((function(n) {
                        return e.setAttribute(n, t[n]);
                    }));
                })), this
                /**
       * Recursively calls each passed function in a new setTimeout(() => {}, 0)
       */;
            }
        }, {
            key: "nextTick",
            value: function() {
                return j.apply(void 0, arguments), this;
            }
        } ]), a;
    }( u(Array));
    function S() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return e instanceof T ? e : c(T, f(O.apply(void 0, [ document ].concat(e))));
    }
    var I = {
        animationstart: "__mutationStartListener",
        animationcancel: "__mutationCancelListener",
        animationend: "__mutationEndListener",
        animationiteration: "__mutationIterationListener",
        transitionstart: "__mutationStartListener",
        transitioncancel: "__mutationCancelListener",
        transitionend: "__mutationEndListener",
        transitionrun: "__mutationRunListener"
    }, M = Object.keys(I), R =  function() {
        function e(n) {
            var i = this;
            t(this, e), r(this, "els", void 0), r(this, "emitter", void 0), r(this, "allow", void 0), 
            r(this, "pending", !1), this.emitter = new d(n.on), this.els = Array.isArray(n.el) ? S.apply(void 0, f(n.el)) : S(n.el);
            var a = n.allow, o = n.disallow;
            a && a.length > 0 ? this.allow = (Array.isArray(a) ? a : [ a ]).filter((function(t) {
                return M.includes(t.toLowerCase());
            })) : o && o.length > 0 ? this.allow = (Array.isArray(o) ? o : [ o ]).filter((function(t) {
                return M.includes(t.toLowerCase());
            })) : this.allow = M, // if (config.allow) {
            //   this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
            // } else if (config.disallow && config.disallow.length > 0) {
            //   this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
            // } else {
            //   this.allow = events;
            // }
            Object.keys(I).forEach((function(t) {
                return i[I[t]] = i[I[t]].bind(i);
            })), this.els.forEach((function(t) {
                return i.allow.forEach((function(e) {
                    return t.addEventListener(e, i[I[e]]);
                }));
            }));
        }
        return n(e, [ {
            key: "__mutationStartListener",
            value: function(t) {
                this.pending = !0, this.emitter.emit("start", t);
            }
        }, {
            key: "__mutationCancelListener",
            value: function(t) {
                this.emitter.emit("cancel", t), this.pending = !1;
            }
        }, {
            key: "__mutationEndListener",
            value: function(t) {
                this.emitter.emit("end", t), this.pending = !1;
            }
        }, {
            key: "__mutationIterationListener",
            value: function(t) {
                this.emitter.emit("iteration", t);
            }
        }, {
            key: "__mutationRunListener",
            value: function(t) {
                this.pending = !0, this.emitter.emit("run", t);
            }
        }, {
            key: "addEvent",
            value: function(t) {
                var e = this;
                M.includes(t) && (this.allow.push(t), this.els.forEach((function(n) {
                    return n.addEventListener(t, e[I[t]]);
                })));
            }
        }, {
            key: "removeEvent",
            value: function(t) {
                var e = this;
                M.includes(t) && this.allow.includes(t) && (this.allow.splice(this.allow.indexOf(t)), 
                this.els.forEach((function(n) {
                    return n.removeEventListener(t, e[I[t]]);
                })));
            }
        }, {
            key: "on",
            value: function(t, e) {
                this.emitter.subscribe(t, e);
            }
        } ]), e;
    }();
    const P = {
        animation: [ "start", "cancel", "end", "iteration" ],
        transition: [ "start", "cancel", "end", "run" ]
    }, F = class {
        tabs;
        config;
        pending=!1;
        anim;
        helper;
        constructor(t, e) {
            this.tabs = t, this.helper = e.helper, this.config = {
                el: e.el,
                $el: E(e.el),
                index: e.index,
                current: e.current
            };
            const n = this.tabs.config.mutation;
            n && (this.anim = new R({
                el: this.config.el,
                allow: P[n].map((t => n + t))
            }));
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
        change(t) {
            const e = this.tabs.config.classes;
            if (this.tabs.config.isMutable) {
                this.tabs.config.mutation;
                const e = this.config.el;
                this.pending = !0, t ? x({
                    animInst: this.anim,
                    clsFrom: "x-tab--t-hide-from",
                    clsActive: "x-tab--t-hide-active",
                    clsTo: "x-tab--t-hide-to"
                }, (() => {
                    e.classList.remove("x-tabs__tab--active"), this.config.current = !1, this.pending = !1, 
                    w((() => this.helper.cb && this.helper.cb(this)));
                })) : (e.classList.add("x-tabs__tab--active"), x({
                    animInst: this.anim,
                    clsFrom: "x-tab--t-show-from",
                    clsActive: "x-tab--t-show-active",
                    clsTo: "x-tab--t-show-to"
                }, (() => {
                    this.config.current = !0, this.pending = !1, w((() => this.helper.cb && this.helper.cb(this)));
                })));
            } else this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](e.tabs.active), 
            this.helper.cb && this.helper.cb(this);
        }
        hide() {
            this.change(!0);
        }
        show() {
            this.change(!1);
        }
    }, $ = {
        transition: "x-tabs--transition",
        animation: "x-tabs--animation",
        tabs: {
            wrapper: "x-tabs__tabs",
            tab: "x-tabs__tab",
            active: "x-tabs__tab--active",
            transition: {
                hide: {
                    from: "x-tab--t-hide-from",
                    active: "x-tab--t-hide-active",
                    to: "x-tab--t-hide-to"
                },
                show: {
                    from: "x-tab--t-show-from",
                    active: "x-tab--t-show-active",
                    to: "x-tab--t-show-to"
                }
            },
            animation: {
                hide: {
                    from: "x-tab--a-hide-from",
                    active: "x-tab--a-hide-active",
                    to: "x-tab--a-hide-to"
                },
                show: {
                    from: "x-tab--a-show-from",
                    active: "x-tab--a-show-active",
                    to: "x-tab--a-show-to"
                }
            }
        }
    }, q = class {
        static instances=[];
        config;
        emitter;
        tabs=[];
        helper;
        plugins=[];
        constructor(t) {
            this.emitter = new d(t.on), this.config = {
                el: t.el,
                $el: E(t.el),
                mutation: t.mutation || !1,
                isMutable: !!t.mutation,
                current: 0,
                pendingTab: void 0,
                classes: t.classes ? _($, t.classes) : $
            }, this.helper = new class {
                cb;
            }, this.config.isMutable && this.config.el.classList.add("x-tabs--" + this.config.mutation);
            const e = E(".x-tabs__tabs").get(".x-tabs__tab");
            let n;
            for (let t = 0, r = e.length; t < r; t++) e[t].classList.contains("x-tabs__tab--active") && (n = t);
            for (let t = 0, r = e.length; t < r; t++) {
                const r = e[t], i = new F(this, {
                    el: r,
                    index: t,
                    current: t === n,
                    helper: this.helper
                });
                this.tabs.push(i);
            }
            if (this.config.current = n || 0, q.instances.push(this), t.plugins && Array.isArray(t.plugins)) for (const e of t.plugins) e instanceof L ? this.plugins.push(new e(this)) : (r = e) && "object" == typeof r && null !== r && this.plugins.push(new e.ctor(this, e.config));
            var r;
            this.emitter.emit("init", this, this.config.current);
        }
        goTo(t) {
            if (!this.tabs[t]) return !1;
            const e = this.config.current;
            return this.emitter.emit("beforeChange", this, e, t), this.config.current = t, this.config.isMutable ? this.config.pendingTab ? this.helper.cb = n => {
                n.config.current ? (this.helper.cb = n => {
                    this.helper.cb = () => {
                        this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, e, t);
                    }, this.tabs[t].show();
                }, n.hide()) : (this.helper.cb = () => {
                    this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, e, t);
                }, this.tabs[t].show());
            } : (this.config.pendingTab = this.tabs[e], this.helper.cb = n => {
                this.helper.cb = () => {
                    this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, e, t);
                }, this.tabs[t].show();
            }, this.tabs[e].hide()) : (this.helper.cb = () => {
                this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, e, t), 
                this.tabs[t].show();
            }, this.tabs[e].hide()), !0;
        }
        prev() {
            return this.goTo(this.config.current - 1);
        }
        next() {
            return this.goTo(this.config.current + 1);
        }
    };
    return q;
}();
//# sourceMappingURL=tabs.js.map
