import t from "@xaro/event-emitter";

import s, { nextTick as i } from "@xaro/micro-dom";

import e from "@xaro/deepmerge";

import a from "@xaro/css-class-animations";

const n = class {
    tabs;
    constructor(t) {
        this.tabs = t;
    }
}, h = {
    animation: [ "start", "cancel", "end", "iteration" ],
    transition: [ "start", "cancel", "end", "run" ]
}, c = class {
    tabs;
    config;
    pending=!1;
    anim;
    helper;
    constructor(t, i) {
        this.tabs = t, this.helper = i.helper, this.config = {
            el: i.el,
            $el: s(i.el),
            index: i.index,
            current: i.current
        };
        const e = this.tabs.config.mutation;
        e && (this.anim = new a({
            el: this.config.el,
            allow: h[e].map((t => e + t))
        }));
    }
    _worked__change(t) {
        const s = this.tabs.config.classes;
        if (this.tabs.config.isMutable) {
            const e = this.tabs.config.mutation;
            this.pending = !0, t ? (this.anim.emitter.once("end", (() => {
                this.config.current = !1, this.config.$el.removeClass(s.tabs.active, s.tabs[e].show, s.tabs[e].hide), 
                this.pending = !1, this.helper.cb && this.helper.cb(this);
            })), this.config.$el.addClass(s.tabs[e].hide)) : (this.anim.emitter.once("end", (() => {
                this.config.current = !0, this.pending = !1, this.helper.cb && this.helper.cb(this);
            })), this.config.$el.addClass(s.tabs.active), i((() => {
                this.config.$el.addClass(s.tabs[e].show);
            })));
        } else this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](s.tabs.active), 
        this.helper.cb && this.helper.cb(this);
    }
    change(t) {
        const s = this.tabs.config.classes;
        if (this.tabs.config.isMutable) {
            this.tabs.config.mutation;
            const s = this.config.el;
            this.pending = !0, t ? (s.classList.add("x-tab--trans-hide-from"), i((() => s.classList.add("x-tab--trans-hide-active")), (() => s.classList.remove("x-tab--trans-hide-from")), (() => {
                this.anim.emitter.once("end", (() => {
                    this.config.current = !1, s.classList.remove("x-tab--trans-hide-to"), this.pending = !1, 
                    s.classList.remove("x-tab--trans-hide-active", "x-tabs__tab--active"), i((() => this.helper.cb && this.helper.cb(this)));
                })), s.classList.add("x-tab--trans-hide-to");
            }))) : (s.classList.add("x-tabs__tab--active"), i((() => s.classList.add("x-tab--trans-show-from")), [ () => s.classList.add("x-tab--trans-show-active"), 50 ], (() => s.classList.remove("x-tab--trans-show-from")), (() => {
                this.anim.emitter.once("end", (() => {
                    this.config.current = !0, s.classList.remove("x-tab--trans-show-to"), this.pending = !1, 
                    s.classList.remove("x-tab--trans-show-active"), i((() => this.helper.cb && this.helper.cb(this)));
                })), s.classList.add("x-tab--trans-show-to");
            })));
        } else this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](s.tabs.active), 
        this.helper.cb && this.helper.cb(this);
    }
    hide() {
        this.change(!0);
    }
    show() {
        this.change(!1);
    }
}, r = {
    transition: "x-tabs--transition",
    animation: "x-tabs--animation",
    tabs: {
        wrapper: "x-tabs__tabs",
        tab: "x-tabs__tab",
        active: "x-tabs__tab--active",
        transition: {
            show: "x-tabs__tab--show",
            hide: "x-tabs__tab--hide"
        },
        animation: {
            show: "x-tabs__tab--show",
            hide: "x-tabs__tab--hide"
        }
    }
}, o = class {
    static instances=[];
    config;
    emitter;
    tabs=[];
    helper;
    plugins=[];
    constructor(i) {
        this.emitter = new t(i.on), this.config = {
            el: i.el,
            $el: s(i.el),
            mutation: i.mutation || !1,
            isMutable: !!i.mutation,
            current: 0,
            pendingTab: void 0,
            classes: i.classes ? e(r, i.classes) : r
        }, this.helper = new class {
            cb;
        }, this.config.isMutable && this.config.el.classList.add("x-tabs--" + this.config.mutation);
        const a = s(".x-tabs__tabs").get(".x-tabs__tab");
        let h;
        for (let t = 0, s = a.length; t < s; t++) a[t].classList.contains("x-tabs__tab--active") && (h = t);
        for (let t = 0, s = a.length; t < s; t++) {
            const s = a[t], i = new c(this, {
                el: s,
                index: t,
                current: t === h,
                helper: this.helper
            });
            this.tabs.push(i);
        }
        if (this.config.current = h || 0, o.instances.push(this), i.plugins && Array.isArray(i.plugins)) for (const t of i.plugins) t instanceof n ? this.plugins.push(new t(this)) : (b = t) && "object" == typeof b && null !== b && this.plugins.push(new t.ctor(this, t.config));
        var b;
        // export const test = (tab: I_Tab, hide: boolean) => {
        //   const cls = tab.tabs.config.classes;
        //   if (tab.tabs.config.isMutable) {
        //     const mutation = tab.tabs.config.mutation as MutationType;
        //     tab.pending = true;
        //     if (hide) {
        //       tab.anim!.emitter.once('end', () => {
        //         tab.config.current = false;
        //         tab.config.$el.removeClass(cls.tabs.active, cls[mutation].show, cls[mutation].hide);
        //         tab.pending = false;
        //         tab.helper.cb && tab.helper.cb(tab);
        //       });
        //       tab.config.$el.addClass(cls[mutation].hide);
        //     } else {
        //       tab.anim!.emitter.once('end', () => {
        //         tab.config.current = true;
        //         tab.pending = false;
        //         tab.helper.cb && tab.helper.cb(tab);
        //       })
        //       tab.config.$el.addClass(cls.tabs.active);
        //       nextTick(() => {
        //         tab.config.$el.addClass(cls[mutation].show);
        //       })
        //     }
        //   } else {
        //     tab.config.current = !hide;
        //     tab.config.$el[(hide ? 'remove' : 'add') + 'Class'](cls.tabs.active);
        //     tab.helper.cb && tab.helper.cb(tab);
        //   }
        // }
                this.emitter.emit("init", this, this.config.current);
    }
    goTo(t) {
        if (!this.tabs[t]) return !1;
        const s = this.config.current;
        return this.emitter.emit("beforeChange", this, s, t), this.config.current = t, this.config.isMutable ? this.config.pendingTab ? this.helper.cb = i => {
            i.config.current ? (this.helper.cb = i => {
                this.helper.cb = () => {
                    this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, s, t);
                }, this.tabs[t].show();
            }, i.hide()) : (this.helper.cb = () => {
                this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, s, t);
            }, this.tabs[t].show());
        } : (this.config.pendingTab = this.tabs[s], this.helper.cb = i => {
            this.helper.cb = () => {
                this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, s, t);
            }, this.tabs[t].show();
        }, this.tabs[s].hide()) : (this.helper.cb = () => {
            this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, s, t), 
            this.tabs[t].show();
        }, this.tabs[s].hide()), !0;
    }
    prev() {
        return this.goTo(this.config.current - 1);
    }
    next() {
        return this.goTo(this.config.current + 1);
    }
};

export default o;
//# sourceMappingURL=tabs.es.js.map
