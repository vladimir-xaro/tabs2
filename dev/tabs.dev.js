!function() {
  "use strict";
  function t(t, ...e) {
    const s = [];
    for (const i of e) if ("string" == typeof i) {
      const e = t.querySelectorAll(i);
      s.push(...e);
    } else i instanceof Element && s.push(i);
    return s;
  }
  function e(t, ...s) {
    for (const i of s) Array.isArray(i) ? e(t, ...i) : t.append(i);
  }
  function s(t, e, s = 0) {
    setTimeout((() => {
      e(), t.length && i(...t);
    }), s);
  }
  function i(...t) {
    const e = t.shift();
    return "function" == typeof e ? s(t, e) : Array.isArray(e) && s(t, e[0], e[1]), 
    this;
  }
  class n extends Array {
    constructor(...t) {
      super(...t);
    }
    /**
         * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
         */    get(...e) {
      let s = new n;
      if (this.length) for (const i of this) s.push(...t(i, ...e)); else s.push(...t(document, ...e));
      return s;
    }
    /**
         * Returns a new instance with new created elements according to the passed parameters
         */    create(...t) {
      let s = new n;
      for (const i of t) if ("string" == typeof i) s.push(document.createElement(i)); else if (i instanceof Object) {
        const t = document.createElement(i.tagName || "div");
        i.content && (Array.isArray(i.content) ? e(t, ...i.content) : e(t, i.content)), 
        s.push(t);
      }
      return s;
    }
    /**
         * Clears the contents of each element in the set and returns the instance itself
         */    empty() {
      return this.forEach((t => t.innerHTML = "")), this
      /**
         * Sets the textContent property for each collection item and returns an instance
         */;
    }
    text(t) {
      return this.forEach((e => e.textContent = t || "")), this
      /**
         * Inserts a set of Node objects or DOMString objects after the last child of each array element
         */;
    }
    append(...t) {
      return this.forEach((s => e(s, ...t))), this
      /**
         * Adds a class or classes to all array elements
         */;
    }
    addClass(...t) {
      return this.forEach((e => e.classList.add(...t))), this
      /**
         * Removes a class or classes from all array elements
         */;
    }
    removeClass(...t) {
      return this.forEach((e => e.classList.remove(...t))), this
      /**
         * Adds or removes a class for each element of the array, depending on its presence
         */;
    }
    toggleClass(t) {
      return this.forEach((e => e.classList.toggle(t))), this
      /**
         * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
         */;
    }
    hasClass(t, e = !1) {
      let s = new n;
      if (e) // The presence of a class for each element of the set
      return this.forEach((e => {
        e.classList.contains(t) && s.push(e);
      })), s;
      // the presence of a class for at least one element of the set
            for (const e of this) e.classList.contains(t) && s.push(e);
      return s;
    }
    /**
         * Calls the "addEventListener" method for each set item
         */    addEventListener(t, e, s) {
      return this.forEach((i => i.addEventListener(t, e, s))), this
      /**
         * Calls the "removeEventListener" method for each set item
         */;
    }
    removeEventListener(t, e, s) {
      return this.forEach((i => i.removeEventListener(t, e, s))), this
      /**
         * Calls dispatchEvent with an event of the specified type for each item in the set
         */;
    }
    fireEvent(t) {
      return this.forEach((e => e.dispatchEvent(new Event(t)))), this
      /**
         * Sets the style attribute property passed in the object by key
         */;
    }
    css(t) {
      return this.forEach((e => Object.keys(t).forEach((s => e.style[s] = t[s])))), this
      /**
         * Sets the attribute property passed in the object by key
         */;
    }
    attr(t) {
      return this.forEach((e => Object.keys(t).forEach((s => e.setAttribute(s, t[s]))))), 
      this
      /**
         * Recursively calls each passed function in a new setTimeout(() => {}, 0)
         */;
    }
    nextTick(...t) {
      return i(...t), this;
    }
  }
  function r(...e) {
    return e instanceof n ? e : new n(...t(document, ...e));
  }
  class a {
    /**
         * Event list
         */
    events={};
    /**
         * Create Emitter
         */
    constructor(t = {}) {
      for (let e in t) t[e] && this.subscribe(e, t[e]);
    }
    /**
         * Creates a key for the event and subscribes the passed callback to it.
         */    subscribe(t, e) {
      this.has(t) || (this.events[t] = []);
      let s = [];
      if (Array.isArray(e)) for (const i of e) s.push(...this.subscribe(t, i)); else this.events[t].push(e), 
      s.push((() => this.removeListener(t, e)));
      return s;
    }
    /**
         * Unsubscribes all callback functions from the event and removes the event
         * key.
         */    unsubscribe(...t) {
      for (const e of t) this.events[e] && delete this.events[e];
    }
    /**
         * Removes a specific event key callback function.
         */    removeListener(t, e) {
      // if (typeof this.events[key] === 'object') {
      if (Array.isArray(this.events[t])) {
        const s = this.events[t].indexOf(e);
        s > -1 && this.events[t].splice(s, 1);
      }
    }
    /**
         * Calls the callback function only once, and then removes it.
         */    once(t, e) {
      const s = this.subscribe(t, (() => {
        s[0](), Array.isArray(e) ? e.forEach((t => t())) : e();
      }));
    }
    /**
         * Checks for an event by key.
         * (Doesn't check for callback functions)
         */    has(t) {
      return !!this.events[t];
    }
    /**
         * Returns the number of callback functions for the event key or "false" if
         * there is no key
         */    listenerCount(t) {
      return !!this.events.hasOwnProperty(t) && this.events[t].length;
    }
    /**
         * Calls all callback functions on events using the event key.
         */    emit(t, ...e) {
      const s = this.events[t];
      if (s) for (let t of s) t(...e);
    }
    /**
         * Just like "emit" calls all callback functions. However, the callback must
         * return a boolean value, which determines whether or not the next callback
         * will execute.
         * As a result, it returns the result of the last executed callback function.
         */    validateEmit(t, ...e) {
      const s = this.events[t];
      if (!s) return !1;
      for (const t of s) if (!t(...e)) return !1;
      return !0;
    }
    /**
         * Just like "emit" calls all callbacks, but unlike "emit" it passes the
         * result of the previous callback to the next one as an argument.
         * As aresult, it will return the result of the last callback.
         */    seriesEmit(t, ...e) {
      const s = this.events[t];
      if (!s) return;
      let i;
      for (let t = 0; t < s.length; t++) i = 0 === t ? s[t](...e) : s[t](i);
      return i;
    }
  }
  function o(t) {
    return "object" == typeof t && !Array.isArray(t) && null !== t;
  }
  function h(t, e, s = {}) {
    const i = void 0 === s.mergeObject || !!s.mergeObject;
    if (o(t) && o(e)) for (const n of Object.keys(e)) i && o(e[n]) ? (t[n] && o(t[n]) || (t[n] = e[n]), 
    h(t[n], e[n])) : s.mergeArray && Array.isArray(e[n]) ? (console.log(n), Array.isArray(t[n]) ? t[n].push(...e[n]) : Object.assign(t, {
      [n]: e[n]
    })) : Object.assign(t, {
      [n]: e[n]
    });
    return t;
  }
  function c({animInst: t, clsFrom: // CSSClassAnimations
  e, clsActive: // string
  s, clsTo: // string
  n}, r) {
    t.els.addClass(e), i([ () => t.els.addClass(s), 10 ], [ () => t.els.removeClass(e), 10 ], [ () => {
      t.emitter.once("end", (() => {
        t.els.removeClass(n, s), r && r();
      })), t.els.addClass(n);
    }, 10 ]);
  }
  const l = class {
    tabs;
    constructor(t) {
      this.tabs = t;
    }
  };
  function f(t, ...e) {
    const s = [];
    for (const i of e) if ("string" == typeof i) {
      const e = t.querySelectorAll(i);
      s.push(...e);
    } else i instanceof Element && s.push(i);
    return s;
  }
  function u(t, ...e) {
    for (const s of e) Array.isArray(s) ? u(t, ...s) : t.append(s);
  }
  function b(...t) {
    const e = t, s = t.shift();
    return s && setTimeout((() => {
      s(), e.length && b(...e);
    }), 0), this;
  }
  class d extends Array {
    constructor(...t) {
      super(...t);
    }
    /**
         * Returns a new instance containing the elements with the passed selectors and elements (or from the document if the current instance is empty)
         */    get(...t) {
      let e = new d;
      if (this.length) for (const s of this) e.push(...f(s, ...t)); else e.push(...f(document, ...t));
      return e;
    }
    /**
         * Returns a new instance with new created elements according to the passed parameters
         */    create(...t) {
      let e = new d;
      for (const s of t) if ("string" == typeof s) e.push(document.createElement(s)); else if (s instanceof Object) {
        const t = document.createElement(s.tagName || "div");
        s.content && (Array.isArray(s.content) ? u(t, ...s.content) : u(t, s.content)), 
        e.push(t);
      }
      return e;
    }
    /**
         * Clears the contents of each element in the set and returns the instance itself
         */    empty() {
      return this.forEach((t => t.innerHTML = "")), this
      /**
         * Sets the textContent property for each collection item and returns an instance
         */;
    }
    text(t) {
      return this.forEach((e => e.textContent = t || "")), this
      /**
         * Inserts a set of Node objects or DOMString objects after the last child of each array element
         */;
    }
    append(...t) {
      return this.forEach((e => u(e, ...t))), this
      /**
         * Adds a class or classes to all array elements
         */;
    }
    addClass(...t) {
      return this.forEach((e => e.classList.add(...t))), this
      /**
         * Removes a class or classes from all array elements
         */;
    }
    removeClass(...t) {
      return this.forEach((e => e.classList.remove(...t))), this
      /**
         * Adds or removes a class for each element of the array, depending on its presence
         */;
    }
    toggleClass(t) {
      return this.forEach((e => e.classList.toggle(t))), this
      /**
         * Determine if any of the agreed members are assigned to this class. Or, if you pass "true" as the second argument, then each element (default: reqtForAll = false)
         */;
    }
    hasClass(t, e = !1) {
      if (e) {
        // The presence of a class for each element of the set
        let e = 0;
        return this.forEach((s => {
          s.classList.contains(t) && e++;
        })), e === this.length;
      }
      // the presence of a class for at least one element of the set
            for (const e of this) if (e.classList.contains(t)) return !0;
      return !1;
    }
    /**
         * Calls the "addEventListener" method for each set item
         */    addEventListener(t, e, s) {
      return this.forEach((i => i.addEventListener(t, e, s))), this
      /**
         * Calls the "removeEventListener" method for each set item
         */;
    }
    removeEventListener(t, e, s) {
      return this.forEach((i => i.removeEventListener(t, e, s))), this
      /**
         * Calls dispatchEvent with an event of the specified type for each item in the set
         */;
    }
    fireEvent(t) {
      return this.forEach((e => e.dispatchEvent(new Event(t)))), this
      /**
         * Sets the style attribute property passed in the object by key
         */;
    }
    css(t) {
      return this.forEach((e => Object.keys(t).forEach((s => e.style[s] = t[s])))), this
      /**
         * Sets the attribute property passed in the object by key
         */;
    }
    attr(t) {
      return this.forEach((e => Object.keys(t).forEach((s => e.setAttribute(s, t[s]))))), 
      this
      /**
         * Recursively calls each passed function in a new setTimeout(() => {}, 0)
         */;
    }
    nextTick(...t) {
      return b(...t), this;
    }
  }
  function m(...t) {
    return t instanceof d ? t : new d(...f(document, ...t));
  }
  const g = {
    animationstart: "__mutationStartListener",
    animationcancel: "__mutationCancelListener",
    animationend: "__mutationEndListener",
    animationiteration: "__mutationIterationListener",
    transitionstart: "__mutationStartListener",
    transitioncancel: "__mutationCancelListener",
    transitionend: "__mutationEndListener",
    transitionrun: "__mutationRunListener"
  }, v = Object.keys(g);
  class p {
    els;
    emitter;
    allow;
    pending=!1;
    constructor(t) {
      this.emitter = new a(t.on), this.els = Array.isArray(t.el) ? m(...t.el) : m(t.el);
      const e = t.allow, s = t.disallow;
      e && e.length > 0 ? this.allow = (Array.isArray(e) ? e : [ e ]).filter((t => v.includes(t.toLowerCase()))) : s && s.length > 0 ? this.allow = (Array.isArray(s) ? s : [ s ]).filter((t => v.includes(t.toLowerCase()))) : this.allow = v, 
      // if (config.allow) {
      //   this.allow = (Array.isArray(config.allow) ? config.allow : [ config.allow ]).filter(value => events.includes(value));
      // } else if (config.disallow && config.disallow.length > 0) {
      //   this.allow = (Array.isArray(config.disallow) ? config.disallow : [ config.disallow ]).filter(value => events.includes(value));
      // } else {
      //   this.allow = events;
      // }
      Object.keys(g).forEach((t => this[g[t]] = this[g[t]].bind(this))), this.els.forEach((t => this.allow.forEach((e => t.addEventListener(e, this[g[e]])))));
    }
    __mutationStartListener(t) {
      this.pending = !0, this.emitter.emit("start", t);
    }
    __mutationCancelListener(t) {
      this.emitter.emit("cancel", t), this.pending = !1;
    }
    __mutationEndListener(t) {
      this.emitter.emit("end", t), this.pending = !1;
    }
    __mutationIterationListener(t) {
      this.emitter.emit("iteration", t);
    }
    __mutationRunListener(t) {
      this.pending = !0, this.emitter.emit("run", t);
    }
    addEvent(t) {
      v.includes(t) && (this.allow.push(t), this.els.forEach((e => e.addEventListener(t, this[g[t]]))));
    }
    removeEvent(t) {
      v.includes(t) && this.allow.includes(t) && (this.allow.splice(this.allow.indexOf(t)), 
      this.els.forEach((e => e.removeEventListener(t, this[g[t]]))));
    }
    on(t, e) {
      this.emitter.subscribe(t, e);
    }
  }
  const x = {
    animation: [ "start", "cancel", "end", "iteration" ],
    transition: [ "start", "cancel", "end", "run" ]
  }, E = class {
    tabs;
    config;
    pending=!1;
    anim;
    helper;
    constructor(t, e) {
      this.tabs = t, this.helper = e.helper, this.config = {
        el: e.el,
        $el: r(e.el),
        index: e.index,
        current: e.current
      };
      const s = this.tabs.config.mutation;
      s && (this.anim = new p({
        el: this.config.el,
        allow: x[s].map((t => s + t))
      }));
    }
    change(t, e) {
      const s = this.tabs.config.classes;
      if (e && e.force) return this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](s.tabs.active), 
      this.config.$el.removeClass("x-tab--t-hide-from", "x-tab--t-hide-active", "x-tab--t-hide-to", "x-tab--t-show-from", "x-tab--t-show-active", "x-tab--t-show-to"), 
      void (this.helper.cb && this.helper.cb(this));
      if (this.tabs.config.isMutable) {
        this.tabs.config.mutation;
        const e = this.config.el;
        this.pending = !0, t ? c({
          animInst: this.anim,
          clsFrom: "x-tab--t-hide-from",
          clsActive: "x-tab--t-hide-active",
          clsTo: "x-tab--t-hide-to"
        }, (() => {
          e.classList.remove("x-tabs__tab--active"), this.config.current = !1, this.pending = !1, 
          i((() => this.helper.cb && this.helper.cb(this)));
        })) : (e.classList.add("x-tabs__tab--active"), c({
          animInst: this.anim,
          clsFrom: "x-tab--t-show-from",
          clsActive: "x-tab--t-show-active",
          clsTo: "x-tab--t-show-to"
        }, (() => {
          this.config.current = !0, this.pending = !1, i((() => this.helper.cb && this.helper.cb(this)));
        })));
      } else this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](s.tabs.active), 
      this.helper.cb && this.helper.cb(this);
    }
    hide(t) {
      this.change(!0, t);
    }
    show(t) {
      this.change(!1, t);
    }
  }, w = class {
    cb;
  }, _ = {
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
  }, y = class {
    static instances=[];
    config;
    emitter;
    tabs=[];
    helper;
    plugins=[];
    constructor(t) {
      this.emitter = new a(t.on), this.config = {
        el: t.el,
        $el: r(t.el),
        mutation: t.mutation || !1,
        isMutable: !!t.mutation,
        current: 0,
        pendingTab: void 0,
        classes: t.classes ? h(_, t.classes) : _
      }, this.helper = new w, this.config.isMutable && this.config.el.classList.add("x-tabs--" + this.config.mutation);
      const e = this.config.$el.get(".x-tabs__tabs");
      let s, i = e.get(".x-tabs__tab"), n = r();
      for (const t of i) t.parentElement === e[0] && n.push(t);
      for (let t = 0, e = n.length; t < e; t++) n[t].classList.contains("x-tabs__tab--active") && (s = t);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t], i = new E(this, {
          el: e,
          index: t,
          current: t === s,
          helper: this.helper
        });
        this.tabs.push(i);
      }
      if (this.config.current = s || 0, y.instances.push(this), t.plugins && Array.isArray(t.plugins)) for (const e of t.plugins) e instanceof l ? this.plugins.push(new e(this)) : (o = e) && "object" == typeof o && null !== o && this.plugins.push(new e.ctor(this, e.config));
      var o;
      this.emitter.emit("init", this, this.config.current);
    }
    goTo(t, e) {
      if (!this.tabs[t]) return !1;
      const s = this.config.current;
      return this.emitter.emit("beforeChange", this, s, t), this.config.current = t, e && e.force ? (this.config.pendingTab = void 0, 
      this.helper.cb = () => {
        this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, s, t), 
        this.tabs[t].show({
          force: !0
        });
      }, this.tabs[s].hide({
        force: !0
      }), !0) : (this.config.isMutable ? this.config.pendingTab ? this.helper.cb = e => {
        e.config.current ? (this.helper.cb = e => {
          this.helper.cb = () => {
            this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, s, t);
          }, this.tabs[t].show();
        }, e.hide()) : (this.helper.cb = () => {
          this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, s, t);
        }, this.tabs[t].show());
      } : (this.config.pendingTab = this.tabs[s], this.helper.cb = e => {
        this.helper.cb = () => {
          this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, s, t);
        }, this.tabs[t].show();
      }, this.tabs[s].hide()) : (this.helper.cb = () => {
        this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, s, t), 
        this.tabs[t].show();
      }, this.tabs[s].hide()), !0);
    }
    prev() {
      return this.goTo(this.config.current - 1);
    }
    next() {
      return this.goTo(this.config.current + 1);
    }
  }, L = class {
    plugin;
    config;
    anim;
    constructor(t, e) {
      this.plugin = t, this.config = {
        el: e.el,
        index: e.index,
        pending: !1,
        current: e.index === this.plugin.tabs.config.current
      }, console.log(this.config.el), 
      // this.click = this.click.bind(this);
      this.config.el.addEventListener("click", (() => {})), this.anim = new p({
        el: this.config.el,
        allow: [ "transitionend", "animationend" ]
      }), this.config.el;
    }
    click() {
      c({
        animInst: this.anim,
        clsFrom: "x-nav--t-activate-from",
        clsActive: "x-nav--t-activate-active",
        clsTo: "x-nav--t-activate-to"
      }), this.plugin.tabs.goTo(this.config.index);
    }
    activate() {
      c({
        animInst: this.anim,
        clsFrom: "x-nav--t-activate-from",
        clsActive: "x-nav--t-activate-active",
        clsTo: "x-nav--t-activate-to"
      });
    }
    deactivate() {}
  }, A = new y({
    el: r(".x-tabs")[0],
    mutation: "transition",
    on: {
      init(t, e) {
        console.log("init", e);
      },
      beforeChange(t, e, s) {
        console.log("on beforeChange", e, s);
      },
      afterChange(t, e, s) {
        console.log("on afterChange", e, s);
      }
    },
    plugins: [ {
      ctor: class extends l {
        items=[];
        helper;
        // mutation:   MutationType;
        classes;
        constructor(t) {
          super(t);
          const e = this.tabs.config.classes;
          e.navs = h({
            wrapper: "x-tabs__navs",
            nav: "x-tabs__nav",
            active: "x-tabs__nav--active",
            transition: {
              show: "x-tabs__nav--show",
              hide: "x-tabs__nav--hide"
            },
            animation: {
              show: "x-tabs__nav--show",
              hide: "x-tabs__nav--hide"
            }
          }, e.navs || {}), this.classes = e.navs, t.config.navigation, 
          // this.mutation = cfgFromTabs ? cfgFromTabs.mutation ?
          this.helper = new w;
          // this.tabs.config.$el.get<HTMLElement>(this.classes.wrapper);
          const s = r(this.tabs.config.$el.get("." + this.classes.wrapper)[0]).get("." + this.classes.nav);
          for (let t = 0, e = s.length; t < e; t++) this.items.push(new L(this, {
            el: s[t],
            index: t
          }));
        }
        click(t) {
          if (!this.items[t]) return !1;
          const e = this.tabs.config.current;
          return this.tabs.emitter.emit("beforeNavClick", this, e, t), !0;
        }
      },
      config: {
        el: r(".x-tabs__navs")[0]
      }
    } ],
    classes: {}
  });
  r(".btn-prev").addEventListener("click", (() => A.prev())), r(".btn-next").addEventListener("click", (() => A.next())), 
  window.tabs = A, 
  // console.log(tabs);
  console.log("entry result", A);
}();
//# sourceMappingURL=tabs.dev.js.map
