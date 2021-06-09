import t from "@xaro/event-emitter";

import i, { nextTick as s } from "@xaro/micro-dom";

import e from "@xaro/deepmerge";

import a from "@xaro/css-class-animations";

function h({animInst: t, clsFrom: // CSSClassAnimations
i, clsActive: // string
e, clsTo: // string
a}, h) {
    t.els.addClass(i), s([ () => t.els.addClass(e), 10 ], [ () => t.els.removeClass(i), 10 ], [ () => {
        t.emitter.once("end", (() => {
            t.els.removeClass(a, e), h && h();
        })), t.els.addClass(a);
    }, 10 ]);
}

const n = class {
    tabs;
    constructor(t) {
        this.tabs = t;
    }
}, o = {
    animation: [ "start", "cancel", "end", "iteration" ],
    transition: [ "start", "cancel", "end", "run" ]
}, c = class {
    tabs;
    config;
    pending=!1;
    anim;
    helper;
    constructor(t, s) {
        this.tabs = t, this.helper = s.helper, this.config = {
            el: s.el,
            $el: i(s.el),
            index: s.index,
            current: s.current
        };
        const e = this.tabs.config.mutation;
        e && (this.anim = new a({
            el: this.config.el,
            allow: o[e].map((t => e + t))
        }));
    }
    change(t, i) {
        const e = this.tabs.config.classes;
        if (i && i.force) return this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](e.tabs.active), 
        this.config.$el.removeClass("x-tab--t-hide-from", "x-tab--t-hide-active", "x-tab--t-hide-to", "x-tab--t-show-from", "x-tab--t-show-active", "x-tab--t-show-to"), 
        void (this.helper.cb && this.helper.cb(this));
        if (this.tabs.config.isMutable) {
            this.tabs.config.mutation;
            const i = this.config.el;
            this.pending = !0, t ? h({
                animInst: this.anim,
                clsFrom: "x-tab--t-hide-from",
                clsActive: "x-tab--t-hide-active",
                clsTo: "x-tab--t-hide-to"
            }, (() => {
                i.classList.remove("x-tabs__tab--active"), this.config.current = !1, this.pending = !1, 
                s((() => this.helper.cb && this.helper.cb(this)));
            })) : (i.classList.add("x-tabs__tab--active"), h({
                animInst: this.anim,
                clsFrom: "x-tab--t-show-from",
                clsActive: "x-tab--t-show-active",
                clsTo: "x-tab--t-show-to"
            }, (() => {
                this.config.current = !0, this.pending = !1, s((() => this.helper.cb && this.helper.cb(this)));
            })));
        } else this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](e.tabs.active), 
        this.helper.cb && this.helper.cb(this);
    }
    hide(t) {
        this.change(!0, t);
    }
    show(t) {
        this.change(!1, t);
    }
}, r = {
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
}, l = class {
    static instances=[];
    config;
    emitter;
    tabs=[];
    helper;
    plugins=[];
    constructor(s) {
        this.emitter = new t(s.on), this.config = {
            el: s.el,
            $el: i(s.el),
            mutation: s.mutation || !1,
            isMutable: !!s.mutation,
            current: 0,
            pendingTab: void 0,
            classes: s.classes ? e(r, s.classes) : r
        }, this.helper = new class {
            cb;
        }, this.config.isMutable && this.config.el.classList.add("x-tabs--" + this.config.mutation);
        const a = this.config.$el.get(".x-tabs__tabs");
        let h, o = a.get(".x-tabs__tab"), b = i();
        for (const t of o) t.parentElement === a[0] && b.push(t);
        for (let t = 0, i = b.length; t < i; t++) b[t].classList.contains("x-tabs__tab--active") && (h = t);
        for (let t = 0, i = b.length; t < i; t++) {
            const i = b[t], s = new c(this, {
                el: i,
                index: t,
                current: t === h,
                helper: this.helper
            });
            this.tabs.push(s);
        }
        if (this.config.current = h || 0, l.instances.push(this), s.plugins && Array.isArray(s.plugins)) for (const t of s.plugins) t instanceof n ? this.plugins.push(new t(this)) : (f = t) && "object" == typeof f && null !== f && this.plugins.push(new t.ctor(this, t.config));
        var f;
        this.emitter.emit("init", this, this.config.current);
    }
    goTo(t, i) {
        if (!this.tabs[t]) return !1;
        const s = this.config.current;
        return this.emitter.emit("beforeChange", this, s, t), this.config.current = t, i && i.force ? (this.config.pendingTab = void 0, 
        this.helper.cb = () => {
            this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, s, t), 
            this.tabs[t].show({
                force: !0
            });
        }, this.tabs[s].hide({
            force: !0
        }), !0) : (this.config.isMutable ? this.config.pendingTab ? this.helper.cb = i => {
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
        }, this.tabs[s].hide()), !0);
    }
    prev() {
        return this.goTo(this.config.current - 1);
    }
    next() {
        return this.goTo(this.config.current + 1);
    }
};

export default l;
//# sourceMappingURL=tabs.es.js.map
