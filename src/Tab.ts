import {
  TabCtor     as I_TabCtor,
  Tab         as I_Tab,
  TabCtorCfg  as I_TabCtorCfg,
  TabCfg      as I_TabCfg,
} from "./types/Tab";
import {
  Tabs as I_Tabs
} from "./types/Tabs";
import { Helper as I_Helper } from "./types/Helper";
import _, { nextTick } from "@xaro/micro-dom";
import CSSClassAnimations, { DOMEventsKeys, EmitterEventsKeys as CSSAnimationEventsKey } from "@xaro/css-class-animations";
import { MutationType } from "./types/types";
import { animate } from "./helpers";

const animEventsPostfix = {
  animation:  [ 'start', 'cancel', 'end', 'iteration' ],
  transition: [ 'start', 'cancel', 'end', 'run' ]
}

const Tab: I_TabCtor = class implements I_Tab {
  tabs:     I_Tabs;

  config:   I_TabCfg;

  pending:  boolean = false;

  anim?:    CSSClassAnimations;

  helper:   I_Helper;

  constructor(tabs: I_Tabs, config: I_TabCtorCfg) {
    this.tabs   = tabs;
    this.helper = config.helper;

    this.config = {
      el:       config.el,
      $el:      _<HTMLElement>(config.el),
      index:    config.index,
      current:  config.current,
    }

    const mutation = this.tabs.config.mutation
    if (mutation) {
      this.anim = new CSSClassAnimations({
        el:     this.config.el,
        allow:  animEventsPostfix[mutation].map((item: string) => mutation + item) as DOMEventsKeys[],
      })
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

  change(hide: boolean): void {
    const cls = this.tabs.config.classes;

    if (this.tabs.config.isMutable) {
      const mutation = this.tabs.config.mutation as MutationType;
      const el: HTMLElement = this.config.el;

      this.pending = true;

      if (hide) {
        animate({
          animInst:   this.anim,
          clsFrom:   'x-tab--t-hide-from',
          clsActive: 'x-tab--t-hide-active',
          clsTo:     'x-tab--t-hide-to',
        }, () => {
          el.classList.remove('x-tabs__tab--active');
          this.config.current = false;
          this.pending = false;
          nextTick(() => this.helper.cb && this.helper.cb(this));
        });
      } else {
        el.classList.add('x-tabs__tab--active');
        animate({
          animInst:   this.anim,
          clsFrom:   'x-tab--t-show-from',
          clsActive: 'x-tab--t-show-active',
          clsTo:     'x-tab--t-show-to',
        }, () => {
          this.config.current = true;
          this.pending = false;
          nextTick(() => this.helper.cb && this.helper.cb(this));
        });
      }
    } else {
      this.config.current = !hide;
      this.config.$el[(hide ? 'remove' : 'add') + 'Class'](cls.tabs.active);
      this.helper.cb && this.helper.cb(this);
    }
  }

  hide(): void {
    this.change(true);
  }

  show(): void {
    this.change(false);
  }
}

export default Tab;