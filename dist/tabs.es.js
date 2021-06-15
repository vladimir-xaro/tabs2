import EventEmitter from "@xaro/event-emitter";

import _, { nextTick } from "@xaro/micro-dom";

import deepmerge from "@xaro/deepmerge";

import CSSClassAnimations from "@xaro/css-class-animations";

function animate({animInst: animInst, clsFrom: // CSSClassAnimations
clsFrom, clsActive: // string
clsActive, clsTo: // string
clsTo}, afterEnd) {
  animInst.els.addClass(clsFrom), nextTick([ () => animInst.els.addClass(clsActive), 10 ], [ () => animInst.els.removeClass(clsFrom), 10 ], [ () => {
    animInst.emitter.once("end", (() => {
      animInst.els.removeClass(clsTo, clsActive), afterEnd && afterEnd();
    })), animInst.els.addClass(clsTo);
  }, 10 ]);
}

const Plugin = class {
  tabs;
  constructor(tabs) {
    this.tabs = tabs;
  }
}, animEventsPostfix = {
  animation: [ "start", "cancel", "end", "iteration" ],
  transition: [ "start", "cancel", "end", "run" ]
}, Tab = class {
  tabs;
  config;
  pending=!1;
  anim;
  helper;
  constructor(tabs, config) {
    this.tabs = tabs, this.helper = config.helper, this.config = {
      el: config.el,
      $el: _(config.el),
      index: config.index,
      current: config.current
    };
    const mutation = this.tabs.config.mutation;
    mutation && (this.anim = new CSSClassAnimations({
      el: this.config.el,
      allow: animEventsPostfix[mutation].map((item => mutation + item))
    }));
  }
  change(hide, config) {
    const cls = this.tabs.config.classes;
    if (config && config.force) return this.config.current = !hide, this.config.$el[(hide ? "remove" : "add") + "Class"](cls.tabs.active), 
    this.config.$el.removeClass("x-tab--t-hide-from", "x-tab--t-hide-active", "x-tab--t-hide-to", "x-tab--t-show-from", "x-tab--t-show-active", "x-tab--t-show-to"), 
    void (this.helper.cb && this.helper.cb(this));
    if (this.tabs.config.isMutable) {
      this.tabs.config.mutation;
      const el = this.config.el;
      this.pending = !0, hide ? animate({
        animInst: this.anim,
        clsFrom: "x-tab--t-hide-from",
        clsActive: "x-tab--t-hide-active",
        clsTo: "x-tab--t-hide-to"
      }, (() => {
        el.classList.remove("x-tabs__tab--active"), this.config.current = !1, this.pending = !1, 
        nextTick((() => this.helper.cb && this.helper.cb(this)));
      })) : (el.classList.add("x-tabs__tab--active"), animate({
        animInst: this.anim,
        clsFrom: "x-tab--t-show-from",
        clsActive: "x-tab--t-show-active",
        clsTo: "x-tab--t-show-to"
      }, (() => {
        this.config.current = !0, this.pending = !1, nextTick((() => this.helper.cb && this.helper.cb(this)));
      })));
    } else this.config.current = !hide, this.config.$el[(hide ? "remove" : "add") + "Class"](cls.tabs.active), 
    this.helper.cb && this.helper.cb(this);
  }
  hide(config) {
    this.change(!0, config);
  }
  show(config) {
    this.change(!1, config);
  }
}, defaultClasses = {
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
}, Tabs = class {
  static instances=[];
  config;
  emitter;
  tabs=[];
  helper;
  plugins=[];
  constructor(config) {
    this.emitter = new EventEmitter(config.on), this.config = {
      el: config.el,
      $el: _(config.el),
      mutation: config.mutation || !1,
      isMutable: !!config.mutation,
      current: 0,
      pendingTab: void 0,
      classes: config.classes ? deepmerge(defaultClasses, config.classes) : defaultClasses
    }, this.helper = new class {
      cb;
    }, this.config.isMutable && this.config.el.classList.add("x-tabs--" + this.config.mutation);
    const $tabsWrap = this.config.$el.get(".x-tabs__tabs");
    let currentIndex, _$tabs = $tabsWrap.get(".x-tabs__tab"), $tabs = _();
    for (const el of _$tabs) el.parentElement === $tabsWrap[0] && $tabs.push(el);
    for (let i = 0, l = $tabs.length; i < l; i++) $tabs[i].classList.contains("x-tabs__tab--active") && (currentIndex = i);
    for (let i = 0, l = $tabs.length; i < l; i++) {
      const el = $tabs[i], tab = new Tab(this, {
        el: el,
        index: i,
        current: i === currentIndex,
        helper: this.helper
      });
      this.tabs.push(tab);
    }
    if (this.config.current = currentIndex || 0, Tabs.instances.push(this), config.plugins && Array.isArray(config.plugins)) for (const plugin of config.plugins) plugin instanceof Plugin ? this.plugins.push(new plugin(this)) : (el = plugin) && "object" == typeof el && null !== el && this.plugins.push(new plugin.ctor(this, plugin.config));
    var el;
    this.emitter.emit("init", this, this.config.current);
  }
  goTo(index, config) {
    if (!this.tabs[index]) return !1;
    const current = this.config.current;
    return this.emitter.emit("beforeChange", this, current, index), this.config.current = index, 
    config && config.force ? (this.config.pendingTab = void 0, this.helper.cb = () => {
      this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, current, index), 
      this.tabs[index].show({
        force: !0
      });
    }, this.tabs[current].hide({
      force: !0
    }), !0) : (this.config.isMutable ? this.config.pendingTab ? this.helper.cb = tab => {
      tab.config.current ? (this.helper.cb = tab => {
        this.helper.cb = () => {
          this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, current, index);
        }, this.tabs[index].show();
      }, tab.hide()) : (this.helper.cb = () => {
        this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, current, index);
      }, this.tabs[index].show());
    } : (this.config.pendingTab = this.tabs[current], this.helper.cb = tab => {
      this.helper.cb = () => {
        this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, current, index);
      }, this.tabs[index].show();
    }, this.tabs[current].hide()) : (this.helper.cb = () => {
      this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, current, index), 
      this.tabs[index].show();
    }, this.tabs[current].hide()), !0);
  }
  prev() {
    return this.goTo(this.config.current - 1);
  }
  next() {
    return this.goTo(this.config.current + 1);
  }
};

export default Tabs;
//# sourceMappingURL=tabs.es.js.map
