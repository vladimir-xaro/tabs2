import t from "@xaro/event-emitter";

import i, { nextTick as s } from "@xaro/micro-dom";

import e from "@xaro/deepmerge";

import a from "@xaro/css-class-animations";

function n({animInst: t, clsFrom: // CSSClassAnimations
i, clsActive: // string
e, clsTo: // string
a}, n) {
    t.els.addClass(i), s([ () => t.els.addClass(e), 10 ], [ () => t.els.removeClass(i), 10 ], [ () => {
        t.emitter.once("end", (() => {
            t.els.removeClass(a, e), n && n();
        })), t.els.addClass(a);
    }, 10 ]);
}

const h = class {
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
        const i = this.tabs.config.classes;
        if (this.tabs.config.isMutable) {
            this.tabs.config.mutation;
            const i = this.config.el;
            this.pending = !0, t ? n({
                animInst: this.anim,
                clsFrom: "x-tab--t-hide-from",
                clsActive: "x-tab--t-hide-active",
                clsTo: "x-tab--t-hide-to"
            }, (() => {
                i.classList.remove("x-tabs__tab--active"), this.config.current = !1, this.pending = !1, 
                s((() => this.helper.cb && this.helper.cb(this)));
            })) : (i.classList.add("x-tabs__tab--active"), n({
                animInst: this.anim,
                clsFrom: "x-tab--t-show-from",
                clsActive: "x-tab--t-show-active",
                clsTo: "x-tab--t-show-to"
            }, (() => {
                this.config.current = !0, this.pending = !1, s((() => this.helper.cb && this.helper.cb(this)));
            })));
        } else this.config.current = !t, this.config.$el[(t ? "remove" : "add") + "Class"](i.tabs.active), 
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
        let n, o = a.get(".x-tabs__tab"), b = i();
        for (const t of o) t.parentElement === a[0] && b.push(t);
        for (let t = 0, i = b.length; t < i; t++) b[t].classList.contains("x-tabs__tab--active") && (n = t);
        for (let t = 0, i = b.length; t < i; t++) {
            const i = b[t], s = new c(this, {
                el: i,
                index: t,
                current: t === n,
                helper: this.helper
            });
            this.tabs.push(s);
        }
        if (this.config.current = n || 0, l.instances.push(this), s.plugins && Array.isArray(s.plugins)) for (const t of s.plugins) t instanceof h ? this.plugins.push(new t(this)) : (f = t) && "object" == typeof f && null !== f && this.plugins.push(new t.ctor(this, t.config));
        var f;
        this.emitter.emit("init", this, this.config.current);
    }
    goTo(t) {
        if (!this.tabs[t]) return !1;
        const i = this.config.current;
        return this.emitter.emit("beforeChange", this, i, t), this.config.current = t, this.config.isMutable ? this.config.pendingTab ? this.helper.cb = s => {
            s.config.current ? (this.helper.cb = s => {
                this.helper.cb = () => {
                    this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, i, t);
                }, this.tabs[t].show();
            }, s.hide()) : (this.helper.cb = () => {
                this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, i, t);
            }, this.tabs[t].show());
        } : (this.config.pendingTab = this.tabs[i], this.helper.cb = s => {
            this.helper.cb = () => {
                this.config.pendingTab = void 0, this.helper.cb = void 0, this.emitter.emit("afterChange", this, i, t);
            }, this.tabs[t].show();
        }, this.tabs[i].hide()) : (this.helper.cb = () => {
            this.helper.cb = void 0, this.helper.cb = () => this.emitter.emit("afterChange", this, i, t), 
            this.tabs[t].show();
        }, this.tabs[i].hide()), !0;
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
